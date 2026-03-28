# AI CLI Tools Community Digest 2026-03-28

> Generated: 2026-03-28 00:09 UTC | Tools covered: 7

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

# AI CLI Tools Cross-Comparison Report — 2026-03-28

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive six-player market with distinct architectural philosophies. Anthropic's Claude Code maintains feature leadership but faces reliability headwinds on Windows and session management. OpenAI's Codex is aggressively refactoring toward Rust-based performance while grappling with token economics transparency. Google's Gemini CLI pursues spec-driven development (SDD) as a workflow differentiator. GitHub Copilot CLI leverages its IDE integration but struggles with enterprise policy enforcement. Kimi Code CLI and OpenCode represent emerging alternatives prioritizing security-first defaults and open extensibility respectively. All tools are converging on MCP ecosystem support while diverging on sandboxing models and planning workflows.

---

## 2. Activity Comparison

| Tool | Issues (Active) | PRs (Active) | Release Status | Velocity Signal |
|------|-----------------|--------------|----------------|---------------|
| **Claude Code** | 10+ hot issues, 150+ 👍 on #24964 | 9 open PRs (plugins, Node 24 upgrade) | v2.1.86 shipped | Steady; maintenance mode with plugin ecosystem expansion |
| **OpenAI Codex** | 10+ issues, #14593 critical (307 comments) | 10 open PRs, 2 merged (TUI consolidation) | 2 alphas in 24h (0.118.0-alpha.2/3) | 🔥 Rapid iteration; Rust migration in progress |
| **Gemini CLI** | 10 issues, #21096 P1 (82 comments) | 10 open PRs, 2 merged | v0.36.0-preview.5 | Preview channel focus; SDD infrastructure heavy |
| **GitHub Copilot CLI** | 10 issues, #2236 high engagement (28 👍) | 0 PRs updated | 2 releases in 24h (v1.0.13-0/1) | Feature shipping; MCP sampling, `/rewind` |
| **Kimi Code CLI** | 8 issues, scale limits prominent | 10 open PRs, 2 merged | v1.27.0 shipped | Active; large repo support priority |
| **OpenCode** | 10+ issues, #5076 security focus (49 👍) | 10 open PRs, security hardening cluster | No release (24h) | Quality-focused cycle; 50+ issues updated |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **MCP Ecosystem Maturity** | All six | Sampling (Copilot), timeout control (Copilot #172), registry reliability (Copilot #2236), Figma integration (Kimi #1604), authentication (OpenCode #12308, Kimi #1512) |
| **Permission Granularity** | Claude Code, Copilot CLI, OpenCode | Compound command parsing (Claude #16561), tool whitelist (Copilot #1973), safer defaults (OpenCode #5076), shell command analysis (Kimi #1614) |
| **Session/Thread Management** | Claude Code, Codex, Gemini CLI | Resume-by-name (Codex #16050), preserve-session plugin (Claude #39148), tmux-like sessions (Codex #6500), persistent tracker storage (Gemini #23724) |
| **Windows Parity** | Claude Code, Codex, Gemini CLI, OpenCode | Folder picker (Claude #24964), sandbox ACL (Codex #13574), MIC hardening (Gemini #24057), Ctrl+C handling (OpenCode #2999) |
| **Rate Limit Transparency** | Claude Code, Codex, Kimi CLI | Fast limit depletion (Claude #38335), token burn bug (Codex #14593), 429 handling (Gemini #24067, Kimi #1599) |
| **TUI/Terminal UX Control** | Codex, Copilot CLI, OpenCode | Alt-screen opt-out (Copilot #2334), color theme (Codex #1618 closed), text selection (OpenCode #15212) |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|-------------|------------|------------------|
| **Claude Code** | Cowork integration, Plan Mode safety, plugin architecture | Enterprise teams, Cowork power users | TypeScript/Node.js; plugin SDK; tight Anthropic ecosystem coupling |
| **OpenAI Codex** | Rust performance, thread telemetry, sandboxing | Performance-sensitive developers, CI/automation | Rust CLI rewrite; bwrap sandboxing; aggressive TUI consolidation |
| **Gemini CLI** | SDD/tracker infrastructure, DAG-based execution | Methodical planners, spec-driven teams | Preview-first releases; internal SDD workstream; ACP protocol |
| **GitHub Copilot CLI** | IDE ecosystem bridge, MCP sampling, timeline navigation | VS Code-centric developers, GitHub-native workflows | V8 compile cache; policy engine integration; rapid feature shipping |
| **Kimi Code CLI** | Large repository scale, incremental streaming, security analysis | Monorepo developers, security-conscious teams | `git ls-files` optimization; shell mode context injection; ACP auth |
| **OpenCode** | Security-first defaults, open extensibility, multi-provider | Privacy-conscious developers, self-hosters | Tauri desktop + Rust CLI; plugin hooks; local-first configuration |

**Key architectural divergence**: Claude Code and Codex prioritize agent autonomy with safety guardrails; Gemini CLI and OpenCode emphasize structured human-in-the-loop workflows; Copilot CLI and Kimi CLI optimize for existing developer environment integration.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Established Leaders** | Claude Code, OpenAI Codex | Highest absolute engagement (150+ 👍 issues), plugin ecosystems, enterprise adoption signals; both facing reliability trust erosion |
| **Rapid Iterators** | GitHub Copilot CLI, Kimi Code CLI | 2 releases/24h (Copilot), active large-repo PRs (Kimi); feature velocity over stability |
| **Infrastructure-Building** | Gemini CLI | Maintainer-heavy SDD tracker work; lower community PR velocity but deep architectural investment |
| **Quality-Focused Emergent** | OpenCode | 50+ issues/20+ PRs without release; security-first positioning; community-driven hardening |

**Momentum signals**: Codex shows highest engineering velocity (Rust rewrite, telemetry infrastructure). Claude Code has highest user dependency but growing frustration with Windows/session issues. Copilot CLI benefits from GitHub distribution but policy engine bugs create adoption friction.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Agent Planning Formalization** | Gemini SDD, Claude Plan Mode regressions, Kimi `PlanDisplay` | Structured planning reduces token waste and misalignment; "plan mode bypass" bugs indicate immature safety boundaries |
| **Sandboxing as Differentiator** | Codex bwrap, Gemini MIC, OpenCode permission hooks, Kimi security analysis | Enterprise procurement increasingly requires demonstrable isolation; "safer defaults" is emerging purchasing criterion |
| **Token Economics Transparency** | Claude "system reminder" bloat (#4464), Codex rapid burn (#14593), Claude Max depletion (#38335) | Developers treating AI tools as metered infrastructure; opaque billing creates vendor switching intent |
| **MCP as Platform Layer** | Sampling (Copilot), timeout control (multiple), authentication (multiple) | Tool ecosystem interoperability becoming table stakes; MCP server quality now affects CLI tool selection |
| **Windows as Second-Class** | 6+ active issues across Claude/Codex/Gemini/OpenCode | ~30% developer population underserved; represents market opportunity for Windows-native tooling |
| **Context Window Optimization** | AST-aware reads (Gemini #22745), `git ls-files` (Kimi #1588), compaction hooks (Codex #11912) | Monorepo scale forcing architectural innovation; naive file discovery failing at 10k+ file scale |

**Strategic implication**: Tools balancing rapid feature iteration with transparent resource accounting and cross-platform reliability will capture enterprise expansion budgets. Security-first positioning (OpenCode, Kimi) may disrupt incumbents if paired with sufficient ecosystem maturity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-03-28 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🔵 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal document generation pain point; author notes these issues "affect every document Claude generates" |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🔵 Open | Revised skill for actionable, single-conversation frontend design guidance | Focus on token efficiency and executable instructions vs. verbose documentation |
| 3 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🔵 Open | Meta-skills for evaluating Skill structure, documentation, and security posture | Five-dimensional quality scoring; addresses need for Skill validation tooling |
| 4 | **[ODT](https://github.com/anthropics/skills/pull/486)** | 🔵 Open | OpenDocument text creation, template filling, and ODT-to-HTML parsing | Enterprise document workflow integration; ISO standard compliance |
| 5 | **[system-documentation](https://github.com/anthropics/skills/pull/95)** | 🔵 Open | Comprehensive system documentation generator with architecture flowcharts | Evidence management system focus; executive summaries and network topology |
| 6 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 🔵 Open | Community health improvement—adds contribution guidelines | Addresses 25% GitHub community health score; closes #452 |
| 7 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | 🔵 Open | SAP tabular foundation model integration for predictive analytics on business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |
| 8 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | 🔵 Open | Image/video generation via Masonry CLI (Imagen 3.0, Veo 3.1) | Media generation workflow management with job tracking |

---

## 2. Community Demand Trends

From high-engagement Issues, four dominant Skill directions emerge:

| Trend | Evidence | Underlying Need |
|:---|:---|:---|
| **Enterprise Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) Agent Governance (4 comments), [#492](https://github.com/anthropics/skills/issues/492) trust boundary concerns | Policy enforcement, audit trails, and threat detection for multi-agent systems |
| **Memory & Context Persistence** | [#154](https://github.com/anthropics/skills/pull/154) shodh-memory, [#629](https://github.com/anthropics/skills/pull/629) session-memory | Surviving context compaction; technical fact preservation across sessions |
| **Cross-Platform Integration** | [#29](https://github.com/anthropics/skills/issues/29) Bedrock support, [#16](https://github.com/anthropics/skills/issues/16) MCP exposure, [#646](https://github.com/anthropics/skills/pull/646) Windows screenshot paste | Deployment flexibility beyond Claude Code native environment |
| **Skill Quality & Validation** | [#202](https://github.com/anthropics/skills/issues/202) skill-creator best practices, [#556](https://github.com/anthropics/skills/issues/556) 0% trigger rate bug, [#36](https://github.com/anthropics/skills/pull/36) YAML validation fixes | Reliable Skill creation, testing, and deployment tooling |

---

## 3. High-Potential Pending Skills

Active PRs with recent momentum (updated within 30 days) likely to merge:

| Skill | PR | Last Updated | Why It May Land |
|:---|:---|:---|:---|
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | 2026-03-17 | Solves critical context loss problem; zero dependencies; addresses compaction pain point explicitly |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | 2026-03-20 | Structured problem-solving frameworks; fills enterprise strategy gap |
| **windows-screenshot-paste** | [#646](https://github.com/anthropics/skills/pull/646) | 2026-03-14 | Platform-specific UX fix; AutoHotkey v2 implementation complete |
| **8-skill foundation series** | [#288](https://github.com/anthropics/skills/pull/288) | 2026-03-26 | Tutorial-builder, quiz-generator, a11y-auditor, changelog-curator, data-storytelling—broad coverage, recently refreshed |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 2026-02-04 | 10-step systematic cleanup workflow; orphaned code detection |

---

## 4. Skills Ecosystem Insight

> **The community's concentrated demand is for production-grade reliability tooling**—skills that validate other skills, preserve context across system boundaries, and integrate with enterprise infrastructure (SAP, Bedrock, document standards), reflecting a maturation from experimental utilities to mission-critical workflow components.

---

---

# Claude Code Community Digest — 2026-03-28

---

## 1. Today's Highlights

Anthropic shipped **v2.1.86** with proxy-friendly session headers and expanded VCS exclusions, while the community grapples with **Plan Mode regressions** where models bypass restrictions to edit files directly. Windows users face mounting friction from folder picker limitations, permission prompt bugs on compound bash statements, and a critical **data loss bug** where Cowork chat history vanishes on minor version updates.

---

## 2. Releases

### [v2.1.86](https://github.com/anthropics/claude-code/releases/tag/v2.1.86)
- **Proxy support**: Added `X-Claude-Code-Session-Id` header for session aggregation without body parsing
- **VCS compatibility**: Excluded `.jj` (Jujutsu) and `.sl` (Sapling) directories from Grep and autocomplete
- **Bug fix**: Resolved `--resume` functionality (details sparse in release notes)

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#24964](https://github.com/anthropics/claude-code/issues/24964) Cowork folder picker blocks external/symlinked directories | Breaks monorepo and enterprise workflows where projects live outside `$HOME` or use junctions | **150 👍, 110 comments** — highest engagement; users sharing registry workarounds |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) Claude Max session limits draining abnormally fast since Mar 23 | Affects paid users' ROI; suspected billing/calculation regression | **80 👍, 79 comments**; pattern reports clustering around specific date |
| [#28240](https://github.com/anthropics/claude-code/issues/28240) Permission prompts trigger on `cd` in compound statements | Windows regression breaking script automation; `cd && command` patterns common in CI | **98 👍, 30 comments**; marked regression, no official timeline |
| [#7490](https://github.com/anthropics/claude-code/issues/7490) Configurable shell for Bash tool | Hardcoded shell breaks zsh/fish users with custom env setups | **89 👍, 33 comments**; long-standing (Sept 2025), active +1s |
| [#16561](https://github.com/anthropics/claude-code/issues/16561) Parse compound Bash commands for granular permissions | Security/UX: `&&` chains require full approval even if components are allowlisted | **118 👍, 17 comments**; well-scoped feature with reproduction |
| [#4464](https://github.com/anthropics/claude-code/issues/4464) "System reminder" injection consuming excessive tokens | Silent cost inflation; large files trigger unexpected context bloat | **9 👍, 26 comments**; enterprise cost sensitivity evident |
| [#38055](https://github.com/anthropics/claude-code/issues/38055) Cowork data loss on minor update | **Critical**: Chat history and scheduled tasks permanently deleted | Only **1 👍** but severe impact; needs urgent triage |
| [#38255](https://github.com/anthropics/claude-code/issues/38255) / [#39713](https://github.com/anthropics/claude-code/issues/39713) Plan Mode bypass — model edits files despite restrictions | Core safety feature failing; multiple confirmations ignored | **5 👍 / 1 👍**, 4-5 comments each; regression flagged in 2.1.83-2.1.84 |
| [#30457](https://github.com/anthropics/claude-code/issues/30457) Google Drive connector shows connected but tools unavailable | Cowork integration broken for cloud storage workflows | **18 👍, 32 comments**; authentication state desync suspected |
| [#32963](https://github.com/anthropics/claude-code/issues/32963) 6-hour session degradation: autonomous destructive actions | Long-running session reliability; data corruption risk | **2 👍, 4 comments**; detailed repro, WSL-specific |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#32755](https://github.com/anthropics/claude-code/pull/32755) `edit-verifier` plugin — post-edit verification | Addresses silent Edit tool failures; validates text matches before proceeding | Open |
| [#39977](https://github.com/anthropics/claude-code/pull/39977) `tmp-cleanup` plugin — disk leak mitigation | Auto-prunes 46GB+ task `.output` files; supersedes [#39916](https://github.com/anthropics/claude-code/pull/39916) | Open |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) `preserve-session` plugin — path-independent history | UUID-based registry for renamed/moved projects; `/preserve-session:fix` command | Open |
| [#39872](https://github.com/anthropics/claude-code/pull/39872) Node.js 20 → 24 upgrade | LTS preparation; likely dependency modernization | Open |
| [#39855](https://github.com/anthropics/claude-code/pull/39855) Bash parameter expansion in `gh.sh` | Removes `tr` subshell; micro-optimization for CLI scripts | Open |
| [#39043](https://github.com/anthropics/claude-code/pull/39043) Remove "retro-futuristic" from Frontend Design Skill | UX copy fix; notable author (t3dotgg) | Open |
| [#37648](https://github.com/anthropics/claude-code/pull/37648) Complete skill-development frontmatter docs | 11-field reference table for skill authors | Open |
| [#39132](https://github.com/anthropics/claude-code/pull/39132) ~~`terminal-restore` plugin~~ | Kitty keyboard protocol cleanup; **closed** — superseded or rejected | Closed |
| [#39916](https://github.com/anthropics/claude-code/pull/39916) ~~Initial tmp-cleanup~~ | Pruned oversized outputs; **closed** in favor of [#39977](https://github.com/anthropics/claude-code/pull/39977) | Closed |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Shell environment flexibility** | [#7490](https://github.com/anthropics/claude-code/issues/7490) (configurable shell), [#16561](https://github.com/anthropics/claude-code/issues/16561) (compound command parsing) | High — affects daily workflow |
| **Cowork ↔ CLI bridge** | [#25791](https://github.com/anthropics/claude-code/issues/25791) (programmatic Cowork triggers) | Emerging — integration demand |
| **Terminal backend expansion** | [#35351](https://github.com/anthropics/claude-code/issues/35351) (Ghostty support), [#10168](https://github.com/anthropics/claude-code/issues/10168) (user input hooks) | Steady — power user tooling |
| **Permission granularity** | [#16561](https://github.com/anthropics/claude-code/issues/16561), [#29782](https://github.com/anthropics/claude-code/issues/29782) (denial reasons) | Security-focused |
| **Session durability** | [#39148](https://github.com/anthropics/claude-code/pull/39148) (preserve-session), [#27048](https://github.com/anthropics/claude-code/issues/27048) (cache invalidation) | Reliability priority |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Windows second-class citizenship** | Folder picker restrictions, permission regressions, TUI scroll issues, AVX crashes | **Critical** — 6+ active issues, highest comment velocity |
| **Plan Mode safety failures** | Models bypassing edit restrictions despite system reminders | **Rising** — 2 confirmed regressions in 2.1.8x |
| **Session/cost opacity** | Unexplained token consumption, fast limit depletion, cache invalidation bugs | **Persistent** — billing trust erosion |
| **Cowork reliability** | Data loss on updates, connector state desync, missing CLI integration | **Acute** — enterprise blocker potential |
| **Long-session instability** | Context drift, autonomous destructive behavior after ~6h | **Niche but severe** — WSL-specific reports |
| **Plugin/Channels plan gating** | `--channels` ignored on Max plans, feature availability confusion | **Friction** — subscription value perception |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-28

---

## 1. Today's Highlights

The Codex team shipped two Rust alpha releases (0.118.0-alpha.2/3) while the community grapples with a **major token consumption bug** burning through Business-tier quotas at alarming rates. Windows sandboxing regressions and WebSocket fallback loops remain active pain points, with 307 comments on the token issue alone signaling urgent user impact. On the development front, the team is aggressively consolidating the TUI architecture—removing the legacy `tui`/`tui_app_server` split—and landing telemetry infrastructure for thread lifecycle tracking.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **rust-v0.118.0-alpha.3** | Second alpha in 24h; no detailed changelog provided—appears to be iterative Rust CLI stabilization |
| **rust-v0.118.0-alpha.2** | Initial alpha release |

*Both releases lack detailed release notes; users should treat as early-access builds.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** (Business tier) | Critical cost regression—users report rapid token depletion without corresponding output. 307 comments indicate widespread, reproducible impact. | 🔥 102 👍, 307 comments—highest engagement in tracker; demands immediate hotfix |
| [#13041](https://github.com/openai/codex/issues/13041) | WebSocket upgrade → 1008 Policy closure | Forces HTTPS fallback, degrading real-time performance; affects Linux/Arch users primarily. | 109 👍, 54 comments; networking team attention needed |
| [#13574](https://github.com/openai/codex/issues/13574) | `apply_patch` fails under Windows sandbox (closed) | 5.3 regression blocked file operations in default sandbox; now resolved but signals Windows fragility. | 25 👍, 35 comments; validation requested |
| [#3962](https://github.com/openai/codex/issues/3962) | Sound notification on task completion | Long-standing UX gap for background workflows; Terminal users have workarounds, IDE users don't. | 124 👍, 34 comments; "finally" sentiment |
| [#1618](https://github.com/openai/codex/issues/1618) | TUI color theme control (closed) | Accessibility and personalization blocker; resolved but sparked broader theming discussions. | 104 👍, 28 comments |
| [#2628](https://github.com/openai/codex/issues/2628) | Project-specific MCPs (closed) | Enables per-repo MCP server configs—critical for team workflows with conflicting toolsets. | 140 👍, 27 comments; merged after 7 months |
| [#9211](https://github.com/openai/codex/issues/9211) | Remote compact task timeout | Breaks long-running agent sessions on remote VMs; blocks CI/automation use cases. | 20 comments, no 👍—niche but severe for affected users |
| [#7727](https://github.com/openai/codex/issues/7727) | Delete option for Task context menu | Basic hygiene feature missing from VS Code extension; clutter accumulates rapidly. | 71 👍, 17 comments |
| [#13476](https://github.com/openai/codex/issues/13476) | Excessive MCP approval prompts (Playwright) | Regression in 0.107.0—sandboxes now prompt per-file, breaking automated testing flows. | 27 👍, 15 comments; "unusable for E2E" |
| [#16049](https://github.com/openai/codex/issues/16049) | Session resume fails after 0.117.0 upgrade | Data loss risk—saved sessions unreachable by name; fix in progress (#16050). | 5 comments, fresh regression |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#15929](https://github.com/openai/codex/pull/15929) | **Non-workspace filesystem writes with read-only fallback** | Unblocks writing to `/tmp`, `:tmpdir` outside workspace root when legacy sandbox policy can't represent it | 🟡 Open |
| [#16026](https://github.com/openai/codex/pull/16026) | **TUI footer refresh on collaboration mode changes** | Fixes stale UI when switching models/collaboration modes; architectural cleanup moving logic to `ChatWidget` | 🟡 Open |
| [#16055](https://github.com/openai/codex/pull/16055) | **Force forked agents to inherit parent model settings** | Prevents context reuse economics breakage from child overrides; adds v1/v2 regression tests | 🟡 Open |
| [#15690](https://github.com/openai/codex/pull/15690) | **Telemetry: thread events** | New reducer/publish architecture; instruments `thread/start`, `thread/fork`, `thread/resume`—foundation for observability | 🟡 Open |
| [#16050](https://github.com/openai/codex/pull/16050) | **Fix resume-by-name lookup regression** | Addresses #16049: name lookup now scans hydrated thread list instead of relying on backend search index | 🟡 Open |
| [#15952](https://github.com/openai/codex/pull/15952) | **Enable Windows Bazel workflow** | Restores reliable Windows CI path; unblocks native Windows development velocity | 🟡 Open |
| [#13678](https://github.com/openai/codex/pull/13678) | **Watchdog runtime and prompts** | Adds lifecycle management for agent threads with watchdog-specific prompts; preserves `list_agents`, `close_agent` hooks | 🟡 Open |
| [#15981](https://github.com/openai/codex/pull/15981) | **Fix symlinked writable roots in sandbox** | Preserves logical symlink paths, binds real targets in bwrap; fixes carveout escape masking | 🟡 Open |
| [#15917](https://github.com/openai/codex/pull/15917) | **Codex CLI stdin piping for `codex exec`** | Enables `echo "input" | codex exec -p "prompt"` parity with Claude Code | 🟡 Open |
| [#15922](https://github.com/openai/codex/pull/15922) + [#15964](https://github.com/openai/codex/pull/15964) | **Remove legacy TUI split / rename to `tui`** | Deletes `tui`/`tui_app_server` duality; simplifies architecture, reduces maintenance burden | ✅ Merged |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Session/Thread Management** | #6500 (tmux-like sessions), #7727 (task deletion), #16037 (machine-readable `/status --json`) | High—CLI power users need observability and control |
| **IDE Workspace Scoping** | #3550 (VS Code project-scoped chats) | Moderate—organizational pain for polyglot developers |
| **Background Task Awareness** | #3962 (completion sounds), #2062 (monitor background services) | Growing—agent autonomy requires async UX |
| **Custom Compaction Hooks** | #11912 (user-defined compaction at token thresholds) | Niche but deeply technical—power user ask |
| **MCP Configuration Flexibility** | #2628 (project-specific MCPs—✅), #13476 (approval fatigue) | Stabilizing; needs policy refinement |

---

## 6. Developer Pain Points

| Category | Symptoms | Root Cause Indicators |
|----------|----------|----------------------|
| **Token Economics Opacity** | #14593 (rapid burn), #15648 (model tier restrictions) | Billing/quoting logic decoupled from visible usage; tier-gated models fail cryptically |
| **Windows Sandbox Fragility** | #13574, #14675, #16030 (ACL churn, nested `src/**` failures) | Windows security model impedance mismatch; path canonicalization bugs |
| **WebSocket Reliability** | #13041 (1008 policy closure), #15945 (503 on web search) | Infrastructure edge cases; fallback logic insufficiently transparent |
| **TUI/CLI State Drift** | #16049 (session resume), #16033 (auto-compaction never triggers), #15984 (hook output not rendered) | Rapid 0.117.0 refactoring introducing regressions; test coverage gaps in app-server path |
| **MCP Approval Fatigue** | #13476 (excessive prompts), #16028 (MCP breakage 0.114→0.117) | Security policy tightening without UX smoothing; regression in tool routing |

---

*Digest compiled from github.com/openai/codex public activity. For corrections or additions, open an issue or discussion.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-28

## Today's Highlights

The v0.36.0-preview.5 release continues the march toward stable, with critical UI fixes landing for layout contention and shell focus feedback. The top community pain point remains [#21096](https://github.com/google-gemini/gemini-cli/issues/21096)—a persistent "stuck loading" state after cancellation that has accumulated 82 comments and 35 upvotes, with a fix now in PR review. Meanwhile, the internal SDD (Spec-Driven Development) workstream is accelerating, with multiple tracker infrastructure PRs merging to enable persistent project-level task state and DAG-based execution.

---

## Releases

| Version | Notes |
|--------|-------|
| [v0.36.0-preview.5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.5) | Preview release; no detailed changelog provided. Full diff available [here](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.4...v0.36.0-preview.5). |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#21096](https://github.com/google-gemini/gemini-cli/issues/21096) — Request stuck after canceling | **P1 bug** affecting Termux/Android users; "This is taking a bit longer" persists indefinitely after `Esc` | 82 comments, 35 👍 — highest engagement in tracker |
| [#17437](https://github.com/google-gemini/gemini-cli/issues/17437) — `CTRL+S` diff view broken | Regression in Windows workflow; users rely on this to review changes before confirmation | 7 comments, active discussion |
| [#20498](https://github.com/google-gemini/gemini-cli/issues/20498) — Paid subscription lacks Gemini 3 access | Confusion around enterprise/paid tier model availability; impacts purchasing decisions | 7 comments, 1 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads investigation | **EPIC**: Could reduce token waste and misaligned reads via precise method-boundary extraction | 4 comments, maintainer-only |
| [#23858](https://github.com/google-gemini/gemini-cli/issues/23858) — Files edited while in plan mode | Agent behavior violation: model modifies files during planning phase, claims it's not | 3 comments, needs-info |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) — `/plan` should accept inline prompt | UX friction: forced context switch to plan box; single-command planning requested | 2 comments, 2 👍 |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) — Persistent project-level tracker storage | **SDD milestone**: Moves task state from temp dirs to `.gemini/tracker/` for Git collaboration | 1 comment |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) — Subagents unaware of approval modes | Policy engine blocks calls but agents don't know why; creates retry loops | 1 comment, 1 👍 |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) — Memory routing: global vs. project | Foundation for contextual memory; separates user preferences from codebase conventions | 1 comment, 1 👍 |
| [#24037](https://github.com/google-gemini/gemini-cli/issues/24037) — Tracker updates during replanning | Real-time task state mutation mid-execution; critical for long-running SDD workflows | 0 comments, 1 👍 |

---

## Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#20974](https://github.com/google-gemini/gemini-cli/pull/20974) — Compact tool output | **P0/P2**: High-signal rendering mode reducing noise in tool responses; builds on #23286 | Open |
| [#24065](https://github.com/google-gemini/gemini-cli/pull/24065) — Fix StatusRow flashing loop | **P1**: Eliminates infinite re-render between Tip and Thinking messages via ResizeObserver fix | Open |
| [#21960](https://github.com/google-gemini/gemini-cli/pull/21960) — Clear stale retry state after cancel | **P1**: Root fix for #21096; prevents late retry events from orphaning UI loading state | Open |
| [#24057](https://github.com/google-gemini/gemini-cli/pull/24057) — Windows Mandatory Integrity Control | **P1**: Security hardening via restricted tokens + job object limits for sandbox | Open |
| [#24070](https://github.com/google-gemini/gemini-cli/pull/24070) — `save_memory` target parameter | Project-specific `GEMINI.md` routing; enables scoped memory beyond `~/.gemini/` | Open |
| [#22139](https://github.com/google-gemini/gemini-cli/pull/22139) — Prevent `SessionEnd` firing twice | Closed; fixed duplicate hook registration in non-interactive mode | **Merged** |
| [#23821](https://github.com/google-gemini/gemini-cli/pull/23821) — Fix ACP "Operation Aborted" errors | Closed; resolved grep_search timeouts in large monorepos | **Merged** |
| [#24067](https://github.com/google-gemini/gemini-cli/pull/24067) — Fix 429 infinite retry loop | Prevents UI hang on rate limits; addresses v0.35.2 regression | Open |
| [#23961](https://github.com/google-gemini/gemini-cli/pull/23961) — ACP structured terminal lifecycle | **ACP**: Adds `exitCode`/`signal` to shell results; terminal metadata for agent context | Open |
| [#20108](https://github.com/google-gemini/gemini-cli/pull/20108) — Fix loop detection hard-crash | Prevents `AbortError` from killing Node process during repetitive content detection | Open |

---

## Feature Request Trends

1. **SDD/Tracker Infrastructure Dominance** — The majority of maintainer-only issues focus on replacing Markdown-based planning with a DAG task system. Persistent storage, root tracker IDs, and spec-to-tracker bridges indicate a major workflow shift is imminent.

2. **Memory System Maturation** — Requests for global vs. project memory routing, proactive memory writes, and targeted `GEMINI.md` updates show the memory subsystem is expanding from passive storage to active context management.

3. **Agent Self-Awareness** — Subagents need knowledge of approval modes, rejection handling, and their own constraints to avoid policy-engine collisions and infinite retry loops.

4. **AST-Aware Tooling** — Investigation into `tilth`/`glyph` integration for precise code navigation suggests future reductions in token consumption and misaligned file reads.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Cancellation reliability** | #21096, #21960, #21290 | **Critical** — 82-comment thread, affects mobile/Termux users disproportionately |
| **Windows parity gaps** | #17437 (CTRL+S), #24057 (sandbox MIC), #19901 (symlinks) | High — platform-specific regressions accumulate |
| **Rate limit handling** | #24067 — infinite retry on 429 | High — production reliability issue |
| **Model access confusion** | #20498 — paid tiers unclear on Gemini 3 availability | Medium — trust/purchasing friction |
| **UI stability** | #24065 (flashing), #23858 (plan mode violations) | Medium — polish gaps in agent-heavy workflows |
| **Startup performance** | #23171 — double `loadCliConfig` calls, duplicate extension warnings | Low-Medium — papercuts at scale |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-28

---

## 1. Today's Highlights

Two rapid-fire releases (v1.0.13-0 and v1.0.13-1) landed in 24 hours, delivering major MCP ecosystem upgrades: LLM sampling capabilities for servers and a powerful new `/rewind` timeline picker for conversation history. Meanwhile, enterprise policy enforcement continues to fracture user experiences, with multiple high-engagement issues reporting false "disabled by organization" warnings and model access denials despite valid subscriptions.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.13-1** | • **New:** `/rewind` command and double-Esc open timeline picker for granular conversation rollback ([#release](https://github.com/github/copilot-cli/releases/tag/v1.0.13-1))<br>• **Improved:** MCP registry reliability with auto-retries; faster startup via V8 compile cache |
| **v1.0.13-0** | • **New:** MCP servers can request LLM inference (sampling) with user approval flow ([#release](https://github.com/github/copilot-cli/releases/tag/v1.0.13-0))<br>• **Fixed:** Hidden blocked MCP servers in `/mcp show`; BYOM reasoning effort settings; terminal clearing behavior |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | Cannot access any model | Enterprise policy engine appears to conflict with subscription entitlements—40% premium quota remaining but `/models` fails with "access denied" | 🔥 16 comments, 8 👍—critical for enterprise adoption |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | MCP servers disappear with false org policy warning | Regression in v1.0.11: registry servers vanish after working; warning contradicts actual policy | 28 👍, 6 comments—highest engagement this cycle |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Transient API errors → rate limit cascade | Retry logic may be too aggressive, exhausting quota before user sees meaningful output | 10 comments, 5 👍—impacts daily usability |
| [#1274](https://github.com/github/copilot-cli/issues/1274) | 400 errors on diff code review | Suggests request body validation drift between CLI and backend—95% failure rate reported | 10 comments, 5 👍—breaks core workflow |
| [#172](https://github.com/github/copilot-cli/issues/172) | MCP timeouts ignored | Long-running MCP operations (intentional design) killed by hardcoded CLI timeout; `mcp-config.json` field non-functional | 8 comments, 2 👍—blocks advanced MCP use cases |
| [#2334](https://github.com/github/copilot-cli/issues/2334) | Bring back no-alt-screen | Alt-screen TUI breaks scrollbar, find-in-terminal, and copy workflows—usability regression | 6 👍, fresh issue—rapidly gaining traction |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | Tool whitelist for Interactive Mode | `/allow-all` is binary; users want graduated permissions between "approve everything" and "approve every grep" | 7 👍, 4 comments—safety/velocity tradeoff |
| [#2336](https://github.com/github/copilot-cli/issues/2336) | Strange rate limit on moderate tasks | Background agent triggers limit mid-task; messaging unclear if quota or concurrency-based | 5 comments, new—suggests agent scaling issues |
| [#1095](https://github.com/github/copilot-cli/issues/1095) | BYOK model support via API keys | Users want Grok 4.1, 1M token windows beyond Copilot's model roster | 8 👍, 4 comments—competitive parity request |
| [#1128](https://github.com/github/copilot-cli/issues/1128) | `awaitingUserInput` hook type | Plugin ecosystem gap: no event fires when CLI enters input-ready state | 17 👍, 2 comments—highest-feature-request signal |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **MCP ecosystem maturity** | Sampling (#release), timeout control (#172), registry reliability (#2236), VS Code config sync (#39) | Core platform bet—rapid iteration |
| **TUI/terminal experience control** | no-alt-screen revival (#2334, #1799), scroll behavior (#1944, #2302, #1842), selection contrast (#2216) | Alt-screen rollout causing backlash; users want opt-out |
| **Permission granularity** | Tool whitelist (#1973), persistent default agents (#2212), `awaitingUserInput` hooks (#1128) | Power users hitting "approve fatigue" |
| **Enterprise policy transparency** | Model access (#1595), org MCP warnings (#2236, #1976) | Trust erosion where policy engine contradicts reality |
| **Extended model ecosystem** | BYOK support (#1095), Claude availability gap (#2045) | Users want escape hatch from Copilot model roster |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Enterprise policy enforcement bugs** | 3+ issues (#1595, #2236, #1976) | Complete workflow blockage despite valid subscriptions; highest frustration signal |
| **Alt-screen TUI regressions** | 4+ issues (#2334, #1799, #1944, #2302) | Breaks muscle memory for scroll, find, copy; "unusable" per reports |
| **Rate limiting & retry behavior** | 2+ issues (#2101, #2336) | Opaque limits, aggressive retries exhaust quota |
| **MCP timeout rigidity** | #172 | Blocks long-running analysis tools |
| **Keyboard layout compatibility** | #1999 | German `@` key broken—internationalization gap |
| **Missing BYOK/BYOM parity** | #1095, #2045 | CLI lags VS Code model availability |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-28

---

## 1. Today's Highlights

Kimi Code CLI **v1.27.0** shipped with major UX improvements including incremental markdown streaming, redesigned diff rendering with inline support, and a new `/feedback` command for direct product input. The release also introduces `PlanDisplay` wire types for better structured planning output. Meanwhile, the community is actively stress-testing large repository support, with multiple PRs addressing the 1000-file limit for `@` path completion and shell mode enhancements.

---

## 2. Releases

### [v1.27.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.27.0) — 2026-03-28

| Feature | Description |
|--------|-------------|
| **Incremental Markdown Streaming** | Confirmed markdown blocks now flush permanently to terminal, reducing flicker and improving perceived responsiveness ([PR #1598](https://github.com/MoonshotAI/kimi-cli/pull/1598)) |
| **PlanDisplay Wire Type** | New structured message type for inline plan rendering across all UI layers ([PR #1601](https://github.com/MoonshotAI/kimi-cli/pull/1601)) |
| **Async `/feedback` Command** | In-shell feedback submission with automatic GitHub fallback ([PR #1593](https://github.com/MoonshotAI/kimi-cli/pull/1593)) |
| **Enhanced Diff Rendering** | Inline diff support with improved syntax highlighting integration ([PR #1612](https://github.com/MoonshotAI/kimi-cli/pull/1612)) |
| **Workspace File Panel (Web)** | New right-side panel for browsing and downloading session files ([PR #1573](https://github.com/MoonshotAI/kimi-cli/pull/1573)) |

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|--------------|
| [#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355) | ACP session initialization fails with `list.index(x): x not in list` | 🔴 **OPEN** | Blocks IDEA AI Assistant integration; 4 comments suggest widespread JetBrains user impact |
| [#1602](https://github.com/MoonshotAI/kimi-cli/issues/1602) | Web access white screen on browser | 🔴 **OPEN** | Critical regression affecting macOS users on v1.26.0; console errors indicate routing failure |
| [#1610](https://github.com/MoonshotAI/kimi-cli/issues/1610) | `@` path completion hits 1000 file limit | 🔴 **OPEN** | Hard blocker for large monorepos; community explicitly calls limit "too little" |
| [#1607](https://github.com/MoonshotAI/kimi-cli/issues/1607) | `write` tool freezes in v1.26.0 | 🔴 **OPEN** | Workflow-breaking regression requiring interrupt/restart cycle |
| [#1604](https://github.com/MoonshotAI/kimi-cli/issues/1604) | Figma MCP Support request | 🔴 **OPEN** | Design-to-code workflow integration; notes Figma's pre-registration requirement |
| [#1599](https://github.com/MoonshotAI/kimi-cli/issues/1599) | API 429 rate limiting errors | 🔴 **OPEN** | `/login` flow hitting rate limits; unclear if client or server-side issue |
| [#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596) | AGENTS.md instruction compliance fails | 🔴 **OPEN** | Project-level constraints ignored by agent; reproducible test case provided |
| [#1366](https://github.com/MoonshotAI/kimi-cli/issues/1366) | CLI argument to select history session | 🟢 **CLOSED** | Community-requested enhancement resolved by `--sessions` flag (later reverted, see PR #1608) |

---

## 4. Key PR Progress

| # | PR | Status | Technical Summary |
|---|----|--------|-------------------|
| [#1614](https://github.com/MoonshotAI/kimi-cli/pull/1614) | Shell command security analysis | 🔵 **OPEN** | Adds 15+ security pattern detectors for pre-execution approval workflow; addresses #1539 |
| [#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587) | Shell mode context injection & persistent `cd` | 🔵 **OPEN** | Shell output enters conversation as `<system-reminder>`; `cd` persists with real shell semantics (`~`, `-`, `CDPATH`) |
| [#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588) | `git ls-files` for `@` completion in large repos | 🔵 **OPEN** | Fixes depth-first traversal failure in 65k+ file repos (apache/superset case); switches to git-indexed discovery |
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | ACP authentication system rewrite | 🔵 **OPEN** | Terminal login + OAuth Device Flow; `_check_auth()` unified architecture with `AUTH_REQUIRED` exceptions |
| [#1600](https://github.com/MoonshotAI/kimi-cli/pull/1600) | Bright blue user input highlighting | 🔵 **OPEN** | Visual UX improvement: `#007AFF` colored input with full-width separator |
| [#1597](https://github.com/MoonshotAI/kimi-cli/pull/1597) | Guard `trafilatura` import for Python 3.13 | 🔵 **OPEN** | Prevents cascading tool load failure from `charset-normalizer` mypyc incompatibility |
| [#1605](https://github.com/MoonshotAI/kimi-cli/pull/1605) / [#1606](https://github.com/MoonshotAI/kimi-cli/pull/1606) | `--skills-dir` behavior revert/restore | 🔵 **OPEN** | Community debate: override vs. append semantics for custom skill directories |
| [#1611](https://github.com/MoonshotAI/kimi-cli/pull/1611) | Expand `~` in `Glob` tool paths | 🟢 **MERGED** | Fixes inconsistency where `Glob` was only file tool missing `expanduser()` |
| [#1609](https://github.com/MoonshotAI/kimi-cli/pull/1609) | `Glob` tool access to skills directories | 🟢 **MERGED** | Enables skills loaded from `~/.claude/skills/` to search their own `scripts/` subdirectories |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **MCP Ecosystem Expansion** | Figma MCP (#1604), ACP authentication (#1512) | 🔥 High — third-party tool integration is top priority |
| **Large Repository Support** | `git ls-files` PR (#1588), 1000-file limit issue (#1610) | 🔥 High — enterprise/monorepo adoption blocker |
| **Structured Output & Planning** | `PlanDisplay` wire type (#1601), AGENTS.md compliance (#1596) | 🌡️ Medium — agent reliability and predictability |
| **Session Management UX** | `--sessions` flag (reverted in #1608), history selection (#1366) | 🌡️ Medium — workflow continuity improvements |
| **Security & Transparency** | Shell command analysis (#1614), approval workflow visibility | 🌡️ Medium — trust and safety in autonomous execution |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Community Signal |
|------------|-------------|----------------|
| **Scale Limits** | 1000-file `@` completion cap, `os.walk()` performance in 65k+ file repos | Explicit complaints + active PRs (#1588, #1610) |
| **Tool Execution Reliability** | `write` tool freezing (#1607), web fetch import failures (#1597) | Regression reports on v1.26.0 |
| **Authentication Fragility** | ACP session init crashes (#1355), OAuth flow edge cases | 4+ comments, cross-platform (JetBrains, CLI) |
| **Configuration Semantics** | `--skills-dir` override vs. append confusion (#1605/#1606) | Revert/restore cycle indicates unclear API contract |
| **Project Context Respect** | AGENTS.md ignored (#1596), session state drift | Reproducible test cases provided by users |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity 2026-03-27 to 2026-03-28.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-28

---

## 1. Today's Highlights

No new releases dropped in the last 24h, but development activity remains intense with **50+ issues and 20+ PRs** updated. The community is heavily focused on **security hardening** (sandboxing, permission hooks, safer defaults) and **Windows/terminal UX fixes** (Ctrl+C handling, text selection, signed builds). Multiple long-standing pain points are seeing active PR work, suggesting a quality-focused release cycle ahead.

---

## 2. Releases

**No releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#906](https://github.com/anomalyco/opencode/issues/906) | Paste-to-attach images in OpenTUI | Clipboard image pasting is standard UX in modern AI tools; drag-and-drop only is friction-heavy for visual workflows | 31 comments, 18 👍 — high engagement, partially addressed by [#1429](https://github.com/anomalyco/opencode/issues/1429) |
| [#2999](https://github.com/anomalyco/opencode/issues/2999) | Disable Ctrl+C on Windows | Critical Windows UX blocker — Ctrl+C universally means "copy", not "quit app"; makes OpenCode nearly unusable in standard terminals | 28 comments, 18 👍; active PR [#19468](https://github.com/anomalyco/opencode/pull/19468) targets root cause |
| [#5076](https://github.com/anomalyco/opencode/issues/5076) | Safer default permissions | Security-conscious users alarmed by allow-by-default file edits and command execution; enterprise adoption blocker | 49 👍 (highest in dataset), 9 comments; philosophical debate on convenience vs. safety |
| [#7957](https://github.com/anomalyco/opencode/issues/7957) | Ctrl+C shouldn't exit (UX) | Duplicate theme to #2999 but framed as universal UX issue across platforms; signals widespread frustration | 20 👍, 10 comments |
| [#12308](https://github.com/anomalyco/opencode/issues/12308) | Entra Auth broken for MCP | Enterprise Azure/Entra integration failing due to malformed resource parameter — blocks corporate MCP adoption | 14 comments, no 👍 yet but critical for B2B |
| [#11157](https://github.com/anomalyco/opencode/issues/11157) | Compaction fails with Copilot Enterprise | GitHub Copilot Enterprise + Claude models broken due to API rejecting `role: "tool"` in summarization | 11 comments, 6 👍; affects paying enterprise users |
| [#15212](https://github.com/anomalyco/opencode/issues/15212) | Cannot select text in VS Code terminal | Mouse capture stuck in prompt field — breaks fundamental terminal interaction pattern | 8 comments, 3 👍; VS Code is dominant dev environment |
| [#18088](https://github.com/anomalyco/opencode/issues/18088) | CJK text hidden on pop-up | Internationalization bug affecting ~25% of global developer population; rendering regression | 8 comments, 1 👍; accessibility concern |
| [#16281](https://github.com/anomalyco/opencode/issues/16281) | ChatGPT Pro browser login fails (macOS) | OAuth token exchange failing with 403 — blocks OpenAI authentication path for paid users | 8 comments, 3 👍 |
| [#16861](https://github.com/anomalyco/opencode/issues/16861) | Copilot CLI has higher context than extension | OpenCode using stale/static model limits instead of live `/models` endpoint; underutilizing available context | 7 comments, 5 👍; performance optimization opportunity |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#15201](https://github.com/anomalyco/opencode/pull/15201) | Sign Windows CLI and desktop builds | Azure Trusted Signing + Tauri code signing for Windows artifacts | Unblocks enterprise Windows deployment (security policy compliance) |
| [#19472](https://github.com/anomalyco/opencode/pull/19472) | Bash commands sandboxing | Security hardening PR adding command sandboxing infrastructure | Directly addresses #5076 security concerns; marked `needs:compliance` |
| [#19470](https://github.com/anomalyco/opencode/pull/19470) | Wire `permission.ask` plugin hook | Implements declared but unimplemented hook for permission interception | Enables plugin ecosystem to customize permission flows |
| [#19468](https://github.com/anomalyco/opencode/pull/19468) | Fix garbled text from fragmented mouse sequences | Patches OpenTUI `StdinParser` for SGR mouse escape sequences in web terminals | Fixes #2999/#7957 Ctrl+C and text selection issues |
| [#19458](https://github.com/anomalyco/opencode/pull/19458) | Refactor file service to `AppFileSystem` | Replaces raw filesystem calls with structured service layer | Code quality + testability; foundation for permission enforcement |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | Mobile touch optimization | Touch-friendly UI adaptations while preserving desktop experience | Expands addressable market to tablet/mobile development |
| [#19465](https://github.com/anomalyco/opencode/pull/19465) | Add `opencode.local.jsonc` for local overrides | Git-ignored local config file for personal settings without modifying shared config | Team/enterprise workflow improvement |
| [#19464](https://github.com/anomalyco/opencode/pull/19464) | Join system messages into single message | Consolidates multiple system messages for LLM provider compatibility | Fixes provider-specific rendering issues |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) | Add Open WebUI provider | New provider integration for Open WebUI ecosystem | Expands local/self-hosted model options |
| [#19350](https://github.com/anomalyco/opencode/pull/19350) | GitHub App token flow for Copilot | Fixes `model_not_supported` errors for preview models like `claude-opus-4.6-fast` | Restores access to cutting-edge Copilot models |

---

## 5. Feature Request Trends

1. **Security-First Defaults**: Overwhelming demand for opt-in rather than opt-out permissions (#5076, #2632, #13827). Users want granular control with safe baselines.

2. **Clipboard Image Integration**: Paste-to-attach images is a recurring theme (#906, #1429) — visual/Excalidraw workflows are standard in AI-assisted development.

3. **Modular Configuration**: `config.d/` directory support (#9062) and local overrides (#19465) reflect need for team + personal config separation in enterprise settings.

4. **MCP Robustness**: Timeout handling (#13672), authentication (#12308), and lazy-loading improvements dominate MCP-related requests — the ecosystem is maturing but rough edges remain.

5. **Internationalization**: CJK rendering (#18088) and global language settings (#9610) indicate growing non-English user base requiring first-class support.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence | Severity |
|-----------|-----------|----------|----------|
| **Ctrl+C exits app (Windows)** | Very High | #2999, #7957, #6189, PR #19468 | 🔴 Critical — daily workflow breaker |
| **Unsafe default permissions** | High | #5076 (49 👍), #2632, #13827 | 🔴 Security blocker for enterprise |
| **Text selection broken in terminals** | High | #15212, #15201 context | 🟡 Major UX regression |
| **MCP server reliability** | Medium-High | #13672, #12308, #19326 | 🟡 Ecosystem maturity gap |
| **Authentication fragility** | Medium | #16281, #11157, #16861 | 🟡 Paid provider integrations |
| **Configuration monolith** | Medium | #9062, #19465 | 🟢 Quality-of-life |

**Emerging concern**: Scoop package manager lag (#18255) suggests release pipeline gaps for Windows package managers, potentially affecting update velocity perception.

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues, 20 PRs updated 2026-03-27*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*