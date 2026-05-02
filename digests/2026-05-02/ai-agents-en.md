# OpenClaw Ecosystem Digest 2026-05-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-02 00:20 UTC

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

# OpenClaw Project Digest — 2026-05-02

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, yet the merge/close rate remains critically low—only 35 issues closed and 26 PRs merged/closed against 465 open issues and 474 open PRs. This 7% resolution rate indicates a project under significant maintenance strain, with a growing backlog of unreviewed contributions. The zero new releases since the last cycle, combined with chronic gateway stability regressions spanning versions 2026.4.23–2026.4.29, suggest the project is in a **stabilization crisis** rather than feature development mode. Community energy is substantial but risks contributor burnout if triage capacity doesn't expand.

---

## 2. Releases

**No new releases** (0 published in last 24h). The latest tracked version remains **2026.4.29**, which shipped with known embedded-agent latency regressions (~40-47s stream-ready delays) and missing packaged channel dependencies.

---

## 3. Project Progress

### Closed PRs/Issues (Selected High-Impact)

| Item | Description | Impact |
|------|-------------|--------|
| [#72338](https://github.com/openclaw/openclaw/issues/72338) | Gateway CPU spin causing Telegram reply stalls and status probe timeouts — **closed** | Critical gateway stability fix |
| [#73306](https://github.com/openclaw/openclaw/issues/73306) | Active Memory plugin 15s timeout regression in v2026.4.26 — **closed** | Memory subsystem reliability |
| [#75412](https://github.com/openclaw/openclaw/issues/75412) | `fastPath` opt-in proposed for memory-only embedded runs (16-18s overhead) — **closed** | Performance optimization path established |
| [#75650](https://github.com/openclaw/openclaw/issues/75650) | 2026.4.29 embedded agent latency ~40-47s, packaged channel deps missing — **closed** | Version-specific regression documented |
| [#74630](https://github.com/openclaw/openclaw/issues/74630) | Meta-analysis correlating regression cluster 2026.4.24–2026.4.26 around gateway startup/runtime/control-plane — **closed** | Community-driven root cause synthesis |
| [#75591](https://github.com/openclaw/openclaw/issues/75591) | Plugin extension manifest read 100+ times per request → 60s prep stages — **closed** | I/O amplification bug identified |
| [#73095](https://github.com/openclaw/openclaw/issues/73095) | `prepareContextEngineSubagentSpawn` fails 100% on cliBackend-only installs — **closed** | CLI backend compatibility |

### Active PRs Advancing

| PR | Focus | Status |
|----|-------|--------|
| [#75649](https://github.com/openclaw/openclaw/pull/75649) | Windows staged update handoff preservation (XL) | Open, carries forward #44614 |
| [#73772](https://github.com/openclaw/openclaw/pull/73772) | **Scoped memory management RPCs** — `memory.status`, `memory.search.debug`, etc. (XL) | Open, major architectural addition |
| [#75860](https://github.com/openclaw/openclaw/pull/75860) | QMD recall improvement for Discord channel queries | Open, memory-core extension |
| [#73991](https://github.com/openclaw/openclaw/pull/73991) | **Per-agent command lane isolation** | Open, addresses #43235 — scalability-critical |
| [#73993](https://github.com/openclaw/openclaw/pull/73993) | Telegram polling restart durability | Open, fixes #44930 — message loss prevention |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | 👍 | Underlying Need |
|------|----------|----------|-----|---------------|
| 1 | [#72338](https://github.com/openclaw/openclaw/issues/72338) Gateway CPU spin / Telegram stall | 23 | 4 | **Production reliability**: Gateway as single point of failure; operators need health probes that actually reflect pipeline liveness, not just polling ingestion |
| 2 | [#73323](https://github.com/openclaw/openclaw/issues/73323) Gateway runtime degradation (Windows 11 + Node 24) | 15 | 1 | **Cross-platform runtime predictability**: Chronic multi-subsystem degradation suggests Node.js event loop or timer handling changes in v24 interacting poorly with OpenClaw's architecture |
| 3 | [#73306](https://github.com/openclaw/openclaw/issues/73306) Active Memory timeout (v2026.4.26) | 14 | 2 | **Plugin sandbox timeout ergonomics**: 15s default inadequate for memory operations; need adaptive timeouts or progress streaming |
| 4 | [#67035](https://github.com/openclaw/openclaw/issues/67035) Windows chat UI regression (input swallowed, invisible streams) | 13 | 0 | **Frontend rendering correctness**: Streaming architecture breaks React/Vue reactivity assumptions; need virtualized or transaction-based DOM updates |
| 5 | [#72808](https://github.com/openclaw/openclaw/issues/72808) Silently lost Slack connection | 11 | 2 | **Observable connection state**: Silent failures are worst-case for user trust; need heartbeat visibility and automatic reconnection UX |

### Emerging Pattern: "Silent Failure" as Anti-Pattern

Multiple top issues share a theme: **the system appears healthy while actually degraded** (CPU spin with stalled replies, lost Slack connection, Telegram polling stalls with offset acknowledged). This suggests telemetry and status surface design needs fundamental rethinking.

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Symptoms | Fix PR? | Notes |
|-------|----------|---------|-------|
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | macOS auto-trusts first TLS certificate → rogue gateway control (CVSS 9.0/9.5) | ❌ None | **Security: Critical**. Unpatched since 2026-03-19 |
| [#50630](https://github.com/openclaw/openclaw/issues/50630) | Tailscale serve + auth.mode=none exposes gateway to full Tailnet (CVSS 9.3) | ❌ None | **Security: Critical**. Configuration foot-gun, needs safe defaults |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway degradation: pricing 60s timeouts, Telegram polling 127-266s stalls, RPC 8-83s slowdowns | ❌ None | Chronic across 4.23/4.25/4.26; Node 24 suspected |
| [#72338](https://github.com/openclaw/openclaw/issues/72338) | CPU spin → Telegram stalls, status probe timeouts | ✅ Fixed | Closed 2026-05-01 |

### High Severity

| Issue | Symptoms | Fix PR? | Notes |
|-------|----------|---------|-------|
| [#75137](https://github.com/openclaw/openclaw/issues/75137) | TUI 89-99% CPU idle/busy-loop | ❌ None | Resource exhaustion on client side |
| [#75591](https://github.com/openclaw/openclaw/issues/75591) | Manifest read amplification: 100+ reads/request, 60-180s prep | ✅ Fixed | I/O cost not caching-related |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) | Multi-tool turn replay → orphan `tool_use` blocks after compaction | ❌ None | Anthropic 400 errors; session integrity |
| [#74209](https://github.com/openclaw/openclaw/issues/74209) | Bundled plugins (especially bonjour) block gateway startup post-2026.4.26 | ❌ None | Plugin loading architecture fragility |
| [#74617](https://github.com/openclaw/openclaw/issues/74617) | Discord READY event never fires — race condition | ❌ None | Bot online but unresponsive |

### Regression Cluster Confirmed

Issue [#74630](https://github.com/openclaw/openclaw/issues/74630) (now closed) formally correlated a **regression cluster spanning 2026.4.24–2026.4.26** affecting:
- Gateway startup stability
- Runtime control-plane responsiveness  
- Embedded agent initialization latency

This meta-analysis validates community perception that recent releases have degraded reliability.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (Aligned with Active PRs)

| Request | Issue | Signals |
|---------|-------|---------|
| **Scoped memory management RPCs** | [#73772](https://github.com/openclaw/openclaw/pull/73772) | PR open, XL size, multi-platform (macOS, web-ui, gateway, memory-core) — strong commitment |
| **Per-agent command lane isolation** | [#73991](https://github.com/openclaw/openclaw/pull/73991) | PR open, fixes multi-requested issue #43235; critical for multi-agent scale |
| **Skill priority configuration** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 7 comments, overlaps with active multi-agent coordination work |

### Medium-Term (Community Demand, No Active Implementation)

| Request | Issue | Blockers/Considerations |
|---------|-------|------------------------|
| **Session sidebar with chat history management** | [#50404](https://github.com/openclaw/openclaw/issues/50404) | Control UI architecture; depends on session state redesign |
| **System event priority/bypass-queue mode** | [#50739](https://github.com/openclaw/openclaw/issues/50739) | Requires session lane architecture changes; conflicts with current queue model |
| **Pre-send queue check — suppress stale replies** | [#48814](https://github.com/openclaw/openclaw/issues/48814) | Needs message sequencing protocol extension |
| **Stream-to-parent for subagent runtime** | [#47597](https://github.com/openclaw/openclaw/issues/47597) | Runtime protocol gap; ACP has it, subagent doesn't |

### Architectural Signal: From Monolithic Gateway to Decomposed Services

The volume of gateway-specific stability issues and the emergence of PRs for per-agent lanes, scoped memory RPCs, and cron session routing suggests a **strategic pivot toward service decomposition** is underway or urgently needed.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Theme | Representative Issues | Severity |
|-------|----------------------|----------|
| **"It looks working but isn't"** | #72338, #72808, #73323 | Critical trust erosion |
| **Windows is a second-class citizen** | #67035, #73323, #75649 | Platform parity gap |
| **Embedded run latency is unacceptable** | #75412, #75650, #75290, #75591 | 10-180s prep for simple replies |
| **Memory plugins break more than they help** | #73306, #65309, #72015 | Feature reliability < feature existence |
| **CLI-gateway handshake fragility** | #68944, #73095 | Local development friction |
| **No release notes help for regressions** | #72879, #74630 | Communication gap |

### Use Case Tensions

- **Demo reliability**: #72808 (Slack failed during friend demo) — users need "lunch demo" grade stability
- **Long-session durability**: #74907, #57349 — sessions break after hours/days, not suitable for persistent companions
- **Multi-agent cost control**: #72629 — quadratic token growth in conversational multi-agent is economically unsustainable

### Satisfaction/Dissatisfaction

| Indicator | Assessment |
|-----------|------------|
| Engagement volume | Very high (500+500 daily updates) |
| Resolution velocity | Very low (7% close/merge rate) |
| Emotional tone in issues | Increasingly frustrated; "regression" label overused as catch-all |
| Contributor retention risk | High — PR authors face 474-deep open queue |

---

## 8. Backlog Watch

### Critical: Unpatched Security Issues

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#50642](https://github.com/openclaw/openclaw/issues/50642) TLS auto-trust on macOS | 44 days | **Critical — CVSS 9.5** | Security review + hardened default |
| [#50630](https://github.com/openclaw/openclaw/issues/50630) Tailscale auth bypass | 44 days | **Critical — CVSS 9.3** | Configuration validation + safe defaults |

### Long-Unanswered Important Issues

| Issue | Age | Why It Matters | Blocker |
|-------|-----|---------------|---------|
| [#57349](https://github.com/openclaw/openclaw/issues/57349) Heap exhaustion / OOM on 17-20h uptime | 34 days | Production deployment blocker | Memory leak root cause unidentified; may need V8 heap analysis |
| [#50199](https://github.com/openclaw/openclaw/issues/50199) Skill priority configuration | 44 days | Core multi-agent coordination gap | Architectural decision on skill resolution ordering |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) Plugin hooks missing trace context | 44 days | Observability foundation for production | Distributed tracing architecture commitment |
| [#50739](https://github.com/openclaw/openclaw/issues/50739) System event priority/bypass-queue | 43 days | Reliability of critical alerts | Session lane architecture redesign |
| [#48814](https://github.com/openclaw/openclaw/issues/48814) Pre-send stale reply suppression | 46 days | UX polish for responsive feel | Message sequencing protocol change |

### PRs at Risk of Stale-Out

| PR | Age | Size | Risk |
|----|-----|------|------|
| [#69310](https://github.com/openclaw/openclaw/pull/69310) Surface dropped media | 12 days | L | Large PR, media handling complexity |
| [#73772](https://github.com/openclaw/openclaw/pull/73772) Scoped memory RPCs | 4 days | XL | XL review burden; needs dedicated reviewer |
| [#75649](https://github.com/openclaw/openclaw/pull/75649) Windows update handoff | 1 day | XL | Carries legacy commit; needs historical context |

---

## Project Health Assessment

| Dimension | Score | Trend |
|-----------|-------|-------|
| Community engagement | ⭐⭐⭐⭐⭐ | Stable high |
| Issue resolution velocity | ⭐⭐☆☆☆ | Declining |
| Release cadence | ⭐☆☆☆☆ | Stalled (no releases) |
| Security responsiveness | ⭐⭐☆☆☆ | Critical issues aging |
| Architecture scalability | ⭐⭐⭐☆☆ | Improving (lane isolation, scoped memory in progress) |
| Cross-platform reliability | ⭐⭐☆☆☆ | Windows specifically degraded |

**Recommendation**: OpenClaw should prioritize (1) expanding maintainer review capacity, (2) shipping a stabilization release for the 2026.4.x regression cluster, and (3) establishing a security response SLA for CVSS 9+ issues.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-05-02 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem exhibits **bifurcated health patterns**: established projects (OpenClaw, Hermes, ZeroClaw) struggle with maintainer bandwidth despite massive community energy, while newer entrants (Moltis, NullClaw, NanoBot) demonstrate superior merge velocity and issue resolution. **Onboarding reliability and silent failure modes** dominate cross-project pain points, indicating the ecosystem is transitioning from enthusiast experimentation to production deployment expectations. Security hardening, multi-agent orchestration, and embedded/edge deployment viability are emerging as table-stakes requirements. No project has achieved both high velocity and high stability simultaneously.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|:---|:---:|:---:|:---:|:---|:---:|
| **OpenClaw** | 500 | 500 | 26 (5.2%) | None since 2026.4.29; regression cluster | ⭐⭐☆☆☆ |
| **NanoBot** | 10 | 31 | 24 (77%) | None; accumulating for point release | ⭐⭐⭐⭐☆ |
| **Hermes Agent** | 50 | 50 | 3 (6%) | None; between cycles | ⭐⭐⭐☆☆ |
| **PicoClaw** | 11 | 24 | 13 (54%) | v0.2.8-nightly; 3 new regressions | ⭐⭐⭐☆☆ |
| **NanoClaw** | 10 | 27 | 16 (59%) | None; stabilizing providers branch | ⭐⭐⭐⭐☆ |
| **NullClaw** | 9 | 27 | 23 (85%) | None; sprinting toward milestone | ⭐⭐⭐⭐⭐ |
| **IronClaw** | 30 | 50 | ~7 (14%)** | None; fixing v0.26.0 Linux installer | ⭐⭐⭐☆☆ |
| **LobsterAI** | 0 | 15 | 9 (60%) | None; ~1 month review backlog | ⭐⭐⭐☆☆ |
| **Moltis** | 6 | 11 | 9 (82%) | None; robust accumulation | ⭐⭐⭐⭐⭐ |
| **CoPaw** | 7 | 4 | 0 (0%) | v1.5.1 current; review bottleneck | ⭐⭐☆☆☆ |
| **ZeroClaw** | 50 | 50 | 5 (10%) | **v0.7.4 released** | ⭐⭐⭐☆☆ |
| **TinyClaw** | — | — | — | No activity | — |
| **ZeptoClaw** | — | — | — | No activity | — |

*\*Health score composite: merge velocity, issue resolution, release cadence, security responsiveness*
*\*\*IronClaw exact merged PR count inferred from 7 closed issues with associated PRs*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Community scale** | 500 issues + 500 PRs/24h | 10-50× larger than any peer; unmatched contributor volume |
| **Architecture depth** | Per-agent lane isolation (#73991), scoped memory RPCs (#73772) | Most advanced multi-agent infrastructure in flight |
| **Platform coverage** | Telegram, Discord, Slack, CLI, web-ui, embedded | Broadest surface; competitors specialize (NanoBot: Chinese platforms; Moltis: terminal/Discord) |
| **Embedded agent capability** | Native embedded runs with fastPath optimization (#75412) | Unique; most peers are cloud/gateway-only |

### Disadvantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Resolution velocity** | 7% close/merge rate | NullClaw (85%), Moltis (82%), NanoBot (77%) resolve 10-15× faster |
| **Security responsiveness** | 44-day unpatched CVSS 9.0+ issues (#50642, #50630) | NanoBot, NullClaw same-day critical fixes; ZeroClaw proactive hardening |
| **Release reliability** | 2026.4.x regression cluster with 40-180s latency regressions | Moltis, NullClaw zero open bugs; ZeroClaw shipped v0.7.4 with clean-room rewrites |
| **Onboarding integrity** | Gateway stability crisis, silent failures | ZeroClaw recognized onboarding as "competitive vulnerability" (#6179); Moltis Docker-first reliability |

### Technical Approach Differences
- **OpenClaw**: Monolithic gateway with decomposing services (in progress); TypeScript/Node.js event-loop architecture showing strain under Node 24
- **NullClaw/Moltis**: Rust-based with explicit concurrency control; inbound router architecture (#845-#855) designed for preemption from ground up
- **NanoBot/NanoClaw**: Python async with rapid provider-specific hardening; China-market API diversity as forcing function for correctness
- **IronClaw**: WASM runtime with capability-based security (Reborn architecture); most formally ambitious but heaviest coordination overhead

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Silent failure elimination** | OpenClaw (#72338, #72808), NanoClaw (#2150, #2177), NullClaw (#849), ZeroClaw (#6099, #6127) | Observable connection state; heartbeat visibility; fail-loud vs. fail-safe design |
| **Multi-agent orchestration** | OpenClaw (#43235, #50199), NanoBot (#2072), Hermes (#9459, #7701), NullClaw (#844, #854), ZeroClaw (#5530) | Agent profiles; delegated task routing; subagent result propagation; memory isolation between delegates |
| **Memory/context management at scale** | OpenClaw (#73772, #73306), NanoClaw (#2150, #3995), NullClaw (#712, #852), Hermes (#4555, #18547) | Scoped memory RPCs; KV cache stability; context compression with fallback; graph RAG backends |
| **Edge/embedded deployment** | OpenClaw (#75412, #75650), NullClaw (#851, #853 RPi5), PicoClaw (K3s, RPi Zero W), NanoClaw (#2149 local model timeout) | Resource-constrained CPU efficiency; sub-20s initialization; container/process hygiene |
| **Provider diversity & API correctness** | NanoBot (DeepSeek, Anthropic, OpenAI), NanoClaw (OpenCode, Gemini), Hermes (MiniMax, OpenRouter), ZeroClaw (Ollama, LM Studio, Bedrock), Moltis (Zen) | Strict validation resilience; streaming lifecycle for tool calls; reasoning model trace handling |
| **Security hardening** | PicoClaw (stevef1uk cluster: skills whitelisting, session isolation, "Agent Shield"), ZeroClaw (#5722 sandbox, #5775 per-skill permissions), IronClaw (Reborn capability model) | Sandboxing without blocking legitimate skills; per-skill permissions; supply-chain verification (SHA256) |
| **Windows parity** | OpenClaw (#67035, #75649), LobsterAI (3/9 PRs), PicoClaw (#2651), CoPaw (#3988) | Build instructions; file watcher semantics; installer correctness; NSIS exit codes |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Most mature multi-agent infrastructure; broadest platform coverage | Power users, multi-platform operators | TypeScript monolith → decomposing services |
| **NanoBot** | Fastest bug turnaround; China ecosystem integration (QQ, Feishu, DeepSeek) | Chinese market, production group-chat deployers | Python async; API compatibility layer |
| **Hermes Agent** | Local LLM optimization; KV cache stability; enterprise auth flexibility | Privacy-conscious, cost-sensitive, team deployments | Python; llama.cpp integration; Codex CLI reuse |
| **PicoClaw** | Embedded/IoT heritage (Sipeed); Kubernetes-native security | Edge hardware, enterprise self-hosting | Go/Rust?; K3s manifests; hardware-adjacent |
| **NanoClaw** | V1→V2 migration discipline; WhatsApp media; container hygiene | Operations-focused self-hosters | TypeScript; SQLite; Docker-first |
| **NullClaw** | Concurrency architecture; Rust performance; Matrix E2EE | Privacy-technical, edge/self-hosted | Rust; inbound router; preemption design |
| **IronClaw** | Formal capability security; WASM runtime; legal/compliance harness | Security-critical, regulated environments | Rust; Reborn WASM; TrustDecision evaluation |
| **LobsterAI** | Cowork multi-agent sessions; WeChat integration; NetEase ecosystem | Chinese enterprise, collaborative teams | Electron/renderer; Redux; internal tool focus |
| **Moltis** | Terminal-native UX; data portability; zero open bugs | Developer power users, tmux/CLI workflows | Rust; portable `.tar.gz` state; teloxide |
| **CoPaw** | Volcengine integration; Qwen lineage; knowledge base UI | Chinese developers, Alibaba Cloud users | Python; conda packaging; first-time contributors |
| **ZeroClaw** | Web onboarding parity; schema migration discipline; FINOS evaluation | Enterprise evaluators, multi-channel automation | Rust; schema v3; ACP protocol |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, High Stability)
| Project | Evidence | Risk |
|:---|:---|:---|
| **NullClaw** | 85% merge rate, 0 open bugs, same-day fixes, concurrency architecture landing | Single-vendor contributor concentration (manelsen: 16/20 PRs) |
| **Moltis** | 82% merge rate, 0 open bugs, proactive features (#951 portable backups), e2e regression tests | Small absolute scale (11 PRs); unproven at OpenClaw volume |
| **NanoBot** | 77% merge rate, 4 critical bugs closed in 24h, expanding contributor base | Testing matrix gaps for provider diversity |

### Tier 2: Stabilization Struggle (High Volume, Low Resolution)
| Project | Evidence | Risk |
|:---|:---|:---|
| **OpenClaw** | 1000 updates/24h, 7% resolution, 474-deep PR queue, 44-day security issues | Contributor burnout; production trust erosion |
| **Hermes** | 100 updates/24h, 6% merge rate, 47 open PRs, 2 P1 bugs unpatched | Enterprise adoption blocked by data loss scenarios |
| **ZeroClaw** | 100 updates/24h, 10% merge rate, 45 open PRs, onboarding broken (#6123) | v0.8.0 schema migration blocked; first-run failure |

### Tier 3: Controlled Accumulation (Moderate Velocity, Extended Review)
| Project | Evidence | Risk |
|:---|:---|:---|
| **NanoClaw** | 59% merge rate, v2.0.0 base merged, OpenCode hardened | Mega-PR risk (#2178: 10 fixes bundled) |
| **IronClaw** | Reborn architecture overhaul, 44-comment epic, installer regression | Migration coordination overhead; Linux user acquisition blocked |
| **LobsterAI** | 60% merge rate, all open PRs `[stale]` at 31-38 days | Corporate development pattern; external contributor discouragement |

### Tier 4: At Risk (Low Velocity, Blocked)
| Project | Evidence | Risk |
|:---|:---|:---|
| **CoPaw** | 0% merge rate, 15-day stale PR, first-time contributor PR closed without merge | Conversation reliability crisis (#3992, #3991); contributor churn |
| **PicoClaw** | v0.2.8 regressions break image/Android/channels; 44-day cron issue | Release quality control failure; enterprise positioning undermined |
| **TinyClaw, ZeptoClaw** | Zero activity | Project viability uncertain |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **"Silent failure" as design anti-pattern** | OpenClaw (#72338 CPU spin, #72808 Slack loss), NanoClaw (#2150 context loss, #2177 push stall), NullClaw (#849 subagent silence), ZeroClaw (#6099 silent fallback) | **Design for observability first**: Every subsystem needs explicit degradation signals, not just health checks. Polling "success" with stalled pipelines is worse than explicit errors. |
| **From chatbot to infrastructure** | Hermes (team deployment, per-topic binding), ZeroClaw (FINOS evaluation, cron automation), NanoBot (family Discord, enterprise Feishu), LobsterAI (cowork sessions) | **Multi-tenancy and session isolation are not premium features**—they are baseline for real-world deployment. Design agent identity, workspace boundaries, and cost attribution from day one. |
| **Provider diversity as correctness forcing function** | NanoBot (DeepSeek, Anthropic, OpenAI all broke), NanoClaw (OpenCode hardening), Hermes (MiniMax migration), ZeroClaw (Ollama, LM Studio, Bedrock) | **Abstract LLM interfaces too early and you will leak provider-specific semantics**. Streaming lifecycle, reasoning traces, tool-call formats, and timeout behavior vary materially. Test against 3+ providers in CI. |
| **Local/edge deployment credibility gap** | OpenClaw (40-180s embedded latency), NullClaw (RPi5 CPU spin), PicoClaw (RPi Zero W), NanoClaw (local model timeout hardcoded) | **"Works on my laptop" is not edge-ready**. Container startup, process cleanup, memory limits, and initialization paths need dedicated engineering. The Raspberry Pi class of deployment is a real market. |
| **Security vs. capability tension** | ZeroClaw (#5722 sandbox blocks Python skills), PicoClaw (skills whitelisting), IronClaw (capability model), OpenClaw (unpatched TLS auto-trust) | **Default-deny security breaks legitimate use cases; default-permit risks exploitation**. Per-skill permission models with explicit capability declarations (IronClaw's approach) may become standard. |
| **Schema migration as lifecycle event** | ZeroClaw (schema v3 blocker for v0.8.0), NanoClaw (V1→V2 migration flow), IronClaw (Reborn product surface migration) | **Config and state schema versioning is not technical debt—it is product infrastructure**. Plan for forward/backward compatibility from first release; users will not tolerate data loss on upgrade. |
| **Contributor experience as competitive advantage** | Moltis (0 stale items, all ≤3 days), NullClaw (same-day fixes), NanoBot (reporter-provided patches merged), vs. OpenClaw (474-deep queue), LobsterAI (1-month stale PRs) | **Review velocity determines contributor retention more than feature velocity**. Projects with 80%+ merge rates attract sustained contribution; those below 20% hemorrhage talent regardless of user base size. |

---

*Report generated from 2026-05-02 community digests across 13 projects. Data reflects 24-hour GitHub activity windows.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-02

## 1. Today's Overview

NanoBot showed **very high development velocity** with 31 PRs updated in the last 24 hours (24 merged/closed, 7 open) and 10 issues processed (8 closed, 2 remaining open). The project demonstrates strong maintainer responsiveness with same-day turnaround on critical bugs—notably four bug fixes merged today addressing DeepSeek API validation, Anthropic streaming, Matrix auth spam, and tiktoken fallback crashes. No new releases were cut, suggesting the team is accumulating fixes for a larger point release. Activity is heavily concentrated on stability hardening, channel integrations (Feishu, NapCatQQ, Matrix), and API correctness.

---

## 2. Releases

**No new releases** (v0.1.5.post3 appears to be current based on issue references).

---

## 3. Project Progress

### Merged/Closed PRs Today (24 total, key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3555](https://github.com/HKUDS/nanobot/pull/3555) | boogieLing | **Fix API stream lifecycle for tool-backed requests** — resolves premature SSE termination in OpenAI-compatible streaming when tools are invoked | Critical API correctness fix |
| [#3579](https://github.com/HKUDS/nanobot/pull/3579) | coldxiangyu163 | **Auto-fallback to stream on Anthropic long-request error** | Eliminates 10-min timeout crashes |
| [#3578](https://github.com/HKUDS/nanobot/pull/3578) | coldxiangyu163 | **Stop Matrix sync loop on irrecoverable auth errors** | Stops server spam, fixes resource exhaustion |
| [#3582](https://github.com/HKUDS/nanobot/pull/3582) | yorkhellen | **Restore tiktoken fallback in token estimation** | Fixes `NameError` crash in memory consolidation |
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | yorkhellen | **Add `sender_id` to LLM runtime context** | Enables user-aware group chat responses |
| [#3577](https://github.com/HKUDS/nanobot/pull/3577) | hongshunanhai | **Strip partial think tags in streaming output** | UX polish, prevents leaked control tokens |
| [#3528](https://github.com/HKUDS/nanobot/pull/3528) | XJPeng12 | **Sanitize URLs in web_fetch tool** (strip markdown backticks/quotes) | Robustness against LLM formatting quirks |
| [#3560](https://github.com/HKUDS/nanobot/pull/3560) | JiajunBernoulli | **Adjust DeepSeek reasoning mode check condition** | Fixes #3554 |
| [#3561](https://github.com/HKUDS/nanobot/pull/3561) | tongtianli03-code | **Origin message ID support and outbound deduplication** | Prevents message loops in subagent flows |
| [#2334](https://github.com/HKUDS/nanobot/pull/2334) | LZDQ | **More frequent session message persistence** | Reduces progress loss on agent crashes |
| [#2337](https://github.com/HKUDS/nanobot/pull/2337), [#2379](https://github.com/HKUDS/nanobot/pull/2379) | LZDQ | **NapCatQQ channel** (group chat + images for QQ) | Major platform expansion |

**Themes:** Streaming/API correctness, crash resilience, multi-user chat context, Chinese platform integrations (QQ, Feishu, DeepSeek).

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments/Reactions | Analysis |
|:---|:---|:---|
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) — Native Multi-Agent Routing | 8 comments, 👍 1 | **Highest-comment issue.** Users want built-in orchestration comparable to OpenClaw's multi-agent routing, rather than manual gateway instance management. Underlying need: horizontal scaling and agent specialization without operational complexity. |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) — Session-Level Focus Tool | 4 comments, 👍 0 | **Open feature request.** Sophisticated request for persistent task anchoring across interruptions. Reflects real-world agent UX gap—users need agents that maintain "mental task boards" like humans. High implementation complexity; may need architectural RFC. |
| [#1851](https://github.com/HKUDS/nanobot/issues/1851) — Matrix auth error spam | 3 comments, 👍 0 | **Resolved today.** Classic operational pain: auth failures causing log/CPU storms. Community validated fix approach. |

### Emerging Patterns
- **Multi-agent architecture** is the most-discussed strategic direction (#2072)
- **Session/cognitive state management** (#3292) signals maturity expectations from power users

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **Critical** | [#3584](https://github.com/HKUDS/nanobot/issues/3584) DeepSeek `reasoning_content` API validation error | **OPEN** — root cause identified, patch provided by reporter | Awaiting merge | Breaks DeepSeek models (deepseek-v4-flash, deepseek-reasoner) in v0.1.5.post3; strict API validation rejects agent history |
| **High** | [#3581](https://github.com/HKUDS/nanobot/issues/3581) `NameError: name 'estimated' is not defined` | **CLOSED** | [#3582](https://github.com/HKUDS/nanobot/pull/3582) | tiktoken fallback broken when provider counter unavailable; crashes memory consolidation |
| **High** | [#2709](https://github.com/HKUDS/nanobot/issues/2709) Anthropic "Streaming required for >10min" | **CLOSED** | [#3579](https://github.com/HKUDS/nanobot/pull/3579) | Non-stream Anthropic calls fail on long operations |
| **High** | [#3551](https://github.com/HKUDS/nanobot/issues/3551) OpenAI-compatible streaming closes early for tool requests | **CLOSED** | [#3555](https://github.com/HKUDS/nanobot/pull/3555) | SSE terminates prematurely; affects API consumers |
| **Medium** | [#3553](https://github.com/HKUDS/nanobot/issues/3553) Matrix reads old messages on startup | **CLOSED** | (implied in #3578) | Restart loops reprocess history; workaround was `/new` command |
| **Medium** | [#3571](https://github.com/HKUDS/nanobot/issues/3571) ReadFileTool cross-session cache pollution | **CLOSED** | (likely #3582 area) | Session B sees "File unchanged" stub from Session A |
| **Medium** | [#1851](https://github.com/HKUDS/nanobot/issues/1851) Matrix auth error spam | **CLOSED** | [#3578](https://github.com/HKUDS/nanobot/pull/3578) | 2-second retry loop hammers homeserver |

**Risk Assessment:** Only one critical bug remains open (#3584), with reporter-provided patch reducing resolution friction. The DeepSeek and Anthropic fixes indicate active attention to China-market and enterprise API stability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Native Multi-Agent Routing** | [#2072](https://github.com/HKUDS/nanobot/issues/2072) | Medium-High | Most-commented open request; architectural foundation exists (manual multi-instance possible) |
| **Session-Level Focus Tool / Task Anchoring** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Low-Medium | Complex cognitive architecture; needs RFC; competes with stability priorities |
| **Model Presets for Quick Switching** | [#3358](https://github.com/HKUDS/nanobot/pull/3358) | **High** — PR open | Ready implementation; strong DX improvement |
| **MCP Tool Lazy Loading** | [#1759](https://github.com/HKUDS/nanobot/pull/1759) | Medium | Performance optimization; open since March, may need rebase |
| **HookCenter Typed-Event System** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | Medium | Plugin ecosystem enabler; Chinese-language PR suggests growing contributor base |
| **Tool-Loop Guardrails** | [#3580](https://github.com/HKUDS/nanobot/pull/3580) | **High** — PR open | Addresses #2298; small-model reliability is recurring pain point |
| **WebUI Security Hardening** | [#3492](https://github.com/HKUDS/nanobot/pull/3492) | Medium | Security-critical but narrow audience (public deployers) |

---

## 7. User Feedback Summary

### Pain Points
- **API compatibility fragility**: DeepSeek, Anthropic, OpenAI-compatible endpoints all had breakage modes—suggests testing matrix gaps for provider diversity
- **Multi-user group chats**: Multiple issues/PRs (#3511, #3552) around sender identification—Discord, Feishu users need personalization
- **Session durability**: Agent crashes losing progress (#2334), restart loops reprocessing messages (#3553)—operational reliability concerns
- **Small model runaway loops**: #3580/#2298 highlights local/small models retrying failed tools 40×—cost and UX problem

### Positive Signals
- **Rapid same-day bug fixes**: 4 critical bugs closed within 24h of report—strong maintainer responsiveness builds trust
- **Platform expansion**: NapCatQQ, Feishu, LongCat provider—active China ecosystem adaptation
- **Contributor growth**: Multiple new authors (coldxiangyu163, yorkhellen, hongshunanhai) with quality patches

### Use Case Evolution
Users are deploying NanoBot in **production group chat environments** (family Discord, enterprise Feishu) rather than single-user CLI—driving need for identity context, session isolation, and operational hardening.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs Action |
|:---|:---|:---|:---|
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) MCP tool lazy loading | ~8 weeks open | Staleness, merge conflicts | Maintainer review or rebase guidance |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | ~2 weeks old, 4 comments | Scope creep without RFC | Architectural decision: accept as v0.2 feature or defer? |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) WebUI security hardening | ~4 days | Security-sensitive but unreviewed | Security review; may need docs for self-hosters |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) DeepSeek `reasoning_content` | **1 day, critical** | Patch provided, unmerged | Immediate merge or feedback on reporter's patch |

**Recommendation:** Prioritize #3584 merge (critical, reporter-solved) and #1759 resolution (oldest significant PR). Consider RFC process for #3292 to prevent design thrash.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-01/02.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-02

## 1. Today's Overview

Hermes Agent saw **very high community activity** on 2026-05-02 with **50 issues and 50 PRs updated in the last 24 hours**, though merge velocity remains low with only **3 merged/closed PRs** against **47 open PRs** and **43 open/active issues**. The project shows strong community engagement but potential maintainer bandwidth constraints. No new releases were published. Activity spans the full stack: gateway platform adapters (Telegram, Discord, Feishu, WeChat), core agent behaviors (delegation, memory, context compression), CLI experience, and infrastructure (Nix, cron, auth). The volume of same-day bug reports suggests the project is in active use at scale with real-world edge cases surfacing rapidly.

---

## 2. Releases

**No new releases** were published today. The project appears to be between release cycles with development accumulating on `main` without versioned distribution.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #18583 | wali-reheman | **Add skill: flight-transfer-finder** — Community skill submission via Hermes Skills Hub, scanned by guardrails | [PR #18583](https://github.com/NousResearch/hermes-agent/pull/18583) |
| #18555 | ggascoigne | **fix(auth): allow Codex CLI auth reuse** — Restores fallback auth path when device-key OAuth is admin-disabled; enables enterprise Codex CLI reuse | [PR #18555](https://github.com/NousResearch/hermes-agent/pull/18555) |
| #18547 | DaMoot | **fix(prompt): stabilize system prompt prefix for KV cache reuse** — Eliminates spurious KV cache invalidation between turns by removing volatile content from system prompt construction; improves local LLM performance | [PR #18547](https://github.com/NousResearch/hermes-agent/pull/18547) |

### Notable Open PRs Advancing

| PR | Author | What It Advances | Link |
|:---|:---|:---|:---|
| #18587 | teknium1 | **`/recap` slash command** — Session activity summarization (turn counts, tools, files); improves session management UX | [PR #18587](https://github.com/NousResearch/hermes-agent/pull/18587) |
| #18585 | TruaShamu | **Per-operation retry limits + circuit breaker** — Extends `tool_loop_guardrails` with user-friendly config aliases for runaway tool call protection | [PR #18585](https://github.com/NousResearch/hermes-agent/pull/18585) |
| #18592 | andyylin | **Discord auto-thread free-response channels** — Deterministic smart names, preserves auto-thread creation while allowing explicit opt-out | [PR #18592](https://github.com/NousResearch/hermes-agent/pull/18592) |
| #18590 | jax-0n-git | **Cron HOME-aware env passing** — Fixes subprocess environment inheritance for cron jobs running under different users | [PR #18590](https://github.com/NousResearch/hermes-agent/pull/18590) |
| #18589 | briandevans | **Hidden root grep search fix** — Resolves content search failures in paths like `~/.hermes/workspace/` due to GNU grep's `--exclude-dir='.*'` behavior | [PR #18589](https://github.com/NousResearch/hermes-agent/pull/18589) |
| #18579 | TruaShamu | **Context compression count in status bar** — Surfaces compression pressure to CLI users during long sessions | [PR #18579](https://github.com/NousResearch/hermes-agent/pull/18579) |
| #9921 | adam-tpb | **Auto-rename Telegram forum topics on session title change** — Connects `title_generator.py` to `editForumTopic` API; long-standing gap | [PR #9921](https://github.com/NousResearch/hermes-agent/pull/9921) |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count + engagement)

| Issue | Comments | 👍 | Topic | Underlying Need | Link |
|:---|:---|:---|:---|:---|:---|
| **#3347 MiniMax OAuth** | 6 | 1 | Auth/provider expansion | Users migrating from OpenClaw need provider parity; MiniMax is growing in Asian markets | [Issue #3347](https://github.com/NousResearch/hermes-agent/issues/3347) |
| **#4622 Per-Topic Role/Skill Binding (Telegram Forum)** | 5 | 2 | Multi-tenant bot personalities | Teams want single-bot, multi-context deployments without infrastructure proliferation | [Issue #4622](https://github.com/NousResearch/hermes-agent/issues/4622) |
| **#14637 OpenRouter Auth 401** | 4 | 0 | Provider auth reliability | Closed as resolved; indicates auth config path confusion between `.env` locations and runtime loading | [Issue #14637](https://github.com/NousResearch/hermes-agent/issues/14637) |
| **#4555 KV Cache Invalidation** | 3 | 2 | Local LLM performance | Critical for `llama.cpp` single-slot users; cache format drift between agentic loop and session reload wastes compute | [Issue #4555](https://github.com/NousResearch/hermes-agent/issues/4555) |
| **#5826 Linear Platform Adapter** | 3 | 3 | B2B/enterprise integrations | Project management tool integration is a gateway adoption driver; Linear's developer-heavy user base aligns with Hermes demographic | [Issue #5826](https://github.com/NousResearch/hermes-agent/issues/5826) |
| **#18457 Cross-Surface Session Continuity** | 3 | 0 | Omni-channel UX | Users expect seamless handoff between CLI and messaging platforms; current `/resume` is insufficient for stateful context | [Issue #18457](https://github.com/NousResearch/hermes-agent/issues/18457) |
| **#9459 Agent Profiles for `delegate_task`** | 3 | 8 | Custom orchestration | Strong vote count; users want Pantheon-like subagent harnesses without core modification | [Issue #9459](https://github.com/NousResearch/hermes-agent/issues/9459) |

### Analysis of Underlying Needs

- **Enterprise/team deployment patterns** dominate: per-topic binding, Linear integration, session portability, and auth flexibility all point to Hermes being used beyond personal CLI into team infrastructure.
- **Local LLM optimization** is a persistent theme (KV cache, context compression, prompt stabilization) — users are cost-sensitive or privacy-constrained.
- **Delegation/orchestration** is maturing: from simple subagent spawning to named profiles, background execution (#7701), and per-task model overrides (#18591).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| **P1** | #4451 | **`patch` tool corrupts `await` → `***` in TS/TSX** — Intermittent syntax destruction in Next.js projects | **None identified** | [Issue #4451](https://github.com/NousResearch/hermes-agent/issues/4451) |
| **P1** | #4469 | **Multiple rapid messages: only last processed** — Queue consumption failure, message loss | **None identified** | [Issue #4469](https://github.com/NousResearch/hermes-agent/issues/4469) |
| **P1** | #14637 | ~~OpenRouter 401 AuthenticationError~~ | **CLOSED** — likely config path issue | [Issue #14637](https://github.com/NousResearch/hermes-agent/issues/14637) |
| **P2** | #4555 | **KV cache invalidation on new user message** — Local LLM performance regression | **None identified** (related: #18547 for prompt stability) | [Issue #4555](https://github.com/NousResearch/hermes-agent/issues/4555) |
| **P2** | #18566 | **Feishu reply context loss when only `root_id` present** — Incomplete reply-tree resolution | **None identified** | [Issue #18566](https://github.com/NousResearch/hermes-agent/issues/18566) |
| **P2** | #18556 | **Guardrail bypass: assistant impersonates user + repeated-divider loop** — Potential prompt injection / output corruption with Gemini | **None identified** | [Issue #18556](https://github.com/NousResearch/hermes-agent/issues/18556) |
| **P2** | #18539 | **`/queue` FIFO drops MEDIA files — only last delivered** — File upload failure in chained queue | **None identified** | [Issue #18539](https://github.com/NousResearch/hermes-agent/issues/18539) |
| **P2** | #18529 | **Title generator leaks thinking tokens** — Uses raw `.content` instead of `extract_content_or_reasoning()` | **None identified** | [Issue #18529](https://github.com/NousResearch/hermes-agent/issues/18529) |
| **P2** | #4587 | **Multi-profile gateway unsafe: kills other profiles' processes** — Profile-blind process management | **None identified** | [Issue #4587](https://github.com/NousResearch/hermes-agent/issues/4587) |
| **P2** | #18588 | **Context compression: no fallback to main model on Groq 413** — TPM error handling gap | **None identified** | [Issue #18588](https://github.com/NousResearch/hermes-agent/issues/18588) |
| **P2** | #18586 | **`delegate_task` wrong `api_mode`/`base_url` for opencode-go** — Credential resolution bug | **None identified** | [Issue #18586](https://github.com/NousResearch/hermes-agent/issues/18586) |
| **P2** | #18581 | **ZWJ emoji triggers prompt injection filter** — `SOUL.md` blocked by "woman cartwheeling" emoji 🤸‍♀️ | **None identified** | [Issue #18581](https://github.com/NousResearch/hermes-agent/issues/18581) |
| **P2** | #18580 | **Telegram bot unresponsive in group chats** — Privacy mode / chat type filtering | **None identified** | [Issue #18580](https://github.com/NousResearch/hermes-agent/issues/18580) |
| **P3** | #4538 | **Skill auto-naming mismatch** — "company-research-summary" for crypto tokenomics | **None identified** | [Issue #4538](https://github.com/NousResearch/hermes-agent/issues/4538) |

### Stability Assessment

**Concerning patterns:**
- **Two P1 bugs without identified fixes** — `patch` tool corruption and message queue loss are data-loss scenarios
- **Multiple same-day P2 reports** (7 issues opened 2026-05-01/05-02) suggest either regression in recent commits or increased production usage surfacing edge cases
- **Gateway reliability issues clustering**: Telegram polling conflicts (#18513, closed), Feishu context loss (#18566), queue MEDIA drops (#18539), group chat silence (#18580)

---

## 6. Feature Requests & Roadmap Signals

| Feature | Votes | Signals | Likelihood in Next Version |
|:---|:---|:---|:---|
| **MiniMax OAuth** (#3347) | 1 | Migration path from OpenClaw; provider diversity demand | Medium — auth infrastructure exists, needs provider-specific implementation |
| **Per-Topic Role/Skill Binding** (#4622) | 2 | Strong team/enterprise use case; Telegram-specific | Medium — gateway architecture supports, needs config schema extension |
| **Linear Platform Adapter** (#5826) | 3 | Enterprise PM integration; author is active community member | Medium-high — gateway adapter pattern established |
| **Cross-Surface Session Continuity** (#18457) | 0 | Marked duplicate; session layer abstraction needed | Lower — architectural, not incremental |
| **Agent Profiles for `delegate_task`** (#9459) | 8 | **Highest voted open issue**; references external project (oh-my-opencode-slim); PR #7701 addresses background execution | **High** — community demand + partial implementation exists |
| **Signet Memory Provider** (#18569) | 0 | Author is Signet creator; respectful pre-PR outreach | Medium — memory provider plugin interface exists |
| **Portuguese (pt-BR) i18n** (#15738) | 0 | Dashboard-only language gap; straightforward translation | High — low risk, community-contributable |
| **Multimodel Routing for Agent Profiles** (#4461) | 0 | Vision vs. narrative task specialization; cost optimization | Medium — requires router logic in agent core |
| **Auto-discover Project-Local Skills** (#4667) | 0 | Vercel Labs skills CLI compatibility; developer workflow | Medium — filesystem watcher + skill loader extension |
| **Per-Task Model Override for Delegation** (#18591) | 0 | Rate limit mitigation; cost/quality tradeoff control | Medium — config schema + delegation logic |

### Prediction

**Most likely in next release:** Agent profile delegation (#9459 / #18591 cluster), Portuguese i18n (#15738), Telegram forum topic sync (#9921 / #16255), and context compression observability (#18579). These have active PRs or clear implementation paths with bounded scope.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Auth configuration fragility** | OpenRouter 401 (#14637), MiniMax OAuth missing (#3347), Codex CLI auth blocked (#18555) | High — blocks onboarding |
| **Message/data loss** | Rapid message queue drop (#4469), MEDIA file loss in queues (#18539), Feishu context loss (#18566) | High — erodes trust |
| **Local LLM performance degradation** | KV cache invalidation (#4555), context compression fallback failure (#18588), prompt prefix instability | Medium — affects cost-sensitive users |
| **Multi-profile/team deployment hazards** | Process killing across profiles (#4587), group chat silence (#18580), per-topic binding missing (#4622) | Medium — limits enterprise adoption |
| **Tool output corruption** | `patch` tool `await` → `***` (#4451), thinking token leakage (#18529), guardrail bypass (#18556) | Medium — code quality risk |
| **Emoji/filter false positives** | ZWJ emoji blocks SOUL.md (#18581) | Low — amusing but indicates brittle regex |

### Satisfaction Signals

- **Strong community contribution**: 50 PRs in 24h, skills hub submissions (#18583), third-party memory provider interest (#18569)
- **Active platform expansion**: Discord, Telegram, Feishu, WeChat, BlueBubbles, Linear — users are extending gateway coverage
- **Performance optimization interest**: Numba acceleration (#18295), KV cache fixes (#18547), compression observability (#18579)

### Use Case Evolution

Users are moving from **personal CLI assistant** → **team infrastructure** → **multi-platform deployment** → **orchestrated multi-agent systems**. The feature requests track this maturity curve.

---

## 8. Backlog Watch

### Long-Unanswered Important Items Needing Maintainer Attention

| Issue/PR | Age | Blocker | Risk | Link |
|:---|:---|:---|:---|:---|
| **#7701 Non-blocking background delegation** | ~3 weeks | Replaces #6813; teknium1's concerns addressed per author; needs final review | **High vote issue #9459 depends on this**; stalled orchestration improvements | [PR #7701](https://github.com/NousResearch/hermes-agent/pull/7701) |
| **#9087 Nix home-manager module** | ~3 weeks | NixOS module exists; per-user service requested; no maintainer Nix expertise evident? | Nix community adoption; reproducible user installs | [PR #9087](https://github.com/NousResearch/hermes-agent/pull/9087) |
| **#17214 Effective model self-identification** | 3 days | Open, cross-component (agent/cli/gateway); regression coverage included | Model identity confusion after `/new` affects user trust | [PR #17214](https://github.com/NousResearch/hermes-agent/pull/17214) |
| **#17503 BlueBubbles direct target resolution** | 3 days | Open; iMessage gateway reliability | Apple ecosystem users; handoff payload bugs | [PR #17503](https://github.com/NousResearch/hermes-agent/pull/17503) |
| **#16414 Update branch restore flow** | 5 days | `[verified]` label; test-aligned; simple fix | `hermes update` data loss risk | [PR #16414](https://github.com/NousResearch/hermes-agent/pull/16414) |
| **#9921 Auto-rename Telegram forum topics** | ~2.5 weeks | Implements #16255; config-gated; tests included | Long-standing UX gap; competing with #16255 issue | [PR #9921](https://github.com/NousResearch/hermes-agent/pull/9921) |
| **#3347 MiniMax OAuth** | ~5 weeks | No assignee; no PR; migration blocker | Asian market/provider parity | [Issue #3347](https://github.com/NousResearch/hermes-agent/issues/3347) |
| **#4469 Multiple rapid message loss** | ~4 weeks | **P1, no fix PR** | Fundamental queue reliability | [Issue #4469](https://github.com/NousResearch/hermes-agent/issues/4469) |
| **#4451 Patch tool `await` corruption** | ~4 weeks | **P1, no fix PR** | Code destruction in production | [Issue #4451](https://github.com/NousResearch/hermes-agent/issues/4451) |

### Maintainer Bandwidth Assessment

With **47 open PRs** and only **3 merged/closed** in 24 hours, the project appears to have a **review bottleneck**. The high volume of same-day bug reports without corresponding fix PRs suggests either:
- Recent regression in `main` triggering defect discovery
- Insufficient CI/automated testing catching issues pre-merge
- Core maintainer team spread thin across feature areas

**Recommended prioritization:** P1 bugs (#4451, #4469) and high-vote features (#9459 via #7701) for immediate attention; batch-process verified bugfixes (#16414, #17214, #17503) to clear queue.

---

*Digest generated from GitHub activity data for NousResearch/hermes-agent on 2026-05-02.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-02

## 1. Today's Overview

PicoClaw shows **high development velocity** with 24 PRs and 11 issues updated in the past 24 hours, alongside a new nightly release. The project is actively iterating on the v0.2.8 release cycle, though this appears to be a **stabilization period with notable regressions** — three new v0.2.8-specific bugs were reported today concerning image recognition, Android data access, and gateway channel initialization. The community is particularly active around Telegram and provider integrations, while a sustained push by contributor `stevef1uk` continues to land substantial security and infrastructure hardening changes. Overall health is **mixed**: strong merge activity (13 closed PRs) but emerging release quality concerns that may require a patch release.

---

## 2. Releases

| Release | Details |
|---------|---------|
| **[v0.2.8-nightly.20260501.6e1fab80](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Automated nightly build from `main` branch |
| **Stability Warning** | Marked as potentially unstable — use with caution |
| **Context** | Follows v0.2.8 proper; changelog indicates ongoing development post-release |

**Note:** No stable release today. The nightly suggests active post-v0.2.8 development, but three new bugs filed against v0.2.8 itself indicate the stable release may need a hotfix.

---

## 3. Project Progress

### Merged/Closed PRs (13 total — selected highlights)

| PR | Author | Domain | Summary |
|:---|:---|:---|:---|
| [#2739](https://github.com/sipeed/picoclaw/pull/2739) | cjkihl | channel | **Telegram markdown pipe table fix** — wraps tables in fenced code blocks to prevent `\|` escape garbling in MarkdownV2 mode |
| [#2743](https://github.com/sipeed/picoclaw/pull/2743) | cjkihl | provider | **DeepSeek proxy detection** — fixes `isDeepSeekReasoningProvider()` to detect DeepSeek models behind third-party proxies (e.g., opencode.ai, avian.io) |
| [#2326](https://github.com/sipeed/picoclaw/pull/2326) | stevef1uk | build/docker | **K3s deployment manifests** — production Kubernetes IaC with multi-arch Dockerfiles |
| [#2325](https://github.com/sipeed/picoclaw/pull/2325) | stevef1uk | agent/skill | **Skills whitelisting** — security layer restricting skill discovery/installation for hardened environments |
| [#2324](https://github.com/sipeed/picoclaw/pull/2324) | stevef1uk | channel/config | **Async `/chat` HTTP endpoint** — REST API for external integrations (Teams bots, custom frontends) |
| [#2323](https://github.com/sipeed/picoclaw/pull/2323) | stevef1uk | provider | **NVIDIA + Azure AI providers** — native support for NVIDIA integration gateway and Azure AI Foundry |
| [#2322](https://github.com/sipeed/picoclaw/pull/2322) | stevef1uk | agent/tool | **Session-level workspace isolation** — prompt injection and cross-session data leak protection |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | stevef1uk | multi-domain | **"Agent Shield" security suite integration** — comprehensive stabilization and security hardening |
| [#2327](https://github.com/sipeed/picoclaw/pull/2327) | stevef1uk | agent/tool | **Final security hardening tidy-up** — 100% parity with hardened security rebase |

**Key Trajectory:** The `stevef1uk` contribution cluster (8 PRs) represents a **major security and enterprise-readiness push** — multi-tenancy, sandboxing, K3s deployment, and provider expansion. This suggests PicoClaw is positioning for production/enterprise use cases.

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Comments | Status | Underlying Need |
|:---|:---|:---|:---|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) — Cron-triggered channel errors | **6 comments** | Open, stale | **Reliable scheduled task execution** — users want autonomous agents with cron-like scheduling; channel lifecycle management is fragile |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) — Disable Enter-to-send on Android | **4 comments** | Open, stale | **Mobile UX parity** — Android users expect multi-line message composition; current behavior breaks chat conventions |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) — Windows build instructions | **3 comments** | Open, stale | **Cross-platform developer onboarding** — documentation gap for Windows users |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) — OAuth auth errors (OpenAI, Antigravity) | **3 comments** | Open, stale | **Reliable OAuth flows** — auth breakage across multiple providers suggests systemic issue with token handling or provider API changes |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP request config | **3 comments** | Open, stale | **Performance/latency optimization** — users need streaming responses for real-time UX; currently blocked by missing config option |

**Analysis:** The highest-engagement issues cluster around **reliability** (cron, OAuth) and **UX polish** (mobile, streaming). The "stale" label on most suggests either maintainer bandwidth constraints or deprioritization relative to the security/enterprise push.

---

## 5. Bugs & Stability

### New/Active Regressions (v0.2.8)

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **🔴 High** | [#2738](https://github.com/sipeed/picoclaw/issues/2738) — Image recognition broken in v0.2.8 | Core multimodal functionality non-functional after upgrade | **None yet** |
| **🔴 High** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) — Android v0.2.8 cannot access data from tabs | Complete data access failure on Android | **None yet** |
| **🔴 High** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) — Gateway starts with no channels in v0.2.8 | Telegram channels fail to initialize; bot non-functional | **None yet** |

### Persistent Bugs

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **🟡 Medium** | [#2602](https://github.com/sipeed/picoclaw/issues/2602) — OAuth Authentication Errors | OpenAI/Antigravity OAuth failures | **None yet** |
| **🟡 Medium** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) — Cron channel errors | Scheduled tasks crash with channel errors | **None yet** |

**Stability Assessment:** The three v0.2.8 regressions are **release-blocking in aggregate** — they break image input, Android usage, and channel initialization. A v0.2.9 hotfix should be prioritized. The OAuth and cron issues suggest deeper architectural fragility in async/channel handling.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Serial/UART tool support** | [#2649](https://github.com/sipeed/picoclaw/issues/2649) | **High** | Aligns with Sipeed's embedded hardware focus; I2C/SPI already exist; natural gap-fill |
| **Streaming HTTP config** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | **Medium-High** | Small config-only change; high user demand; PR-ready |
| **GitHub Copilot provider** | [#2652](https://github.com/sipeed/picoclaw/issues/2652) | **Medium** | Provider expansion is active theme (NVIDIA/Azure just added); Copilot API access model may complicate |
| **Native audio input (multimodal)** | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | **Medium** | PR already open for Gemini 1.5 support; needs review |
| **Enter-key behavior config** | [#2376](https://github.com/sipeed/picoclaw/issues/2376) | **Medium** | Mobile UX standard; small scope |
| **K3s/Kubernetes deployment** | [#2326](https://github.com/sipeed/picoclaw/pull/2326) | **Shipped** | Already merged |

**Roadmap Signal:** The project is clearly prioritizing **enterprise/production readiness** (K8s, security hardening, multi-tenancy) over consumer UX. Embedded/IoT tooling (UART) and multimodal expansion (audio, streaming) appear as secondary but consistent themes.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **v0.2.8 regressions** | 3 new bugs in 24h breaking core flows | Critical |
| **Mobile experience gaps** | Android data access failure + Enter-key UX | High |
| **Platform build friction** | Windows build docs missing; Raspbian edge cases | Medium |
| **OAuth reliability** | Multi-provider auth failures persisting | Medium |
| **Scheduled task fragility** | Cron/channel interactions break | Medium |

### Use Cases Emerging

- **Embedded/IoT deployment**: RPi Zero W, serial tools — aligns with Sipeed hardware ecosystem
- **Multi-channel bots**: Telegram primary, but Teams/Discord via new HTTP endpoint
- **Enterprise self-hosting**: K3s manifests, skills whitelisting, session isolation

### Satisfaction/Dissatisfaction

- **Positive**: Strong security progress, provider expansion, Kubernetes support
- **Negative**: Release quality control, stale issue backlog, mobile polish gaps

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) — Cron channel errors | **44 days** | Core feature broken; 6 comments | Assign, reproduce, fix root cause |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) — Android Enter key | **26 days** | Mobile UX degraded; 4 comments | Decision on config approach |
| [#2655](https://github.com/sipeed/picoclaw/pull/2655) — Restore unified kernel baseline | **8 days** | Complex security fix; CI/build/tool/agent touchpoints | Code review, integration test |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) — Tool schema validation | **35 days, stale** | Breaks OpenAI-compatible APIs (LM Studio) | Review and merge |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) — SecureString panic fix | **30 days** | Runtime crash in config handling | Review and merge |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) — Provider docs unification | **8 days, stale** | Docs debt; low risk | Quick win — review |

**Urgency:** The v0.2.8 regressions should trigger an immediate triage process. The stale PRs from `loafoe` (#2128, #2270) are reliable, well-scoped fixes that are at risk of bit-rot.

---

*Digest generated from GitHub activity data for 2026-05-01/2026-05-02.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-02

## 1. Today's Overview

NanoClaw experienced **high-velocity development activity** over the past 24 hours with **27 PRs updated** (16 merged/closed, 11 open) and **10 issues** (6 open, 4 closed). The project shows **strong operational focus**: a concentrated bug-fix campaign on the OpenCode provider resolved three high-severity issues, while new feature work spans WhatsApp media handling, Google Gemini provider integration, and V1→V2 migration infrastructure. Zero new releases suggests the team is stabilizing the `providers` branch before cutting a version. The high merge rate (59%) indicates healthy maintainer bandwidth, though the 11 open PRs and 6 active issues show substantial in-flight work.

---

## 2. Releases

**No new releases** — none published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, key items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2180](https://github.com/qwibitai/nanoclaw/pull/2180) | ufJmacca | **Upgrade to 2.0.0 base** | Foundation for next major version |
| [#2151](https://github.com/qwibitai/nanoclaw/pull/2151) | glifocat | **Fix host-sweep orphan `processing_ack` rows** | Resolves claim-stuck respawn loop (closes [#2147](https://github.com/qwibitai/nanoclaw/issues/2147)) |
| [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | glifocat | **Kill server process group + configurable `IDLE_TIMEOUT_MS`** | Fixes process leak + hardcoded timeout (closes [#2148](https://github.com/qwibitai/nanoclaw/issues/2148), [#2149](https://github.com/qwibitai/nanoclaw/issues/2149)) |
| [#2153](https://github.com/qwibitai/nanoclaw/pull/2153) | glifocat | **Native instructions config for CLAUDE.md/fragments** | Fixes silent context loss (closes [#2150](https://github.com/qwibitai/nanoclaw/issues/2150)) |
| [#2165](https://github.com/qwibitai/nanoclaw/pull/2165) | CopyPasteFail | **Resolve CLAUDE.md includes for OpenCode provider** | Complementary fix to #2153 |
| [#2170](https://github.com/qwibitai/nanoclaw/pull/2170) | jonwhittlestone | **Bidirectional WhatsApp media messages** | Major feature: inbound/outbound media via IPC |
| [#2160](https://github.com/qwibitai/nanoclaw/pull/2160) | kky | **Open `inbound.db` fresh per read** | Prevents SQLite locking issues |
| [#2171](https://github.com/qwibitai/nanoclaw/pull/2171) | topcoder1 | **Switch pre-commit to `lint-staged`** | Developer experience improvement |
| [#701](https://github.com/qwibitai/nanoclaw/pull/701), [#746](https://github.com/qwibitai/nanoclaw/pull/746), [#1076](https://github.com/qwibitai/nanoclaw/pull/1076) | glifocat | Legacy fixes (date/time injection, WhatsApp auth hammering, OAuth proxy) | Long-pending items finally merged |

**Key advancement**: The OpenCode provider underwent **critical hardening** — process lifecycle, timeout configurability, and context injection all fixed in a coordinated 24-hour push.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) — OpenCode context loss | 5 comments, **CLOSED** | Most discussed issue. Root cause: literal `@./...md` lines sent to LLM instead of resolved content. **Underlying need**: Reliable agent instruction fidelity — users depend on `CLAUDE.md` as operational contract |
| [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) — Active-query push-mode stall | 2 comments, **OPEN** | Silent failure mode after empty-text results. **Underlying need**: Robust non-chat surfaces (Telegram WebApp, inbound APIs) |
| [#2173](https://github.com/qwibitai/nanoclaw/issues/2173) — Interrupted-run detection (B-01) | 1 comment, **OPEN** | Observability gap in distributed message processing. **Underlying need**: Production-grade reliability engineering |

**Pattern**: Community is **operations-focused** — debugging production edge cases in message dispatch, container lifecycle, and provider reliability. The concentration of issues from `lazer-maker` and `yaniv-golan` suggests active deployment at scale.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Risk |
|:---|:---|:---|:---|:---|
| **High** | [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) — Orphan `processing_ack` rows → claim-stuck loop | **CLOSED** | [#2151](https://github.com/qwibitai/nanoclaw/pull/2151) | Session lockout after any kill |
| **High** | [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) — `SIGKILL` leaks binary, holds port 4096 | **CLOSED** | [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | Container unusability after timeout cascade |
| **High** | [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) — CLAUDE.md/fragments never reach LLM | **CLOSED** | [#2153](https://github.com/qwibitai/nanoclaw/pull/2153), [#2165](https://github.com/qwibitai/nanoclaw/pull/2165) | Silent agent misbehavior |
| Medium | [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) — Hardcoded 90s timeout breaks local models | **CLOSED** | [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | Silent breakage on slow inference |
| **Active** | [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) — Push-mode stalls on empty-text | **OPEN** | None yet | Non-chat surfaces unreliable |
| **Active** | [#2172](https://github.com/qwibitai/nanoclaw/issues/2172) — macOS case-insensitive slug mismatch | **OPEN** | None yet | Build failures on macOS |

**Assessment**: **Critical stability batch resolved** — all three high-severity OpenCode bugs closed within 24 hours of reporting. Remaining open bugs are medium-severity with clear reproduction steps.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal Strength | Prediction |
|:---|:---|:---|
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) — Google Gemini provider | **Strong** | Likely v2.1.0; mirrors OpenAI Codex pattern, substantial PR ready |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) — V1→V2 migration flow | **Strong** | Blocker for v2.0.0 GA; experimental flag suggests nearing stabilization |
| [#2175](https://github.com/qwibitai/nanoclaw/issues/2175) — V1→V2 operational contracts | **Moderate** | Will spawn multiple PRs; defines v2.0.0 scope |
| [#2174](https://github.com/qwibitai/nanoclaw/issues/2174) — Interrupted-run recovery (B-02) | **Moderate** | Depends on B-01; startup-scoped recovery pattern |
| [#2176](https://github.com/qwibitai/nanoclaw/issues/2176) — SC continuity across Gmail sessions | **Moderate** | Container/session architecture change |
| [#2170](https://github.com/qwibitai/nanoclaw/pull/2170) — WhatsApp media | **Merged** | Available now |

**Next version indicators**: v2.0.0 base merged (#2180); migration tooling (#1931) and operational contract preservation (#2175) suggest **v2.0.0 release candidate within 2-4 weeks**.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Silent failures** | [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) context loss, [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) push stall, [#2167](https://github.com/qwibitai/nanoclaw/pull/2167) silent task failures | **Critical** — users cannot trust system state |
| **Container/process hygiene** | [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) leaks, [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) orphan rows | High — production stability |
| **Local model support** | [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) timeout, [#2168](https://github.com/qwibitai/nanoclaw/pull/2168) rootless Docker | Medium — self-hosting friction |
| **Setup friction** | [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) OneCLI bootstrap, [#2054](https://github.com/qwibitai/nanoclaw/pull/2054) sudo hangs | Medium — new user adoption |
| **Cross-platform builds** | [#2172](https://github.com/qwibitai/nanoclaw/issues/2172) macOS case sensitivity | Low — developer experience |

**Satisfaction**: High on responsiveness (bugs closed same-day). **Dissatisfaction**: System complexity creates silent failure modes that are hard to diagnose without deep instrumentation.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#701](https://github.com/qwibitai/nanoclaw/pull/701) — Date/time context injection | **58 days** | Resolved (merged 2026-05-01) | Was blocked; now closed |
| [#746](https://github.com/qwibitai/nanoclaw/pull/746) — WhatsApp auth hammering | **57 days** | Resolved (merged 2026-05-01) | Was blocked; now closed |
| [#1076](https://github.com/qwibitai/nanoclaw/pull/1076) — OAuth credential proxy | **48 days** | Resolved (merged 2026-05-01) | Was "Needs Review"; now closed |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) — V1→V2 migration | **9 days** | **Active risk** | Maintainer review for experimental→stable |
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) — Google Gemini provider | **3 days** | Low | Code review, architectural alignment |
| [#2178](https://github.com/qwibitai/nanoclaw/pull/2178) — Andy ops fixes (10 issues) | **1 day** | **High attention** | Large surface area; needs decomposition or dedicated review |
| [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) — OneCLI identifier sanitization | **1 day** | Low | Quick fix; likely mergeable |

**Critical attention needed**: [#2178](https://github.com/qwibitai/nanoclaw/pull/2178) bundles 10 operational fixes spanning browser automation, Maps, Twitter, LinkedIn, email, CRM, and Facebook — this risks becoming a "mega-PR" that is hard to review and revert. Suggest splitting or expedited review with domain experts.

---

*Digest generated from GitHub activity 2026-05-01 → 2026-05-02. Project health: **stabilizing with high throughput**.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-02

## 1. Today's Overview

NullClaw shows **exceptionally high development velocity** with 27 PRs updated and 9 issues processed in the last 24 hours, indicating an active sprint toward a major milestone. The project demonstrates strong maintainer responsiveness with 8 of 9 issues closed and 23 of 27 PRs merged/closed. No new releases were cut, suggesting the team is accumulating changes for a significant version bump. The dominant contributor pattern (manelsen authored 16 of 20 visible PRs) points to either a core maintainer push or a single-vendor development model. Activity clusters around three themes: concurrency/interactivity infrastructure, operational hardening (gateway, Docker, memory), and Matrix/privacy integrations.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (23 of 27)

| PR | Description | Significance |
|:---|:---|:---|
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | Gateway accept-loop backoff to prevent CPU spin | **Critical fix**: Resolves production CPU pegging on resource-constrained devices (RPi5) |
| [#854](https://github.com/nullclaw/nullclaw/pull/854) | Subagent completion delivery to original channel context | Fixes broken subagent result propagation |
| [#852](https://github.com/nullclaw/nullclaw/pull/852) | Memory archive provenance and recall quality improvements | Data integrity fix for vector search partitioning |
| [#848](https://github.com/nullclaw/nullclaw/pull/848) | Daemon inbound bus message routing via `inbound_router` | Architecture: enables non-blocking message injection |
| [#845](https://github.com/nullclaw/nullclaw/pull/845) | Core inbound router and mid-turn injection infrastructure | **Foundational**: Pure routing core for concurrent interactivity |
| [#846](https://github.com/nullclaw/nullclaw/pull/846) | Channel loop migrated to `inbound_router` | Wires Telegram/Max into new routing system |
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | A2A skill tool-call progress hints forwarding | UI/UX: Real-time progress visibility for long-running skills |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | Fix Docker onboard `KeyWriteFailed` crash | Onboarding reliability for containerized deployments |
| [#842](https://github.com/nullclaw/nullclaw/pull/842) | `--workspace` flag for gateway and agent | Multi-workspace operational support |
| [#841](https://github.com/nullclaw/nullclaw/pull/841) | `--skill` flag for agent startup skill activation | Hard-coded skill routing (addresses #580) |
| [#840](https://github.com/nullclaw/nullclaw/pull/840) | Nested skill discovery in category subdirectories | Organizational scalability for skill ecosystems |
| [#838](https://github.com/nullclaw/nullclaw/pull/838) | Pantalaimon E2EE proxy support for Matrix | Privacy: Bridges Matrix to E2EE without native implementation |
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | External `tool_customizations_file` support | Config management flexibility |
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | Trigger-based tool prioritization | LLM steering: Keyword-driven tool urgency |
| [#835](https://github.com/nullclaw/nullclaw/pull/835) | Tool `system_prompt` and `enabled` overrides | Granular tool behavior control |
| [#834](https://github.com/nullclaw/nullclaw/pull/834) | Tool customization config schema | Foundation for #835-#837 |
| [#831](https://github.com/nullclaw/nullclaw/pull/831) | Agent Skills RFC 0.2.0 support + hardened web skill fetch | Standards compliance and supply-chain security (SHA256 verification) |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) | Knowledge Graph Memory backend (SQLite recursive CTEs) | **Major feature**: Graph RAG memory architecture |

### Open PRs (4 of 27)

| PR | Status | Risk/Blocker |
|:---|:---|:---|
| [#855](https://github.com/nullclaw/nullclaw/pull/855) | **Inbound concurrency + preemption** — *open, complex* | Core architecture change; likely under review for race conditions |
| [#850](https://github.com/nullclaw/nullclaw/pull/850) | Encrypted Tailscale auth_key support | Security review pending; touches secrets pipeline |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|:---|:---|:---|
| [#851](https://github.com/nullclaw/nullclaw/issues/851) Gateway CPU busy-loop | 4 comments | **Production pain on edge hardware** — Raspberry Pi deployment class is real; fix merged same day (#853) |
| [#763](https://github.com/nullclaw/nullclaw/issues/763) Docker onboard crash | 1 comment | Container onboarding friction; fix merged (#843) |

### Underlying Needs Analysis

- **Edge/embedded deployment viability**: RPi5 mention signals IoT/self-hosted user segment
- **Docker-first onboarding**: Users expect `docker compose up` to work without manual permission fixes
- **Subagent reliability**: Spawn-and-gather pattern is core to agent orchestration workflows

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#851](https://github.com/nullclaw/nullclaw/issues/851) Gateway CPU spin on `accept4() EAGAIN` | **Fixed** (#853) | 100% CPU core peg on idle; affects all resource-constrained deployments |
| 🟡 **High** | [#849](https://github.com/nullclaw/nullclaw/issues/849) Subagent cannot return results | **Fixed** (#854) | Silent failure in agent-to-agent communication; breaks composable workflows |
| 🟡 **High** | [#763](https://github.com/nullclaw/nullclaw/issues/763) Docker `KeyWriteFailed` crash | **Fixed** (#843) | Onboarding blocker for container users; permission model mismatch |
| 🟢 **Medium** | [#825](https://github.com/nullclaw/nullclaw/issues/825) Nested skill discovery | **Fixed** (#840) | Organizational limitation; not crash-inducing |

**Stability Assessment**: All reported bugs from the period have corresponding merged fixes. The project shows **strong regression response** with same-day or next-day fix turnaround.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| Cron shell-to-agent pipelines (`command` + `prompt`) | [#879](https://github.com/nullclaw/nullclaw/issues/879) OPEN | **High** | Small surface, clear use case, aligns with existing schedule tool |
| Native Matrix E2EE (not proxy) | [#209](https://github.com/nullclaw/nullclaw/issues/209) CLOSED | Low (deferred) | Pantalaimon proxy accepted as pragmatic solution (#838) |
| Multi-workspace CLI support | [#833](https://github.com/nullclaw/nullclaw/issues/833) CLOSED | **Shipped** (#842) | — |
| Hard-coded skill routing | [#580](https://github.com/nullclaw/nullclaw/issues/580) CLOSED | **Shipped** (#841) | — |
| A2A progress streaming | [#808](https://github.com/nullclaw/nullclaw/issues/808) CLOSED | **Shipped** (#844) | — |

**Emerging Pattern**: Heavy investment in **operational control** (flags, configs, routing) suggests preparation for multi-tenant or enterprise deployment scenarios.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Container onboarding fragility** | #763, #843 | High — permission/ownership assumptions break Docker workflows |
| **Gateway resource efficiency** | #851, #853 | High — edge deployment credibility at stake |
| **Subagent observability** | #849, #854 | Medium — silent failures in distributed agent patterns |
| **Skill organization at scale** | #825, #840 | Medium — flat namespace doesn't scale |

### Use Cases Surfacing

- **Self-hosted personal AI**: RPi5, Docker Compose, Tailscale (#850)
- **Privacy-sensitive teams**: Matrix + E2EE (#209, #838)
- **Multi-project isolation**: `--workspace` flag (#833, #842)
- **Deterministic routing**: `--skill` override vs. semantic similarity (#580, #841)

### Satisfaction Indicators

- Rapid fix turnaround (all closed issues have merged PRs)
- Feature request fulfillment rate: 100% for items with maintainer engagement
- Bilingual documentation (EN/CN) in PRs suggests international user base consideration

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#855](https://github.com/nullclaw/nullclaw/pull/855) Inbound concurrency + preemption | 12 days open | **Merge blocker for vNext** | Code review for thread-safety; this is the capstone PR for the concurrency architecture |
| [#850](https://github.com/nullclaw/nullclaw/pull/850) Encrypted Tailscale auth_key | 12 days open | Security audit queue | Secrets pipeline review; may need rebase after #855 |
| [#879](https://github.com/nullclaw/nullclaw/issues/879) Cron command+prompt | 1 day old | None yet | Triage: small enhancement, could fast-track |

**Maintainer Attention**: The concurrency work (#845-#848-#855 chain) represents the largest architectural change in this period. #855's open status with undefined comment count suggests it may be in active review or awaiting CI/stability validation before merge. This PR should be prioritized as it unblocks the full value of the preceding infrastructure pieces.

---

*Digest generated from GitHub activity data for nullclaw/nullclaw on 2026-05-02.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-02

## Today's Overview

IronClaw shows **exceptionally high development velocity** with 50 PRs and 30 issues updated in the last 24 hours, reflecting intense focus on the "Reborn" architecture overhaul. The project is in a critical architectural transition period: 7 issues were closed (including several high-risk Reborn components), while 23 remain open and actively debated. No new releases were published, but a cargo-dist version bump PR (#3172) addresses a breaking installer regression that has affected Linux users since v0.26.0. The contributor base is expanding with multiple first-time contributors landing substantial features, though core maintainer `serrrfirat` continues to drive the Reborn migration with 15+ tracked items.

---

## Releases

**None** — No new releases published today.

**Note:** Release infrastructure is being repaired via PR #3172 (cargo-dist 0.30.3 → 0.31.0) to fix broken Linux installers for existing releases. Docker images remain unavailable (#2963).

---

## Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3155](https://github.com/nearai/ironclaw/pull/3155) | ilblackdragon | Fixed `mission_*` tools to accept `name` instead of requiring `id` UUID | **Resolves #2583** — "5 consecutive code errors" in routine creation eliminated |
| [#3161](https://github.com/nearai/ironclaw/pull/3161) | serrrfirat | Defined background process obligation reconciliation lifecycle | Closes #3145; establishes Reborn process-manager contract |
| [#3129](https://github.com/nearai/ironclaw/pull/3129) | zetyquickly | Plumbs LLM reasoning traces (GLM-5, DeepSeek, o-series, Qwen) with smoke tests | Observability enhancement for reasoning models |

### Closed Issues Today

| Issue | Resolution |
|:---|:---|
| [#3137](https://github.com/nearai/ironclaw/issues/3137) | MCP HTTP/SSE client wired through shared runtime egress |
| [#3143](https://github.com/nearai/ironclaw/issues/3143) | Built-in obligation handler installed in production HostRuntime |
| [#3086](https://github.com/nearai/ironclaw/issues/3086) | WASM runtime lane re-carved for Reborn |
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine creation "5 consecutive code errors" **fixed** |
| [#3146](https://github.com/nearai/ironclaw/issues/3146) | Production TrustDecision evaluation before capability dispatch |
| [#3140](https://github.com/nearai/ironclaw/issues/3140) | Staged one-shot secret injections wired into runtime adapters |
| [#3139](https://github.com/nearai/ironclaw/issues/3139) | Staged network-policy obligations wired into runtime egress |

---

## Community Hot Topics

### Most Active Discussions

| Item | Comments | Analysis |
|:---|:---|:---|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) — **[EPIC] Track Reborn architecture landing strategy** | **44 comments** | The central coordination hub for Reborn; reflects complexity of landing a multi-PR architectural migration without "one massive stacked PR." Community needs: clearer incremental delivery, reduced reviewer burden. |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) — **Reborn vertical-slice integration test suite** | **14 comments** | Demand for end-to-end validation of Reborn through public entrypoints, not just crate-local tests. Signals engineering maturity concerns about integration gaps. |
| [#3085](https://github.com/nearai/ironclaw/issues/3085) — **Shared Reborn runtime HTTP egress** | **7 comments** | Cross-cutting infrastructure for WASM, Script, and MCP; comments reflect dependency coordination challenges across capability lanes. |

### Underlying Needs
- **Reborn coordination overhead**: The 44-comment epic (#2987) reveals friction in large-scale Rust refactoring—contributors need better branch/dependency management tooling.
- **Testing confidence**: Heavy investment in integration tests (#3067, #3148) suggests the team recognizes unit-test coverage is insufficient for security-critical runtime changes.
- **Capability unification**: HTTP egress consolidation (#3085, #3138, #3137) addresses technical debt from siloed per-tool networking implementations.

---

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **High** | [#2818](https://github.com/nearai/ironclaw/issues/2818) — `v0.26.0` installer fails on `x86_64-unknown-linux-gnu` | Open, confirmed | [#3172](https://github.com/nearai/ironclaw/pull/3172) (pending) |
| **High** | [#2949](https://github.com/nearai/ironclaw/issues/2949) — Platform download error for `x86_64-unknown-linux-gnu` | Open, likely duplicate of #2818 | [#3172](https://github.com/nearai/ironclaw/pull/3172) (pending) |
| **Medium** | [#3133](https://github.com/nearai/ironclaw/issues/3133) — Mission to send email failed (Gmail auth) | Open | [#3155](https://github.com/nearai/ironclaw/pull/3155) partial; [#3166](https://github.com/nearai/ironclaw/issues/3166) tracks auto-resume |
| **Medium** | [#3132](https://github.com/nearai/ironclaw/issues/3132) — `cooldown_secs` type error (string vs integer) | Open, fresh | None identified |
| **Medium** | [#2963](https://github.com/nearai/ironclaw/issues/2963) — Docker Hub image missing | Open | None |

### Stability Notes
- **Installer regression** is the most user-facing issue: Linux users cannot install since v0.26.0 (April 21). The cargo-dist bump (#3172) is critical infrastructure debt.
- **Mission reliability** improving: #2583 root cause fixed (#3155), but Gmail OAuth gates still require manual intervention—auto-resume is next (#3166).
- **Type coercion bug** (#3132) suggests API validation gaps in mission parameter handling.

---

## Feature Requests & Roadmap Signals

### Likely Near-Term (based on active PRs)

| Feature | Evidence | Confidence |
|:---|:---|:---|
| **Native Reborn memory service** | Stacked PRs #3180 → #3181 → #3182 (libSQL repository) | High — in active implementation |
| **Legal harness v1** | Stream A-D PRs: #3173 (foundation), #3179 (RAG), #3174 (DOCX export) | High — multi-PR commitment |
| **X/Twitter bookmarks skill** | #3176 (ingest + triage) | Medium — single PR, needs review |
| **`ironclaw insights` analytics** | #3177 (DB migration included) | High — CLI parity with Hermes |
| **`ironclaw backup --quick`** | #3178 (portable state snapshots) | High — migration tooling gap |

### Reborn Architecture Signals

| Component | Issue/PR | Maturity |
|:---|:---|:---|
| Prompt write safety policy | [#3167](https://github.com/nearai/ironclaw/pull/3167) | Under review |
| Cost-based budgets in ResourceGovernor | [#3141](https://github.com/nearai/ironclaw/issues/3141) | Design phase |
| Durable event/audit store | [#3162](https://github.com/nearai/ironclaw/issues/3162) | Design phase |
| ARM64 Docker support | [#3168](https://github.com/nearai/ironclaw/issues/3168) | Requested, Cranelift-ready |

---

## User Feedback Summary

### Pain Points

| Issue | User Impact | Frequency Signal |
|:---|:---|:---|
| **Linux installation broken** | Complete blocker for `x86_64-unknown-linux-gnu` users | 2+ issues, 1 👍, ongoing since April 21 |
| **Docker deployment unavailable** | Cannot use documented installation path | 1 issue, no response since April 26 |
| **Mission creation failures** | Routines fail with cryptic errors | 2 issues (#2583 fixed, #3132 new) |
| **Gmail integration unreliable** | Email missions fail at OAuth gates | 1 issue, follow-up needed for auto-resume |

### Positive Signals
- **New contributor activity**: 4 first-time contributors landed substantial PRs today (`abbyshekit` ×4, `nickpismenkov` ×3), indicating approachable codebase and active mentorship.
- **Reasoning model support**: PR #3129 adds traceability for chain-of-thought models—proactive feature alignment with LLM market evolution.

### Satisfaction/Dissatisfaction
- **Dissatisfied**: Linux users (install blocked), Docker users (docs promise unfulfilled), mission users (parameter validation fragile).
- **Satisfied**: CLI power users (backup, insights features incoming), legal workflow users (dedicated harness being built).

---

## Backlog Watch

| Issue | Age | Risk | Why It Needs Attention |
|:---|:---|:---|:---|
| [#2963](https://github.com/nearai/ironclaw/issues/2963) Docker Hub image missing | 6 days | Medium | Documentation promises unfulfilled; blocks containerized deployment. No maintainer response. |
| [#2818](https://github.com/nearai/ironclaw/issues/2818) Installer fails on Linux | 11 days | **High** | Affects all Linux users; fix PR #3172 pending but unmerged. |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) Reborn product surface migration | 4 days | High | EPIC rewritten May 1; needs clarity on cutover timeline to prevent contributor confusion. |
| [#3093](https://github.com/nearai/ironclaw/issues/3093) EventProjectionService | 3 days | Medium | Zero comments; blocks higher Reborn layers per description. |
| [#3168](https://github.com/nearai/ironclaw/issues/3168) ARM64 Docker support | 1 day | Low | Community contribution opportunity; Cranelift already supports aarch64. |

### Maintainer Action Recommended
1. **Merge #3172 urgently** — unblocks Linux user acquisition.
2. **Respond to #2963** — either publish Docker image or correct documentation.
3. **Clarify #3031 cutover criteria** — Reborn migration has high cognitive load; contributors need milestone definitions.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-02

## 1. Today's Overview

LobsterAI showed **moderate engineering velocity** on 2026-05-01 with **15 PRs updated** (6 open, 9 merged/closed) but **zero issue activity**, indicating a merge-heavy, review-focused day rather than new bug reporting or community engagement. The project appears to be in a **stabilization phase** with concentrated effort on Windows installer reliability, cowork (multi-agent collaboration) session management, and renderer performance optimization. Notably, all 6 open PRs are marked `[stale]` despite recent updates, suggesting potential maintainer bandwidth constraints or extended review cycles. No new releases were published. The contributor pattern shows heavy reliance on `liuzhq1986` for merged fixes, while community contributors have pending contributions awaiting review.

---

## 2. Releases

**No new releases** published today. Latest releases section empty.

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Area | Summary | Link |
|:---|:---|:---|:---|:---|
| #1841 | liuzhq1986 | Windows installer | Fixed NSIS exit code check using `IntCmp` instead of `StrCmp`; added diagnostics | [netease-youdao/LobsterAI#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) |
| #1868 | liuzhq1986 | Renderer, Cowork | Constrained markdown image size + added click-to-preview for WeChat channel images | [netease-youdao/LobsterAI#1868](https://github.com/netease-youdao/LobsterAI/pull/1868) |
| #1869 | liuzhq1986 | Main, Cowork | **Critical fix**: Abort gateway run on lifecycle error fallback to prevent session deadlock | [netease-youdao/LobsterAI#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) |
| #1864 | liuzhq1986 | Docs, Skills | Upgraded YoudaoNote skill | [netease-youdao/LobsterAI#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) |
| #1857 | liuzhq1986 | Main, Cowork | Prevented gateway hard restart when switching models on home page | [netease-youdao/LobsterAI#1857](https://github.com/netease-youdao/LobsterAI/pull/1857) |
| #1855 | liuzhq1986 | Renderer | Truncated long model names in `ModelSelector` to prevent header UI overflow | [netease-youdao/LobsterAI#1855](https://github.com/netease-youdao/LobsterAI/pull/1855) |
| #1851 | liuzhq1986 | Main, Skills | Released file watchers before deleting skill directory on Windows (fixes Windows file lock issues) | [netease-youdao/LobsterAI#1851](https://github.com/netease-youdao/LobsterAI/pull/1851) |
| #1840 | liuzhq1986 | Renderer | Fixed `updateConfig` overwriting stored providers with stale defaults via read-modify-write pattern | [netease-youdao/LobsterAI#1840](https://github.com/netease-youdao/LobsterAI/pull/1840) |
| #1829 | liuzhq1986 | Renderer | Removed inaccurate auto-restart hint from update installing state | [netease-youdao/LobsterAI#1829](https://github.com/netease-youdao/LobsterAI/pull/1829) |

**Key advancement**: The `liuzhq1986` contributor delivered a concentrated batch of **production-hardening fixes** spanning installer correctness, gateway/session stability, Windows filesystem semantics, and config durability—suggesting preparation for a release candidate or responding to field-reported issues.

---

## 4. Community Hot Topics

**No commented or highly-reacted items exist**—all PRs show `Comments: undefined` and `👍: 0`. This indicates **minimal community discourse** despite active code changes. The most *substantively significant* open PRs by technical scope:

| PR | Topic | Underlying Need | Link |
|:---|:---|:---|:---|
| #1186 | Streaming render performance optimization | Users experience UI jank during long AI conversations; need 60fps+ experience with large message histories | [netease-youdao/LobsterAI#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) |
| #1181 | Hide internal OpenClaw agent sessions | Users confused by implementation-detail sessions leaking into UX; need clean abstraction boundaries | [netease-youdao/LobsterAI#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) |
| #825 | Duplicate local skill upload detection | Skill management UX degrades with duplicates; need content-addressable storage for user skills | [netease-youdao/LobsterAI#825](https://github.com/netease-youdao/LobsterAI/pull/825) |

**Analysis**: The absence of reactions/comments suggests either (a) internal team development with limited external community, or (b) review/feedback happening off GitHub (e.g., corporate Slack, internal tools). The underlying needs point toward **scalability** (#1186), **UX polish** (#1181), and **skill ecosystem maturity** (#825).

---

## 5. Bugs & Stability

| Severity | PR | Description | Status |
|:---|:---|:---|:---|
| **Critical** | #1869 | **Session deadlock**: Gateway run continues after lifecycle error fallback, rejecting subsequent messages with "session still running" | **Fixed** (merged) |
| **High** | #1851 | Windows file watcher locks prevent skill directory deletion, causing cleanup failures | **Fixed** (merged) |
| **High** | #1840 | Config updates overwrite user-configured providers with stale defaults, effectively resetting custom API keys/endpoints | **Fixed** (merged) |
| **Medium** | #1857 | Gateway hard restart on model switch disrupts active sessions | **Fixed** (merged) |
| **Medium** | #1841 | Incorrect NSIS string comparison for exit codes could mask installer failures | **Fixed** (merged) |
| **Medium** | #1190 | Windows uninstall leaves app running, causing user confusion about persistence | **Open** — [netease-youdao/LobsterAI#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) |
| **Medium** | #822 | Token refresh race conditions across three code paths (401 passive, proactive expiry, manual IPC) | **Open** — [netease-youdao/LobsterAI#822](https://github.com/netease-youdao/LobsterAI/pull/822) |

**Stability assessment**: Strong **proactive hardening** today with 4/6 severity items resolved. The two open PRs (#1190, #822) represent **known unfixed reliability issues** in Windows lifecycle and auth respectively.

---

## 6. Feature Requests & Roadmap Signals

| Signal | PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Skill developer experience** | #1185 (open folder button for skills) | **High** | Low-risk UX improvement; aligns with skill ecosystem growth |
| **Skill deduplication** | #825 (SHA256-based duplicate detection) | **Medium-High** | Addresses real storage/UX pain; implementation complete |
| **Streaming performance** | #1186 (React.memo + createSelector optimization) | **Medium** | Significant technical debt fix; needs careful review for regressions |
| **Cowork session hygiene** | #1181 (hidden internal sessions) | **Medium** | Small scope, but touches data model (schema migration) |

**Predicted next version focus**: Windows installer robustness (already merged), skill management UX, and renderer performance for long conversations.

---

## 7. User Feedback Summary

**Inferred pain points from merged fixes:**

| Pain Point | Evidence | Satisfaction Impact |
|:---|:---|:---|
| **Windows-specific instability** | 3/9 merged PRs target Windows (installer, file watchers, uninstall) | Negative → improving with fixes |
| **Session reliability in multi-agent (cowork) mode** | #1869 deadlock fix, #1857 gateway restart fix | Critical for enterprise/collaborative use cases |
| **Config durability** | #1840 prevents provider settings loss | High frustration if API keys reset unexpectedly |
| **WeChat integration image UX** | #1868 oversized images without preview | Moderate; polish issue for IM channel users |
| **Long conversation performance** | #1186 addresses 6600 full-tree re-renders in 10min session | Severe for power users; fix pending review |

**No direct user feedback** (issues, discussions) was captured today—feedback is entirely inferred from fix descriptions.

---

## 8. Backlog Watch

| PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| #1186 | ~31 days | **Performance fix languishing**—affects all users with long sessions; high engineering quality (benchmarked 6600→minimal re-renders) | Maintainer review for Redux selector patterns |
| #822 | ~38 days | **Auth reliability**—race conditions in token refresh are production incidents waiting to happen; three-path concurrency is complex | Security/correctness review, possible test coverage request |
| #825 | ~38 days | **Skill ecosystem health**—complete implementation with SHA256 hashing; blocked on review while duplicates accumulate in user installs | Code review for storage layer changes |
| #1181 | ~31 days | **Data model change** (`hidden` column migration)—risk of schema drift if delayed | Database migration review, backward compatibility check |
| #1185 | ~31 days | **Low risk, high UX value**—simple shell open operation | Quick win; approve if no security concerns |
| #1190 | ~31 days | **Windows uninstall correctness**—complements merged #1841; incomplete without this | NSIS script review, verify against merged installer changes |

**Critical observation**: All 6 open PRs are `[stale]` despite updates on 2026-05-01, suggesting **automated stale bot labeling without maintainer engagement**. The 31-38 day age range indicates a **~1 month review backlog**. The project would benefit from:
- Dedicated review bandwidth for #1186 (performance) and #822 (auth correctness)
- Clear merge criteria for "stale" PRs to avoid contributor discouragement

---

*Digest generated from GitHub activity 2026-05-01. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-02

## 1. Today's Overview

Moltis demonstrated **exceptional engineering velocity** on 2026-05-01 with 11 PRs updated and 9 merged/closed against just 2 remaining open. The project shows strong maintainer responsiveness: 5 of 6 issues were closed within 24 hours of creation, including four distinct bug fixes. No new release was cut despite significant merged changes, suggesting either a pending release accumulation or release cadence decoupled from merge velocity. The single open feature request (#949) indicates healthy backlog growth in architectural areas. Overall project health appears **robust** with active triage and rapid bug turnaround.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Description | Link |
|:---|:---|:---|:---|
| #955 | gaarf | **fix(terminal)**: Eliminated race condition causing spurious "window does not exist" tmux errors on tab creation | [moltis-org/moltis#955](https://github.com/moltis-org/moltis/pull/955) |
| #954 | penso | **fix(telegram)**: Upgraded teloxide 0.13→0.17, resolving multipart `ThreadId` panic in forum/topic chats | [moltis-org/moltis#954](https://github.com/moltis-org/moltis/pull/954) |
| #952 | penso | **fix(web-ui)**: CSS fix for horizontal overflow in chat messages (#945) | [moltis-org/moltis#952](https://github.com/moltis-org/moltis/pull/952) |
| #950 | penso | **fix(discord)**: Registered slash command arguments with semantic names and dropdown choices; added all thinking levels | [moltis-org/moltis#950](https://github.com/moltis-org/moltis/pull/950) |
| #953 | penso | **test(e2e)**: Added 6 auto-scroll regression tests covering #946 race conditions | [moltis-org/moltis#953](https://github.com/moltis-org/moltis/pull/953) |
| #951 | penso | **feat(portable)**: New `moltis-portable` crate for full config/database/session backup/restore via `.tar.gz` | [moltis-org/moltis#951](https://github.com/moltis-org/moltis/pull/951) |
| #944 | gaarf | **feat(providers)**: Added Zen (opencode.ai) multi-protocol provider with zero-retention policy | [moltis-org/moltis#944](https://github.com/moltis-org/moltis/pull/944) |
| #943 | gaarf | **feat(web-ui)**: Conditional voice button visibility based on `stt_enabled`/`tts_enabled` config | [moltis-org/moltis#943](https://github.com/moltis-org/moltis/pull/943) |
| #339 | PeterDaveHello | **feat(i18n)**: Full Traditional Chinese (zh-TW) locale support for macOS and web apps | [moltis-org/moltis#339](https://github.com/moltis-org/moltis/pull/339) |

**Key advances**: Platform stability (Telegram, Discord, terminal), data portability infrastructure, expanded provider ecosystem (Zen), and internationalization maturity.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| #946 [CLOSED] Chat auto-scroll failure | 👍 1 (highest) | [moltis-org/moltis#946](https://github.com/moltis-org/moltis/issues/946) — Core UX friction; user engagement (thumbs-up) signals this affected multiple users. Rapid fix + dedicated e2e test suite (#953) shows institutional learning. |
| #947 [CLOSED] Telegram document upload panic | 1 comment | [moltis-org/moltis#947](https://github.com/moltis-org/moltis/issues/947) — Production crash scenario; comment thread likely diagnostic. Dependency upgrade (#954) was surgical fix. |

**Underlying needs**: Users expect **reliable real-time UI behavior** (scroll, layout) and **crash-free media handling** across messaging platforms. The quick closure pattern suggests maintainers prioritize visible UX bugs.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Status |
|:---|:---|:---|:---|
| **Critical** | #947 Telegram `send_document` panic/restart on multipart upload | #954 | ✅ Fixed via teloxide 0.13→0.17 upgrade |
| **High** | #955 Terminal tmux race: "window does not exist" on tab creation | #955 | ✅ Fixed (frontend race eliminated) |
| **Medium** | #945 Chat layout horizontal overflow/too wide | #952 | ✅ Fixed (CSS `overflow-x:hidden` + `min-width:0`) |
| **Medium** | #946 Chat fails to auto-scroll when at bottom | #953 | ✅ Fixed + 6 e2e regression tests added |
| **Medium** | #948 Discord slash commands ignore arguments | #950 | ✅ Fixed (proper argument registration + semantic naming) |
| **Low** | #937 Settings/terminal tmux error (sparse details) | — | ✅ Closed (likely related to #955) |

**Stability assessment**: Zero open bugs. All reported crashes resolved same-day. Notable: #947 was a **process restart-level failure** triggered by Telegram forum chat media uploads—fixed by upstream dependency upgrade rather than local workaround.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Prediction |
|:---|:---|:---|
| #949 [OPEN] Provider failover for `spawn_agent` sub-agents | Feature request | **Likely v-next priority** — Addresses single point of failure in agent orchestration; aligns with multi-provider trend (see #944 Zen integration) |
| #942 [OPEN] Remote/multi-backend sandbox support (Vercel, Daytona, Firecracker) | Major feature PR | **Under review** — Critical for cloud deployments; large surface area may target minor release |
| #920 [OPEN] Twilio telephony integration | Major feature PR | **Staged for release** — Complete crate with webhook infrastructure; may await security review |

**Roadmap signal**: Moltis is expanding from **local-first AI assistant** to **deployable multi-channel platform** (voice, remote sandboxes, cloud-native). Failover resilience (#949) is the logical next architectural layer.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Satisfaction Indicator |
|:---|:---|:---|
| **Crash on media upload** | #947 | ⚠️ Frustration → ✅ Rapid resolution |
| **Broken chat layout/scrolling** | #945, #946 | ⚠️ Daily UX friction → ✅ Same-day fix + tests |
| **Discord commands non-functional** | #948 | ⚠️ Platform parity gap → ✅ Fixed with UX improvement (dropdowns) |
| **Terminal reliability** | #937, #955 | ⚠️ Power-user workflow blocker → ✅ Race condition eliminated |
| **Data portability/migration** | — (proactive #951) | ✅ Anticipatory feature delivery |
| **Voice UI clutter when disabled** | #943 | ✅ Config-driven UX refinement |

**Net sentiment**: Users report tactical friction; maintainers demonstrate **responsive, thorough resolution**. No systemic dissatisfaction patterns. The proactive #951 (portable backups) suggests maintainers are thinking beyond reactive fixes to operational concerns.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| #942 Sandbox multi-backend support | 2 days open | **Medium** — Large PR; cloud deployment blocker | Maintainer review for architectural alignment; dependency on #951 portable data? |
| #920 Twilio telephony | 3 days open | **Low-Medium** — Feature-complete, awaiting merge queue | Security review of webhook routes; possible coordination with #949 provider failover |
| #949 Provider failover | 1 day open | **Low** — Fresh, well-scoped | Maintainer triage; likely fast-track given architectural priority |

**No stale items** — All open PRs/issues are ≤3 days old. The project shows no accumulation of neglected contributions.

---

*Digest generated from GitHub activity 2026-05-01. All links: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-02

## 1. Today's Overview

CoPaw (QwenPaw) shows **moderate community activity** with 7 new issues and 4 PR updates in the last 24 hours, though no releases were cut. The project appears to be in an active development phase with a **healthy influx of first-time contributors** (evidenced by the closed first-time-contributor PR) and diverse feature expansion across channels, providers, and infrastructure. However, **zero merged PRs today** suggests potential review bottleneck, with 3 of 4 PRs remaining open. A notable concentration of issues relates to memory/context management and model provider integrations, indicating the project is maturing beyond core chat functionality into more sophisticated AI agent capabilities.

---

## 2. Releases

**No new releases** — Version 1.5.1 remains current.

---

## 3. Project Progress

### Closed PR
| PR | Description | Status |
|:---|:---|:---|
| [#3989](https://github.com/agentscope-ai/QwenPaw/pull/3989) | `add knowledge` — First-time contributor adding knowledge base functionality (screenshots suggest UI/knowledge management features) | ✅ **Closed** (not merged) |

**Note:** This PR was closed without merge despite being from a first-time contributor. The contributor included detailed screenshots, suggesting substantive work. The closure reason is unclear—may need follow-up for contributor retention.

### Open PRs Under Active Development
| PR | Description | Age | Risk |
|:---|:---|:---|:---|
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Discord thread creation for cron job isolation | 15 days | Stale risk |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | Vector model connection test feature | 7 days | Moderate |
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | **Volcengine (字节火山引擎) provider + coding plan support** | 1 day | Fresh |

**Key advancement:** Volcengine provider PR (#3994) represents strategic expansion into Chinese cloud AI ecosystem, critical for domestic adoption.

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Analysis |
|:---|:---|:---|:---|
| 🔥 | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) Agent conversation halts after several rounds | 2 comments | **Critical reliability concern** — Core functionality failure; user reports agent becomes unresponsive mid-session |
| 🔥 | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) conda-pack ≤0.7.1 conflicts with pip install on Windows | 2 comments | **Build system fragility** — Windows packaging blocked; includes diagnostic improvement suggestion |
| 🔥 | [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) Channel response speed too slow | 2 comments | **Performance at scale** — Implies production usage where latency matters |

**Underlying needs:** The 2-comment clustering across top issues suggests users are hitting **production readiness walls** (reliability, build, performance) rather than experimental feature gaps. The project may be transitioning from hobbyist to professional use cases.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **🔴 Critical** | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | Agent conversation **deadlocks/halts after multi-turn chat** — core functionality broken | ❌ None |
| **🟠 High** | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | **Ollama channel loses conversation history entirely** — context not passed between turns; works fine on online APIs | ❌ None |
| **🟡 Medium** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | Windows build failure: conda-pack/pip toolchain conflict; poor error visibility | ❌ None |

**Pattern alert:** Two distinct issues (#3992, #3991) both involve **context/memory loss in conversation flow**, but affect different channels (general agent loop vs. Ollama-specific). This suggests **architectural fragility in state management** rather than isolated bugs.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Predicted Priority | Version Likelihood |
|:---|:---|:---|:---|
| [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) | DeepSeek V4 granular thinking levels (`xhigh`/`max`) beyond binary toggle | **High** — Competitive parity with DeepSeek API | v1.6.x |
| [#3993](https://github.com/agentscope-ai/QwenPaw/issues/3993) | OpenAI Responses API + native tool calling | **High** — Industry standard migration | v1.6.x |
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | Enhanced memory management: lifecycle, conflict detection, auto-archive | **Medium-High** — Addresses core scaling pain | v1.6.x or v1.7 |
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | Volcengine provider | **Medium** — Regional market expansion | v1.5.2 or v1.6.0 |

**Roadmap prediction:** The concentration on **model provider diversity** (DeepSeek granular control, OpenAI Responses API, Volcengine) plus **memory infrastructure hardening** suggests the next minor version (1.6.0) will focus on **enterprise-grade flexibility and scale**.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Conversation reliability** | #3992 (halting), #3991 (Ollama amnesia) | Blocking daily use |
| **Performance at scale** | #3990 channel latency | Production concern |
| **Build/deploy friction** | #3988 Windows packaging | Onboarding barrier |
| **Memory bloat** | #3995 unbounded daily notes growth | Long-term maintenance |

### Use Case Signals
- **Local/self-hosted deployment** (Ollama channel usage) is popular but less polished than cloud paths
- **Windows developers** are active but underserved in build tooling
- **Multi-turn agent workflows** are attempted but fail at depth

### Satisfaction/Dissatisfaction
- ✅ Rich provider ecosystem expansion (Volcengine PR, DeepSeek, OpenAI)
- ❌ Core "it just works" conversation stability deteriorating under real use

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) Discord cron threads | **15 days open** | 🔴 Stale; may bitrot | Maintainer review or close with direction |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) Vector model test | 7 days | 🟡 Moderate | Review for 1.5.2 inclusion |
| [#3989](https://github.com/agentscope-ai/QwenPaw/pull/3989) First-time contributor knowledge PR | **Closed same day** | 🟡 Contributor retention risk | Follow-up: why closed? Redirect or mentor? |

**Critical attention:** The rapid closure of #3989 without visible merge or detailed feedback risks **contributor churn**. Combined with 15-day-old PR #3525, maintainer bandwidth may be constrained.

---

*Digest generated from github.com/agentscope-ai/CoPaw activity on 2026-05-01/02.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-02

## 1. Today's Overview

ZeroClaw shows **high-velocity development** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active, growing open-source AI agent project. The v0.7.4 patch release landed today as the first release on the v0.7.x workspace foundation, featuring a clean-room Matrix rewrite and recovered WeChat iLink Bot channel. However, the **merge ratio is concerning**: only 5 of 50 PRs were merged/closed (10%), with 45 remaining open, suggesting potential review bottlenecks. The community is particularly engaged around onboarding friction, provider configuration, and skill security architecture. A critical schema v3 migration is in progress as a merge blocker for v0.8.0, indicating the project is at an inflection point for breaking changes.

---

## 2. Releases

### [v0.7.4](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.4) — Released 2026-05-01

| Aspect | Details |
|--------|---------|
| **Type** | Patch release on v0.7.x workspace foundation |
| **Key Changes** | • **Clean-room Matrix rewrite** — rebuilt Matrix channel integration from scratch<br>• **Mozilla Fluent i18n pipeline** with multi-locale documentation support<br>• **Ground-up CLI/TUI onboarding flow rewrite**<br>• **Recovered WeChat iLink Bot channel** — restored previously broken channel |
| **Breaking Changes** | None declared (patch release) |
| **Migration Notes** | Users upgrading from v0.7.3 should verify Matrix channel configurations; onboarding flow changes are UX-level, not config-breaking |

---

## 3. Project Progress

### Merged/Closed PRs (5 total)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | singlerider | **Web onboarding parity** — Gateway CRUD endpoints for per-property config management (`/api/config/*`) | Major UX improvement: fresh installs can now complete setup entirely via browser |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | ilteoood | **Manual cron trigger from Web UI** — `POST /api/cron/{id}/run` with same retry/security path as scheduled runs | Addresses [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501); enables testing cron prompts without waiting |
| [#6265](https://github.com/zeroclaw-labs/zeroclaw/pull/6265) | WareWolf-MoonWall | **CI fix** — Removes broken CHANGELOG-next.md cleanup step from release workflow | Fixes [#6249](https://github.com/zeroclaw-labs/zeroclaw/issues/6249); branch protection was blocking post-release automation |
| [#6263](https://github.com/zeroclaw-labs/zeroclaw/pull/6263) | ilteoood | **Performance fix** — `HandContext.learned_facts` switched from `Vec<String>` to `HashSet<String>` | Eliminates O(n²) deduplication loop; micro-optimization with measurable impact at scale |
| [#6262](https://github.com/zeroclaw-labs/zeroclaw/pull/6262) | xiongzubiao | *Test PR — closed without merge* | N/A |

### Notable Open PRs Advancing

| PR | Status | Significance |
|---|---|---|
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | **Intentionally blank — do not review** | Likely integration branch for schema v3 batch; signals v0.8.0 preparation |
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | Open, XL size, high risk | ACP protocol v1 implementation — critical for external tool-call integrations (Nori, etc.) |
| [#6215](https://github.com/zeroclaw-labs/zeroclaw/pull/6215) | Open | Mirrors runtime fail-loud model resolution to gateway/channels — security hardening follow-up |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Category | Underlying Need |
|:---:|---|:---:|:---:|---|
| 1 | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — `default_model` issue on fresh install | **15** | P1 bug | **Onboarding is fundamentally broken for new users** with external Ollama; fresh installs fail immediately after setup |
| 2 | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — Agent doesn't know it can use `zeroclaw cron` | **8** | S3 bug | **Tool discovery gap**: agent lacks self-awareness of available tools; suggests need for dynamic tool registry exposure |
| 3 | [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — Better logo | **8** | P2 enhancement | Community branding investment; 2 👍 indicates modest but persistent interest |
| 4 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) — Schema v3 batch migrations | **6** | Merge blocker | **Architectural debt consolidation**; community wants stable config foundation before v0.8.0 |
| 5 | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) — Shell sandbox blocks realistic Python skills | **6** | P1 bug, high risk | **Enterprise skill development blocked** — FINOS CDM skill author (Jason Perlow) cannot ship production skill |

### Analysis of Underlying Needs

- **Onboarding crisis**: [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) + [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) show the project recognizes first-run experience as competitive vulnerability
- **Agent self-knowledge**: [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) reveals architectural limitation — tools exist but aren't in agent's working context
- **Enterprise readiness**: [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) and related issues from perlowja indicate FINOS/brokerage evaluation is a real, pending use case

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---:|---|:---:|---|---|
| **P0** | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) — `install.sh` omits web dashboard | **OPEN** | None | Fresh binary installs lack web UI; degraded to S2 but install integrity is critical |
| **P1** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — `default_model` fails on fresh install | **OPEN** | None | Workflow blocked for new users with external Ollama; 15 comments, no resolution |
| **P1** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) — Shell sandbox blocks Python skills | **IN PROGRESS** | None | High-risk security/config interaction; enterprise skill authors blocked |
| **P1** | [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) — SkillForge emits non-schema fields | **BLOCKED** | None | Blocked on [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128); schema validation gap |
| **P1** | [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) — Add `deny_unknown_fields` to SkillMeta | **OPEN** | None | "Good first issue" but unassigned; silent config drops are footgun |
| **P1** | [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) — Dashboard Channels tab crash | **IN PROGRESS** | None | Frontend regression on v0.6.8 Docker image; may persist in v0.7.x |
| **P1** | [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) — Gateway cost API returns zero | **OPEN** | [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | Usage tracking completely non-functional; PR exists but needs author action |
| **P1** | [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) — Gateway silent-fallback hardening | **OPEN** | [#6215](https://github.com/zeroclaw-labs/zeroclaw/pull/6215) | Security follow-up to [#6099](https://github.com/zeroclaw-labs/zeroclaw/issues/6099); PR open |
| **P2** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) — Self-test reports wrong host | **OPEN** | [#6219](https://github.com/zeroclaw-labs/zeroclaw/pull/6219) | Wildcard binds misreported as 127.0.0.1; fix PR ready |

**Regression Watch**: [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) (PYTHONPATH syntax) was closed, but [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) (same author, same component) suggests the shell tool fix was incomplete — sandbox policy is still too restrictive.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.8.0 | Rationale |
|---|---|:---:|---|
| **Schema v3 with batch migrations** | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947), [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | **Certain** | Explicit merge blocker; integration branch exists |
| **Web onboarding parity** | [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175), [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | **Shipped in v0.7.4** | Merged; available now |
| **WhatsApp cron delivery** | [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) | **High** | Small, focused PR; extends existing channel enum |
| **LM Studio configurable URL** | [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) | **Medium-High** | Local LLM users are vocal; touches multiple surfaces |
| **Per-skill security permissions** | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | **Medium** | High-risk security enhancement; needs maintainer review; architecturally significant |
| **Skill `.well-known` URI install** | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | **Medium** | Standards-aligned (Agent Skills group); Cloudflare/Vercel precedent |
| **Codex runner parity** | [#5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416) | **Low-Medium** | Closed without merge; may resurface if Codex adoption grows |
| **Better logo** | [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | **Low** | Nice-to-have; no engineering dependency |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|---|---|:---|
| **Fresh install failure** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123): "After I set up my onboarding I get this error" — immediate crash | Critical |
| **Config not respected** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051): "reports using 127.0.0.1 contrary to any config" | High |
| **Missing dashboard after install** | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096): binary installed, web assets missing | High |
| **Agent doesn't know its own tools** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862): "zeroclaw says it does not have the tools to do this thing" | Medium |
| **Cost tracking broken** | [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001): "/api/cost stays zero" | Medium |
| **Cursor misalignment in web editor** | [#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073): "character write not aligned with text cursor" | Low (but frustrating) |

### Use Cases Emerging

- **FINOS-compliant financial analysis**: Jason Perlow's [InvestorClaw](https://github.com/perlowja/InvestorClaw) skill — requires shell sandbox flexibility, Python execution, regulatory compliance
- **Multi-provider local LLM setups**: Ollama on separate LXC, LM Studio — users want flexible, non-localhost configurations
- **Channel-rich automation**: WhatsApp, WeChat, Matrix, Discord — users want cron + agent across all messaging surfaces

### Satisfaction Signals

- Active contribution from enterprise-adjacent developers (FINOS, brokerage evaluations)
- Community-driven logo proposals ([#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710))
- Persistent engagement on long-running issues (8 comments on cron awareness, 6 on schema v3)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention (Stale or Blocked)

| Item | Age | Status | Risk if Neglected |
|---|---|---|---|
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) — Per-skill security permissions | ~17 days | `needs-maintainer-review` | **Security architecture debt**: global `allow_scripts` is anti-pattern; blocks enterprise adoption |
| [#5530](https://github.com/zeroclaw-labs/zeroclaw/pull/5530) — Namespaced memory tools for delegates | ~23 days | `needs-author-action` | Sub-agent isolation broken; memory pollution between parent/delegate |
| [#5516](https://github.com/zeroclaw-labs/zeroclaw/pull/5516) — Fuzz targets wired to real code | ~24 days | `needs-author-action` | Security testing gap; currently fuzzing `serde_json::Value` not actual structures |
| [#5303](https://github.com/zeroclaw-labs/zeroclaw/pull/5303) — Bedrock SigV4 fallback | ~27 days | Open, no labels | AWS enterprise users blocked; generic API_KEY override breaks Bedrock auth |
| [#5263](https://github.com/zeroclaw-labs/zeroclaw/pull/5263) — `/new` slash command | ~29 days | `needs-author-action` | UX papercut; context accumulation cost is real for active users |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) — `.well-known` skill install | ~36 days | `in-progress` | Standards alignment; competitor ecosystems (Cloudflare, Vercel) moving ahead |

### Critical Blockers for v0.8.0

| Item | Blocking |
|---|---|
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) / [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | All schema v3 migration PRs |
| [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) | [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) (SkillForge fix) |
| [#5972](https://github.com/zeroclaw-labs/zeroclaw/issues/5972) (implied) | [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) (prompt audit extension) |

---

## Project Health Assessment

| Dimension | Score | Notes |
|---|---|---|
| **Velocity** | ⭐⭐⭐⭐☆ | High activity, but low merge ratio (10%) |
| **Stability** | ⭐⭐⭐☆☆ | Multiple P1 bugs in onboarding path; v0.7.4 patch suggests rapid iteration |
| **Community** | ⭐⭐⭐⭐☆ | Engaged enterprise users, active issue discussion, external skill development |
| **Maintainability** | ⭐⭐⭐☆☆ | Schema migration debt accumulating; review backlog growing |
| **Security** | ⭐⭐⭐⭐☆ | Proactive hardening (#6099, #6127, #6215); skill audit improvements in flight |

**Bottom Line**: ZeroClaw is shipping aggressively (v0.7.4 with major rewrites) but faces a **reliability crisis at the first-run experience**. The v0.8.0 schema v3 migration is a necessary architectural consolidation, but the 45-open-PR backlog and unassigned P1 bugs suggest the project would benefit from a stabilization sprint focused on onboarding, install integrity, and review velocity before pushing more features.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*