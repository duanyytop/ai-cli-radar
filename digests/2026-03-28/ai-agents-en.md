# OpenClaw Ecosystem Digest 2026-03-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-28 00:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-28

---

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with significant community engagement. The project is in a **stabilization phase** following recent releases, with zero new releases today and heavy focus on regression fixes. The 89% open issue rate (445/500) and 64% open PR rate (320/500) suggest either a backlog accumulation or active triage in progress. Critical stability concerns dominate the discourse, particularly around tool execution failures, authentication regressions, and cross-platform compatibility gaps. The maintainer team appears responsive with multiple same-day PR merges addressing urgent bugs.

---

## 2. Releases

**No new releases** (2026-03-28). The latest stable version remains **2026.3.13** with ongoing patch-level fixes landing via direct commits.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#56077](https://github.com/openclaw/openclaw/pull/56077) | Fix `diffs` plugin runtime deps staging | Prevents plugin unload failures after updates |
| [#56073](https://github.com/openclaw/openclaw/pull/56073) | `/steer` shorthand for main-session queue steering | UX improvement for session management |
| [#55820](https://github.com/openclaw/openclaw/pull/55820) | Dynamic, pluggable skills scanning capability | Security hardening foundation |
| [#55393](https://github.com/openclaw/openclaw/pull/55393) | Matrix mentions with displayName labels | Cross-client compatibility fix |
| [#54787](https://github.com/openclaw/openclaw/pull/54787) | Remove unconditional 2-member DM fallback | Fixes duplicate reply routing in Matrix |
| [#53200](https://github.com/openclaw/openclaw/pull/53200) | Ollama `think=false` when thinking disabled | Token efficiency fix |
| [#46747](https://github.com/openclaw/openclaw/pull/46747) | Ollama `think` param for thinking models | Response quality fix |
| [#45773](https://github.com/openclaw/openclaw/pull/45773) | Forward Ollama think flag | Complements #53200, #46747 |

### Active Development (Open PRs)

- **Voice capabilities**: [#43501](https://github.com/openclaw/openclaw/pull/43501) — OpenAI Realtime API integration (~200-400ms latency vs. 2-3s pipeline)
- **Plugin security**: [#56050](https://github.com/openclaw/openclaw/pull/56050) — `before_skill_install` hook for external scanners
- **Agent control**: [#55967](https://github.com/openclaw/openclaw/pull/55967) — Programmatic agent abort API
- **Platform expansion**: [#54784](https://github.com/openclaw/openclaw/pull/54784) — Oracle OCI Generative AI provider

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | Reactions | Core Need |
|:---|:---:|:---:|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 57 | 66 | **Cross-platform parity** — macOS/iOS/Android supported; Linux/Windows desktop apps strongly requested since January |
| [#39651](https://github.com/openclaw/openclaw/issues/39651) "只会说话不会工作" (Speaks but doesn't work) | 31 | 0 | **Local deployment reliability** — Permission/file system access failures with Ollama local models |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) Kimi web_search 401 auth error | 30 | 3 | **Tool authentication consistency** — Web search vs. Chat API credential handling divergence |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) Agent image recognition support | 20 | 0 | **Multimodal capabilities** — Vision model integration for Feishu/enterprise platforms |
| [#38902](https://github.com/openclaw/openclaw/issues/38902) HTTP 422 OpenAI parameter error | 19 | 0 | **Local model compatibility** — QWEN/DeepSeek parameter mapping |

**Underlying Pattern**: Users demand **enterprise-grade reliability** for local/self-hosted deployments, with strong frustration around "works in UI, fails in CLI/API" inconsistencies.

---

## 5. Bugs & Stability

### Critical (Release Blockers / Data Loss Risk)

| Issue | Severity | Description | Fix Status |
|:---|:---|:---|:---|
| [#55672](https://github.com/openclaw/openclaw/issues/55672) | 🔴 **RELEASE BLOCKER** | "No API key for provider" despite valid probe — regression at `a30dae3` | **No fix PR identified** |
| [#44122](https://github.com/openclaw/openclaw/issues/44122) | 🔴 **DATA LOSS** | Sandbox FS Bridge v3.11: Write/Edit tools produce **0-byte files** when `python3` present | **No fix PR identified** |
| [#54931](https://github.com/openclaw/openclaw/issues/54931) | 🔴 **CRASH LOOP** | Discord health-monitor uncaught exception — crash every ~35 min in v2026.3.24 | **No fix PR identified** |
| [#45504](https://github.com/openclaw/openclaw/issues/45504) | 🔴 **REGRESSION** | `devices list/approve` fail against local loopback gateway (v2026.3.12) | **No fix PR identified** |

### High Priority

| Issue | Impact | Notes |
|:---|:---|:---|
| [#40082](https://github.com/openclaw/openclaw/issues/40082) | Task acceptance without execution | Agents return placeholders ("One sec") without action |
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | Execution stall — confirmed but no progress | ~1-2x/month operational failure |
| [#40069](https://github.com/openclaw/openclaw/issues/40069) | Silent tool execution failure | Claims execution, no actual calls |
| [#45046](https://github.com/openclaw/openclaw/issues/45046) | Simulated tool usage in text | Model outputs JSON instead of invoking `tool_calls` |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | openai-codex/gpt-5.3-codex zero tool execution | Post-2026.3.23-2 regression |

### Ollama-Specific Cluster (Multiple Related Issues)

- [#46680](https://github.com/openclaw/openclaw/issues/46680) — Closed via [#46747](https://github.com/openclaw/openclaw/pull/46747), [#45773](https://github.com/openclaw/openclaw/pull/45773), [#53200](https://github.com/openclaw/openclaw/pull/53200)
- Root cause: `think` parameter not propagated; **now resolved**

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | ⭐⭐⭐⭐⭐ | 66 👍, 3+ months old, explicit "help wanted" label |
| **Native voice mode** | [#43501](https://github.com/openclaw/openclaw/pull/43501) | ⭐⭐⭐⭐⭐ | XL PR active, OpenAI Realtime API integration |
| **Vision/multimodal support** | [#28744](https://github.com/openclaw/openclaw/issues/28744) | ⭐⭐⭐⭐☆ | Strong enterprise demand (Feishu/Slack), MiniMax already capable |
| **Agent identity/trust verification** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | ⭐⭐⭐☆☆ | RFC stage, crypto/DID standards alignment |
| **NVIDIA NIM provider** | [#50898](https://github.com/openclaw/openclaw/issues/50898) | ⭐⭐⭐☆☆ | Enterprise GPU deployment demand |
| **Oracle OCI provider** | [#54784](https://github.com/openclaw/openclaw/pull/54784) | ⭐⭐⭐⭐☆ | PR active, enterprise cloud expansion |

**Predicted 2026.4.0 themes**: Cross-platform desktop parity, real-time voice, vision capabilities, enterprise cloud provider expansion.

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **"Ghost" task acceptance** | [#40082](https://github.com/openclaw/openclaw/issues/40082), [#40631](https://github.com/openclaw/openclaw/issues/40631), [#40069](https://github.com/openclaw/openclaw/issues/40069) | 🔴 Critical |
| **Tool execution inconsistency** | [#39651](https://github.com/openclaw/openclaw/issues/39651), [#45046](https://github.com/openclaw/openclaw/issues/45046), [#39971](https://github.com/openclaw/openclaw/issues/39971) | 🔴 Critical |
| **Authentication/config drift** | [#55672](https://github.com/openclaw/openclaw/issues/55672), [#8983](https://github.com/openclaw/openclaw/issues/8983), [#44851](https://github.com/openclaw/openclaw/issues/44851) | 🟡 High |
| **Platform-specific gaps** | [#75](https://github.com/openclaw/openclaw/issues/75), [#28744](https://github.com/openclaw/openclaw/issues/28744), [#7116](https://github.com/openclaw/openclaw/issues/7116) | 🟡 High |

### Positive Signals

- **Responsive maintainer team**: Same-day merges for critical fixes
- **Extensible architecture**: Plugin hooks (`before_skill_install`, `subagent_*`) enabling community security tools
- **Multi-channel maturity**: Telegram, Discord, Matrix, Slack, Feishu all actively maintained

### Satisfaction Risk

Multiple "regression" labels on recent issues suggest **version-to-version stability concerns** may be eroding trust in production deployments.

---

## 8. Backlog Watch

### Stale Issues Needing Attention (>30 days, high impact)

| Issue | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | ~90 days | Linux/Windows desktop apps | Maintainer decision on Qt/Electron/Tauri path |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | ~30 days | Vision capability | Architecture review for image pipeline |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | ~45 days | Discord WebSocket reliability | Root cause analysis of resume logic |
| [#20386](https://github.com/openclaw/openclaw/issues/20386) | ~40 days | Windows/WSL node approval | Platform-specific networking fix |
| [#28788](https://github.com/openclaw/openclaw/issues/28788) | ~30 days | Discord REST proxy support | Corporate deployment blocker |

### PRs Awaiting Review

| PR | Description | Risk if Delayed |
|:---|:---|:---|
| [#43501](https://github.com/openclaw/openclaw/pull/43501) | Realtime voice (XL) | Large PR divergence, community anticipation |
| [#55967](https://github.com/openclaw/openclaw/pull/55967) | Agent abort API | Blocks plugin ecosystem reliability |
| [#56050](https://github.com/openclaw/openclaw/pull/56050) | Security scanner hooks | Enterprise adoption prerequisite |

---

**Digest compiled from 1,000 data points (500 issues, 500 PRs) with focus on signal-to-noise ratio for production users and contributors.**

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-28

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense velocity** with over 1,300 tracked items updated across 12 projects in 24 hours. The landscape shows a clear bifurcation: **mature frameworks** (OpenClaw, NanoBot, IronClaw) stabilizing production features versus **emerging players** (TinyClaw, ZeptoClaw) iterating on core architecture. Enterprise readiness dominates priorities—multi-tenancy, provider diversification, and cross-platform desktop parity are universal themes. Notably, **vendor lock-in anxiety** (particularly Anthropic dependency) and **local/self-hosted deployment** are driving architectural decisions across the board.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Status |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | None (stabilizing) | 🟢 85/100 | Hyper-active, regression focus |
| **NanoBot** | 24 | 67 | v0.1.4.post6 | 🟡 72/100 | High velocity, stability debt |
| **ZeroClaw** | 30 | 50 | v0.6.5 | 🟢 78/100 | Context management focus |
| **PicoClaw** | 16 | 43 | Nightly | 🟢 75/100 | Enterprise channel polish |
| **NanoClaw** | 17 | 45 | None | 🟡 68/100 | Provider diversification push |
| **NullClaw** | 5 | 37 | None | 🟢 70/100 | Reliability engineering |
| **IronClaw** | 20 | 47 | v0.23.0 | 🟡 65/100 | Security remediation lag |
| **LobsterAI** | 26 | 50 | None | 🔴 58/100 | P0 stability crises |
| **TinyClaw** | 0 | 2 | None | 🟡 45/100 | Quiet consolidation |
| **Moltis** | 2 | 4 | 2 patches | 🟢 72/100 | Workflow orchestration pivot |
| **CoPaw** | 50 | 42 | None | 🟡 70/100 | Persistence architecture debt |
| **ZeptoClaw** | 0 | 2 | None | 🟡 55/100 | Maintenance mode |
| **EasyClaw** | — | — | — | ⚪ N/A | No activity |

*\*Health score weighted: velocity (30%), stability/responsiveness (40%), community engagement (20%), release cadence (10%)*

---

## 3. OpenClaw's Position

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 1,000 items/day | 10-50x larger than nearest competitor (NanoBot: 91 items) |
| **Maturity** | Stabilization phase | NanoBot/IronClaw still in architectural flux; ZeroClaw/PicoClaw catching up |
| **Platform coverage** | 5+ channels (Telegram, Discord, Matrix, Slack, Feishu) | Broadest; NullClaw matches but with reliability gaps |
| **Voice capabilities** | Real-time OpenAI integration in flight (#43501) | Ahead of peers; NanoClaw has no voice, IronClaw none mentioned |
| **Cross-platform** | macOS/iOS/Android shipping; Linux/Windows requested (#75) | ZeroClaw has ARM64 gaps; PicoClaw Windows QQ broken |
| **Security posture** | Plugin hooks for external scanners (#56050) | Leading; IronClaw has critical open CVEs; NanoClaw patching actively |

**Technical approach differences:**
- **OpenClaw**: Plugin-centric architecture with formalized skill marketplace (`.well-known` alignment)
- **NanoBot**: Runtime decomposition for agent execution; heavier focus on sandboxing proposals
- **IronClaw**: Rust-based with blockchain/NEAR integration; multi-tenant DB architecture
- **ZeroClaw**: Rust + aggressive context compression; Matrix E2EE specialization

**Community size**: OpenClaw's 66-reaction Linux/Windows request (#75) exceeds total daily engagement of TinyClaw, ZeptoClaw, and EasyClaw combined.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Multi-provider abstraction / Anthropic de-risking** | NanoClaw (#80), IronClaw (#1696), OpenClaw (Ollama cluster), CoPaw (#2419) | NanoClaw: "Anthropic shutting down subs for OpenClaw usage"; 53👍 on multi-provider issue |
| **Cross-platform desktop parity** | OpenClaw (#75), ZeroClaw (#4842), CoPaw (#1084), PicoClaw (#2080) | Linux/Windows gaps universally acknowledged; ARM64/IoT emerging |
| **Context/memory management** | ZeroClaw (v0.6.5 release), ZeptoClaw (#460), NanoClaw (#1493-1495), NanoBot (#967) | Token overflow, compression, persistent memory — scaling pain |
| **Voice/multimodal** | OpenClaw (#43501, #28744), PicoClaw (#1939), NanoClaw (#1496) | Real-time API integration, vision models, ASR/TTS |
| **Sandboxing/security hardening** | NanoBot (#2567, #2569), IronClaw (CI security review), OpenClaw (#56050) | Email RCE patched, `sandlock` proposed, plugin hooks |
| **Task lifecycle / reliability** | LobsterAI (#953), NanoBot (#235), CoPaw (#2411), ZeroClaw (#4804) | Zombie processes, silent failures, graceful interruption |
| **`.well-known` skills standard** | NullClaw (#734), IronClaw (#1717), PicoClaw (#2101), Moltis | Ecosystem interoperability emerging as table stakes |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Notes |
|:---|:---|:---|:---|
| **OpenClaw** | Scale + ecosystem maturity | Power users, multi-channel operators | Python/TypeScript, plugin marketplace, extensive provider support |
| **NanoBot** | Rapid iteration, Chinese market focus | Developers, QQ/WeChat integrators | Python, runtime decomposition, aggressive nightly releases |
| **ZeroClaw** | Rust performance, context compression | Technical users, long-context workloads | Rust 2024, preemptive token management, Matrix specialization |
| **PicoClaw** | Hardware integration (Sipeed), enterprise channels | Edge/IoT, Feishu/Lark enterprises | Async architecture, multi-tenant groundwork |
| **NanoClaw** | Anthropic-native, containerized agents | Claude-dependent workflows | Container-centric, skill-based, healthcare use cases emerging |
| **IronClaw** | Blockchain/NEAR integration, multi-tenancy | Crypto-native, enterprise SaaS | Rust, DB-backed auth, financial execution layer planned |
| **LobsterAI** | NetEase Youdao integration, "full-scenario" personal assistant | Chinese consumers, IM-heavy users | Electron/desktop-first, Gateway architecture, MCP toolchain |
| **CoPaw** | AgentScope pedigree, multi-agent collaboration | Researchers, agent orchestration | Priority queue architecture, strong China enterprise channels |
| **Moltis** | Workflow orchestration ("Symphony"), GraphQL API | Automation engineers, Linear users | Rust, workflow engine, prompt caching focus |
| **TinyClaw** | Minimal footprint, Linear-style UX | Individual developers, task-focused | SQLite-backed, shadcn/ui, quiet development |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Hyper-active** | OpenClaw | 1,000+ items/day, stabilization focus, production regression pressure |
| **⚡ Rapid iteration** | NanoBot, IronClaw, CoPaw, PicoClaw | 40-90 items/day, architectural changes in flight, stability debt accumulating |
| **🛠️ Active maintenance** | ZeroClaw, NullClaw, Moltis, NanoClaw | 20-50 items/day, targeted improvements, review bottlenecks |
| **🌱 Consolidation** | TinyClaw, ZeptoClaw | <5 items/day, core contributor driven, feature-complete for scope |
| **💤 Dormant** | EasyClaw | Zero activity |

**Stabilizing vs. Expanding:**
- **Stabilizing**: OpenClaw (post-release fixes), ZeroClaw (v0.6.5 context hardening), IronClaw (v0.23.0 multi-tenant)
- **Expanding**: NanoBot (runtime decomposition), Moltis (Symphony workflow engine), CoPaw (priority queue redesign)

---

## 7. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **Anthropic dependency = business risk** | NanoClaw #80: "shutting down subs"; multi-provider PRs across ecosystem | Architect provider-agnostic abstractions; prioritize OpenAI-compatible fallbacks |
| **Local/edge AI deployment surge** | Ollama integration (OpenClaw, IronClaw #1696, PicoClaw #28, CoPaw #2419) | Design for offline-capable, quantized models; expect ARM64/IoT targets |
| **Voice as new interaction layer** | OpenClaw Realtime API (#43501), PicoClaw voice PR (#1939) | Plan for sub-500ms latency pipelines; audio I/O becomes core competency |
| **Agent reliability > capability** | "Silent failure" themes (NanoBot #235, LobsterAI #953, OpenClaw #40082) | Invest in observability, task supervisors, verifiable execution (HMAC receipts in ZeroClaw #4830) |
| **Skills as standardized marketplace** | `.well-known` alignment (NullClaw, IronClaw, PicoClaw, Moltis) | Prepare for skill discovery protocols; treat agents as composable service marketplaces |
| **Container/Docker-native deployment friction** | NanoClaw #1487 (kills own container), #1485 (supply chain trust) | Reconsider curl-to-bash patterns; design for unprivileged, rootless execution |
| **Enterprise authentication complexity** | AWS SSO (PicoClaw), GitHub Copilot (IronClaw #4851, NanoClaw #1350), TOTP (ZeroClaw #4799) | Expect enterprise IdP integration as default requirement, not premium feature |

---

*Report compiled from 12 project digests covering 1,300+ data points. Health scores and tiering based on composite velocity, stability, and engagement metrics.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-28

## 1. Today's Overview

NanoBot shows **exceptionally high activity** for a single day with **24 issues updated** (19 active) and **67 PRs updated** (44 open, 23 merged/closed), indicating a project in rapid iteration following the v0.1.4.post6 release. The release appears to have introduced **multiple regressions** in Telegram functionality, with at least 4 new bug reports directly attributed to the update. The community is actively engaged with **27 new contributors** joining recently, though maintainer bandwidth appears stretched given the volume of unaddressed open PRs. Security consciousness is rising with two sandboxing proposals filed today. The project is navigating typical growing pains of a fast-moving AI agent framework: feature velocity is high, but stability and polish are lagging.

---

## 2. Releases

### v0.1.4.post6 — Released 2026-03-27

| Aspect | Details |
|--------|---------|
| **Scope** | 57 PRs merged, 27 new contributors |
| **Theme** | "Less about adding surface area than rethinking what's underneath" — internal architecture refactoring |
| **Key Change** | **Agent runtime formally decomposed** — significant restructuring of core execution engine |

**Breaking Changes & Migration Notes:**
- The runtime decomposition likely explains **multiple regression reports** (see Bugs & Stability)
- Users reporting Telegram markdown rendering failures, persistent 👀 reactions, and streaming message failures should **pin to v0.1.4.post5** if stability critical
- LangSmith integration **broken** — `litellm_provider.py` removal deprecated existing integration path ([Issue #2493](https://github.com/HKUDS/nanobot/issues/2493))

---

## 3. Project Progress

### Merged/Closed PRs Today (23 total, selected highlights)

| PR | Author | Impact |
|:---|:---|:---|
| [#2054](https://github.com/HKUDS/nanobot/pull/2054) | StepanchukYI | Telegram emoji reactions (👀 acknowledgment) — **now causing regression** |
| [#2053](https://github.com/HKUDS/nanobot/pull/2053) | StepanchukYI | Fixed global `litellm.api_base` mutation for multi-provider setups |
| [#2567](https://github.com/HKUDS/nanobot/pull/2567) | flexs2n | **Critical security fix**: Email channel zero-click prompt injection + auth bypass |
| [#2016](https://github.com/HKUDS/nanobot/pull/2016) | ceke233 | NapCat QQ channel support with debouncing |
| [#1742](https://github.com/HKUDS/nanobot/pull/1742) | akcode7 | Respect explicit provider config in model resolution |
| [#2488](https://github.com/HKUDS/nanobot/pull/2488) | Chen-zexi | `/skill` slash command for user-activated skill injection |
| [#2272](https://github.com/HKUDS/nanobot/pull/2272) | flobo3 | Cleaner Telegram network error logging |

**Features Advanced:**
- **Security hardening**: Email channel vulnerability patched ([PR #2567](https://github.com/HKUDS/nanobot/pull/2567))
- **Multi-platform expansion**: QQ support via NapCat, enhanced Telegram UX
- **Developer experience**: `/skill` command, cleaner provider configuration

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | 👍 | Core Tension |
|:---|:---|:---:|:---:|:---|
| 1 | [#235](https://github.com/HKUDS/nanobot/issues/235) — "No response to give" | 9 | 7 | **Reliability crisis**: DeepSeek + Telegram users hit silent failures; 2-month-old issue persisting |
| 2 | [#2271](https://github.com/HKUDS/nanobot/pull/2271) | — | 0 | **Loop prevention**: Tool call cycle detection — addresses fundamental agent reliability |
| 3 | [#967](https://github.com/HKUDS/nanobot/pull/967) | — | 0 | **Memory architecture**: Supermemory integration for persistent context — long-term viability |

### Underlying Needs Analysis

| Pattern | Evidence | Implication |
|:---|:---|:---|
| **Silent failure anxiety** | #235, #2487, #2513 | Users need **observability** — agent says "completed" but did nothing |
| **Multi-model resilience** | #1201, #2476, #2548 | Production users need **fallback chains**, not single points of failure |
| **Security maturity** | #1448, #2567, #2569 | Community pushing for **sandboxing** beyond regex-based blocking |
| **Channel parity** | #2546, #2558, #2561, #2564 | Telegram getting disproportionate attention; Slack/QQ/WeChat lagging |

---

## 5. Bugs & Stability

### Critical Regressions (v0.1.4.post6)

| Severity | Issue | Symptoms | Fix PR? |
|:---|:---|:---|:---:|
| 🔴 **High** | [#2562](https://github.com/HKUDS/nanobot/issues/2562) | Telegram 👀 reaction persists after response | [#2564](https://github.com/HKUDS/nanobot/pull/2564) ✅ |
| 🔴 **High** | [#2559](https://github.com/HKUDS/nanobot/issues/2559) | Streaming fails with `Message_too_long` | ❌ |
| 🔴 **High** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Markdown rendering unreliable | ❌ |
| 🟡 **Medium** | [#2549](https://github.com/HKUDS/nanobot/issues/2549) | Cross-channel message ID collision (reopened bug) | ❌ |
| 🟡 **Medium** | [#2560](https://github.com/HKUDS/nanobot/issues/2560) | Brave web_search rate-limiting increased | ❌ |

### Provider/Integration Failures

| Issue | Provider | Status |
|:---|:---|:---|
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama local (404, port 18790) | Open, 2 comments |
| [#2450](https://github.com/HKUDS/nanobot/issues/2450) | Ollama Cloud (minimax-m2.7) | Open, 0 comments |
| [#2519](https://github.com/HKUDS/nanobot/issues/2519) | WeChat + MiMo V2 Omni | Open, 0 comments |
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) | LangSmith (broken by LiteLLM removal) | Open, 1 comment |

### Security (Fixed & Proposed)

| Item | Status | Details |
|:---|:---|:---|
| [#2567](https://github.com/HKUDS/nanobot/pull/2567) | **MERGED** | Email spoofing → prompt injection → RCE |
| [#2569](https://github.com/HKUDS/nanobot/pull/2569) | Open PR | `sandlock` OS-level sandboxing for `ExecTool` |
| [#1448](https://github.com/HKUDS/nanobot/issues/1448) | Open Issue | WASM/container sandboxing proposal |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (based on PR velocity)

| Feature | Signal Strength | Evidence |
|:---|:---:|:---|
| **Tool call cycle detection** | ⭐⭐⭐⭐⭐ | [PR #2271](https://github.com/HKUDS/nanobot/pull/2271) active, addresses core reliability |
| **Subagent pause-resume** | ⭐⭐⭐⭐⭐ | [PR #2507](https://github.com/HKUDS/nanobot/pull/2507) — user interaction mid-task |
| **Codex native web search** | ⭐⭐⭐⭐⭐ | [PR #2565](https://github.com/HKUDS/nanobot/pull/2565) — competitive parity |
| **Self-modifying runtime** | ⭐⭐⭐⭐☆ | [PR #2521](https://github.com/HKUDS/nanobot/pull/2521) — `SelfTool` for dynamic adaptation |

### Medium-Term Indicators

| Feature | Signal | Blocker/Consideration |
|:---|:---|:---|
| **`.well-known` skill standard** | [Issue #2571](https://github.com/HKUDS/nanobot/issues/2571) | Waiting for agentskills spec finalization |
| **Supermemory integration** | [PR #967](https://github.com/HKUDS/nanobot/pull/967) | Large PR, needs review bandwidth |
| **Multi-model fallback** | [PR #1201](https://github.com/HKUDS/nanobot/pull/1201) | Architecture decisions on provider hierarchy |
| **Thinking mode toggle** | [Issue #2240](https://github.com/HKUDS/nanobot/issues/2240) | UX design needed |

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

> *"I've completed processing but have no response to give"* — [#235](https://github.com/HKUDS/nanobot/issues/235)
> 
> *"Nanobot currently has multiple failure modes where it tells the user that it is doing something, has started execution, or has completed a task — but in reality, no action was executed"* — [#2487](https://github.com/HKUDS/nanobot/issues/2487)

| Category | Frequency | Severity |
|:---|:---:|:---:|
| Silent/hallucinated completion | 🔥🔥🔥🔥🔥 | Critical trust erosion |
| Telegram-specific regressions | 🔥🔥🔥🔥🔥 | Platform risk concentration |
| Provider compatibility (Ollama, VolcEngine, etc.) | 🔥🔥🔥🔥☆ | Fragmentation cost |
| Rate limiting (Brave, APIs) | 🔥🔥🔥☆☆ | Operational friction |

### Satisfaction Drivers
- **Fast iteration** (daily nightly refreshes)
- **Multi-channel coverage** (QQ addition welcomed)
- **Security responsiveness** (email fix merged same day reported)

### Dissatisfaction Drivers
- **Regression velocity** — new releases break existing workflows
- **Observability gaps** — hard to debug "no response" states
- **Documentation drift** — cron tool description misleading ([#2566](https://github.com/HKUDS/nanobot/issues/2566))

---

## 8. Backlog Watch

### Stale Important Items Needing Attention

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) — Silent failures | 7+ weeks | **User churn** | Root cause analysis; affects DeepSeek specifically |
| [#967](https://github.com/HKUDS/nanobot/pull/967) — Supermemory | 5+ weeks | **Competitive gap** | Memory architecture review |
| [#1201](https://github.com/HKUDS/nanobot/pull/1201) — Multi-model fallback | 4+ weeks | **Reliability** | Design review on provider abstraction |
| [#1448](https://github.com/HKUDS/nanobot/issues/1448) — Sandboxing | 3+ weeks | **Security liability** | Response to [#2569](https://github.com/HKUDS/nanobot/pull/2569) PR |
| [#2240](https://github.com/HKUDS/nanobot/issues/2240) — Thinking mode toggle | 1+ week | **UX polish** | Simple feature, high user value |

### Maintainer Capacity Signal

- **44 open PRs** vs. 23 closed suggests **review bottleneck**
- Nightly refresh announced for 3/29 — may indicate **batch processing** preferred over continuous review

---

*Digest generated from HKUDS/nanobot GitHub activity on 2026-03-28. All links verified to `https://github.com/HKUDS/nanobot`.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-28

## 1. Today's Overview

ZeroClaw shows **high-velocity development** with 80 tracked items updated in 24 hours (30 issues, 50 PRs) and a fresh patch release (v0.6.5). The project is actively addressing production stability concerns—particularly around **context window management** and **Matrix channel reliability**—while expanding platform support (LINE, Mattermost WebSocket) and security hardening. Open PRs significantly outpace closures (36:14), indicating a healthy contribution pipeline but potential maintainer review backlog. The Rust 2024 edition migration completed today signals technical modernization.

---

## 2. Releases

### [v0.6.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.6.5)

**Critical stability release** focused on context window overflow resilience:

| Change | Impact |
|--------|--------|
| Context overflow recovery in interactive daemon loop | Prevents crashes during long conversations |
| Context overflow recovery in tool call loop | Maintains tool execution integrity under pressure |
| Fast-path tool result trimming in context compressor | Reduces latency on context-heavy operations |
| Preemptive context check before provider calls | Avoids API errors from oversized requests |
| Shared iteration budget | Prevents runaway loops across agent subsystems |

**Migration notes:** No breaking changes. Recommended for all production deployments experiencing `400 Bad Request` from Anthropic/Claude on long sessions.

---

## 3. Project Progress

### Merged/Closed PRs Today (14 total)

| PR | Author | Summary |
|:---|:---|:---|
| [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) | panviktor | **Matrix media + E2EE verification** — major channel reliability improvement |
| [#4860](https://github.com/zeroclaw-labs/zeroclaw/pull/4860) | theonlyhennygod | Removed stale `skills/` example directory |
| [#4859](https://github.com/zeroclaw-labs/zeroclaw/pull/4859) | theonlyhennygod | Cleaned up `playground/` tracked files, added to `.gitignore` |
| [#4854](https://github.com/zeroclaw-labs/zeroclaw/pull/4854) | theonlyhennygod | Removed redundant `python/` package (functionality exists in Rust) |
| [#4849](https://github.com/zeroclaw-labs/zeroclaw/pull/4849) | theonlyhennygod | Added build/version badges to 31 README variants |
| [#4847](https://github.com/zeroclaw-labs/zeroclaw/pull/4847) | wllxqsz | CI workflow refactoring for upstream sync |
| [#4841](https://github.com/zeroclaw-labs/zeroclaw/pull/4841) | theonlyhennygod | **Rust 2021 → 2024 edition upgrade** (5802 tests passing) |

**Key advances:** Matrix E2EE stabilization, repository hygiene cleanup, and foundational toolchain modernization.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | Closed Issue | 13 | 8 | **External MCP server support** — highly requested, now resolved. Users want npm/remote MCP server configuration. Signals ecosystem expansion needs. |
| [#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) | Open Bug | 5 | 0 | Matrix thread context loss — **production blocker** for chatbot use cases. Second message in thread loses conversation history. |
| [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | Open Bug | 3 | 0 | History pruner severs tool pairs → Anthropic 400 errors. Fix PR [#4825](https://github.com/zeroclaw-labs/zeroclaw/pull/4825) already open. |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | Open Tracker | 2 | 1 | **Matrix friction umbrella** — E2EE OTK retry, thread handling, config merging. Indicates platform maturity gaps. |
| [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) | Open Feature | 2 | 0 | HMAC tool execution receipts — novel **hallucination detection** mechanism. PR [#4831](https://github.com/zeroclaw-labs/zeroclaw/pull/4831) open. |

**Underlying needs:** Users need **reliable long-running conversations** (Matrix threads, context preservation) and **verifiable agent behavior** (HMAC receipts, MCP standardization).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **S1** — Workflow blocked | [#4808](https://github.com/zeroclaw-labs/zeroclaw/issues/4808) | Discord treating images as text embeds (not image payloads) | No PR |
| **S1** — Workflow blocked | [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | WhatsApp-Web channel broken (feature flag issue) | No PR |
| **S1** — Workflow blocked | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | GitHub Copilot provider undocumented/unconfigurable | No PR |
| **S1** — Workflow blocked | [#4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) | Channel mode discards tool-call context after each response | No PR |
| **S1** — Workflow blocked | [#4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) | `onboard --channels-only` destroys other channel configs | **PR [#4817](https://github.com/zeroclaw-labs/zeroclaw/pull/4817) open** |
| **S2** — Degraded | [#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) | Matrix thread replies lack conversation context | No PR |
| **S2** — Degraded | [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | History pruner breaks tool_use/tool_result pairs | **PR [#4825](https://github.com/zeroclaw-labs/zeroclaw/pull/4825) open** |
| **S2** — Degraded | [#4806](https://github.com/zeroclaw-labs/zeroclaw/issues/4806) | Matrix thread context lost on daemon restart | No PR |
| **S2** — Degraded | [#4855](https://github.com/zeroclaw-labs/zeroclaw/issues/4855) | Channels API returning HTML not JSON | **PR [#4858](https://github.com/zeroclaw-labs/zeroclaw/pull/4858) open** |
| **S2** — Degraded | [#4856](https://github.com/zeroclaw-labs/zeroclaw/issues/4856) | Sessions section UI broken (slice on undefined `id`) | **PR [#4858](https://github.com/zeroclaw-labs/zeroclaw/pull/4858) open** |
| **S2** — Degraded | [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | Cannot add cron from UI (security restrictions) | No PR |
| **S2** — Degraded | [#4848](https://github.com/zeroclaw-labs/zeroclaw/issues/4848) | MCP detection failing | No PR |

**Stability assessment:** 5 S1 blockers (3 channels + 2 core features) need urgent attention. v0.6.5's context fixes address systemic pressure but channel-specific bugs remain acute.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood v0.6.6 | Rationale |
|:---|:---|:---:|:---|
| **HMAC tool execution receipts** | [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) / [#4831](https://github.com/zeroclaw-labs/zeroclaw/pull/4831) | **High** | PR open, addresses hallucination — critical trust feature |
| **LINE Messaging API channel** | [#4822](https://github.com/zeroclaw-labs/zeroclaw/pull/4822) | **High** | PR open, major market (Southeast Asia) |
| **Mattermost WebSocket real-time** | [#4845](https://github.com/zeroclaw-labs/zeroclaw/pull/4845) | **High** | PR open, enterprise demand |
| **TOTP 2FA for tool execution** | [#4799](https://github.com/zeroclaw-labs/zeroclaw/pull/4799) | Medium | Security hardening, PR open but complex |
| **Matrix media support** | [#4861](https://github.com/zeroclaw-labs/zeroclaw/issues/4861) | Medium | Umbrella issue exists, partial fixes landed |
| **Memory consolidation via tool-calling** | [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | Medium | Architecture improvement, no PR yet |
| **Native sandbox hardening** | [#4812](https://github.com/zeroclaw-labs/zeroclaw/issues/4812) | Lower | Seccomp/firejail — security debt but complex |
| **`.well-known` skill installation** | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Lower | Standards-aligned, awaiting upstream spec |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Channel configuration fragility** | [#4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655), [#4806](https://github.com/zeroclaw-labs/zeroclaw/issues/4806) | High |
| **Matrix reliability in production** | [#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804), [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657), [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | Critical |
| **Missing/outdated documentation** | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) (Copilot), [#4848](https://github.com/zeroclaw-labs/zeroclaw/issues/4848) (MCP) | High |
| **UI/API drift** | [#4855](https://github.com/zeroclaw-labs/zeroclaw/issues/4855), [#4856](https://github.com/zeroclaw-labs/zeroclaw/issues/4856), [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | Medium |
| **Architecture-specific binaries** | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) (aarch64) | Medium |

### Positive Signals

- **MCP ecosystem enthusiasm**: [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) closed with strong engagement
- **Security-conscious user base**: TOTP [#4799](https://github.com/zeroclaw-labs/zeroclaw/pull/4799) and HMAC [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) proposals show operational maturity
- **Platform expansion demand**: LINE, Mattermost PRs reflect geographic/enterprise growth

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Risk |
|:---|:---|:---|:---|
| [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | 1 day | `zeroclaw update` broken on ARM64 (Raspberry Pi) | **User acquisition blocker** for edge/IoT deployments |
| [#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706) | 3 days | Unbounded `ConversationHistoryMap` memory growth | Production OOM risk; PR open, needs review |
| [#4729](https://github.com/zeroclaw-labs/zeroclaw/pull/4729) | 2 days | Docker build fragility → `cargo-chef` migration | Developer experience; affects CI reliability |
| [#4355](https://github.com/zeroclaw-labs/zeroclaw/pull/4355) | 5 days | Web chat history + scroll UX | Gateway usability gap; competing with Matrix focus? |

### Review Queue Pressure

- **36 open PRs** vs. 14 closures suggests ~2.5:1 submission/merge ratio
- **singlerider** (community contributor) has 4 active PRs — potential maintainer bottleneck if not triaged

---

*Digest generated from 80 data points across zeroclaw-labs/zeroclaw repository activity on 2026-03-28.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-28

## 1. Today's Overview

PicoClaw shows **high development velocity** with 43 PRs and 16 issues updated in the last 24 hours. The project is actively iterating on v0.2.4 with a new nightly build, indicating a mature release cycle. Core focus areas include **provider compatibility** (OpenAI-compatible APIs, AWS Bedrock), **channel stability** (Discord, Feishu, QQ), and **agent architecture hardening** (multi-tenant isolation, async processing). The community is particularly engaged around enterprise deployment scenarios (Feishu/Lark, Windows support, SSO authentication). With 31 open PRs versus 12 merged/closed, there's a healthy but growing review backlog.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.4-nightly.20260327.e6c05cb4](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)** | Nightly | Automated build; unstable. Full changelog tracks 50+ commits since v0.2.4. |

**No stable release today.** Users on production systems should remain on v0.2.4.

---

## 3. Project Progress

### Merged/Closed PRs (12 total, key highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#2104](https://github.com/sipeed/picoclaw/pull/2104) | flyingleafe | **Merged**: Hermes-style XML tool call parsing for Qwen-derived models (critical for local model compatibility) |
| [#2047](https://github.com/sipeed/picoclaw/pull/2047) | afjcjsbx | **Merged**: Token usage logging in agent loop for observability |
| [#1991](https://github.com/sipeed/picoclaw/pull/1991) | stevef1uk | **Merged**: Async `/chat` API — foundational for scalable deployments |
| [#1963](https://github.com/sipeed/picoclaw/pull/1963) | stevef1uk | **Merged**: Azure skills whitelisting + security hardening |
| [#2068](https://github.com/sipeed/picoclaw/pull/2068) | cytown | **Merged**: Config/security structure simplification |
| [#1901](https://github.com/sipeed/picoclaw/issues/1901) | — | **Closed**: API key configuration bug (resolved) |
| [#2013](https://github.com/sipeed/picoclaw/issues/2013), [#1986](https://github.com/sipeed/picoclaw/issues/1986) | — | **Closed**: Documentation tasks for logging and security config |

**Key Advances:**
- **Agent architecture**: Async processing + multi-tenant isolation groundwork laid
- **Provider ecosystem**: Better local model support (Hermes XML), AWS SSO error handling, generalized token auth
- **Observability**: Token logging, version display in UI

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | 10 comments | **Long-running demand** (since Feb 11). Users want one-click local LLM integration. Underlying need: reducing barrier to self-hosted AI for non-technical users. |
| 2 | [#1974](https://github.com/sipeed/picoclaw/issues/1974) ReadFileTool line-based pagination | 6 comments | Developer UX issue — byte offsets are error-prone for LLM consumption. PR [#1981](https://github.com/sipeed/picoclaw/pull/1981) addresses this. |
| 3 | [#2072](https://github.com/sipeed/picoclaw/issues/2072) Discord "field required" bug | 3 comments | Web UI validation issue blocking Discord bot setup. |
| 4 | [#1901](https://github.com/sipeed/picoclaw/issues/1901) API key config bug | 4 comments | **Resolved** — configuration parsing edge case. |

**Underlying Needs:**
- **Simplified local deployment** (LM Studio, Ollama-style integrations)
- **LLM-friendly tooling** (line numbers over byte offsets for context windows)
- **First-run experience polish** (channel configuration UX)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#2074](https://github.com/sipeed/picoclaw/issues/2074) Feishu topic replies go to main chat instead of thread | Open | None |
| 🟡 **Medium** | [#2072](https://github.com/sipeed/picoclaw/issues/2072) Discord token save fails with "field required" | Open | None |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) `exec` tool false-positive path blocking | Open | None |
| 🟡 **Medium** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) Tool feedback Unicode escape (`\u0026` instead of `&`) | Open | None |
| 🟡 **Medium** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) Windows QQ channel non-functional | Open | None |
| 🟡 **Medium** | [#2096](https://github.com/sipeed/picoclaw/issues/2096) Bot frequently drops messages (network reconnect?) | Open | None |
| 🟢 **Low** | [#2099](https://github.com/sipeed/picoclaw/pull/2099) Empty LLM response after tool execution | **Fix ready** | [#2099](https://github.com/sipeed/picoclaw/pull/2099) |
| 🟢 **Low** | [#2103](https://github.com/sipeed/picoclaw/pull/2103) CPU busy-waiting in agent loop | **Fix ready** | [#2103](https://github.com/sipeed/picoclaw/pull/2103) |

**Regression Risk:** [#2074](https://github.com/sipeed/picoclaw/issues/2074) is labeled a regression from OpenClaw — enterprise Feishu users are blocked.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.5 | Signal |
|---------|----------|----------------------|--------|
| **LM Studio auto-discovery** | [#28](https://github.com/sipeed/picoclaw/issues/28) | Medium | High community demand, but requires protocol standardization |
| **Line-based file reading** | [#1974](https://github.com/sipeed/picoclaw/issues/1974) + [#1981](https://github.com/sipeed/picoclaw/pull/1981) | **High** | PR ready, clear developer benefit |
| **Voice messages (ASR/TTS)** | [#1939](https://github.com/sipeed/picoclaw/pull/1939) | **High** | Large PR in review, multi-channel support |
| **Multi-user session isolation** | [#2095](https://github.com/sipeed/picoclaw/pull/2095), [#2102](https://github.com/sipeed/picoclaw/pull/2102) | **High** | Security-critical, multiple PRs converging |
| **Web UI version display** | [#2077](https://github.com/sipeed/picoclaw/issues/2077) + [#2087](https://github.com/sipeed/picoclaw/pull/2087) | **High** | PR ready, trivial merge |
| **`.well-known` skill installation** | [#2101](https://github.com/sipeed/picoclaw/issues/2101) | Medium | Standards-alignment with Agent Skills group |
| **Feishu file download path config** | [#2030](https://github.com/sipeed/picoclaw/issues/2030) | Medium | Enterprise UX improvement |

**Predicted v0.2.5 themes:** Voice capabilities, security hardening, developer experience (file tools, version visibility).

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows compatibility gaps** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) QQ broken on Windows | Blocking for Windows-first teams |
| **Enterprise chat platform polish** | [#2074](https://github.com/sipeed/picoclaw/issues/2074) Feishu threads, [#2072](https://github.com/sipeed/picoclaw/issues/2072) Discord UX | High — adoption friction |
| **Configuration complexity** | [#1901](https://github.com/sipeed/picoclaw/issues/1901), [#2053](https://github.com/sipeed/picoclaw/issues/2053) API key handling | Medium — docs help, but UI gaps remain |
| **Local model setup friction** | [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio request | Medium — power user workaround exists |

### Positive Signals
- Active **self-hosting** community (Termux, Raspberry Pi, Docker)
- Strong **enterprise interest** (Feishu/Lark, Azure, AWS Bedrock)
- Appreciation for **security hardening** efforts (whitelisting, isolation)

---

## 8. Backlog Watch

### Issues needing maintainer attention (>7 days, high impact)

| Issue | Age | Risk | Action needed |
|-------|-----|------|---------------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio | 45 days | Community frustration | Decision: in-scope or document workaround? |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec tool path guard | 24 days | False security blocks | Review proposed regex fix |
| [#1666](https://github.com/sipeed/picoclaw/pull/1666) MCP Manager refactor | 11 days | Merge conflicts likely | Architecture review for v0.3.0? |
| [#1342](https://github.com/sipeed/picoclaw/pull/1342) OpenAI provider robustness | 17 days | Production reliability | Retry/backoff logic critical for scale |

### PR Review Bottleneck
31 open PRs suggest **review bandwidth constraint**. Priority queue:
1. Security fixes ([#2102](https://github.com/sipeed/picoclaw/pull/2102), [#2095](https://github.com/sipeed/picoclaw/pull/2095))
2. User-facing bugs ([#2103](https://github.com/sipeed/picoclaw/pull/2103), [#2099](https://github.com/sipeed/picoclaw/pull/2099))
3. Feature PRs with ready issues ([#1981](https://github.com/sipeed/picoclaw/pull/1981), [#2087](https://github.com/sipeed/picoclaw/pull/2087))

---

*Digest generated from GitHub activity 2026-03-27 to 2026-03-28. PicoClaw is a Sipeed project: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-28

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 45 PRs and 17 issues updated in 24 hours—indicative of an active, maturing AI agent platform. The project is experiencing **intense focus on provider diversification** (Anthropic alternatives) and **context/compression optimization** (three new research issues on memory and token efficiency). Security and container stability remain pain points, with one critical security audit closed today and multiple open issues around container lifecycle management. No new releases were cut, suggesting the team is accumulating changes for a larger milestone. The community is notably engaged on long-standing Issue #80 (multi-provider support), which has accumulated 53 reactions and 27 comments over two months.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today (23 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#1497](https://github.com/qwibitai/nanoclaw/pull/1497) | **Critical fix**: Prevent full message history from being sent to container agents | Fixes memory/performance regression where 200+ messages could be dumped into agent context |
| [#1280](https://github.com/qwibitai/nanoclaw/pull/1280) | Opt-in diagnostics via PostHog | Infrastructure for telemetry with privacy safeguards (git-gated conflict detection) |
| [#1401](https://github.com/qwibitai/nanoclaw/pull/1401) | Refresh stale agent-runner source cache | Developer experience: eliminates manual cache clearing on code changes |
| [#1444](https://github.com/qwibitai/nanoclaw/pull/1444) | Use main template for `isMain` groups | Corrects runtime registration to use proper admin context |
| [#1450](https://github.com/qwibitai/nanoclaw/pull/1450) / [#1452](https://github.com/qwibitai/nanoclaw/pull/1452) / [#1453](https://github.com/qwibitai/nanoclaw/pull/1453) | Improve task scripts agent instructions | Documentation consistency across main/global group templates |
| [#1372](https://github.com/qwibitai/nanoclaw/pull/1372) / [#1443](https://github.com/qwibitai/nanoclaw/pull/1443) | Fix diagnostics prompts never shown | UX: ensures setup/update flows actually present diagnostics options |
| [#1400](https://github.com/qwibitai/nanoclaw/pull/1400) / [#1468](https://github.com/qwibitai/nanoclaw/pull/1468) | Auth credentials guidance in CLAUDE.md | Reduces 401 errors from expired tokens |

**Key advancement**: The project is hardening its **diagnostics infrastructure** and **credential management patterns**—foundational work for enterprise adoption.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) — Multi-provider support (OpenCode, Codex, Gemini, etc.) | 👍 53, 💬 27 comments | **Existential concern**: Users report Anthropic shutting down subscriptions for "OpenClaw usage." This is the highest-engagement issue by far, representing **vendor lock-in anxiety** and business continuity risk. |
| [#1350](https://github.com/qwibitai/nanoclaw/issues/1350) — GitHub Copilot SDK backend | 👍 1, 💬 3 | Corporate-friendly alternative; taps into existing Microsoft relationships |
| [#1495](https://github.com/qwibitai/nanoclaw/issues/1495) / [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) / [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) — MemStack, RTK, Headroom research | 👍 0, 💬 1 each | **Emerging theme**: Three concurrent submissions on **context compression and persistent memory**—community is innovating around Claude's context window limitations |

**Underlying need**: The community is **de-risking Anthropic dependency** and **optimizing for token efficiency**—both signals of production scaling pain.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **Critical** (closed) | [#1483](https://github.com/qwibitai/nanoclaw/issues/1483) — Command injection & unbounded memory growth | Closed via security audit | Patched (details not public) |
| **High** | [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) — NanoClaw crashing when run inside container (kills own container) | **Open** | None identified |
| **High** | [#1482](https://github.com/qwibitai/nanoclaw/issues/1482) — Host marks container idle before runner enters IPC wait state | **Open** | None identified |
| **Medium** | [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) — Support running NanoClaw itself in Docker | **Open** | None identified |

**Stability assessment**: Container lifecycle management is **brittle**. The project assumes host-native execution; Docker-in-Docker and nested container scenarios are **unsupported and broken**. The critical security findings (command injection, memory growth) suggest attack surface in the container runtime that has been addressed but warrants monitoring.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| AWS Bedrock auth backend | [#1492](https://github.com/qwibitai/nanoclaw/issues/1492) | **High** | Enterprise demand; Anthropic SDK already supports it |
| Google Vertex AI auth | [#478](https://github.com/qwibitai/nanoclaw/pull/478) | **High** | PR exists, needs review; GCP enterprise market |
| GitHub Copilot SDK | [#1350](https://github.com/qwibitai/nanoclaw/issues/1350) | **Medium** | No PR yet; Microsoft ecosystem play |
| Multi-provider abstraction | [#80](https://github.com/qwibitai/nanoclaw/issues/80) | **Medium-Low** | Architectural change; 2 months old, high engagement but complex |
| Image vision + Ollama + compact skills | [#1496](https://github.com/qwibitai/nanoclaw/pull/1496) | **High** | PR submitted today; multimodal is competitive table stakes |
| Google Workspace CLI skill | [#1491](https://github.com/qwibitai/nanoclaw/pull/1491) | **High** | PR submitted today; enterprise SaaS integration |
| Discord threads + approval buttons | [#311](https://github.com/qwibitai/nanoclaw/pull/311) | **Medium** | 5+ weeks old, needs review; community feature |

**Prediction**: The next release will likely emphasize **enterprise auth flexibility** (Bedrock, Vertex) and **multimodal capabilities** (vision, local LLMs via Ollama).

---

## 7. User Feedback Summary

### Pain Points
- **Vendor lock-in**: "Anthropic is already shutting down peoples' subs for using them with OpenClaw" — [#80](https://github.com/qwibitai/nanoclaw/issues/80)
- **Security anxiety**: Public forks expose sensitive configurations; no private fork guidance — [#1424](https://github.com/qwibitai/nanoclaw/issues/1424)
- **Container fragility**: Nested/containerized deployment breaks catastrophically — [#1487](https://github.com/qwibitai/nanoclaw/issues/1487), [#1485](https://github.com/qwibitai/nanoclaw/issues/1485)
- **Supply chain trust**: "curl install scripts directly on the host os, this is.. quite nasty" — [#1485](https://github.com/qwibitai/nanoclaw/issues/1485)

### Use Cases Emerging
- **Healthcare deployments** (home user systems) — [#1424](https://github.com/qwibitai/nanoclaw/issues/1424)
- **Multi-group strict isolation** (no single container with vault + web + external comms) — [#1490](https://github.com/qwibitai/nanoclaw/issues/1490)
- **Local/edge AI** (Ollama integration) — [#1496](https://github.com/qwibitai/nanoclaw/pull/1496)

### Satisfaction Signals
- Active skill ecosystem (WhatsApp Baileys channel merged — [#1473](https://github.com/qwibitai/nanoclaw/issues/1473))
- Strong documentation iteration (multiple CLAUDE.md improvements)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) Multi-provider support | ~7 weeks | **Strategic** | Architecture decision; 53 reactions indicate community priority |
| [#478](https://github.com/qwibitai/nanoclaw/pull/478) Google Vertex AI | ~4 weeks | **Competitive** | Review and merge for GCP market |
| [#311](https://github.com/qwibitai/nanoclaw/pull/311) Discord threads + approval | ~5 weeks | **Community** | Review; blocks better Discord UX |
| [#363](https://github.com/qwibitai/nanoclaw/pull/363) `/create-skill` meta-skill | ~5 weeks | **Ecosystem** | Blocked on quality gate design; unlocks contributor growth |
| [#846](https://github.com/qwibitai/nanoclaw/pull/846) GitHub integration skill | ~3 weeks | **Developer adoption** | Review; GH CLI integration is high-value |

**Maintainer attention recommended**: The multi-provider abstraction (#80) is becoming a **reputation risk** as Anthropic enforcement stories circulate. A clear roadmap communication or architectural RFC would reduce uncertainty.

---

*Digest generated from 45 PRs and 17 issues updated 2026-03-27.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-28

## 1. Today's Overview

NullClaw shows **high development velocity** with 37 PRs updated in the last 24 hours against only 5 issues, indicating an active push toward stability and feature completeness. The project is heavily focused on **channel reliability improvements**—particularly for QQ, Lark, Discord, and Telegram—with multiple PRs addressing message delivery failures, retry logic, and debouncing. Documentation efforts are substantial, with bilingual (EN/CN) guides being actively maintained. No new releases were cut today, suggesting the team is accumulating changes for a larger version bump. The contributor `manelsen` dominates recent activity, accounting for ~80% of PRs, which may indicate either a core maintainer sprint or potential bus factor concerns.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Title | Author | Significance |
|:---|:---|:---|:---|
| [#695](https://github.com/nullclaw/nullclaw/pull/695) | docs: add reliability and model fallbacks section | manelsen | **User enablement**: Documents `fallback_providers` and `model_fallbacks` configs, directly addressing user confusion in #683 |
| [#713](https://github.com/nullclaw/nullclaw/pull/713) | docs: refine navigation and runtime guidance | telagod | **UX improvement**: Restructures docs for clearer install/operations paths; clarifies auth boundaries for pairing and A2A discovery |

### Key Advances in Open PRs

| PR | Feature Area | Progress Indicator |
|:---|:---|:---|
| [#730](https://github.com/nullclaw/nullclaw/pull/730) + [#731](https://github.com/nullclaw/nullclaw/pull/731) | **Durable message delivery** | Production-hardening: Adds persistent outbox + retry logic for outbound messages—critical for enterprise reliability |
| [#732](https://github.com/nullclaw/nullclaw/pull/732) | QQ channel stability | Fixes #722: Implements fallback from reply-bound to plain send when `msg_id` expires during slow responses |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) | **Knowledge Graph memory** | Major feature: SQLite-backed KG with recursive CTEs for entity-relation traversal—positions NullClaw for complex reasoning tasks |
| [#716](https://github.com/nullclaw/nullclaw/pull/716) | Calculator tool | 20-operation math tool in Zig; expands agent capabilities for analytical workflows |
| [#709](https://github.com/nullclaw/nullclaw/pull/709) | Provider flexibility | Adds `session_id` → `user` field mapping and `extra_body_params` for OpenAI-compatible APIs |

---

## 4. Community Hot Topics

### Most Active Discussion

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#311](https://github.com/nullclaw/nullclaw/issues/311) — [CLOSED] Telegram `/reasoning on` still not showing reasoning | **9 comments** | **Reopened frustration**: User `nordlau` explicitly references competitor "OpenClaw" as having this debugging feature; closed without resolution suggests either technical limitation or prioritization mismatch. Underlying need: **observability/tracing for agent reasoning** in production deployments. |
| 2 | [#722](https://github.com/nullclaw/nullclaw/issues/722) — QQ disconnects on slow responses | 1 comment | Production stability concern for Chinese market; fix PR #732 already drafted—rapid response indicates maintainer prioritization of QQ reliability. |

### Emerging Standards Alignment

| Item | Significance |
|:---|:---|
| [#734](https://github.com/nullclaw/nullclaw/issues/734) — Support `.well-known` URI for skills | **Ecosystem positioning**: Aligns with Cloudflare (internal), Vercel (shipped v1.4.6), and VS Code (intent). Signals NullClaw's need to participate in emerging Agent Skills standardization or risk interoperability gaps. |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#722](https://github.com/nullclaw/nullclaw/issues/722) / [#732](https://github.com/nullclaw/nullclaw/pull/732) | QQ disconnects during time-consuming tasks; messages lost | **PR ready** — implements retry without `msg_id` |
| **High** | [#694](https://github.com/nullclaw/nullclaw/pull/694) | Telegram duplicate messages + Bifrost compatibility + tool cache staleness | **PR open** — bundled fix for three reported issues (#680, #682, #684) |
| **Medium** | [#719](https://github.com/nullclaw/nullclaw/pull/719) | Discord scheduled DM delivery targets wrong channel | **PR open** — adds `delivery_chat_id` to preserve correct target |
| **Medium** | [#311](https://github.com/nullclaw/nullclaw/issues/311) | Telegram reasoning visibility broken (regression from #283) | **Closed unresolved** — risk of user churn to competitors |
| **Low** | [#705](https://github.com/nullclaw/nullclaw/pull/705) | Routing fallback incorrectly uses first subagent instead of "main" | **PR open** — edge case in multi-agent configs |

### Stability Investments (Proactive)

| PR | Description |
|:---|:---|
| [#730](https://github.com/nullclaw/nullclaw/pull/730) | **Durable outbox**: Messages survive process restarts |
| [#731](https://github.com/nullclaw/nullclaw/pull/731) | **Transient failure classification**: Prevents infinite retry loops |
| [#676](https://github.com/nullclaw/nullclaw/pull/676) | **Inbound debouncing**: 3000ms default for Telegram/Discord/CLI rapid-fire |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **`.well-known` skills discovery** | [#734](https://github.com/nullclaw/nullclaw/issues/734) | **High** | Standards momentum (Cloudflare, Vercel, VS Code); low implementation cost |
| **Knowledge Graph memory backend** | [#712](https://github.com/nullclaw/nullclaw/pull/712) | **High** | PR already open; major differentiator for complex agents |
| **Calculator tool** | [#716](https://github.com/nullclaw/nullclaw/pull/716) | **Medium-High** | PR open; simple addition, expands tool coverage |
| **Reasoning visibility/debugging** | [#311](https://github.com/nullclaw/nullclaw/issues/311) | **Medium** | User demand clear, but previously closed; may require architectural changes |
| **Environment variable interpolation in config** | [#706](https://github.com/nullclaw/nullclaw/pull/706) | **Low** | Explicitly documented as *not supported*; security/scope decision |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Message reliability in Chinese channels** | QQ (#722), WeChat docs gap (#718) | 🔴 Critical |
| **Configuration complexity** | #683 (fallbacks), #697 (env vars), #659 (reasoning enablement) | 🟡 Moderate |
| **Debugging observability** | #311 (reasoning visibility), #703 (heartbeat logging) | 🟡 Moderate |
| **Competitive feature gaps** | Explicit OpenClaw comparison in #311 | 🟡 Moderate |

### Use Cases Emerging

- **Enterprise deployments**: Durable outbox (#730) and retry logic (#731) suggest production-scale users
- **Multi-channel operations**: Simultaneous QQ/Discord/Telegram/WeChat/Lark support indicates platform-agnostic agent hosting
- **A2A/inter-agent protocols**: Documentation mentions "A2A discovery" (#713)

### Satisfaction Signals

- Rapid PR response to QQ issue (#722 → #732 in ~24h)
- Comprehensive bilingual documentation maintenance
- Proactive reliability engineering (outbox, debouncing, retry classification)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#311](https://github.com/nullclaw/nullclaw/issues/311) — Telegram reasoning | 23 days | **User churn** | Reopen or document technical blocker; competitor comparison is explicit |
| [#659](https://github.com/nullclaw/nullclaw/issues/659) — Custom OpenAI reasoning | 8 days | Configuration UX | Merge with #311 into "reasoning observability" epic |
| [#676](https://github.com/nullclaw/nullclaw/pull/676) — Inbound debouncing | 7 days | Ready to merge | Bilingual PR, addresses #618—stale despite completeness |
| [#716](https://github.com/nullclaw/nullclaw/pull/716) — Calculator tool | 3 days | Feature completeness | Simple tool PR; review queue depth may be blocking |

### Maintainer Attention Required

- **PR review bandwidth**: 34 open PRs vs. 3 closed suggests either high quality bar or reviewer capacity constraint
- **Standards participation**: #734 (`.well-known`) needs architectural decision on Agent Skills alignment
- **Technical debt**: #733 "casual refractor bud" — unclear scope, may need clarification or closure

---

*Digest generated from GitHub activity 2026-03-27 to 2026-03-28. Data source: nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-28

## 1. Today's Overview

IronClaw shows **high development velocity** with 47 PRs updated in 24 hours (34 open, 13 merged/closed) and 20 active issues. The project released **v0.23.0** with complete multi-tenant isolation, indicating production-readiness improvements. Security remains a top priority with multiple critical vulnerabilities identified and addressed through automated CI review. The codebase is undergoing significant architectural evolution with two major engine refactorings in progress (unified execution engine v2 and DB-backed multi-tenant system). Community engagement is active with users reporting Telegram bot integration issues and requesting better local LLM support.

---

## 2. Releases

### ironclaw-v0.23.0 (2026-03-27)
🔗 https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.23.0

| Category | Details |
|----------|---------|
| **Major Addition** | **Complete multi-tenant isolation — phases 2–4** ([#1614](https://github.com/nearai/ironclaw/pull/1614)) |
| **Fixes** | Routine delete name recovery after failed update fallback ([#1108](https://github.com/nearai/ironclaw/pull/1108)); MCP 202 Accepted handling |

**Migration Notes:** This release completes the multi-tenant isolation architecture. Users upgrading from earlier versions should verify workspace isolation behaviors and review any custom authentication flows against the new DB-backed user management system.

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1714](https://github.com/nearai/ironclaw/pull/1714) | ShadowCorp-Dev | Fix type erasure in `process_tool_result()` — replaced `impl Display` with concrete `Error` type | **Critical bug fix** — enables proper error pattern matching |
| [#1703](https://github.com/nearai/ironclaw/pull/1703) | ironclaw-ci[bot] | Staging promotion batch (2026-03-27 08:13 UTC) | CI/CD pipeline |
| [#632](https://github.com/nearai/ironclaw/pull/632) | stephensong | Thread management: cherry-pick, move, delete messages | **UX enhancement** — cross-thread message operations |
| [#1708](https://github.com/nearai/ironclaw/pull/1708) | *closed via CI* | Inconsistent error message format fix | Code quality |
| [#1707](https://github.com/nearai/ironclaw/pull/1707) | *closed via CI* | LazyLock duplication elimination | Performance |
| [#1445](https://github.com/nearai/ironclaw/pull/1445) | *closed via CI* | OAuth callback rate limiting (LOW priority) | Security hardening |
| [#1443](https://github.com/nearai/ironclaw/pull/1443) | *closed via CI* | Legacy OAuth state validation tightening | Security |
| [#1442](https://github.com/nearai/ironclaw/pull/1442) | *closed via CI* | Token exchange type safety | Type system |
| [#1670](https://github.com/nearai/ironclaw/pull/1670) | *closed via CI* | Truncation count accumulation fix | Stability |
| [#1706](https://github.com/nearai/ironclaw/pull/1706) | *closed via CI* | Workspace I/O hot path optimization | Performance |
| [#1705](https://github.com/nearai/ironclaw/pull/1705) | *closed via CI* | Type erasure fix (superseded by #1714) | Critical security |
| [#1669](https://github.com/nearai/ironclaw/pull/1669) | *closed via CI* | UTF-8 panic prevention | Stability |
| [#1686](https://github.com/nearai/ironclaw/pull/1686) | *closed via CI* | Excessive debug logging reduction | Performance |

**Key Advances:**
- **Security hardening**: Multiple OAuth and authentication fixes closed
- **Type safety**: Critical fix for error handling in tool processing
- **Performance**: Hot path optimizations and logging reduction
- **UX**: Thread management features merged

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Status | Comments | Topic | Underlying Need |
|:---|:---|:---:|:---|:---|
| [#1676](https://github.com/nearai/ironclaw/issues/1676) | 🔴 OPEN | 7 | HTTP tool routine errors with Telegram bot | **Reliable external service integration** — users need stable polling mechanisms for messaging platforms |
| [#1702](https://github.com/nearai/ironclaw/issues/1702) | 🔴 OPEN | 1 | Database error details leaked to API | **Security hygiene** — production-safe error handling |
| [#1487](https://github.com/nearai/ironclaw/issues/1487) | 🔴 OPEN | 1 | Incomplete fallback for non-existent approval threads | **Robust approval workflows** — graceful degradation |
| [#1486](https://github.com/nearai/ironclaw/issues/1486) | 🔴 OPEN | 1 | TOCTOU race condition in approval threads | **Concurrency safety** — multi-user scenario integrity |
| [#1485](https://github.com/nearai/ironclaw/issues/1485) | 🔴 OPEN | 1 | Cross-channel approval thread hijacking | **Authorization boundaries** — strict channel isolation |

**Analysis:** The 7-comment [#1676](https://github.com/nearai/ironclaw/issues/1676) reveals a **competitive pressure point** — users compare IronClaw unfavorably to "OpenClaw" for Telegram bot reliability. The clustered approval-thread security issues (#1485-#1487) suggest this subsystem needs architectural review. Most engagement centers on **integration reliability** and **security boundaries**.

### Major Open PRs (Architectural)

| PR | Scope | Size | Significance |
|:---|:---|:---:|:---|
| [#1557](https://github.com/nearai/ironclaw/pull/1557) | Unified execution engine v2 | XL | 7,275 lines — replaces ~10 abstractions with 5 primitives |
| [#1626](https://github.com/nearai/ironclaw/pull/1626) | DB-backed multi-tenant isolation | XL | Complete auth system replacement |
| [#1719](https://github.com/nearai/ironclaw/pull/1719) | API error sanitization | L | Production security hardening |

---

## 5. Bugs & Stability

### Critical & High Severity (Open)

| Issue | Severity | Status | Fix PR | Description |
|:---|:---:|:---|:---|:---|
| [#1485](https://github.com/nearai/ironclaw/issues/1485) | **CRITICAL** (100%) | 🔴 OPEN | [#1590](https://github.com/nearai/ironclaw/pull/1590) | Cross-channel approval thread hijacking — authorization bypass |
| [#1486](https://github.com/nearai/ironclaw/issues/1486) | **CRITICAL** (95%) | 🔴 OPEN | — | TOCTOU race condition in approval thread resolution |
| [#1705](https://github.com/nearai/ironclaw/issues/1705) | **CRITICAL** (95%) | 🟢 CLOSED | [#1714](https://github.com/nearai/ironclaw/pull/1714) | Type erasure in `process_tool_result()` — fixed |
| [#1669](https://github.com/nearai/ironclaw/issues/1669) | **CRITICAL** (95%) | 🟢 CLOSED | [#1688](https://github.com/nearai/ironclaw/pull/1688) | UTF-8 panic in `is_recoverable_tool_call_segment()` — fixed |
| [#1702](https://github.com/nearai/ironclaw/issues/1702) | **HIGH** (75%) | 🔴 OPEN | [#1719](https://github.com/nearai/ironclaw/pull/1719) | Database error details leaked to API clients |
| [#1487](https://github.com/nearai/ironclaw/issues/1487) | **HIGH** (70%) | 🔴 OPEN | — | Incomplete fallback logic for non-existent approval threads |
| [#1676](https://github.com/nearai/ironclaw/issues/1676) | **HIGH** (user-reported) | 🔴 OPEN | — | HTTP tool routine errors breaking Telegram bot functionality |

### Stability Assessment
- **Good**: Automated CI review catching critical issues pre-merge; rapid fix turnaround (type erasure, UTF-8 panics closed same day)
- **Concern**: Three critical approval-thread security issues remain open for 7+ days; [#1590](https://github.com/nearai/ironclaw/pull/1590) addresses #1485 but unmerged
- **Risk**: User-reported integration failures (#1676) lack assigned fix PR

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Category | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| [#1717](https://github.com/nearai/ironclaw/issues/1717) | `.well-known` URI skills standard | **High** | Industry momentum (Cloudflare, Vercel, VS Code); minimal implementation cost |
| [#1712](https://github.com/nearai/ironclaw/issues/1712) | Secure financial execution layer | **Medium** | Strategic for NEAR ecosystem; depends on #1622 intents extension; complex scope |
| [#1709](https://github.com/nearai/ironclaw/issues/1709) | Inference Model Providers UX | **High** | Low-risk UI/validation improvements; clear user pain points |
| [#1696](https://github.com/nearai/ironclaw/pull/1696) | `LLM_ALLOW_LOCAL_NETWORK` | **High** | PR open; enables self-hosted LLMs (Ollama, vLLM) — strong user demand |
| [#1697](https://github.com/nearai/ironclaw/issues/1697) | Codex base model support | **Medium** | Documentation/guidance issue; may need provider-specific handling |
| [#1691](https://github.com/nearai/ironclaw/issues/1691) | OpenAPI streaming mode | **Medium** | Protocol compatibility; parsing issue identified |

**Emerging Themes:**
1. **Local/self-hosted LLM support** — [#1696](https://github.com/nearai/ironclaw/pull/1696) addresses immediate need; broader LAN networking features likely
2. **Skills ecosystem interoperability** — `.well-known` standard adoption positions IronClaw in emerging agent skills market
3. **Financial/crypto capabilities** — [#1712](https://github.com/nearai/ironclaw/issues/1712) signals NEAR blockchain integration deepening

---

## 7. User Feedback Summary

### Pain Points

| Issue | User | Core Problem | Severity |
|:---|:---|:---|:---:|
| [#1676](https://github.com/nearai/ironclaw/issues/1676) | jamieduk | **Telegram bot polling unreliable** — "still fails due to tool issue" vs. "OpenClaw knows how to do this perfect from day 1" | 🔴 High |
| [#1697](https://github.com/nearai/ironclaw/issues/1697) | YANGTUOMAO | **Model configuration confusion** — Codex authorization works but model naming unclear | 🟡 Medium |
| [#1709](https://github.com/nearai/ironclaw/issues/1709) | sunglow666 | **Settings validation gaps** — Base URL accepts `not-a-url`; no provider testing | 🟡 Medium |
| [#1691](https://github.com/nearai/ironclaw/issues/1691) | whg903 | **Streaming incompatibility** — OpenAI-compatible API fails with SSE format | 🟡 Medium |

### Positive Signals
- Users actively upgrading: "Updated ironclaw again today" (#1676) — indicates engagement despite frustration
- Strong security culture: Automated CI review with severity scoring builds trust
- Multi-tenant release (#1614) suggests enterprise/production use cases maturing

### Satisfaction Gap
**Integration reliability** is the dominant frustration. Users expect messaging platform integrations (Telegram) to work robustly; tool-level HTTP failures break trust in autonomous agent capabilities.

---

## 8. Backlog Watch

### Long-Running Critical Issues Needing Attention

| Issue | Age | Status | Risk | Action Needed |
|:---|:---:|:---|:---|:---|
| [#1485](https://github.com/nearai/ironclaw/issues/1485) | 7 days | CRITICAL open | Authorization bypass exploit | Merge [#1590](https://github.com/nearai/ironclaw/pull/1590) or prioritize alternative fix |
| [#1486](https://github.com/nearai/ironclaw/issues/1486) | 7 days | CRITICAL open | Race condition | Assign owner; may need #1590 extension |
| [#1487](https://github.com/nearai/ironclaw/issues/1487) | 7 days | HIGH open | Graceful degradation gap | Design fallback behavior specification |
| [#1557](https://github.com/nearai/ironclaw/pull/1557) | 6 days | XL PR open | Architecture divergence | Review for merge readiness; 7,275 lines needs thorough review |
| [#1626](https://github.com/nearai/ironclaw/pull/1626) | 4 days | XL PR open | Release blocker for v0.23.x | Coordinate with v0.23.0 multi-tenant features |

### Maintainer Attention Required
- **Security triage**: Three approval-thread issues (#1485-#1487) cluster suggests systemic review needed
- **Engine architecture**: Two competing XL PRs (#1557, #1626) risk merge conflicts; coordination advised
- **User support**: [#1676](https://github.com/nearai/ironclaw/issues/1676) needs assignment — only unassigned high-engagement issue

---

## Project Health Summary

| Metric | Assessment |
|:---|:---|
| **Velocity** | 🟢 Excellent — 47 PRs, active CI automation |
| **Security** | 🟡 Good detection, ⚠️ remediation lag on criticals |
| **Stability** | 🟢 Rapid bug fixes; 🟡 integration reliability gaps |
| **Community** | 🟢 Active engagement; 🟡 competitive pressure visible |
| **Architecture** | 🟡 Major refactorings in flight — risk of instability |

**Overall**: IronClaw is in **active growth phase** with strong engineering practices but needs accelerated security remediation and integration reliability investment to maintain user trust against alternatives.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-28

## 1. Today's Overview

LobsterAI shows **high development velocity** with 50 PRs and 26 issues updated in the last 24 hours, indicating active iteration on the NetEase Youdao personal AI assistant. The project is in a **stabilization phase** following recent releases, with zero new versions published today but substantial bug-fixing activity (20 merged/closed PRs vs. 30 open). Critical stability issues dominate community concerns—particularly around **task lifecycle management**, **MCP/Toolchain reliability**, and **model gateway resilience**. The contributor base appears responsive, with same-day fixes for reported issues like shortcut configuration (#983→#985) and macOS modifier key corrections (#973→#980). However, the high open-to-closed ratio for issues (23:3) suggests accumulating technical debt that may require focused sprints.

---

## 2. Releases

**No new releases** published today. The latest stable version remains **2026.3.26** (per issue #953 reference), with users reporting regressions introduced in this version.

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total, key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#888](https://github.com/netease-youdao/LobsterAI/pull/888) | liuzhq1986 | **Performance**: Stream output optimization, fixes Intel Mac main process blocking via SQLite write throttling (250ms) and IPC throttling (200ms) | Critical for macOS users experiencing UI freezes |
| [#832](https://github.com/netease-youdao/LobsterAI/pull/832) | liuzhq1986 | **UX**: Add conversation index overlay for quick turn navigation | Improves long conversation traversal |
| [#988](https://github.com/netease-youdao/LobsterAI/pull/988) / [#987](https://github.com/netease-youdao/LobsterAI/pull/987) | liuzhq1986 | **UI Polish**: Refactor message navigation to mini-track style | Visual/UX refinement |
| [#985](https://github.com/netease-youdao/LobsterAI/pull/985) | blackberrier | **Bug Fix**: Restore "press new key combination" shortcut editing capability | Fixes broken documented feature |
| [#162](https://github.com/netease-youdao/LobsterAI/pull/162) | Doge2077 | **Config**: Multi-custom provider configuration support | Foundation for enterprise multi-tenant scenarios |
| [#970](https://github.com/netease-youdao/LobsterAI/pull/970) | winsan-zhang | **Stability**: Defer gateway client exposure until connect handshake | Prevents race conditions in OpenClaw gateway |
| [#966](https://github.com/netease-youdao/LobsterAI/pull/966) | wulei05 | **UX**: Show hint when model returns thinking-only response | Addresses silent failures with reasoning models |

### Active Development (Open PRs with momentum)

- [#939](https://github.com/netease-youdao/LobsterAI/pull/939): Code block collapse/expand + line number toggle — near completion
- [#980](https://github.com/netease-youdao/LobsterAI/pull/980): macOS Cmd key shortcut fix — community-contributed, addresses platform convention gap
- [#978](https://github.com/netease-youdao/LobsterAI/pull/978): **Chat folder organization** — major UX feature for conversation management
- [#557](https://github.com/netease-youdao/LobsterAI/pull/557): Attachment `@mention` reference system — aligns with Cursor/Windsurf interaction patterns

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Core Problem | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 2 | 1 | **Task stop/delete doesn't actually terminate execution**; zombie tasks cause API rate limits and "task cross-contamination" | Reliable task lifecycle management for autonomous agent execution |
| [#976](https://github.com/netease-youdao/LobsterAI/issues/976) | 1 | 0 | Dual timeout prompts during network disconnection | Graceful offline degradation with clear UX |
| [#961](https://github.com/netease-youdao/LobsterAI/issues/961) | 1 | 0 | **MCP Daemon fails to start** (ports 53699/6947); custom MCP services broken | Stable local tool ecosystem for power users |
| [#844](https://github.com/netease-youdao/LobsterAI/issues/844) | 1 | 0 | *(Closed)* Model switching triggers OpenClaw gateway restart with slow recovery | Seamless model hot-swapping without service interruption |

### Analysis

The top-voted issue (#953) reveals a **fundamental reliability gap**: LobsterAI's agent task orchestration lacks proper process isolation. Users experience "task cross-contamination" where terminated tasks persist and interfere with new executions—critical for a product positioning itself as a "full-scenario personal assistant" capable of autonomous operation.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **P0-Critical** | [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | Task termination failures; zombie processes consume resources, cause API rate limiting, and enable task "cross-contamination" | **No fix PR identified** |
| **P0-Critical** | [#859](https://github.com/netease-youdao/LobsterAI/issues/859) | Invalid config causes **infinite Gateway crash-restart loop** (>10 min until manual intervention) | **No fix PR identified** |
| **P1-High** | [#961](https://github.com/netease-youdao/LobsterAI/issues/961) | MCP Daemon startup failure breaks entire tool chain for custom MCP services | **No fix PR identified** |
| **P1-High** | [#972](https://github.com/netease-youdao/LobsterAI/issues/972) | Qwen model disconnection triggers infinite "AI engine starting gateway" popup loop; recovery fails even after reconnection | **No fix PR identified** |
| **P1-High** | [#981](https://github.com/netease-youdao/LobsterAI/issues/981) | Web Search service fails to start on app launch | **No fix PR identified** |
| **P2-Medium** | [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | macOS shortcuts show Ctrl instead of Cmd | Fixed by [#980](https://github.com/netease-youdao/LobsterAI/pull/980) |
| **P2-Medium** | [#983](https://github.com/netease-youdao/LobsterAI/issues/983) | "Press new key combination" shortcut editing non-functional | Fixed by [#985](https://github.com/netease-youdao/LobsterAI/pull/985) |
| **P2-Medium** | [#982](https://github.com/netease-youdao/LobsterAI/issues/982) | Preset Agents not internationalized (remain Chinese in English mode) | **No fix PR identified** |

### Stability Assessment

**Concerning pattern**: Multiple infinite-loop failure modes (#859, #972) and process isolation failures (#953) suggest architectural gaps in error handling and service supervision. The Gateway component appears particularly fragile—model switching, config validation errors, and connection drops all trigger unrecoverable states.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Predicted Priority | Rationale |
|:---|:---|:---|:---|
| [#964](https://github.com/netease-youdao/LobsterAI/issues/964) | **Multi-Agent architecture** with isolated contexts, personas, and IM accounts | **High** | Directly addresses product scalability; aligns with "full-scenario assistant" positioning; competitor parity (Claude, GPTs) |
| [#943](https://github.com/netease-youdao/LobsterAI/issues/943) | Model fallback/priority system for availability | **High** | Reliability enhancement; requested by enterprise user with IM integration needs |
| [#947](https://github.com/netease-youdao/LobsterAI/issues/947) | IM-specific model configuration (priority, rate limits, token quotas) | **Medium-High** | Operational necessity for team deployments |
| [#948](https://github.com/netease-youdao/LobsterAI/issues/948) | Decouple UI chat model from IM bot model | **Medium** | Prevents debugging from breaking production IM flows |
| [#949](https://github.com/netease-youdao/LobsterAI/issues/949) | IM model selection with fallback list | **Medium** | User control over model routing |

**Emerging theme**: Enterprise/team deployment readiness—model governance, usage quotas, and operational isolation are becoming explicit requirements.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Evidence | Severity |
|:---|:---|:---:|
| **Task reliability** | "Stop task still opens browser search"; "deleted tasks run in background"; "task cross-contamination" | Critical |
| **Gateway fragility** | "Infinite restart loop"; "AI engine starting gateway" popup spam; "10+ minutes until manual intervention" | Critical |
| **MCP/Tool ecosystem** | "Custom MCP services all broken"; "Daemon not starting"; "401 unauthorized on Tavily" | High |
| **IM integration UX** | "WeChat replies don't sync progressively"; "wait for full completion then message flood" | Medium-High |
| **Configuration complexity** | "Not a software developer, don't understand"; "what can I do?" (#961) | Medium |

### Satisfaction Indicators

- **Positive**: Rapid same-day fixes for clear UX bugs (shortcuts, macOS conventions)
- **Negative**: Core reliability issues persisting across versions; user resorting to "uninstall and install old version" (#962)

### Use Case Tensions

- **Power users**: Need stable MCP toolchain, custom model integration, multi-agent isolation
- **Casual users**: Need resilient defaults, clear error messages, graceful degradation

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#859](https://github.com/netease-youdao/LobsterAI/issues/859) | 2 days | **Infinite loop DoS vector** with public exploit path (injection via model ID) | Security review + circuit breaker implementation |
| [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 1 day | Core product promise failure (autonomous task execution) | Task supervisor redesign with process isolation |
| [#557](https://github.com/netease-youdao/LobsterAI/pull/557) | 7 days | High-value UX feature (@mention attachments) at risk of bit-rot | Maintainer review for merge |
| [#610](https://github.com/netease-youdao/LobsterAI/pull/610) | 7 days | Major input system refactor; conflicts likely with other Cowork PRs | Architecture decision + rebase coordination |
| [#690](https://github.com/netease-youdao/LobsterAI/pull/690) | 5 days | Windows focus policy fix; small but high-impact polish | Final test + merge |

---

## Project Health Snapshot

| Metric | Assessment |
|:---|:---|
| **Velocity** | ⬆️ High (50 PRs, 26 issues in 24h) |
| **Responsiveness** | ⬆️ Strong (same-day fixes for UX issues) |
| **Stability** | ⬇️ **At risk** (multiple P0 infinite-loop bugs, no fixes yet) |
| **Community** | ⬆️ Active engagement, clear feature requests |
| **Technical Debt** | ⚠️ Accumulating (23 open vs. 3 closed issues) |

**Recommendation**: Prioritize P0 stability fixes (#953, #859, #972) over new features. The multi-agent architecture (#964) is strategically important but should follow architectural hardening of the task execution layer.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-28

**Repository:** [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

## 1. Today's Overview

TinyClaw shows **minimal surface activity** with zero new issues and no releases in the past 24 hours. However, **2 PRs were merged/closed**, indicating continued backend development momentum. The project appears to be in a **consolidation phase**—recent work focuses on UI/UX refinements and core infrastructure (task management, navigation architecture) rather than new feature expansion. No open issues or active PRs suggests either a stable codebase or reduced community engagement. Overall project health appears **steady but quiet**, with development driven primarily by core contributor `jlia0`.

---

## 2. Releases

**No new releases.**  
The project has no tagged versions published recently. Users tracking stable releases should monitor the main branch directly.

---

## 3. Project Progress

### Merged/Closed PRs (2)

| PR | Description | Impact |
|:---|:---|:---|
| [#249](https://github.com/TinyAGI/tinyclaw/pull/249) | **refactor(office): reorganize office layout with topbar navigation** | Major UI architecture change—moves from sidebar-dominant to topbar navigation, introduces `(office)` route grouping, adds agent character interactivity |
| [#252](https://github.com/TinyAGI/tinyclaw/pull/252) | **feat(tasks): linear-style task/project management with comments** | Significant feature addition—SQLite-backed task system with Linear-style ID generation (SYS-1 format), comment threads, shadcn Sidebar integration |

**Key Advances:**
- **Workspace modernization**: Shift toward professional project management UX (Linear-inspired)
- **Data persistence**: New SQLite layer for tasks/projects indicates preparation for production-grade state management
- **Component standardization**: Adoption of shadcn/ui components suggests design system maturation

---

## 4. Community Hot Topics

**No active community discussion detected.**

| Metric | Value |
|:---|:---|
| Open issues with comments | 0 |
| PRs with >0 reactions | 0 |
| Active discussions | None |

**Analysis:** Both merged PRs (#249, #252) had **zero community engagement** (no comments, no reactions). This indicates:
- Development is **maintainer-driven** rather than community-driven
- Changes may lack external validation before merge
- Risk of **silent regressions** if user feedback loops are absent

**Underlying need:** The project would benefit from RFC-style discussions for architectural changes (like the navigation refactor) to ensure community alignment.

---

## 5. Bugs & Stability

**No bug reports detected today.**

| Severity | Count | Details |
|:---|:---|:---|
| Critical (crash/data loss) | 0 | — |
| High (feature broken) | 0 | — |
| Medium (workaround exists) | 0 | — |
| Low (cosmetic) | 0 | — |

**Stability note:** The navigation refactor (#249) and new SQLite layer (#252) introduce **untested surface area**. Without issue reports, status is unknown—recommend monitoring for:
- Route resolution errors from `(office)` layout group
- Database migration failures on existing installs
- Sidebar state synchronization bugs

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests today.**

**Inferred roadmap from recent merges:**

| Likely Near-Term | Evidence |
|:---|:---|
| Task management GA | #252 provides foundation; expect assignments, due dates, notifications next |
| Mobile-responsive office UI | Topbar refactor (#249) typically precedes responsive breakpoints |
| Agent-to-task linking | "agent characters clickable" in #249 + task system in #252 suggests integration |
| Multi-workspace support | Linear-style IDs (SYS-*) imply namespace preparation |

**Prediction:** Next release likely includes **task assignment to agents** and **real-time comment notifications**.

---

## 7. User Feedback Summary

**No direct user feedback available** (zero issues, zero PR comments).

**Inferred pain points from implementation choices:**

| Observation | Implied User Need |
|:---|:---|
| Linear-style task system built from scratch | Users want familiar, proven PM UX; existing solutions inadequate |
| SQLite persistence added | Need for offline-capable, local-first operation |
| Navigation reorganized | Information architecture was confusing; discoverability issues |
| Agent characters made clickable | Users need quick agent context access without navigation |

**Satisfaction gap:** Heavy investment in UI/UX suggests user retention concerns, but lack of feedback channels prevents validation.

---

## 8. Backlog Watch

**No stale items requiring attention** (empty issue/PR backlog).

| Status | Risk Assessment |
|:---|:---|
| Zero open PRs | ⚠️ Unusual—may indicate: (a) strict merge policy, (b) low contribution volume, or (c) maintainer self-merging without review |
| Zero open issues | ⚠️ Concerning for active project—suggests either exceptional stability or usage barriers preventing bug reports |

**Recommendations for maintainers:**
- Enable GitHub Discussions to capture usage questions outside issues
- Add issue templates to lower reporting friction
- Consider publishing roadmap to stimulate community input

---

## Digest Summary

| Metric | 2026-03-28 |
|:---|:---|
| Development velocity | Moderate (2 PRs merged) |
| Community health | ⚠️ Concerning (zero engagement) |
| Release readiness | Unknown (no versioning) |
| Technical risk | Elevated (new SQLite + navigation layers, untested) |

**Overall:** TinyClaw is **technically progressing** but **socially stagnant**. The codebase is gaining sophisticated features (Linear-style PM, modern UI), but without community feedback loops, direction may diverge from user needs. Recommend immediate focus on opening feedback channels before next major release.

---

*Generated from GitHub data. Links: [Repo](https://github.com/TinyAGI/tinyclaw) | [PR #249](https://github.com/TinyAGI/tinyclaw/pull/249) | [PR #252](https://github.com/TinyAGI/tinyclaw/pull/252)*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-28

## 1. Today's Overview

Moltis shows **healthy sustained activity** with 4 PRs and 2 issues touched in the last 24 hours, alongside **2 new releases** (20260327.03 and 20260327.01). The project is actively shipping: 2 PRs merged/closed including a significant GraphQL fix and the foundation of a new workflow orchestration system ("Symphony"). Open work centers on **LLM provider optimizations** (prompt caching) and **Telegram integration improvements**. Notably, a newly discovered GraphQL bug (#494) was reported immediately after its related PR (#210) closed, suggesting rapid iteration with some architectural edge cases still emerging.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [20260327.03](https://github.com/moltis-org/moltis/releases/tag/20260327.03) | 2026-03-27 | Patch release; no detailed changelog provided in source data |
| [20260327.01](https://github.com/moltis-org/moltis/releases/tag/20260327.01) | 2026-03-27 | Patch release; no detailed changelog provided in source data |

**Assessment**: Rapid patch cadence suggests active stabilization. Users should review commit history for specific fixes.

---

## 3. Project Progress

### ✅ Merged/Closed Today

| PR | Description | Significance |
|----|-------------|--------------|
| [#210](https://github.com/moltis-org/moltis/pull/210) | `feat(graphql): add sessions.active query and fix chat service binding` | **Critical fix**: GraphQL chat methods now properly use late-bound `state.chat()` instead of static `s.chat`, enabling `chat_override` functionality in GraphQL context |
| [#421](https://github.com/moltis-org/moltis/pull/421) | `feat(symphony): add workflow daemon foundation` | **Major new subsystem**: New `moltis-symphony` crate for workflow orchestration with CLI commands `moltis symphony validate` and `moltis symphony run [--once]` |

**Technical note**: The Symphony merge establishes infrastructure for repo-owned `WORKFLOW.md` execution, Linear polling, and workspace safety—positioning Moltis for agentic workflow automation.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#493](https://github.com/moltis-org/moltis/issues/493) — Install script .deb naming bug | 1 comment, closed same day | **Rapid resolution**: Packaging issue caught and fixed quickly; indicates responsive maintainer attention to installation friction |
| [#494](https://github.com/moltis-org/moltis/issues/494) — GraphQL late-binding bug | 0 comments, **open** | **Emerging concern**: Reporter (penso, core contributor) immediately flagged that #210's fix may be incomplete—GraphQL still bypasses late-bound chat service in some paths. Suggests architectural complexity in service binding |

**Underlying need**: The community requires **reliable abstraction layers** for chat service injection across RPC and GraphQL interfaces. The rapid bug→fix→followup-bug cycle indicates aggressive refactoring with some edge cases escaping initial review.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available |
|----------|------|--------|---------------|
| 🔴 **Medium-High** | [#494](https://github.com/moltis-org/moltis/issues/494): GraphQL bypasses late-bound live chat service | **OPEN** — reported 2026-03-27 | ❌ No PR yet; reporter is investigating |
| 🟢 **Low** (resolved) | [#493](https://github.com/moltis-org/moltis/issues/493): Install script .deb naming | **CLOSED** 2026-03-27 | ✅ Fixed in same-day release |

**Regression risk**: The GraphQL service binding architecture appears to have **latent inconsistency** between RPC (correct) and GraphQL (partially fixed) paths. Users relying on `chat_override` for testing/local LLM routing should verify GraphQL behavior.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Feature | Likelihood in Next Release |
|----------|---------|---------------------------|
| [#495](https://github.com/moltis-org/moltis/pull/495) | **Prompt caching for Anthropic/OpenRouter** | 🔥 **High** — actively developed by core contributor (penso), addresses cost/performance |
| [#276](https://github.com/moltis-org/moltis/pull/276) | **Telegram plaintext/markdown document extraction** | 🟡 **Medium** — community contribution, needs maintainer review; author notes implementation may be "suboptimal" |

**Roadmap inference**: 
- **Cost optimization** (prompt caching) is a priority—aligns with multi-provider strategy
- **Platform expansion** (Telegram file handling) shows community-driven integration work
- **Symphony workflow engine** (#421 merged) signals pivot toward **agentic/orchestration capabilities**

---

## 7. User Feedback Summary

| Pain Point | Source | Evidence |
|------------|--------|----------|
| **Installation friction** | [#493](https://github.com/moltis-org/moltis/issues/493) | .deb packaging bug blocked Linux installs; rapid fix suggests maintainers prioritize onboarding |
| **Telegram file handling gaps** | [#276](https://github.com/moltis-org/moltis/pull/276) | Users cannot attach plaintext documents; community implemented hotpatch via AI coding assistant ("Codex-xhigh") |
| **API consistency concerns** | [#494](https://github.com/moltis-org/moltis/issues/494) | Internal contributor flagging architectural drift between RPC and GraphQL |

**Satisfaction indicators**: Fast bug closure, active contributor self-reporting of issues.
**Dissatisfaction risks**: Telegram integration lagging behind user needs; architectural complexity creating subtle bugs.

---

## 8. Backlog Watch

| PR/Issue | Age | Status | Risk |
|----------|-----|--------|------|
| [#276](https://github.com/moltis-org/moltis/pull/276) | ~27 days | **OPEN** — Telegram document extraction | ⚠️ **Stagnation risk**: Author explicitly disclaims code ownership ("haven't written a single line"); needs maintainer takeover or rewrite |
| — | — | — | No other aged critical items visible in 24h snapshot |

**Recommendation**: [#276](https://github.com/moltis-org/moltis/pull/276) represents **valuable user-contributed functionality** (file ingestion for Telegram) but requires maintainer investment to meet code quality standards. Consider:
- Formal review with explicit refactoring requests
- Alternative: extract as reference implementation for official implementation

---

*Digest generated from Moltis GitHub activity 2026-03-27 to 2026-03-28. Data source: github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-28

## 1. Today's Overview

CoPaw shows **strong community momentum** with 50 issues and 42 PRs updated in the last 24 hours—indicating an active development cycle. The project is in a **stabilization phase** with no new releases, but substantial bug fixing and feature polishing is underway. Notably, 22 PRs were merged/closed versus 20 remaining open, suggesting healthy code review throughput. The community is particularly engaged around multi-agent collaboration, provider integrations, and desktop experience improvements. Several critical bugs around configuration persistence and CLI port management have emerged, requiring maintainer attention.

---

## 2. Releases

**No new releases** (0 releases in last 24h). The project remains at v0.2.0.post1.

---

## 3. Project Progress

### Merged/Closed PRs Today (22 total, key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#2401](https://github.com/agentscope-ai/CoPaw/pull/2401) | WeCom media upload via WebSocket long-connection | **Major**: Enables image/file sending in WeCom channel, previously text-only |
| [#2411](https://github.com/agentscope-ai/CoPaw/pull/2411) | Unified Priority Queue System + `/stop` command | **Architecture**: Replaces fixed worker pool with on-demand consumers; enables unlimited concurrency |
| [#2403](https://github.com/agentscope-ai/CoPaw/pull/2403) | Cross-platform file encoding fixes (UTF-8-BOM fallback) | **Stability**: Fixes Windows CSV/TXT Chinese garbled text issues |
| [#2408](https://github.com/agentscope-ai/CoPaw/pull/2408) | Persist UI language to server-side settings | **UX**: Fixes [#2431](https://github.com/agentscope-ai/CoPaw/issues/2431) language reset bug |
| [#2415](https://github.com/agentscope-ai/CoPaw/pull/2415) | Command suggestions + updated chat input placeholder | **UX**: Discoverability improvement for slash commands |
| [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067) | `/stop` soft interrupt for all channels | **Control**: Graceful task interruption (superseded by #2411) |

**Key Advances:**
- **Message reliability**: WeCom media support + DingTalk cron fixes (#2392) strengthen enterprise channel coverage
- **System architecture**: Priority queue redesign enables better multi-agent concurrency
- **Windows compatibility**: Encoding fixes address long-standing regional pain points

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Category | Analysis |
|:---|:---|:---:|:---|:---|
| 1 | [#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291) | 24 | Contribution | **Meta-issue tracking P0-P2 tasks**—signals healthy contributor onboarding funnel; 24 comments suggest active task claiming |
| 2 | [#2382 venv resets after updates, skill deps break](https://github.com/agentscope-ai/CoPaw/issues/2382) | 9 | Bug | **Critical workflow blocker**: Update mechanism destroys user environments—indicates need for atomic updates or dependency isolation |
| 3 | [#2293 QA agent broke UI, can't access interface](https://github.com/agentscope-ai/CoPaw/issues/2293) | 8 | Bug | **Agent self-damage scenario**: QA agent's "manganese tiger" operations corrupted UI state—reveals agent action sandboxing gap |
| 4 | [#2312 National Supercomputing Center API fails](https://github.com/agentscope-ai/CoPaw/issues/2312) | 5 | Provider | China HPC integration demand—strategic for domestic adoption |
| 5 | [#2303 MiniMax provider 404 on `/models` endpoint](https://github.com/agentscope-ai/CoPaw/issues/2303) | 4 | Provider | Anthropic-compatible provider validation too strict |

**Underlying Needs:**
- **Environment stability** > feature velocity (venv reset, config persistence)
- **China ecosystem compatibility** (Supercomputing Center, MiniMax, QQ channels)
- **Agent safety boundaries** (prevent agents from breaking their own UI)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#2385](https://github.com/agentscope-ai/CoPaw/issues/2385) | CLI port management design flaw breaks multi-agent collaboration | **No fix PR**—blocks desktop multi-agent use |
| 🔴 **High** | [#2382](https://github.com/agentscope-ai/CoPaw/issues/2382) | venv reset on update destroys skill dependencies | **No fix PR**—reproducible, affects all users |
| 🟡 **Medium** | [#2293](https://github.com/agentscope-ai/CoPaw/issues/2293) | QA agent corrupted UI state, persistent even after reinstall | **No fix PR**—state pollution in browser/localStorage |
| 🟡 **Medium** | [#2431](https://github.com/agentscope-ai/CoPaw/issues/2431) | Language setting not persisted (restarts to English) | ✅ **Fixed by #2408** |
| 🟡 **Medium** | [#2236](https://github.com/agentscope-ai/CoPaw/issues/2236) | User agent customizations overwritten on upgrade | **No fix PR**—config migration gap |
| 🟡 **Medium** | [#2421](https://github.com/agentscope-ai/CoPaw/issues/2421) | Feishu channel duplicate replies | **No fix PR**—race condition in outbound dedup |
| 🟢 **Low** | [#2395](https://github.com/agentscope-ai/CoPaw/issues/2395) | QQ channel shows thinking process despite setting disabled | **No fix PR**—settings propagation issue |

**Regression Pattern**: Configuration/data persistence is a **systemic weakness**—language, venv, agent customizations, and skill states all fail to survive updates or restarts.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **System tray/minimize to tray** | [#2430](https://github.com/agentscope-ai/CoPaw/issues/2430) | **High** | Windows UX standard; low complexity, high user value |
| **Skills Hub marketplace UI** | [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | **Medium** | Natural extension of existing skill system; aligns with "open tasks" initiative |
| **Concurrent conversations + follow-up during runs** | [#2416](https://github.com/agentscope-ai/CoPaw/issues/2416) | **Medium** | Requires #2411 queue architecture maturation; architectural dependency |
| **Improved Office/document skills** | [#2427](https://github.com/agentscope-ai/CoPaw/issues/2427) | **Medium** | References MiniMax Office Skills—competitive pressure |
| **CoPaw Local Model support** | [#2419](https://github.com/agentscope-ai/CoPaw/pull/2419) | **High** | PR already open; vLLM/本地部署 trend in China |
| **OpenRouter provider** | [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | **Medium** | Long-running PR, model filtering added—mature |
| **OpenCode provider** | [#2428](https://github.com/agentscope-ai/CoPaw/pull/2428) | **High** | Fresh PR, aligns with coding assistant use case |

**Prediction**: v0.2.1 will likely focus on **persistence fixes** (venv, config, language) plus **Local Model** and **OpenCode** provider integrations.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Category | Quote/Theme | Frequency |
|:---|:---|:---:|
| **Update fragility** | "每次更新后venv会重置" / "升级之后原本对agents.md做的调整被覆盖了" | 🔥🔥🔥 |
| **Configuration loss** | "语言设置不持久化" / "重启后自动恢复为 English" | 🔥🔥🔥 |
| **Discovery/wayfinding** | "模型选择框消失了" / "跨智能体协作功能的引导" | 🔥🔥 |
| **Windows experience** | "点击关闭按钮会完全退出" / "write_file中文乱码" | 🔥🔥 |
| **Agent unpredictability** | "被QA agent弄翻了-进不了UI界面" / "他一顿操作锰如虎" | 🔥🔥 |

### Satisfaction Drivers
- **Channel diversity**: Strong WeCom, DingTalk, QQ, Feishu support (China enterprise focus)
- **Skill extensibility**: Users actively building custom skills
- **Local model support**: Emerging demand for vLLM/Ollama integration

### Dissatisfaction Drivers
- **State management**: No confidence that customizations survive updates
- **Agent safety**: Agents can self-corrupt or enter uninterruptible loops
- **Desktop polish**: Missing basic OS integration (tray, proper window management)

---

## 8. Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#1084](https://github.com/agentscope-ai/CoPaw/pull/1084) Linux AppImage | ~19 days | Portable Linux distribution; build script ready | Maintainer review for CI integration |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) OpenRouter provider | ~18 days | Model filtering implemented; needs final review | Merge decision or feedback |
| [#2177](https://github.com/agentscope-ai/CoPaw/pull/2177) Memory summarization cron | ~4 days | First-time contributor; automatic memory cleanup | Code review for cron safety |
| [#2337](https://github.com/agentscope-ai/CoPaw/pull/2337) Dual-queue command dispatch | ~2 days | Architectural change; conflicts with #2411? | Reconcile with merged #2411 |
| [#2273](https://github.com/agentscope-ai/CoPaw/issues/2273) ModelScope auth loop | ~3 days | Web auth redirect failure—blocks cloud deployment | Repro + fix for session handling |

**Risk**: [#2337](https://github.com/agentscope-ai/CoPaw/pull/2337) (dual-queue) and [#2411](https://github.com/agentscope-ai/CoPaw/pull/2411) (unified priority queue) may be **competing implementations** of similar command dispatch needs—requires maintainer coordination to avoid contributor frustration.

---

*Digest generated from 50 issues and 42 PRs updated 2026-03-27 to 2026-03-28.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-28

## 1. Today's Overview

ZeptoClaw shows **minimal but targeted development activity** with 2 open pull requests submitted in the past 24 hours, both from contributor `stuartbowness`. No issues were opened or updated, and no releases were published. The project appears in a **stable maintenance phase** with focused feature development rather than active bug triage. The two PRs address critical infrastructure gaps—browser automation capabilities and context management resilience—suggesting the maintainers are prioritizing production-readiness over incremental improvements.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

**No merged or closed PRs today.** Both active PRs remain under review:

| PR | Status | Description |
|:---|:---|:---|
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) | Open | Browser automation infrastructure |
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) | Open | Context compaction overhaul |

No features advanced to completion today. Development velocity appears gated by review bandwidth rather than implementation pace.

---

## 4. Community Hot Topics

Both active PRs represent **significant architectural investments**:

### [#459: BrowserTool with agent-browser integration](https://github.com/qhkm/zeptoclaw/pull/459)
- **Engine**: Lightpanda (lightweight) + Chrome fallback (compatibility)
- **Security**: Built-in SSRF protection
- **Underlying need**: ZeptoClaw lacks native web browsing capabilities, forcing users to implement external browser automation. This PR positions the project to compete with OpenAI's Operator and Anthropic's computer-use features.

### [#460: Multi-layered context compaction](https://github.com/qhkm/zeptoclaw/pull/460)
- **Problem addressed**: "Unrecoverable token overflow errors" in long conversations
- **Approach**: Defense-in-depth strategy replacing naive word-count truncation
- **Underlying need**: Production deployments require reliable long-context handling; current single-pass compaction is a known failure mode in agent systems.

**Analysis**: Both PRs originate from the same contributor and were split from [#410](https://github.com/qhkm/zeptoclaw/pull/410) per review feedback—indicating responsive iteration but also suggesting the original scope was underestimated.

---

## 5. Bugs & Stability

**No new bug reports today.** However, [#460](https://github.com/qhkm/zeptoclaw/pull/460) explicitly documents a **critical stability issue** that users have been experiencing:

> *"Users were hitting the [...] unrecoverable token overflow errors"*

| Severity | Issue | Fix Status |
|:---|:---|:---|
| High | Token overflow crashes in long conversations | Fix proposed in [#460](https://github.com/qhkm/zeptoclaw/pull/460) (awaiting review) |

No regressions or new crash reports surfaced in the 24-hour window.

---

## 6. Feature Requests & Roadmap Signals

**Explicit features in flight:**

| Feature | PR | Likelihood in next release |
|:---|:---|:---|
| Browser automation (agent-browser) | [#459](https://github.com/qhkm/zeptoclaw/pull/459) | High — addresses competitive gap |
| Robust context compaction | [#460](https://github.com/qhkm/zeptoclaw/pull/460) | High — fixes production blocker |

**Inferred roadmap priorities:**
- **Tool ecosystem expansion**: BrowserTool follows pattern of modular tool architecture
- **Enterprise reliability**: Context management improvements suggest focus on long-running agent deployments
- **Security hardening**: SSRF protection in [#459](https://github.com/qhkm/zeptoclaw/pull/459) indicates production-security mindset

---

## 7. User Feedback Summary

**Documented pain points** (from PR descriptions):

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| Token overflow crashes | "Long conversations no longer crash with unrecoverable token overflow errors" | Critical |
| Missing browser capability | Implicit in [#459](https://github.com/qhkm/zeptoclaw/pull/459) motivation | High |
| Need for lightweight browser engine | Lightpanda as primary, Chrome as fallback | Medium |

**Satisfaction signals**: Absence of new issues suggests either (a) low user volume, or (b) existing functionality meets current needs. The proactive fixes in [#460](https://github.com/qhkm/zeptoclaw/pull/460) indicate maintainers are responsive to reported crashes.

---

## 8. Backlog Watch

| Risk Indicator | Details |
|:---|:---|
| **Zero open issues** | Unusual for active project—may indicate: (a) issues closed without tracking, (b) low adoption, or (c) effective issue gardening |
| **PR #410 fragmentation** | Original PR split into [#459](https://github.com/qhkm/zeptoclaw/pull/459)/[#460](https://github.com/qhkm/zeptoclaw/pull/460); ensure no scope creep in remaining #410 content |
| **Contributor concentration** | Both active PRs from single contributor (`stuartbowness`); review bottleneck risk if maintainer bandwidth limited |

**Recommended maintainer attention:**
- Review [#459](https://github.com/qhkm/zeptoclaw/pull/459) and [#460](https://github.com/qhkm/zeptoclaw/pull/460) for merge readiness
- Clarify status of remaining [#410](https://github.com/qhkm/zeptoclaw/pull/410) scope
- Consider issue templates if zero-issue state reflects under-reporting rather than stability

---

*Digest generated from GitHub activity 2026-03-27 to 2026-03-28. Data source: qhkm/zeptoclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*