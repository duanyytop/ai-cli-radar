# OpenClaw Ecosystem Digest 2026-03-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-17 00:09 UTC

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

# OpenClaw Project Digest — 2026-03-17

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, though the 89.4% open issue rate (447/500) and 78.2% open PR rate (391/500) suggest a growing backlog. **No new releases** were published today. The project is experiencing significant **regression pressure** with multiple gateway, CLI, and channel connectivity issues emerging in recent builds (2026.3.12-2026.3.13). Major feature work is advancing on Feishu/Lark integration, Slack interactivity, and local RAG capabilities, while stability issues dominate user reports.

---

## 2. Releases

**No new releases** — Latest stable remains prior to 2026-03-17.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#47752](https://github.com/openclaw/openclaw/pull/47752) | @Linux2010 | `heartbeat.timeoutSeconds` — per-heartbeat embedded run timeout | **Production reliability** — prevents heartbeat hangs from blocking system |
| [#43531](https://github.com/openclaw/openclaw/pull/43531) | @ProgramCaiCai | Fix post-compaction retry ordering | Session continuity fix |
| [#16968](https://github.com/openclaw/openclaw/pull/16968) | @ProgramCaiCai | Per-collection QMD search to prevent large collections drowning smaller ones | RAG quality improvement |
| [#16261](https://github.com/openclaw/openclaw/pull/16261) | @ProgramCaiCai | Two-tier tool output truncation + `excludeFromContext` | **Major context management improvement** |
| [#43530](https://github.com/openclaw/openclaw/pull/43530) | @ProgramCaiCai | Decouple completion announce and spawn wait semantics | Orchestration reliability |
| [#47376](https://github.com/openclaw/openclaw/pull/47376) | @shuicici | Include darwin in startup optimization detection | macOS UX fix |
| [#48562](https://github.com/openclaw/openclaw/pull/48562) | @peteradams2026 | Slack exec approval buttons via Block Kit | **Security/UX feature** — merged then superseded by #48567 |
| [#48559](https://github.com/openclaw/openclaw/pull/48559) | @rbutera | Preserve external channel routing for inter-session messages | Channel routing fix |

### Notable Open PRs Advancing

- **[#39080](https://github.com/openclaw/openclaw/pull/39080)** — Feishu streaming cards, native reply dispatcher, message recall (XL, active)
- **[#48567](https://github.com/openclaw/openclaw/pull/48567)** — Slack exec approval buttons (replacement for #48562)
- **[#48565](https://github.com/openclaw/openclaw/pull/48565)** — **Local RAG pipeline** for workspace context injection (XL, major feature)
- **[#46579](https://github.com/openclaw/openclaw/pull/46579)** — Codex native web search for embedded Pi runs
- **[#48197](https://github.com/openclaw/openclaw/pull/48197)** — ACP hardening and plugin seam restructuring

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 72 | 26 | **DingTalk first-install channel** | Enterprise onboarding completeness — DingTalk support exists but isn't discoverable |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 39 | 62 | **Linux/Windows desktop apps** | Cross-platform parity with macOS — major platform gap |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | 24 | 5 | Matrix E2EE self-verification | Enterprise/security use cases requiring encrypted channels |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | 19 | 0 | Anthropic setup-token 401 errors | Auth reliability for enterprise Claude deployments |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | 18 | 0 | **Vision/multimodal support** | Agent perception expansion — critical competitive feature |

### Analysis

- **Enterprise readiness** dominates: DingTalk, Matrix E2EE, and auth stability are blockers for organizational deployment
- **Platform expansion** (#75) has sustained high interest (62 👍 since Jan 1) — indicates significant non-macOS user base waiting
- **Multimodal/vision** (#28744) is emerging as a must-have, with Chinese-language issue suggesting APAC market demand

---

## 5. Bugs & Stability

### Critical/High Severity (New in 24h)

| Issue | Severity | Regression? | Summary | Fix PR? |
|:---|:---:|:---:|:---|:---:|
| [#48205](https://github.com/openclaw/openclaw/issues/48205) | 🔴 **Critical** | ✅ | Gateway restarts every ~50 min with "reason=none" | No — active investigation |
| [#45560](https://github.com/openclaw/openclaw/issues/45560) | 🔴 **Critical** | ✅ | Local gateway CLI handshake fails (probe timeout / 1000 close) | No — multiple related issues |
| [#48167](https://github.com/openclaw/openclaw/issues/48167) | 🔴 **Critical** | ✅ | CLI completely dead on 2026.3.13 despite gateway running | No |
| [#45232](https://github.com/openclaw/openclaw/issues/45232) | 🔴 **Critical** | ✅ | Control UI stuck "pairing required" after 2026.3.13 upgrade | No |
| [#45205](https://github.com/openclaw/openclaw/issues/45205) | 🟠 **High** | ✅ | ACP child runs complete but parent receives no events | No |
| [#45108](https://github.com/openclaw/openclaw/issues/45108) | 🟠 **High** | ✅ | Sandbox write/edit fails — "python3: not found" in bookworm-slim | No |
| [#45311](https://github.com/openclaw/openclaw/issues/45311) | 🟠 **High** | ✅ | Slack socket mode connects but receives zero events (2026.3.12) | Workaround: downgrade to 2026.3.11 |
| [#48427](https://github.com/openclaw/openclaw/issues/48427) | 🟠 **High** | ✅ | Same MiniMax key works on gateway 19001 but 401 on 18789 | No — config/profile isolation bug |

### Medium Severity

| Issue | Type | Notes |
|:---|:---|:---|
| [#48400](https://github.com/openclaw/openclaw/issues/48400) | Data loss | Session JSONL loses tool call entries after `overloaded_error` retry — **context corruption** |
| [#48252](https://github.com/openclaw/openclaw/issues/48252) | UI bug | Control UI shows 100% context when actual is ~56% |
| [#48206](https://github.com/openclaw/openclaw/issues/48206) | UI bug | Status shows Context: 0/200k but session has ~97k tokens |
| [#47940](https://github.com/openclaw/openclaw/issues/47940) | Behavior | Heartbeat alternates sent/ok-token — 2x interval effective |
| [#46892](https://github.com/openclaw/openclaw/issues/46892) | Performance | WS handshake timeout (3s) too aggressive for busy event loops |

### Stability Assessment

**Regressions are concentrated in 2026.3.12-2026.3.13 builds**, particularly:
- Gateway/CLI handshake and WebSocket handling
- Control UI pairing and session management
- Channel connectivity (Slack, WhatsApp)

The **gateway restart loop** (#48205) and **CLI paralysis** (#48167, #45560) suggest systemic issues in the gateway-CLI communication layer introduced in recent releases.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Likelihood in Next Version | Rationale |
|:---|:---:|:---:|:---|
| [#28744](https://github.com/openclaw/openclaw/issues/28744) Vision/multimodal | ⭐⭐⭐⭐⭐ | **High** | Active PRs for image handling; MiniMax-Vision mentioned; competitive necessity |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) MCP client support | ⭐⭐⭐⭐⭐ | **High** | Industry standard momentum; "rapidly becoming industry standard" cited |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) DingTalk first-install | ⭐⭐⭐⭐☆ | **Medium-High** | Infrastructure exists, just UI exposure needed |
| [#20416](https://github.com/openclaw/openclaw/issues/20416) Modifiable llm_input/output hooks | ⭐⭐⭐⭐☆ | **Medium** | Security/compliance demand; middleware pattern enablement |
| [#14159](https://github.com/openclaw/openclaw/issues/14159) Pre-tool hooks (gate scripts) | ⭐⭐⭐☆☆ | **Medium** | Safety/governance use case; architectural fit with existing hooks |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | ⭐⭐⭐⭐⭐ | **Low-Medium** | High demand (62 👍) but large scope; likely post-stability focus |

### Emerging Patterns

- **Governance/safety infrastructure**: Pre-tool hooks, modifiable I/O hooks, and exec approval buttons (#48567) suggest a **trust/safety product direction**
- **Local-first capabilities**: Local RAG (#48565), local embeddings — **privacy-preserving enterprise features**
- **MCP ecosystem integration**: Strong signal for standardization over proprietary tool systems

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Gateway stability** | 5+ critical regressions in 48h; restart loops; CLI failures | 🔴 Critical |
| **Authentication fragility** | Anthropic 401s (#23538), OAuth refresh failures (#44616), MiniMax key isolation (#48427) | 🟠 High |
| **Channel reliability** | WhatsApp "No active listener" (3+ issues), Slack socket regression (#45311), Matrix E2EE (#7649) | 🟠 High |
| **Context/visibility** | Wrong context % display, time awareness failures (#10841), reminder misfires | 🟡 Medium |
| **Cross-platform gaps** | No Linux/Windows apps (#75), Windows-specific build failures (#45275) | 🟡 Medium |

### Positive Signals

- **Feishu/Lark investment**: Multiple PRs for rich features (streaming cards, image handling) — APAC market focus
- **Extensibility appreciation**: Users actively building plugins, requesting MCP support
- **Self-hosting demand**: Local RAG, sandbox features, rescue mode — power user segment

### Satisfaction/Dissatisfaction

| Satisfied | Dissatisfied |
|:---|:---|
| macOS app users (primary platform) | Linux/Windows users (platform gap) |
| Feishu/Lark users (active development) | WhatsApp users (reliability issues) |
| Users with stable gateway versions | Users on 2026.3.12-2026.3.13 (regressions) |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>30 days, high impact)

| Issue | Age | Impact | Blocker? |
|:---|:---:|:---|:---:|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 75 days | Platform expansion | Community goodwill |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) Matrix E2EE verification | 42 days | Enterprise security | Encryption compliance |
| [#10841](https://github.com/openclaw/openclaw/issues/10841) Agent time awareness | 48 days | Core reliability | Reminder functionality |
| [#29348](https://github.com/openclaw/openclaw/issues/29348) google-antigravity-auth removal | 17 days | Auth breakage | Google integration |

### PRs At Risk of Stagnation

| PR | Status | Risk |
|:---|:---|:---|
| [#39080](https://github.com/openclaw/openclaw/pull/39080) Feishu streaming cards | Open, XL size | Merge conflicts with rapid gateway changes |
| [#34942](https://github.com/openclaw/openclaw/pull/34942) Batch document attachments | Open, XL size | Needs rebase; foundational for file handling |

### Recommendation

**Stability sprint needed**: The concentration of gateway/CLI regressions suggests a temporary feature freeze and focused reliability release (2026.3.14 or .15) would restore user confidence before continuing feature expansion.

---

*Digest generated from GitHub data for openclaw/openclaw on 2026-03-17*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Analysis — 2026-03-17

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **explosive growth and fragmentation**, with 10+ actively maintained projects competing for developer mindshare. The landscape spans from **enterprise-grade platforms** (OpenClaw, NullClaw) to **lightweight personal assistants** (NanoBot, TinyClaw) and **specialized hardware-integrated solutions** (PicoClaw). A dominant architectural pattern has emerged: **MCP (Model Context Protocol) adoption** is now table stakes, with most projects racing to integrate external tool ecosystems while differentiating on deployment flexibility, channel breadth, and safety defaults. The ecosystem is simultaneously maturing (stabilization releases, security hardening) and expanding (multimodal support, autonomous agent capabilities), creating both opportunity and integration complexity for developers.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 | 500 | None | 🟡 **Caution** | High activity, severe regression pressure |
| **NanoBot** | 188 | 251 | v0.1.4.post5 | 🟢 **Strong** | Rapid maturation, careful refinement phase |
| **ZeroClaw** | 45 | 50 | 10 versions (v0.4.0–v0.4.2-β.300) | 🟢 **Strong** | Aggressive beta cycle, infrastructure focus |
| **PicoClaw** | 22 | 77 | v0.2.3-nightly | 🟢 **Strong** | Pre-release stabilization, high merge velocity |
| **NanoClaw** | 21 | 50 | None | 🟡 **Caution** | Infrastructure debt, security concerns emerging |
| **NullClaw** | 11 | 39 | v2026.3.15 | 🟢 **Strong** | Consistent weekly releases, expanding providers |
| **IronClaw** | 24 | 50 | None | 🟢 **Strong** | Stabilization phase, CI-driven quality gates |
| **LobsterAI** | 7 | 14 | v2026.3.16 | 🟡 **Caution** | Quality gaps, upgrade breakage, mixed sentiment |
| **TinyClaw** | 4 | 12 | v0.0.14 | 🟡 **Caution** | Configuration safety issues, destructive CLI ops |
| **Moltis** | 2 | 4 | None | 🟢 **Stable** | Moderate activity, focused integration fixes |
| **CoPaw** | 50 | 50 | None | 🟡 **Caution** | Memory compression regressions, production pain |
| **ZeptoClaw** | 2 | 3 | None | 🟢 **Stable** | Low volume, healthy responsiveness |
| **EasyClaw** | 3 | 0 | v1.7.0 | 🔴 **At Risk** | Critical Windows regression, no PR activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily = **10× median activity** | Largest ecosystem by raw volume |
| **Channel breadth** | Native: Slack, Feishu/Lark, WhatsApp, Matrix, Discord | NanoBot comparable; others lag (TinyClaw: 3 channels) |
| **Enterprise features** | Exec approval buttons, audit trails, local RAG | ZeroClaw (Merkle hashes), IronClaw (per-job sandboxing) catching up |
| **Local-first capabilities** | Workspace RAG (#48565), sandboxed execution | PicoClaw (SubTurns), NanoClaw (container isolation) competing |

### Technical Approach Differences
| Aspect | OpenClaw | Peers |
|:---|:---|:---|
| **Architecture** | Gateway-CLI bifurcation with WebSocket transport | NanoBot: unified Python; ZeroClaw: Rust monolith; NullClaw: Zig-based |
| **Safety model** | Graduated permissions + exec approval workflow | ZeroClaw: "too secure by default" backlash; PicoClaw: exec disable toggle |
| **Extensibility** | Plugin seam restructuring (#48197), ACP hardening | IronClaw: MCP-first; CoPaw: skill marketplace curation debate |

### Community Size
- **OpenClaw**: ~89% open issue rate suggests **maintainer bandwidth strain** despite scale
- **NanoBot**: 29 new contributors in single release = **healthier contributor funnel**
- **ZeroClaw**: 39-comment security philosophy debate = **engaged but opinionated user base**

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **MCP (Model Context Protocol) support** | NanoBot [#359](https://github.com/HKUDS/nanobot/issues/359), IronClaw [#1243](https://github.com/nearai/ironclaw/pull/1243), ZeroClaw [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153), Moltis [#118](https://github.com/moltis-org/moltis/issues/118), ZeptoClaw [#356](https://github.com/qhkm/zeptoclaw/pull/356) | "Rapidly becoming industry standard" (NanoBot); stdio+HTTP dual transport (ZeptoClaw) |
| **Multimodal/vision support** | OpenClaw [#28744](https://github.com/openclaw/openclaw/issues/28744), PicoClaw (image handling PRs), ZeptoClaw [#368](https://github.com/qhkm/zeptoclaw/issues/368), LobsterAI [#437](https://github.com/netease-youdao/LobsterAI/pull/437) | Image-in-tool-loop reliability critical; MiniMax-Vision mentioned |
| **Memory/context compression** | OpenClaw [#16261](https://github.com/openclaw/openclaw/pull/16261) (two-tier truncation), CoPaw [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222), [#1596](https://github.com/agentscope-ai/CoPaw/issues/1596) | CoPaw v0.0.7 compression "causing amnesia" — active research area |
| **Enterprise IM integrations** | OpenClaw (Feishu/Lark), NanoBot (WeCom, Teams [#2081](https://github.com/HKUDS/nanobot/pull/2081)), NullClaw (DingTalk, Lark), LobsterAI (DingTalk, Feishu), CoPaw (Feishu, DingTalk) | Feishu/Lark = APAC enterprise standard; Teams expansion signals global ambition |
| **Local/self-hosted deployment** | OpenClaw (local RAG), NanoBot (#855 LM Studio workflows), NanoClaw (Podman [#957](https://github.com/qwibitai/nanoclaw/issues/957)), ZeroClaw (SQLite sessions) | Privacy-preserving enterprise demand; Docker alternatives trend |
| **Provider abstraction/fallback** | NanoBot [#2121](https://github.com/HKUDS/nanobot/pull/2121) (multi-model fallback), [#2116](https://github.com/HKUDS/nanobot/pull/2116) (dynamic providers), NullClaw (Tencent/Hunyuan [#595](https://github.com/nullclaw/nullclaw/pull/595)) | "Whack-a-mole" provider fragmentation driving generic interfaces |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation, broadest channel ecosystem, local RAG | Power users, multi-channel operators | Go gateway + TypeScript CLI; WebSocket-centric |
| **NanoBot** | "Ultra-lightweight" promise, rapid contributor onboarding, interactive config wizard | Individual developers, tinkerers | Python unified; litellm abstraction |
| **ZeroClaw** | Security-first Rust implementation, "Hands" autonomous agents, Merkle audit trails | Security-conscious enterprises, compliance-heavy deployments | Rust monolith; aggressive sandboxing |
| **PicoClaw** | Event-driven agent loops (SubTurns), hardware integration (Sipeed), hierarchical multi-agent | IoT/edge developers, agent orchestration builders | Rust; interruptible execution model |
| **NanoClaw** | Claude Code CLI integration, container-native skills, MemOS structured memory | Claude power users, local-first advocates | TypeScript; skill-container architecture |
| **NullClaw** | Zig-based performance, China-market provider depth, consistent weekly releases | Performance-sensitive, APAC-focused deployments | Zig; minimal dependencies |
| **IronClaw** | NEAR AI ecosystem integration, CI-driven quality, programmatic tool calling | Web3-adjacent developers, automated agent workflows | Rust; staging promotion pipeline |
| **LobsterAI** | NetEase Youdao backing, Windows-first enterprise IM, browser automation | Chinese enterprise, office automation users | Electron + OpenClaw runtime |
| **TinyClaw** | TinyOffice calendar UI, queue-based task management, "starring" UX | Small teams, schedule-heavy workflows | TypeScript; croner-based scheduling |
| **CoPaw** | AgentScope research lineage, built-in skill curation debate, streaming infrastructure | Researchers, multi-agent experimenters | Python; console-centric |
| **ZeptoClaw** | Minimal surface area, GCP-native (Vertex AI), ACP/MCP interoperability | GCP enterprises, protocol-focused integrators | Rust; minimal, enterprise-targeted |
| **EasyClaw** | Simplicity, macOS-native experience | Casual personal assistant users | Tauri/electron; desktop-first |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Feature Expansion)
| Project | Evidence | Risk |
|:---|:---|:---|
| **ZeroClaw** | 10 releases in 24h, v0.4.0→v0.4.2-β.300 | Configuration fragility, "god mode" security tension |
| **PicoClaw** | 77 PRs, SubTurns architecture landing | Pre-release bottleneck, 45 open PRs |
| **NanoBot** | 251 PRs, 29 new contributors, v0.1.4.post5 | "Ultra-lightweight" identity vs. Node.js reality debate |

### Tier 2: Stabilization (Reliability Focus)
| Project | Evidence | Risk |
|:---|:---|:---|
| **OpenClaw** | Regression pressure concentrated in gateway/CLI layer | User confidence erosion if stability sprint delayed |
| **IronClaw** | Bug bash closure, CI architectural debt detection | [#1247](https://github.com/nearai/ironclaw/issues/1247)-[#1249](https://github.com/nearai/ironclaw/issues/1249) blocking patterns may impede scale |
| **NullClaw** | Weekly release cadence, OTLP observability landing | Custom provider documentation gap (#117) blocking contributions |
| **CoPaw** | v0.0.7 memory compression "regression" | Production deployment trust at risk |

### Tier 3: Maintenance / At Risk
| Project | Evidence | Risk |
|:---|:---|:---|
| **LobsterAI** | Upgrade breakage (#452), systematic quality critique (#417) | User churn to OpenClaw/Alibaba alternatives |
| **TinyClaw** | Destructive CLI operations (#228), configuration fragility | Safety perception barrier to adoption |
| **EasyClaw** | Zero PRs, critical Windows regression (#18), no maintainer response | Project viability if hotfix delayed |
| **Moltis** | Low volume (4 PRs), 31-day stale MCP Docker issue | Community patience erosion |

---

## 7. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **MCP as interoperability standard** | Universal demand across projects; "official" status cited (NanoBot #359); ACP dual transport (ZeptoClaw #356) | Build tools as MCP servers first; avoid proprietary tool lock-in |
| **Reasoning model compatibility crisis** | Kimi-k2.5 parsing failures (NullClaw #576), GLM5 crashes (LobsterAI #446), reasoning_content injection bugs (CoPaw #1222) | Abstract reasoning content handling; test against Chinese model providers |
| **Security vs. usability tension** | ZeroClaw "god mode" backlash (#1478), exec disable toggles (PicoClaw #1627), pre-tool hooks (OpenClaw #14159) | Design graduated permission profiles, not binary secure/insecure modes |
| **Container runtime diversification** | Podman support (NanoClaw #957), rootless Podman (ZeptoClaw #369), ARM64 Docker (ZeroClaw #3714), Apple Container race conditions (NanoClaw #1067) | Abstract container runtime; test across Docker/Podman/rootless configurations |
| **Enterprise channel depth > breadth** | Feishu/Lark rich cards (OpenClaw #39080, NullClaw #596), DingTalk session management (LobsterAI #442, CoPaw #1304), Teams OAuth (NanoBot #2081) | Deep integration beats superficial multi-channel support; expect enterprise-specific auth/session complexity |
| **Observability as first-class requirement** | OTLP integration (NullClaw #600), Hands dashboard (ZeroClaw #3595), event-driven hooks (PicoClaw #1316), cron diagnostics (IronClaw) | Design for production debugging from day one; black-box agents unacceptable |
| **Local-first / privacy-preserving features** | Local RAG (OpenClaw #48565), SQLite sessions (ZeroClaw), LM Studio workflows (NanoBot #855), per-collection QMD search (OpenClaw #16968) | Offer on-premise data paths; cloud-only architectures face enterprise resistance |

---

*Report generated from 1,400+ data points across 13 active AI agent projects. For technical decision-makers evaluating platform bets or integration strategies.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-17

## 1. Today's Overview

NanoBot demonstrates **exceptionally high development velocity** with 251 PRs and 188 issues updated in the last 24 hours, indicating an active, rapidly maturing project. The v0.1.4.post5 release (57 PRs merged, 29 new contributors) signals a "careful refinement" phase focused on reliability over flashy features. Community engagement is strong with diverse channels (Telegram, WeCom, Teams, WhatsApp) and active multilingual participation (Chinese/English). However, the 22:166 open-to-closed issue ratio and 59 open PRs suggest some backlog accumulation. The project is clearly gaining traction as a personal AI assistant but faces growing pains around configuration complexity, provider compatibility, and multi-instance deployment.

---

## 2. Releases

### v0.1.4.post5 (Latest)
- **Scope**: 57 PRs merged, 29 new contributors
- **Character**: "Quiet refinement" release — edge smoothing and trust-building over spectacle
- **Key improvements**: Stability, daily-use reliability
- **Migration**: No breaking changes noted; appears to be backward-compatible patch release

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2085](https://github.com/HKUDS/nanobot/pull/2085) | @JiajunBernoulli | **Duplicate instance prevention** via `LockManager` with file locking and stale lock detection | Prevents config corruption from concurrent nanobot instances |
| [#2119](https://github.com/HKUDS/nanobot/pull/2119), [#2118](https://github.com/HKUDS/nanobot/pull/2118) | @keep-in-mind-ai | Contributors documentation and AI assistant introduction | Community onboarding improvement |

### Active Development (Open PRs)

| PR | Author | Feature | Status |
|:---|:---|:---|:---|
| [#2127](https://github.com/HKUDS/nanobot/pull/2127) | @JiajunBernoulli | Enhanced instance lock with user-facing interception message | Open, refines #2085 |
| [#2081](https://github.com/HKUDS/nanobot/pull/2081) | @T3chC0wb0y | **Microsoft Teams Channel** — DM support, OAuth, reply handling | Major channel expansion |
| [#2121](https://github.com/HKUDS/nanobot/pull/2121) | @jr551 | **Multi-model provider fallback** — ordered failover chain | Reliability-critical |
| [#2117](https://github.com/HKUDS/nanobot/pull/2117) | @WormW | OpenAI Responses API support for extras providers | Provider flexibility |
| [#2116](https://github.com/HKUDS/nanobot/pull/2116) | @WormW | **Dynamic custom providers via extras config** — no-code provider addition | Major extensibility win |
| [#2113](https://github.com/HKUDS/nanobot/pull/2113) | @flobo3 | Web search multi-provider with automatic fallback | Tool reliability |
| [#1940](https://github.com/HKUDS/nanobot/pull/1940) | @kinchahoy | **Sandbox exec calls with bubblewrap** — security hardening | Addresses #1873, non-root containers |
| [#2030](https://github.com/HKUDS/nanobot/pull/2030) | @rick2047 | Message severity filtering for heartbeat/cron noise reduction | UX quality-of-life |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Status | Comments | 👍 | Core Need |
|:---|:---|:---:|:---:|:---|
| [#336](https://github.com/HKUDS/nanobot/issues/336) DeepSeek provider "LLM Provider NOT provided" | **CLOSED** | 20 | 0 | **Provider detection reliability** — litellm integration gaps |
| [#430](https://github.com/HKUDS/nanobot/issues/430) How to use web_search? | **CLOSED** | 14 | 0 | **Documentation/discovery** — feature visibility |
| [#855](https://github.com/HKUDS/nanobot/issues/855) Local deployment experience sharing | **CLOSED** | 10 | 1 | **Community knowledge transfer** — LM Studio + local GPU workflows |
| [#1988](https://github.com/HKUDS/nanobot/issues/1988) WeCom channel doesn't work | **OPEN** | 10 | 0 | **Enterprise channel stability** — config migration gaps |
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) Skill disable vs. delete | **OPEN** | 8 | 0 | **Configuration flexibility** — toggle without data loss |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) Telegram bot answers twice | **OPEN** | 8 | 4 | **Channel output deduplication** — markdown rendering bug |

### Underlying Needs Analysis

| Pattern | Evidence | Implication |
|:---|:---|:---|
| **Provider fragmentation** | DeepSeek, Kimi Code, OpenRouter, Minimax, Ollama issues | Users expect "it just works" for any litellm-compatible provider; implicit model→provider mapping is too magical |
| **Channel operational complexity** | WeCom, Telegram, Feishu SSL issues | Enterprise deployments need first-class proxy, SSL, and auth documentation |
| **Skill lifecycle management** | #1932, #623, #594 | Skills need versioning, enable/disable, and execution verification |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#1988](https://github.com/HKUDS/nanobot/issues/1988) WeCom channel broken | OPEN | None | "No Channels Enabled" after upgrade; config migration failure |
| 🔴 **High** | [#1692](https://github.com/HKUDS/nanobot/issues/1692) Telegram double responses | OPEN | None | Markdown+plain duplication; affects 4+ users |
| 🟡 **Medium** | [#862](https://github.com/HKUDS/nanobot/issues/862) CronService race condition | **CLOSED** | Merged | Async lock missing; could corrupt job store |
| 🟡 **Medium** | [#785](https://github.com/HKUDS/nanobot/issues/785) Telegram proxy startup failure | **CLOSED** | Merged | Custom `proxy` parameter conflict |
| 🟡 **Medium** | [#842](https://github.com/HKUDS/nanobot/issues/842) OpenRouter auth regression in 0.1.4 | **CLOSED** | Merged | Upgrade broke existing configs |
| 🟢 **Low** | [#672](https://github.com/HKUDS/nanobot/issues/672) Answer repetition | **CLOSED** | Merged | Task completion detection failure |

**Stability Wins**: #2085/#2127 instance locking prevents a class of corruption bugs. #1940 sandboxing addresses security concerns.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Native Multi-Agent Routing** | [#2072](https://github.com/HKUDS/nanobot/issues/2072) | Medium | Explicitly compared to OpenClaw; manual workaround exists but "hassle" |
| **Multiple custom providers** | [#1991](https://github.com/HKUDS/nanobot/issues/1991), [#2116](https://github.com/HKUDS/nanobot/pull/2116) | **High** | PR #2116 already implements dynamic extras; addresses core pain point |
| **MCP (Model Context Protocol) support** | [#359](https://github.com/HKUDS/nanobot/issues/359) | Medium | 8 👍; "official" request; would unlock external tool ecosystems |
| **Skill enable/disable toggle** | [#1932](https://github.com/HKUDS/nanobot/issues/1932) | High | "Good first issue" label; small scope, clear UX win |
| **SearXNG search integration** | [#405](https://github.com/HKUDS/nanobot/issues/405) | Low-Medium | Privacy-focused alternative; overlaps with #2113 multi-provider work |
| **Interactive config wizard** | [#2018](https://github.com/HKUDS/nanobot/issues/2018) | **High** | `nanobot onboard` in nightly; actively soliciting feedback |

**Predicted v0.1.5 themes**: Provider flexibility (#2116, #2117), deployment reliability (#2081 Teams, instance locking), and configuration UX (#2018 wizard, #1932 skill toggles).

---

## 7. User Feedback Summary

### Pain Points 😤

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Configuration archaeology** | #430, #2018, #855 | High — users reverse-engineer config.json |
| **Provider "whack-a-mole"** | #336, #354, #581, #842, #603 | High — each new provider needs custom handling |
| **Silent failures / "thinking" loops** | #603, #594, #672, #659 | Medium — poor observability when things go wrong |
| **Upgrade fragility** | #842, #1988 | Medium — breaking changes in patch releases |

### Success Stories ✅

- **Local deployment viable**: #855 documents LM Studio + RTX 3050 working (after tuning)
- **Security consciousness**: #660 Node.js bloat debate shows user investment in "ultra-lightweight" promise
- **Enterprise adoption**: WeCom, Teams, Feishu issues indicate real workplace deployments

### Satisfaction Drivers
- "Very exciting getting things to work" (#623)
- Community knowledge sharing (#855)
- Rapid maintainer response (most issues closed within 24-48h)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#126](https://github.com/HKUDS/nanobot/pull/126) GitHub Actions for Docker → ghcr/dockerhub | ~40 days | **Supply chain** | Community Docker image maintenance; birdxs has working fork |
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) Multi-Agent Routing | 1 day | **Competitive** | OpenClaw parity; architectural decision on gateway scaling |
| [#359](https://github.com/HKUDS/nanobot/issues/359) MCP Tool Support | ~37 days | **Ecosystem** | High engagement (8 👍); blocks enterprise integrations |
| [#660](https://github.com/HKUDS/nanobot/issues/660) "Ultra-lightweight" claim vs. Node.js reality | ~31 days | **Positioning** | Identity crisis: embrace full stack or trim dependencies? |

**Maintainer Attention Recommended**: 
- #126 for release automation
- #660 for project positioning clarity
- #1988 for enterprise channel regression

---

*Digest generated from 251 PRs and 188 issues updated 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-17

## 1. Today's Overview

ZeroClaw shows **very high development velocity** with 50 PRs updated (43 merged/closed, 7 open) and 45 issues processed in the last 24 hours. The project released **10 new versions** (v0.4.0 through v0.4.2-beta.300), indicating an aggressive beta release cycle. Core themes include infrastructure hardening (caching, sessions, observability), security enhancements (Merkle audit trails, HMAC-SHA256 transport), and channel expansion (X/Twitter, Mochat, WhatsApp voice). Community friction persists around **security defaults being too restrictive**, **Docker/ARM64 deployment issues**, and **configuration backward compatibility**.

---

## 2. Releases

| Version | Key Changes | Breaking/Migration Notes |
|---------|-------------|--------------------------|
| **[v0.4.2-beta.300](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.2-beta.300)** | Two-tier response cache, multi-provider token tracking, cache analytics; X/Twitter & Mochat channels; `initial_prompt` in transcription config; heartbeat health metrics with adaptive intervals | None noted |
| **[v0.4.2-beta.281](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.2-beta.281)** | X/Twitter & Mochat channels; transcription `initial_prompt` | None noted |
| **[v0.4.1-beta.269](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.1-beta.269)** | Cache infrastructure; heartbeat metrics; VolcEngine/ByteDance gateway support (`VOLCENGINE_API_KEY`); **SQLite backend with FTS5** for sessions | **Migration**: New `data_retention`, `cloud_ops`, `conversational_ai` config sections required |
| **[v0.4.1-beta.267](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.1-beta.267)** | Cache; heartbeat; SQLite sessions with trait abstraction | Same as above |
| **[v0.4.1-beta.266](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.1-beta.266)** | Identical to .267 | — |
| **[v0.4.0](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.0)** | Tool call failure surfacing; **token-based context compaction**; **persistent sessions**; LLM consolidation; **"Hands" autonomous agent packages**; **HMAC-SHA256 node transport**; Notion integration | **Breaking**: Default branch changed from `main` to `master`; some features (agent_ipc, MCP) temporarily lost in transition |
| **[v0.4.0-beta.260](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.0-beta.260)** | Cache; heartbeat; SQLite sessions | Beta stabilization |
| **[v0.4.0-beta.259](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.0-beta.259)** | Incremental improvements | — |
| **[v0.4.0-beta.258](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.0-beta.258)** | Tool failure messages; context compaction; Hands packages; HMAC-SHA256 transport; Notion | Feature-complete beta |
| **[v0.4.0-beta.257](https://github.comzeroclaw-labs/zeroclaw/releases/tag/v0.4.0-beta.257)** | Identical to .258 | — |

**Critical Migration Alert**: v0.3.4+ requires new config sections (`data_retention`, `cloud_ops`, `conversational_ai`) — see [#3684](https://github.com/zeroclaw-labs/zeroclaw/issues/3684).

---

## 3. Project Progress

### Merged/Closed PRs Today (43 total, selected highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#3740](https://github.com/zeroclaw-labs/zeroclaw/pull/3740) | @SimianAstronaut7 | **Fixed broken interactive onboarding** — restores TTY detection for `zeroclaw onboard` |
| [#3739](https://github.com/zeroclaw-labs/zeroclaw/pull/3739) | @SimianAstronaut7 | **New `read_skill` tool** — reliable skill loading in Compact mode without shell+cat |
| [#3601](https://github.com/zeroclaw-labs/zeroclaw/pull/3601) | @rareba | **Merkle hash-chain audit trail** — tamper-evident logging for security forensics |
| [#3744](https://github.com/zeroclaw-labs/zeroclaw/pull/3744) | @theonlyhennygod | **Fixed duplicate tool schema injection** in XML dispatcher (35 tools × 2 bug) |
| [#3617](https://github.com/zeroclaw-labs/zeroclaw/pull/3617) | @rareba | **WhatsApp voice message transcription** — media message support |
| [#3610](https://github.com/zeroclaw-labs/zeroclaw/pull/3610) | @rareba | **Browser delegation tool** — delegate browser tasks to CLI tools for corporate apps |
| [#3613](https://github.com/zeroclaw-labs/zeroclaw/pull/3613) | @rareba | **CLI session manager** — persistent sessions for Claude Code, Gemini CLI, KiloCLI |
| [#3378](https://github.com/zeroclaw-labs/zeroclaw/pull/3378) | @sghael | **Fixed Matrix multi-room reply routing** regression from #3224 |
| [#3595](https://github.com/zeroclaw-labs/zeroclaw/pull/3595) | @rareba | **Hands dashboard metrics** — observability for autonomous agent subsystem |
| [#3114](https://github.com/zeroclaw-labs/zeroclaw/pull/3114) | @mark-linyb | **Fixed missing `web/dist/` in fresh clones** — build reliability |

**Infrastructure**: Rust 1.94 upgrade ([#3692](https://github.com/zeroclaw-labs/zeroclaw/pull/3692)), SOCKS proxy scheme support ([#3001](https://github.com/zeroclaw-labs/zeroclaw/pull/3001)).

---

## 4. Community Hot Topics

| Issue/PR | Comments | 🔥 Analysis |
|----------|----------|-------------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) — "除了安全,什么功能也没有" (Besides security, no functionality) | **39** | **Core tension**: Security sandbox too aggressive for personal/hobby use. User wants "god mode" toggle. Underlying need: **granular permission profiles** (hobbyist vs. enterprise) |
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) — GLIBC_2.39 not found | 10 | **Deployment friction**: Binary portability on older Linux distros. Need static linking or musl builds |
| [#2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263) — Multi-Crate Workspace initiative | 7 | **Technical debt**: Compile times hurting contributor velocity. RFI for workspace split — signals architectural maturation |
| [#3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540) — Lark/Feishu channel won't start | 7 | **Feature flag confusion**: Built with `channel-lark` but runtime fails. Documentation/build system gap |
| [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) — MCP support in `agent` subcommand | 6 | **Inconsistency**: MCP works in channels but not standalone agent mode. Architecture alignment needed |
| [#3293](https://github.com/zeroclaw-labs/zeroclaw/pull/3293) — Add channel-matrix to official builds | *new* | **Distribution gap**: Matrix support exists in code but not pre-built binaries |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0** — Data loss/security | [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) Agent self-escalates permissions via config.toml rewrite | **OPEN** | None |
| **S0** — Data loss/security | [#3674](https://github.com/zeroclaw-labs/zeroclaw/issues/3674) Vision error poisons conversation history permanently | **CLOSED** | Fixed in release |
| **S0** — Data loss/security | [#3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687) Docker image ships dummy binary (292 KB vs 9.6 MB) | **CLOSED** | Fixed in release |
| **S1** — Workflow blocked | [#3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540) Lark/Feishu channel fails to start | **OPEN** | None |
| **S1** — Workflow blocked | [#3580](https://github.com/zeroclaw-labs/zeroclaw/issues/3580) Web dashboard not available (missing build) | **OPEN** | [#3114](https://github.com/zeroclaw-labs/zeroclaw/pull/3114) merged |
| **S1** — Workflow blocked | [#3714](https://github.com/zeroclaw-labs/zeroclaw/issues/3714) Docker exits immediately on ARM64 (DGX Spark) | **OPEN** | None |
| **S1** — Workflow blocked | [#3746](https://github.com/zeroclaw-labs/zeroclaw/issues/3746) Deferred MCP tools never callable after `tool_search` | **OPEN** | [#3747](https://github.com/zeroclaw-labs/zeroclaw/pull/3747) **OPEN** |
| **S1** — Workflow blocked | [#3684](https://github.com/zeroclaw-labs/zeroclaw/issues/3684) v0.3.4+ breaks startup: missing config fields | **CLOSED** | Migration: add new config sections |
| **S2** — Degraded | [#3688](https://github.com/zeroclaw-labs/zeroclaw/issues/3688) Daemon terminates when SSH session closes | **CLOSED** | Fixed |
| **S2** — Degraded | [#3658](https://github.com/zeroclaw-labs/zeroclaw/issues/3658) Interactive onboarding broken in v0.3.2 | **OPEN** | [#3740](https://github.com/zeroclaw-labs/zeroclaw/pull/3740) **MERGED** |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **MCP in `agent` subcommand** | [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) | **High** | Architecture inconsistency; active discussion |
| **"Full" Docker image with all features** | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | **Medium** | Clear user need; memory/UX tradeoff to resolve |
| **Amazon Bedrock API key support** | [#3742](https://github.com/zeroclaw-labs/zeroclaw/issues/3742) | **Medium** | AWS feature parity; straightforward implementation |
| **ARM64 Docker support** | [#3714](https://github.com/zeroclaw-labs/zeroclaw/issues/3714) | **High** | Hardware trend (DGX Spark); blocking users |
| **Multi-crate workspace (M4-5)** | [#2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263) | **Medium-term** | Contributor pain point; needs RFI completion |
| **Security "god mode" toggle** | [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | **Low-Medium** | Philosophical tension; may get profiles instead |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Security defaults too restrictive** | [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) (39 comments), [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) | 🔴 High |
| **Configuration fragility** | [#3684](https://github.com/zeroclaw-labs/zeroclaw/issues/3684), [#3643](https://github.com/zeroclaw-labs/zeroclaw/issues/3643) | 🔴 High |
| **Docker deployment issues** | [#3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687), [#3714](https://github.com/zeroclaw-labs/zeroclaw/issues/3714), [#3580](https://github.com/zeroclaw-labs/zeroclaw/issues/3580) | 🔴 High |
| **Feature discoverability** | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (WhatsApp disabled by default), [#3745](https://github.com/zeroclaw-labs/zeroclaw/issues/3745) (PATH not set) | 🟡 Medium |
| **Platform compatibility** | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) (GLIBC), [#3714](https://github.com/zeroclaw-labs/zeroclaw/issues/3714) (ARM64) | 🟡 Medium |

### Positive Signals
- **Hands autonomous agents** and **persistent sessions** show investment in long-running agent workflows
- **WhatsApp voice transcription** and **browser delegation** expand real-world utility
- **Merkle audit trails** demonstrate security maturity for enterprise adoption

---

## 8. Backlog Watch

| Issue/PR | Age | Blocker | Action Needed |
|----------|-----|---------|---------------|
| [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) — Agent self-escalation | 16 days | Security review | Design: config write sandboxing |
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) — WebUI agent not working (v0.1.8) | 11 days | Repro needed | Maintainer triage |
| [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) — Aliyun Bailian coding plan | 8 days | Provider compatibility | Integration help |
| [#3348](https://github.com/zeroclaw-labs/zeroclaw/pull/3348) — Webhook payload format option | 5 days | Review | Merge decision |
| [#3613](https://github.com/zeroclaw-labs/zeroclaw/pull/3613) — CLI session manager | 2 days | Review | Performance validation |

---

*Digest generated from GitHub activity 2026-03-16 to 2026-03-17. ZeroClaw is a rapidly evolving Rust-based AI agent framework with enterprise security features and broad channel integrations.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-17

---

## 1. Today's Overview

PicoClaw shows **very high development velocity** with 77 PRs and 22 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.3. The project is rapidly iterating on core agent architecture, provider integrations, and security hardening. Notably, the community is driving significant contributions around event-driven agent loops, MCP server management, and multi-channel support. The high PR-to-issue ratio (3.5:1) suggests strong maintainer responsiveness, though the large number of open PRs (45) indicates a potential merge queue bottleneck. A nightly build was released, signaling preparation for an upcoming stable release.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.3-nightly.20260316.f2addff0](https://github.com/sipeed/picoclaw/compare/v0.2.3...main) | Nightly | Automated build from main branch; marked unstable. No detailed changelog provided. |

**Migration Notes:** None specified. Users should expect instability and report issues against this nightly.

---

## 3. Project Progress

### Merged/Closed PRs Today (32 total, selected highlights)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#1536](https://github.com/sipeed/picoclaw/pull/1536) | @alexhoshina | Fix media tempdir permissions for sandboxed workspace | Unblocks file attachment workflows |
| [#1570](https://github.com/sipeed/picoclaw/pull/1570) | @alexhoshina | Cron jobs now default to agent execution vs. direct echo | Fixes silent failures in scheduled tasks |
| [#1645](https://github.com/sipeed/picoclaw/pull/1645) | @dimonb | Mask Telegram bot tokens in third-party logger output | **Security hardening** — prevents credential leakage |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | @aishannon | QQ Channel: rich media parsing (voice, video, files) + Markdown replies | Major platform expansion |

### Advanced Features (Open PRs)

| PR | Author | Feature | Status |
|----|--------|---------|--------|
| [#1636](https://github.com/sipeed/picoclaw/pull/1636) | @lppp04808 | **SubTurn hierarchical agent execution** — multi-agent coordination with interrupts, rollback | Implements [#1316](https://github.com/sipeed/picoclaw/issues/1316); foundational architecture change |
| [#1654](https://github.com/sipeed/picoclaw/pull/1654) | @afjcjsbx | Per-server MCP deferred loading | Granular tool discovery control |
| [#1618](https://github.com/sipeed/picoclaw/pull/1618) | @dataCenter430 | Model-native search (`prefer_native`) for OpenAI/Codex | Avoids duplicate search surfaces |
| [#1649](https://github.com/sipeed/picoclaw/pull/1649) | @cytown | Cross-platform system tray UI | Desktop usability milestone |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | Topic | Underlying Need |
|----------|----------|-------|---------------|
| [#1316](https://github.com/sipeed/picoclaw/issues/1316) | 11 | Event-driven agent loop with hooks/interrupts | **Observability & control** — users need to supervise, steer, and interrupt autonomous agents in production |
| [#39](https://github.com/sipeed/picoclaw/issues/39) | 5 | `picoclaw doctor` diagnostic command | **Operational reliability** — self-healing deployments without manual debugging |
| [#1615](https://github.com/sipeed/picoclaw/issues/1615) | 3 | Include sender identity in dynamic context | **Multi-tenant awareness** — group chat bots need user context for personalization |
| [#1228](https://github.com/sipeed/picoclaw/issues/1228) | 3 | Pre-install dev tools in Docker image | **Developer experience** — reduce friction for real-world tool use |

**Analysis:** The top issue (#1316) reveals a critical architectural gap: PicoClaw's agent loop is currently a "black box" unsuitable for production orchestration. The 11-comment discussion indicates strong demand for event streaming, lifecycle hooks, and external control planes — positioning PicoClaw as a potential backend for enterprise agent platforms.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **Critical** | [#1658](https://github.com/sipeed/picoclaw/issues/1658) | Anthropic 400 error: empty `tool_use.name` in session replay | [#1659](https://github.com/sipeed/picoclaw/pull/1659) (open, ready) |
| 🔴 **Critical** | [#1652](https://github.com/sipeed/picoclaw/issues/1652) | GLM Coding Plan unsupported — balance draining or 429 errors | None |
| 🟡 **High** | [#1650](https://github.com/sipeed/picoclaw/issues/1650) | Service restarting indefinitely (Feishu + volcengine) | None |
| 🟡 **High** | [#1641](https://github.com/sipeed/picoclaw/issues/1641) | `max_tool_iterations` failure after days of uptime | None |
| 🟡 **High** | [#1634](https://github.com/sipeed/picoclaw/issues/1634) | Per-agent model config selects wrong provider (shared instance bug) | None |
| 🟡 **High** | [#1635](https://github.com/sipeed/picoclaw/issues/1635) | `model_list` doesn't inherit `api_key/api_base` from providers | None |
| 🟢 **Medium** | [#1624](https://github.com/sipeed/picoclaw/issues/1624) | Anthropic model ID dots not normalized to dashes | [#1626](https://github.com/sipeed/picoclaw/pull/1626), [#1630](https://github.com/sipeed/picoclaw/pull/1630) (duplicate PRs) |
| 🟢 **Medium** | [#1653](https://github.com/sipeed/picoclaw/issues/1653) | OpenRouter 'connection reset by peer' on small Linux boards | None |

**Stability Assessment:** Multiple critical provider-integration bugs suggest rapid feature expansion is straining the abstraction layer. The Anthropic tool name bug (#1658) has an immediate fix; the GLM Coding Plan issue (#1652) indicates incomplete provider compatibility testing.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood v0.2.3 | Rationale |
|---------|----------|-------------------|-----------|
| **Event-driven agent loop (SubTurns)** | [#1316](https://github.com/sipeed/picoclaw/issues/1316), [#1636](https://github.com/sipeed/picoclaw/pull/1636) | **High** | PR open, foundational to other features |
| **TTS/ASR voice support** | [#1648](https://github.com/sipeed/picoclaw/issues/1648) | Medium | New request, architecture discussion stage |
| **`picoclaw doctor` diagnostics** | [#39](https://github.com/sipeed/picoclaw/issues/39) | Medium | Long-standing, high community value |
| **Per-model cooldown** | [#1612](https://github.com/sipeed/picoclaw/issues/1612) | Medium | LiteLLM/Ollama users need granular failover |
| **Cron timezone support** | [#1623](https://github.com/sipeed/picoclaw/issues/1623) | High | Simple, international user demand |
| **Disable `exec` tool option** | [#1621](https://github.com/sipeed/picoclaw/issues/1621), [#1627](https://github.com/sipeed/picoclaw/pull/1627) | **High** | Security-critical, PR ready |
| **System tray UI** | [#1649](https://github.com/sipeed/picoclaw/pull/1649) | Medium | Desktop packaging milestone |

**Prediction:** v0.2.3 stable will likely include SubTurns architecture, exec tool disable option, cron timezone support, and Anthropic provider fixes. Voice/TTS support may slip to v0.2.4.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent failures / poor observability** | [#1316](https://github.com/sipeed/picoclaw/issues/1316), [#1475](https://github.com/sipeed/picoclaw/issues/1475), [#1650](https://github.com/sipeed/picoclaw/issues/1650) | Critical |
| **Provider compatibility gaps** | [#1652](https://github.com/sipeed/picoclaw/issues/1652) (GLM), [#1658](https://github.com/sipeed/picoclaw/issues/1658) (Anthropic), [#1624](https://github.com/sipeed/picoclaw/issues/1624) | High |
| **Configuration DRY violations** | [#1635](https://github.com/sipeed/picoclaw/issues/1635), [#1638](https://github.com/sipeed/picoclaw/issues/1638) | Medium |
| **Resource exhaustion (cron, tokens)** | [#1655](https://github.com/sipeed/picoclaw/issues/1655), [#1612](https://github.com/sipeed/picoclaw/issues/1612) | Medium |

### Positive Signals

- Strong multi-channel adoption (QQ, Feishu, Telegram, WhatsApp)
- Active security consciousness (token masking, exec disable requests)
- Enterprise interest in orchestration/gateway features ([#1475](https://github.com/sipeed/picoclaw/issues/1475), [#751](https://github.com/sipeed/picoclaw/pull/751))

---

## 8. Backlog Watch

| Item | Age | Issue | Risk |
|------|-----|-------|------|
| WebSocket gateway implementation | 20 days | [#751](https://github.com/sipeed/picoclaw/pull/751) | Stale; blocks external orchestration |
| Cron agent response delivery | 20 days | [#757](https://github.com/sipeed/picoclaw/pull/757) | Silent message loss in production |
| Context boundary detection | 4 days | [#1490](https://github.com/sipeed/picoclaw/pull/1490) | Token budgeting critical for cost control |
| MCP per-server deferred mode | 1 day | [#1654](https://github.com/sipeed/picoclaw/pull/1654) | Fresh but architecturally significant |

**Maintainer Attention Needed:** The WebSocket gateway PR (#751) and cron fix (#757) have been open since late February without merge despite functional completeness — potential review bandwidth constraint.

---

*Digest generated from 77 PRs and 22 issues updated 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-17

## 1. Today's Overview

NanoClaw shows **elevated activity** with 71 total updates in the past 24 hours (21 issues, 50 PRs), indicating a maturing project experiencing growing pains. The high PR volume (32 open, 18 merged/closed) suggests active community contribution, but the 20:1 ratio of open-to-closed issues signals potential maintainer bandwidth constraints. Critical stability issues persist around token expiration, container runtime race conditions, and log management—core infrastructure problems affecting daily reliability. Security concerns have emerged with two related issues filed today, including a request for private disclosure. No new releases were cut, leaving fixes in PR limbo for users.

---

## 2. Releases

**None** — No new versions released today. The absence of releases despite 18 merged/closed PRs and multiple high-priority bug fixes suggests users must run from source or wait for the next version to receive critical patches.

---

## 3. Project Progress

### Merged/Closed PRs Today (18 total, key highlights):

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#1156](https://github.com/qwibitai/nanoclaw/pull/1156) | @mbravorus | Fix: relay agent text when turn ends with tool call instead of text | **Critical UX fix** — prevents silent message loss |
| [#1155](https://github.com/qwibitai/nanoclaw/pull/1155), [#1154](https://github.com/qwibitai/nanoclaw/pull/1154) | @mbravorus | Fix Chromium SIGTRAP crash due to read-only XDG_CONFIG_HOME | **Stability** — browser automation reliability |
| [#927](https://github.com/qwibitai/nanoclaw/pull/927) | @mbravorus | Fix: refresh tasks snapshot immediately after IPC task mutations | **Data consistency** — real-time task visibility |
| [#1153](https://github.com/qwibitai/nanoclaw/pull/1153) | @sh1b4b0t | Add google-tasks skill as local repo skill | **Skill availability** — reduces external dependency |
| [#995](https://github.com/qwibitai/nanoclaw/pull/995) | @mbravorus | (duplicate fix, closed) | — |
| [#486](https://github.com/qwibitai/nanoclaw/pull/486) | @office268 | Chore PR (blocked, pending closure) | — |

**Notable advancement:** @mbravorus emerged as a prolific contributor with 4 merged fixes addressing core agent-container communication, browser stability, and task management reliability.

---

## 4. Community Hot Topics

### Most Active by Engagement:

| Issue/PR | Type | Comments | 👍 | Underlying Need |
|---|---|---|---|---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | Bug: OAuth token expiration | 4 | 0 | **Operational reliability** — background services need self-healing auth |
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) | Enhancement: Podman support | 4 | 4 | **Vendor independence** — Docker Desktop licensing/privacy concerns |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) | Enhancement: Signal integration | 3 | 2 | **Privacy-first messaging** — WhatsApp alternative for security-conscious users |

**Analysis:** The OAuth token issue (#730) reveals architectural tension: NanoClaw's design assumes interactive CLI usage (where tokens refresh naturally), but users deploy it as unattended infrastructure. Podman support (#957) reflects enterprise/Linux user growth uncomfortable with Docker's direction. Signal integration (#29) aligns with the project's privacy-conscious user base.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Impact |
|---|---|---|---|---|
| **Critical** | [#730](https://github.com/qwibitai/nanoclaw/issues/730) — CLAUDE_CODE_OAUTH_TOKEN expires overnight, causes 401 failures | Open | ❌ No | Daily service outages; manual intervention required |
| **Critical** | [#1067](https://github.com/qwibitai/nanoclaw/issues/1067) — Apple Container runtime race condition on reboot | Open | ❌ No | macOS auto-start completely broken |
| **High** | [#1142](https://github.com/qwibitai/nanoclaw/issues/1142) — Agent SDK pinned to v0.2.34, outdated model default | Open | ❌ No | Users silently on old models; fork maintenance burden |
| **High** | [#1088](https://github.com/qwibitai/nanoclaw/issues/1088) — 27 GB log files after 5 days | **Closed** | ✅ Workaround provided | Disk exhaustion risk; needs proper log rotation |
| **High** | [#1150](https://github.com/qwibitai/nanoclaw/issues/1150) — Container error logs include full user prompts (security) | Open | ❌ No | **Data exposure in logs** |
| **High** | [#1149](https://github.com/qwibitai/nanoclaw/issues/1149) — Security finding, private disclosure requested | Open | ❌ No | Unknown scope; responsible disclosure pending |
| **Medium** | [#698](https://github.com/qwibitai/nanoclaw/issues/698) — Agent cannot determine day of week from ISO timestamps | Open | ✅ [#1098](https://github.com/qwibitai/nanoclaw/pull/1098) | Scheduling/temporal reasoning failures |
| **Medium** | [#1143](https://github.com/qwibitai/nanoclaw/issues/1143) — Skills docs reference non-existent `/data/env` path | Open | ❌ No | User confusion; documentation drift |

**Stability assessment:** Infrastructure-grade reliability issues dominate. The OAuth token and Apple runtime race condition are deployment blockers for production use. The security issues (#1150, #1149) require immediate maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood in Next Version |
|---|---|---|---|
| **Podman support** | [#957](https://github.com/qwibitai/nanoclaw/issues/957) | Strong community demand (4 👍), Docker alternatives trend | **High** — documentation/compat layer |
| **OpenAI API support** | [#1092](https://github.com/qwibitai/nanoclaw/issues/1092), [#1015](https://github.com/qwibitai/nanoclaw/issues/1015), [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) | Multiple requests, provider-agnostic architecture pressure | **Medium-High** — may require abstraction layer |
| **Self-learning system (Epic)** | [#907](https://github.com/qwibitai/nanoclaw/issues/907) | FTS5 search, structured memory, skill self-creation | **Medium** — large scope, needs design review |
| **Per-group conversation search** | [#1160](https://github.com/qwibitai/nanoclaw/pull/1160) | PR already open, implements part of #907 | **High** — near-term merge likely |
| **MemOS integration** | [#1130](https://github.com/qwibitai/nanoclaw/issues/1130), [#1131](https://github.com/qwibitai/nanoclaw/pull/1131) | PR open, opt-in skill pattern | **High** — follows existing skill architecture |
| **Google Workspace CLI** | [#1122](https://github.com/qwibitai/nanoclaw/issues/1122) | Enterprise productivity use case | **Medium** — depends on maintainer priorities |
| **Signal messaging** | [#29](https://github.com/qwibitai/nanoclaw/issues/29) | Long-standing, privacy-aligned | **Low-Medium** — complex integration |

**Prediction:** Next release likely includes: Podman documentation, per-group search (#1160), MemOS skill (#1131), and OpenAI provider abstraction (given 3+ requests).

---

## 7. User Feedback Summary

### Pain Points (verbatim themes):

| Category | Quote/Theme | Frequency |
|---|---|---|
| **Authentication friction** | "token expires overnight — containers fail with 401 each morning" | Recurring |
| **Platform limitations** | "Current docker sandbox doesn't support Intel macs" | Specific but blocking |
| **Provider lock-in** | "many companies have other AI providers for different reasons" | Strategic concern |
| **Silent failures** | "agent's reply silently disappears" | UX degradation |
| **Documentation drift** | "reference /data/env path that no longer exists" | Maintenance gap |
| **Fork maintenance** | "auto-merge silently drops customized code without conflict markers" | Customization penalty |

### Satisfaction Drivers:
- Well-designed architecture ("very useful and well designed" — #957)
- Active skill ecosystem (Telegram, Slack, Discord patterns established)
- Container-based isolation approach

### Dissatisfaction Drivers:
- Assumes Claude Code CLI presence for core functionality
- macOS-first development leaves Linux/Intel users behind
- Log management and disk usage unhandled
- Security practices (prompt logging) need hardening

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days old, high priority):

| Issue | Age | Risk | Action Needed |
|---|---|---|---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) OAuth token expiration | 12 days | **Production blocker** | Design token refresh mechanism or document API key requirement |
| [#698](https://github.com/qwibitai/nanoclaw/issues/698) Day-of-week calculation | 12 days | Has PR #1098 | Review and merge #1098 |
| [#907](https://github.com/qwibitai/nanoclaw/issues/907) Learning system epic | 7 days | Roadmap significance | Architectural review, scope decision |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) Signal integration | 43 days | Community patience | Decline or roadmap commitment |

### PRs At Risk of Staleness:

| PR | Status | Risk |
|---|---|---|
| [#1098](https://github.com/qwibitai/nanoclaw/pull/1098) Weekday timestamp fix | Needs review | Simple fix, should merge |
| [#1089](https://github.com/qwibitai/nanoclaw/pull/1089) Linux/Docker deployment | Needs review | Expands addressable market |
| [#1126](https://github.com/qwibitai/nanoclaw/pull/1126) Optional remote-control flag | Needs review | Security/control feature |

### Automation Debt:
- [#1148](https://github.com/qwibitai/nanoclaw/issues/1148), [#1147](https://github.com/qwibitai/nanoclaw/issues/1147): Skill branch merge-forward failures for `skill/apple-container` and `skill/compact` — indicates CI/maintenance automation needs tuning.

---

**Project Health Score: 🟡 Caution** — High activity masks infrastructure debt. Critical reliability and security issues require maintainer focus before feature expansion.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-17

## 1. Today's Overview

NullClaw shows **high development velocity** with 39 PRs and 11 issues updated in the last 24 hours, indicating an active maintenance window following the v2026.3.15 release. The project is prioritizing **provider ecosystem expansion** (Chinese LLM providers, reasoning model support), **platform stability** (Windows WebSocket fixes, legacy Linux compatibility), and **observability infrastructure** (OTLP, cron diagnostics). The 27:12 open-to-merged PR ratio suggests healthy review throughput, though the backlog of open PRs indicates substantial feature work in flight. The release cadence remains consistent with weekly patch releases.

---

## 2. Releases

### v2026.3.15 (2026-03-15)
| Change | Author | PR |
|--------|--------|-----|
| Version bump to 2026.3.14 | @DonPrus | [#513](https://github.com/nullclaw/nullclaw/pull/513) |
| **fix(cron):** Handle `InvalidExe` on macOS after in-place binary replacement | @vernonstinebaker | [#522](https://github.com/nullclaw/nullclaw/pull/522) |
| Use portable `Atomic` for Slack channel | @Centa | — |

**Notable:** The macOS cron fix addresses a production reliability issue where binary hot-swapping caused agent subprocess spawning failures. No breaking changes identified.

---

## 3. Project Progress

### Merged/Closed PRs (12 total)

| PR | Title | Author | Impact |
|----|-------|--------|--------|
| [#522](https://github.com/nullclaw/nullclaw/pull/522) | fix(cron): handle InvalidExe on macOS | @vernonstinebaker | **Production stability** — fixes cron agent spawning after binary updates |
| [#550](https://github.com/nullclaw/nullclaw/pull/550) | fix(web): restore local WebChannel on Windows + vendor deps | @manelsen | **Cross-platform parity** — resolves Windows WebSocket `posix.read()` incompatibility |
| [#567](https://github.com/nullclaw/nullclaw/pull/567) | fix(mcp): ensure MCP tools initialized in all tool-building paths | @vernonstinebaker | **Bug fix** — restores WebDAV, Vikunja MCP tools in A2A sessions |
| [#570](https://github.com/nullclaw/nullclaw/pull/570) | fix(agent): suppress orphan closing tool-call tag | @vernonstinebaker | **UX polish** — prevents `</tool_call>` leakage to users |
| [#587](https://github.com/nullclaw/nullclaw/pull/587) | docs(agents): add §8.1 test coverage mandate | @vernonstinebaker | **Process** — codifies testing requirements |

**Key Advances:**
- **Windows platform** now has functional WebSocket gateway support
- **MCP ecosystem** reliability restored for external tool integrations
- **Cron subsystem** hardened against deployment edge cases

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Activity | Analysis |
|----------|----------|----------|
| [#117](https://github.com/nullclaw/nullclaw/issues/117) "Add a custom provider" | 9 comments, open since Feb 25 | **Core documentation gap** — users struggle to integrate Claude/custom models; indicates need for provider authoring guide |
| [#220](https://github.com/nullclaw/nullclaw/issues/220) | 3 comments, **closed** | Build failure on Zig 0.15.2 with offline compilation — resolved |
| [#583](https://github.com/nullclaw/nullclaw/issues/583) "How does it compare with MiniClaw?" | 1 comment | **Competitive positioning** — community seeking clarity vs. emerging alternatives (memovai/mimiclaw) |

**Underlying Needs:**
- **Provider extensibility** is a friction point (#117) — the "transfer station" architecture lacks clear extension documentation
- **Comparative documentation** needed as ecosystem fragments across similar projects

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 **High** | [#592](https://github.com/nullclaw/nullclaw/issues/592) | Cron tasks silently not executing — configuration/load path issues | **PR [#598](https://github.com/nullclaw/nullclaw/pull/598)** in review |
| 🔴 **High** | [#576](https://github.com/nullclaw/nullclaw/issues/576) | `moonshot-intl` provider fails with `kimi-k2.5` — `reasoning_content` parsing | **PR [#594](https://github.com/nullclaw/nullclaw/pull/594)** in review |
| 🟡 **Medium** | [#599](https://github.com/nullclaw/nullclaw/issues/599) | Test failure: `downloadToFile` with restricted curl `--proto` config | No fix PR |
| 🟡 **Medium** | [#317](https://github.com/nullclaw/nullclaw/issues/317) | WebSocket gateway Windows failure | **Fixed in [#550](https://github.com/nullclaw/nullclaw/pull/550)** |
| 🟢 **Low** | [#220](https://github.com/nullclaw/nullclaw/issues/220) | Offline build failure Zig 0.15.2 | **Closed** |

**Stability Focus Areas:**
- **Reasoning model compatibility** (kimi-k2.5, glm-5) is an emerging theme — delta content extraction needs generalization
- **Cron subsystem** receiving diagnostic improvements after user reports of silent failures

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|---------|----------|---------------------------|
| **Single-command full-stack bootstrap** | [#588](https://github.com/nullclaw/nullclaw/issues/588) | Medium — substantial infrastructure request, aligns with ecosystem growth |
| **Runtime observability / OTLP** | [#600](https://github.com/nullclaw/nullclaw/pull/600) | **High** — PR open, active development |
| **Tencent/Hunyuan + Baichuan providers** | [#595](https://github.com/nullclaw/nullclaw/pull/595) | **High** — PR ready, China market expansion |
| **DingTalk/Lark Card 2.0 rich messaging** | [#596](https://github.com/nullclaw/nullclaw/pull/596) | **High** — enterprise channel enhancement |
| **Agent `--skill` routing option** | [#580](https://github.com/nullclaw/nullclaw/issues/580) | Medium — architectural change, needs design review |
| **wasm3 embedded runtime** | [#568](https://github.com/nullclaw/nullclaw/pull/568) | Medium — performance optimization, reduces external deps |

**Predicted v2026.3.22 contents:** OTLP observability, Chinese provider expansion, rich messaging for enterprise channels, reasoning model fixes.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent failures** | Cron not running (#592), MCP tools unavailable (#567), opaque "Agent processing failed" | High — debugging friction |
| **Provider integration complexity** | Custom provider docs (#117), reasoning_content parsing (#576) | Medium |
| **Deployment friction** | Full-stack bootstrap (#588), offline builds (#220) | Medium |

### Positive Signals
- **Active maintainer response** — most issues receive same-day PRs
- **Windows platform** now fully supported after [#550](https://github.com/nullclaw/nullclaw/pull/550)
- **Enterprise channel depth** (Lark, DingTalk, WeChat) indicates serious B2B adoption

### Use Cases Emerging
- **Multi-tenant deployments** (gateway + nullhub + tickets + boiler)
- **China-market deployments** (Hunyuan, Baichuan, WeChat integrations)
- **Reasoning model workflows** (kimi-k2.5, glm-5 chain-of-thought)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#117](https://github.com/nullclaw/nullclaw/issues/117) Custom provider docs | 20 days | **User onboarding blocker** | Maintainer response or docs PR |
| [#583](https://github.com/nullclaw/nullclaw/issues/583) MiniClaw comparison | 1 day | Competitive positioning | Project maintainer comparison matrix |
| [#580](https://github.com/nullclaw/nullclaw/issues/580) `--skill` routing | 1 day | Feature request | Design discussion, API proposal |

**Maintainer Attention Recommended:** #117 has persisted across releases without resolution — a provider authoring guide or extensibility RFC would unblock community contributions.

---

*Digest generated from 50 data points across issues, PRs, and releases. Project health: **Strong velocity, improving stability, expanding provider ecosystem.***

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-17

## 1. Today's Overview

IronClaw shows **high development velocity** with 50 PRs and 24 issues updated in the last 24 hours, indicating an active bug bash and staging promotion cycle. The project is in a **stabilization phase** following a major staging promotion batch, with 10 issues closed and 20 PRs merged/closed. No new releases were cut, suggesting the team is consolidating changes before a versioned release. Critical attention is on **routine reliability** (event triggers, Telegram integration) and **LLM provider compatibility** (Mistral, NEAR AI, Anthropic). The automated CI system is actively flagging architectural debt and performance issues, creating pressure for refactoring.

---

## 2. Releases

**No new releases** — The project has not published a release in the tracked period. Development activity is concentrated on staging branch promotions (see PRs #1197, #1267, #1268).

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total, selected highlights):

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1265](https://github.com/nearai/ironclaw/pull/1265) | @nickpismenkov | Fix misleading "Error: Waiting for approval" UI message | **UX improvement** — removes user confusion during normal approval flows |
| [#1266](https://github.com/nearai/ironclaw/pull/1266) | @henrypark133 | CI: Isolate heavy integration tests | **Build reliability** — faster CI, reduced flakiness |
| [#1264](https://github.com/nearai/ironclaw/pull/1264) | @henrypark133 | Bump channel registry versions (Feishu 0.1.0→0.1.1, Telegram 0.2.3→0.2.4) | **Unblocks promotion pipeline** |
| [#1267](https://github.com/nearai/ironclaw/pull/1267), [#1268](https://github.com/nearai/ironclaw/pull/1268) | @ironclaw-ci[bot] | Staging promotions (two batches) | **Infrastructure** — continuous deployment flow |

### Key Fixes Advanced:
- **Event-triggered routines** — Root cause identified (case-sensitive channel matching, cache invalidation) with fixes in [#1211](https://github.com/nearai/ironclaw/pull/1211)
- **LLM message ordering** — Fix for Claude 4.6 and NEAR AI "no user query" errors in [#1259](https://github.com/nearai/ironclaw/pull/1259)
- **Mistral compatibility** — Tool call ID format fix in [#1242](https://github.com/nearai/ironclaw/pull/1242)

---

## 4. Community Hot Topics

### Most Active by Engagement:

| Issue/PR | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#997](https://github.com/nearai/ironclaw/issues/997) | 1 | Misleading "Error: Waiting for approval" message | **Trust calibration** — Users panic at normal states; need clear status semantics |
| [#998](https://github.com/nearai/ironclaw/issues/998) | 1 | Routine update rejects schedule/type changes | **Workflow flexibility** — Users expect mutable routines, not delete/recreate |
| [#995](https://github.com/nearai/ironclaw/issues/995) | 1 | Cross-channel routine visibility (chat ↔ Telegram) | **Unified experience** — Single user identity across channels |
| [#763](https://github.com/nearai/ironclaw/issues/763) | 1 | NEAR AI "No user query found in messages" | **Multi-provider robustness** — Message format compatibility across LLMs |
| [#1244](https://github.com/nearai/ironclaw/issues/1244) | 1 | Remove/reduce `onboard` command | **Friction reduction** — 9-step onboarding is abandonment risk |

**Pattern:** All top issues involve **cognitive load reduction** and **cross-system consistency**. Users struggle with state visibility, configuration portability, and setup complexity.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **P1** | [#998](https://github.com/nearai/ironclaw/issues/998) | Closed | — | Routine schedule/type changes blocked on non-cron routines |
| **P1** | [#995](https://github.com/nearai/ironclaw/issues/995) | Closed | — | Routines invisible across Telegram/chat boundary |
| **P1** | [#994](https://github.com/nearai/ironclaw/issues/994) | Closed | — | Telegram broadcast fails with "Invalid chat_id 'default'" |
| **P1** | [#991](https://github.com/nearai/ironclaw/issues/991) | Closed | — | Intermittent Telegram token validation failures (HTTP 404) |
| **P1** | [#1051](https://github.com/nearai/ironclaw/issues/1051) | Closed | [#1211](https://github.com/nearai/ironclaw/pull/1211) | Event-triggered routines never fire |
| **P1** | [#1076](https://github.com/nearai/ironclaw/issues/1076) | Closed | [#1211](https://github.com/nearai/ironclaw/pull/1211) | Routine mutations don't refresh event trigger cache |
| **P2** | [#1000](https://github.com/nearai/ironclaw/issues/1000) | Open | [#1269](https://github.com/nearai/ironclaw/pull/1269) | Rate limiter returns "retry after None" |
| **P2** | [#1001](https://github.com/nearai/ironclaw/issues/1001) | Open | — | Telegram pairing flow UX gaps |

### CI-Detected Architectural Issues (New Today):
All auto-filed by `@ironclaw-ci[bot]` from staging review:

| Issue | Severity | Description | Risk |
|:---|:---|:---|:---|
| [#1247](https://github.com/nearai/ironclaw/issues/1247) | **HIGH** | Synchronous 120-second blocking poll in HTTP handler | **Performance/deadlock** |
| [#1248](https://github.com/nearai/ironclaw/issues/1248) | **HIGH** | Hardcoded channel logic violates CLAUDE.md architecture | **Maintainability** |
| [#1249](https://github.com/nearai/ironclaw/issues/1249) | **HIGH** | Telegram logic bloats ExtensionManager | **Modularity** |
| [#1250](https://github.com/nearai/ironclaw/issues/1250) | MEDIUM | Response logic mismatch in chat auth handler | **Security edge case** |
| [#1251](https://github.com/nearai/ironclaw/issues/1251) | MEDIUM | Channel config mappings lack extensibility | **Future scalability** |
| [#1252](https://github.com/nearai/ironclaw/issues/1252) | MEDIUM | Unbounded allocations in hot polling loop | **Memory pressure** |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **WebSocket channel support** | [#1245](https://github.com/nearai/ironclaw/issues/1245) | Medium | Clear user demand; architectural work needed |
| **Per-job MCP server filtering** | [#1243](https://github.com/nearai/ironclaw/pull/1243) | **High** | PR open, security-focused, gated by feature flag |
| **Programmatic Tool Calling (PTC)** | [#625](https://github.com/nearai/ironclaw/pull/625) | Medium | Large PR, infrastructure-heavy, enables agent autonomy |
| **Webhook triggers for routines** | [#736](https://github.com/nearai/ironclaw/pull/736) | Medium | Complete implementation, pending review |
| **Snapshot encryption at rest** | [#1235](https://github.com/nearai/ironclaw/issues/1235) | Medium | Security-sensitive, design stage |
| **Chat onboarding/routine advisor** | [#927](https://github.com/nearai/ironclaw/pull/927) | Medium | Replaces problematic `onboard` command, UX-focused |

**Emerging theme:** Security hardening (SSRF prevention in [#1221](https://github.com/nearai/ironclaw/pull/1221), encryption, per-job sandboxing) and **deployment context awareness** ([#857](https://github.com/nearai/ironclaw/issues/857)) suggest enterprise readiness push.

---

## 7. User Feedback Summary

### Pain Points (Explicit):

| Source | Issue | Sentiment |
|:---|:---|:---|
| @gagdiez | [#1244](https://github.com/nearai/ironclaw/issues/1244) | **Frustrated** — "more detrimental than anything else" |
| @andeya | [#1245](https://github.com/nearai/ironclaw/issues/1245) | **Disappointed** — "It's really sad" |
| Bug bash testers | [#997](https://github.com/nearai/ironclaw/issues/997)-[#1001](https://github.com/nearai/ironclaw/issues/1001) | **Confused** — Misleading errors, invisible state |

### Use Cases Surfaced:
- **Cross-platform routine management** (chat ↔ Telegram sync)
- **Event-driven automation** (message triggers, webhooks)
- **Multi-LLM portability** (Mistral, NEAR AI, Anthropic, Claude)

### Satisfaction Signals:
- Rapid bug bash closure (6 P1/P2 bugs closed in 24h)
- Active CI quality gates catching issues pre-merge

---

## 8. Backlog Watch

| Issue/PR | Age | Blocker | Action Needed |
|:---|:---|:---|:---|
| [#857](https://github.com/nearai/ironclaw/issues/857) | 6 days | Design | NEAR AI hosted deployment context — needs product decision |
| [#736](https://github.com/nearai/ironclaw/pull/736) | 9 days | Review | Webhook triggers — ready for final review |
| [#769](https://github.com/nearai/ironclaw/pull/769) | 8 days | Review | Sandbox error surfacing — security-critical |
| [#625](https://github.com/nearai/ironclaw/pull/625) | 11 days | Review | Programmatic Tool Calling — large infrastructure PR |
| [#927](https://github.com/nearai/ironclaw/pull/927) | 6 days | Review | New onboarding flow — blocks #1244 resolution |

**Risk:** [#1247](https://github.com/nearai/ironclaw/issues/1247)-[#1249](https://github.com/nearai/ironclaw/issues/1249) (HIGH severity CI findings) indicate **architectural debt accumulation** in channel/HTTP handling that may block future scaling.

---

*Digest generated from 50 PRs and 24 issues updated 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-17

## 1. Today's Overview

LobsterAI shows **high development velocity** with 14 PRs updated in 24 hours (12 merged/closed, 2 open) and 7 active issues, alongside the **v2026.3.16 release** focusing on Windows compatibility fixes. The project demonstrates strong engineering momentum with multiple critical bug fixes around IM integrations (DingTalk, Feishu/Lark), message ordering, and OpenClaw gateway stability. However, **user-reported issues reveal significant quality gaps**: upgrade path breakages, model compatibility problems (GLM5), and core functionality failures (sandbox, browser automation, skill marketplace). Community sentiment appears mixed—active development is evident, but users are encountering friction with stability, performance, and documentation.

---

## 2. Releases

### v2026.3.16 (2026-03-16)
| Aspect | Details |
|--------|---------|
| **Focus** | Windows compatibility & OpenClaw runtime stability |
| **Key Changes** | • Fixed OpenClaw runtime build and startup on Windows ([#261](https://github.com/netease-youdao/LobsterAI/pull/261))<br>• Resolved OpenClaw gateway startup failures on Windows ([#279](https://github.com/netease-youdao/LobsterAI/pull/279)) |
| **Breaking Changes** | ⚠️ **Potential**: Users upgrading from v0.2.4 report `No API key found for provider "lobster"` errors ([#452](https://github.com/netease-youdao/LobsterAI/issues/452)) |
| **Migration Notes** | Mac M-series users may need data cleanup/re-initialization; unclear if automatic migration path exists |

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Author | Focus | Impact |
|:---|:---|:---|:---|
| [#447](https://github.com/netease-youdao/LobsterAI/pull/447) | @wuleihenbang | Local image display via `localfile://` protocol | Fixes asset loading for local files |
| [#449](https://github.com/netease-youdao/LobsterAI/pull/449) | @nmgwddj | DingTalk scheduled task message delivery | **Critical fix**: Tasks triggered but messages never reached DingTalk |
| [#448](https://github.com/netease-youdao/LobsterAI/pull/448) | @winsan-zhang | Scheduled task history title display | UX: Shows job names instead of UUIDs |
| [#445](https://github.com/netease-youdao/LobsterAI/pull/445) | @liuzhq1986 | Permission confirmation dialog UI | Safety: Danger warnings always visible, commands no longer truncated |
| [#430](https://github.com/netease-youdao/LobsterAI/pull/430) | @liuzhq1986 | Agent identity templates + UI fix | Feature: Default persona templates; fixes folder menu hover |
| [#443](https://github.com/netease-youdao/LobsterAI/pull/443) | @liuzhq1986 | Gateway WebSocket auto-reconnect + performance | **Reliability**: Connection stability for OpenClaw streaming |
| [#444](https://github.com/netease-youdao/LobsterAI/pull/444) | @liugang519 | Remove heartbeat session sync | Simplification: Reduces sync overhead |
| [#442](https://github.com/netease-youdao/LobsterAI/pull/442) | @btc69m979y-dotcom | DingTalk connector v0.7.9 + JSON SessionContext fix | **Critical**: Fixes session isolation, Markdown tables, connection stability |
| [#436](https://github.com/netease-youdao/LobsterAI/pull/436) | @nmgwddj | IM channel real-time session creation | **Critical**: Feishu/Lark messages now create UI sessions immediately |
| [#440](https://github.com/netease-youdao/LobsterAI/pull/440) | @winsan-zhang | `toggleJob` returns updated task directly | API consistency for scheduled tasks |
| [#439](https://github.com/netease-youdao/LobsterAI/pull/439) | @winsan-zhang | Debounce IM robot toggle to prevent state inconsistency | **Bug fix**: Rapid clicks no longer leave robots running when UI shows off |
| [#437](https://github.com/netease-youdao/LobsterAI/pull/437) | @btc69m979y-dotcom | OpenClaw image handling + non-vision model compatibility | **Feature**: Proper image attachment support; graceful degradation for text-only models |

### Open PRs (2 items)
- **[#451](https://github.com/netease-youdao/LobsterAI/pull/451)**: IM message ordering fix (user messages appearing after AI replies) — **under review**
- **[#438](https://github.com/netease-youdao/LobsterAI/pull/438)**: Add AIHubMix provider — new model provider integration

---

## 4. Community Hot Topics

| Rank | Issue/PR | Activity | Analysis |
|:---|:---|:---|:---|
| 🔥 1 | [#435](https://github.com/netease-youdao/LobsterAI/issues/435) "这是套壳的嘛？界面高度相似" | 2 comments | **Copyright/licensing concern**: User questions whether "Wind Claw" and "Zeelin Claw" are unauthorized forks of LobsterAI. Suggests need for clearer branding and potential legal clarification from NetEase Youdao. |
| 🔥 2 | [#417](https://github.com/netease-youdao/LobsterAI/issues/417) "在win11试用了以后，说说遇到的问题和BUG" | 2 comments | **Comprehensive critique**: 6-point feedback covering sandbox failure, browser automation broken, slow performance vs. OpenClaw/Alibaba alternatives, missing foreign IM support, broken skill marketplace, and core lobster features. Signals **systematic quality issues** beyond isolated bugs. |
| 3 | [#446](https://github.com/netease-youdao/LobsterAI/issues/446) "使用智谱的GLM5会触发错误，必现" | 1 comment | **Model compatibility**: GLM5 crashes on complex operations (skill installation) while GLM 4.7 works. Suggests prompt/tool-calling format incompatibility with newer Zhipu models. |

**Underlying Needs**: 
- Transparency about project lineage and licensing ([#435](https://github.com/netease-youdao/LobsterAI/issues/435))
- Windows stability and performance parity with competitors ([#417](https://github.com/netease-youdao/LobsterAI/issues/417))
- Broader model provider testing matrix, especially for Chinese models ([#446](https://github.com/netease-youdao/LobsterAI/issues/446))

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#452](https://github.com/netease-youdao/LobsterAI/issues/452) | Upgrade from v0.2.4 → v2026.3.16 breaks with `No API key found for provider "lobster"` | ❌ **No fix PR**; manual workaround suggested |
| 🔴 **Critical** | [#446](https://github.com/netease-youdao/LobsterAI/issues/446) | GLM5 model crashes on complex operations (100% reproducible) | ❌ **No fix PR** |
| 🟡 **High** | [#441](https://github.com/netease-youdao/LobsterAI/issues/441) | `.env` file parsing fails on `#` characters (treated as comments) | ❌ **No fix PR** |
| 🟡 **High** | [#417](https://github.com/netease-youdao/LobsterAI/issues/417) | Sandbox not recognized after install; browser automation non-functional; skills lack API key configuration | ❌ **Partially addressed** by [#437](https://github.com/netease-youdao/LobsterAI/pull/437) (image handling) |
| 🟡 **High** | [#434](https://github.com/netease-youdao/LobsterAI/issues/434) | App freezes on long content generation; QQBot frequent disconnections | ❌ **No fix PR** |
| 🟢 **Medium** | [#451](https://github.com/netease-youdao/LobsterAI/pull/451) (PR) | IM message ordering reversal | ✅ **Fix in review** |

**Regression Risk**: The v2026.3.16 release appears to have introduced upgrade path breakage for existing users, suggesting insufficient migration testing.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release |
|:---|:---|:---|
| Mermaid diagram preview | [#450](https://github.com/netease-youdao/LobsterAI/issues/450) | Medium — straightforward rendering feature |
| Token usage tracking/display | [#434](https://github.com/netease-youdao/LobsterAI/issues/434) | Medium — user cost transparency priority |
| Prompt optimization tools | [#434](https://github.com/netease-youdao/LobsterAI/issues/434) | Medium — aligns with agent quality improvements |
| AIHubMix provider support | [#438](https://github.com/netease-youdao/LobsterAI/pull/438) | **High** — PR already open |
| Foreign IM support (WhatsApp, Telegram, etc.) | [#417](https://github.com/netease-youdao/LobsterAI/issues/417) | Low-Medium — infrastructure exists but not exposed |

**Emerging Pattern**: Strong focus on **enterprise IM integrations** (DingTalk, Feishu, WeCom) suggests B2B deployment priority. Consumer/individual user features (foreign IM, token tracking) may lag.

---

## 7. User Feedback Summary

### Pain Points
| Category | Specific Issues | Source |
|:---|:---|:---|
| **Windows Experience** | Sandbox detection failure, slow performance vs. competitors, browser automation broken | [#417](https://github.com/netease-youdao/LobsterAI/issues/417) |
| **Upgrade Reliability** | Breaking changes between versions, unclear migration path | [#452](https://github.com/netease-youdao/LobsterAI/issues/452) |
| **Skill Marketplace** | Skills install but lack API key configuration; untested/unusable | [#417](https://github.com/netease-youdao/LobsterAI/issues/417) |
| **Model Compatibility** | GLM5 crashes; limited testing on Chinese models | [#446](https://github.com/netease-youdao/LobsterAI/issues/446) |
| **Core Stability** | App freezes, bot disconnections, message ordering bugs | [#434](https://github.com/netease-youdao/LobsterAI/issues/434), [#451](https://github.com/netease-youdao/LobsterAI/pull/451) |

### Use Cases
- **Office automation**: PPT creation, document processing (reported as slow/failing)
- **Browser automation**: Expected but non-functional for many users
- **Multi-channel deployment**: DingTalk, Feishu, QQ integration (enterprise focus)

### Satisfaction Signals
- 👍 on [#434](https://github.com/netease-youdao/LobsterAI/issues/434) (1) — mixed: user provides critique but acknowledges engagement
- Active PR contributions suggest healthy contributor ecosystem

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#435](https://github.com/netease-youdao/LobsterAI/issues/435) Copyright/licensing questions | 1 day | **Reputational/Legal** | Official response on project relationship to "Wind Claw"/"Zeelin Claw" |
| [#417](https://github.com/netease-youdao/LobsterAI/issues/417) Comprehensive Windows critique | 2 days | **User churn** | Triage into actionable issues; acknowledge specific points |
| [#452](https://github.com/netease-youdao/LobsterAI/issues/452) Upgrade breakage | 1 day | **Adoption blocker** | Hotfix or documented migration path |
| [#441](https://github.com/netease-youdao/LobsterAI/issues/441) `.env` parsing bug | 1 day | **Security/Config reliability** | Parser fix for special characters |

**Maintainer Attention**: No long-unanswered issues yet (project appears actively triaged), but the **upgrade breakage ([#452](https://github.com/netease-youdao/LobsterAI/issues/452))** and **copyright questions ([#435](https://github.com/netease-youdao/LobsterAI/issues/435))** require prompt response to prevent escalation.

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| Development Velocity | 🟢 Strong (12 PRs merged, active feature work) |
| Code Quality/Testing | 🟡 Concerning (upgrade breakages, platform-specific failures) |
| Community Responsiveness | 🟢 Active (same-day PR merges) |
| User Satisfaction | 🟡 Mixed (feature-rich but stability complaints) |
| Documentation/Migration | 🔴 Weak (upgrade path unclear, skill setup undocumented) |

**Recommendation**: Prioritize stabilization sprint addressing Windows sandbox, upgrade migration, and skill marketplace configuration before expanding feature surface.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-17

---

## 1. Today's Overview

TinyClaw shows **high development velocity** with 12 PRs and 4 active issues in the last 24 hours, alongside the v0.0.14 release. The project is actively addressing **stability and safety concerns**—particularly around agent feedback loops, process management, and configuration persistence—while shipping new scheduling infrastructure. Community engagement is moderate with focused bug reports from repeat contributors. The codebase appears to be in a **stabilization phase** following major architectural changes (queue simplification, schedule internalization), with several critical fixes pending review.

---

## 2. Releases

### [v0.0.14](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.14)

| Aspect | Details |
|--------|---------|
| **Headline** | Schedule Management System Migration |
| **Key Changes** | Migrated from system crontab to **croner-based in-process scheduling** with REST API, CLI commands, and fullscreen calendar UI in TinyOffice |
| **Breaking Changes** | System crontab integration removed; schedules now persist in-application |
| **Migration Notes** | Existing cron jobs must be recreated via new API/UI; no automatic migration path mentioned |

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#225](https://github.com/TinyAGI/tinyclaw/pull/225) | @jlia0 | **Schedule system internalization** — croner-based scheduling with API + calendar UI | Core infrastructure; enables v0.0.14 features |
| [#229](https://github.com/TinyAGI/tinyclaw/pull/229) | @jlia0 | **UI refactoring** — modular agent/task components, tab-localized save buttons | Code quality; UX improvement |
| [#230](https://github.com/TinyAGI/tinyclaw/pull/230) | @jlia0 | **Heartbeat persistence fix** — API now correctly reads/writes per-agent heartbeat overrides | Fixes data loss bug (see #227, #228) |

**Features Advanced:** Schedule management (shipped), web-based setup (in progress #214), queue simplification (in progress #213)

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#227](https://github.com/TinyAGI/tinyclaw/issues/227) — TinyOffice settings not persistent | 1 comment | **Configuration durability** — users expect web UI changes to survive restarts; indicates state management gaps |
| [#228](https://github.com/TinyAGI/tinyclaw/issues/228) — `tinyclaw setup` destroys agent config | 1 comment, **High severity** | **CLI safety** — setup flow lacks guardrails; destructive operations need confirmation/backup |
| [#232](https://github.com/TinyAGI/tinyclaw/pull/232) — SSE direct connection fix | Fresh PR | **Real-time reliability** — Next.js buffering breaks event streaming; community contributor @crisdias actively debugging |

**Underlying Needs:** Safer configuration workflows, predictable persistence, reliable real-time UI updates

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#228](https://github.com/TinyAGI/tinyclaw/issues/228) | `tinyclaw setup` wipes entire agent configuration | **Partial:** #230 fixes heartbeat persistence; full setup safety pending #222 |
| 🟡 **Medium** | [#227](https://github.com/TinyAGI/tinyclaw/issues/227) | TinyOffice heartbeat settings not persistent | **Fixed:** #230 merged |
| 🟡 **Medium** | [#231](https://github.com/TinyAGI/tinyclaw/issues/231) | SSE always shows "Disconnected" | **PR ready:** #232 awaiting review |
| 🟡 **Medium** | [#220](https://github.com/TinyAGI/tinyclaw/pull/220), [#224](https://github.com/TinyAGI/tinyclaw/pull/224) | Agent feedback loops exhausting API budgets | **In progress:** Multiple PRs addressing fan-out and rate limiting |
| 🟡 **Medium** | [#218](https://github.com/TinyAGI/tinyclaw/pull/218) | Stuck agent processes never killed | **PR open** |
| 🟡 **Medium** | [#223](https://github.com/TinyAGI/tinyclaw/pull/223) | Infinite retry loops in dead-letter queue | **PR open** |
| 🟡 **Medium** | [#221](https://github.com/TinyAGI/tinyclaw/pull/221) | Empty responses cause "(Silent)" notifications | **PR open** |

**Stability Theme:** Resource exhaustion (API budget, processes, retries) and configuration safety dominate concerns.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in v0.0.15 | Rationale |
|:---|:---|:---|:---|
| **Agent starring/favorites** | [#226](https://github.com/TinyAGI/tinyclaw/issues/226) | **High** | Simple UI enhancement; user already prototyped; aligns with TinyOffice UX focus |
| **Web-based initial setup** | [#214](https://github.com/TinyAGI/tinyclaw/pull/214) | **High** | PR nearly complete; reduces CLI friction |
| **Custom API URL configuration** | [#214](https://github.com/TinyAGI/tinyclaw/pull/214) | **High** | Same PR; enables hosted deployments |
| **Queue architecture simplification** | [#213](https://github.com/TinyAGI/tinyclaw/pull/213) | **Medium** | Significant refactor; may need extended testing |

---

## 7. User Feedback Summary

| Pain Point | Source | Evidence |
|:---|:---|:---|
| **Configuration fragility** | @Chavell3 | #227, #228 — settings lost on save, setup destroys agents |
| **CLI destructive operations** | @Chavell3 | #228 — "ran through the whole setup and it destroyed my whole agent setup" |
| **Real-time UI broken** | @crisdias | #231 — SSE shows disconnected despite working backend |
| **Scale/clutter management** | @Chavell3 | #226 — "big teams...usual view can be messy" |
| **Update durability** | @Chavell3 | #226 — custom modifications "probably gone" after update |

**Satisfaction:** Users actively extending TinyClaw (custom starring, AI-assisted modifications)  
**Dissatisfaction:** Core workflows feel unsafe; configuration changes are high-risk; updates break customizations

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#214](https://github.com/TinyAGI/tinyclaw/pull/214) — Web setup & custom API URLs | 2 days | **Medium** | Final review, merge conflict resolution |
| [#213](https://github.com/TinyAGI/tinyclaw/pull/213) — Queue simplification | 2 days | **Medium** | Architecture review, regression testing |
| [#222](https://github.com/TinyAGI/tinyclaw/pull/222) — Guard setup endpoint | 1 day | **High** | Urgent review; prevents config destruction |
| [#224](https://github.com/TinyAGI/tinyclaw/pull/224) — Agent loop protection | 1 day | **High** | Review; cost-saving safety feature |

**Maintainer Attention Required:** #222 and #224 address active cost/security risks; #214/#213 are foundational for next release cycle.

---

*Digest generated from TinyClaw GitHub activity 2026-03-16 to 2026-03-17*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-17

## 1. Today's Overview

Moltis shows **moderate development activity** with 4 PRs and 2 issues updated in the past 24 hours. The project is actively addressing integration pain points with external LLM providers (Claude, Kimi K2.5 via OpenRouter) while expanding core file-sharing capabilities. No new releases were cut, suggesting the team is accumulating changes for a larger release. The community is engaged with practical deployment concerns (Docker MCP support, IPv6 networking). Overall project health appears **stable with forward momentum** in tooling robustness.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#443](https://github.com/moltis-org/moltis/pull/443) "Yachiyo git fixes pr2" | Git-related fixes (details sparse) | Minor maintenance |

### Active Development (Open PRs)

| PR | Description | Stage |
|:---|:---|:---|
| [#353](https://github.com/moltis-org/moltis/pull/353) | `send_document` tool for file sharing to channels | **Under review** — major feature expansion |
| [#444](https://github.com/moltis-org/moltis/pull/444) | Sanitize LLM-mangled tool names from parallel calls | **Fresh** — critical for OpenRouter/Kimi compatibility |
| [#445](https://github.com/moltis-org/moltis/pull/445) | Allow whitespaces in Claude hook location | **Fresh** — developer experience fix |

**Key advancement**: Multi-LLM provider robustness is a clear priority, with two PRs addressing real-world integration failures.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#118](https://github.com/moltis-org/moltis/issues/118) "Add node/npx to the Docker image to run MCPs" | 2 👍, 2 comments, created Feb 14 | **Highest engagement** — reflects growing MCP (Model Context Protocol) adoption; users want turnkey Docker deployments without custom image builds |
| [#447](https://github.com/moltis-org/moltis/issues/447) "Don't allow bind on IPv6" | 0 👍, 0 comments, created Mar 16 | Fresh networking/security concern; likely affects containerized deployments |

**Underlying need**: Users are deploying Moltis in production/containerized environments and hitting friction with (1) MCP runtime dependencies and (2) network binding behavior. The project may need clearer deployment topology guidance.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available? |
|:---|:---|:---|:---|
| 🔶 **Medium** | [#447](https://github.com/moltis-org/moltis/issues/447) IPv6 binding issue | Open, unassigned | No |
| 🔶 **Medium** | [#444](https://github.com/moltis-org/moltis/pull/444) LLM tool name mangling (Kimi/OpenRouter) | **Fix PR open** | [#444](https://github.com/moltis-org/moltis/pull/444) |
| 🟢 **Low** | [#445](https://github.com/moltis-org/moltis/pull/445) Whitespace in Claude hook paths | **Fix PR open** | [#445](https://github.com/moltis-org/moltis/pull/445) |

**Assessment**: No critical crashes reported. The IPv6 issue warrants monitoring for network-security implications in enterprise deployments.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| Native MCP runtime in Docker image | [#118](https://github.com/moltis-org/moltis/issues/118) | **High** — aligns with MCP ecosystem growth; 2+ weeks old with community support |
| Multi-format document sharing | [#353](https://github.com/moltis-org/moltis/pull/353) | **High** — PR already open, comprehensive implementation |
| Enhanced LLM provider compatibility layer | [#444](https://github.com/moltis-org/moltis/pull/444) | **High** — actively being fixed |

**Prediction**: The next release will likely bundle document-sharing capabilities with improved multi-provider LLM support and Docker/MCP refinements.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Docker deployment complexity** | [#118](https://github.com/moltis-org/moltis/issues/118) | DevOps/SRE users |
| **LLM provider quirks breaking integrations** | [#444](https://github.com/moltis-org/moltis/pull/444) | Power users on OpenRouter/non-OpenAI providers |
| **File sharing limitations** | [#353](https://github.com/moltis-org/moltis/pull/353) | Business/team collaboration users |

**Satisfaction indicators**: Users are investing effort in detailed bug reports and feature proposals, suggesting **strong product-market fit** with active power users.

**Dissatisfaction risk**: Deployment friction (Docker, networking) could block enterprise adoption if not addressed.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#118](https://github.com/moltis-org/moltis/issues/118) Docker MCP support | **31 days** | Medium — community may fragment on custom solutions | Maintainer triage; assess image size/security tradeoffs |
| [#353](https://github.com/moltis-org/moltis/pull/353) `send_document` tool | **10 days** | Low — appears actively reviewed | Final review/merge decision |

**No critical stale items**, but [#118](https://github.com/moltis-org/moltis/issues/118) is approaching the threshold where community patience may erode. Recommend maintainer acknowledgment with timeline.

---

*Digest generated from GitHub activity 2026-03-16 to 2026-03-17*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-17

## 1. Today's Overview

CoPaw shows **very high community activity** with 50 issues and 50 PRs updated in the last 24 hours—indicating a rapidly maturing project with active user adoption. The project is currently at **v0.0.7** with no new release today, but substantial development velocity continues. Memory management and context compression remain critical pain points, with multiple related bugs surfacing. Enterprise channel integrations (Feishu, DingTalk) are receiving significant attention, reflecting real production deployments. The contributor base is expanding with multiple first-time contributors submitting fixes.

---

## 2. Releases

**No new releases** (latest: v0.0.7 / v0.0.7.post1)

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary |
|:---|:---|:---|
| [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) | @pan-x-c | **feat(CLI): Add `copaw update` command** — Auto-update capability addressing community upgrade pain points |
| [#1554](https://github.com/agentscope-ai/CoPaw/pull/1554) | @mvanhorn | **fix(channels): Skip empty text blocks in DingTalk rich text parsing** — Resolves [#1303](https://github.com/agentscope-ai/CoPaw/issues/1303) |
| [#1257](https://github.com/agentscope-ai/CoPaw/pull/1257) | @fancyboi999 | **fix(console): Preserve custom cron expressions in UI** — Fixes [#1510](https://github.com/agentscope-ai/CoPaw/issues/1510) |
| [#1571](https://github.com/agentscope-ai/CoPaw/pull/1571) | @zhijianma | **feat(console): Implement /console/chat streaming endpoint** — Core infrastructure for streaming responses |
| [#1579](https://github.com/agentscope-ai/CoPaw/pull/1579) | @skyfaker | **Feat/model info display** (superseded by [#1599](https://github.com/agentscope-ai/CoPaw/pull/1599)) |
| [#1583](https://github.com/agentscope-ai/CoPaw/pull/1583) | @Leirunlin | **fix(channels): Generalize Discord debounce key fix to all channels** — Prevents message duplication across all platforms |

### Key Advances
- **CLI tooling**: Auto-update command reduces operational friction
- **Channel stability**: DingTalk and general channel reliability improved
- **Console infrastructure**: Streaming chat endpoint lays groundwork for better UX

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| # | Topic | Comments | Link | Analysis |
|:---|:---|:---:|:---|:---|
| **#280** | Discussion: Which Skills and MCPs Can Be Built-in? | 19 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/280) | **Strategic product discussion** — Community debating which capabilities should ship pre-installed vs. user-installed. Signals demand for better out-of-box experience while managing dependency bloat. |
| **#1345** | [Bug] 飞书频道对话出现"延迟回复"问题 (Feishu delayed reply) | 7 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/1345) | **Critical production bug** — Bot responds to previous question, ignoring current input. Suggests race condition or state management issue in message processing pipeline. |
| **#1304** | [Question] DingTalk session expired while cronjob pushing | 7 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/1304) | **Enterprise auth pain** — Multi-device login breaks cronjob notifications. Reveals fragile session management for enterprise messaging platforms. |
| **#892** | [Bug] "好的，我知道了" triggers conversation end | 7 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/892) | **Intent detection flaw** — Casual acknowledgments incorrectly interpreted as conversation termination. Needs better NLU or configurable stop phrases. |
| **#1222** | [Bug] 消息压缩后数量不匹配导致 API 调用失败 | 6 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/1222) | **Memory compression regression** — Message count mismatch after compression breaks reasoning_content injection. Has active fix PR [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557). |

### Underlying Needs
- **Reliable state management** across async message flows
- **Enterprise-grade session handling** for corporate messaging platforms
- **Smarter conversation lifecycle management** (less brittle stop conditions)
- **Robust memory compression** that preserves message integrity

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | Feishu delayed replies — bot answers wrong question | Open, under investigation |
| 🔴 **Critical** | [#1270](https://github.com/agentscope-ai/CoPaw/issues/1270) | Agent silent stop mid-execution (token overflow hidden) | Open — error handling gap |
| 🔴 **Critical** | [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | Memory compression breaks API calls (count mismatch) | **Fix PR [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) open** |
| 🟡 **High** | [#892](https://github.com/agentscope-ai/CoPaw/issues/892) | Casual phrases trigger conversation end | Open |
| 🟡 **High** | [#1136](https://github.com/agentscope-ai/CoPaw/issues/1136) | `execute_shell_command` hangs on Windows | Open — async subprocess issue |
| 🟡 **High** | [#1596](https://github.com/agentscope-ai/CoPaw/issues/1596) | Memory compression causing "amnesia" and latency | Open — v0.0.7 regression |
| 🟡 **High** | [#1593](https://github.com/agentscope-ai/CoPaw/issues/1593) | Windows GBK encoding crashes on emoji | **Fix PR [#1601](https://github.com/agentscope-ai/CoPaw/pull/1601) open** |
| 🟡 **High** | [#1605](https://github.com/agentscope-ai/CoPaw/issues/1605) | MCP subprocess doesn't inherit environment variables | Open |
| 🟡 **High** | [#1597](https://github.com/agentscope-ai/CoPaw/issues/1597) | App crash when `agents.defaults` is null | **Fix PR [#1600](https://github.com/agentscope-ai/CoPaw/pull/1600) open** |
| 🟢 **Medium** | [#965](https://github.com/agentscope-ai/CoPaw/issues/965) | Code copy button non-functional | Open |
| 🟢 **Medium** | [#1563](https://github.com/agentscope-ai/CoPaw/issues/1563) | `write_file` truncates large content (~33KB → 6KB) | Open |

**Regression Alert**: Multiple reports indicate **v0.0.7 memory compression** is causing more problems than it solves—considered unstable by users ([#1596](https://github.com/agentscope-ai/CoPaw/issues/1596), [#1593](https://github.com/agentscope-ai/CoPaw/issues/1593)).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Version |
|:---|:---|:---:|
| **Multi-Agent Support** | [#1587](https://github.com/agentscope-ai/CoPaw/issues/1587) — "什么时候能支持多Agent?" | High — infrastructure PRs ([#1598](https://github.com/agentscope-ai/CoPaw/pull/1598), [#1600](https://github.com/agentscope-ai/CoPaw/pull/1600)) already landing |
| **Web Authentication** | [#1588](https://github.com/agentscope-ai/CoPaw/issues/1588) + PR [#1329](https://github.com/agentscope-ai/CoPaw/pull/1329) | High — PR open, optional auth pattern agreed |
| **ACP (Agent Client Protocol)** | PR [#1544](https://github.com/agentscope-ai/CoPaw/pull/1544) — External agent invocation | Medium — substantial PR under review |
| **Chat Routing/Model Selection** | PR [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) — Runtime model switching | Medium — UI + backend wired |
| **Built-in Skills/MCPs** | [#280](https://github.com/agentscope-ai/CoPaw/issues/280) — Curated default skills | Medium — design discussion phase |
| **Browser Sign-in Extensibility** | PR [#1603](https://github.com/agentscope-ai/CoPaw/pull/1603) — OAuth flows beyond OpenAI | Medium — refactored for extensibility |
| **Chinese Localization** | [#1586](https://github.com/agentscope-ai/CoPaw/issues/1586) — Docs and changelogs in Chinese | Low-Medium — acknowledged but not prioritized |
| **Background Task Persistence** | [#1610](https://github.com/agentscope-ai/CoPaw/issues/1610) — Don't kill tasks when web UI closes | Medium — architectural change needed |

---

## 7. User Feedback Summary

### Pain Points (Real Production Usage)

| Category | Feedback | Source |
|:---|:---|:---|
| **Memory/Context** | "Memory compression compresses 10-second-old messages" — aggressive compression breaks continuity | [#1596](https://github.com/agentscope-ai/CoPaw/issues/1596) |
| **Channel Reliability** | Feishu/DingTalk issues dominate — these are production deployments, not experiments | Multiple issues |
| **Windows Compatibility** | GBK encoding, shell command hangs — Windows users second-class | [#1593](https://github.com/agentscope-ai/CoPaw/issues/1593), [#1136](https://github.com/agentscope-ai/CoPaw/issues/1136) |
| **Docker/NAS Deployments** | "I can't keep a computer open 24/7 to watch tasks" — background execution missing | [#1610](https://github.com/agentscope-ai/CoPaw/issues/1610) |
| **Token Management** | Silent failures on token overflow instead of graceful handling | [#1270](https://github.com/agentscope-ai/CoPaw/issues/1270) |

### Positive Signals
- Active skill/MCP ecosystem building (community wants curation)
- Strong interest in multi-agent workflows
- Console UX improvements well-received (image handling, model info display)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Issue | Action Needed |
|:---|:---:|:---|:---|
| **#280** | 15 days | [Built-in Skills/MCPs Discussion](https://github.com/agentscope-ai/CoPaw/issues/280) | Product decision on scope vs. modularity |
| **#564** | 13 days | [Skill Security Scanner](https://github.com/agentscope-ai/CoPaw/pull/564) | Security review — important for ecosystem trust |
| **#1209** | 5 days | [Chat Routing Selector](https://github.com/agentscope-ai/CoPaw/pull/1209) | Feature complete, needs merge decision |
| **#1329** | 5 days | [Web Authentication](https://github.com/agentscope-ai/CoPaw/pull/1329) | Auth architecture review |
| **#1544** | 2 days | [ACP External Agent Support](https://github.com/agentscope-ai/CoPaw/pull/1544) | Large feature — needs thorough review |
| **#1066** | 7 days | [Claude Base64 Image Fix](https://github.com/agentscope-ai/CoPaw/pull/1066) | Multi-modal compatibility — should prioritize |

### Risk Assessment
- **Memory compression subsystem** needs urgent stabilization before v0.0.8
- **Windows platform** accumulating technical debt (encoding, subprocess, shell execution)
- **Enterprise channels** (Feishu/DingTalk) require dedicated reliability engineering

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-17

---

## 1. Today's Overview

ZeptoClaw shows **moderate development velocity** with 5 tracked items (2 issues, 3 PRs) updated in the past 24 hours. No new releases were published. Activity centers on **infrastructure hardening** (rootless container permissions), **multimodal agent reliability** (image handling in tool loops), and **enterprise AI provider expansion** (Google Vertex AI). The project appears healthy with active contributor engagement across core maintainers (@qhkm, @rafaellin) and community members (@taqtiqa-mark, @starsy). Notably, one image-handling bug has both an open issue (#368) and a recently closed fix PR (#355), suggesting rapid iteration on a critical agent capability.

---

## 2. Releases

**No new releases** published.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#355](https://github.com/qhkm/zeptoclaw/pull/355) | @rafaellin | `fix: image content handling in loop` | **Critical fix** for multimodal agent reliability—resolves image path→base64 resolution in tool execution loops |

This closure directly addresses the regression described in open Issue #368 (see [Bugs & Stability](#5-bugs--stability)), indicating the fix may be pending verification or follow-up refinement.

### Active Development

| PR | Author | Status | Significance |
|:---|:---|:---|:---|
| [#364](https://github.com/qhkm/zeptoclaw/pull/364) | @qhkm | **OPEN** | Google Vertex AI provider—enterprise authentication, zero new dependencies, reuses existing Gemini parsing |
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) | @starsy | **OPEN** | ACP (Agent Client Protocol) dual transport—stdio subprocess spawning + HTTP streaming for MCP-compatible agent ecosystems |

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#369](https://github.com/qhkm/zeptoclaw/issues/369) Cargo permission denied | 0 comments, 0 👍 | **Infrastructure friction for rootless Podman users**—affects developer experience in hardened CI environments; fix proposed but awaiting implementation review |
| [#368](https://github.com/qhkm/zeptoclaw/issues/368) Image base64 resolution | 0 comments, 0 👍 | **Core agent functionality gap**—multimodal tool loops broken; high severity despite low engagement, likely because #355 fix exists |
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) ACP implementation | 0 comments, 0 👍 | **Strategic architecture**—positions ZeptoClaw as MCP-compatible agent host; stdio mode enables IDE/editor integrations |

**Underlying needs detected:**
- **Developer ergonomics**: Rootless container workflows (security-conscious enterprises)
- **Multimodal reliability**: Production-grade image-in-tool-loop support
- **Ecosystem interoperability**: ACP/MCP protocol adoption for broader tool ecosystem access

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available? |
|:---|:---|:---|:---|
| **P1-Critical** | [#368](https://github.com/qhkm/zeptoclaw/issues/368) Images not resolved to base64 in agent tool loop iterations | **OPEN** | ✅ **Yes** — PR #355 closed 2026-03-16 with fix; likely pending merge verification or issue closure |
| **P2-High** | [#369](https://github.com/qhkm/zeptoclaw/issues/369) Cargo permission denied in lint-container.sh rootless Podman | **OPEN** | 🔄 **Proposed** — Detailed fix specification in issue body; needs PR implementation |

**Stability assessment:** One critical multimodal bug has a merged fix; infrastructure bug has clear resolution path. No regressions or crash reports.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Google Vertex AI provider** | PR [#364](https://github.com/qhkm/zeptoclaw/pull/364) | **High** | Zero-dependency, enterprise-focused, maintainer-authored |
| **ACP stdio/HTTP channels** | PR [#356](https://github.com/qhkm/zeptoclaw/pull/356) | **Medium-High** | Strategic MCP alignment; large surface area may need iteration |
| **Rootless Podman CI support** | Issue [#369](https://github.com/qhkm/zeptoclaw/issues/369) | **Medium** | Well-specified; depends on contributor bandwidth |

**Emerging pattern:** ZeptoClaw is prioritizing **enterprise deployability** (Vertex AI auth, rootless containers) and **protocol interoperability** (ACP/MCP) over net-new agent capabilities.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Image handling unreliability in agent loops** | #368 + #355 | Multimodal agent builders |
| **Container tooling friction in restricted environments** | #369 | Enterprise/CI users |
| **Need for GCP-native AI infrastructure** | #364 | GCP enterprise customers |
| **MCP ecosystem integration gaps** | #356 | Tool ecosystem developers |

**Satisfaction indicators:** Rapid fix turnaround for critical bugs (#355 closed within 3 days of related issue).  
**Dissatisfaction risk:** Low engagement on issues may mask production impact; recommend proactive user outreach for multimodal validation.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| [#368](https://github.com/qhkm/zeptoclaw/issues/368) | 1 day | **Low** — fix merged | Close after verification, or clarify if #355 was incomplete |
| [#369](https://github.com/qhkm/zeptoclaw/issues/369) | 1 day | **Medium** — blocking contributor workflows | Fast-track PR review; assign to @taqtiqa-mark or core maintainer |
| [#364](https://github.com/qhkm/zeptoclaw/pull/364), [#356](https://github.com/qhkm/zeptoclaw/pull/356) | 2-4 days | **Low** — normal review cycle | Schedule maintainer review; #356 especially needs architecture sign-off |

**No stale items detected** — all tracked issues/PRs are ≤4 days old. Project maintenance responsiveness appears healthy.

---

*Digest generated from ZeptoClaw GitHub activity 2026-03-16 to 2026-03-17.*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-17

## 1. Today's Overview

EasyClaw shows **moderate community activity** with 3 issues updated in the past 24 hours, though no code contributions via PRs. The project released **v1.7.0**, triggering immediate user feedback including a **critical Windows connectivity regression** and documentation requests. Issue velocity remains healthy with 2 open, 1 closed, but the absence of PR activity suggests potential maintainer bandwidth constraints or community contribution friction. The project appears to be in a **post-release stabilization phase** requiring urgent attention to platform-specific breaking changes.

---

## 2. Releases

### [v1.7.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0) — Latest

| Aspect | Details |
|--------|---------|
| **Type** | Minor version bump |
| **Installation Note** | Added macOS Gatekeeper bypass documentation for unsigned app warnings |
| **Breaking Changes** | **Windows connectivity regression reported** (see #18) |
| **Migration Risk** | **HIGH for Windows users** — upgrade from v1.6.8 may cause connection failures |

**Critical Gap**: No detailed changelog provided in release notes beyond installation instructions. Users must discover breaking changes through issue reports.

---

## 3. Project Progress

| Metric | Status |
|--------|--------|
| PRs merged/closed today | **0** |
| Features advanced | None visible |

**Assessment**: Stagnant code contribution day. Progress limited to release packaging and documentation (macOS troubleshooting). No feature development or bug fix PRs merged despite active issue reports.

---

## 4. Community Hot Topics

| Rank | Issue | Activity | Analysis |
|:---:|---|:---:|---|
| 🔥 | [#18: Windows系统，从1.6.8升级到1.7.0后链接不上了](https://github.com/gaoyangz77/easyclaw/issues/18) | 4 comments | **Critical regression** — immediate post-upgrade failure suggests API/connection layer change in v1.7.0. User provided screenshot evidence. **Underlying need**: Reliable cross-platform release testing and rollback mechanism. |
| 2 | [#17: 希望大哥出个Windows 版本的启动和打包教程！](https://github.com/gaoyangz77/easyclaw/issues/17) | 1 comment | Documentation gap for Windows developers. **Underlying need**: Lower barrier to entry for Windows-based contributors; suggests project skewed toward macOS development environment. |
| 3 | [#16: OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16) | 2 comments, **CLOSED** | OAuth authentication failure in both portable and installed versions. Resolution indicates responsive maintainer for auth-critical issues. |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---:|---|:---|:---:|
| 🔴 **Critical** | [#18: Windows connectivity failure post-v1.7.0 upgrade](https://github.com/gaoyangz77/easyclaw/issues/18) | Open, active | ❌ None |
| 🟡 Medium | [#16: OpenAI OAuth authentication errors](https://github.com/gaoyangz77/easyclaw/issues/16) | **Resolved** | N/A (closed) |

**Stability Assessment**: v1.7.0 introduces **platform-specific regression** affecting core functionality. No hotfix release or PR submitted within 24h of report. Recommend immediate v1.7.1 patch or v1.6.8 rollback guidance for Windows users.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version |
|---------|-------|:--------------------------:|
| Windows development documentation | [#17](https://github.com/gaoyangz77/easyclaw/issues/17) | Medium — low effort, high community value |
| Cross-platform CI/testing | Implied by #18 | High — necessary to prevent future regressions |

**Prediction**: Next release likely **v1.7.1 hotfix** addressing Windows connectivity, potentially including improved release testing pipeline.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Satisfaction Indicator |
|------------|----------|:----------------------:|
| **Upgrade fragility** | Immediate #18 report after v1.7.0 release | 😞 Negative — trust erosion |
| **Platform inequality** | macOS docs present, Windows docs absent | 😐 Neutral-to-negative |
| **Responsive auth fixes** | #16 closed within 5 days | 🙂 Positive — maintainer responsiveness |
| **Unsigned app friction** | Gatekeeper workaround in release notes | 😐 Neutral — common OSS issue |

**Use Case Signal**: Users deploying EasyClaw as **desktop AI assistant** across personal workflows; reliability expectations are high for daily-use tool.

---

## 8. Backlog Watch

| Issue | Age | Risk |
|-------|:---:|------|
| [#17: Windows build documentation](https://github.com/gaoyangz77/easyclaw/issues/17) | 1 day | Low — feature request, not blocking |
| [#18: Windows connectivity](https://github.com/gaoyangz77/easyclaw/issues/18) | 1 day | **HIGH** — blocking existing users, no maintainer response yet |

**Action Needed**: Maintainer should acknowledge #18 with reproduction timeline or emergency rollback guidance. Consider yanking v1.7.0 Windows artifacts if regression is widespread.

---

*Digest generated from GitHub activity 2026-03-16 to 2026-03-17. Project: [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*