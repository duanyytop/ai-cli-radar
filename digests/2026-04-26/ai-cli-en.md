# AI CLI Tools Community Digest 2026-04-26

> Generated: 2026-04-26 00:15 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Ecosystem Report — 2026-04-26

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a maturation phase marked by **infrastructure strain and reliability crises** alongside rapid feature expansion. All major tools face critical challenges with streaming stability, billing transparency, and MCP ecosystem security as they scale from experimental to production deployments. The community is coalescing around shared abstractions—MCP servers, permission profiles, session management—while differentiating on agent architecture depth and target developer workflows. Notably, **cross-provider session portability** and **local/edge inference offloading** are emerging as universal competitive vectors, reflecting enterprise demands for vendor flexibility and cost control.

---

## 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Releases | Notable Activity Pattern |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 10+ tracked | 8 | None | Crisis response mode: billing bug, malware alert, stream timeouts dominating |
| **OpenAI Codex** | 10+ tracked | 10 | rust-v0.126.0-alpha.2 | Deep permissions architecture migration; GPT-5.5 rollout friction |
| **Gemini CLI** | 10 tracked | 10 | v0.40.0-preview.4 | Quality-of-life wave: MCP fixes, config standardization, local Ollama routing |
| **GitHub Copilot CLI** | 11 active | 1 | None | Surge in critical reliability issues; rapid issue closure (3 closed) |
| **Kimi Code CLI** | 6 tracked | 5 | None | Windows regressions urgent; architecture PRs (RalphFlow, git worktrees) maturing |
| **OpenCode** | 10+ tracked | 10 | v1.14.25 | DeepSeek V4 compatibility crisis; rapid fix cycle; HttpApi unification |
| **Pi** | 10 tracked | 18 merged | None | **Highest merge velocity**: 18 PRs merged, 30+ issues closed; provider expansion focus |
| **Qwen Code** | 10 tracked | 4 merged | None | Auth/connectivity fixes shipping; macOS desktop and OpenRouter OAuth advancing |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **MCP Ecosystem Hardening** | Claude Code, Codex, Gemini CLI, Qwen Code, Kimi | Provenance verification (#53386), connection limits (#3277), process lifecycle (#12491), hyphen normalization (#25989), env var expansion (#25975) |
| **Billing Transparency & Cost Control** | Claude Code, Codex, Kimi, Copilot CLI | Real-time usage visibility (#38593), error-turn token accounting (#2059), quota circuit breakers (#2969), routing bug fixes (#53262) |
| **Session Portability & Recovery** | Codex, Kimi, OpenCode, Qwen Code | Cross-device remote control (#1282), `/rewind` with file rollback (#11626, #5474), chat save/resume (#3190), archive access (#6680) |
| **Git Worktree / Parallel Session Isolation** | Kimi, Gemini CLI, Claude Code | `--worktree` flag (#2073), Task tool `cwd` parameter (#12748), branch-scoped sessions for monorepo workflows |
| **Local/Edge Model Offloading** | Gemini CLI, Pi, Qwen Code | Ollama compression routing (#25915), vLLM timeout fixes (#3715), local inference fidelity (#1280, #1281) |
| **Permission Fatigue & Safety Gates** | Gemini CLI, Kimi, Codex, Copilot CLI | "Always allow" persistence (#19537), destructive behavior guards (#22672), mandatory skill loading (#2071), pre-write backups (#25947) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Primary Target** | Full-stack developers, enterprise teams | OpenAI ecosystem users, agentic coding pioneers | Google Cloud developers, multi-modal workflows | GitHub-centric developers, Copilot subscribers | Chinese market, cross-platform freelancers | IDE-agnostic power users, subagent orchestration | Extension developers, multi-provider power users | Alibaba Cloud users, Qwen model adopters |
| **Feature Focus** | Natural language project control, TUI polish | Permissions architecture, GPT-5.5 integration | Agent reliability, memory architecture, local inference | Autopilot agent, GitHub-native integration | Ephemeral agent contexts (RalphFlow), workflow safety | Subagent visibility, HttpApi unification, tree navigation | Provider ecosystem breadth, extension API lifecycle | Qwen model optimization, Chinese cloud integration |
| **Technical Approach** | Closed-source, API-coupled; open-source tension (#41447) | Rust runtime, profile-based permissions; stacked architectural migrations | Go-based, convergence detection, AST-aware investigation | Electron + TypeScript; GitHub auth integration | Python/Node hybrid; ACP mode for editors | TypeScript/Electron; plugin npm ecosystem | TypeScript; modular provider system with extension hooks | TypeScript; OpenRouter + Alibaba Cloud native |
| **Maturity Signal** | Billing/security crises suggest scaling pains | Deep permissions refactor indicates architectural debt payoff | Preview channel discipline, active reliability workstreams | Low PR velocity; maintenance mode vs. innovation | Windows regressions show platform coverage gaps | Rapid DeepSeek fixes show responsiveness | **Highest operational tempo**: triage policy, self-updates, 18 merges/day | Auth fixes shipping; desktop installer advancing |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **🔥 Highest Velocity** | **Pi** | 18 PRs merged in 24h, formalized triage policy, self-update capability, 3 new providers added; demonstrates mature maintainer workflow and contributor scale |
| **⚡ Rapid Iteration** | **OpenCode**, **Gemini CLI**, **Codex** | OpenCode: v1.14.25 release + rapid DeepSeek fix cycle; Gemini CLI: 10 active PRs with focused quality-of-life theme; Codex: 5 stacked permissions PRs indicate coordinated engineering sprint |
| **📊 Steady State** | **Claude Code**, **Kimi**, **Qwen Code** | Sustained issue volume but reactive posture; Kimi's RalphFlow and worktree PRs show architectural ambition offset by Windows regressions; Qwen shipping fixes but lower merge volume |
| **⚠️ Concerning Stagnation** | **GitHub Copilot CLI** | Only 1 active PR, no releases, 11 issues with critical autopilot loops; rapid closures may indicate support-driven triage rather than engineering investment |

**Community Health Indicators**: Pi's weekend triage policy and `pi update` self-maintenance signal **operational maturity** rare in open-source CLI tools. Claude Code's 143-comment stream timeout issue and Copilot CLI's quota-burning loops indicate **trust erosion risk** when reliability issues persist without transparent resolution.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|:---|:---|:---|
| **Agentic Coding Safety Nets** | Pre-write backups (#25947), transactional undo (#11626, #5474), convergence detection (#1960), destructive behavior guards (#22672) | Production deployment of autonomous agents requires **database-like ACID semantics** for code changes; partial undo is unacceptable |
| **MCP as Critical Infrastructure** | Provenance verification (#53386), connection limits (#3277), zombie process leaks (#12491), policy persistence (#19537) | MCP servers execute arbitrary code with credentials; **supply chain security** must match npm/pypi standards |
| **Context Compression & Local Offloading** | Ollama routing (#25915), pathological compression (#23556), 1M token API vs. 400K product gaps (#19464) | Token economics drive **hybrid cloud-local architectures**; compression quality becomes competitive differentiator |
| **Cross-Provider Session Portability** | Reasoning content round-trips (#24190, #3691), tool ID normalization (#3664), cache control compatibility (#3728) | Vendor lock-in resistance requires **normalization layers**; sessions must survive provider switches without data loss |
| **Enterprise Configuration Governance** | Per-repo MCP config (#2528), mandatory skill gates (#2071), local-only memory (#2930), master instructions (#2976) | Team-scale AI coding needs **GitOps-friendly configuration** with compliance boundaries |
| **Real-Time Session Observability** | Subagent TUI indicators (#2075, #23784), background task colors (#20921), live streaming for local tools (#25788) | Multi-agent workflows require **orchestrator visibility** without focus stealing; ambient awareness patterns from CI/CD dashboards |

---

*Report compiled from community digest data dated 2026-04-26. For methodological questions or data corrections, refer to individual tool repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-26 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 OPEN | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; addresses pain point in every document Claude generates |
| 2 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 OPEN | Meta-skills for evaluating Skill quality (structure, docs, examples) and security posture | First systematic approach to Skill validation; enterprise relevance |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 OPEN | Improved guidance for single-conversation frontend design tasks | Focus on actionability vs. verbosity; token efficiency debate |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | 🟡 OPEN | OpenDocument Text creation, template filling, and ODT→HTML conversion | Fills open-source document format gap; ISO standard compliance |
| 5 | **[skill-creator YAML validation](https://github.com/anthropics/skills/pull/539)** | 🟡 OPEN | Pre-parse detection of unquoted descriptions with YAML special characters | Developer experience; silent failure prevention |
| 6 | **[DOCX tracked changes fix](https://github.com/anthropics/skills/pull/541)** | 🟡 OPEN | Fixes `w:id` collision between tracked changes and existing bookmarks | Document corruption root cause; OOXML shared ID space nuance |
| 7 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 🟡 OPEN | Full testing stack guidance: Testing Trophy, AAA pattern, React Testing Library, CI/CD | Comprehensive scope; fills major gap in code quality skills |
| 8 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | 🟡 OPEN | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model leverage |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Org-wide Skill distribution** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 5 👍) | Teams need shared skill libraries, not manual file passing |
| **Skill reliability & trigger rates** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍) | `claude -p` fails to invoke skills; evaluation tooling is broken |
| **Trust boundary / security** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments) | Community skills impersonating official `anthropic/` namespace |
| **Platform extensibility** | [#16](https://github.com/anthropics/skills/issues/16) (MCP exposure), [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock) | Skills need to work beyond Claude Code native environment |
| **Skill lifecycle management** | [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Upload, replace, delete operations failing at API level |
| **Enterprise auth compatibility** | [#532](https://github.com/anthropics/skills/issues/532) | SSO users blocked from `skill-creator` optimization loop |

**Emerging directions:** IoT/physical device control (robot vacuums), memory/persistence across conversations, macOS native automation, ServiceNow platform coverage.

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal problem with minimal scope; clear value proposition |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills critical gap; aligns with quality-focused community demand |
| **ODT support** | [#486](https://github.com/anthropics/skills/pull/486) | Complements existing DOCX/PPTX skills; open-source format mandate in some orgs |
| **skill-creator fixes** (3 PRs: YAML, DOCX, PDF) | [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anthropics/skills/pull/538) | Same author [Lubrsy706](https://github.com/Lubrsy706); concentrated quality push on core tooling |
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | Broad enterprise platform coverage; ITSM/ITOM/SecOps/ITAM/FSM/SPM |
| **sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Native automation alternative to screenshot-based computer use; permission-aware design |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability and distribution infrastructure**—not more skill variety—focusing on guaranteed skill invocation, organizational sharing, secure namespace governance, and SSO-compatible tooling before expanding the skill catalog further.

---

---

# Claude Code Community Digest — 2026-04-26

## Today's Highlights

The community is grappling with widespread **"Stream idle timeout" API errors** affecting both CLI and web users, with the top issue accumulating 143 comments and 128 upvotes. A **critical billing bug** was discovered where `HERMES.md` in git commit histories silently routes requests to extra usage billing instead of plan quota, burning through $200 in credits. Meanwhile, a **malware typosquatting attack** targeting Claude Code users was reported, highlighting growing supply chain security concerns.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | **API Error: Stream idle timeout — partial response received** | Most-discussed bug; affects macOS users on Anthropic API with partial responses failing mid-stream. Indicates infrastructure strain or regression in stream handling. | 143 comments, 128 👍; users reporting multiple occurrences daily, workarounds being shared |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **Support multiple Connector accounts (same connector, different accounts)** | Enterprise blocker — teams need to connect multiple GitHub, Slack, etc. accounts without switching profiles. | 141 comments, 196 👍; high-demand feature with active community discussion |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in Claude Mobile without shared email** | Privacy/security concern for users managing work/personal separation. Mobile experience lagging behind web. | 46 comments, 147 👍; marked "invalid" but strong community support persists |
| [#3473](https://github.com/anthropics/claude-code/issues/3473) | **Change working directory during Claude session** | Fundamental workflow limitation — developers frequently work across monorepos or multiple projects in one session. | 21 comments, 59 👍; long-standing request (since July 2025) with practical use cases |
| [#45732](https://github.com/anthropics/claude-code/issues/45732) | **Bring Back /buddy: 511 Reasons Why** | Emotional/community issue — detailed case study of AI self-oversight feature removal impacting solo developers building production infrastructure. | 18 comments, 3 👍; passionate advocacy, suggests feature had dedicated power-user base |
| [#12748](https://github.com/anthropics/claude-code/issues/12748) | **Add `cwd` parameter to Task tool for Git worktrees** | Technical gap in subagent tooling — Git worktrees are standard for parallel branch work, currently unsupported. | 9 comments, 16 👍; specific, well-scoped enhancement with clear implementation path |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | **HERMES.md in git commits routes to extra usage billing** | **Critical billing bug** — silent financial impact, $200 burned while plan quota unused. Pattern-matching bug in cost routing logic. | 4 comments, 0 👍; newly reported, high severity, requires immediate attention |
| [#53386](https://github.com/anthropics/claude-code/issues/53386) | **MCP servers have no provenance verification — supply chain risk** | Security architecture gap — arbitrary code receives credentials without authenticity checks. | 2 comments, 0 👍; foundational security concern as MCP ecosystem expands |
| [#53393](https://github.com/anthropics/claude-code/issues/53393) | **Malware repo typosquatting Claude Code: Trojan:Win64/Lazy.PGPK!MTB** | Active threat — `github.com/Enxs969/skiller` impersonating Claude Code plugin manager. | 1 comment, 0 👍; urgent security alert, needs takedown and user warning |
| [#53394](https://github.com/anthropics/claude-code/issues/53394) | **TUI rendering: resize causes output duplication, rewind freezes** | Stability issue — requires process kill, data loss risk during long sessions. Reproducible on major macOS terminals. | 1 comment, 0 👍; fresh bug with clear repro, affects core UX |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | Community-driven open-sourcing proposal; closes multiple related requests. Symbolic of ongoing tension between closed-source product and developer desire for transparency/extensibility. | Open |
| [#53204](https://github.com/anthropics/claude-code/pull/53204) | **feat: add sql_injection and hardcoded_secret patterns to security-guidance** | Expands security plugin from 9 to 11 patterns; detects f-string SQL queries and hardcoded secrets. Addresses real code quality needs. | Open |
| [#53203](https://github.com/anthropics/claude-code/pull/53203) | **docs: add README.md for security-guidance plugin** | Documentation gap fix — only plugin in `/plugins` without README. Lowers contribution barrier. | Open |
| [#40458](https://github.com/anthropics/claude-code/pull/40458) | **fix: normalize Europe/Kiev to Europe/Kyiv** | Timezone normalization for legacy IANA aliases; political sensitivity + technical correctness (tzdata 2022b). | Open |
| [#46024](https://github.com/anthropics/claude-code/pull/46024) | **docs: document --exclude-dynamic-system-prompt-sections** | Documents prompt caching optimization flag; important for cost-conscious users and CI/CD deployments. | Open |
| [#46025](https://github.com/anthropics/claude-code/pull/46025) | **docs: add Linux subprocess isolation and CLAUDE_CODE_SCRIPT_CAPS docs** | Security hardening documentation for managed deployments; covers PID namespace isolation and capability restrictions. | Open |
| [#47532](https://github.com/anthropics/claude-code/pull/47532) | **Rename marketplace for AgentNXT deployment** | Closed without merge; suggests internal product/branding pivot around "AgentNXT" marketplace concept. | Closed |
| [#53354](https://github.com/anthropics/claude-code/pull/53354) | **Add files via upload** | Appears to be spam/low-quality — zip file upload with no context. | Open |

*Note: Only 8 PRs had activity in the last 24 hours.*

---

## Feature Request Trends

1. **Multi-account & multi-identity management** — Connector accounts (#27302), mobile account switching (#36151), and work/personal separation dominate. Users want Claude Code to match enterprise tool flexibility, not force single-identity constraints.

2. **Session control & workspace flexibility** — Working directory changes (#3473), Task tool `cwd` parameter (#12748), and Git worktree support reflect developers' need to operate across project boundaries without restarting sessions.

3. **Billing transparency & programmatic access** — Rate limit exposure in statusline (#27915, #19385), `/usage` command (#38593), and usage monitoring hooks show frustration with opaque cost controls.

4. **Security hardening** — MCP provenance (#53386), subprocess isolation docs (#46025), and security pattern expansion (#53204) indicate maturing security requirements as Claude Code handles more sensitive operations.

---

## Developer Pain Points

| Category | Pattern | Evidence |
|----------|---------|----------|
| **API Reliability** | Stream idle timeouts, partial failures | #46987, #53390 — widespread, recurring, no clear resolution |
| **Silent Billing Issues** | Unexpected extra usage charges, routing bugs | #53262 (HERMES.md trigger), #53378 (usage increasing without prompts), #53379 |
| **Data Loss & History** | Unannounced pruning, chat history disappearance | #46621 (silent deletion), #16970 (losing chat history) — critical trust issue |
| **Desktop/CLI Stability** | Crashes, freezes, rendering failures | #53384 (exit code 1 every session), #53394 (TUI freeze), #28128 (ENOSPC bootstrap deadlock) |
| **Cost Visibility** | No programmatic access to quotas, surprise limits | #52679 (org monthly limit hit), #29513 (Remote Control not enabled for Max tier) |
| **Windows as Second-Class** | More bugs, fewer features, desktop-specific issues | #39185 (image dimension limits), #53382 (auto-scroll regression), #34602 (Cowork ENOSPC) |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-26

## 1. Today's Highlights

The Codex team is executing a major permissions architecture migration with five stacked PRs from bolinfest moving core runtime decisions to `PermissionProfile`, eliminating lossy legacy `SandboxPolicy` round-trips. Meanwhile, GPT-5.5 rollout friction dominates user reports: context compaction failures, rate limit depletion, and memory leaks are generating significant community concern across Desktop, CLI, and VS Code extension surfaces.

---

## 2. Releases

**rust-v0.126.0-alpha.2** — New alpha release published. No detailed changelog provided in release notes.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#10450 — Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)** | Top-voted open feature request (604 👍); users want parity with VS Code Remote-SSH/Containers for server-side development workflows | 167 comments of sustained advocacy; acknowledged gap vs. browser-to-IDE transition promise |
| **[#16231 — High CPU usage on macOS after VS Code extension update](https://github.com/openai/codex/issues/16231)** | Regression on Apple Silicon (M5 Pro) with macOS Tahoe; thermal throttling affects daily usability | 60 comments, 58 👍; users confirming across extension versions, seeking rollback guidance |
| **[#19464 — Support 1M token context for GPT-5.5](https://github.com/openai/codex/issues/19464)** | Discrepancy between API (1M) and Codex (400K) context limits for GPT-5.5; blocks large codebase workflows | 33 comments; users questioning product positioning vs. API access |
| **[#9203 — Please make "/undo" back](https://github.com/openai/codex/issues/9203)** | Safety-critical UX gap: accidental file deletions/modifications without git tracking are unrecoverable | 154 👍, strong emotional resonance; cited as "bites me several times" |
| **[#12491 — MCP child processes not reaped, 1300+ zombies, 37GB leak](https://github.com/openai/codex/issues/12491)** | Severe production stability issue in Desktop app; process management failure at scale | 17 comments; alarming telemetry, needs immediate engineering response |
| **[#11626 — CLI: Add /rewind checkpoint restore](https://github.com/openai/codex/issues/11626)** | Current `Esc` rewind only reverts chat, not code edits; breaks expectation of atomic undo | 92 👍; seen as companion to #9203 for safe agentic coding |
| **[#19558 — GPT-5.5 remote compaction fails, thread unusable](https://github.com/openai/codex/issues/19558)** | Data loss scenario: automatic compaction corrupts thread state, forcing new thread creation | 5 comments but critical severity; compounds #19464 context limit concerns |
| **[#19585 / #19571 — Pro usage limits deplete rapidly on 5.5](https://github.com/openai/codex/issues/19585)** | $200 Pro plan consumed in ~20 min; suggests miscounted tokens or compaction retry loops | Multiple reports, 4 comments each; billing trust issue |
| **[#19181 — VS Code extension flashes/blinks](https://github.com/openai/codex/issues/19181)** | UI regression making extension unusable; rapid visual instability | 8 comments; immediate workaround needed |
| **[#19075 — Windows app hangs on splash with deactivated workspace auth](https://github.com/openai/codex/issues/19075)** | Auth state handling failure blocks launch entirely; poor error recovery | 8 👍; enterprise deployment blocker |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| **[#19395 — permissions: finish profile-backed app surfaces](https://github.com/openai/codex/pull/19395)** | Final migration of UI surfaces to `PermissionProfile` | Completes user-facing permissions architecture; stops showing misleading sandbox summaries |
| **[#19393 — permissions: migrate approval and sandbox consumers to profiles](https://github.com/openai/codex/pull/19393)** | Runtime approval decisions use `PermissionProfile` directly | Critical for `External` vs. `Disabled` distinction; fixes policy drift |
| **[#19394 — permissions: remove core legacy policy round trips](https://github.com/openai/codex/pull/19394)** | Eliminates `SandboxPolicy` conversion in execution paths | Prevents split filesystem semantic loss; performance + correctness win |
| **[#19606 — permissions: make runtime config profile-backed](https://github.com/openai/codex/pull/19606)** | Supersedes #19391; canonical `PermissionProfile` in runtime config | Unblocks preceding PRs after GitHub merge mishap |
| **[#19392 — permissions: derive compatibility policies from profiles](https://github.com/openai/codex/pull/19392)** | Single source of truth for stored policies | Eliminates drift risk between profile and cached projection |
| **[#19610 — Support end_turn in response.completed](https://github.com/openai/codex/pull/19610)** | Uses provider `end_turn` signal for sampling loop decisions | Enables more efficient multi-turn inference with compatible APIs |
| **[#19184 — fix: handle deferred network proxy denials](https://github.com/openai/codex/pull/19184)** | Fixes race where Guardian denial arrives post-command-start | Security-critical for managed network proxy deployments |
| **[#19537 — [mcp] Save Plugin MCP policies to config.toml](https://github.com/openai/codex/pull/19537)** | Persistent "Always allow" preferences for plugin MCP tools | UX polish for MCP plugin ecosystem; reduces repetitive approvals |
| **[#19591 — Fix filtered thread-list resume regression in TUI](https://github.com/openai/codex/pull/19591)** | Restores `codex resume` with metadata-filtered listings | Fixes daily workflow breakage from #18502 regression |
| **[#19458 — ChatGPT Library file upload/download hooks](https://github.com/openai/codex/pull/19458)** | Library file integration via `/files/process_upload_stream` | Bridges Codex with ChatGPT Library for persistent file workflows |

---

## 5. Feature Request Trends

1. **Remote/Server Development** — #10450 exemplifies demand for SSH/container remote parity; desktop app seen as incomplete without it
2. **Reliable Undo/Rewind** — #9203, #11626 show strong demand for atomic session recovery (chat + code); current partial rewind violates user mental model
3. **Context Scale Alignment** — #19464 and compaction issues reveal tension between API capabilities and Codex product limits; users expect 1M tokens
4. **Session Management UX** — #15368, #19603, #12464: VS Code session caps, TUI resume semantics, and in-session `/cwd` all point to workflow continuity as unsolved
5. **MCP Ecosystem Maturity** — #12491, #14449, #19537: process lifecycle, discovery, and policy persistence need hardening for production plugin use

---

## 6. Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **GPT-5.5 Instability** | #19558, #19585, #19571, #19215, #19255: compaction failures, rapid limit depletion, rate limit hits | 🔴 Critical — blocks adoption, creates billing distrust |
| **Resource Management** | #16231 (CPU), #19333 (memory), #12491 (zombies/leaks): platform-specific resource exhaustion | 🔴 Critical — daily usability impact |
| **Windows-First Quality Gap** | #14549, #10090, #19075, #19052, #19181: hotkey conflicts, sandbox failures, splash hangs, UI flashing, WSL path issues | 🟡 High — consistent second-class experience |
| **Auth/Session Fragility** | #19075, #17354, #19569: deactivated workspace hangs, thread history loss, empty thread bodies | 🟡 High — data loss and trust erosion |
| **Safety/Approval UX** | #9203, #11626, #19594: missing undo, false positive cyber-risk flags, incomplete rewind | 🟡 High — agentic coding requires stronger safety nets |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-25 to 2026-04-26.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-26

## Today's Highlights

The v0.40.0-preview.4 patch landed to fix a Ctrl+Backspace regression, while community contributors submitted a wave of quality-of-life improvements including MCP tool dispatch fixes, local Ollama compression routing, and standardized config naming. The maintainers' roadmap remains heavily focused on agent reliability, with active workstreams tracking subagent recovery, memory routing, and AST-aware codebase navigation.

---

## Releases

**[v0.40.0-preview.4](https://github.com/google-gemini/gemini-cli/pull/25942)** — Patch release cherry-picking commit `048bf6e` to resolve issues introduced in preview.3. This is a targeted fix with no new features.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | EPIC investigating whether tree-sitter-style parsing could reduce token waste and misaligned reads. Directly impacts agent efficiency and cost. | 5 comments, maintainer-only; seen as foundational for next-gen codebase investigation |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Silent failures in `codebase_investigator` mean users get false positives when agents hit turn limits. Breaks trust in autonomous workflows. | 4 comments, P1 priority; active workstream |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Repeated permission prompts on same file** | UX friction in security model—"allow for all future sessions" intermittently fails. Affects daily usability. | 3 comments, no upvotes but high annoyance factor |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands hang with "Waiting input"** | Simple commands falsely block on input detection; breaks automated agent flows. | 3 upvotes, 2 comments; reproducibility concerns |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Defines how agent memory scoping works—critical for multi-project users. No implementation yet. | 2 upvotes, 1 comment; design-heavy discussion |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides** | Configuration system has leaky abstraction—registry reads settings but agent doesn't respect them. | 2 comments, P2; config reliability theme |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model creates tmp scripts in random spots** | Workspace hygiene problem; cleanup burden falls on users. Reveals tension between agent autonomy and environment respect. | 2 comments; workflow friction |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard limit hit by power users with many MCP servers. Needs intelligent tool scoping. | No comments yet; infrastructure scaling concern |
| [#25218](https://github.com/google-gemini/gemini-cli/issues/25218) | **Table rendering broken in screen reader mode** | Accessibility regression during streaming; incremental re-renders corrupt layout. | Newly filed; a11y gap in streaming architecture |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should stop/discourage destructive behavior** | Safety guardrails for `git reset --force`, DB modifications. Prevents irreversible agent actions. | 1 upvote, 1 comment; trust/safety priority |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#25989](https://github.com/google-gemini/gemini-cli/pull/25989) | **MCP hyphenated server name fix** | Models collapse hyphens to underscores in tool calls (`mcp_hyphen_server_test_tool` vs `mcp_hyphen-server_test-tool`); normalizes dispatch to prevent "tool not found" errors. | Open |
| [#25947](https://github.com/google-gemini/gemini-cli/pull/25947) | **Versioned pre-write backups with agent-driven restore** | Transactional file layer: auto-backup before writes, agent-accessible rollback. Directly addresses destructive modification loops. | Open |
| [#25915](https://github.com/google-gemini/gemini-cli/pull/25915) | **Route `/compress` through local Ollama** | Offloads context compression to local `gemma3:4b` etc.; reduces API costs and latency. Sanitizes history to plain text for local model. | Open, needs issue |
| [#25975](https://github.com/google-gemini/gemini-cli/pull/25975) | **Expand env vars in MCP server args** | `${VARIABLE_NAME}` substitution now works in `args`, `command`, and `cwd` fields. Fixes config portability. | Open |
| [#25971](https://github.com/google-gemini/gemini-cli/pull/25971) | **Standardize boolean settings to positive naming** | Migrates `hide* / disable* / skip*` → `show* / enable*`; includes automatic config migration. Reduces cognitive load. | Open |
| [#25912](https://github.com/google-gemini/gemini-cli/pull/25912) | **Compact tool output for MCP tools** | Extends existing native-tool compaction to MCP; reduces scroll fatigue since default is `true`. | Open, P1 |
| [#25788](https://github.com/google-gemini/gemini-cli/pull/25788) | **Live streaming + stderr relay for local tools** | Real-time output for `discoveryCommand`-registered tools; critical for long-running operations. | Open |
| [#25981](https://github.com/google-gemini/gemini-cli/pull/25981) | **Dismiss update banner on `/clear`** | Small but persistent UX fix; `ui.clear()` now resets update notification state. | Open |
| [#25980](https://github.com/google-gemini/gemini-cli/pull/25980) | **Don't crash on @-mention with non-path blob** | Hardens input parsing against pasted JSON or hallucinated tool paths; fixes `ENAMETOOLONG` crash. | Open |
| [#25977](https://github.com/google-gemini/gemini-cli/pull/25977) | **Show package.json version alongside config tag** | Surfaces concrete version for `latest`-tagged extensions; improves debuggability. | Open |

---

## Feature Request Trends

1. **Agent Memory & Context Management** — Multiple workstreams (#22819 global/project memory, #22809 proactive memory writes, #23556 compression quality) signal memory architecture is the next major evolution. Users want persistent, scoped, and efficiently-compressed agent state.

2. **Safety & Recoverability** — Pre-write backups (#25947), destructive behavior guards (#22672), and subagent failure transparency (#22323) form a coherent theme: production agentic workflows need transactional semantics and clear failure modes.

3. **MCP Ecosystem Hardening** — Hyphen normalization (#25989), env var expansion (#25975), and compact output (#25912) show MCP integration maturing from "works" to "works reliably at scale."

4. **Local/Edge Model Offloading** — Ollama compression routing (#25915) and internal model updates to 3.1 flash lite (#23823) indicate cost/latency optimization through local inference.

5. **Accessibility & Terminal Robustness** — Screen reader table rendering (#25218), SSH detection (#24546), and Windows terminal fixes (#25943, #25273) reveal push for broader environment support.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Silent agent failures** | #22323 (MAX_TURNS → false success), #23571 (tmp script sprawl) | High — breaks trust in automation |
| **Permission fatigue** | #24916 (re-prompting), #23582 (subagents unaware of approval modes) | Medium — daily friction |
| **Terminal environment fragility** | #25166 (hanging shell), #24202 (SSH scrambling), #25216 (Windows path `A:\` crash) | Medium — platform-specific bugs |
| **Configuration discoverability** | #24943 (parallel tool call layouts), #25978 (outdated docs referencing removed settings labels), #22267 (ignored overrides) | Medium — docs/settings drift |
| **Tool scaling limits** | #24246 (>128 tools → 400 error), #23556 (pathological compression) | Medium — power user ceiling |
| **Scroll/rendering performance** | #24470 (long chat scroll jitter), #25218 (streaming table corruption) | Low-Medium — UX polish backlog |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-26

## Today's Highlights

No new release shipped in the last 24 hours, but community activity surged with **11 active issues** touching critical reliability problems: autopilot infinite loops burning premium quotas, terminal rendering regressions, and enterprise security gaps around memory storage. The maintainers closed 3 issues with rapid turnaround, suggesting heightened attention to UX friction and quota protection.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2205](https://github.com/github/copilot-cli/issues/2205) | **Scroll broken in Terminator terminal** — mouse wheel navigates input history instead of agent output history | Breaks fundamental terminal UX for Linux users; `--no-mouse` flag doesn't fully restore expected behavior | 6 upvotes, 8 comments; active discussion on terminal emulator compatibility |
| [#2528](https://github.com/github/copilot-cli/issues/2528) | **Per-repository MCP server config** (`.github/mcp.json`) | Parity gap: custom instructions and LSP servers support repo-level config, but MCP servers don't—blocks team-standardized tooling workflows | 5 upvotes; enterprise/team adoption blocker |
| [#2969](https://github.com/github/copilot-cli/issues/2969) | **Autopilot infinite loop on blocked tasks** | Cost-critical: agent retries indefinitely, burning premium requests until quota exhaustion—second report of this pattern | Fresh report (Apr 25), 1 comment; follows similar closed issue #1540 |
| [#2971](https://github.com/github/copilot-cli/issues/2971) | **Write ops fail silently in VS Code SSH dev containers** | Permission system breaks after network reconnect, causing infinite retry loops; affects remote development workflows | Zero engagement yet, but severe impact for container/SSH users |
| [#2930](https://github.com/github/copilot-cli/issues/2930) | **Local auto-memory without remote storage** | Enterprise security requirement: orgs disable Copilot Memory (remote), leaving no knowledge accumulation mechanism | No comments yet; addresses compliance-sensitive deployments |
| [#2968](https://github.com/github/copilot-cli/issues/2968) | **URL link wrapping broken in Windows Terminal** | Long URLs split across lines only hyperlink the first segment—breaks click-to-open for generated links | Fresh Windows-specific rendering bug |
| [#2974](https://github.com/github/copilot-cli/issues/2974) | **Pro+ models unavailable despite paid subscription** | Subscription tier mismatch between GitHub CLI and web interface—billing/entitlement bug | No details provided by reporter; likely needs triage |
| [#2975](https://github.com/github/copilot-cli/issues/2975) | **Empty bug report template** | Triage noise: template-filled issue with zero content | Indicates possible automation or UX problem with issue creation flow |
| [#1540](https://github.com/github/copilot-cli/issues/1540) | ~~Endless loop consumed all quota~~ **[CLOSED]** | Precedent for #2969: Opus 4.6/Haiku loops on `task_complete` tool failure | Resolved; 3 comments, no upvotes—suggests individual support resolution |
| [#2972](https://github.com/github/copilot-cli/issues/2972) | ~~Esc cancels agent but clears input buffer~~ **[CLOSED]** | UX gap: interrupting agent loses typed follow-up text | Closed with 1 comment; quick turnaround on UX polish |
| [#2976](https://github.com/github/copilot-cli/issues/2976) | ~~Master instructions file~~ **[CLOSED]** | Request for global system-level instructions across all sessions/contexts | Closed with 1 comment; likely redirected to existing `copilot-instructions.md` patterns |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2970](https://github.com/github/copilot-cli/pull/2970) | **Create devcontainer.json** | Adds development container configuration for consistent contributor environments | Open, no comments yet; infrastructure/ contributor experience |

*Only 1 PR active in last 24h.*

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Repository-scoped configuration** | #2528 (MCP servers), implicit parity with existing `.github/copilot-instructions.md` and `.github/lsp.json` | Strong: 5 upvotes, clear enterprise use case |
| **Local/enterprise-friendly memory** | #2930 (agent-initiated, no remote storage) | Emerging: security-conscious orgs need alternatives to cloud-backed Copilot Memory |
| **Global/master instructions** | #2976 (closed, but indicates demand) | Low: likely addressed by per-repo patterns; may resurface for multi-repo freelancers |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Autopilot infinite loops burning quota** | 2 confirmed reports (#1540, #2969), similar root cause | 🔴 Critical | Cost impact; no automatic circuit breaker |
| **Terminal rendering regressions** | 2 active issues (#2205 scroll, #2968 URL wrapping) | 🟡 High | Linux and Windows both affected |
| **Permission system fragility in remote environments** | #2971 (SSH dev containers) | 🟡 High | Network state changes break auth flows |
| **MCP server configuration portability** | #2528 | 🟡 Medium | Team standardization blocked |
| **Empty/low-quality issue reports** | #2975 | 🟢 Low | Template or automation noise |

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-04-25 to 2026-04-26.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-26

## 1. Today's Highlights

The v1.39.0 release is seeing turbulent adoption with two fresh Windows-specific regressions hitting within 24 hours—an encoding bug breaking built-in skills on Chinese-language systems and a MIME type failure crippling `/web` mode. Meanwhile, the community is pushing hard on workflow isolation: PRs for git worktree support and ephemeral agent architectures signal mature demand for parallel, non-destructive AI coding sessions.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#1282** | [Remote Control — Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Bridges the critical gap between CLI-centric workflows and mobile/tablet flexibility; directly competes with Cursor's cloud sync model | 3 👍, 3 comments; sustained interest since Feb, resurfaced in discussion |
| **#2070** | [Windows Chinese system: built-in skill file encoding error in v1.38.0+](https://github.com/MoonshotAI/kimi-cli/issues/2070) | **Regression blocking non-English Windows users entirely** — `utf-8` codec fails on GB2312 system locales; breaks core skill loading | Fresh (Apr 25), 2 comments, urgent tone; likely needs hotfix |
| **#2074** | [v1.39.0 `/web` mode JavaScript MIME type error](https://github.com/MoonshotAI/kimi-cli/issues/2074) | **Regression**: local web server serves `.js` with wrong MIME type, rendering web UI unusable; blocks browser-based workflows | Zero comments yet, but severity implies rapid escalation risk |
| **#2059** | [Error messages consume tokens without productive output](https://github.com/MoonshotAI/kimi-cli/issues/2059) | Fundamental billing transparency issue — users charged for failed/tool-error turns; erodes trust in "99 plan" pricing | 1 comment; recurring theme across CLI tools, needs policy clarity |
| **#2072** | [Yolo mode conflates auto-approve with non-interactive, blocking `AskUserQuestion`](https://github.com/MoonshotAI/kimi-cli/issues/2072) | UX friction: "hands-off" mode still stalls on user questions, defeating automation intent; breaks CI/scripting workflows | Fresh, no votes yet but precise bug report with repro |
| **#2071** | [Mandatory project skill loading gates (`.kimi/require-skills`)](https://github.com/MoonshotAI/kimi-cli/issues/2071) | **Safety-critical**: prevents AI from editing code without loading project-specific conventions/skills; avoids workflow violations | Fresh, well-specified with `.agents/skills/` precedent |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| **#2075** | [feat(web): show running indicator for active sessions in sidebar](https://github.com/MoonshotAI/kimi-cli/pull/2075) | Visual "alive" marker for running sessions in sidebar | Small but high-UX polish; reduces context-switching overhead for multi-session users |
| **#1960** | [feat(soul): RalphFlow architecture with ephemeral context and convergence detection](https://github.com/MoonshotAI/kimi-cli/pull/1960) | **Major agent architecture**: automated iteration framework with isolated temp contexts, infinite-loop prevention, and convergence detection | Deep technical contribution; addresses core reliability of autonomous agent loops — under review since Apr 20 |
| **#2047** | [fix(acp): load `~/.kimi/mcp.json` in ACP server sessions](https://github.com/MoonshotAI/kimi-cli/pull/2047) | **Bugfix**: MCP server configs ignored in `kimi acp` (Zed/editor integration mode) | Unblocks external editor workflows; parity fix between interactive and ACP modes |
| **#2073** | [feat(cli): add git worktree support for isolated sessions](https://github.com/MoonshotAI/kimi-cli/pull/2073) | `--worktree` / `-W` flag: auto-creates git worktree per session | Enables **parallel AI sessions on same repo** without branch thrashing or file conflicts; mature dev workflow need |
| **#1896** | ~~[fix(core): honor `http_proxy` env vars via `aiohttp trust_env=True`](https://github.com/MoonshotAI/kimi-cli/pull/1896)~~ | **CLOSED** — merged fix for corporate/locked-down network proxy support | Critical for enterprise adoption; standard `http_proxy`/`https_proxy` now respected |

---

## 5. Feature Request Trends

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Cross-device session portability** | #1282 (Remote Control) | Long-standing (Feb), gaining urgency as competitors ship cloud sync |
| **Workflow isolation & safety gates** | #2071 (mandatory skills), #2073 (git worktrees), #1960 (ephemeral contexts) | **Emerging cluster**: preventing AI from destructive edits, enabling parallel experimentation |
| **Billing transparency & token economics** | #2059 (error token consumption) | Trust infrastructure; needs official policy response |
| **Non-interactive / CI-ready automation** | #2072 (Yolo mode fixes) | Automation maturity; CLI competing with headless agent runners |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Windows internationalization regressions** | #2070 (encoding), #2074 (MIME type) — both v1.39.0, both Windows | 🔴 **Critical**: two ship-blocking bugs in one release for a major platform |
| **Opaque token consumption** | #2059: errors, retries, and failed tool calls billed without clear accounting | 🟡 **High**: recurring revenue trust issue, needs real-time usage visibility |
| **ACP/editor integration gaps** | #2047: MCP configs ignored; secondary-class citizen vs. interactive mode | 🟡 **High**: blocks IDE-native workflows (Zed, future VS Code) |
| **Agent loop reliability** | #1960 (RalphFlow), #2072 (Yolo stalls): infinite loops, unexpected interactive breaks | 🟡 **High**: autonomy vs. control tension unresolved |
| **Missing enterprise network support** | #1896 (now fixed): proxy bypass — pattern suggests corporate deployment friction | 🟢 **Moderate** (improving) |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-04-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-26

## Today's Highlights

The DeepSeek V4 `reasoning_content` round-trip bug dominated community attention with multiple related issues and a rapid fix cycle, while contributor **kitlangton** made significant progress bridging MCP and project endpoints to the experimental HttpApi. A permissions system refinement in v1.14.25 improves developer experience with full IntelliSense for tool permission keys.

---

## Releases

**v1.14.25** — [Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.14.25)

- **Permission config** now preserves rule order and exposes full IntelliSense for tool permission keys
- **LSP permission prompts** enriched with request context: operation type, target file, and cursor position
- **Shell command working directory** fixed to remain correct after login shell startup files run

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14982](https://github.com/anomalyco/opencode/issues/14982) | **Closed**: Unexpected macOS iCloud/Photos access requests | Security-sensitive: OpenCode triggered system permission dialogs outside workspace scope, raising enterprise security concerns | 25 comments, 10 👍 — resolved with confirmation of sandboxing fixes |
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | **Open**: View archived sessions on desktop | Long-standing UX gap — users lose access to historical sessions without web workaround | 25 comments, 3 👍; active since January, high engagement |
| [#24190](https://github.com/anomalyco/opencode/issues/24190) | **Open**: DeepSeek V4 `reasoning_content` not round-tripped | **Critical for DeepSeek users**: multi-turn tool calls fail with 400 error after first turn, breaking agent workflows | 23 comments, 7 👍; duplicate issues confirm widespread impact |
| [#5474](https://github.com/anomalyco/opencode/issues/5474) | **Open**: `/undo` only rolls back messages, not file changes | **Data integrity risk**: chat state drifts from filesystem state, causing confusion and potential code loss | 21 comments, 7 👍; persistent since December 2025 |
| [#24083](https://github.com/anomalyco/opencode/issues/24083) | **Closed**: `reasoning_content` must be passed back to API | Rapid resolution of DeepSeek V4 compatibility — closed within 24h of creation | 8 comments, 9 👍; fast maintainer response |
| [#24261](https://github.com/anomalyco/opencode/issues/24261) | **Open**: DeepSeek `reasoning_content` not passed back | Related variant of #24190 with additional reproduction details | 6 comments, 2 👍; community actively documenting edge cases |
| [#24342](https://github.com/anomalyco/opencode/issues/24342) | **Open**: Agents freeze indefinitely on Windows | **Reliability blocker**: frontend "thinking" state desyncs from terminated LLM inference, no error surfaced | 6 comments, 1 👍; affects both main and sub-agents |
| [#15163](https://github.com/anomalyco/opencode/issues/15163) | **Closed**: CLI scans outside workspace on macOS | Privacy/security: indexed `~/Library` and sensitive directories, triggering corporate security alerts | 5 comments, 3 👍; resolved with scope restriction |
| [#22187](https://github.com/anomalyco/opencode/issues/22187) | **Closed**: Desktop scans random system folders | Cross-platform variant causing 100% CPU usage on Linux/Windows | 5 comments, 4 👍; linked to indexing logic fixes |
| [#19466](https://github.com/anomalyco/opencode/issues/19466) | **Open**: 50% CPU usage while idle waiting for rate limits | **Performance regression**: busy-wait during retry backoff wastes resources | 4 comments, 4 👍; affects long-running sessions |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#20039](https://github.com/anomalyco/opencode/pull/20039) | **Bash→Shell tool rename + shell-specific definitions** | Renames `bash` tool to `shell` with backward compatibility; adds tailored prompts for pwsh/powershell/cmd/bash for better agent accuracy | Open [beta] |
| [#24407](https://github.com/anomalyco/opencode/pull/24407) | **Bridge experimental tool routes to HttpApi** | Enables Console org switching and tool listing with provider/model queries via HttpApi; advances API unification | Open [Vouched] |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile touch optimization** | Full mobile/touch device support while preserving desktop UX | Open |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | **Fix streaming markdown after message completion** | Resolves table rendering bug where final rows were truncated in completed messages | Open |
| [#24406](https://github.com/anomalyco/opencode/pull/24406) | **Unified task state colors with icons** | Standardized TUI color convention (green/red/yellow/blue) for visual task status | Open |
| [#19116](https://github.com/anomalyco/opencode/pull/19116) | **Reconnect on network disruptions** | Fixes VPN switch, SSE timeout, connection reset scenarios; closes 4 related issues | Open |
| [#24401](https://github.com/anomalyco/opencode/pull/24401) | **Guard undefined MCP tool output** | Prevents `output.split` crash when MCP tools return image-only or empty results | Open [needs:compliance] |
| [#23430](https://github.com/anomalyco/opencode/pull/23430) | **Rebindable prompt submit/newline keys** | Closes 3-year-old request for customizable keybindings in prompt input | Open |
| [#23557](https://github.com/anomalyco/opencode/pull/23557) | **Interactive split-footer mode** | Adds split-footer UI to `run` command for parallel task visibility | Open [beta, Vouched] |
| [#24324](https://github.com/anomalyco/opencode/pull/24324) | **Fix LSP activation message accuracy** | Corrects misleading "files are read" → "files are written" to match actual behavior | Open |

---

## Feature Request Trends

1. **Subagent visibility** — Multiple requests for real-time subagent status in TUI footer (#23784), chat UI improvements (#22233), and busy indicators across projects (#15509). Users need transparency into parallel agent execution.

2. **Session/archive management** — Desktop archived session access (#6680) and visual active-session indicators (#23549) point to workspace-scale UX needs as users scale beyond single sessions.

3. **Notification & awareness** — Desktop popup notifications (#23842), dismissible toasts (#23879), and TUI background color changes on task completion (#20921) indicate demand for ambient awareness without focus stealing.

4. **Terminal/TUX robustness** — Copy/paste support (#17548), escape sequence handling (#16819), and header rendering fixes (#22417) show the TUI maturing for diverse terminal emulators and remote access scenarios.

---

## Developer Pain Points

| Category | Pattern | Evidence |
|----------|---------|----------|
| **DeepSeek V4 compatibility** | `reasoning_content` round-trip failures broke multi-turn conversations across multiple provider paths | #24190, #24083, #24261, #24334 — 4 issues in 48h |
| **Workspace scope/privacy** | Over-eager file system scanning triggered security alerts and performance degradation | #14982, #15163, #22187 — resolved but indicate indexing architecture fragility |
| **Undo/data consistency** | `/undo` command semantic gap between conversation and filesystem state | #5474 — 21 comments, unresolved since Dec 2025 |
| **Network resilience** | Desktop app disconnections, SSE timeouts, and hang-on-exit during subagent operations | #21199, #24391, plus PR #19116 attempting comprehensive fix |
| **Plugin ecosystem friction** | npm plugin loading regressions (#20139), MCP output crashes (#24401), and documentation gaps for community plugins | Suggests plugin API stability needs attention |
| **Idle resource consumption** | CPU spinning during rate-limit waits (#19466) and background scanning (#22187) | Performance optimization debt for long-running/background operations |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-26

## Today's Highlights

The Pi team and community closed a massive wave of issues and PRs following the weekend triage policy, with 18 PRs merged and 30+ issues resolved in 24 hours. Provider ecosystem expansion dominated: three new providers (Ark/Volcano Engine, CrofAI, Together AI) were added or progressed, alongside critical fixes for DeepSeek V4 reasoning content handling and Anthropic tool-call ID normalization. A notable process change landed with built-in `pi update` self-updating capability and formal documentation of the triage policy.

---

## Releases

*No releases in the past 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | **Custom Thinking Levels per Model** — Allow model-specific thinking levels in `models.json` and extension API | Addresses a core UX friction: `Shift+Tab` currently cycles unsupported levels, confusing users. Author volunteered to implement; awaiting maintainer approach approval. | 9 comments, 8 👍 — highest engagement of any open issue; clear demand for granular model configuration |
| [#3521](https://github.com/badlogic/pi-mono/issues/3521) | **Bash tool not reading from `settings.json`** (0.68.1) | Windows users blocked from shell execution despite valid configurations; regression in path resolution. | 9 comments; resolved with workaround guidance, but pattern of Windows shell detection issues persists |
| [#2023](https://github.com/badlogic/pi-mono/issues/2023) | **`pi.runWhenIdle()` for post-agent settlement** | Extensions need reliable hook after agent fully settles; current `sendUserMessage` workarounds race with agent state. Tagged `possibly-openclaw-clanker` — affects extension reliability. | 8 comments; active design discussion on semantics of "idle" |
| [#2203](https://github.com/badlogic/pi-mono/issues/2203) | **No default newline hotkey on Ubuntu (Ptyxis)** | Default terminal binding conflict blocks basic input on modern Ubuntu. | 4 comments; community-provided workaround (`alt+down` → `followUp`) needs documentation |
| [#3679](https://github.com/badlogic/pi-mono/issues/3679) | **Connection error troubleshooting — debug logging gaps** | Users cannot self-diagnose network/proxy issues; `NODE_DEBUG` insufficient for Pi's connection stack. | 4 comments; exposed need for better observability tooling |
| [#3254](https://github.com/badlogic/pi-mono/issues/3254) | **`/model` overwrites persistent default model** | Frequent model switching (intentional or accidental) pollutes `settings.json`; breaks workflow reproducibility. | 3 comments; backward-compatible `persistModelSelection` setting proposed |
| [#3728](https://github.com/badlogic/pi-mono/issues/3728) | **Fireworks rejects `cache_control` on tools via Anthropic compat** | Provider compatibility gap breaks prompt caching for tool-heavy workflows on Fireworks. | 2 comments; `supportsCacheControl` flag needed in provider metadata |
| [#3665](https://github.com/badlogic/pi-mono/issues/3665) | **Anthropic `normalizeToolCallId` returns empty string → 400 on replay** | Cross-provider sessions corrupt tool call IDs when switching to/from Anthropic; data loss on resume. | 2 comments; fix in progress (#3664) |
| [#3706](https://github.com/badlogic/pi-mono/issues/3706) | **Intermittent `spawn EBADF` for bash/custom tools** (0.70.2 regression) | File descriptor exhaustion breaks tool execution at scale; regression from 0.70.0. | 2 comments; rollback confirmed workaround, root cause under investigation |
| [#3715](https://github.com/badlogic/pi-mono/issues/3715) | **Local LLM streams terminate at 5 min — undici `bodyTimeout` hard cap** | Long-running local inference (vLLM + Qwen3 thinking) killed by default undici timeout; `retry.provider.timeoutMs` ignored. | 1 comment; architectural mismatch between retry timeout and HTTP client timeout |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#3725](https://github.com/badlogic/pi-mono/pull/3725) | **Docs: issue triage policy FAQ** | Formalizes weekend closure rules and PR approval gates in `CONTRIBUTING.md`; reduces maintainer friction. | Merged |
| [#3719](https://github.com/badlogic/pi-mono/pull/3719) | **Regenerate models: add `github-copilot/gpt-5.5`** | Keeps Copilot model catalog current; validates against live API. | Merged |
| [#3624](https://github.com/badlogic/pi-mono/pull/3624) | **Add Together AI provider (DeepSeek V4 support)** | Native Together integration with tool-capable model filtering; fills gap in hosted DeepSeek access. | Open, updated |
| [#3716](https://github.com/badlogic/pi-mono/pull/3716) | **Add CrofAI provider** | OpenAI-compatible aggregator for DeepSeek, Kimi, GLM, Gemma, MiniMax, Qwen; vision + reasoning support. | Merged |
| [#3709](https://github.com/badlogic/pi-mono/pull/3709) | **Add Ark (Volcano Engine/火山引擎) provider** | ByteDance cloud platform via Responses API; prefix cache support for Chinese market and DeepSeek hosting. | Merged |
| [#3680](https://github.com/badlogic/pi-mono/pull/3680) | **Built-in `pi update` self-update command** | Eliminates external update mechanisms; currently forces update if older (intentional until new check wired). | Merged |
| [#3691](https://github.com/badlogic/pi-mono/pull/3691) | **Preserve thinking blocks for cross-model reasoning calls** | Fixes DeepSeek V4 Pro / R1 `reasoning_content` echo requirement; prevents thinking signature loss on model switch. | Merged |
| [#3690](https://github.com/badlogic/pi-mono/pull/3690) | **Clear tree navigation busy state on cancel** | Fixes `/tree` cancellation leaving Pi in "compacting" limbo; adds regression test for extension-triggered cancel. | Merged |
| [#3664](https://github.com/badlogic/pi-mono/pull/3664) | **Fallback for empty Anthropic `tool_use.id`** | Guarantees valid `^[a-zA-Z0-9_-]+$` pattern; resolves 400 errors on cross-provider session replay. | Merged |
| [#3714](https://github.com/badlogic/pi-mono/pull/3714) | **Parallelize thread message deletion** | `Promise.allSettled` replaces sequential loop; 10-message cleanup ~3x faster. | Merged |

---

## Feature Request Trends

1. **Provider ecosystem expansion** — Strongest signal: Ark, CrofAI, Together, and ongoing Zenmux/DeepSeek fixes show community prioritizing broad model access over single-provider depth. Requests increasingly include Chinese cloud platforms (Volcano Engine) and regional aggregators.

2. **Model-specific configuration granularity** — #3208 (thinking levels), #3254 (persistent model selection), and #3662 (DeepSeek `xhigh` clamping) converge on demand for per-model behavior overrides rather than global settings.

3. **Extension API lifecycle hooks** — #2023 (`runWhenIdle`), #3721 (resume without message), #3726 (`ctx.shutdown` exit codes) indicate extensions maturing beyond simple tools toward full agent orchestration.

4. **Session/tree UX improvements** — #3688/#3690 (cancellation state), #3695 (dynamic branch summaries), #3686 (`setSessionName` title sync) show tree navigation becoming a primary workflow, with polish gaps emerging.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Cross-provider session fragility** | High | #3665, #3691, #3727, #3728 — tool IDs, reasoning content, and cache control break when switching providers mid-session; normalization layer insufficient |
| **Timeout / resource limits for local/long-running inference** | High | #3715 (5 min undici cap), #3706 (EBADF spawn failures) — local/self-hosted workflows hit invisible ceilings |
| **Windows shell/tooling regressions** | Medium-High | #3521, #3676 (terminal width crashes) — Windows remains second-class for path resolution and TUI rendering |
| **Extension API asymmetries** | Medium | #3686 (title refresh), #2023 (idle hooks), #3700 (autocomplete context) — built-in commands have capabilities extensions cannot replicate |
| **Observability and debugging** | Medium | #3679 — network/proxy issues require `NODE_DEBUG` workarounds; no structured logging or connection diagnostics |
| **Model catalog freshness** | Medium | #3720, #3687, #3719 — manual regeneration cycle creates lag for new models; community filing issues/PRs to trigger updates |

---

*Digest compiled from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity 2026-04-25 → 2026-04-26.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-26

## 1. Today's Highlights

The Qwen Code team is actively shipping authentication and connectivity fixes while expanding platform support. Four PRs merged in the last 24h resolve critical API key persistence bugs, telemetry documentation gaps, and rewind test regressions. Meanwhile, macOS desktop app installation and OpenRouter OAuth integration are advancing through open PRs, signaling broader ecosystem ambitions.

---

## 2. Releases

**No releases in the last 24 hours.** The latest stable version remains **v0.14.3** (build `55bcec70d`).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3277](https://github.com/QwenLM/qwen-code/issues/3277) | **MCP Client Limited to 2 Connections — Breaking Production Multi-Node Infrastructure** | Production-critical: hardcoded connection limit blocks enterprise deployments with multiple MCP servers. Author labels severity as "CRITICAL" with data loss risk. | 7 comments, no maintainer response yet; enterprise user escalating |
| [#643](https://github.com/QwenLM/qwen-code/issues/643) | **Xcode cannot use qwen3-coder-plus** | P1 priority, persistent since Sept 2025. `[] is too short - 'tools'` error suggests schema validation mismatch with Xcode's LSP client. | 7 comments, 👍1; affects Apple IDE adoption |
| [#528](https://github.com/QwenLM/qwen-code/issues/528) | **Parameter "todos" must be an array** | Recurring tool-calling schema issue with vLLM-deployed Qwen3-coder-flash; indicates compatibility gap between local inference and Qwen Code's OpenAI adapter. | 7 comments, 👍2; local deployment pain point |
| [#1281](https://github.com/QwenLM/qwen-code/issues/1281) | **Ollama-deployed model returns JSON-format responses** | Model outputs raw JSON instead of natural language, breaking UX. Suggests prompt template or stop-sequence misconfiguration with Ollama backend. | 6 comments; Ollama compatibility recurring theme |
| [#2466](https://github.com/QwenLM/qwen-code/issues/2466) | **Adding branching for MCP** | Feature request for MCP server branching/conditional activation — complex real-world MCP setups need this. | 5 comments; Arch Linux + LM Studio user |
| [#1105](https://github.com/QwenLM/qwen-code/issues/1105) | **Missing Accept Diff/Close Diff Editor commands in VS Code** | Core VS Code companion functionality broken; diff workflow is central to AI-assisted coding. | 5 comments, 👍1; IDE integration quality concern |
| [#548](https://github.com/QwenLM/qwen-code/issues/548) | **Suspected gemini-cli code copy — identical MCP bug** | Community suspicion of upstream borrowing without attribution; same MCP error patterns across both CLIs. | 5 comments; trust/transparency issue |
| [#1316](https://github.com/QwenLM/qwen-code/issues/1316) | **Init file modifications clear conversation history without refreshing memory** | State management bug: memory stale after init file updates, requiring full restart. Breaks iterative configuration workflows. | 4 comments |
| [#1280](https://github.com/QwenLM/qwen-code/issues/1280) | **qwen-code cannot use local Ollama-deployed qwen3-coder** | Another Ollama compatibility failure; pattern suggests systematic gaps in local model discovery/auth. | 4 comments |
| [#659](https://github.com/QwenLM/qwen-code/issues/659) | **Excessive conversation lines** | Poor formatting in multi-turn dialogue; UX polish issue with high visibility. | 4 comments; P1 priority |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3622](https://github.com/QwenLM/qwen-code/pull/3622) | **Fix rewind E2E test assertion after `isRealUserTurn` fix** | Corrects off-by-one test that was passing due to bug; `/rewind` now properly excluded from user turn list. | **Merged** |
| [#3498](https://github.com/QwenLM/qwen-code/pull/3498) | **Clarify Alibaba Cloud console entry for telemetry docs** | Adds direct ARMS console links (China + international); resolves [#3461](https://github.com/QwenLM/qwen-code/issues/3461). | **Merged** |
| [#3495](https://github.com/QwenLM/qwen-code/pull/3495) | **Preserve settings-sourced API key when registry model envKey absent** | Fixes [#3417](https://github.com/QwenLM/qwen-code/issues/3417): restart was clearing API key resolved from `settings.json`. Critical auth reliability fix. | **Merged** |
| [#3507](https://github.com/QwenLM/qwen-code/pull/3507) | **Sticky todo panel in CLI app layouts** | Addresses [#2987](https://github.com/QwenLM/qwen-code/issues/2987): persistent task visibility without scrollback. UX enhancement for long sessions. | Open |
| [#3318](https://github.com/QwenLM/qwen-code/pull/3318) | **API preconnect to reduce first-call latency** | Fire-and-forget HEAD request warms TCP+TLS; skips under proxy conditions. 100-200ms improvement. Closes [#3223](https://github.com/QwenLM/qwen-code/issues/3223). | Open |
| [#3576](https://github.com/QwenLM/qwen-code/pull/3576) | **OpenRouter OAuth + model catalog management** | Browser-based auth, auto key storage, curated model subset. Expands provider ecosystem significantly. | Open |
| [#3609](https://github.com/QwenLM/qwen-code/pull/3609) | **Fix slash command completion after message submit** | Root cause: zero-width space (`\u200B`) in contentEditable broke `/` trigger detection. Refactors magic string to constant. | Open |
| [#3627](https://github.com/QwenLM/qwen-code/pull/3627) | **macOS desktop app installer (revised)** | Replaces [#3564](https://github.com/QwenLM/qwen-code/pull/3564); creates `.app` bundle for Spotlight/Launchpad launch. Review feedback incorporated. | Open |
| [#3624](https://github.com/QwenLM/qwen-code/pull/3624) | **Add API Key option to `qwen auth` interactive menu** | Aligns CLI with `/auth` dialog; adds Alibaba Cloud Standard and Custom API Key sub-paths. Fixes [#3413](https://github.com/QwenLM/qwen-code/issues/3413). | Open |
| [#3623](https://github.com/QwenLM/qwen-code/pull/3623) | **Recognize OpenAI-compatible providers in `qwen auth status`** | Distinguishes Coding Plan vs. generic OpenAI providers (Xunfei, DeepSeek, Ollama). Eliminates misleading "Incomplete" status. | Open |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **MCP ecosystem maturity** | [#3277](https://github.com/QwenLM/qwen-code/issues/3277) (connection limits), [#2466](https://github.com/QwenLM/qwen-code/issues/2466) (branching), [#3147](https://github.com/QwenLM/qwen-code/issues/3147) (connection indicators), [#548](https://github.com/QwenLM/qwen-code/issues/548) (gemini-cli parity concerns) | MCP is becoming production-critical; users need enterprise-grade connection management, observability, and server lifecycle controls |
| **Local/self-hosted model fidelity** | [#1281](https://github.com/QwenLM/qwen-code/issues/1281), [#1280](https://github.com/QwenLM/qwen-code/issues/1280), [#528](https://github.com/QwenLM/qwen-code/issues/528) | Ollama/vLLM compatibility gaps are systematic; need dedicated local inference test matrix |
| **Session state durability** | [#3190](https://github.com/QwenLM/qwen-code/pull/3190) (`/chat` save/resume), [#3180](https://github.com/QwenLM/qwen-code/issues/3180) (restore problem), [#1316](https://github.com/QwenLM/qwen-code/issues/1316) (init file state) | Users expect IDE-grade session management; current state loss on config change is unacceptable for long tasks |
| **Background agent visibility** | [#3488](https://github.com/QwenLM/qwen-code/pull/3488), [#3471](https://github.com/QwenLM/qwen-code/pull/3471) | Model-facing controls landed; user-facing UI for monitoring/intervention now in progress |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Root Cause / Context |
|------------|-----------|-------------------|
| **API key persistence failures** | High | [#3417](https://github.com/QwenLM/qwen-code/issues/3417), [#3413](https://github.com/QwenLM/qwen-code/issues/3413) — settings vs. env var resolution order; fixed in [#3495](https://github.com/QwenLM/qwen-code/pull/3495) and [#3624](https://github.com/QwenLM/qwen-code/pull/3624) |
| **Ollama/local model incompatibility** | High | [#1280](https://github.com/QwenLM/qwen-code/issues/1280), [#1281](https://github.com/QwenLM/qwen-code/issues/1281), [#528](https://github.com/QwenLM/qwen-code/issues/528) — schema mismatches, JSON mode leaks, tool call format differences |
| **MCP connection reliability** | Medium-High | [#3277](https://github.com/QwenLM/qwen-code/issues/3277) (hard limit), [#3147](https://github.com/QwenLM/qwen-code/issues/3147) (false disconnected status), [#548](https://github.com/QwenLM/qwen-code/issues/548) (error parity) |
| **VS Code companion polish** | Medium | [#1105](https://github.com/QwenLM/qwen-code/issues/1105) (missing commands), [#512](https://github.com/QwenLM/qwen-code/issues/512) (transmission limits), [#3609](https://github.com/QwenLM/qwen-code/pull/3609) (completion bugs) |
| **Context/code staleness** | Medium | [#3182](https://github.com/QwenLM/qwen-code/issues/3182) — AI reads modified code as pre-modification; `/init` single-use limitation |
| **Third-party model degradation** | Emerging | [#3464](https://github.com/QwenLM/qwen-code/issues/3464) — GLM-5/5.1 tool calling failures vs. qwen3.6-plus; suggests system prompt or tool schema coupling to Qwen models |

---

*Digest compiled from QwenLM/qwen-code GitHub activity 2026-04-25. For corrections or additions, open an issue or discussion.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*