/**
 * Multi-channel notification dispatcher — reads manifest.json and sends a message
 * with links to the latest reports. Each channel is opt-in via env vars.
 *
 * Supported channels:
 *   Telegram  — TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
 *   Slack     — SLACK_WEBHOOK_URL
 *   Discord   — DISCORD_WEBHOOK_URL
 * Optional:
 *   PAGES_URL — GitHub Pages base URL (defaults to the public deployment)
 */

import fs from "node:fs";

const PAGES_URL_DEFAULT = "https://duanyytop.github.io/agents-radar";

const ZH_LABELS: Record<string, string> = {
  "ai-cli": "AI CLI 工具",
  "ai-agents": "AI Agents 生态",
  "ai-mcp": "MCP 生态",
  "ai-web": "官网动态",
  "ai-trending": "GitHub 趋势",
  "ai-hn": "HN 社区动态",
  "ai-weekly": "AI 工具生态周报",
  "ai-monthly": "AI 工具生态月报",
};

const EN_LABELS: Record<string, string> = {
  "ai-cli": "AI CLI Tools",
  "ai-agents": "AI Agents Ecosystem",
  "ai-mcp": "MCP Ecosystem",
  "ai-web": "Official Updates",
  "ai-trending": "GitHub Trends",
  "ai-hn": "HN Community",
  "ai-weekly": "AI Tools Weekly",
  "ai-monthly": "AI Tools Monthly",
};

const REPORT_EMOJIS: Record<string, string> = {
  "ai-cli": "🔧",
  "ai-agents": "🦞",
  "ai-mcp": "🔌",
  "ai-web": "🌐",
  "ai-trending": "📈",
  "ai-hn": "📰",
  "ai-weekly": "📅",
  "ai-monthly": "📆",
};

// ---------------------------------------------------------------------------
// Telegram
// ---------------------------------------------------------------------------

async function sendTelegram(text: string): Promise<void> {
  const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
  const CHAT_ID = process.env["TELEGRAM_CHAT_ID"] || "@agents_radar";
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API ${res.status}: ${body}`);
  }
}

// ---------------------------------------------------------------------------
// Slack
// ---------------------------------------------------------------------------

async function sendSlack(webhookUrl: string, text: string): Promise<void> {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Slack webhook ${res.status}: ${body}`);
  }
}

// ---------------------------------------------------------------------------
// Discord
// ---------------------------------------------------------------------------

async function sendDiscord(
  webhookUrl: string,
  title: string,
  description: string,
  url: string,
): Promise<void> {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [
        {
          title,
          description,
          url,
          color: 0xe8a03d,
          footer: { text: "agents-radar" },
        },
      ],
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Discord webhook ${res.status}: ${body}`);
  }
}

// ---------------------------------------------------------------------------
// Message builders
// ---------------------------------------------------------------------------

export function buildMessage(date: string, reports: string[], pagesUrl?: string): string {
  const PAGES_URL = (pagesUrl ?? process.env["PAGES_URL"] ?? PAGES_URL_DEFAULT).replace(/\/$/, "");
  const baseReports = reports.filter((r) => !r.endsWith("-en"));
  const isWeekly = baseReports.includes("ai-weekly");
  const isMonthly = baseReports.includes("ai-monthly");

  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " 月报" : isWeekly ? " 周报" : "";
  const lines: string[] = [`${icon} <b>agents-radar${suffix} · ${date}</b>\n`];

  // Daily reports first, then rollups
  const ordered = [
    ...baseReports.filter((r) => !r.includes("weekly") && !r.includes("monthly")),
    ...baseReports.filter((r) => r.includes("weekly") || r.includes("monthly")),
  ];

  for (const r of ordered) {
    const zhLabel = ZH_LABELS[r] ?? r;
    const zhUrl = `${PAGES_URL}/#${date}/${r}`;
    const enKey = `${r}-en`;
    if (reports.includes(enKey)) {
      const enLabel = EN_LABELS[r] ?? "EN";
      const enUrl = `${PAGES_URL}/#${date}/${enKey}`;
      lines.push(`• <a href="${zhUrl}">${zhLabel}</a>  ·  <a href="${enUrl}">${enLabel}</a>`);
    } else {
      lines.push(`• <a href="${zhUrl}">${zhLabel}</a>`);
    }
  }

  lines.push(`\n<a href="${PAGES_URL}">🌐 Web UI</a>  ·  <a href="${PAGES_URL}/feed.xml">⊕ RSS</a>`);
  return lines.join("\n");
}

