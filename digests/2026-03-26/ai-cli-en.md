# AI CLI Tools Community Digest 2026-03-26

> Generated: 2026-03-26 00:11 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Cross-Comparison Report
## 2026-03-26 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing intense competitive pressure with **seven major players** actively shipping features and fixing critical bugs. All tools are converging on **MCP (Model Context Protocol) as the extensibility standard**, while diverging in their core architectural bets—Anthropic and Google emphasize reactive/agentic workflows, OpenAI prioritizes sandbox security, and emerging players (Kimi, Qwen, OpenCode) differentiate through protocol interoperability and enterprise features. The sector shows **maturity stress signals**: persistent scrolling/TUI bugs, permission system fragility, and platform parity gaps (especially Windows/WSL) dominate issue backlogs despite rapid release cadences.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Velocity Indicator |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 50 | 7 | v2.1.83 (stable) | Moderate; regression-heavy release |
| **OpenAI Codex** | — | 10+ | 5 alphas (0.117.0-a.15–19) | 🔥 Very high; stabilization sprint |
| **Gemini CLI** | — | 10 | v0.35.1 + v0.36.0-preview.3 | High; SDD architecture push |
| **GitHub Copilot CLI** | 44 tracked | 0 | v1.0.12-0/1 (patches) | Low; maintenance mode |
| **Kimi Code CLI** | 10 | 10 | v1.26.0 (beta plugins) | High; plugin system maturation |
| **OpenCode** | 50 | 50 | None | 🔥 Very high; Effect framework migration |
| **Qwen Code** | 10 | 10 | v0.14.0-preview.0 | High; automation features |

