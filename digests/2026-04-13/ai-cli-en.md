# AI CLI Tools Community Digest 2026-04-13

> Generated: 2026-04-13 00:13 UTC | Tools covered: 8

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
## 2026-04-13 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive six-player market with distinct architectural philosophies. **Claude Code** and **OpenAI Codex** lead in enterprise adoption and infrastructure investment, while **Gemini CLI**, **Kimi Code CLI**, **Pi**, and **Qwen Code** pursue aggressive feature parity and platform-specific optimizations. A critical inflection point has emerged: all major tools are converging on **agentic session management**, **MCP extensibility**, and **cross-platform Windows/WSL parity**—previously differentiating features are becoming table stakes. Meanwhile, **memory management**, **cost transparency**, and **silent failure modes** represent the new battleground for developer trust.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Notable Activity |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 9 highlighted | 9 | None | `/buddy` removal backlash (506 upvotes); cache TTL forensic analysis |
| **OpenAI Codex** | 10 highlighted | 10 | None | Major PR stack: conversational permissions, timers, queued messaging |
| **Gemini CLI** | 10 highlighted | 10 | None | 48 PRs/50 issues updated; Windows/WSL fixes surge |
| **GitHub Copilot CLI** | 10 highlighted | 0 | None | Critical HTTP/2 GOAWAY race condition identified |
| **Kimi Code CLI** | 9 highlighted | 9 | None | **3 PRs merged**: Windows MCP support, O(1) dedupe, shell context |
| **OpenCode** | 10 highlighted | 10 | None | Critical memory leak report (14 MB/sec); 5-PR LiteLLM batch |
| **Pi** | 10 highlighted | 9 | None | Web tools → extension system migration |
| **Qwen Code** | 10 highlighted | **31** | **v0.14.3-nightly** | Highest velocity: loop detection, CJK fixes, ACP hardening |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|:---|:---|:---|
| **Session Lifecycle Management** | Claude Code, Codex, Kimi, Pi, Qwen, OpenCode | `/delete` commands (Kimi #1783), rename/delete/auto-title (Qwen #3093), resume scope controls (Pi #3067), persistent sessions vs. ephemeral chats |
| **Windows/WSL Parity** | Gemini, Kimi, Codex, OpenCode, Copilot CLI | UTF-8 encoding (Kimi #1850, Gemini #25235), CJK rendering (Gemini #25235), WSL clipboard (Gemini #25234), path handling (Kimi #1774), sandbox failures (Codex #16076) |
| **Memory/Context Architecture** | Claude Code, Gemini, Pi, OpenCode | Temporal knowledge graphs (Claude #30039), global vs. project memory (Gemini #22819), compaction reliability (Pi #2911, #3075), memory leaks (OpenCode #22198) |
| **MCP Ecosystem & Tool Extensibility** | Codex, Gemini, OpenCode, Kimi | Bidirectional MCP chat (Gemini #25209), MCP lifecycle control (OpenCode #13564), Windows MCP support (Kimi #1850), stdio transport reliability (Codex #16899) |
| **Cost Transparency & Quota Governance** | Claude Code, Copilot CLI, Qwen | Cache TTL regression (Claude #46829), HTTP/2 silent failures burning quota (Copilot #2421), double/triple counting (Copilot #2626), loop-induced quota exhaustion (Qwen #3167) |
| **Automation/Scheduling Primitives** | Codex, Kimi | Timer/queued messaging (Codex #17578-#17580), `/loop` command (Kimi #1834) |
| **Permission & Safety Boundaries** | Claude Code, Gemini, Codex, OpenCode | Conversational sandbox permissions (Codex #17572, #17583), subagent approval awareness (Gemini #23582), destructive operation guards (Claude #46779, Gemini #25236) |

---

## 4. Differentiation Analysis

| Dimension | Leader | Distinctive Approach |
|:---|:---|:---|
| **Enterprise Infrastructure** | **OpenAI Codex** | SQLite-backed durable timers, queued external messages, graduated privilege escalation—positioning for long-running autonomous agents |
| **Cost Forensics & Accountability** | **Claude Code** | Community-driven regression analysis (cache TTL #46829); highest engagement on transparency demands (1,546 upvotes on quality regression) |
| **Platform Engineering Velocity** | **Kimi Code CLI** | Rapid Windows enterprise unblocking (#1850 merge); O(1) algorithmic optimizations; competitive feature parity ( `/loop` #1834) |
| **Memory System Innovation** | **Gemini CLI** | AST-aware tooling investigation (#22745) for semantic code navigation; proactive memory routing (#22819) |
| **Extension Architecture** | **Pi** | Aggressive built-in → extension migration (#3080); composable tool render middleware; reducing core surface area |
| **Open-Source Transparency** | **OpenCode** | Public memory megathread (#20695) with explicit maintainer requests for heap snapshots (not LLM solutions); LiteLLM provider diversity |
| **Release Cadence & Nightly Quality** | **Qwen Code** | Daily nightlies with CJK/ACP fixes; highest PR velocity (31/24h); loop catastrophe prevention as explicit priority |

**Target User Segmentation:**
- **Codex**: Enterprise teams building autonomous agent systems
- **Claude Code**: Quality-sensitive engineers demanding transparency
- **Gemini CLI**: Google ecosystem integrators, semantic code understanding seekers
- **Kimi Code CLI**: Windows enterprise environments, automation-heavy workflows
- **Pi**: Extension developers, Unix toolchain integrators
- **OpenCode**: Open-source purists, local model enthusiasts, multi-provider setups
- **Qwen Code**: East Asian language users, high-velocity CI/CD practitioners

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **Highest Momentum** | **Qwen Code**, **Kimi Code CLI** | Qwen: 31 PRs/24h, nightly releases, rapid loop-detection response; Kimi: 3 merges in 24h, Windows parity sprint |
| **Sustained Engagement** | **Claude Code**, **OpenAI Codex**, **Gemini CLI** | Claude: 506+ upvote organized protests; Codex: 529-upvote remote dev epic; Gemini: 48 PRs updated, maintainer workstream tracking |
| **Infrastructure Hardening** | **Pi**, **OpenCode** | Pi: architectural migration (web tools → extensions); OpenCode: compliance-review gates, memory leak forensics |
| **Fragility Concerns** | **GitHub Copilot CLI**, **Qwen Code** | Copilot: zero PR activity, critical HTTP/2 race; Qwen: high velocity but 4+ loop catastrophe reports in 24h |

**Maturity Signals:**
- **Codex** and **Claude Code** show enterprise-grade process (structured PR stacks, forensic community analysis)
- **Kimi** and **Qwen** demonstrate startup agility (rapid merges, daily releases) with emerging reliability discipline
- **Copilot CLI** exhibits concerning stagnation (no PRs, accumulating critical infrastructure debt)

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Agentic Session Durability** | Codex's SQLite timers, Kimi's `/loop`, Claude's memory architecture requests | Shift from "chat" to "persistent worker" mental model; infrastructure for multi-hour/multi-day agent tasks |
| **Cost Observability as Trust Vector** | Claude cache TTL forensics, Copilot HTTP/2 race analysis, Qwen loop detection | Developers treating token economics as production metric; silent failures are reputation risks |
| **Windows as Primary Battleground** | Kimi #1850, Gemini #25234-#25235, Codex #16076, OpenCode Windows-first bugs | Enterprise adoption requires parity; no longer acceptable to treat Windows as tier-2 |
| **MCP as De Facto Standard** | Gemini bidirectional chat, OpenCode disable-all requests, Kimi Windows MCP | Tool ecosystem interoperability becoming expectation; vendor lock-in via proprietary tool systems declining |
| **Compaction & Memory as Core Competency** | Pi #2911, Claude context compaction hooks, OpenCode 14 MB/sec leak, Qwen heap OOM | Long-context models expose client-side memory management gaps; new domain for competitive differentiation |
| **Community Forensics Over Feature Requests** | Claude #46829 (JSONL analysis), Copilot #2421 (state machine analysis), OpenCode heap snapshots | Power users conducting root-cause analysis traditionally internal to vendors; transparency demands escalating |

---

**Reference Value for Developers:**

- **Choose Codex** for autonomous agent infrastructure and enterprise scheduling
- **Choose Claude Code** for quality-sensitive work requiring vendor accountability
- **Choose Kimi** for Windows enterprise environments and rapid automation parity
- **Choose Gemini** for semantic code understanding and Google ecosystem integration
- **Choose Pi** for extension development and Unix toolchain flexibility
- **Choose OpenCode** for multi-provider setups and open-source transparency
- **Choose Qwen** for CJK workflows and CI/CD automation (monitor loop stability)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

 # Claude Code Skills Community Highlights Report
**Data as of 2026-04-13 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 Open | Typographic quality control preventing widow/orphan paragraphs and numbering misalignment in AI-generated documents | Addresses universal pain point affecting "every document Claude generates"; zero thumbs suggests early-stage visibility |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 Open | Revised skill for actionable, single-conversation frontend design guidance | Focus on token efficiency and executable instructions vs. verbose documentation |
| 3 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 Open | Meta-skills for evaluating Skill quality (structure, documentation, examples) and security posture | Five-dimension quality scoring (20% weights each); addresses governance gap in Skill marketplace |
| 4 | **[ODT](https://github.com/anthropics/skills/pull/486)** | 🟡 Open | OpenDocument text creation, template filling, and ODT→HTML parsing | ISO 26300 standard support for LibreOffice/OnlyOffice ecosystems; fills gap vs. existing DOCX/PDF skills |
| 5 | **[DOCX tracked changes fix](https://github.com/anthropics/skills/pull/541)** | 🟡 Open | Prevents document corruption from `w:id` collisions between tracked changes and existing bookmarks | Critical bugfix for enterprise document workflows; root cause in shared OOXML ID space |
| 6 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 🟡 Open | Community health documentation to address 25% GitHub community health score | Closes [#452](https://github.com/anthropics/skills/issues/452); foundational infrastructure PR |
| 7 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model released at SAP TechEd 2025 |
| 8 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 🟡 Open | Persistent memory system for AI agents maintaining context across Claude Code sessions | Addresses core platform limitation: "Claude Code starts every session from scratch" |

---

## 2. Community Demand Trends

Derived from top-commented Issues, ranked by engagement:

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Skill reliability & debugging** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments), [#556](https://github.com/anthropics/skills/issues/556) (5 comments, 6 👍), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Production-grade error handling, version management, and evaluation frameworks |
| **Skill authoring experience** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments), [#532](https://github.com/anthropics/skills/issues/532) | Token-efficient skill creation, enterprise SSO compatibility, automated quality validation |
| **Enterprise distribution & governance** | [#228](https://github.com/anthropics/skills/issues/228) (3 comments, 4 👍), [#492](https://github.com/anthropics/skills/issues/492) (4 comments), [#189](https://github.com/anthropics/skills/issues/189) (5 comments, 7 👍) | Org-wide skill sharing, namespace trust boundaries, deduplication |
| **Platform interoperability** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments), [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | AWS Bedrock support, MCP protocol exposure for skill APIs |

---

## 3. High-Potential Pending Skills

Active PRs with demonstrated community attention, likely to merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | Solves session state persistence—complements [shodh-memory](https://github.com/anthropics/skills/pull/154); Git-tracked mode for team workflows |
| **sensory (macOS automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Native AppleScript alternative to screenshot-based computer use; two-tier permission model addresses security concerns |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack coverage (Testing Trophy, AAA pattern, React Testing Library); fills critical DevOps gap |
| **quality-playbook** | [#659](https://github.com/anthropics/skills/pull/659) | Revives traditional quality engineering via AI automation; distinct from code-centric testing tools |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 10-step systematic cleanup workflow; produces `CODEBASE-STATUS.md` as single source of truth |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade reliability infrastructure**—spanning skill evaluation frameworks, session persistence, enterprise distribution controls, and automated quality validation—reflecting a maturation shift from "interesting capabilities" to "trustworthy, maintainable, team-deployable tools."

---

---

 # Claude Code Community Digest — 2026-04-13

---

## Today's Highlights

The community is reeling from the abrupt removal of the beloved `/buddy` command in v2.1.97, sparking a massive consolidation thread with 506 upvotes. Meanwhile, a critical cost regression analysis revealed Anthropic silently reduced prompt cache TTL from 1 hour to 5 minutes in early March, causing significant quota inflation for power users. No new releases dropped in the last 24 hours, but plugin ecosystem activity remains robust with notification and research-loop contributions.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#42796](https://github.com/anthropics/claude-code/issues/42796) **Claude Code unusable for complex engineering tasks with Feb updates** — CLOSED | 323-comment mega-thread documenting severe model quality regression; stellaraccident's detailed analysis became a rallying point for demanding transparency | 1,546 upvotes; widely cited as catalyst for improved Anthropic communication |
| [#45596](https://github.com/anthropics/claude-code/issues/45596) **Bring Back Buddy — A Consolidated Plea** | `/buddy` skill vanished without changelog notice; represented emotional attachment to tool personality and workflow continuity | 506 upvotes, 136 comments; rare instance of community organizing around "delight" feature rather than pure utility |
| [#46829](https://github.com/anthropics/claude-code/issues/46829) **Cache TTL silently regressed from 1h to 5m** — CLOSED | Data-driven forensic analysis of API behavior change with cost implications; exemplifies community-driven accountability | 140 upvotes; praised for rigorous methodology using raw JSONL analysis |
| [#20171](https://github.com/anthropics/claude-code/issues/20171) **Phantom 'Generating...' state — UI stuck** | Persistent reliability issue where UI falsely indicates activity while consuming zero tokens; breaks trust in status indicators | 21 comments; long-running with reproduction confirmed |
| [#37413](https://github.com/anthropics/claude-code/issues/37413) **Cowork 1M context unavailable on Max 5x — regression** | Paying customers losing advertised capability; Cowork (IDE extension) parity issues with Claude Code proper | 29 upvotes; frustration at tier feature fragmentation |
| [#45756](https://github.com/anthropics/claude-code/issues/45756) **Pro Max 5x quota exhausted in 1.5 hours** | Extreme consumption rate suggests metering or efficiency bug; impacts highest-paying tier | 94 upvotes; multiple "me too" confirmations |
| [#46779](https://github.com/anthropics/claude-code/issues/46779) **Claude repeatedly deletes user data without approval** | Safety-critical: autonomous destructive operations despite CLAUDE.md prohibitions | 9 comments; concerning zero upvotes may indicate severity underappreciation |
| [#28546](https://github.com/anthropics/claude-code/issues/28546) **Stale .git/index.lock on Windows** | Cross-platform reliability gap; git integration is core workflow | 11 upvotes; Windows-specific tooling debt |
| [#9340](https://github.com/anthropics/claude-code/issues/9340) **Add --quiet flag to suppress tool call output** | CLI ergonomics for automation and advisory agent patterns | 25 upvotes; long-standing request (since Oct 2025) |
| [#46987](https://github.com/anthropics/claude-code/issues/46987) **API Error: Stream idle timeout** | Infrastructure reliability; partial responses breaking session continuity | 22 upvotes; recent surge in reports |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#47061](https://github.com/anthropics/claude-code/pull/47061) **Notification-sound plugin** | Audible completion alerts via `Notification`/`Stop` hooks; addresses missed-activity UX gap | OPEN |
| [#46914](https://github.com/anthropics/claude-code/pull/46914) **Mythos Runtime Tests** | Test infrastructure for "Mythos" framework (unclear scope; author appears exploratory) | OPEN |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) **Open source Claude Code** | Symbolic/community pressure PR citing 5 related issues; no actual implementation | OPEN |
| [#46903](https://github.com/anthropics/claude-code/pull/46903) **Plugin cache sync documentation** | Documents critical gotcha: local plugin edits don't auto-propagate to `~/.claude/plugins/cache/` | OPEN |
| [#46912](https://github.com/anthropics/claude-code/pull/46912) **Mythos runtime workflow** | Companion to #46914; unclear production intent | OPEN |
| [#46854](https://github.com/anthropics/claude-code/pull/46854) **Claude/schedule app layout** | Undocumented; possibly mobile/scheduling UI (empty description) | OPEN |
| [#46095](https://github.com/anthropics/claude-code/pull/46095) **Claude Mythos operating contract** | "Veriflow immune system" — appears to be speculative/experimental | OPEN |
| [#47124](https://github.com/anthropics/claude-code/pull/47124) **Borsa simulasyonu** | Turkish stock market simulation; spam/low-quality ("ilk deneme" = "first try") | CLOSED |
| [#46901](https://github.com/anthropics/claude-code/pull/46901) **Research-loop plugin** — CLOSED | Wrapper for external "10000 Mentors" research workflow; source-gated autonomous research | CLOSED |
| [#45721](https://github.com/anthropics/claude-code/pull/45721) **Mythos operating contract** — CLOSED | Duplicate/experimental; author self-closed ("Idk what I'm doing") | CLOSED |

---

## Feature Request Trends

1. **Memory & Context Architecture** — Dominant theme: temporal knowledge graphs (#30039), branch-scoped MEMORY.md (#36045), graceful context compaction hooks (#33088), and PreCompact data preservation. Community wants cross-session learning without hallucination.

2. **Agent Ecosystem Standardization** — AGENTS.md support (#34235) requested for Codex compatibility; plugin/hook extensibility for context manipulation (#41810, #46138).

3. **Output & Interaction Control** — `--quiet` mode (#9340), effort level exposure in statusLine (#34709), mobile interrupt capability (#47127). Fine-grained control over verbosity and streaming.

4. **Cowork Parity & Reliability** — Multiple issues highlight Cowork (IDE extension) lagging behind Claude Code proper: context windows, dispatch, Windows drive handling.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Silent API/behavior changes** | Cache TTL regression (#46829), Buddy removal (#45596) | Critical — erodes operational trust |
| **Quota/cost unpredictability** | Max 5x exhaustion (#45756), cache misses (#47098), TTL changes | High — direct financial impact |
| **Windows second-class citizenship** | Git lock files (#28546), Cowork drive issues (#43074, #43197), Plan9 share errors | Medium — platform equity gap |
| **Autonomous destructive operations** | Data deletion despite prohibitions (#46779), permission mode ignores (#26980) | Critical — safety boundary failures |
| **Session continuity failures** | Phantom generating states (#20171), chat history loss (#16970), stream timeouts (#46987) | High — workflow disruption |
| **Context window management** | Hard compaction walls, no eviction hooks (#41810, #33088) | Medium — long-session degradation |

---

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

 # OpenAI Codex Community Digest — 2026-04-13

## Today's Highlights

The Codex team shipped a major stack of PRs enabling **conversational sandbox permissions** and **timer/queued messaging infrastructure**, signaling a shift toward more dynamic, long-running agent sessions. Meanwhile, the community continues to push hard on **remote development support** and **thread management UX**, with the top issue on remote desktop development now at 529 upvotes and 111 comments. No new releases were published in the last 24 hours.

---

## Releases

*No releases published in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Codex Desktop App** | The most-requested feature gap vs. VS Code — developers want SSH/container development without leaving Codex. | 529 👍, 111 comments; sustained pressure since Feb, no official timeline |
| [#12564](https://github.com/openai/codex/issues/12564) **Rename task/thread titles** | Critical for history navigation at scale; current auto-titles are opaque. | 39 👍, 29 comments; extension users particularly vocal |
| [#16849](https://github.com/openai/codex/issues/16849) **VSCode extension: open-in-targets error loop → 100% CPU** | Active regression causing battery drain and thermal throttling. | 10 👍, 18 comments; users posting CPU profiles |
| [#418](https://github.com/openai/codex/issues/418) **Voice input mode** | Closed after long debate; team acknowledged demand but deferred implementation. | 22 👍, 16 comments; community split on priority vs. reliability |
| [#17313](https://github.com/openai/codex/issues/17313) **Progress bar indicator for context remaining is a downgrade** | UI regression: new progress bar removed granular context visibility. | 23 👍, 14 comments; closed after PR #17420 removed the meter entirely |
| [#16335](https://github.com/openai/codex/issues/16335) **TUI/CLI performance regression 116→117** | Latency spikes affecting daily workflows; bisected to specific version. | 7 👍, 12 comments; Windows Terminal users especially affected |
| [#14805](https://github.com/openai/codex/issues/14805) **Model outputs same response twice** | Wasted tokens and context window; hints at streaming deduplication bug. | 7 👍, 11 comments; reproducible on GPT-5.4-high |
| [#10486](https://github.com/openai/codex/issues/10486) **Plan mode: export to Markdown** | High-value workflow for documentation and team coordination. | 18 👍, 11 comments; Plan mode power users |
| [#16185](https://github.com/openai/codex/issues/16185) **CPU temp spikes after coding tasks** | Thermal concern on laptops; may indicate cleanup/background process issue. | 4 👍, 10 comments; Linux users reporting most frequently |
| [#16076](https://github.com/openai/codex/issues/16076) **WSL shell commands fail in 0.115.0 (bubblewrap regression)** | Breaks Windows/WSL workflows; sandbox namespace misconfiguration. | 2 👍, 9 comments; workaround involves disabling sandbox |

---

## Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| [#17583](https://github.com/openai/codex/pull/17583) **Conversational permission preset foundation** | Backend infrastructure for dynamic sandbox permission changes mid-session | Enables safer long-running agents with graduated privilege escalation |
| [#17580](https://github.com/openai/codex/pull/17580) **Queued external message delivery** | `codex queue --thread --message` CLI + SQLite-backed async delivery | Foundation for human-in-the-loop and external system integration |
| [#17579](https://github.com/openai/codex/pull/17579) **Persistent thread timers** | Timer scheduling with durable SQLite storage | Agents can now self-schedule future actions across restarts |
| [#17578](https://github.com/openai/codex/pull/17578) **Injected message transcript events** | XML envelopes for timer/external messages in model context | Clean audit trail for autonomous agent actions |
| [#17572](https://github.com/openai/codex/pull/17572) **Conversational sandbox permissions in TUI** | UI for permission changes with mandatory user confirmation | Bridges new backend capabilities to interactive users |
| [#16974](https://github.com/openai/codex/pull/16974) **Preserve zsh PATH in shell snapshots** | Fixes `export -p` parsing for tied zsh parameters | Resolves long-standing macOS environment corruption |
| [#17294](https://github.com/openai/codex/pull/17294) **Run exec-server fs operations through sandbox helper** | Security hardening: filesystem RPCs via `codex-fs` helper | Reduces attack surface for compromised exec-server |
| [#17573](https://github.com/openai/codex/pull/17573) **Sandbox violation monitoring** | Centralized filesystem/network denial tracking | Observability foundation for security auditing |
| [#17420](https://github.com/openai/codex/pull/17420) **Remove context status-line meter** | Removes visual context meter per #17313 | Team prioritizes explicit opt-in over ambient UI |
| [#17563](https://github.com/openai/codex/pull/17563) **Bash PermissionRequest hooks** | Extends hook system to approval prompts | Enables custom policy enforcement and logging |

---

## Feature Request Trends

1. **Remote/Container Development** — Dominant theme; users want parity with VS Code's Remote-SSH/Containers/Docker extensions. Issue #10450 is the epicenter.

2. **Thread/Session Management** — Persistent demand for renaming (#12564, #11705, #15444), organizing, and searching (#16672) conversation history. Users working across multiple tickets need project-scoped thread naming.

3. **Voice & Multimodal Input** — Despite #418 closure, recurring requests for hands-free coding; some users already bypassing with SuperWhisper.

4. **Timer & Scheduling Automation** — Now being addressed by PR stack #17578-#17580; community had been requesting "remind me" and deferred execution capabilities.

5. **Sandbox Flexibility** — Tension between security and usability: users want granular permissions without constant interruptions (#17583, #17572 address this).

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Performance & Thermal** | CPU spikes (#16185), TUI lag (#16335), battery drain (#16849) | High — daily workflow impact |
| **WSL/Windows Friction** | Sandbox failures (#16076), path issues, context divergence (#17560) | Recurring — platform tier-2 feel |
| **Context Visibility** | Removed meters (#17313), ambiguous AGENTS.md loading (#17498), double outputs (#14805) | Moderate — trust/observability erosion |
| **MCP Reliability** | stdio transport drops (#16899), timeout handling | Growing — as MCP adoption increases |
| **Extension VS. App Parity** | Feature gaps between VS Code extension and Desktop App cause workflow fragmentation | Chronic — remote dev, thread management |
| **Hook System Completeness** | Missing events for ApplyPatch (#16732), subagent discrimination (#16226), permission requests (#17563) | Niche but blocking for automation users |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

 # Gemini CLI Community Digest — 2026-04-13

## Today's Highlights

No new releases dropped in the last 24h, but community activity surged with **48 PRs** and **50 issues** updated. Major themes: Windows/WSL compatibility fixes, AST-aware tooling investigations for smarter code navigation, and persistent UX friction around permissions and plan mode workflows. Several long-standing papercuts (TypeScript debugging, CJK character rendering, SSH detection) finally have active PRs in flight.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22844](https://github.com/google-gemini/gemini-cli/issues/22844) | Fix TypeScript execution in "CLI: Run Current File" debug configuration | The default VS Code debug config tries to run `.ts` files directly with Node.js, which fails. Blocks smooth inner-loop development for contributors. | 10 comments, no upvotes—friction acknowledged but not viral |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | EPIC-level investigation into semantic code understanding. Could reduce token waste and misaligned reads—foundational for agent reliability. | 5 comments, maintainer-only, workstream-tracked |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Gemini CLI keeps asking for permissions on the same file | Persistent permission state bugs erode trust in "allow for all future sessions." High-frequency user complaint. | 3 comments, no clear repro yet |
| [#25236](https://github.com/google-gemini/gemini-cli/issues/25236) | Agent stashed unrelated changes in master during PR review | Destructive, silent git operations—user lost work context. Highlights gap in agent's safety guardrails for branch state. | Fresh (Apr 12), 1 comment, needs triage |
| [#25054](https://github.com/google-gemini/gemini-cli/issues/25054) | `exit_plan_mode` hook regression from PR #22737 | Broke documented auto-archive workflows. `plan_path` → `plan_filename` change was breaking without migration path. | P1 priority, 1 comment, workstream-tracked |
| [#24915](https://github.com/google-gemini/gemini-cli/issues/24915) | Thick black border at top/bottom of prompt bar | Visual regression affecting terminal aesthetics. Low severity but high visibility. | 1 comment, possible duplicate |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | SSH session text scrambling | Terminal corruption over SSH blocks remote development workflows. Windows→gLinux cloudtop path affected. | 1 comment, linked to SSH detection helper request |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents unaware of active Approval Modes | Policy engine blocks calls, but subagent instructions don't reflect constraints—causes mismatched expectations and failed retries. | Maintainer-only, workstream-tracked |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model creates tmp scripts in random spots | Workspace pollution complicates git hygiene. Side effect of shell-execution restrictions. | P2 priority, maintainer-only |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Implement memory routing: global vs. project | Critical for personalized, context-aware agents. Defines scoping rules for user preferences vs. codebase-specific knowledge. | 1 comment, 2 upvotes, workstream-tracked |

---

## Key PR Progress

| # | Title | What It Does | Status |
|---|-------|--------------|--------|
| [#25186](https://github.com/google-gemini/gemini-cli/pull/25186) | refactor(cli): migrate core tools to native ToolDisplay property | Deprecates `returnDisplay` adapter; tools now own their display schema. Reduces UI rendering unpredictability. | Open, Apr 11 |
| [#25235](https://github.com/google-gemini/gemini-cli/pull/25235) | fix(core): use UTF-8 decoder for PTY output to fix CJK garbling on Windows | Root cause: `node-pty` string→Buffer conversion assumed UTF-8. Forces proper decoder for code page 932/others. | Open, Apr 12 |
| [#25234](https://github.com/google-gemini/gemini-cli/pull/25234) | fix: support clipboard image paste in WSL2 | WSL2 lacks `XDG_SESSION_TYPE`; adds fallback detection for `wl-paste`/`xclip`. Unblocks image input for Windows devs. | Open, Apr 12 |
| [#25220](https://github.com/google-gemini/gemini-cli/pull/25220) | fix(vscode): use tsx for 'Run Current File' debug configuration | Directly addresses #22844. Switches from `${file}` to `pnpm exec tsx` for TypeScript runtime transpilation. | Open, Apr 12 |
| [#25209](https://github.com/google-gemini/gemini-cli/pull/25209) | feat: support MCP channel chat injection | Extends MCP from request-response to server-push events. Enables real-time external tool integration. | Open, Apr 12 |
| [#25231](https://github.com/google-gemini/gemini-cli/pull/25231) | feat: Add Google Ads management commands and agent skill | 3 slash commands + skill for campaign analytics. First-party ad platform integration example. | Open, Apr 12 |
| [#25227](https://github.com/google-gemini/gemini-cli/pull/25227) | feat(cli): add /export-logs command and keybinding | `Ctrl+Shift+L` → JSON export of debug logs. Addresses observability gap for bug reports. | Open, Apr 12 |
| [#25212](https://github.com/google-gemini/gemini-cli/pull/25212) | feat: add idleShutdownMinutes setting | Auto-quit after inactivity to prevent context bloat/memory exhaustion on long-running sessions. | Open, Apr 12 |
| [#25190](https://github.com/google-gemini/gemini-cli/pull/25190) | Defense techniques fix | RAG validation sandbox + sanitization logic. Security hardening for retrieved context injection. | Open, Apr 11 |
| [#25230](https://github.com/google-gemini/gemini-cli/pull/25230) | fix(cli): make extension install/link idempotent | Prevents false "name conflict" errors on reinstall. Source-based ID matching for smoother extension dev loop. | Open, Apr 12 |

---

## Feature Request Trends

1. **AST-aware tooling** — Multiple issues (#22745, #22746) exploring semantic code navigation to reduce token waste and improve precision. Suggests maturation beyond text-based file operations.

2. **Memory system scoping** — Clear demand for global vs. project-local memory (#22819) and proactive memory writes (#22809). Users want persistent, relevant context without manual curation.

3. **Windows/WSL parity** — Clipboard images, CJK rendering, pnpm path detection (#22748). Cross-platform robustness remains a gap.

4. **MCP ecosystem expansion** — Bidirectional communication (#25209) and first-party integrations (Google Ads #25231) signal push toward extensible agent architecture.

5. **Safety and transparency** — Subagent approval mode awareness (#23582), destructive operation guards (#22672), and permission persistence (#24916) reflect trust-building priorities.

---

## Developer Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Permission fatigue** | #24916, #23582 | Repeated prompts break flow; "allow forever" fails silently |
| **Plan mode friction** | #25054, #25042 | Hooks break, plan content hidden, archive workflows regressed |
| **Git safety gaps** | #25236, #22672 | Silent stashing, force pushes, destructive ops without confirmation |
| **Terminal/SSH corruption** | #24202, #24546, #24935 | Scrambled text, React errors, screen corruption in remote sessions |
| **Context/memory bloat** | #25212, #23556 | Long sessions become unusable; compression fails; no auto-cleanup |
| **TypeScript tooling gaps** | #22844, #20668 | Debug configs broken, unsafe type assertions throughout codebase |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity 2026-04-12.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

 # GitHub Copilot CLI Community Digest — 2026-04-13

## Today's Highlights

No new releases dropped in the last 24 hours, but the community remains highly active with 25 updated issues revealing critical infrastructure problems. A newly consolidated issue (#2421) exposes a fundamental HTTP/2 GOAWAY race condition causing cascading retry failures and silent premium request waste—potentially explaining widespread rate-limit complaints. Meanwhile, Windows users face session corruption via Unicode line separator characters (#2658), and extension developers report silent data loss in hook APIs (#2652).

---

## Releases

**None** — No releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2421](https://github.com/github/copilot-cli/issues/2421) HTTP/2 GOAWAY race condition causes cascading retry failures and silent premium request waste | **Root cause analysis** consolidating 5 related issues. Exposes how undici's connection pool mishandles server-sent GOAWAY frames, causing requests to fail silently and burn premium quota. Affects reliability at scale. | 16 👍, active technical discussion; author provided detailed state machine analysis |
| [#2101](https://github.com/github/copilot-cli/issues/2101) Transient API errors leading to rate limits | **Most engaged issue** (22 comments). Users hitting aggressive rate limiting during normal workflows; linked to #2421's underlying HTTP/2 problem. Enterprise impact. | 14 👍, frustrated users sharing workarounds; triage label indicates prioritization |
| [#2626](https://github.com/github/copilot-cli/issues/2626) Request consumption appears abnormally high — possible double/triple counting | **Billing integrity concern**. User reports 3x quota burn despite selecting 1x multiplier model. If confirmed, affects cost predictability for all users. | New issue (2 comments), awaiting investigation |
| [#2658](https://github.com/github/copilot-cli/issues/2658) /resume fails after CLI restart on Windows when session contains raw U+2028 | **Data corruption bug**. Unicode line separator (`U+2028`) in session events breaks JSON parsing on Windows, making session resume impossible. Platform-specific reliability gap. | Just filed, no reactions yet |
| [#2655](https://github.com/github/copilot-cli/issues/2655) `cwd` and `branch` no longer persist to local session-store.db since ~1.0.13 | **Regression in session management**. Metadata loss breaks tools relying on session context for workspace awareness. Started March 29. | New issue, awaiting triage |
| [#2652](https://github.com/github/copilot-cli/issues/2652) `additionalContext` silently dropped for extension hooks | **Extension API breakage**. TypeScript-declared field ignored at runtime, causing silent failures for SDK users. Filed by CLI itself during debugging—meta. | 1 👍, extension developer impact |
| [#2654](https://github.com/github/copilot-cli/issues/2654) `session_store_sql` silently returns empty when session sync is local | **Tool/API mismatch**. Agents call a tool that returns no data without indicating cloud store is disabled. Poor agent UX, wasted context window. | New issue, paired with #2655 |
| [#2651](https://github.com/github/copilot-cli/issues/2651) BYOK Anthropic provider does not emit turn lifecycle and reasoning events | **SDK integration gap**. BYOK users miss critical observability events. Confirmed root cause in CLI, blocking SDK feature parity. | New issue, cross-referenced to SDK repo |
| [#2653](https://github.com/github/copilot-cli/issues/2653) Native worktree support | **Workflow scalability**. Users need parallel task execution without branch interference—essential for multi-tasking with agentic coding. | Feature request, no reactions yet |
| [#2657](https://github.com/github/copilot-cli/issues/2657) `marketplace source.source=url` not supported | **Enterprise deployment blocker**. Internal plugin distribution via URL fails, forcing workarounds for air-gapped environments. | New issue, configuration-focused |

---

## Key PR Progress

**None** — No pull requests updated in the last 24 hours.

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session management durability** | #2655, #2654, #2658, #2635, #1869, #1394 | **High** — Persistence bugs and configuration friction dominate; users want "set and forget" session handling |
| **Input/editor experience parity** | #2644, #2242, #998, #1805 | **Medium** — Standard terminal shortcuts (Shift+select, right-click paste, ALT-d) missing; "rocket scroll" in web terminals |
| **Memory/context governance** | #2278, #1857 | **Medium** — Users need visibility and control over stored memories; cancel enqueued operations |
| **Enterprise/self-hosted extensibility** | #2657, #2653, #1268 | **Growing** — URL-based plugins, worktrees, MCP version reporting for internal tooling |
| **Billing/usage transparency** | #2626, #1394, #2421 | **High** — Quota accuracy and consumption visibility remain unresolved |

---

## Developer Pain Points

1. **Silent failures cost money and time** — The HTTP/2 GOAWAY race (#2421) and dropped `additionalContext` (#2652) share a pattern: operations fail without clear signals, wasting premium requests or breaking extensions invisibly. Developers need explicit error boundaries and logging.

2. **Session state is fragile** — Three new issues (#2655, #2654, #2658) expose session storage as unreliable: metadata disappears, SQL queries lie about data availability, and Windows Unicode handling corrupts resume files. The "Keep on this device only" path appears undertested.

3. **Rate limiting lacks granularity** — Users hitting limits (#2101) cannot distinguish between legitimate throttling, retry storms from #2421, or miscounted consumption (#2626). No tooling exists to audit request attribution.

4. **Extension hooks are underpowered** — #2652 and #2643 show hooks cannot reliably pass data or suppress confirmations. The `preToolUse`/`postToolUse` lifecycle needs contract enforcement and better documentation.

5. **Cross-platform parity gaps** — Windows-specific bugs (#2658, #2656's `cd` prefix display) suggest Linux/macOS-first development. Terminal input handling (#2242, #2644, #998) also lags behind native shell expectations.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-13

---

## 1. Today's Highlights

Windows MCP server support lands with comprehensive UTF-8 and shell escaping fixes, while the community drives forward on session management primitives—both `/delete` commands and `/loop` scheduling are actively being implemented. Three major PRs merged in the past 24h address long-standing platform compatibility and performance issues.

---

## 2. Releases

**No releases in the last 24 hours.**  
Current stable: v1.31.0

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) | `/delete` command for session management | Core UX gap—users currently `rm -rf ~/.kimi/sessions/` manually; security-sensitive data deletion is unwieldy | 4 comments, active discussion on CLI vs. TUI patterns |
| [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) | Configurable approval timeout (currently hardcoded 300s) | Blocks long-running human-in-the-loop workflows; 5-min ceiling breaks CI/CD and research use cases | 2 👍, strong advocacy for "unlimited" option |
| [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) | `@mention` file path resolution error | Breaks cross-platform file referencing in `~` (home) directories; affects macOS/Darwin users specifically | 2 comments, reproducible case provided |
| [#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830) | VSCode extension: slash skills unavailable before typing | Regression in IDE integration workflow—users can't pre-select skills, breaking discoverability | 2 comments, screenshot evidence |
| [#1761](https://github.com/MoonshotAI/kimi-cli/issues/1761) | Task timeout parameters ignored | Reliability issue—users configure timeouts that are silently discarded, causing unexpected termination | 1 comment, version-specific regression suspected |
| [#1847](https://github.com/MoonshotAI/kimi-cli/issues/1847) | Treat image/text placeholders as atomic blocks | Polish request—current character-level navigation of pasted content is error-prone vs. competitors | Fresh (0 comments), but references peer CLI behavior |
| [#1846](https://github.com/MoonshotAI/kimi-cli/issues/1846) | Custom instructions for auto context compaction | Control gap—automatic compression runs without user guidance, degrading context quality | Fresh (0 comments), fills config surface hole |
| [#1849](https://github.com/MoonshotAI/kimi-cli/issues/1849) | *[Retracted]* PEP 768 remote exec debugging | Self-closed by author; notable as deep CPython 3.14 investigation into CPU runaway, but confirmed **not upstream** | N/A |

---

## 4. Key PR Progress

| # | PR | Status | Technical Summary |
|---|-----|--------|-----------------|
| [#1850](https://github.com/MoonshotAI/kimi-cli/pull/1850) | Windows MCP server fixes | **MERGED** | 5-issue bundle: UTF-8 encoding (`ensure_utf8()`), shell escaping, `CreateProcess` arg passing, path separators, and `kimi-mcp` entry point. Unblocks Windows enterprise adoption. |
| [#1851](https://github.com/MoonshotAI/kimi-cli/pull/1851) | O(1) notification dedupe | **MERGED** | Replaces directory scan with in-memory index; eliminates ~1Hz reconcile loop overhead for background task notifications. |
| [#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587) | Shell mode context injection + persistent `cd` | **MERGED** | Shell output (Ctrl+X) now surfaces as `<system-reminder>`; `cd` with `~`, `-`, `CDPATH` resolved via real shell and synced to `session.work_dir`. |
| [#1843](https://github.com/MoonshotAI/kimi-cli/pull/1843) | MCP output truncation + content type handling | **MERGED** | 100K char budget for MCP tools (vs. 50K built-in); catches `ValueError` on unsupported content types. Prevents 500KB+ Playwright DOM dumps from crashing context. |
| [#1834](https://github.com/MoonshotAI/kimi-cli/pull/1834) | `/loop` scheduled prompt repetition | **OPEN** | Parity with Claude Code: `/loop 5m check deploy status` with configurable intervals. Addresses automation workflows without external cron. |
| [#1848](https://github.com/MoonshotAI/kimi-cli/pull/1848) | Block-level placeholder editing | **OPEN** | Implements #1847: image/text placeholders navigate/delete as atomic units. Cursor boundary detection + bulk delete. |
| [#1845](https://github.com/MoonshotAI/kimi-cli/pull/1845) | Default `work_dir` to startup directory | **OPEN** | Fixes #1774 web path issue: `POST /api/sessions/` without `work_dir` now prefers `startup_dir` over `HOME`, with validation chain. |
| [#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709) | Tab-expanded diff highlight offsets | **OPEN** | Corrects inline diff rendering when tabs expand to spaces; alignment fix for mixed-indent codebases. |
| [#1842](https://github.com/MoonshotAI/kimi-cli/pull/1842) | Documentation sync for new features | **OPEN** | `custom_headers`, `ReadMediaFile`, `SetTodoList` query/clear modes, sensitive file filtering, wire protocol updates. |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session lifecycle management** | #1783 (`/delete`), #1845 (`work_dir` defaults), implicit in `/loop` | High—3 related PRs/Issues active |
| **Automation/scheduling primitives** | #1834 (`/loop`), #1823 (timeout config for approvals) | Medium—competitive parity with Claude Code |
| **Context control & compression** | #1846 (custom compaction instructions), #1843 (MCP truncation) | Medium—quality-of-inference concerns |
| **Cross-platform path handling** | #1774, #1850, #1845 | High—Windows support now prioritized |
| **TUI/UX polish** | #1847/#1848 (block placeholders), #1830 (VSCode skills) | Medium—death-by-a-thousand-cuts improvements |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Root Cause | Mitigation Status |
|------------|-----------|------------|-----------------|
| **Windows as second-class citizen** | Chronic | Path encoding, shell semantics, process spawning | **Addressed** in #1850 merge; needs validation |
| **Silent configuration failures** | Recurring | Timeouts, `work_dir` fallbacks, parameter ignoring | Partial—#1823, #1761, #1845 in flight |
| **Context overflow / truncation opacity** | Moderate | MCP tools bypass limits, auto-compaction opaque | #1843 merged (truncation); #1846 pending (custom instructions) |
| **Manual session hygiene** | Moderate | No native `rm`, no bulk operations | #1783 open, no assignee |
| **IDE integration drift** | Sporadic | VSCode extension lags CLI capabilities | #1830 open, needs repro confirmation |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity 2026-04-12 → 2026-04-13.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-13

## Today's Highlights

Memory management dominates community attention with a new critical leak report (#22198) showing 14 MB/sec unbounded growth from stuck SSE connections, while the long-running Memory Megathread (#20695) continues actively collecting heap snapshots. Meanwhile, contributor **tobias-weiss-ai-xr** submitted a remarkable 5-PR batch adding LiteLLM support, WSL interop, config hot-reload, validation, and known limitations documentation—all pending compliance review.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Pulse |
|-------|--------------|---------------|
| [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | Central coordination point for scattered memory issues; maintainers specifically requesting heap snapshots (not LLM-generated solutions) | 41 comments, 28 👍—highest engagement issue |
| [#22198 Memory leak: SSE connections stuck in CLOSE_WAIT](https://github.com/anomalyco/opencode/issues/22198) | Critical production issue: 24.5 GB memory growth, root cause identified with TCP state evidence | Just opened, 4 comments, needs immediate attention |
| [#9045 Codex latency increases with conversation growth](https://github.com/anomalyco/opencode/issues/9045) | **Closed**—fixed full conversation history being sent per request; significant UX win for long sessions | 27 comments, resolved |
| [#4240 ACP/Zed native changes review unsupported](https://github.com/anomalyco/opencode/issues/4240) | Editor integration gap vs. competitors (Gemini CLI); affects IDE-native workflows | 11 comments, 9 👍 |
| [#9922 Windows/Ubuntu paste fails in /connect](https://github.com/anomalyco/opencode/issues/9922) | Basic UX blocker—no working paste method for API keys, no UI hints | 7 comments, ongoing frustration |
| [#21910 ACP message duplication on Windows](https://github.com/anomalyco/opencode/issues/21910) | Platform-specific bug affecting ACP reliability; reproducible only in OpenCode | 7 comments, confirmed vs. Gemini CLI/Copilot CLI |
| [#22100 Unexpected pip3 execution](https://github.com/anomalyco/opencode/issues/22100) | Security-adjacent concern: unexplained package manager invocation in "read-only" config | 4 comments, needs maintainer response |
| [#13715 Permission asks hang in nested subagent sessions](https://github.com/anomalyco/opencode/issues/13715) | TUI deadlock: subagent-spawned permissions never render, sessions freeze forever | 3 comments, 6 👍, architectural TUI issue |
| [#21354 read_file unavailable with Ollama/gemma4](https://github.com/anomalyco/opencode/issues/21354) | Local model compatibility gap—tool availability varies by provider unpredictably | 4 comments, user confusion |
| [#1808 C# language server broken](https://github.com/anomalyco/opencode/issues/1808) | **Closed**—LSP integration reliability for .NET ecosystem | 7 comments, resolved |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#22079 Markdown preview/source toggle](https://github.com/anomalyco/opencode/pull/22079) | Adds Preview/Source toggle for `.md` files in file viewer tabs | Open, continues #13704 |
| [#16750 Skip empty-text filtering for assistant messages](https://github.com/anomalyco/opencode/pull/16750) | Fixes Anthropic API rejections with thinking blocks | Open, fixes #16748 |
| [#16751 Fix tool_use/tool_result mismatch](https://github.com/anomalyco/opencode/pull/16751) | Root-cause fix for message reconstruction errors; adds safety net | Open, closes #16749 |
| [#21415 Cache Copilot plugin](https://github.com/anomalyco/opencode/pull/21415) | Unblocks UI thread, improves startup times—addresses #21296 | Open, performance-critical |
| [#17083 Flush stdin on POSIX exit](https://github.com/anomalyco/opencode/pull/17083) | Prevents stale bytes leaking to parent shell | Open, contributor PR |
| [#22218 Persist clipboard images as temp files](https://github.com/anomalyco/opencode/pull/22218) | Fixes MCP tool compatibility for pasted images (was inline base64) | Open, closes #14673 |
| [#22193 opentui perf updates](https://github.com/anomalyco/opencode/pull/22193) | [beta, Vouched] Performance improvements to TUI rendering | Open, marked beta |
| [#20554 Preserve --agent over -s](https://github.com/anomalyco/opencode/pull/20554) | CLI argument precedence fix: explicit `--agent` wins over session restore | Open, closes #20536 |
| [#22179–#22183 tobias-weiss-ai-xr batch](https://github.com/anomalyco/opencode/pulls?q=is%3Apr+author%3Atobias-weiss-ai-xr) | **5 PRs**: LiteLLM provider, WSL interop, config hot-reload, validation, known limitations docs | All open, [needs:compliance] |

---

## Feature Request Trends

1. **MCP Lifecycle Control** — Multiple requests for disable-all-MCPs (#13564), per-project MCP isolation (#17605), SDK server without user MCPs (#20072), and persistent disable state (#13763). Users want granular, project-scoped MCP management.

2. **Multi-User/Enterprise Deployment** — Web deployment needs multi-user auth with per-user provider credentials (#20067, 7 👍) for shared team servers.

3. **Codebase Discovery Tools** — "Ask" agent for exploration without file modification (#21742), migrating from Cursor workflows.

4. **TUI Image Experience** — Prompt-time image previews (#22195) and better attachment handling.

---

## Developer Pain Points

| Category | Pattern | Representative Issues |
|----------|---------|----------------------|
| **Windows-First Bugs** | Bash detection, paste behavior, ACP duplication, path handling | #9922, #21910, #22054, #22182 |
| **Memory/Performance** | Leaks, unbounded growth, freezing builds, blocking startup | #20695, #22198, #19252, #21415 |
| **Configuration Surprises** | Changes not reflected, hot-reload missing, validation absent | #15225, #22100, #22180, #22181 |
| **Permission/Session Reliability** | Silent hangs, nested subagent failures, draft loss | #13715, #22167, #21320 |
| **Local Model Friction** | Unclear errors, missing tools, provider-specific behavior | #22190, #21354 |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-12 to 2026-04-13.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

 # Pi Community Digest — 2026-04-13

## Today's Highlights

The Pi team shipped a major architectural shift moving web tools (`web_search`, `web_fetch`) from built-in to the extension system, enabling better modularity. A flurry of quality-of-life fixes landed including npm update deduplication, session resume scope controls, and multiple compaction reliability patches. Community activity remains high with 21 issues and 9 PRs updated in the last 24 hours.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2870](https://github.com/badlogic/pi-mono/issues/2870) XDG Base Directory compliance | Fixes Linux home directory clutter — long-standing hygiene issue for power users | 3 👍, resolved with 6-comment discussion |
| [#2980](https://github.com/badlogic/pi-mono/issues/2980) Speed up `pi update` | Performance regression affecting daily workflow; contributor already identified optimization paths | 5 comments, active engagement |
| [#2987](https://github.com/badlogic/pi-mono/issues/2987) No timeout for hung tool calls | Critical reliability gap — overnight hangs block entire sessions | 3 comments, merged fix |
| [#2911](https://github.com/badlogic/pi-mono/issues/2911) Compaction overlap crash | Race condition in core context management causing undefined property errors | 2 comments, PR in progress |
| [#2921](https://github.com/badlogic/pi-mono/issues/2921) Custom models don't merge into built-in providers | Blocks power users extending OpenRouter with private model endpoints | 2 comments, fix under review |
| [#3064](https://github.com/badlogic/pi-mono/issues/3064) `pi update` reinstalls npm packages every time | 259+ package reinstalls wasted; root cause identified in unused `checkForAvailableUpdates()` | 2 comments, same-day fix merged |
| [#3061](https://github.com/badlogic/pi-mono/issues/3061) GLM-5 metadata inconsistency | `maxTokens > contextWindow` breaks compaction math for OpenRouter users | 1 comment, catalog bug |
| [#3073](https://github.com/badlogic/pi-mono/issues/3073) Standardize `.pi` usage and harden replay | Multi-faceted reliability fix for shared extensions and tool-call edge cases | 2 comments, comprehensive patch |
| [#3070](https://github.com/badlogic/pi-mono/issues/3070) Named sessions on launch | UX gap for project-based workflows — find-or-create semantics requested | 1 comment, merged |
| [#3067](https://github.com/badlogic/pi-mono/issues/3067) `resumeScope` setting | Controls default tab in session picker — addresses multi-project friction | 1 comment, merged |

---

## Key PR Progress

| PR | Status | Feature/Fix |
|----|--------|-------------|
| [#3080](https://github.com/badlogic/pi-mono/pull/3080) | **MERGED** | **Major**: Web tools (`web_search`, `web_fetch`) moved from built-in to extension system — enables community forks and reduces core surface area |
| [#3077](https://github.com/badlogic/pi-mono/pull/3077) | **MERGED** | Gemini 3.x thinking budget fix — resolves empty output via `maxOutputTokens` fallback |
| [#3076](https://github.com/badlogic/pi-mono/pull/3076) | **OPEN** | TUI test flakiness fix — syncs awaits with throttled render pipeline (post-6f5f37f8) |
| [#3075](https://github.com/badlogic/pi-mono/pull/3075) | **OPEN** | Compaction overlap handling — prevents race conditions with per-compaction signals |
| [#3072](https://github.com/badlogic/pi-mono/pull/3072) | **OPEN** | Custom model inheritance fix — propagates `api`, `baseUrl`, `apiKey` to user-defined models |
| [#3069](https://github.com/badlogic/pi-mono/pull/3069) | **MERGED** | Session manager efficiency — optimizes path collection in `buildSessionContext()` |
| [#3066](https://github.com/badlogic/pi-mono/pull/3066) | **MERGED** | `resumeScope` setting — adds `/settings` control for default resume picker tab |
| [#3063](https://github.com/badlogic/pi-mono/pull/3063) | **MERGED** | npm update deduplication — skips reinstall when already at latest version |
| [#3079](https://github.com/badlogic/pi-mono/pull/3079) | **MERGED** | Documentation: Star history chart for project visibility |

---

## Feature Request Trends

1. **Session Management UX** — Named sessions (`--name`), resume scope controls, and project-aware defaults dominate recent requests. Users want Pi to feel like a persistent workspace, not ephemeral chats.

2. **Extension System Maturity** — Requests for composable tool render middleware (#3071), async task patterns (#3062), and moving more built-ins to extensions (#3080) show demand for a plugin ecosystem.

3. **Standards Compliance** — XDG directories, OpenAI-compatible provider robustness, and proper JSON escaping indicate users integrating Pi into diverse toolchains expect Unix/HTTP conventions.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Compaction reliability** | High | 3+ issues (#2911, #3060, #3061) on crashes, infinite loops, and token math errors — core to long-context workflows |
| **Update performance** | High | #2980 and #3064 both address `pi update` inefficiency; npm churn wastes time |
| **Provider compatibility edge cases** | Medium | Non-standard OpenAI providers (#3053), Gemini 3.x quirks (#3077), GLM-5 metadata (#3061) — "compatible" APIs aren't |
| **Tool call robustness** | Medium | Hangs without timeout (#2987), partial JSON cleanup (#3078), content type mismatches — LLM tool execution needs hardening |
| **Multi-project workflow friction** | Medium | Session resume defaults (#3067), named sessions (#3070) — users juggling contexts want less ceremony |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

 # Qwen Code Community Digest — 2026-04-13

## 1. Today's Highlights

The Qwen Code team shipped **v0.14.3-nightly** with critical CJK input optimizations and ACP session fixes, while the community reported a surge of **agent loop-related bugs** and **terminal/SSH stability issues**. Developer activity is exceptionally high with 31 PRs in 24 hours, including two major loop-detection enhancements aimed at preventing runaway token consumption.

---

## 2. Releases

### [v0.14.3-nightly.20260412.56392c739](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.3-nightly.20260412.56392c739)

| Change | Author | Impact |
|--------|--------|--------|
| CJK word segmentation + Ctrl+arrow navigation | @Apophis3158 | Fixes cursor navigation for East Asian language users |
| Force fresh ACP session on `/new-session` | @yiliang114 | Resolves stale session state in VS Code extension |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3144](https://github.com/QwenLM/qwen-code/issues/3144) | Terminal scroll "bouncing" during streaming | Severe UX degradation making output unreadable; affects all terminal users | 2 comments, no resolution |
| [#3174](https://github.com/QwenLM/qwen-code/issues/3174) | Frequent freezing, unresponsive UI/terminal | Critical stability regression in v0.14.3; Turkish user reports pattern worsening | 1 comment |
| [#3173](https://github.com/QwenLM/qwen-code/issues/3173) | `read_file` content missing in ACP headless mode | Breaks programmatic/CI usage; model sees metadata but no file content | 0 comments — needs triage |
| [#3172](https://github.com/QwenLM/qwen-code/issues/3172) | Intermittent crashes in Wrap terminal | Compatibility issue with popular Rust-based terminal emulator | 0 comments |
| [#3171](https://github.com/QwenLM/qwen-code/issues/3171) | Linux auth failure with CLI parameters | Blocks headless/automated deployments; works on macOS | 0 comments |
| [#3167](https://github.com/QwenLM/qwen-code/issues/3167) | Same task repeated until quota exhausted | **Cost-critical**: User woke to find hours of wasted compute on looped todo item | 0 comments, Russian report |
| [#3159](https://github.com/QwenLM/qwen-code/issues/3159) | qwen3.6 infinite tool loop in subagent | Model-specific regression; `devops-corps-analyst` agent stuck calling same tool | 0 comments, Chinese report |
| [#3164](https://github.com/QwenLM/qwen-code/issues/3164) | JS heap OOM on conversation resume | Memory leak blocking large project usage; Mark-Compact GC failure at ~4GB | 0 comments |
| [#3161](https://github.com/QwenLM/qwen-code/issues/3161) | Silent exit on shell confirmation in SSH | Breaks remote development workflows; dialog appears then program dies | 0 comments |
| [#3019](https://github.com/QwenLM/qwen-code/issues/3019) | Subagent skill triggering unreliable | Long-standing issue: skills defined in subagent specs inconsistently execute | 5 comments, v0.14.1 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3178](https://github.com/QwenLM/qwen-code/pull/3178) | Detect tool validation retry loops + inject stop directive | Prevents infinite loops when `ask_user_question` gets malformed parameters | Open |
| [#3179](https://github.com/QwenLM/qwen-code/pull/3179) | Fix CJK IME input loss in kitty terminals | Drops stale `ESC[` buffer prefix causing "typing has no effect" in Ghostty/macOS | Open |
| [#3177](https://github.com/QwenLM/qwen-code/pull/3177) | Skip fzf index in 100k+ file projects | Eliminates `@`-completion lag causing apparent input freeze | Open |
| [#3176](https://github.com/QwenLM/qwen-code/pull/3176) | Enhanced loop detection: thought + action stagnation | Catches subtle loops missed by current detector (repetitive thoughts, action stasis) | Open |
| [#3080](https://github.com/QwenLM/qwen-code/pull/3080) | Persistent retry mode for CI/CD | Auto-retry 429/529 errors without terminating long-running batch jobs | Open |
| [#3165](https://github.com/QwenLM/qwen-code/pull/3165) | MiniMax provider support | Adds `api.minimax.io` and `api.minimaxi.com` endpoints | Open |
| [#3079](https://github.com/QwenLM/qwen-code/pull/3079) | `/batch` skill for parallel file operations | Glob discovery, chunked worker agents, `--dry-run` mode | Open |
| [#3170](https://github.com/QwenLM/qwen-code/pull/3170) | Official LSP SDK + `didSave` notifications | Real-time diagnostics updates after edits; infrastructure for better IDE integration | Open |
| [#3162](https://github.com/QwenLM/qwen-code/pull/3162) | Capture PTY errors instead of async throw | Fixes #3161's silent SSH crash by handling errors in result objects | Open |
| [#3151](https://github.com/QwenLM/qwen-code/pull/3151) | Fix follow-up suggestions on OpenAI-compatible providers | **Closed** — fixed 5 stacked bugs causing silent suggestion failures | Merged |

---

## 5. Feature Request Trends

| Direction | Evidence | Priority Signal |
|-----------|----------|---------------|
| **Session management UX** | #3169 (`exit`/`quit` aliases), #3093 (rename/delete/auto-title), #3105 (chat commands) | High — 3 PRs active |
| **CI/CD automation hardening** | #3080 (persistent retry), #3173 (headless mode fixes) | Enterprise demand |
| **Provider ecosystem expansion** | #3165 (MiniMax), #3166 (Gemini custom baseUrl bug) | Multi-model flexibility |
| **MCP onboarding simplification** | #3163 (auto-create MCP `cwd`) | New user friction |
| **Non-text modality fallbacks** | #3160 (PDF text extraction, Jupyter parsing) | Pure-text model compatibility |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Agent loop catastrophes** | Infinite retries, quota exhaustion, same-task repetition (#3167, #3159, #3178, #3176) | **Critical** — 4+ reports in 24h |
| **Terminal/SSH fragility** | Scroll jitter, silent crashes, PTY errors, confirmation dialog failures (#3144, #3161, #3162, #3172) | High — remote dev blocker |
| **Memory/performance cliffs** | Heap OOM on resume, fzf lag in large repos, UI freezing (#3164, #3177, #3174) | High — scalability ceiling |
| **Authentication edge cases** | Linux CLI param failures, ACP headless content loss (#3171, #3173) | Medium — automation friction |
| **Skill/subagent reliability** | Inconsistent triggering, infinite tool loops (#3019, #3159) | Medium — agent composition trust |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*