# OpenClaw Ecosystem Digest 2026-05-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-07 00:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-07

---

## 1. Today's Overview

OpenClaw exhibits **extremely high velocity** with 500 issues and 500 PRs touched in the last 24 hours, though the open/merge ratio (291 open issues, 358 open PRs vs. 209 closed/142 merged) suggests a backlog accumulation pattern. The project shipped two releases in two days (2026.5.5 and 2026.5.6), with the latter being a **same-day hotfix** for a critical OAuth regression. Gateway stability remains the dominant operational theme, with multiple interconnected leaks, CPU spikes, and WebSocket starvation issues under active investigation. The community is heavily invested in cross-platform expansion (Linux/Windows apps, prebuilt Android APKs) and security hardening (exec approvals, sandboxing, TOTP).

---

## 2. Releases

### v2026.5.6 (Hotfix)
- **Critical fix**: Reverted `doctor --fix` repair from v2026.5.5 that incorrectly rewrote valid `openai-codex/*` ChatGPT/Codex OAuth routes to `openai/*`
- **Impact**: Broke OAuth-only GPT-5.5 setups, forced users onto API-key routes
- **Migration**: Users already affected by v2026.5.5 must manually restore `openai-codex/*` prefixes in `openclaw.json`

### v2026.5.5
- **Feishu**: Fixed missing native topic starter thread IDs causing session splitting ([#78262](https://github.com/openclaw/openclaw/issues/78262))
- **LINE**: Added validation to reject `dmPolicy: "open"` without wildcard `allowFrom` for webhook DM security

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Author | Description | Status |
|:---|:---|:---|:---|
| [#78659](https://github.com/openclaw/openclaw/pull/78659) | sjf | CLI completion: guard shell profile source line with file-exists check | **Closed** |
| [#78299](https://github.com/openclaw/openclaw/pull/78299) | feiskyer | MS Teams: respect thread context in proactive send path | **Closed** |

### Active Development (Open PRs with Progress)

| PR | Author | Focus Area |
|:---|:---|:---|
| [#78619](https://github.com/openclaw/openclaw/pull/78619) | hera8939 | Compaction: ignore transcript metadata bytes for token pressure |
| [#78412](https://github.com/openclaw/openclaw/pull/78412) | wdeveloper16 | macOS LaunchAgent: restore KeepAlive recovery, skip repair kickstart |
| [#77915](https://github.com/openclaw/openclaw/pull/77915) | wAngByg | Session store recovery from bak/tmp after corrupted write |
| [#78667](https://github.com/openclaw/openclaw/pull/78667) | fede-kamel | New OCI Generative AI provider plugin |
| [#78317](https://github.com/openclaw/openclaw/pull/78317) | omarshahine | iMessage: private-API support via imsg JSON-RPC [AI-assisted] |
| [#78668](https://github.com/openclaw/openclaw/pull/78668) | pahuchi-joe | Discord: event-edit and event-delete actions |
| [#78427](https://github.com/openclaw/openclaw/pull/78427) | kstrat2001 | LM Studio: handle OpenAI Harmony plain-text tool calls |
| [#78664](https://github.com/openclaw/openclaw/pull/78664) | guanbear | Perf: cache provider tool schema normalization |

---

## 4. Community Hot Topics

### Top Issues by Engagement

| Issue | Comments | 👍 | Topic | Link |
|:---|:---|:---|:---|:---|
| **#75 Linux/Windows Clawdbot Apps** | 104 | 74 | Cross-platform parity | [Link](https://github.com/openclaw/openclaw/issues/75) |
| **#9443 Prebuilt Android APK releases** | 24 | 1 | Distribution/accessibility | [Link](https://github.com/openclaw/openclaw/issues/9443) |
| **#73655 Gateway leak triad on plugin restart** | 16 | 1 | Stability/critical infrastructure | [Link](https://github.com/openclaw/openclaw/issues/73655) |
| **#73323 Gateway runtime degradation (Windows)** | 16 | 1 | Platform-specific performance | [Link](https://github.com/openclaw/openclaw/issues/73323) |
| **#78407 doctor --fix rewrites openai-codex/* → openai/*** | 15 | 3 | **Caused v2026.5.6 hotfix** | [Link](https://github.com/openclaw/openclaw/issues/78407) |

### Underlying Needs Analysis

- **#75** (104 comments): Deep pent-up demand for desktop parity beyond macOS. The 4-month age and sustained engagement suggest this is a **strategic blocker** for enterprise adoption.
- **#73655 + #73323**: These form a **gateway reliability cluster** — EADDRINUSE loops, signal-handler accumulation, sync I/O blocking WS handshakes, plus chronic Windows-specific timer/network degradation. Users are running long-lived production gateways and hitting resource exhaustion.
- **#9443**: Submitted by AI assistant (notable meta-pattern). Indicates accessibility barriers for non-technical users who cannot build from source.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR/Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#78407](https://github.com/openclaw/openclaw/issues/78407) | `doctor --fix` breaks OAuth auth for Codex users | **Fixed in v2026.5.6** |
| 🔴 **Critical** | [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad: EADDRINUSE retry loop + signal-handler accumulation + sync I/O starvation | Open, under investigation |
| 🔴 **Critical** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | Chronic gateway degradation: 60s pricing fetch timeouts, Telegram polling stalls 127–266s, RPC 8–83s slowdowns | Open, reproducible across 4.23–4.26 |
| 🟡 **High** | [#78232](https://github.com/openclaw/openclaw/issues/78232) | WeChat plugin 2.4.1 incompatible with 2026.5.4 — channelRuntime API changes break inbound messages | Open, 10 comments |
| 🟡 **High** | [#75707](https://github.com/openclaw/openclaw/issues/75707) | Gateway CPU pinned at 100% idle (~724MB RAM, 20s+ node.list latency) | **Closed** — root causes identified, workarounds documented |
| 🟡 **High** | [#78402](https://github.com/openclaw/openclaw/issues/78402) | Gateway closes WS connections (1000/1005/1006) due to event-loop starvation from stuck tool call | **Closed** |
| 🟡 **High** | [#78508](https://github.com/openclaw/openclaw/issues/78508) | Trusted-proxy Control UI: missing `operator.read` scope despite headers present | Open, regression from 2026.5.5 |
| 🟡 **High** | [#74313](https://github.com/openclaw/openclaw/issues/74313) | `doctor` flags live agents/main store as orphaned when default agent ID ≠ "main" | Open, data-loss risk |
| 🟢 **Medium** | [#67793](https://github.com/openclaw/openclaw/issues/67793) | `queue.mode: "collect"` not batching despite debounce | Open |
| 🟢 **Medium** | [#64752](https://github.com/openclaw/openclaw/issues/64752) | Telegram reactions arrive but don't trigger agent turn | Open |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Category | Predicted Priority | Rationale |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows desktop apps | Platform expansion | **High** | 104 comments, 74 👍, 4+ months old; blocks enterprise adoption |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APKs | Distribution | **Medium-High** | Submitted by AI assistant = accessibility demand signal |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) Channel-mediated MCP tool approval | Security | **High** | Extends existing `/approve` pattern; production safety need |
| [#8719](https://github.com/openclaw/openclaw/issues/8719) Security Profile v1.1 (data-centric, secure-by-default) | Security architecture | **High** | Comprehensive proposal with concrete threat model |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Denylist for exec-approvals | Security | **Medium** | Natural complement to existing allowlist; 7 👍 |
| [#67440](https://github.com/openclaw/openclaw/issues/67440) TOTP for exec approvals | Security | **Medium** | Builds on #6615; user already has `pam_oath` working |
| [#7575](https://github.com/openclaw/openclaw/issues/7575) Sysbox Docker runtime | Sandbox isolation | **Medium** (deferred) | Marked HOLD — requires host maintenance window |
| [#6946](https://github.com/openclaw/openclaw/issues/6946) Telegram processing indicator | UX polish | **Low-Medium** | Competitive parity with other bot platforms |

**Likely in next 1–2 releases**: #75 platform expansion signals, #78308 MCP approval (small surface, high value), #78667 OCI provider (PR already open).

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Gateway reliability under load** | #73655, #73323, #75707, #75839 (10s session.list latency) | Critical — production-blocking |
| **OAuth/auth fragility** | #78407 (hotfix), #67158, #75739 (codex harness migration issues) | High — trust erosion |
| **Plugin API stability** | #78232 (WeChat), #76371 (Discord SecretRef), #77930 (Discord channel loading) | High — upgrade anxiety |
| **Session management** | #66646 (file lock cascade), #2597 (context loss), #37634 (sandbox read-only) | Medium-High |
| **Windows as second-class** | #73323 chronic degradation, #75 no desktop app | Medium — platform gap |

### Satisfaction Signals
- Rapid hotfix turnaround for #78407 (24h) demonstrates responsive maintenance
- Active community contribution: PRs from 20+ distinct authors in 24h window
- Rich plugin ecosystem: Discord, Telegram, Feishu, LINE, WeChat, iMessage, MS Teams all maintained

### Dissatisfaction Signals
- "Regression" label appears on 8+ issues in top 50 — suggests **release quality concerns**
- Multiple "worked before, now fails" reports indicate insufficient integration testing for gateway lifecycle
- AI-submitted issue (#9443) hints at user base expansion beyond traditional developer cohort, increasing support burden

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 4+ months | Strategic | Roadmap commitment or call for maintainers |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot (Rust rewrite) | 3 months | Architectural | Feasibility assessment, not actionable as stated |
| [#1210](https://github.com/openclaw/openclaw/issues/1210) Base64 images in transcripts | 3.5 months | Performance | Context overflow, token waste — design decision needed |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer mode not injecting mid-turn | 7+ weeks | Core feature broken | Root cause identified (commit `9889c6da5`), fix pending |
| [#50880](https://github.com/openclaw/openclaw/issues/50880) Steer queue silently degrades | 7+ weeks | **Closed** but pattern matches #48003 | Verify fix completeness |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) Sandbox workspaceAccess "none" read-only | 2 months | UX friction | Small surface, clear fix — good first issue? |

### PRs Stalled/Awaiting Review

| PR | Age | Blocker |
|:---|:---|:---|
| [#73261](https://github.com/openclaw/openclaw/pull/73261) targetProvider short-circuit | 9 days | Size XL, needs thorough review |
| [#69310](https://github.com/openclaw/openclaw/pull/69310) Surface dropped media | 16 days | "needs-real-behavior-proof" triage label |
| [#58808](https://github.com/openclaw/openclaw/pull/58808) Pass sender context to ChannelAgentToolFactory | 5+ weeks | Small, unreviewed — possible oversight |

---

*Digest generated from GitHub activity 2026-05-06 to 2026-05-07. All links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Assistant Ecosystem
**Date:** 2026-05-07 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **unprecedented fragmentation and specialization**, with 10+ active projects pursuing divergent architectural philosophies—from OpenClaw's gateway-centric universal hub to Moltis's sandboxed local-first server to IronClaw's multi-month "Reborn" refactoring. **Provider compatibility chaos** (DeepSeek reasoning_content, Anthropic caching, OAuth fragility) unifies all projects in shared pain, while **channel expansion** (WhatsApp, Matrix, enterprise IM) has become table stakes. The ecosystem is bifurcating between "universal connectors" optimizing for breadth (OpenClaw, ZeroClaw, PicoClaw) and "opinionated platforms" optimizing for depth (Moltis, IronClaw, NanoClaw). No project has achieved production-grade stability; all exhibit critical bugs in gateway, auth, or context management subsystems.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.5.6 (hotfix) | 🟡 B+ | Extreme velocity, backlog accumulation, rapid hotfix response |
| **NanoBot** | 16 | 37 | None (v0.1.5.post3 current) | 🟡 B | Stabilization focus; runtime context regressions; security fix pending |
| **Hermes Agent** | 50 | 50 | None | 🟡 B | Growth pains: ambition exceeds merge capacity; Windows debt accumulating |
| **PicoClaw** | 21 | 62 | v0.2.8-nightly | 🟡 B+ | Strong merge rate (32%); production reliability gaps; Asia-Pacific enterprise traction |
| **NanoClaw** | 4 | 25 | None | 🟡 B- | v2 migration hardening; merge bottleneck; non-technical user push |
| **NullClaw** | 0 | 1 | None | 🟢 C+ | Minimal activity; stable but quiet; month-old PR unmerged |
| **IronClaw** | 39 | 46 | None | 🟢 B+ | Intense architectural migration ("Reborn"); strong engineering throughput; transitional instability |
| **LobsterAI** | 1 | 29 | None (2026.04.27 latest) | 🟢 B+ | Exceptionally clean merge (29/0 open); enterprise IM focus; security vulnerability unpatched |
| **Moltis** | 6 | 11 | None | 🟢 A- | Excellent bug closure (3/4 same-day); federation architecture emerging; production maturity |
| **CoPaw** | 41 | 26 | v1.1.5.post2 | 🟡 B | Aggressive triage; context management crisis; enterprise readiness gaps |
| **ZeroClaw** | 50 | 50 | None | 🔴 B- | Unstable expansion: 6 providers + 4 channels in 24h; 4 S1 bugs unpatched; P0 multi-instance blocker |
| **TinyClaw** | 0 | 0 | None | ⚪ N/A | No activity |
| **ZeptoClaw** | 0 | 0 | None | ⚪ N/A | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-50x higher velocity than all peers; only ZeroClaw approaches (50/50) |
| **Release cadence** | Same-day hotfix (v2026.5.6) | NanoBot, Hermes, IronClaw, ZeroClaw: no releases in weeks+ |
| **Channel ecosystem** | 7+ maintained (Discord, Telegram, Feishu, LINE, WeChat, iMessage, MS Teams) | Matched only by PicoClaw; exceeds ZeroClaw's breadth with deeper per-channel quality |
| **Cross-platform** | macOS app shipping; Linux/Windows in demand (#75, 104 comments) | LobsterAI Windows-focused; Moltis server-only; NanoClaw Slack-centric |

### Technical Approach Differences
- **OpenClaw**: Gateway-centric hub architecture with plugin-based channel/provider extensibility; TypeScript/Node.js runtime; heavy investment in OAuth/API-key duality
- **Moltis**: Rust-based, sandbox-first (Docker/Podman), local-first with vault security; federation emerging
- **IronClaw**: Host-layer abstraction ("Reborn") with WASM isolation, durable event streams, multi-tenant design
- **ZeroClaw**: Rust-based, "everything is a plugin" vision (unrealized), aggressive provider/channel expansion
- **NanoClaw**: v2 architectural hardening, Claude-centric, non-technical user accessibility focus

### Community Size Comparison
OpenClaw's **104-comment, 74-👍 issue (#75)** dwarfs all peer engagement metrics. Hermes Agent's top issue reaches 30 comments; PicoClaw's highest is 12. However, OpenClaw's open/merge ratio (358 open PRs vs. 142 merged) suggests **review capacity is a bottleneck**—NanoClaw (22 open/3 merged) and Hermes (43 open/7 merged) share this pathology, but at smaller scale.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **DeepSeek reasoning_content round-trip** | NanoBot, PicoClaw, CoPaw, Moltis | Bidirectional passthrough for thinking-mode models; API-breaking changes from DeepSeek cause cascading failures |
| **Gateway reliability under load** | OpenClaw, Hermes, ZeroClaw | EADDRINUSE loops (OpenClaw #73655), sync I/O starvation, PostgreSQL runtime panic (ZeroClaw #6472), event-loop starvation |
| **Windows platform parity** | OpenClaw, Hermes, LobsterAI, CoPaw | EPERM on skill deletion, path format bugs, packaged environment failures, terminal tool failures |
| **MCP (Model Context Protocol) ecosystem** | OpenClaw, PicoClaw, NanoClaw, Moltis | Streamable HTTP transport (PicoClaw #2782), tool approval workflows (OpenClaw #78308), server management UI (PicoClaw #2770) |
| **Enterprise IM expansion** | OpenClaw, PicoClaw, LobsterAI, CoPaw, Moltis | Feishu, DingTalk, POPO, WeChat multi-instance; per-user identity resolution; webhook security |
| **Context/lifecycle management** | OpenClaw, NanoBot, CoPaw, IronClaw | Session recovery from corruption, compaction under token pressure, infinite conversation without cost explosion |
| **Sandbox security** | Moltis, OpenClaw, IronClaw | Exec approvals, TOTP, denylists, Sysbox runtime, native WASM isolation |
| **Provider auth fragility** | OpenClaw, Hermes, PicoClaw, ZeroClaw | OAuth route rewriting (OpenClaw #78407), subscription desync (Hermes #6475), multiple credential confusion (PicoClaw #2548) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Risk |
|:---|:---|:---|:---|
| **OpenClaw** | Universal gateway, richest channel ecosystem | Power users, multi-platform operators | Gateway reliability cluster; OAuth fragility; merge bottleneck |
| **Moltis** | Sandboxed local-first, federation architecture | Privacy-conscious, ops-savvy self-hosters | Expansion tension: local-first vs. cloud-native pull |
| **IronClaw** | "Reborn" host-layer abstraction, WASM isolation | Enterprise, multi-tenant SaaS builders | Multi-month migration risk; feature gaps during transition |
| **NanoClaw** | Non-technical accessibility, Claude-centric | Casual users, Slack-first deployers | v1→v2 migration fragility; DevOps knowledge still required |
| **ZeroClaw** | Aggressive universal connectivity (any protocol) | Protocol omnivores, tinkerers | "Move fast and break things"—S1 bugs in core paths; architectural incoherence |
| **LobsterAI** | Enterprise IM depth (NetEase Youdao backing) | Chinese enterprise, workplace AI | Closed-community development; security response latency |
| **PicoClaw** | Go-based efficiency, edge deployment (Pi Zero 2 W) | IoT/embedded, Asia-Pacific enterprise | Config complexity becoming systemic; auth regression |
| **CoPaw** | Qwen ecosystem integration, skill marketplace | Chinese developers, Qwen model users | Context management architecture debt; platform abstraction fragility |
| **NanoBot** | Lightweight (~4K lines), rapid iteration | Personal automation, edge deployment | Silent failure modes; provider fragility; runtime context instability |
| **Hermes Agent** | TUI/voice investment, CodeAct research workflows | CLI-centric developers, researchers | Windows as second-class; merge capacity bottleneck; context loss |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity >40 items/day)
| Project | Character | Risk |
|:---|:---|:---|
| **OpenClaw** | Shipping hotfixes, expanding platforms | Backlog accumulation; quality control strain |
| **ZeroClaw** | Provider/channel explosion | Stability collapse; "universal" vision exceeds engineering rigor |
| **IronClaw** | Architectural migration at scale | Transitional feature gaps; Reborn cutover complexity |

### Tier 2: Active Stabilization (Velocity 20-50 items/day, closure-focused)
| Project | Character | Risk |
|:---|:---|:---|
| **Hermes Agent** | Feature integration over release | User frustration from "latest version" regressions |
| **PicoClaw** | Production hardening | Auth/config complexity becoming systemic |
| **CoPaw** | Post-release triage | Context management crisis; enterprise readiness gaps |
| **NanoBot** | Runtime context system refactor | Cascading edge cases from prompt architecture change |

### Tier 3: Controlled Growth (Velocity 10-30 items/day, high closure rate)
| Project | Character | Risk |
|:---|:---|:---|
| **Moltis** | Production maturity, federation architecture | Niche adoption; expansion vs. identity tension |
| **NanoClaw** | v2 migration UX refinement | Contributor fatigue from unmerged PRs |
| **LobsterAI** | Enterprise sprint execution | External community isolation; security patch latency |

### Tier 4: Maintenance/Quiet (Minimal activity)
| Project | Character | Risk |
|:---|:---|:---|
| **NullClaw** | Operational focus, cron subsystem | Contributor attrition; ecosystem irrelevance |
| **TinyClaw, ZeptoClaw** | No activity | Project death |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Implication |
|:---|:---|:---|
| **"Reasoning model" compatibility is a breaking-change treadmill** | DeepSeek `reasoning_content` failures in NanoBot, PicoClaw, CoPaw, Moltis | Design provider abstractions with bidirectional metadata passthrough as first-class; expect monthly API drift |
| **Enterprise IM is the new battleground** | POPO, DingTalk, Feishu, WeChat multi-instance, LINE—all actively developed | Channel strategy must prioritize Asia-Pacific enterprise protocols; Slack/Discord insufficient for global reach |
| **Sandboxing moving from "feature" to "requirement"** | Moltis native isolation, OpenClaw exec approvals/TOTP, IronClaw WASM, Sysbox deferral | Security model must be designed in, not bolted on; regulatory pressure incoming |
| **"Personal mode" privacy boundaries are underengineered** | ZeroClaw WhatsApp self-message leak (#6413), NanoBot runtime context leaks | Agent identity boundaries need formal model—when does the agent "see" itself? |
| **Configuration complexity is the #1 adoption blocker** | NanoClaw 8 Slack UX PRs, PicoClaw "config is a maze," ZeroClaw autonomy levels broken | Sensible defaults, validation at onboarding, and progressive disclosure are competitive advantages |
| **Context management is the unsolved architecture problem** | CoPaw #4059 "must start new chat," OpenClaw compaction PRs, IronClaw Reborn session services | RAG hybrids, intelligent summarization, or archival systems will differentiate; pure token-window approaches failing |
| **Federation/interoperability emerging from niche to mainstream** | Moltis #973 identity protocols, NanoBot #3639 (closed), IronClaw multi-tenant design | Ed25519-based, CA-less trust models; agent-to-agent standards will consolidate around 2-3 implementations |
| **"Universal connector" vs. "Opinionated platform" divergence** | OpenClaw/ZeroClaw breadth vs. Moltis/IronClaw depth | Developers must choose: maintain flexibility (integration tax) or commit to stack (migration risk) |

### Strategic Recommendation
The ecosystem is **3-6 months from a consolidation event**. Projects with unresolved gateway reliability (OpenClaw #73655, ZeroClaw S1 cluster), merge bottlenecks (OpenClaw 358 open PRs, Hermes 43 open), or architectural migration risk (IronClaw Reborn) are vulnerable to user churn toward more stable alternatives. **Moltis** and **LobsterAI** demonstrate that controlled velocity with high closure rates builds production trust; **OpenClaw** must address its backlog ratio to maintain ecosystem leadership.

---

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-07

## 1. Today's Overview

NanoBot showed **very high development velocity** with 37 PRs and 16 issues updated in the last 24 hours, indicating an active maintenance period following the recent v0.1.5.post3 release. The project is experiencing **significant stabilization work** around runtime context handling, with multiple PRs from contributor T3chC0wb0y addressing prompt scaffolding leaks into persisted chat history. A notable security fix (removing unsafe `exec()` in server.py) and multiple channel reliability improvements (Weixin, Matrix, WhatsApp) suggest the maintainers are prioritizing production robustness. However, **zero new releases** and several recurring DeepSeek API integration issues indicate lingering model-provider compatibility challenges that may be blocking a clean v0.1.6 release.

---

## 2. Releases

**No new releases** (v0.1.5.post3 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (17 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3669](https://github.com/HKUDS/nanobot/pull/3669) / [#3668](https://github.com/HKUDS/nanobot/pull/3668) | T3chC0wb0y | **Runtime context ephemeral fix** for `nightly` — prevents `[Runtime Context ...]` scaffolding from persisting into chat history | Critical stability fix; iterative refinement visible (two closed attempts before [#3671](https://github.com/HKUDS/nanobot/pull/3671) remained open) |
| [#3666](https://github.com/HKUDS/nanobot/pull/3666) | T3chC0wb0y | CLI runtime context leak fix — moves runtime metadata to system prompt, preserves pure user messages | Fixes [#2132](https://github.com/HKUDS/nanobot/issues/2132); closes 2-month-old bug |
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) | Jefsky | Dream restore cursor rollback — `.dream_cursor` now tracked in GitStore | Fixes [#3657](https://github.com/HKUDS/nanobot/issues/3657); memory system integrity |
| [#3659](https://github.com/HKUDS/nanobot/pull/3659) | chengyongru | Weixin channel: raise exceptions on send failure instead of silent loss | Prevents message loss, enables retry logic |
| [#3658](https://github.com/HKUDS/nanobot/pull/3658) | chengyongru | WebUI LAN bootstrap security — requires `token_issue_secret` for `0.0.0.0` hosts | Follow-up to [#3656](https://github.com/HKUDS/nanobot/pull/3656); closes auth bypass |
| [#3656](https://github.com/HKUDS/nanobot/pull/3656) | chengyongru | Allow LAN access when host is `0.0.0.0` | UX improvement for local network deployments |
| [#3646](https://github.com/HKUDS/nanobot/pull/3646) | chengyongru | Transcription retry with exponential backoff for Whisper transient failures | Cherry-pick to `main`; reliability |
| [#3661](https://github.com/HKUDS/nanobot/pull/3661) | Re-bin | WebUI polish: sidebar styling, slash commands, async session title generation | User-facing UX upgrade |

**Key advancement:** The runtime context system underwent a **coordinated multi-PR refactor** to separate ephemeral prompt scaffolding from persistent message history — a core architectural improvement for long-running agent sessions.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#3618](https://github.com/HKUDS/nanobot/issues/3618) — **Region-locked model 403 error** | **11 comments**, closed | Most discussed issue. User `bigsinger` documented a **10-day outage** (Apr 25–May 4) due to GLM model regional availability. Self-resolved via reinstall. Reveals: (1) poor error recovery/retry logic for provider failures, (2) need for graceful model fallback, (3) users lack visibility into *why* agents go silent. |
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) — **Identity + Onboarding protocols for cross-agent trust** | 3 comments, closed | Ambitious proposal for Ed25519-based agent identity at "Layer 2." Closed without merge suggests maintainers deem this out-of-scope for ~4K-line codebase, or requires broader ecosystem coordination. Signals community interest in **multi-agent federation**. |
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) / [#3584](https://github.com/HKUDS/nanobot/issues/3584) — **DeepSeek `reasoning_content` API errors** | 2 + 1 comments | Recurring pattern: DeepSeek's reasoning models require bidirectional `reasoning_content` passthrough, which NanoBot's agent loop mishandles after a few turns. [#3584](https://github.com/HKUDS/nanobot/issues/3584) claimed fix but [#3665](https://github.com/HKUDS/nanobot/issues/3665) shows regression. |

**Underlying needs:** Users want **transparent failure modes** (not silent drops), **provider-agnostic resilience**, and **interoperability standards** for agent networks.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#3638](https://github.com/HKUDS/nanobot/issues/3638) — 100% CPU leak via MCP `streamable_http_client` cancel-scope mismatch | **Closed** | Likely in merge batch | Orphaned `asyncio` tasks on `AgentLoop.close_mcp()`; affects embedding apps like `nanobot-soulboard` |
| 🔴 **Critical** | [#3649](https://github.com/HKUDS/nanobot/pull/3649) — **Unsafe `exec()` in `server.py`** | **OPEN** | Self-contained | HIGH severity (V-003); arbitrary code execution via API. **Needs urgent review.** |
| 🟡 **High** | [#3665](https://github.com/HKUDS/nanobot/issues/3665) — DeepSeek `reasoning_content` must be passed back | **OPEN** | None yet | Recurring; breaks agent loop after few queries |
| 🟡 **High** | [#3670](https://github.com/HKUDS/nanobot/issues/3670) — Runtime context leaks into persisted history | **OPEN** | [#3671](https://github.com/HKUDS/nanobot/pull/3671) | Nightly regression; fix in progress |
| 🟡 **High** | [#3605](https://github.com/HKUDS/nanobot/issues/3605) — Safety guard abort silently drops turn | **Closed** | [#3666](https://github.com/HKUDS/nanobot/pull/3666) area | No user notification when `exec` blocked |
| 🟢 **Medium** | [#3637](https://github.com/HKUDS/nanobot/issues/3637) — Groq transcription config non-transparent | **OPEN** | [#3663](https://github.com/HKUDS/nanobot/pull/3663) | URL normalization issue |
| 🟢 **Medium** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) — GPT "Duplicate item found with id" | **OPEN** | None | Codex/gpt-5.5 specific; blocks resume |
| 🟢 **Medium** | [#3625](https://github.com/HKUDS/nanobot/issues/3625) — WhatsApp token-per-message spam | **Closed** | Unknown | `supports_progress_deltas` handling |

**Regressions:** Runtime context handling shows **systematic instability** — three related issues/PRs in 24h suggest the prompt architecture change in v0.1.5.post3 introduced cascading edge cases.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) — Disable Dream entirely | `enabled` flag in Dream config | **High** — trivial config change, clear user demand |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) — Dream update scope controls | Granular disable/restrict | **High** — PR already open, aligned with #3652 |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) — Configure bot name and icon | `botName`/`botIcon` in config | **Medium** — cosmetic, low risk |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) / [#3662](https://github.com/HKUDS/nanobot/pull/3662) — Local tokenizer for offline token estimation | Avoid `tiktoken` network load | **High** — PR open, offline use case critical for edge |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) — Display reasoning content during streaming | `show_reasoning` config | **Medium** — niche, TUI complexity |
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) — Cross-agent identity protocol | Ed25519-based Layer 2 | **Low** — architectural, out of scope for lightweight target |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) — `/clear` command | Reset session without canceling tasks | **Medium** — marked `[invalid]`, needs maintainer decision |

**Predicted v0.1.6 focus:** Dream configurability + local/offline robustness + DeepSeek reasoning fix.

---

## 7. User Feedback Summary

### Pain Points
- **Silent failures dominate user experience:** Model 403s, safety guard blocks, Weixin message drops all fail without user-visible errors. Users only discover problems via missing responses or manual log inspection.
- **Provider fragility:** DeepSeek integration particularly brittle; reasoning model support lags behind API changes.
- **Configuration opacity:** Transcription endpoints, Dream behavior, runtime context all require "tribal knowledge" to configure correctly.

### Use Cases
- **Personal productivity automation** (daily X posts per [#3597](https://github.com/HKUDS/nanobot/issues/3597))
- **Edge/mobile deployment** (emphasized in [#3639](https://github.com/HKUDS/nanobot/issues/3639))
- **Multi-channel presence** (Telegram, WhatsApp, Weixin, Matrix all actively maintained)

### Satisfaction Signals
- Active community proposing architectural enhancements (identity protocols)
- Users building extensions (`nanobot-soulboard`)
- Rapid maintainer response to critical bugs (same-day fixes for #3657, #3659)

### Dissatisfaction Signals
- 10-day outages with no automatic recovery (#3618)
- Need to self-restore from backups
- Repeated regressions in core prompt handling

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) — Preserve user message/tool calls on `/stop` | **~6 weeks** open | Data loss on interruption | Review/merge; affects all channel users |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) — Decouple heartbeat reasoning from notification | **~9 weeks** open | UX noise vs. silent operation | Config design decision; community wants choice |
| [#3514](https://github.com/HKUDS/nanobot/pull/3514) — WhatsApp JID normalization for group @mentions | **~2 weeks** open | Broken group mentions | Small fix, needs test verification |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) — `/clear` command | **~2 weeks** open, marked `[invalid]` | Session management gap | Maintainer decision on scope vs. `/new` |

**Maintainer attention priority:** [#3649](https://github.com/HKUDS/nanobot/pull/3649) (security) > [#2526](https://github.com/HKUDS/nanobot/pull/2526) (data loss) > [#3671](https://github.com/HKUDS/nanobot/pull/3671) (regression fix completion).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-07

## 1. Today's Overview

Hermes Agent shows **very high community velocity** with 50 issues and 50 PRs active in the last 24 hours, though merge throughput remains low (only 7 PRs closed/merged vs. 43 open). The project is in an **intensive development phase** with significant activity across all subsystems—agent core, TUI, gateway, plugins, and provider integrations—but appears to have a **bottleneck in code review and merge capacity**. No new releases were cut today, suggesting maintainers are prioritizing feature integration over stabilization. The volume of Windows-specific bugs and provider-edge-case issues indicates the user base is broadening beyond the original Linux/CLI-centric audience.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (7 total, 3 shown with significant impact)

| PR | Description | Impact |
|:---|:---|:---|
| [#20916](https://github.com/NousResearch/hermes-agent/pull/20916) | fix(tui): keep alt-screen exit clean and tighten exit summary | **Reliability**: Fixes race condition in TUI terminal state restoration, reducing corrupted terminal states on exit |
| [#20914](https://github.com/NousResearch/hermes-agent/issues/20914) *(issue closed, fix implied)* | TelegramFallbackTransport integration for `send_message_tool` | **Network resilience**: Enables Telegram message delivery in blocked networks (e.g., Russia) |

### Notable Open PRs Advancing Key Areas

| PR | Description | Stage |
|:---|:---|:---|
| [#20945](https://github.com/NousResearch/hermes-agent/pull/20945) | Enable `cache_control` for OpenRouter Qwen/DeepSeek | **Cost/performance**: Ports Cline optimization; ~30-50% prompt cost reduction for these providers |
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Add Hermes desktop app (Electron/Vite) | **Major product expansion**: Full GUI with chat, composer, voice, file browser; restructures `web/` → `apps/` monorepo |
| [#20923](https://github.com/NousResearch/hermes-agent/pull/20923) | Integrate CodeAct research workflows | **Agent capability**: Adds research-search recipes, SearXNG-aware routing, per-session dispatch |
| [#20941](https://github.com/NousResearch/hermes-agent/pull/20941) | fix(gateway): internal events bypass busy-input; system note defers to user | **UX critical**: Prevents agent from overriding explicit user stop/correction instructions |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Core Concern |
|:---|:---:|:---:|:---|
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) — Anthropic Claude subscription auth returns 'You're out of extra usage' | 30 | 17 | **Provider billing/auth reliability**: Subscription state desynchronization between Anthropic and Hermes; restart/re-login fails to reset |
| [#12614](https://github.com/NousResearch/hermes-agent/issues/12614) — Matrix bot no inbound events after #10860 merge | 17 | 0 | **Gateway regression**: Post-merge sync stall on fresh Matrix setups; blocks new Matrix users entirely |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) — Response truncated due to output length limit | 14 | 3 | **Output quality**: Streaming truncation breaks long-form content generation across all interfaces |

### Underlying Needs Analysis

- **#6475**: Users need *transparent, self-healing provider auth* with clear quota visibility—not opaque error propagation
- **#12614**: The Matrix gateway needs **integration test coverage for fresh-setup scenarios**; this is the second post-merge sync regression
- **#7237**: Demand for **configurable/output-length-aware response chunking** or automatic continuation on truncation

---

## 5. Bugs & Stability

### Critical (P1/P2) — Active or Fixed Today

| Issue/PR | Severity | Status | Description | Fix PR? |
|:---|:---:|:---:|:---|:---:|
| [#20941](https://github.com/NousResearch/hermes-agent/pull/20941) | **P1** | OPEN | Gateway ignores user interrupt; internal events override explicit stop commands | **Yes** — #20941 |
| [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | **P1** | OPEN | Interactive CLI fails to fallback on Codex 429 `usage_limit_reached`; cron jobs work | No |
| [#12614](https://github.com/NousResearch/hermes-agent/issues/12614) | **P2** | OPEN | Matrix gateway completely broken for new setups post-#10860 | No |
| [#20782](https://github.com/NousResearch/hermes-agent/issues/20782) | **P2** | OPEN | `terminal`/`write_file` tools fail on Windows 11 (exit 126, empty files) | No |
| [#20927](https://github.com/NousResearch/hermes-agent/issues/20927) | **P2** | OPEN | Windows: `write_file` path errors + session break causes tool hallucination | No |
| [#20807](https://github.com/NousResearch/hermes-agent/issues/20807) | **P2** | OPEN | `delegate_task` returns false completion with ACP child agents (no verifiable side effects) | No |
| [#20899](https://github.com/NousResearch/hermes-agent/issues/20899) | **P2** | OPEN | Telegram images visible to model but not tool-accessible (can't save/copy) | No |
| [#15462](https://github.com/NousResearch/hermes-agent/issues/15462) | **P2** | CLOSED | TUI voice mode Python crash on 2nd transcription (cTranslate2/OpenBLAS threading) | **Fixed** — unspecified PR |
| [#19944](https://github.com/NousResearch/hermes-agent/issues/19944) | **P2** | CLOSED | TUI transcript blanks after virtual history cache reuse | **Fixed** — unspecified PR |
| [#20842](https://github.com/NousResearch/hermes-agent/issues/20842) | **P3** | CLOSED | Kanban migration fails: `no such column spawn_failures` | **Fixed** — unspecified PR |

### Stability Assessment

**Windows platform debt is accumulating rapidly**: 3 distinct Windows-specific tool failures reported in 24 hours, suggesting insufficient CI coverage for win32. The ACP delegation and Matrix gateway issues indicate **distributed/multi-instance scenarios are undertested**.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) | Expose `model_switch` as agent-callable tool for autonomous routing | **High** | Complements CodeAct PR (#20923); architectural fit; 2 👍 |
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Hermes desktop app (Electron) | **High** | Large PR already open; product strategy signal |
| [#15602](https://github.com/NousResearch/hermes-agent/issues/15602) | Google Workspace multi-account support | **Medium** | Clear user pain (personal + work); 3 👍; OAuth scope complexity |
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | Mistral LLM provider support | **Medium** | User base larger than some existing providers; voice models already integrated |
| [#5627](https://github.com/NousResearch/hermes-agent/issues/5627) | OpenViking plugin API surface expansion (30% → full) | **Medium** | Memory system strategic priority; 3 👍 |
| [#19198](https://github.com/NousResearch/hermes-agent/issues/19198) | Capability-based web tool provider architecture | **Medium** | Refactor merged? (issue closed); enables SearXNG+Firecrawl combos |
| [#7640](https://github.com/NousResearch/hermes-agent/issues/7640) | CLI: delete pasted images before sending | **Low-Medium** | UX polish; blocked on TUI input architecture |
| [#12883](https://github.com/NousResearch/hermes-agent/issues/12883) | Memory importance-scoring mechanism | **Low** | Fundamental redesign; philosophical disagreement possible |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Provider auth/quotas opaque** | #6475 (30 comments), #20465 (Codex 429 mishandling) | 🔴 High |
| **Windows second-class citizen** | #20782, #20927 (tool failures), #18390 (Termux TUI glitches) | 🔴 High |
| **Context loss in long workflows** | #20849 (catastrophic code loss, truncation-overwrites), #7237 (truncation) | 🔴 High |
| **Gateway platform regressions** | #12614 (Matrix), #11860 (Discord attachments), #20899 (Telegram images) | 🟡 Medium |
| **TUI reliability** | #18390, #19944, #15462, #20787 | 🟡 Medium |

### Positive Signals

- **Voice/TTS investment appreciated**: Multiple TUI voice PRs in flight (#20787, #20933 MiniMax update)
- **Plugin extensibility valued**: Kanban feature requests (#20875 assignee dropdown), Slack extension hooks (#20936)
- **Enterprise/self-hosting interest**: Multi-account Google Workspace (#15602), IMAP username flexibility (#12232), control-plane canary (#20944)

### Satisfaction/Dissatisfaction Ratio

**Trending negative on stability**, positive on ambition. Users praise feature velocity but express frustration that "latest version" often introduces regressions (#12614: "After updating to the latest version..."). The lack of releases may reflect maintainers' awareness that main branch isn't stabilization-ready.

---

## 8. Backlog Watch

### Issues Needing Maintainer Triage (High Engagement, No Recent Response)

| Issue | Age | Comments | Risk |
|:---|:---:|:---:|:---|
| [#5151](https://github.com/NousResearch/hermes-agent/issues/5151) — Streaming retry status messages accumulate | ~32 days | 3 comments, **8 👍** | UX degradation; retry logic spam |
| [#5627](https://github.com/NousResearch/hermes-agent/issues/5627) — OpenViking underutilized | ~31 days | 1 comment, **3 👍** | Strategic memory roadmap gap |
| [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) — MiniMax connection drops | ~28 days | 4 comments | Provider reliability; competitor comparison (OpenClaw worked) |
| [#4184](https://github.com/NousResearch/hermes-agent/issues/4184) — `hermes mcp add` falls through to REPL | ~37 days | 2 comments, **2 👍** | CLI subparser architecture debt |

### PRs At Risk of Stale/Conflict

| PR | Open Since | Risk |
|:---|:---:|:---|
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) Desktop app | 2 days | Large structural change; needs rapid review or will conflict with `web/` → `apps/` migration |
| [#20930](https://github.com/NousResearch/hermes-agent/pull/20930) | 1 day | Fork sync with extensive customizations; high conflict surface |

---

## Project Health Indicators

| Metric | Value | Assessment |
|:---|:---|:---|
| Issue/PR velocity | 100 items/24h | 🟢 Very active |
| Merge rate | 7/50 PRs = 14% | 🔴 Bottleneck |
| Release cadence | 0 today; none recent | 🟡 Stabilization pause |
| Platform coverage gaps | Windows, Matrix fresh-setup | 🔴 Expanding debt |
| Community engagement | 17 👍 on top issue | 🟢 Strong user investment |

**Verdict**: Hermes Agent is experiencing **growth pains**—feature ambition exceeds merge/review capacity. The desktop app and CodeAct integrations signal major product evolution, but Windows stability and gateway regression patterns require immediate quality investment to prevent user churn.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-07

## 1. Today's Overview

PicoClaw shows **high development velocity** with 83 total updates in the last 24 hours (21 issues, 62 PRs), indicating an active, maturing open-source AI agent framework. The project is currently at **v0.2.8-nightly** with a healthy merge rate (~32% of PRs closed/merged). However, the community is grappling with **provider authentication fragility**, **session data integrity issues**, and **multi-agent architecture confusion**—suggesting the framework is scaling into more complex deployment scenarios faster than some subsystems can support. The Go-based codebase continues to expand channel integrations and MCP (Model Context Protocol) support, positioning PicoClaw as a universal AI agent gateway.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.8-nightly.20260506.eb4e1875](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Nightly | Automated build from `main`; **unstable, use with caution**. No explicit changelog; compare [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) for full diff. |

> **Migration Note:** No breaking changes documented for nightly. Production users should pin to v0.2.8 stable until nightly stabilizes.

---

## 3. Project Progress

### Merged/Closed PRs (20 total; key highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) `feat(providers): add openai-compatible embeddings support` | badgerbees | **Embeddings infrastructure** — enables vLLM-style endpoints, local vector workloads |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) `ci(release): support releasing from existing tag` | imguoguo | **Release reliability** — decouples tag creation from release timing |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) `feat: enhance Weixin channel support` | dsus4wang | **Enterprise channel** — multi-instance WeChat, improved stability |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) `fix(provider): handle split SSE stream chunk parsing` | imalasong | **Streaming reliability** — fixes content loss at chunk boundaries |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) `fix(provider): anthropic_messages sends system as content blocks with cache_control` | whtiehack | **Cost optimization** — enables Anthropic prompt caching, reduces API spend |
| [#2345](https://github.com/sipeed/picoclaw/pull/2345) `docs: add Engram MCP memory server integration guide` | manaporkun | **Memory ecosystem** — persistent memory for Pi Zero 2 W deployments |

**Themes:** Provider robustness (3 PRs), release/infrastructure (2), channel expansion (1), documentation (1).

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Underlying Need |
|------|------|-----------|---------------|
| 🔥 | [#629](https://github.com/sipeed/picoclaw/issues/629) `[BUG] Didn't retry if meet LLM call failed` | 12 comments | **Production resilience** — long-running tasks die on transient HTTP 500s; users need circuit-breaker/retry logic |
| 🔥 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) `[BUG] exec工具的guardCommand方法问题` | 7 comments, 👍1 | **Security UX tension** — `restrict_to_workspace` over-blocks legitimate commands (curl wttr.in); regex path detection is too naive |
| 🔥 | [#293](https://github.com/sipeed/picoclaw/issues/293) `Feature: Autonomous Browser Operations` | 7 comments, 👍8 | **Web agent capability** — highest-voted open issue; users want Puppeteer/Playwright integration for true autonomous agents |
| 4 | [#2548](https://github.com/sipeed/picoclaw/issues/2548) `[Error] Multiple authentication credentials received` | 6 comments | **Config complexity** — credential precedence rules confuse users migrating between providers |
| 5 | [#2367](https://github.com/sipeed/picoclaw/issues/2367) `[BUG] The title of the last screen in the app remains in Chinese` | 6 comments | **i18n completeness** — Android app has hardcoded Chinese strings |

**Analysis:** The top issues reveal a project transitioning from "works in demo" to "runs in production" — reliability, security precision, and web-native capabilities are the dominant unmet needs.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|----------|-------|--------|---------|---------|
| 🔴 **Critical** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) `DingTalk SDK panic导致gateway异常停止` | OPEN | ❌ No | **Crash loop** — `dingtalk-stream-sdk-go` race condition on ping timeout; 6 panics in logs. Gateway dies entirely. |
| 🔴 **Critical** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) `PicoClaw authentication fails with valid API keys (401)` | OPEN | ❌ No | **Cross-provider auth regression** — Groq, OpenRouter, Nvidia all fail; suspected header/key forwarding bug in nightly+stable. |
| 🟡 **High** | [#2780](https://github.com/sipeed/picoclaw/issues/2780) `Reload config broke voice recognition` | OPEN | ❌ No | **Runtime config fragility** — `groq-asr` stops working after `SIGHUP`/config reload; state management issue. |
| 🟡 **High** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) `Deepseek v4 thinking model问题` | OPEN | ❌ No | **Provider compatibility** — missing `reasoning_content` round-trip causes 400 errors; blocks reasoning model use. |
| 🟡 **High** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) `Session messages lack individual timestamps` | OPEN | ✅ **[#2788](https://github.com/sipeed/picoclaw/pull/2788)** | Data integrity — frontend shows wrong message times; PR ready for review. |
| 🟢 **Medium** | [#2785](https://github.com/sipeed/picoclaw/issues/2785) `separate_messages make feishu only show first tool call` | OPEN | ❌ No | UX — Feishu notification truncation with `separate_messages` enabled. |
| 🟢 **Medium** | [#2784](https://github.com/sipeed/picoclaw/issues/2784) `README Baidu Search Free Tier update` | OPEN | ❌ No | Documentation — 1000/day → 50/day; user cost surprise risk. |

> **Note:** [#2786](https://github.com/sipeed/picoclaw/issues/2786) (Chinese duplicate of #2787) was **closed**; #2787 remains open with PR #2788 addressing it.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signal Strength | Prediction |
|---------|----------|-----------------|------------|
| **Autonomous Browser Operations** | [#293](https://github.com/sipeed/picoclaw/issues/293) | ⭐⭐⭐⭐⭐ (8👍, roadmap tag) | **v0.3.0 candidate** — likely Playwright/CDP integration; blocked by architecture decision (two paths considered) |
| **MCP Streamable HTTP transport** | [#2782](https://github.com/sipeed/picoclaw/issues/2782) | ⭐⭐⭐⭐⭐ (new, protocol-critical) | **v0.2.9 or nightly** — blocks modern MCP servers; community will likely PR this |
| **MCP Web UI management** | [#2770](https://github.com/sipeed/picoclaw/pull/2770) | ⭐⭐⭐⭐⭐ (PR open) | **v0.2.8+ or v0.2.9** — removes raw JSON editing; server removal bug fix included |
| **Per-model extra HTTP headers** | [#2170](https://github.com/sipeed/picoclaw/pull/2170) | ⭐⭐⭐⭐ (stale but important) | **Needs maintainer review** — enterprise auth (Azure AD, custom gateways) requires this |
| **OpenCode provider support** | [#2671](https://github.com/sipeed/picoclaw/issues/2671) | ⭐⭐⭐ | Low priority unless Chinese enterprise demand grows |
| **Token consumption dashboard** | [#2217](https://github.com/sipeed/picoclaw/issues/2217) | ⭐⭐⭐ (closed, unfulfilled) | May resurface; cost visibility is SaaS-table-stakes |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **"It hangs silently"** | #629 (no retry on LLM failure), #2621 (session lost after timeout) | 🔴 Production-blocking |
| **"Config is a maze"** | #2548 (multiple creds), #2368 (Android model "not configured"), #2769 (401 despite valid keys) | 🔴 Onboarding friction |
| **"Security blocks legitimate work"** | #1042 (curl blocked by path guard) | 🟡 Power-user frustration |
| **"History disappears"** | #2310 (truncated to 1-2 messages), #2787 (wrong timestamps) | 🟡 Trust erosion |
| **"Sub-agents lose identity"** | #2775 (all children inherit root `AGENT.md`) | 🟡 Multi-agent pattern broken |

### Positive Signals
- **Channel diversity demand**: Weixin (#2606 merged), LINE (#2413), DingTalk (#2704), Feishu (#2785), Telegram (#2199) — strong Asia-Pacific enterprise traction
- **Edge deployment**: Engram on Pi Zero 2 W (#2345) — IoT/embedded use case emerging
- **MCP enthusiasm**: Multiple MCP-related issues/PRs — users want modular tool ecosystem

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#293](https://github.com/sipeed/picoclaw/issues/293) Autonomous Browser | ~80 days | **Architecture stall** — two paths, no decision | Maintainer decision on Playwright vs. CDP |
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM retry logic | ~75 days | **Production reliability** | Retry policy design; could be good-first-issue |
| [#2170](https://github.com/sipeed/picoclaw/pull/2170) Per-model extra headers | ~38 days | **Enterprise adoption** | Code review; conflicts check |
| [#2306](https://github.com/sipeed/picoclaw/pull/2306) Honor thinking_level | ~35 days | **Reasoning model support** | Review; relates to #2706 |
| [#2311](https://github.com/sipeed/picoclaw/pull/2311) Preserve archived chat history | ~34 days | **Data integrity** | Review; fixes #2310 |
| [#2383](https://github.com/sipeed/picoclaw/pull/2383) Gateway CLI stop/status | ~30 days | **Operational tooling** | Review; infrastructure completeness |
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) Per-message timestamps | **0 days** | Fresh, ready | Merge candidate — small, well-scoped |

---

**Project Health Score: 🟡 B+**
- **Velocity**: Strong (83 daily updates)
- **Merge rate**: Moderate (32% PR closure)
- **Critical bugs**: 2 unaddressed crashes/auth failures
- **Community**: Active, Asia-Pacific heavy, enterprise-curious
- **Risk**: Config/auth complexity becoming systemic; needs dedicated "reliability sprint"

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-07

## 1. Today's Overview

NanoClaw showed **high community velocity** with 25 PRs and 4 issues updated in the last 24 hours, though maintainer merge throughput remains constrained (only 3 PRs merged/closed versus 22 left open). Activity is heavily concentrated around **v2 migration hardening** and **setup UX refinement** — particularly the Slack onboarding flow, which saw 8 distinct PRs from a single contributor. The project appears to be in a stabilization phase for its v2 architecture, with significant attention to developer experience and migration path reliability. No new releases were cut, suggesting maintainers are accumulating changes rather than shipping incrementally.

---

## 2. Releases

**No new releases.**

---

## 3. Project Progress

### Merged/Closed Today (3 PRs)

| PR | Description | Significance |
|:---|:---|:---|
| [#2302](https://github.com/qwibitai/nanoclaw/pull/2302) | **fix(whatsapp): allow self-chat messages through fromMe filter** | Fixes false-positive echo filtering that broke WhatsApp self-chat functionality |
| [#2309](https://github.com/qwibitai/nanoclaw/pull/2309) | **fix(skills): replace sqlite3 CLI with in-tree better-sqlite3 wrapper** | Eliminates external `sqlite3` CLI dependency, closing root cause of [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) |
| [#2308](https://github.com/qwibitai/nanoclaw/pull/2308) | **fix(prompts): tighten approval-card flow + drop ghost tool ref** | Resolves critical audit findings (P0 #2, P1 #3, P1 #4, P2 #7) — removes non-existent `list_recent_batches` tool reference and streamlines approval UX |

### Notable Open PRs Advancing

- **[#2306](https://github.com/qwibitai/nanoclaw/pull/2306)** — `yt-dlp-mcp` MCP server with `/add-ytdlp` installer (new media pipeline capability)
- **[#2301](https://github.com/qwibitai/nanoclaw/pull/2301)** — GitHub polling mode for NAT/firewall-restricted environments (expands deployment flexibility)
- **[#2211](https://github.com/qwibitai/nanoclaw/pull/2211)** — Live tool-call preview skill (visibility into agent reasoning)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|:---|:---|:---|
| [#2312](https://github.com/qwibitai/nanoclaw/issues/2312) — `groups/global/CLAUDE.md` unconditionally deleted on startup | 1 comment | **Repository hygiene vs. runtime behavior conflict.** Committed file destroyed by `migrateGroupsToClaudeLocal()` creates permanent dirty working tree — signals tension between migration automation and git-based deployment workflows. Underlying need: deterministic, stateless startup that doesn't fight version control. |
| [#2311](https://github.com/qwibitai/nanoclaw/issues/2311) — Deprecate `/claw` skill | 0 comments | **Architectural debt acknowledgment.** Complete v1→v2 incompatibility across DB schema, transport, container model, and secrets. Underlying need: clear migration path and sunset policy for v1 artifacts; contributor already provided deprecation PR template. |
| [#2305](https://github.com/qwibitai/nanoclaw/pull/2305) + [#2304](https://github.com/qwibitai/nanoclaw/pull/2304) — Slack setup UX (alipgoldberg) | 0 comments, high volume | **Non-technical user accessibility.** 8 PRs in 2 days restructure Slack onboarding from "internals leaking through" to plain language. Underlying need: NanoClaw's target audience includes non-developers; current setup assumes DevOps knowledge (ngrok, reverse proxies, webhooks). |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **High** | [#2312](https://github.com/qwibitai/nanoclaw/issues/2312) — `CLAUDE.md` deleted every startup | **OPEN** | ❌ No | Permanent dirty working tree; breaks git-based deployments and update workflows |
| **High** | [#2294](https://github.com/qwibitai/nanoclaw/issues/2294) — Matrix/Discord env keys not surfaced in v2 migration | **OPEN** | ❌ No | Silent channel death post-migration; renamed env keys (`MATRIX_*` → `NC_MATRIX_*` or similar) not documented or auto-ported |
| **Medium** | [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) — Misleading `registered_groups missing` error when `sqlite3` CLI absent | **CLOSED** | ✅ [#2309](https://github.com/qwibitai/nanoclaw/pull/2309) | Root cause fixed by eliminating `sqlite3` CLI dependency entirely |
| **Medium** | [#2310](https://github.com/qwibitai/nanoclaw/pull/2310) — `invalid_blocks` chat SDK bridge crash | **OPEN (PR)** | ✅ In review | Fallback to raw text when block parsing fails; defensive resilience |

**Stability Assessment:** v2 migration path remains the primary risk vector. Two open issues (#2312, #2294) represent "successfully runs but breaks subsequent operations" — insidious failure modes. The `sqlite3` CLI elimination (#2309) was a good systemic fix.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Feature | Likelihood in Next Release | Signal Strength |
|:---|:---|:---|:---|
| [#2306](https://github.com/qwibitai/nanoclaw/pull/2306) | `yt-dlp-mcp` MCP server | **High** | Follows established `/add-*` installer pattern; self-contained skill |
| [#2301](https://github.com/qwibitai/nanoclaw/pull/2301) | GitHub polling mode | **High** | Addresses explicit deployment blocker (NAT/firewall); security-conscious design |
| [#2211](https://github.com/qwibitai/nanoclaw/pull/2211) | Tool-visibility skill | **Medium** | "Live previews" are UX differentiator; needs review bandwidth |
| [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) | Local Whisper transcription | **Medium** | Long-running (12+ days); complex dual-backend documentation |
| [#2307](https://github.com/qwibitai/nanoclaw/pull/2307) | Debian trixie base image + dep upgrades | **Medium** | Infrastructure maintenance; risk of regression |

**Predicted v2.x focus:** Installer ecosystem expansion (`/add-ytdlp`, `/add-github`), setup UX democratization, and migration path hardening.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **v2 migration fragility** | [#2191](https://github.com/qwibitai/nanoclaw/issues/2191), [#2294](https://github.com/qwibitai/nanoclaw/issues/2294), [#2312](https://github.com/qwibitai/nanoclaw/issues/2312) | 🔴 Critical |
| **Setup requires DevOps knowledge** | 8 Slack UX PRs by [alipgoldberg](https://github.com/alipgoldberg) | 🟡 High |
| **Silent failures** | Matrix "silently warns and channel ends up dead" [#2294](https://github.com/qwibitai/nanoclaw/issues/2294) | 🟡 High |
| **Ghost/abandoned tool references** | `list_recent_batches` in prompts [#2308](https://github.com/qwibitai/nanoclaw/pull/2308) | 🟢 Medium |

### Use Cases Emerging

- **Non-technical personal assistant operators** — Slack setup PRs explicitly target users who don't understand ngrok/webhooks
- **Air-gapped/restricted network deployments** — GitHub polling mode (#2301) for NAT/firewall environments
- **Self-hosted voice transcription** — Local Whisper (#2009) for privacy-conscious or cost-sensitive users

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) — Local Whisper transcription | **12 days** | Stale; complex PR may need rebase | Maintainer review, or split into `openai-whisper` vs `whisper.cpp` phases |
| [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) — Trust only canonical channels remote | **12 days** | Security-critical; unreviewed | Security review; establishes supply-chain trust boundary |
| [#2187](https://github.com/qwibitai/nanoclaw/pull/2187) — Don't namespace CLI bare platform ids | **5 days** | Regression risk for CLI channel | Verification against CLI adapter test suite |
| **22 open PRs from today** | 0-1 days | Merge queue congestion | Triaging — many are small UX PRs that could batch-merge |

**Maintainer Attention Required:** The 12-day-old security PR ([#2004](https://github.com/qwibitai/nanoclaw/pull/2004)) and feature PR ([#2009](https://github.com/qwibitai/nanoclaw/pull/2009)) risk contributor fatigue. Consider dedicated security review pass and feature PR splitting strategy.

---

*Digest generated from qwibitai/nanoclaw GitHub activity on 2026-05-07.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-07

---

## 1. Today's Overview

NullClaw shows **minimal daily activity** with only one pull request receiving updates in the past 24 hours and zero issues or releases. The project appears to be in a **steady maintenance phase** rather than active feature development, with contributor energy concentrated on a single substantial cron subsystem enhancement. The lack of open issues suggests either effective issue triage or limited community engagement. Overall project health reads as **stable but quiet**—no urgent fires, but also no visible momentum in community growth.

---

## 2. Releases

*No new releases today. No releases exist in the tracked history.*

---

## 3. Project Progress

**No merged or closed PRs today.**

The sole active PR continues development work:

| PR | Status | Activity |
|:---|:-------|:---------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) feat(cron): cron subagent, run history, JSON output, security hardening | **Open** (updated 2026-05-06) | Last touched 1 day ago; no merge yet |

This PR represents **significant architectural work** on NullClaw's scheduling infrastructure but has been open for ~30 days without merge, suggesting either thorough review cycles or maintainer bandwidth constraints.

---

## 4. Community Hot Topics

**Single active discussion thread:**

- **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)** — `feat(cron): cron subagent, run history, JSON output, security hardening`
  - Author: @yanggf8 | Open since 2026-04-07 | 0 reactions | 0 comments visible
  - **Underlying need**: Production-grade job scheduling with observability (run history), automation (JSON output for CI/CD integration), and security boundaries (security hardening)

**Analysis**: The zero-comment count despite the PR's scope is notable. This suggests either: (a) review happening off-thread, (b) limited reviewer availability, or (c) the project has a small core contributor pool. The feature set targets **enterprise/operational deployments**—users needing reliable, auditable automation rather than experimental AI agent capabilities.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.**

| Severity | Count | Notes |
|:---------|:------|:------|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

*Zero open issues indicates clean triage, though may also reflect low report volume.*

---

## 6. Feature Requests & Roadmap Signals

**Inferred from active PR:**

| Feature | Source | Likelihood in Next Version |
|:--------|:-------|:---------------------------|
| Cron/scheduling subsystem | PR #783 | **High** — actively developed |
| JSON CLI output for automation | PR #783 | **High** — implemented |
| DB-backed job history/auditing | PR #783 | **High** — core to PR |
| Timezone-aware scheduling | PR #783 | **Medium** — included |
| Security hardening for job execution | PR #783 | **Medium** — included |

**Prediction**: The next release (when it comes) will likely center on operational reliability and DevOps integration rather than AI/LLM capabilities. NullClaw appears to be positioning as a **production agent orchestration platform**.

---

## 7. User Feedback Summary

**No direct user feedback captured today** (no issues, no PR comments).

**Inferred signals from PR #783 scope:**
- **Pain point addressed**: Need for reliable, observable background job execution in agent systems
- **Use case**: Scheduled agent operations, maintenance windows, report generation
- **Satisfaction proxy**: Contributor @yanggf8 investing substantial effort suggests organizational need; lack of community engagement may indicate niche or early-stage adoption

---

## 8. Backlog Watch

**Items requiring maintainer attention:**

| Item | Age | Risk | Action Needed |
|:-----|:----|:-----|:--------------|
| [PR #783](https://github.com/nullclaw/nullclaw/pull/783) | **30 days open** | Medium — feature divergence, contributor fatigue | Review, merge decision, or explicit feedback to author |

**Concerns**: Month-old substantial PRs without merge or clear rejection path risk contributor attrition. The undefined comment count and zero reactions may indicate GitHub API limitations in the source data, but if accurate, suggest minimal maintainer-community interaction.

---

*Digest generated from github.com/nullclaw/nullclaw data. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-07

## Today's Overview

IronClaw shows **intense development velocity** with 39 issues and 46 PRs updated in the last 24 hours, indicating a project in active architectural transition. The overwhelming focus is on **"Reborn"** — a major internal refactoring initiative restructuring the host-layer architecture around turn coordination, product adapters, and durable event streams. With 21 open PRs and 25 merged/closed, the team is landing substantial code while maintaining parallel design discussions. No new releases were cut, consistent with the Reborn migration being a multi-month effort before stability is achieved. The project health appears strong in engineering throughput but carries execution risk from the sheer scope of concurrent architectural changes.

---

## Releases

**No new releases** (0 today; latest releases none listed).

---

## Project Progress

### Merged/Closed PRs Today (25 total, key items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3310](https://github.com/nearai/ironclaw/pull/3310) | ilblackdragon | Docs: refresh feature parity against OpenClaw 2026.3.11-2026.4.30 | Identified 15+ capability gaps including OpenAI-compat endpoints, outbound proxy, diagnostics |
| [#3301](https://github.com/nearai/ironclaw/pull/3301) | think-in-universe | CI: restore Docker image workflow with staging tags | Restores pre-merge-queue Docker builds, critical for deployment pipeline |
| [#3197](https://github.com/nearai/ironclaw/pull/3197) | ilblackdragon | Fix: coerce engine action params per schema | Fixes `mission_create`/`mission_update` integer/string type coercion bug (#3132) |
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | nickpismenkov | Reborn memory substrate: native-isolated guardrails + module split | Major Reborn infrastructure: native-isolated WASM, vector stores, memory projections |
| [#3253](https://github.com/nearai/ironclaw/pull/3253) | PierreLeGuen | Multi-tenant Slack relay with per-user identity resolution | E2E-validated; unpaired users get OTP pairing flow |
| [#3312](https://github.com/nearai/ironclaw/pull/3312) | serrrfirat | Fix CI: separate nightly E2E alert from reusable workflow | Fixes main branch workflow startup failures since #3293 |
| [#3311](https://github.com/nearai/ironclaw/pull/3311) | serrrfirat | Add turn run wake notifier seam | Reborn turn coordination: durable wake hints after submit/resume |
| [#3305](https://github.com/nearai/ironclaw/pull/3305) | serrrfirat | Apply validated loop exits | Runner-side validation of driver `LoopExit` claims with recovery paths |
| [#3307](https://github.com/nearai/ironclaw/pull/3307) | serrrfirat | Serialize postgres migration fixup tests | Fixes CI race condition in schema history table creation |

**Key architectural advances:**
- **Reborn product surface**: Two major contract PRs opened (#3314 conversation binding, #3315 session thread transcript) with in-memory semantic implementations
- **Channel migration**: First ProductAdapter slice landed for Telegram (#3316) with v2 tracer-bullet against fake Reborn services
- **Runtime policy**: E2E coverage completed for #3243 substrate (#3306, +1,354 test LOC)

---

## Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Status | Topic | Link |
|:---|:---|:---|:---|:---|
| [#3013](https://github.com/nearai/ironclaw/issues/3013) Reborn cutover blocker: add kernel TurnCoordinator | 7 | OPEN | Core Reborn turn admission/enforcement architecture | [link](https://github.com/nearai/ironclaw/issues/3013) |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) [EPIC] Reborn product surface migration | 6 | OPEN | Master tracker preserving user behavior through Reborn transition | [link](https://github.com/nearai/ironclaw/issues/3031) |
| [#3198](https://github.com/nearai/ironclaw/issues/3198) Define TurnCoordinator public API shape | 5 | **CLOSED** | Adapter-safe API boundary now defined | [link](https://github.com/nearai/ironclaw/issues/3198) |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) Add reference AgentLoopHost facade | 5 | OPEN | Host-layer facade for agent loop lifecycle | [link](https://github.com/nearai/ironclaw/issues/3016) |
| [#3089](https://github.com/nearai/ironclaw/issues/3089) Add SessionThreadService | 4 | **CLOSED** | Thread/message persistence service defined | [link](https://github.com/nearai/ironclaw/issues/3089) |

### Underlying Needs Analysis

The comment density reveals **architectural consensus-building** as the dominant community activity. The Reborn effort (#2987 parent) requires defining ~15 interdependent contracts before implementation can proceed safely. The rapid closure of design issues (#3198, #3089, #3202, #3199, #3195, #3162) suggests maintainers are actively triaging and resolving blockers to unblock implementation PRs. The high coupling between issues (extensive "Parent/Related" linking) indicates this is a carefully orchestrated migration, not organic feature growth.

---

## Bugs & Stability

| Severity | Item | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **P1 — User-facing** | [#3317](https://github.com/nearai/ironclaw/issues/3317) Telegram setup fails locally | OPEN | None yet | `sergeiest` reports local IronClaw Telegram integration broken; screenshots show configuration error | [link](https://github.com/nearai/ironclaw/issues/3317) |
| **P1 — Data integrity** | [#3132](https://github.com/nearai/ironclaw/issues/3132) `cooldown_secs` type coercion | **CLOSED** | [#3197](https://github.com/nearai/ironclaw/pull/3197) | LLM passed `"120"` string vs `120` integer; fixed with schema-aware coercion |
| **P2 — CI reliability** | Main branch workflow startup failures | **CLOSED** | [#3312](https://github.com/nearai/ironclaw/pull/3312) | Reusable E2E workflow caused scheduled alert failures since #3293 |
| **P2 — CI flake** | PostgreSQL migration test race | **CLOSED** | [#3307](https://github.com/nearai/ironclaw/pull/3307) | Concurrent `CREATE TABLE IF NOT EXISTS` on shared `refinery_schema_history` |

**Stability assessment**: No production crashes or security vulnerabilities reported. The Telegram setup issue (#3317) is the only unhandled user-facing bug. CI stability improved with two fixes landed today.

---

## Feature Requests & Roadmap Signals

### Explicit Feature Requests (from opened issues today)

| Issue | Signal Strength | Predicted Timeline | Rationale |
|:---|:---|:---|:---|
| [#3282](https://github.com/nearai/ironclaw/issues/3282) WebChat v2 browser surface | **High** | 2-4 weeks | Directly depends on #3269, #3280, #3281 which have active PRs; default-off migration path |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) OpenAI-compatible API on Reborn | **High** | 4-6 weeks | Explicitly scopes `/v1/chat/completions` and `/v1/responses`; #3122 already advances Responses API tools |
| [#3285](https://github.com/nearai/ironclaw/issues/3285) External channel adapters on ProductAdapter | **High** | 1-2 weeks | #3316 tracer-bullet PR already open for Telegram; pattern will replicate |
| [#3286](https://github.com/nearai/ironclaw/issues/3286) Preserve agent command behavior through Reborn | **Medium** | 6-8 weeks | Complex coordination across loops, drivers, services; depends on #3107, #3236 |
| [#3266](https://github.com/nearai/ironclaw/issues/3266) Outbound egress and subscription policy | **Medium** | 3-4 weeks | Needed for WebChat v2 SSE/WebSocket streams; blocked on #3093 EventProjectionService |

### Roadmap Inference

The **Reborn cutover** appears targeted for mid-2026 based on:
- #3031 epic scope covers 10+ surface migrations
- #3013 TurnCoordinator has 8 direct blockers, 4 closed in last 5 days
- #3020 "compatibility gate" and #3022 "integration tests" are explicit readiness criteria not yet started

---

## User Feedback Summary

### Direct User Reports

| User | Issue | Pain Point | Satisfaction Signal |
|:---|:---|:---|:---|
| `sergeiest` | [#3317](https://github.com/nearai/ironclaw/issues/3317) | Telegram local setup fails | **Negative** — blocking local development |
| `sergeiest` | [#3132](https://github.com/nearai/ironclaw/issues/3132) | Mission creation fails on type mismatch | **Positive** — fixed same day, acknowledged in PR |

### Inferred from PR #3310 (Feature Parity Review)

**Gaps vs. OpenClaw** that likely represent user-visible limitations:
- Missing OpenAI-compatible `/v1/models` and `/v1/embeddings` endpoints
- Outbound proxy routing incomplete
- Diagnostics bundle export not implemented
- Multi-turn tool use in Responses API pending (#3122 in progress)

**Satisfaction trend**: Engineering responsiveness is strong (same-day fixes for reported bugs), but the Reborn migration's "preserve current behavior" goal (#3031) implies users may experience transitional instability or feature gaps.

---

## Backlog Watch

### Long-Running Items Needing Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2593](https://github.com/nearai/ironclaw/pull/2593) Dependabot: bump actions group (14 updates) | 20 days | **Medium** — CI security/compat | Merge or dismiss; blocking other dependency updates | [link](https://github.com/nearai/ironclaw/pull/2593) |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) Add Reborn transport adapter contract | 8 days | **High** — superseded? | Clarify status vs. #3269/#3285 ProductAdapter replacement; `zmanian` PR may need close/redirect | [link](https://github.com/nearai/ironclaw/pull/3099) |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) Externally-provided tools in Responses API | 7 days | **Medium** — feature completeness | Large PR (XL) with ongoing iteration; needs final review | [link](https://github.com/nearai/ironclaw/pull/3122) |
| [#3157](https://github.com/nearai/ironclaw/pull/3157) Fix inline gate await for Tier 0/1 Approval gates | 6 days | **High** — user-facing bug | CodeAct scripts failing on approval gates; fix ready, needs merge | [link](https://github.com/nearai/ironclaw/pull/3157) |

### Maintainer Attention Required

- **Decision on #3099 vs. #3269**: Two competing transport/adapter abstractions; community confusion possible
- **#3157 urgency**: Script execution pause behavior is broken for approval-gated tools; fix PR open 6 days
- **Reborn dependency chain**: #3193 (conversation binding) has 9 related issues/PRs but no comments — may need design review bottleneck cleared

---

*Digest generated from GitHub activity 2026-05-06 to 2026-05-07. All links reference `https://github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-07

## 1. Today's Overview

LobsterAI (NetEase Youdao's AI agent/personal assistant project) showed **exceptionally high development velocity** on 2026-05-06 with **29 merged/closed PRs and zero open PRs**, indicating a well-coordinated team executing a focused sprint. The activity centers on **platform hardening, IM ecosystem expansion, and architectural cleanup** rather than new feature development. A single security issue remains open regarding path traversal in the email SKILL. No new releases were cut today, suggesting the team is accumulating changes for a future release cycle. The project demonstrates mature engineering practices with detailed PR descriptions, cross-platform fixes (Windows-specific patches), and security-conscious logging improvements.

---

## 2. Releases

**No new releases** published today. The latest merged release PR (#1876, release/2026.04.27) was merged on 2026-05-06, indicating the team is between release cycles.

---

## 3. Project Progress

### Merged/Closed PRs (29 total, all closed)

| PR | Author | Areas | Summary |
|:---|:---|:---|:---|
| [#1898](https://github.com/netease-youdao/LobsterAI/pull/1898) | fisherdaddy | renderer, main, cowork | Task title display logic optimization |
| [#1897](https://github.com/netease-youdao/LobsterAI/pull/1897) | fisherdaddy | docs, main | Fix model response non-stopping issue |
| [#1896](https://github.com/netease-youdao/LobsterAI/pull/1896) | fisherdaddy | renderer, docs, main, openclaw, cowork, im | Fix IM task model change not taking effect |
| [#1895](https://github.com/netease-youdao/LobsterAI/pull/1895) | fisherdaddy | main | Fix markdown table intermittent render failure |
| [#1894](https://github.com/netease-youdao/LobsterAI/pull/1894) | btc69m979y-dotcom | main, openclaw | **Fix workspace migration ordering** — memory/ dir not migrated due to `syncMemoryFileOnWorkspaceChange` side effect creating empty directory before `copyDirIfNeeded` |
| [#1893](https://github.com/netease-youdao/LobsterAI/pull/1893) | btc69m979y-dotcom | renderer, openclaw, im | WeChat plugin config externalization — `dmPolicy`/`allowFrom` from `openclaw.json` instead of hardcoded values |
| [#1892](https://github.com/netease-youdao/LobsterAI/pull/1892) | fisherdaddy | main, openclaw | Gateway log rotation (daily, 3-day retention) |
| [#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) | btc69m979y-dotcom | renderer, main, openclaw | **Major: Decouple main agent workspace from working directory** — agent state now persists at `{stateDir}/workspace-main/` regardless of working directory changes |
| [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) | liuzhq1986 | main, skills | Fix Windows EPERM on skill directory deletion |
| [#1889](https://github.com/netease-youdao/LobsterAI/pull/1889) | fisherdaddy | docs | OpenClaw runtime patch for qwen vision catalog fallback |
| [#1887](https://github.com/netease-youdao/LobsterAI/pull/1887) | btc69m979y-dotcom | renderer, main, openclaw, im | Lint cleanup, disable `no-explicit-any` rule |
| [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) | liuzhq1986 | main, skills | Fix ClawHub install failures in packaged environments (writable cwd, HOME fallback) |
| [#1886](https://github.com/netease-youdao/LobsterAI/pull/1886) | fisherdaddy | main, openclaw | Fix `/models` command incomplete display from ChatGPT OAuth |
| [#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) | btc69m979y-dotcom | renderer, main, openclaw, cowork, im | **Refactor: Remove dead `yd_cowork` engine branching** — unified to `openclaw` single engine, -65 lines across 11 files |
| [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | btc69m979y-dotcom | renderer, main, openclaw, im | **POPO multi-bot instance support** — plugin upgrade to 2.1.1, new PopoInstanceSettings component |
| [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876) | liuzhq1986 | multi-area, Windows | **Release merge: 2026.04.27** — ChatGPT OAuth, Xiaomi mimo/Baidu Qianfan coding plan, gateway fixes |
| [#1858](https://github.com/netease-youdao/LobsterAI/pull/1858) | btc69m979y-dotcom | renderer, cowork | Fix EngineStartupOverlay z-index layering above Settings modal |
| [#1856](https://github.com/netease-youdao/LobsterAI/pull/1856) | btc69m979y-dotcom | renderer, cowork | Strip IM media metadata from user message display |
| [#1848](https://github.com/netease-youdao/LobsterAI/pull/1848) | btc69m979y-dotcom | openclaw | Fix DingTalk Windows `file://` URL format for image inbound |
| [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844) | btc69m979y-dotcom | main, openclaw | **Security: Log sanitization** — redact API keys, shorten secret exposure format |

**Key architectural advances:**
- **Workspace isolation** (#1890): Critical reliability improvement preventing agent state loss on working directory changes
- **Engine unification** (#1884): Technical debt elimination, simplifying maintenance
- **Multi-platform IM expansion**: POPO (#1883) and WeChat (#1893) configurability improvements

---

## 4. Community Hot Topics

**No high-engagement items** — all 29 PRs show `undefined` or zero comments, and the single open issue has zero comments/reactions. This indicates:
- **Internal/enterprise-driven development**: Core contributors (fisherdaddy, btc69m979y-dotcom, liuzhq1986) appear to be NetEase employees with established coordination channels outside GitHub
- **Limited external community participation**: No external contributors visible in today's activity
- **Process maturity**: PRs are self-contained with detailed descriptions, reducing need for discussion

The most **substantively significant** PR by scope: [#1883 POPO multi-bot instance support](https://github.com/netease-youdao/LobsterAI/pull/1883) — enterprise IM integration expansion signals Youdao's push into workplace AI assistant market.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical (Security)** | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | **Path traversal in email SKILL** — `downloadAttachments` in `imap.js` unsanitized filename concatenation allows arbitrary file write | **OPEN — no fix PR** |
| 🟡 High | [#1894](https://github.com/netease-youdao/LobsterAI/pull/1894) | Workspace migration failure — agent memory loss risk on working directory change | **Fixed** |
| 🟡 High | [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) | Windows EPERM on skill deletion — packaged app permission failure | **Fixed** |
| 🟡 High | [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) | ClawHub install ENOENT in packaged environments — skill marketplace broken for end users | **Fixed** |
| 🟢 Medium | [#1897](https://github.com/netease-youdao/LobsterAI/pull/1897) | Model response non-stopping — UX degradation | **Fixed** |
| 🟢 Medium | [#1896](https://github.com/netease-youdao/LobsterAI/pull/1896) | IM task model change ignored — configuration not respected | **Fixed** |
| 🟢 Medium | [#1895](https://github.com/netease-youdao/LobsterAI/pull/1895) | Markdown table render intermittency | **Fixed** |
| 🟢 Medium | [#1886](https://github.com/netease-youdao/LobsterAI/pull/1886) | `/models` command truncated with ChatGPT OAuth | **Fixed** |
| 🟢 Low | [#1848](https://github.com/netease-youdao/LobsterAI/pull/1848) | DingTalk Windows image path format | **Fixed** |

**Security concern**: The open path traversal vulnerability ([#1885](https://github.com/netease-youdao/LobsterAI/issues/1885)) in `imap-smtp-email/scripts/imap.js` is exploitable via malicious email attachment filenames. No patch PR is linked despite being reported 2026-05-06.

---

## 6. Feature Requests & Roadmap Signals

**No explicit user feature requests** in today's data. Inferred roadmap signals from merged work:

| Signal | Evidence | Likely Priority |
|:---|:---|:---|
| **Enterprise IM ecosystem expansion** | POPO multi-instance (#1883), WeChat config externalization (#1893), DingTalk fixes (#1848) | High — B2B/enterprise focus |
| **Windows desktop reliability** | 3 Windows-specific fixes (#1891, #1888, #1848) plus platform tag on release | High — primary deployment target |
| **Observability/ops maturity** | Log rotation (#1892), log sanitization (#1844) | Medium — production readiness |
| **Modular SKILL marketplace** | ClawHub fixes (#1888), skill import robustness | Medium — ecosystem play |
| **Multi-model provider support** | ChatGPT OAuth (#1876), qwen vision (#1889), Xiaomi/Baidu Qianfan (#1876) | High — vendor diversification |

**Predicted next version features**: Enhanced enterprise SSO (beyond ChatGPT OAuth), more IM platform connectors (Feishu/Lark likely), SKILL sandboxing for security.

---

## 7. User Feedback Summary

**No direct user feedback** visible in GitHub issues/PRs today. Inferred pain points from fix patterns:

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Windows deployment fragility** | EPERM, path format, packaged environment failures | High — blocking for Windows users |
| **Agent state loss on configuration change** | Workspace decoupling (#1890), migration fix (#1894) | High — data loss risk |
| **IM integration complexity** | Multiple fixes for message display, model switching, media handling | Medium — enterprise UX |
| **Security exposure in logs** | Key redaction (#1844) | Medium — compliance risk |
| **Skill marketplace reliability** | ClawHub install failures (#1888) | Medium — ecosystem adoption |

**Satisfaction indicators**: Rapid fix turnaround (same-day merge for most PRs), proactive architectural improvements.

**Dissatisfaction risk**: Security vulnerability response time — [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) remains unpatched.

---

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) Path traversal vulnerability | 1 day | **Active security exploit risk** in email SKILL; no linked fix PR | Security patch + CVE assessment |
| PRs #1858, #1856, #1848, #1844 | ~8-10 days | Older PRs merged today as batch — were they blocked on review? | Investigate if review bottleneck exists |

**No long-unanswered items** beyond the security issue. The 29 PRs all closed same-day suggests either:
- Batch merge of pre-approved changes, or
- Active sprint conclusion

**Maintainer attention required**: Immediate security patch for [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) before next release.

---

*Digest generated from GitHub activity 2026-05-06. All links: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-07

## 1. Today's Overview

Moltis demonstrated **high engineering velocity** with 11 PRs updated in 24 hours (9 merged/closed, 2 open) and 6 issues processed (4 closed, 2 open). The project shows strong maintainer responsiveness—all four bugs reported this cycle received same-day or next-day fixes. Two significant architectural threads are emerging: **sandbox infrastructure expansion** (remote/multi-backend support) and **interoperable agent identity protocols** for federated personal AI servers. No new releases were cut, suggesting the team is accumulating changes for a future version rather than continuous deployment.

---

## 2. Releases

**No new releases** (0).

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#971](https://github.com/moltis-org/moltis/pull/971) | penso | **fix(sandbox): serialize container startup** — Eliminates race condition in Docker/Podman sandbox initialization via per-container startup gate | Critical stability fix for concurrent tool execution |
| [#970](https://github.com/moltis-org/moltis/pull/970) | penso | **fix(auth): respect X-Forwarded-Proto for cookie Secure attribute** — Fixes login failures behind non-TLS proxies by conditional `Secure` cookie handling | Resolves reverse proxy deployment pain point |
| [#974](https://github.com/moltis-org/moltis/pull/974) | penso | **Auto-unseal vault from recovery key at startup** — Unattended vault initialization via env/file key, with proper sequencing before dependent services | Major operational improvement for production deployments |
| [#961](https://github.com/moltis-org/moltis/pull/961) | penso | **fix(providers): replay DeepSeek reasoning content** — Preserves and replays `reasoning_content` for DeepSeek V4 thinking-mode compatibility | Provider ecosystem robustness |
| [#962](https://github.com/moltis-org/moltis/pull/962) | penso | **Update local TTS provider docs** — Replaces archived Coqui/Piper links with maintained forks (OHF-Voice, idiap/coqui-ai-TTS) | Documentation accuracy |
| [#957](https://github.com/moltis-org/moltis/pull/957) | penso | **fix(matrix): add debug logging for OIDC registration and deduplicate redirect normalization** | Developer experience for Matrix federation |
| [#358](https://github.com/moltis-org/moltis/pull/358) | lijunle | **fix(providers): route Copilot enterprise tokens via proxy endpoint** | Enterprise GitHub Copilot support |
| [#975](https://github.com/moltis-org/moltis/pull/975) | dependabot[bot] | **chore(deps): bump openssl 0.10.78 → 0.10.79** | Security patch |
| [#967](https://github.com/moltis-org/moltis/pull/967) | dependabot[bot] | **chore(deps): bump gix 0.78.0 → 0.83.0** + 2 other cargo updates | Dependency maintenance |

**Key advancement**: Sandbox system gained both **correctness** (race fix) and **extensibility** (remote backend architecture in review). Vault operations achieved production-grade unattended startup.

---

## 4. Community Hot Topics

### Most Significant Discussions

| Item | Activity | Underlying Need |
|:---|:---|:---|
| [#973](https://github.com/moltis-org/moltis/issues/973) — "Proposal: Onboarding + Identity protocols for interoperable personal agent servers" | New issue, 0 comments, but **architecturally foundational** | Users want Moltis to evolve from *personal* tool to *networked* agent infrastructure—federated trust without central authority |
| [#942](https://github.com/moltis-org/moltis/pull/942) — "feat(sandbox): remote & multi-backend sandbox support (Vercel, Daytona, Firecracker)" | Open since Apr 30, active updates | Cloud-native deployment unblocker—Docker-in-Docker restrictions are a major friction point for managed platforms |
| [#976](https://github.com/moltis-org/moltis/pull/976) — "docs: add Agent Identity + Onboarding Protocols integration guide" | Same-day PR pairing with #973 | Community wants standards-based inter-agent communication documented and implemented |

**Analysis**: The [#973](https://github.com/moltis-org/moltis/issues/973)/[#976](https://github.com/moltis-org/moltis/pull/976) pairing reveals a strategic inflection point—Moltis is being pulled toward **agent-to-agent federation**. The proposal's Ed25519-based, CA-less trust model aligns with the project's "local-first, secure, sandboxed" ethos. Meanwhile, [#942](https://github.com/moltis-org/moltis/pull/942) addresses immediate deployment scalability constraints.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | [#964](https://github.com/moltis-org/moltis/issues/964) — Parallel tool execution causes Docker name sandbox collisions | **CLOSED** | [#971](https://github.com/moltis-org/moltis/pull/971) | Race condition in concurrent sandbox initialization; could break multi-tool workflows |
| **High** | [#968](https://github.com/moltis-org/moltis/issues/968) — Login failure | **CLOSED** | [#970](https://github.com/moltis-org/moltis/pull/970) | `Secure` cookie attribute unconditionally set, breaking HTTP-behind-proxy deployments |
| **Medium** | [#959](https://github.com/moltis-org/moltis/issues/959) — DeepSeek reasoning_content must be passed back to API | **CLOSED** | [#961](https://github.com/moltis-org/moltis/pull/961) | Provider compatibility regression for thinking-mode models |
| **Medium** | [#977](https://github.com/moltis-org/moltis/issues/977) — Browser sandbox fails when Moltis runs in Docker | **OPEN** | None yet | Docker-in-Docker / LXC container environment issue; `/data/browser` creation fails |

**Stability assessment**: Excellent closure rate (3/4 bugs fixed). The open [#977](https://github.com/moltis-org/moltis/issues/977) is a deployment-environment edge case that may relate to [#942](https://github.com/moltis-org/moltis/pull/942)'s remote sandbox work.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Agent Identity/Onboarding Protocols** | [#973](https://github.com/moltis-org/moltis/issues/973), [#976](https://github.com/moltis-org/moltis/pull/976) | **High** | Same-day issue→PR turnaround; aligns with project positioning; documentation already drafted |
| **Remote/multi-backend sandboxes** (Vercel, Daytona, Firecracker) | [#942](https://github.com/moltis-org/moltis/pull/942) | **High** | Critical path for cloud adoption; substantial prior work (Apr 30 start) |
| **Vault auto-unseal** | [#974](https://github.com/moltis-org/moltis/pull/974) | **Shipped** | Already merged |
| **Enterprise auth improvements** | [#358](https://github.com/moltis-org/moltis/pull/358), [#970](https://github.com/moltis-org/moltis/pull/970) | **Shipped** | Both merged |

**Prediction**: The next release will likely emphasize **federation readiness** (identity protocols) and **deployment flexibility** (remote sandboxes), transforming Moltis from single-node personal server toward **distributed agent infrastructure**.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Context | Emotional Signal |
|:---|:---|:---|
| Docker sandbox failures in containerized environments | Proxmox/LXC, cloud platforms | Frustration—"consistently fails" |
| Login broken behind reverse proxies | LAN/Docker port-forwarding setups | Confusion—worked before? |
| Outdated documentation pointing to dead projects | TTS setup | Annoyance—wasted time on archived repos |
| DeepSeek thinking-mode breakage | Power users of reasoning models | Expectation gap—"latest version" claimed |

### Positive Signals
- **Responsiveness**: All bugs received rapid maintainer attention (penso authored 6/9 merged PRs)
- **Operational maturity**: Auto-unseal shows understanding of production deployment needs
- **Standards thinking**: Community proposing architectural directions, not just bug reports

### Use Case Evolution
Users are pushing Moltis beyond "personal assistant" into **infrastructure layer**—running in cloud containers, connecting to enterprise auth, federating with other agents. The project must balance this expansion against its "local-first" core identity.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#942](https://github.com/moltis-org/moltis/pull/942) — Remote sandbox support | ~7 days open | **Medium** | Architecture review; large surface area (Vercel, Daytona, Firecracker backends) |
| [#977](https://github.com/moltis-org/moltis/issues/977) — Browser sandbox in Docker | 1 day open | **Low-Medium** | Triage against [#942](https://github.com/moltis-org/moltis/pull/942); may be resolved by remote backend or needs separate fix |

**No critical stale items detected.** The 2 open PRs are active and recent. No long-unanswered important issues are visible in this dataset. Maintainer capacity appears sufficient for current velocity.

---

*Digest generated from GitHub activity 2026-05-06 to 2026-05-07. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-07

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community velocity** with 41 issues and 26 PRs updated in the last 24 hours, indicating an active maintenance cycle around the v1.1.5.post2 patch release. The project is in a **stabilization phase** post-release, with 17 issues closed and 14 PRs merged/closed, suggesting maintainers are aggressively triaging the backlog. However, **24 open/active issues remain**, including several critical bugs around long-context handling, platform compatibility (Windows/Linux/macOS), and enterprise integration gaps. The release cadence is healthy with same-day version bumps, but the volume of "invalid" template issues (#4068-4070) suggests onboarding friction for new contributors.

---

## 2. Releases

### v1.1.5.post2 (2026-05-06)
| Aspect | Detail |
|--------|--------|
| **Type** | Patch release (post-release hotfix) |
| **Key Changes** | • **Docs**: Website documentation synchronized to v1.1.5 ([PR #4013](https://github.com/agentscope-ai/QwenPaw/pull/4013))<br>• **Feature**: Asynchronous LLM-based session title generation in chat ([PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829))<br>• **Fix**: Message processing return value fix (truncated in notes) |
| **Breaking Changes** | None identified |
| **Migration Notes** | Straightforward patch upgrade; no schema or config changes required |

> ⚠️ **Note**: Release notes reference `agentscope-ai/QwenPaw` repository, though project branding uses "CoPaw" — repository naming inconsistency persists.

---

## 3. Project Progress

### Merged/Closed PRs Today (14 total, selected highlights)

| PR | Author | Description | Impact |
|----|--------|-------------|--------|
| [#4071](https://github.com/agentscope-ai/QwenPaw/pull/4071) | @xieyxclack | Version bump to 1.1.5p2 | Release engineering |
| [#4053](https://github.com/agentscope-ai/QwenPaw/pull/4053) | @Leirunlin | **Skill install/uninstall CLI** (`qwenpaw skill install <url>`) | Addresses #2384 — major UX improvement for bot deployment |
| [#4014](https://github.com/agentscope-ai/QwenPaw/pull/4014) | @xieyxclack | Fix `/approve <request_id>` shorthand ignoring argument | Security/approval workflow fix |
| [#4016](https://github.com/agentscope-ai/QwenPaw/pull/4016) | @Leirunlin | Resilient loading for migrated/malformed skill entries | Stability for legacy skill pools |
| [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) | @hllqkb | WSL2 NAT timeout documentation | Community onboarding |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | @Jailtonfonseca | Brazilian Portuguese (pt-BR) i18n | Global expansion |
| [#4039](https://github.com/agentscope-ai/QwenPaw/pull/4039) | @Leirunlin | Telegram network retry logic | Channel reliability |
| [#4048](https://github.com/agentscope-ai/QwenPaw/pull/4048) | @qbc2016 | Remove redundant download code | Code health |
| [#4061](https://github.com/agentscope-ai/QwenPaw/pull/4061) | @qbc2016 | MCP SSE timeout fix (use execution timeout vs connect timeout) | Tool integration stability |

### Key Advances
- **CLI maturity**: Skill management finally gets programmatic interface (#4053 → fixes #2384)
- **Channel hardening**: Telegram retry logic and Feishu user name propagation (#4055) improve enterprise messaging reliability
- **Platform parity**: Windows diagnostics (#4032), WSL2 docs, and log rotation (#4076) address cross-platform gaps

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Status | Analysis |
|------|-------|----------|--------|----------|
| 1 | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) **Windows arbitrary file traversal vulnerability** | 17 | ✅ CLOSED | **Security-critical** — path traversal in Windows server deployment; rapid closure suggests hotfix deployed |
| 2 | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) **Input box severe lag** | 6 | ✅ CLOSED | Performance regression in console UI; likely fixed in post2 |
| 3 | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) **Long conversation breaks responses** | 4 | 🔴 OPEN | **Core UX blocker** — `/compact` ineffective, forces new chat; context window management failure |
| 4 | [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) **Adding model requires too many clicks** | 3 | 🔴 OPEN | **Onboarding friction** — 5-step model setup vs. competitors' 1-click flows |
| 5 | [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) **DeepSeek prefix cache ~95%, optimization needed** | 3 | 🔴 OPEN | **Cost optimization** — 5% cache miss = 4x cost penalty; enterprise $$$ impact |

### Underlying Needs Analysis
- **#3955 + #4036**: Security and UX simplicity are competing priorities — the project needs "secure defaults" that don't sacrifice usability
- **#4059 + #3891**: Context management is a **fundamental architecture tension** — users want infinite conversation history but API costs scale linearly; needs intelligent summarization or RAG hybrid
- **#4023**: Electron/main process communication or React rendering bottleneck in console

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Windows file traversal (security) | ✅ Closed — presumed fixed |
| 🔴 **Critical** | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) | Long-context response truncation | ❌ No PR yet |
| 🟡 **High** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT.md breaks network auto-reconnect | ✅ Closed |
| 🟡 **High** | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | DingTalk event loop race condition | ❌ No PR yet |
| 🟡 **High** | [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) | DeepSeek `reasoning_content` not round-tripped → HTTP 500 | ❌ No PR yet |
| 🟡 **High** | [#4066](https://github.com/agentscope-ai/QwenPaw/issues/4066) | Tool call parser false-positives in code blocks | ❌ No PR yet |
| 🟢 **Medium** | [#4049](https://github.com/agentscope-ai/QwenPaw/issues/4049) | llama.cpp server exit on QwenPaw-Flash-9B-Q4_K_M | ❌ No PR yet |
| 🟢 **Medium** | [#4072](https://github.com/agentscope-ai/QwenPaw/issues/4072) | QWen enterprise-grade API key not accepted | ❌ No PR yet |
| 🟢 **Medium** | [#4050](https://github.com/agentscope-ai/QwenPaw/issues/4050) | Feishu user name not recognized | 🔄 [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) WIP |

### Regressions
- **#4017**: HEARTBEAT.md (default-on feature) actively breaks resilience — feature flag inversion needed?
- **#4066**: Parser over-aggression suggests recent tool-use refactoring introduced breaking behavior for content formatting

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) One-shot cron (`--at` datetime) | ⭐⭐⭐ High | Simple DateTrigger extension; fits existing scheduler architecture |
| [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) Custom workspace storage path | ⭐⭐⭐ High | Common enterprise requirement; config-only change |
| [#4045](https://github.com/agentscope-ai/QwenPaw/issues/4045) Adaptive sync/async shell execution | ⭐⭐⭐ High | Low-risk UX improvement; heuristic-based |
| [#4078](https://github.com/agentscope-ai/QwenPaw/issues/4078) Interactive skill selector dropdown | ⭐⭐⭐ High | Follows #4036 model UX improvements; frontend-only |
| [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) Semantic skill routing | ⭐⭐ Medium | Requires embedding infrastructure; architectural investment |
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) DeepSeek cache optimization | ⭐⭐ Medium | Provider-specific; may require API-level cooperation |
| [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) UI font scaling + file hyperlinks | ⭐⭐ Medium | Accessibility win; scoped frontend work |

### Predicted v1.1.6 Themes
1. **Context lifecycle management** (compression, summarization, archival)
2. **Enterprise readiness** (custom paths, enterprise keys, regional endpoints)
3. **Developer experience** (CLI completeness, model onboarding flow)

---

## 7. User Feedback Summary

### Pain Points 😤
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Context breaks workflow** | #4059: "must start new chat" after long conversations | Critical |
| **Model setup is exhausting** | #4036: 5 clicks, 3 navigation contexts for one model | High |
| **Platform inconsistencies** | #4063 (Linux model discovery), #4015 (M5 Pro ARM), #4072 (enterprise keys) | High |
| **Cost surprises** | #3891: 5% cache miss = 20% cost increase | High |
| **Input responsiveness** | #4023: "severe lag" in input box | Medium (fixed?) |

### Positive Signals 😊
- **Skill ecosystem maturation**: CLI install (#4053) shows investment in scalable skill distribution
- **Internationalization**: pt-BR support indicates global user base
- **Security responsiveness**: #3955 closed rapidly (17 comments → resolution in 8 days)

### Use Case Patterns
- **Enterprise bot deployment**: DingTalk, Feishu, Telegram channels + skill pools + approval workflows
- **Local AI experimentation**: llama.cpp integration, Whisper, LM Studio — but ARM64/Rosetta friction (#4003/#4015)
- **Long-running autonomous agents**: cron scheduling, HEARTBEAT, workspace persistence

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention ⏰

| Issue | Age | Problem | Risk |
|-------|-----|---------|------|
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) DeepSeek cache optimization | ~10 days | No maintainer response; direct cost impact for enterprise users | User churn to competitors |
| [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) Semantic skill routing | ~29 days | Core architecture proposal for scalability; no triage label | Technical debt accumulation |
| [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) DingTalk race condition | ~1 day | Complex async bug; needs expert diagnosis | Channel reliability reputation |
| [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) DeepSeek reasoning_content 500 | ~7 days | HTTP 500 in production; clear reproduction steps | Provider compatibility gap |

### PRs Stalled in Review 🚧

| PR | Status | Blocker |
|----|--------|---------|
| [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) Whisper transcription for voice input | Under Review ~18 days | Large feature; needs audio pipeline review |
| [#3916](https://github.com/agentscope-ai/QwenPaw/pull/3916) Docker volume mount backup fix | Open ~9 days | Edge case deployment; needs infra maintainer |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) Windows system tray | Under Review | Win32-only; cross-platform strategy unclear |
| [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046) Tool Guard auto-deny by rule | Under Review | Security-critical; needs careful policy review |

---

## Health Assessment

| Metric | Score | Note |
|--------|-------|------|
| **Release velocity** | 🟢 Strong | Patch within 24h of issues |
| **Issue triage** | 🟡 Moderate | 3 "invalid" template issues same day suggests bot/template problem |
| **Security response** | 🟢 Strong | #3955 rapid closure |
| **Cross-platform** | 🟡 Fragile | Windows/Linux/macOS all have active regressions |
| **Enterprise readiness** | 🟡 Gaps | Custom paths, enterprise keys, regional endpoints missing |
| **Community growth** | 🟢 Healthy | First-time contributors active (#4076, #4005, #4009, #4032, #4041) |

**Overall**: CoPaw is in **active stabilization** with strong maintainer presence but accumulating technical debt in context management and platform abstraction layers. The v1.1.6 cycle should prioritize context lifecycle architecture and enterprise configuration flexibility to retain momentum.

---

*Digest generated from GitHub activity 2026-05-06 to 2026-05-07*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-07

## 1. Today's Overview

ZeroClaw shows **exceptionally high development velocity** with 50 issues and 50 PRs active in the last 24 hours, indicating a project in rapid expansion phase. The team is aggressively expanding the provider ecosystem (6 new model providers added in a single day) while simultaneously battling stability issues in core subsystems—particularly WhatsApp Web protocol compatibility, shell tool autonomy, and Matrix channel concurrency. No releases were cut today, with v0.7.5 release automation still pending and v0.8.0 integration work ongoing on a separate branch. The maintainers appear to be prioritizing breadth of integrations over immediate stability, which carries risk given the multiple S1-severity bugs in production paths.

---

## 2. Releases

**No new releases today.**

The v0.7.5 milestone remains open ([#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)), focused on release automation infrastructure. The larger v0.8.0 integration branch is accumulating breaking changes (typed provider config refactor in [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403)) but is explicitly **not targeting master yet**.

---

## 3. Project Progress

### Closed Today

| PR/Issue | Description | Link |
|----------|-------------|------|
| PR #6414 | **WhatsApp "is_from_me" leak fixed** — Stops agent from processing own outbound messages as prompts in personal mode | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) |
| Issue #6413 | WhatsApp self-message bug (closed as fixed by #6414) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) |
| Issue #6418 | Fallback provider credential inheritance (closed as duplicate) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) |
| PR #6369 | Agent tool button CSS height fix | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6369) |
| Issue #6368 | Tool button hover bug (closed by #6369) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6368) |
| Issue #6151 | Web interaction platform tracking (closed — scope absorbed into other work) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6151) |

### Major In-Progress Features

- **Provider ecosystem explosion**: 6 new OpenAI-compatible providers in active PR (Morph, GitHub Models, Upstage Solar, Featherless AI, Arcee AI, Lambda AI, Inception Labs)
- **Dashboard self-update flow**: PR [#6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) exposes CLI update mechanism through web UI
- **Nodes dashboard**: PR [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) adds fleet-wide instance visibility
- **Llama.cpp provider separation**: PR [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) creates dedicated provider kind for local inference
- **New channels**: Twitch (IRC wrapper), Lemmy PMs, with Zulip, Rocket.Chat, Mastodon, Twilio SMS in planning

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue | Comments | Core Tension |
|------|-------|----------|--------------|
| 1 | [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) v0.7.5 milestone tracking | 8 | Release automation vs. manual process debt |
| 2 | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) WhatsApp Web protocol break (April 2026) | 4 | **External dependency fragility** — WhatsApp server-side changes silently break channel without client version bump |
| 3 | [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) → fixed by #6414 | 2 | Privacy boundary in personal mode |
| 4 | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) Shell tool autonomy failure | 2 | **Security model complexity** — "full" autonomy doesn't actually grant tool dispatch |
| 5 | [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) cron_add error message UX | 2 | LLM-oriented API ergonomics |

**Underlying needs analysis**: The community is struggling with **configuration complexity** (autonomy levels, provider credentials, cron formats) and **channel reliability** (WhatsApp protocol drift, Matrix session corruption). The high comment count on release automation suggests operational maturity is becoming a blocker for production adoption.

---

## 5. Bugs & Stability

### Critical/S1 Issues (Workflow Blocked)

| Issue | Severity | Component | Status | Has Fix PR? |
|-------|----------|-----------|--------|-------------|
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) WhatsApp Web silent message failure post-April 2026 protocol bump | S1 | channel:whatsapp | Open, P1 | **NO** — needs `wa-rs` dependency update |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) Shell tool calls refused at `autonomy = "full"` | S1 | runtime/tool:shell | Open, P1 | **NO** — config parsing bug in dispatch path |
| [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) Heartbeat incompatible with Matrix channel | S1 | channel:matrix | Open, P2 | **NO** — hardcoded 4-channel limit in daemon |
| [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) Multi-alias channel instances clobber each other | S1 | channel:core/matrix | Open, P0 blocker | **NO** — architectural flaw in `ChannelRuntimeContext` sharing |

### High/S2 Issues (Degraded)

| Issue | Component | Status | Has Fix PR? |
|-------|-----------|--------|-------------|
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) Gateway PostgreSQL runtime panic ("Cannot start a runtime from within a runtime") | memory:postgres | Open, P1 | **NO** — Tokio runtime nesting bug |
| [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) SQLite schema init fails on concurrent startup | memory:sqlite | In progress, P2 | **NO** |
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) WorkspaceManager fails to load profiles at startup | runtime/config | Open, P2 | **NO** — data loss risk (S0) |

**Stability assessment**: The project has **multiple unpatched S1 bugs in core paths** and a P0 blocker for multi-agent Matrix deployments. The WhatsApp protocol drift is particularly concerning as it represents an external dependency with no upstream fix timeline. The PostgreSQL runtime panic suggests async runtime architecture debt.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features (High Likelihood for v0.8.0+)

| Feature | Issue/PR | Signal Strength | Rationale |
|---------|----------|-----------------|-----------|
| Unified plugin architecture ("Everything is a plugin") | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | **Strong** — architectural direction | Maintainer-authored, aligns with Extism WASM work |
| Typed provider config refactor | [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) → [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | **Shipped in v0.8.0 branch** | Breaking change, DO NOT MERGE tag |
| Config validation in `zeroclaw onboard` | [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) | Medium | Reduces support burden, pairs with provider expansion |
| Node health/management dashboard | [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) | Medium | Infrastructure scaling need |

### Channel Expansion Surge

Six new channel PRs opened in 24 hours indicates **strategic push for universal connectivity**:

- **Shipped/merging**: Twitch (IRC wrapper), Lemmy PMs
- **In PR**: Mastodon, Rocket.Chat, Zulip, Twilio SMS

This suggests ZeroClaw is positioning as the **"universal agent endpoint"** — any protocol in, same agent out.

### Provider Expansion (7 new in 24h)

| Provider | PR | Differentiator |
|----------|-----|----------------|
| Morph | [#6440](https://github.com/zeroclaw-labs/zeroclaw/pull/6440) | Fast apply-edits (10.5k tok/s) |
| GitHub Models | [#6445](https://github.com/zeroclaw-labs/zeroclaw/pull/6445) | Free tier, GitHub-native |
| Upstage Solar | [#6459](https://github.com/zeroclaw-labs/zeroclaw/pull/6459) | Korean foundation model |
| Featherless AI | [#6460](https://github.com/zeroclaw-labs/zeroclaw/pull/6460) | 1000s of HF models, serverless |
| Arcee AI | [#6461](https://github.com/zeroclaw-labs/zeroclaw/pull/6461) | Small specialist models |
| Lambda AI | [#6462](https://github.com/zeroclaw-labs/zeroclaw/pull/6462) | GPU cloud, open-weights |
| Inception Labs | [#6463](https://github.com/zeroclaw-labs/zeroclaw/pull/6463) | **Diffusion-based LLMs** (Mercury) — only non-autoregressive architecture |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **WhatsApp reliability** | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) protocol break, [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) privacy leak | Critical — primary channel for many operators |
| **Configuration complexity** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) autonomy levels don't work as documented, [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) need validation | High — barrier to correct setup |
| **Multi-instance correctness** | [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) shared state corruption | Critical — blocks scaling |
| **Database backend fragility** | [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) PostgreSQL panic, [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) SQLite race | High — data layer instability |
| **Documentation gaps** | [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) skills format undocumented | Medium — onboarding friction |

### Use Cases Emerging

- **Personal AI assistant** (WhatsApp personal mode) — privacy boundary critical
- **Team/organization agent** (Slack, Matrix, new Rocket.Chat/Zulip) — multi-user dispatch
- **Fediverse presence** (Mastodon, Lemmy) — decentralized social integration
- **SMS reach** (Twilio) — universal phone accessibility
- **Local-first / self-hosted** (llama.cpp, SQLite) — operator sovereignty

### Satisfaction/Dissatisfaction

**Positive**: Rapid feature delivery, broad provider choice, active maintainer response (same-day PRs for reported issues)

**Negative**: "Moving fast and breaking things" — S1 bugs in core paths, configuration behavior not matching documentation, release automation still incomplete after 3+ weeks ([#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878))

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, high impact)

| Issue | Age | Risk | Why Stalled? |
|-------|-----|------|--------------|
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) v0.7.5 release automation | 19 days | **High** — release pipeline blocked | Complex CI/CD refactor, may be waiting for v0.8.0 integration |
| [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) Skills documentation | 19 days | Low (good first issue) | Unassigned, contributor-friendly but not picked up |

### PRs at Risk

| PR | Status | Risk |
|----|--------|------|
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) Typed provider config | "DO NOT MERGE TO MASTER YET" — targets v0.8.0 branch | Integration complexity; v0.8.0 release timing unclear |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) Native Responses tool calls | 11 days old, "needs-author-action" label | Author unresponsive, feature at risk |

### Architectural Debt Requiring Decision

- **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)** "Everything is a plugin": Long-term direction but no phased plan committed. Current PRs add channels as native code, not plugins — inconsistency with stated vision.

---

*Digest generated from GitHub activity 2026-05-06 to 2026-05-07. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*