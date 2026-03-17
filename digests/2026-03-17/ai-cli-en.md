# AI CLI Tools Community Digest 2026-03-17

> Generated: 2026-03-17 00:09 UTC | Tools covered: 7

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

# AI CLI Tools Cross-Comparison Report — 2026-03-17

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a multi-polar competitive arena with seven actively developed tools, each backed by major AI labs or well-funded startups. March 2026 reveals convergent pressure on **terminal reliability**, **multi-agent orchestration**, and **enterprise readiness**—yet divergent architectural bets, with OpenAI and Gemini pushing realtime infrastructure while Anthropic and OpenCode emphasize permission systems and safety. Release velocity remains high across the board, with 6+ versioned releases in the 24-hour window, though community frustration with **Windows parity**, **opaque billing**, and **context window reliability** is near-universal.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Notes |
|------|:-----------:|:---------:|:--------:|---------------|
| **Claude Code** | 50 | 9 | — | No release; focus on 1M context rollout support |
| **OpenAI Codex** | ~45 | 12 | **3** | rust-v0.115.0 (stable), v0.116.0-alpha.1, 3 alpha builds |
| **Gemini CLI** | ~35 | 10 | **2** | v0.33.2 (stable), v0.34.0-preview.4 |
| **GitHub Copilot CLI** | ~25 | 2 | **4** | v1.0.6 through v1.0.6-2 (rapid patches) |
| **Kimi Code CLI** | 7 | 7 | — | No release; web UI and MCP focus |
| **OpenCode** | ~50 | 10 | **1** | v1.2.27 (Effect architecture migration) |
| **Qwen Code** | ~25 | 10 | **2** | v0.12.5, v0.12.4 (bundled `/review` skill) |

