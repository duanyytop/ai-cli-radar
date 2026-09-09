# AI CLI Tools Community Digest 2026-09-09

> Generated: 2026-09-09 02:33 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# **Cross-Tool AI CLI Ecosystem Comparison Report – 2026-09-09**

---

### **1. Ecosystem Overview**  
The AI CLI tool ecosystem in Q3 2026 reflects a maturing, enterprise-ready landscape where developers demand more than basic code generation—they seek *reliable, auditable, and extensible agent workflows*. Tools are increasingly converging on shared patterns: modular plugin systems, session persistence, model routing control, and secure sandboxing. While OpenAI Codex and Claude Code lead in feature depth and community engagement, open-source alternatives like OpenCode and Pi are gaining traction through transparency and customization. The shift from “prompt-and-generate” to “agent-driven development” is now central to the evolution of these tools.

---

### **2. Activity Comparison**

| Tool | Issues Count (Hot) | PRs (Last 24h) | Discussions | Release Status (Today) |
|------|--------------------|----------------|-------------|------------------------|
| **Claude Code** | 10 | 1 | N/A | ✅ v2.1.266 (critical fix), v2.1.265 (telemetry/plugin) |
| **OpenAI Codex** | 10 | 10 | 5+ threads | 🔶 No stable release; 2 alpha builds (rust-v0.154.0-alpha.7/8) |
| **Gemini CLI** | 10 | 10 | N/A | ✅ v0.61.0-nightly.20260909.ged2ac40df (security fixes), v0.60.0-preview.0 |
| **GitHub Copilot CLI** | 10 | 10 | N/A | ✅ v1.0.84-3 (Vim mode live), v1.0.84-2 (beta rollout) |
| **OpenCode** | 10 | 10 | N/A | 🔶 No new release; focus on refactoring & stability |
| **Pi** | 10 | 10 | 3 threads | 🔶 No new release; active PRs on auth/streaming |

> ⚠️ *Note*: OpenAI Codex, Gemini CLI, and Pi have active discussion threads; others use GitHub Issues/PRs as primary channels. "N/A" indicates no discussion threads were reported in this digest.

---

### **3. Shared Feature Directions**  
Across all major tools, recurring themes signal convergence toward production-grade AI development:

