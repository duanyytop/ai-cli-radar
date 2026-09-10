# OpenClaw Ecosystem Digest 2026-09-10

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-10 00:43 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest**  
**Date:** 2026-09-10  
**Source:** [GitHub: openclaw/openclaw](https://github.com/openclaw/openclaw)  

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense developer engagement and a rapidly evolving codebase. A significant number of high-severity bugs—particularly around session state, memory management, authentication, and process lifecycle—are actively being reported and discussed. While no new releases were published, the volume of PRs suggests multiple critical fixes are nearing integration. The community is focused on stability improvements, especially for production-grade deployments, with strong emphasis on reliability, security, and cross-platform consistency.

---

### **2. Releases**  
**None**  
No new releases were published as of 2026-09-10. The latest stable version remains **v2026.8.2**, with recent updates (e.g., v2026.9.1–v2026.9.3) introducing regressions that are now under investigation. Operators are advised to avoid upgrading until these critical issues are resolved.

---

### **3. Project Progress**  
**Merged/Closed PRs Today:** *Not applicable* — No PRs were merged or closed in the last 24 hours.  
**Key Fixes & Advancements in Active PRs:**  
- **#143573**: Fix for deterministic Matrix mention progress gate — resolves race conditions in message delivery.  
- **#142888**: Prevents live assistant text doubling when OpenAI providers resend full content in deltas — improves UX fidelity.  
- **#143531**: Adds clear error messages for SQLite schema drift failures — enhances diagnostic clarity.  
- **#143552 & #143553**: Refactor install and Codex config contracts using Zod schemas — improves type safety and maintainability.  
- **#137886 & #138755**: Enable direct plugin installation from Control UI and unify bundled/ClawHub discovery — streamlines workflow.  
- **#143541**: Makes chat widget actions visible on hover/focus — improves UI compactness and usability.  

These PRs reflect a focus on **robustness, observability, and user experience**, particularly in distributed systems and UI interactions.

---

### **4. Community Hot Topics**  
Top Issues by comment count and severity highlight systemic pain points:

| Issue | Summary | Comments | Severity | Link |
|------|--------|----------|----------|------|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | Intermittent "malformed JSON arguments" on `claude-sonnet-5` post-v2026.8.1 | 26 | 🐚 Platinum Hermit (P1) | [Link](https://github.com/openclaw/openclaw/issues/135111) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Child processes leak → zombie accumulation → runtime degradation | 15 | 🦪 Silver Shellfish (P1) | [Link](https://github.com/openclaw/openclaw/issues/97616) |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous persistence blocks Gateway event loop at scale | 15 | 🦞 Diamond Lobster (P1) | [Link](https://github.com/openclaw/openclaw/issues/119720) |
| [#137927](https://github.com/openclaw/openclaw/issues/137927) | Internal context block leaks into Telegram messages | 14 | 🦞 Diamond Lobster (P1) | [Link](https://github.com/openclaw/openclaw/issues/137927) |

**Analysis:** These top issues reveal deep concerns around **runtime stability**, **security hygiene**, and **scalability under load**. The recurring theme is that internal system components (processes, session state, memory) are not properly isolated or cleaned up, leading to cascading failures in production environments.

---

### **5. Bugs & Stability**  
**Critical Regressions & Crashes (Ranked by Impact):**

| Issue | Description | Status | Fix PR? | Link |
|------|------------|--------|---------|------|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | Malformed JSON in tool call → intermittent agent failure (Claude) | Closed | ❌ | [Link](https://github.com/openclaw/openclaw/issues/135111) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped child processes → zombie accumulation → performance degradation | Open | ❌ | [Link](https://github.com/openclaw/openclaw/issues/97616) |
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | Windows gateway fails to start after 2026.9.1 update due to silent exit | Open | ❌ | [Link](https://github.com/openclaw/openclaw/issues/137813) |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Sleep/resume on Windows → WebSocket reconnect stalls (30–60s) | Open | ❌ | [Link](https://github.com/openclaw/openclaw/issues/140010) |
| [#139714](https://github.com/openclaw/openclaw/issues/139714) | `update_runs` row never finalized → “update in progress” forever | Open | ❌ | [Link](https://github.com/openclaw/openclaw/issues/139714) |

**Trend:** Multiple P1/P2 bugs involve **state corruption**, **resource leaks**, and **silent failures**, particularly affecting **Windows**, **memory persistence**, and **authentication flows**. These are blockers for production use and indicate gaps in test coverage and recovery logic.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests show growing demand for **autonomy**, **observability**, and **flexibility**:

| Request | Summary | Priority | Link |
|--------|--------|----------|------|
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent-triggered context compaction (self-compact tool) | P2 | [Link](https://github.com/openclaw/openclaw/issues/6757) |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | Graceful sub-agent timeout with pre-warning | P3 | [Link](https://github.com/openclaw/openclaw/issues/6625) |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) | Add `/models test-fallback` command | P3 | [Link](https://github.com/openclaw/openclaw/issues/6599) |
| [#87584](https://github.com/openclaw/openclaw/issues/87584) | Make group room-event steering configurable | P2 | [Link](https://github.com/openclaw/openclaw/issues/87584) |
| [#143541](https://github.com/openclaw/openclaw/pull/143541) | Reveal chat widget actions on hover/focus | P2 | [Link](https://github.com/openclaw/openclaw/pull/143541) |

**Prediction:** Features like **agent self-compaction**, **configurable steering**, and **UI polish** are likely candidates for inclusion in **v2026.10.0**, given their alignment with current PRs and community demand.

---

### **7. User Feedback Summary**  
Real-world feedback reveals key pain points:

- **Security & Privacy:** Users report **internal context leaking into public channels** (#137927), raising concerns about data exposure.
- **Reliability:** Frequent **crash loops**, **zombie processes**, and **unrecoverable states** (e.g., stuck `update_runs`) make long-term operation unstable.
- **UX Friction:** Silent failures (e.g., `tools.deny` disabling memory persistence without warning) lead to **lost work and confusion**.
- **Cross-Platform Gaps:** Windows users face **gateway startup failures** and **sleep/resume instability**, while macOS users report **heartbeat output leakage**.
- **Tooling Gaps:** Missing trace context in hooks (#50291), poor diagnostics for schema drift (#143531), and lack of fallback testing (`/models test-fallback`) hinder debugging.

> 💬 *"I lost 2 hours of research because the agent silently failed to persist memory — no error, no warning."* – @fede-kamel, Issue #126906

---

### **8. Backlog Watch**  
**High-Impact Issues Waiting for Maintainer Attention:**

| Issue | Status | Why It Matters | Link |
|------|--------|----------------|------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Open | Blocks scalability; synchronous operations stall event loop | [Link](https://github.com/openclaw/openclaw/issues/119720) |
| [#137927](https://github.com/openclaw/openclaw/issues/137927) | Closed but unresolved | Security risk: sensitive context exposed in chat | [Link](https://github.com/openclaw/openclaw/issues/137927) |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) | Open | Provider read gates lock access to external plugins — breaks multi-surface workflows | [Link](https://github.com/openclaw/openclaw/issues/115367) |
| [#142037](https://github.com/openclaw/openclaw/issues/142037) | Open | Embedded runtime misclassifies replies as “mute” — breaks message routing | [Link](https://github.com/openclaw/openclaw/issues/142037) |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | Open | Doctor refuses valid legacy workspace setup — migration blocker | [Link](https://github.com/openclaw/openclaw/issues/142585) |

These issues represent **critical path blockers** for enterprise adoption and multi-agent orchestration. Their prolonged status signals a need for prioritization and dedicated maintainer review.

---

**Conclusion:** OpenClaw is a vibrant, rapidly evolving project with strong community momentum. However, **stability and reliability remain major challenges**, especially in production environments. While innovation in UI, autonomy, and observability is accelerating, the team must prioritize **fixing systemic bugs, improving diagnostics, and ensuring backward compatibility** to maintain trust and enable widespread adoption.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem (2026-09-10)**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source landscape in Q3 2026 is characterized by rapid architectural evolution, increasing focus on production-grade reliability, and a growing divergence between innovation-driven experimentation and stability-focused deployment readiness. Projects are actively addressing systemic issues around session state integrity, memory persistence, cross-platform consistency, and observability—indicating maturation beyond early prototyping. A clear trend toward modular, composable, and auditable agent runtimes is emerging, driven by enterprise use cases and multi-agent orchestration needs.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score |
|--------|------------------|----------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | ❌ None | ⚠️ **Low–Moderate Risk** |
| **Hermes Agent** | 50 | 50 | ❌ None | ⚠️ **Moderate–High Risk** |
| **IronClaw** | 1 | 4 | ❌ None | ✅ **Stable / Low Risk** |
| **QwenPaw** | 22 | 34 | ❌ None | ✅ **Healthy but under pressure** |
| **ZeroClaw** | 34 | 50 | ❌ None | ✅ **Strong, with governance pressure** |

> 🔍 *Note: High activity ≠ high stability. OpenClaw and ZeroClaw show extreme engagement, often at the cost of system coherence.*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most **highly active and technically ambitious** project in the ecosystem, with unmatched developer velocity and a broad scope spanning UI polish, core runtime fixes, and plugin extensibility. Its **distributed agent architecture** and emphasis on deterministic state management differentiate it from peers focused on single-user workflows. While its community size appears largest (evidenced by issue volume), this also correlates with higher instability—its P1 bugs (e.g., zombie processes, JSON parsing failures) suggest ongoing struggles with fundamental runtime reliability. In contrast to IronClaw’s focused stability or QwenPaw’s mobile-first UX push, OpenClaw is attempting to solve *all* problems simultaneously—positioning it as a “full-stack” agent platform, albeit with significant risk for production adoption.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on critical infrastructure challenges:

| Need | Projects Involved | Specific Examples |
|------|-------------------|-------------------|
| **Session State Integrity & Persistence** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Stuck `update_runs`, lost prompts on reconnect, silent failure during compression |
| **Memory/Context Management** | OpenClaw, QwenPaw, ZeroClaw | Context leaks (#137927), uncompressible sessions, lack of durable memory across restarts |
| **Cross-Platform Stability** | OpenClaw, Hermes Agent, QwenPaw | Windows startup crashes, SSH backend kills, IME input issues |
| **Observability & Diagnostics** | All five projects | Poor error messages, missing trace context, no fallback testing (`/models test-fallback`) |
| **Security & Isolation** | OpenClaw, ZeroClaw, IronClaw | Internal context leakage, sandbox escapes, path traversal via symlinks |
| **Plugin & Extension Extensibility** | OpenClaw, QwenPaw, ZeroClaw, IronClaw | Plugin installation, manifest validation, WASM support, schema drift handling |

> 📌 *These shared pain points indicate a foundational layer gap across the ecosystem—many projects are reinventing wheels for basic agent lifecycle management.*

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Feature Focus** | Full-stack agent orchestration, UI polish, plugin ecosystem | Cron scheduling, skills indexing, desktop app stability | MCP identity, hosted-MCP accountability, Telegram integration | Mobile UX, FTS corruption fix, skill versioning | Runtime immutability, audit trails, WASM plugins |
| **Target Users** | Enterprise developers, large-scale agents | Power users, researchers, home-lab operators | Multi-user environments, hosted providers | Mobile-first users, self-hosters | Regulated environments, compliance teams |
| **Architecture** | Distributed, stateful, event-loop sensitive | Profile-centric, session-aware | Protocol-first (MCP), attribution-enabled | Monolithic frontend + backend | Composable, append-only event history, sandboxed |
| **Differentiator** | Highest developer velocity, extensive UI/UX refinement | Deep cron/skills integration, CLI transparency | Cost control & auditability in hosted-MCP | Mobile optimization, persistent memory roadmap | Deterministic replay, security-by-design |

> 💡 *ZeroClaw and OpenClaw represent two divergent visions: one prioritizing **auditability and reproducibility**, the other **scale and user experience**—both essential for future enterprise adoption.*

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (High Velocity, High Risk)** | OpenClaw, ZeroClaw | >500 PRs/issues daily; RFC-heavy; frequent regressions; strong technical ambition |
| **Stabilization Phase (Focus on Reliability)** | Hermes Agent, QwenPaw | Moderate activity; post-release bug fixing; feature polish before next release |
| **Maintenance Mode (Stable Core)** | IronClaw | Minimal new issues; small PRs; focused on incremental improvements |

> ✅ *IronClaw exemplifies maturity: stable, low-risk, and ready for production. OpenClaw and ZeroClaw are in "engineering storm" mode—ideal for contributors seeking impact, but risky for deployment.*

---

### **7. Trend Signals**  
Based on community feedback and development patterns, key industry trends emerging for AI agent developers include:

1. **Shift from Tool-Centric to Session-Centric Design**  
   - Users demand **persistent, recoverable conversations** (OpenClaw #137927, Hermes #106459, QwenPaw #7596).  
   - *Implication:* Future agents must treat sessions as first-class entities—immutable, replayable, and auditable.

2. **Growing Demand for Cross-Platform Consistency**  
   - Repeated issues on **Windows**, **SSH over Linux**, and **mobile browsers** highlight fragmented user experiences.  
   - *Implication:* Developers must prioritize platform-agnostic testing and resilient UI/UX patterns.

3. **Need for Transparent Cost & Model Routing**  
   - Users want visibility into which model served a response (Hermes #106968, ZeroClaw #9816).  
   - *Implication:* Proxy agents must expose routing metadata—critical for budget control and performance tuning.

4. **Rise of Modular, Composable Agents**  
   - RFCs for WASM plugins (ZeroClaw #10076), skill versioning (QwenPaw #7609), and plugin discovery (OpenClaw #137886) signal a move toward plug-and-play agent composition.  
   - *Implication:* The next generation of agents will be built not from monoliths, but from verified, reusable components.

5. **Security & Auditability as Non-Negotiables**  
   - Multiple projects now emphasize **sandbox policies**, **caller attribution**, and **append-only logs**—reflecting real-world regulatory and operational demands.  
   - *Implication:* Trust in AI agents hinges not just on capability, but on verifiable behavior.

---

### **Conclusion**  
The open-source personal AI assistant ecosystem is entering a **critical inflection point**: innovation is accelerating, but so are systemic risks. Projects like OpenClaw and ZeroClaw are pushing boundaries, while IronClaw and QwenPaw demonstrate that stability and usability can coexist. For developers and organizations, the choice is no longer just about features—it’s about **trust, maintainability, and long-term viability**. The future belongs to platforms that combine **architectural rigor** with **user-centric design**, and where governance scales with ambition.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-10**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust developer engagement and ongoing system refinement. No new releases were published, suggesting a focus on stabilization and feature polish ahead of future updates. The core activity centers around session management, cron scheduling reliability, desktop app stability (especially Windows and SSH over Linux), and long-standing architectural cleanup. A significant number of high-severity bugs (P1/P2) are being actively triaged, particularly those affecting session integrity, message delivery, and cross-platform compatibility.

---

### **2. Releases**  
❌ **No new releases** were published today.  
The last release remains unchanged since the previous cycle. Maintainers appear to be prioritizing internal fixes and PRs before tagging a new version, especially given recent critical path issues related to session state, compression, and cron deadlocks.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #106873**: Fixed group-chat misattribution across connections by keying `(you)` to connection ID instead of bare profile name. [Link](https://github.com/nousresearch/hermes-agent/pull/106873)
- **PR #106837**: Optimized turn truncation retries by skipping futile `max_tokens` boosts when prompt already fills context window. [Link](https://github.com/nousresearch/hermes-agent/pull/106837)
- **PR #106855**: Prevented `profile delete` tombstones from interfering with local profile validation. [Link](https://github.com/nousresearch/hermes-agent/pull/106855)
- **PR #105928**: Fixed broken-link warnings in fast builds by ensuring `/docs/llms.txt` is generated via prebuild hook. [Link](https://github.com/nousresearch/hermes-agent/pull/105928)
- **PR #106986**: Improved session discovery logic to prevent loss of queued prompts during reconnect. [Link](https://github.com/nousresearch/hermes-agent/pull/106986)

These merges reflect strong momentum in stabilizing core user workflows—particularly session resumption, error handling, and profile lifecycle management.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement:**

| Issue | Comments | Severity | Summary | Link |
|------|----------|----------|--------|------|
| [#66616](https://github.com/nousresearch/hermes-agent/issues/66616) | 187 | P3 (Degraded) | Skills index stale for 29.8h (limit: 26h); affects Docs/Skills Hub availability | [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616) |
| [#78647](https://github.com/nousresearch/hermes-agent/issues/78647) | 82 | P3 (Refactor) | Epic-level effort to eradicate "god files" post-#102117; architecture cleanup in progress | [Issue #78647](https://github.com/nousresearch/hermes-agent/issues/78647) |

🔍 **Analysis:**  
- **Issue #66616** reveals a systemic dependency failure in the documentation pipeline—critical for user onboarding and tool discovery. Despite automated checks, the index is failing to refresh on schedule, indicating potential CI/CD fragility.
- **Issue #78647** signals deep technical debt reduction as a strategic priority. The team is committed to modularization, likely preparing for scalability in complex orchestrator profiles.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (P1/P2):**

| Issue | Description | Status | Fix PR? |
|------|-------------|--------|--------|
| [#106596](https://github.com/nousresearch/hermes-agent/issues/106596) | YouTube embeds fail with Error 153 in desktop app due to Referer mismatch | Open | ❌ No PR yet |
| [#106459](https://github.com/nousresearch/hermes-agent/issues/106459) | Over-limit sessions become permanently uncompressible; no recovery path | Closed | ✅ **PR #106543** merged: Fixes stale close stamp issue | [PR #106543](https://github.com/nousresearch/hermes-agent/pull/106543) |
| [#106935](https://github.com/nousresearch/hermes-agent/issues/106935) | Desktop over SSH kills live turns due to sibling backend retirement | Open | ❌ Pending fix |
| [#106994](https://github.com/nousresearch/hermes-agent/issues/106994) | Worker-created children deadlock: recompute_ready promotes only after all parents complete | Open | ❌ No PR yet |
| [#100401](https://github.com/nousresearch/hermes-agent/issues/100401) | Cron heartbeat deadlocks jobs >60s, marking them as “Interrupted by shutdown” | Open | ❌ No fix PR |
| [#105629](https://github.com/nousresearch/hermes-agent/issues/105629) | Desktop build fails on Windows due to rcedit stamp failure post-asar rewrite | Open | ❌ No PR yet |

📌 **Stability Note:** High-frequency crashes and silent data loss risks (e.g., session replay loss, compression failure) suggest instability in session lifecycle and message delivery layers. These are not isolated incidents but systemic patterns requiring architectural attention.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Emerging Feature Trends:**

| Request | Priority | Implication |
|-------|----------|-----------|
| [#106968](https://github.com/nousresearch/hermes-agent/issues/106968) | Show routed member in CLI/gateway footers (e.g., `poolside/laguna-s-2.1:free`) | P3 | User needs visibility into actual model cost/latency — signals demand for transparency in proxy routing. |
| [#106919](https://github.com/nousresearch/hermes-agent/issues/106919) | Opt-in for unattended memory consolidation | P3 | Users want control over autonomous memory management—suggests growing adoption of large-memory profiles. |
| [#94266](https://github.com/nousresearch/hermes-agent/pull/94266) | Add Hermes Collective Wisdom Agent V1 | P3 | Experimental agent integration hints at expansion beyond individual agents into collaborative intelligence systems. |
| [#93508](https://github.com/nousresearch/hermes-agent/pull/93508) | Serve Desktop renderer in browsers | P2 | Indicates demand for remote access and browser-native workspace parity. |

🔮 **Prediction:** The next major version (likely v0.22) will likely include:  
- Enhanced session resilience (replay, compression, reconnect)  
- Transparent model routing visibility  
- Browser-hosted desktop mode  
- Memory automation controls

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points Identified:**

- **Session State Fragility:** Multiple reports confirm that sessions exceeding context limits become permanently stuck or fail silently (e.g., #106459, #100122). Users lose work without warning.
- **Desktop App Instability:** Windows users report frequent `hermes update` failures (exit 8), while SSH users face unexpected backend restarts and lost conversations (#106935).
- **Missing Visibility:** Users cannot tell which actual model served a response when using combo models (e.g., `combo-1m-free-9r`), leading to confusion about cost and latency (#106968).
- **Configuration Persistence Failures:** Disabling all tools resets to defaults instead of saving empty state (#637), causing frustration in workflow customization.
- **Tooling Gaps:** Image messages break non-vision models with no graceful fallback (#638), and invalid model names are accepted silently (#632).

💬 **Sentiment:** Mixed. Users appreciate advanced features (skills, cron, Kanban) but express growing concern over stability and UX clarity. Long-term trust hinges on resolving session and crash issues.

---

### **8. Backlog Watch**  
⚠️ **High-Impact, Unresolved Issues Needing Attention:**

| Issue | Why It Matters | Last Updated | Link |
|------|----------------|--------------|------|
| [#66616](https://github.com/nousresearch/hermes-agent/issues/66616) | Skills index degradation breaks docs and user onboarding | 2026-09-10 | [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616) |
| [#78647](https://github.com/nousresearch/hermes-agent/issues/78647) | Godfile eradication epic stalled after partial completion | 2026-09-10 | [Issue #78647](https://github.com/nousresearch/hermes-agent/issues/78647) |
| [#106994](https://github.com/nousresearch/hermes-agent/issues/106994) | Worker fan-out deadlock in cron scheduler | 2026-09-10 | [Issue #106994](https://github.com/nousresearch/hermes-agent/issues/106994) |
| [#106938](https://github.com/nousresearch/hermes-agent/issues/106938) | No override for pinned Kanban board execution host | 2026-09-09 | [Issue #106938](https://github.com/nousresearch/hermes-agent/issues/106938) |
| [#106972](https://github.com/nousresearch/hermes-agent/issues/106972) | A2A_REPLY_TIMEOUT ignored; late replies discarded | 2026-09-09 | [Issue #106972](https://github.com/nousresearch/hermes-agent/issues/106972) |

🛠️ **Recommendation:** Prioritize **Issue #66616** and **#106994**—both represent systemic failures impacting usability and reliability. Also, assign ownership to **#78647** to ensure architectural cleanup continues.

--- 

**Project Health Score:** ⚠️ **Moderate–High Risk**  
While innovation and community engagement remain strong, persistent session, cron, and desktop stability issues threaten user retention. Immediate attention to core infrastructure is recommended before next release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-10**

---

### **1. Today's Overview**  
The IronClaw project remains in a stable but moderately active state as of 2026-09-10. No new releases were published, indicating that the current version is still considered production-ready. In the past 24 hours, four pull requests were opened (all pending review), and one issue was reported—suggesting ongoing development momentum focused on core functionality improvements and stability fixes. Activity is concentrated in the MCP (Model Control Protocol) and extension systems, with minimal user-facing impact observed so far.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
The latest release remains unchanged from prior versions. There are no breaking changes or migration notes to report at this time.

---

### **3. Project Progress**  
*No PRs were merged or closed today.*  
However, four significant open PRs indicate forward progress in key areas:
- **PR #8090**: Fixes a critical race condition in hosted-MCP catalogs where users overwrite each other’s tool availability due to shared storage per extension ID.
- **PR #8084**: Introduces opt-in caller attribution via SEP-414, enabling hosted-MCP servers to distinguish between conversations and avoid duplicate charges on retries.
- **PR #8085**: Resolves inconsistency between manifest validation and construction logic for operator-installed packages, improving reliability of dynamic schema handling.
- **PR #8072**: Adds Telegram bot command menu registration at activation, enhancing UX by making `/model`, `/status`, etc., available directly in the app interface.

These PRs collectively strengthen identity management, inter-service consistency, and integration polish.

---

### **4. Community Hot Topics**  
The most active item is:

- **Issue #8091** – [bug(webchat-v2): Enter sends the message while confirming IME composition](https://github.com/nearai/ironclaw/issues/8091)  
  *Created: 2026-09-09 | Open | 0 comments | 0 reactions*  
  This issue highlights a recurring UX flaw in WebChat v2: pressing Enter during IME (Input Method Editor) composition triggers message submission prematurely, before text input is finalized. Though low visibility currently (no reactions/comments), it reflects a persistent pain point for multilingual users and underscores the need for more granular keyboard event handling in form controls. It’s a known regression from earlier versions, suggesting deeper architectural decisions around key event propagation may be required.

Other notable activity includes **PR #8084**, which has sparked discussion around privacy and cost control in hosted-MCP environments—indicating growing concern over accountability in AI agent interactions.

---

### **5. Bugs & Stability**  
- **Critical Bug**: Issue #8091 – Premature message submission during IME composition (WebChat v2).  
  - **Severity**: Medium-high (impacts usability for non-English speakers using complex input methods).  
  - **Impact**: Users may send incomplete or incorrect messages unintentionally.  
  - **Fix Status**: No corresponding PR yet; requires UI-level intervention (e.g., `keydown` vs `keyup` detection, IME state tracking).  
  - **Risk**: Low code risk, high user experience risk.

- **Stability Concerns**:  
  - PR #8085 addresses a potential runtime inconsistency between package manifest loading and validation—a latent source of silent failures if misused. While not currently crashing, it could lead to unpredictable behavior under edge cases.

No crashes or regressions were reported today beyond these identified risks.

---

### **6. Feature Requests & Roadmap Signals**  
Key signals pointing toward near-term roadmap priorities:
- **MCP Identity & Attribution (PR #8084)**: Explicit opt-in caller attribution suggests the team is prioritizing auditability and cost transparency—likely preparing for enterprise-grade deployments.
- **Telegram Integration (PR #8072)**: Command menu auto-registration indicates a strategic push toward rich bot integrations across platforms, signaling broader ecosystem ambitions.
- **IME Handling (Issue #8091)**: The recurrence of this bug implies that future versions may include a dedicated input handler abstraction layer to decouple input events from action triggers.

These signals suggest the next major release will focus on **enterprise-grade reliability**, **multi-platform consistency**, and **input resilience**.

---

### **7. User Feedback Summary**  
User feedback today centers on two distinct but related themes:
- **Multilingual UX Friction**: The IME issue reveals real-world difficulty for users relying on Japanese, Chinese, Korean, or other complex-input languages. Sending partial text can result in confusion or errors, especially in professional or collaborative settings.
- **Trust in AI Agent Behavior**: The MCP attribution feature request reflects a growing demand for traceability—users and operators want to know *who* initiated a call, *when*, and whether it was retried. This points to increasing reliance on IronClaw in mission-critical workflows.

Overall satisfaction appears neutral—no complaints about core stability, but clear frustration with subtle but impactful UX issues.

---

### **8. Backlog Watch**  
Several high-potential items remain unaddressed:
- **Issue #8091** – IME-related message sending (now 1 day old, no assigned maintainer).  
  → *Urgency: High* — affects accessibility and usability for global users.
- **PR #8085** – Manifest inconsistency in operator packages (opened 2 days ago, no review).  
  → *Urgency: Medium* — could cause deployment failures if left unresolved.
- **PR #8090** – Hosted-MCP catalog race condition (critical for multi-user setups).  
  → *Urgency: High* — impacts fairness and predictability in shared environments.

These should be prioritized in upcoming triage sessions to prevent escalation into production incidents.

---  
*Data Source: GitHub – nearai/ironclaw | Updated: 2026-09-10*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-10**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with strong community engagement: **22 issues** and **34 pull requests** updated in the past 24 hours, indicating robust development momentum and ongoing user feedback integration. No new releases were published, suggesting a focus on stabilizing v2.2.0 and resolving critical bugs ahead of future updates. The influx of frontend UX improvements, backend stability fixes, and mobile/extension feature proposals reflects a maturing ecosystem aimed at enhancing both desktop and cross-platform usability.

---

### **2. Releases**  
❌ **No new releases** observed as of 2026-09-10.  
The latest stable version remains **v2.2.0**, with ongoing efforts to stabilize its runtime and address post-release regressions (e.g., #7622, #7633). Maintainers are likely preparing for a patch release to resolve high-priority bugs before announcing a new version.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577): Fixed queuing of follow-up messages during active chat runs — prevents HTTP 409 errors when users send rapid inputs.  
- [#7649](https://github.com/agentscope-ai/QwenPaw/pull/7649): Added configurable `http_timeout` for MCP clients — directly addresses long-standing user request (#3997).  
- [#7655](https://github.com/agentscope-ai/QwenPaw/pull/7655): Patched FTS corruption in `history.db`, enabling retention cleanup after database integrity failures (#7596).  
- [#7609](https://github.com/agentscope-ai/QwenPaw/pull/7609): Introduced skill versioning and dependency validation — crucial for scalable skill management.  
- [#7640](https://github.com/agentscope-ai/QwenPaw/pull/7640): Updated ClawHub URL — resolves broken download links for external skills.

These merges reflect a strong focus on **user experience continuity**, **data integrity**, and **extensibility**.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement:**  
- [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177): *“Optimize deploy page homepage”* — 8 comments, highlighting mobile UX friction; users demand intuitive placement of key actions like “Deploy” and “Stop.”  
- [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642): *“Console streaming renders nothing until turn completes in Chrome”* — 4 comments, reveals browser-specific rendering bug affecting real-time UX.  
- [#7657](https://github.com/agentscope-ai/QwenPaw/issues/7657): *“Add ntfy channel support”* — 1 comment but significant: self-hosted push notification integration is highly desired by home-lab users.

🔍 **Underlying Needs:**  
- Mobile-first design prioritization (especially for deployment workflows).  
- Cross-browser consistency in real-time streaming UI.  
- Integration with decentralized notification systems (ntfy) for off-device agent alerts.

---

### **5. Bugs & Stability**  
🚨 **High Severity (Critical / Reproducible):**  
- [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633): **llama.cpp v0.4.0-dev parsing failure** causes silent rollback of manual upgrades — risks data loss and workflow disruption.  
  ➤ ✅ **Fix PR**: [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) (preserves provider-resolved context windows) — relevant but not yet merged.  
- [#7622](https://github.com/agentscope-ai/QwenPaw/issues/7622): **Modal transparency bug** in v2.2.0 — background content visible through popups, breaking UI expectations.  
  ➤ ✅ **Fix PR**: Not yet submitted; urgent for next patch release.  
- [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597): **Base64 binary sent as "type":"data" triggers 400 error** — breaks image/PDF sharing via tools.  
  ➤ ✅ **Fix PR**: [#7647](https://github.com/agentscope-ai/QwenPaw/pull/7647) — supports Base64 Data URLs in outbound media.

⚠️ **Medium Severity:**  
- [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363): Synchronous calls block event loop → 120+ second freezes on startup/message send.  
- [#7601](https://github.com/agentscope-ai/QwenPaw/issues/7601): Work directory navigation requires step-by-step clicking — no path input field.  

> ⚠️ **Risk Note**: Several critical bugs remain unpatched despite fix PRs being ready or close to merge.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **Emerging Themes (Likely in v2.3):**  
- **Mobile Experience**: PR [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) introduces native React Native client — signals intent to launch a mobile app.  
- **Persistent Memory**: Issue [#7656](https://github.com/agentscope-ai/QwenPaw/issues/7656) requests durable memory across sessions — could integrate with MemCode.  
- **Traffic Light Indicator**: [#7600](https://github.com/agentscope-ai/QwenPaw/issues/7600) proposes visual status indicator for long-running tasks — useful for multitasking users.  
- **Customizable Web Title**: [#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) — simple but impactful UX tweak for multi-instance users.  
- **Channel Parameter Forwarding**: [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) asks to pass channel-level metadata (QQ ID, phone, etc.) to MCP tools — indicates growing use in enterprise/automation contexts.

> 🔮 **Prediction**: Next major version will include **mobile support**, **persistent memory plugins**, and **advanced channel integrations**.

---

### **7. User Feedback Summary**  
💬 **Key Pain Points:**  
- **Mobile UX**: Users report poor accessibility on mobile due to misplaced buttons (#7177), lack of direct path entry (#7601), and inconsistent behavior across browsers (#7642).  
- **Workflow Interruptions**: Long freezes during startup/messages (#7363), silent rollbacks of manual upgrades (#7633), and failed retention purges (#7596) disrupt productivity.  
- **Missing Flexibility**: Users want to edit default agent settings (#7644), customize web titles (#7648), and control timeouts (#3997) — indicating desire for deeper personalization.  
- **Trust & Transparency**: Issues like transparent modals (#7622) and unhandled FTS corruption (#7596) erode confidence in system reliability.

✅ **Positive Signals**:  
- High contribution rate from first-time contributors (e.g., #7577, #7542).  
- Active community proposing mature solutions (e.g., ntfy integration, versioned skills).

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered Critical Issues (Need Attention):**  
- [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177): *“Optimize deploy page homepage”* — 8 comments, 22 days old, low visibility despite clear UX impact.  
- [#7656](https://github.com/agentscope-ai/QwenPaw/issues/7656): *“Durable memory across sessions”* — 1 comment, 1 day old, but represents a strategic direction for AI agents.  
- [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633): Silent rollback bug — already has fix PR, but not yet merged.  
- [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557): *“Version & dependency metadata for skills”* — 2 years old, still unresolved despite repeated requests.

> 🛑 **Urgent Action Needed**: These issues represent **core user trust and extensibility barriers**. Prioritizing them will significantly improve adoption and developer satisfaction.

---

**Project Health Score**: ✅ **Healthy but under pressure** — strong activity and innovation, but critical bugs and UX gaps threaten user retention if not addressed promptly.  
**Next Step Recommendation**: Release a **v2.2.1 hotfix** within 7 days to resolve #7633, #7622, #7596, and #7647.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-10  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active with a strong momentum in architectural design and security hardening. Over the past 24 hours, 34 new issues and 50 pull requests were opened—indicating robust community engagement and ongoing refinement of core components. The activity is heavily skewed toward high-priority RFCs (Request for Comments), particularly around session management, WASM plugin extensibility, and secure file system policies. Despite no new releases, the project is clearly in a phase of deep technical shaping, with significant focus on runtime architecture, observability, and provider interoperability.

---

### **2. Releases**

❌ **No new releases** were published in the last 24 hours.  
There are currently **no tagged releases** in the repository as of 2026-09-10.  
*Note:* The absence of a release does not reflect stagnation—ongoing work on RFCs and foundational architecture suggests that a major version update may be in preparation.

---

### **3. Project Progress**

✅ **Merged/Closed PRs (Today):** *None reported in the last 24h.*  
However, several critical PRs were recently merged or closed, including:

- **PR #9731**, **#9730**, and **#9729**: Finalized the migration of ZeroCode’s Quickstart and agent sidebar features, enabling multi-session tracking and improved UI organization.
- **PR #10381**: Fixed a critical security flaw by resolving host launchers before applying workspace `cwd`, preventing path traversal via symbolic links.
- **PR #10337**: Patched Git operations to respect `allowed_roots` policy, closing a potential sandbox escape vector.
- **PR #10446**: Improved tool-call parsing to salvage JSON-enveloped tool calls from prose output, reducing hallucination risk during LLM inference.

These fixes collectively strengthen **security**, **observability**, and **user experience** in production environments.

---

### **4. Community Hot Topics**

🔥 **Top Issues by Engagement (Last 24h)**

| Issue | Title | Comments | Link |
|------|-------|--------|------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 36 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file and attachment architecture for conversation surfaces | 29 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy - filesystem restrictions | 28 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |

🔍 **Analysis of Hot Topics**:
These top-tier RFCs signal a **strategic pivot toward modular, secure, and composable agent runtimes**. The recurring themes are:
- **Session immutability & replayability** (Issue #9487)
- **Unified handling of media and attachments** across channels (Issue #9488)
- **Fine-grained filesystem access control** (Issue #6996)

These are not incremental improvements—they represent **a fundamental rethinking of how AI agents manage state, data, and execution context**, suggesting that ZeroClaw is preparing for advanced use cases like audit trails, regulated workflows, and multi-agent coordination.

---

### **5. Bugs & Stability**

⚠️ **Critical Bugs Reported (High Risk / Priority P1/P2)**

| Issue | Description | Severity | Link |
|------|-------------|----------|------|
| [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) | ZeroCode ACP transcript drops assistant text before tool call; only post-tool text renders | P1 / High | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) |
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | Anthropic provider reports $0.00 spend → budget caps never trigger | P1 / High | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) |
| [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) | OAuth system-prefix cache marker consumes one of four breakpoint slots | P2 / High | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) |
| [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) | `knowledge.db_path` tilde expansion applies globally, silently dropping tools | P2 / Medium | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) |

🛠️ **Fix PRs in Progress**:
- **PR #10732** addresses log selection logic across platforms, improving `service logs` reliability.
- **PR #10733** fixes Telegram/WhatsApp voice reply filtering to allow expressive audio tags (e.g., `[laughs]`).
- **PR #10463** fixes audit chain preservation through log rotation—critical for compliance.

🟢 **Stability Note**: While multiple high-severity bugs exist, **fixes are actively being developed**, indicating strong responsiveness from maintainers.

---

### **6. Feature Requests & Roadmap Signals**

🚀 **Emerging Roadmap Themes (Based on Active RFCs & PRs)**

| Feature Request | Status | Implication |
|----------------|--------|-----------|
| **[RFC #10076]** Composable WASM plugin runtime architecture | Proposed (Rev 2) | Indicates move toward **plugin extensibility and dynamic agent composition**—key for enterprise integrations. |
| **[RFC #10526]** Append-only session event history, deterministic replay | Proposed (Rev 1) | Suggests a shift toward **audit-ready, reproducible agent behavior**—ideal for regulated environments. |
| **[Feature #10706]** Preserve opaque reasoning state across OpenAI Responses paths | Accepted | Enables **consistent streaming responses** and better debugging. |
| **[Feature #10708]** Support active-response steering on OpenAI WebSocket | Accepted | Critical for **real-time user correction** in long-running tasks. |

📌 **Prediction**: The next stable release (likely v0.9.x) will include:
- Enhanced **WASM plugin support**
- **Deterministic session replay** (for auditing)
- **Improved cost tracking** (fixing #9816)
- **Better tool-call visibility** in ZeroCode UI

---

### **7. User Feedback Summary**

💬 **Real User Pain Points Observed (via Issues & PRs)**

- **"I can't see full tool results in ZeroCode"** → Highlighted in **Issue #8763**. Users need deeper inspection of subagent/tool outputs during complex turns.
- **"My agent response appears twice"** → **Issue #10720** reveals a UI rendering bug in v0.8.5, causing confusion and distrust in output.
- **"Budget caps don’t work"** → **Issue #9816** reflects real-world concern over **cost control**, especially for teams using Anthropic models.
- **"Media groups are split into separate turns"** → **Issue #5514** shows frustration when sending multiple images triggers multiple LLM calls instead of a single multimodal turn.

✅ **Satisfaction Signals**:
- Positive sentiment around **multi-session tracking** (#9729–9731) and **sidebar redesign**.
- Appreciation for **OSC progress reporting** (PR #9876) in terminal-based workflows.

---

### **8. Backlog Watch**

⏳ **Long-Unanswered Important Issues Requiring Maintainer Attention**

| Issue | Description | Age | Status | Link |
|------|-------------|-----|--------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs and design issues | 2026-07-04 (~2 months) | In-progress | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | Simplify RFC voting by removing mandatory discussion windows | 2026-09-02 (recent) | Needs review | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) |
| [#10728](https://github.com/zeroclaw-labs/zeroclaw/issues/10728) | npm audit failed — high severity vulnerability in `js-yaml` | 2026-09-09 | Blocked | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10728) |

🚨 **Urgent Action Needed**:
- **Issue #10728** presents a **high-risk dependency vulnerability** (in `js-yaml`) that must be addressed immediately to avoid supply chain compromise.
- **Issue #8692** is a meta-issue: without a clear maintainer decision queue, RFCs stall—this threatens long-term project velocity.

---

## ✅ **Final Assessment: Project Health – Strong, but with Governance Pressure**

ZeroClaw is in a **high-growth, high-impact phase**—architecturally mature, technically ambitious, and user-driven. The influx of RFCs signals a healthy ecosystem pushing boundaries in AI agent design. However, **governance bottlenecks** (e.g., RFC backlog, slow voting cycles) and **critical dependency risks** (e.g., `js-yaml`) pose short-term threats to stability and trust.

🔧 **Recommendation**: Prioritize fixing **npm audit failure (#10728)** and **establishing a formal RFC triage process** (per #8692) to sustain momentum.

---  
*Digest generated: 2026-09-10 | Source: GitHub Activity (zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*