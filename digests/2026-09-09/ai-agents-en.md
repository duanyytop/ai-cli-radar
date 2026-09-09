# OpenClaw Ecosystem Digest 2026-09-09

> Issues: 484 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-09 02:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-09**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 484 issues and 500 pull requests updated in the last 24 hours—indicating intense community engagement and rapid development cycles. A new release, `v2026.9.3`, was issued today, focusing on safer update mechanics and recovery from failed migrations. Despite strong momentum, a significant number of high-severity bugs (P0/P1) related to session stability, authentication, and message delivery persist, suggesting ongoing challenges in reliability under load or during upgrades. The project continues to balance feature innovation with critical stability fixes.

---

### **2. Releases**  
**✅ v2026.9.3: openclaw 2026.9.3**  
*Released: 2026-09-09*  
[GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.9.3)

#### **Highlights**
- **Safer updates**: Introduces rehearsal of core and plugin changes in isolated candidate state before activation.
- **Migration support**: Enables eligible rollback and recovery for abandoned `2026.9.2` migration records without stopping a healthy Gateway.
- **Recovery resilience**: Fixes orphaned update states that previously blocked upgrade paths.

> 🔧 **Migration Note**: Users upgrading from `2026.9.2` should expect smoother transition due to improved update reconciliation. Verify `update_runs` status post-upgrade via `openclaw status`.

---

### **3. Project Progress**  
**✅ Merged/Closed PRs (Today):**  
- **#142777** (`test(doctor)`): Isolated core storage migration fixtures → faster CI, reduced cold plugin load.  
- **#142703** (`docs/plugins`): Split channel SDK reference by reader job → better documentation clarity.  
- **#142669** (`fix: avoid redundant DB scans`): Optimized Doctor schema repair to skip unnecessary checks.  
- **#142064** (`fix(channels)`): Stops ingress retry loops during gateway suspension → prevents log spam.  
- **#141268** (`fix(gateway)`): Preserves `length` reason in chat completion responses → improves output fidelity.

> 📌 **Key Outcome**: Stability improvements focused on diagnostics, test efficiency, and edge-case handling in gateway lifecycle.

---

### **4. Community Hot Topics**  
Top 5 most commented Issues reflect deep user frustration with **session integrity**, **authentication reliability**, and **multi-agent orchestration**:

| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | 23 | P1 / 🐚 Platinum Hermit | *Intermittent "malformed JSON arguments" in Claude Sonnet 5 runs* |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 15 | P1 / 🦐 Gold Shrimp | *Zombie process leak in hooks/tools → runtime degradation* |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 14 | P1 / 🦞 Diamond Lobster | *Multi-agent config overwrites & session-lock failures* |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 14 | P1 / 🦞 Diamond Lobster | *Synchronous persistence blocks event loop at scale* |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | 13 | P1 / 🐚 Platinum Hermit | *Codex app-server emits `turn/started` then goes silent* |

> 💡 **Underlying Need**: Users are pushing OpenClaw into production-grade multi-agent workflows, exposing gaps in concurrency control, state consistency, and long-running session robustness.

---

### **5. Bugs & Stability**  
High-severity bugs reported today indicate systemic risks in **authentication flow**, **session state management**, and **upgrade resilience**:

