# AI CLI Tools Community Digest 2026-04-22

> Generated: 2026-04-22 00:13 UTC | Tools covered: 8

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

# AI CLI Tools Cross-Platform Analysis — 2026-04-22

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a seven-player market with distinct architectural philosophies: Anthropic's Claude Code leads in subagent sophistication but faces trust erosion from usage limit enforcement; OpenAI's Codex is aggressively restructuring its permission model via a massive Rust migration; Google, GitHub, and Chinese vendors (Moonshot, Alibaba/Qwen) are racing to close feature gaps while battling platform-specific reliability issues. Cross-cutting concerns—Windows parity, MCP lifecycle management, token cost transparency, and model access governance—now dominate community discourse over raw capability demos. The sector is transitioning from "agent novelty" to "production infrastructure," with developer expectations hardening around session stability, predictable pricing, and enterprise-grade access controls.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Cadence | Maintainer Presence |
|:---|:---:|:---:|:---|:---|:---|
| **Claude Code** | 50 | 4 | v2.1.117 | Steady (weekly) | Low — no Anthropic PRs, community docs only |
| **OpenAI Codex** | ~15 tracked | 15+ | 6 alphas (v0.123.0-α.2–.7) | Extreme rapid-fire (same-day iteration) | High — bolinfest driving PermissionProfile migration |
| **Gemini CLI** | ~12 tracked | 10 | v0.39.0-preview.1 | Patch-focused | Moderate — responsive to critical fixes |
| **GitHub Copilot CLI** | ~10 tracked | 2 | v1.0.35-0/1/2 | Rapid patch (3 same-day) | Moderate — feature shipping, limited PR engagement |
| **Kimi Code CLI** | 25 | 13 | None | N/A | High — immediate PR response to #1984 |
| **OpenCode** | ~15 tracked | 12+ | v1.14.20 | Regular patch | Moderate — core contributor kitlangton active |
| **Pi** | ~12 tracked | 10+ | None (v0.68.0 recent) | N/A | High — same-day hotfix closure pattern |
| **Qwen Code** | 38 | 47 | v0.15.0-preview.1 | Preview/alpha | Very high — wenshao, doudouOUC, LaZzyMan core-maintaining |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence | Convergence Pressure |
|:---|:---|:---|:---|
| **Subagent/orchestration depth** | Claude Code, Qwen Code, Kimi, Gemini | Claude v2.1.117 forked subagents; Qwen #2409 "40-45% parity" gap analysis; Kimi OAuth subagent auth (#1983); Gemini subagent recovery (#22323) | Competitive necessity — Claude Code established baseline |
| **MCP lifecycle & reliability** | Claude Code, Codex, Kimi | Codex #18881 (492 orphaned processes); Kimi #1984 (MCP connection leak); Claude MCP server frontmatter support | Protocol adoption outpacing implementation maturity |
| **Windows/WSL first-class support** | Codex, Kimi, Gemini, OpenCode, Pi | Codex #11678 (TUI slowness), #13549 (config leakage); Kimi WinError 17; Gemini #25216 (drive-root crash); OpenCode #23651; Pi dynamic import fix | Majority developer platform; persistent underinvestment |
| **Token/cost visibility & control** | Codex, Claude Code | Codex #14593 (555 comments, "burning tokens"); Claude #16157 (Max tier 429s) | Business model trust erosion at scale |
| **Permission granularity & automation** | Codex, Gemini, Kimi, Claude Code | Codex PermissionProfile migration (15 PRs); Gemini #25720 (shell validation); Kimi approval cancellation (#1979); Claude #44657 (guardrail overreach) | Enterprise adoption blocker |
| **Sticky/persistent environments** | Codex, Gemini | Codex #18745/#18897 (sticky thread env); Gemini `/note` command (#25775) | Workflow continuity for multi-step tasks |
| **Model access transparency** | Copilot, Claude Code, Kimi | Copilot #2873/#2867 (Opus disappearance); Kimi #1925 (K2.5 vs K2.6 forced upgrade); Claude #42796 (quality regression closure) | User agency vs. vendor control tension |
| **Headless/automation mode** | OpenCode, Codex, Kimi | OpenCode #17516 (`run` hangs); Codex #2882 (MCP sampling blocked in `-p`); Kimi #1964 (remote control) | CI/CD and scripting use cases |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Core Architecture** | Node.js, TUI-first | Rust rewrite (in-progress) | TypeScript, heavy scanning | TypeScript, VS Code-aligned | TypeScript, hook-extensible | TypeScript/Bun, plugin SDK | TypeScript, extension-native | TypeScript, ACP-integrated |
| **Target User** | Enterprise teams, Max subscribers | Security-conscious orgs, Rust ecosystem | Google Cloud developers, Gemini API users | GitHub-centric developers, Copilot subscribers | Chinese market, hook integrators | Plugin developers, multi-provider users | Extension builders, local model users | Alibaba Cloud ecosystem, Chinese enterprises |
| **Differentiating Feature** | Subagent maturity, MCP integration | PermissionProfile sandboxing, AWS SigV4 | Deep Google service integration, AST-aware roadmap | GitHub native hooks, `continueOnAutoMode` | RalphFlow anti-loop architecture, rtk proxy | Plugin SDK v2 dual-client, Effect Schema | `registerMentionProvider`, model switching mid-run | ACP enterprise hooks, Python SDK, GLM search |
| **Key Weakness** | Usage limit trust erosion, model quality perception | Token cost opacity, Windows friction | Performance (full scans), macOS PTY exhaustion | Model availability chaos, performance at scale | Windows/WSL gaps, auth fragility | TUI stability, headless reliability | Provider regression velocity, settings portability | Auth token expiration cluster, subagent gap |
| **Openness Model** | Closed source, limited extensibility | Open source (Rust), active refactor | Open source, Google-governed | Proprietary (GitHub-owned) | Open source, Moonshot-governed | Open source, community-driven | Open source, badlogic solo-maintained | Open source, Alibaba-governed |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **🔥 Highest velocity** | Qwen Code, OpenAI Codex, Kimi Code CLI | Qwen: 47 PRs/38 issues, core maintainers shipping daily; Codex: 6 alphas + 15 PRs in 24h, systematic PermissionProfile migration; Kimi: immediate PR response to critical issues, RalphFlow architectural contribution |
| **📈 Active growth** | Gemini CLI, OpenCode, Pi | Gemini: cross-platform PR focus (Windows shell, async boot); OpenCode: SDK v2 proposal, Effect Schema migration; Pi: same-day hotfix pattern, extension API expansion |
| **⚖️ Mature but strained** | Claude Code, GitHub Copilot CLI | Claude: high issue volume (1,452-comment #16157) with low maintainer PR engagement; Copilot: rapid patch releases but model availability chaos eroding trust |
| **Maturity signals** | | Qwen Code's Python SDK (#3494) and ACP hooks indicate enterprise readiness; Codex's Rust migration signals long-term architectural investment; Claude Code's persistent issues without resolution suggest organizational scaling challenges |

**Community health paradox**: Claude Code has the highest *absolute* engagement (1,452 comments on single issue) but lowest *resolution velocity*; Qwen Code and Kimi demonstrate healthier maintainer-to-reporter ratios.

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **"Infrastructure over demo" mindset** | Cost control (#14593, #16157), session reliability (#51764, #1984), cache efficiency dominating discourse | Developers evaluating tools on TCO and uptime, not capability videos |
| **Permission model as competitive moat** | Codex's 15-PR PermissionProfile migration; Gemini's shell validation (#25720); Claude's guardrail backlash (#44657) | Security architecture becoming primary enterprise differentiator |
| **Model access as subscription value flashpoint** | Copilot Opus disappearance (#2873); Kimi forced K2.6 upgrade (#1925); Claude quality regression closure (#42796) | Vendor-model relationships are opaque, creating user hostility |
| **MCP as emerging standard with implementation debt** | Leaks across all tools (Codex #18881, Kimi #1984), Claude's frontmatter support | Protocol success outpacing engineering quality; reliability tools opportunity |
| **Windows/WSL as persistent market gap** | Every non-Microsoft tool shows Windows-specific issues; Codex #11678, Kimi #1969, Gemini #25216 | First tool to achieve genuine Windows parity gains significant adoption |
| **Chinese ecosystem parallel development** | Qwen's ACP, Kimi's hooks, GLM search integration (#3502) | Domestic cloud integration (Alibaba, ByteDance, Zhipu) becoming mandatory for China market |
| **AST-aware/semantic tooling next wave** | Gemini #22745/22746, Qwen's @-picker worker_threads (#3455) | Line-based heuristics reaching limits; precision tooling reduces token waste |

---

*Analysis compiled from 8 community digests covering 200+ issues, 120+ PRs, and 10 releases in the 24-hour window ending 2026-04-22.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-22 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; "affects every document Claude generates" |
| 2 | **odt** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML conversion | Enterprise open-source document workflows |
| 3 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Skill quality (structure, docs, examples) and security posture | Marketplace governance; 5-dimension quality rubric |
| 4 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity/actionability—ensures instructions are executable in single conversation | Skill design philosophy; token efficiency |
| 5 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full-stack testing guidance: Testing Trophy, AAA pattern, React Testing Library, MSW, Playwright | Modern test pyramid coverage |
| 6 | **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via AppleScript (`osascript`)—tiered permission system | Alternative to screenshot-based computer use |
| 7 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration |
| 8 | **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | 🟡 Open | AI image/video generation via Masonry CLI (Imagen 3.0, Veo 3.1) | Multimodal content creation |

> **Note:** All top PRs show `Comments: undefined` in metadata, suggesting comment counts may be suppressed or the sorting metric reflects implicit attention (reactions, references, or review activity). No merged Skills appear in the top 20 by this ranking.

---

## 2. Community Demand Trends

Derived from highest-comment Issues, ranked by engagement:

| Trend | Issue | Comments | 👍 | Demand Signal |
|:---|:---|:---:|:---:|:---|
| **Skill sharing & collaboration** | [#228](https://github.com/anthropics/skills/issues/228) — Org-wide skill sharing | 9 | 5 | Enterprise teams need shared skill libraries, not manual file passing |
| **Skill reliability & debugging** | [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 0% trigger rate | 6 | 6 | Evaluation tooling is broken; skills fail silently in production |
| **Trust & security boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — Namespace impersonation risk | 4 | 2 | Community skills masquerading as official Anthropic skills |
| **Skill quality standards** | [#202](https://github.com/anthropics/skills/issues/202) — skill-creator best practices | 8 | 1 | Meta-level: the skill that creates skills needs redesign |
| **Platform interoperability** | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock support | 4 | 0 | Skills locked to Anthropic API; multi-cloud deployment needed |
| **MCP standardization** | [#16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCPs | 4 | 0 | Skills should be protocol-compatible, not proprietary |

**Emerging themes:** Enterprise governance (sharing, security, audit), evaluation/measurement rigor, and cross-platform portability.

---

## 3. High-Potential Pending Skills

Active, well-defined PRs likely to merge with maintainer attention:

| Skill | PR | Author | Why It Stands Out |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | [PGTBoos](https://github.com/PGTBoos) | Addresses universal pain point; zero-config quality improvement for all document output |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | [GitHubNewbie0](https://github.com/GitHubNewbie0) | Fills open-standard gap; enterprise procurement compliance |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | [4444J99](https://github.com/4444J99) | Comprehensive scope; fills critical gap in code quality skills |
| **hads-convert** | [#622](https://github.com/anthropics/skills/pull/622) | [catcam](https://github.com/catcam) | Model-agnostic document standard; "one-time token cost, future AI reads free" |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | [varun29ankuS](https://github.com/varun29ankuS) | Persistent context across conversations—addresses core LLM limitation |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | [p19dixon](https://github.com/p19dixon) | 10-step systematic cleanup; produces `CODEBASE-STATUS.md` artifact |

**Quality-of-life fixes cluster:** [Lubrsy706](https://github.com/Lubrsy706) contributed three precise bugfixes ([#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)) for PDF case-sensitivity, YAML parsing, and DOCX corruption—indicating production readiness gaps in existing skills.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade reliability infrastructure*—not more skills, but better mechanisms to share, evaluate, secure, and trust the skills already being built.**

---

*Report methodology: PRs ranked by implicit attention (comment activity); Issues ranked by explicit engagement (comments + reactions). All links verified against `github.com/anthropics/skills`.*

---

# Claude Code Community Digest — 2026-04-22

---

## 1. Today's Highlights

Anthropic shipped **v2.1.117** with expanded subagent capabilities and MCP server support for main-thread agent sessions, while the community continues to grapple with persistent usage limit enforcement issues and model degradation concerns. The most trafficked issue (#16157) has now accumulated **1,452 comments** as Max subscribers report hitting artificial caps, and a high-profile model quality complaint (#42796) was closed after 565 comments without clear resolution.

---

## 2. Releases

### [v2.1.117](https://github.com/anthropics/claude-code/releases/tag/v2.1.117)
| Change | Impact |
|--------|--------|
| `CLAUDE_CODE_FORK_SUBAGENT=1` enables forked subagents on external builds | Unlocks parallel agent execution for self-hosted/enterprise deployments |
| `mcpServers` frontmatter loaded for main-thread `--agent` sessions | Brings MCP server configuration parity to direct agent invocations |
| `/model` selections now persist across restarts with project-pinned defaults | Reduces friction for teams with standardized model requirements |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **Instant usage limits on Max subscription** — subscribers hitting 429 rate limits despite paid tier | Revenue-critical: undermines $100+/mo pricing trust; 4-month ongoing without fix | 🔥 1,452 comments, 681 👍; daily user reports; "oncall" tagged |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | **Model degradation for complex engineering** post-February updates | CLOSED after massive engagement; perceived quality regression in reasoning depth | 2,048 👍, 565 comments; stellaraccident (Google engineer) authored; closure disputed |
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | **Stream idle timeout** — partial responses, multiple daily occurrences | Breaks reliability for long-context workflows; duplicate of widespread API issue | 108 comments, 97 👍; users collecting correlation data |
| [#3471](https://github.com/anthropics/claude-code/issues/3471) | **Excessive edit file errors** — repeated failed tool calls | Chronic productivity drain; forces manual intervention on routine refactoring | 54 comments, 34 👍; 9-month lifespan; "oncall" tagged |
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | **Windows Desktop orphaned process lock** — relaunch fails | Fundamental lifecycle bug on major platform; requires process kill workaround | 48 comments, 12 👍; "invalid" label contested by reporters |
| [#49322](https://github.com/anthropics/claude-code/issues/49322) | **Opus 4.7 thinking summaries not rendered in VS Code** | New model release (April 16) shipped with broken IDE integration | 18 comments, 17 👍; affects premium model differentiation |
| [#44657](https://github.com/anthropics/claude-code/issues/44657) | **Subagent Write tool blocks `.md` files** with "report"/"summary"/etc. filenames | Arbitrary guardrail breaks legitimate documentation workflows; no override | 4 comments, 8 👍; "no opt-out" explicitly called out |
| [#46834](https://github.com/anthropics/claude-code/issues/46834) | **TUI relayouts duplicate entire transcript** to scrollback | Terminal state corruption; destroys scrollback utility for long sessions | 4 comments, 5 👍; has repro; SIGWINCH trigger identified |
| [#51764](https://github.com/anthropics/claude-code/issues/51764) | **`--continue` cache invalidation persists** on v2.1.116 — 41-99pp hit-rate delta | Reopened closed issue with rigorous methodology; cost impact quantified | 1 comment; TTL-matched control experiment; youngjin39's repro is notable |
| [#51760](https://github.com/anthropics/claude-code/issues/51760) | **Background bash children survive session close**; 4.86 TB output runaway on Windows | Resource exhaustion risk; no output size caps on task files | 1 comment; extreme severity (TB-scale); Windows-specific |

---

## 4. Key PR Progress

| # | PR | Description | Assessment |
|---|-----|-------------|------------|
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **"Add the missing source to claude code"** | Single-line PR with no description; likely spam or test | Low signal; no maintainer engagement |
| [#51452](https://github.com/anthropics/claude-code/pull/51452) | **README.md rewrite** — de-AI'd copy, fixed npm badge | Documentation quality improvement; removes "filler phrases, promotional language" | Community docs contribution; style-focused |
| [#51451](https://github.com/anthropics/claude-code/pull/51451) | **SECURITY.md revision** — HackerOne-only reporting, clear out-of-scope | Security process hardening; reduces noise in GitHub issues | Process improvement; likely maintainer-requested |
| [#51395](https://github.com/anthropics/claude-code/pull/51395) | **"Claude/arrowhead gps logging pe arx"** | Empty description; garbled title; probable spam/malformed | Ignore |

**Note:** Only 4 PRs active in window; none from Anthropic maintainers. Community contributions limited to documentation.

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Theme/UI customization** | [#25366](https://github.com/anthropics/claude-code/issues/25366) (color themes, input highlighting) | 14 comments, 24 👍; readability for long conversations |
| **Hook/event system expansion** | [#51767](https://github.com/anthropics/claude-code/issues/51767) (SessionRenamed hook); prior art in hooks area | Ecosystem integration demand (tmux, external systems) |
| **LaTeX terminal rendering** | [#44479](https://github.com/anthropics/claude-code/issues/44479) | 5 👍; academic/technical user segment |
| **Plan mode model switching** | [#35920](https://github.com/anthropics/claude-code/issues/35920) (CLOSED without implementation) | Cost/quality optimization workflow |

---

## 6. Developer Pain Points

### 🔴 Critical: Usage Limit Enforcement
- **#16157**, **#51757**, **#37944** form a pattern: Max plan limits are **erratically enforced**, displayed, and reset. Users report timezone confusion, incorrect quota math, and 429s on paid tiers. **Business risk** for Anthropic's highest-ARR product.

### 🔴 Critical: Session/Cache Reliability
- **#51764** (resume cache invalidation), **#46834** (scrollback corruption), **#51760** (orphaned processes) indicate **state management fragility** across platforms. The 41-99 percentage point cache miss delta on resume directly impacts API costs.

### 🟡 Model Quality Perception
- **#42796** closure without transparent resolution fuels distrust. February "updates" flagged as degradation; Opus 4.7 launch (**#49689**, **#49322**) has integration gaps.

### 🟡 Platform Parity Gaps
- Windows: **#42776**, **#51756** (`/focus` missing), **#51760** (bash runaway)
- VS Code extension: **#49322** (thinking summaries), **#38006** (terminal spam)
- macOS dominates issue volume but Windows-specific bugs show **underinvestment**.

### 🟡 Guardrail Overreach
- **#44657**: Subagent filename blocking with no escape hatch. Pattern of **unconfigurable safety rules** breaking legitimate workflows.

---

*Digest compiled from 50 issues, 4 PRs, and 1 release in the 24-hour window ending 2026-04-22.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-22

---

## 1. Today's Highlights

The Codex team is shipping aggressively on the Rust CLI with six rapid alpha releases (`v0.123.0-alpha.2` through `.7`) in 24 hours, suggesting a critical fix or feature stabilization cycle. Meanwhile, a massive **PermissionProfile migration** is underway across 15+ PRs from bolinfest, systematically replacing legacy sandbox abstractions with a unified permission model—this will fundamentally reshape how Codex handles security and approvals. On the community front, token consumption anxiety remains the dominant theme with Issue #14593 now at **555 comments and 234 upvotes**, making it the most active thread in Codex history.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| `rust-v0.123.0-alpha.2` through `rust-v0.123.0-alpha.7` | Six rapid alpha iterations in 24h. No detailed changelogs provided in release notes—pattern suggests hotfix cycle or CI-driven build pipeline. No stable release. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Pulse |
|---|-------|--------------|-----------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business tier user reporting extreme token consumption | The definitive thread on Codex cost anxiety; affects pricing trust at scale | 🔥 **555 comments, 234 👍** — most active issue ever; users sharing mitigation strategies, demanding transparency |
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** | Gap vs. VS Code remote-ssh/remote-WSL workflows; blocks enterprise adoption | 580 👍, 148 comments; users pleading for parity with existing dev environments |
| [#11678](https://github.com/openai/codex/issues/11678) | **Typing on CLI since 0.100 is very slow** (Windows TUI regression) | Core UX degradation on Windows; affects daily productivity | 17 comments, low 👍 count but persistent reports; regression tag indicates acknowledged bug |
| [#13549](https://github.com/openai/codex/issues/13549) | **WSL-configured app still references Windows config.toml** | Configuration leakage breaks WSL isolation expectations | 19 👍, 16 comments; Windows/WSL users frustrated by config duality |
| [#14339](https://github.com/openai/codex/issues/14339) | **Clear context before implementing plan** *(closed)* | Feature parity request vs. Copilot/Claude Code's plan-then-implement flow | 22 👍, 13 comments; closed status unclear if implemented or rejected |
| [#18341](https://github.com/openai/codex/issues/18341) | **Blurred overlay on Intel Macs** (macOS 15.0.1) | Rendering bug on specific hardware; affects visual usability | 6 👍, 8 comments; Intel Mac users feeling neglected vs. Apple Silicon |
| [#18755](https://github.com/openai/codex/issues/18755) | **SkyComputerUseClient crashes on macOS 14.x** (built for 15.0) | Backward compatibility broken for Computer Use feature | 15 👍, 8 comments; macOS 14 users blocked from skills functionality |
| [#18463](https://github.com/openai/codex/issues/18463) | **Critical: CPU usage ~290% permanently** | Performance regression making app unusable | 2 👍 but 8 comments; severity label suggests internal priority |
| [#15298](https://github.com/openai/codex/issues/15298) | **`default.rules` ignored for sandbox-escaping commands** | Security policy inconsistency; `execpolicy` returns allow but rules still blocked | 6 👍, 6 comments; power users hitting policy engine edge cases |
| [#18881](https://github.com/openai/codex/issues/18881) | **MCP child processes leak** (492 orphaned over 15h) | Resource exhaustion in long-running daemons; stability concern | Fresh (today), 3 comments; quantified leak makes it actionable |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Significance |
|---|-----|-------------|------------|
| [#18745](https://github.com/openai/codex/pull/18745) | **Add sticky thread environment selections** | Per-thread "sticky" environment (cwd + env vars) that persists across turns | Eliminates repetitive `@` context setup; experimental but foundational for workflow UX |
| [#18416](https://github.com/openai/codex/pull/18416) | **Add turn-scoped environment selections** | Per-turn override of environment before sticky resolution | Granular control without polluting thread state; pairs with #18745 |
| [#18871](https://github.com/openai/codex/pull/18871) | **refactor: add agent identity crate** | Isolated `codex-agent-identity` crate for assertion signing + task registration | Security architecture: clean separation of identity logic; enables auditability |
| [#17820](https://github.com/openai/codex/pull/17820) | **AWS SigV4 auth for OpenAI-compatible providers** | First-class Amazon Bedrock/Mantle support via AWS credential chain | **Enterprise/cloud blocker**; unlocks AWS GovCloud/regulated deployments |
| [#18867](https://github.com/openai/codex/pull/18867) | **sandboxing: materialize cwd-relative permission globs** | Anchors relative deny patterns to request cwd before session storage | Fixes permission re-interpretation bug; security correctness |
| [#18279](https://github.com/openai/codex/pull/18279) | **app-server: accept permission profile overrides** | API accepts `PermissionProfile` for thread/turn/command operations | Core migration milestone; rejects ambiguous legacy+profile requests |
| [#18277](https://github.com/openai/codex/pull/18277) | **core: derive active permission profiles** | Derives `PermissionProfile` from constrained `SandboxPolicy` + network settings | Prevents profile/state drift; single source of truth |
| [#18276](https://github.com/openai/codex/pull/18276) | **exec-server: carry filesystem sandbox profiles** | Preserves `PermissionProfile` alongside derived sandbox inputs | Enables full-disk vs. restricted profile distinction at runtime |
| [#18897](https://github.com/openai/codex/pull/18897) | **Add sticky environment API and thread state** | API + persistence layer for sticky environments; stack base for #18745 | Infrastructure for environment stickiness; test coverage included |
| [#18909](https://github.com/openai/codex/pull/18909) | **Update /statusline and /title snapshots** | TUI snapshot maintenance | Housekeeping; indicates active CLI polish |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Remote/SSH/WSL parity** | #10450 (580 👍), #13549, #16994, #18297 | Codex Desktop must match VS Code's remote development story; file navigation in `@` search needs folder support |
| **Permission granularity & automation control** | #18247, #16695, #15298, #14339 | Users want per-automation sandbox overrides, easier rules config, and plan-then-implement workflows with context control |
| **Visibility of hidden/dot files** | #18299 (5 👍) | `.agents/`, `.codex` config directories invisible in file viewer; power users need access |
| **Azure/Enterprise auth** | #1056 (closed) | Entra/SSO authentication for corporate endpoints; now partially addressed by AWS PR #17820 but Azure still gap |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **Token cost unpredictability** | 🔴 Chronic | Financial/trust erosion | #14593 (555 comments), #17257 (memory leak → cost) |
| **Windows as second-class citizen** | 🔴 High | Daily friction for majority platform | #11678 (TUI slowness), #13549 (WSL config), #18861 (sandbox EPERM), #16994 (automations fail) |
| **macOS version/hardware fragmentation** | 🟡 Moderate | Features broken on older versions | #18341 (Intel Mac rendering), #18755 (macOS 14 crash), #18507 (microphone entitlement) |
| **MCP reliability & resource leaks** | 🟡 Growing | Daemon stability, tool availability | #18881 (process leak), #15508 (tools disappear), #18233 (agent confusion post-upgrade) |
| **Permission system complexity** | 🟡 Active migration pain | Confusion during legacy→profile transition | #15298 (rules ignored), #18242 (invalid sandbox policy), #11267 (Ctrl+C deadlock in /review) |
| **App updater fragility** | 🟢 Niche but severe | Stuck updates, manual intervention | #17413 (macOS updater hangs) |

---

*Digest compiled from github.com/openai/codex activity 2026-04-21/22. For real-time updates, monitor the [OpenAI Codex repository](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-22

## Today's Highlights

Google shipped **v0.39.0-preview.1** as a patch release, addressing nested plan directory duplication and relative path policy bugs. The community is actively pushing cross-platform improvements, with notable PRs for Windows shell interoperability and async boot optimization. Meanwhile, long-running stability issues—particularly PTY exhaustion on macOS and excessive project-wide scanning—continue to generate significant discussion.

---

## Releases

**[v0.39.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/25766)** — Patch release cherry-picking [PR #25138](https://github.com/google-gemini/gemini-cli/pull/25138) to fix nested plan directory duplication and relative path policy enforcement. Resolves scenarios where plan files in nested directories caused path resolution failures and agents failed to respect custom security policies by emitting absolute paths instead of relative ones.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#25672](https://github.com/google-gemini/gemini-cli/issues/25672) | **Excessive project-wide scanning makes simple code patches fail** | Performance regression: even trivial edits trigger full workspace + Go stdlib + cgo + vulnerability scans, destroying iteration speed. | 6 comments, active triage needed |
| [#25583](https://github.com/google-gemini/gemini-cli/issues/25583) | **PTY Master Device Exhaustion (ENXIO) on macOS after prolonged YOLO usage** | System-level failure: weeks of `--approval-mode yolo` exhausts macOS PTY limit (`kern.tty.ptmx_max = 511`), breaking *all* terminal sessions system-wide. | 5 comments, maintainer-flagged |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess impact of AST-aware file reads, search, and mapping** | EPIC for precision tooling: could reduce token waste and misaligned reads by using AST boundaries instead of line-based heuristics. | 5 comments, 1 👍, linked to [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Critical correctness bug: `codebase_investigator` claims success despite hitting turn limits, masking analysis failures. | 3 comments, 2 👍, P1 priority |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Repeated permission prompts on same file** | Trust erosion: "allow for all future sessions" intermittently ignored, breaking flow state. | 3 comments, security-tagged |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution hangs with "Waiting input" after completion** | Reliability issue: simple commands falsely report awaiting input, stalling agent progress. | 2 comments, 3 👍 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model creates tmp scripts in random spots** | Workspace hygiene: script proliferation complicates commit preparation and cleanup. | 2 comments, agent-area |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides** | Configuration system gap: `maxTurns` and other overrides silently discarded despite correct registry initialization. | 2 comments, P2 priority |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | **Failed to open in temporary path `A:\`** | Windows-specific crash: `EISDIR` on `realpath('A:\a')` suggests drive-root handling bug. | 1 comment, core-area |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Implement memory routing: global vs. project** | Foundation for personalization: separates user preferences (`~/.gemini/`) from codebase-specific context (`.gemini/`). | 1 comment, 2 👍 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#25712](https://github.com/google-gemini/gemini-cli/pull/25712) | **Shell tool RC file support + `PAGER=cat` fix** | Adds `shellToolRcFile` setting; prevents `more`/`less` hangs by explicitly setting `PAGER=cat` when no RC file used. Revisits [#5953](https://github.com/google-gemini/gemini-cli/pull/5953). | Open |
| [#25775](https://github.com/google-gemini/gemini-cli/pull/25775) | **`/note` command for workspace notes** | New slash command: `/note <text>` appends timestamped entries to `notes.md`; `/note view` displays them. Lightweight knowledge capture without polluting chat history. | Open |
| [#25758](https://github.com/google-gemini/gemini-cli/pull/25758) | **Async experiments/quota fetching for faster boot** | Eliminates synchronous awaits during `refreshAuth`; moves `experimentsPromise` and `quotaPromise` to async path. Targets consistently high startup latency. | Open |
| [#25426](https://github.com/google-gemini/gemini-cli/pull/25426) | **Revive bundling + 16-core CI speedup** | Artifact-centric CI with `.github/actions/setup-gemini`; shards consume pre-built bundles. Modernizes test infrastructure for parallel execution. | Open |
| [#25769](https://github.com/google-gemini/gemini-cli/pull/25769) | **Windows shell interoperability: `&&`, `||`, `/dev/null`** | Cross-platform command chains for PowerShell 5.1/CMD. Translates Unix-style operators to Windows-native equivalents. | Open |
| [#25770](https://github.com/google-gemini/gemini-cli/pull/25770) | **Deep merge for A2A settings** | Fixes [#25747](https://github.com/google-gemini/gemini-cli/issues/25747): shallow spread was overwriting nested objects (`fileFiltering`, `tools`). Immutable deep merge preserves workspace-level overrides. | Open |
| [#25720](https://github.com/google-gemini/gemini-cli/pull/25720) | **Enhanced shell validation + core tools allowlist** | Recursive policy checking for sub-commands, substitutions, subshells. New `tools.core` setting for high-precision tool allowlisting. | Open |
| [#25765](https://github.com/google-gemini/gemini-cli/pull/25765) | **1:1 part count in tool responses** | Fixes 400 errors from part count mismatches in multimodal tool responses (file/inline data). Strict mapping between tool calls and function responses. | Open |
| [#24270](https://github.com/google-gemini/gemini-cli/pull/24270) | **Experimental `/btw` side inquiry feature** | Ephemeral, non-persistent chat overlay for quick questions without modifying main history or triggering tools. "By the way" workflow. | Open |
| [#25409](https://github.com/google-gemini/gemini-cli/pull/25409) | **Wire up ContextManager and AgentChatHistory** | Implements [#25408](https://github.com/google-gemini/gemini-cli/issues/25408): new context management architecture for agent conversation state. | Open |

---

## Feature Request Trends

1. **AST-aware tooling precision** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) push for semantic code understanding over line-based heuristics to reduce token waste and misaligned reads.

2. **Structured memory and personalization** — [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) and [#22809](https://github.com/google-gemini/gemini-cli/issues/22809) drive toward global vs. project-scoped memory, with proactive agent behavior to capture preferences.

3. **Subagent robustness and observability** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#23582](https://github.com/google-gemini/gemini-cli/issues/23582), [#24037](https://github.com/google-gemini/gemini-cli/issues/24037) converge on better lifecycle management, approval mode awareness, and mid-execution tracker updates.

4. **Cross-platform shell parity** — [#25769](https://github.com/google-gemini/gemini-cli/pull/25769), [#25216](https://github.com/google-gemini/gemini-cli/issues/25216), [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) reflect sustained demand for first-class Windows and SSH session support.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Performance / startup latency** | Full-project scans for trivial edits ([#25672](https://github.com/google-gemini/gemini-cli/issues/25672)), synchronous boot blocking ([#25758](https://github.com/google-gemini/gemini-cli/pull/25758)) | Very high — multiple top issues |
| **Resource exhaustion (macOS)** | PTY depletion in long-running sessions ([#25583](https://github.com/google-gemini/gemini-cli/issues/25583)) | Moderate, severe impact when hit |
| **Permission fatigue** | Repeated prompts despite "allow forever" selection ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)) | Moderate |
| **Shell execution reliability** | Hangs on completed commands ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), Windows operator incompatibility ([#25769](https://github.com/google-gemini/gemini-cli/pull/25769)) | Moderate |
| **Configuration system gaps** | Settings ignored (Browser Agent [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), shallow merge bugs ([#25770](https://github.com/google-gemini/gemini-cli/pull/25770)) | Moderate |
| **Workspace hygiene** | Random temp script placement ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) | Low-moderate |

---

*Digest compiled from google-gemini/gemini-cli public activity. For full details, visit the [repository](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-22

## 1. Today's Highlights

GitHub shipped three rapid-fire releases (v1.0.35-0 through v1.0.35-2) with significant automation improvements: HTTP webhook support for hooks, multi-path grep/glob tools, and a new `continueOnAutoMode` config that automatically falls back to auto model selection on rate limits rather than pausing execution. Meanwhile, the community is actively debating model access restrictions, with multiple reports of Opus models disappearing from Copilot Pro subscriptions and "model not supported" errors proliferating.

---

## 2. Releases

### v1.0.35-2 | v1.0.35-1 | v1.0.35-0
*Released: 2026-04-21*

| Version | Key Changes |
|---------|-------------|
| **v1.0.35-2** | • `continueOnAutoMode` config option: auto-switches to auto model on rate limit instead of pausing execution<br>• Fixed: Auto mode no longer crashes when switching to models lacking configured reasoning effort support<br>• Fixed: Pattern-specific instruction files in `.github/instructions/` now work correctly |
| **v1.0.35-1** | Pre-release build |
| **v1.0.35-0** | • **HTTP hook support**: Hooks can now POST JSON payloads to configured URLs instead of requiring local command execution<br>• **Improved**: `grep` and `glob` tools accept multiple search paths<br>• **Fixed**: Subagent thinking hidden from timeline; custom agent names now visible in status line |

**Impact**: The HTTP hooks feature is particularly significant for CI/CD integrations and remote telemetry, while `continueOnAutoMode` addresses a major workflow disruption for power users hitting rate limits.

---

## 3. Hot Issues

| # | Issue | Status | Comments | Why It Matters |
|---|-------|--------|----------|--------------|
| **[#222](https://github.com/github/copilot-cli/issues/222)** | **ACP (Agent Client Protocol) support** | CLOSED | 25 👍146 | The "LSP for AI agents" standard—critical for IDE/editor ecosystem integration. High engagement reflects strong demand for interoperability. |
| **[#1161](https://github.com/github/copilot-cli/issues/1161)** | **Invalid session ID with Opus 4.5** | CLOSED | 23 👍15 | Blocking bug for macOS/Fish users; author explicitly switched to competitor ([opencode.ai](https://opencode.ai)). Reputation risk. |
| **[#223](https://github.com/github/copilot-cli/issues/223)** | **"Copilot Requests" permission missing for org-owned tokens** | OPEN | 21 👍65 | Enterprise governance gap—orgs need service accounts, not personal PATs. Security/compliance blocker for corporate adoption. |
| **[#1276](https://github.com/github/copilot-cli/issues/1276)** | **Paste images from clipboard into CLI prompts** | OPEN | 10 👍7 | UX gap for visual debugging workflows (screenshots, UI bugs, logs). CLI lags behind GUI tools here. |
| **[#2078](https://github.com/github/copilot-cli/issues/2078)** | **Add `/btw` command** | CLOSED | 7 👍26 | Community wants parity with other CLI tools for quick asides/context switching. |
| **[#2661](https://github.com/github/copilot-cli/issues/2661)** | **Opus 4.5 "model not supported" error** | OPEN | 6 👍0 | Model availability regression—student pack users losing access. Pattern of model entitlement confusion. |
| **[#2625](https://github.com/github/copilot-cli/issues/2625)** | **Poor rendering performance on long conversations** | OPEN | 4 👍3 | Severe degradation (30-45s hangs) forcing conversation resets. Fundamental scalability issue. |
| **[#2873](https://github.com/github/copilot-cli/issues/2873)** | **Copilot Pro lost Opus model access** | OPEN | 4 👍0 | **Subscription value crisis**: User explicitly objects to removal after prior access. "I do not mind the request multiplier, but to stop me using it altogether." |
| **[#334](https://github.com/github/copilot-cli/issues/334)** | **Shell completions** | OPEN | 4 👍11 | Basic CLI hygiene request (zsh/bash/fish). Surprisingly unimplemented for a developer tool. |
| **[#2867](https://github.com/github/copilot-cli/issues/2867)** | **Claude Opus 4.6 (high) "model not supported" after quota reset** | OPEN | 4 👍1 | Quota system UX failure: user followed instructions, waited, then hit worse error. Trust erosion in model access promises. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| **[#2887](https://github.com/github/copilot-cli/pull/2887)** | **Safe cleanup of older direct-install binaries** | OPEN | Addresses accumulated binary bloat from repeated `install.sh` runs; automatic cleanup with opt-out. Improves disk hygiene and reduces PATH confusion. |
| **[#2800](https://github.com/github/copilot-cli/pull/2800)** | **Initial devcontainer configuration** | OPEN | Enables reproducible development environments; lowers contribution barrier for external contributors. |

*Note: Only 2 PRs updated in tracking window.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Model access transparency & control** | #2873, #2867, #2661, #2878, #1190, #2792 | 🔥 Critical |
| Users demand clarity on which models are available when, with what quotas, and why access disappears. Planning/execution model splitting (#2792) emerging as efficiency optimization. | | |
| **Enterprise/Org governance** | #223, #2711, #2753 | ⚠️ Growing |
| Fine-grained permissions, Azure DevOps parity, and plugin skill visibility for org deployments. Corporate readiness gaps. | | |
| **Context & memory management** | #2720, #2885, #2625 | 📈 Rising |
| Speculative context (checkpoint/rewind), non-interactive `/ask` behavior, and rendering performance at scale. Conversation state is becoming a bottleneck. | | |
| **Visual/multimodal input** | #1276 | 📌 Steady |
| Clipboard image pasting for screenshots, diagrams, UI bugs. CLI needs sensory expansion beyond text. | | |
| **Customization & theming** | #2830, #2884, #334 | 📌 Steady |
| Color themes, diff formatting, shell completions—polish requests indicating maturing user base. | | |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Model availability chaos** | 🔴 High | Critical | #2661, #2873, #2867, #2878, #1161 |
| Opus models disappearing, "not supported" errors post-quota reset, student pack entitlement confusion. Users report switching to competitors. *Suggests backend policy changes not communicated to CLI team or users.* | | | |
| **Performance degradation at scale** | 🟡 Medium-High | High | #2625, #2884 |
| Terminal hangs (30-45s) on long conversations; diff rendering noise. Forces destructive workarounds (clearing history). | | | |
| **Non-interactive mode limitations** | 🟡 Medium | Medium | #2882, #2885 |
| MCP sampling blocked in `-p` mode despite `--allow-all`; `/ask` prompts for follow-up in side sessions. Automation use cases underserved. | | | |
| **Plugin/extension reliability** | 🟡 Medium | Medium | #2639, #2753 |
| EPIPE/STREAM_DESTROYED on shutdown; marketplace skills invisible to agent system prompts. Extension ecosystem fragility. | | | |
| **Enterprise identity/permissions gaps** | 🟡 Medium | Medium-High | #223, #2711 |
| Org token permissions, Azure DevOps command parity. Blocking corporate standardization. | | | |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-04-21.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-22

## Today's Highlights

The past 24 hours saw intense community activity with 25 issues and 13 PRs updated, dominated by authentication edge cases, OAuth subagent failures, and terminal stability problems. A critical fix for terminal hangs and MCP connection leaks landed alongside parallel PRs addressing Anthropic API spec violations and hook system extensibility. Windows and WSL2 users continue reporting platform-specific friction, while model preference debates (K2.5 vs K2.6) signal growing user sophistication.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1984](https://github.com/MoonshotAI/kimi-cli/issues/1984) | Terminal hang on exit + MCP connection leak | **Production reliability**: Extended sessions become unrecoverable, requiring force-kill; orphaned MCP connections trigger firewall alerts | Immediate PR response ([#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985)) shows maintainer prioritization |
| [#1983](https://github.com/MoonshotAI/kimi-cli/issues/1983) | Subagents fail with HTTP 401 under OAuth | **Architecture gap**: OAuth auth doesn't propagate to subagents, breaking multi-agent workflows for enterprise users | Zero comments suggests under-reported impact; likely affects advanced users |
| [#1975](https://github.com/MoonshotAI/kimi-cli/issues/1975) | Anthropic provider splits parallel tool_results | **Spec compliance**: Violates Anthropic Messages API, causing provider-side rejections; blocks kosong users | Author provided commit-level repro; PR [#1978](https://github.com/MoonshotAI/kimi-cli/pull/1978) already open |
| [#1974](https://github.com/MoonshotAI/kimi-cli/issues/1974) | Undo command jumps 4 turns back | **UX precision**: Destroys conversation state unexpectedly; "undo" is high-trust operation | No workarounds mentioned; affects WSL2 workflow |
| [#1973](https://github.com/MoonshotAI/kimi-cli/issues/1973) | Phantom "empty message" insertions | **Noise pollution**: System inserts fake user messages during thinking, corrupting context | High-frequency occurrence ("frequently") on macOS + kimi-for-coding |
| [#1969](https://github.com/MoonshotAI/kimi-cli/issues/1969) | WinError 17 on Windows install | **Platform parity**: `os.replace()` atomic write fails on Windows Python; blocks fresh installs | Common pattern; needs cross-platform file operations |
| [#1961](https://github.com/MoonshotAI/kimi-cli/issues/1961) | `/login` errors on Windows for kimi-code | **Onboarding blocker**: New users can't authenticate on primary platform | 3 comments in 24h; likely widespread |
| [#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947) | OAI-compatible copilot failures | **Ecosystem compatibility**: Johnny-zhao's popular copilot integration broken | VS Code context suggests IDE extension overlap |
| [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) | K2.5 vs K2.6 model preference | **Model governance**: Users reject forced K2.6 upgrade; "thinking drowns creativity" | 6 comments, emotional language ("lost all personality"); signals brand risk |
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | Infinite file read loops | **Resource exhaustion**: Custom Anthropic endpoints trigger repetitive file scanning | Persistent since January; 5 comments show ongoing pain |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985) | Fix TTY hang + MCP connection leak | Non-blocking `os.read()` with `os.set_blocking(fd, False)`; proper cleanup in shutdown hooks | Open, pairs with [#1984](https://github.com/MoonshotAI/kimi-cli/issues/1984) |
| [#1978](https://github.com/MoonshotAI/kimi-cli/pull/1978) | Merge parallel tool_results for Anthropic | Spec-compliant merging of consecutive `tool_result` blocks into single user message | Open, resolves [#1975](https://github.com/MoonshotAI/kimi-cli/issues/1975) |
| [#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) | Visual context progress bar | Unicode block progress bar with color coding, matching Claude HUD aesthetic | Open, pure UX enhancement |
| [#1979](https://github.com/MoonshotAI/kimi-cli/pull/1979) | Approval cancellation feedback | Distinguishes timeout vs. explicit rejection in `ApprovalResult` | Open, partial fix for [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) |
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | RalphFlow architecture | Ephemeral context + convergence detection to prevent infinite agent loops | Open, significant architectural contribution |
| [#1963](https://github.com/MoonshotAI/kimi-cli/pull/1963) + [#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935) | `updatedInput` for PreToolUse hooks | Enables transparent command rewriting; powers rtk proxy integration (60-90% token reduction) | Both open, overlapping scope—potential merge conflict |
| [#1957](https://github.com/MoonshotAI/kimi-cli/pull/1957) | Fix `list_sessions` without cwd | Restores ACP protocol compliance for Zed editor integration | Open, editor ecosystem critical path |
| [#1832](https://github.com/MoonshotAI/kimi-cli/pull/1832) | Fix UserPromptSubmit hook empty prompt | Corrects `list[ContentPart]` handling so hooks capture actual user input | Open, 3rd-party extensibility fix |
| [#1784](https://github.com/MoonshotAI/kimi-cli/pull/1784) | AWS Bedrock Mantle platform support | Adds `openai_legacy` provider with dynamic region URLs | Open, enterprise cloud expansion |
| [#1600](https://github.com/MoonshotAI/kimi-cli/pull/1600) | Bright blue user input highlighting | Visual separator + `#007AFF` coloring for message distinction | Open, long-running UI polish |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Model selection granularity** | [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) (K2.5 fallback), implicit in auth issues | High—users want control beyond "latest" |
| **Voice input / hands-free mode** | [#1934](https://github.com/MoonshotAI/kimi-cli/issues/1934) explicit Claude Code parity request | Emerging—accessibility + mobility use cases |
| **Custom theming** | [#1981](https://github.com/MoonshotAI/kimi-cli/issues/1981), [#1982](https://github.com/MoonshotAI/kimi-cli/issues/1982) (closed as dupe) | Low but persistent—terminal aesthetic integration |
| **Remote control / headless operation** | [#1964](https://github.com/MoonshotAI/kimi-cli/issues/1964) ("提效10倍") | Niche but high-impact for automation |
| **Vendor directory indexing** | [#1962](https://github.com/MoonshotAI/kimi-cli/issues/1962) | Go/Rust ecosystem specific—@ symbol expansion |

---

## Developer Pain Points

| Category | Symptoms | Root Indicators |
|----------|----------|---------------|
| **Authentication fragility** | 401 errors in TUN mode ([#1971](https://github.com/MoonshotAI/kimi-cli/issues/1971)), OAuth subagent propagation ([#1983](https://github.com/MoonshotAI/kimi-cli/issues/1983)), payment gate confusion ([#1976](https://github.com/MoonshotAI/kimi-cli/issues/1976)) | Token lifecycle management incomplete across agent boundaries; error messages don't distinguish auth vs. billing |
| **Windows/WSL2 second-class citizenship** | WinError 17 ([#1969](https://github.com/MoonshotAI/kimi-cli/issues/1969)), `/login` platform rejection ([#1961](https://github.com/MoonshotAI/kimi-cli/issues/1961)), tmux rendering ([#1965](https://github.com/MoonshotAI/kimi-cli/issues/1965)), undo over-correction ([#1974](https://github.com/MoonshotAI/kimi-cli/issues/1974)) | Cross-platform testing gaps; POSIX assumptions in file ops and terminal control |
| **Context/undo precision** | 4-turn undo jumps ([#1974](https://github.com/MoonshotAI/kimi-cli/issues/1974)), phantom messages ([#1973](https://github.com/MoonshotAI/kimi-cli/issues/1973)), tool result loss ([#1980](https://github.com/MoonshotAI/kimi-cli/issues/1980)) | State machine around turns vs. tool calls likely has off-by-N logic |
| **MCP/ACP lifecycle** | Connection leaks ([#1984](https://github.com/MoonshotAI/kimi-cli/issues/1984)), session listing failures ([#1957](https://github.com/MoonshotAI/kimi-cli/pull/1957)), JetBrains ACP init ([#1967](https://github.com/MoonshotAI/kimi-cli/issues/1967)) | Protocol implementations lack graceful degradation; editor integrations under-tested |
| **Hook system maturity** | Empty prompts ([#1832](https://github.com/MoonshotAI/kimi-cli/pull/1832)), missing `updatedInput` ([#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935), [#1963](https://github.com/MoonshotAI/kimi-cli/pull/1963)) | Beta hooks API has edge cases in type handling; community actively patching gaps |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-22

## Today's Highlights

OpenCode shipped **v1.14.20** with critical fixes for TUI system theme regression and Windows dynamic imports, while the community actively debated Copilot integration reliability and plugin extensibility gaps. A major SDK v2 proposal is under review to modernize the plugin architecture, and several stacked PRs from core contributor kitlangton signal deep investment in Effect Schema migration for the message pipeline.

---

## Releases

**[v1.14.20](https://github.com/anomalyco/opencode/releases/tag/v1.14.20)** — Three targeted fixes:
- **TUI**: Restored system theme transparency (terminal colors showing through), resolving a regression introduced in v1.14.19 that forced white backgrounds on dark terminals
- **HTTP API**: Added `GET /config` to the experimental API surface
- **Windows/Node**: Fixed local dynamic imports for plugins and tools, addressing a platform-specific loading failure when running under Node.js rather than Bun

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | **Copilot + Opus 4.6 prefill rejection** | Blocks GitHub Copilot users from using Claude Opus 4.6; "assistant message prefill" error breaks conversation flow | 60 comments, 23 👍 — highest engagement item; users sharing session exports and workarounds |
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | **Copy-paste broken in CLI** | Fundamental UX regression; clipboard integration fails silently despite "copied" confirmation | 30 comments, 10 👍; cross-platform reports (macOS/Windows/Linux) |
| [#22408](https://github.com/anomalyco/opencode/issues/22408) | **Kimi K2.6 integration** *(closed)* | Moonshot's new model family requested for code plans; closed likely due to v1.14.x native support | 18 comments, 18 👍; strong demand for Chinese model ecosystem |
| [#14194](https://github.com/anomalyco/opencode/issues/14194) | **SQLite corruption with shared Docker/local config** | Data loss risk for containerized workflows; race condition on concurrent database access | 16 comments, 8 👍; DevOps/CI users particularly affected |
| [#14462](https://github.com/anomalyco/opencode/issues/14462) | **Roslyn LSP as C# alternative** *(closed)* | Microsoft's official C# LSP vs. community `csharp-ls`; quality and maintenance implications | 13 comments, 8 👍; .NET developers pushing for first-party tooling |
| [#17516](https://github.com/anomalyco/opencode/issues/17516) | **`opencode run` hangs after tool completion** | Breaks headless/automation workflows; process zombie requires manual kill | 13 comments, 6 👍; CI/CD blocking issue |
| [#23599](https://github.com/anomalyco/opencode/issues/23599) | **System theme regression** *(closed)* | Terminal color passthrough broken; fixed in v1.14.20 per release notes | 8 comments, 13 👍; rapid fix appreciated |
| [#22100](https://github.com/anomalyco/opencode/issues/22100) | **Unexpected pip3 execution** | Security concern: OpenCode triggering package installs on read-only configs; privilege escalation questions | 6 comments; trust and sandboxing debate |
| [#23658](https://github.com/anomalyco/opencode/issues/23658) | **White terminal background post-1.14.19** | Visual regression forcing dark-theme users to downgrade; related to #23599 | 5 comments, 7 👍; Ghostty/macOS specific |
| [#22292](https://github.com/anomalyco/opencode/issues/22292) | **Managed settings bypass via env vars** | Enterprise governance failure; `OPENCODE_PERMISSION` overrides admin-locked configs | 4 comments; security/compliance critical |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#12042](https://github.com/anomalyco/opencode/pull/12042) | **Plugin SDK v2** | Open | Dual-client architecture (v1/v2) for incremental plugin migration without breaking changes; addresses long-term API evolution |
| [#23766](https://github.com/anomalyco/opencode/pull/23766) | **Disable toolStreaming for Anthropic providers** | Open | Fixes proxy/gateway failures from `eager_input_streaming` beta header injection in `@ai-sdk/anthropic` ≥3.0.58 |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) | **Open WebUI provider** | Open | Self-hosted WebUI integration with OpenCode-native features; builds on prior community attempt |
| [#22612](https://github.com/anomalyco/opencode/pull/22612) | **Copilot chat tool call IDs** | Open | Resolves Kimi/NVIDIA tool call routing through generic OpenAI-compatible runtime |
| [#18201](https://github.com/anomalyco/opencode/pull/18201) | **Session todo API endpoint** | Open | `POST /session/:sessionID/todo` for programmatic TUI sidebar manipulation by plugins |
| [#21343](https://github.com/anomalyco/opencode/pull/21343) | **Scroll snap fix during streaming** | Open | Eliminates jarring auto-scroll when reading history during active LLM response |
| [#23760](https://github.com/anomalyco/opencode/pull/23760) | **Interactive terminal tool with PTY** | Open *(needs:compliance)* | Persistent pseudo-terminal sessions for agent-managed interactive shells; significant capability expansion |
| [#23612](https://github.com/anomalyco/opencode/pull/23612) | **Roslyn LSP sync range + workspace symbol** | Open | Fixes Roslyn server crashes and symbol query failures; directly implements #14462 |
| [#23755](https://github.com/anomalyco/opencode/pull/23755) | **Preserve Anthropic thinking blocks** | Open | Fixes `thinking`/`redacted_thinking` block errors in message transforms |
| [#23763-23765](https://github.com/anomalyco/opencode/pull/23763) | **Effect Schema migration stack** | Open (3 stacked) | Core infrastructure: Cursor, MessageV2 errors, BusEvent/SyncEvent schemas migrating from Zod to Effect Schema |

---

## Feature Request Trends

1. **Model ecosystem expansion**: Kimi K2.6, Mistral reasoning variants, xAI/Grok, Azure OpenAI — demand for broader provider coverage accelerating
2. **Voice/dictation input**: Long-standing gap (#4695, #9264, #11345) now blocked by plugin API limitations; #17425 identifies specific extensibility barriers
3. **Enterprise packaging**: Flatpak (#5651, now closed with fix), corporate npm registry auth (#23434), managed settings enforcement (#22292)
4. **Mobile/touch optimization**: [#18767](https://github.com/anomalyco/opencode/pull/18767) in progress for app usability on tablets/phones
5. **LSP diversity**: Roslyn for C#, broader language server alternatives — quality over community-maintained defaults

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **TUI stability & theming** | #23599, #23658, #23073, #16796 — crashes, visual regressions, interaction failures | High — daily workflow impact |
| **Clipboard/terminal integration** | #13984, #17792 (PATH issues) — basic UX expectations unmet | High — fundamental functionality |
| **Headless/automation reliability** | #17516 (hangs), #14194 (corruption) — `opencode run` and Docker workflows fragile | Medium-High — blocking CI adoption |
| **Security model clarity** | #22100 (pip execution), #22292 (settings bypass), #23704 (schema strictness) — unexpected behavior and trust boundaries | Medium — growing enterprise concern |
| **Plugin API evolution** | #12042 (SDK v2), #17425 (voice blocked), #18201 (todo API) — extensibility lagging behind demand | Medium — ecosystem growth constraint |
| **Windows-specific edge cases** | #20510 (agents not loading), #23651 (symbolic links), #14194 (Docker paths) — second-class platform experience | Medium — parity gap |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-22

## Today's Highlights

Version 0.68.0's rollout dominated activity with multiple provider-breaking regressions—particularly around Anthropic `cache_control` injection and AWS Bedrock regional endpoint hardcoding—spurring an unusually high volume of same-day hotfixes. The community also landed significant extensibility improvements including a new `registerMentionProvider` API and configurable terminal image widths. Meanwhile, local model support advanced with XML-style tool call parsing for Qwen and expanded model coverage for Claude 4.7 and Kimi K2.6.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3175](https://github.com/badlogic/pi-mono/issues/3175) | JSON parse error at position 3875 during edits | Chronic reliability issue blocking core edit loop; user ran repeated sessions to reproduce | 17 comments, no resolution path visible despite `inprogress` label |
| [#3498](https://github.com/badlogic/pi-mono/issues/3498) | `cache_control` in last tool call breaks Firepass/Fireworks | v0.68.0 regression: Anthropic optimization incompatible with Anthropic-like providers | 7 comments, rapid same-day closure suggests hotfix |
| [#3372](https://github.com/badlogic/pi-mono/issues/3372) | Claude subscription compatibility lost | Business-tier users cannot authenticate; impacts paid user retention | 5 comments, user compared Pi favorably to Codex CLI before hitting wall |
| [#3478](https://github.com/badlogic/pi-mono/issues/3478) | 400 error on Kimi multi-image PDF processing | Breaks document ingestion workflows; `pdftoppm`→image pipeline is common pattern | 5 comments, same-day resolution |
| [#3497](https://github.com/badlogic/pi-mono/issues/3497) | Programmatic tool calling for extensions | Unlocks command-palette-style UIs and cross-extension composition; architectural enabler | 5 comments, closed—likely superseded by PR activity |
| [#3503](https://github.com/badlogic/pi-mono/issues/3503) | Parallel tool calls stall on slowest sibling | UX degradation: users see pending spinners despite individual completions | 4 comments, `inprogress` |
| [#3481](https://github.com/badlogic/pi-mono/issues/3481) | Bedrock forces us-east-1 on `us.*` models | v0.68.0 breaks IAM-scoped tokens in other regions; enterprise AWS blocker | 4 comments, 1 👍, same-day closure |
| [#3371](https://github.com/badlogic/pi-mono/issues/3371) | Streaming transcript flicker and history disappearance | Core TUI stability issue; long markdown output corrupts visible state | 4 comments |
| [#3488](https://github.com/badlogic/pi-mono/issues/3488) | v0.68.0 InvalidSignatureException on eu-central-1 Bedrock | Companion to #3481: `baseUrl`→`endpoint` assignment breaks AWS SigV4 regional signing | 3 comments, same-day closure |
| [#3519](https://github.com/badlogic/pi-mono/issues/3519) | Add Fireworks AI as native provider | Reduces gateway dependency; user already has working `models.json` config to contribute | 3 comments, `inprogress` |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3517](https://github.com/badlogic/pi-mono/pull/3517) | `registerMentionProvider` extension API | Enables `@` mentions from multiple sources (git branches, issues, custom completions); closes [#2983](httpshttps://github.com/badlogic/pi-mono/issues/2983) | Merged |
| [#3229](https://github.com/badlogic/pi-mono/pull/3229) | Harden Anthropic tool-call streaming | Moves to raw event iteration with non-stream fallback; matches Claude Code resilience pattern | Merged |
| [#2713](https://github.com/badlogic/pi-mono/pull/2713) | Apply model switches to next queued request | Dynamic model/reasoning resolution instead of freezing for entire run; mid-run switching without abort | Merged |
| [#3516](https://github.com/badlogic/pi-mono/pull/3516) | XML-style tool calls for local models | Parses Qwen-style `<tool_call>` blocks; unblocks `write`/`edit` operations previously stalled | Merged |
| [#3474](https://github.com/badlogic/pi-mono/pull/3474) | TypeBox v1 migration with extension compat | Replaces AJV validation; maintains legacy extension schema imports; fixes [#3112](https://github.com/badlogic/pi-mono/issues/3112) | Open, `inprogress` |
| [#799](https://github.com/badlogic/pi-mono/pull/799) | Ctrl+L clear screen, Ctrl+X model selector | Aligns with Unix terminal conventions; remaps existing shortcut | Merged |
| [#3499](https://github.com/badlogic/pi-mono/pull/3499) | Claude 4.7 full family support | Adds Sonnet 4.7, Haiku 4.7; guards temperature params (rejected by 4.7); Bedrock + Anthropic parity | Merged |
| [#3492](https://github.com/badlogic/pi-mono/pull/3492) | Configurable inline image width (`images.maxWidthCells`) | Addresses 60-column default complaint; live-updates existing session renders | Merged |
| [#3477](https://github.com/badlogic/pi-mono/pull/3477) | Add `kimi-coding` K2.6 model | Normalizes dev entries to built-in `kimi-k2.6` ID; expands Moonshot coverage | Merged |
| [#3512](https://github.com/badlogic/pi-mono/pull/3512) | `streamProxy()` option preservation | Forwards full serializable stream options through proxy transport; fixes capability narrowing | Merged |

---

## Feature Request Trends

1. **Provider ecosystem expansion** — Fireworks AI native support ([#3519](https://github.com/badlogic/pi-mono/issues/3519)), Minimax subscription plan ([#2517](https://github.com/badlogic/pi-mono/issues/2517)), and regional Bedrock flexibility (#3481, #3488) show demand beyond the "Big 3" (OpenAI/Anthropic/AWS).

2. **Extension composability** — Programmatic tool/slash command invocation ([#3497](https://github.com/badlogic/pi-mono/issues/3497)), mention providers ([#3517](https://github.com/badlogic/pi-mono/pull/3517)), and shared AGENTS.md loading ([#3455](https://github.com/badlogic/pi-mono/issues/3455)) indicate maturation from "plugins that add tools" to "plugins that orchestrate plugins."

3. **Terminal UX refinement** — Image width control ([#3492](https://github.com/badlogic/pi-mono/pull/3492), [#3508](https://github.com/badlogic/pi-mono/issues/3508)), scroll position stability ([#3406](https://github.com/badlogic/pi-mono/issues/3406)), TUI jitter during background processes ([#3515](https://github.com/badlogic/pi-mono/issues/3515)), and markdown export quality ([#3484](https://github.com/badlogic/pi-mono/issues/3484)) suggest the TUI is now "good enough" that polish gaps feel painful.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **v0.68.0 provider regressions** | #3498 (cache_control), #3481/#3488 (Bedrock endpoint), #3479 (Qwen3.6 thinking) | **Critical** — same-day multiple breakages suggest insufficient provider-matrix testing |
| **Non-zero exit code misclassification** | [#3509](https://github.com/badlogic/pi-mono/issues/3509): `grep`, `diff`, `test` return 1 on "not found" but Pi reports tool error | High — breaks standard Unix workflow assumptions |
| **Symlink blindness in fuzzy find** | [#3507](https://github.com/badlogic/pi-mono/issues/3507): common monorepo/pnpm structure invisible | Medium — workaround is manual path entry |
| **Settings portability** | [#3514](https://github.com/badlogic/pi-mono/issues/3514) (no `~`/`$HOME` expansion), [#2514](https://github.com/badlogic/pi-mono/issues/2514) (recursive settings lookup) | Medium — friction for dotfiles-syncing and multi-machine users |
| **Streaming/rendering stability** | #3371 (flicker), #3515 (jitter), [#3480](https://github.com/badlogic/pi-mono/issues/3480) (`trim` crash) | Medium — erodes trust in long-running sessions |
| **Branding inconsistency** | [#3476](https://github.com/badlogic/pi-mono/issues/3476): `/quit` hardcodes "Quit pi" despite `APP_NAME` rebrand support | Low but sharp — downstream wrappers notice |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-22

---

## 1. Today's Highlights

The Qwen Code team shipped **v0.15.0-preview.1** with major ACP integration hooks and compact mode UX improvements, while the community continues to grapple with a **widespread 401 authentication token expiration bug** affecting dozens of users across CLI and VS Code extension. Meanwhile, contributor momentum is strong with **47 active PRs** including a new Python SDK, GLM web search provider, and model-facing subagent controls.

---

## 2. Releases

### [v0.15.0-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0-preview.1)
Three notable changes in this preview:
- **ACP hooks support** ([PR #3248](https://github.com/QwenLM/qwen-code/pull/3248)) — Complete hooks integration for Alibaba Cloud Platform (ACP), enabling deeper enterprise customization
- **Compact mode UX optimization** ([PR #3100](https://github.com/QwenLM/qwen-code/pull/3100)) — Keyboard shortcuts, settings sync, and safety improvements for the condensed interface
- **HTTP hooks infrastructure** — Foundation for webhook-style extensibility

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2409](https://github.com/QwenLM/qwen-code/issues/2409) | Subagent system parity with Claude Code | Core competitive gap identified — Qwen Code at ~40-45% feature completeness vs. Claude Code's subagent capabilities | 6 comments, 3 👍; structured roadmap discussion with markdown frontmatter architecture already in place |
| [#3496](https://github.com/QwenLM/qwen-code/issues/3496) | Web search broken after free tier ends; requests domestic API compatibility | Critical for Chinese users post-subsidy; asks for ByteDance/GLM search API parity with Alibaba Bailian | 5 comments; zero upvotes suggests frustration rather than engagement |
| [#2427](https://github.com/QwenLM/qwen-code/issues/2427) | CLI API key setup too cumbersome vs. OpenCode | Emotional, profanity-laced rant signals real UX friction; settings.json editing vs. guided provider setup | 4 comments, 1 👍; partially addressed by [#3398](https://github.com/QwenLM/qwen-code/pull/3398) |
| [#3501](https://github.com/QwenLM/qwen-code/issues/3501) | Persistent 401 auth errors despite successful login | **Emerging critical bug cluster** — same pattern as [#3465](https://github.com/QwenLM/qwen-code/issues/3465), [#3483](https://github.com/QwenLM/qwen-code/issues/3483), [#3497](https://github.com/QwenLM/qwen-code/issues/3497), [#3506](https://github.com/QwenLM/qwen-code/issues/3506) | 2 comments; blocking new users entirely |
| [#2134](https://github.com/QwenLM/qwen-code/issues/2134) | VS Code extension auth methods lag behind CLI | Extension-only OAuth creates enterprise adoption barrier; needs Coding Plan/API key parity | 2 comments, 1 👍; resolved by [#3398](https://github.com/QwenLM/qwen-code/pull/3398) |
| [#3447](https://github.com/QwenLM/qwen-code/issues/3447) | Context window fills without auto-compression, causing hangs | Long-running task reliability issue; `/compress` command non-functional workaround | 2 comments; affects power users on complex codebases |
| [#3464](https://github.com/QwenLM/qwen-code/issues/3464) | Third-party models (GLM-5/5.1) "severely degraded" vs. Qwen 3.6-plus | Model-agnostic claims challenged; prompts questions about system prompt manipulation | 1 comment, 1 👍; vendor neutrality concern |
| [#945](https://github.com/QwenLM/qwen-code/issues/945) | How to disable Qwen3 thinking mode via `chat_template_kwargs` | Documentation gap for advanced model configuration; stale since November 2025 | 2 comments; persistent confusion |
| [#3483](https://github.com/QwenLM/qwen-code/issues/3483) | 401 auth + ACP process SIGTERM crash | Combines auth bug with process management failure; `exit code: null` suggests uncaught signal handling | 2 comments, 1 👍; enterprise deployment blocker |
| [#3274](https://github.com/QwenLM/qwen-code/issues/3274) | `/auth` command missing from CLI | User confusion between documented and actual commands; OpenRouter onboarding broken | 1 comment, 3 👍; high impact per comment ratio |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Significance |
|---|-----|-----------|------------|
| [#3508](https://github.com/QwenLM/qwen-code/pull/3508) | Cap inline shell output with configurable limit | `wenshao` adds line-limiting for noisy commands (`npm install`, builds); preserves context visibility | CLI UX polish from core maintainer |
| [#3455](https://github.com/QwenLM/qwen-code/pull/3455) | Move @-picker to worker_threads | Eliminates UI freeze on 100k-file repos; `callmeYe` solves Ink render loop blocking | Performance critical for monorepo users |
| [#3502](https://github.com/QwenLM/qwen-code/pull/3502) | Add GLM (ZhipuAI) web search provider | `LaZzyMan` directly addresses [#3496](https://github.com/QwenLM/qwen-code/issues/3496); Chinese-language search alternative | Ecosystem expansion, vendor diversification |
| [#3377](https://github.com/QwenLM/qwen-code/pull/3377) | Slash command multi-mode expansion (Phase 2) | 13 built-in commands now work in `non_interactive` and `acp` modes; machine-readable output for automation | v0.15.0 milestone feature |
| [#3499](https://github.com/QwenLM/qwen-code/pull/3499) | Fix null content for reasoning-only responses | `LaZzyMan` fixes Ollama + qwen3.5:9b streaming crash; null → empty string serialization | Local model compatibility |
| [#3505](https://github.com/QwenLM/qwen-code/pull/3505) | Reject truncated subagent write_file calls | `doudouOUC` propagates MAX_TOKENS metadata to prevent partial file writes with misleading errors | Reliability for long outputs |
| [#3494](https://github.com/QwenLM/qwen-code/pull/3494) | Python SDK implementation | `doudouOUC` delivers async/sync `query`, process transport, permissions — closes [#3010](https://github.com/QwenLM/qwen-code/issues/3010) | **Major ecosystem expansion** |
| [#3471](https://github.com/QwenLM/qwen-code/pull/3471) | Model-facing agent control (task_stop, send_message, transcript) | `tanzhenxin` adds real-time subagent oversight — live transcript read, mid-flight messaging, graceful stop | Subagent parity foundation |
| [#3318](https://github.com/QwenLM/qwen-code/pull/3318) | API preconnect for first-call latency | `doudouOUC` fire-and-forget HEAD request saves 100-200ms; smart proxy detection | Performance optimization |
| [#3507](https://github.com/QwenLM/qwen-code/pull/3507) | Sticky todo panel in CLI layouts | `shenyankm` addresses [#2987](https://github.com/QwenLM/qwen-code/issues/2987); persistent task visibility without scrollback | Productivity UX |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Subagent/orchestration depth** | [#2409](https://github.com/QwenLM/qwen-code/issues/2409), [#3471](https://github.com/QwenLM/qwen-code/pull/3471), [#2742](https://github.com/QwenLM/qwen-code/issues/2742) | High — core differentiator vs. Claude Code |
| **Authentication flexibility** | [#2427](https://github.com/QwenLM/qwen-code/issues/2427), [#2134](https://github.com/QwenLM/qwen-code/issues/2134), [#3274](https://github.com/QwenLM/qwen-code/issues/3274), [#3397](https://github.com/QwenLM/qwen-code/issues/3397) | Resolving — Coding Plan/API key replacing OAuth |
| **Session management commands** | [#2487](https://github.com/QwenLM/qwen-code/issues/2487), [#3190](https://github.com/QwenLM/qwen-code/pull/3190), [#3093](https://github.com/QwenLM/qwen-code/pull/3093) | Active — save/rename/delete/resume workflows |
| **Voice/CLI input modalities** | [#3110](https://github.com/QwenLM/qwen-code/issues/3110) | Early — `/voice` command requested |
| **Web search vendor diversity** | [#3496](https://github.com/QwenLM/qwen-code/issues/3496), [#3502](https://github.com/QwenLM/qwen-code/pull/3502) | In progress — GLM added, ByteDance pending |
| **Python SDK/programmatic access** | [#3010](https://github.com/QwenLM/qwen-code/issues/3010), [#3494](https://github.com/QwenLM/qwen-code/pull/3494) | **Just landed** — major ecosystem unlock |
| **Arena/model comparison tools** | [#2559](https://github.com/QwenLM/qwen-code/issues/2559), [#3394](https://github.com/QwenLM/qwen-code/pull/3394) | Completed — summary-level diff merged |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Status |
|------------|-----------|----------|--------|
| **401 auth token expiration** | 6+ issues in 24h | 🔴 Critical | Unresolved cluster — affects [#3501](https://github.com/QwenLM/qwen-code/issues/3501), [#3465](https://github.com/QwenLM/qwen-code/issues/3465), [#3483](https://github.com/QwenLM/qwen-code/issues/3483), [#3497](https://github.com/QwenLM/qwen-code/issues/3497), [#3506](https://github.com/QwenLM/qwen-code/issues/3506), [#3504](https://github.com/QwenLM/qwen-code/issues/3504) |
| **Context window bloat without auto-compression** | [#3447](https://github.com/QwenLM/qwen-code/issues/3447) | 🟡 High | `/compress` broken; manual session restart required |
| **Third-party model quality inconsistency** | [#3464](https://github.com/QwenLM/qwen-code/issues/3464) | 🟡 High | GLM-5 "severely degraded"; questions about system prompt transparency |
| **VS Code extension lagging CLI features** | [#2134](https://github.com/QwenLM/qwen-code/issues/2134), [#2548](https://github.com/QwenLM/qwen-code/pull/2548), [#2592](https://github.com/QwenLM/qwen-code/pull/2592) | 🟡 Medium | Improving — auth fixed, `/skills` and `/export` in progress |
| **Documentation clarity (Chinese telemetry, config)** | [#3461](https://github.com/QwenLM/qwen-code/issues/3461), [#945](https://github.com/QwenLM/qwen-code/issues/945) | 🟢 Medium | Ongoing — specific product names, parameter examples needed |
| **Translation i18n drift** | [#3503](https://github.com/QwenLM/qwen-code/issues/3503) | 🟢 Low | zh-CN/en-US key misalignment; automation requested |

---

*Digest compiled from 38 issues, 47 PRs, and 1 release in the 24-hour period ending 2026-04-22.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*