- **Session Resilience & Recovery**: Persistent issues around crash recovery, data loss after restarts, and silent state corruption (e.g., #92825 in Claude Code, #4755 in Copilot CLI, #22323 in Gemini CLI).  
- **Agent Control & Visibility**: Demand for `/rewind`, `/revert`, transparent subagent flows, and error signaling (e.g., OpenAI Codex’s undo request, Gemini CLI’s goal success misreporting).  
- **Context Management**: Need for recoverable transcripts post-compaction (#27242), real-time TPS tracking (#6096), and clear context usage metrics.  
- **Plugin & Tooling Extensibility**: Function hooks (#91870), dynamic manifest loading, safe side-effect tracking, and consistent API exposure (e.g., `imagegen` not exposed in Codex).  
- **Security & Privacy**: Deterministic redaction (#26525), sandbox isolation (#29214), and proper header propagation (`x-opencode-session`) across all execution paths.

> ✅ These are not isolated requests—they represent a unified call for **trustworthy, observable, and predictable AI workflows**.

---

### **4. Differentiation Analysis**

| Dimension | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **GitHub Copilot CLI** | **OpenCode** | **Pi** |
|---------|------------------|------------------|----------------|--------------------------|--------------|--------|
| **Target Users** | Enterprise devs, security-conscious teams | Power users, automation-focused engineers | Open-source adopters, Linux/POSIX power users | GitHub ecosystem, IDE-integrated workflows | Devs valuing modularity & local inference | Edge-case innovators, plugin builders |
| **Technical Approach** | Cloud-first with strong local proxy support | Monolithic desktop + MCP architecture | Modular, containerized agent loops | Vim-mode integration, rich TUI | Plugin-driven desktop app | Lightweight, extensible core with provider abstractions |
| **Feature Focus** | Privacy, telemetry control, plugin extensibility | Session lifecycle, data integrity, UI robustness | Agent reliability, AST-aware analysis, shell alignment | Modal editing, session management | Performance, streaming, multi-provider support | WebSocket resilience, cross-terminal compatibility |
| **Maturity Signal** | High maturity; stable releases, mature plugin system | Rapid iteration; high bug density despite activity | Emerging but focused on agent trust | Fast adoption; rapidly expanding UX features | Open-source innovation; deep architectural refactoring | Experimental edge; strong emphasis on protocol-level safety |

> 📌 *Key Insight*: While Copilot CLI pushes modal UX and OpenCode drives modularity, **Gemini CLI and Claude Code are building the most robust agent frameworks**, prioritizing correctness and auditability over novelty.

---

### **5. Community Momentum & Maturity**

- **Highest Momentum**: **OpenAI Codex** and **Gemini CLI** show the strongest velocity—10+ PRs in 24h, multiple hot issues, and active discussions. Their communities are highly engaged, reflecting rapid iteration under pressure.
- **Most Mature**: **Claude Code** and **GitHub Copilot CLI** demonstrate greater stability and strategic direction—consistent release cadence, well-documented improvements, and long-term planning (e.g., plugin hooks, Vim mode).
- **Most Innovative**: **OpenCode** and **Pi** are driving architectural shifts—modular desktop apps, plugin extraction, and lightweight agent cores—indicating a future-oriented, developer-led movement.
- **Lowest Stability Signal**: **Qwen Code** reports critical Windows memory leaks and CI instability, suggesting growing pains in scaling for production workloads.

> 💡 *Maturity Index* (based on stability, documentation, and user trust):  
> **High**: Claude Code, Copilot CLI  
> **Medium**: OpenAI Codex, Gemini CLI  
> **Emerging**: OpenCode, Pi, Qwen Code

---

### **6. Trend Signals**  
Community feedback reveals three dominant industry trends:

1. **From Assistant to Agent**: Developers no longer want one-off code suggestions—they demand **autonomous, composable agents** with reliable state, rollback, and error handling (e.g., `/rewind`, subagent continuation).
2. **Trust Over Convenience**: Security and predictability are now non-negotiable. Users reject opaque behavior (e.g., verbose output despite instructions) and demand **transparent cost tracking, deterministic redaction, and session provenance**.
3. **Extensibility as Foundation**: No tool can succeed without a robust plugin ecosystem. Demand for **function hooks, dynamic manifests, and safe side-effects** is universal—indicating that future value lies not in models, but in **how they’re orchestrated**.

> 🔍 **Developer Reference Value**:  
> - Use **Claude Code** for secure, extensible enterprise workflows.  
> - Choose **OpenAI Codex** for rapid prototyping with strong session control.  
> - Opt for **Gemini CLI** if you need reliable agent logic with AST awareness.  
> - Pick **Copilot CLI** for Vim-native, IDE-integrated development.  
> - Explore **OpenCode/Pi** for open, customizable, low-level agent experimentation.

---

*Prepared by Senior Technical Analyst, AI Developer Tools Ecosystem — 2026-09-09*  
*Data sourced from official GitHub repositories and community digests.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-09-09 | Source: github.com/anthropics/skills*

---

### **1. Top Skills Ranking** *(by community attention, based on PR discussion volume and impact)*

| # | Skill | Functionality & Discussion Highlights | Status | GitHub Link |
|----|------|----------------------------------------|--------|-------------|
| 1 | **Hivemind: Zero-Cost Multi-Agent Orchestration** | Enables Claude Code to delegate mechanical tasks to free, headless agents via opencode.ai, while retaining control as planner and reviewer. Addresses cost-efficiency in long-running workflows. High demand for scalable AI agent systems. | Open | [PR #1628](https://github.com/anthropics/skills/pull/1628) |
| 2 | **skill-quality-analyzer & skill-security-analyzer** | Meta-skills that audit other skills across structure, documentation, security posture, and compliance. Critical for trust and quality assurance in the growing ecosystem. Sparked strong interest in automated validation pipelines. | Open (in example-skills) | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 3 | **self-audit (v1.3.0)** | A universal pre-delivery verification skill that performs mechanical file checks followed by four-dimensional reasoning audits (e.g., logic, consistency, edge cases). Proposed as a "reasoning quality gate" to prevent AI hallucinations. | Open | [PR #1367](https://github.com/anthropics/skills/pull/1367) |
| 4 | **document-typography** | Prevents common typographic flaws in AI-generated documents: orphaned lines, widows, and misaligned numbering. Addresses a widespread user pain point affecting readability and professionalism. | Open | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 5 | **ODT skill (OpenDocument Format)** | Supports creation, filling, parsing, and conversion of `.odt`, `.ods` files — critical for open-source and ISO-standard document workflows. Fills a gap in format support beyond DOCX/PDF. | Open | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 6 | **scnet-hpc** | Provides profile-based SSH and Slurm workflow automation for SCNet HPC clusters. Enables researchers to manage high-performance computing jobs directly from Claude Code. | Open | [PR #1615](https://github.com/anthropics/skills/pull/1615) |
| 7 | **buffer-api Agent Skill** | Integrates Buffer’s GraphQL API into AI agents for scheduling, managing, and analyzing social media posts across platforms. Portable across agents (Claude, Cursor, n8n, etc.). | Open | [PR #1627](https://github.com/anthropics/skills/pull/1627) |

---

### **2. Community Demand Trends** *(from top Issues)*

The community is increasingly focused on **trust, reliability, and operational maturity** in the Skills ecosystem:

- **Workflow Automation & Integration**: Strong demand for skills enabling cross-platform workflows (e.g., Buffer API, HPC cluster access, SharePoint integration).
- **AI Safety & Governance**: Rising interest in *agent governance*, *security auditing*, and *trust boundary protection* (e.g., Issue #492, #412).
- **Documentation & Quality Assurance**: Users want better tooling to verify output quality (e.g., `self-audit`, `skill-quality-analyzer`) and avoid silent failures.
- **Platform Compatibility**: Persistent issues with Windows support (e.g., `run_eval.py` crashes) indicate need for broader OS parity.
- **Enterprise Readiness**: Requests for org-wide sharing (Issue #228), secure handling of sensitive data (Issue #1175), and context window optimization.

> 🔍 *Emerging pattern: The community is shifting from “what can skills do?” to “how can we trust, scale, and secure them?”*

---

### **3. High-Potential Pending Skills** *(Active PRs with significant engagement or technical impact)*

These Skills are likely to be merged soon due to high relevance and clear problem-solving value:

- **Hivemind** ([#1628](https://github.com/anthropics/skills/pull/1628)) – Multi-agent orchestration for cost-efficient task delegation.
- **self-audit v1.3.0** ([#1367](https://github.com/anthropics/skills/pull/1367)) – Universal output validation pipeline; foundational for reliable AI systems.
- **skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) – Automated security scanning for community skills; addresses critical trust concerns.
- **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) – Solves a universal UX issue in AI-generated content.
- **scnet-hpc** ([#1615](https://github.com/anthropics/skills/pull/1615)) – Niche but high-value for academic/research users; well-documented scope.

---

### **4. Skills Ecosystem Insight**

> The community’s most concentrated demand at the Skills level is **trustworthy, self-verifying, and secure AI execution pipelines**—moving beyond isolated capabilities toward robust, auditable, and enterprise-ready AI workflows.

---  
*Report generated by Claude Code Skills Analyst, 2026-09-09*

---

# **Claude Code Community Digest — 2026-09-09**

---

### **1. Today's Highlights**  
The latest release, **v2.1.266**, resolves a critical regression in proxy and gateway handling that forced unintended Cloud sign-ins when `CLAUDE_CODE_USE_GATEWAY` was set—restoring expected behavior for enterprise and custom deployment users. Meanwhile, **v2.1.265** introduced telemetry enhancements and plugin directory support, enabling dynamic plugin loading via folder structures. These updates reflect ongoing efforts to improve stability, privacy controls, and extensibility.

---

### **2. Releases**

#### **v2.1.266**  
- Fixed a regression in `CLAUDE_CODE_USE_GATEWAY` logic: previously, setting this variable alone would force Cloud-gateway sign-in in v2.1.265, even without `ANTHROPIC_BASE_URL` or `ANTHROPIC_AUTH_TOKEN`. Now properly respects configuration context.  
🔗 [GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.266)

#### **v2.1.265**  
- Added `user.email` and `user.groups` to telemetry sent by Claude Desktop and Cowork via the apps gateway (aligning with terminal session data).  
- Introduced support for `--plugin-dir` pointing to a folder containing subdirectories with valid plugin manifests—each loads dynamically on startup.  
🔗 [GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)

---

### **3. Hot Issues**

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) *Function Hooks – make plugins 10x more powerful* | Proposes a deep, safe, composable hook system using parameterized `$` objects and continuation-based `next()` calls—critical for advanced plugin authoring. High demand from power users and plugin developers. | **147 comments**, **86 upvotes** – one of the most active feature requests; seen as foundational for next-gen extensibility. |
| [#65961](https://github.com/anthropics/claude-code/issues/65961) *Claude verbose code comments by default — ignores instructions to stop* | Model consistently adds excessive commentary despite user directives. Affects clarity, output size, and workflow efficiency. | **31 comments**, **203 upvotes** – widespread frustration; cited as a core usability blocker for production workflows. |
| [#27242](https://github.com/anthropics/claude-code/issues/27242) *No working mechanism to review previous context after compaction, plan-mode clear, or branch navigation* | Full conversation history preserved in `transcript.jsonl`, but UI offers no way to access it post-compaction or navigation. Breaks auditability and debugging. | **18 comments**, **85 upvotes** – highlights a major UX gap in long-term session management. |
| [#92825](https://github.com/anthropics/claude-code/issues/92825) *Session transcripts silently become permanently unavailable (cliSessionId nulled)* | After a crash or restart, sessions lose access to their transcript IDs—no local recovery path exists. Follow-up to prior data-loss issue. | **4 comments**, **0 upvotes** – severe reliability concern; signals risk of irreversible work loss. |
| [#92971](https://github.com/anthropics/claude-code/issues/92971) *Model ignores "answer only the question" instruction and appends unrequested explanations* | Even with explicit rules in memory, skills, and CLAUDE.md, model defaults to verbose responses. Undermines automation and precision. | **1 comment**, **0 upvotes** – confirmed repro, high severity for structured output use cases. |
| [#92970](https://github.com/anthropics/claude-code/issues/92970) *Opus over-investigates simple debug tasks, consuming disproportionate quota* | Simple queries trigger deep exploration, leading to rapid credit exhaustion. Impacts cost predictability and CI/CD viability. | **1 comment**, **0 upvotes** – directly impacts budget-sensitive teams using Opus models. |
| [#92646](https://github.com/anthropics/claude-code/issues/92646) *Claude Desktop blocks SendMessage entirely, removing subagent continuation* | `SendMessage` is blocked at launch and via internal hooks—preventing subagent flows mid-session. Breaks complex agent workflows. | **3 comments**, **2 upvotes** – shows tension between safety enforcement and developer control. |
| [#92601](https://github.com/anthropics/claude-code/issues/92601) *security-guidance plugin hook fails with ENOENT, causing infinite retry loop* | Plugin fails due to missing staging path, triggering endless notifications. Blocks security tooling in local-agent mode. | **1 comment**, **0 upvotes** – illustrates fragility in plugin lifecycle management. |
| [#92966](https://github.com/anthropics/claude-code/issues/92966) *Bundled GrowthBook clientKey returns 400 "Invalid API Key" on 2.1.266* | Remote Control features fail due to outdated SDK key—regression of a known issue (#64151). Prevents telemetry and analytics. | **1 comment**, **0 upvotes** – undermines monitoring and product feedback loops. |
| [#92960](https://github.com/anthropics/claude-code/issues/92960) *Anthropic API routing to suboptimal model variants (e.g., quantized/fable)* | Users report degraded performance and regressions in local testing due to unexpected model routing. | **1 comment**, **0 upvotes** – impacts consistency and trust in model selection. |

---

### **4. Key PR Progress**

| PR | Summary & Impact | Link |
|----|------------------|------|
| [#63686](https://github.com/anthropics/claude-code/pull/63686) *Bump stale and autoclose timeouts from 14 to 90 days* | Reduces noise in issue backlog by extending lifecycle windows. Allows time for community input on complex or niche issues. | [PR #63686](https://github.com/anthropics/claude-code/pull/63686) |

> ✅ **Note**: Only one PR updated in the last 24h. This change reflects a strategic shift toward longer-term issue tracking and reduced automated closure pressure.

---

### **5. Hot Discussions**  
*No discussion threads provided in the dataset. This section is omitted.*

---

### **6. Feature Request Trends**

The top emerging themes from community feedback include:

- **Plugin Ecosystem Expansion**: Demand for deeper plugin integration via **function hooks**, **dynamic manifest loading**, and **safe side-effect tracking** (e.g., #91870).
- **Context Management & Auditability**: Strong interest in **recoverable conversation history**, **post-compaction review**, and **persistent transcript access** (e.g., #27242).
- **Agent & Workflow Control**: Need for **reliable subagent continuation**, **tool availability control**, and **explicit permission modeling** (e.g., #92646, #92134).
- **Transparency & Customization**: Users want **configurable verbosity**, **model routing override**, and **clearer execution modes** (e.g., Local vs Remote visibility in Cowork).
- **Stability & Recovery**: Persistent concerns around **session data loss**, **silent failures**, and **unrecoverable state corruption**.

These trends indicate a maturing user base pushing beyond basic coding assistance toward **enterprise-grade AI development workflows**.

---

### **7. Developer Pain Points**

Recurring frustrations across issues highlight several systemic challenges:

- **Inconsistent Model Behavior**: Despite explicit instructions (e.g., “answer only”), models ignore constraints and add verbose commentary (e.g., #65961, #92971).
- **Unpredictable Cost Consumption**: Opus models appear to over-investigate trivial tasks, exhausting quotas rapidly (e.g., #92970).
- **Opaque State Management**: Sessions can become inaccessible after crashes or restarts, with no recovery path (e.g., #92825).
- **Tooling Gaps**: Critical tools like `SendMessage` are blocked silently, breaking agent chains (e.g., #92646, #92134).
- **Plugin Fragility**: Plugins fail due to missing paths or environment variables, often resulting in infinite loops (e.g., #92601).
- **UI/UX Blind Spots**: Core data (like transcripts) is stored but invisible to users—creating a disconnect between storage and access (e.g., #27242).

These pain points point to urgent needs in **developer experience**, **system resilience**, and **predictable AI behavior**—especially as users scale into production-grade workflows.

---  
*Digest compiled from GitHub data — [Source: github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-09-09**

---

### **1. Today's Highlights**  
A critical security and stability wave hit the Codex ecosystem this week, with multiple high-impact issues reported around model availability (`gpt-5.5` 404 errors), macOS sandbox integrity, and a severe data loss bug triggered by recursive deletion in Windows. The community has responded swiftly, with over 100 comments across top issues and rapid PRs addressing session state corruption, voice session lifecycle tracking, and thread management during shutdown.

---

### **2. Releases**  
No new stable releases were published in the last 24 hours. However, two alpha versions of `rust-v0.154.0-alpha.8` and `rust-v0.154.0-alpha.7` were released—primarily focused on internal runtime stabilization and dependency updates for upcoming CLI improvements.

---

### **3. Hot Issues**  

| Issue # | Title & Summary | Why It Matters | Community Reaction |
|--------|------------------|----------------|--------------------|
| [#26892](https://github.com/openai/codex/issues/26892) | `gpt-5.5` fails with 404 despite local availability | Breaks workflow continuity for users relying on latest models; metadata inconsistency indicates a deployment or registry misalignment. | 89 comments, 31 👍 – High urgency; many report identical failures post-update. |
| [#43998](https://github.com/openai/codex/issues/43998) | [Critical Data Loss] Unsafe recursive deletion deletes project source code | One of the most severe bugs: accidental permanent deletion due to flawed path traversal logic. Could affect production workflows. | 1 comment, 0 👍 – Reported as "critical" by user; likely under triage. |
| [#42501](https://github.com/openai/codex/issues/42501) | Windows app fails to launch UI after update (cua_node issue) | Blocks access entirely; tied to broken runtime copy process. Affects desktop users on Windows 10/11. | 12 comments, 1 👍 – Seen as urgent; linked to recent build `26.901.1978.0`. |
| [#43971](https://github.com/openai/codex/issues/43971) | macOS leaks MCP process pool every 5 minutes while idle | Performance regression causing memory bloat and system slowdown; impacts long-running sessions. | 2 comments, 0 👍 – Observed after `26.901.51231` update; confirmed fix pending. |
| [#42757](https://github.com/openai/codex/issues/42757) | cua_repl trusted worker crashes before browser attachment | Prevents browser integration on macOS; blocks debugging workflows using built-in tools. | 5 comments, 0 👍 – Users unable to debug web tasks. |
| [#42520](https://github.com/openai/codex/issues/42520) | Chrome integration reports success but `chrome-native-hosts-v2.json` never created | Breaks browser automation; affects tooling for web scraping and UI testing. | 4 comments, 0 👍 – Reproducible on multiple machines. |
| [#25178](https://github.com/openai/codex/issues/25178) | Computer Use screenshot fails on Windows 10 22H2 | Core accessibility feature broken; prevents UI interaction via screenshots. | 49 comments, 23 👍 – Long-standing issue resurfacing; critical for automation. |
| [#40248](https://github.com/openai/codex/issues/40248) | Built-in `imagegen` skill exists but `image_gen` tool not exposed | Inconsistency between UI and API; breaks integrations expecting tool call interface. | 3 comments, 0 👍 – Highlights gap between features and developer APIs. |
| [#34841](https://github.com/openai/codex/issues/34841) | Windows sandbox fails to recover from 22 NUL bytes in `deny_read_acl_state.json` | Persistent state corruption after crash; requires manual intervention. | 9 comments, 1 👍 – Suggests deeper filesystem/state resilience flaw. |
| [#37212](https://github.com/openai/codex/issues/37212) | Project grouping disappears after app update/re-login | Loses organizational context; forces reassignment of threads. | 4 comments, 0 👍 – High friction for users managing multiple projects. |

---

### **4. Key PR Progress**  

| PR # | Title & Summary | Impact |
|------|------------------|--------|
| [#44002](https://github.com/openai/codex/pull/44002) | Encapsulate executed tool call metadata recording | Centralizes tool execution tracking; improves auditability and analytics accuracy. |
| [#43994](https://github.com/openai/codex/pull/43994) | Clear stale transcript history when switching threads | Prevents old content from polluting new threads; fixes replay inconsistencies. |
| [#43983](https://github.com/openai/codex/pull/43983) | Bundle signed voice resources in macOS releases | Resolves audio input access issues on Apple Silicon; enables secure voice workflows. |
| [#43959](https://github.com/openai/codex/pull/43959) | Gate new app-server work during graceful shutdown | Prevents race conditions during shutdown; ensures work completes before termination. |
| [#43950](https://github.com/openai/codex/pull/43950) | Keep app-server thread RPCs active until delegated work completes | Fixes premature connection drops during long-running turns. |
| [#43949](https://github.com/openai/codex/pull/43949) | Add transactional thread attachment mutations to the state runtime | Ensures atomicity in thread metadata changes; reduces risk of corruption. |
| [#43947](https://github.com/openai/codex/pull/43947) | Surface MCP reconnect signals when OAuth refresh fails | Improves error visibility; enables automatic recovery from auth expiry. |
| [#43942](https://github.com/openai/codex/pull/43942) | Show worktree owner details and add confirmed deletion | Enhances UX for managed worktrees; adds safety guardrails. |
| [#43939](https://github.com/openai/codex/pull/43939) | Add executor-context filesystem permission helpers | Enables robust remote execution policies based on host context. |
| [#43934](https://github.com/openai/codex/pull/43934) | Track voice session lifecycle metrics in the TUI | Enables performance monitoring and debugging of voice interactions. |

---

### **5. Hot Discussions**  

#### **Ideas**  
- [#9618](https://github.com/openai/codex/discussions/9618) *How is there not a /rewind or /revert feature?*  
  > Demand for undo functionality is overwhelming (123 👍, 21 comments). Users cite OpenCode and Claude Code as benchmarks; essential for safe experimentation.  
- [#42965](https://github.com/openai/codex/discussions/42965) *Track source turn/window provenance for persisted world state*  
  > Request for lineage tracking of AI-generated state changes—key for reproducibility and debugging complex agent workflows.  
- [#43696](https://github.com/openai/codex/discussions/43696) *Wake on LAN*  
  > Feature request to trigger remote machine wake-up via mobile app—useful for remote development environments.  
- [#43788](https://github.com/openai/codex/discussions/43788) *Codex usage transparency and subscription-based API*  
  > Developers want clear cost estimation per task and more predictable usage models.  

#### **Q&A**  
- [#41714](https://github.com/openai/codex/discussions/41714) *How to specify default project root directory?*  
  > Users lack control over default project creation paths—common pain point for structured workflows.  
- [#43257](https://github.com/openai/codex/discussions/43257) *How does experimental context management count history lookups against limits?*  
  > Critical question for Pro users managing long-term tasks; unclear how retrieval impacts usage caps.  
- [#42983](https://github.com/openai/codex/discussions/42983) *Something feels off with the usage limits*  
  > Users report unexpected burn rate even with low-cost models—suggests possible metering inaccuracies.  

#### **Show and tell**  
- [#16329](https://github.com/openai/codex/discussions/16329) *Awesome Codex CLI — curated list of 150+ ecosystem tools*  
  > Comprehensive catalog of subagents, skills, plugins, and MCP servers—valuable resource for developers.  
- [#41642](https://github.com/openai/codex/discussions/41642) *Compact Context: a local five-file starting map for Codex*  
  > Lightweight file-ranking tool that accelerates context selection without altering full repo access.  
- [#43908](https://github.com/openai/codex/discussions/43908) *ManualMode: reserve real repo tasks for manual practice*  
  > Promotes learning-by-doing; allows engineers to use Codex for ideation while retaining hands-on coding practice.  

---

### **6. Feature Request Trends**  
- **Undo/Revert Functionality**: Repeated calls for `/rewind`, `/revert`, or persistent version rollback—essential for safe experimentation.  
- **Usage Transparency**: Strong demand for real-time cost estimation and detailed breakdowns of how model usage (especially context lookups) impacts quotas.  
- **Enhanced Session Control**: Requests for persistent timestamps in message history, better thread migration, and project persistence across updates.  
- **Developer Tooling Integration**: Growing interest in native support for WOL, terminal multiplexer detection, and improved CI/CD pipeline compatibility.  
- **Safety & Recovery**: Increased focus on preventing data loss, handling corrupted states (e.g., sandbox files), and ensuring atomic operations in state management.

---

### **7. Developer Pain Points**  
- **Model Availability Gaps**: `gpt-5.5` is listed as available locally but returns 404—indicating metadata mismatch or rollout sync issues.  
- **Data Loss Risks**: Recursive deletion bugs can permanently erase project files, especially under sandboxed execution.  
- **UI/Process Crashes**: Frequent app freezes, blank screens, and unresponsive processes (esp. on macOS with `SkyComputerUseService`).  
- **Inconsistent Tool Exposure**: Built-in features like `imagegen` are not accessible via tool call APIs, breaking automation pipelines.  
- **Poor State Persistence**: Project grouping, thread assignments, and permissions are lost after app updates or re-logins.  
- **Opaque Usage Metering**: Users report unpredictable consumption patterns—even with lower-tier models—raising concerns about fairness and predictability.  

> ✅ **Recommendation**: Developers should avoid `gpt-5.5` until resolved; back up project directories; monitor `codex doctor` output for state integrity warnings.

---  
*Digest generated: 2026-09-09 | Source: [openai/codex GitHub](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-09-09

---

### **1. Today's Highlights**  
The Gemini CLI team released **v0.61.0-nightly.20260909.ged2ac40df**, addressing critical sandbox security and NTFS path handling issues. Key fixes include hardening filesystem boundaries in containers, isolating settings directories, and resolving a long-standing bug where `MAX_TURNS` violations were incorrectly reported as goal successes—improving reliability for agent workflows.

---

### **2. Releases**  
- **v0.61.0-nightly.20260909.ged2ac40df**  
  - ✅ Fix: Mitigates NTFS 8.3 short name (SFN) path issues on Windows via improved path normalization.  
  - ✅ Fix: Isolates settings directory within sandbox containers to prevent leakage.  
  - 🔧 Internal: Automated version bump for nightly release (PR #29258).  

- **v0.60.0-preview.0**  
  - ✅ Fix: Improved destination validation and connection routing in web fetch utilities (PR #29120).  
  - ✅ Fix: Enforces RFC 9207 issuer identification in MCP OAuth flow (PR #29120).  

- **v0.59.0**  
  - 📝 Changelog generated; includes minor stability improvements and dependency updates (PR #29082, #29083).

> 🔗 [GitHub Release v0.61.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260909.ged2ac40df)

---

### **3. Hot Issues**  
| Issue | Summary | Why It Matters | Community Reaction |
|------|--------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL success` despite hitting `MAX_TURNS` limit | Breaks trust in agent progress tracking; leads to silent failures during codebase investigation | 13 comments, 2 👍 — P1 priority, needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Critical UX blocker; prevents any workflow progression | 8 comments, 8 👍 — P1, still active |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s native bash affinity with OS sandboxing | High-value enhancement to align with Gemini 3’s POSIX-native training | 9 comments, 1 👍 — P2, major architectural direction |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads/search/mapping | Could reduce token bloat and improve code navigation precision | 7 comments, 1 👍 — P2, foundational for future agent intelligence |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini ignores custom skills/sub-agents | Hinders extensibility and user-defined automation | 6 comments, 0 👍 — P2, reflects core agent behavior gap |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory logs secrets before redaction | Security risk due to context exposure prior to redaction | 5 comments, 0 👍 — P2, high-risk fix needed |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions endlessly | Causes infinite loops and resource waste | 4 comments, 0 👍 — P2, impacts memory system reliability |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution hangs after completion | Frequent user frustration; breaks CI/CLI automation | 4 comments, 3 👍 — P1, reproducible across environments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent fails to recover from locked sessions | Blocks persistent browser workflows in dev environments | 4 comments, 0 👍 — P3, affects GUI automation |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails under Wayland | Platform-specific regression affecting Linux users | 4 comments, 1 👍 — P1, requires cross-platform testing |

---

### **4. Key PR Progress**  
| PR | Summary | Impact | Link |
|----|--------|--------|------|
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | Harden sandbox filesystem boundaries & isolate runtime state | Prevents host config leaks; improves container security | [View PR](https://github.com/google-gemini/gemini-cli/pull/29214) |
| [#29156](https://github.com/google-gemini/gemini-cli/pull/29156) | Preserve user git config in shell executions | Fixes broken `git config` behavior in tool calls | [View PR](https://github.com/google-gemini/gemini-cli/pull/29156) |
| [#29155](https://github.com/google-gemini/gemini-cli/pull/29155) | Correct BOM decoding in `isEmpty()` | Prevents false positives in plan validation | [View PR](https://github.com/google-gemini/gemini-cli/pull/29155) |
| [#29151](https://github.com/google-gemini/gemini-cli/pull/29151) | Case-insensitive skill precedence & activation | Resolves naming inconsistency bugs in skill overrides | [View PR](https://github.com/google-gemini/gemini-cli/pull/29151) |
| [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | Prevent crash during auth in restricted Git repos | Enables startup in macOS Seatbelt environments | [View PR](https://github.com/google-gemini/gemini-cli/pull/29163) |
| [#29087](https://github.com/google-gemini/gemini-cli/pull/29087) | Prevent concurrent extension install races | Avoids file corruption during multi-process installs | [View PR](https://github.com/google-gemini/gemini-cli/pull/29087) |
| [#29089](https://github.com/google-gemini/gemini-cli/pull/29089) | Forward abortSignal to retryWithBackoff | Improves responsiveness in interrupted API calls | [View PR](https://github.com/google-gemini/gemini-cli/pull/29089) |
| [#29063](https://github.com/google-gemini/gemini-cli/pull/29063) | Stop Plan Mode from waiting for feedback in non-interactive mode | Fixes hanging in CI/automation pipelines | [View PR](https://github.com/google-gemini/gemini-cli/pull/29063) |
| [#29252](https://github.com/google-gemini/gemini-cli/pull/29252) | Preserve explicit Flash model IDs | Ensures accurate model pinning and error reporting | [View PR](https://github.com/google-gemini/gemini-cli/pull/29252) |
| [#29137](https://github.com/google-gemini/gemini-cli/pull/29137) | Bump 77 npm dependencies | Maintains ecosystem health and security | [View PR](https://github.com/google-gemini/gemini-cli/pull/29137) |

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*

---

### **6. Feature Request Trends**  
The community is converging on three major feature directions:  
1. **Agent Intelligence & Autonomy**: Users want agents to *natively use* tools like `grep`, `sed`, and `awk` without prompting (Issue #19873), and to better leverage AST-aware code analysis (Issues #22745, #22746).  
2. **Reliability & Visibility**: Demand for transparent subagent trajectories (Issue #22598), proper error signaling (Issue #22323), and session resilience (Issues #22232, #21409).  
3. **Security & Privacy**: Strong push for deterministic redaction (Issue #26525), secure sandboxing (PR #29214), and reduced logging of sensitive data (Issue #26522).

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Agent hangs** (e.g., generalist agent, browser agent) — severely disrupts workflow continuity (#21409, #21983).  
- **Misleading status reporting** — e.g., `MAX_TURNS` violation falsely marked as success (#22323).  
- **Unpredictable shell behavior** — commands hang post-completion or fail silently (#25166).  
- **Tool misuse** — model generates scripts in random locations, causing cleanup overhead (#23571).  
- **Configuration fragility** — symlinks not recognized, settings ignored in agents (#20079, #22267).  
- **Memory system flaws** — auto-extraction skips invalid patches silently (#26523), and sessions retry infinitely (#26522).

> These pain points highlight the need for stronger agent self-awareness, robust error handling, and clearer developer feedback mechanisms.

---  
*Generated: 2026-09-09 | Source: GitHub @ google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-09

---

### **1. Today's Highlights**  
The latest release, **v1.0.84-3**, introduces **Vim mode support for all users** via `/vim` or `editorMode: vim`, marking a major step toward keyboard-centric workflows. This update also improves OAuth reliability for MCP servers and ensures task completion messages are preserved during `/copy`. The community response reflects strong demand for modal editing, with prior feature requests now being fulfilled.

---

### **2. Releases**

#### **v1.0.84-3 (Latest)**  
- ✅ **New**: Vim mode is now available to all users. Enable via `/vim` or `editorMode: vim` in config. Modal editing experience shown in real-time.
- 🛠️ **Fixed**: `/copy` now includes task completion messages when available.
- 🛠️ **Improved**: OAuth-authenticated MCP servers connect reliably at session startup.
- 🛠️ **Enhanced**: On supported Windows sandbox policies, interactive shell commands now log blocked file accesses.

> 🔗 [Release v1.0.84-3 on GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.84-3)

#### **v1.0.84-2 (Previous)**  
- ✅ **New**: Vim mode rolled out as a public beta; now fully enabled for everyone.
- 🛠️ **Improved**: Enhanced stability and responsiveness in TUI rendering under high load.

> 🔗 [Release v1.0.84-2 on GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.84-2)

---

### **3. Hot Issues**

| Issue | Summary | Why It Matters | Community Reaction |
|------|--------|----------------|--------------------|
| [#13](https://github.com/github/copilot-cli/issues/13) | Request for vi/vim input mode in CLI | Long-standing demand for efficient keyboard-driven editing in Copilot CLI. Now addressed in v1.0.84-2. | 👍 76 votes, closed after implementation |
| [#4756](https://github.com/github/copilot-cli/issues/4756) | Windows app requires archiving idle sessions before new Local session | Blocks workflow continuity; impacts productivity for enterprise Windows users. | 👍 19, highlights platform-specific friction |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | JavaScript heap out of memory on long session resume | Crashes on large sessions; affects power users doing extended agent work. | 👍 2, critical for session longevity |
| [#4753](https://github.com/github/copilot-cli/issues/4753) | Session resume cancels in-flight MCP server connections (~1s timeout vs ~16s previously) | Breaks tool availability post-resume; silent failure risk. | 👍 1, shows regression in resilience |
| [#4505](https://github.com/github/copilot-cli/issues/4505) | Resumed session retains stale connection item IDs → `400 input item ID does not belong to this connection` | Prevents any prompt from working after resume; severe usability blocker. | 👍 3, recurring issue across versions |
| [#4742](https://github.com/github/copilot-cli/issues/4742) | Cannot create second Local session if one is active | App crashes session creation due to “This project already has an active Local workspace” error. | 👍 5, impacts multitasking |
| [#4612](https://github.com/github/copilot-cli/issues/4612) | Runaway FileWatch loop freezes TUI and fills logs to 13 GB | High resource consumption leads to unresponsive UI and disk exhaustion. | 👍 1, indicates deep system-level instability |
| [#4757](https://github.com/github/copilot-cli/issues/4757) | `--yolo` disabled permanently even with no managed policy | Security posture applied incorrectly; breaks trust in bypass mode. | 👍 0, but highlights misaligned enterprise policy logic |
| [#4765](https://github.com/github/copilot-cli/issues/4765) | CLI fails to read config from non-repo root directories | Hinders use in multi-project workspaces without Git roots. | 👍 0, niche but impactful for monorepo-like setups |
| [#4755](https://github.com/github/copilot-cli/issues/4755) | Session wedges permanently after queued message lands at turn end | Silent failure state with no recovery path—requires process kill. | 👍 0, high severity despite low engagement |

---

### **4. Key PR Progress**

| PR | Summary | Status | Link |
|----|--------|--------|------|
| [#4770](https://github.com/github/copilot-cli/pull/4770) | Document WebSocket responses opt-out mechanism | Open | [PR #4770](https://github.com/github/copilot-cli/pull/4770) |
| [#4761](https://github.com/github/copilot-cli/pull/4761) | Installer reports unsupported OS (e.g., FreeBSD) | Closed | [PR #4761](https://github.com/github/copilot-cli/pull/4761) |
| [#4762](https://github.com/github/copilot-cli/pull/4762) | Fix installer detection for non-Linux/macOS platforms | Closed | [PR #4762](https://github.com/github/copilot-cli/pull/4762) |
| [#4100](https://github.com/github/copilot-cli/pull/4100) | Security patch (debug branch) | Closed | [PR #4100](https://github.com/github/copilot-cli/pull/4100) |
| [#4759](https://github.com/github/copilot-cli/pull/4759) | Add MCP cancellation request support for in-flight tool calls | Open | [PR #4759](https://github.com/github/copilot-cli/pull/4759) |
| [#4750](https://github.com/github/copilot-cli/pull/4750) | Optimize CPU usage in TUI rendering | Open | [PR #4750](https://github.com/github/copilot-cli/pull/4750) |
| [#4743](https://github.com/github/copilot-cli/pull/4743) | Improve session cleanup on abort/resume failures | Open | [PR #4743](https://github.com/github/copilot-cli/pull/4743) |
| [#4738](https://github.com/github/copilot-cli/pull/4738) | Add debug logging for MCP discovery failures | Open | [PR #4738](https://github.com/github/copilot-cli/pull/4738) |
| [#4735](https://github.com/github/copilot-cli/pull/4735) | Support for dynamic scope injection in Entra ID OAuth | Open | [PR #4735](https://github.com/github/copilot-cli/pull/4735) |
| [#4732](https://github.com/github/copilot-cli/pull/4732) | Enhance context memory compaction error handling | Open | [PR #4732](https://github.com/github/copilot-cli/pull/4732) |

> 💡 *Note:* Multiple PRs focus on improving session resilience, error visibility, and cross-platform compatibility—key areas of concern.

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset. This section is omitted.*

---

### **6. Feature Request Trends**

Based on top Issues and PRs, the most requested feature directions include:

- **Modal Editing & Keyboard Efficiency**: Vim mode is now live, but users still want advanced keybindings, visual indicators, and better integration with TUI.
- **Session Stability & Recovery**: Persistent issues around session resumption, memory leaks, and deadlocks indicate a need for more robust lifecycle management.
- **Enterprise & Policy Flexibility**: Demand for granular control over `--yolo`, permission enforcement, and secure MCP registry access (e.g., Authenticated MCP registry reads).
- **Multi-Project & Workspace Support**: Users working outside Git repos or in nested project structures need better config discovery and isolation.
- **Tooling & Model Interoperability**: Gemini model compatibility issues (e.g., union types), plus interest in OpenRouter integration, show demand for broader model ecosystem support.
- **MCP Ecosystem Enhancements**: Need for MCP Profiles, cancellation signals, and improved discovery + caching behavior.

> 🔗 See: [#2235](https://github.com/github/copilot-cli/issues/2235) (MCP Profiles), [#4759](https://github.com/github/copilot-cli/issues/4759) (Cancellation), [#2943](https://github.com/github/copilot-cli/issues/2943) (OpenRouter)

---

### **7. Developer Pain Points**

Recurring frustrations reported by developers:

- **Session Corruption & State Loss**: Frequent crashes (`JavaScript heap out of memory`), frozen UIs (`FileWatch loop`), and permanent wedges after resume (`4505`, `4755`) severely impact workflow continuity.
- **Inconsistent Session Management**: Inability to run multiple Local sessions simultaneously (#4742), and forced archiving of idle sessions (#4756) disrupt parallel development.
- **Opaque Error Messages**: Errors like `400 input item ID does not belong to this connection` lack context, making debugging difficult.
- **Platform-Specific Bugs**: macOS Malloc warnings (#4614), Windows Git config pollution (#4531), and FreeBSD install issues (#4761/#4762) reveal gaps in cross-platform testing.
- **Security Overreach**: Misapplication of `fail-closed` policies even when no policy exists (#4757), and lack of approval prompts in Docker sandboxes (#4609) erode trust in safety controls.

> These pain points suggest a need for deeper observability, better error messaging, and more predictable session lifecycles.

---  
*Digest generated: 2026-09-09 | Source: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# **OpenCode Community Digest – 2026-09-09**

---

### **1. Today's Highlights**  
The OpenCode community continues to prioritize stability and performance improvements, with critical fixes for model compatibility (especially Gemma 4/e4b), streaming tool call recognition, and session persistence. Key PRs focus on modularizing the desktop app via plugin extraction, enhancing CLI usability, and improving context management—particularly around auto-compaction and token tracking.

---

### **2. Releases**  
*No new releases in the last 24 hours.*

---

### **3. Hot Issues**  

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#20995](https://github.com/anomalyco/opencode/issues/20995) | Gemma 4 (e4b) fails to stream `tool_calls` via Ollama’s OpenAI-compatible API — a major blocker for developers relying on local inference with tool calling. | 🔥 36 comments, 48 👍 – High urgency due to growing use of Ollama + Gemma stack |
| [#6096](https://github.com/anomalyco/opencode/issues/6096) | Request for real-time TPS (tokens per second) display per message — essential for benchmarking and cost-aware AI workflows. | 📈 21 comments, 73 👍 – One of the most popular feature requests |
| [#47296](https://github.com/anomalyco/opencode/issues/47296) | Amazon Bedrock GPT-5.6 double-counts cached input tokens, triggering unnecessary auto-compaction after every message. | ⚠️ 3 comments, 0 👍 – Impacts long-session efficiency and cost predictability |
| [#36237](https://github.com/anomalyco/opencode/issues/36237) | Web UI session list remains empty when embedded in iframe (e.g., VS Code extension), breaking integration ecosystems. | 🧩 3 comments, 0 👍 – Critical for plugin and IDE integrators |
| [#36256](https://github.com/anomalyco/opencode/issues/36256) | Web mode streaming stops after directory switch; leads to `Message not found` errors and UI crashes post-v1.17.13. | 🛠️ 2 comments, 2 👍 – Regression affecting core user experience |
| [#36326](https://github.com/anomalyco/opencode/issues/36326) | Misleading UX: users believe conversations persist across reboots, but sessions start fresh — contradicts documentation. | 💬 2 comments, 0 👍 – Highlights need for clearer persistence semantics |
| [#36316](https://github.com/anomalyco/opencode/issues/36316) | Kimi models stop agent loops after first tool call; reasoning content not handled properly in multi-step tasks. | ⚠️ 2 comments, 0 👍 – Blocks advanced agent workflows on MoonshotAI providers |
| [#36289](https://github.com/anomalyco/opencode/issues/36289) | Subagent model config is ignored — all subagents default to primary model, undermining fine-grained control. | 🤔 2 comments, 1 👍 – Undermines agent orchestration design |
| [#36271](https://github.com/anomalyco/opencode/issues/36271) | Ctrl-C in embedded terminal both copies text and sends SIGINT — breaks reliable text selection. | ⌨️ 2 comments, 0 👍 – Annoying UX issue for remote development |
| [#36266](https://github.com/anomalyco/opencode/issues/36266) | No way to disable mouse tracking in TUI over SSH — prevents text copying from remote terminals. | 🖱️ 2 comments, 0 👍 – Major pain point for CLI-heavy workflows |

---

### **4. Key PR Progress**  

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#48058](https://github.com/anomalyco/opencode/pull/48058) | Trims excessive compaction summaries (now under 30k chars), reducing noise and improving performance on long sessions. | ✅ Open |
| [#48057](https://github.com/anomalyco/opencode/pull/48057) | Ports Astra system prompt from V2 into core; enables model-specific routing for GPT-6 models. | ✅ Closed |
| [#48056](https://github.com/anomalyco/opencode/pull/48056) | Adds `opencode2 uninstall` command with config/data retention options — restores missing V2 cleanup functionality. | ✅ Open |
| [#48055](https://github.com/anomalyco/opencode/pull/48055) | Refactors CLI commands: moves `import`/`export` under `session` namespace for better organization. | ✅ Closed |
| [#48043](https://github.com/anomalyco/opencode/pull/48043) | Removes deprecated `PATCH /message` mutation API — simplifies state management and reduces attack surface. | ✅ Closed |
| [#48050](https://github.com/anomalyco/opencode/pull/48050) | Introduces `auth switch [target]` and targeted `auth logout` — improves account management in multi-account environments. | ✅ Closed |
| [#47753](https://github.com/anomalyco/opencode/pull/47753) | Adds native SSH server connections with persistent tunnels, saved hosts, reconnect logic, and health indicators. | ✅ Closed |
| [#48048](https://github.com/anomalyco/opencode/pull/48048) | Adds experimental DeepSeek Harness ACP backend — allows opt-in execution via ACP while preserving native behavior. | ✅ Open |
| [#48045](https://github.com/anomalyco/opencode/pull/48045) | Extracts terminal as standalone desktop extension (`@opencode/plugin-terminal-desktop`). | ✅ Open |
| [#47948](https://github.com/anomalyco/opencode/pull/47948) | Moves context usage stats and UI into `@opencode/plugin-context-desktop` — paves way for modular UI components. | ✅ Open |

> *Note: Multiple PRs are part of an ongoing effort to refactor OpenCode into a plugin-driven desktop architecture, enabling greater customization and maintainability.*

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*

---

### **6. Feature Request Trends**  
Top emerging directions from community feedback:
- **Performance & Metrics**: Real-time TPS tracking (#6096), token metadata visibility (#36216), and reduced compaction overhead.
- **Modular Architecture**: Demand for plugin-based extensions (e.g., terminal, context, review panels) to enable custom UIs and faster iteration.
- **Multi-Provider Stability**: Fixing model-specific issues across providers (Gemma, Kimi, Bedrock, DeepSeek).
- **User Experience Enhancements**: Better session persistence clarity, improved keyboard shortcuts (e.g., `/skills`, toggle thinking), and smoother workflow transitions.
- **CLI Improvements**: Account switching, uninstallation, and structured command hierarchy.

---

### **7. Developer Pain Points**  
Recurring frustrations include:
- **Streaming & Tool Calling Failures**: Models like Gemma 4 and Kimi fail to stream or handle tool calls correctly, especially via proxy APIs.
- **Session Persistence Misalignment**: Users assume sessions survive restarts, but they don’t — causing confusion and lost work.
- **UX Conflicts in Terminal/SSH**: Ctrl-C behavior conflicts, mouse tracking in TUI preventing copy-paste.
- **Inconsistent Config Loading**: Project-level configs not overriding global ones despite documentation claims.
- **Plugin Discovery & Visibility**: Custom skills registered via v2 plugins not appearing in `/skills` command.
- **Embedded UI Limitations**: Web UI fails to load sessions properly when embedded in iframes (e.g., IDE extensions).

---

*Stay tuned for next week’s digest — expect deeper coverage of plugin architecture and provider stability updates.*  
🔗 [OpenCode GitHub Repository](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-09-09

---

### **1. Today's Highlights**  
The Pi community is actively addressing critical authentication and compatibility issues as OpenCode Go and Bedrock Mantle models enforce new header requirements (`x-opencode-session`, OpenAI-compatible API). Meanwhile, ongoing work on WebSocket resilience, streaming cancellation, and startup performance reflects a strong focus on reliability and UX polish across edge cases.

---

### **2. Releases**  
*No new releases in the last 24 hours.*

---

### **3. Hot Issues**  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#5363](https://github.com/earendil-works/pi/issues/5363) Add `amazon-bedrock-mantle` provider | Enables support for new AWS Bedrock Mantle models via OpenAI-compatible API; essential for users leveraging Anthropic-style inference with AWS. | 19 comments, 15 👍 – high demand due to growing adoption of Bedrock Mantle |
| [#9230](https://github.com/earendil-works/pi/issues/9230) `opencode-go` missing `x-opencode-session` | Breaks all `opencode-go` requests since 2026-09-06; affects extension and native flows alike. | 6 comments, 1 👍 – urgent fix needed; multiple PRs already referencing it |
| [#9302](https://github.com/earendil-works/pi/issues/9302) Out-of-loop summarization fails with `MissingSessionID` | Affects automated summaries and compaction workflows using OpenCode providers. Shows systemic auth gap beyond user turns. | 3 comments – highlights need for consistent header handling across all paths |
| [#9326](https://github.com/earendil-works/pi/issues/9326) `@earendil-works/pi-ai` never sends session header | Directly impacts core AI package; blocks usage of OpenCode Zen free tier. | 2 comments – confirmed regression; tied to #9302 |
| [#8823](https://github.com/earendil-works/pi/issues/8823) Esc during streaming doesn’t cancel request | User experience issue: pressing Esc often has no effect until model finishes—frustrating during long responses. | 10 comments – widely reported, especially in interactive mode |
| [#7444](https://github.com/earendil-works/pi/issues/7444) WebSocket retry only handles two error codes | Causes hard stops on transient errors beyond `previous_response_not_found` and `websocket_connection_limit_reached`. | 10 comments – seen as a reliability bottleneck in unstable networks |
| [#9212](https://github.com/earendil-works/pi/issues/9212) Sonnet-5 edit tool calls truncated (edits:[{}]) | 13% failure rate in `edit` tool calls leads to schema validation errors; impacts code generation quality. | 4 comments – serious stability concern for agents relying on editing |
| [#9052](https://github.com/earendil-works/pi/issues/9052) Fullscreen wheel scroll 3x slower | Usability blocker in fullscreen mode; undermines the value proposition of fixed input. | 7 comments, 3 👍 – clear pain point for power users |
| [#7445](https://github.com/earendil-works/pi/issues/7445) `developer` role tied to `model.reasoning` | Misleading behavior: role selection depends on reasoning flag, not actual provider support. | 6 comments – breaks expected workflow for developers |
| [#9359](https://github.com/earendil-works/pi/issues/9359) `TruncatedText` exceeds width with padding | Visual glitch affecting layout integrity in constrained UIs. | 2 comments – minor but visible bug in terminal rendering |

---

### **4. Key PR Progress**

| PR | Summary | Status |
|----|--------|--------|
| [#9351](https://github.com/earendil-works/pi/pull/9351) Fix edit preview flicker | Addresses visual flicker when remote edits replace local "Could not edit" state. Improves confidence in edit tool UX. | Open |
| [#9350](https://github.com/earendil-works/pi/pull/9350) Fork-free executable lookup | Prevents deadlocks on Android by avoiding `fork()` in `findExecutableOnPath` and `commandExists`. Critical for cross-platform stability. | Merged |
| [#9347](https://github.com/earendil-works/pi/pull/9347) Fix/gondolin undici and hook | Updates `undici` to v6.28.0 to patch moderate security vulnerability; cleans stale pre-commit hooks. | Merged |
| [#9345](https://github.com/earendil-works/pi/pull/9345) Expose Anthropic OAuth usage reports | Adds provider-neutral usage reporting and refresh logic for Anthropic OAuth. Enhances observability. | Merged |
| [#9344](https://github.com/earendil-works/pi/pull/9344) Add owner-safe UI overrides | Enables safe theme/footer/editor override persistence across sessions without breaking upgrades. | Merged |
| [#9341](https://github.com/earendil-works/pi/pull/9341) Update runtime dependencies | Upgrades `minimatch` and others while preserving existing versions; regenerates lockfiles. | Merged |
| [#9337](https://github.com/earendil-works/pi/pull/9337) Fix compaction estimate & context display | Patches three bugs related to failed/aborted turn tracking in compaction and context cost display. | Merged |
| [#9329](https://github.com/earendil-works/pi/pull/9329) Detect Orca terminals as Kitty-image capable | Allows inline image rendering in Orca terminal by treating it as Kitty-compatible. Improves rich output support. | Open |
| [#9319](https://github.com/earendil-works/pi/pull/9319) Guard optional `invalidate` in `MouseRegion` | Prevents crashes from extensions omitting `invalidate()` method. Increases robustness. | Merged |
| [#9316](https://github.com/earendil-works/pi/pull/9316) Fix three small issues (#8919, #8717, #8720) | Bundles fixes for zero-row footers, input clearing, and other minor regressions. | Merged |

---

### **5. Hot Discussions**

#### **Ideas**
- [#8803](https://github.com/earendil-works/pi/discussions/8803) **pi-verdict** – A minimal, zero-dependency permission gate for tool execution. Offers a plug-in replacement for “no popups” policy. *“Run in container or build your own confirmation flow.”*  
- [#9327](https://github.com/earendil-works/pi/discussions/9327) **Eco Coding** – A GUI built on top of Pi with vision split, mobile support, browser integration, and team collaboration features. Targets non-terminal users.  
- [#9312](https://github.com/earendil-works/pi/discussions/9312) **Pi Context Memory** – Experiment to trace decisions back to original conversation after compaction. Aims to improve agent transparency and debugging.

#### **Show and Tell**
- [#9327](https://github.com/earendil-works/pi/discussions/9327) Eco Coding – First public showcase of a full desktop GUI powered by Pi’s agent loop. Demonstrates extensibility beyond CLI.

---

### **6. Feature Request Trends**  
- **Authentication Consistency**: Multiple issues highlight a recurring need for uniform header propagation (especially `x-opencode-session`) across all APIs and execution paths.
- **Streaming & Cancellation Control**: Users demand reliable interruptibility (Esc key) and immediate abort behavior during streaming.
- **Performance & Startup Optimization**: Growing interest in reducing startup latency and memory footprint, targeting parity with jcode-comparable benchmarks.
- **Extension Resilience & Safety**: Requests for idempotent message delivery, safe UI overrides, and proper event triggering (e.g., `input` events on RPC commands).
- **Cross-Platform & Terminal Support**: Enhanced detection for modern terminals like Orca and Kitty, including image and hyperlink support.

---

### **7. Developer Pain Points**  
- **Header Propagation Gaps**: The absence of `x-opencode-session` in multiple contexts (core library, extensions, out-of-loop summaries) causes widespread failures post-2026-09-06.  
- **Inconsistent Error Handling**: WebSocket retries fail silently on unhandled error codes, leading to abrupt termination instead of recovery.  
- **Stream Cancellation Delays**: Pressing Esc often does not stop active HTTP requests until completion—a major UX friction point.  
- **Startup Overhead**: Lazy loading of extensions remains unimplemented despite ~4.2 seconds of pure module load time reported in profiles.  
- **Extension Stability Risks**: Missing `invalidate()` methods cause crashes in custom components; lack of defensive guards in UI layers.  
- **Tool Call Reliability**: Truncation in `edit` tool outputs (e.g., `edits:[{}]`) reduces trust in agent-generated changes.  

---  
*Digest generated: 2026-09-09 | Source: [github.com/earendil-works/pi](https://github.com/earendil-works/pi)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026-09-09**

---

### **1. Today's Highlights**  
The Qwen Code team released **v0.23.2-preview.0**, focusing on CI stability and Windows process management. A critical fix isolates heavy E2E subprocesses from fork pressure, improving reliability in concurrent workflows. Additionally, the **`@qwen-code/webui`** is officially retired as part of a broader refactoring initiative to streamline core tooling.

---

### **2. Releases**  
- **v0.23.2-preview.0** (Latest)  
  - *Fix*: Isolated subprocess-heavy E2E tests from fork contention via improved CI isolation ([#11388](https://github.com/QwenLM/qwen-code/pull/11388)).  
- **v0.23.1** (Previous)  
  - Includes managed memory and prompt cache fixes now bundled into `@qwen-code/sdk` v0.1.10 ([#11022](https://github.com/QwenLM/qwen-code/issues/11022)).

---

### **3. Hot Issues**  
| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#11303](https://github.com/QwenLM/qwen-code/issues/11303) | **Windows-specific memory leak**: qwen-cli leaks 347 `conhost.exe` processes (~2.8 GB RAM after 12h). Critical for long-running VS Code sessions. | 🔥 10 comments, high urgency — P1 priority; split into two sub-issues ([#11352](https://github.com/QwenLM/qwen-code/issues/11352) covers conhost half). |
| [#11410](https://github.com/QwenLM/qwen-code/issues/11410) | Local models fail post-Windows 11 update with API 400 errors. Blocks local dev workflow for many users. | 🔥 3 comments, P1; suggests regression in v0.23.1. |
| [#11386](https://github.com/QwenLM/qwen-code/issues/11386) | **Scalability bottleneck**: Daemon workspaces capped at 25. Proposal to decouple registration from live runtime using LRU. | 📈 3 comments; highlights performance ceiling in large-scale use. |
| [#11394](https://github.com/QwenLM/qwen-code/issues/11394) | Docker-based SDK tests fail due to shared `QWEN_HOME` state — memory prefetch corrupts scripted responses. | ⚠️ 3 comments; impacts test reliability across CI pipelines. |
| [#11420](https://github.com/QwenLM/qwen-code/issues/11420) | Release builds from red CI commits: nightly built from a commit failing CI for over 1h40m. Risk of unstable releases. | 🔥 2 comments; urgent need for CI verdict validation before release. |
| [#11352](https://github.com/QwenLM/qwen-code/issues/11352) | Unfixable `conhost.exe` leak from `node-pty` pin — requires upstream dependency update. | 🔥 3 comments; highlights dependency lock-in risk. |
| [#11405](https://github.com/QwenLM/qwen-code/issues/11405) | Overly strict denial patterns prevent model from using tools *even partially*. Breaks granular permission control. | ⚠️ 3 comments; demands more flexible deny logic. |
| [#11335](https://github.com/QwenLM/qwen-code/issues/11335) | Web Shell transcript drifts horizontally when turn navigation rail appears. UX degradation in UI alignment. | ✅ Closed; minor but visible visual glitch. |
| [#11008](https://github.com/QwenLM/qwen-code/issues/11008) | Deferred review findings from #10930 — unresolved follow-ups blocking merge. | 📌 3 comments; shows backlog accumulation in code reviews. |
| [#11385](https://github.com/QwenLM/qwen-code/issues/11385) | Web Shell sidebar spinner never appears during background agent notifications. Hides active processing. | 🔥 2 comments; affects user perception of system responsiveness. |

---

### **4. Key PR Progress**  
| PR | Summary | Impact |
|----|--------|--------|
| [#11387](https://github.com/QwenLM/qwen-code/pull/11387) | **DWS response delivery retry** with exponential backoff (max 5min). Ensures completion even under transient network failure. | Improves reliability of agent outputs. |
| [#11380](https://github.com/QwenLM/qwen-code/pull/11380) | Moves hover timestamp to bottom-right of messages; opaque background prevents text clipping. | Enhances readability in Web Shell transcript. |
| [#11276](https://github.com/QwenLM/qwen-code/pull/11276) | Adds **Web preview panel** for browser URLs with refresh, mobile/desktop views, and external open. | Enables real-time feedback in dev workflows. |
| [#11251](https://github.com/QwenLM/qwen-code/pull/11251) | Exposes assistant turn settlement lifecycle via host callback (outcome, stop reason, final message). | Enables richer observability and debugging. |
| [#11355](https://github.com/QwenLM/qwen-code/pull/11355) | Enforces disabled chat sources at source level — no polling or replay. | Strengthens privacy and security policies. |
| [#10687](https://github.com/QwenLM/qwen-code/pull/10687) | Guards channel PID files against PID reuse by validating Linux process-start tokens. | Prevents false-positive service detection. |
| [#11395](https://github.com/QwenLM/qwen-code/pull/11395) | Preserves caller-owned approval mode after ACP child reap — crucial for session continuity. | Fixes state loss in daemonized workflows. |
| [#11083](https://github.com/QwenLM/qwen-code/pull/11083) | Fixes visibility of channel settings when workspace is user home. | Resolves configuration blindness in standalone modes. |
| [#11348](https://github.com/QwenLM/qwen-code/pull/11348) | Enables `web_search` by default on ModelStudio Standard/Token Plan if backend supports it. | Reduces friction for developers using search. |
| [#11356](https://github.com/QwenLM/qwen-code/pull/11356) | Moves scheduled task icon to trailing metadata slot — frees leading space for status indicators. | Improves UI consistency in session lists. |

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*

---

### **6. Feature Request Trends**  
Top emerging directions from issues and PRs:
- **Enhanced UI/UX in Web Shell**: Real-time previews, better session navigation, visual alignment fixes.
- **Improved Workspace & Session Management**: Scalability beyond 25 workspaces, persistent state handling, background agent visibility.
- **Granular Permissions & Security**: Flexible deny patterns, per-session headers (`${session_id}`), stricter content filtering.
- **Local & On-Prem Integration**: Better support for local models (especially post-Windows update), improved CLI stability.
- **Reliability & Observability**: Retry mechanisms for DWS responses, full traceability of agent turns, and clearer error messaging.

---

### **7. Developer Pain Points**  
Recurring frustrations reported:
- **Windows Stability**: Persistent `conhost.exe` leaks (via `node-pty`) severely impact long-term usability.
- **CI/CD Flaws**: Re-running green CI jobs in release workflows causes unnecessary failures; releasing from red commits undermines trust.
- **State Management Gaps**: Loss of approval modes, session states, and permissions after restarts or resumptions.
- **Tooling Fragmentation**: Lack of clear guidance on managing remotes, web previews, and local configs.
- **Debugging Challenges**: Inconsistent error messages, missing telemetry, and poor visibility into background agent activity.

> 💡 *Recommendation*: Prioritize Windows stability fixes, enforce CI verdict checks before release, and invest in daemon state persistence and observability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*