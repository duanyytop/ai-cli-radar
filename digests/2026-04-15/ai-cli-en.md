# AI CLI Tools Community Digest 2026-04-15

> Generated: 2026-04-15 00:17 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Cross-Comparison Report
## Community Digest Analysis — April 15, 2026

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing intense, parallel evolution across seven major players, with each project shipping at high velocity and grappling with similar fundamental challenges: context management at scale, MCP server reliability, permission UX refinement, and cross-platform stability. The dominant pattern is a shift from simple chat interfaces toward **persistent, agentic workspaces**—tools now compete on session resilience, hook extensibility, and enterprise integration depth rather than raw model access. However, this maturity sprint is exposing shared architectural brittleness, particularly around context compaction, process lifecycle management, and provider API drift.

---

## 2. Activity Comparison

| Tool | Issues (24h Hot) | PRs (24h Active) | Release Status | Notable |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 tracked (high-severity cluster: Opus regressions, token inflation) | 10+ active (3 official-quality plugins submitted) | v2.1.107–108 (rapid patches) | Highest plugin ecosystem momentum |
| **OpenAI Codex** | 10 tracked (compaction regression dominant) | 10+ active (hook infrastructure heavy) | v0.120.0 + 3 Rust alpha tags (.8–.10) | Fastest release cadence; Rust rewrite in progress |
| **Gemini CLI** | 10 tracked | 10+ active (tsgo migration, voice input, ACP) | v0.38.0 + v0.39.0-preview.0 | Strong infrastructure investment (compiler migration) |
| **GitHub Copilot CLI** | 10 tracked | 1 active (#2713 only) | v1.0.26 + v1.0.26-0 | Lowest engineering velocity; auth/policy crisis |
| **Kimi CLI** | 10 tracked | 10 active | v1.34.0 | Thinking UX debate consuming disproportionate attention |
| **OpenCode** | 10 tracked | 10+ active (enterprise providers: Databricks, LLM Gateway) | v1.4.4 | Strong provider-diversity expansion |
| **Pi** | 10 tracked | 10 active | v0.67.2 | TUI/terminal-protocol maturation focus |
| **Qwen Code** | 10 tracked | 10 active | v0.14.4-nightly | Community crisis around free-tier reduction |

*Note: All tools show comparable surface-level issue/PR volume, but quality and velocity vary significantly (see Section 5).*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence |
|:---|:---|:---|
| **Hook / plugin extensibility** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code | Codex: `PermissionRequest` hooks + turn-scoped interrupts (#17563, #17757); Claude Code: 3 official plugin PRs in 24h; Copilot CLI: hook output injection requests (#1139); Qwen Code: ACP lifecycle hooks |
| **Context compaction control & reliability** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi CLI, Pi | Codex: v0.120.0 `prompt_cache_retention` regression (#17809); Copilot CLI: unconfigurable auto-compaction (#947); Kimi CLI: wrong problem selection (#1878); Pi: race-condition fixes (#3190, #3075) |
| **MCP lifecycle hardening** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI, Qwen Code | Codex: zombie process leaks (#12491, #17832); Claude Code: Chrome extension bridge fragility (#47808); Copilot CLI: MCP servers disappearing post-update (#2176); Qwen Code: 2-connection cap blocking production (#3277) |
| **Voice / multimodal input** | Gemini CLI, Kimi CLI, Qwen Code | Gemini CLI: pluggable voice backend PR (#18499); Kimi CLI: implicit via model capabilities; Qwen Code: SDK API expansion for programmatic access |
| **Enterprise provider diversity** | OpenCode, Pi, Claude Code | OpenCode: Databricks, LLM Gateway, Azure OpenAI fixes; Pi: Bedrock Bearer token, dynamic model discovery; Claude Code: Bedrock/Vertex/Foundry cache parity |
| **Thinking / reasoning transparency controls** | Kimi CLI, OpenAI Codex, Claude Code | Kimi CLI: `show_thinking_stream` config (#1872); Codex: reasoning visibility in TUI; Claude Code: Opus reasoning state degradation reports |
| **Session management & portability** | Claude Code, Gemini CLI, Qwen Code, OpenCode | Claude Code: preserve-session plugin (#39148); Gemini CLI: global vs. project memory routing (#22819); Qwen Code: `/history` command (#3261); OpenCode: session name wrapping |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target User | Technical Approach |
|:---|:---|:---|:---|
| **Claude Code** | Plugin ecosystem, TUI polish, multi-platform API parity (Bedrock/Vertex/Foundry) | Professional developers, enterprise teams | TypeScript/Node-based; rich plugin architecture; rapid patch cadence |
| **OpenAI Codex** | Hook infrastructure, MCP safety, Rust CLI rewrite | Security-conscious enterprises, CI/CD integrators | Dual-track: stable TS + alpha Rust CLI; heavy investment in permission/policy hooks |
| **Gemini CLI** | Infrastructure performance (tsgo), AST-aware navigation, ACP headless automation | Performance-sensitive developers, research/engineering hybrids | Native TypeScript compiler migration; union-find context compaction; strong test harness investment |
| **GitHub Copilot CLI** | IDE integration, policy/compliance gating | Existing Copilot subscribers, Microsoft-centric enterprises | Tightly coupled to GitHub Copilot service; slower independent velocity |
| **Kimi CLI** | Reasoning model optimization, coding-agent depth | Chinese and international developers seeking alternatives to Western tools | Python-based; strong model-tier integration (k2.6-preview); struggling with UX stability |
| **OpenCode** | Provider neutrality, observability, embedded/agentic deployments | Multi-cloud enterprises, platform engineers | Modular provider system; OpenTelemetry-first; strong Azure/enterprise focus |
| **Pi** | Terminal-protocol correctness, embedded SDK use, edge runtime support | Terminal power users, embedded tool builders, edge deployers | TypeScript with deep terminal emulation support; extension factory architecture for library reuse |
| **Qwen Code** | Cost-efficient agent orchestration, parallel subagents | Budget-conscious developers, Qwen ecosystem users | Python-based; DashScope integration; quota-driven friction currently dominant |

---

## 5. Community Momentum & Maturity

### Highest Momentum
| Tool | Evidence |
|:---|:---|
| **OpenAI Codex** | 3 alpha releases in 24h, largest hook-system investment, active Rust rewrite |
| **Claude Code** | Rapid patch releases (2 in 24h), explosive plugin PR activity, highest comment velocity on issues |
| **Gemini CLI** | Major infrastructure bet (tsgo migration), consistent nightly/preview cadence, maintainer-visible roadmap items |

### Moderate Momentum
| Tool | Evidence |
|:---|:---|
| **Pi** | Solid release cadence, same-day bug fixes (Konsole Shift+Enter), growing embedded-use case |
| **OpenCode** | Strong provider expansion, but some long-standing TUI gaps (#4283 copy-to-clipboard open since Nov 2025) |
| **Kimi CLI** | Active release, but community energy is disproportionately consumed by thinking-UI regressions rather than forward features |
| **Qwen Code** | Engineering velocity is healthy, but community sentiment is severely damaged by free-tier policy changes |

### Concerning Stagnation
| Tool | Evidence |
|:---|:---|
| **GitHub Copilot CLI** | Only **1 PR** active in 24h; auth/policy issues unresolved for months (#1595 since February); Windows complete failure since January (#1164); engineering appears under-resourced relative to user base |

### Maturity Assessment
- **Most mature architecture**: OpenAI Codex (systematic hook abstractions, Rust rewrite for performance) and Gemini CLI (compiler migration, semantic compaction)
- **Most mature ecosystem**: Claude Code (plugin marketplace emerging, official-quality contributions)
- **Least mature stability**: GitHub Copilot CLI (platform regressions, auth entropy) and Kimi CLI (reasoning UX whiplash, uncontrolled agent loops)

---

## 6. Trend Signals

| Trend | Evidence | Reference Value for Developers |
|:---|:---|:---|
| **Agentic workspaces replace chat CLIs** | Multi-window requests (Codex #12773), path-independent sessions (Claude Code #39148), memory routing (Gemini #22819), `/history` management (Qwen #3261) | Design tools for session persistence and workspace recovery, not ephemeral prompts |
| **Hook-driven policy enforcement is becoming table stakes** | Codex's `PermissionRequest` hooks, Claude Code's plugin hooks, Copilot CLI's hook injection requests | Expect to integrate AI CLI tools into CI/CD and security review pipelines via hooks |
| **MCP is strategic but operationally immature** | Process leaks across Codex, Claude Code, Qwen Code; connection limits; OAuth fragility | Treat MCP as a high-value, high-maintenance integration surface—budget engineering for lifecycle management |
| **Context compaction is the new memory management** | Regressions and race conditions dominate every mature tool; users demand configurability | Invest in observable, user-controllable compaction strategies; silent compaction erodes trust |
| **Provider diversification accelerates** | Databricks, LLM Gateway, Bedrock Bearer tokens, Azure OpenAI fixes, Vertex AI | Build abstraction layers that assume multi-provider deployment; avoid hardcoding to single APIs |
| **Terminal-protocol sophistication matters** | Kitty protocol, CSI-u, tmux/Zellij detection, Konsole compatibility across Pi, Gemini, Kimi | Power users are remote-first and multiplexer-dependent; TUI robustness is competitive |
| **Quota/billing transparency becomes a retention issue** | Qwen free-tier crisis, Claude Code token-inflation bug (#46917), Codex cost-computation bug (#3188) | Users will churn over opaque economics; usage visibility and cost controls are product requirements |

---

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
## Data as of 2026-04-15

---

## 1. Top Skills Ranking (Most-Discussed PRs)

> **Note:** The provided dataset shows `Comments: undefined` for all PRs. Ranking is therefore based on inferred community attention from submission quality, recency of updates, and the substantive nature of each proposal.

| Rank | Skill | Functionality | Status | Discussion Highlights |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | Typographic quality control for AI-generated documents: prevents orphan word wraps, widow paragraphs, and numbering misalignment | 🟡 Open | Addresses a universal pain point in Claude's document generation; author argues this affects *every* document Claude produces |
| 2 | **skill-quality-analyzer** + **skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83)) | Meta-skills for marketplace governance: evaluates skills across 5 quality dimensions and performs security audits | 🟡 Open | Long-running PR (Nov 2025); positions itself as essential marketplace infrastructure |
| 3 | **frontend-design** improvements ([PR #210](https://github.com/anthropics/skills/pull/210)) | Revised guidance for single-conversation frontend design tasks, improving clarity and actionability | 🟡 Open | Focus on "actually executable" instructions signals community maturity in prompt engineering |
| 4 | **odt** ([PR #486](https://github.com/anthropics/skills/pull/486)) | OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML conversion | 🟡 Open | Fills a major format gap alongside existing DOCX/PDF skills; recently updated (Apr 14) |
| 5 | **docx** — tracked changes fix ([PR #541](https://github.com/anthropics/skills/pull/541)) | Fixes DOCX corruption by resolving `w:id` collisions between tracked changes and existing bookmarks | 🟡 Open | Deep technical fix demonstrating sophisticated OOXML understanding; same author has multiple quality fixes |
| 6 | **testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)) | Comprehensive testing stack skill: Testing Trophy philosophy, unit testing, React component testing | 🟡 Open | Covers a high-velocity developer workflow; fills a clear gap in the skills catalog |
| 7 | **sensory** — macOS automation ([PR #806](https://github.com/anthropics/skills/pull/806)) | Native macOS automation via AppleScript/`osascript` as an alternative to screenshot-based computer use | 🟡 Open | Novel approach to Claude's system interaction; two-tier permission model shows production awareness |
| 8 | **record-knowledge** ([PR #521](https://github.com/anthropics/skills/pull/521)) | Persistent knowledge storage across Claude Code sessions via tagged Markdown in `.claude/knowledge/entries/` | 🟡 Open | Directly addresses one of the most complained-about limitations: session-bound context loss |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Skill persistence & sharing** | Repeated requests for cross-session memory, org-wide libraries, and reliable skill storage | [#62](https://github.com/anthropics/skills/issues/62) (skills disappearing), [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing), [#521](https://github.com/anthropics/skills/pull/521) (record-knowledge PR) |
| **Developer tooling & testing** | Strong interest in testing patterns, code quality, and frontend development workflows | [#723](https://github.com/anthropics/skills/pull/723) (testing-patterns), [#210](https://github.com/anthropics/skills/pull/210) (frontend-design), [#147](https://github.com/anthropics/skills/pull/147) (codebase-inventory-audit) |
| **Enterprise trust & governance** | Security, namespace integrity, and agent safety are emerging as blocking concerns | [#492](https://github.com/anthropics/skills/issues/492) (trust boundary abuse), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance), [#532](https://github.com/anthropics/skills/issues/532) (SSO/enterprise API key issues) |
| **Document format completeness** | Active expansion beyond DOCX into ODT, PDF fixes, and typography control | [#486](https://github.com/anthropics/skills/pull/486) (ODT), [#541](https://github.com/anthropics/skills/pull/541) (DOCX fix), [#538](https://github.com/anthropics/skills/pull/538) (PDF fix), [#514](https://github.com/anthropics/skills/pull/514) (typography) |
| **MCP integration & protocol openness** | Demand to expose skills via standard protocols and extend beyond Claude Code | [#16](https://github.com/anthropics/skills/issues/16) (Skills as MCPs), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock compatibility) |

---

## 3. High-Potential Pending Skills

These active PRs show sustained engagement and address clear ecosystem gaps — strong candidates for merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | Recently updated (Apr 14); complements existing document skills with open-source/ISO standard format support |
| **DOCX tracked changes fix** | [#541](https://github.com/anthropics/skills/pull/541) | Critical bugfix from proven contributor (`Lubrsy706`) with 3 concurrent quality PRs; narrow, mergeable scope |
| **skill-creator YAML validation fix** | [#539](https://github.com/anthropics/skills/pull/539) | Same proven contributor; prevents silent parsing failures — a clear tooling improvement |
| **PDF case-sensitivity fix** | [#538](https://github.com/anthropics/skills/pull/538) | Also from `Lubrsy706`; trivial but correct fix for broken cross-references on case-sensitive filesystems |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Explicitly closes [#452](https://github.com/anthropics/skills/issues/452); low-risk, high-impact community health improvement |
| **sensory (macOS automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Novel, well-scoped, and addresses a real platform integration gap with thoughtful permission modeling |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *persistent, reliable, and shareable developer infrastructure* — spanning cross-session memory, org-wide skill distribution, robust document generation pipelines, and enterprise-grade trust boundaries — indicating the ecosystem is maturing from individual utility skills toward production-ready platform capabilities.**

---

# Claude Code Community Digest — 2026-04-15

---

## 1. Today's Highlights

Anthropic shipped two rapid-fire patch releases (v2.1.107–108) focused on prompt-caching controls and TUI responsiveness. The issue tracker is dominated by a surge of **model-behavior regressions** on `claude-opus-4-6` (instruction ignoring, stale-state reasoning, skill-invocation degradation) and a **server-side token-inflation bug** that is spiking users' cache-creation costs. Meanwhile, the plugin ecosystem is expanding quickly with three new official-quality plugin PRs submitted in the last 24 hours.

---

## 2. Releases

| Version | Summary |
|--------|---------|
| **v2.1.108** | Adds granular prompt-cache TTL env vars: `ENABLE_PROMPT_CACHING_1H` (universal across API key, Bedrock, Vertex, and Foundry) and `FORCE_PROMPT_CACHING_5M`; deprecates the Bedrock-specific flag. Also introduces a **recap feature** for richer context continuity. |
| **v2.1.107** | Improves perceived responsiveness by **showing thinking hints earlier** during long operations. |

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | API Error: Stream idle timeout — partial response received | A high-visibility **macOS + Anthropic API** reliability issue; 83 comments show it is widespread and disruptive to daily workflows. | 83 comments, 61 👍 — actively tracked, marked duplicate but still drawing reports. |
| [#46917](https://github.com/anthropics/claude-code/issues/46917) | CC v2.1.100+ inflates `cache_creation` by ~20K tokens server-side | **Billing/performance regression**; same payload costs significantly more on newer versions, suggesting User-Agent-based routing differences. | 23 comments, 150 👍 — one of the highest-voted open bugs. |
| [#28817](https://github.com/anthropics/claude-code/issues/28817) | Remote Control unavailable despite Pro plan authentication | A long-standing **entitlement bug** blocking a paid feature; erodes trust in plan-gated capabilities. | 43 comments, 60 👍 — persistent user frustration. |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | Multi-account switching in Claude Mobile app without shared email | Highly up-voted **mobile UX gap**; enterprise and contractor users need clean account separation. | 30 comments, 101 👍 — top feature request in the batch. |
| [#48136](https://github.com/anthropics/claude-code/issues/48136) | Opus ignores established session rules/memory under task pressure | **Production-impact regression**; Opus 4.6 drops persistent memory during large multi-repo tasks, causing deployment failures. | 2 comments, 0 👍 — severe but freshly filed; likely to escalate. |
| [#48183](https://github.com/anthropics/claude-code/issues/48183) | Skill invocation and instruction retention degradation | Users report a **recent sharp decline in skill reliability**, breaking established slash-command workflows. | 2 comments, 0 👍 — aligns with other Opus-behavior reports. |
| [#48185](https://github.com/anthropics/claude-code/issues/48185) | Opus 4.6 skims long handoff prompts; acts on stale local state | Describes a **context-synthesis failure** where the model ignores freshly provided state in favor of outdated local files. | 2 comments, 0 👍 — part of a clear Opus-regression pattern this week. |
| [#13591](https://github.com/anthropics/claude-code/issues/13591) | Sticky/Fixed Input Mode — keep input visible while scrolling output | Popular **TUI quality-of-life request**; scrolling long outputs currently hides the prompt box. | 14 comments, 36 👍 — steady community support. |
| [#47298](https://github.com/anthropics/claude-code/issues/47298) | OpenRouter model names (dot notation) not recognized | **Silent capability degradation** for OpenRouter users; canonical-name mapping assumes Anthropic's dash notation, disabling 1M context. | 4 comments, 0 👍 — niche but technically precise bug. |
| [#47808](https://github.com/anthropics/claude-code/issues/47808) | Chrome extension service worker never initiates MCP bridge connection (Linux/AUR) | Now **closed**; root cause was a missing `DISABLE_AUTOUPDATER` env var in the AUR package. A good reference for Linux MCP troubleshooting. | 6 comments, 0 👍 — resolved with clear diagnostic path. |

---

## 4. Key PR Progress

| # | Title | Feature / Fix |
|---|-------|---------------|
| [#48151](https://github.com/anthropics/claude-code/pull/48151) | Include cwd project dir in multi-worktree session discovery | Fixes `--resume` failing in bare-repo + worktree layouts by adding the cwd to the scan set. |
| [#27395](https://github.com/anthropics/claude-code/pull/27395) | Add completion subcommand for bash and zsh shell completion | Adds native shell-completion scripts covering all CLI subcommands and nested flags. |
| [#23853](https://github.com/anthropics/claude-code/pull/23853) | Replace deprecated npm install with native installer in Dockerfile | Modernizes the devcontainer setup, removing the deprecated global npm install path. |
| [#47836](https://github.com/anthropics/claude-code/pull/47836) | Align hook validator with plugin hooks format | Fixes plugin-dev tooling so `validate-hook-schema.sh` accepts the `hooks.json` wrapper format and relaxes `matcher` requirements. |
| [#47830](https://github.com/anthropics/claude-code/pull/47830) | Add subagent-cleanup plugin to terminate orphaned processes | Introduces an official plugin that kills leaked `claude --resume` subagents at session start, protecting the current process tree. |
| [#47759](https://github.com/anthropics/claude-code/pull/47759) | Add notify-on-complete plugin | Ready-to-use `Stop` hook plugin for desktop notifications / sounds on task completion; fail-open design. |
| [#47760](https://github.com/anthropics/claude-code/pull/47760) | Add usage-monitor plugin | Self-contained macOS menu-bar usage tracker with SwiftBar integration and cached `/usage` fetching. |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | Add preserve-session plugin for path-independent session history | Plugin that UUID-tags projects so renaming or moving directories does not break session history. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | Open source Claude Code ✨ | A symbolic/community PR referencing long-standing open-source requests; no official movement signaled. |
| [#46912](https://github.com/anthropics/claude-code/pull/46912) | Add mythos runtime workflow | Part of a small cluster of "Claude Mythos" PRs; appears to be experimental/agentic-framework content. |

---

## 5. Feature Request Trends

1. **TUI/UX polish** — sticky input bars, syntax highlighting for niche languages (GDScript), and smoother scroll behavior are recurring asks.
2. **Session and project management** — users want path-independent sessions, session deletion/file cleanup, and plan-mode revisions after execution starts.
3. **Mobile and multi-account support** — clean account switching on mobile without shared emails is the highest-voted enhancement in this period.
4. **Plugin ecosystem expansion** — community and first-party PRs are converging on utility plugins: notifications, usage tracking, orphan-process cleanup, and session preservation.
5. **Open-source and local control** — the perennial request for open-sourcing Claude Code continues to surface in PRs and comments.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|-----------|----------|
| **Opus 4.6 behavioral regressions** | A cluster of fresh issues (#48136, #48183, #48185, #48154, #48167) describes the model ignoring instructions, skipping handoff prompts, failing to invoke skills, and reverting to stale local state. This is the dominant frustration of the last 24–48 hours. |
| **Unexpected cost inflation** | #46917 documents a ~20K token per-request cache-creation surge on newer versions; #46185 raises broader concerns about Max plan burn rates. Developers feel they lack visibility and control over token economics. |
| **MCP and extension fragility** | Chrome-extension MCP bridge failures (#24935, #47808) and OAuth URL-mode gaps (#48164) show that the local-MCP stack is still brittle across platforms and packaging formats (especially Linux/AUR). |
| **Plan-gated feature entitlement bugs** | Remote Control (#28817) remains broken for Pro users, creating distrust that paid tiers deliver advertised capabilities. |
| **Linux and Windows stability gaps** | Mid-session TUI re-renders (#42192, #48173), memory leaks (#48111), and Desktop session loss (#38691) hit non-macOS users disproportionately. |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-15

---

## 1. Today's Highlights

The Codex CLI `v0.120.0` release triggered a wave of regression reports around remote context compaction failing with `Unknown parameter 'prompt_cache_retention'`, forcing rapid patch work and multiple duplicate issue closures. Meanwhile, the team is pushing hard on **hook infrastructure**—with `PermissionRequest` hooks and turn-scoped interrupts landing in PRs—and **MCP hardening**, including high-risk elicitation warnings and process leak fixes. Platform stability remains a major theme, especially on Windows and macOS where CPU/GPU spikes and sandbox pathing bugs continue to dominate community discussion.

---

## 2. Releases

**Rust CLI alphas (0.121.0-alpha.8 / .9 / .10)** — Three rapid-fire alpha tags were published in the last 24 hours. No detailed changelogs were provided, but the cadence suggests active iteration on the Rust CLI branch, likely following the `v0.120.0` compaction regression.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#10601](https://github.com/openai/codex/issues/10601) | **Sandbox setup error on Windows** | A persistent Windows sandbox initialization failure blocking CLI adoption for Windows developers. | **44 comments**, 10 👍 — one of the longest-running open bugs with ongoing reproduction reports. |
| [#17809](https://github.com/openai/codex/issues/17809) | **Context compaction fails with `prompt_cache_retention`** | The flagship `v0.120.0` regression breaking automatic context compaction in the Mac app. | **37 comments**, 56 👍 — highest engagement of the day; closed after rapid triage. |
| [#11981](https://github.com/openai/codex/issues/11981) | **Codex app 100% CPU with one agent** | Severe performance degradation on macOS even under minimal load, hurting daily usability. | **36 comments**, 8 👍 — active user workarounds being shared. |
| [#16231](https://github.com/openai/codex/issues/16231) | **High CPU on macOS after VS Code extension update** | Regression tied to extension build `26.325.31654`; affects Apple Silicon users disproportionately. | **27 comments**, 49 👍 — widely reproduced, no fix yet. |
| [#16088](https://github.com/openai/codex/issues/16088) | **WSL: empty `.codex` file left behind without project config** | A sandbox/config pathing bug under WSL that breaks project hygiene and causes confusion. | **15 comments**, 53 👍 — strong signal this is a common WSL friction point. |
| [#12491](https://github.com/openai/codex/issues/12491) | **MCP child processes not reaped — 1300+ zombies, 37GB leak** | Extreme resource leak in Codex.app GUI when using MCP servers; a stability-critical report. | **12 comments**, 3 👍 — severe enough that it demands immediate engineering attention. |
| [#17812](https://github.com/openai/codex/issues/17812) | **Error running remote compact task** | Another `v0.120.0` compaction failure variant in the CLI, corroborating the breadth of the regression. | **12 comments**, 23 👍 — closed as duplicate but validated the pattern. |
| [#17624](https://github.com/openai/codex/issues/17624) | **Review tab stuck on "Loading diff" on Windows** | Windows path formatting bug (`/F:/...` passed literally to `git diff`) breaks code review UX. | **10 comments**, 9 👍 — niche but completely blocks review workflow on Windows. |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage while "thinking" due to tiny animation** | A macOS UI performance bug where a trivial animation drives GPU load; emblematic of polish gaps. | **9 comments**, 14 👍 — users frustrated by battery/thermal impact. |
| [#17832](https://github.com/openai/codex/issues/17832) | **Playwright MCP stdio processes still leak after #16895 fix** | Confirms an earlier MCP leak fix was incomplete; 213 orphaned process pairs and 13.6 GB RSS reported. | **3 comments**, 0 👍 — regression label applied, high severity despite low noise. |

---

## 4. Key PR Progress

| # | PR | Feature / Fix |
|---|-----|---------------|
| [#17839](https://github.com/openai/codex/pull/17839) | **Add high-risk app warnings in TUI** | Adds `riskLevel` and `subtitle` to MCP elicitations, rendering high-risk requests with red styling and `⚠` prefix in the TUI. |
| [#17853](https://github.com/openai/codex/pull/17853) | **Dummy tools for missing MCP tools** | Prevents model confusion when previously available MCP tools disappear by injecting descriptive dummy tools. |
| [#17757](https://github.com/openai/codex/pull/17757) | **Turn-scoped hook interrupts** | Refactors `PermissionRequest` denials into turn-scoped aborts, making hook-driven interruption safer and more deterministic. |
| [#17850](https://github.com/openai/codex/pull/17850) | **Render high-risk MCP elicitation warnings in TUI** | Cross-platform companion to #17839; wires `riskLevel`/`subtitle` through the TUI request model with test coverage. |
| [#17855](https://github.com/openai/codex/pull/17855) | **Support external plugins migration** | Infrastructure for migrating external plugin configurations; light on details but signals ecosystem expansion. |
| [#17831](https://github.com/openai/codex/pull/17831) | **Add resource URI meta to tool call item** | Enables app-server prefetching of MCP resources without waiting for server status, reducing latency. |
| [#17824](https://github.com/openai/codex/pull/17824) | **Add local thread store listing** | Refactors filesystem/SQLite thread operations into a `ThreadStore` abstraction; first step toward richer local thread management. |
| [#17563](https://github.com/openai/codex/pull/17563) | **Add `PermissionRequest` hooks support** | Wires shell, exec, and network approval prompts into the hook system, allowing external automation to allow/deny requests. |
| [#17739](https://github.com/openai/codex/pull/17739) | **Add permission suggestions to `PermissionRequest` hooks** | Enriches hook inputs with command-prefix suggestions derived from proposed policy amendments. |
| [#17713](https://github.com/openai/codex/pull/17713) | **Add opt-in provider runtime abstraction** | Introduces a generic `codex-model-provider` crate for pluggable model backends; keeps current behavior unchanged behind the abstraction. |

---

## 5. Feature Request Trends

- **Hook ecosystem expansion** — The most active feature direction. Users want `PreToolUse` / `PostToolUse` events ([#14754](https://github.com/openai/codex/issues/14754)), and the team is rapidly shipping `PermissionRequest` hooks, turn-scoped interrupts, and suggestion support. The community sees hooks as the gateway to policy enforcement and CI integration.

- **Multi-window / multi-instance support** — macOS users in particular are asking for independent project windows ([#12773](https://github.com/openai/codex/issues/12773)), reflecting Codex's growing role as a persistent desktop workspace rather than a chat sidebar.

- **MCP maturity** — Requests span lifecycle management (workspace directory passthrough [#9989](https://github.com/openai/codex/issues/9989)), resource prefetching, and leak prevention. MCP is clearly a strategic integration surface.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Context compaction regressions** | [#17809](https://github.com/openai/codex/issues/17809), [#17812](https://github.com/openai/codex/issues/17812), [#17814](https://github.com/openai/codex/issues/17814), [#17819](https://github.com/openai/codex/issues/17819) | **Critical** — breaks session resumption and long-running threads in `v0.120.0` |
| **macOS thermal / battery drain** | [#11981](https://github.com/openai/codex/issues/11981), [#16231](https://github.com/openai/codex/issues/16231), [#16857](https://github.com/openai/codex/issues/16857), [#16099](https://github.com/openai/codex/issues/16099), [#17799](https://github.com/openai/codex/issues/17799) | **High** — CPU, GPU, and sleep-battery issues across app, extension, and CLI |
| **Windows second-class citizenship** | [#10601](https://github.com/openai/codex/issues/10601), [#17624](https://github.com/openai/codex/issues/17624), [#14585](https://github.com/openai/codex/issues/14585), [#17412](https://github.com/openai/codex/issues/17412), [#16815](https://github.com/openai/codex/issues/16815), [#17429](https://github.com/openai/codex/issues/17429) | **High** — sandbox, pathing, diff rendering, and WSL bugs cluster heavily on Windows |
| **MCP process leaks** | [#12491](https://github.com/openai/codex/issues/12491), [#17832](https://github.com/openai/codex/issues/17832) | **High** — memory exhaustion and zombie accumulation at scale |
| **Hook coverage gaps** | [#14754](https://github.com/openai/codex/issues/14754), [#16732](https://github.com/openai/codex/issues/16732) | **Medium** — `ApplyPatch` and broader tool events still missing from hook system |

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-15

## 1. Today's Highlights

The project shipped **v0.38.0** and a **v0.39.0-preview.0** within the last 24 hours, with the latter simplifying plan-policy priorities and adding memory-usage test infrastructure. A major infrastructure migration to the native TypeScript compiler (`tsgo`) is underway, promising ~5.6× faster type-checking. Meanwhile, developer friction around **RipGrep startup delays**, **repetitive permission prompts**, and **shell-command hangs** continues to dominate community issues.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **v0.39.0-preview.0** | Refactored plan-policy priorities and consolidated read-only rules ([#24849](https://github.com/google-gemini/gemini-cli/pull/24849)); added a memory-usage integration test harness ([#24876](https://github.com/google-gemini/gemini-cli/pull/24876)). |
| **v0.39.0-nightly.20260414.gdaf500623** | Fixed a memory leak in trace `streamWrapper` ([#25089](https://github.com/google-gemini/gemini-cli/pull/25089)); corrected quota footer display for non-auto models ([#25121](https://github.com/google-gemini/gemini-cli/pull/25121)). |
| **v0.38.0** | Fixed slash-command list refresh after `/skills reload` ([#24454](https://github.com/google-gemini/gemini-cli/pull/24454)); README link updates; fix for `complete_task` tool edge case. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| **#25323** | [Failing to download RipGrep should not permanently slow down Gemini CLI startup](https://github.com/google-gemini/gemini-cli/issues/25323) | A failed RipGrep download blocks startup for **2+ minutes** on every launch if GitHub is unreachable. Users want fast-fail and bundling. | 6 comments; actively discussed by core team. |
| **#22745** | [Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC investigating whether AST-aware navigation can reduce token noise and misaligned reads. Could reshape how the agent explores codebases. | 5 comments; maintainer-only, high strategic value. |
| **#24916** | [Gemini CLI keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916) | Persistent permission prompts break flow; "allow for all future sessions" appears unreliable. | 3 comments; recurring user complaint. |
| **#24175** | [feat(voice): implement real-time voice mode](https://github.com/google-gemini/gemini-cli/issues/24175) | Users want hands-free dictation via Gemini Live API or Whisper. Aligns with broader AI assistant trends. | 2 comments; strong feature demand. |
| **#25166** | [Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) | Simple shell commands hang the UI, making the agent unusable for basic tasks. | 2 comments; reliability concern. |
| **#25216** | [Gemini failed to open in a temporary path A:\\](https://github.com/google-gemini/gemini-cli/issues/25216) | Crash on Windows temp drives (`EISDIR` on `realpath`). Highlights cross-platform path handling gaps. | 1 comment; Windows-specific bug. |
| **#24915** | [Thick black border at the top and bottom of their prompt bar](https://github.com/google-gemini/gemini-cli/issues/24915) | Visual regression in the TUI; degrades perceived polish. | 1 comment; UI fit-and-finish. |
| **#24202** | [Running SSH the text is scrambled](https://github.com/google-gemini/gemini-cli/issues/24202) | Terminal corruption over SSH sessions makes the CLI unusable for remote development. | 1 comment; linked to new SSH-detection helper (#24546). |
| **#23582** | [Subagents Awareness of Active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents ignore Plan vs. Auto-Edit mode, causing policy-engine rejections that the agent doesn't anticipate. | 1 comment; core agent-architecture issue. |
| **#22819** | [Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819) | Defines how memory should be scoped (user-global vs. repo-local). Critical for long-term personalization. | 1 comment; 2 upvotes; roadmap item. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| **#25187** | [Fix(core): retry additional OpenSSL 3.x SSL errors during streaming](https://github.com/google-gemini/gemini-cli/pull/25187) | Adds `ERR_SSL_SSL/TLS_ALERT_BAD_RECORD_MAC` to retryable SSL errors, preventing mid-stream stalls on OpenSSL 3.x. |
| **#18499** | [feat: Add voice input with pluggable backend (Gemini zero-install + Whisper)](https://github.com/google-gemini/gemini-cli/pull/18499) | Native voice input with a **zero-install Gemini backend** and optional local Whisper. Long-running community request. |
| **#25240** | [chore: migrate to @typescript/native-preview (tsgo)](https://github.com/google-gemini/gemini-cli/pull/25240) | Monorepo migration to the native TypeScript compiler. Claims **~5.6× faster type-checking** (7.9s → 1.4s). |
| **#25343** | [feat(telemetry): add flag for enabling traces specifically](https://github.com/google-gemini/gemini-cli/pull/25343) | Introduces `telemetry.traces` config to make heavy tracing opt-in, separating deep observability from baseline telemetry. |
| **#24736** | [feat(core): union-find context compaction for AgentHistoryProvider](https://github.com/google-gemini/gemini-cli/pull/24736) | Replaces binary keep/discard compression with **union-find semantic clustering**, improving context retention. |
| **#24664** | [feat(cli): add ACP host input requests](https://github.com/google-gemini/gemini-cli/pull/24664) | Lets an ACP client opt-in to answering `ask_user` and `exit_plan_mode`, closing a headless/automation gap. |
| **#25383** | [feat(core): add resolveWorkspaceRelativePath and getExtensionSetting utilities](https://github.com/google-gemini/gemini-cli/pull/25383) | Phase 2 of dynamic extension plan directories: secure path resolution and extension-specific config retrieval. |
| **#25384** | [feat(core): implement JIT plan directory provisioning with path safety](https://github.com/google-gemini/gemini-cli/pull/25384) | Phase 3: on-demand plan directory provisioning for extensions, completing the dynamic resolution pipeline. |
| **#25072** | [feat(cli): implement favorite models and model cycling](https://github.com/google-gemini/gemini-cli/pull/25072) | Adds `model.favorites` setting and keyboard shortcuts to quickly cycle preferred models. |
| **#25412** | [fix(cli): use active keybinding config for UI shortcuts](https://github.com/google-gemini/gemini-cli/pull/25412) | Fixes a bug where UI prompts displayed default shortcuts even after user remapping. |

---

## 5. Feature Request Trends

1. **Voice & Multimodal Input** — Real-time voice mode (#24175) and the pluggable voice-input PR (#18499) show sustained demand for hands-free interaction.
2. **Smarter Codebase Navigation** — AST-aware reads, search, and mapping (#22745, #22746) are being actively investigated as the next leap in reducing token waste and misalignment.
3. **Memory & Personalization** — Global vs. project-scoped memory (#22819) and proactive memory writes (#22809) are central to making the agent feel stateful across sessions.
4. **Model Management UX** — Favorites, cycling (#25072), and clearer parallel-tool-call layouts (#24943) indicate users want more control over model selection and tool visualization.
5. **Headless / Automation Support** — ACP host input (#24664) and telemetry trace controls (#25343) reflect growing enterprise and CI/CD use cases.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Startup reliability** | RipGrep download failures cause 2-minute stalls (#25323). | High |
| **Permission fatigue** | Same-file permission prompts repeat despite "allow always" (#24916). | High |
| **Shell execution hangs** | Commands falsely report "Awaiting user input" after completion (#25166). | High |
| **SSH / remote-session fragility** | Scrambled text over SSH (#24202) and Windows temp-path crashes (#25216). | Medium-High |
| **TUI rendering glitches** | Thick borders (#24915), table incremental rendering (#25218), and scroll jitter (#24470). | Medium |
| **Subagent coordination gaps** | MAX_TURNS reported as success (#22323), unawareness of approval modes (#23582), and tool-call rejection loops (#23897). | Medium |
| **Tool-scale limits** | 400 errors when >128 tools are in scope (#24246); needs smarter tool scoping. | Medium |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-15

## 1. Today's Highlights

GitHub shipped Copilot CLI **v1.0.26** with fixes for stuck `Esc` behavior, spurious directory-access prompts in `find -exec`, and a critical agent crash during context compaction. The community is actively tracking a cluster of auth and policy-related regressions affecting Enterprise and Pro Trial users.

---

## 2. Releases

### [v1.0.26](https://github.com/github/copilot-cli/releases/tag/v1.0.26) (2026-04-14)

| Fix / Improvement | Detail |
|---|---|
| **Input handling** | `Esc` now reliably dismisses `ask_user` and elicitation prompts without hanging the session |
| **False-positive permissions** | Directory-access prompts no longer trigger for arguments inside `find -exec` blocks |
| **Agent stability** | Unrecoverable errors fixed when context compaction splits a tool call across a boundary |

### [v1.0.26-0](https://github.com/github/copilot-cli/releases/tag/v1.0.26-0) (2026-04-14)

- **Plugin environment**: Hooks now receive `PLUGIN_ROOT`, `COPILOT_PLUGIN_ROOT`, and `CLAUDE_PLUGIN_ROOT` pointing to the plugin installation directory
- **UX polish**: Session-scope selector in sync prompt is more prominent and keyboard-navigable with ←/→ arrow keys
- **Instruction files**: Improved parsing for instruction files with specific (truncated in source)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | **Sporadic policy blocking issue retrieving models** (Enterprise) | Enterprise users with valid subscriptions and remaining premium requests are arbitrarily blocked from listing models. Breaks core functionality. | 26 comments, 9 👍 — highest engagement; unresolved since Feb |
| [#2686](https://github.com/github/copilot-cli/issues/2686) | **Misleading "Server failed to connect" error for active Copilot Pro Trial accounts** | Pro Trial users see policy denial despite active billing status. Causes onboarding churn. | 24 comments, 8 👍; **closed** (likely fixed or triaged) |
| [#2684](https://github.com/github/copilot-cli/issues/2684) | **Constant "Authorization error, you may need to run /login"** | Persistent auth loop after successful login; blocks skill loading and MCP connection. | 12 comments; fresh regression, multiple similar reports |
| [#1164](https://github.com/github/copilot-cli/issues/1164) | **Copilot CLI does not run on Windows 11 — exits immediately** | Complete failure on Windows for versions after `0.0.368`; no output, no error. Severe platform regression. | 11 comments, 3 👍; ongoing since Jan |
| [#2698](https://github.com/github/copilot-cli/issues/2698) | **Copilot Pro trial receives confusing error message due to temporary pause** | Trial users hit "access denied by Copilot policy" when changing models; messaging conflates policy with service pause. | 6 comments; UX/policy clarity issue |
| [#947](https://github.com/github/copilot-cli/issues/947) | **Feature Request: Add `auto_compact` config option** | Automatic context compaction, introduced after `0.0.369`, cannot be disabled. Breaks audit trails and full-context workflows. | 5 comments; niche but deeply impactful for advanced users |
| [#1139](https://github.com/github/copilot-cli/issues/1139) | **Support injecting hook command output into LLM context** | Parity gap with Claude Code: hooks cannot feed dynamic context (e.g., `CLAUDE.md`) into conversations. Limits extensibility. | 5 comments, 5 👍; **closed** |
| [#2688](https://github.com/github/copilot-cli/issues/2688) | **Still report error: Authorization error, you may need to run /login** | Duplicate auth regression; signed-in users lose MCP server connectivity. Reinforces pattern in v1.0.25/26. | 5 comments; corroborates [#2684](https://github.com/github/copilot-cli/issues/2684) |
| [#2176](https://github.com/github/copilot-cli/issues/2176) | **MCP servers not available anymore since latest update** | MCP servers appear enabled but LLM no longer recognizes them. Breaks agent tool use. | 4 comments, 1 👍; ongoing since March |
| [#2413](https://github.com/github/copilot-cli/issues/2413) | **Middle-click paste (X11 primary selection) broken since v1.0.11** | Linux/X11 users lose primary-selection paste in chat prompt. Basic terminal UX regression. | 4 comments; specific but persistent |

---

## 4. Key PR Progress

Only **1 PR** was updated in the last 24 hours:

| # | PR | Description |
|---|-----|-------------|
| [#2713](https://github.com/github/copilot-cli/pull/2713) | **Create `my-agent.agent.md`** | Author `qwfcw79ryj-alt` opened a PR adding an agent instruction file. No description or discussion yet; appears to be a personal/template contribution. |

*No other open or merged PRs were active in this window.*

---

## 5. Feature Request Trends

1. **MCP control and visibility** — Users want explicit MCP tool invocation (e.g., `@mcp` or `#mcp-` syntax in [#2690](https://github.com/github/copilot-cli/issues/2690)) and more reliable server discovery/connection.
2. **Context and memory configurability** — Requests for disabling auto-compaction ([#947](https://github.com/github/copilot-cli/issues/947)), hook-injected context ([#1139](https://github.com/github/copilot-cli/issues/1139)), and multi-root workspace support via `.code-workspace` files ([#1826](https://github.com/github/copilot-cli/issues/1826)).
3. **Input modality parity** — Long-standing demand for vi/vim input mode ([#13](https://github.com/github/copilot-cli/issues/13), 48 👍) and platform-native clipboard behavior (X11 middle-click in [#2413](https://github.com/github/copilot-cli/issues/2413)).
4. **Model access expansion** — Requests to add GPT-4o ([#2377](https://github.com/github/copilot-cli/issues/2377)) and resolve model-selection/policy gaps for newer models like Opus 4.5 ([#2661](https://github.com/github/copilot-cli/issues/2661)).
5. **Multi-platform DevOps support** — Azure DevOps command parity ([#2711](https://github.com/github/copilot-cli/issues/2711)) and Windows stability ([#1164](https://github.com/github/copilot-cli/issues/1164)).

---

## 6. Developer Pain Points

| Theme | Summary | Representative Issues |
|-------|---------|----------------------|
| **Auth & policy instability** | Recurring authorization errors, misleading policy denials, and broken Pro Trial flows dominate recent reports. Users cannot reliably list models or maintain MCP connections. | [#1595](https://github.com/github/copilot-cli/issues/1595), [#2684](https://github.com/github/copilot-cli/issues/2684), [#2686](https://github.com/github/copilot-cli/issues/2686), [#2688](https://github.com/github/copilot-cli/issues/2688), [#2698](https://github.com/github/copilot-cli/issues/2698) |
| **MCP reliability** | MCP servers frequently fail to register with the LLM or disconnect after updates, rendering agent tools unusable. | [#2176](https://github.com/github/copilot-cli/issues/2176), [#2282](https://github.com/github/copilot-cli/issues/2282), [#2692](https://github.com/github/copilot-cli/issues/2692) |
| **Windows platform regressions** | Newer versions fail silently on Windows 11, forcing users to pin ancient builds. | [#1164](https://github.com/github/copilot-cli/issues/1164) |
| **Rate-limit UX** | Aggressive rate limits with multi-day retry windows and self-inflicted agent throttling cause significant friction. | [#2696](https://github.com/github/copilot-cli/issues/2696), [#2712](https://github.com/github/copilot-cli/issues/2712) |
| **Context compaction opacity** | Automatic compaction breaks assumptions about history persistence and cannot be configured or observed by the user. | [#947](https://github.com/github/copilot-cli/issues/947), [#2589](https://github.com/github/copilot-cli/issues/2589) |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-15

---

## 1. Today's Highlights

Kimi CLI **v1.34.0** shipped today with a new `show_thinking_stream` config, inline diff fixes, and a critical background-task crash fix. The release did not quell community debate—**thinking trace visibility** dominated issue traffic, with users split between wanting compact indicators and full reasoning streams. Meanwhile, a new `k2.6-code-preview` model rollout is generating friction over excessive agent self-reflection loops.

---

## 2. Releases

### v1.34.0
- **Docs**: Updated EN/ZH documentation for new features and tool changes.
- **Fix(diff)**: Aligned inline highlight offsets with tab-expanded text.
- **Feat(shell)**: Added `show_thinking_stream` configuration option.

[Release notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.34.0)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | API Error 400 — invalid request error | Persistent `400` errors on Windows/PowerShell with `claude-sonnet-4-5-20250929`; 14 comments suggest it's a long-standing compatibility or payload serialization bug. | 🔥 14 comments, unresolved since Jan |
| [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) | Display full thinking traces in Kimi CLI | Users report `kimi-for-coding` no longer shows reasoning chains; impacts trust and debuggability. | 👍 9, 10 comments |
| [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) | Why is the thinking process gone? | Emotional + technical backlash against the compact thinking UI; "pure negative optimization" reflects sentiment. | 👍 1, 6 comments |
| [#1874](https://github.com/MoonshotAI/kimi-cli/issues/1874) | k2.6-code-preview thinking length problem | A single sub-agent hit **51 rounds / 60k+ output tokens**; user describes workflow disruption from uncontrolled reasoning depth. | 1 comment, high severity |
| [#1879](https://github.com/MoonshotAI/kimi-cli/issues/1879) | Configurable colors to distinguish user/assistant messages | Accessibility and UX gap in long terminal sessions; no built-in theming for conversation roles. | New, no votes yet |
| [#1878](https://github.com/MoonshotAI/kimi-cli/issues/1878) | Context compaction picks wrong problem from shared workspace | Data-loss risk: `kimi --print` misidentifies active problem directory in multi-problem workspaces. | New, no votes yet |
| [#1877](https://github.com/MoonshotAI/kimi-cli/issues/1877) | VS Code plugin: thinking block unexpandable in compact mode | Cross-platform UX bug; VS Code extension users cannot inspect hidden reasoning even when they want to. | New, no votes yet |
| [#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873) | Support installation without admin rights | Enterprise Windows lockdown broke install path; regression from earlier versions. | New, no votes yet |
| [#1867](https://github.com/MoonshotAI/kimi-cli/issues/1867) | `--yolo` should not auto-approve plans in Plan Mode | Safety/design concern: `--yolo` conflates tool approval with high-stakes plan review. | New, no votes yet |
| [#1866](https://github.com/MoonshotAI/kimi-cli/issues/1866) | Git repo with Chinese UTF-8 filenames crashes `@` search on 3rd character | Input-method / encoding bug affecting CJK users; reproducible crash in file search. | New, no votes yet |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1836](https://github.com/MoonshotAI/kimi-cli/pull/1836) | Fix interactive YOLO plan review semantics | Separates YOLO auto-approval from interactive plan review; keeps tool approvals auto while preserving human-in-the-loop for plans. | Open |
| [#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) | Register `/btw` slash command in soul-level registry | Makes `/btw` available in all execution modes (print, web, ACP), not just interactive shell. | Open |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | Bump ruff 0.14.14 → 0.15.0 | Dev-dependency hygiene; linter upgrade. | Open |
| [#1875](https://github.com/MoonshotAI/kimi-cli/pull/1875) | **chore: bump kimi-cli 1.34.0** | Release PR bundling crash fix, diff highlight fix, and `show_thinking_stream`. | **Merged** |
| [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) | Enable `trust_env` in `aiohttp.ClientSession` | Respects system proxy env vars (`HTTP_PROXY`, etc.) for corporate/locked-down networks. | Open |
| [#1818](https://github.com/MoonshotAI/kimi-cli/pull/1818) | **feat: supports `list-sessions`** | Adds CLI command to enumerate existing sessions. | **Merged** |
| [#1405](https://github.com/MoonshotAI/kimi-cli/pull/1405) | Add Playwright E2E test infrastructure | Establishes deterministic frontend regression tests against `_scripted_echo` backend. | Open |
| [#1871](https://github.com/MoonshotAI/kimi-cli/pull/1871) | **fix(background): keep cancelled task strong reference** | Fixes terminal freeze on `TaskStop` by preventing GC from reaping pending asyncio tasks. | **Merged** |
| [#1872](https://github.com/MoonshotAI/kimi-cli/pull/1872) | **feat(shell): add `show_thinking_stream` config** | Restores optional full reasoning stream display after compact-indicator change in #1857. | **Merged** |
| [#1868](https://github.com/MoonshotAI/kimi-cli/pull/1868) | Show live and average tokens per second in shell UI | Adds TPS metrics to composing/thinking spinners and turn-end summary. | Open |

---

## 5. Feature Request Trends

1. **Thinking Transparency Controls** — Users want *configurable* depth of reasoning visibility (compact indicator ↔ full trace ↔ raw stream), not a one-size-fits-all UI change.
2. **Plan Mode Safety Granularity** — Requests to decouple `--yolo`/auto-approve into independent toggles for (a) tool execution, (b) plan approval, and (c) file writes.
3. **Enterprise/Locked-Environment Compatibility** — Admin-free installs, proxy support, and Windows enterprise compliance are recurring themes.
4. **Cross-Platform Polish** — VS Code extension parity, terminal color theming, and CJK/UTF-8 input stability.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Thinking UX whiplash** | Issues #1864, #1865, #1859, #1877, #1874 | 🔴 High — trust and token-cost concerns |
| **Uncontrolled agent loop depth (k2.6-preview)** | #1874 (51 rounds, 60k tokens) | 🔴 High — direct cost & latency impact |
| **Windows/PowerShell instability** | #778 (400 errors), #1869 (Emacs keybindings broken), #1873 (admin install blocked) | 🟡 Medium — platform-specific friction |
| **Context/compaction accuracy** | #1878 (wrong problem summary) | 🟡 Medium — silent data/context misalignment |
| **CJK / Unicode robustness** | #1866 (UTF-8 filename crash) | 🟡 Medium — accessibility barrier for large user base |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-04-14.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-15

## 1. Today's Highlights
The team shipped **v1.4.4** with critical fixes for prompt-time tool context, GitHub Copilot compaction, and MCP OAuth persistence. Meanwhile, the community is actively debating two major UX regressions: the migration of auto-accept permissions into global settings and the loss of draft input when permission modals appear. A fresh batch of provider PRs (Databricks, LLM Gateway, Morpheus AI) also signals continued enterprise expansion.

---

## 2. Releases

**v1.4.4** — [Release link](https://github.com/anomalyco/opencode/releases)
- Restored instance/logger context during prompt runs so prompt-time tools and logging behave correctly.
- Kept GitHub Copilot compaction requests valid.
- Restored the flat reply shape for question API responses.
- Persisted MCP OAuth connections that finish immediately.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#18267](https://github.com/anomalyco/opencode/issues/18267) | Claude Code OAuth broken (429 errors) | High-impact auth failure blocking Claude Code users entirely. | 151 comments, 60 👍 — resolved/closed. |
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | Copy To Clipboard not working in TUI | Basic UX breakage; copy-paste is core to terminal workflows. | 84 comments, 65 👍 — open since Nov 2025. |
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | Stuck at "Preparing write..." | Blocks file edits entirely, causing tool execution abort loops. | 55 comments, 23 👍 — recurring with oh-my-opencode. |
| [#7101](https://github.com/anomalyco/opencode/issues/7101) | Custom system prompts at global/project/custom dirs | Highly requested flexibility for prompt engineering and agent tuning. | 27 comments, 84 👍 — top feature ask. |
| [#20698](https://github.com/anomalyco/opencode/issues/20698) | GPT 5.4 from Azure fails on "reasoning" item formatting | Breaks Azure OpenAI integration for latest models. | 21 comments, 3 👍 — enterprise-critical. |
| [#22020](https://github.com/anomalyco/opencode/issues/22020) | Global AGENTS.md ignored when project AGENTS.md exists | Documentation promises merging, but behavior silently drops global rules. | 8 comments, 1 👍 — closed recently. |
| [#20465](https://github.com/anomalyco/opencode/issues/20465) | Blank assistant text with AI SDK v6 + MCP | Regression from v1.3.4; disabling MCP restores responses. | 8 comments, 1 👍 — plugin ecosystem risk. |
| [#22444](https://github.com/anomalyco/opencode/issues/22444) | Azure OpenAI models failing after latest update | Fresh report affecting GPT-5.3/5.2/5.4 Mini on Azure. | 4 comments, 3 👍 — urgent provider regression. |
| [#22479](https://github.com/anomalyco/opencode/issues/22479) | User input discarded on permission/question prompts | UX regression destroying user drafts mid-composition. | 3 comments — newly filed. |
| [#21120](https://github.com/anomalyco/opencode/issues/21120) | Input text disappears after permission modal | Same regression pattern as #22479; users losing drafted follow-ups. | 2 comments, 6 👍 — v1.3.x regression. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#14832](https://github.com/anomalyco/opencode/pull/14832) | `write.ts` coerce JSON objects to strings | Fixes small/quantized models corrupting JSON-based files like `.excalidraw`. | Open |
| [#1589](https://github.com/anomalyco/opencode/pull/1589) | Support images in tool responses | Enables `read` tool and MCP tools to return images as multi-part responses for vision models. | Open |
| [#7984](https://github.com/anomalyco/opencode/pull/7984) | Add Databricks provider support | Enterprise provider adding pay-per-token Databricks Foundation Model APIs. | Open |
| [#7847](https://github.com/anomalyco/opencode/pull/7847) | Add LLM Gateway provider | Adds [llmgateway.io](https://llmgateway.io) as a built-in provider. | Open |
| [#7156](https://github.com/anomalyco/opencode/pull/7156) | Variant support for subagents | Agent-level default `variant` config (low/medium/high reasoning) without manual `--variant` flags. | Open |
| [#6844](https://github.com/anomalyco/opencode/pull/6844) | Clarify edit/write success in diagnostics output | Prevents agents from misreading LSP diagnostics as failed edits. | Open |
| [#6832](https://github.com/anomalyco/opencode/pull/6832) | Auto-deny permissions in non-interactive mode | Unblocks CI/GitHub Actions by preventing permission prompts from hanging indefinitely. | Open |
| [#6629](https://github.com/anomalyco/opencode/pull/6629) | OpenTelemetry instrumentation with Aspire Dashboard | Full observability coverage: tools, MCP, sessions, LLM, LSP, plugins. | Open |
| [#6233](https://github.com/anomalyco/opencode/pull/6233) | LSP `restartServer` operation | Fixes stale diagnostics after package installs (pyright, rust-analyzer, etc.). | Open |
| [#6166](https://github.com/anomalyco/opencode/pull/6166) | Session names wrap to two lines in dialog | TUI polish: long session names no longer truncated with `...`. | Open |

---

## 5. Feature Request Trends

1. **Provider Diversity** — Strong push for Databricks, LLM Gateway, Morpheus AI, Google Vertex AI service-account auth, and better Azure OpenAI stability.
2. **TUX/Input Robustness** — Copy mode, better scrolling, mobile/web UI, and persistent draft input during interruptions are recurring themes.
3. **Agent Configurability** — Custom system prompts at multiple scopes, per-agent variant defaults, and less verbose "thinking" output.
4. **Observability & Control** — Usage tracking (`/usage`), OpenTelemetry, config reload without restart, and permission granularity.

---

## 6. Developer Pain Points

- **Permission UX Regressions:** The shift of auto-accept permissions to global settings (#21423) and the loss of drafted input when modals appear (#22479, #21120) are generating sharp community pushback.
- **Azure/Enterprise Provider Fragility:** Multiple fresh issues (#20698, #22444) show Azure OpenAI integrations breaking on latest model formats and releases.
- **MCP-Related Regressions:** Blank assistant text when MCP is enabled (#20465) and stuck writes (#11112) suggest growing pains in the plugin/tooling layer.
- **macOS Code-Signature Killers:** Binaries being SIGKILL'd by Gatekeeper on macOS 26.x (#18503, #15124) is a critical install/upgrade blocker.
- **TUI Fundamentals Still Gaps:** Copy-to-clipboard (#4283) and scrolling ergonomics (#6257) remain unresolved after months.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-15

---

## 1. Today's Highlights

Pi shipped **v0.67.2** with two long-requested capabilities: multiple `--append-system-prompt` flags and inline extension factories for embedded integrations. The past 24 hours also saw heavy activity in TUI stability—flickering fixes, keybinding improvements, and terminal-protocol edge cases dominated both issues and merged PRs.

---

## 2. Releases

**v0.67.2** — [badlogic/pi-mono/releases](https://github.com/badlogic/pi-mono)

- **Multiple `--append-system-prompt` flags** — each value is now appended to the system prompt separated by double newlines, enabling modular prompt composition. ([README.md#other-options](https://github.com/badlogic/pi-mono/blob/main/README.md#other-options))
- **Inline extension factories in `main()`** — developers embedding Pi can now pass extension factories directly into `main()`, unlocking deeper SDK integration without reimplementing CLI harness logic.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3175](https://github.com/badlogic/pi-mono/issues/3175) | **JSON parse error: Expected ',' or '}' after property value** | Anthropic users report edit-tool failures due to malformed JSON from the model, breaking sessions repeatedly. | 4 comments; active reproduction discussion with session logs attached. |
| [#3108](https://github.com/badlogic/pi-mono/issues/3108) | **Session unrecoverable when model returns tool call with empty name** | A single malformed tool call poisons session history permanently, causing 400 errors on all subsequent turns. | 3 comments; recognized as severe data-integrity bug. |
| [#2592](https://github.com/badlogic/pi-mono/issues/2592) | **`pi update` treats branch refs as pinned** | Git packages installed with branch refs never update, breaking expected continuous-deployment workflows. | 4 comments; closed with fix after user validation. |
| [#3113](https://github.com/badlogic/pi-mono/issues/3113) | **Pi doesn't recognize Shift+Enter under Konsole** | Konsole's unique `ESC OM` sequence for Shift+Enter breaks multi-line prompts, a daily friction for KDE/Linux users. | 4 comments; fix merged same day. |
| [#3005](https://github.com/badlogic/pi-mono/issues/3005) | **Make "UPDATE AVAILABLE" message toggleable** | NixOS and managed-environment users find the banner noisy and unactionable. | 3 comments, 1 👍; clearly a recurring UX papercut. |
| [#3127](https://github.com/badlogic/pi-mono/issues/3127) | **Bedrock provider: support Bearer token auth for Converse API** | Currently SigV4-only; blocks developers who receive tokens without IAM credentials. | 3 comments; enterprise-accessibility request. |
| [#3112](https://github.com/badlogic/pi-mono/issues/3112) | **Tool arguments not validated in Cloudflare Workers** | `validateToolArguments` silently skips validation in Workers, allowing LLM-generated garbage to reach `execute()`. | 3 comments; security/reliability concern for edge deployments. |
| [#3188](https://github.com/badlogic/pi-mono/issues/3188) | **OpenAI ChatGPT (Codex) endpoint does not echo service tier** | Missing service-tier echo breaks Pi's cost-computation logic (2×/0.5× multipliers) for Codex users. | 2 comments; precise financial-impact bug report. |
| [#3133](https://github.com/badlogic/pi-mono/issues/3133) | **Ctrl+Alt letter shortcuts in tmux CSI-u parse but do not match** | Terminal-keyboard protocol mismatch breaks extension shortcuts for tmux users without Kitty protocol. | 2 comments; deep terminal-compatibility issue. |
| [#3177](https://github.com/badlogic/pi-mono/issues/3177) | **Dynamic model discovery via `/v1/models` API** | Hardcoded `models.generated.js` lags behind provider offerings; dynamic discovery would eliminate manual model chasing. | 2 comments; closed after implementation. |

---

## 4. Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#3190](https://github.com/badlogic/pi-mono/pull/3190) | **fix(coding-agent): prevent race condition in auto-compaction** | Adds a guard in `_runAutoCompaction` to stop concurrent executions from corrupting shared abort-controller state. | **Open** |
| [#3185](https://github.com/badlogic/pi-mono/pull/3185) | **fix(ai): trim immediate orphan tool results after malformed calls** | Localizes recovery from malformed tool calls by filtering orphaned `toolResult` blocks, targeting #3108. | **Open** |
| [#3018](https://github.com/badlogic/pi-mono/pull/3018) | **[codex] Improve OpenAI prompt cache affinity** | Aligns OpenAI Responses cache behavior with Codex using UUIDv7 session IDs and consistent cache headers; adds regression tests. | **Open** |
| [#3075](https://github.com/badlogic/pi-mono/pull/3075) | **fix(coding-agent): handle overlapping compactions** | Prevents overlapping automated compactions and stores per-compaction cancellation signals for cleaner state management. | **Closed** |
| [#3171](https://github.com/badlogic/pi-mono/pull/3171) | **feat(coding-agent): support multiple `--append-system-prompt` flags** | Implements the v0.67.2 headline feature; each flag appends with double-newline separation. | **Closed** |
| [#3099](https://github.com/badlogic/pi-mono/pull/3099) | **feat(coding-agent): accept inline extension factories in `main()`** | Enables `MainOptions.extensionFactories`, closing the embedded-integration gap. | **Closed** |
| [#3105](https://github.com/badlogic/pi-mono/pull/3105) | **fix(tui): skip full redraw when only offscreen lines change** | Eliminates heavy flickering in tall TUI extensions by suppressing redraws for offscreen-only changes. | **Closed** |
| [#3162](https://github.com/badlogic/pi-mono/pull/3162) | **fix(tui): skip Kitty keyboard protocol in multiplexer environments** | Detects terminal multiplexers (e.g., Zellij) and avoids enabling full Kitty protocol, preventing Alt-sequence corruption. | **Closed** |
| [#3164](https://github.com/badlogic/pi-mono/pull/3164) | **fix(coding-agent): use `npm view` for update checks on non-default registries** | Replaces direct npm-registry fetches with `npm view`, making update notifications work for private/custom registries. | **Closed** |
| [#3153](https://github.com/badlogic/pi-mono/pull/3153) | **fix: improve TLS interception error guidance and fallback prompt** | Surfaces actionable TLS trust-store guidance (`NODE_EXTRA_CA_CERTS`, `npm config set cafile`) and interactive fallback prompts. | **Closed** |

---

## 5. Feature Request Trends

1. **Embedded / Programmatic Integrations** — Inline extension factories in `main()` and broader SDK reuse signals growing demand for Pi as a library, not just a CLI.
2. **Terminal-Protocol Sophistication** — Requests for Super/Meta keybindings, Kitty protocol handling, tmux/CSI-u compatibility, and multiplexer detection show the TUI is maturing toward power-user expectations.
3. **Provider Flexibility & Dynamic Discovery** — Bearer-token Bedrock auth, Anthropic Vertex AI, Opper AI gateway, and `/v1/models` discovery all point to users wanting Pi to adapt faster to provider ecosystems.
4. **Session Robustness** — Multiple requests around compaction race conditions, malformed tool-call recovery, and poisoned session history indicate the community is pushing Pi toward longer, more resilient sessions.

---

## 6. Developer Pain Points

- **TUI Flickering & Redraw Instability** — Tall dialogs, permission gates, and offscreen content changes cause visible flicker; two fixes landed in 24h, but the issue class keeps resurfacing.
- **Keyboard Input Edge Cases** — Terminal emulators (Konsole, tmux, Zellij, Kitty) each emit divergent sequences for modifiers; developers are repeatedly tripped up by incomplete protocol support.
- **Model/Provider JSON Fragility** — Malformed tool calls and JSON parse errors from Anthropic and OpenAI endpoints break sessions hard, with recovery still being patched.
- **Update Notification Noise** — The "UPDATE AVAILABLE" banner is a frequent complaint for users on NixOS, corporate-managed, or custom-registry setups who cannot update trivially.
- **Tool Validation Gaps in Edge Runtimes** — Cloudflare Workers skipping argument validation is a sharp edge for anyone deploying Pi in serverless/edge environments.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-15

---

## 1. Today's Highlights

The Qwen Code team shipped a nightly release exposing `/context` usage data in non-interactive mode and the SDK API. Meanwhile, the community is intensely focused on **free-tier quota reductions**, with multiple highly-commented issues surfacing in the last 24 hours. On the engineering front, maintainers are actively merging fixes for VS Code UI overflows, subagent streaming failures, and rate-limit error handling.

---

## 2. Releases

**v0.14.4-nightly.20260414.1486e8538**  
Exposes `/context` usage data in non-interactive CLI mode and via the SDK API — enabling better programmatic visibility into token and request consumption.  
[Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.14.4...v0.14.4-nightly.20260414.1486e8538) | [PR #2916](https://github.com/QwenLM/qwen-code/pull/2916)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1742](https://github.com/QwenLM/qwen-code/issues/1742) | 429 Free allocated quota exceeded | Users report hitting rate limits well below the advertised 1,000 requests/day threshold. | **17 comments**, closed — persistent frustration about opaque quota enforcement. |
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Qwen OAuth Free Tier Policy Adjustment | Official proposal to slash free tier to **100 requests/day** and phase it out entirely by April 20. | **16 comments**, open — highly contentious; seen as a breaking trust issue. |
| [#2426](https://github.com/QwenLM/qwen-code/issues/2426) | 现在qwen 玩不起吗? 免费额度一少再少? | Chinese-language counterpart to #3203; directly challenges quota shrinkage claims. | **6 comments**, closed — reflective of regional user backlash. |
| [#3267](https://github.com/QwenLM/qwen-code/issues/3267) | Requests limits overview | User documents hitting daily limits without completing a single task, requesting transparency. | **4 comments**, open — demand for better quota visibility and tooling. |
| [#289](https://github.com/QwenLM/qwen-code/issues/289) | Feature Request: Support creating single executable application (SEA) | Long-standing request for bundling Qwen Code into a standalone binary for easier distribution. | **6 comments**, open — steady interest from developers doing field deployments. |
| [#3277](https://github.com/QwenLM/qwen-code/issues/3277) | MCP Client Limited to 2 Connections — Breaking Production Multi-Node Infrastructure | Critical report that the MCP client artificially caps connections at 2, blocking production workflows. | **1 comment**, open — severity flagged as critical by reporter; awaiting maintainer response. |
| [#3234](https://github.com/QwenLM/qwen-code/issues/3234) | Allow naming/indexing conversations for easier retrieval | UUID-only conversation IDs make long-term session management practically impossible. | **2 comments**, open — strong UX pain point for power users. |
| [#2669](https://github.com/QwenLM/qwen-code/issues/2669) | Permission options 2 and 3 not persisting in Windows 11 CMD | "Always allow" selections are ignored on every run, degrading Windows CLI experience. | **3 comments**, closed — platform-specific reliability gap. |
| [#3172](https://github.com/QwenLM/qwen-code/issues/3172) | Running qwen code in Wrap, intermittent crashes | Reports of rapid, unpredictable crashes in the Wrap terminal emulator on latest versions. | **2 comments**, open — stability concern on alternative terminal environments. |
| [#3095](https://github.com/QwenLM/qwen-code/issues/3095) | Extra blank line below status bar compared to Claude Code | Minor but representative of UI polish gaps that competitive users notice immediately. | **1 comment**, open — micro-frustration with terminal layout fidelity. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#2866](https://github.com/QwenLM/qwen-code/pull/2866) | upstream backports — MCP reconnect, compress fixes, hooks cleanup, follow-up suggestions | Backports 10 upstream improvements including MCP auto-reconnect, compression fixes, and hook cleanup. Merged. |
| [#3239](https://github.com/QwenLM/qwen-code/pull/3239) | feat(agent): run batched subagents in parallel from one tool call | Guarantees parallel execution of `/review` subagents even for models that don't emit multiple `tool_use` blocks. Merged. |
| [#3276](https://github.com/QwenLM/qwen-code/pull/3276) | fix(skill/review): enforce parallel agent dispatch for weaker models | Follow-up to #3239; strengthens prompt instructions so **qwen3.6-plus** reliably parallelizes review agents. Open. |
| [#3260](https://github.com/QwenLM/qwen-code/pull/3260) | fix(vscode-ide-companion): fix auto-scroll bounce and improve input responsiveness | Fixes smooth-scroll bounce bug in VS Code webview and defers input state updates with `useTransition`. Open. |
| [#3249](https://github.com/QwenLM/qwen-code/pull/3249) | fix(vscode): limit session tab title length to prevent tab bar overflow | Truncates long session titles to 50 Unicode code points, resolving the tab-bar overflow reported in #2873. Merged. |
| [#3246](https://github.com/QwenLM/qwen-code/pull/3246) | fix(core): detect rate-limit errors from streamed SSE frames | Properly surfaces `Throttling.AllocationQuota` (HTTP 429) from DashScope SSE streams instead of failing opaquely. Merged. |
| [#3251](https://github.com/QwenLM/qwen-code/pull/3251) | fix(core): allow thought-only responses in GeminiChat stream validation | Resolves `Model stream ended with empty response text` for thinking models on open-ended tasks like `/review`. Open. |
| [#3079](https://github.com/QwenLM/qwen-code/pull/3079) | feat(skills): add /batch skill for parallel batch operations | New built-in skill for orchestrating large-scale parallel file changes via glob patterns and worker agents. Open. |
| [#3261](https://github.com/QwenLM/qwen-code/pull/3261) | feat(cli): add /history command to manage saved chat sessions | Exposes project-scoped session deletion and management through a new `/history` CLI command. Open. |
| [#3242](https://github.com/QwenLM/qwen-code/pull/3242) | fix(cli): preserve startup input through full init | Buffers early TTY keystrokes during CLI startup and replays them once the interactive UI mounts. Open. |

---

## 5. Feature Request Trends

1. **Quota Transparency & Self-Service Billing** — Multiple issues demand usage dashboards, clear reset logic, and predictable pricing as the free tier contracts.
2. **Session Management UX** — Requests for named conversations (`/history`, `/branch`, searchable indexes) show power users outgrowing the UUID-only model.
3. **Distribution & Deployment** — SEA support, standalone binaries, and provider integrations (e.g., Kilo Code) indicate demand for embedding Qwen Code in external toolchains.
4. **Agent Orchestration** — `/batch` skills, parallel subagents, and MCP scaling reflect a push toward production-grade multi-agent workflows.
5. **Hooks & Extensibility** — Prompt hooks, ACP lifecycle hooks, and `PostTurn` events signal an emerging ecosystem play.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Free-tier quota uncertainty** | #1742, #3203, #2426, #3267, #3074 | 🔴 Critical — dominates community sentiment |
| **MCP / subagent reliability at scale** | #3277, #3239, #3251, #3246 | 🔴 Critical — production blockers |
| **Windows CLI permission persistence** | #2669 | 🟡 Moderate — platform parity gap |
| **VS Code companion polish** | #2873, #3260, #3095 | 🟡 Moderate — competitive UX benchmark (Claude Code) |
| **Crash stability on non-standard terminals** | #3172, #377 | 🟡 Moderate — environment fragility |
| **Opaque model behavior / loop detection** | #223, #350, #244, #259 | 🟡 Moderate — trust in autonomous execution |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*