*Note: Issue/PR counts reflect filtered "hot" items in digests, not absolute totals.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|:---|:---|:---|
| **MCP lifecycle & reliability** | Claude Code, Codex, Gemini, Kimi, OpenCode, Qwen | Recovery from transient errors (#19142, #19042), approval fatigue reduction (#15800), orphan process cleanup (#2662, #2665) |
| **Keybinding/Input ergonomics** | Copilot CLI, Kimi, Qwen | SHIFT+ENTER for newlines (#1481, #1585), Vim navigation (#2561), international layout support (#1999) |
| **Permission persistence** | Claude Code, Gemini, Qwen | Cross-session "Always Allow" (#2640, #2669, #30519 meta-issue), policy engine reliability |
| **Context/compression visibility** | Claude Code, Codex, Gemini, Qwen | Manual `/compact` parity (#11325), usage percentage display (#38971), compression algorithm fixes (#2647, #2659) |
| **Terminal graphics protocols** | Claude Code | Sixel/Kitty/iTerm2 support (#2266) for inline visualization |
| **Enterprise deployment** | Claude Code, OpenCode, Qwen | MDM support (#19178), managed settings (#826), policy fragments (`managed-settings.d/`) |
| **Windows/WSL parity** | Claude Code, Codex, Kimi, OpenCode, Qwen | Platform detection (#38887), case-sensitivity fixes (#2670), shell integration |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach |
|:---|:---|:---|:---|
| **Claude Code** | Enterprise policy management, reactive hooks | Teams needing governance | Node.js-based; `managed-settings.d/` decentralized config; longest-running bug backlog (#826, 344 comments) |
| **OpenAI Codex** | Sandboxed security, telemetry, MCP observability | Security-conscious enterprises | Rust CLI rewrite; bubblewrap sandbox; rapid alpha iteration (5 releases/24h) |
| **Gemini CLI** | Spec-Driven Development (SDD), DAG task tracking | Structured workflow adopters | Go-based; tracker-project bridging; AST-aware tooling investigation (#22745) |
| **GitHub Copilot CLI** | IDE integration, VS Code ecosystem | Existing Copilot subscribers | Tight VS Code coupling; lowest community velocity (0 PRs/24h) |
| **Kimi Code CLI** | Plugin ecosystem (beta), shell mode | Extensibility-focused developers | ACP protocol adoption; `git ls-files` scaling (#1588); real-time task streaming |
| **OpenCode** | Protocol interoperability, Effect framework | Multi-provider users | TypeScript/Effect runtime migration; universal client positioning (#5182 ACP, #19180 `mcp.json`) |
| **Qwen Code** | Automation (`/loop`), Alibaba Cloud integration | APAC enterprise, CI/CD users | Cron-like task scheduling; regional endpoint handling; tree-sitter shell parsing |

**Key Architectural Bets:**
- **Effect framework** (OpenCode): Functional programming for reliability
- **Rust sandbox** (Codex): Memory safety + security isolation
- **SDD/Trackers** (Gemini): Structured agent workflows vs. free-form chat
- **ACP protocol** (Kimi, OpenCode): Anthropic's emerging standard for agent communication

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **🔥 Rapid Iteration** | OpenAI Codex, OpenCode, Gemini CLI | 5+ alphas/24h (Codex), 50 PRs/24h (OpenCode), SDD architecture push (Gemini) |
| **⚡ Active Development** | Kimi Code CLI, Qwen Code | Plugin beta (Kimi), `/loop` automation (Qwen), 10 PRs/24h each |
| **🔄 Maintenance Mode** | Claude Code, Copilot CLI | Regression-heavy releases (Claude), zero PRs (Copilot), persistent unresolved bugs |

**Maturity Signals:**
- **Most mature bug backlog**: Claude Code (#826 scrolling, 344 comments, 1 year)
- **Fastest issue resolution**: Qwen Code (Windows fix submitted same day as report)
- **Highest architectural churn**: OpenCode (Effect migration across Config/Bus/LSP/MCP services)
- **Strongest enterprise traction**: Claude Code (policy management), OpenCode (MDM support)

---

## 6. Trend Signals

| Industry Trend | Evidence | Developer Value |
|:---|:---|:---|
| **MCP as universal standard** | All 7 tools implementing; `mcp.json` compatibility (#19180); connector metrics (#15805) | Interoperable tooling ecosystem; reduced vendor lock-in |
| **Agent safety & guardrails** | #23837 (YOLO data loss), #5076 (security defaults), #2661 (iteration limits) | Trust infrastructure for autonomous modes |
| **Billing transparency as trust factor** | #15714 (Zen limits), #14593 (token burning), #11753 (Copilot over-consumption) | Cost predictability for production adoption |
| **Protocol abstraction layers** | ACP client support (#5182, #1512), Chat Completions/Responses API parity | Future-proofing against provider API drift |
| **Local/edge deployment** | Dynamic model discovery (#17670), LM Studio/llama.cpp integration | Privacy, latency, cost control for sensitive workloads |
| **Reactive/agentic architectures** | Hook events (`CwdChanged`, `FileChanged`), `/loop` command, SDD trackers | Reduced manual intervention in long-running workflows |

---

*Report compiled from 7 community digests covering 200+ issues and 100+ PRs, 2026-03-26.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-26 | github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 Open | Typographic quality control preventing orphans, widows, and numbering misalignment in AI-generated documents | Addresses universal pain point affecting "every document Claude generates"; zero engagement metrics suggest awaiting maintainer review |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 Open | Revised skill for actionable, conversation-scoped frontend design guidance | Focus on "token efficiency" and executable instructions vs. verbose documentation; 2+ months in review |
| 3 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 Open | Meta-skills for evaluating Skill structure, documentation, and security posture across 5 dimensions | Enterprise-grade quality gates; addresses growing need for Skill governance at scale |
| 4 | **[system-documentation](https://github.com/anthropics/skills/pull/95)** | 🟡 Open | Comprehensive evidence management system docs with flowcharts and architecture diagrams | Heavy documentation PR; may be stalled on scope review |
| 5 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 🟡 Open | Community health file addressing 25% GitHub community health score | Infrastructure PR; closes #452; recently updated (Mar 19) |
| 6 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics on business data | Enterprise ERP integration; bridges Claude Code with SAP ecosystem |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 🟡 Open | 10-step workflow for identifying orphaned code, unused files, documentation gaps, infrastructure bloat | Produces `CODEBASE-STATUS.md` as single source of truth; maintenance-focused |
| 8 | **[foundation/standards/development series (8 skills)](https://github.com/anthropics/skills/pull/288)** | 🟡 Open | Bulk addition: tutorial-builder, quiz-generator, a11y-auditor, changelog-curator, data-storytelling, and 4 others | Most recently updated (Mar 24); broad horizontal coverage |

---

## 2. Community Demand Trends (From Issues)

| Priority | Demand Area | Evidence | Representative Issues |
|:---|:---|:---|:---|
| **🔥 Critical** | **State Persistence & Memory** | 3+ PRs and multiple issues address session loss | [#522](https://github.com/anthropics/skills/pull/522) plan-task, [#521](https://github.com/anthropics/skills/pull/521) record-knowledge, [#629](https://github.com/anthropics/skills/pull/629) session-memory |
| **High** | **Enterprise Governance & Security** | Trust boundary concerns, SSO/auth gaps, audit requirements | [#492](https://github.com/anthropics/skills/issues/492) namespace impersonation, [#532](https://github.com/anthropics/skills/issues/532) API key requirements |
| **High** | **Skill Quality & Tooling** | Meta-skills for validation, evaluation, and best practices | [#202](https://github.com/anthropics/skills/issues/202) skill-creator rewrite, [#556](https://github.com/anthropics/skills/issues/556) eval tooling bugs |
| **Medium** | **Platform Interoperability** | MCP exposure, Bedrock compatibility, external integrations | [#16](https://github.com/anthropics/skills/issues/16) MCP exposure, [#29](https://github.com/anthropics/skills/issues/29) Bedrock usage |
| **Medium** | **Content Generation & Document Workflows** | ODT, typography, changelog, data storytelling | [#486](https://github.com/anthropics/skills/pull/486) ODT skill, [#514](https://github.com/anthropics/skills/pull/514) typography |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | Solves #1 user pain point (session state loss); recently active (Mar 9); narrow, implementable scope |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Complementary to plan-task; same author (LevNas); team knowledge sharing use case |
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | Zero-dependency design; "preserve technical facts across compaction" directly addresses context window limitations |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | Recently updated (Mar 20); fills gap in professional services workflows; structured frameworks for competitive positioning, market entry |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Novel economic primitive; natural language interface for AI service payments; crypto-adjacent but pragmatic |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for stateful, session-surviving workflows** — Skills that transform Claude Code from an ephemeral chat interface into a persistent, institutional-memory-bearing development environment, with memory/persistence PRs (#521, #522, #629) representing the highest-velocity problem-solution fit in the entire backlog.

---

*Report methodology: PRs ranked by inferred attention (creation date, update recency, description depth); Issues analyzed for thematic clustering. All data sourced from github.com/anthropics/skills public repository.*

---

# Claude Code Community Digest — 2026-03-26

## Today's Highlights

Claude Code v2.1.83 dropped with enterprise policy management improvements and reactive hook events, but the release introduced immediate regressions including broken uppercase input in xterm and empty `-p` flag output. The community continues to grapple with a persistent console scrolling bug that has accumulated 344 comments over nearly a year, while Windows and WSL users report critical stability issues across multiple subsystems.

---

## Releases

**v2.1.83** — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.83)

| Change | Impact |
|--------|--------|
| `managed-settings.d/` drop-in directory | Enterprise teams can now deploy independent policy fragments that merge alphabetically, enabling decentralized configuration management |
| `CwdChanged` and `FileChanged` hook events | Enables reactive environment management (e.g., direnv integration) for dynamic workspace contexts |

---

## Hot Issues

| # | Issue | Why It Matters | Community Pulse |
|---|-------|--------------|---------------|
| [#826](https://github.com/anthropics/claude-code/issues/826) | Console scrolls to top when Claude adds text | **Longest-running active bug** — 344 comments, 658 👍, affects daily usability for nearly a year; marked duplicate but original remains unaddressed | Frustrated; workarounds involve disabling features |
| [#33814](https://github.com/anthropics/claude-code/issues/33814) | Forces scroll to top when outputting code | **Regression confirmation** — newer report with clearer repro, 31 comments; confirms #826 is not isolated | Active investigation; users cross-referencing |
| [#30519](https://github.com/anthropics/claude-code/issues/30519) | Permissions matching fundamentally broken | **Meta-issue tracking 30+ related bugs** — community building PreTool workarounds due to staff silence since Sept 2025 | Organized frustration; ecosystem of unofficial fixes emerging |
| [#38842](https://github.com/anthropics/claude-code/issues/38842) | v2.1.83 broke uppercase letters in xterm (Linux) | **Immediate regression** — basic input broken on release day, 4 comments | Rapid reports; severity acknowledged |
| [#39053](https://github.com/anthropics/claude-code/issues/39053) | `-p` flag returns empty `result` in v2.1.83 | **CLI regression** — breaks programmatic usage despite token generation and cost incurred; closed but pattern of release instability noted | 2 comments; workaround: downgrade |
| [#39049](https://github.com/anthropics/claude-code/issues/39049) | CLI hangs silently on WSL2 | **Critical platform breakage** — "Worked Mar 23, broke Mar 23-25" — complete functionality loss | 1 comment; urgent severity |
| [#38887](https://github.com/anthropics/claude-code/issues/38887) | Windows: doesn't know it's Windows, ignores CR/LF rules in memory.md | **Platform identity crisis** — model repeatedly violates user preferences for line endings | 8 comments; exasperation with Windows support |
| [#38948](https://github.com/anthropics/claude-code/issues/38948) | Claims features work without visual verification | **Trust erosion** — model promises behavioral change via "feedback memory" then repeats same pattern | 7 comments; meta-concern about reliability |
| [#39005](https://github.com/anthropics/claude-code/issues/39005) | Performance degradation during EU night hours | **Paid tier SLA concern** — 54+ sessions documented over 2 months, €90/month Max tier | 2 comments; business-critical impact |
| [#2266](https://github.com/anthropics/claude-code/issues/2266) | Terminal Graphics Protocol Support (Sixel, Kitty, iTerm2) | **Long-standing enhancement** — 20 comments, 31 👍; would enable inline charts/diagrams | Sustained interest; technical feasibility discussed |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | Remove "retro-futuristic" recommendation from Frontend Design Skill | Community-driven UX copy cleanup; author "Trust me on this one" | Open |
| [#39041](https://github.com/anthropics/claude-code/pull/39041) | Remove retro futuristic | Duplicate/similar intent to #39043 | Open |
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | Add WhatsApp channel plugin | **Major feature** — Baileys protocol integration for bidirectional messaging, parity with Telegram/Discord | Open, 1 day old |
| [#38728](https://github.com/anthropics/claude-code/pull/38728) | Add memory-alert plugin | Process memory monitoring with terminal alerts; cross-platform (macOS/Linux) | Open |
| [#38636](https://github.com/anthropics/claude-code/pull/38636) | Add multi-setup plugin for parallel development workspaces | `/multi-setup` command for repository cloning into isolated workspaces | Open |
| [#23853](https://github.com/anthropics/claude-code/pull/23853) | Replace deprecated npm install with native installer in Dockerfile | Devcontainer modernization; removes deprecated global npm pattern | Open, 6 weeks |
| [#38182](https://github.com/anthropics/claude-code/pull/38182) | Add session-rename plugin with /rename command | Non-breaking session titling via `.meta.json` sidecars | **Closed** |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Terminal graphics protocols** | #2266 (Sixel/Kitty/iTerm2), #39024 (Kitty in statusLine API) | High — visualization is gap vs. competitors |
| **Context window visibility** | #38971 (show usage percentage), #39047 (subagent context inheritance) | Growing — 1M context underutilized |
| **macOS menu bar integration** | #16082 (hide dock icon) | Moderate — 62 👍, polished UX expectation |
| **Configurable caching duration** | #2603 (1 hour cache support) | Steady — 22 👍, cost/performance optimization |
| **Enhanced plugin capabilities** | Multiple plugin PRs + #39048 (inline command permissions), #38901 (executable preservation) | Active ecosystem — friction in plugin system |

---

## Developer Pain Points

| Category | Symptoms | Root Indicators |
|----------|----------|---------------|
| **Release stability** | v2.1.83 introduced xterm regression, `-p` flag breakage within 24h | Insufficient regression testing on Linux/CLI paths |
| **Cross-platform parity** | Windows (#38887, #39005, #38396, #39029, #39045), WSL (#39049, #39046, #39013) issues dominate recent reports | Platform detection and filesystem abstraction gaps |
| **Permission system reliability** | #30519 documents 30+ related issues, community workarounds required | Architectural complexity in policy matching; staff engagement gap |
| **Visual/TUI polish** | #826/#33814 scrolling bugs persist; #38948 hallucinated verification | TUI testing infrastructure may be insufficient |
| **Enterprise policy management** | New `managed-settings.d/` suggests recognition, but #39036 shows VS Code extension still ignores settings | Configuration propagation across clients inconsistent |

---

*Digest compiled from 50 issues, 7 PRs, and 1 release in the 24-hour window ending 2026-03-26.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-26

## Today's Highlights
The team is rapidly iterating on the Rust CLI with five alpha releases (0.117.0-alpha.15–19) in 24 hours, suggesting active stabilization work. A critical sandbox regression in bubblewrap networking (`RTM_NEWADDR`) is drawing significant community attention with multiple related issues. Meanwhile, telemetry infrastructure and MCP connector observability are receiving substantial engineering investment.

---

## Releases

| Version | Notes |
|---------|-------|
| [rust-v0.117.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.15) through [rust-v0.117.0-alpha.19](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.19) | Rapid-fire alpha releases; no detailed changelogs provided—likely internal CI/CD iterations or hotfixes. |

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) **Burning tokens very fast** | Core rate-limit concern affecting Business tier users; 262 comments indicate widespread impact on cost control. | 86 👍; active troubleshooting thread |
| [#12764](https://github.com/openai/codex/issues/12764) **401 unauthorized in CLI** | Auth breakage blocking CLI usage entirely; affects integration workflows. | 88 comments; persistent across versions |
| [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Desktop App** | Top-voted enhancement (445 👍) bridging VS Code Remote gap; critical for enterprise adoption. | Strong demand, detailed use-case discussion |
| [#14209](https://github.com/openai/codex/issues/14209) **Reconnecting issue worse from Europe** | Regional connectivity degradation; closed but symptomatic of infrastructure strain. | 50 comments; geographic pattern noted |
| [#8745](https://github.com/openai/codex/issues/8745) **LSP integration for CLI** | 212 👍; would elevate CLI from terminal tool to IDE-equivalent via diagnostics and symbol intelligence. | Active design discussion |
| [#11325](https://github.com/openai/codex/issues/11325) **Manual `/compact` in App** | Feature parity gap between CLI and Desktop; 104 👍. | Frustration over inconsistent UX |
| [#14936](https://github.com/openai/codex/issues/14936) **bwrap: Approval prompt spam** | Regression in 0.115.0 degrading trust in sandbox automation. | 25 comments; workaround hunting |
| [#14919](https://github.com/openai/codex/issues/14919) **bwrap: RTM_NEWADDR failure** | Critical Linux sandbox breakage; blocks subagent execution. | 30 👍; multiple duplicates filed |
| [#9224](https://github.com/openai/codex/issues/9224) **Codex Remote Control** | 213 👍 for mobile→desktop workflow; creative workaround shared. | Strong enthusiasm, implementation hints |
| [#15684](https://github.com/openai/codex/issues/15684) **Codex stuck on Dark Theme** | UI regression in VS Code extension; quickly closed. | 9 👍; indicates theming system fragility |

---

## Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#15810](https://github.com/openai/codex/pull/15810) **app-server: Organize transports** | Refactors `run_main_with_transport` for stdio/websocket flexibility | Foundation for multi-transport extensibility |
| [#15804](https://github.com/openai/codex/pull/15804) **telemetry: queue data** | Adds telemetry queuing infrastructure | Reliability for offline/lossy environments |
| [#15805](https://github.com/openai/codex/pull/15805) **MCP connector metrics** | Enriches `codex.mcp.call` with tool/connector metadata and latency | Critical for MCP production monitoring |
| [#15800](https://github.com/openai/codex/pull/15800) **Improve custom MCP elicitation** | "Don't ask again" support, ARC policy refinements | Reduces approval fatigue for custom tools |
| [#15693](https://github.com/openai/codex/pull/15693) **Fix old bubblewrap compatibility** | Fixes `--argv0` rejection on older Linux systems | Restores sandbox on legacy distros |
| [#15531](https://github.com/openai/codex/pull/15531) **PostToolUse shell hooks** | Non-streaming post-execution hooks matching PreToolUse | Completes hook lifecycle for shell commands |
| [#15591](https://github.com/openai/codex/pull/15591) **telemetry: turn event** | Turn-level metadata for out-of-band telemetry | Finer-grained session analytics |
| [#15812](https://github.com/openai/codex/pull/15812) **Remove skill script execve special handling** | Narrows fix for `BUGB-15761`; removes unintended escalation paths | Security hardening |
| [#15561](https://github.com/openai/codex/pull/15561) **Add `/create-api-key` slash command** | Session-local API key generation with shared OAuth flow | Reduces friction for programmatic access |
| [#15797](https://github.com/openai/codex/pull/15797) **Fix MCP tool display for hyphenated names** | Corrects status/render grouping for sanitized server names | UI polish for complex MCP setups |

---

## Feature Request Trends

1. **Remote/Headless Execution** — [#10450](https://github.com/openai/codex/issues/10450) (Desktop remote dev) and [#9224](https://github.com/openai/codex/issues/9224) (mobile remote control) show converging demand for location-agnostic agent operation.

2. **IDE Parity for CLI** — LSP integration [#8745](https://github.com/openai/codex/issues/8745) and `/compact` command parity [#11325](https://github.com/openai/codex/issues/11325) indicate CLI users expect Desktop-equivalent functionality.

3. **Windows Native Experience** — Standalone installer [#13993](https://github.com/openai/codex/issues/13993) (43 👍) and sandbox/ACL issues [#15777](https://github.com/openai/codex/issues/15777) reveal enterprise Windows deployment friction.

4. **Observability & Control** — Manual compaction, task renaming [#12564](https://github.com/openai/codex/issues/12564), and granular approval policies suggest users need more visibility into agent state.

---

## Developer Pain Points

| Category | Manifestation | Frequency Indicator |
|----------|-------------|---------------------|
| **Token Economics** | Rapid credit depletion, opaque usage accounting | [#14593](https://github.com/openai/codex/issues/14593), [#14762](https://github.com/openai/codex/issues/14762), [#15307](https://github.com/openai/codex/issues/15307) — 3 high-engagement issues |
| **Sandbox Fragility** | bwrap regressions, permission spam, network namespace failures | [#14919](https://github.com/openai/codex/issues/14919), [#14936](https://github.com/openai/codex/issues/14936), [#12888](https://github.com/openai/codex/issues/12888), [#15777](https://github.com/openai/codex/issues/15777) — Linux/Windows both affected |
| **Authentication Instability** | 401 errors, refresh token invalidation, headless environment gaps | [#12764](https://github.com/openai/codex/issues/12764), [#9634](https://github.com/openai/codex/issues/9634), [#9253](https://github.com/openai/codex/issues/9253) — CLI-specific |
| **Context/Compact Reliability** | "Remote compact task" failures, stream disconnections | [#9544](https://github.com/openai/codex/issues/9544), [#14860](https://github.com/openai/codex/issues/14860), [#14559](https://github.com/openai/codex/issues/14559) — long-running session instability |
| **MCP Approval Fatigue** | Lost "approve for this session" functionality, hyphenated name display bugs | [#15169](https://github.com/openai/codex/issues/15169), [#15797](https://github.com/openai/codex/pull/15797) — actively being addressed |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-26

---

## 1. Today's Highlights

The team shipped **v0.35.1** with a patch release alongside **v0.36.0-preview.3**, signaling active stabilization of the 0.36 preview branch. Major architectural work continues on **SDD (Spec-Driven Development)** with multiple PRs landing for DAG-based task tracking and tracker-project bridging. A critical **memory bloat fix** in shell execution (#23751) addresses crashes during high-volume command scenarios.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **[v0.35.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.1)** | Patch release; full changelog covers fixes since v0.35.0 |
| **[v0.36.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.3)** | Cherry-picked patch (055ff92) to preview branch for versioning alignment |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| **[#22141](https://github.com/google-gemini/gemini-cli/issues/22141)** — Agent loop stalls 1+ hours on small edits | **Critical performance regression** blocking daily use; 38 comments show active investigation into model response delays and agent loop inefficiencies | 🔥 25 upvotes, highly engaged |
| **[#23230](https://github.com/google-gemini/gemini-cli/issues/23230)** — Plan mode fails to switch to flash model | Breaks cost/performance expectations for planning workflow; users expect automatic model downgrade post-plan | 10 comments |
| **[#23837](https://github.com/google-gemini/gemini-cli/issues/23837)** — YOLO mode deleted entire project directory | **Safety incident**: cleanup script generated by agent wiped project; highlights urgent need for guardrails in autonomous modes | 2 comments, high severity |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — AST-aware file reads investigation | Foundation for major efficiency gains: precise method bounds, reduced token noise, better codebase navigation | 4 comments, strategic |
| **[#23815](https://github.com/google-gemini/gemini-cli/issues/23815)** — F12 debug display broken on cloudtop | UX regression for remote development workflows; requires forced redraw | 3 comments |
| **[#22855](https://github.com/google-gemini/gemini-cli/issues/22855)** — `/plan` should accept inline prompts | Reduces friction for power users; currently requires separate interactive step | 2 comments, 2 upvotes |
| **[#22822](https://github.com/google-gemini/gemini-cli/issues/22822)** — `/spec setup` migration path from `/conductor` | Breaking change management for existing SDD users | 2 comments |
| **[#23838](https://github.com/google-gemini/gemini-cli/issues/23838)** — Gemini 3.1 Pro unavailable for AI Plus subscribers | Subscription tier confusion; entitlement mismatch between marketing and CLI access | 1 comment |
| **[#23724](https://github.com/google-gemini/gemini-cli/issues/23724)** — Persistent project-level tracker storage | Enables Git-committable task state, team collaboration on SDD workflows | 1 comment |
| **[#23582](https://github.com/google-gemini/gemini-cli/issues/23582)** — Subagents unaware of approval modes | Policy engine blocks calls but subagents' instructions conflict; creates confusing failures | 1 comment, 1 upvote |

---

## 4. Key PR Progress

| PR | Feature/Fix | Impact |
|----|-------------|--------|
| **[#23692](https://github.com/google-gemini/gemini-cli/pull/23692)** — Linux sandbox dynamic expansion + worktree support | Parity with macOS Seatbelt; enables secure, flexible Linux development environments |
| **[#23836](https://github.com/google-gemini/gemini-cli/pull/23836)** — Extension-contributed tracker directories | Core SDD infrastructure: extensions can define task storage, user settings always win |
| **[#23751](https://github.com/google-gemini/gemini-cli/pull/23751)** — Fix unbounded buffer growth in shell execution | **Stability fix**: Prevents crashes/memory exhaustion on long-running or verbose commands |
| **[#23818](https://github.com/google-gemini/gemini-cli/pull/23818)** — ACP client-specific policy storage | Isolates "Always Allow" settings per IDE/editor; fixes config leakage between tools |
| **[#23693](https://github.com/google-gemini/gemini-cli/pull/23693)** — Full-height ask dialog | UX improvement for choice questions in tall terminals; removes 15-line constraint |
| **[#20974](https://github.com/google-gemini/gemini-cli/pull/20974)** — Compact tool output | High-signal rendering mode; reduces scroll fatigue, tightens prompt-to-response loop |
| **[#23814](https://github.com/google-gemini/gemini-cli/pull/23814)** — GCP development worker infrastructure | Pre-seeds remote development offloading; no-op now, enables future workspace automation |
| **[#23508](https://github.com/google-gemini/gemini-cli/pull/23508)** — Unified session mode footer | UI consolidation: single mode indicator, reduced jitter, cleaner composer layout |
| **[#23831](https://github.com/google-gemini/gemini-cli/pull/23831)** — A2A server interactive policy execution | Fixes stable regression: server now correctly forwards ask policy requests despite headless detection |
| **[#23785](https://github.com/google-gemini/gemini-cli/pull/23785)** — Helpful empty state for `/skills` | Onboarding fix: docs link when no skills configured, reducing new user confusion |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **SDD/Tracker DAG architecture** | #23804, #23803, #23802, #23724, #23320, #22822 | 🔥🔥🔥 Dominant theme: replacing markdown checklists with persistent, queryable task graphs |
| **AST-aware tooling** | #22745, #22746 | 🔥🔥 Investigation phase; potential for major token/turn reduction |
| **Memory system refinement** | #22819, #22809 | 🔥🔥 Global vs. project memory routing, proactive memory writes |
| **Plan mode UX** | #23230, #22855 | 🔥 Inline prompts, model switching, reduced friction |
| **Remote/cloudtop polish** | #23815, #23814, #22714 | 🔥 Cloudtop display fixes, workspace offloading infrastructure |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Frequency |
|------------|-------------|-----------|
| **Agent loop performance degradation** | #22141 (1+ hour stalls), #23556 (overcompression) | **Critical** — top-voted open issue |
| **Autonomous mode safety** | #23837 (data loss), #23582 (approval mode confusion) | High — trust erosion in YOLO/auto modes |
| **Model availability/entitlement gaps** | #23838 (3.1 Pro access), #23230 (plan mode switching) | Moderate — subscription tier mismatches |
| **Configuration persistence edge cases** | #23818 (ACP isolation), #23175 (duplicate warnings) | Moderate — multi-tool ecosystem friction |
| **Shell execution stability** | #23751 (memory bloat), #23571 (tmp script sprawl) | Moderate — cleanup and resource management |
| **Eval/CI reliability** | #23313, #23168, #23166 (500s, test flakiness) | Internal — blocking PR velocity |

---

*Digest compiled from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity 2026-03-25/26.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-26

---

## 1. Today's Highlights

Two patch releases (v1.0.12-0/1) landed with quality-of-life improvements including VS Code terminal hyperlink fixes and Claude settings.json support. The community is actively debating input handling ergonomics, with a highly-upvoted issue on SHIFT+ENTER behavior gaining traction. Enterprise MCP server availability remains a friction point, with multiple reports of organization policy warnings blocking third-party integrations.

---

## 2. Releases

### [v1.0.12-1](https://github.com/github/copilot-cli/releases/tag/v1.0.12-1)
- **Improved:** Status line now exposes `session_name` alongside `session_id` for better session management
- **Fixed:** OSC 8 hyperlinks now clickable in VS Code terminals; PowerShell `/flag` arguments no longer misinterpreted as file paths; trusted folder access prompt truncation resolved

### [v1.0.12-0](https://github.com/github/copilot-cli/releases/tag/v1.0.12-0)
- **Improved:** Added `.claude/settings.json` and `.claude/settings.local.json` as repo config sources; model picker now opens fullscreen with ←/→ arrow key reasoning adjustment; OTEL hooks recorded as span events (reducing telemetry overhead)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1481](https://github.com/github/copilot-cli/issues/1481) | SHIFT+ENTER executes prompt instead of line break | Violates universal chat UX convention; muscle memory conflict for users coming from Slack, Discord, Claude Code | 🔥 12 comments, 10 👍 — highest engagement |
| [#970](https://github.com/github/copilot-cli/issues/970) | macOS Gatekeeper blocks app after Homebrew upgrades | Corporate security friction; manual Privacy & Security intervention required per update | 18 👍, 5 comments — enterprise deployment blocker |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | MCP servers disappear with false "disabled by organization" warning | Breaks org-managed MCP workflows; regression from v1.0.11 | 17 👍, 4 comments — critical for enterprise users |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Transient API errors → rate limit exhaustion | Poor retry logic burns through quota; "rate limit message consumes limits" cited as insult-to-injury | 7 comments, 2 👍 |
| [#953](https://github.com/github/copilot-cli/issues/953) | Overly broad OAuth permissions request | Security-conscious users want repo-scoped access, not account-wide read/write | 6 comments, 1 👍 — trust barrier |
| [#1313](https://github.com/github/copilot-cli/issues/1313) | Session branching for conversation management | Power user workflow; competing with Claude Code's fork/branch UX | 5 👍, 5 comments |
| [#1723](https://github.com/github/copilot-cli/issues/1723) | `/ide` fails to detect VS Code workspace | Breaks IDE integration promise on macOS 26.3/Apple Silicon | 5 comments, 2 👍 |
| [#1422](https://github.com/github/copilot-cli/issues/1422) | CTRL+C cancels despite UI showing ESC only | Dangerous ambiguity; CTRL+C conflicts with terminal copy | 4 comments |
| [#2157](https://github.com/github/copilot-cli/issues/2157) | `/delegate` permission errors for repo admins | Inconsistent permission model between CLI and GitHub web | 4 comments, 1 👍 — closed but symptomatic |
| [#2248](https://github.com/github/copilot-cli/issues/2248) | Steering causes task abandonment | Core UX reliability issue; users lose work context mid-session | 2 comments |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Input ergonomics standardization** | #1481 (SHIFT+ENTER), #1999 (German keyboard @ symbol), #2287 (ESC cancellation), #2288 (visual differentiation) | CLI needs to align with established terminal/chat conventions and accessibility standards |
| **Enterprise MCP governance** | #2236, #2176, #1976, #953 | Organization policy enforcement is brittle; needs clearer admin controls and user-facing diagnostics |
| **Plugin lifecycle management** | #2296 (bulk update), #2295 (update alerts), #2249 (auto-install) | Ecosystem maturity demands better package management UX |
| **AI-assisted session hygiene** | #1313 (branching), #2292 (auto-rename), #2248 (context preservation) | Users expect intelligent conversation management as baseline |
| **Rate limit transparency** | #2101, #2289 | Billing/trust issue; users need visibility into quota consumption |

---

## 6. Developer Pain Points

**1. Keyboard Input Reliability** — International layouts (#1999 German @) and modifier key handling (#1481 SHIFT+ENTER, #1422 CTRL+C ambiguity) create daily friction. The CLI's input layer appears insufficiently tested against non-US layouts and terminal emulator variations.

**2. Enterprise Policy Drift** — Multiple reports (#2236, #2176, #1976) of MCP servers vanishing with misleading "disabled by organization" warnings suggest fragile policy sync between GitHub org settings and CLI state. The 17-upvote #2236 indicates this is not isolated.

**3. Rate Limiting UX** — Users report (#2101, #2289) that error messages themselves consume quota, and retry logic is overly aggressive. The "75% remaining but throttled" scenario in #2289 undermines paid tier value perception.

**4. macOS Security Friction** — Homebrew + Gatekeeper (#970) requires manual intervention per update, painful for corporate-managed machines. 18 upvotes signal this affects many.

**5. Context Loss During Steering** — #2248's observation that mid-session guidance causes task abandonment suggests the prompt engineering or conversation state management needs hardening for multi-turn reliability.

---

*Digest compiled from github.com/github/copilot-cli — 44 open issues, 2 releases in last 24h.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-26

---

## 1. Today's Highlights

The v1.26.0 release marks the plugin system as **beta**, signaling maturation of the extensibility architecture. A critical fix for JSON parsing with control characters lands alongside substantial shell mode improvements, including persistent `cd` and output injection into context. Meanwhile, the community is actively stress-testing the new plugin system and filing detailed UX feedback around keybindings and task queueing.

---

## 2. Releases

**[v1.26.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.26.0)** — *March 25, 2026*

| Change | Impact |
|--------|--------|
| Plugin system marked **beta** ([PR #1558](https://github.com/MoonshotAI/kimi-cli/pull/1558)) | Signals API stability commitment; encourages broader adoption |
| Fix: Replace deprecated `acp.TerminalHandle` with Client terminal methods ([PR #1400](https://github.com/MoonshotAI/kimi-cli/pull/1400)) | Resolves internal API drift |
| Fix: Auto-resolve `QuestionRequest` in yolo mode | Reduces interactive friction in autonomous workflows |

---

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|--------------|----------------|
| [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) File mentions (@) can't find files | 🔴 Open | Core UX breakage in large repos; `@` completion fails alphabetically late directories | 7 comments, active debugging |
| [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334) JetBrains IDE kimi unavailable | 🔴 Open | IDE integration blocker affecting paid subscribers | 3 comments, no maintainer response yet |
| [#1585](https://github.com/MoonshotAI/kimi-cli/issues/1585) Customizable newline keybinding (Shift+Enter) | 🔴 Open | Most +1'd UX request; `Ctrl+J` criticized as "genius" design (sarcastic) | Strong emotional language signals priority |
| [#1566](https://github.com/MoonshotAI/kimi-cli/issues/1566) Plugin system questions | 🔴 Open | Users confused about Claude Code/Open Code plugin compatibility | Documentation gap post-beta announcement |
| [#1583](https://github.com/MoonshotAI/kimi-cli/issues/1583) Queue new inputs instead of interrupting tasks | 🔴 Open | Feature parity request vs. Claude Code; workflow continuity | 0 comments but fresh (Mar 25) |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) Memory System — persistent context | 🔴 Open | Long-term roadmap item; cross-session state management | 1 comment, visionary scope |
| [#1572](https://github.com/MoonshotAI/kimi-cli/issues/1572) Invalid tools: `SearchWeb`, `FetchURL` | 🔴 Open | Tool registration failure in v1.25.0; blocking web capabilities | Fresh regression report |
| [#1570](https://github.com/MoonshotAI/kimi-cli/issues/1570) Edit tool getting stuck | 🔴 Open | Core editing reliability issue; affects daily workflows | No comments yet, needs triage |
| [#1569](https://github.com/MoonshotAI/kimi-cli/issues/1569) Queued messages lost on web disconnect | 🔴 Open | Web→CLI sync reliability; data loss risk | Feature request with clear use case |
| [#1568](https://github.com/MoonshotAI/kimi-cli/issues/1568) Client doesn't support special pan-dropping | 🔴 Open | Unclear scope (translation garbled), but filed as bug | Needs clarification |

---

## 4. Key PR Progress

| PR | Author | Feature/Fix | Technical Significance |
|----|--------|-------------|------------------------|
| [#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588) | n-WN | `git ls-files` for `@` mentions in large repos | Addresses #1375 root cause; scales to 65k+ file repos like apache/superset |
| [#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587) | n-WN | Shell mode output injection + persistent `cd` | `<system-reminder>` integration bridges shell↔agent context; real shell resolution for `~`, `-`, `CDPATH` |
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | zhang-xzh | ACP auth rewrite: terminal login + OAuth Device Flow | Enterprise-ready auth architecture; unblocks secure MCP server deployments |
| [#1586](https://github.com/MoonshotAI/kimi-cli/pull/1586) | ascl1u | Catch `aiohttp.ClientError` in `SearchWeb` | Prevents agent loop crashes on network failures; parity with `FetchURL` |
| [#1582](https://github.com/MoonshotAI/kimi-cli/pull/1582) | n-WN | Strip `id` from Gemini `FunctionCall`/`FunctionResponse` | Critical compatibility fix for Gemini models via proxy endpoints |
| [#1581](https://github.com/MoonshotAI/kimi-cli/pull/1581) | n-WN | Redirect stderr before MCP loading | Resolves #1214 terminal pollution from `mcp-remote` debug logs |
| [#1580](https://github.com/MoonshotAI/kimi-cli/pull/1580) | RealKai42 | `json.loads(strict=False)` for LLM output | Fixes #1378 control character crashes; defensive parsing across all paths |
| [#1579](https://github.com/MoonshotAI/kimi-cli/pull/1579) | RealKai42 | Prevent subprocess hang on interactive prompts | `GIT_TERMINAL_PROMPT=0` + stdin EOF eliminates credential prompt deadlocks |
| [#1578](https://github.com/MoonshotAI/kimi-cli/pull/1578) | tempurai | `--skills-dir` multi-path append | Non-breaking enhancement; enables shared + local skill composition |
| [#1576](https://github.com/MoonshotAI/kimi-cli/pull/1576) | RealKai42 | Real-time background task streaming | Fixes `/task` browser empty output; architectural unification of output consumers |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Keybinding customization** | #1585, #1574 | High — multiple requests in 24h, strong user emotion |
| **Task queueing / non-interrupting inputs** | #1583, #1569 | Emerging — Claude Code parity demand |
| **Memory / persistent context** | #1283 | Steady — long-term architectural investment |
| **Plugin ecosystem clarity** | #1566 | Immediate — beta launch documentation debt |
| **Web↔CLI synchronization** | #1569 | Niche but critical for hybrid workflows |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestation | Mitigation Status |
|------------|-----------|---------------|-----------------|
| **File discovery at scale** | High | #1375, #1276, #1339 | Draft fix in #1588 |
| **JSON parsing fragility** | Medium | #1378, #1570 | Fixed in #1580 (v1.26.0) |
| **Network resilience** | Medium | #1540, #1577 | Retry logic improved; 504 added to retryable codes |
| **MCP/ACP debug noise** | Medium | #1214, #1215 | Fixed in #1581 |
| **Shell subprocess deadlocks** | Medium | #1481, #1531, #1579 | stdin EOF + env vars in #1579 |
| **IDE integration gaps** | Low but critical | #1334 | Unresolved, needs attention |

---

*Digest compiled from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity 2026-03-25 to 2026-03-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-26

---

## 1. Today's Highlights

No new releases dropped today, but the community is buzzing with **architectural modernization** as core contributors migrate critical services (Config, Bus, LSP, MCP) to the Effect framework for better reliability. Meanwhile, **enterprise and mobile use cases** are gaining traction with PRs for macOS MDM support and mobile touch optimization. Developer pain points around **MCP lifecycle management, Zen billing transparency, and security defaults** continue to dominate issue discussions.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#480 — OS-synced dark/light mode for OpenTUI](https://github.com/anomalyco/opencode/issues/480)** | Long-running UI/UX request; theme consistency is table stakes for modern developer tools | 17 comments, 6 👍 — active discussion with implementation considerations |
| **[#10567 — "opencode" → "Claude" string replacement bug](https://github.com/anomalyco/opencode/issues/10567)** | Bizarre Anthropic-specific bug corrupting directory paths; reveals overzealous prompt filtering | Closed quickly (14 comments), but highlights provider-specific fragility |
| **[#15714 — Zen BigPickle usage limits without notice](https://github.com/anomalyco/opencode/issues/15714)** | **Trust issue**: Free tier users hit hard limits with no prior communication; billing transparency crisis | 13 comments, zero 👍 — frustration over surprise paywall |
| **[#11753 — GitHub Copilot consuming multiple premium requests](https://github.com/anomalyco/opencode/issues/11753)** | Cost explosion for oh-my-opencode users; agent session management bug | 12 comments, 9 👍 — financially impactful, awaiting fix |
| **[#6096 — Tokens-per-second display](https://github.com/anomalyco/opencode/issues/6096)** | Performance observability gap; benchmark culture needs this | 10 comments, 22 👍 — highest voted feature request |
| **[#5076 — Security-hardened defaults](https://github.com/anomalyco/opencode/issues/5076)** | **Critical**: Tool operates as "high-privilege remote control" by default; 48 👍 shows security community alarm | 8 comments, 48 👍 — fundamental architecture concern |
| **[#13740 — GitHub Copilot auth failures with multiple instances](https://github.com/anomalyco/opencode/issues/13740)** | Multi-project workflow blocker; token refresh race condition | 6 comments — enterprise/developer productivity impact |
| **[#5182 — TUI as ACP Client](https://github.com/anomalyco/opencode/issues/5182)** | Strategic positioning for Anthropic's emerging ACP protocol; future-proofing | 6 comments, 10 👍 — protocol adoption play |
| **[#6523 — Identical temp files on every run](https://github.com/anomalyco/opencode/issues/6523)** | Disk pollution (~4.1MB × N runs); hygiene issue for CI/server deployments | 5 comments — operational annoyance |
| **[#14970 — SQLite corruption on NFS with concurrent sessions](https://github.com/anomalyco/opencode/issues/14970)** | Data integrity failure in shared filesystem environments; enterprise deployment blocker | 5 comments, 9 👍 — infrastructure compatibility gap |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| **[#19185 — Bump gitlab-ai-provider to 5.3.3](https://github.com/anomalyco/opencode/pull/19185)** | DWS tool approval support | Fixes silent cancellation of workflow model tools; GitLab Duo integration reliability |
| **[#19139 — Effectify Config service](https://github.com/anomalyco/opencode/pull/19139)** | Migrate Config to Effect runtime with `InstanceState` | Core architecture modernization; eliminates global state bugs, enables better testability |
| **[#18579 — Effectify Bus service](https://github.com/anomalyco/opencode/pull/18579)** | PubSub + InstanceState migration | Replaces manual subscription Map; proper cleanup on instance disposal |
| **[#19150 — Effectify LSP service](https://github.com/anomalyco/opencode/pull/19150)** | LSP → Effect pattern with `ScopedCache` | 14 service methods now traced; per-directory lifecycle management |
| **[#19042 — MCP lifecycle fixes + Effect migration](https://github.com/anomalyco/opencode/pull/19042)** | **Critical fixes**: MCP recovery after transient errors, `cancelPending` fix, Effect migration | MCP servers no longer permanently disappear on network blips; major reliability improvement |
| **[#17670 — Dynamic model discovery for local providers](https://github.com/anomalyco/opencode/pull/17670)** | Auto-populate models from `/models` API (LM Studio, llama.cpp, etc.) | Eliminates manual model configuration friction for local AI |
| **[#19178 — macOS managed preferences (MDM) support](https://github.com/anomalyco/opencode/pull/19178)** | Enterprise deployment via `.mobileconfig` / Jamf / Kandji / FleetDM | Opens corporate/institutional adoption path |
| **[#19180 — Support `mcp.json`](https://github.com/anomalyco/opencode/pull/19180)** | Cursor/Claude-style MCP configuration compatibility | Ecosystem interoperability; lowers migration friction |
| **[#18767 — Mobile touch optimization](https://github.com/anomalyco/opencode/pull/18767)** | Touch-first UI for mobile/tablet devices | Expands addressable market beyond desktop developers |
| **[#19177 — Fallback for default session titles](https://github.com/anomalyco/opencode/pull/19177)** | Fix "New session - <timestamp>" persistence bug | UX polish; session organization improvement |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Performance observability** | #6096 (TPS display), #13584 (NVIDIA NIM extra body) | Users want visibility into speed and reasoning tokens; hardware-aware optimization |
| **Enterprise/team features** | #19178 (MDM), #9881 (worktree-filtered sessions), #6941 (WSL/SSH forwarding) | Shift from solo dev tool to team/organization infrastructure |
| **Protocol interoperability** | #5182 (ACP client), #7793 (Chat Completions API), #9628 (Responses API), #19180 (`mcp.json`) | Positioning as universal AI client, not locked to specific providers |
| **UI/UX refinement** | #480 (theme sync), #7056 (Vim navigation), #12953/#19039 (scrollable dialogs) | Mature product expectations; accessibility and power-user ergonomics |
| **Billing transparency** | #15714 (Zen limits), #11753 (Copilot over-consumption) | **Trust infrastructure** as critical as technical infrastructure |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations | Severity |
|------------|-----------|----------------|----------|
| **MCP reliability & lifecycle** | High | #19168 (process leaks), #19042 (recovery), #19179 (skill_mcp failures), #19180 (config compatibility) | 🔴 Critical — core extensibility mechanism is fragile |
| **Unexpected costs / billing opacity** | High | #15714 (Zen), #11753 (Copilot premium drain) | 🔴 Critical — financial surprise destroys trust |
| **Security defaults too permissive** | Medium | #5076 (allow-by-default permissions) | 🟡 High — requires manual hardening |
| **Multi-instance / concurrent session bugs** | Medium | #13740 (Copilot auth), #14970 (SQLite corruption), #15533 (compaction loops) | 🟡 High — breaks scale-out workflows |
| **Provider-specific fragility** | Medium | #10567 (Anthropic string replacement), #11413 (Gemini schema issues) | 🟡 High — abstraction leaks |
| **Windows platform gaps** | Medium | #8023 (CLI install), #19163 (e2e stability), #19159 (path normalization) | 🟡 Moderate — second-class citizen experience |
| **Resource leaks** | Emerging | #19168 (MCP processes), #19167 (WebKit 7.5GB memory), #6523 (temp files) | 🟡 Moderate — operational degradation over time |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues and 50 PRs processed.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-26

## 1. Today's Highlights

Qwen Code v0.14.0-preview.0 drops with major infrastructure improvements including a new `/loop` command for automation workflows and Alibaba Cloud Standard API Key support. The team is aggressively fixing IDE integration pain points, with three PRs addressing orphan ACP processes in VSCode. Windows users should note critical permission persistence fixes landing today.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.14.0-preview.0** | Preview | Full changelog pending; signals major feature batch approaching stable |
| **v0.13.0-nightly.20260325** | Nightly | Extension installation now supports non-GitHub git URLs ([PR #2539](https://github.com/QwenLM/qwen-code/pull/2539)) |

---

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|--------------|
| [#2640](https://github.com/QwenLM/qwen-code/issues/2640) | Answers not saving in one session | 🔴 OPEN | **Permission persistence broken** — users repeatedly hit "Always allow" for same commands. 6 comments, 7 upvotes indicate widespread frustration. |
| [#2669](https://github.com/QwenLM/qwen-code/issues/2669) | Permission options 2/3 not persisting on Windows 11 CMD | 🔴 OPEN | Root-cause identified: Windows path case-sensitivity bug. Fix PR already submitted. |
| [#2626](https://github.com/QwenLM/qwen-code/issues/2626) | CLI crashes on permission requests (Linux) | 🟢 CLOSED | Regression in recent versions; tmux/Ubuntu 24.04 specific. Rollback to 0.12.6 worked. |
| [#2660](https://github.com/QwenLM/qwen-code/issues/2660) | Debug mode enabled — how to disable? | 🔴 OPEN | Documentation gap: debug logging cannot be turned off via config. Chinese-speaking user base affected. |
| [#2665](https://github.com/QwenLM/qwen-code/issues/2665) | VSCode: closing chat tab leaves orphan ACP processes | 🔴 OPEN | **Resource leak** — processes accumulate until VSCode full quit. Critical for long-running IDE sessions. |
| [#2609](https://github.com/QwenLM/qwen-code/issues/2609) | web_fetch returns AI greeting instead of web content | 🔴 OPEN | Tool reliability issue with Bailian Coding Plan API; affects research workflows. |
| [#2621](https://github.com/QwenLM/qwen-code/issues/2621) | How to clean context used? | 🔴 OPEN | VSCode plugin "New Session" doesn't clear context — UX confusion around memory management. |
| [#2647](https://github.com/QwenLM/qwen-code/issues/2647) | /compress fails near context limit but auto-compress works | 🔴 OPEN | Manual compression receives only 29 tokens vs. 400+ token "guesses"; algorithmic bug in split point selection. |
| [#2661](https://github.com/QwenLM/qwen-code/issues/2661) | Cycling ListFiles caused 700+ iterations, quota exceeded | 🔴 OPEN | **Agent loop bug** — no safeguard against repetitive tool calls during long-running tasks. |
| [#2657](https://github.com/QwenLM/qwen-code/issues/2657) | Ralph loop persists across sessions | 🔴 OPEN | State file `.qwen/ralph-loop.local.md` not session-scoped; architectural issue with loop management. |

---

## 4. Key PR Progress

| # | Title | Author | Impact |
|---|-------|--------|--------|
| [#2643](https://github.com/QwenLM/qwen-code/pull/2643) | Add `/loop` command for periodic task execution | @wenshao | **Major feature**: Cron-like automation for monitoring CI, polling APIs, scheduled reports. Framework-agnostic `LoopManager` core. |
| [#2670](https://github.com/QwenLM/qwen-code/pull/2670) | Fix permission persistence on Windows (case-sensitivity) | @askadityapandey | Fixes [#2669](https://github.com/QwenLM/qwen-code/issues/2669) — `process.cwd()` case mismatch vs. stored paths. |
| [#2668](https://github.com/QwenLM/qwen-code/pull/2668) | Alibaba Cloud Standard API Key support | @JohnKeating1997 | Dedicated auth flow with region selection (domestic/intl) for DashScope endpoints. |
| [#2662](https://github.com/QwenLM/qwen-code/pull/2662) | Prevent orphan ACP processes on tab close + MCP cleanup | @zhangxy-zju | **Critical fix**: Dual bug fix in CLI + VSCode extension; addresses [#2665](https://github.com/QwenLM/qwen-code/issues/2665). |
| [#2666](https://github.com/QwenLM/qwen-code/pull/2666) | VSCode retry logic and auto-reconnect for ACP | @qqqys | Reliability improvement: exponential backoff (3 retries) + automatic reconnection on connection drops. |
| [#2659](https://github.com/QwenLM/qwen-code/pull/2659) | Improve `/compress` split point for tool-heavy conversations | @LaZzyMan | Fixes [#2647](https://github.com/QwenLM/qwen-code/issues/2647) — considers tool call completion boundaries as valid split points. |
| [#2656](https://github.com/QwenLM/qwen-code/pull/2656) | Fix `/clear` and ESC key lag from hooks system | @LaZzyMan | Performance: removes blocking `await` in hooks when none registered; resolves [#914](https://github.com/QwenLM/qwen-code/issues/914). |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | Channels feature: Telegram + WeChat support | @tanzhenxin | **Platform expansion**: ACP-based messaging bridge for chatbot deployments. |
| [#2654](https://github.com/QwenLM/qwen-code/pull/2654) | Change default context filename to AGENTS.md | @qwen-code-dev-bot | Community alignment: matches Claude Code convention; `QWEN.md` kept for backward compatibility. |
| [#2652](https://github.com/QwenLM/qwen-code/pull/2652) | Replace shell string parsing with tree-sitter AST | @LaZzyMan | **Engineering quality**: Eliminates fragile regex parsing for quoted strings, heredocs, nested constructs. |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Alibaba Cloud ecosystem integration** | [#2664](https://github.com/QwenLM/qwen-code/issues/2664), [#2663](https://github.com/QwenLM/qwen-code/issues/2663), [#2649](https://github.com/QwenLM/qwen-code/issues/2649) | Native auth flows, 云效 CI/CD templates, regional endpoint handling |
| **MCP server UX improvements** | [#2672](https://github.com/QwenLM/qwen-code/issues/2672), [#1547](https://github.com/QwenLM/qwen-code/issues/1547), [#861](https://github.com/QwenLM/qwen-code/issues/861) | Auto-expose web research tools, per-tool auto-approval, output verbosity controls |
| **Windows CLI parity** | [#2605](https://github.com/QwenLM/qwen-code/issues/2605), [#2645](https://github.com/QwenLM/qwen-code/pull/2645) | Image paste from clipboard, Git Bash/MSYS2 shell detection |
| **Session/context management** | [#2638](https://github.com/QwenLM/qwen-code/issues/2638), [#2621](https://github.com/QwenLM/qwen-code/issues/2621), [#2657](https://github.com/QwenLM/qwen-code/issues/2657) | `/loop` automation, explicit context clearing, session-scoped state isolation |
| **Vim-native interactions** | [#2561](https://github.com/QwenLM/qwen-code/issues/2561) | `Ctrl+p`/`Ctrl+n` for dropdown navigation instead of arrow keys |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Status |
|------------|-----------|--------|
| **Permission persistence failures** | 🔥🔥🔥🔥🔥 | Active fixes in flight ([#2670](https://github.com/QwenLM/qwen-code/pull/2670)) |
| **Orphan/zombie processes (VSCode)** | 🔥🔥🔥🔥🔥 | Multiple PRs addressing ([#2662](https://github.com/QwenLM/qwen-code/pull/2662), [#2633](https://github.com/QwenLM/qwen-code/pull/2633)) |
| **Context/compression management confusion** | 🔥🔥🔥🔥 | `/compress` fixes pending ([#2659](https://github.com/QwenLM/qwen-code/pull/2659)); documentation gaps |
| **Agent loops without safeguards** | 🔥🔥🔥🔥 | [#2661](https://github.com/QwenLM/qwen-code/issues/2661) — 700+ iterations, token quota drain |
| **Debug mode noise (unconfigurable)** | 🔥🔥🔥 | [#2660](https://github.com/QwenLM/qwen-code/issues/2660) — no off switch documented |
| **Windows path handling inconsistencies** | 🔥🔥🔥 | Case-sensitivity, shell detection gaps |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-03-25 to 2026-03-26.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*