**Key observation**: OpenAI and GitHub demonstrate highest release cadence with infrastructure-heavy shipping; Claude Code's release pause coincides with support load from 1M context rollout.

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence |
|-------------|-------|-----------------|
| **Remote/SSH Development** | OpenAI Codex (#10450), OpenCode (#5608, #8549), Gemini CLI (`offload` skill) | 363 👍 on Codex remote dev; OpenCode air-gapped Web UI request; Gemini remote workstation parallelization |
| **Subagent/Multi-Agent Reliability** | Gemini CLI (#22266, #22093, #22323), OpenCode (#17855, #8554), Claude Code (#18950), Qwen Code (#2124, #2409) | "Ghost" context drops, silent MAX_TURNS failures, permission inheritance gaps across all four |
| **TUI/Terminal Stability** | Claude Code (#1913, #18299), Copilot CLI (#239), OpenCode (#17796), Kimi CLI (#1452) | Scroll-jumping, flickering, focus loss—Ink/TUI framework stress universal |
| **Windows Parity** | Claude Code (#29583, #11380), OpenAI Codex (#12764, #14079), Qwen Code (#2395, #2423), OpenCode (#16314, #17117) | Auth regressions, path handling, encoding, Defender false positives—consistent second-class treatment |
| **Token/Billing Transparency** | Claude Code (#34410, #34145), OpenAI Codex (#14593), OpenCode (#8030), Qwen Code (#2426) | Unexplained quota consumption, "burning tokens" panic, billing miscategorization |
| **LSP/IDE Intelligence** | OpenAI Codex (#8745), OpenCode (2.0 beta LSP server), Qwen Code (#984, #1094) | Auto-detect diagnostics, container IDE connectivity, competitive necessity vs. Cursor |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi CLI | OpenCode | Qwen Code |
|-----------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:--------:|:---------:|
| **Core Bet** | Safety-first permissions; 1M context | Realtime voice + unified exec-server | Agent Knowledge Layer (persistent memory) | GitHub-native integration; dynamic tool discovery | Web-first UI; third-party interoperability | Effect-based functional architecture; subagent visibility | Local model support; bundled skills |
| **Target User** | Enterprise teams with compliance needs | Full-stack developers, voice-heavy workflows | Long-horizon automation, research tasks | Existing GitHub Copilot subscribers | Multi-tool workflows, China-market developers | TypeScript/functional programming advocates | Privacy-conscious, local-LLM users |
| **Technical Signature** | Ink TUI, granular permission prompts | Rust core, WASM sandbox, websocket streaming | Multi-layered memory, tool isolation per subagent | Tree-sitter WASM, Claude model dynamic tools | FastAPI web UI, ACP protocol, OAuth flexibility | Effect-TS, branded types, LSP architecture | Symlinked skills, OpenRouter compatibility, LM Studio integration |
| **Maturity Signal** | Support load from scale; regression backlog | Infrastructure depth; Windows fragility | Architectural ambition; Plan Mode instability | Rapid patching; memory leak fixes | Responsive triage; smaller issue volume | Major refactor ongoing; 2.0 beta | Active local-LLM community; container gaps |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **High Momentum + High Load** | Claude Code, OpenAI Codex, OpenCode | Largest issue volumes (45–50/day) indicate scale stress; rapid PR turnaround shows engineering investment. OpenCode's 188-comment billing issue resolution demonstrates community pressure effectiveness. |
| **High Velocity, Narrower Scope** | Gemini CLI, Copilot CLI, Qwen Code | 10–12 PRs/day with focused architectural pushes (AKL, realtime v2, local models). Smaller absolute community but disciplined shipping. |
| **Emerging/Selective** | Kimi CLI | Lowest issue volume (7), but same-day resolution on #1443 suggests strong triage. Web UI and MCP bets indicate differentiation strategy rather than feature parity chase. |

**Maturity indicators**: 
- **Most stable release practice**: GitHub Copilot CLI (4 patches in 24h for critical fixes)
- **Highest architectural ambition**: Gemini CLI (AKL, subagent isolation) and OpenCode (Effect migration)
- **Greatest scale stress**: Claude Code (support tickets from 1M rollout) and OpenAI Codex (Windows auth crisis #12764)

---

## 6. Trend Signals

| Signal | Evidence | Implication for Developers |
|--------|----------|---------------------------|
| **Context window marketing vs. reality gap** | Claude Code #34685 (degradation at 40%), #34958 (entitlement bugs); OpenCode #12338 (200K hard limit despite 1M UI) | Treat advertised limits as theoretical; plan for 50% effective capacity; demand benchmarks before architectural bets |
| **Multi-agent orchestration as competitive battleground** | Gemini CLI's 3-PR subagent isolation, OpenCode's nested session visibility, Claude Code's skills permission inheritance | Expect subagent reliability to improve rapidly; current generation still requires manual supervision |
| **Terminal TUI frameworks hitting limits** | Universal scroll/flicker issues across Ink (Claude), custom renderers (Copilot), VS Code integration (all) | Evaluate web-based alternatives (Kimi, OpenCode Web UI) for long-session workflows; terminal may become secondary interface |
| **Local/self-hosted model demand institutionalizing** | Qwen #2385 (LM Studio/Ollama PR), Claude Code FreeBSD push (#30640), OpenCode air-gapped requests | Privacy and cost control driving architectural divergence; cloud-only tools face churn risk |
| **Permission fatigue driving UX redesign** | Claude Code #18950, Gemini #22093, OpenCode #16331 | "Always allow" and granular inheritance becoming table stakes; safety-first tools risk losing power users |
| **Billing transparency as trust infrastructure** | OpenCode #8030 resolution, Codex #14593 alarm, Qwen #2426 quota reduction | Enterprise adoption requires auditable token accounting; tools without granular visibility face procurement blocks |

---

*Report compiled from 300+ issues, 60+ PRs, and 11 releases across 7 tools on 2026-03-17.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-17*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Functionality | Discussion Highlights | Status |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Addresses universal document formatting pain point affecting every Claude output; zero upvotes suggest early-stage visibility despite clear utility | 🟡 Open |
| 2 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skills for evaluating Skill quality across 5 dimensions and security auditing | Long-running PR (Nov 2025) indicates sustained interest in Skill governance tooling; positions Claude to audit its own Skills | 🟡 Open |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Improved clarity and actionability for frontend design guidance | Focus on "single-conversation executability" reflects community push for more deterministic, less verbose Skill behavior | 🟡 Open |
| 4 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | Integration with SAP's open-source tabular foundation model for enterprise predictive analytics | Bridges Claude Code into SAP enterprise ecosystems; signals demand for vertical-specific AI Skills | 🟡 Open |
| 5 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument text creation, template filling, and ODT-to-HTML parsing | Addresses open-standard document interoperability gap; targets LibreOffice/enterprise workflows | 🟡 Open |
| 6 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | AI-powered image (Imagen 3.0) and video (Veo 3.1) generation via Masonry CLI | Multi-modal generation demand; active maintenance through mid-March 2026 | 🟡 Open |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 10-step systematic audit for orphaned code, unused files, documentation gaps, infrastructure bloat | Technical debt management at scale; produces `CODEBASE-STATUS.md` as single source of truth | 🟡 Open |
| 8 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Persistent memory system maintaining context across Claude conversations | Addresses core platform limitation; `proactive_context` pattern for memory surfacing | 🟡 Open |

---

## 2. Community Demand Trends (From Issues Analysis)

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Enterprise Integration** | SAP-RPT-1-OSS (#181), Google Workspace (#299), Bedrock compatibility (#29) | Strong pull for Claude Skills to bridge into existing enterprise stacks |
| **Skill Quality & Governance** | skill-quality-analyzer (#83), skill-creator best practices (#202), agent-governance proposal (#412) | Community maturation: meta-Skills for validating, securing, and governing other Skills |
| **MCP Interoperability** | "Expose Skills as MCPs" (#16), mcp-builder enhancement requests (#369) | Demand for Skills to participate in broader AI tool ecosystem via standardized protocols |
| **Platform Reliability** | Skills disappearing (#62), upload failures (#406, #403), API errors (#389, #556) | Critical infrastructure gaps blocking adoption at scale |
| **Trust & Security** | Namespace impersonation vulnerability (#492) | Community recognition of trust boundary risks in distributed Skill ecosystem |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **avoid-ai-writing** | [#535](https://github.com/anthropics/skills/pull/535) | Addresses tangible market need (AI detection/rewriting); complete 43-entry replacement table; active March 2026 updates |
| **Buildr (Telegram bridge)** | [#419](https://github.com/anthropics/skills/pull/419) | Single-command setup; mobile control of Claude Code sessions; narrow, well-scoped surface |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Natural language payment interface; four concrete use cases demonstrated; crypto-native community interest |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/535) | Directly addresses 25% community health score; closes tracked issue #452; low-risk docs PR |
| **YAML validation fixes** | [#359](https://github.com/anthropics/skills/pull/359), [#361](https://github.com/anthropics/skills/pull/361), [#362](https://github.com/anthropics/skills/pull/362) | Cluster of parser robustness PRs solving silent failures; enterprise-grade reliability need |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for Claude Skills to function as reliable, auditable infrastructure within enterprise workflows—requiring persistent memory, deterministic output quality, and seamless integration with existing business systems, while the ecosystem simultaneously matures toward self-governing meta-Skills that validate, secure, and optimize other Skills.**

---

---

# Claude Code Community Digest — 2026-03-17

---

## 1. Today's Highlights

Community activity surged around **terminal UI regressions** and **billing/quota anomalies**, with multiple high-engagement issues reporting scroll-jumping and unexpected rate limit consumption. Meanwhile, the **1M context window rollout for Opus 4.6** continues generating support tickets around plan eligibility inconsistencies. No new releases shipped in the last 24 hours.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **#34229** [Phone verification bug](https://github.com/anthropics/claude-code/issues/34229) | 215 comments, 275 👍 — appears to be a widespread account access blocker affecting new signups | Frustrated users reporting verification loops; marked `invalid` but discussion continues |
| **#1913** [Terminal flickering](https://github.com/anthropics/claude-code/issues/1913) | Long-running TUI stability issue (182 comments, 310 👍) — impacts daily usability | Duplicate pile-on suggests fix hasn't landed; users sharing terminal-specific workarounds |
| **#11380** [Permission prompts loop on Windows](https://github.com/anthropics/claude-code/issues/11380) | Closed but representative of core Windows UX friction — "always allow" ignored | 68 comments show this was a major friction point; fix verification ongoing |
| **#29583** [Cowork fails on secondary Windows drives](https://github.com/anthropics/claude-code/issues/29583) | Blocks Windows developers with non-standard directory structures | 56 comments, active reproduction attempts; no maintainer response yet |
| **#11447** [Tab indentation breaks file editing](https://github.com/anthropics/claude-code/issues/11447) | Core editing capability failure for legacy codebases using tabs | 36 comments, reproducible — affects enterprise users with style guide constraints |
| **#30640** [FreeBSD native installer failure](https://github.com/anthropics/claude-code/issues/30640) | Platform expansion request; bot closure without discussion sparked reopening | 26 comments, niche but vocal BSD community pushing for first-class support |
| **#18299** [Scroll position loss on macOS](https://github.com/anthropics/claude-code/issues/18299) | Recent regression breaking terminal UX for long outputs | 25 comments, regression label applied — likely related to #33814 |
| **#34685** [Opus 4.6 1M degradation at 40% context](https://github.com/anthropics/claude-code/issues/34685) | Model quality concern — self-reported performance cliff before 50% | 9 comments, only 1 👍 but strategically important for long-context marketing claims |
| **#34958** [1M context unavailable on Max 5x (WSL)](https://github.com/anthropics/claude-code/issues/34958) | Plan entitlement bug — same account, different machines, different capabilities | 5 comments, cross-platform account sync issue |
| **#18950** [Skills don't inherit user permissions](https://github.com/anthropics/claude-code/issues/18950) | Breaks plugin/skill automation promise — every bash command re-prompts | 29 👍, security-model design tension between safety and DX |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| **#35106** [Settings README typos](https://github.com/anthropics/claude-code/pull/35106) | Minor docs cleanup in examples and agent prompts | Open |
| **#35039** [Fix ralph-loop unbound variable](https://github.com/anthropics/claude-code/pull/35039) | Removes `set -u` to handle empty `PROMPT_PARTS` array — fixes `/ralph-loop` crash | Open |
| **#30521** [GPG pinentry-guard plugin](https://github.com/anthropics/claude-code/pull/30521) | PreToolUse hook preventing broken GPG prompts during git commits — addresses #30539 | Open |
| **#34951** [Multi-platform /code-review](https://github.com/anthropics/claude-code/pull/34951) | Auto-detects GitHub/GitLab with self-hosted GitLab support — closes #26932 | Open |
| **#34798** [Terminal scroll-to-top RCA](https://github.com/anthropics/claude-code/pull/34798) | Root cause analysis for Ink `cursorUp`+`eraseLines` bug; implements Ctrl+6 freeze toggle | **Closed** — diagnostic approach, not merged |
| **#34930** [Community Plugins docs](https://github.com/anthropics/claude-code/pull/34930) | Adds external plugin marketplace links (Bouncer, etc.) to README | Open |
| **#34789** [Windows Chrome extension bridge fix](https://github.com/anthropics/claude-code/pull/34789) | PowerShell patch for `_Oz()` bridge URL resolver failure on Windows | **Closed** — workaround, not upstream fix |
| **#34862** / **#34865** [TEST-3001/3002 README comments](https://github.com/anthropics/claude-code/pull/34862) | OpsPilot automation test PRs — HTML comments in README | Open (likely to be closed) |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **TUI/Terminal stability** | #1913, #18299, #33814, #34798, #29931 | 🔥 Critical — multiple scroll/focus regressions |
| **Permission system refinements** | #18950, #35096, #9354 | High — skills/plugins need granular inheritance |
| **Cross-platform parity** | #29583, #30640, #30640, #34958 | Moderate — Windows and BSD gaps persist |
| **Long-context reliability** | #34685, #34958 | Emerging — 1M window marketing vs. reality |
| **Billing/quota transparency** | #34410, #34145, #33094 | High — trust erosion from unexplained consumption |
| **Session management UX** | #33886, #17784, #35100 | Moderate — accidental exits, multi-window identification |

---

## 6. Developer Pain Points

**1. Terminal UX Regressions**
Multiple confirmed regressions around scroll position, flickering, and focus management (#18299, #33814, #1913). The Ink-based TUI appears fragile across terminal emulators; community has resorted to freeze-toggle workarounds (#34798).

**2. Permission Prompt Fatigue**
"Always allow" settings inconsistently honored, especially in skills/subagents (#18950, #11380). Creates friction for automation workflows that depend on Claude Code's agentic capabilities.

**3. Opaque Quota Accounting**
Sudden exhaustion of Max 5x/20x plans (#34410, #33094) with no granular usage visibility. Token counting algorithm distrusted (#34145) — users cannot debug spend.

**4. Cross-Platform Feature Gaps**
Windows Cowork limitations (#29583), FreeBSD installer gaps (#30640), WSL-specific entitlement bugs (#34958). macOS remains the reference platform; others are second-class.

**5. Context Window Reality Gap**
1M token availability inconsistent across accounts/machines (#34958), with reported quality degradation before 50% utilization (#34685). Marketing promise not yet matched by operational reliability.

---

*Digest compiled from 50 issues and 9 PRs updated 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-17

---

## 1. Today's Highlights

The **rust-v0.115.0** stable release brings full-resolution image inspection capabilities to supported models via `view_image` and `codex.emitImage()`, addressing precision visual tasks. Meanwhile, the team is actively shipping **realtime v2 infrastructure** (4 stacked PRs) and **unified exec-server architecture** to improve reliability and cross-platform sandboxing. Community friction remains concentrated on **Windows path handling**, **token consumption rates**, and **auth/session stability** across CLI and desktop app surfaces.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[rust-v0.115.0](https://github.com/openai/codex/releases/tag/rust-v0.115.0)** | Stable | Full-resolution image inspection via `view_image` and `codex.emitImage(..., detail: "original")`; `js_repl` now exposes `codex.cwd` and `codex.homeDir` with saved tool state |
| **[rust-v0.116.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.1)** | Alpha | Early preview build |
| rust-v0.115.0-alpha.25–27 | Alpha | Iterative pre-release builds |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| **[#12764](https://github.com/openai/codex/issues/12764)** — 401 Unauthorized on Windows CLI | **Critical auth regression** blocking Windows CLI users entirely; 74 comments indicate widespread impact with cf-ray tracing suggesting CDN/edge auth issues | Frustrated; users reporting intermittent fixes via re-auth that don't stick |
| **[#14593](https://github.com/openai/codex/issues/14593)** — VS Code extension burning tokens fast | **Cost-critical** for Business tier users; 66 comments, 42 upvotes suggests regression in latest extension (26.311.21342) | High alarm; users monitoring token dashboards and rolling back versions |
| **[#10450](https://github.com/openai/codex/issues/10450)** — Remote Development in Codex Desktop App | **Top feature gap** vs. VS Code workflow; 363 upvotes, 52 comments shows massive demand | Strongly positive engagement; users want SSH/remote container parity |
| **[#8745](https://github.com/openai/codex/issues/8745)** — LSP integration (auto-detect + auto-install) for CLI | **Quality-of-code improvement**; 181 upvotes, 36 comments — would reduce hallucinated diagnostics | Enthusiastic; seen as path to match Cursor/Windsurf intelligence |
| **[#9224](https://github.com/openai/codex/issues/9224)** — Codex Remote Control (phone → desktop) | **Workflow expansion**; 154 upvotes, 18 comments — mobile-to-desktop bridge | Creative workarounds shared; users want native ChatGPT app integration |
| **[#9115](https://github.com/openai/codex/issues/9115)** — Zellij terminal incompatibility | **Terminal ecosystem fragmentation**; 29 upvotes, 20 comments — TUI rendering broken in popular multiplexer | Niche but vocal; terminal power users blocked |
| **[#9634](https://github.com/openai/codex/issues/9634)** — Refresh token already used error | **Session reliability**; 29 comments — auth token rotation failing on macOS | Confusion vs. expected behavior; logout/login cycle disruptive |
| **[#7291](https://github.com/openai/codex/issues/7291)** — VS Code extension failed to revert changes | **Data safety**; 37 comments — undo/redo reliability concerns in production workflows | Anxiety; users manually git-committing before Codex sessions |
| **[#14694](https://github.com/openai/codex/issues/14694)** — `apply_patch` fails with symlinked `~/.codex` | **Sandbox regression** from memories feature; 9 comments — breaks common Linux partition setups | Technical debugging; root cause identified, awaiting fix |
| **[#2020](https://github.com/openai/codex/issues/2020)** — Light-background terminal support | **Accessibility**; 44 upvotes, 16 comments — hard-coded dark colors render UI invisible | Long-standing; community themes workarounds insufficient |

---

## 4. Key PR Progress

| PR | Feature/Fix | Technical Significance |
|----|-------------|------------------------|
| **[#14838](https://github.com/openai/codex/pull/14838)** — Fix websocket warming hangs | Eliminates 5-minute first-turn stalls in app-server; critical path for UX reliability |
| **[#14830](https://github.com/openai/codex/pull/14830)** — Align realtime v2 wire and runtime | Foundation for next-gen voice/chat streaming; splits websocket method routing |
| **[#14827](https://github.com/openai/codex/pull/14827)** + **[#14829](https://github.com/openai/codex/pull/14829)** — Realtime stack (3/4, 4/4) | Self-interruption gating + thread context injection; improves voice continuity |
| **[#14846](https://github.com/openai/codex/pull/14846)** — Framed IPC for elevated runner | Windows sandbox hardening; replaces one-shot elevation with persistent IPC |
| **[#14862](https://github.com/openai/codex/pull/14862)** + **[#14863](https://github.com/openai/codex/pull/14863)** — Exec-server transport | Unified process management architecture; enables SSH-backed execution future |
| **[#14525](https://github.com/openai/codex/pull/14525)** — Granular builtin tool enablement | User-facing `config.tools` surface; per-thread tool control for safety/policy |
| **[#14771](https://github.com/openai/codex/pull/14771)** — Approved dynamic tool arguments steering | Allows approval-with-modification for tool calls; reduces reject-respawn loops |
| **[#14855](https://github.com/openai/codex/pull/14855)** — Shared access group for macOS keychain | Security improvement + multi-app credential sharing; migration path for existing items |
| **[#14446](https://github.com/openai/codex/pull/14446)** — Python SDK public API and examples | Developer experience; thins wrapper layer, returns canonical app-server models |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Remote/SSH development** | #10450 (363 👍), #9224 (154 👍) | Very high — desktop app perceived as local-only limitation |
| **LSP/IDE intelligence** | #8745 (181 👍), #8745 comments | High — competitive necessity vs. Cursor |
| **Mobile companion control** | #9224, discussion #9200 | Emerging — phone-to-desktop bridge workflows |
| **Token cost transparency/control** | #14593 and related comments | Urgent — trust erosion from "burning tokens" |
| **Multi-agent orchestration** | #13947 (collab subagents), #14841, #14288 | Active — lifecycle management still maturing |

---

## 6. Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Windows as second-class** | Path rendering (#14079), auth (#12764), WSL edge cases (#14552), hotkey conflicts (#14549) | **Very high** — disproportionate issue volume |
| **Auth/session fragility** | 401 errors, refresh token exhaustion (#9634), MCP OAuth gaps (#13891) | High — breaks flow unpredictably |
| **Undo/revert reliability** | #3567, #7291, #12456 — changes not revertible in extension | High — data safety anxiety |
| **Sandbox/tool execution** | Symlink failures (#14694), `sudo` hangs (#6108), bubblewrap errors (#12572) | Medium-high — Linux-specific complexity |
| **Compact/stream failures** | #13784, #14063, #14559, #13815 — "stream disconnected before completion" | Medium — infrastructure stability signal |
| **Token economics opacity** | #14593 and variants — cost surprises vs. expected usage | Rising — business/team tier friction |

---

*Digest compiled from github.com/openai/codex activity 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-17

## Today's Highlights

The Gemini CLI team shipped two patch releases (v0.33.2 and v0.34.0-preview.4) addressing installation detection issues, while the community is actively debating subagent reliability—particularly "ghost" context drops after `/plan` approval and silent MAX_TURNS failures. A major architectural push for **Agent Knowledge Layer (AKL)** and **subagent tool isolation** landed in PRs, signaling Google's focus on persistent memory and safer multi-agent orchestration.

---

## Releases

| Version | Key Change |
|---------|-----------|
| **v0.34.0-preview.4** | Cherry-picked patch for release branch; fixes version detection edge case ([#22719](https://github.com/google-gemini/gemini-cli/pull/22719)) |
| **v0.33.2** | Same fix backported to stable channel; resolves pnpm auto-update misdetection ([#22720](https://github.com/google-gemini/gemini-cli/pull/22720)) |

Both releases address the long-standing issue where pnpm installations were incorrectly flagged as npm, breaking auto-updates.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#22266](https://github.com/google-gemini/gemini-cli/issues/22266) — Agent silently drops context after `/plan` approval | Critical workflow blocker: users approve plans but execution never starts; "ghost" state | 6 comments, marked `workstream-rollup` for urgent triage |
| [#18023](https://github.com/google-gemini/gemini-cli/issues/18023) — pnpm auto-update broken | Affects package-manager-diverse workflows; now has active PR fix | 8 comments, cross-referenced with new PR #22748 |
| [#22631](https://github.com/google-gemini/gemini-cli/issues/22631) — "Too Many Requests" API loops | Rate-limiting UX failure: CLI spins indefinitely instead of backing off | 5 comments, 3 👍, needs retry logic |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Skills/sub-agents underutilized | Core agent orchestration gap: custom skills ignored without explicit prompting | 4 comments, anecdotal evidence of prompt engineering burden |
| [#22507](https://github.com/google-gemini/gemini-cli/issues/22507) — `/plan` mode perpetually stuck | Related to #22266; plan generation succeeds but execution hangs | 3 comments, workaround: manual plan-then-exec flow |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents run without permission since v0.33.0 | Security/expectation mismatch: disabled agents still invoke | 1 comment, flagged `priority/p1` |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — MAX_TURNS reported as GOAL success | Silent failure mode masks subagent interruption | 1 comment, 1 👍, affects eval reliability |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland | Linux display protocol incompatibility blocks headless workflows | 3 comments, 1 👍 |
| [#22028](https://github.com/google-gemini/gemini-cli/issues/22028) — CLI scrolls to top on click | VS Code terminal integration friction | 3 comments, 1 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent ignores `settings.json` | Configuration override system broken for subagents | 2 comments |

---

## Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|--------------|
| [#22711](https://github.com/google-gemini/gemini-cli/pull/22711) — **Agent Knowledge Layer (AKL)** | Persistent multi-layered memory system solving "Agent Amnesia" | Foundation for long-horizon task continuity; replaces ephemeral context |
| [#22748](https://github.com/google-gemini/gemini-cli/pull/22748) — Auto-detect pnpm global path (macOS) | Fixes #18023; adds `$HOME/Library/pnpm/global/5` detection | Unblocks pnpm-native developers on Apple Silicon |
| [#22718](https://github.com/google-gemini/gemini-cli/pull/22718) + [#22712](https://github.com/google-gemini/gemini-cli/pull/22712) + [#22708](https://github.com/google-gemini/gemini-cli/pull/22708) | **Subagent tool isolation** (3-PR rollout) | Completes architecture for per-subagent MCP/tool scoping; addresses #21901 |
| [#22714](https://github.com/google-gemini/gemini-cli/pull/22714) — Maintainer `offload` skill | Remote workstation parallelization + model config refactoring | Enables compute-heavy tasks to migrate to dedicated hardware |
| [#22485](https://github.com/google-gemini/gemini-cli/pull/22485) — `/perf` dashboard | In-CLI performance monitoring (memory, tools, timing) | Developer observability without external tooling |
| [#22668](https://github.com/google-gemini/gemini-cli/pull/22668) — Allowlist `get_internal_docs` in Plan Mode | Unblocks `cli_help` agent during research phases | Fixes Plan Mode policy over-restriction |
| [#22442](https://github.com/google-gemini/gemini-cli/pull/22442) — Task tracker protocol integration | File-based `.tracker/tasks/` system in legacy prompts | Bridges old and new task management; disables conflicting `write_todos` |
| [#22739](https://github.com/google-gemini/gemini-cli/pull/22739) — Suppress console output in headless modes | Clean stdout for CI/automation pipelines | Non-interactive reliability |
| [#22539](https://github.com/google-gemini/gemini-cli/pull/22539) — Fix floating promises in message bus | Eliminates unhandled rejections, swallowed errors | Stability improvement from ESLint audit (#16220) |
| [#22412](https://github.com/google-gemini/gemini-cli/pull/22412) — Full "GEMINI CLI" ASCII logo | Polished logged-out state branding | Minor UX polish, signals product maturity |

---

## Feature Request Trends

1. **Persistent Agent Memory** — AKL (#22711) and generic memory subagent (#22716) address the dominant theme: agents must learn from past interactions, not restart fresh.

2. **Subagent Reliability & Observability** — Tool isolation (#22708-22718), trajectory sharing (#22598), and eval frameworks (#22601) show investment in making subagents production-trustworthy.

3. **Package Manager Diversity** — pnpm fixes (#22748, #18023) reflect demand beyond npm-centric workflows; Yarn/Bun parity likely next.

4. **AST-Aware Code Intelligence** — Multiple issues (#22745, #22746, #22747) investigating `ast-grep`, `tilth`, `glyph` for precise code navigation; potential replacement for regex-based codebase investigator.

5. **Background/Parallel Agent Execution** — #22741 requests Ctrl+B backgrounding for local subagents; aligns with `offload` skill for remote parallelization.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Plan Mode instability** | #22266, #22507, #22307 — context loss, hangs, stale plans | **Critical** — core workflow broken |
| **Silent subagent failures** | #22323 (MAX_TURNS→GOAL), #22093 (unpermissioned execution) | **High** — trust erosion in automation |
| **Configuration system fragility** | #22267 (settings ignored), #22742 (discoveryMaxDirs reset), #21925 (false action notifications) | **Medium-High** — unpredictable behavior |
| **Rate limiting without graceful degradation** | #22631 — infinite "thinking" loops on 429 errors | **Medium** — wastes tokens and time |
| **Linux/Wayland compatibility gaps** | #21983, #21205 (BSD `env -S`) — platform-specific breakage | **Medium** — excludes desktop Linux users |
| **Skill discoverability** | #21968 — users must explicitly prompt for custom skills | **Medium** — feature underutilization |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-17

---

## 1. Today's Highlights

GitHub shipped **four rapid-fire patch releases (v1.0.6 through v1.0.6-2)** addressing critical memory leaks, HTTP/2 connection stability, and autopilot UX regressions. The standout addition is **dynamic tool discovery for Claude models**, enabling agents to search and invoke tools without explicit configuration. Meanwhile, the community is actively stress-testing the new release, with screen flickering and scroll-jump issues dominating issue reports.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.6** | 2026-03-16 | Autopilot error recovery fix; required markdown `task_complete` summaries; screen reader accessibility fix for placeholder text |
| **v1.0.6-2** | 2026-03-16 | Memory optimization: eliminated redundant env var copies per child process spawn; fixed tree-sitter WASM memory leak; `/help` dialog scroll position fix |
| **v1.0.6-1** | 2026-03-16 | Streaming memory improvements; fixed Copilot Free quota display; resolved HTTP/2 connection pool race conditions causing session crashes |
| **v1.0.6-0** | 2026-03-16 | **Dynamic tool search for Claude models**; Open Plugin spec file location support; friendlier error messages with keyboard shortcuts for event links |

🔗 [Full changelog](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues

| # | Status | Issue | Why It Matters | Community Signal |
|---|--------|-------|--------------|----------------|
| **#239** | 🔴 Open | [Screen flickering/starts scrolling down from beginning](https://github.com/github/copilot-cli/issues/239) | Critical UX regression affecting long conversations; 66 upvotes indicate widespread impact | 34 comments, 66 👍 |
| **#33** | ✅ Closed | [Support OAuth HTTP MCP servers](https://github.com/github/copilot-cli/issues/33) | Unlocks enterprise integrations (Figma, Atlassian); closed with implementation | 32 comments, 105 👍 |
| **#1754** | ✅ Closed | [AssertionError during retrospective + HTTP/2 GOAWAY 503](https://github.com/github/copilot-cli/issues/1754) | Stability fix for Claude Opus workflows; confirms HTTP/2 fixes in v1.0.6-1 | 12 comments |
| **#223** | 🔴 Open | [Copilot Requests permission missing for org-owned tokens](https://github.com/github/copilot-cli/issues/223) | Blocks enterprise automation adoption without user PATs | 12 comments, 53 👍 |
| **#978** | ✅ Closed | [Skills not used unless explicitly stated](https://github.com/github/copilot-cli/issues/978) | Core agent behavior fix—skills now properly auto-triggered | 11 comments |
| **#1048** | ✅ Closed | [Allow reasoning effort via CLI flags](https://github.com/github/copilot-cli/issues/1048) | Power user feature for model control; `--reasoning-effort` now supported | 10 comments, 30 👍 |
| **#1703** | 🔴 Open | [Org-enabled models missing (Gemini 3.1 Pro)](https://github.com/github/copilot-cli/issues/1703) | Model parity gap between CLI and VS Code Copilot | 9 comments, 19 👍 |
| **#1897** | 🔴 Open | ["You are not authorized" with Copilot Pro](https://github.com/github/copilot-cli/issues/1897) | Auth regression blocking paid users; needs triage | 7 comments |
| **#2053** | ✅ Closed | [Vertical scrollbar removed in v1.0.5](https://github.com/github/copilot-cli/issues/2053) | Quick regression fix in v1.0.6 series | 6 comments |
| **#2050** | 🔴 Open | [Claude Sonnet 4.6: HTTP/2 GOAWAY connection terminated](https://github.com/github/copilot-cli/issues/2050) | Persistent HTTP/2 instability despite patches; active investigation | 3 comments |

---

## 4. Key PR Progress

| # | Status | PR | Description |
|---|--------|-----|-------------|
| **#2069** | 🟡 Open | [Create devcontainer.json](https://github.com/github/copilot-cli/pull/2069) | Contributor adding standardized dev container for reproducible builds |
| **#1916** | 🟡 Open | [Rename install.sh to 1install.sh](https://github.com/github/copilot-cli/pull/1916) | Appears to be test/experimental PR with minimal description |

*Note: Only 2 PRs active in 24h window; both appear to be community contributions rather than core team features.*

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Enterprise/Org Features** | #223 (org tokens), #1150 (Azure DevOps `/delegate`), #1703 (org model visibility) | High — enterprise adoption blocker |
| **Autonomous/Yolo Mode** | #1279 (built-in "keep going" prompt), #2058 (`/fork` command for side quests), #1663 (Plan Mode enforcement) | Medium — power user productivity |
| **Accessibility** | #2085 (suppress prompt indicator for screen readers), #2082 (Linux copy shortcut regression) | Growing — a11y debt surfacing |
| **Observability/Billing** | #2087 (extended billing usage indicator), #1352 (hook stdout visibility) | Low but specific |
| **Source Openness** | #1079 (MIT license but closed source?) | Persistent community question |

---

## 6. Developer Pain Points

| Category | Symptoms | Root Cause Indicators |
|----------|----------|----------------------|
| **Terminal Rendering** | Flickering, scroll jumps, lost scrollbars (#239, #1811, #2053, #2082) | TUI framework stress at high message volume; alt-screen mode edge cases |
| **HTTP/2 Connection Stability** | GOAWAY errors, 503s, session crashes (#1754, #2050, #1830) | Connection pool race conditions under sub-agent load; partially mitigated in v1.0.6-1 |
| **Enterprise Policy Gaps** | Auth errors with valid Pro subscriptions (#1897), missing org features (#223, #1703) | Policy sync lag between Copilot services; org-tier feature flags |
| **Memory Pressure** | WASM leaks, env var bloat | Fixed in v1.0.6-2 but indicates resource-intensive parsing |
| **Cross-Platform Friction** | Linux copy shortcuts (#2082), aarch64 binary failures (#2060) | Platform-specific input handling gaps |

---

*Digest compiled from github.com/github/copilot-cli — 2026-03-17*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-17

## 1. Today's Highlights

The community saw **7 active pull requests** with strong momentum on web UI stability and MCP resilience. A critical file-mention bug (#1375) now has a targeted fix in review, while developers are pushing for broader third-party agent ecosystem support.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Status | Why It Matters |
|-------|--------|--------------|
| [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) File mentions (@) can't find the files | 🔴 **OPEN** | Regression in v1.18.0 breaking core UX in large repos; 7 comments show active community debugging |
| [#1449](https://github.com/MoonshotAI/kimi-cli/issues/1449) Claude Code ENABLE_TOOL_SEARCH 400 error | 🔴 **OPEN** | Cross-tool compatibility issue affecting users mixing Kimi with Claude Code workflows |
| [#1452](https://github.com/MoonshotAI/kimi-cli/issues/1452) `uv run kimi web` returns 404 | 🔴 **OPEN** | Web server routing regression in v1.20.0 blocking Windows users |
| [#1343](https://github.com/MoonshotAI/kimi-cli/issues/1343) Slow startup on Windows via uv tool install | 🔴 **OPEN** | Performance regression traced to `encodings.aliases` and `loguru` import overhead; includes detailed profiling |
| [#752](https://github.com/MoonshotAI/kimi-cli/issues/752) Third-party Coding Agent support for OpenCode | 🟢 **CLOSED** | Strategic ecosystem request for OpenCode compatibility; closed with 8 comments suggesting ongoing internal evaluation |
| [#1443](https://github.com/MoonshotAI/kimi-cli/issues/1443) Session switch crashes on `_system_prompt` role | 🟢 **CLOSED** | Pydantic validation edge case in context restoration; rapid same-day resolution indicates strong triage |

---

## 4. Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#1403](https://github.com/MoonshotAI/kimi-cli/pull/1403) Scope file-mention walk to typed directory prefix | 🟡 **OPEN** | Fixes #1375 by replacing global tree walk with prefix-scoped search; critical for monorepo performance |
| [#1447](https://github.com/MoonshotAI/kimi-cli/pull/1447) Refresh global config across web tabs | 🟢 **CLOSED** | Fixes stale model state in multi-tab web sessions; merged same-day |
| [#1448](https://github.com/MoonshotAI/kimi-cli/pull/1448) Clipboard fallback for non-secure contexts | 🟡 **OPEN** | Adds `document.execCommand` fallback for VS Code port-forwarding and HTTP environments |
| [#1450](https://github.com/MoonshotAI/kimi-cli/pull/1450) Graceful degradation on MCP server failure | 🟡 **OPEN** | Prevents session crashes from `MCPRuntimeError`; adds circuit-breaker pattern for tool calls |
| [#1446](https://github.com/MoonshotAI/kimi-cli/pull/1446) Correct button type to `buttons` in web chat | 🟡 **OPEN** | Schema fix for web chat button rendering |
| [#1445](https://github.com/MoonshotAI/kimi-cli/pull/1445) Remove mandatory Kimi OAuth for ACP operations | 🟡 **OPEN** | Enables ACP protocol with third-party providers via `KIMI_BASE_URL`/`KIMI_API_KEY` |
| [#1444](https://github.com/MoonshotAI/kimi-cli/pull/1444) Add thermodynamic regime management (T* framework) | 🟡 **OPEN** | Experimental: adds `T* = (L - γ) / (|L| + λ)` computation for tool execution oversight with auto-grounding |

---

## 5. Feature Request Trends

- **Third-party agent interoperability**: OpenCode support request (#752) signals demand for broader Coding Agent ecosystem integration
- **Provider flexibility**: Multiple PRs (#1445, #1450) push for reduced vendor lock-in—OAuth-optional ACP, graceful MCP handling
- **Web-first workflows**: Clipboard fallbacks (#1448), multi-tab sync (#1447), and web server stability (#1452) show web UI maturation as a priority

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **File discovery at scale** | #1375, #1403 | 🔴 High — Core `@` mention feature broken in large repos |
| **Windows performance degradation** | #1343 | 🟡 Medium — 800ms+ import overhead on startup |
| **Cross-tool compatibility** | #1449 | 🟡 Medium — Claude Code integration friction |
| **Web server reliability** | #1452 | 🟡 Medium — 404 on fresh v1.20.0 installs |
| **MCP resilience** | #1450 | 🟡 Medium — Unhandled failures crash entire sessions |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-17

---

## Today's Highlights

The team shipped **v1.2.27** with critical permission system refactoring and VCS reliability fixes. A major Copilot billing issue was resolved after 188 comments of community pressure, while memory leaks and Windows compatibility remain active pain points. The codebase continues its migration to Effect-based architecture with three significant refactors landing today.

---

## Releases

### [v1.2.27](https://github.com/anomalyco/opencode/releases/tag/v1.2.27)

| Category | Changes |
|----------|---------|
| **Core** | VCS watcher logic fixed, legacy permission module deleted, SIGHUP handler removed |
| **Effects Migration** | `PermissionNext` effectified, `QuestionService` refactored to use effects, branded ID schemas inlined |
| **Bug Fixes** | Pending entry cleanup on aborted questions, `InstanceState` ALS bug fixed |

This release continues the systematic migration to Effect-based architecture while pruning legacy code.

---

## Hot Issues

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|--------------|------------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) Copilot auth over-counting "user" requests | **CLOSED** | Premium quota drained incorrectly—60 agent requests billed as user-initiated. Critical for enterprise cost control. | 188 comments, 64 👍; resolved after extensive debugging |
| [#3936](https://github.com/anomalyco/opencode/issues/3936) GitHub Enterprise authorization failure | OPEN | Blocks enterprise adoption; auth flow crashes with "Unexpected Error" | 52 comments, 14 👍; long-running since Nov 2025 |
| [#12687](https://github.com/anomalyco/opencode/issues/12687) Memory leak → kernel panic (macOS) | OPEN | System instability after hours of use; TypeScript runtime suspected | 43 comments; no 👍 but critical severity |
| [#12338](https://github.com/anomalyco/opencode/issues/12338) 1M token limit for Opus 4.6 not honored | OPEN | UI shows 1M capacity but hard 200K limit enforced; blocks long-context workflows | 29 comments, 24 👍; high demand for fix |
| [#16331](https://github.com/anomalyco/opencode/issues/16331) Permissions ignored in config | OPEN | Security regression—`.env` files readable despite `deny` rules | 21 comments, 3 👍; trust-breaking bug |
| [#16314](https://github.com/anomalyco/opencode/issues/16314) Windows Trojan false positive | OPEN | Windows Defender blocks executable; reputation damage | 19 comments; urgent for Windows users |
| [#8554](https://github.com/anomalyco/opencode/issues/8554) Programmatic sub-LLM calls for RLM | OPEN | Enables recursive agent patterns from academic research | 11 comments, 11 👍; advanced user feature |
| [#17796](https://github.com/anomalyco/opencode/issues/17796) TUI copy-to-clipboard broken | OPEN | Regression in 1.2.x; basic UX functionality degraded | 8 comments; daily workflow impact |
| [#13838](https://github.com/anomalyco/opencode/issues/13838) Compaction injects fake "What did we do so far?" | OPEN | Unwanted summaries generated, disrupting agent flow | 8 comments, 3 👍; UX friction |
| [#17843](https://github.com/anomalyco/opencode/issues/17843) Loud fans on startup (macOS) | OPEN | Hardware stress despite low CPU/GPU usage; suggests polling loop | 5 comments; quality of life issue |

---

## Key PR Progress

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#17859](https://github.com/anomalyco/opencode/pull/17859) | @Hona | Isolate file runtimes from instance bootstrap | Fixes flaky tests from Effect migration side effects |
| [#17849](https://github.com/anomalyco/opencode/pull/17849) | @kitlangton | Effectify `SkillService` as scoped service | Lazy init, dynamic imports—cleaner skill architecture |
| [#17857](https://github.com/anomalyco/opencode/pull/17857) | @Hona | Avoid prompt tooltip `Switch` on startup | Prevents desktop crash on session restore |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | @mocksoul | Fix streaming markdown after message completion | Resolves table rendering bugs in completed messages |
| [#17855](https://github.com/anomalyco/opencode/pull/17855) | @benjaminshafii | Keep subagent sessions visible and openable | Nested session hierarchy in UI; fixes navigation |
| [#17146](https://github.com/anomalyco/opencode/pull/17146) | @AbigailJixiangyuyu | Restore `/editor` on Windows | Closes #17117; Windows dev experience restored |
| [#17847](https://github.com/anomalyco/opencode/pull/17847) | @rekram1-node | Fix GitHub Copilot Enterprise integration | Kills legacy code; TUI/Desktop prompting next |
| [#17844](https://github.com/anomalyco/opencode/pull/17844) | @sharunkumar | Add `/skills` command + inline autocomplete | Web app parity with TUI; mid-text `/` triggers skills |
| [#16918](https://github.com/anomalyco/opencode/pull/16918) | @thdxr | OpenCode 2.0 (beta) | LSP server, formatter path resolution, npm fixes—major release prep |
| [#16751](https://github.com/anomalyco/opencode/pull/16751) | @altendky | Fix `tool_use`/`tool_result` mismatch root causes | Closes #16749; resolves long-standing conversation corruption |

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Remote/Enterprise Workflows** | [#5608](https://github.com/anomalyco/opencode/issues/5608) Remote workspace, [#8549](https://github.com/anomalyco/opencode/issues/8549) Air-gapped Web UI, [#3936](https://github.com/anomalyco/opencode/issues/3936) GHE auth | High—enterprise blocker cluster |
| **Session Management UX** | [#12548](https://github.com/anomalyco/opencode/issues/12548) Chrome-style tabs, [#17232](https://github.com/anomalyco/opencode/issues/17232) `opencode.local.json`, [#17855](https://github.com/anomalyco/opencode/pull/17855) subagent visibility | Medium—productivity multipliers |
| **Agent Ecosystem** | [#7467](https://github.com/anomalyco/opencode/issues/7467) GitHub Agent Marketplace, [#8554](https://github.com/anomalyco/opencode/issues/8554) RLM pattern, [#17434](https://github.com/anomalyco/opencode/issues/17434) Runner Framework | Medium—community building |
| **Configuration Flexibility** | [#17232](https://github.com/anomalyco/opencode/issues/17232) Project-local configs, [#16331](https://github.com/anomalyco/opencode/issues/16331) Permission granularity | Steady—dev environment customization |

---

## Developer Pain Points

| Category | Symptoms | Root Causes |
|----------|----------|-------------|
| **Resource Management** | [#12687](https://github.com/anomalyco/opencode/issues/12687) Memory leaks → kernel panic, [#17837](https://github.com/anomalyco/opencode/issues/17837) Multi-GB `serve` memory, [#17843](https://github.com/anomalyco/opencode/issues/17843) Fan noise | TypeScript runtime GC pressure; sidebar prefetch loading full tool outputs; likely polling loops |
| **Windows Compatibility** | [#16314](https://github.com/anomalyco/opencode/issues/16314) Trojan false positive, [#17117](https://github.com/anomalyco/opencode/issues/17117) `/editor` broken (fixed), [#16744](https://github.com/anomalyco/opencode/issues/16744) Missing Web UI sessions | Platform-specific path handling; Defender heuristics; secondary platform prioritization |
| **Authentication Fragility** | [#8030](https://github.com/anomalyco/opencode/issues/8030) Copilot billing, [#9111](https://github.com/anomalyco/opencode/issues/9111) OAuth expiry, [#3936](https://github.com/anomalyco/opencode/issues/3936) GHE failure | Token refresh logic gaps; enterprise edge cases; header propagation bugs |
| **TUI/Terminal Integration** | [#17796](https://github.com/anomalyco/opencode/issues/17796) Copy broken, [#11325](https://github.com/anomalyco/opencode/issues/11325) WezTerm numeric input, [#16027](https://github.com/anomalyco/opencode/issues/16027) Mouse garbling | Terminal emulator matrix complexity; selection state management; escape sequence handling |
| **Model/Provider Reliability** | [#12338](https://github.com/anomalyco/opencode/issues/12338) Token limit mismatch, [#11865](https://github.com/anomalyco/opencode/issues/11865) Codex hangs, [#14273](https://github.com/anomalyco/opencode/issues/14273) Zen free tier limits | Provider API drift; timeout/retry gaps; billing integration bugs |

---

*Digest compiled from github.com/anomalyco/opencode activity 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-17

---

## 1. Today's Highlights

The team shipped **v0.12.5** with critical Windows encoding fixes and test reliability improvements. A major bundled `/review` skill for out-of-the-box code review landed in v0.12.4, while the community continues to push hard on local model support (LM Studio/Ollama) and subagent system enhancements. Windows compatibility and Docker/remote development workflows remain the dominant friction points in user reports.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.12.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.5)** | Fix for Windows shell encoding with non-ASCII characters; simplified SDK integration tests for reliability |
| **[v0.12.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.4)** | **New bundled `/review` skill** for instant code review; improved resilience against individual LLM failures in qualitative insights |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#2395](https://github.com/QwenLM/qwen-code/issues/2395)** — 5+ second input lag in chat window (P1) | Severe UX degradation on Windows; blocks productive use | 5 comments, active triage needed |
| **[#1924](https://github.com/QwenLM/qwen-code/issues/1924)** — Useless compression with contextWindowSize limits | Core context management broken for local LLM users; 82k→25k→816... progression makes no sense | 5 comments, long-running |
| **[#984](https://github.com/QwenLM/qwen-code/issues/984)** — Docker container IDE connection fails in Cursor | Remote/container development is table-stakes for modern workflows; complete blocker | 5 comments, multiple failed workarounds |
| **[#2427](https://github.com/QwenLM/qwen-code/issues/2427)** — CLI API key configuration too cumbersome vs. OpenCode | Direct competitive comparison; onboarding friction is churn risk | 3 comments, emotionally charged ("操蛋") |
| **[#2382](https://github.com/QwenLM/qwen-code/issues/2382)** — VS Code extension broken in 0.12.3 (regression) | Upgrade path broken for Russian-speaking user; version rollback failed | 4 comments, regression pattern |
| **[#1094](https://github.com/QwenLM/qwen-code/issues/1094)** — DevContainers IDE connection fails in VS Code Insiders | Professional developer workflow (Insiders + containers) unsupported | 3 comments, 4+ months old |
| **[#2124](https://github.com/QwenLM/qwen-code/issues/2124)** — Subagent parameter passing undocumented/broken | Multi-agent workflows are a key differentiator; "Missing context values" error blocks adoption | 3 comments, now closed but pattern persists |
| **[#2426](https://github.com/QwenLM/qwen-code/issues/2426)** — Free tier quota reduced from 1000 to ~300 requests | Trust erosion with user base; perceived bait-and-switch | 2 comments, sentiment monitoring needed |
| **[#2416](https://github.com/QwenLM/qwen-code/issues/2416)** — Secondary sidebar container missing | UI polish issue breaking extension panel layout | 2 comments, recent regression |
| **[#2325](https://github.com/QwenLM/qwen-code/issues/2325)** — Enhanced @ mentions (folders, fuzzy search) | High-value UX improvement; @ mentions are core interaction pattern | 2 comments, feature request |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| **[#2423](https://github.com/QwenLM/qwen-code/pull/2423)** — Fix Windows encoding for non-ASCII output | Forces UTF-8 in PowerShell, improves encoding detection; unblocks CJK users | Critical fix, merged |
| **[#2425](https://github.com/QwenLM/qwen-code/pull/2425)** — Newest-first history for Ctrl+R search | Aligns non-shell search with shell-mode behavior; small but daily-impact UX | Open, ready for review |
| **[#2400](https://github.com/QwenLM/qwen-code/pull/2400)** — System prompt customization in SDK/CLI | Enables advanced prompt engineering and brand-specific behaviors | Open, significant flexibility add |
| **[#2403](https://github.com/QwenLM/qwen-code/pull/2403)** — Handle duplicate finish_reason chunks from OpenRouter | Fixes streaming parser bug with Gemini models via OpenRouter | Open, compatibility fix |
| **[#2404](https://github.com/QwenLM/qwen-code/pull/2404)** — Prevent tool call loss from late-arriving names | Three complementary fixes for streaming reliability; production stability | Open, high priority |
| **[#2421](https://github.com/QwenLM/qwen-code/pull/2421)** — Hook execution telemetry | Observability infrastructure for extension ecosystem; PII sanitization included | Open, platform maturity |
| **[#2420](https://github.com/QwenLM/qwen-code/pull/2420)** — Ctrl+Y to skip rate-limit retry delay | Power-user ergonomics: escape 60s TPM throttling waits | Open, developer experience |
| **[#2411](https://github.com/QwenLM/qwen-code/pull/2411)** — Increase default output limit 8K→16K | Direct response to truncation complaints; doubles default generation capacity | Merged |
| **[#2417](https://github.com/QwenLM/qwen-code/pull/2417)** — Support symlinked skill directories | Enables `npx skills` and hot-reload workflows; developer ergonomics | Merged |
| **[#2385](https://github.com/QwenLM/qwen-code/pull/2385)** — Local model provider support (LM Studio & Ollama) | **Major community ask**: local-first, privacy-preserving, zero external API dependency | Open, strategic |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Local/self-hosted models** | #2385 (LM Studio/Ollama PR), #1924 (local GGUF context issues) | **High** — privacy and cost control driving demand |
| **Subagent system parity** | #2409 (Claude Code parity request), #2124 (parameter passing), #2424 (Tasks tool output visibility) | **High** — multi-agent is competitive battleground |
| **Simplified configuration** | #2427 (CLI API keys), #1210 (XDG directories), #2325 (enhanced @ mentions) | **Medium-High** — onboarding friction repeatedly cited |
| **Portable/chat history management** | #2373 (project-local storage + export) | **Medium** — team collaboration and cross-machine workflows |
| **Docker/remote development polish** | #984, #1094, #1081, #2416 (container/IDE connection issues) | **Medium** — infrastructure maturity gaps |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Notes |
|------------|-----------|----------|-------|
| **Windows encoding & performance** | Very High | Critical | v0.12.5 addresses shell encoding; input lag (#2395) and slow startup (#2386) persist |
| **Docker/Container IDE connectivity** | High | Critical | Pattern across Cursor, VS Code, DevContainers, WSL — architectural fix needed |
| **Context/compression management** | Medium-High | High | Local LLM users hit invisible walls; "useless compression" (#1924) erodes trust |
| **Configuration complexity** | Medium-High | Medium | settings.json vs. CLI (#2427), XDG compliance (#1210) — competitor OpenCode cited as benchmark |
| **Free tier quota transparency** | Medium | Medium | #2426 suggests communication or policy issue; monitoring recommended |
| **Streaming/tool call reliability** | Medium | High | #2403, #2404, #2360, #2249 show parser edge cases with non-Qwen providers |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-03-16.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*