function buildSlackMessage(date: string, reports: string[], pagesUrl: string): string {
  const baseReports = reports.filter((r) => !r.endsWith("-en"));
  const isWeekly = baseReports.includes("ai-weekly");
  const isMonthly = baseReports.includes("ai-monthly");

  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " Monthly" : isWeekly ? " Weekly" : "";
  const lines: string[] = [`${icon} *agents-radar${suffix} · ${date}*\n`];

  const ordered = [
    ...baseReports.filter((r) => !r.includes("weekly") && !r.includes("monthly")),
    ...baseReports.filter((r) => r.includes("weekly") || r.includes("monthly")),
  ];

  for (const r of ordered) {
    const emoji = REPORT_EMOJIS[r] ?? "📄";
    const label = EN_LABELS[r] ?? r;
    const url = `${pagesUrl}/#${date}/${r}`;
    lines.push(`${emoji} <${url}|${label}>`);
  }

  lines.push(`\n<${pagesUrl}|🌐 Web UI>  ·  <${pagesUrl}/feed.xml|⊕ RSS>`);
  return lines.join("\n");
}

function buildDiscordDescription(date: string, reports: string[], pagesUrl: string): string {
  const baseReports = reports.filter((r) => !r.endsWith("-en"));
  const ordered = [
    ...baseReports.filter((r) => !r.includes("weekly") && !r.includes("monthly")),
    ...baseReports.filter((r) => r.includes("weekly") || r.includes("monthly")),
  ];

  return ordered
    .map((r) => {
      const emoji = REPORT_EMOJIS[r] ?? "📄";
      const label = EN_LABELS[r] ?? r;
      const url = `${pagesUrl}/#${date}/${r}`;
      return `${emoji} [${label}](${url})`;
    })
    .join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  if (!fs.existsSync("manifest.json")) {
    console.log("[notify] manifest.json not found — skipping.");
    return;
  }

  const { dates } = JSON.parse(fs.readFileSync("manifest.json", "utf-8")) as {
    dates: { date: string; reports: string[] }[];
  };

  const latest = dates?.[0];
  if (!latest) {
    console.log("[notify] manifest is empty — skipping.");
    return;
  }

  const { date, reports } = latest;
  const PAGES_URL = (process.env["PAGES_URL"] ?? PAGES_URL_DEFAULT).replace(/\/$/, "");
  const tasks: Promise<void>[] = [];

  // Telegram
  const telegramToken = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
  if (telegramToken) {
    const text = buildMessage(date, reports, PAGES_URL);
    console.log(`[notify] Sending Telegram message for ${date}…`);
    tasks.push(sendTelegram(text).catch((e) => console.error("[notify/telegram]", e)));
  }

  // Slack
  const slackUrl = process.env["SLACK_WEBHOOK_URL"] ?? "";
  if (slackUrl) {
    const text = buildSlackMessage(date, reports, PAGES_URL);
    console.log(`[notify] Sending Slack message for ${date}…`);
    tasks.push(sendSlack(slackUrl, text).catch((e) => console.error("[notify/slack]", e)));
  }

  // Discord
  const discordUrl = process.env["DISCORD_WEBHOOK_URL"] ?? "";
  if (discordUrl) {
    const isWeekly = reports.includes("ai-weekly");
    const isMonthly = reports.includes("ai-monthly");
    const suffix = isMonthly ? " Monthly" : isWeekly ? " Weekly" : "";
    const title = `📡 agents-radar${suffix} · ${date}`;
    const description = buildDiscordDescription(date, reports, PAGES_URL);
    console.log(`[notify] Sending Discord message for ${date}…`);
    tasks.push(
      sendDiscord(discordUrl, title, description, PAGES_URL).catch((e) =>
        console.error("[notify/discord]", e),
      ),
    );
  }

  if (tasks.length === 0) {
    console.log("[notify] No notification channels configured — skipping.");
    return;
  }

  await Promise.allSettled(tasks);
  console.log(`[notify] Done! Sent to ${tasks.length} channel(s).`);
}

main().catch((e: unknown) => {
  console.error("[notify]", e instanceof Error ? e.message : e);
  process.exit(1);
});
