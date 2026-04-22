# OpenClaw Ecosystem Digest 2026-04-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-22 00:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-22

## 1. Today's Overview

OpenClaw shows **very high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with substantial contributor engagement. The 324 open issues against 176 closed suggests a growing backlog that may need triage attention. Release velocity remains steady with the **v2026.4.20** stable release and two preceding betas, focusing on onboarding UX improvements. The PR pipeline is particularly active with 341 open PRs, including several XL-sized features in review. Overall project health appears strong but strained by volume—multiple PRs carry `r: too-many-prs` labels indicating reviewer bandwidth constraints.

---

## 2. Releases

### [v2026.4.20](https://github.com/openclaw/openclaw/releases/tag/v2026.4.20) (Stable)
**Released:** 2026-04-20

| Change | Impact |
|--------|--------|
| **Onboard/wizard security disclaimer restyle** | Single yellow warning banner, section headings, bulleted checklists; note body un-dimmed for better scannability |
| **Loading spinner for initial model catalog load** | Eliminates blank wizard state during setup |

**Preceding betas:** [v2026.4.20-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.20-beta.2), [v2026.4.20-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.20-beta.1) — identical changelog; no breaking changes or migration notes required.

---

## 3. Project Progress

### Merged/Closed PRs (Last 24h)

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#69868](https://github.com/openclaw/openclaw/pull/69868) | gumadeiras | Validate plugin source entries before runtime inference — prevents path escape attacks | **Merged** |
| [#69884](https://github.com/openclaw/openclaw/pull/69884) | Eruditi | Logging subsystem optional chain fix | **Merged** |
| [#69882](https://github.com/openclaw/openclaw/pull/69882) | Eruditi | Minimax M2.7 VLM support | **Merged** |
| [#69883](https://github.com/openclaw/openclaw/pull/69883) | Eruditi | Minimax 529 overloaded failover | **Merged** |
| [#69881](https://github.com/openclaw/openclaw/pull/69881) | Eruditi | Onboard trim TypeError fix | **Merged** |
| [#69869](https://github.com/openclaw/openclaw/pull/69869) | gumadeiras | Keep Discord slash follow-ups ephemeral — privacy fix for `/status` | **Merged** |
| [#45166](https://github.com/openclaw/openclaw/pull/45166) | hugh-agent | `replyToModeByChatType` for Telegram (superseded by #69757) | **Closed** |

### Active Development Areas
- **Telegram channel hardening**: Reply threading, human delay, model picker cache, health probes
- **Minimax provider expansion**: VLM support, failover handling
- **Security hardening**: Plugin path validation, ephemeral Discord responses
- **Diagnostic tooling**: New `openclaw diagnose` AI-powered CLI (#69832)

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | 👍 | Analysis |
|------|----------|----------|-----|----------|
| 1 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 89 | 71 | **Longstanding platform gap** — macOS/iOS/Android have dedicated apps; Linux/Windows users forced to CLI/web. Strong demand for feature parity, especially given enterprise/server deployment patterns. |
| 2 | [#55342 Behavioral reputation for skills](https://github.com/openclaw/openclaw/issues/55342) | 17 | 0 | **Security architecture concern** — cites 341 malicious skills on ClawHub, 13.4% critical issues. Proposes reputation layer beyond identity verification (#49971). Reflects ecosystem maturity pain point. |
| 3 | [#29053 MCP Client native support](https://github.com/openclaw/openclaw/issues/29053) | 17 | 19 | **Standards interoperability** — OpenClaw's tool system is proprietary; MCP is becoming industry standard. High vote count suggests strong user desire to avoid vendor lock-in. |
| 4 | [#35220 Codex streaming server_error no fallback](https://github.com/openclaw/openclaw/issues/35220) | 16 | 0 | **Reliability gap** — variant of #24378, closed but revealing persistent fallback chain fragility. |
| 5 | [#65603 Azure Foundry GPT schema rejection](https://github.com/openclaw/openclaw/issues/65603) | 15 | 0 | **Provider compatibility regression** — 2026.4.11 broke reasoning + tool calling on Azure AI Foundry. |

**Underlying needs:** Platform equity (desktop parity), security ecosystem maturity, standards adoption (MCP), and provider-agnostic resilience dominate user concerns.

---

## 5. Bugs & Stability

| Severity | Issue | Type | Fix PR | Details |
|----------|-------|------|--------|---------|
| 🔴 **Critical** | [#66633](https://github.com/openclaw/openclaw/issues/66633) Cloudflare 403 on openai-codex | Regression | None | Complete provider failure after 2026.4.12→2026.4.14 upgrade; 6 upvotes |
| 🔴 **Critical** | [#68735](https://github.com/openclaw/openclaw/issues/68735) Provider rejects schema/tool payload | Regression | None | github-copilot/gpt-5-mini fails after 2026.4.14→2026.4.15; 5 upvotes |
| 🟡 **High** | [#65603](https://github.com/openclaw/openclaw/issues/65603) Azure Foundry GPT rejection | Regression | None | Reasoning + tool calling broken since 2026.4.11 |
| 🟡 **High** | [#65867](https://github.com/openclaw/openclaw/issues/65867) Gemini `<final>` tags leak | Regression | None | UI pollution, WhatsApp unaffected (suggests webchat-specific) |
| 🟡 **High** | [#68056](https://github.com/openclaw/openclaw/issues/68056) WhatsApp media double-send | Regression | None | 2026.4.15 specific; user-facing duplication |
| 🟡 **High** | [#69064](https://github.com/openclaw/openclaw/issues/69064) Telegram stall silent recovery failure | Crash/hang | None | Auto-recovery incomplete; requires manual restart |
| 🟡 **High** | [#69831](https://github.com/openclaw/openclaw/issues/69831) `grammy` module not found | Regression | None | Fresh install/update failure; 6 upvotes; Telegram extension broken |
| 🟢 **Medium** | [#33185](https://github.com/openclaw/openclaw/issues/33185) imageModel "Unknown model" | Regression | None | Complete imageModel feature breakage |
| 🟢 **Medium** | [#45750](https://github.com/openclaw/openclaw/issues/45750) Gateway RPC/WebSocket failures | Regression | None | Cron operations blocked; status works (partial failure mode) |
| 🟢 **Medium** | [#37591](https://github.com/openclaw/openclaw/issues/37591) macOS missing `system.run.prepare` | Feature gap | None | Blocks `system.run` on macOS/iOS nodes |

**Regression cluster:** 2026.4.11–2026.4.15 release series introduced multiple provider compatibility and transport failures. No fix PRs linked for critical issues yet.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Predicted Priority | Rationale |
|-------|-------|-------------------|-----------|
| [#75 Linux/Windows desktop apps](https://github.com/openclaw/openclaw/issues/75) | 71 | **High** | Longest-running, highest-voted; blocks enterprise adoption |
| [#29053 MCP Client support](https://github.com/openclaw/openclaw/issues/29053) | 19 | **High** | Industry standard momentum; "stale" label may be misleading given MCP adoption curve |
| [#30215 Bedrock Bearer Token auth](https://github.com/openclaw/openclaw/issues/30215) | 4 | Medium | AWS enterprise requirement; currently forces IAM complexity |
| [#36323 Telegram markdown tables](https://github.com/openclaw/openclaw/issues/36323) | 8 | Medium | Platform formatting polish; affects UX significantly |
| [#40256 System prompt prefix caching](https://github.com/openclaw/openclaw/issues/40256) | 0 | Medium | Performance optimization for local models; 8-16x speedup claimed |

**Emerging signals:** 
- **AI-powered diagnostics** (#69832 `openclaw diagnose`) suggests operational maturity focus
- **Autofix pipeline** (#68936) indicates contributor tooling investment
- **Memory-wiki bridge** issues (#65722, #68371) reveal knowledge management as active development area

---

## 7. User Feedback Summary

### Pain Points (with evidence)

| Theme | Examples | Severity |
|-------|----------|----------|
| **Upgrade fragility** | #66633, #65603, #68735, #68056 | Severe — multiple regressions in 2-week window |
| **Platform inequality** | #75, #17890 (macOS PATH), #37591 | Chronic — desktop experience fragmented |
| **Provider lock-in / compatibility** | #29053 (MCP), #30215 (Bedrock), #67295 (baseUrl misconfiguration) | Moderate — configuration complexity |
| **Silent failures / poor observability** | #69064 (Telegram stall), #45750 (cron vs status divergence), #52037 (token persistence) | Moderate — debugging friction |
| **Geographic accessibility** | #38503 (China proxy/JSON config), #63129 (Lark/feishu mandatory dep) | Moderate — regional deployment blocked |

### Satisfaction Indicators
- Strong engagement (89 comments on #75) suggests invested user base, not abandonment
- Active workaround sharing (#29214 "Workaround provided", #69104 "FIX") indicates community resilience
- Multiple "stale" labels with recent activity suggest triage lag, not disinterest

### Dissatisfaction Indicators
- Hostile comment in #63129 ("妈的 傻逼国内开发者...") signals frustration with mandatory Lark/feishu dependency for Chinese users
- Frequent "regression" labels (10+ in top 50 issues) indicate quality assurance strain

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#75 Linux/Windows apps](https://github.com/openclaw/openclaw/issues/75) | ~4 months | **Platform equity gap** | Roadmap commitment or community contribution pathway |
| [#26422 Dead `message_sending` hook](https://github.com/openclaw/openclaw/issues/26422) | ~2 months | **Plugin API broken contract** | Verify if intentional deprecation or bug; affects extension ecosystem |
| [#29387 Bootstrap files ignored in `agentDir`](https://github.com/openclaw/openclaw/issues/29387) | ~2 months | **Configuration model confusion** | Clarify `agentDir` vs `workspace` semantics; documentation or fix |
| [#29736 Exec approvals path ignores state root](https://github.com/openclaw/openclaw/issues/29736) | ~2 months | **Security/operational integrity** | State isolation broken in containerized deployments |
| [#31583 `exec` tool ignores `skills.entries.*.env`](https://github.com/openclaw/openclaw/issues/31583) | ~2 months | **Secret management failure** | Blocks secure skill configuration |
| [#37634 Sandbox `workspaceAccess: none` read-only](https://github.com/openclaw/openclaw/issues/37634) | ~1.5 months | **Sandbox utility broken** | Self-defeating isolation—tools cannot write to isolated workspace |

### PR Review Bottleneck
- Multiple Eruditi PRs carry `r: too-many-prs` label (#69884, #69882, #69883, #69881, #69880, #69879, #69878) — **contributor throttling due to reviewer bandwidth**, not code quality concerns

### Stale but Active
- Issues tagged `[stale]` with 2026-04-21 update dates (e.g., #29053, #29214, #29387, #29736, #30215, #30381, #31331, #31583, #33185, #34394, #35220, #36323, #37634, #37844, #38061, #38067, #38439, #38503, #40256, #41282, #42530, #45750) — **stale automation may be miscalibrated** given ongoing engagement

---

*Digest generated from GitHub activity 2026-04-21 to 2026-04-22. All links reference `https://github.com/openclaw/openclaw`.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
## 2026-04-22 Community Digest Analysis

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing intense, parallel development across at least 12 actively tracked projects, with daily issue/PR volumes exceeding 1,000 combined. The space has bifurcated into **mature platform players** (OpenClaw, IronClaw, ZeroClaw) managing complex multi-channel deployments at scale, and **emerging specialists** (NanoBot, PicoClaw, NanoClaw) iterating rapidly on narrower use cases. A dominant architectural tension persists between **proprietary tool ecosystems** (OpenClaw's ClawHub) and **standards adoption** (MCP, LiteLLM abstraction layers), with security hardening and provider resilience emerging as universal maturity signals. Chinese market integrations (WeChat, DingTalk, Feishu/Lark) represent a distinct competitive vector, with several projects treating these as first-class channels rather than aftermarket plugins.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Trend |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.20 stable | ⚠️ **Strained** | Volume overwhelming triage |
| **NanoBot** | 69 | 39 | v0.1.5.post2 | ✅ **Healthy** | Rapid expansion, manageable backlog |
| **Hermes Agent** | 50 | 50 | None (stale Docker image) | ⚠️ **Quality pressure** | Concurrency bugs, review backlog |
| **PicoClaw** | 7 | 18 | Nightly only | ✅ **Healthy** | Clean merge ratio, focused iteration |
| **NanoClaw** | 4 | 27 | None | ⚠️ **Pre-release stress** | v2 hardening, state isolation bugs |
| **NullClaw** | 2 | 1 | None | 🔴 **At risk** | Maintainer absence, fix unmerged |
| **IronClaw** | 30 | 50 | v0.26.0 (day-old, broken installer) | ⚠️ **Volatile** | Engine v2 transition instability |
| **LobsterAI** | — | 18 | 2026.4.21 | ✅ **Responsive** | Same-day fixes, regression risk |
| **Moltis** | 12 | 4 | Daily build 20260421.05 | ✅ **Controlled** | Security-focused, excellent response |
| **CoPaw (QwenPaw)** | 50 | 40 | v1.1.3-beta.2 | ⚠️ **MCP instability** | Architectural investment, P0 hangs |
| **ZeptoClaw** | 1 | 4 | None | 🔴 **Stagnant** | Zero engagement, unassigned critical bug |
| **ZeroClaw** | 25 | 50 | None | ⚠️ **Pre-release crunch** | Schema v3 + onboard rewrite risk |
| **TinyClaw** | 0 | 0 | None | 🔴 **Dormant** | No activity |

*\*Health Score: composite of merge velocity, issue resolution rate, release stability, and maintainer responsiveness*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily = 10x nearest competitor | NanoBot (69/39), ZeroClaw (25/50) |
| **Release velocity** | Weekly stable cadence with beta pipeline | Most peers: irregular or nightly-only |
| **Ecosystem depth** | ClawHub with 341+ skills, dedicated apps (macOS/iOS/Android) | Others: file-based skills or nascent marketplaces |
| **Provider breadth** | Native Minimax, Azure Foundry, Gemini, OpenAI, etc. | NanoBot: LiteLLM-dependent; IronClaw: narrower native set |
| **Operational tooling** | `openclaw diagnose` AI-powered CLI | Unique; peers rely on manual debugging |

### Technical Approach Differences

| Aspect | OpenClaw | Key Peers |
|:---|:---|:---|
| **Tool system** | Proprietary ClawHub with behavioral reputation proposals | NanoBot: LiteLLM + emerging native SDKs; IronClaw: engine-v2 sandboxed tools; ZeroClaw: schema-driven |
| **Channel architecture** | Unified gateway with platform-specific hardening | CoPaw: per-agent channel health; NanoClaw: v2 multi-channel with state leakage bugs |
| **Sandboxing** | Plugin path validation, ephemeral responses | Moltis: two-layer env-var defense + Landlock exploration; IronClaw: per-project mission sandboxes |
| **Standards posture** | Resistant (#29053 MCP "stale" despite 19 votes) | Hermes: MCP `EmbeddedResource` compliance; NanoBot: #161 native SDK push; PicoClaw: `/list mcp` commands incoming |

### Community Size Comparison

OpenClaw operates at **ecosystem-hub scale** (89 comments on single longstanding issue #75), but this volume creates **inverse quality pressure**: reviewer bandwidth constraints (`r: too-many-prs` labels), stale-bot miscalibration, and regression clusters (10+ in 2026.4.11–4.15 series). Peers like Moltis and LobsterAI achieve better **signal-to-noise ratios** with smaller, more responsive communities.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **MCP (Model Context Protocol) interoperability** | OpenClaw, Hermes, PicoClaw, NanoClaw, CoPaw | OpenClaw #29053 (19 votes, "stale"); Hermes #13736 (MCP `EmbeddedResource` fix); PicoClaw #2535 (`/list mcp`); NanoClaw #1906 (Ollama MCP stdio fail); CoPaw P0 hangs (#3640, #3642) |
| **Multi-channel state isolation** | NanoClaw, CoPaw, Hermes, OpenClaw | NanoClaw #1902 (WeChat→Telegram leakage); CoPaw #3640 (TaskGroup hang cross-channel); Hermes #13607 (Telegram forum vs. DM); OpenClaw Telegram hardening PRs |
| **Reasoning model support** | OpenClaw, NanoBot, Moltis, CoPaw | OpenClaw #69882 (Minimax M2.7 VLM); NanoBot #3363 (Minimax reasoning split); Moltis #375 (Google `thought_signature`); CoPaw #3489 (Anthropic-compatible API) |
| **Session persistence / lifecycle** | PicoClaw, NanoClaw, ZeroClaw, CoPaw, NanoBot | PicoClaw #2310 (truncation, data loss anxiety); NanoClaw #1900 (session_id race); ZeroClaw #5634 (web refresh drop); CoPaw #3278 (JSON corruption); NanoBot #2062 (manual file deletion workaround) |
| **Provider-agnostic resilience / failover** | OpenClaw, NanoBot, Moltis | OpenClaw #69883 (Minimax 529 failover); NanoBot #942 (Ollama fallback), #3356 (ZhiPu retry); Moltis #793 (OpenRouter routing) |
| **Observability / operational tooling** | OpenClaw, NanoBot, IronClaw, ZeroClaw | OpenClaw #69832 (`diagnose` CLI); NanoBot #3365 (PostHog), #2189 (Langfuse); IronClaw #5980 (OTel traces); ZeroClaw #5980 (enhanced OTel) |
| **Enterprise messaging (China)** | OpenClaw, PicoClaw, NanoClaw, LobsterAI, IronClaw, ZeroClaw | Feishu/Lark, DingTalk, WeChat universally present; OpenClaw #63129 (mandatory dep frustration); IronClaw #2781 (long connection mode) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Ecosystem hub (ClawHub, cross-platform apps, operational CLI) | Power users, small teams, prosumers | Monolithic core with plugin marketplace; proprietary tool system |
| **NanoBot** | Lightweight, rapid deployment, "agent learning to manage itself" | Individual developers, tinkerers | LiteLLM-dependent (transitioning); minimal core, maximal channel coverage |
| **Hermes Agent** | Skill-centric (146+ skills), blockchain integration (Exfer), TUI-first | Technical operators, crypto-adjacent | Skill registry with git-based distribution; terminal-native UX |
| **PicoClaw** | Embedded/hardware-friendly (Sipeed origin), Go-based efficiency | Edge deployers, IoT integrators | Pipeline-architecture agent loop; launcher web console |
| **NanoClaw** | Decentralized protocol stack (Nostr, Lightning), Claude Code integration | Privacy-maximalists, protocol enthusiasts | v2 multi-channel with protocol expansion; bash installer |
| **IronClaw** | Enterprise SaaS readiness (multi-tenant, workspace isolation, TEE) | Enterprise teams, NEAR ecosystem | Engine v2 with mission lifecycle; WASM sandboxing; staging promotions |
| **LobsterAI** | IDE-integrated coding assistant (diff visualization, tool editing) | Software developers, NetEase ecosystem | Electron-based desktop; OpenClaw framework fork with UI shell |
| **Moltis** | Security-first sandboxing (Rust-native, env-var defense, Landlock) | Security-conscious deployers, Fly.io users | Rust gateway with container-less sandbox primitives |
| **CoPaw (QwenPaw)** | Qwen-native optimization, memory/context rebuild, multi-agent UX | Chinese market, AgentScope users | AgentScope upstream dependency; per-agent routing; console plugin system |
| **ZeroClaw** | Schema-driven configuration, per-sender RBAC, Tauri desktop | Configuration-as-code adopters, multi-tenant admins | Rust core with schema v3 migration; idempotent onboard orchestrator |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Hyperactive** | OpenClaw | 500+ daily items; mature but strained; needs triage automation investment |
| **⚡ Rapid iteration** | NanoBot, IronClaw, ZeroClaw, CoPaw | 25-50 daily items; feature expansion mode; some instability acceptable |
| **🚀 Focused growth** | Hermes Agent, LobsterAI, Moltis, PicoClaw | 10-50 items; clear priorities; healthy merge ratios |
| **🛠️ Pre-release stress** | NanoClaw | High PR velocity (27) with low issue visibility (4); v2 complexity exposing edge cases |
| **⚠️ Maintenance mode / at risk** | NullClaw, ZeptoClaw, TinyClaw | <5 items; maintainer absence or zero engagement; critical bugs unassigned |

### Maturity Signals

| Mature Indicators | Projects |
|:---|:---|
| Operational tooling (`diagnose`, log export, health checks) | OpenClaw, NanoBot, IronClaw |
| Security response processes (same-day CVE patches) | Moltis, LobsterAI, NanoBot |
| Multi-tenancy / SaaS hardening | IronClaw, Moltis |
| Documentation automation / i18n infrastructure | Moltis (#783), LobsterAI (#1773), ZeroClaw (#5788 Fluent RFC) |

| Immaturity Risks | Projects |
|:---|:---|
| Regression clusters post-release | OpenClaw (2026.4.11–4.15), IronClaw (v0.26.0 installer), LobsterAI (#1783 diff) |
| Core subsystem instability | CoPaw (MCP hangs), NanoClaw (state isolation), Hermes (TUI concurrency) |
| Maintainer throughput bottlenecks | OpenClaw (`r: too-many-prs`), NullClaw (zero merges), ZeptoClaw (unacknowledged critical bug) |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **MCP as inevitable standard** | OpenClaw #29053 (vendor lock-in resistance), Hermes #13736 (compliance fix), PicoClaw #2535 (command integration), CoPaw P0 instability (forced adoption pain) | Design agent tool systems with MCP-native architecture; avoid proprietary lock-in |
| **"Black box" agent state → demand for observability** | NanoBot #3107, #1833, #2062; IronClaw #2792 (state convergence epic); ZeroClaw #5980 (OTel); OpenClaw #69832 (`diagnose`) | Invest in structured telemetry, session introspection APIs, and user-visible state surfaces |
| **Decentralized / self-sovereign deployment** | NanoClaw Nostr/Lightning stack (#1891-1893); Moltis Landlock/container-less (#818); NullClaw Tailscale (#826) | Prepare for users rejecting cloud dependencies; edge-first architecture becoming differentiator |
| **Skill/tool marketplace maturity** | OpenClaw #55342 (behavioral reputation, 341 malicious skills); Hermes #13534 (146+ skills, conflict detection); Moltis #821 (101 skills, prompt bloat) | Plan for trust layers, usage tracking, and prompt optimization at scale |
| **Reasoning model fragmentation** | Recurring across all projects: Minimax, DeepSeek, Anthropic, Google `thought_signature` variations | Abstract reasoning content handling; don't hardcode OpenAI's format |
| **Chinese enterprise messaging as first-class** | Universal Feishu/DingTalk/WeChat investment; IronClaw long-connection mode; LobsterAI emergency DingTalk downgrade | Treat regional channel parity as core competency, not localization afterthought |
| **Configuration complexity as adoption barrier** | ZeroClaw #4866 (build instructions), #5847 (undocumented env); OpenClaw #2548 (credential precedence); PicoClaw #2548 (multiple auth credentials) | Schema validation, interactive setup scripts, and clear error messages are competitive advantages |
| **Session/data persistence as trust anchor** | PicoClaw #2310 (filesystem verification); NanoClaw #1900 (race condition); CoPaw #3278 (JSON corruption) | Implement durable, verifiable, user-inspectable state storage |

---

*Report generated from 12 project digests covering 2026-04-21 to 2026-04-22 activity. All source data available in linked GitHub repositories.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-22

## 1. Today's Overview

NanoBot shows **very high development velocity** with 69 issues and 39 PRs updated in the last 24 hours, indicating an active, rapidly evolving project. The community released **v0.1.5.post2** with 67 merged PRs and 12 new contributors, expanding platform support to Windows and Python 3.14 while polishing core functionality. Open items remain manageable (8 active issues, 16 open PRs vs. 61 closed issues and 23 merged/closed PRs), suggesting maintainers are keeping pace with community contributions. A significant security concern around the **LiteLLM dependency being quarantined for credential theft** (#2443) has been addressed through rapid issue closure, though long-term architectural discussions about replacing LiteLLM entirely (#161) persist. The project demonstrates strong international engagement with issues in both English and Chinese.

---

## 2. Releases

### [v0.1.5.post2](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post2)
- **Theme**: "Reach and polish" — expanding platform compatibility and refining existing features
- **Key changes**:
  - **Windows support** added to the supported matrix
  - **Python 3.14** compatibility
  - Enhanced `read_file` tool capabilities (expanded document support, see PR #3336)
  - 67 PRs merged, 12 new contributors
- **Breaking changes**: None explicitly noted
- **Migration notes**: Not specified; appears to be backward-compatible incremental release
- **Context**: Follows v0.1.5.post1 which focused on "agent learning to manage itself" — this release shifts focus outward to broader deployment scenarios

---

## 3. Project Progress

### Merged/Closed PRs Today (23 total; notable items)

| PR | Description | Significance |
|:---|:---|:---|
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | `feat(read_file)`: add DOCX, XLSX, PPTX office document support | Major capability expansion for document processing |
| [#3355](https://github.com/HKUDS/nanobot/pull/3355) | `fix(telegram)`: improve markdown rendering for modern LLM output | UX polish for GPT-5.4, Claude, Gemini output |
| [#3356](https://github.com/HKUDS/nanobot/pull/3356) | `fix(retry)`: recognize ZhiPu 1302 rate-limit error for retry | Reliability for Chinese LLM provider |
| [#3359](https://github.com/HKUDS/nanobot/pull/3359) | `fix(commands)`: intercept non-priority commands during active turn | Prevents command injection as raw messages |
| [#3353](https://github.com/HKUDS/nanobot/pull/3353) | `fix(utils/document)`: use try/finally in `_extract_xlsx` | Resource leak prevention |
| [#3363](https://github.com/HKUDS/nanobot/pull/3363) | `Fix/minimax reasoning split` | Reasoning model support for MiniMax |
| [#3365](https://github.com/HKUDS/nanobot/pull/3365) | `feat`: PostHog analytics hook for message tracking | Observability infrastructure |
| [#3364](https://github.com/HKUDS/nanobot/pull/3364) | Replace static cover image with demo GIF | Marketing/documentation |
| [#3347](https://github.com/HKUDS/nanobot/pull/3347) | docs: add WebSocket channel configuration guide | Developer experience |
| [#3362](https://github.com/HKUDS/nanobot/pull/3362) | Create develop branch | Workflow infrastructure |

**Feature advancement themes**: Document processing maturity, multi-provider LLM resilience, Telegram UX polish, analytics/observability foundations.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| # | Title | Status | Comments | Analysis |
|:---|:---|:---|:---|:---|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Architectural issue: nanobot does not preserve the exact prompt prefix it previously sent | **OPEN** [stale] | 10 | **Fundamental architecture tension**: Conversation history persistence diverges from actual prompts sent, breaking OpenAI prefix caching and creating non-deterministic behavior. Stale since March 25 — needs maintainer decision on whether to refactor core history mechanism. |
| [#2062](https://github.com/HKUDS/nanobot/issues/2062) | 如何正确清空/重启/新建session? | CLOSED | 8 | **Operational pain point**: Users need manual file deletion to reset sessions; indicates missing first-class session lifecycle management, especially for long-running integrations like Feishu. |
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) | Missing ability to create skills | CLOSED | 6 | **Regression concern**: Skill creation worked previously but broke in upgrade — suggests tooling/permission changes between versions. |
| [#161](https://github.com/HKUDS/nanobot/issues/161) | Proposal: Replace LiteLLM with native SDKs + enhanced local model support | CLOSED | 6, 👍8 | **Strategic architecture debate**: Most upvoted issue; community wants reduced dependency weight and better local model support. LiteLLM security incident (#2443) adds urgency. |
| [#2443](https://github.com/HKUDS/nanobot/issues/2443) | LiteLLM has been quarantined | CLOSED | 6 | **Security response**: Rapid closure suggests hotfix applied, but underlying dependency risk remains per #161. |

**Underlying needs**: 
- **Deterministic/reproducible agent behavior** (#2463, #1116)
- **Session lifecycle control** for production deployments (#2062)
- **Reduced supply-chain risk** in LLM abstraction layer (#161, #2443)
- **Operational transparency** (status visibility, black-box mitigation)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM quarantined — credential stealer | CLOSED | Unknown | Security incident; dependency flagged on PyPI. Closed rapidly but architectural fix pending in #161. |
| 🟡 **High** | [#3366](https://github.com/HKUDS/nanobot/pull/3366) Shell injection via `path_append` on non-Windows | **OPEN** | #3366 (pending) | `ExecTool` vulnerability allowing arbitrary command execution. Active PR with fix. |
| 🟡 **High** | [#1833](https://github.com/HKUDS/nanobot/issues/1833) SIGTERM crashes with no explanation | CLOSED | Unknown | Stability concern for long-running instances; unclear if root cause addressed. |
| 🟡 **High** | [#942](https://github.com/HKUDS/nanobot/issues/942) Ollama fallback failure when local model unavailable | CLOSED | Unknown | Fallback mechanism broken for 400 errors; affects hybrid local/cloud deployments. |
| 🟢 **Medium** | [#2200](https://github.com/HKUDS/nanobot/issues/2200) Anthropic provider — litellm.BadRequestError | CLOSED | Unknown | Provider-specific breakage; pattern of LiteLLM compatibility issues. |
| 🟢 **Medium** | [#1157](https://github.com/HKUDS/nanobot/issues/1157) OpenRouter StepFun 400 error | CLOSED | Unknown | Model-specific request format issues. |
| 🟢 **Medium** | [#1225](https://github.com/HKUDS/nanobot/issues/1225), [#194](https://github.com/HKUDS/nanobot/issues/194), [#244](https://github.com/HKUDS/nanobot/issues/244) DeepSeek `reasoning_content` missing | CLOSED | #1280, #3363 | Recurring pattern with reasoning models; partially addressed. |
| 🟢 **Medium** | [#1236](https://github.com/HKUDS/nanobot/issues/1236) Assistant replies missing from conversation history | CLOSED | Unknown | History integrity bug; related to #2463 architectural concerns. |

**Stability assessment**: Multiple provider-specific fragility points concentrated around **LiteLLM abstraction layer**. Security vulnerability actively being patched. Core agent loop appears stable but peripheral integrations (channels, providers) need hardening.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Native SDK replacement for LiteLLM** | #161 | High | Security incident (#2443) creates urgency; 8 upvotes; maintainers closed rather than rejected |
| **Langfuse observability integration** | #2189 | Medium | Closed without rejection; observability PRs (#3367 latency hooks, #3365 PostHog) show active investment in telemetry |
| **LLM provider/model switching in Telegram** | #1113, #1292 | Medium | Multiple requests; Telegram channel actively maintained (#3355) |
| **Session management commands** | #2062 | Medium | Operational necessity for production; manual workaround unacceptable |
| **Web chat channel with SSE streaming** | #2871 | **High** | Large open PR with no core changes; ready for merge |
| **WebSocket file attachments** | #3361 | High | Complements #2871; active PR |
| **AgentHiFive integration** | #3144 | Medium | Substantial PR open; MCP-backed backend pattern |
| **spawn_status/spawn_cancel tools** | #3303 | High | Agent orchestration safety; addresses "black box" complaints |
| **Heartbeat model override** | #3368 | High | Cost optimization; small, focused PR |
| **Audio transcription language specification** | #3371 | High | Small config addition; closes #2421 |
| **DingTalk file upload fix** | #3344 | Medium | Open issue; integration-specific complexity |

**Predicted v0.1.6 themes**: LiteLLM migration path, web channel GA, agent observability, multi-model orchestration.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **"Black box" agent state** | #3107 (status/task visibility), #1833 (unclear crashes), #2062 (session opacity) | High |
| **LiteLLM as single point of failure** | #161, #2443, #2200, #1157, #128, #942 | Critical |
| **Reasoning model incompatibility** | #1225, #194, #244, #3068, #1280 | Medium |
| **Session history unbounded growth** | #2062 (Feishu files), #1449 (HISTORY.md noise) | Medium |
| **Rate limiting without graceful degradation** | #1353 (ClawHub), #1292 (provider switch need), #3356 (ZhiPu) | Medium |
| **Channel-specific UX gaps** | #3344 (DingTalk files), #1113 (Telegram commands), #1050 (email heartbeat noise) | Medium |

### Positive Signals
- **v0.1.5.post2** well-received: "agent's world got bigger and steadier"
- Strong contributor growth (12 new in this release)
- Rapid maintainer response to security incident

### Use Cases Emerging
- **Enterprise messaging integrations** (Feishu, DingTalk, Telegram, WhatsApp, Matrix)
- **Hybrid local/cloud LLM deployments** (Ollama + cloud fallback)
- **Long-running autonomous agents** (gateway mode, heartbeat, cron)
- **Document-heavy workflows** (office file support expansion)

---

## 8. Backlog Watch

| Item | Age | Issue | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| **Prompt prefix preservation architecture** | 28 days stale | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | **High** — fundamental correctness issue; breaks caching, affects costs and determinism | Maintainer decision on whether to refactor core history mechanism; assign or close with rationale |
| **PostHog analytics hook** | 1 day | [#3365](https://github.com/HKUDS/nanobot/pull/3365) | Low | Closed; verify if merged or rejected |
| **AgentHiFive integration** | 8 days | [#3144](https://github.com/HKUDS/nanobot/pull/3144) | Medium | Large PR needs review; MCP pattern alignment check |
| **Web chat channel** | 16 days | [#2871](https://github.com/HKUDS/nanobot/pull/2871) | Low | Ready for merge; no core changes reduces risk |
| **ContextVar task-local routing** | 34 days | [#2220](https://github.com/HKUDS/nanobot/issues/2220) | Medium | Async safety hardening; may need rebase |
| **Version numbering standardization** | 60 days | [#953](https://github.com/HKUDS/nanobot/issues/953) | Low | Community standards; low priority but persistent |

**Critical attention**: [#2463](https://github.com/HKUDS/nanobot/issues/2463) represents a potential architectural debt that could compound as the project scales. Recommend maintainer triage this week.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-22. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-22

## 1. Today's Overview

Hermes Agent showed **very high community activity** with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were published. The project is experiencing significant quality pressure: two critical P1 bugs involving terminal/TUI approval prompt freezes were closed, but 39 issues remain open with substantial bug volume in gateway, cron, and platform adapters. The merge rate of 32% (16/50 PRs) suggests active maintenance but also a growing review backlog. Notably, Docker image publishing lags behind code fixes by days, leaving users exposed to resolved bugs.

---

## 2. Releases

**No new releases** (0 published).

Critical gap: The `latest` Docker image was built **3 hours before** the Gemini bearer auth fix ([ca32a2a](https://github.com/NousResearch/hermes-agent/commit/ca32a2a60bd8655c001b96394e68309ba53b4550)) merged on 2026-04-18. Users pulling `latest` still encounter the broken `x-goog-api-key` swap — see [#12386](https://github.com/NousResearch/hermes-agent/issues/12386).

---

## 3. Project Progress

### Merged/Closed PRs (16 total, selected highlights)

| PR | Author | Description | Impact |
|---|---|---|---|
| [#13528](https://github.com/NousResearch/hermes-agent/pull/13528) | [teknium1](https://github.com/teknium1) | Enable prompt caching for Qwen on OpenCode/Alibaba | **Cost reduction** for Qwen3.6-plus users |
| [#13530](https://github.com/NousResearch/hermes-agent/pull/13530) | [teknium1](https://github.com/teknium1) | Host header validation against bound interface | **Security fix** for DNS rebinding attacks on web dashboard/WhatsApp bridge |
| [#13728](https://github.com/NousResearch/hermes-agent/pull/13728) | [OutThisLife](https://github.com/OutThisLife) | `/history` shows TUI's own transcript, scrollable | TUX fix for TUI history modal |
| [#13724](https://github.com/NousResearch/hermes-agent/pull/13724) | [OutThisLife](https://github.com/OutThisLife) | `/resume` picker shows telegram/discord/etc sessions | Cross-platform session resume |
| [#13726](https://github.com/NousResearch/hermes-agent/pull/13726) | [OutThisLife](https://github.com/OutThisLife) | Up-arrow in multi-line buffer moves cursor, not history | TUI text editing fix |
| [#8809](https://github.com/NousResearch/hermes-agent/pull/8809) | [ahuman-exfer](https://github.com/ahuman-exfer) | Add Exfer blockchain skill (HTLC, multisig) | New optional skill for agent-to-agent payments |
| [#14](https://github.com/NousResearch/hermes-agent/pull/14) | [teknium1](https://github.com/teknium1) | Stability and speed updates for web tools | Performance |

### Open PRs Advancing

| PR | Author | Description | Status |
|---|---|---|---|
| [#13734](https://github.com/NousResearch/hermes-agent/pull/13734) | [andrewhosf](https://github.com/andrewhosf) | **Fix concurrent tool execution deadlock on approval** — propagates approval callbacks to worker threads | Fixes [#13617](https://github.com/NousResearch/hermes-agent/issues/13617) regression; ready for review |
| [#13736](https://github.com/NousResearch/hermes-agent/pull/13736) | [jpterry](https://github.com/jpterry) | Extract text from MCP `EmbeddedResource` content blocks | MCP spec compliance fix |
| [#13735](https://github.com/NousResearch/hermes-agent/pull/13735) | [teknium1](https://github.com/teknium1) | Add `--ignore-user-config` and `--ignore-rules` flags | Isolated-run mode for reproducible sessions |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Underlying Need |
|---|---|---|---|---|
| [#13618](https://github.com/NousResearch/hermes-agent/issues/13618) | 5 | 0 | **TUI approval overlay freezes terminal** (P1, closed) | Input handler architecture — `useInput` competition between components |
| [#13617](https://github.com/NousResearch/hermes-agent/issues/13617) | 5 | 1 | **Terminal approval prompt freezes input** (closed) | Same root cause: concurrent approval + CLI input deadlock |
| [#7952](https://github.com/NousResearch/hermes-agent/issues/7952) | 3 | 1 | Matrix gateway broken after mautrix switch | Platform adapter stability during dependency migrations |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | 3 | 3 | **Slack Block Kit markdown vs. legacy `mrkdwn`** | Rich formatting support for enterprise messaging |
| [#13566](https://github.com/NousResearch/hermes-agent/issues/13566) | 2 | 0 | Cron delivery retry for transient failures | Reliability for scheduled job notifications |

**Analysis**: The approval prompt freezes reveal a **systemic concurrency architecture problem** in the TUI/CLI — two separate issues with the same root cause were filed and fixed within 24 hours, suggesting the fix may need broader validation. Slack formatting and cron reliability represent **production readiness gaps** for enterprise deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **P1 — Critical** | [#13618](https://github.com/NousResearch/hermes-agent/issues/13618) | TUI approval overlay freezes terminal completely | Closed (fix merged) |
| **P1 — Critical** | [#13617](https://github.com/NousResearch/hermes-agent/issues/13617) | Terminal approval prompt freezes CLI input area | [#13734](https://github.com/NousResearch/hermes-agent/pull/13734) open |
| **P1 — Critical** | [#13574](https://github.com/NousResearch/hermes-agent/issues/13574) | Context compaction truncates `tool_call.function.arguments` mid-JSON, breaks MiniMax | **No PR** |
| High | [#13655](https://github.com/NousResearch/hermes-agent/issues/13655) | Stale `gateway.pid` causes restart loop after crash/SIGKILL | **No PR** |
| High | [#12386](https://github.com/NousResearch/hermes-agent/issues/12386) | Docker `latest` image 3+ hours behind Gemini auth fix | **Release needed** |
| Medium | [#13545](https://github.com/NousResearch/hermes-agent/issues/13545) | `hermes doctor` misreports browser availability | **No PR** |
| Medium | [#13581](https://github.com/NousResearch/hermes-agent/issues/13581) | `agent.transports` missing from built distribution (setuptools glob) | **No PR** |
| Medium | [#13607](https://github.com/NousResearch/hermes-agent/issues/13607) | Telegram forum supergroup messages fail while DMs work | **No PR** |
| Medium | [#13710](https://github.com/NousResearch/hermes-agent/issues/13710) | CLI crashes with `OSError: [Errno 5]` on interrupt | **No PR** |
| Medium | [#13708](https://github.com/NousResearch/hermes-agent/issues/13708) | Gateway config crashes on `home_channel: null` | **No PR** |

**Pattern**: Gateway, cron, and Telegram platform code have **clusters of related bugs** — config null handling, delivery target resolution, and platform-specific edge cases suggest these subsystems need systematic testing.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Likelihood in Next Version |
|---|---|---|
| [#380](https://github.com/NousResearch/hermes-agent/issues/380) | **Batch Migration Skill** — parallel code migration with git worktree isolation (Claude Code `/batch` inspired) | Medium — large scope, but [teknium1](https://github.com/teknium1) active |
| [#13534](https://github.com/NousResearch/hermes-agent/issues/13534) | **Skill Management** — usage tracking, conflict detection, pre-creation validation | High — production pain at 146+ skills |
| [#13532](https://github.com/NousResearch/hermes-agent/issues/13532) | **Self-Verification Loop** — Generate → Verify → Refine in SOUL.md | Medium — quality-focused, aligns with agent reliability |
| [#13711](https://github.com/NousResearch/hermes-agent/issues/13711) | **LangFlow low-code** for hardcoded agent flows | Low — architectural, external dependency |
| [#4595](https://github.com/NousResearch/hermes-agent/issues/4595) | **Cron job observability** — main agent session awareness | Medium — closed but related to [#13566](https://github.com/NousResearch/hermes-agent/issues/13566) retry work |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | **Slack Block Kit** markdown support | High — 3 👍, clear enterprise need |

**Prediction**: Skill management systematization and Slack Block Kit are the strongest near-term candidates. The batch migration skill may follow Claude Code's feature validation.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Docker deployment friction** | [#12386](https://github.com/NousResearch/hermes-agent/issues/12386) (stale image), [#13731](https://github.com/NousResearch/hermes-agent/issues/13731) (UnRAID permission failure with `USER hermes`) | High |
| **TUI/CLI terminal reliability** | [#13618](https://github.com/NousResearch/hermes-agent/issues/13618), [#13617](https://github.com/NousResearch/hermes-agent/issues/13617), [#13710](https://github.com/NousResearch/hermes-agent/issues/13710) | Critical |
| **Gateway platform inconsistencies** | [#13607](https://github.com/NousResearch/hermes-agent/issues/13607) (Telegram forum), [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) (Codex auth Telegram-specific), [#13708](https://github.com/NousResearch/hermes-agent/issues/13708) (config null crash) | High |
| **Cron job silent failures** | [#13566](https://github.com/NousResearch/hermes-agent/issues/13566) (no retry), [#13707](https://github.com/NousResearch/hermes-agent/issues/13707) (webhook rejected), [#13706](https://github.com/NousResearch/hermes-agent/issues/13706) (schedule string crash) | Medium-High |
| **Documentation drift** | [#13737](https://github.com/NousResearch/hermes-agent/issues/13737) (SKILL.md files out of sync), [#13570](https://github.com/NousResearch/hermes-agent/issues/13570) (uncountable tool calls in guidance) | Medium |

### Satisfaction Signals
- Active skill ecosystem: 146+ skills in production setups ([#13534](https://github.com/NousResearch/hermes-agent/issues/13534))
- Strong cross-platform gateway usage: Telegram, Discord, Feishu, Slack, WhatsApp all maintained
- Security-conscious contributions: DNS rebinding fix ([#13530](https://github.com/NousResearch/hermes-agent/pull/13530)) shows mature threat modeling

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Issue | Action Needed |
|---|---|---|---|
| [#380](https://github.com/NousResearch/hermes-agent/issues/380) | ~7 weeks | Batch Migration Skill | Architecture review, scope decision |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | ~10 days | Slack Block Kit markdown | Platform adapter owner review |
| [#12386](https://github.com/NousResearch/hermes-agent/issues/12386) | 3 days | Docker image stale | **Immediate: cut release** |
| [#13574](https://github.com/NousResearch/hermes-agent/issues/13574) | 1 day | **P1: JSON truncation breaks MiniMax** | Assign agent core owner |
| [#13655](https://github.com/NousResearch/hermes-agent/issues/13655) | 1 day | Gateway restart loop on crash | Assign gateway owner |
| [#13737](https://github.com/NousResearch/hermes-agent/issues/13737) | New | SKILL.md automated sync mechanism | Documentation infrastructure decision |
| [#13562](https://github.com/NousResearch/hermes-agent/issues/13562) | 1 day | Merxex monetization proposal | Spam/invalid — close or redirect |

### Review Backlog Risk
34 open PRs with several ready for merge ([#13734](https://github.com/NousResearch/hermes-agent/pull/13734) fixes P1, [#13736](https://github.com/NousResearch/hermes-agent/pull/13736) MCP compliance). The undefined comment counts on PRs suggest automated or batch-updated metadata — may indicate tooling strain.

---

*Digest generated from 50 issues and 50 PRs updated 2026-04-21 to 2026-04-22.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-22

## 1. Today's Overview

PicoClaw demonstrates **high development velocity** with 18 PRs and 7 issues updated in the last 24 hours, yielding an 11:7 merge-to-open ratio that indicates healthy code review throughput. The project shipped a nightly build (v0.2.6-nightly.20260421.71c877a6) and closed 2 issues while advancing major features across WebUI, authentication, and channel integrations. Notably, the team resolved critical Google Antigravity OAuth credential expiry problems and landed significant UI/UX improvements for chat history restoration and dashboard security. However, 5 active issues remain open, including persistent localization gaps and session history truncation bugs that affect user trust in data persistence.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.6-nightly.20260421.71c877a6](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) | Nightly | Automated build from `main`; **unstable, use with caution**. Full changelog covers delta from v0.2.6 stable. |

**No stable release today.** The nightly suggests active iteration toward a future v0.2.7 or v0.3.0, with substantial auth and channel changes accumulating since v0.2.6.

---

## 3. Project Progress

### Merged/Closed PRs (11 total)

| PR | Author | Domain | Impact |
|----|--------|--------|--------|
| [#2613](https://github.com/sipeed/picoclaw/pull/2613) | sky5454 | Go/isolation | Fixed `govet` shadow declaration of `err` on Windows — code quality |
| [#2611](https://github.com/sipeed/picoclaw/pull/2611) | tra4less | UI | Added structured UI (details sparse; likely UI framework foundation) |
| [#2608](https://github.com/sipeed/picoclaw/pull/2608) | wj-xiao | Config/Security | **Breaking improvement**: Replaced launcher dashboard token auth with bcrypt password hashing; auto-migrates legacy `launcher_token` values |
| [#2607](https://github.com/sipeed/picoclaw/pull/2607) | SiYue-ZO | Channel (Feishu) | Group chat trigger controls: `mention_only` option + random emoji response config |
| [#2537](https://github.com/sipeed/picoclaw/pull/2537) | imguoguo | Agent/Channel | Added `/context` command and context usage ring indicator for session transparency |
| [#2599](https://github.com/sipeed/picoclaw/pull/2599) | lc6464 | Provider/Auth | **Fixed #2550**: Canonicalized Google Antigravity provider key; resolved credential expiry inconsistency in `auth.json` |
| [#2601](https://github.com/sipeed/picoclaw/pull/2601) | lc6464 | Provider/Docs | Updated Gemini native protocol documentation |
| [#2595](https://github.com/sipeed/picoclaw/pull/2595) | wj-xiao | Channel/Config | Chip-style list editing for channel array fields in launcher web console |
| [#2605](https://github.com/sipeed/picoclaw/pull/2605) | wj-xiao | Web/Channel | Cleaned up restored chat transcripts: hides raw `tool` role messages, deduplicates summaries, optimizes UI |
| [#2585](https://github.com/sipeed/picoclaw/pull/2585) | sky5454 | Agent/Go | Major refactor: Agent Looper Phase 2 — split 1500-line `loop.go` into Pipeline architecture (`SetupTurn`, `CallLLM`, `ExecuteTools`, `Finalize`) |
| [#2604](https://github.com/sipeed/picoclaw/pull/2604) | imguoguo | Docs | Updated WeChat QR code |

**Key advances**: Authentication security hardening, agent architecture modernization, and chat history reliability improvements directly address user-reported pain points.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#2367](https://github.com/sipeed/picoclaw/issues/2367) — Chinese title persists in English locale | 4 | **Localization debt**: Last screen title untranslated. Indicates incomplete i18n coverage in newer UI flows; affects international adoption |
| 2 | [#2548](https://github.com/sipeed/picoclaw/issues/2548) — Multiple authentication credentials received | 4 | **Config complexity**: User confusion around `provider`/`model_list` credential precedence when mixing top-level and per-model API keys |
| 3 | [#2310](https://github.com/sipeed/picoclaw/issues/2310) — Session history truncated to 1-2 messages | 3 | **Data loss anxiety**: Core reliability issue; users verify filesystem to confirm bug. Directly impacts productivity and trust |

**Underlying needs**: Users demand (a) **predictable configuration behavior** with clear credential resolution rules, (b) **guaranteed data persistence** for conversational state, and (c) **production-ready localization** for non-Chinese markets.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **High** | [#2310](https://github.com/sipeed/picoclaw/issues/2310) — Session history truncated | **OPEN** | [#2605](https://github.com/sipeed/picoclaw/pull/2605) partial | WebUI shows only 1-2 messages after page reload; filesystem confirms data loss at persistence layer. **PR #2605 cleans up transcript restoration but may not fix root cause of truncated storage** |
| 🟡 **Medium** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) — Multiple auth credentials error | **OPEN** | [#2609](https://github.com/sipeed/picoclaw/pull/2609) candidate | Config parsing ambiguity when `provider` + `model_list[].api_key` both present; PR #2609 adds explicit `provider` field support |
| 🟡 **Medium** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) — Unicode escape sequences in tool feedback | **OPEN** | None | `\u0026`, `\u003e`, `\u003c` render shell commands unreadable; affects developer experience with tool outputs |
| 🟢 **Low** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) — Untranslated Chinese title | **OPEN** | None | Cosmetic i18n gap |
| 🟢 **Low** | [#2598](https://github.com/sipeed/picoclaw/issues/2598) — WebUI broken after 0.2.4→0.2.6 upgrade | **CLOSED** | [#2605](https://github.com/sipeed/picoclaw/pull/2605) | Fixed via transcript cleanup PR |

**Regression watch**: The 0.2.4→0.2.6 upgrade path caused WebUI failures; today's fixes suggest stabilization but session persistence remains under scrutiny.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Token consumption dashboard** | [#2217](https://github.com/sipeed/picoclaw/issues/2217) | High | Complements merged `/context` command (#2537); natural UI extension |
| **MCP slash commands** | [#2535](https://github.com/sipeed/picoclaw/pull/2535) | **Very High** | Open PR with `/list mcp`, `/show mcp`; aligns with MCP ecosystem trend |
| **Frontend file downloads** | [#2563](https://github.com/sipeed/picoclaw/pull/2563) | High | Open PR, end-to-end implementation complete, addresses tool output accessibility |
| **Weixin multi-instance support** | [#2606](https://github.com/sipeed/picoclaw/pull/2606) | Medium | Open PR, complex channel enhancement; may need iteration |
| **Release workflow flexibility** | [#2610](https://github.com/sipeed/picoclaw/pull/2610) | Medium | CI infrastructure; enables more predictable release management |

**Predicted v0.2.7 or v0.3.0 focus**: MCP tooling integration, WebUI file handling, and token visibility — all trending toward "agent observability" as a product theme.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Session data loss** | [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 🔴 Critical — users actively inspect filesystem to verify bugs |
| **Configuration confusion** | [#2548](https://github.com/sipeed/picoclaw/issues/2548), [#2550](https://github.com/sipeed/picoclaw/issues/2550) | 🟡 High — credential precedence and OAuth refresh opaque to users |
| **Upgrade fragility** | [#2598](https://github.com/sipeed/picoclaw/issues/2598) | 🟡 Moderate — resolved but shook confidence |
| **Localization gaps** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | 🟢 Low — polish issue for international users |

### Positive Signals

- **Auth reliability improving**: Rapid closure of #2550 via #2599 shows responsive security maintenance
- **Channel ecosystem expanding**: Feishu (#2607) and Weixin (#2606) enhancements indicate investment in Chinese enterprise messaging platforms
- **Agent transparency**: `/context` command and usage indicators respond to power-user needs

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) — Token consumption dashboard | 22 days | Stagnation | 2 comments, no PR linkage; needs maintainer triage or community contribution |
| [#2081](https://github.com/sipeed/picoclaw/issues/2081) — Unicode escapes in tool feedback | 26 days | Developer UX erosion | 2 comments, no assignee; affects tool adoption |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) — Google Antigravity OAuth scope refresh | 24 days | **Superseded?** | Open PR; verify if #2599 fully addresses this or if scope preservation fix still needed |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) — Split SSE stream chunk parsing | 15 days | Stability risk | Open PR with regression tests; valuable for provider reliability, needs review |

**Maintainer attention recommended**: Clarify relationship between #2163 and #2599 to avoid duplicate/ conflicting OAuth fixes; prioritize SSE parsing (#2411) for streaming reliability.

---

*Digest generated from GitHub activity 2026-04-21. All links reference github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-22

## Today's Overview

NanoClaw showed **very high development velocity** with 27 PRs updated in 24 hours (10 merged/closed, 17 open) and 4 active issues, indicating a project in active feature expansion and stabilization. The community is particularly focused on **v2 platform hardening** across messaging channel reliability (WeChat, Telegram), setup/installation robustness, and emerging decentralized protocol support (Nostr, Lightning). No new releases were cut today, suggesting the team is accumulating changes for a larger version bump. The PR merge rate of ~37% with substantial open PRs indicates either a review bottleneck or intentional staging for a coordinated release. Multiple critical bug fixes around session persistence, credential handling, and infinite loops demonstrate production stress-testing.

---

## Releases

*No new releases today.*

---

## Project Progress

### Merged/Closed PRs (10 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #1908 | gavrielc | **Branded setup script (`nanoclaw.sh`)** — end-to-end bash installer from clone to running Claude-wired instance with `@clack/prompts` UI | [qwibitai/nanoclaw#1908](https://github.com/qwibitai/nanoclaw/pull/1908) |
| #1907 | acb-code | **Anthropic PDF container skill** — vendored operational skill for PDF processing in containers | [qwibitai/nanoclaw#1907](https://github.com/qwibitai/nanoclaw/pull/1907) |
| #1905 | acb-code | **Telegram attachments skill** — photo/document download capability for Telegram channel | [qwibitai/nanoclaw#1905](https://github.com/qwibitai/nanoclaw/pull/1905) |
| #1883 | ssimeonov | **Bump Claude Code 2.1.116 + Agent SDK ^0.2.116** — critical IPC protocol alignment fix | [qwibitai/nanoclaw#1883](https://github.com/qwibitai/nanoclaw/pull/1883) |
| #1900 | davekim917 | **SDK session_id persistence + message splitting** — fixes mid-turn container exit data loss and >2000 char Discord truncation | [qwibitai/nanoclaw#1900](https://github.com/qwibitai/nanoclaw/pull/1900) |
| #1899 | Yacine0801 | **Gmail OOO loop protection** — blocked 435-draft "Credit balance is too low" storm from depleted Anthropic credits | [qwibitai/nanoclaw#1899](https://github.com/qwibitai/nanoclaw/pull/1899) |
| #1898 | victorbauer | Sync from upstream:main | [qwibitai/nanoclaw#1898](https://github.com/qwibitai/nanoclaw/pull/1898) |
| #1897 | AndZp | **`/build-it` SDLC infrastructure** — health socket, deploy scripts, doc-freshness CI gate for agentic software development pipeline | [qwibitai/nanoclaw#1897](https://github.com/qwibitai/nanoclaw/pull/1897) |
| #1895 | AndZp | **Persona capability surfacing** — Almanda now correctly advertises Bash, web browsing, proactive messaging in self-descriptions | [qwibitai/nanoclaw#1895](https://github.com/qwibitai/nanoclaw/pull/1895) |
| #1894 | AndZp | Slack ops skill (author noted "Pls ignore" — likely experimental) | [qwibitai/nanoclaw#1894](https://github.com/qwibitai/nanoclaw/pull/1894) |

**Key advances:** Setup experience (scripted install, WSL detection), messaging reliability (session persistence, message splitting), operational safety (OOO loop prevention, health monitoring), and protocol expansion (Telegram attachments, PDF processing).

---

## Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **#1901** WeChat onboarding incomplete after login | 1 comment, 0 reactions | [qwibitai/nanoclaw#1901](https://github.com/qwibitai/nanoclaw/issues/1901) — **Critical UX gap**: QR success creates false completion signal; requires manual DM-to-agent wiring and policy relaxation. Underlying need: **zero-config channel activation** post-auth. |
| **#1908** `nanoclaw.sh` branded setup (CLOSED) | High implicit interest (merged same day) | [qwibitai/nanoclaw#1908](https://github.com/qwibitai/nanoclaw/pull/1908) — Directly addresses onboarding friction; rapid merge signals maintainer priority on developer experience. |

**Comment volume is unusually low** (max 1 comment on issues, undefined/0 on PRs), suggesting either: (a) async review culture with heavy Discord/Slack coordination, (b) small core team with fast implicit consensus, or (c) tooling limitations in data capture. The WeChat onboarding issue (#1901) represents the most discussed user-facing problem.

---

## Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| 🔴 **Critical** | #1899 Gmail OOO loop — 435 drafts in 5 days | **FIXED** in #1899 | [qwibitai/nanoclaw#1899](https://github.com/qwibitai/nanoclaw/pull/1899) — Production incident from credit exhaustion; root cause was missing draft blocklist + OOO auto-reply cascade |
| 🟠 **High** | #1900 SDK session_id lost on mid-turn container exit | **FIXED** in #1900 | [qwibitai/nanoclaw#1900](https://github.com/qwibitai/nanoclaw/pull/1900) — Breaks conversation continuity; race condition in `runPollLoop` |
| 🟠 **High** | #1906 Ollama MCP stdio fails behind OneCLI gateway | **OPEN**, no fix PR | [qwibitai/nanoclaw#1906](https://github.com/qwibitai/nanoclaw/issues/1906) — Plain-HTTP proxy path rejects requests when LLM provider ≠ Ollama; affects hybrid provider setups |
| 🟡 **Medium** | #1902 WeChat→Telegram reply leakage | **OPEN**, no fix PR | [qwibitai/nanoclaw#1902](https://github.com/qwibitai/nanoclaw/issues/1902) — Shared agent group state pollution; channel isolation failure |
| 🟡 **Medium** | #1901 WeChat onboarding incomplete | **OPEN**, no fix PR | [qwibitai/nanoclaw#1901](https://github.com/qwibitai/nanoclaw/issues/1901) — UX gap, not crash, but blocks adoption |
| 🟡 **Medium** | #1896 Telegram message edits silently dropped | **OPEN**, no fix PR | [qwibitai/nanoclaw#1896](https://github.com/qwibitai/nanoclaw/issues/1896) — Router swallows edits; agent never sees corrections |
| 🟡 **Medium** | #1889 cleanup-sessions silent fail on missing sqlite3 | **PR OPEN** #1889 | [qwibitai/nanoclaw#1889](https://github.com/qwibitai/nanoclaw/pull/1889) — Data loss risk; hard-fail fix proposed |
| 🟢 **Low** | #1888 ONECLI_API_KEY not threaded to host client | **PR OPEN** #1888 | [qwibitai/nanoclaw#1888](https://github.com/qwibitai/nanoclaw/pull/1888) — Credential injection gap, likely affects local dev |

**Pattern:** v2's multi-channel architecture has **state isolation bugs** (reply leakage, edit dropping) and **setup/credential edge cases** (WSL, OneCLI, sqlite3). The Gmail OOO loop and session_id loss were production-hardening fixes.

---

## Feature Requests & Roadmap Signals

| PR/Issue | Signal | Likelihood in Next Release |
|:---|:---|:---|
| #1893 Remotion video generation (AWS Lambda) | **OPEN** — Complex skill, needs IAM + Lambda setup | Medium — infrastructure heavy, may need iteration |
| #1892 Nostr signing daemon (kernel keyring isolation) | **OPEN** — Security-critical, architectural | High — aligns with v2's decentralized direction |
| #1891 NWC Lightning wallet (NIP-47) | **OPEN** — Depends on #1892 signing daemon | High — paired release likely |
| #1890 Context compaction early warning | **OPEN** — Chat reliability, user-facing | High — addresses operational pain |
| #1882 Nostr DM (NIP-17 gift-wrap) | **OPEN** — Depends on signing daemon | High — paired with #1892/#1891 |
| #1908 `nanoclaw.sh` setup script | **MERGED** | Already in |
| #1897 `/build-it` SDLC infrastructure | **MERGED** | Already in |

**Prediction:** Next release likely bundles **Nostr protocol suite** (signing daemon + DMs + Lightning) as a major v2 differentiator, plus **context management** (#1890) and **setup hardening** (#1903, #1904 WSL fixes). Remotion may trail due to AWS complexity.

---

## User Feedback Summary

| Pain Point | Evidence | Satisfaction Impact |
|:---|:---|:---|
| **Setup fragility on WSL/non-systemd** | #1903, #1904, #1887 (telemetry/curl guards) | 😤 Frustrated — multiple PRs needed for "basic" install |
| **"It works but doesn't work" onboarding** | #1901 WeChat QR success → silent failure | 😤 Confused — false completion signals worse than errors |
| **Cross-channel message leakage** | #1902 WeChat→Telegram | 😤 Trust erosion — privacy-critical for personal AI |
| **Silent data loss (edits, sessions)** | #1896 edits dropped, #1900 session_id lost, #1889 sqlite3 fail | 😤 Unreliable — users can't tell if system received input |
| **Credential/configuration propagation gaps** | #1906 OneCLI, #1888 ONECLI_API_KEY | 😐 Annoyed — "configured but not applied" |
| **Anthropic credit exhaustion cascades** | #1899 435 drafts | 😤 Operational crisis — cost + noise |
| **Desire for decentralized/self-sovereign features** | #1891-1893, #1882 Nostr/Lightning | 😍 Enthusiastic — unique positioning vs. cloud-only competitors |

**Core tension:** Users want NanoClaw's ambitious multi-channel, multi-protocol vision, but **v2's architectural complexity is exposing edge cases in state management, credential flow, and setup robustness** that basic testing misses.

---

## Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| #1906 Ollama MCP behind OneCLI | 1 day | **High** — blocks hybrid Ollama+cloud LLM setups | Maintainer triage + gateway architecture review |
| #1902 Cross-channel reply leakage | 1 day | **High** — privacy/data integrity | Agent group routing redesign; may need breaking v2 change |
| #1896 Telegram edit dropping | 1 day | **Medium** — UX degradation | Router enhancement for edit events; spec unclear |
| #1889 sqlite3 hard-fail | 1 day | **Medium** — data loss | Review + merge (#1889 PR open) |
| #1888 ONECLI_API_KEY threading | 1 day | **Medium** — local dev friction | Review + merge (#1888 PR open) |
| #1887 telemetry opt-out | 1 day | **Low** — compliance/trust | Review + merge (#1887 PR open) |

**Note:** All items are ~1 day old due to data window, but the **absence of older issues** in this snapshot suggests either: (a) healthy issue turnover, (b) aggressive stale-bot pruning, or (c) young project with limited historical backlog. The **17 open PRs vs. 10 closed** warrants maintainer attention to prevent review queue bloat, especially for the Nostr/Lightning stack (#1882, #1891-1893) which has interdependencies.

---

*Digest generated from GitHub activity data for qwibitai/nanoclaw on 2026-04-22.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-22

## 1. Today's Overview

NullClaw shows **moderate community activity** with 2 active issues and 1 open PR updated in the last 24 hours, though no releases were cut. The project appears to be in a **stabilization phase** for its gateway component, with community members actively contributing fixes to production-reported bugs. No maintainer merges occurred today, suggesting either review backlog or maintainer absence. The dual-language PR description (EN/CN) indicates growing international contributor interest. Overall project health is **cautiously stable**—active bug reporting and community-driven fixes exist, but maintainer throughput may be a bottleneck.

---

## 2. Releases

**No new releases.** The project has no published releases as of this digest.

---

## 3. Project Progress

**No PRs merged or closed today.**

| PR | Status | Progress Assessment |
|---|---|---|
| [#853](https://github.com/nullclaw/nullclaw/pull/853) — fix(gateway): add accept-loop backoff to prevent CPU spin | Open, updated 2026-04-21 | **Community fix ready for review.** Addresses critical CPU spin bug (#851). Contains bounded backoff implementation with explicit constants and logging controls. Awaiting maintainer merge. |

**Gap:** No forward progress on merge velocity. The fix has been available for ~2 days without integration.

---

## 4. Community Hot Topics

### Most Active: Documentation Gap — Tailscale Integration
- **[#826](https://github.com/nullclaw/nullclaw/issues/826)** — `[documentation] How to use nullclaw gateway with Tailscale?`  
  - **12 comments** | Created 2026-04-15, active through 2026-04-21  
  - **Underlying need:** Users deploying NullClaw on VPS infrastructure increasingly use Tailscale for zero-config VPN mesh networking. The `NotImplemented` error on `nullclaw gateway -v` suggests either missing Tailscale SOCKS5/HTTP proxy support or incomplete error messaging for unsupported network tunnel backends.  
  - **Signal:** Self-hosting users need clearer documentation on network topologies and which tunnel methods are actually implemented.

### Active Bug Report: Resource Exhaustion on Edge Hardware
- **[#851](https://github.com/nullclaw/nullclaw/issues/851)** — `[bug] gateway: Busy-loop on accept4() returning EAGAIN pegs CPU core`  
  - **3 comments** | Created 2026-04-19, active through 2026-04-21  
  - **Underlying need:** ARM64/embedded deployments (Raspberry Pi 5) are a target use case. The busy-loop indicates insufficient error-handling robustness for non-blocking I/O under resource-constrained or kernel-scheduling-varied environments.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| **🔴 High** | [#851](https://github.com/nullclaw/nullclaw/issues/851) — CPU core pegged at 100% on idle gateway | **Fix PR available:** [#853](https://github.com/nullclaw/nullclaw/pull/853) | Busy-loop in `accept4()` on `EAGAIN`. Affects Raspberry Pi 5 / aarch64 / Debian 13. Directly impacts edge/self-hosted deployments. |
| **🟡 Medium** | [#826](https://github.com/nullclaw/nullclaw/issues/826) — Tailscale tunnel failure with `NotImplemented` | No fix PR | Degraded functionality, not crash. Blocks specific deployment pattern but has workarounds (non-Tailscale tunnels). |

**Stability Assessment:** One critical resource-exhaustion bug with community fix pending. Merge of [#853](https://github.com/nullclaw/nullclaw/pull/853) should be prioritized to prevent user attrition on ARM64/embedded platforms.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Tailscale/native WireGuard tunnel backend** | [#826](https://github.com/nullclaw/nullclaw/issues/826) | Medium-High — `NotImplemented` error implies placeholder for planned implementation; user demand is explicit |
| **ARM64/embedded optimization pass** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | High — Fix PR exists; broader platform hardening likely follows |
| **Configurable accept-loop backoff parameters** | [#853](https://github.com/nullclaw/nullclaw/pull/853) | High — Already implemented in PR, exposes `ACCEPT_ERROR_BACKOFF_MAX_MS` |

**Predicted next version focus:** Gateway reliability and platform expansion (ARM64, alternative tunnel backends).

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Self-hosting complexity** | [#826](https://github.com/nullclaw/nullclaw/issues/826) — Tailscale + VPS setup | 😤 Frustrated — "How to use" implies documentation gap; `NotImplemented` is opaque |
| **Edge deployment pain** | [#851](https://github.com/nullclaw/nullclaw/issues/851) — Pi 5 CPU burn | 😤 Frustrated — 100% CPU on idle is severe; user investigated with `strace` before reporting |
| **Community willingness to fix** | [#853](https://github.com/nullclaw/nullclaw/pull/853) by `manelsen` | 😊 Positive — Active contributor base, bilingual engagement |

**Core persona:** Technical self-hosters running NullClaw on VPS or ARM64 home servers, expecting "it just works" gateway tunneling. They tolerate complexity but not opaque failures or resource waste.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#853](https://github.com/nullclaw/nullclaw/pull/853) — Gateway CPU spin fix | ~2 days open | **High** — Known fix for production bug; each day unmerged risks more users hitting CPU exhaustion | Maintainer review & merge |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) — Tailscale documentation | 7 days, 12 comments | Medium — Longest-running active thread; user engagement high but no maintainer response clarifying `NotImplemented` intent | Maintainer clarification: is Tailscale on roadmap? Documentation update or honest "not supported" |

**Maintainer attention deficit detected:** No visible maintainer activity in 24h despite active community contributions and 12-comment documentation thread. This is the primary project health risk.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-22

## 1. Today's Overview

IronClaw shows **high velocity but significant quality pressure** as it pushes toward engine v2 maturity. With 50 PRs and 30 issues updated in 24 hours, the project is in active development sprint mode, yet the 39:11 open-to-merged PR ratio and 21:9 open-to-closed issue ratio indicate a growing backlog. The v0.26.0 release shipped with major engine-v2 infrastructure (per-project sandboxes, mission lifecycle), but immediate post-release issues—including a broken Linux installer and tool registry desync—suggest stabilization work remains critical before broader adoption.

---

## 2. Releases

### [ironclaw-v0.26.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.26.0) (2026-04-21)

| Aspect | Detail |
|--------|--------|
| **Headline** | Engine v2 sandbox infrastructure + LLM provider hot-reload |
| **Key Additions** | • **Per-project sandbox with mission lifecycle and cost tracking** ([PR #2211](https://github.com/nearai/ironclaw/pull/2211), [PR #2660](https://github.com/nearai/ironclaw/pull/2660)) — foundational for multi-tenant workload isolation<br>• **Hot-reload provider chain from settings** ([PR #2673](https://github.com/nearai/ironclaw/pull/2673)) — reduces restart friction for LLM configuration changes |
| **Breaking Changes** | None explicitly documented; however, engine-v2 features require `engine_v2 = true` opt-in |
| **Migration Notes** | Existing v1 engine behavior unchanged per [Issue #2767](https://github.com/nearai/ironclaw/issues/2767); v2 default flip tracked in [Issue #2800](https://github.com/nearai/ironclaw/issues/2800) with staged PRs |

**Post-release risk**: [Issue #2818](https://github.com/nearai/ironclaw/issues/2818) reports the v0.26.0 installer fails on `x86_64-unknown-linux-gnu` — immediate patch likely needed.

---

## 3. Project Progress

### Merged/Closed PRs (11 total, selected highlights)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#2816](https://github.com/nearai/ironclaw/pull/2816) | zetyquickly | Fix `notify_thread_id` plumbing | Closed; web notification reliability |
| [#2790](https://github.com/nearai/ironclaw/pull/2790) | serrrfirat | Multi-tenant widget isolation + portfolio nudge recovery | Closed; security hardening for SaaS deployments |
| [#2811](https://github.com/nearai/ironclaw/pull/2811) | ironclaw-ci[bot] | Staging promotion `4dea5dd5` | Automated CI promotion |

### Advancing Features (Open PRs with momentum)

| PR | Author | Feature Area | Status |
|----|--------|--------------|--------|
| [#2800 tracker](https://github.com/nearai/ironclaw/issues/2800) / [#2804](https://github.com/nearai/ironclaw/pull/2804)-[#2806](https://github.com/nearai/ironclaw/pull/2806) | ilblackdragon | **Engine v2 default flip** | Scaffolded; 5 stacked PRs in progress |
| [#2815](https://github.com/nearai/ironclaw/pull/2815) | serrrfirat | Typed assistant content model (engine v2) | Addresses [Issue #2813](https://github.com/nearai/ironclaw/issues/2813) |
| [#2814](https://github.com/nearai/ironclaw/pull/2814) | serrrfirat | Enforce tool use for stop/pause/cancel commands | Fixes [Issue #2808](https://github.com/nearai/ironclaw/issues/2808) |
| [#2812](https://github.com/nearai/ironclaw/pull/2812) | serrrfirat | Stop exposing internal reasoning in browser chat | Privacy/regression fix |
| [#2807](https://github.com/nearai/ironclaw/pull/2807) | ArakawaHenri | `finish_job` tool for explicit worker completion | Worker reliability |
| [#2548](https://github.com/nearai/ironclaw/pull/2548) | standardtoaster | Workspace entities with membership + cross-workspace sharing | **DB migration**; multi-tenancy foundation |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [Issue #2285](https://github.com/nearai/ironclaw/issues/2285) — Web UI refresh restores wrong thread type | **7 comments** | Long-running QA verification cycle; fix merged to staging 4/12 but **still pending hosted-staging re-verification 10 days later** — indicates deployment pipeline friction or QA capacity constraint |
| 2 | [Issue #2087](https://github.com/nearai/ironclaw/issues/2087) — IronClaw stops responding after Notion setup | **4 comments** | Agent/tool integration robustness; likely orchestrator hang or infinite loop in auth flow |
| 3 | [Issue #1537](https://github.com/nearai/ironclaw/issues/1537) — WASM credential injection fails on hosted TEE | **4 comments** | **Closed**; TEE secrets runtime injection fixed — security-critical for cloud offering |
| 4 | [Issue #2585](https://github.com/nearai/ironclaw/issues/2585) — Active missions not reflected in completed count | **3 comments** | UI state consistency; mission lifecycle UI/backend desync |

### Underlying Needs

- **State convergence** ([Issue #2792](https://github.com/nearai/ironclaw/issues/2792), epic by ilblackdragon): The dominant architectural theme. Multiple issues (thread restoration, mission counts, UI drift) trace to "two sources of truth diverge, and nothing forces them back together."
- **Engine v2 clarity**: Tool registry split between v1/v2 ([Issue #2793](https://github.com/nearai/ironclaw/issues/2793), [PR #2794](https://github.com/nearai/ironclaw/pull/2794)) creates user-visible errors where advertised tools appear unregistered.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **P1 — Release-blocking** | [#2818](https://github.com/nearai/ironclaw/issues/2818) | v0.26.0 installer fails on Linux x86_64 (cargo-dist artifact) | **No fix PR yet**; reported today |
| **P1** | [#2808](https://github.com/nearai/ironclaw/issues/2808) | Stop command fails to stop active mission via chat | [PR #2814](https://github.com/nearai/ironclaw/pull/2814) open — enforces tool use |
| **P1** | [#2736](https://github.com/nearai/ironclaw/issues/2736) | Failed mission creates runaway threads, inflates count | **Closed** 4/21 |
| **P2** | [#2809](https://github.com/nearai/ironclaw/issues/2809) | Project creation request creates mission instead | No fix PR; UX confusion in NLP intent parsing |
| **P2** | [#2285](https://github.com/nearai/ironclaw/issues/2285) | Web UI refresh restores assistant thread vs. active thread | Fix staged, QA verification pending |
| **P2** | [#2585](https://github.com/nearai/ironclaw/issues/2585) | Active missions not reflected in completed count | No fix PR |
| **P2** | [#2087](https://github.com/nearai/ironclaw/issues/2087) | Agent stops responding after Notion setup | No fix PR; needs reproduction |
| **P2** | [#2766](https://github.com/nearai/ironclaw/issues/2766) | MCP tool names >64 chars break Bedrock | No fix PR; AWS provider compatibility |

**Regression pattern**: Mission lifecycle (create/stop/count) has multiple active bugs despite v0.26.0 shipping "mission lifecycle" features — suggests the v2 mission system needs integration hardening.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Engine v2 as default** | [Issue #2800](https://github.com/nearai/ironclaw/issues/2800) + 5 stacked PRs | **High** (v0.27.0?) | Explicit tracker with scaffolded tests; opt-out mechanism landing in [PR #2805](https://github.com/nearai/ironclaw/pull/2805) |
| **Gateway state convergence** | [Issue #2792](https://github.com/nearai/ironclaw/issues/2792) (epic) | Medium | Architectural epic; Phase 1 PR (#2797) referenced, likely multi-release |
| **Feishu long connection mode** | [Issue #2781](https://github.com/nearai/ironclaw/issues/2781) | Medium | Enterprise China market; webhook alternative |
| **Report Issue UI with scrubbed state** | [Issue #2791](https://github.com/nearai/ironclaw/issues/2791) | Medium | Developer experience; uses existing github tool |
| **Public ironclaw-worker Docker image** | [Issue #748](https://github.com/nearai/ironclaw/issues/748) (5 👍) | Lower | 6 weeks old, blocked on registry publishing infrastructure |
| **NEAR AI hosted webhook port exposure** | [Issue #2778](https://github.com/nearai/ironclaw/issues/2778) | Medium | Needed for Feishu, other inbound channels on managed service |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Setup friction** | [#2818](https://github.com/nearai/ironclaw/issues/2818) (installer broken), [#1680](https://github.com/nearai/ironclaw/issues/1680) (Railway env vars not visible), [#748](https://github.com/nearai/ironclaw/issues/748) (Docker image missing) | High — blocks adoption |
| **UI/backend state drift** | [#2285](https://github.com/nearai/ironclaw/issues/2285), [#2585](https://github.com/nearai/ironclaw/issues/2585), [#2809](https://github.com/nearai/ironclaw/issues/2809), epic [#2792](https://github.com/nearai/ironclaw/issues/2792) | High — erodes trust |
| **Mission control reliability** | [#2808](https://github.com/nearai/ironclaw/issues/2808) (can't stop), [#2736](https://github.com/nearai/ironclaw/issues/2736) (runaway threads), [#2809](https://github.com/nearai/ironclaw/issues/2809) (wrong creation) | High — core v2 feature unstable |
| **Tool discoverability** | [#2793](https://github.com/nearai/ironclaw/issues/2793) — `tool_info` fails for existing tool | Medium — LLM confusion propagates to users |

### Use Cases Gaining Traction

- **Multi-tenant SaaS**: Widget isolation ([PR #2790](https://github.com/nearai/ironclaw/pull/2790)), workspace membership ([PR #2548](https://github.com/nearai/ironclaw/pull/2548)), staging promotions indicate enterprise readiness push
- **China enterprise (Feishu)**: [Issue #2781](https://github.com/nearai/ironclaw/issues/2781) + [Issue #2778](https://github.com/nearai/ironclaw/issues/2778) — regional expansion signals

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#748](https://github.com/nearai/ironclaw/issues/748) — Public ironclaw-worker Docker image | **6+ weeks** (Mar 9) | Blocks Docker sandbox for most users; 5 👍 | Maintainer decision on registry (GHCR? Docker Hub?) |
| [#773](https://github.com/nearai/ironclaw/issues/773) — Google OAuth app verification | **6+ weeks** (Mar 9) | "Scary" unverified app warning for non-@near.ai users; limits G Suite adoption | External dependency on Google verification process; needs owner follow-up |
| [#1680](https://github.com/nearai/ironclaw/issues/1680) — Railway template LLM env vars not visible | **4 weeks** (Mar 26) | One-click deploy broken for model selection | Template configuration fix; may need Railway-specific docs |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) — Abound demo (XL PR) | **3+ weeks** (Mar 30) | High-risk, multi-scope; may be stale | Rebase needed? Review bandwidth |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) — Native Matrix channel (XL PR) | **2.5 weeks** (Apr 4) | Large feature; E2EE, persistence complexity | Core maintainer review; dependency updates |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) — Aliyun Coding Plan (XL PR) | **1 month** (Mar 20) | China market expansion; HTTP/1.1 compatibility | Review stalled; contributor may need rebase |

---

## Project Health Assessment

| Metric | Status |
|--------|--------|
| **Velocity** | ⬆️ High — 50 PRs, 30 issues in 24h |
| **Quality** | ⚠️ Concerning — installer broken day after release, multiple mission bugs, state drift pattern |
| **Community** | ➡️ Moderate — active QA (joe-rlo), core contributors (ilblackdragon, serrrfirat) driving, but long PR queues |
| **Strategic focus** | Engine v2 default flip is the organizing priority; execution risk is integration stability |

**Recommendation**: Consider a v0.26.1 hotfix for [#2818](https://github.com/nearai/ironclaw/issues/2818) and mission lifecycle bugs before advancing v2 default flip.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-22

## 1. Today's Overview

LobsterAI shows **high development velocity** with 18 PRs updated in the last 24 hours (13 merged/closed, 5 open) and a fresh release (2026.4.21). The project demonstrates strong maintainer responsiveness with same-day turnaround on critical fixes, particularly around image handling on macOS and DingTalk integration stability. However, the presence of two active bugs—including a significant diff rendering regression introduced in the latest release—suggests some quality control gaps despite rapid iteration. Dependency maintenance is notably active with multiple Dependabot PRs, though Vite upgrade PRs appear duplicated (#1766 and #1281), indicating potential review backlog. Overall project health is **good with caution flags** for regression risk.

---

## 2. Releases

### [2026.4.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.21) — Released 2026-04-21

| Change | Author | PR |
|--------|--------|-----|
| **feat(openclaw):** Upgrade to v2026.4.14 with startup optimizations | @btc69m979y-dotcom | [#1750](https://github.com/netease-youdao/LobsterAI/pull/1750) |
| **fix(cowork):** Suppress heartbeat prompt history leaks | @nmgwddj | [#1710](https://github.com/netease-youdao/LobsterAI/pull/1710) |
| **feat(im):** *(truncated in source)* | — | — |

**Notable:** The release includes OpenClaw framework upgrade with startup performance improvements, but the release notes appear truncated. The diff regression bug (#1783) was reported same-day, suggesting this release may have introduced or exposed the issue.

---

## 3. Project Progress

### Merged/Closed PRs (13 items)

| PR | Area | Summary | Significance |
|----|------|---------|------------|
| [#1782](https://github.com/netease-youdao/LobsterAI/pull/1782) | Multi-area | Release/2026.04.18 merge — email channel, startup perf, auto-update, SQLite backup, onboarding | **Major release consolidation** |
| [#1719](https://github.com/netease-youdao/LobsterAI/pull/1719) | IM | **Lobster Email (龙虾邮箱)** integration as new IM gateway channel with full config UI, sync, session mapping | New communication channel |
| [#1781](https://github.com/netease-youdao/LobsterAI/pull/1781) | IM/DingTalk | Downgrade `dingtalk-connector` 0.8.17→0.8.16 to fix startup crash | **Critical stability fix** |
| [#1780](https://github.com/netease-youdao/LobsterAI/pull/1780) | Renderer/Main/Cowork | Fix macOS pasted images invisible to model; exclude image paths when base64 available | **Platform-specific bugfix** |
| [#1779](https://github.com/netease-youdao/LobsterAI/pull/1779) | Docs/Skills | Update YoudaoNote skill | Skill maintenance |
| [#1778](https://github.com/netease-youdao/LobsterAI/pull/1778) | Docs/Main | Improve IM sync algorithm; fix test cases | Reliability improvement |
| [#1777](https://github.com/netease-youdao/LobsterAI/pull/1777) | Renderer/Main/Cowork | Add diagnostic logs for image attachment pipeline | Debugging infrastructure |
| [#1776](https://github.com/netease-youdao/LobsterAI/pull/1776) | Main/Skills | Silently clean state when skill directory missing, avoid deletion errors | Graceful degradation |
| [#1775](https://github.com/netease-youdao/LobsterAI/pull/1775) | Main/OpenClaw | Include OpenClaw logs in exported ZIP for better support diagnostics | **Supportability** |
| [#1774](https://github.com/netease-youdao/LobsterAI/pull/1774) | Main/Skills/Windows | Use AppData backup to preserve user skills during Windows upgrade | **Data preservation** |
| [#1772](https://github.com/netease-youdao/LobsterAI/pull/1772) | Main/OpenClaw | Fix test: add missing `getBaseDir` mock in OpenClaw config sync tests | Test stability |
| [#1771](https://github.com/netease-youdao/LobsterAI/pull/1771) | Renderer/Main/IM | Fix NIM agent channel config; add QR code expiry refresh button | IM reliability |
| [#1768](https://github.com/netease-youdao/LobsterAI/pull/1768) | Renderer/Main | Fix IM sync issues | Follow-up to #1778 |

**Key Themes:** 
- **Image handling pipeline** received intensive same-day attention (3 PRs: #1780, #1777, #1778) for macOS-specific issues
- **Windows upgrade resilience** improved (#1774)
- **Observability enhanced** with log export expansion (#1775) and diagnostic logging (#1777)

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|------|----------|----------|
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) — Diff malfunction after update | 1 comment, **root cause identified by reporter** | **Critical user-reported regression.** Reporter `MiracleOfrRevolutionary` performed deep reverse-engineering of `extractDiffFromToolInput` in `app.asar`, identifying exact bug: `edit` branch only searches top-level `toolInput` for `oldText`/`newText`, missing nested structures. This represents **exceptional community debugging** that should fast-track a fix. |
| [#9](https://github.com/netease-youdao/LobsterAI/issues/9) — [stale] bug report | Updated after 2 months, 1 comment | Long-running Windows Git toolchain issue; stale label suggests maintainer attention gap. Log dump format indicates environment detection problems. |

**Underlying Needs:** 
- Users need **reliable diff visualization** for code editing workflows (core value proposition)
- **Better regression testing** for release candidates, especially around OpenClaw tool input parsing
- Windows users experiencing **environment configuration edge cases**

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 **Critical** | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | **Edit diff completely broken** after 2026.4.21 update; `extractDiffFromToolInput` fails to extract `oldText`/`newText` from nested tool input structures | **NO FIX PR YET** — community provided root cause |
| 🟡 **High** | [#1781](https://github.com/netease-youdao/LobsterAI/pull/1781) | DingTalk connector 0.8.17 caused startup crash due to OpenClaw plugin module loader failing on `openclaw/plugin-sdk/*` imports | **FIXED** via downgrade |
| 🟡 **High** | [#1780](https://github.com/netease-youdao/LobsterAI/pull/1780) | macOS pasted images invisible to model; base64 images dropped due to path sanitization | **FIXED** same day |
| 🟢 **Medium** | [#1772](https://github.com/netease-youdao/LobsterAI/pull/1772) | Test regression: `getBaseDir` mock missing in OpenClaw config sync tests | **FIXED** |
| 🟢 **Medium** | [#1776](https://github.com/netease-youdao/LobsterAI/pull/1776) | Skill deletion crashes when directory missing | **FIXED** |

**Stability Assessment:** Rapid response to introduced bugs (image issues fixed same day), but the **unfixed diff regression** is a significant concern for a coding-assistant product. The pattern of "release → immediate bug report → hotfix" suggests need for expanded pre-release testing.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal Strength | Prediction |
|------|-----------------|------------|
| [#605](https://github.com/netease-youdao/LobsterAI/pull/605) — Cron expression preview (5 future executions) | ⭐⭐⭐⭐⭐ | **Likely v2026.5.x** — Well-scoped, UI-complete with demo screenshot, stale since March but recently updated. Low risk, high UX value for scheduled tasks |
| [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) — i18n 'edit' translation key | ⭐⭐⭐⭐⭐ | **Next patch release** — Trivial fix, ready to merge |
| Email channel integration (#1719) | ✅ **SHIPPED** | Now in production |
| Auto-update coordinator (#1782) | ✅ **SHIPPED** | Infrastructure for smoother updates |
| SQLite backup/recovery (#1782) | ✅ **SHIPPED** | Data resilience feature |

**Emerging Patterns:**
- **Internationalization gaps** being filled incrementally (#1773)
- **Scheduled task UX** is a clear community contribution ready for maintainer action
- **Log export and diagnostics** investments suggest enterprise/support readiness push

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Frequency Signal |
|-------|-------------|----------------|
| **Diff rendering failure** (#1783) | Core editing workflow broken; users cannot see code changes | Post-update immediate report |
| **macOS image paste** (#1780, #1777) | Multimodal capabilities fail on Apple platform | 2 PRs + diagnostic logging = persistent issue |
| **Windows upgrade skill loss** (#1774) | User custom skills deleted on update | Fixed, but indicates prior data loss risk |
| **DingTalk startup crash** (#1781) | Enterprise IM integration unusable | Fixed via emergency downgrade |

### Satisfaction Indicators
- **Positive:** Same-day fix turnaround for image issues; detailed community debugging collaboration
- **Negative:** Release introduced visible regression; users doing their own reverse-engineering to report bugs

### Use Case Signals
- Heavy **code editing/editing workflow** usage (diff feature critical)
- **Enterprise/team deployment** (DingTalk, NIM, email channels; cowork features)
- **Cross-platform** usage (Windows upgrade paths, macOS-specific image handling)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#9](https://github.com/netease-youdao/LobsterAI/issues/9) — Git bash path injection | **62 days** (since 2026-02-20) | Medium | Needs triage: Windows Git environment detection reliability; may affect CI/CD scenarios |
| [#605](https://github.com/netease-youdao/LobsterAI/pull/605) — Cron preview | **32 days** (since 2026-03-21) | Low | Ready for final review; feature-complete, just needs maintainer bandwidth |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron dependency bump | **20 days** | Low | Dependabot; may be superseded by #1782 release |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) — Vite 5→8 bump | **20 days** | Low | **DUPLICATE** of #1766; close one to reduce noise |

**Critical Attention Required:**
- **#1783 diff regression** — Despite being "new," the community-provided fix should be prioritized for emergency patch
- **Duplicate PR cleanup** — #1281 vs #1766 (both Vite bumps) indicates Dependabot configuration or review process issue

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-04-22.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-22

## 1. Today's Overview

Moltis demonstrated **high-velocity development activity** on 2026-04-21 with 12 issues and 4 PRs updated in a 24-hour period, achieving a balanced 50% close rate on issues (6/12) and 75% merge rate on PRs (3/4). The project released a new daily build (`20260421.05`) and showed particular intensity in **security hardening** and **sandboxing improvements**, with four issues from a single security researcher (dmitriikeler) driving significant patches. The maintainer response time appears excellent—multiple issues opened and resolved same-day—suggesting healthy project governance. However, the volume of security-related reports indicates the execution sandbox remains an active attack surface requiring ongoing attention.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [`20260421.05`](https://github.com/moltis-org/moltis/releases/tag/20260421.05) | 2026-04-21 | Daily build; no detailed changelog provided in release notes |

*No breaking changes or migration notes documented in available data.*

---

## 3. Project Progress

### Merged/Closed PRs (3)

| PR | Author | Description | Linked Issue |
|----|--------|-------------|--------------|
| [#822](https://github.com/moltis-org/moltis/pull/822) | penso | **Security fix**: Two-layer defense against exec approval bypass via environment variable prefix injection (`LD_PRELOAD`, `PATH`, `PYTHONPATH`) | [#814](https://github.com/moltis-org/moltis/issues/814) |
| [#820](https://github.com/moltis-org/moltis/pull/820) | penso | **Reliability fix**: Enhanced diagnostic logging for browser container readiness failures; detects container-in-container deployments | [#786](https://github.com/moltis-org/moltis/issues/786) |
| [#819](https://github.com/moltis-org/moltis/pull/819) | penso | **Integration fix**: Extension-based MIME type inference for Telegram file attachments sent as `application/octet-stream` | [#813](https://github.com/moltis-org/moltis/issues/813) |

### Open PR (1)

| PR | Author | Description | Status |
|----|--------|-------------|--------|
| [#783](https://github.com/moltis-org/moltis/pull/783) | Cstewart-HC | Automated documentation audit: 44 docs fixed across 50 commits; 12/62 docs completed in rotation | Awaiting review since 2026-04-18 |

**Key advances**: Critical security vulnerability patched within hours of disclosure; Telegram and browser integrations hardened; documentation infrastructure modernized via automation.

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Analysis |
|------|------|-----------|----------|
| 1 | [#375](https://github.com/moltis-org/moltis/issues/375) — Google models missing `thought_signature` in function calls | **3 👍, 2 comments** | **Long-standing Google provider compatibility issue** finally resolved. Indicates ongoing friction with non-OpenAI model providers; Google's function calling format remains a source of subtle bugs. |
| 2 | [#821](https://github.com/moltis-org/moltis/issues/821) — `disable-model-invocation` flag for skills | **1 👍, 2 comments** | **Performance/scalability concern**: With 101 bundled skills, system prompt bloat becomes a real cost issue. Community seeking granular skill lifecycle control beyond enable/disable. |
| 3 | [#563](https://github.com/moltis-org/moltis/issues/563) — PDF support for bot | **2 comments** | **Media handling expansion** — closed as completed, suggesting multimodal capabilities are maturing. |

**Underlying needs**: 
- **Cost optimization** at scale (skill prompt injection)
- **Provider diversity** (Google/Anthropic/OpenRouter parity)
- **Document intelligence** (PDF processing now available)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#814](https://github.com/moltis-org/moltis/issues/814) | **Exec approval bypass** via env-var prefix injection (`LD_PRELOAD=/evil.so cat /file`) — sandbox escape | ✅ Fixed by [#822](https://github.com/moltis-org/moltis/pull/822) |
| 🟡 **High** | [#823](https://github.com/moltis-org/moltis/issues/823) | **Disk exhaustion**: `RUST_LOG=moltis_gateway=debug` fills disk with "broadcasting event" spam | ❌ **Open — no fix PR** |
| 🟡 **High** | [#793](https://github.com/moltis-org/moltis/issues/793) | **OpenRouter + Google AI Studio = HTTP 400** — provider routing failure | ✅ Fixed (closed 2026-04-21) |
| 🟡 **High** | [#786](https://github.com/moltis-org/moltis/issues/786) | **Browser container readiness timeout** (60s) — opaque failure mode | ✅ Fixed by [#820](https://github.com/moltis-org/moltis/pull/820) |
| 🟢 **Medium** | [#813](https://github.com/moltis-org/moltis/issues/813) | **Telegram drops `.md` attachments** — MIME type misclassification | ✅ Fixed by [#819](https://github.com/moltis-org/moltis/pull/819) |
| 🟢 **Medium** | [#817](https://github.com/moltis-org/moltis/issues/817) | **Discord voice messages silently dropped** — diagnostic logging needed | ❌ **Open — no fix PR** |

**Stability assessment**: Rapid security response is commendable, but **two unaddressed issues risk operational reliability**: unbounded debug logging (#823) and Discord voice handling (#817). The logging issue is particularly dangerous for production deployments.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#821](https://github.com/moltis-org/moltis/issues/821) | `disable-model-invocation` skill flag | **High** | Direct response to 101-skill scaling pain; config-only change; aligns with cost optimization trend |
| [#818](https://github.com/moltis-org/moltis/issues/818) | Landlock FS isolation for container-less deployments | **Medium-High** | Security researcher momentum; Fly.io/edge deployment use case growing; Linux-native sandboxing |
| [#816](https://github.com/moltis-org/moltis/issues/816) | `tools.exec.fs_deny_paths` via argv | **Medium** | Complements #818; container-less security theme |
| [#815](https://github.com/moltis-org/moltis/issues/815) | Strict allowlist mode for `SAFE_BINS` | **Medium** | Security hardening continuation; depends on #814 adoption feedback |

**Emerging theme**: **De-containerized deployment security** — three related issues from dmitriikeler suggest Moltis is being deployed outside Docker/Kubernetes (Fly.io, restricted hosts), requiring new sandbox primitives.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Severity |
|-------|-------------|----------|
| Skill system prompt bloat (#821) | **Latency/cost increase** per conversation turn; linear growth with skill count | Operational |
| Debug log disk exhaustion (#823) | **Production outage risk**; unbounded log growth | Operational |
| Discord/Telegram attachment handling (#813, #817) | **Silent data loss**; poor UX for multimodal workflows | UX |
| Browser container opaque failures (#786) | **Tool unavailability**; debugging friction | Developer experience |

### Use Cases Surfacing
- **Enterprise document processing**: PDF support (#563) closed
- **Platform-diverse deployments**: Fly.io, serverless, container-restricted environments
- **Multi-provider resilience**: OpenRouter fallback, Google model compatibility

### Satisfaction Indicators
- ✅ Same-day security fix turnaround
- ✅ Active maintainer engagement (penso)
- ⚠️ Documentation debt being addressed via automation (#783)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#783](https://github.com/moltis-org/moltis/pull/783) — AutoDoc batch update | **4 days open** | Documentation drift continues; 50/62 docs remain unaudited | Maintainer review and merge to maintain automation momentum |
| [#375](https://github.com/moltis-org/moltis/issues/375) — Google `thought_signature` | **43 days to resolution** | Pattern: Google provider issues take ~6 weeks to fix | Proactive Google API compatibility testing |
| [#821](https://github.com/moltis-org/moltis/issues/821) — Skill invocation flag | **1 day old, 2 comments** | High community interest; quick win | Design review for config schema |
| [#823](https://github.com/moltis-org/moltis/issues/823) — Debug log disk fill | **1 day old, 0 comments** | **Production-critical; no assignee** | Immediate triage; likely log rate-limiting or rotation fix needed |

**Recommended priority**: #823 requires urgent attention before users experience production incidents; #783 risks stalling documentation automation investment if left unmerged.

---

*Digest generated from GitHub activity 2026-04-21. All links reference `https://github.com/moltis-org/moltis`.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-22

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community velocity** with 50 issues and 40 PRs updated in the last 24 hours, indicating an active development cycle approaching the v1.1.3 stable release. The project maintains a healthy close rate (~58% issues closed, 45% PRs merged/closed) with strong maintainer responsiveness. A new beta release (v1.1.3-beta.2) dropped today addressing macOS desktop builds and upstream AgentScope dependencies. However, **MCP-related stability issues are emerging as a critical theme**, with multiple reports of agent hangs and console unresponsiveness. The community is notably engaged in long-term architectural discussions around memory optimization and multi-agent UX.

---

## 2. Releases

### [v1.1.3-beta.2](https://github.com/agentscope-ai/QwenPaw/pull/3620)
| Aspect | Detail |
|--------|--------|
| **Type** | Pre-release (beta) |
| **Key Changes** | • Version bump to 1.1.3b2 by @xieyxclack<br>• **Fix macOS desktop build** ([#3622](https://github.com/agentscope-ai/QwenPaw/pull/3622)) by @rayrayraykk<br>• **Bump AgentScope to v1.0.19** (upstream dependency sync) |
| **Breaking Changes** | None reported |
| **Migration Notes** | Users upgrading from CoPaw-branded installations should verify `WORKING_DIR` migration from `.copaw` to `.qwenpaw` (see [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [Issue #3598](https://github.com/agentscope-ai/QwenPaw/issues/3598)) |

---

## 3. Project Progress

### Merged/Closed PRs Today (18 total, selected highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) — Fix session JSON corruption recovery | @zealonexp | **P0 availability fix**: Resolves `JSONDecodeError: Extra data` from concurrent write races in session state files |
| [#3631](https://github.com/agentscope-ai/QwenPaw/pull/3631) — Auto module registration in console plugin system | @zhijianma | Console extensibility improvement |
| [#3649](https://github.com/agentscope-ai/QwenPaw/pull/3649) — Per-agent channel health check and restart API | @hongxicheng | Operational reliability: hot-restart channels without full agent restart |
| [#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655) — Backup & Restore documentation (zh + en) | @jinglinpeng | User-facing operational docs |
| [#3653](https://github.com/agentscope-ai/QwenPaw/pull/3653) — Roadmap update | @cuiyuebing | Community coordination |

### Active Open PRs Advancing Key Features

| PR | Status | Significance |
|----|--------|------------|
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) — **Memory & context rebuild** | [Under Review] | Major architectural refactor: aligns with AgentScope 2.0 long-term memory interface, supports backend switching |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) — Scope-aware effective model semantics | [Open] | Critical routing foundation for per-agent model assignment |
| [#3656](https://github.com/agentscope-ai/QwenPaw/pull/3656) — Tool Guard Approval System Refactor | [Open] | Replaces polling with `asyncio.Future` + REST API for approval flow |
| [#3630](https://github.com/agentscope-ai/QwenPaw/pull/3630) — 174 unit tests for hooks/memory/utils + CI | [Open] | Testing infrastructure at scale |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) — **Open Tasks / Help Wanted** | 59 | **Central coordination hub** for community contributions. 15+ tasks with P0-P2 prioritization. Signals healthy contributor onboarding but also maintainer bandwidth constraints. |
| 2 | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) — WORKING_DIR migration (.copaw → .qwenpaw) | 24 | **Rebranding friction**: Data split between old/new directories post-rename. Closed with guidance but [follow-up #3598](https://github.com/agentscope-ai/QwenPaw/issues/3598) shows persistent user confusion. |
| 3 | [#2613](https://github.com/agentscope-ai/QwenPaw/issues/2613) — v1.0 fresh install model access failure | 12 | **Onboarding blocker**: New users unable to connect models after installation. Error traces suggest provider configuration gaps. |
| 4 | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) — Update button, /approve UX, auto model switching | 10 | **UX consolidation request**: 6 distinct feature asks reflecting power-user friction with CLI-heavy workflows. Auto model failover and "self-evolution" (self-reflection) are ambitious architectural asks. |

### Underlying Needs Analysis
- **Rebranding debt**: The CoPaw→QwenPaw transition continues generating support load (directory paths, documentation drift)
- **Operational simplicity**: Users want one-click updates, visual approvals, and automatic resilience — reducing cognitive load
- **Model ecosystem breadth**: Requests for Zhipu, Meituan-Longcat, MiniMax multimodal show demand for Chinese provider diversity

---

## 5. Bugs & Stability

| Severity | Issue | Status | Details | Fix PR? |
|----------|-------|--------|---------|---------|
| **P0** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) — MCP TaskGroup hang (agent zombie) | **OPEN** | Agent unresponsive to DingTalk/WeChat but console works; internal TaskGroup exception. **No error surface.** | None yet |
| **P0** | [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) — MCP console freeze/unresponsive input | **OPEN** | `Cleanup loop stopped` in logs; queue manager shutdown. Reproducible with MCP enabled. | None yet |
| **P1** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) — Anthropic-compatible API 400 BadRequest | **OPEN** | `None` values in messages, missing `content` field, system message placement violations. Root cause analysis complete. | None yet |
| **P1** | [#3613](https://github.com/agentscope-ai/QwenPaw/issues/3613) — `send_file_to_user` + Volcano Ark coding plan crash | **OPEN** | Tool result structure rejected on follow-up API call (file field in history). Provider-specific. | None yet |
| **P1** | [#3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) — Console session unresponsive (requires refresh) | **OPEN** | UI state desync; content renders after manual refresh. Frontend/WebSocket issue. | None yet |
| **P1** | [#3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) — Frequent task interruption | **OPEN** | Vague report, v1.1.2. Needs reproduction details. | None yet |
| **P2** | [#3657](https://github.com/agentscope-ai/QwenPaw/issues/3657) — QwenPaw-Flash-4B-Q8_0 local model silent failure | **CLOSED** | Desktop client, Windows 11. No response or intermittent errors. | Closed without linked PR |
| **P2** | [#3648](https://github.com/agentscope-ai/QwenPaw/issues/3648) — Qwen3.6-35B-A3B-FP8 vLLM intermittent errors | **CLOSED** | Local deployment, sporadic failures. | Closed without linked PR |

**Critical Pattern**: **MCP client stability is the top risk area** — 2 P0 hangs in 24h with similar symptoms (agent alive but unresponsive). The `unified_queue_manager` cleanup loop and TaskGroup exception handling need urgent maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Per-agent model assignment (UI + backend)** | [#3599](https://github.com/agentscope-ai/QwenPaw/pull/3599), [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | **High** | PR open, backend routing aligned, UI in progress. Core infrastructure nearly complete. |
| **Memory/context system rebuild** | [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548), [#2289](https://github.com/agentscope-ai/QwenPaw/issues/2289), [#2047](https://github.com/agentscope-ai/QwenPaw/issues/2047) | **High** | Major refactor under review; MEMORY.md scaling pain is chronic user complaint. |
| **Dream log output (memory consolidation visibility)** | [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) | **Medium** | Novel UX concept with 2 comments; fits memory rebuild narrative but needs design. |
| **Whisper-based voice input** | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | **Medium** | First-time contributor, under review. Replaces Web Speech API for broader browser compatibility. |
| **SIP voice channel** | [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | **Medium** | Large feature (pyVoIP/LiveKit dual-mode, streaming STT/TTS). OpenTask item, significant scope. |
| **Semantic skill routing** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | **Medium** | Needs discussion flag; embedding-based skill filtering for large skill pools. |
| **Auto model failover / "model ladder"** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | **Low-Medium** | User request, no PR. Requires routing infrastructure + cost/ranking metadata. |
| **Self-reflection / self-evolution** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | **Low** | Aspirational; no technical proposal. Memory hooks (#3629) could enable foundation. |
| **Cross-device session sync (browser ↔ mobile)** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | **Low** | Product-level ask; no architecture for real-time sync exists. |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Installation/upgrade fragility** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [#2613](https://github.com/agentscope-ai/QwenPaw/issues/2613), [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) (update button request) | High |
| **Silent failures / poor error visibility** | [#1881](https://github.com/agentscope-ai/QwenPaw/issues/1881) (AI replied but not shown), [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) (no error on hang), [#3657](https://github.com/agentscope-ai/QwenPaw/issues/3657) (no response) | High |
| **Context/memory management opacity** | [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) (context usage indicator), [#2289](https://github.com/agentscope-ai/QwenPaw/issues/2289) (MEMORY.md bloat), [#2356](https://github.com/agentscope-ai/QwenPaw/issues/2356) (compaction failures) | Medium-High |
| **MCP reliability** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640), [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642), [#3453](https://github.com/agentscope-ai/QwenPaw/issues/3453) (MCP not persisting across sessions) | Critical |
| **Provider compatibility gaps** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) (Anthropic), [#3624](https://github.com/agentscope-ai/QwenPaw/issues/3624) (MiniMax multimodal), [#3613](https://github.com/agentscope-ai/QwenPaw/issues/3613) (Volcano Ark) | Medium |

### Positive Signals
- **Strong community contribution culture**: #2291 actively maintained, multiple first-time contributors (#3574, #3660, #3629, #3117)
- **Responsive maintainers**: Same-day closure on clear bugs (#3657, #3648, #3651)
- **Architectural investment**: Memory rebuild, routing, testing infrastructure show long-term thinking

### Use Case Patterns
- **Multi-channel deployment**: DingTalk, WeChat, Feishu integrations actively used; channel health matters
- **Local + cloud hybrid**: vLLM local deployments (#3648) alongside API providers
- **Document-heavy workflows**: File send/receive, browser automation, long context processing

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention (>7 days old, unresolved, high impact)

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3040](https://github.com/agentscope-ai/QwenPaw/issues/3040) — WebChat context compaction unstoppable | 14 days | **User trap**: UI stop button ignored, refresh doesn't abort. Core UX broken. | Frontend fix for cancellation signal |
| [#1881](https://github.com/agentscope-ai/QwenPaw/issues/1881) — Silent reply failure (logs show AI responded) | 34 days | **Trust erosion**: Users can't distinguish working vs. broken state. | Debug logging + delivery confirmation |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) — Semantic skill routing | 14 days | **Performance at scale**: Needs discussion flag unresolved. Blocking optimization for large skill installs. | Maintainer design review |
| [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) — File operation rollback | 9 days | **Data safety**: OpenTask item, user-facing recovery feature. | Review and merge decision |
| [#3394](https://github.com/agentscope-ai/QwenPaw/pull/3394) — Outdated console build warning | 7 days | **Developer experience**: Silent stale UI serving. Low risk, high clarity value. | Final review, merge |

### Emerging Concern: MCP Subsystem
The **3 related issues in 24 hours** ([#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640), [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642), [#3453](https://github.com/agentscope-ai/QwenPaw/issues/3453)) suggest MCP client implementation may need architectural review beyond point fixes. Consider dedicated tracking issue or temporary feature flag if instability persists.

---

*Digest generated from GitHub activity 2026-04-21 to 2026-04-22. All links reference https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-22

## 1. Today's Overview

ZeptoClaw showed **moderate maintenance activity** over the past 24 hours with 4 PR updates and 1 active issue, though no new releases were cut. The project's CI/CD infrastructure is receiving steady attention through Dependabot automation, but **zero community engagement** (0 comments, 0 reactions across all items) suggests limited active contributor or user participation in public channels. The single open bug regarding Telegram channel configuration represents a **functional regression in gateway mode** that could impact production deployments. Overall project health appears **stable but maintenance-focused** rather than feature-driven, with dependency management consuming most visible bandwidth.

---

## 2. Releases

**No new releases** in the past 24 hours. The project has no recent version tags or release notes to report.

---

## 3. Project Progress

**Merged/Closed PRs Today: 1**

| PR | Description | Link |
|---|---|---|
| #507 | **chore(deps): bump taiki-e/install-action from 2.68.21 to 2.72.0** — Routine GitHub Actions dependency update, merged after ~7 days in queue | [qhkm/zeptoclaw#507](https://github.com/qhkm/zeptoclaw/pull/507) |

**No feature advancement or bug fixes** were merged. All closed activity was automated dependency maintenance.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| #522 [OPEN] Telegram Channel Configuration Bug | 0 comments, 0 👍 | **Silent but critical**: Gateway mode failure breaks core Telegram integration functionality. Zero engagement may indicate: (a) small user base, (b) workaround existence, or (c) insufficient visibility. The bug description is detailed, suggesting reporter invested effort—lack of maintainer response within 24h is notable. |
| #521, #519, #520 [OPEN] Dependabot PRs | 0 comments, 0 👍 | Automated infrastructure updates with **no human discussion**; standard for mature CI but risks merge without review |

**Underlying need detected**: Users require **reliable multi-platform gateway configuration loading**. The `config.json` parsing pipeline appears fragile across deployment contexts.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Link |
|---|---|---|---|---|
| **🔴 High** | #522: Telegram channel config not loaded in gateway mode | **Open, unassigned** | ❌ None | [qhkm/zeptoclaw#522](https://github.com/qhkm/zeptoclaw/issues/522) |

**Impact assessment**: This is a **regression-level bug**—configuration that exists and validates is silently ignored, causing gateway startup failure or degraded operation. No stack trace or workaround mentioned in issue. **Risk of user attrition** if Telegram is a primary use case.

**Stability concern**: Three competing Dependabot PRs for `taiki-e/install-action` (#507 closed at 2.72.0, #520 open at 2.75.7) suggest **version drift in CI tooling** that could introduce inconsistent build environments.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** opened in the past 24 hours.

**Inferred roadmap signals from bug #522**:
- **Configuration system refactor** may be needed: robust schema validation, environment-aware loading, clear error reporting
- **Gateway mode hardening**: likely target for next minor release if Telegram integration is prioritized

**Likely next-version candidates** (based on pattern):
- Configuration validation improvements (driven by #522)
- Dependency refresh batch (accumulated Dependabot items)

---

## 7. User Feedback Summary

| Dimension | Evidence | Assessment |
|---|---|---|
| **Pain point** | Gateway config loading silently fails | **Deployment blocker** for Telegram users |
| **Use case** | Multi-channel gateway deployment (Telegram specifically) | Core functionality, not edge case |
| **Satisfaction** | Zero reactions on bug report; no "me too" comments | Either **extremely small user base** or **users already churned** |
| **Dissatisfaction signal** | Detailed bug report with no maintainer acknowledgment in 24h | **Support gap** may erode trust |

**Critical gap**: No user workarounds or community troubleshooting visible—suggests either low adoption or users blocked without recourse.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| #522 Telegram config bug | 1 day | **Escalating** | Maintainer triage, repro confirmation, assignee |
| #521 cargo-deny-action bump | 1 day | Low | Routine merge or close as superseded |
| #520 taiki-e/install-action 2.75.7 | 1 day | Low | Merge (supersedes #507) or batch with #521 |
| #519 docker/build-push-action 7.1.0 | 1 day | Low | Routine merge |

**Attention required**: Issue #522 demands **immediate maintainer response** to prevent stale bug accumulation. The Dependabot PR cluster (#519-521) should be **batched or prioritized** to reduce CI noise.

---

*Digest generated from GitHub activity 2026-04-21 to 2026-04-22. All links: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-22

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs and 25 issues updated in the last 24 hours, indicating an active pre-release stabilization period. The project has **no new releases**, suggesting the team is consolidating substantial changes before shipping. A major architectural initiative—the **schema-driven onboard rewrite**—dominates activity, alongside critical provider compatibility fixes and channel reliability improvements. The 32:18 open-to-closed PR ratio and 12:13 open-to-closed issue ratio reveal healthy throughput but also accumulating technical debt. Notably, **S0/S1 severity bugs persist in Docker distribution, Ollama provider, and desktop build paths**, indicating release-blocking issues remain unresolved.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Description | Impact |
|---|---|---|---|
| [#5977](https://github.com/zeroclaw-labs/zeroclaw/pull/5977) | perlowja | Fixed `allow_scripts` propagation through `ReadSkillTool` to skill loader | **Unblocks script-bearing skills** that were silently failing due to `unwrap_or(false)` default |
| [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904) | perlowja | Respected `runtime.kind = "native"` in sandbox auto-detection | **Security/correctness**: prevents Docker override of explicit native execution intent |

### Key Feature Advancement

- **Onboard Rewrite ([PR #5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960))**: singlerider's clean-slate replacement of 12,432 lines of onboarding code (8,534-line wizard.rs + 3,898-line TUI twin) with a **schema-driven, idempotent orchestrator**. This is a foundational infrastructure change targeting maintainability and DRY principles. Currently open, high-risk, and under active review.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | **17** | Web dashboard unavailability | **Developer experience crisis**: Build system complexity blocks new users; repeated across versions suggests CI/CD or documentation gap |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 5 | Unify providers architecture & reqwest client management | **Technical debt consolidation**: Fragmented HTTP client config causes provider-specific bugs; community wants maintainable abstraction |
| [#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741) | 4 | Interactive channel approval | **Safety UX**: Auto-deny for medium/high-risk operations breaks channel workflows; need human-in-the-loop without blocking |
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | 3 | WhatsApp-Web channel broken | **Enterprise integration reliability**: Feature flag system confusing; cargo feature management needs simplification |
| [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) | 3 | "Denied by user" in supervised mode via channel | **Permission model parity**: Interactive vs. channel execution paths diverge; users expect consistent security behavior |

### Analysis

The **web dashboard availability** (#4866, #5959, #5847) represents a **systemic onboarding failure** — three distinct issues (build instructions, Docker image missing `web/dist`, undocumented env vars) point to frontend/backend distribution pipeline gaps. The provider architecture unification (#5937) signals community readiness to invest in refactoring over incremental patching.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|---|---|---|---|---|
| **S0** — Data loss / security risk | [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | **CLOSED** | ✅ Merged | Feishu `mention_only` bypass — bot responds to unmentioned messages |
| **S0** — Data loss / security risk | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | **OPEN** | ❌ No | `gateway.web_dist_dir` / `ZEROCLAW_WEB_DIST_DIR` undocumented — blocks secure configuration |
| **S0** — Data loss / security risk | [#5967](https://github.com/zeroclaw-labs/zeroclaw/issues/5967) | **CLOSED** | ✅ Same-day | Linux pre-built installer compiles from source — **misleading distribution** |
| **S1** — Workflow blocked | [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | **OPEN** | ❌ No | WhatsApp Web feature flag confusion — channel unusable |
| **S1** — Workflow blocked | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | **OPEN** | ❌ No | Ollama provider fails when tools needed — **completely breaks local LLM workflows** |
| **S1** — Workflow blocked | [#5961](https://github.com/zeroclaw-labs/zeroclaw/issues/5961) | **OPEN** | ❌ No | `zeroclaw-desktop` build fails on Windows 11 — Tauri build issue |
| **S2** — Degraded behavior | [#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) | **CLOSED** | ✅ Merged | Session persistence ignored on web dashboard refresh |
| **S2** — Degraded behavior | [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) | **CLOSED** | ✅ Merged | Groq provider 400 error — model compatibility |
| **S3** — Minor | [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) | **OPEN** | ❌ No | Docker image missing `web/dist` — dashboard unavailable |

### Critical Concerns

- **Ollama + tools = total failure** (#5962): Local/self-hosted LLM path broken, affecting privacy-focused users
- **Windows desktop builds blocked** (#5961): Cross-platform parity gap
- **Docker distribution incomplete** (#5959): Official image non-functional for web UI — **release blocker**

---

## 6. Feature Requests & Roadmap Signals

| Issue | Category | Likelihood in Next Release | Rationale |
|---|---|---|---|
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) Schema v3 migrations | **Infrastructure** | 🔒 **Merge-blocker active** | Explicit "no partial landings" policy; blocks batch |
| [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) / [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) Onboard rewrite | **UX/Onboarding** | 🟡 **High risk, high reward** | 12K lines replaced; needs extensive validation |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) Per-sender RBAC | **Enterprise/Multi-tenant** | 🟢 **Roadmap candidate** | Clean architecture proposal; fills clear market gap |
| [#5899](https://github.com/zeroclaw-labs/zeroclaw/issues/5899) Expose session ID to tools | **Agent capabilities** | 🟢 **Quick win** | Low complexity, unblocks self-referential session ops |
| [#5980](https://github.com/zeroclaw-labs/zeroclaw/issues/5980) Enhanced OTel traces for tool failures | **Observability** | 🟡 **Medium** | Operational need; depends on tracing infra priorities |
| [#5936](https://github.com/zeroclaw-labs/zeroclaw/pull/5936) Cron job UI (Shell/Agent selector) | **Web UI** | 🟢 **Near-term** | Backend already supports; UI catch-up |

### Prediction

**Schema v3 + onboard rewrite** will likely ship together as a coordinated "ZeroClaw 0.x → 0.y" release. RBAC and session ID exposure follow as incremental enhancements. The cron UI PR (#5936) is low-risk and likely to merge first.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **"It doesn't build/run"** | #4866, #5967, #5961, #5959 | 🔴 Critical — adoption funnel leaking |
| **"Documentation is missing/wrong"** | #5847, #4646 | 🟡 High — self-service support failing |
| **"Provider X is broken"** | #4846, #5670, #5962, #5619 | 🟡 High — fragmentation tax |
| **"Permissions behave inconsistently"** | #5591, #5741 | 🟡 High — security model trust erosion |
| **"Desktop/web experience degraded"** | #5634, #4866 | 🟡 High — parity gaps |

### Satisfaction Signals

- **Matrix channel support delivered** (#3361 closed) — community request fulfilled
- **OpenRouter native routing** (#5619 closed) — power-user need addressed
- **Interactive approval flows** (#5741 closed) — safety UX improved

### Use Case Tensions

- **Self-hosters** (Ollama, local builds) experiencing more friction than cloud-API users
- **Docker-first users** hitting distribution gaps vs. source-builders
- **Channel integrators** (Telegram, WhatsApp, Feishu) dealing with platform-specific quirks vs. unified abstractions

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#5372](https://github.com/zeroclaw-labs/zeroclaw/pull/5372) Truncate oversized memory API payloads | 16 days | 🟡 Medium | **Needs author action** — stale, blocking dashboard performance fix |
| [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) Session abort + streaming persistence | 9 days | 🟡 Medium | **Needs maintainer review** — high-risk, affects core runtime stability |
| [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) SessionResetTool/SessionDeleteTool | 9 days | 🟡 Medium | **Needs maintainer review** — depends on #5900 |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) Mozilla Fluent i18n RFC | 6 days | 🟢 Low | ADR-only, not blocking; awaiting community comment period |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Provider architecture unification | 2 days | 🟡 Medium | **Design review needed** — foundational, affects all future providers |

### Maintainer Attention Required

1. **PR #5960** (onboard rewrite) — large, high-risk, needs thorough architectural review
2. **PR #5705 / #5696** (session management) — runtime core, security implications
3. **Issue #5372** — author unresponsive, consider adoption or closure

---

*Digest generated from 50 PRs and 25 issues updated 2026-04-21 to 2026-04-22.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*