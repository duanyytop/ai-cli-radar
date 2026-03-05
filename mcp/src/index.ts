/**
 * agents-radar MCP Server — Cloudflare Worker
 *
 * Exposes agents-radar digest data as MCP tools so any MCP-compatible
 * client (Claude Desktop, OpenClaw, etc.) can query the latest AI ecosystem reports.
 *
 * Tools:
 *   list_reports  — list available dates and report types
 *   get_report    — fetch a specific report by date and type
 *   get_latest    — fetch the most recent report of a given type
 *   search        — keyword search across recent reports
 */

const PAGES_URL = "https://duanyytop.github.io/agents-radar";

const REPORT_LABELS: Record<string, string> = {
  "ai-cli": "AI CLI Tools Digest (ZH)",
  "ai-cli-en": "AI CLI Tools Digest (EN)",
  "ai-agents": "AI Agents Ecosystem (ZH)",
  "ai-agents-en": "AI Agents Ecosystem (EN)",
  "ai-web": "Official AI Content (ZH)",
  "ai-web-en": "Official AI Content (EN)",
  "ai-trending": "GitHub AI Trends (ZH)",
  "ai-trending-en": "GitHub AI Trends (EN)",
  "ai-hn": "Hacker News AI Community (ZH)",
  "ai-hn-en": "Hacker News AI Community (EN)",
  "ai-weekly": "Weekly Rollup (ZH)",
  "ai-weekly-en": "Weekly Rollup (EN)",
  "ai-monthly": "Monthly Rollup (ZH)",
  "ai-monthly-en": "Monthly Rollup (EN)",
};

interface ManifestDate {
  date: string;
  reports: string[];
}

interface Manifest {
  dates: ManifestDate[];
}

// ---------------------------------------------------------------------------
// Data fetchers
// ---------------------------------------------------------------------------

async function fetchManifest(): Promise<Manifest> {
  const res = await fetch(`${PAGES_URL}/manifest.json`, {
    cf: { cacheTtl: 300 }, // cache 5 min in Cloudflare edge
  } as RequestInit);
  if (!res.ok) throw new Error(`Failed to fetch manifest: HTTP ${res.status}`);
  return res.json() as Promise<Manifest>;
}

async function fetchReport(date: string, type: string): Promise<string> {
  const res = await fetch(`${PAGES_URL}/digests/${date}/${type}.md`, {
    cf: { cacheTtl: 3600 },
  } as RequestInit);
  if (!res.ok) throw new Error(`Report not found: ${date}/${type} (HTTP ${res.status})`);
  return res.text();
}

// ---------------------------------------------------------------------------
// Tool handlers
// ---------------------------------------------------------------------------

async function toolListReports(args: Record<string, unknown>): Promise<string> {
  const days = Math.min(Number(args["days"] ?? 7), 30);
  const { dates } = await fetchManifest();
  const slice = dates.slice(0, days);

  const lines = slice.map(({ date, reports }) => {
    const labels = reports.map((r) => `${r} (${REPORT_LABELS[r] ?? r})`).join(", ");
    return `• ${date}: ${labels}`;
  });

  return `Available reports — last ${slice.length} day(s):\n\n${lines.join("\n")}`;
}

async function toolGetReport(args: Record<string, unknown>): Promise<string> {
  const date = String(args["date"] ?? "").trim();
  const type = String(args["type"] ?? "").trim();
  if (!date || !type) throw new Error("Both 'date' and 'type' are required");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("'date' must be in YYYY-MM-DD format");
  return fetchReport(date, type);
}

async function toolGetLatest(args: Record<string, unknown>): Promise<string> {
  const type = String(args["type"] ?? "ai-cli-en").trim();
  const { dates } = await fetchManifest();
  for (const { date, reports } of dates) {
    if (reports.includes(type)) {
      const content = await fetchReport(date, type);
      return `# ${date} — ${REPORT_LABELS[type] ?? type}\n\n${content}`;
    }
  }
  throw new Error(`No report found for type: ${type}`);
}

