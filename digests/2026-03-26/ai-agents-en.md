# OpenClaw Ecosystem Digest 2026-03-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-26 00:11 UTC

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

# OpenClaw Project Digest — March 26, 2026

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours—indicating a rapidly evolving codebase with significant community engagement. The project released three versions (v2026.3.24 and two betas) focusing on OpenAI API compatibility and security hardening. However, **regression risk is elevated**: numerous reports cite breakages after the v2026.3.22 upgrade, particularly around OAuth token handling, Discord multi-account startup, and session management. The maintainer team appears responsive with same-day PR merges, but the velocity of changes is outpacing some users' ability to adapt. Cross-platform expansion (Linux GTK4 app) and enterprise features (Model Router, episodic memory) signal maturation toward production deployments.

---

## 2. Releases

### v2026.3.24 (Stable)
| Aspect | Details |
|--------|---------|
| **Breaking Changes** | None explicitly flagged |
| **Key Changes** | • OpenAI-compatible gateway endpoints: `/v1/models`, `/v1/embeddings`, and explicit model override forwarding through `/v1/chat/completions` and `/v1/responses` (broader RAG/client compatibility) — [#vincentkoc](https://github.com/vincentkoc)<br>• Agents/tools: `/tools` endpoint now exposes available tools |
| **Migration Notes** | Users relying on implicit model routing should verify explicit overrides work as expected |

### v2026.3.24-beta.2
| Aspect | Details |
|--------|---------|
| **Fixes** | • Outbound media/local files: aligned with `fs` policy—host-local files and inbound-media paths send when `workspaceOnly` is off; strict workspace-only agents remain sandboxed<br>• Runtime/install: lowered Node 22 floor to `22.14` |

### v2026.3.24-beta.1
| Aspect | Details |
|--------|---------|
| **Changes** | Same OpenAI compatibility additions as stable (beta precursor) |

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#54453](https://github.com/openclaw/openclaw/pull/54453) | ikebo | Make message tool `buttons` schema property optional | Fixes Telegram plugin schema validation failures |
| [#54679](https://github.com/openclaw/openclaw/pull/54679) | gumclaw | Allow MS Teams feedback/welcome config keys | Unblocks Teams channel configuration |
| [#54694](https://github.com/openclaw/openclaw/pull/54694) | drobison00 | Block silent reconnect scope-upgrade escalation | Security hardening for gateway auth |
| [#54418](https://github.com/openclaw/openclaw/pull/54418) | adzendo | Make buttons schema optional in message tool (duplicate fix) | Redundant safety for Telegram |
| [#53401](https://github.com/openclaw/openclaw/pull/53401) | erhhung | Fix `tools.web.fetch.maxResponseBytes` schema validation | Resolves config parsing regression |
| [#54575](https://github.com/openclaw/openclaw/pull/54575) | w-sss | Add `buildToolContext` for Telegram forum topic thread IDs | Fixes exec approval routing in forum topics |
| [#45527](https://github.com/openclaw/openclaw/pull/45527) | MastrXplorer | Resolve symlinks before skill directory scanning | Security fix for path traversal via symlinks |

### Active Development (Open PRs)
- **Linux GTK4 Companion App** [#53905](https://github.com/openclaw/openclaw/pull/53905) — Major platform expansion
- **Model Router** [#54562](https://github.com/openclaw/openclaw/pull/54562) — Automatic tier-based model selection
- **Episodic Memory System** [#54750](https://github.com/openclaw/openclaw/pull/54750) — CLS-inspired hippocampal memory for agents
- **SambaNova Provider** [#54748](https://github.com/openclaw/openclaw/pull/54748) — New inference provider integration

---

## 4. Community Hot Topics

### Top Issues by Engagement

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 49 | 65 | **Cross-platform parity** — Users want native desktop apps matching macOS feature set; Linux PR [#53905](https://github.com/openclaw/openclaw/pull/53905) in progress |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) WeChat plugin incompatible with 2026.3.22+ | 40 | 0 | **Plugin ecosystem stability** — Third-party plugins breaking on core updates; needs stable plugin SDK contract |
| [#52823](https://github.com/openclaw/openclaw/issues/52823) Control UI assets not found (closed) | 34 | 12 | **Developer experience** — Build step documentation gaps; fix merged |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) Kimi web_search 401 auth error | 29 | 3 | **Multi-provider auth consistency** — Tool-level auth differs from chat API |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Skill install fails in Docker: `brew not installed` | 16 | 12 | **Container-ready deployment** — Brew-based skills incompatible with Linux containers |

### Underlying Needs Analysis
- **Platform expansion urgency**: 65 upvotes on Linux/Windows apps shows this is the #1 user-facing gap
- **Plugin API stability**: WeChat breakage exemplifies tension between rapid core evolution and third-party ecosystem
- **Auth fragmentation**: Multiple OAuth/token refresh issues suggest need for unified credential management

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | [#53317](https://github.com/openclaw/openclaw/issues/53317) Gateway overwrites fresh OAuth token with stale cache on startup (v2026.3.22, openai-codex) | Open | None identified |
| 🔴 **Critical** | [#52037](https://github.com/openclaw/openclaw/issues/52037) OpenAI Codex OAuth token refresh not persisting to disk | Open | None identified |
| 🟡 **High** | [#53132](https://github.com/openclaw/openclaw/issues/53132) Discord multi-account gateway hangs at 'awaiting gateway readiness' (v2026.3.22) | Open | None identified |
| 🟡 **High** | [#53644](https://github.com/openclaw/openclaw/issues/53644) Discord WebSocket 1006 crashes gateway instead of reconnecting | **Closed** | [#53644](https://github.com/openclaw/openclaw/issues/53644) |
| 🟡 **High** | [#52875](https://github.com/openclaw/openclaw/issues/52875) `Session_send` gives "no session found" after 2026.3.22 upgrade | Open | None identified |
| 🟡 **High** | [#53870](https://github.com/openclaw/openclaw/issues/53870) Matrix plugin blocked by pending VirusTotal security scan | Open | None identified |
| 🟢 **Medium** | [#53244](https://github.com/openclaw/openclaw/issues/53244) WhatsApp plugin runtime modules missing from npm package (2026.3.22+) | Open | None identified |
| 🟢 **Medium** | [#54514](https://github.com/openclaw/openclaw/issues/54514) npm package missing `docs/reference/templates` | Open | None identified |

### Regression Pattern
**v2026.3.22 appears to be a problematic release**: Multiple independent reports of session, OAuth, and Discord breakages starting with this version. Recommend hotfix release or rollback guidance.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Native MCP Client support** | [#29053](https://github.com/openclaw/openclaw/issues/29053) | High | 10 upvotes, aligns with industry standardization (Anthropic MCP); would reduce tool fragmentation |
| **Linux native app** | [#75](https://github.com/openclaw/openclaw/issues/75) + [#53905](https://github.com/openclaw/openclaw/pull/53905) | **In Progress** | PR open, v1 implementation complete |
| **Model Router (automatic tier selection)** | [#54562](https://github.com/openclaw/openclaw/pull/54562) | High | PR open, addresses cost optimization demand |
| **Episodic memory system** | [#54750](https://github.com/openclaw/openclaw/pull/54750) | Medium | Large PR, novel architecture—may need extended review |
| **Async exec callback** | [#18237](https://github.com/openclaw/openclaw/issues/18237) | Medium | 5 upvotes, subagent workflow pain point |
| **Agent identity/trust verification (ERC-8004/DID)** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | Low | Speculative, standards-aligned but niche demand |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Upgrade fragility** | Multiple "worked before 2026.3.22" regressions | High |
| **OAuth/token management** | [#53317](https://github.com/openclaw/openclaw/issues/53317), [#52037](https://github.com/openclaw/openclaw/issues/52037), [#26322](https://github.com/openclaw/openclaw/issues/26322), [#36982](https://github.com/openclaw/openclaw/issues/36982) | High |
| **Documentation/build gaps** | [#52823](https://github.com/openclaw/openclaw/issues/52823), [#54514](https://github.com/openclaw/openclaw/issues/54514) | Medium |
| **Docker/container deployment** | [#14593](https://github.com/openclaw/openclaw/issues/14593) brew dependency | Medium |
| **Token waste in prompts** | [#9157](https://github.com/openclaw/openclaw/issues/9157) 93.5% budget waste | Medium |

### Positive Signals
- **Strong engagement**: 500 issues/PRs in 24h shows healthy community
- **Responsive maintainers**: Same-day merges on critical fixes
- **Enterprise readiness**: Model Router, memory systems, multi-account Discord show scale ambitions

---

## 8. Backlog Watch

| Issue | Age | Issue | Why It Needs Attention |
|-------|-----|-------|------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | ~3 months | Linux/Windows apps | 65 upvotes, PR [#53905](https://github.com/openclaw/openclaw/pull/53905) ready—needs final review/merge |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | ~2 months | Token budget waste | 12 upvotes, performance-critical, no PR |
| [#18237](https://github.com/openclaw/openclaw/issues/18237) | ~1.5 months | Async exec callback | Subagent workflow blocker, no PR |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | ~1 month | MCP Client support | Industry alignment opportunity, no PR |
| [#10008](https://github.com/openclaw/openclaw/issues/10008) | ~2 months | Feishu plugin re-registration | Performance regression, no fix identified |

### Maintainer Action Recommended
1. **Hotfix for v2026.3.22 regressions** — OAuth and session issues are degrading trust
2. **Finalize Linux app PR** — High community demand, implementation complete
3. **Plugin SDK stability commitment** — Document and communicate breaking change policy to third-party developers

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — March 26, 2026

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing **intense consolidation velocity**, with top projects processing 50–500+ GitHub events daily as they race to stabilize core agent loops while expanding modality support. The field has bifurcated into **"batteries-included" platforms** (OpenClaw, LobsterAI, CoPaw) competing on channel breadth and enterprise features versus **minimalist/specialized frameworks** (NanoBot, ZeptoClaw, TinyClaw) optimizing for specific deployment contexts. A critical inflection point is emerging around **MCP (Model Context Protocol) adoption**, **multi-tenant isolation**, and **local/edge inference**—capabilities that are becoming table stakes for production deployment. Supply chain security (NanoBot's LiteLLM quarantine) and platform parity (Linux/Windows native apps) are now dominant community concerns, reflecting maturation from hobbyist to enterprise-adjacent use cases.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Notes |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.3.24 (stable) + 2 betas | B+ | Exceptional velocity; regression risk from v2026.3.22 |
| **NanoBot** | 18 | 51 | None (accumulating) | B | Post-LiteLLM stabilization sprint |
| **ZeroClaw** | 39 | 50 | v0.6.2 (prior) | B+ | Pre-patch stabilization for v0.6.3 |
| **PicoClaw** | 182 | 277 | v0.2.4 (2026-03-25) | A- | 93% issue closure rate; stabilization phase |
| **NanoClaw** | 37 | 50 | None | B | CLAUDE.md fixes merged; Linux fragility emerging |
| **NullClaw** | 3 | 3 | None | B | Moderate velocity; WeChat/vision demand |
| **IronClaw** | 10 | 50 | v0.22.0 imminent | B+ | v2 engine + multi-tenant isolation in flight |
| **LobsterAI** | 37 | 50 | 2026.3.25 (latest) | B | Critical crash loops; MCP reliability issues |
| **TinyClaw** | 0 | 3 | None | B+ | Infrastructure modernization; low issue volume |
| **Moltis** | 3 | 3 | None | B+ | Moderate velocity; local thinking demand |
| **CoPaw** | 50 | 49 | v0.2.0.post1 | B | v0.2.0 upgrade fragility; China market focus |
| **ZeptoClaw** | 11 | 30 | None | A- | Rapid integration; all critical bugs closed |
| **EasyClaw** | 0 | 0 | — | — | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Gap |
|:---|:---|:---|
| **Scale & ecosystem** | 10× activity volume of nearest competitor; 500 issues/PRs daily | NanoBot, ZeptoClaw operate at 1/10th scale |
| **Enterprise features** | Model Router, episodic memory, multi-account Discord | IronClaw catching up on multi-tenant; others lack |
| **Cross-platform** | Linux GTK4 app in progress (#75: 65 upvotes) | PicoClaw, NanoClaw have Ollama/local focus but weaker channel breadth |
| **OpenAI compatibility** | Native gateway endpoints (`/v1/*`) | LobsterAI has compatibility gaps; NanoBot rebuilding post-LiteLLM |

### Technical Approach Differences
- **vs. NanoBot**: OpenClaw maintains abstraction layer stability; NanoBot's LiteLLM removal forced architectural rupture
- **vs. IronClaw**: OpenClaw prioritizes feature velocity; IronClaw invests in formal verification (multi-tenant compile-time `TenantCtx`)
- **vs. ZeptoClaw**: OpenClaw is platform-agnostic; ZeptoClaw optimizes for Telegram-first deployment with deep UX integration

### Community Size Comparison
OpenClaw's **500 daily events** dwarfs all peers. Second tier: PicoClaw (459), CoPaw (99), IronClaw (60). OpenClaw's challenge is **managing scale**—v2026.3.22 regressions show velocity outpacing quality assurance.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol) tooling** | LobsterAI (#728, #820), NanoBot (#29053), Moltis (#439) | "0 tools" discovery failures; dev/prod parity; custom display names |
| **Multi-tenant isolation** | IronClaw (#1614), OpenClaw (enterprise features), CoPaw (#2283) | Compile-time tenant contexts; per-agent model configs; session isolation |
| **Local/edge inference** | PicoClaw (#75 Ollama), NanoBot (Step Fun), Moltis (#489/#490 local thinking), NullClaw (#624 vision) | Cost reduction; privacy; 120s+ timeout handling; model diversity |
| **Cross-platform native apps** | OpenClaw (#75 Linux/Windows), NanoClaw (#1075 Linux docs), TinyClaw (#260 shell→Node.js) | GTK4, macOS menu bar, container-optimized builds |
| **OAuth/token management** | OpenClaw (#53317, #52037), NanoBot (#2465), IronClaw | Unified credential lifecycle; refresh persistence; scope escalation prevention |
| **Memory/scalability architecture** | CoPaw (#2289 MEMORY.md), PicoClaw (episodic memory #54750), IronClaw (full transcript persistence) | Vector DB migration; bounded history; context overflow detection |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Feature velocity + channel breadth | Power users, enterprises | Modular skills, gateway abstraction, rapid iteration |
| **NanoBot** | Supply-chain resilience, multi-language | Security-conscious, international | Post-LiteLLM native providers, Chinese community |
| **ZeroClaw** | A2A protocol, GitHub integration | Multi-agent orchestrators | Agent-to-agent interoperability focus |
| **PicoClaw** | Voice/ASR-TTS, subagent workflows | Conversational AI, automation | SubTurn execution, hot-reload config |
| **IronClaw** | Formal multi-tenant isolation, NEAR AI | Web3, regulated environments | Compile-time tenant contexts, WASM sandboxing |
| **LobsterAI** | Commercial monetization, enterprise IM | SaaS operators, China market | Credit packs, DingTalk/POPO integration |
| **ZeptoClaw** | Telegram-native UX, browser automation | Community bots, rapid deployment | agent-browser integration, threading optimization |
| **TinyClaw** | Minimalist Node.js, office UI | Individual developers, teams | Pure JS, reduced dependencies, workspace metaphor |
| **CoPaw** | Multi-agent collaboration, China channels | Enterprise automation, stock monitoring | Async agent communication, Xiaoyi/Feishu focus |

---

## 6. Community Momentum & Maturity

### Rapid Iteration Tier (>100 events/day, high feature velocity)
| Project | Trajectory | Risk Profile |
|:---|:---|:---|
| **OpenClaw** | Aggressive expansion | Regression debt from v2026.3.22 |
| **PicoClaw** | Feature→stabilization transition | Exec tool rollback shows caution |
| **CoPaw** | Post-release stabilization | v0.2.0 upgrade path fragile |

### Stabilization Tier (50–100 events/day, quality focus)
| Project | Trajectory | Key Investment |
|:---|:---|:---|
| **IronClaw** | v2 engine + security hardening | Multi-tenant isolation, anti-drift monitoring |
| **NanoBot** | Post-architectural recovery | Native provider ecosystem, sandboxed execution |
| **ZeptoClaw** | Bug closure excellence | Browser automation GA |

### Maintenance/Modernization Tier (<50 events/day)
| Project | Trajectory | Observation |
|:---|:---|:---|
| **LobsterAI** | Critical issue backlog | Crash loops (#859) need immediate triage |
| **TinyClaw** | Infrastructure refresh | Low issue volume suggests under-reporting or stability |
| **Moltis** | Community contribution mode | openai-oxide PR signals maintainer burden |

### Dormant
| Project | Status |
|:---|:---|
| **EasyClaw** | No activity; likely abandoned or private development |

---

## 7. Trend Signals for AI Agent Developers

### 1. **MCP as Emergent Standard**
Multiple projects (LobsterAI, NanoBot, Moltis) investing in MCP client/server support. **Signal**: Tool fragmentation consolidating around Anthropic's protocol; custom tool ecosystems becoming technical debt.

### 2. **Supply Chain Security as First-Class Concern**
NanoBot's LiteLLM quarantine triggered urgent native provider migration. **Signal**: Dependency minimization and audit transparency becoming selection criteria; "vendored" providers preferred over abstraction layers.

### 3. **Voice/Multimodal as Next Battleground**
PicoClaw's ASR/TTS refactor (#1939), NullClaw's vision pipeline request (#624), LobsterAI's desktop features. **Signal**: Text-only agents commoditizing; voice + vision differentiation emerging.

### 4. **Platform Parity as Growth Ceiling**
OpenClaw's #75 (65 upvotes), NanoClaw's Linux documentation mismatch (#1075), TinyClaw's shell→Node.js migration. **Signal**: macOS-first development creates friction; container-native and cross-platform tooling winning.

### 5. **Memory Architecture as Scaling Bottleneck**
CoPaw's MEMORY.md scalability (#2289), PicoClaw's episodic memory, IronClaw's transcript persistence. **Signal**: File-based memory insufficient; vector DB + structured storage migration required for production load.

### 6. **Enterprise IM as Regional Moat**
LobsterAI (DingTalk/POPO), CoPaw (Xiaoyi/Feishu), OpenClaw (WeChat). **Signal**: Slack/Discord insufficient for global markets; China-specific integrations becoming competitive requirement.

### 7. **Agent Orchestration vs. Single-Agent Focus**
ZeroClaw's A2A protocol, CoPaw's multi-agent async, IronClaw's routine engine. **Signal**: Single-agent tools maturing; multi-agent coordination the next capability frontier.

---

*Report generated from 12 project digests covering 1,500+ GitHub events on 2026-03-26.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-26

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 51 PRs and 18 issues updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project is undergoing significant architectural transitions—most notably the **removal of LiteLLM due to supply chain security concerns**—which is driving a wave of native provider implementations and compatibility fixes. No new releases were cut today, suggesting the maintainers are accumulating changes before a version bump. The community is actively engaged with multi-language participation (English, Chinese), and there's clear tension between rapid feature expansion and stability needs, particularly around provider compatibility and message handling reliability.

---

## 2. Releases

**No new releases** (0 today). Latest release remains prior to this period.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#2472](https://github.com/HKUDS/nanobot/pull/2472) | Add Step Fun (阶跃星辰) provider support | New native provider; responds to [#2470](https://github.com/HKUDS/nanobot/issues/2470) |
| [#2478](https://github.com/HKUDS/nanobot/pull/2478) | Message send retry mechanism with exponential backoff | Reliability improvement for all channels |
| [#2477](https://github.com/HKUDS/nanobot/pull/2477) | Configurable timezone for runtime context | Precision for scheduling/time-aware agents |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) | Mistral Provider + general transcription service | Closed after transcription improvements merged |
| [#1610](https://github.com/HKUDS/nanobot/pull/1610) | Auto-cast parameter types to match tool schema | Robustness for tool calling |

**Key Advances:**
- **Provider ecosystem expansion**: Step Fun added; AWS Bedrock (#2485) and Discord migration (#2486) in progress
- **Infrastructure reliability**: Retry logic, timezone precision, parameter validation
- **Post-LiteLLM stabilization**: Multiple PRs addressing the architectural transition

---

## 4. Community Hot Topics

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#2208](https://github.com/HKUDS/nanobot/issues/2208) Telegram message duplication on Android | 8 | **Platform-specific messaging bug**—Android Telegram client behavior differs from Desktop/Web; suggests channel abstraction layer needs platform-aware deduplication |
| 2 | [#2456](https://github.com/HKUDS/nanobot/issues/2456) `nanobot onboard` system deadlock in multi-user Linux | 7 | **Critical infrastructure risk**—SSH lockout in shared environments indicates unsafe system-level operations; needs sandboxing review |
| 3 | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM quarantined (credential stealer) | 6 | **Supply chain security crisis**—drives urgent provider migration; community needs migration guide |
| 4 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) Prompt prefix not preserved in conversation history | 6 | **Architectural correctness**—breaks OpenAI prompt caching assumptions; affects reproducibility and cost optimization |
| 5 | [#2469](https://github.com/HKUDS/nanobot/issues/2469) Qwen-3.5 function.arguments JSON format error | 5 | **Model-specific compatibility**—code model parameter formatting issue |

**Underlying Needs:**
- **Trust & security**: LiteLLM incident has shaken confidence; users need transparency on dependency audits
- **Reliable multi-platform messaging**: Telegram issues reveal gaps in cross-platform message handling
- **Predictable LLM interactions**: Prompt preservation and parameter formatting issues indicate abstraction layer fragility

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2456](https://github.com/HKUDS/nanobot/issues/2456) `onboard` causes system deadlock, SSH lockout | **CLOSED** | Unknown—needs verification |
| 🔴 **Critical** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM supply chain compromise (credential stealer) | **OPEN** | [#2485](https://github.com/HKUDS/nanobot/pull/2485), [#2491](https://github.com/HKUDS/nanobot/pull/2491), [#2494](https://github.com/HKUDS/nanobot/pull/2494) |
| 🟡 **High** | [#2465](https://github.com/HKUDS/nanobot/issues/2465) RoutingProvider hardcodes LiteLLM, breaks OAuth providers | **OPEN** | None identified |
| 🟡 **High** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) `openai_codex` unstable `prompt_cache_key` (per-turn hash) | **OPEN** | None |
| 🟡 **High** | [#2493](https://github.com/HKUDS/nanobot/issues/2493) LangSmith broken after LiteLLM removal | **OPEN** | None |
| 🟡 **High** | [#2476](https://github.com/HKUDS/nanobot/issues/2476) `max_tokens`/`max_completion_tokens` mutual exclusion | **OPEN** | [#2491](https://github.com/HKUDS/nanobot/pull/2491) |
| 🟢 **Medium** | [#2208](https://github.com/HKUDS/nanobot/issues/2208) Telegram Android message duplication | **CLOSED** | Unknown |
| 🟢 **Medium** | [#2469](https://github.com/HKUDS/nanobot/issues/2469) Qwen-3.5 JSON format error | **OPEN** | None |
| 🟢 **Medium** | [#2467](https://github.com/HKUDS/nanobot/issues/2467) WeChat group size limit exceeded | **OPEN** | None |

**Stability Assessment**: The LiteLLM removal has created a **regression cluster** affecting multiple providers and integrations. The project is in a **stabilization sprint** with multiple competing fixes in flight.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **`/skill` slash command** | [#2489](https://github.com/HKUDS/nanobot/issues/2489), [#2488](https://github.com/HKUDS/nanobot/pull/2488) | **High** | PR already open; addresses explicit skill activation UX gap |
| **AWS Bedrock native provider** | [#2485](https://github.com/HKUDS/nanobot/pull/2485) | **High** | Critical for LiteLLM migration; PR ready |
| **Discord.py migration** | [#2486](https://github.com/HKUDS/nanobot/pull/2486) | **Medium-High** | Improves maintainability; significant refactor |
| **Nano Team Mode** (multi-worker async) | [#2013](https://github.com/HKUDS/nanobot/pull/2013) | **Medium** | Large feature; 2+ weeks in PR queue |
| **Endpoint Channel** (OpenAI-compatible API) | [#1861](https://github.com/HKUDS/nanobot/pull/1861) | **Medium** | Enables external integrations; architectural significance |
| **OpenClaw plugin bridge** | [#2484](https://github.com/HKUDS/nanobot/issues/2484) | **Low-Medium** | Ecosystem expansion; needs design discussion |
| **Step Fun provider** | [#2470](https://github.com/HKUDS/nanobot/issues/2470), [#2472](https://github.com/HKUDS/nanobot/pull/2472) | **Merged** | Already complete |
| **Sandboxed exec** (bubblewrap) | [#1940](https://github.com/HKUDS/nanobot/pull/1940) | **Medium** | Security hardening; addresses [#2456](https://github.com/HKUDS/nanobot/issues/2456) class of issues |

**Roadmap Signal**: The project is prioritizing **provider resilience** and **security hardening** over net-new capabilities, likely preparing for a stability-focused release.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Supply chain anxiety** | LiteLLM quarantine panic; requests for dependency audit | 🔴 High |
| **Provider fragility** | Multiple issues on `max_tokens`/`max_completion_tokens`, model-specific errors | 🔴 High |
| **Message handling reliability** | Telegram duplication, WeChat limits, burst message coherence | 🟡 Medium |
| **Integration breakage** | LangSmith, OAuth providers failing post-LiteLLM | 🟡 Medium |
| **Misleading UX** | "I'm doing it" messages with no action executed [#2487](https://github.com/HKUDS/nanobot/issues/2487) | 🟡 Medium |
| **Multi-user safety** | `onboard` locking shared systems | 🔴 High |

### Use Cases Emerging
- **Enterprise multi-user deployments** (Linux servers, shared environments)
- **Multi-platform messaging** (Telegram, WeChat, Discord, Feishu/Lark)
- **Cost-conscious LLM usage** (prompt caching, heartbeat optimization [#2482](https://github.com/HKUDS/nanobot/pull/2482))
- **Team/collaborative agent workflows** (Team Mode demand)

### Satisfaction Indicators
- Active contribution (51 PRs) suggests strong community investment
- Rapid response to Step Fun request (issue → merged PR in 24h) shows maintainer responsiveness
- Multi-language documentation effort (#2232) indicates global user base commitment

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#144](https://github.com/HKUDS/nanobot/issues/144) Gemini API key error | ~7 weeks | Stale provider config issue; may be affected by LiteLLM removal | Verify if still reproducible; close or migrate to new provider system |
| [#1861](https://github.com/HKUDS/nanobot/pull/1861) Endpoint Channel | ~2 weeks | Large architectural PR; blocking external integration use cases | Maintainer review for merge decision |
| [#2013](https://github.com/HKUDS/nanobot/pull/2013) Nano Team Mode | ~2 weeks | Complex feature; may need rebase as codebase evolves rapidly | Rebase + final review, or defer to next cycle |
| [#1940](https://github.com/HKUDS/nanobot/pull/1940) Sandboxed exec | ~2 weeks | Security-critical; addresses [#2456](https://github.com/HKUDS/nanobot/issues/2456) class of issues | Priority review given safety implications |
| [#1360](https://github.com/HKUDS/nanobot/pull/1360) Heartbeat structured decision | ~3 weeks | Context budgeting improvement; builds on other PRs | Dependency check + integration test |

**Maintainer Attention Recommended**: The **LiteLLM removal fallout** (#2443, #2465, #2493) requires coordinated response—potentially a migration guide and compatibility matrix. The **sandboxed execution** PR (#1940) should be prioritized given the `onboard` deadlock report.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-26

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 89 total updates in the last 24 hours (39 issues, 50 PRs), indicating an active pre-release stabilization phase. The project is currently addressing critical regressions in v0.6.1-v0.6.2, particularly around WebSocket streaming, Matrix channel reliability, and memory management. No new release was cut today, suggesting maintainers are accumulating fixes for a patch release. The contributor base appears broad with multiple community PRs addressing production pain points.

---

## 2. Releases

**None today.** The project remains on v0.6.2 (released prior to this window).

---

## 3. Project Progress

### Merged/Closed PRs (15 total, key items)

| PR | Description | Impact |
|:---|:---|:---|
| [#4680](https://github.com/zeroclaw-labs/zeroclaw/pull/4680) | Matrix `mention_only` config for group room filtering | Restores expected behavior for Matrix @-mention gating |
| [#4714](https://github.com/zeroclaw-labs/zeroclaw/pull/4714) | **Remove PostgreSQL backend, consolidate on SQLite** | Breaking change; ports KG features to SQLite before removal |
| — | 13 additional merged/closed PRs in routine maintenance |

### Active Development (35 open PRs)

**Critical fixes in flight:**
- [#4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675) / [#4690](https://github.com/zeroclaw-labs/zeroclaw/pull/4690): WebSocket streaming regression fix (v0.6.1 "unknown does not support streaming")
- [#4665](https://github.com/zeroclaw-labs/zeroclaw/pull/4665) / [#4700](https://github.com/zeroclaw-labs/zeroclaw/pull/4700): Matrix multi-room listening restoration
- [#4707](https://github.com/zeroclaw-labs/zeroclaw/pull/4707): Auto-generated Matrix `device_id` for E2EE
- [#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706) / [#4709](https://github.com/zeroclaw-labs/zeroclaw/pull/4709): Bounded conversation history (memory leak prevention)

**Major features advancing:**
- [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166): A2A (Agent-to-Agent) protocol support — multi-agent interoperability
- [#4353](https://github.com/zeroclaw-labs/zeroclaw/pull/4353): Native GitHub integration

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) "Full docker image" | 4 comments, 👍2 | **Long-standing friction**: Feature-flag compilation creates barrier for non-technical users wanting WhatsApp/Matrix out-of-box. Suggests need for tiered images (`slim` vs `full`). |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) "Matrix channel: friction tracker" | 2 comments, 👍1 | **Umbrella coordination issue** — reveals Matrix as a problematic integration with 4+ sub-issues (E2EE, streaming, multi-room, device_id). Indicates architectural debt in channel abstraction. |
| [#3655](https://github.com/zeroclaw-labs/zeroclaw/issues/3655) "gateway web dashboard not available" | 3 comments | **Onboarding failure**: Default Docker experience broken without manual build step. Fixed by [#4678](https://github.com/zeroclaw-labs/zeroclaw/issues/4678) (closed). |

**Underlying needs:** Simplified onboarding, batteries-included defaults, and Matrix reliability as a competitive requirement.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **S0** — Data loss/Security | [#4299](https://github.com/zeroclaw-labs/zeroclaw/issues/4299) Custom OpenAI → 502 + hang after Mattermost | Open | None |
| **S0** — Security | [#4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672) Groq API key unmasked in UI | Open | None |
| **S0** — Security | [#4478](https://github.com/zeroclaw-labs/zeroclaw/issues/4478) Tool execution no-op (only shows "Used tools") | **Closed** | Fixed |
| **S1** — Workflow blocked | [#4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644) Web chat amnesia (2-round memory loss) | Open | None |
| **S1** — Workflow blocked | [#4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) `onboard --channels-only` destroys existing config | Open | None |
| **S1** — Workflow blocked | [#4652](https://github.com/zeroclaw-labs/zeroclaw/issues/4652) `install.sh --docker` fails on Ubuntu/WSL | Open | None |
| **S2** — Degraded | [#4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670) All models: "unknown does not support streaming" | Open | [#4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675), [#4690](https://github.com/zeroclaw-labs/zeroclaw/pull/4690) |
| **S2** — Degraded | [#4716](https://github.com/zeroclaw-labs/zeroclaw/issues/4716) MCP tools display but don't execute | Open | None |
| **S2** — Degraded | [#4630](https://github.com/zeroclaw-labs/zeroclaw/issues/4630) QQ channel WebSocket reconnection failures | Open | [#4715](https://github.com/zeroclaw-labs/zeroclaw/pull/4715) |
| **S2** — Degraded | [#4699](https://github.com/zeroclaw-labs/zeroclaw/issues/4699) Unbounded conversation history → memory growth | Open | [#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706), [#4709](https://github.com/zeroclaw-labs/zeroclaw/pull/4709) |

**Regression pattern:** v0.6.1 introduced streaming breakage; v0.6.2 Matrix refactor introduced multi-room and mention-handling regressions. Both are actively being patched.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Full Docker image** (all features) | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Medium — build infrastructure exists, needs CI decision |
| **MariaDB memory backend** | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | Low — PostgreSQL just removed; SQLite prioritized |
| **Provider-scoped fallback chains** | [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) | Medium — reliability config expansion |
| **GitHub native integration** | [#4353](https://github.com/zeroclaw-labs/zeroclaw/pull/4353) | High — PR active, large feature |
| **A2A protocol support** | [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | High — strategic multi-agent direction |
| **Raspberry Pi deployment guide** | [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) | High — PR [#4713](https://github.com/zeroclaw-labs/zeroclaw/pull/4713) ready |
| **Encrypted secrets CLI** (`zeroclaw secret set`) | [#4669](https://github.com/zeroclaw-labs/zeroclaw/issues/4669) | Medium — security hardening |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence |
|:---|:---|
| **Onboarding cliff** | Multiple install script failures, Docker "full image" requests, manual build requirements |
| **Memory/scale surprises** | OOM on Pi, unbounded history growth — contradicts "<$10 hardware" marketing |
| **Channel fragility** | Matrix dominates bug reports; QQ, Feishu, WhatsApp Web have edge cases |
| **Configuration safety** | `onboard --channels-only` destructive behavior, secrets in plaintext |

### Positive Signals
- Active self-hosting community (Mattermost, Matrix, custom OpenAI providers)
- Demand for enterprise features (sandboxing [#2972](https://github.com/zeroclaw-labs/zeroclaw/issues/2972), secret management)
- Hardware diversity: Pi 5, WSL, ARM32 all represented

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) Full Docker image | 11 days | User churn | Maintainer decision on build matrix |
| [#2972](https://github.com/zeroclaw-labs/zeroclaw/issues/2972) Plugin sandboxing | 18 days | Security posture | Architecture review (wasm vs. process isolation) |
| [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) A2A protocol | 5 days | Strategic direction | Code review bandwidth |
| [#4353](https://github.com/zeroclaw-labs/zeroclaw/pull/4353) GitHub integration | 3 days | Competitive feature | Final review, test coverage |

**Maintainer attention recommended:** The confluence of Matrix reliability fixes, streaming regression patches, and A2A/GitHub feature PRs suggests a **v0.6.3 patch release** should be prioritized to stabilize before landing major features.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-26

---

## 1. Today's Overview

PicoClaw demonstrates **exceptional project velocity** with 277 PRs and 182 issues updated in the last 24 hours, indicating a highly active development cycle. The project released **v0.2.4** with focused improvements to agent error handling, logging configurability, and hot-reload documentation. The maintainer team (particularly `Alix-007`) is aggressively triaging with **93% issue closure rate** (170/182) and **88% PR merge rate** (243/277), suggesting mature CI/CD and review processes. A significant portion of activity centers on **provider compatibility fixes** (OpenAI, Anthropic, Gemini, Mistral, Ollama) and **channel stability** (Discord, Telegram, WeChat). The project appears to be in a **stabilization phase** post-feature rush, prioritizing reliability and multi-platform deployment experience.

---

## 2. Releases

### v0.2.4 (2026-03-25)
| Commit | Change |
|--------|--------|
| `14a28ae` | docs: note that workspace config files are hot-reloaded ([#1747](https://github.com/sipeed/picoclaw/issues/1747)) |
| `2fec249` | refactor(agent): improve SubTurn error handling and logging |
| `3293220` | Add configurable logger |

**Assessment:** Minor version bump with **no breaking changes**. Focuses on operational improvements: runtime configuration flexibility, better observability through configurable logging, and more robust agent sub-turn execution. Migration: seamless for existing users.

---

## 3. Project Progress

### Merged/Closed PRs (High-Impact Selection)

| PR | Description | Impact |
|----|-------------|--------|
| [#2016](https://github.com/sipeed/picoclaw/pull/2016) | fix(providers): improve context overflow detection and classification | **Critical reliability**: Fixes undetected context window errors from Anthropic, ZhipuAI, GLM |
| [#2023](https://github.com/sipeed/picoclaw/pull/2023) | feat(docker): add bootstrap init script to source-built images | **Deployment**: Enables persistent tool installation across container restarts |
| [#2008](https://github.com/sipeed/picoclaw/pull/2008) | feat(channels): support multi-message sending via split marker | **UX**: LLM can now send multiple messages via `<\|[SPLIT]\|>` marker |
| [#1998](https://github.com/sipeed/picoclaw/pull/1998) | feat(config): allow placeholder text to be string or list | **Flexibility**: Randomized placeholder selection for dynamic responses |
| [#2012](https://github.com/sipeed/picoclaw/pull/2012) | build(deps): upgrade pty and reorganize sqlite dependencies | **Maintenance**: Security/stability dependency updates |
| [#1865](https://github.com/sipeed/picoclaw/pull/1865) | Revert "feat(tools): add exec tool enhancement with background execution and PTY support" | **Rollback**: Indicates exec tool enhancements caused regressions |

**Key Advancements:**
- **Context management reliability** — better error classification prevents silent failures
- **Container deployment maturity** — bootstrap system now covers all Dockerfile variants
- **Channel expressiveness** — multi-message capability improves conversational flow

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#75](https://github.com/sipeed/picoclaw/issues/75) Local LLM/Ollama support | 7 | **7** | **Accessibility**: Users want cost-free, private inference |
| [#61](https://github.com/sipeed/picoclaw/issues/61) File sending/receiving in chat | 6 | **4** | **Capability parity**: Match OpenClaw's file handling |
| [#430](https://github.com/sipeed/picoclaw/issues/430) Ollama timeout (120s fixed) | 7 | 3 | **Reliability**: Hardcoded timeouts break local models |
| [#148](https://github.com/sipeed/picoclaw/issues/148) OpenClaw SKILL compatibility | 9 | 2 | **Ecosystem**: Leverage existing skill marketplace |
| [#302](https://github.com/sipeed/picoclaw/issues/302) Public ghcr.io container | 7 | 2 | **Distribution**: Easier Docker deployment |

### Most Active Open PRs

| PR | Focus | Significance |
|----|-------|--------------|
| [#1939](https://github.com/sipeed/picoclaw/pull/1939) | **ASR/TTS Refactor** — voice message generation for Discord/Telegram/WeChat | Major feature expansion; follows architecture from #1648 |
| [#2025](https://github.com/sipeed/picoclaw/pull/2025) | Gateway vs launcher endpoint documentation | Reduces configuration confusion |
| [#2024](https://github.com/sipeed/picoclaw/pull/2024) | Discord token persistence fix | Regression fix from v0.2.4 |

**Underlying Needs Analysis:**
- **Local-first deployment** (Ollama, local models) is the dominant user priority — cost, privacy, and latency concerns
- **Media handling** (files, voice) represents the next feature frontier after text stability
- **Documentation clarity** around deployment modes remains a friction point

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 **High** | [#2019](https://github.com/sipeed/picoclaw/pull/2019) | Mistral API rejects `reasoning_content` field (422 error) | **Open PR** — fix pending |
| 🔴 **High** | [#2024](https://github.com/sipeed/picoclaw/pull/2024) | Discord token updates fail after v0.2.4 (validation drops token) | **Open PR** — regression identified |
| 🟡 **Medium** | [#2020](https://github.com/sipeed/picoclaw/pull/2020) | Subagents don't inherit runtime tool registry | **Open PR** — fixes #1713 |
| 🟡 **Medium** | [#2017](https://github.com/sipeed/picoclaw/pull/2017) | WeChat sync directory writability not probed | **Open PR** — edge case handling |
| 🟡 **Medium** | [#2022](https://github.com/sipeed/picoclaw/pull/2022) | Duplicate final reply after named-agent message tool | **Open PR** — deduplication logic |
| 🟢 **Low** | [#1865](https://github.com/sipeed/picoclaw/pull/1865) | Exec tool enhancement reverted (background/PTY) | **Merged** — rolled back |
| 🟢 **Low** | [#2021](https://github.com/sipeed/picoclaw/pull/2021) | Non-Pico channel sessions excluded from history API | **Open PR** — data visibility fix |

**Stability Assessment:** No critical crashes in production; issues are **provider-specific incompatibilities** and **regression fixes** from recent releases. The exec tool rollback suggests caution with privileged execution features.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Voice/Audio (TTS/ASR)** | [#1939](https://github.com/sipeed/picoclaw/pull/1939) | **Very High** | Large open PR in active review; architectural foundation laid in #1648 |
| **Subagent tool inheritance** | [#1278](https://github.com/sipeed/picoclaw/issues/1278), [#2020](https://github.com/sipeed/picoclaw/pull/2020) | **High** | PR open, addresses autonomous workflow needs |
| **Multi-user support** | [#995](https://github.com/sipeed/picoclaw/issues/995) | Medium | Identified need; requires architectural changes to MEMORY.md and cronjob isolation |
| **Telegram Forum Topics** | [#1270](https://github.com/sipeed/picoclaw/issues/1270) | Medium | Feature request with clear use case; channel expansion pattern |
| **Self-upgrade mechanism** | [#618](https://github.com/sipeed/picoclaw/issues/618) | Low-Medium | Acknowledged; complex cross-platform packaging |
| **User-configurable hooks** | [#738](https://github.com/sipeed/picoclaw/issues/738) | Low | Extensibility request; may conflict with security model |

**Prediction:** v0.3.0 will likely ship with **voice messaging** and **subagent tool access** as headline features, with **multi-user architecture** beginning experimental development.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Category | Quote/Pattern | Frequency |
|----------|-------------|-----------|
| **Configuration complexity** | "tried so many times to change the soul.md" — [#288](https://github.com/sipeed/picoclaw/issues/288) | Recurring |
| **Provider setup friction** | Multiple "no API key configured" errors despite keys being set | High |
| **Timeout limitations** | 120s fixed timeout breaks local Ollama models | Specific but vocal |
| **Documentation gaps** | Gateway vs. launcher modes confused users | Emerging |
| **Identity persistence** | Docker volume/cache issues with personality files | Docker users |

### Positive Signals

- **Active problem-solving**: Users reporting issues often return to confirm fixes work
- **Deployment diversity**: Windows, WSL2, Docker, Android, embedded — indicates broad appeal
- **Enterprise interest**: WeChat Work, Telegram Forum Topics, multi-user requests suggest team/organization use cases

### Use Case Evolution

| Phase | Evidence |
|-------|----------|
| **Personal assistant** | CLI, Telegram, Discord individual bots |
| **Team collaboration** | WeChat Work, Forum Topics, multi-user requests |
| **Autonomous agent** | Subagent tool access, hooks, cronjob scheduling |
| **Voice interaction** | ASR/TTS PR active testing |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>14 days, high engagement)

| Issue | Age | Engagement | Blocker |
|-------|-----|------------|---------|
| [#302](https://github.com/sipeed/picoclaw/issues/302) Public ghcr.io container | 38 days | 7 comments, 2 👍 | **Infrastructure decision** — one-click fix, policy question |
| [#618](https://github.com/sipeed/picoclaw/issues/618) Self-upgrade support | 32 days | 5 comments, 2 👍 | **Roadmap prioritization** — cross-platform complexity |
| [#148](https://github.com/sipeed/picoclaw/issues/148) OpenClaw SKILL compatibility | 40 days | 9 comments, 2 👍 | **Ecosystem strategy** — technical or business decision? |
| [#995](https://github.com/sipeed/picoclaw/issues/995) Multi-user support | 23 days | 5 comments | **Architecture review** — core data model changes |

### Stale Open PRs

| PR | Age | Risk |
|----|-----|------|
| [#1732](https://github.com/sipeed/picoclaw/pull/1732) Anthropic model ID normalization | 8 days | Low — targeted fix, may need rebase |
| [#1657](https://github.com/sipeed/picoclaw/pull/1657) HTTP ingress endpoint for Pico | 10 days | Medium — advances #850, needs API review |
| [#1515](https://github.com/sipeed/picoclaw/pull/1515) Cron documentation | 13 days | Low — docs-only, safe to merge |

**Recommendation:** The public container registry issue ([#302](https://github.com/sipeed/picoclaw/issues/302)) is the highest-impact backlog item — minimal engineering effort, significant user experience improvement.

---

## Project Health Score: **A-**

| Dimension | Grade | Notes |
|-----------|-------|-------|
| Velocity | A+ | 450+ items/day is exceptional |
| Stability | B+ | Active regression management, some rollback needed |
| Community | A | Responsive, diverse use cases, constructive feedback |
| Documentation | B | Improving but lags feature speed |
| Accessibility | B+ | Local LLM focus addresses cost barrier |

**Trend:** Positive — maturing from feature rush to reliable platform with expanding modality (voice) and deployment options.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-26

## 1. Today's Overview

NanoClaw shows **high development velocity** with 87 total updates in the last 24 hours (37 issues, 50 PRs). The project is in active stabilization mode: 26 issues were closed against 11 new/remaining open issues, and 29 PRs merged/closed against 21 still open. No new releases were cut, suggesting the team is accumulating fixes before a version bump. Notable patterns include intensive work on **CLAUDE.md initialization reliability** (4 related fixes merged), **Telegram platform hardening**, and **skill branch maintenance automation** hitting repeated merge conflicts.

---

## 2. Releases

**No new releases** — version remains unchanged from previous cycle.

---

## 3. Project Progress

### Merged/Closed PRs Today (29 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1373](https://github.com/qwibitai/nanoclaw/pull/1373) | GitHub Actions workflow for Docker image publishing to GHCR | **Infrastructure** — enables official container distribution |
| [#1452](https://github.com/qwibitai/nanoclaw/pull/1452), [#1450](https://github.com/qwibitai/nanoclaw/pull/1450) | Task scripts agent instructions improved | **UX** — guides agents toward `schedule_task` API vs. bash loops |
| [#1346](https://github.com/qwibitai/nanoclaw/pull/1346) | macOS menu bar status indicator skill | **Platform** — native macOS integration for start/stop/logs |
| [#1349](https://github.com/qwibitai/nanoclaw/pull/1349) | Pre-hook gate for scheduled tasks | **Reliability** — conditional task execution via shell hooks |
| [#1353](https://github.com/qwibitai/nanoclaw/pull/1353) | Copy main CLAUDE.md template when registering main group | **Bugfix** — fixes empty agent identity on setup |
| [#1370](https://github.com/qwibitai/nanoclaw/pull/1370) | Skip bump-version/update-tokens on forks | **Contributor UX** — eliminates workflow failures for forks |
| [#1368](https://github.com/qwibitai/nanoclaw/pull/1368) | Fix `claw` exit code after successful output | **CLI reliability** — graceful shutdown, proper exit codes |
| [#1367](https://github.com/qwibitai/nanoclaw/pull/1367) | Default Telegram migration backfill to DMs not groups | **Data integrity** — fixes misclassified chat types |

**Key advancement**: The CLAUDE.md initialization saga (multiple issues since early March) appears resolved with systematic fixes ensuring agents start with proper identity contexts.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Type | Comments | 👍 | Analysis |
|:---|:---|:---|:---:|:---:|:---|
| 1 | [#783](https://github.com/qwibitai/nanoclaw/issues/783) `schedule_task` idempotency | Closed Bug | 4 | 0 | **Core API design tension** — task accumulation across sessions reveals state management gaps in scheduler |
| 2 | [#1075](https://github.com/qwibitai/nanoclaw/issues/1075) Linux support doc mismatch | Closed Docs | 4 | 0 | **Platform positioning confusion** — website claims Linux support, README says "coming soon"; marketing/engineering alignment needed |
| 3 | [#1211](https://github.com/qwibitai/nanoclaw/issues/1211) `/new` command for session reset | Open Enhancement | 3 | 2 | **Token economics pain** — users hitting context limit costs; "good first issue" label suggests approachable implementation |
| 4 | [#1184](https://github.com/qwibitai/nanoclaw/issues/1184) K8s/Sealos deployment challenges | Open Question | 2 | 1 | **Production readiness gap** — restricted environments expose configuration/permission assumptions |

**Underlying needs**: 
- **Session lifecycle control** (#1211, #783) — users need explicit boundaries for agent state
- **Truthful platform support claims** (#1075, #1445) — Linux users hitting real bugs (firewall, LID JID handling, .env corruption)
- **Enterprise deployment patterns** (#1184) — air-gapped/restricted environment support

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **Critical** | [#1431](https://github.com/qwibitai/nanoclaw/issues/1431) | Closed | Merged | Command injection via `exec()` with string interpolation; race conditions in container runner |
| **Critical** | [#1445](https://github.com/qwibitai/nanoclaw/issues/1445) Bug 1 | Open | None | LID JID translation drops **all DM messages silently** — WhatsApp DMs fail for new sessions |
| High | [#1445](https://github.com/qwibitai/nanoclaw/issues/1445) Bugs 2-6 | Open | None | Firewall blocking, .env corruption, silent message drops on Linux |
| High | [#1454](https://github.com/qwibitai/nanoclaw/issues/1454) | Open | None | Sidecar exits immediately when `WATCH_CONTAINER` or `WATCH_CONFIGS` unset — async task cancellation bug |
| High | [#1451](https://github.com/qwibitai/nanoclaw/issues/1451) | Open | None | `EROFS` on read-only mount — watcher state file writes to wrong location |
| Medium | [#1440](https://github.com/qwibitai/nanoclaw/issues/1440) | Open | None | No intermediate feedback during long-running sessions — 10+ minute "hang" perception |
| Medium | [#1439](https://github.com/qwibitai/nanoclaw/issues/1439) | Open | None | Telegram reply-to metadata not passed to agent — breaks threaded conversations |

**Stability assessment**: Two critical security issues addressed (#1431), but **runtime reliability regressions** emerging in sidecar/watcher subsystems (#1454, #1451). Linux platform showing systemic fragility (#1445).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood Next Release | Rationale |
|:---|:---|:---:|:---|
| Session reset (`/new` command) | [#1211](https://github.com/qwibitai/nanoclaw/issues/1211) | **High** | "Good first issue", clear UX need, token cost impact |
| Persistent memory (mem0-graph) | [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | Medium | Reuses existing infrastructure (Qdrant+Neo4j), mature library |
| Ollama MCP skill | [#1331](https://github.com/qwibitai/nanoclaw/pull/1331) | Medium | Follows established skill pattern, local LLM demand |
| Signal channel | [#784](https://github.com/qwibitai/nanoclaw/pull/784) | Lower | "Needs Review"/"Pending Closure" status — may stall |
| Mattermost channel | [#546](https://github.com/qwibitai/nanoclaw/pull/546) | Lower | "Blocked" status since Feb 26, architectural alignment issues |
| CLI backend skill (Anthropic TOS compliance) | [#1343](https://github.com/qwibitai/nanoclaw/pull/1343) | Medium | Addresses #1224 legal/compliance risk for subscription users |

**Signal**: The project is prioritizing **reliability over expansion** — multiple channel PRs stalled while core fixes merge.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Silent failures** | [#1445](https://github.com/qwibitai/nanoclaw/issues/1445) LID JID drops, [#1440](https://github.com/qwibitai/nanoclaw/issues/1440) no progress feedback | High |
| **Setup friction** | [#1445](https://github.com/qwibitai/nanoclaw/issues/1445) Linux setup "six bugs", [#1184](https://github.com/qwibitai/nanoclaw/issues/1184) K8s complexity | High |
| **State accumulation costs** | [#1211](https://github.com/qwibitai/nanoclaw/issues/1211) token waste, [#783](https://github.com/qwibitai/nanoclaw/issues/783) duplicate tasks | Medium |
| **Identity/persona gaps** | [#755](https://github.com/qwibitai/nanoclaw/issues/755), [#1391](https://github.com/qwibitai/nanoclaw/issues/1391), [#1390](https://github.com/qwibitai/nanoclaw/issues/1390) missing CLAUDE.md | Medium (now largely fixed) |

### Positive Signals

- Appreciation for "minimalist approach" and "lightweight, secure alternative to bloated frameworks" ([#1184](https://github.com/qwibitai/nanoclaw/issues/1184))
- Strong skill ecosystem contribution (Mattermost, Signal, AstrBot, macOS status bar, mem0)

---

## 8. Backlog Watch

### Long-Stalled Items Needing Maintainer Attention

| Item | Age | Status | Risk |
|:---|:---|:---|:---|
| [#546](https://github.com/qwibitai/nanoclaw/pull/546) Mattermost channel | ~1 month | "Blocked" | Community contribution decay; registry pattern rewrites |
| [#784](https://github.com/qwibitai/nanoclaw/pull/784) Signal + reactions | ~3 weeks | "Needs Review"/"Pending Closure" | Duplicate effort risk, contributor frustration |
| [#1049](https://github.com/qwibitai/nanoclaw/pull/1049) Fix credential mounts for scheduled tasks | ~2 weeks | "Needs Review" | Security/functional gap — scheduled tasks lack MCP credentials |
| [#1408](https://github.com/qwibitai/nanoclaw/pull/1408) `claw ps` subcommand | 2 days | Open | CLI consolidation blocked on review from @gavrielc |

### Skill Branch Debt

Automated merge-forward failures ([#1437](https://github.com/qwibitai/nanoclaw/issues/1437), [#1436](https://github.com/qwibitai/nanoclaw/issues/1436), [#1435](https://github.com/qwibitai/nanoclaw/issues/1435), etc.) indicate **persistent conflicts** in:
- `skill/apple-container`
- `skill/native-credential-proxy`  
- `skill/ollama-tool`
- `skill/compact`

**Recommendation**: Dedicated skill branch maintenance sprint or archival decision needed to reduce CI noise.

---

*Digest generated from 87 GitHub events on 2026-03-26. Data source: qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-26

## 1. Today's Overview

NullClaw shows **moderate development velocity** with 3 issues and 3 PRs updated in the past 24 hours. The project is actively addressing infrastructure stability while fielding feature requests for platform expansion and multimodal capabilities. Notably, two significant PRs were closed—one improving documentation clarity and another fixing critical cron scheduler race conditions—indicating healthy maintainer responsiveness. However, no new releases were cut despite these improvements, suggesting either a pending release cycle or conservative versioning strategy. The issue backlog reveals growing user demand for Chinese market integration (WeChat) and vision capabilities, signaling where community priorities lie.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Impact |
|:---|:---|:---|
| [#620](https://github.com/nullclaw/nullclaw/pull/620) — docs: clarify `workspace_path` and `system_prompt` behavior | vedmalex | **Documentation & regression testing** — Resolves ambiguity from #500 by explicitly documenting that `workspace_path` does not suppress named agent `system_prompt`; adds regression test to prevent future behavioral drift |
| [#689](https://github.com/nullclaw/nullclaw/pull/689) — fix(cron): scheduler/worker race, memory leak, mutex lifetime, and test isolation | yanggf8 | **Critical stability fixes** — Addresses four production-risk issues: scheduler/worker race conditions, memory leaks, mutex lifetime bugs, and test isolation failures; improves daemon reliability for scheduled tasks |

**Technical Advancement:** The cron fixes represent substantial hardening of NullClaw's job scheduling infrastructure—essential for production deployments relying on delayed/scheduled message delivery.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#714](https://github.com/nullclaw/nullclaw/issues/714) — Support WeChat Plugin Integration | 1 comment, created 2026-03-25 | **Market expansion demand**: User explicitly notes competing forks (OpenClaw derivatives) already support WeChat, creating competitive pressure. Massive user base in China/SE Asia cited. **Underlying need**: Platform diversity for regional deployment; risk of user attrition to forks |
| [#624](https://github.com/nullclaw/nullclaw/issues/624) — Vision Pipeline: Send images/files directly to agent | 1 comment, 7-day lifespan | **Multimodal capability gap**: User implemented as custom skill; wants native support. References sipeed/picoclaw implementation. **Underlying need**: First-class multimodal LLM integration without userland workarounds |
| [#716](https://github.com/nullclaw/nullclaw/pull/716) — Add calculator tool | Open, 0 comments | **Tool ecosystem expansion**: Comprehensive 20-operation math tool in Zig. Suggests contributor interest in expanding built-in tool suite |

**Engagement Pattern:** Low comment volume but **high strategic significance**—platform coverage and multimodal support are competitive differentiators in the AI agent space.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Notes |
|:---|:---|:---|:---|
| [#715](https://github.com/nullclaw/nullclaw/issues/715) — Discord scheduled DM delivery may use invalid target identifier | **High** | Open, unassigned | **Production risk**: Scheduled/delayed DMs broken; live DMs work. Root cause: direct-session identifier reuse instead of valid DM channel target. **No fix PR yet** — directly related to #689's cron fixes but distinct Discord-specific channel resolution bug |

**Stability Assessment:** #689's merge addresses underlying scheduler infrastructure, but #715 reveals a **client-specific integration bug** in Discord's DM channel handling that remains unpatched.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| WeChat plugin integration | #714 | **Medium-High** | Competitive parity issue; explicit mention of fork availability creates urgency |
| Native vision/multimodal pipeline | #624 | **Medium** | Common user pain point (implemented as skill workaround); picoclaw reference provides implementation path |
| Expanded math/calculator tools | #716 (PR) | **High** | PR already submitted; clean Zig implementation; fills gap in built-in tools |

**Roadmap Prediction:** Calculator tool (#716) likely merges soon given PR readiness. WeChat and vision pipeline require architectural decisions on plugin system extensibility.

---

## 7. User Feedback Summary

### Pain Points
- **Platform lock-in**: Discord-centric design limits deployment flexibility (#714)
- **Multimodal friction**: Image analysis requires custom skill development (#624)
- **Scheduled messaging reliability**: Discord DM scheduling appears fragile (#715)

### Use Cases Emerging
- **Regional deployment**: China/SE Asia market entry (WeChat)
- **Visual agent workflows**: Document/image processing without preprocessing
- **Mathematical reasoning**: Built-in calculation capabilities for agent workflows

### Satisfaction Signals
- Active contribution of tools (calculator PR) indicates engaged developer community
- Documentation PRs (#620) suggest users investing in clarity improvements

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#624](https://github.com/nullclaw/nullclaw/issues/624) Vision Pipeline | 8 days | **Medium** | Maintainer response on multimodal roadmap; potentially tag `good first issue` or `help wanted` |
| [#714](https://github.com/nullclaw/nullclaw/issues/714) WeChat Integration | 1 day | **Low (new)** | Acknowledgment of competitive landscape; evaluate plugin architecture readiness |
| [#715](https://github.com/nullclaw/nullclaw/issues/715) Discord DM scheduling | 1 day | **High** | Urgent triage—scheduled messaging is core functionality; may need Discord API expert |

**Maintainer Attention Recommended:** #715 for immediate stability, #624 for roadmap communication to prevent community workaround proliferation.

---

*Digest generated from github.com/nullclaw/nullclaw activity 2026-03-25 to 2026-03-26.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-26

## 1. Today's Overview

IronClaw shows **high engineering velocity** with 50 PRs updated in the last 24 hours (36 merged/closed, 14 open) and 10 active issues. The project is in an **intensive stabilization and architecture transition phase**, with significant work on multi-tenant isolation, a new unified execution engine (v2), and critical LLM provider fixes for Bedrock and NEAR AI. No new releases were cut today, but the v0.22.0 release PR was recently closed, suggesting a release may be imminent. The team appears focused on production hardening, test coverage expansion, and resolving edge cases in tool calling and sandbox execution.

---

## 2. Releases

**No new releases today.**  
The most recent release activity was [PR #1601](https://github.com/nearai/ironclaw/pull/1601) (v0.22.0), which was closed on 2026-03-25. This release included **API breaking changes** due to a new public field added to an externally-constructible struct. Users upgrading from v0.21.0 should review struct construction patterns for compatibility.

---

## 3. Project Progress

### Merged/Closed PRs Today (36 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#1601](https://github.com/nearai/ironclaw/pull/1601) | Release v0.22.0 | Version bump with breaking API changes |
| [#1655](https://github.com/nearai/ironclaw/pull/1655) | Registry version bumps for staging promotion | Unblocks CI pipeline |
| [#1451](https://github.com/nearai/ironclaw/pull/1451), [#1499](https://github.com/nearai/ironclaw/pull/1499), [#1508](https://github.com/nearai/ironclaw/pull/1508), [#1514](https://github.com/nearai/ironclaw/pull/1514), [#1515](https://github.com/nearai/ironclaw/pull/1515), [#1517](https://github.com/nearai/ironclaw/pull/1517), [#1522](https://github.com/nearai/ironclaw/pull/1522), [#1548](https://github.com/nearai/ironclaw/pull/1548), [#1551](https://github.com/nearai/ironclaw/pull/1551), [#1552](https://github.com/nearai/ironclaw/pull/1552), [#1553](https://github.com/nearai/ironclaw/pull/1553), [#1555](https://github.com/nearai/ironclaw/pull/1555) | Staging promotions (automated CI batch merges) | Continuous integration of ~10 days of development |

### Key Active Development (Open PRs)

| PR | Description | Significance |
|:---|:---|:---|
| [#1557](https://github.com/nearai/ironclaw/pull/1557) | **Unified Thread-Capability-CodeAct execution engine (v2)** — 7,275 lines, 43 new files | Major architecture rewrite consolidating ~10 abstractions into 5 primitives; parallel development for future swap-in |
| [#1614](https://github.com/nearai/ironclaw/pull/1614) | **Multi-tenant isolation phases 2–4** with compile-time `TenantCtx` | Critical security/production feature; completes tracked work in #59 |
| [#1650](https://github.com/nearai/ironclaw/pull/1650) | Full LLM transcript persistence in routines + sandbox gate removal | Better observability and flexibility for `full_job` routines |
| [#1630](https://github.com/nearai/ironclaw/pull/1630) | Bedrock tool block stripping when `toolConfig` absent | Fixes validation errors on retry iterations |
| [#1632](https://github.com/nearai/ironclaw/pull/1632) | Discard truncated tool calls when `finish_reason == Length` | Prevents corrupted tool calls from 1024-token budget overflows |

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1631](https://github.com/nearai/ironclaw/issues/1631) / [#1632](https://github.com/nearai/ironclaw/pull/1632) | 1 comment, linked fix PR | **Tool call truncation under token pressure** — core agent loop reliability issue when large MCP responses (145KB) cause verbatim echoing in parameters |
| [#763](https://github.com/nearai/ironclaw/issues/763) | 1 comment, 1 👍, **closed today** | NEAR AI API requires user-role messages; routine engine was building system+assistant only — now resolved |

**Underlying needs:** The community is pushing for **robust tool calling at scale** (large payloads, multiple providers) and **clearer error handling** when LLM APIs have idiosyncratic requirements. The rapid fix turnaround (#1632 opened same day as #1631) indicates responsive maintainers.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#1631](https://github.com/nearai/ironclaw/issues/1631) | Truncated tool calls corrupt agent loop when large results exceed 1024-token budget | **PR [#1632](https://github.com/nearai/ironclaw/pull/1632) open** |
| **High** | [#1629](https://github.com/nearai/ironclaw/issues/1629) | Bedrock Converse API validation fails on tool blocks without `toolConfig` | **PR [#1630](https://github.com/nearai/ironclaw/pull/1630) open** |
| **Medium** | [#1640](https://github.com/nearai/ironclaw/issues/1640) | `build_software` crashes on Cargo.toml: TOML parsing expects string, gets inline table | *No fix PR yet* |
| **Medium** | [#1633](https://github.com/nearai/ironclaw/issues/1633) | Feishu channel `on_respond` fails: "app_id not configured (missing from workspace)" | *No fix PR yet* — configuration/docs issue |
| **Medium** | [#1637](https://github.com/nearai/ironclaw/issues/1637) | Sandbox execution exceeds 50 command loops | *No fix PR yet* — possible infinite loop protection trigger |
| **Low** | [#763](https://github.com/nearai/ironclaw/issues/763) | NEAR AI "No user query found in messages" on routines | **Fixed** (closed today) |

**Stability assessment:** Two critical LLM integration bugs have active fixes. The TOML parsing and Feishu configuration issues suggest **tooling edge cases** and **documentation gaps** in multi-channel deployments.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#1634](https://github.com/nearai/ironclaw/issues/1634) | **Anti-drift self-checks in agentic loop** — rule-based `DriftMonitor` for failure pattern detection without extra LLM calls | **High** — aligns with v2 engine goals, low-cost reliability win |
| [#1653](https://github.com/nearai/ironclaw/issues/1653) | End-to-end coverage for authenticated user-scoped system prompts | **Medium** — test infrastructure, may follow #1614 merge |
| [#1652](https://github.com/nearai/ironclaw/issues/1652) | Direct tests for Workspace scoped-to-user rebinding | **Medium** — same dependency |
| [#1644](https://github.com/nearai/ironclaw/issues/1644) | Regression test for one-shot REPL event-trigger completion | **Medium** — follows #1643 fix |

**Roadmap signal:** The v2 execution engine (#1557) and multi-tenant isolation (#1614) are the dominant architectural themes. Anti-drift monitoring (#1634) fits naturally into this reliability-focused phase.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact |
|:---|:---|
| [#1640](https://github.com/nearai/ironclaw/issues/1640) | **Rust/WASM builds fail** due to TOML generation inconsistency — blocks agent-created tooling workflows |
| [#1633](https://github.com/nearai/ironclaw/issues/1633) | **Feishu enterprise integration** configuration unclear — "missing from workspace" error despite `tool_auth` setup |
| [#1637](https://github.com/nearai/ironclaw/issues/1637) | **Sandbox loop limits** hit during simple command testing — suggests overly aggressive limits or counting bugs |

### Positive Signals
- Rapid bug fix response (#1631 → #1632 same day)
- Comprehensive test coverage expansion (3 new test-focused issues filed today)
- Full transcript persistence in routines (#1650) addresses observability gaps

**Satisfaction pattern:** Users appreciate the **agentic capabilities and multi-channel support**, but **configuration complexity** and **edge case robustness** remain friction points.

---

## 8. Backlog Watch

| Issue | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| [#1557](https://github.com/nearai/ironclaw/pull/1557) | 4 days | XL-sized v2 engine PR — risk of merge conflicts with ongoing staging promotions | Maintainer review for architectural alignment |
| [#1614](https://github.com/nearai/ironclaw/pull/1614) | 2 days | XL-sized multi-tenant PR — security-critical, needs thorough review | Priority review given production security implications |
| [#1630](https://github.com/nearai/ironclaw/pull/1630), [#1632](https://github.com/nearai/ironclaw/pull/1632) | 1 day | Bedrock and truncation fixes — high severity, ready for merge | Quick review/merge to unblock Bedrock users |
| [#1640](https://github.com/nearai/ironclaw/issues/1640) | 1 day | Build system bug — no assignee | Triage for TOML serialization fix |
| [#1633](https://github.com/nearai/ironclaw/issues/1633) | 1 day | Feishu channel bug — Chinese enterprise user | Documentation or channel configuration fix needed |

**Maintainer attention:** The two XL architectural PRs (#1557, #1614) are competing for review bandwidth with critical production fixes. Consider parallel review tracks or delegation to prevent bottlenecking.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-26

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 37 issues and 50 PRs updated in 24 hours, indicating an active pre-release stabilization period for version 2026.3.25. The project is experiencing growing pains typical of rapid feature expansion: MCP (Model Context Protocol) integration issues dominate user reports, enterprise IM connectors (DingTalk, POPO) have edge-case bugs, and new commercial features (login, credit packs, tiered authorization) are being field-tested. The maintainer team is highly responsive with parallel bug-fix and performance optimization efforts. Critical stability risks exist around Gateway crash loops and database integrity that require immediate attention.

---

## 2. Releases

### [2026.3.25](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.25) — Latest

| Change | PR | Author | Impact |
|--------|-----|--------|--------|
| **Login & Credit Pack System** | [#779](https://github.com/netease-youdao/LobsterAI/pull/779) | @liuzhq1986 | **Breaking**: New commercial monetization layer; users must now authenticate for full features |
| **IM Chat Sync Fix** | [#780](https://github.com/netease-youdao/LobsterAI/pull/780) | @liugang519 | Fixes message synchronization in chat integrations |
| **Desktop Dangerous Command Tiered Authorization** | [#796](https://github.com/netease-youdao/LobsterAI/pull/796) | @liuzhq1986 | Security-critical: Commands now require escalation based on risk level |

**Migration Notes**: Users upgrading from 2026.3.23 or earlier should expect new login flows. Self-hosted deployments need to verify `openclaw.json` schema compatibility with new auth requirements.

---

## 3. Project Progress

### Merged/Closed Today (5 PRs)

| PR | Description | Significance |
|----|-------------|--------------|
| [#870](https://github.com/netease-youdao/LobsterAI/pull/870) | **Fix: Avoid Gateway restart on model switch** — Eliminates process restarts when switching between package models and custom providers using per-provider env vars | **Major UX win**: Resolves [#844](https://github.com/netease-youdao/LobsterAI/issues/844)'s "slow restart" complaints |

### Active Development (45 Open PRs)

**Performance & Stability**:
- [#812](https://github.com/netease-youdao/LobsterAI/pull/812): SQLite debounced writes + `getConfig()` caching — addresses [#562](https://github.com/netease-youdao/LobsterAI/issues/562) main thread blocking
- [#809](https://github.com/netease-youdao/LobsterAI/pull/809): Redux selector optimization with `createSelector` — eliminates invalid re-renders in cowork sessions

**Security Hardening**:
- [#877](https://github.com/netease-youdao/LobsterAI/pull/877) / [#869](https://github.com/netease-youdao/LobsterAI/pull/869): `shell.openExternal` URL scheme whitelist (http/https/mailto only) — blocks RCE via `file:`, `cmd:`, `powershell:`, `javascript:` protocols

**Feature Work**:
- [#707](https://github.com/netease-youdao/LobsterAI/pull/707): GitHub Copilot OAuth + API integration (GPT-4o, Claude 3.5 Sonnet, o3-mini, Gemini 2.0 Flash)
- [#880](https://github.com/netease-youdao/LobsterAI/pull/880): Message-level sharing with image preview, branding, and one-click copy
- [#871](https://github.com/netease-youdao/LobsterAI/pull/871): Skill execution analytics dashboard
- [#875](https://github.com/netease-youdao/LobsterAI/pull/875): Scheduled task statistics cards with status filtering

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Status | Comments | Core Problem |
|-------|--------|----------|--------------|
| [#728](https://github.com/netease-youdao/LobsterAI/issues/728) | ✅ CLOSED | 4 | **MCP configuration not triggering** — "0 tools" despite proper config; resolution path established |
| [#691](https://github.com/netease-youdao/LobsterAI/issues/691) | 🔴 OPEN | 3 | **DingTalk bot double-message bug** — race condition in webhook handling vs. WeChat working correctly |
| [#711](https://github.com/netease-youdao/LobsterAI/issues/711) | 🔴 OPEN | 2 | **Internal NetEase registry `npm.nie.netease.com` inaccessible** — breaks POPO bot builds for external users |
| [#831](https://github.com/netease-youdao/LobsterAI/issues/831) | 🔴 OPEN | 2 | **Custom Gemini proxy models unsupported** — regression in latest version |

**Underlying Needs**: Users urgently need **reliable MCP tooling** (multiple issues), **enterprise IM parity** (DingTalk ≠ WeChat stability), and **clearer model provider documentation** for custom endpoints.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **CRITICAL** | [#859](https://github.com/netease-youdao/LobsterAI/issues/859) | **Gateway infinite crash loop** — invalid config from [#858](https://github.com/netease-youdao/LobsterAI/issues/858) causes 10+ min unrecoverable restart cycle | None yet — requires circuit breaker implementation |
| 🔴 **CRITICAL** | [#858](https://github.com/netease-youdao/LobsterAI/issues/858) | **Model name field data loss** — injection vulnerability via `"`; process.exit(); //` in input causes empty `name` field | None yet |
| 🟡 **HIGH** | [#850](https://github.com/netease-youdao/LobsterAI/issues/850) | **Disabled scheduled tasks still execute** — cron job state machine failure | None yet |
| 🟡 **HIGH** | [#820](https://github.com/netease-youdao/LobsterAI/issues/820) | **MCP works in dev, fails after packaging** — environment-specific tool discovery | None yet |
| 🟡 **HIGH** | [#879](https://github.com/netease-youdao/LobsterAI/issues/879) | **SQLite FK constraints disabled** — `ON DELETE CASCADE` ineffective, database bloat | ✅ [#881](https://github.com/netease-youdao/LobsterAI/pull/881) |
| 🟡 **HIGH** | [#837](https://github.com/netease-youdao/LobsterAI/issues/837) | **Scheduled tasks fail after lock screen, require restart** — macOS power state handling | None yet |
| 🟢 **MEDIUM** | [#883](https://github.com/netease-youdao/LobsterAI/issues/883) | **Desktop slash commands broken** — `/status`, `/reasoning`, `/help` non-functional on Windows | None yet |
| 🟢 **MEDIUM** | [#824](https://github.com/netease-youdao/LobsterAI/issues/824) | **Markdown rendering corruption** — weather data display mangled | None yet |
| 🟢 **MEDIUM** | [#821](https://github.com/netease-youdao/LobsterAI/issues/821) | **Login component load failure** — navigation state bug | None yet |

**Regressions from 2026.3.25**: Desktop slash commands, custom Gemini proxies, and login flow stability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|---------|----------|---------------------------|
| **Per-task model selection** (vs. global model) | [#856](https://github.com/netease-youdao/LobsterAI/issues/856) | **High** — architectural foundation in [#870](https://github.com/netease-youdao/LobsterAI/pull/870) |
| **GitHub Copilot integration** | [#707](https://github.com/netease-youdao/LobsterAI/pull/707) | **Very High** — PR active, OAuth complete |
| **Skill execution analytics** | [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | **Very High** — PR ready |
| **Message sharing/branding** | [#880](https://github.com/netease-youdao/LobsterAI/pull/880) | **Very High** — PR active |
| **PRD-to-EARS transformation skill** | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | **Medium** — enterprise product management use case |
| **Git worktree skill** | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | **Medium** — developer workflow enhancement |
| **Pagination for sessions/messages** | [#817](https://github.com/netease-youdao/LobsterAI/issues/817) | **Medium** — performance-critical, needs architecture |
| **IPC event name centralization** | [#818](https://github.com/netease-youdao/LobsterAI/issues/818) | **Low-Medium** — code quality, not user-facing |

---

## 7. User Feedback Summary

### Pain Points 😤

| Theme | Evidence | Severity |
|-------|----------|----------|
| **MCP "0 tools" frustration** | [#728](https://github.com/netease-youdao/LobsterAI/issues/728), [#724](https://github.com/netease-youdao/LobsterAI/issues/724), [#820](https://github.com/netease-youdao/LobsterAI/issues/820) | **Critical** — core value proposition failing |
| **Gateway restart disruption** | [#844](https://github.com/netease-youdao/LobsterAI/issues/844) | **High** — every model switch interrupts workflow |
| **Documentation gaps** | [#856](https://github.com/netease-youdao/LobsterAI/issues/856) (OpenClaw usage unclear) | **High** — new features unusable without docs |
| **Platform parity issues** | [#834](https://github.com/netease-youdao/LobsterAI/issues/834) (Windows/Mac pricing page mismatch), [#815](https://github.com/netease-youdao/LobsterAI/issues/815) (DOC generation fails Windows) | **Medium** — polish/enterprise readiness |
| **Credit system confusion** | [#884](https://github.com/netease-youdao/LobsterAI/issues/884) | **Medium** — new monetization needs onboarding |

### Positive Signals 😊

- **Responsive maintainers**: Issues closed within 48h (#728, #688, #724)
- **Performance investment**: SQLite optimization PRs show long-term health focus
- **Security maturity**: Multiple concurrent security hardening PRs

### Use Cases Emerging

1. **Enterprise automation**: DingTalk/POPO integration for team workflows
2. **Developer tooling**: MCP servers for code operations, Git integration
3. **Content operations**: Scheduled tasks, document generation, branded sharing

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Issue/PR | Age | Problem | Action Needed |
|----------|-----|---------|---------------|
| [#399](https://github.com/netease-youdao/LobsterAI/issues/399) | 12 days | Aliyun Bailian GLM 4.5 "Claude run failed" error | Model provider compatibility investigation |
| [#609](https://github.com/netease-youdao/LobsterAI/pull/609) | 5 days | Scheduled task refactor — large architectural PR | Code review, merge decision before more task bugs accumulate |
| [#562](https://github.com/netease-youdao/LobsterAI/issues/562) | Referenced | SQLite blocking main thread — root cause of performance complaints | Verify [#812](https://github.com/netease-youdao/LobsterAI/pull/812) resolution |

### Technical Debt Accumulating

- [#816](https://github.com/netease-youdao/LobsterAI/issues/816): Git branch name injection risk in skill downloads
- [#819](https://github.com/netease-youdao/LobsterAI/issues/819): Memory CRUD lacks input validation (10MB+ content accepted)
- [#867](https://github.com/netease-youdao/LobsterAI/issues/867) / [#868](https://github.com/netease-youdao/LobsterAI/pull/868): Transaction inconsistency in memory deletion

---

## Project Health Assessment

| Metric | Status | Notes |
|--------|--------|-------|
| **Velocity** | 🟢 Excellent | 50 PRs, 37 issues in 24h |
| **Stability** | 🟡 At Risk | Critical crash loops, MCP reliability |
| **Security** | 🟡 Improving | Active hardening, but injection risks remain |
| **Community** | 🟢 Healthy | Engaged users, responsive maintainers |
| **Documentation** | 🔴 Lagging | New features lack usage guidance |

**Recommendation**: Prioritize [#859](https://github.com/netease-youdao/LobsterAI/issues/859)/[#858](https://github.com/netease-youdao/LobsterAI/issues/858) Gateway crash fix and MCP tooling reliability before next feature release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-26

## 1. Today's Overview

TinyClaw (TinyAGI) shows **strong engineering velocity** with 3 PRs merged/closed in the last 24 hours and 1 active open PR. The project is undergoing a significant **architecture modernization**: replacing shell scripts with pure Node.js, standardizing authentication patterns, and improving Docker deployment. No new releases were cut today, suggesting the team may be batching changes for a larger version bump. Issue activity is dormant (0 open/closed), indicating either a stable codebase or low community reporting volume. Overall project health appears **solid with active maintenance**.

---

## 2. Releases

**No new releases** today. The last release remains prior to this digest period.

---

## 3. Project Progress

Three significant PRs merged today, representing a coordinated infrastructure overhaul:

| PR | Focus | Impact |
|:---|:---|:---|
| [#262](https://github.com/TinyAGI/tinyagi/pull/262) | Docker build fixes + README reorganization | **Stability + UX**: Fixes broken Docker builds by skipping Puppeteer browser download in builder stage; streamlines onboarding by prioritizing install script/CLI flow over Docker |
| [#260](https://github.com/TinyAGI/tinyagi/pull/260) | Shell-to-Node.js migration | **Architecture**: Eliminates runtime deps (tmux, jq, curl, bash); adds multi-stage Dockerfile; centralizes process management in `packages/main/src/index.ts` |
| [#261](https://github.com/TinyAGI/tinyagi/pull/261) | Auth standardization | **Developer experience**: Unifies `api_key`/`oauth_token` naming; adds Anthropic `api_key` support alongside OAuth; graceful degradation when credentials absent |

**Pattern**: These changes collectively reduce deployment friction and cross-platform compatibility issues—suggesting preparation for broader distribution or cloud deployment scenarios.

---

## 4. Community Hot Topics

**No active community discussion** detected today. All merged PRs have 0 comments and 0 reactions, indicating:
- Changes are either uncontroversial/internal maintenance
- Low external contributor engagement
- Decisions made offline or in private channels

**Open PR requiring attention:**
- [#249](https://github.com/TinyAGI/tinyagi/pull/249) — Office UI navigation refactor (open since 2026-03-23, last updated 2026-03-25)

This PR reorganizes the office layout with topbar navigation and clickable agent characters. The 3-day open duration without merge suggests either pending review or staging for coordinated UI release.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|:---|:---|:---|:---|
| **Medium** | Docker build failures | **FIXED** in [#262](https://github.com/TinyAGI/tinyagi/pull/262) | Puppeteer browser download was breaking builder stage; now skipped with system Chromium |
| **Low** | Shell script portability | **FIXED** in [#260](https://github.com/TinyAGI/tinyagi/pull/260) | Bash/tmux/jq dependencies eliminated for cross-platform compatibility |

No new regressions or crashes reported today. The fixes address **deployment-time failures** rather than runtime instability.

---

## 6. Feature Requests & Roadmap Signals

**Inferred from merged PRs:**

| Signal | Likely Roadmap Direction |
|:---|:---|
| Docker hardening + multi-stage builds | **Cloud/SaaS deployment** preparation |
| Auth standardization (API keys + OAuth) | **Enterprise/team features** with multiple provider support |
| Office UI navigation refactor | **Workspace/productivity focus** — agent management as core interface |

**Predicted near-term features:**
- Hosted/cloud TinyClaw instance option
- Team collaboration features (shared agents, workspaces)
- Additional LLM provider integrations (auth patterns now support extensibility)

---

## 7. User Feedback Summary

**No direct user feedback** available in today's data (0 issues, 0 comments). However, **implied pain points addressed:**

| Pain Point | Evidence | Resolution |
|:---|:---|:---|
| "Docker setup doesn't work" | [#262](https://github.com/TinyAGI/tinyagi/pull/262) fix description | Fixed build process; README now de-emphasizes Docker for simpler paths |
| "Installation too complex (bash dependencies)" | [#260](https://github.com/TinyAGI/tinyagi/pull/260) refactor | Pure Node.js eliminates platform-specific requirements |
| "Confusing auth configuration" | [#261](https://github.com/TinyAGI/tinyagi/pull/261) standardization | Clear `api_key`/`oauth_token` distinction per provider |

**Satisfaction indicator**: Proactive fixes suggest maintainers are responsive to friction points, even if not explicitly reported.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#249](https://github.com/TinyAGI/tinyagi/pull/249) Office UI refactor | 3 days | Low | Review/merge or document blocking dependencies |
| **General issue backlog** | N/A | **Medium** | 0 open issues suggests either excellent maintenance or **under-reporting** — consider enabling issue templates or community outreach |

**Recommendation**: The project would benefit from explicit roadmap communication (GitHub Projects/milestones) to contextualize why #249 remains open and what criteria trigger the next release.

---

*Digest generated from TinyAGI/tinyagi GitHub activity — 2026-03-26*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-26

## 1. Today's Overview

Moltis shows **moderate development velocity** with 6 items updated in the past 24 hours (3 issues, 3 PRs). The project is actively merging community contributions, with one MCP-related feature landing today. Two infrastructure PRs are queued—one adding a new OpenAI provider and another unblocking dependency upgrades. No new releases were cut. The duplicate "Local Thinking" feature requests suggest either a submission error or enthusiastic user demand for on-device inference capabilities.

---

## 2. Releases

**No new releases** for 2026-03-26.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#439](https://github.com/moltis-org/moltis/pull/439) | feat(mcp): add custom display names for MCP servers | **UX improvement** — Users can now assign friendly display names to MCP servers while preserving stable technical identifiers. Reduces configuration confusion in multi-server setups. |

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#490](https://github.com/moltis-org/moltis/issues/490) — [OPEN] Local thinking | 2 comments, duplicate of #489 | **High interest in local/edge inference**. User Wanderspool filed two near-identical requests within hours, indicating urgency around running reasoning models locally—likely for privacy, cost, or latency. |
| [#487](https://github.com/moltis-org/moltis/pull/487) — openai-oxide provider | New, 888 lines | **Architectural modernization**. Community contributor `fortunto2` proposes replacing 5,300+ lines of OpenAI client code with a focused Rust crate. Signals maintainer burden with current provider implementations. |
| [#460](https://github.com/moltis-org/moltis/issues/460) — WhatsApp Integration bug | 3 👍, now closed | **Integration reliability pain point** resolved; 3 upvotes suggest broader impact than single reporter. |

**Underlying need**: Users want Moltis to work reliably with external platforms (WhatsApp fixed) while reducing cloud dependencies (local thinking requested). The openai-oxide PR addresses maintainer scalability for provider sprawl.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix Available? |
|:---|:---|:---|:---|
| [#460](https://github.com/moltis-org/moltis/issues/460) WhatsApp Integration failure | **Medium-High** (3 👍, popular integration) | ✅ **CLOSED** today | Yes — resolved, details not in summary |

**No new bugs reported today.** Closed issue #460 suggests active bug triage. No regressions or crashes mentioned in 24h data.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Local/on-device thinking/reasoning** | [#490](https://github.com/moltis-org/moltis/issues/490), [#489](https://github.com/moltis-org/moltis/issues/489) | **Moderate-High** — Duplicate filings indicate demand; aligns with industry trend toward edge AI |
| **openai-oxide provider** | [#487](https://github.com/moltis-org/moltis/pull/487) | **High** — PR ready, unblocked by #488; massive code reduction (88% line count) is compelling |
| **reqwest 0.13 upgrade** | [#488](https://github.com/moltis-org/moltis/pull/488) | **High** — One-line change, blocking #487 |

**Prediction**: If #488 merges quickly, #487 likely follows in next release. Local thinking may require architectural discussion before implementation.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Integration reliability** | WhatsApp bug (#460) with 3 upvotes | 😐 **Frustration → Relief** (now fixed) |
| **Configuration UX** | MCP display names (#439) | 😊 **Satisfaction** — quality-of-life improvement |
| **Provider maintainability** | openai-oxide PR (#487) | 🤔 **Concern** — current OpenAI implementation seen as bloated |
| **Privacy/Cost control** | Local thinking requests (#489/#490) | 🙏 **Strong demand** — users want offline capability |

**Pain point**: Users running Moltis in production need stable integrations and lower operational costs. The WhatsApp fix and local thinking requests both point to deployment friction in real-world usage.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#487](https://github.com/moltis-org/moltis/pull/487) openai-oxide | 1 day | **Low** — fresh, but blocking dependency | Review for API compatibility; merge #488 first |
| [#488](https://github.com/moltis-org/moltis/pull/488) reqwest bump | 1 day | **Low** | Trivial review, unblocks provider work |
| [#490](https://github.com/moltis-org/moltis/issues/490) Local thinking | 1 day | **Medium** — duplicate, needs triage | Consolidate with #489, assess vs. roadmap |

**No stale items** requiring urgent attention in this 24h window. Maintainer responsiveness appears healthy with same-day closure of #460 and #489.

---

*Digest generated from GitHub activity 2026-03-25 to 2026-03-26. Data source: moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-26

---

## 1. Today's Overview

CoPaw shows **high development velocity** with 50 issues and 49 PRs updated in the last 24 hours, indicating an active release cycle following the v0.2.0.post1 patch. The project is experiencing **growing pains from multi-agent architecture adoption**, with users reporting state isolation issues, memory management concerns, and channel-specific bugs. Core infrastructure work dominates merged PRs, particularly around context management, model configuration scoping, and token handling. Community engagement is strong with 18-comment threads on channel integrations, though bug reports outnumber feature requests 2:1, suggesting stabilization should be the immediate priority.

---

## 2. Releases

### v0.2.0.post1 (2026-03-25)
[Release Link](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.2.0.post1)

| Change | PR | Impact |
|--------|-----|--------|
| Tool call parsing from thinking/text content | [#2192](https://github.com/agentscope-ai/CoPaw/pull/2192) | Enables better reasoning-to-action extraction for models with thinking capabilities |
| Documentation updates for v0.2.0 | [#2212](https://github.com/agentscope-ai/CoPaw/pull/2212) | Release notes alignment |
| Version bump | — | Maintenance |

**Migration Notes:** Post-release reports indicate cron job instability (#2230) and Docker upgrade failures (#2254) — users upgrading from v0.1.0b3 should verify container health and cron service status.

---

## 3. Project Progress

### Merged/Closed PRs (29 total, key selections)

| PR | Title | Significance |
|----|-------|------------|
| [#2283](https://github.com/agentscope-ai/CoPaw/pull/2283) | **Fix: Multi-Agent Model Configuration and Multi-Tab Isolation** | Critical fix for model config overwriting between agents — resolves state leakage across browser tabs |
| [#2280](https://github.com/agentscope-ai/CoPaw/pull/2280) | **fix(telegram): prevent premature timeout** | Eliminates busy-loop from httpx/Telegram timeout mismatch (5s vs 10s) |
| [#265](https://github.com/agentscope-ai/CoPaw/pull/265) | **fix(local-models): parse Codex-style channel tags** | Prevents template breakage from `<\|channel\|>` blocks in local coding models |
| [#266](https://github.com/agentscope-ai/CoPaw/pull/266) | **fix(llamacpp): return actionable errors** | Improves llama.cpp debugging with contextual error messages |
| [#2276](https://github.com/agentscope-ai/CoPaw/pull/2276) | **fix(cron): Modify optional/required fields** | UX fix for cron job creation form validation |
| [#2290](https://github.com/agentscope-ai/CoPaw/pull/2290) | **doc: add multi agent docs** | Documentation for multi-agent features |

**Infrastructure Advances:**
- Context management v2.0 in progress ([#2300](https://github.com/agentscope-ai/CoPaw/pull/2300)) — includes memory search injection, reduced CPU from file watcher optimization
- Global LLM rate limiter with 429 coordination ([#2282](https://github.com/agentscope-ai/CoPaw/pull/2282))
- WeChat iLink Bot channel support ([#2260](https://github.com/agentscope-ai/CoPaw/pull/2260))

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis |
|------|----------|----------|----------|
| 1 | [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) 小艺频道集成问题 | 18 | **Enterprise China market penetration** — Huawei Xiaoyi channel works in dev environment but fails in production with "network congestion" errors; suggests authentication/session handling gaps in production vs. sandbox environments |
| 2 | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) 飞书延迟回复 | 12 | **Message queue desynchronization** — bot answers previous question, indicating race condition in Feishu webhook handling; affects production reliability |
| 3 | [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) 100% CPU at idle | 9 | **Critical resource leak** — busy-polling epoll loop even with zero active conversations; infrastructure stability concern |
| 4 | [#430](https://github.com/agentscope-ai/CoPaw/issues/430) Help Wanted: Open Tasks | 9 | Community contribution onboarding — task claiming system working |
| 5 | [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289) MEMORY.md scalability | 7 | **Architectural debt** — text-based memory files becoming performance bottleneck under heavy use |

**Underlying Needs:**
- **Channel reliability**: Xiaoyi, Feishu, and DingTalk integrations need production-hardening
- **Resource efficiency**: CPU and memory management under sustained use
- **Scalable persistence**: Migration path from Markdown files to database/vector storage

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 100% CPU idle busy-poll | **Investigating** — related to [#1774](https://github.com/agentscope-ai/CoPaw/issues/1774) (closed, same root cause suspected: MemoryCompactionHook infinite loop) |
| 🔴 **Critical** | [#2254](https://github.com/agentscope-ai/CoPaw/issues/2254) | Docker 0.2.0 upgrade → web UI inaccessible | **Open** — port/config migration issue |
| 🟡 **High** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | Feishu message queue desync | **Open** — no PR yet |
| 🟡 **High** | [#2230](https://github.com/agentscope-ai/CoPaw/issues/2230) | Cron 503 errors post-0.2.0 upgrade | **Open** — service health check failure |
| 🟡 **High** | [#2174](https://github.com/agentscope-ai/CoPaw/issues/2174) | Multi-agent model loading failures (1/5 success rate) | **Partially addressed** by [#2283](https://github.com/agentscope-ai/CoPaw/pull/2283) |
| 🟡 **High** | [#2153](https://github.com/agentscope-ai/CoPaw/issues/2153) | DingTalk webhook expiration not stored | **Open** — cron push failures |
| 🟢 **Medium** | [#2243](https://github.com/agentscope-ai/CoPaw/issues/2243) | MEMORY.md not auto-updating | **Open** |
| 🟢 **Medium** | [#2263](https://github.com/agentscope-ai/CoPaw/issues/2263) | Cron ignores channel config (QQ→console fallback) | **Open** |
| 🟢 **Medium** | [#2295](https://github.com/agentscope-ai/CoPaw/issues/2295) | Output garbling/encoding issues | **Open** |

**Regression Pattern:** v0.2.0 upgrade path has **multiple failure modes** — Docker networking, cron service initialization, and model configuration migration all showing instability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Per-agent model/temperature config** | [#2288](https://github.com/agentscope-ai/CoPaw/issues/2288), [#2274](https://github.com/agentscope-ai/CoPaw/issues/2274) | **High** — PR [#2278](https://github.com/agentscope-ai/CoPaw/pull/2278) in progress | Core architecture change with scoped model selection |
| **Async agent communication with callbacks** | [#2225](https://github.com/agentscope-ai/CoPaw/issues/2225) | **Medium** — requires orchestration layer | Multi-agent collaboration is strategic priority |
| **Universal /stop command** | [#2302](https://github.com/agentscope-ai/CoPaw/issues/2302) | **High** — PR [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067) open | Safety/UX essential for long-running tasks |
| **Agent disable/enable toggle** | [#2284](https://github.com/agentscope-ai/CoPaw/issues/2284) | **Medium** | Operational necessity for multi-agent management |
| **Auto model failover with ranking** | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) | **Medium** — PR [#2282](https://github.com/agentscope-ai/CoPaw/pull/2282) adds rate limiting foundation | Reliability feature, infrastructure exists |
| **Private LLM gateway support** | [#2296](https://github.com/agentscope-ai/CoPaw/issues/2296) | **Medium** | Enterprise deployment requirement |
| **Cross-device session sync** | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) (point 5) | **Lower** — requires backend architecture | Mobile/web continuity, significant scope |
| **Self-evolution/reflection system** | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) (point 4) | **Lower** — research feature | Advanced capability, not immediate priority |

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Specific Feedback | Frequency |
|----------|-----------------|-----------|
| **Upgrade fragility** | "升级常常出错" (updates often fail), Docker restart doesn't resolve | High |
| **Configuration complexity** | "开两个页面交互太差" (two-page workflow terrible), model settings don't persist per-agent | High |
| **Resource consumption** | CPU 100%, MEMORY.md growth unbounded | Medium-High |
| **Channel reliability** | Feishu "延迟回复", Xiaoyi "网络拥堵", DingTalk webhook expiration | Medium |
| **Cron instability** | 503 errors, wrong channel routing, tasks not executing | Medium |

### Use Cases Emerging
- **Stock auto-monitoring**: Multi-agent async collaboration for financial data (#2225)
- **Cross-platform continuity**: Web → mobile handoff for long tasks
- **Enterprise gateway integration**: Custom auth headers for internal LLMs

### Satisfaction Indicators
- ✅ Strong documentation effort (multi-agent docs merged)
- ✅ Responsive maintainer activity (same-day PR closures)
- ❌ v0.2.0 release quality — "post1" patch suggests rushed initial release

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Risk |
|----------|-----|--------|------|
| [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) Xiaoyi channel | 6 days | Open, 18 comments | **China market expansion blocked** — needs maintainer with Huawei ecosystem access |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) Feishu desync | 14 days | Open, 12 comments | Production reliability; no assignee visible |
| [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289) MEMORY.md scalability | 1 day | Open, 7 comments | Architectural decision needed — vector DB migration? |
| [#2173](https://github.com/agentscope-ai/CoPaw/pull/2173) Skill system refactor | 2 days | Open, WIP | Large surface area — needs review bandwidth |
| [#2300](https://github.com/agentscope-ai/CoPaw/pull/2300) Context management v2.0 | 1 day | Open, WIP | **Foundation for many fixes** — should prioritize review |

**Maintainer Attention Needed:** 
- Production channel stability (Xiaoyi, Feishu, DingTalk webhook expiration)
- v0.2.0 upgrade path documentation and migration tooling
- Memory architecture decision for v0.3.0 planning

---

*Digest generated from GitHub activity 2026-03-25 to 2026-03-26. Data source: agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-26

## 1. Today's Overview

ZeptoClaw demonstrated **exceptionally high development velocity** with 30 PRs and 11 issues updated in 24 hours, indicating an active sprint or major feature push. The project is in a **rapid integration phase** with 22 merged/closed PRs against 8 open ones, suggesting aggressive feature landing with careful stack-based review (evident in PR chains #436→#437→#438→#439). No releases were cut, implying accumulated changes may bundle into a significant upcoming version. Community engagement is healthy with multi-party collaboration between core maintainer `qhkm` and contributor `stuartbowness` driving most activity.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Major Features Landed

| PR | Description | Impact |
|:---|:---|:---|
| [#436](https://github.com/qhkm/zeptoclaw/pull/436) | **BrowserTool with agent-browser, Lightpanda + Chrome fallback** | Core infrastructure for web automation with SSRF protection |
| [#437](https://github.com/qhkm/zeptoclaw/pull/437) | HTML attribute escaping for Telegram links | Security hardening |
| [#438](https://github.com/qhkm/zeptoclaw/pull/438) | NFC offset mapping for combining characters | Unicode correctness |
| [#439](https://github.com/qhkm/zeptoclaw/pull/439) | Quiet web search output (status line only) | UX polish |
| [#432](https://github.com/qhkm/zeptoclaw/pull/432) | Telegram reply-to threading | Major UX improvement for group conversations |
| [#431](https://github.com/qhkm/zeptoclaw/pull/431) | Full day-of-week name to prevent LLM hallucination | Reliability fix for agent reasoning |
| [#440](https://github.com/qhkm/zeptoclaw/pull/440) | ACP HTTP security hardening (CORS + path traversal) | Security-critical infrastructure |
| [#426](https://github.com/qhkm/zeptoclaw/pull/426) | Podman preference in container linting | Developer experience |

**Key advancement**: The [agent-browser](https://agent-browser.dev/) integration (#436-439 stack) represents ZeptoClaw's expansion into **full web browsing capabilities**, positioning it competitively against other agent frameworks.

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Activity | Analysis |
|:---|:---|:---|
| [#424](https://github.com/qhkm/zeptoclaw/issues/424) — Container script failure | **8 comments**, closed | Podman/Docker compatibility debate sparked significant discussion; resolution led to follow-up [#435](https://github.com/qhkm/zeptoclaw/issues/435) for smarter detection |
| [#331](https://github.com/qhkm/zeptoclaw/issues/331) — Telegram formatting improvements | 2 comments, closed | Long-running UX request finally resolved with threading and reaction indicators |

### Underlying Community Needs

1. **Container ecosystem flexibility** — Users run mixed Docker/Podman environments and need transparent tooling
2. **Telegram as primary interface** — Heavy investment in Telegram UX (typing indicators, threading, reactions) signals this is a key deployment channel for users

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **P1-Critical** | [#416](https://github.com/qhkm/zeptoclaw/issues/416) — Model discoverability regressions | **Closed** | Merged with #407 follow-up |
| **P1-Critical** | [#415](https://github.com/qhkm/zeptoclaw/issues/415) — Telegram typing indicator race condition | **Closed** | [#432](https://github.com/qhkm/zeptoclaw/pull/432) (threading refactor) |
| **P2-High** | [#419](https://github.com/qhkm/zeptoclaw/issues/419) — Telegram photo messages silently dropped | **Closed** | Fixed in processing pipeline |
| **P2-High** | [#424](https://github.com/qhkm/zeptoclaw/issues/424) — Container script abends with Podman | **Closed** | [#426](https://github.com/qhkm/zeptoclaw/pull/426), refined in [#441](https://github.com/qhkm/zeptoclaw/pull/441) |
| **P3-Normal** | [#434](https://github.com/qhkm/zeptoclaw/issues/434) — ACP HTTP CORS/cwd validation | **Closed** | [#440](https://github.com/qhkm/zeptoclaw/pull/440) |
| **P3-Normal** | [#367](https://github.com/qhkm/zeptoclaw/issues/367) — Hardcoded repo slug in AGENTS.md | **Closed** | Fixed |

**Stability assessment**: All critical/high bugs resolved same-day. Project shows **strong incident response**. The rapid closure of #416 (provider regressions) and #415 (race condition) indicates mature testing and review processes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Smarter container engine auto-detection** | [#435](https://github.com/qhkm/zeptoclaw/issues/435), [#441](https://github.com/qhkm/zeptoclaw/pull/441) | **High** — PR open, addresses #426 limitations |
| **Telegram reaction indicators** | [#428](https://github.com/qhkm/zeptoclaw/issues/428), [#433](https://github.com/qhkm/zeptoclaw/pull/433) | **High** — PR open, builds on merged #432 |
| **Browser tool stabilization** | [#442](https://github.com/qhkm/zeptoclaw/pull/442), [#443](https://github.com/qhkm/zeptoclaw/pull/443) | **High** — Split from #410, dependencies landing |
| **Quiet search output refinement** | [#444](https://github.com/qhkm/zeptoclaw/pull/444) | **Medium** — UX polish, may defer |
| **NFC/Unicode handling** | [#445](https://github.com/qhkm/zeptoclaw/pull/445) | **Medium** — Correctness fix, lower priority |

**Predicted vNext themes**: Browser automation GA, Telegram UX completion, developer tooling robustness.

---

## 7. User Feedback Summary

### Pain Points Addressed
| Issue | User Impact | Resolution |
|:---|:---|:---|
| Photo messages ignored | "Silent failure" confusion | Fixed — now handled or error-visible |
| Typing indicator chaos in groups | Concurrent message confusion | Threading + reaction system replaces |
| Container script failures | CI/dev environment friction | Iterative fixes with override options |
| Markdown formatting raw in Telegram | Unprofessional bot appearance | HTML rendering with proper escaping |

### Satisfaction Indicators
- 👍 on [#434](https://github.com/qhkm/zeptoclaw/issues/434) (security hardening) shows security-conscious user base
- Rapid issue-to-PR-to-merge cycles indicate responsive maintainers
- No open complaints about core agent functionality — stability focus paying off

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#421](https://github.com/qhkm/zeptoclaw/pull/421) — Claude Code PR guidelines | 1 day | Low | Documentation, can merge |
| [#433](https://github.com/qhkm/zeptoclaw/pull/433) — Telegram reactions | 1 day | Low | Depends on #432 (merged), ready for review |
| [#441](https://github.com/qhkm/zeptoclaw/pull/441) — Smarter container detection | 1 day | Medium | Addresses active user pain, prioritize |
| [#442](https://github.com/qhkm/zeptoclaw/pull/442) — BrowserTool | 1 day | Medium | Large feature, needs thorough review |
| [#443](https://github.com/qhkm/zeptoclaw/pull/443) — HTML escaping | 1 day | Low | Depends on #442 |

**No critical backlog** — all open items are <24h old. The project shows excellent flow management with same-day response times.

---

*Digest generated from 30 PRs and 11 issues. Project health: **Excellent** — high velocity, rapid bug closure, security-conscious development, and active feature expansion.*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*