| Bug | Severity | Impact | Fix PR? | Link |
|-----|----------|--------|--------|------|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | P1 | Auth Provider, Message Loss | ❌ No | Malformed JSON from Claude Sonnet 5 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | P0 | UX Release Blocker | ❌ No | OAuth refresh times out at 10s despite success |
| [#139714](https://github.com/openclaw/openclaw/issues/139714) | P2 | Session State | ❌ No | Update never finalizes; stuck “in progress” |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | P1 | Memory Index | ❌ No | Reindex lock never released → index unrepairable |
| [#142037](https://github.com/openclaw/openclaw/issues/142037) | P2 | Message Delivery | ❌ No | Slack thread mismatch causes `mute` misfires |

> ⚠️ **Critical Risk**: Multiple regressions in `2026.9.2` and `2026.9.3` suggest fragile release testing. Users report silent failures across multiple channels (Slack, Telegram, Discord).

---

### **6. Feature Requests & Roadmap Signals**  
Users are increasingly requesting **platform-specific optimizations**, **better error visibility**, and **operational tooling**:

- **#142782** ([feat(ui)] Unify plugin discovery/installation): [Link](https://github.com/openclaw/openclaw/pull/142782) — Users want a single, searchable catalog for all plugins (ClawHub + local).
- **#138279** (Ship Linux aarch64 builds): [Link](https://github.com/openclaw/openclaw/issues/138279) — Demand for ARM64 support on Linux mirrors Windows' existing companion build.
- **#140920** (Add `--follow` to `channels logs`): [Link](https://github.com/openclaw/openclaw/pull/140920) — Live log monitoring is now essential for debugging.
- **#135776** (Plugin version skew after `update`): [Link](https://github.com/openclaw/openclaw/issues/135776) — Highlights need for atomic core/plugin version synchronization.

> 🎯 **Prediction**: Next release (`v2026.9.4`) will likely include unified plugin UI, live logging, and improved ARM support.

---

### **7. User Feedback Summary**  
Real-world use cases reveal growing pains in **enterprise adoption** and **cross-platform consistency**:
- **Multi-agent instability** (#43367) is blocking real-time collaboration workflows.
- **Authentication silos** (e.g., Codex OAuth timing out despite valid tokens) cause confusion and downtime.
- **UI/UX friction** (e.g., duplicate messages #142549, dashboard shadowing #142336) erodes trust in agent outputs.
- **Silent failures** (e.g., empty sticker payloads #142530) reduce confidence in message integrity.

> ✅ **Satisfaction Signal**: Users appreciate doc improvements (e.g., #142703, #142779), indicating value in clearer guidance.

---

### **8. Backlog Watch**  
Several high-priority Issues remain unresolved for weeks/months, requiring maintainer attention:

| Issue | Age | Status | Link |
|------|-----|--------|------|
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 60+ days | P0, needs product decision | *Billing cooldown outlives outage — no probe-based recovery* |
| [#136183](https://github.com/openclaw/openclaw/issues/136183) | 7 days | P1, no fix PR | *SSH hangs during command exec — regression in 2026.8.1* |
| [#138342](https://github.com/openclaw/openclaw/issues/138342) | 5 days | P1, needs info | *Official Discord plugin rejected by trust check in 2026.9.1* |
| [#107930](https://github.com/openclaw/openclaw/issues/107930) | 60+ days | P2, needs review | *Improve upgrade experience when Node.js version changes* |
| [#142779](https://github.com/openclaw/openclaw/pull/142779) | 1 day | Ready for maintainer look | *Split nodes overview by reader job — docs cleanup* |

> 🛑 **Urgency**: These issues represent operational blockers for users and must be triaged promptly to prevent further erosion of trust.

---

**📌 Final Assessment**: OpenClaw is in a phase of **rapid iteration with growing teething pains**. While innovation is strong, stability and user experience are under pressure. Immediate focus should shift toward **reducing P0/P1 bug backlog**, **improving upgrade safety**, and **enhancing diagnostic visibility** to support enterprise-grade deployments.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-09**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in September 2026 is characterized by rapid evolution, divergent architectural paths, and growing maturity in production readiness. Projects are shifting from experimental frameworks to multi-agent orchestration platforms with enterprise-grade concerns—session stability, identity isolation, cost tracking, and upgrade resilience. A clear trend toward modular, composable systems is emerging, driven by community demand for extensibility, cross-platform consistency, and operational transparency.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score* |
|--------|-------------------|----------------|----------------|---------------|
| **OpenClaw** | 484 | 500 | ✅ v2026.9.3 | ⭐⭐⭐⭐☆ (High) |
| **Hermes Agent** | 50 | 50 | ❌ None | ⭐⭐⭐☆☆ (Moderate) |
| **IronClaw** | 2 | 11 | ❌ None | ⭐⭐⭐⭐☆ (High) |
| **QwenPaw** | 27 | 44 | ✅ v2.2.1-beta.1 | ⭐⭐☆☆☆ (Low) |
| **ZeroClaw** | 27 | 50 | ❌ None | ⭐⭐⭐⭐☆ (High) |

> *Health Score: Based on stability (P0/P1 backlog), release cadence, UX/CLI reliability, and backlog triage urgency. Ranges from ⭐ (low) to ⭐⭐⭐⭐⭐ (high).*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most mature and actively developed project in the ecosystem, with unparalleled velocity in PRs and issues—reflecting both high innovation and significant teething pains. Its technical approach emphasizes **safe, reversible upgrades** via rehearsal states and recovery mechanisms, a unique focus absent in peers. While IronClaw and ZeroClaw prioritize security and composability, OpenClaw leads in **enterprise-grade workflow support**, particularly around multi-agent orchestration and session persistence. Its community size appears largest, evidenced by comment volume and issue engagement, though this also amplifies visibility of critical bugs.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, recurring themes indicate convergence on foundational agent platform requirements:

| Need | Projects Involved | Specific Examples |
|------|-------------------|-------------------|
| **Session State Integrity** | OpenClaw, QwenPaw, Hermes Agent, ZeroClaw | Session loss after persistence (#7579), stuck state (#139714), history trimming loops (#10674) |
| **Identity & Isolation** | IronClaw, ZeroClaw, OpenClaw | Cross-user tool catalog exposure (#6778), runtime-owned sessions (#9487), session-lock failures (#43367) |
| **Upgrade & Migration Safety** | OpenClaw, Hermes Agent, QwenPaw | Failed migrations (#135111), silent rollbacks (#7633), update hangs (#105145) |
| **Operational Visibility** | All | Missing logs (#142037), no live `--follow` logging (#140920), broken telemetry (#106194) |
| **Multi-Provider & Tooling Flexibility** | QwenPaw, ZeroClaw, Hermes Agent | Per-provider proxies (#106216), dynamic model routing (#7501), WASM plugin extensibility (#10076) |

These signals reflect a maturing ecosystem where **reliability, observability, and trust** are now central to user adoption—not just feature novelty.

---

### **5. Differentiation Analysis**

| Project | Feature Focus | Target Users | Technical Architecture |
|--------|---------------|--------------|------------------------|
| **OpenClaw** | Production-grade multi-agent workflows, safe updates | Enterprises, DevOps teams, AI product builders | Monolithic core + plugin system; emphasis on rollback and migration safety |
| **Hermes Agent** | Desktop-first UX, terminal integration, WSL/Windows parity | Individual developers, power users, hybrid CLI/GUI workers | Electron-based desktop client; rich TUI; systemd integration |
| **IronClaw** | Multi-tenant hosted-MCP, identity-aware tooling | Cloud-hosted AI assistants, SaaS providers | Identity-scoped catalogs; SEP-414 attribution; extension bundling |
| **QwenPaw** | Plugin UX, modularity, local LLM support | Developers using llama.cpp, self-hosted models | Modular plugin manager; context-aware compaction; beta testing culture |
| **ZeroClaw** | Composability, deterministic execution, WASM plugins | Advanced users, builders of agent pipelines | Runtime-owned sessions; append-only event history; secure sandboxing |

Each project is carving a distinct niche: OpenClaw for scale, Hermes for desktop polish, IronClaw for multi-tenancy, QwenPaw for local flexibility, ZeroClaw for composability.

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, QwenPaw, ZeroClaw | High PR/issue volume, frequent beta releases, active RFCs, visible instability |
| **Stabilization Phase** | Hermes Agent | No new release, but multiple high-priority fixes merged; focused on core reliability |
| **Early-Stage Maturation** | IronClaw | Lower activity but high-impact security/UX fixes; strong foundation in identity isolation |

OpenClaw and ZeroClaw represent the **cutting edge of development velocity**, while Hermes Agent is transitioning into **production stabilization**. IronClaw, though quieter, is addressing **critical infrastructure gaps** that will define its long-term viability.

---

### **7. Trend Signals**  
Key industry trends emerging from community feedback include:

- **Trust Through Transparency**: Users demand real-time logs (`--follow`), visible session state, and debuggable errors—indicating a shift from “black-box agents” to observable, audit-ready systems.
- **Enterprise-Grade Requirements**: Billing accuracy (#10716), per-session cost tracking (#10700), and immutable session identities (#10526) signal growing use in regulated or budget-sensitive environments.
- **Composability Over Monoliths**: The rise of WASM plugins (#10076), session panes (#9739), and multi-agent UIs reflects a move toward **modular agent ecosystems** rather than single-agent tools.
- **Security by Design**: Identity-scoped catalogs (#6778), filesystem restrictions (#6996), and credential rotation (#9419) show deepening awareness of attack surfaces in shared environments.
- **Developer Autonomy**: Demand for local model control (#7633), one-click plugin updates (#7605), and disable CPU detection (#7630) underscores the need for **user sovereignty over runtime components**.

> 💡 **Value for Developers**: These trends highlight that future success in the agent space will be determined not by model performance alone—but by **operational robustness, configurability, and trustworthiness**.

---

**Conclusion**: The personal AI agent ecosystem is entering a phase of **pragmatic maturation**. While innovation remains fierce, the focus is shifting from "can it do X?" to "can it run reliably at scale?" OpenClaw leads in momentum, ZeroClaw in architecture, and IronClaw in security—each offering a different path forward. For developers and decision-makers, the choice should be guided not by features alone, but by alignment with **stability, identity, and operational control** needs.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-09**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a robust influx of issues and pull requests—50 new issues and 50 PRs updated in the last 24 hours, indicating strong community engagement and ongoing development momentum. The primary focus areas are stability fixes related to Windows desktop updates, gateway message delivery, session state management, and cron automation logic. While no new releases have been published, multiple high-priority bug fixes are being actively reviewed and merged, signaling a stabilization phase ahead of the next release cycle.

---

### **2. Releases**  
❌ **No new releases** were published today.  
*Note:* The latest stable version remains `v0.21.1`, which is currently under scrutiny due to several critical bugs (e.g., Windows update failures, async delegation hangs). Maintainers are likely preparing a patch release soon based on recent PR merges.

---

### **3. Project Progress**  
✅ **Merged & Closed PRs (Today):**  
- **PR #106194** ([fix(observability): attribute ACP and batch execution surfaces](https://github.com/NousResearch/hermes-agent/pull/106194)) – Resolves telemetry reporting inaccuracies that skewed adoption metrics by labeling all executions as `unknown`. This improves fleet visibility.
- **PR #106180** ([fix(session-state): clear hidden flag when a session is pinned](https://github.com/NousResearch/hermes-agent/pull/106180)) – Fixes UI inconsistency where pinned sessions remained hidden in the sidebar.
- **PR #106116** ([fix(gateway): check system unit’s User= for linger, not caller’s](https://github.com/NousResearch/hermes-agent/pull/106116)) – Corrects systemd service startup behavior for cross-user D-Bus access.

🔧 **Key Feature Advances:**  
- **PR #106216** ([feat(providers): per-provider HTTP proxy overrides](https://github.com/NousResearch/hermes-agent/pull/106216)) – Enables granular control over provider-specific proxies (e.g., for IP-based rate-limiting), crucial for enterprise use cases.
- **PR #106219** ([feat(terminal): per-session Docker containers with retention lifecycle](https://github.com/NousResearch/hermes-agent/pull/106219)) – Introduces session-scoped Docker containers; enables better isolation and resource cleanup.

---

### **4. Community Hot Topics**  
🔥 **Top Issue: #66616** – *Skills index is stale or degraded (degraded)*  
- **Comments:** 181 | **Status:** Open | [View Issue](https://github.com/NousResearch/hermes-agent/issues/66616)  
- **Why it matters:** The Skills Hub (`/docs/skills`) is broken due to outdated index (`29.8h old` vs. 26h limit). This impacts discoverability and trust in documentation. High visibility suggests foundational infrastructure instability.

🔥 **Top PR: #106212** – *Fix: reconcile NOT NULL columns without DEFAULT in state.db*  
- **Comments:** undefined | [View PR](https://github.com/NousResearch/hermes-agent/pull/106212)  
- **Why it matters:** Critical data integrity issue affecting older profiles. If unresolved, users cannot upgrade safely. Highlights long-term schema evolution challenges.

🔍 **Trend Analysis:**  
Users are increasingly reporting **platform-specific regressions** (especially Windows, WSL, Electron), **session state corruption**, and **inconsistent UX across GUI/CLI**. These reflect deeper concerns about reliability and upgrade path clarity.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (P1/P2, Severity: High)**  
| Issue | Description | Fix PR? | Link |
|------|-------------|--------|------|
| [#106202](https://github.com/NousResearch/hermes-agent/issues/106202) | Async delegation completes but parent never synthesizes (stuck for 2h+) | ❌ No fix yet | [Bug Report](https://github.com/NousResearch/hermes-agent/issues/106202) |
| [#106166](https://github.com/NousResearch/hermes-agent/issues/106166) | Manual `cron run` blocks future runs due to wrong scheduled_instant stamp | ❌ No fix yet | [Bug Report](https://github.com/NousResearch/hermes-agent/issues/106166) |
| [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) | Windows desktop `hermes update` fails post-update (wrong cwd) | ✅ Partial fix via PR #106097 | [Bug Report](https://github.com/NousResearch/hermes-agent/issues/105145) |

⚠️ **Medium Priority (P2–P3)**  
- [#106195](https://github.com/NousResearch/hermes-agent/issues/106195): `kanban promote --force` reports success but doesn’t change status → **false positive**.
- [#106182](https://github.com/NousResearch/hermes-agent/issues/106182): TUI crashes on YAML timestamps due to `json.dumps` serialization failure.
- [#106097](https://github.com/NousResearch/hermes-agent/issues/106097): Desktop update fails because verify step runs from wrong directory.

> 💡 **Pattern:** Many bugs stem from **incorrect working directory handling**, **state persistence flaws**, and **misaligned scheduling logic**—indicating systemic issues in process orchestration and environment context management.

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **Emerging Themes in Feature Requests:**  
- **Desktop UX Improvements:**  
  - Reorder fallback models (drag-and-drop) → [#106218](https://github.com/NousResearch/hermes-agent/issues/106218)  
  - Add Catppuccin themes + "boring" theme option → [#58841](https://github.com/NousResearch/hermes-agent/issues/58841)  
  - Make registered gateway switching explicit → [#104390](https://github.com/NousResearch/hermes-agent/issues/104390)

- **Project & Session Management:**  
  - Native Projects in Desktop (parity with CLI) → [#105511](https://github.com/NousResearch/hermes-agent/issues/105511)  
  - Per-session Docker containers → [PR #106219](https://github.com/NousResearch/hermes-agent/pull/106219) *(already merged)*

- **Provider Flexibility:**  
  - Per-provider proxy overrides → [PR #106216](https://github.com/NousResearch/hermes-agent/pull/106216) *(merged)*  
  - Custom endpoint catalog cache keying by credential → [PR #106193](https://github.com/NousResearch/hermes-agent/pull/106193) *(merged)*

> 📌 **Prediction:** The next major release (`v0.22.0`) will likely include:  
> - Enhanced session state resilience  
> - Improved Windows/Linux desktop stability  
> - Granular provider configuration (proxies, credentials)  
> - Desktop UI polish (themes, reorderable lists)

---

### **7. User Feedback Summary**  
🗣️ **User Pain Points:**  
- **Windows Update Failures:** Multiple reports confirm that `hermes update` succeeds but falsely reports “FAILED” — causing frustration and distrust in update mechanism.  
- **Desktop Crashes & Glitches:** Users report SIGTRAP crashes on Linux, incomplete model list (only 5/10 shown), and terminal hanging during WSL launch.  
- **Hidden Sessions & Poor Discoverability:** Pinned sessions remain hidden; gateway switching is non-intuitive — undermines usability for multi-profile workflows.  
- **Unreliable Automation:** Cron jobs fail silently or block future runs, breaking workflows.

😊 **Positive Signals:**  
- High engagement in feature discussions (e.g., themes, reordering) shows user investment.  
- Users appreciate advanced capabilities like multiplex profiles and terminal tooling.  
- PR contributions indicate growing confidence in the codebase.

---

### **8. Backlog Watch**  
🔍 **Long-Standing Issues Needing Attention:**  
- **#66616** – *Skills index is stale or degraded* (181 comments, opened July 2026)  
  - **Status:** Critical infrastructure flaw. Needs immediate triage and automated health checks.  
  - [Link](https://github.com/NousResearch/hermes-agent/issues/66616)

- **#90149** – *Make route identity immutable across multi-gateway Desktop* (4 comments, opened Aug 2026)  
  - **Status:** Architectural debt. Long-term risk to session integrity in multi-gateway setups.  
  - [Link](https://github.com/NousResearch/hermes-agent/issues/90149)

- **#83992** – *DaemonThreadPoolExecutor._adjust_thread_count fails on Python 3.14* (3 comments)  
  - **Status:** Compatibility risk. Will break cron jobs in upcoming Python versions.  
  - [Link](https://github.com/NousResearch/hermes-agent/issues/83992)

> ⚠️ **Urgent Call to Maintainers:** These issues represent **technical debt**, **user trust erosion**, and **future compatibility risks**. Prioritization of these items is essential before the next release.

---

**Final Assessment:**  
Hermes Agent is in a **high-activity, stabilization-focused phase**. The project shows strong momentum, but technical debt and platform-specific regressions threaten user experience. Immediate attention to core stability (Windows, cron, state) and architectural hygiene (route identity, schema migration) is recommended. With timely fixes, the next release could significantly improve reliability and user satisfaction.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

### **1. Today's Overview**  
As of 2026-09-09, IronClaw shows strong developer momentum with 11 pull requests updated in the last 24 hours—six open, five merged or closed—indicating active development and rapid iteration. Two new issues were opened, both highlighting critical multi-user and visibility concerns in hosted-MCP environments. Despite no new releases, the project is advancing feature parity and security hardening, particularly around identity isolation, configuration clarity, and tool discovery integrity. The consistent activity from core contributor kirikov signals a focused sprint on foundational stability and extensibility.

---

### **2. Releases**  
**None**  
No new releases were published in the past 24 hours. The latest release remains unchanged since prior to this update cycle. No breaking changes or migration notes are currently applicable.

---

### **3. Project Progress**  
**Merged/Closed PRs (5 items):**  
- [#8088](https://github.com/nearai/ironclaw/pull/8088) `feat(common)`: Distinguishes between set-but-empty and unset environment variables. Prevents silent default selection due to typos (e.g., `FOO=` vs missing `FOO`), improving deployment safety.  
- [#8089](https://github.com/nearai/ironclaw/pull/8089) `feat(extensions)`: Bundles the agent-market hosted-MCP provider package with manifest, schemas, and static tool declarations for fallback use. Enhances first-party extension support.  
- [#8083](https://github.com/nearai/ironclaw/pull/8083) `fix(extensions)`: Changes discovered hosted-MCP catalogs to be merged rather than replaced per user. Prevents overwriting of other users’ tools during discovery.  
- [#6760](https://github.com/nearai/ironclaw/pull/6760) `feat(extensions)`: Bundles the agent-market marketplace extension with configurable server URL via environment variable. Superseded by newer bundling patterns but validates intent.  
- [#6759](https://github.com/nearai/ironclaw/pull/6759) `feat(mcp)`: Adds opt-in SEP-414 `_meta` attribution on outbound `tools/list` and `tools/call` calls. Enables provider-level context tracking (e.g., retry detection, conversation state).  

These merges reflect progress in **multi-tenancy resilience**, **configuration reliability**, and **interoperability with external providers**.

---

### **4. Community Hot Topics**  
**Top Issues & PRs:**  
- **[#8086](https://github.com/nearai/ironclaw/issues/8086)** `ironclaw skills list` cannot see runtime-installed skills — *Critical UX gap*. Users can’t verify skill availability via CLI, leading to confusion when agents fail silently. This highlights a growing need for **transparent agent state visibility**.  
- **[#8090](https://github.com/nearai/ironclaw/pull/8090)** `fix(mcp)`: Key discovered catalogs per caller, not per extension — *High-severity security/privacy issue*. Currently, all users share one catalog slot, enabling cross-user tool overwrite. A fix PR exists and is actively being reviewed.  
- **[#8084](https://github.com/nearai/ironclaw/pull/8084)** `feat(mcp)`: Opt-in SEP-414 caller attribution — *Key enabler for multi-tenant MCP servers*. Allows providers to distinguish conversations and avoid double-charging on retries. High priority for production deployments.  

> 🔍 **Underlying Need**: As IronClaw scales toward multi-principal, shared-hosted environments, **identity-aware tooling**, **user-specific state isolation**, and **CLI transparency** are becoming central concerns—not edge cases.

---

### **5. Bugs & Stability**  
**Ranking by Severity:**  
1. **[#6778](https://github.com/nearai/ironclaw/issues/6778)**: Hosted-MCP publishes tool catalogs per extension ID only, causing **cross-user metadata exposure** on multi-principal servers. *High risk* — could lead to privilege escalation or data leakage if discovery depends on credentials.  
   - ✅ **Fix PR**: [#8090](https://github.com/nearai/ironclaw/pull/8090) (in review) proposes keying catalogs per caller instead.  
2. **[#8086](https://github.com/nearai/ironclaw/issues/8086)**: `skills list` CLI command fails to show skills installed by the runtime or other users. *Medium severity* — impacts debugging and trust in agent capabilities.  
   - ❌ No fix PR yet; requires deeper CLI-state integration.  
3. **[#8082](https://github.com/nearai/ironclaw/pull/8082)**: Document text attachment consumes massive model context silently. *Medium risk* — can exhaust budgets without warning.  
   - ✅ Fix PR: Opt-in pointer mode to reference documents without inlining text.  

> ⚠️ **Stability Note**: No crashes or regressions reported today. Core stability is maintained, but **security and UX gaps are emerging as primary risks**.

---

### **6. Feature Requests & Roadmap Signals**  
**Emerging Priorities:**  
- **[#8087](https://github.com/nearai/ironclaw/pull/8087)**: Make `PromptContextTokenBudget::DEFAULT_CONTEXT_LIMIT_TOKENS` an override, not a constant. Signals demand for **flexible context window adaptation** across diverse models (e.g., 1M+ token LLMs). Likely to land in v0.12+.  
- **[#8082](https://github.com/nearai/ironclaw/pull/8082)**: Opt-in pointer mode for document attachments. Indicates rising use of large-file inputs and need for **context-aware resource management**.  
- **[#8072](https://github.com/nearai/ironclaw/pull/8072)**: Register Telegram bot commands at activation. Suggests growing interest in **integrated messaging platforms** and **user-friendly agent access**.  

> 📈 **Roadmap Signal**: IronClaw is shifting from pure backend agent orchestration toward **user-facing, multi-channel, context-aware systems**.

---

### **7. User Feedback Summary**  
- **Pain Points**:  
  - “Why can’t my agent see its own skill?” — frustration with invisible runtime-installed skills ([#8086](https://github.com/nearai/ironclaw/issues/8086)).  
  - “I thought I had access to this tool, but it disappeared after someone else activated.” — reflects real-world confusion due to shared catalog keys ([#6778](https://github.com/nearai/ironclaw/issues/6778)).  
- **Use Cases**:  
  - Multi-tenant hosted-MCP deployments (e.g., enterprise AI assistants).  
  - Agents using large PDFs/documents in context-heavy workflows.  
- **Satisfaction**:  
  - Positive feedback on bundled extensions and clearer config handling (e.g., PR #8088).  
  - Low satisfaction with CLI transparency and lack of real-time state visibility.

---

### **8. Backlog Watch**  
**Critical Long-Unanswered Items:**  
- **[#6778](https://github.com/nearai/ironclaw/issues/6778)**: Cross-user tool catalog exposure — *high-risk privacy issue*, now addressed in PR #8090 but still awaiting merge.  
- **[#8086](https://github.com/nearai/ironclaw/issues/8086)**: CLI cannot list runtime-installed skills — *fundamental UX flaw*; no fix PR yet despite clear impact.  
- **[#8085](https://github.com/nearai/ironclaw/pull/8085)**: Operator-installed packages not treated like host-bundled ones — *configuration inconsistency* that could break deployments. Needs resolution before wider adoption.  

> 🛑 **Urgent Attention Needed**: These three issues represent **critical path blockers** for production-grade, multi-user deployments. Maintainers should prioritize triage and merging of associated PRs.

--- 

✅ **Project Health Assessment**: **Healthy but under pressure**. Strong development velocity and focus on security/UX, but high-priority bugs and visibility gaps remain unresolved. IronClaw is maturing into a production-ready agent platform—but only if identity isolation, CLI transparency, and configuration robustness are fully addressed.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-09**

---

### **1. Today's Overview**  
QwenPaw exhibits strong community engagement with 27 new issues and 44 pull requests updated in the past 24 hours, reflecting active development and user-driven feedback. The release of **v2.2.1-beta.1** introduces critical model routing enhancements and fixes for streaming session sync and PDF handling. Despite a surge in PR activity—particularly around memory, console UX, and plugin management—the project continues to face stability challenges in edge cases involving session state, tool outputs, and multi-threaded execution. Overall, QwenPaw remains a rapidly evolving agent framework with growing complexity in its backend logic and frontend interactivity.

---

### **2. Releases**  
**[v2.2.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.1)** — *Beta*  
- ✅ **feat**: Added agent model routing settings via `@zhaozhuang521` (#7501) — enables dynamic LLM selection per agent/session.  
- ✅ **docs**: Updated website content for v2.2.0 (#7517).  
- ✅ **fix(chat)**: Resolved issue where resolved chat sessions were not properly synced during streaming (#7538).  
- ⚠️ **Migration Note**: This is a beta release; users should expect potential instability. No breaking changes reported, but expect API surface changes in future releases.  

> 🔗 [Release Notes](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.1)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621): Fixes PDF block handling for text-only models — prevents OpenAI-compatible endpoints from rejecting requests due to invalid `{"type":"file"}` blocks.  
- ✅ [#7627](https://github.com/agentscope-ai/QwenPaw/pull/7627): Restores legacy handshake support for MCP endpoints returning HTTP 401 with non-standard bodies — resolves false OAuth prompts.  
- ✅ [#7631](https://github.com/agentscope-ai/QwenPaw/pull/7631): Fixes CLI authentication in Hub sandboxes by injecting runtime tokens.  
- ✅ [#7605](https://github.com/agentscope-ai/QwenPaw/pull/7605): Improves plugin manager UX: preserves browsing context, supports batch updates, detects available updates.  
- ✅ [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502): Redesigned sidebar and settings UI with configurable layout and persistent state.  

These PRs reflect progress in **core stability**, **plugin ecosystem usability**, and **interoperability with external services**.

---

### **4. Community Hot Topics**  
The most active discussions center on **session integrity**, **tool output handling**, and **UI/UX friction**:

- 🔥 **[Issue #7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)**: Model replies disappear after persistence — "model can't see its own last message". 8 comments, high severity. Users report **empty responses despite persisted history**, suggesting a deep bug in session state restoration.  
- 🔥 **[Issue #7622](https://github.com/agentscope-ai/QwenPaw/issues/7622)**: Modal backgrounds are transparent in v2.2.0 — **no overlay mask**, visible behind content. Confirmed as a CSS regression post-upgrade.  
- 🔥 **[PR #7638](https://github.com/agentscope-ai/QwenPaw/pull/7638)**: First-time contributor adds **Requesty** as an OpenAI-compatible provider. High visibility — signals demand for **multi-provider routing** and **flexible LLM access**.  
- 🔥 **[Issue #7633](https://github.com/agentscope-ai/QwenPaw/issues/7633)**: llama.cpp v0.4.0 nightly build fails version parsing → **silent rollback** of user upgrades. Critical for local model maintainers.  

👉 These topics indicate growing pains in **state consistency**, **frontend reliability**, and **user autonomy over runtime components**.

---

### **5. Bugs & Stability**  
| Severity | Issue | Summary | Fix PR? |
|---------|------|--------|--------|
| 🔴 **Critical** | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | Model response lost after persistence — empty replies despite valid history | ❌ No fix yet |
| 🔴 **Critical** | [#7625](https://github.com/agentscope-ai/QwenPaw/issues/7625) | Gemini returns 400 after background tool completion: `"Requests ending with a model turn are not supported"` | ❌ No fix yet |
| 🔴 **High** | [#7617](https://github.com/agentscope-ai/QwenPaw/issues/7617) | Session with PDF DataBlock permanently breaks text-only OpenAI-compat endpoints | ✅ Fix in PR #7621 (merged) |
| 🔴 **High** | [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | llmcpp v0.4.0-dev version parsing failure causes silent rollback | ❌ No fix yet |
| 🟡 **Medium** | [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | Heartbeat cron triggers duplicate message pile-up → agent unresponsive | ❌ No fix yet |

> ⚠️ **Note**: Several critical bugs involve **session state corruption**, **tool-to-model handoff failures**, and **silent data loss**, indicating systemic risks in long-running agent workflows.

---

### **6. Feature Requests & Roadmap Signals**  
User demand is shifting toward **modularity**, **customization**, and **community integration**:

- ✅ **[Feature #7600](https://github.com/agentscope-ai/QwenPaw/issues/7600)**: Traffic light indicator for task status — **visual feedback for long-running agents**. Likely to be implemented in v2.3.  
- ✅ **[Feature #7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)**: Context compaction aware of full request budget — essential for scalable long-context agents. Strong alignment with AgentScope’s memory roadmap.  
- ✅ **[Feature #7583](https://github.com/agentscope-ai/QwenPaw/issues/7583)**: Add login + community mailbox + feedback tools — **integrate QwenPaw with AgentScope platform**. High signal for future platformization.  
- ✅ **[Feature #7630](https://github.com/agentscope-ai/QwenPaw/issues/7630)**: Disable CPU detection — enables use in VMs/cloud desktops. Urgent for enterprise adoption.

👉 **Predicted next version (v2.3)** will likely include: **context-aware compaction**, **traffic light indicators**, **community login**, and **better plugin management**.

---

### **7. User Feedback Summary**  
Real-world pain points highlight **friction in complex workflows**:

- **“I send a message mid-task, get a 409 error — why isn’t it queued?”** (#7559) → Expectation: async queueing during task execution.  
- **“My local llama.cpp upgrade gets silently rolled back”** (#7633) → Loss of control over runtime versions.  
- **“I can’t see my own reply — it just vanishes”** (#7579) → Trust erosion in agent memory.  
- **“PDFs break everything”** (#7617, #7621) → Need robust multimodal handling without breaking text-only flows.  
- **“Installing plugins is painful — need one-click update”** (#7582, #7605) → Plugin ecosystem feels immature.

Users value **predictability**, **control**, and **transparency** — especially in long-running or mission-critical tasks.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues needing maintainer attention:

- 🔺 **[Issue #7363](https://github.com/agentscope-ai/QwenPaw/issues/7363)**: Synchronous calls freeze event loop — **blocks entire UI for ~2 minutes**. Still open since August 2026. Requires architectural change in executor design.  
- 🔺 **[Issue #7554](https://github.com/agentscope-ai/QwenPaw/issues/7554)**: Shell tools inherit stdin on Windows → hangs console. Critical for Windows users.  
- 🔺 **[Issue #7572](https://github.com/agentscope-ai/QwenPaw/issues/7572)**: Tool coordinator swallows exceptions — no stack trace, **impossible to debug failures**. High risk for production use.  
- 🔺 **[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)**: Per-session model overrides — **highly requested feature**, under review since July 2026. Should be prioritized.

> 📌 **Recommendation**: Prioritize PRs addressing **event loop blocking**, **error visibility**, and **session state integrity** to stabilize core agent execution.

---  
*Data compiled from GitHub (2026-09-09). All links direct to original GitHub resources.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest — 2026-09-09**

---

### **1. Today's Overview**  
ZeroClaw (github.com/zeroclaw-labs/zeroclaw) is experiencing a high-intensity development phase with **27 open issues** and **50 active pull requests** updated in the last 24 hours—indicating robust community engagement and rapid iteration. The project is focused on architectural evolution, particularly around **session management**, **WASM plugin extensibility**, and **secure, deterministic agent execution**. High-risk RFCs dominate the issue tracker, signaling strategic design decisions are underway. Despite no new releases, ongoing PR activity suggests imminent feature integrations and stability improvements.

---

### **2. Releases**  
❌ **No new releases** were published in the last 24 hours.  
The project remains in a pre-release development cycle, with all recent changes concentrated in `master` and pending formal versioning. Maintainers are likely preparing for a major update to incorporate key architecture RFCs (e.g., #9487, #10526), but no release notes or migration guidance have been issued.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #10675** (`fix(ci): make Windows test scoping explicit`) – Improved CI reliability by explicitly defining Windows test scope, reducing flaky builds.  
- **PR #10620** (`fix(channels): explain permanently dropped voice messages to sender`) – Added user feedback for Telegram voice drops, improving transparency.  

🚀 **Key Features Advanced:**  
- **PR #10716** (`feat(cost): price cache writes at the configured write premium`) – Implements accurate cost accounting for cached responses, crucial for billing integrity.  
- **PR #10714** (`fix(web): route integration config links on the registry key`) – Enhances web UI navigation for integrations via proper routing logic.  
- **PR #10553** (`feat(zerocode): add selected text to chat`) – Adds copy-to-chat functionality, directly addressing UX friction in ZeroCode editor.  

🔧 **Critical Fixes Implemented:**  
- **PR #10696** (`fix(runtime): trim history to a low-water target instead of the cap`) – Resolves **#10674** (history trimming loop), eliminating redundant re-trimming in tool-heavy sessions.  
- **PR #8955** (`fix(telegram): batch media group attachments`) – Fixes **#5514** by grouping Telegram image albums into single multimodal turns, preventing LLM overloading.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues (by comments):**  
- **#9487** [RFC]: *Runtime-owned conversation sessions and transport surface adapters* – **35 comments**  
  → Core architectural shift: moving session ownership from gateway to runtime. Critical for security and modularity.  
- **#9488** [RFC]: *Unified file and attachment architecture* – **28 comments**  
  → Aims to unify handling of files across channels; essential for cross-platform consistency.  
- **#6996** [RFC]: *Granular sandbox policy - filesystem restrictions* – **26 comments**  
  → Addresses long-standing drift between app-layer path admission and OS-level sandboxing (Bubblewrap/Landlock). High priority for security hardening.

💡 **Top PRs by Activity:**  
- **PR #9739** (`feat(zerocode): multi-session panes with agent sidebar`) – **XL size**, blocked by maintainer review, but critical for ZeroCode users managing multiple agents.  
- **PR #9419** (`fix(providers): rotate live credentials after rate limits`) – **High risk**, addresses provider resilience under throttling.  
- **PR #10722** (`fix(runtime): deliver pre-tool narration and terminal fallback`) – Ensures consistent event delivery across ACP/RPC consumers.

> 🔍 **Underlying Need**: Users demand **stable, secure, and composable agent environments**—especially around session lifecycle, file handling, and provider resilience. The community is pushing for **architectural clarity** to enable scalable, maintainable agent systems.

---

### **5. Bugs & Stability**  
🚨 **High Severity (S1–S2):**  
- **#9333** [Bug]: *Failed ACP turns disappear after switching sessions* – **S1** workflow blocker. Fix PR: **#10468** (already merged).  
- **#10720** [Bug]: *Agent responses render twice in chat pane (v0.8.5)* – **S3**, visual glitch. No fix yet.  
- **#10700** [Bug]: *Cost records carry daemon-lifetime session ID* – **S2**, prevents per-conversation cost tracking. Fix PR: **#10716** (in progress).  

🟡 **Medium Severity (S2–S3):**  
- **#10674** [Bug]: *History trimming defeats prompt caching* – Fixed via **PR #10696**.  
- **#10701** [Bug]: *Image attachment invalidates entire history cache prefix* – Impacts Anthropic/OpenAI proxy efficiency.  
- **#10702** [Bug]: *Token-budget trimming stops at first turn boundary* – Same root cause as #10674.  

⚠️ **Stability Signal**: While core engine stability is improving, **UI rendering bugs** (e.g., double response) and **state persistence issues** remain visible in production use.

---

### **6. Feature Requests & Roadmap Signals**  
🔮 **Predicted Near-Term Inclusions (v0.9+):**  
- ✅ **Multi-agent sidebar** (#9727, #9739) – High visibility, accepted, implementation in progress.  
- ✅ **Composable WASM plugin runtime** (#10076) – Key enabler for extensibility; being actively discussed.  
- ✅ **OpenAI Responses streaming support** (#10708, #10707, #10704, #10706) – Multiple PRs targeting full OpenAI API parity.  
- ✅ **Per-field cron input** (#10641) – UX polish, likely included in next minor release.  
- ✅ **Passive group context for Telegram** (#10715) – User-driven feature, aligns with WhatsApp Web behavior.

> 📌 **Roadmap Trend**: Focus on **agent composability**, **cross-channel consistency**, and **user-centric workflows**—shifting from monolithic assistant to modular, multi-agent orchestration.

---

### **7. User Feedback Summary**  
💬 **Pain Points Identified:**  
- **"I can’t see multiple agents running at once"** – Directly cited in #9727. Users need side-by-side monitoring.  
- **"Images break my chat history"** – Reported in #5514 and echoed in #10701; affects usability in rich-media workflows.  
- **"Costs don’t reflect per-conversation spending"** – Seen in #10700; frustrates budget-aware users.  
- **"Tool calls appear to fire twice"** – Observed in #10720; erodes trust in output accuracy.

🌟 **Positive Signals:**  
- **"Adding selected text to chat is a game-changer"** – PR #10553 received strong implicit approval via user adoption.  
- **"Fixed history trimming means fewer restarts"** – Indirect praise for PR #10696’s impact on session continuity.

---

### **8. Backlog Watch**  
📌 **Critical Issues Needing Maintainer Attention:**  
- **#9487** [RFC]: Runtime-owned sessions – **Revision 5**, needs discussion window reset before voting. **Needs decision**.  
- **#9488** [RFC]: Unified file/attachment architecture – **Revision 10**, stalled. High risk, high impact.  
- **#10526** [RFC]: Append-only session event history – **New**, foundational for reproducibility. Requires acceptance.  
- **#10549** [RFC]: Simplify RFC voting process – **Accepted**, but not implemented. Could accelerate decision velocity.  
- **#10709** [Docs]: Document Astra setup – Missing docs for GPT-6 Astra, blocking user onboarding.

> ⏳ **Maintenance Note**: Despite high activity, several **accepted RFCs and trackers** remain unactioned. Maintainers should prioritize **decision-making** (via #8692) to avoid bottlenecks.

---

**🔍 Final Assessment**: ZeroClaw is in a pivotal phase—balancing deep architectural refinement with real-world usability. With strong community momentum and a focus on security, determinism, and extensibility, it is shaping toward a **modular, agent-first AI platform**. However, **maintainer triage** and **release planning** will be decisive in translating this momentum into stable, user-ready software.  

👉 **Track the action**: [ZeroClaw GitHub](https://github.com/zeroclaw-labs/zeroclaw)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*