async function toolSearch(args: Record<string, unknown>): Promise<string> {
  const query = String(args["query"] ?? "").trim().toLowerCase();
  if (!query) throw new Error("'query' is required");
  const days = Math.min(Number(args["days"] ?? 7), 14);

  const { dates } = await fetchManifest();
  const slice = dates.slice(0, days);

  const results: string[] = [];

  await Promise.all(
    slice.map(async ({ date, reports }) => {
      // Skip -en duplicates and rollups to avoid redundant noise
      const targets = reports.filter(
        (r) => !r.endsWith("-en") && !r.includes("weekly") && !r.includes("monthly"),
      );
      await Promise.all(
        targets.map(async (type) => {
          try {
            const content = await fetchReport(date, type);
            if (!content.toLowerCase().includes(query)) return;
            const excerpts = content
              .split("\n")
              .filter((l) => l.toLowerCase().includes(query))
              .slice(0, 3)
              .map((l) => `  > ${l.trim()}`)
              .join("\n");
            results.push(`📄 ${date} / ${type}:\n${excerpts}`);
          } catch {
            // skip unavailable reports
          }
        }),
      );
    }),
  );

  if (results.length === 0) return `No matches for "${query}" in the last ${days} day(s).`;
  return `Found "${query}" in ${results.length} report(s):\n\n${results.join("\n\n")}`;
}

// ---------------------------------------------------------------------------
// MCP JSON-RPC protocol
// ---------------------------------------------------------------------------

const TOOLS = [
  {
    name: "list_reports",
    description:
      "List available digest dates and report types from agents-radar. Returns the last N days of available reports.",
    inputSchema: {
      type: "object",
      properties: {
        days: { type: "number", description: "Number of recent days to list (default: 7, max: 30)" },
      },
    },
  },
  {
    name: "get_report",
    description: "Fetch the full content of a specific agents-radar digest report.",
    inputSchema: {
      type: "object",
      properties: {
        date: { type: "string", description: "Date in YYYY-MM-DD format" },
        type: {
          type: "string",
          description:
            "Report type: ai-cli-en, ai-agents-en, ai-web-en, ai-trending-en, ai-hn-en, ai-weekly-en, ai-monthly-en (drop -en suffix for Chinese versions)",
        },
      },
      required: ["date", "type"],
    },
  },
  {
    name: "get_latest",
    description: "Fetch the most recent available report of a given type.",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          description: "Report type (default: ai-cli-en). Use list_reports to see all available types.",
        },
      },
    },
  },
  {
    name: "search",
    description: "Search for a keyword or phrase across recent agents-radar digest reports.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keyword or phrase to search for" },
        days: { type: "number", description: "Number of recent days to search (default: 7, max: 14)" },
      },
      required: ["query"],
    },
  },
];

interface JsonRpcRequest {
  jsonrpc: string;
  id: unknown;
  method: string;
  params?: unknown;
}

async function handleMcp(body: unknown): Promise<unknown> {
  const req = body as JsonRpcRequest;
  const id = req.id ?? null;

  try {
    switch (req.method) {
      case "initialize":
        return {
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: { tools: {} },
            serverInfo: { name: "agents-radar", version: "1.0.0" },
          },
        };

      case "notifications/initialized":
        return { jsonrpc: "2.0", id, result: {} };

      case "tools/list":
        return { jsonrpc: "2.0", id, result: { tools: TOOLS } };

      case "tools/call": {
        const { name, arguments: args = {} } = req.params as {
          name: string;
          arguments?: Record<string, unknown>;
        };
        let text: string;
        switch (name) {
          case "list_reports":
            text = await toolListReports(args);
            break;
          case "get_report":
            text = await toolGetReport(args);
            break;
          case "get_latest":
            text = await toolGetLatest(args);
            break;
          case "search":
            text = await toolSearch(args);
            break;
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
        return { jsonrpc: "2.0", id, result: { content: [{ type: "text", text }] } };
      }

      default:
        return { jsonrpc: "2.0", id, error: { code: -32601, message: `Method not found: ${req.method}` } };
    }
  } catch (e) {
    return {
      jsonrpc: "2.0",
      id,
      error: { code: -32603, message: e instanceof Error ? e.message : String(e) },
    };
  }
}

// ---------------------------------------------------------------------------
// Worker entry point
// ---------------------------------------------------------------------------

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

    const url = new URL(request.url);

    // Health check
    if (request.method === "GET" && url.pathname === "/") {
      return Response.json(
        { name: "agents-radar-mcp", status: "ok", tools: TOOLS.map((t) => t.name) },
        { headers: CORS },
      );
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: CORS });
    }

    try {
      const body = await request.json();
      const result = await handleMcp(body);
      return Response.json(result, { headers: CORS });
    } catch {
      return Response.json(
        { jsonrpc: "2.0", error: { code: -32700, message: "Parse error" } },
        { status: 400, headers: CORS },
      );
    }
  },
};
