# OpenClaw Ecosystem Digest 2026-05-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-06 00:19 UTC

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

# OpenClaw Project Digest — 2026-05-06

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a project at peak activity with a large, engaged community. The 326:174 open-to-closed issue ratio and 357:143 open-to-merged PR ratio suggest **more work entering than exiting**, typical of a rapidly expanding codebase. Three releases shipped (v2026.5.4 and two betas), all focused on Google Meet/Voice Call integration with Gemini voice bridge improvements. The project appears healthy but **operationally strained**—high comment counts on top issues reveal deep technical debates, and several regressions in recent releases indicate quality control challenges at this pace.

---

## 2. Releases

### [v2026.5.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4) (Stable)
### [v2026.5.4-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.3)
### [v2026.5.4-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.2)

**Changes:**
- **Google Meet/Voice Call**: Twilio dial-in joins now speak through the realtime Gemini voice bridge with:
  - Paced audio streaming
  - Backpressure-aware buffering
  - Barge-in queue clearing
  - Eliminated TwiML fallback during realtime speech

**Impact:** Significantly snappier operation for Meet participants.

**Breaking Changes / Migration Notes:** None explicitly noted; appears to be additive improvement to existing voice bridge.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Significance |
|:---|:---|:---|
| [#75544](https://github.com/openclaw/openclaw/pull/75544) | Guard device fallback state | Prevents stale local pairing fallback when Gateway has pending requests |
| [#75722](https://github.com/openclaw/openclaw/pull/75722) | Enforce wiki session visibility in memory | Security fix: aligns shared-memory lookups with session visibility policy |
| [#77087](https://github.com/openclaw/openclaw/pull/77087) | Gateway recovery from npm chunk-hash replacement during upgrade | **Critical reliability**: fixes in-place upgrade crashes |
| [#77244](https://github.com/openclaw/openclaw/pull/77244) | Generation tools "Not Live" fix | Restores generation tool functionality on v2026.5.3 |
| [#77248](https://github.com/openclaw/openclaw/pull/77248) | Telegram Forum Topic delivery fix | Resolves silent message dropping in forum threads |
| [#78144](https://github.com/openclaw/openclaw/pull/78144) | Report gateway draining in readiness | Observability improvement for Kubernetes/health checks |
| [#78148](https://github.com/openclaw/openclaw/pull/78148) | Explain max-turn run stops | Better diagnostics for agent loop termination |

### Key Active PRs Advancing

| PR | Description | Stage |
|:---|:---|:---|
| [#77205](https://github.com/openclaw/openclaw/pull/77205) | **Durable message lifecycle delivery** — massive cross-channel refactor | XL, under review |
| [#74847](https://github.com/openclaw/openclaw/pull/74847) | SDK task ledger RPCs for background work visibility | XL, near completion |
| [#78086](https://github.com/openclaw/openclaw/pull/78086) | State-aware failover and lane suspension with circuit breaker | L, needs review |
| [#77731](https://github.com/openclaw/openclaw/pull/77731) | `openclaw doctor` repairs legacy Codex route config | XL, active |
| [#75035](https://github.com/openclaw/openclaw/pull/75035) | User input blocking lifecycle gates | XL, security-sensitive |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 104 | 74 | **Linux/Windows Clawdbot Apps** | Platform parity — macOS/iOS/Android exist; developers want native desktop clients for the majority OSs. **Strategic gap**: 4+ months old, highest community demand. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 25 | 0 | Text between tool calls leaks to channels | **UX polish**: Agent "thinking" noise polluting user-facing channels. Need clean separation of internal processing vs. user communication. |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 24 | 1 | Prebuilt Android APK releases | **Distribution friction**: Building from source blocks non-technical users; CI/CD gap for mobile. |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | 22 | 1 | Live dev agent behavior tracking | **Meta-observability**: Community fascinated by autonomous agent operation; wants transparency/learning from real deployments. |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | 19 | 0 | `memoryFlush` fires every other cycle | **Reliability**: Memory management correctness affects long-running agent sessions. |

### Analysis

The #75 platform gap dominates — 104 comments and 74 upvotes over 4 months signals **unmet demand that could drive forks or competitor adoption**. The tool-call text leakage (#25592) represents a class of "agent hygiene" problems where internal reasoning surfaces to users, undermining trust.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **Critical** | [#77668](https://github.com/openclaw/openclaw/issues/77668) | OPEN | No | Discord gateway hang — macOS, Carbon Client lifecycle, no timeout, 6 closed dups. **Regression in 2026.5.3-1.** |
| **Critical** | [#77779](https://github.com/openclaw/openclaw/issues/77779) | OPEN | No | WeChat plugin crash loop — `api.runtime undefined` in 2026.5.4. **Fresh regression in latest stable.** |
| **High** | [#77374](https://github.com/openclaw/openclaw/issues/77374) | OPEN | No | Assistant messages disappear from Control UI — **data loss perception** |
| **High** | [#77116](https://github.com/openclaw/openclaw/issues/77116) | OPEN | No | Feishu channel crash loop after 2026.5.2 upgrade — appId/appSecret incompatibility |
| **High** | [#76552](https://github.com/openclaw/openclaw/issues/76552) | OPEN | No | High CPU during Codex runtime — small Linux hosts overwhelmed |
| **Medium** | [#46637](https://github.com/openclaw/openclaw/issues/46637) | OPEN | No | `reasoning_content` breaks oMLX JSON parse — Qwen 3.5 compatibility |
| **Medium** | [#44051](https://github.com/openclaw/openclaw/issues/44051) | OPEN | No | Skills fail on WSL — path resolution regression |
| **Medium** | [#12590](https://github.com/openclaw/openclaw/issues/12590) | OPEN | No | `memoryFlush` unreliable — every-other-cycle bug |

### Stability Assessment

**Concerning pattern**: Multiple regressions in 2026.5.x releases affecting core channels (Discord, WeChat, Feishu). The WeChat crash in **fresh stable release** (2026.5.4) suggests insufficient beta coverage. Gateway hangs without timeout (#77668) indicate missing defensive programming.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Predicted Priority | Rationale |
|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | **High — next 2 quarters** | Highest community demand; blocks enterprise adoption |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APKs | **Medium — next release** | Low engineering cost, high user enablement; CI/CD integration |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approval denylist | **Medium — near term** | Complements existing allowlist; security demand from power users |
| [#8719](https://github.com/openclaw/openclaw/issues/8719) Security Profile v1.1 | **High — strategic** | Data-centric security model; addresses wallet theft, DB wipe risks |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) Model fallback on context exceeded | **Medium** | Existing fallback infrastructure extensible; prevents user-facing failures |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) Built-in auto-update | **Low-Medium** | Manual update friction evident; but complexity with breaking changes |
| [#9764](https://github.com/openclaw/openclaw/issues/9764) Google Chat user OAuth | **Low** | Niche enterprise use case |

**Emerging theme**: Security hardening (#8719, #6615) and operational robustness (auto-update, fallback handling) maturing alongside core functionality.

---

## 7. User Feedback Summary

### Pain Points

| Category | Evidence | Severity |
|:---|:---|:---|
| **Upgrade fragility** | [#77087](https://github.com/openclaw/openclaw/issues/77087) npm chunk-hash crash, [#77116](https://github.com/openclaw/openclaw/issues/77116) Feishu break, [#77779](https://github.com/openclaw/openclaw/issues/77779) WeChat break | **Critical** — users fear upgrading |
| **Platform gaps** | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows, [#9443](https://github.com/openclaw/openclaw/issues/9443) Android APKs | **High** — accessibility barrier |
| **Silent failures** | [#25592](https://github.com/openclaw/openclaw/issues/25592) text leakage, [#77374](https://github.com/openclaw/openclaw/issues/77374) UI message disappearance, [#77248](https://github.com/openclaw/openclaw/issues/77248) Telegram silent drops | **High** — erodes trust |
| **Performance on constrained hardware** | [#76552](https://github.com/openclaw/openclaw/issues/76552) high CPU, [#75839](https://github.com/openclaw/openclaw/issues/75839) 10s session list latency | **Medium** — excludes small deployments |
| **Memory/context opacity** | [#2597](https://github.com/openclaw/openclaw/issues/2597) context % invisible, [#12590](https://github.com/openclaw/openclaw/issues/12590) flush unreliability | **Medium** — agent autonomy hampered |

### Positive Signals

- Strong engagement with autonomous agent tracking (#77598) — users excited by self-running capabilities
- Active plugin ecosystem (WeChat, Feishu, Telegram, Discord) — platform breadth valued
- Voice call integration quality focus in releases — real-time communication prioritized

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 4+ months | **Fork/competitor risk** | Roadmap commitment or community contribution pathway |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) Context/state lost after compaction | 3+ months | Agent reliability | Design decision on context visibility |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot | 3+ months | Security architecture | Evaluate Rust rewrite feasibility or sandbox alternative |
| [#1210](https://github.com/openclaw/openclaw/issues/1210) Base64 images in transcripts | 3+ months | Context efficiency | Storage architecture decision |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) Suppress sub-agent announce | 3+ months | Workflow control | Config option or model behavior fix |

### PRs Stalled

| PR | Issue | Blocker |
|:---|:---|:---|
| [#77205](https://github.com/openclaw/openclaw/pull/77205) Durable message lifecycle | Massive scope (XL, 20+ channels) | Needs maintainer bandwidth for careful review |
| [#78086](https://github.com/openclaw/openclaw/pull/78086) State-aware failover | Complex distributed systems change | Needs production validation |
| [#69310](https://github.com/openclaw/openclaw/pull/69310) Surface dropped media | UX improvement, ready | "Needs-real-behavior-proof" triage label |

---

## Health Indicators

| Metric | Status | Trend |
|:---|:---|:---|
| Daily activity volume | Very High (1000 updates) | Stable/high |
| Open/close ratio (issues) | 1.87:1 | Slightly worsening |
| Open/merge ratio (PRs) | 2.50:1 | Concerning — review bottleneck |
| Release stability | Regressions in stable | **Declining** — needs attention |
| Community engagement | Very high | Strong |
| Platform coverage | Incomplete (no Linux/Windows desktop) | **Stale** |

**Overall**: OpenClaw is a **thriving but stressed project**. Engineering velocity is exceptional, but release quality control and review bandwidth are not keeping pace. The 2026.5.4 WeChat regression in particular suggests need for expanded beta testing or staged rollouts.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-05-06 | **Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem exhibits extreme bimodality: a handful of high-velocity projects (OpenClaw, ZeroClaw, IronClaw) are pushing weekly releases with 50+ daily PRs, while the majority operate in maintenance mode or near-stagnation. The dominant technical paradigm has shifted from simple chatbot wrappers toward **autonomous agent orchestration** with persistent memory, multi-channel deployment, and tool-use ecosystems (MCP, skills). However, this maturity brings shared fragility—every major project shows **regression patterns in session lifecycle management, channel reliability, and onboarding flows**, suggesting the industry is outrunning its testing infrastructure. Enterprise adoption signals are emerging (fleet management, cost observability, security hardening) but remain immature across the board.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.5.4 + 2 betas | ⚠️ **Strained** (7/10) | Peak velocity, declining release stability, review bottleneck (2.5:1 open/merge PR ratio) |
| **NanoBot** | 6 | 14 | None | ✅ **Healthy** (7/10) | Responsive maintainers, stabilization mode, critical GPT-5.5 blocker unaddressed |
| **Hermes Agent** | 50 | 50 | None | ⚠️ **Stressed** (6/10) | High engagement, low merge rate (8/50), session-lifecycle regression hotspot |
| **PicoClaw** | 17 | 27 | v0.2.8-nightly | ⚠️ **Strained** (6/10) | Pre-release stabilization, security sandbox escape critical, channel reliability gaps |
| **NanoClaw** | 9 | 50 | None | ✅ **Active** (7/10) | Aggressive backlog clearing (64% merge rate), migration UX investment, data loss risk open |
| **NullClaw** | 1 | 5 | None | ⚠️ **Constrained** (5/10) | Windows-blocked, minimal activity, enterprise governance signal emerging |
| **IronClaw** | 16 | 43 | None (crates.io 3 versions behind) | ⚠️ **Transitioning** (6/10) | Major Reborn refactor, release pipeline broken, salvage-dependent contribution model |
| **LobsterAI** | 0 | 3 | None | ⚠️ **Stagnant** (4/10) | Maintenance-only, critical crash fix stale 42 days, Windows hardening only activity |
| **TinyClaw** | 0 | 0 | None | ❌ **Dormant** (—) | No activity detected |
| **Moltis** | 0 | 1 (Dependabot) | None | ⚠️ **Stagnant** (3/10) | Zero human contributions, dependency automation only |
| **CoPaw** | 10 | 10 | None | ⚠️ **Stressed** (6/10) | 10% merge rate, P0 regressions unpatched, first-time contributor influx |
| **ZeptoClaw** | 0 | 11 (all Dependabot) | None | ⚠️ **Attention-starved** (4/10) | Automated maintenance only, 0% merge rate, possible pre-release stealth phase |
| **ZeroClaw** | 50 | 50 | None (v0.7.5 milestone) | ⚠️ **Strained** (6/10) | 24% closure rate, onboarding S1 unaddressed, WhatsApp channel critical |

*Health scoring: Composite of velocity, merge rate, regression severity, maintainer responsiveness, and release discipline.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Raw velocity** | 1000 updates/day | 10–100× higher than all peers; only ZeroClaw matches issue/PR count |
| **Voice integration depth** | Real-time Gemini voice bridge with barge-in, backpressure | No peer has comparable production voice-call infrastructure |
| **Release cadence** | Multiple weekly releases | Most peers: monthly or stalled; IronClaw 3 versions behind |
| **Platform breadth** | 18+ messaging platforms | Hermes matches; others lag (NanoBot ~6, PicoClaw ~8) |
| **Enterprise features** | Gateway draining, Kubernetes readiness | Leading operational maturity |

### Technical Approach Differences
- **OpenClaw**: Monolithic TypeScript/Node.js gateway with plugin architecture; aggressive feature shipping with beta/stable channel separation
- **NanoBot**: Python-first, local-LLM-optimized (MLX, Ollama), academic-origin (HKUDS)
- **Hermes**: Rust-core with TUI/WebUI dual interface, profile-centric configuration
- **IronClaw**: Rust with WebAssembly sandboxing, NEAR blockchain integration, "Reborn" layered architecture
- **ZeroClaw**: Rust with typed provider families, explicit fleet management, HMAC security model

### Community Size Comparison
OpenClaw's 104-comment, 74-upvote #75 issue dwarfs all peer engagement signals. However, this scale creates **inverse quality pressure**: NanoBot and NanoClaw achieve faster per-contributor response times with smaller communities. OpenClaw's comment-to-merge latency appears highest in class.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Session lifecycle hardening** | OpenClaw, Hermes, PicoClaw, ZeroClaw, NanoClaw | Compression-induced splits, context compaction correctness, memory flush reliability, orphaned session recovery |
| **Channel reliability at scale** | OpenClaw, NanoBot, PicoClaw, CoPaw, ZeroClaw | Telegram polling hangs, Discord gateway timeouts, WhatsApp protocol breaks, cron→channel errors, DingTalk startup failures |
| **Onboarding/migration UX** | NanoClaw, ZeroClaw, OpenClaw, CoPaw | v1→v2 migration scripts, back-navigation in setup flows, default_model resolution, first-run config validation |
| **Streaming/real-time UX** | PicoClaw, OpenClaw, CoPaw | Web Chat streaming, HTTP SSE to LLM backends, voice bridge latency |
| **Security sandboxing** | PicoClaw, IronClaw, OpenClaw | Filesystem isolation bypasses, guardrail completeness, sub-agent privilege separation |
| **Cost/usage observability** | ZeroClaw, OpenClaw, Hermes | Per-provider spend tracking, quota transparency, operational metrics |
| **MCP ecosystem integration** | NanoClaw, NanoBot, IronClaw, PicoClaw | Stdio-to-HTTP bridging, dynamic headers, server lifecycle management, protocol transport expansion |
| **Multi-agent orchestration** | Hermes, CoPaw, ZeroClaw, PicoClaw | Persistent role sessions, sub-agent concurrency limits, team self-evolution, collective memory |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Voice-native, platform-saturated enterprise deployment | DevOps/integrators, multi-channel operators | Gateway-centric monolith, rapid release trains |
| **NanoBot** | Local-LLM-first, academic rigor, resource-conscious | Researchers, privacy-focused self-hosters | Python, MLX/Ollama optimization, subagent semaphore gating |
| **Hermes Agent** | Rust performance, TUI power-user experience, profile portability | Developers, terminal-native users | Rust core, profile-as-code, CI stabilization investment |
| **PicoClaw** | Embedded/ARM deployment, hardware portability | IoT/edge, Sipeed hardware ecosystem | Rust, constrained-resource optimization, Mission Control launcher |
| **NanoClaw** | Container-native, Apple ecosystem integration, setup UX | macOS/iOS developers, containerized deployers | OneCLI gateway, Docker/Podman/Apple Container runtime abstraction |
| **IronClaw** | Blockchain-adjacent (NEAR), WebAssembly sandboxing, financial verticals | Crypto-native, fintech, high-assurance | Rust + Wasmtime, turn-based execution kernel, "Reborn" layering |
| **ZeroClaw** | Fleet management, typed provider families, security receipts | Multi-node operators, cost-optimizers | Rust, HMAC tool receipts, nodes dashboard, MUSL static binaries |
| **CoPaw** | AgentScope lineage, Qwen model optimization, Chinese market | Alibaba Cloud users, Chinese-language enterprises | Python, multi-agent team research, console-centric |
| **LobsterAI** | NetEase integration, note-taking vertical | Chinese consumers, Youdao ecosystem | Electron desktop, skill marketplace |
| **NullClaw** | Minimal footprint, Windows compatibility (aspirational) | Windows-first developers | Custom DNS shim, managed runtime |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Velocity Risk)
| Project | Pattern | Risk Profile |
|:---|:---|:---|
| **OpenClaw** | Shipping features faster than quality control can validate | Regression cascade in stable releases; review bottleneck |
| **ZeroClaw** | Accumulating v0.8.0 architectural debt in integration branch | Onboarding attrition, WhatsApp channel abandonment |
| **IronClaw** | Salvaging stalled PRs while executing Reborn migration | Contributor churn, crates.io security exposure |

### Tier 2: Active Stabilization (Healthy Consolidation)
| Project | Pattern | Trajectory |
|:---|:---|:---|
| **NanoBot** | Reliability fixes, SDK completeness, same-day bug response | Maturing toward v0.2.0; needs GPT-5.5 triage |
| **NanoClaw** | Aggressive UX debt clearing, migration path repair | Improving accessibility; container runtime diversification |
| **PicoClaw** | Pre-release hardening, security fix pending | v0.2.8 stable convergence; channel subsystem stress |

### Tier 3: Maintenance Mode / Stagnant
| Project | Pattern | Concern |
|:---|:---|:---|
| **Hermes Agent** | High engagement, low merge throughput | Review bandwidth may cap community growth |
| **CoPaw** | Contributor influx without proportional maintainer scaling | P0 regressions unpatched; Windows second-class status |
| **NullClaw** | Platform-blocked, minimal throughput | Windows parity gap may kill adoption |
| **LobsterAI** | Critical crash fix stale 42 days | Contributor disengagement risk; data loss exposure |
| **ZeptoClaw, Moltis, TinyClaw** | Zero or automated-only activity | Viability uncertain; possible stealth/abandonment |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Voice-native interaction is table stakes** | OpenClaw's Gemini bridge investment; PicoClaw streaming demands | Prioritize real-time audio infrastructure; batch-response UIs are legacy |
| **Session/memory correctness is the new bottleneck** | Hermes compression ghosts, OpenClaw memoryFlush cycles, ZeroClaw invisible autosaves | Invest in formal session state machines; compaction is harder than it appears |
| **Local-first and edge deployment growing** | NanoBot OOM fixes, PicoClaw ARM success, ZeroClaw Pi 4B users | Design for 4GB RAM ceilings; cloud-default architectures exclude self-hosters |
| **MCP as universal tool glue** | NanoClaw HTTP/SSE transports, NanoBot cleanup, IronClaw filtering | Abstract tool interfaces early; vendor-specific integrations are tech debt |
| **Security hardening shifting from feature to requirement** | ZeroClaw HMAC receipts, PicoClaw sandbox escape, NanoBot SSRF recovery | Threat model for agent tool use; assume malicious or buggy skills |
| **Cost observability emerging as ops necessity** | ZeroClaw /api/cost gaps, OpenClaw gateway draining | Build metering in from day one; "works but unknown spend" is unacceptable |
| **Windows as persistent adoption barrier** | NullClaw DNS shim, CoPaw degraded startup, LobsterAI skill deletion, NanoClaw headless friction | Windows CI must be first-class; WSL is insufficient |
| **Multi-agent orchestration demand outpaces supply** | CoPaw Agent Teams, Hermes persistent roles, NanoBot focus tool | Current architectures are single-agent; team semantics need greenfield design |
| **Release pipeline maturity lags code velocity** | IronClaw crates.io drift, OpenClaw beta coverage gaps, ZeroClaw CHANGELOG automation | Automated staged rollouts, not just CI, are critical infrastructure |

---

*Report generated from 2026-05-06 community digest data across 13 projects. Health assessments are directional, not investment advice.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-06

## 1. Today's Overview

NanoBot saw **healthy maintainer velocity** with 14 PRs updated in the last 24 hours (8 merged/closed, 6 open) and 6 active issues (4 open, 2 closed). No new releases were cut. The day's activity reveals a project in **stabilization mode**—heavy focus on reliability fixes (Telegram polling hangs, SSRF guard recovery, MCP connection cleanup) alongside incremental SDK and channel improvements. Community engagement remains moderate with one long-running feature request (#3292) continuing to attract discussion. The maintainer team appears responsive with same-day turnaround on several bug reports.

---

## 2. Releases

**None** — No new releases published today. The latest version remains prior to v0.1.5.post3.

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | Re-bin | **SSRF guard recovery softening** — converts hard runtime aborts into non-retryable tool errors, preventing agent death loops while maintaining security boundaries | Reliability: agents survive SSRF blocks gracefully |
| [#3620](https://github.com/HKUDS/nanobot/pull/3620) | chengyongru | **SDK completeness** — finally wires `RunResult.tools_used` and `RunResult.messages` after being hardcoded `[]` since facade introduction | SDK usability; closes documentation gap |
| [#3629](https://github.com/HKUDS/nanobot/pull/3629) | kaseru | **Telegram allowlist enforcement** — extends `allowFrom` checks to `/start`, `/help`, and pre-reaction side effects | Security hardening for Telegram deployments |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | BarclayII | **Feishu identity context** — injects sender display name/open_id/user_id into model prompts for group chat disambiguation | Multi-user chat experience |
| [#3632](https://github.com/HKUDS/nanobot/pull/3632) | futurist | **Feishu media path fix** — returns absolute paths instead of bare filenames for downloaded media | Fixes downstream transcription pipeline breaks |
| [#3631](https://github.com/HKUDS/nanobot/pull/3631) | JiajunBernoulli | **Dream cursor safety** — only advances `.dream_cursor` on completed batches, preventing silent memory loss | Data integrity; closes [#3630](https://github.com/HKUDS/nanobot/issues/3630) |
| [#3634](https://github.com/HKUDS/nanobot/pull/3634) | chengyongru | **Subagent concurrency limiting** — adds `maxConcurrentSubagents` config (default: 1) with semaphore gating | OOM prevention for local LLM servers; closes [#3611](https://github.com/HKUDS/nanobot/issues/3611) |
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | mrbob-git | *(duplicate/parallel implementation of #3634)* — same feature, merged same day | Indicates urgency/priority on this fix |

**Key theme:** Three independent contributors (mrbob-git, chengyongru, andrew-ellis-engineering) converged on subagent concurrency limiting within 48 hours, suggesting strong community demand for local-LLM-friendly resource controls.

---

## 4. Community Hot Topics

### Most Active Discussion: Session-Level Focus Tool ([#3292](https://github.com/HKUDS/nanobot/issues/3292))
- **9 comments** | Open since 2026-04-19 | Author: piliplaker
- **Core ask:** Persistent task anchoring across interruptions — a "mental task board" for LLM agents that survives context compaction and side-quest detours
- **Underlying need:** Production users hitting fundamental LLM limitation: agents lose thread of primary goals when handling interrupts or when `my` tool scratchpad gets compacted. The `_runtime_vars` mechanism is insufficient for complex multi-step workflows.
- **Signal:** This is a **framework-level architecture request** touching memory, compaction, and tool design. High implementation cost but would differentiate NanoBot for serious automation use cases.

### Telegram Polling Hang ([#3626](https://github.com/HKUDS/nanobot/issues/3626) / [#3627](https://github.com/HKUDS/nanobot/pull/3627))
- **2 comments** | Same-day PR response by reporter WormW
- **Underlying need:** Production Telegram bots require **silent-failure recovery** without process restarts. The HTTP-long-polling model's inherent fragility (NAT timeouts, Wi-Fi roaming) isn't handled by Python-telegram-bot's default configuration.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#3626](https://github.com/HKUDS/nanobot/issues/3626) / [#3627](https://github.com/HKUDS/nanobot/pull/3627) | Telegram long polling **silently hangs** — bot appears alive, sends but doesn't receive; no error logged | **PR open**, same-day response, watchdog-based recovery |
| **🔴 Critical** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | **GPT-5.5 "Duplicate item found with id"** error — Codex integration broken, agent cannot resume | **Open**, no fix PR; blocks GPT-5.5 users entirely |
| **🟡 High** | [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek API `reasoning_content` validation error — agent history fails strict API validation post-v0.1.5.post3 | **Open**, root cause identified, patch **provided by reporter**; awaiting merge |
| **🟡 High** | [#3630](https://github.com/HKUDS/nanobot/issues/3630) → [#3631](https://github.com/HKUDS/nanobot/pull/3631) | Dream cursor advances on **Phase 1 errors**, silently dropping memory entries — no surface visibility | **Fixed** (merged) |
| **🟡 High** | [#3611](https://github.com/HKUDS/nanobot/issues/3611) → [#3615](https://github.com/HKUDS/nanobot/pull/3615), [#3634](https://github.com/HKUDS/nanobot/pull/3634) | **OOM crashes** on local LLM servers from unbounded subagent concurrency | **Fixed** (merged) |
| **🟢 Medium** | [#3610](https://github.com/HKUDS/nanobot/pull/3610) | MCP failed connect orphans `AsyncExitStack`, **wedges event loop** | **PR open**, shields `aclose` cleanup |

**Stability assessment:** Two critical production issues (Telegram hang, GPT-5.5 breakage) remain partially unaddressed. The GPT-5.5 regression is particularly concerning as it's a **complete blocker** with no maintainer response yet. DeepSeek patch languishing suggests possible reviewer bandwidth constraint.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Subagent concurrency controls** | [#3611](https://github.com/HKUDS/nanobot/issues/3611), [#3615](https://github.com/HKUDS/nanobot/pull/3615), [#3634](https://github.com/HKUDS/nanobot/pull/3634) | **Shipped** | Already merged; signals local-LLM-first positioning |
| **LangSmith tracing restoration** | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | **High** | Large PR (4 Evaluability Logging Contract requirements), open 3 weeks, actively updated; enterprise observability demand |
| **SimpleX channel** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | **Medium** | Privacy-focused messaging niche; substantial implementation (CLI dependency) |
| **HF Spaces multi-role deployment** | [#3621](https://github.com/HKUDS/nanobot/pull/3621) | **Medium** | Production-verified orchestration (Neo/Trinity/Sentinel); cloud-native trend |
| **Message preprocessing hook** | [#3628](https://github.com/HKUDS/nanobot/pull/3628) | **Medium-High** | Clean architecture extension; enables plugin ecosystem |
| **Session-Level Focus Tool** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | **Low-Medium** | High architectural complexity; 9 comments but no maintainer engagement; may need RFC |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Silent failures** | Telegram hang (#3626), Dream cursor advancing on errors (#3630) | Production-impacting; debugging nightmare |
| **Local LLM resource exhaustion** | OOM from unbounded subagents (#3611) | Consumer hardware unusable without fix |
| **API compatibility drift** | DeepSeek (#3584), GPT-5.5 (#3633) breakages post-update | Upgrade anxiety; regression risk |
| **SDK surface incompleteness** | `RunResult` fields stubbed (#3620) | Developer trust erosion |

### Use Cases Emerging
- **Local-first AI agents** (MLX, Ollama): Concurrency limiting, memory optimization
- **Multi-platform messaging bots** (Telegram, Feishu, SimpleX): Enterprise/consumer bridge deployment
- **Long-running autonomous agents**: Session persistence (#3292), dream memory reliability (#3630)

### Satisfaction Signals
- Same-day PR response for Telegram hang (#3627) and subagent OOM (#3615, #3634)
- Active community contributing fixes before maintainers (DeepSeek patch, #3631)

### Dissatisfaction Signals
- GPT-5.5 complete breakage with **zero maintainer response** (#3633)
- LangSmith tracing "silently dropped" in v0.1.5 — observability downgrade without communication (#3140)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | 17 days | **Architecture debt** | Maintainer RFC or design doc; 9 comments indicate community investment without direction |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) LangSmith integration | 22 days | **Enterprise adoption** | Review/merge or schedule; large PR, replaces silently removed feature |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) SimpleX channel | 9 days | **Niche expansion** | Decision on channel expansion scope |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) HF Spaces deployment | 2 days | **Cloud positioning** | Review for production readiness claims |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) DeepSeek patch | 5 days | **API compatibility** | **Urgent:** Merge reporter-provided patch or provide feedback |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) GPT-5.5 breakage | 1 day | **Complete blocker** | **Critical:** Acknowledge and triage; no comments from maintainers |

---

*Digest generated from GitHub activity 2026-05-05 to 2026-05-06. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-06

## 1. Today's Overview

Hermes Agent shows **high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, though the **merge rate remains low** (only 8 PRs merged/closed versus 42 still open). No new releases were published today. Activity is concentrated around **platform stability** (Telegram, Discord, Feishu), **memory system reliability**, and **WebUI/dashboard improvements**. The project appears healthy in terms of engagement but may be experiencing **review bottleneck pressure** given the growing open PR backlog.

---

## 2. Releases

**No new releases** (v0.12.0 remains current as of data).

---

## 3. Project Progress

### Closed/Merged PRs Today (8 total, select highlights):

| PR | Description | Significance |
|:---|:---|:---|
| [#20466](https://github.com/NousResearch/hermes-agent/pull/20466) | Harden `install.sh` against inherited Python env leakage | Fixes Termux install reliability |
| [#20472](https://github.com/NousResearch/hermes-agent/pull/20472) | Bridge Tailwind font-sans/mono tokens to theme variables | WebUI theming fix |
| [#20467](https://github.com/NousResearch/hermes-agent/pull/20467) | Add Ukrainian locale (`uk`) | 7th supported UI language |
| [#20468](https://github.com/NousResearch/hermes-agent/pull/20468) | Spill oversized hook-injected context to disk | Prevents runaway plugin memory inflation |
| [#20469](https://github.com/NousResearch/hermes-agent/pull/20469) | Resolve 6 pre-existing CI failures across 4 test files | CI stability |
| [#20471](https://github.com/NousResearch/hermes-agent/pull/20471) | Stabilize main CI baseline | Isolates CI from host/profile leakage |
| [#20446](https://github.com/NousResearch/hermes-agent/pull/20446) | ~~Add Korean dashboard localization~~ (closed as duplicate) | Superseded by [#18894](https://github.com/NousResearch/hermes-agent/pull/18894) |

**Key advancement**: CI stabilization is a priority theme—two PRs (#20469, #20471) directly address flaky tests and environmental contamination, suggesting maintainer focus on engineering quality.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#8118](https://github.com/NousResearch/hermes-agent/issues/8118) | 6 | WebUI Dashboard feature request | **Visual/orchestration layer** for non-technical users; Hermes has strong backend but users want a "face" |
| [#17244](https://github.com/NousResearch/hermes-agent/issues/17244) | 4 | MCP SSE discovery not supported for amap (高德地图) | **China ecosystem compatibility**; SSE-based MCP servers are emerging standard not yet fully supported |
| [#12954](https://github.com/NousResearch/hermes-agent/issues/12954) | 3 (closed) | Chinese localization | Internationalization completeness |
| [#15153](https://github.com/NousResearch/hermes-agent/issues/15153) | 3 | Persistent canonical role sessions | **Enterprise workflow needs**—users want Hermes as an "operating system" with stable identities, not ephemeral subagents |
| [#20245](https://github.com/NousResearch/hermes-agent/issues/20245) | 3 (closed) | Agent has no memory function | **Memory system discoverability/UX**—users can't tell if memory is working |

### Most Active PRs:

| PR | Focus | Community Signal |
|:---|:---|:---|
| [#18188](https://github.com/NousResearch/hermes-agent/pull/18188) | Runtime footer metadata extension | Power users want transparency into provider/quota usage |
| [#18131](https://github.com/NousResearch/hermes-agent/pull/18131) | Feishu/Lark tool client from env credentials | Enterprise China market penetration |
| [#12201](https://github.com/NousResearch/hermes-agent/pull/12201) | NEAR AI + Phala AI private inference (TDX attestation) | **Privacy/security premium segment** |

**Analysis**: The community is pulling Hermes in two directions simultaneously—**consumer accessibility** (WebUI, localization, memory that "just works") and **enterprise/technical depth** (persistent roles, private inference, multi-agent orchestration).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **P1** | [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | Interactive CLI doesn't auto-fallback on Codex 429 `usage_limit_reached` (cron jobs do) | ❌ None |
| **P1** | [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) | Telegram DM topic binding not refreshed after compression-induced session split → preflight compression loop | ❌ None |
| **P1** | [#20293](https://github.com/NousResearch/hermes-agent/issues/20293) | Context compaction + session split injects compressed summary as valid history | ❌ None |
| **P1** | [#20001](https://github.com/NousResearch/hermes-agent/issues/20001) (closed) | TUI compression creates ghost sessions polluting `session_search` | ✅ Fixed (pattern not fully covered by #18370 fix) |
| **P2** | [#17244](https://github.com/NousResearch/hermes-agent/issues/17244) | MCP SSE discovery mechanism not supported (amap) | ❌ None |
| **P2** | [#18875](https://github.com/NousResearch/hermes-agent/issues/18875) | Hindsight memory provider crashes gateway with no error when client not installed | ❌ None |
| **P2** | [#20377](https://github.com/NousResearch/hermes-agent/issues/20377) | Podman rootless container: `/opt/data` permission denied | ❌ None |
| **P2** | [#20254](https://github.com/NousResearch/hermes-agent/issues/20254) | `profile list/show` reports Gateway stopped when host-side systemd gateway running | ❌ None |
| **P2** | [#19243](https://github.com/NousResearch/hermes-agent/issues/19243) | `session_search` returns empty after crash — orphaned session JSON not recovered | ❌ None |
| **P2** | [#20305](https://github.com/NousResearch/hermes-agent/issues/20305) | Session auto-title generation silently fails with reasoning models (`max_tokens` too low) | ❌ None |

**Critical concern**: Three **P1 issues** opened today around **session lifecycle management** (compression, splitting, fallback) with no fix PRs yet. The context compaction system appears to be a **regression hotspot**.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **WebUI Dashboard** | [#8118](https://github.com/NousResearch/hermes-agent/issues/8118), [#15966](https://github.com/NousResearch/hermes-agent/issues/15966) | **High** | Long-running top request; PRs #20472, #18894 show active web development |
| **Korean + Ukrainian localization** | [#20467](https://github.com/NousResearch/hermes-agent/pull/20467), [#18894](https://github.com/NousResearch/hermes-agent/pull/18894) | **Very High** | PRs ready, Ukrainian just merged |
| **Persistent role sessions / multi-agent orchestration** | [#15153](https://github.com/NousResearch/hermes-agent/issues/15153), [#18420](https://github.com/NousResearch/hermes-agent/issues/18420) | Medium | Architectural; may need v0.13.0 |
| **TrueConf gateway support** | [#20318](https://github.com/NousResearch/hermes-agent/issues/20318) | Medium | Enterprise request with 6 👍; platform expansion pattern exists |
| **fish.audio TTS** | [#20439](https://github.com/NousResearch/hermes-agent/issues/20439) | Medium | Low friction if plugin architecture supports |
| **Profile Distributions (shareable packages)** | [#20456](https://github.com/NousResearch/hermes-agent/issues/20456) | Lower | Architectural; needs design review |
| **Cross-platform session sharing** | [#20458](https://github.com/NousResearch/hermes-agent/issues/20458) | Lower | Complex; memory overhead problem real but solution non-trivial |

---

## 7. User Feedback Summary

### Pain Points:
- **Memory system opacity**: Users can't verify if memory is working ([#20245](https://github.com/NousResearch/hermes-agent/issues/20245)), and crashes leave orphaned data ([#19243](https://github.com/NousResearch/hermes-agent/issues/19243))
- **Container/VM isolation confusion**: Windows users expect native filesystem access; Linux container isolation breaks workflows ([#20436](https://github.com/NousResearch/hermes-agent/issues/20436))
- **Provider configuration ignored**: `OPENROUTER_API_KEY` env var overrides explicit config ([#5358](https://github.com/NousResearch/hermes-agent/issues/5358))
- **Mobile/Termux friction**: Multiple issues around filesystem interaction, install reliability ([#17009](https://github.com/NousResearch/hermes-agent/issues/17009), PR [#9846](https://github.com/NousResearch/hermes-agent/pull/9846))

### Satisfaction:
- **Profile system praised**: "Hermes v0.12.0 is incredible... profile system, autonomous curator, 18 messaging platforms" ([#20456](https://github.com/NousResearch/hermes-agent/issues/20456))
- **Extensibility valued**: Users building bypasses (fish.audio) rather than switching tools, indicating stickiness

### Use Case Evolution:
Users are deploying Hermes as **"multi-agent operating system"** for product-intelligence pipelines ([#18420](https://github.com/NousResearch/hermes-agent/issues/18420))—far beyond simple chatbot, demanding enterprise orchestration features.

---

## 8. Backlog Watch

### Long-unanswered items needing maintainer attention:

| Item | Age | Risk |
|:---|:---|:---|
| [#5358](https://github.com/NousResearch/hermes-agent/issues/5358) Gateway/CLI ignore `model.provider` config — fall back to OpenRouter | 30+ days | **Config system trust erosion**; fundamental behavior bug |
| [#8118](https://github.com/NousResearch/hermes-agent/issues/8118) WebUI Dashboard | 24+ days | Top-voted feature; competitor differentiator |
| [#15153](https://github.com/NousResearch/hermes-agent/issues/15153) Persistent canonical role sessions | 12+ days | Enterprise blocker; user explicitly building on Hermes |
| [#12201](https://github.com/NousResearch/hermes-agent/pull/12201) NEAR AI + Phala AI private inference | 18+ days | Security/privacy flagship; complex review likely |
| [#17416](https://github.com/NousResearch/hermes-agent/pull/17416) Hindsight circuit breaker | 7+ days | Memory system stability; daemon failure cascades |
| [#17962](https://github.com/NousResearch/hermes-agent/pull/17962) Reverse-shell approval patterns | 6+ days | Security hardening; explicit recommendation from #17873 |

**Recommendation**: The project would benefit from a **triage pass on P1 session-lifecycle bugs** and **clear roadmap communication** on WebUI dashboard timeline—this is the #1 user-visible gap versus competitors.

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-05/06. All links: https://github.com/NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-06

## 1. Today's Overview

PicoClaw shows **high development velocity** with 27 PRs and 17 issues updated in the last 24 hours, indicating an active pre-release stabilization period for the v0.2.8 cycle. The project released a new nightly build (`v0.2.8-nightly.20260505.57459574`) from the `main` branch, suggesting the team is converging toward a stable release. Community engagement is strong with multi-comment discussions on channel reliability, cron scheduling, and security sandboxing. However, the high open-to-closed ratio (13 open issues vs. 4 closed, 18 open PRs vs. 9 merged/closed) indicates a growing backlog that may need maintainer triage attention. A notable cluster of activity centers on Telegram channel robustness and multi-agent orchestration, reflecting production deployment pressures.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.8-nightly.20260505.57459574](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) | Nightly (automated) | Automated build from `main`; **may be unstable**. No manual changelog provided. Full diff: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**⚠️ Caution advised** — nightly builds lack stability guarantees. Users on production deployments should await the stable v0.2.8 release.

---

## 3. Project Progress

### Merged/Closed PRs (9 total, key items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | neotty | **fix: resolve cron task creation and execution failures** | Fixes critical cron reliability bug affecting scheduled agent tasks |
| [#2470](https://github.com/sipeed/picoclaw/pull/2470) | dsus4wang | Fix cron reminder phrasing + improve MCP tool visibility on long-running instances | UX improvement for persistent agent deployments |
| [#2372](https://github.com/sipeed/picoclaw/pull/2372) | SaiBalusu-usf | **fix(config,providers): resolve api_key, model lookup, and fallback bugs** | Resolves silent auth failures (401s), model resolution bugs #2371, #2286, #2334 |
| [#2370](https://github.com/sipeed/picoclaw/pull/2370) | diegofornalha | fix: tolerate whitespace in split marker from LLM output | Robustness fix for message parsing edge cases |
| [#2369](https://github.com/sipeed/picoclaw/pull/2369) | diegofornalha | feat: PicoWatch — trial monitoring menu bar app + WhatsApp status counter | **New ecosystem tool** for macOS monitoring of WhatsApp agents |
| [#2364](https://github.com/sipeed/picoclaw/pull/2364) | changeworldBT | fix: avoid restoring stale sessions with dangling tool calls | **Stability fix** prevents Telegram sessions stuck in typing/steering mode |
| [#2716](https://github.com/sipeed/picoclaw/pull/2716) | islobodan | fix(telegram): SVG files fail to send — inferMediaType maps image/svg+xml to SendPhoto | **Closed** — fixes Telegram media type pipeline for SVG delivery |

### Notable Open PRs Advancing

| PR | Author | Feature | Status |
|----|--------|---------|--------|
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | bogdanovich | **Gemini web search provider** for `web_search` tool | Under review |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | bogdanovich | **Provider-backed image generation tool** (disabled by default) | Under review |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | bogdanovich | `update_plan` tool port from OpenClaw | Under review |
| [#2762](https://github.com/sipeed/picoclaw/pull/2762) | afjcjsbx | **`/stop` command** for hard-aborting active agent tasks | Under review |
| [#2759](https://github.com/sipeed/picoclaw/pull/2759) | bogdanovich | Scope retrieval tools (`short_grep`, `short_expand`) to current session | Security/relevance fix |
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) | bogdanovich | OpenAI OAuth support for Codex + transcription | Auth infrastructure |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758) | bogdanovich | Telegram media group album handling | UX improvement |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|---------------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | **8** | Gateway startup abnormal (DingTalk channel) | **Production reliability** — users need stable gateway lifecycle management |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | **7** | Cron hourly tasks trigger channel errors | **Scheduling at scale** — recurring agent tasks are a core use case breaking under load |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | **6** | Streaming output for Web Chat | **Real-time UX** — modern chat expectations unmet by batch response model |
| [#2431](https://github.com/sipeed/picoclaw/issues/2431) | **4** | Tool execution failures should report which tool was blocked *(closed)* | **Observability** — safety guard transparency for debugging |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | **4** | Config option for streaming HTTP requests to LLM backend | **Performance/latency** — parity with standard OpenAI client behavior |

### Analysis

The **channel subsystem** (DingTalk, Telegram, cron-triggered messaging) emerges as the **highest-friction area**. Issues #2513 and #1757 both involve channel failures during core operations, suggesting architectural stress in the channel-gateway interaction. Streaming support (#1950, #2404) is a **recurring theme** indicating user expectations shaped by ChatGPT/Claude interfaces. The community is effectively voting with engagement for real-time responsiveness.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk Assessment |
|----------|-------|-------------|---------|-----------------|
| **🔴 HIGH** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | **Sandbox escape**: `find /` enumerates paths outside workspace despite safety guards | ❌ **No PR yet** | Critical security flaw — filesystem isolation bypassed |
| **🟡 MEDIUM** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway startup abnormal on DingTalk | ❌ Open, 8 comments | Blocks production deployments |
| **🟡 MEDIUM** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Cron hourly tasks cause channel errors | ✅ Partial — #2520 fixes cron creation/execution, but channel error persists | Degrades scheduled automation reliability |
| **🟡 MEDIUM** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | Multi-user group channels lack sender attribution in history | ❌ Open | Breaks multi-user accountability |
| **🟡 MEDIUM** | [#2694](https://github.com/sipeed/picoclaw/issues/2694) | Certificate verification failure (`x509`) in ADB shell on Android | ❌ Open | Blocks Android/embedded deployments |
| **🟢 LOW** | [#2726](https://github.com/sipeed/picoclaw/issues/2726) | `generateLeafSummary` token counting logic (验收标准) | ✅ **Closed** | Code correctness in compaction |
| **🟢 LOW** | [#2716](https://github.com/sipeed/picoclaw/issues/2716) | SVG delivery fails on Telegram | ✅ **Closed** — media type pipeline fix | Attachment delivery UX |

**Critical concern**: [#2688](https://github.com/sipeed/picoclaw/issues/2688) represents a **security regression** where the safety guard blocks `cat`/`ls` but not `find`, demonstrating incomplete sandbox coverage. This needs immediate maintainer attention before v0.2.8 stable.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Demand Signal | Likelihood in v0.2.8+ |
|---------|----------|-------------|----------------------|
| **Streaming output** (Web Chat + HTTP) | [#1950](https://github.com/sipeed/picoclaw/issues/1950), [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 6+ comments, aligns with roadmap checkbox | **High** — infrastructure PRs (#2757 OAuth streaming) suggest groundwork laid |
| **Mission Control integration** | [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Pain point for OpenClaw→PicoClaw migrators | Medium — requires architectural decision on launcher scope |
| **Context/memory management** (infinite context, cross-session memory) | [#2774](https://github.com/sipeed/picoclaw/issues/2774) | References external plugin (`magic-context`) | Medium — complex, may be post-v0.2.8 |
| **Image generation tool** | [#2760](https://github.com/sipeed/picoclaw/pull/2760) | PR under review, disabled by default | **High** — near completion |
| **Gemini web search provider** | [#2763](https://github.com/sipeed/picoclaw/pull/2763) | PR under review | **High** — provider expansion strategy |
| **`/stop` command** | [#2762](https://github.com/sipeed/picoclaw/pull/2762) | PR under review | **High** — operational necessity |
| **Session management commands** (`/status`, `/compact`, `/new`) | [#2491](https://github.com/sipeed/picoclaw/pull/2491) | Open PR since April 12 | Medium — needs maintainer review bandwidth |
| **Sub-agent role isolation** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) | Fresh issue (0 comments) — multi-agent architecture pain | Medium — design discussion needed |

**Prediction**: v0.2.8 stable will likely include streaming HTTP support, image generation, Gemini search, and `/stop` command. Mission Control and advanced memory management appear post-v0.2.8.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Channel reliability** | #2513 (gateway crash), #1757 (cron→channel errors), #2702 ( attribution loss), #2694 (Android TLS) | 🔴 Critical — affects core functionality |
| **Configuration drift** | #2771 (example config outdated, migration UX gaps), #2490 (onboarding advisory stale) | 🟡 Moderate — friction for new adopters |
| **Security gaps** | #2688 (sandbox escape) | 🔴 Critical — undermines trust |
| **Multi-agent confusion** | #2775 (sub-agents inherit root `AGENT.md`) | 🟡 Moderate — architecture scaling issue |
| **Documentation gaps** | #2695 (Android `libpicolaw.so` undocumented), #2646 (hardware testing unverified) | 🟢 Low — ecosystem maturity |

### Positive Signals

- **Hardware portability**: [#2646](https://github.com/sipeed/picoclaw/issues/2646) confirms successful launch on NXP i.MX93 EVK (ARM64), expanding embedded use cases
- **Ecosystem tools**: PicoWatch (#2369) shows community building monitoring infrastructure around PicoClaw
- **Active provider expansion**: Gemini, Codex, image generation — rapid LLM backend diversification

### Satisfaction/Dissatisfaction Balance

| Satisfied | Dissatisfied |
|-----------|--------------|
| Core agent loop functionality | Channel/gateway stability at scale |
| Provider flexibility | Configuration management UX |
| Embedded/ARM deployment capability | Security sandbox completeness |
| Community contribution velocity | Maintainer triage bandwidth (stale PRs/issues) |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, high impact)

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) Gateway startup abnormal | 3+ weeks, 8 comments | Production blocker | Root cause analysis, possibly gateway lifecycle refactor |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) Cron channel errors | 7+ weeks, 7 comments | Scheduling reliability | Verify if #2520 fully resolves; close or escalate |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) Streaming Web Chat | 6+ weeks, 6 comments, roadmap-aligned | Competitive parity | Assign owner, estimate effort |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) Streaming HTTP config | 4+ weeks, 4 comments | LLM backend performance | Coordinate with #1950, #2757 |
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) **Sandbox escape** | 1 week, 2 comments, **HIGH priority** | Security vulnerability | **Immediate triage** — expand safety guard to cover `find`, `locate`, other enumeration tools |

### PRs Stalled in Review

| PR | Age | Blocker |
|----|-----|---------|
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) Session management commands | 3+ weeks | Needs maintainer review (conflicts possible) |
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) Workspace embedding fix | 3+ weeks | Build system expertise needed |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) LINE SDK v8 refactor | 4+ weeks | Channel maintainer review, dependency audit |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) MCP dynamic headers | 1 week | New feature, needs security review |

---

**Overall Health Assessment**: 🟡 **Active but strained** — high contribution velocity with strong feature development, but growing triage debt on security (#2688) and channel stability (#2513, #1757) risks undermining release quality. Recommend maintainer focus on security fix and cron/channel hardening before v0.2.8 stable.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-06

## 1. Today's Overview

NanoClaw shows **intense development velocity** with 50 PRs updated in 24 hours (32 merged/closed, 18 open) and 9 active issues, indicating a mature project in active maintenance mode with no new releases. The day's work clusters heavily around **setup UX hardening** (back-navigation across all channel flows), **v1→v2 migration reliability** (three critical fixes), and **container/OneCLI infrastructure integrity**. The high merge rate (64%) suggests maintainers are aggressively clearing backlog, though 4 open issues with 2 high-priority bugs indicate unresolved stability risks around credential management and routing loops.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs Today (32 total; key items shown)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#2290](https://github.com/qwibitai/nanoclaw/pull/2290) | glifocat | Canonical SQL queries in `manage-channels` SKILL.md | Fixes agent query hallucinations |
| [#2288](https://github.com/qwibitai/nanoclaw/pull/2288) | glifocat | Parse SQLite timestamps as UTC, not local time | Eliminates timezone-dependent scheduling bugs |
| [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) | glifocat | Probe correct OneCLI health endpoint (`/api/health`) | Unblocks v2 migrations (was 100% broken) |
| [#2284](https://github.com/qwibitai/nanoclaw/pull/2284) | glifocat | Pin Baileys to `7.0.0-rc.9` in WhatsApp install scripts | Fixes v1→v2 migration TypeScript build failure |
| [#2249](https://github.com/qwibitai/nanoclaw/pull/2249) | alipgoldberg | Clearer "Open Telegram" card with mobile fallback | Reduces headless setup friction |
| [#2269](https://github.com/qwibitai/nanoclaw/pull/2269)–[#2274](https://github.com/qwibitai/nanoclaw/pull/2274) | alipgoldberg | **Stacked series**: `← Back` navigation for Discord, WhatsApp, iMessage, Telegram, Slack, Teams, Signal | Major UX overhaul; reduces setup abandonment |
| [#2275](https://github.com/qwibitai/nanoclaw/pull/2275) | alipgoldberg | WhatsApp link instructions updated for iOS "You" menu | Cross-platform copy accuracy |
| [#2281](https://github.com/qwibitai/nanoclaw/pull/2281) | alipgoldberg | Auto-install `signal-cli` when missing | Removes hard wall for non-technical users |
| [#2209](https://github.com/qwibitai/nanoclaw/pull/2209) | cfis | Orphan-claim delete regression fix from #2183 | Test coverage restoration |
| [#2282](https://github.com/qwibitai/nanoclaw/pull/2282) | taylorwalton | README provider mode documentation | Docs completeness |

**Key advancement**: The `← Back` navigation stack (#2269–#2274) represents the most significant UX investment this cycle, addressing a systemic setup flow trap that previously forced users to kill and restart installation.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) — Ollama MCP stdio server fails behind OneCLI gateway | 1 comment, 1 👍 | **Architectural tension**: OneCLI's TLS-intercepting proxy breaks MCP stdio-to-HTTP bridging when the LLM provider isn't Ollama itself. Underlying need: **credential injection must be transparent to protocol adapters**. Fix PR not yet linked. |
| [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) — `install_packages` approval triggers infinite a2a self-routing loop | 1 comment, 1 👍 | **Critical Telegram delivery blocker**. The fix was reportedly found (by Claude-assisted debugging, disclosed by author), but no PR linked. Underlying need: **a2a routing graph must detect and prevent self-edges**. |
| [#2292](https://github.com/qwibitai/nanoclaw/pull/2292) — `/convert-to-podman` skill (macOS) | Open, no comments | Container runtime diversification demand; follows Apple's containerization trend. |
| [#2291](https://github.com/qwibitai/nanoclaw/pull/2291) — Trust OneCLI gateway CA inside agent container | Open, no comments | **Infrastructure trust chain completion**; pairs with #1906's proxy issues. |

**Community signal**: Users are actively running complex multi-provider setups (Ollama + Anthropic + MiniMax) and hitting proxy-layer incompatibilities. The project needs explicit **gateway compatibility matrix** documentation.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|---|---|---|---|---|
| **High** | [#2285](https://github.com/qwibitai/nanoclaw/issues/2285) — `migrate-v2.sh` probes wrong OneCLI health endpoint | **CLOSED** | [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) | 100% false-negative on health check; caused redundant installs |
| **High** | [#2283](https://github.com/qwibitai/nanoclaw/issues/2283) — `migrate-v2.sh` fails on `2c-install-whatsapp` (Baileys pin) | **CLOSED** | [#2284](https://github.com/qwibitai/nanoclaw/pull/2284) | v1→v2 migration completely broken for WhatsApp users |
| **High** | [#2286](https://github.com/qwibitai/nanoclaw/issues/2286) — `onecli_app-data` wipe silently invalidates Postgres secrets | **OPEN** | **None** | **Data loss risk**: undocumented encryption keys and MITM CA destroyed on reinstall; no recovery path documented |
| **High** | [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) — Infinite a2a self-routing loop blocking Telegram | **OPEN** | **None (fix claimed, unmerged)** | Live production delivery failure |
| Medium | [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) — `send_card` MCP tool no-ops on Chat SDK channels | **CLOSED** | (implied in merge) | Silent failure pattern; no error propagation |
| Medium | [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) — Discord card duplication from pinned adapter version | **CLOSED** | (implied in merge) | Dependency version skew across skills |
| Low | [#2289](https://github.com/qwibitai/nanoclaw/issues/2289) — `manage-channels` SKILL.md schema mismatch | **CLOSED** | [#2290](https://github.com/qwibitai/nanoclaw/pull/2290) | Agent hallucinated column names |

**Stability assessment**: Migration path (v1→v2) was **critically broken** and is now repaired. However, **two high-severity open issues** represent active data loss (#2286) and live delivery failure (#2048) risks. The #2286 secrets invalidation issue is particularly concerning as it lacks both documentation and automated preservation.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Likelihood in Next Version |
|---|---|---|
| [#2292](https://github.com/qwibitai/nanoclaw/pull/2292) — Podman skill for macOS | Runtime portability | **High** — complements existing Apple Container skill; aligns with rootless container trend |
| [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) — `/add-ffmpeg` MCP server for media transformation | Media processing | **Medium-High** — MCP ecosystem expansion; fills gap in agent capabilities |
| [#2208](https://github.com/qwibitai/nanoclaw/pull/2208) — HTTP and SSE MCP server transports | Protocol expansion | **Medium** — foundational for cloud-hosted MCP servers; large surface area |
| [#2279](https://github.com/qwibitai/nanoclaw/issues/2279) — Scheduled IPC delivery tracking | Architectural scheduler | **Medium** — prevents duplicate delivery; needed for reliable scheduling |
| [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) — Rootless Podman host user mapping | Security/hardening | **Medium** — depends on #2292 adoption |

**Roadmap prediction**: The project is clearly investing in **container runtime diversification** (Docker → Podman → Apple Container) and **MCP ecosystem completeness**. The next release likely includes at minimum the Podman skill and ffmpeg MCP server, plus the HTTP/SSE transport foundation.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Profile |
|---|---|---|
| Setup trap: no way back from wrong channel selection | Recurring, multi-PR fix | All users, especially first-time |
| Migration failures (v1→v2) | 3 issues in 24h | Existing users upgrading |
| Headless/VM setup friction (Telegram card misleading) | 1 issue, 1 PR | DevOps/self-hosters |
| Cross-platform copy mismatches (WhatsApp iOS "You" vs "Settings") | 1 PR | Mobile-first users |
| Silent data loss (OneCLI secrets wipe) | 1 issue | All users reinstalling |

### Satisfaction Signals
- Aggressive maintainer response: 5/9 issues closed same-day
- Community contributions: alipgoldberg's stacked UX series shows deep user empathy
- Self-reported fixes: #2048 author invested significant debugging effort (with AI assistance), indicating retained engagement despite friction

### Dissatisfaction Signals
- **Undocumented destructive operations**: #2286 secrets wipe with no warning
- **AI-assisted debugging disclosure**: #2048 author's explicit "I did generate this explanation with Claude" suggests complexity barrier exceeding typical contributor comfort
- **Stacked PR necessity**: #2269–#2274 required complex dependency chaining, indicating architectural coupling that impedes incremental contribution

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) — Ollama MCP behind OneCLI | 15 days open | **Provider interoperability** | Link to #2291 (CA trust) or design gateway bypass for stdio servers |
| [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) — Infinite a2a loop | 9 days open, fix claimed | **Production delivery failure** | Author needs to submit PR or maintainers must extract fix from issue comments |
| [#2208](https://github.com/qwibitai/nanoclaw/pull/2208) — HTTP/SSE MCP transports | 2 days open | **Protocol expansion** | Review complexity; may need milestone assignment |
| [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) — Rootless Podman user mapping | 2 days open | **Security hardening** | Depends on #2292 merge decision |
| [#2184](https://github.com/qwibitai/nanoclaw/pull/2184) — Stale session retry | 3 days open | **UX polish** | Low risk, ready for merge |

**Critical maintainer attention**: #2048 has a claimed fix but no PR — this is a **process failure** where knowledge exists but isn't captured. #1906 and #2286 together suggest OneCLI gateway architecture needs systematic review for edge-case transparency.

---

*Digest generated from qwibitai/nanoclaw GitHub activity for 2026-05-05/06. Data reflects public repository state.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-06

## 1. Today's Overview

NullClaw shows **moderate development velocity** with 5 PRs and 1 issue active in the last 24 hours. The project is currently **fix-heavy**, with four open PRs addressing platform compatibility (Windows DNS, POSIX thread sleep), provider error handling, and one community hackathon contribution for data governance. No releases were cut, suggesting the team is accumulating fixes before a version bump. The closed PR (#889) indicates infrastructure migration to a dedicated build system (`nullbuilder`). Overall health appears **stable but Windows-bug-constrained** — the single open issue represents a critical platform-specific blocker with an active fix in flight.

---

## 2. Releases

**No new releases** (0).

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Significance |
|---|---|---|
| [#889](https://github.com/nullclaw/nullclaw/pull/889) | Move GitHub workflows to `nullbuilder` | **Infrastructure modernization** — CI/CD abstraction into dedicated build tooling, reduces maintenance surface |

### Active Development (Open PRs)

| PR | Area | Progress Signal |
|---|---|---|
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | Windows DNS resolution fix | **Critical fix ready for review** — directly addresses #890 |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | Provider error granularity | Improves observability for provider health probes |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | POSIX `nanosleep` for real thread suspension | Performance/reliability fix for managed runtime |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | Data Governance Layer (hackathon) | **New feature exploration** — community-driven, draft status |

---

## 4. Community Hot Topics

### Most Active: Windows DNS Resolution Failure ([#890](https://github.com/nullclaw/nullclaw/issues/890) / [#892](https://github.com/nullclaw/nullclaw/pull/892))

| Metric | Value |
|---|---|
| Issue comments | 1 |
| Linked fix PR | #892 (same author: `fatihaziz`) |
| Platform scope | Windows-specific |

**Underlying need**: NullClaw's custom DNS pre-resolution shim fails on Windows, breaking **all provider chat completions** regardless of whether literal IPs or hostnames are used. The bundled `curl.exe` works independently, indicating the bug is in NullClaw's networking compatibility layer (`src/compat/net`). This is a **"works on Linux, broken on Windows"** platform parity gap that blocks Windows adoption.

**Hackathon engagement**: [#885](https://github.com/nullclaw/nullclaw/pull/885) (Russian-language PR from "Безопасность бэкофиса (DS)" team) signals **enterprise interest in data governance** for NullClaw deployments — a feature vector not previously visible in the project's public roadmap.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| **🔴 Critical** | [#890](https://github.com/nullclaw/nullclaw/issues/890) | Windows: `HostResolutionFailed` blocks all agent provider HTTP calls | **Fix PR #892 open**, needs review/merge |
| 🟡 Medium | [#891](https://github.com/nullclaw/nullclaw/pull/891) | Provider health probes collapse curl transport errors into generic failures | Fix PR open |
| 🟡 Medium | [#878](https://github.com/nullclaw/nullclaw/pull/878) | `thread.sleep` uses cooperative yield instead of real OS suspension on POSIX | Fix PR open |

**Regression risk**: The Windows DNS bug (#890) appears to be a **recent regression or previously unreported blocker** — the fact that `curl.exe` works suggests the networking stack was partially validated but the custom shim was not. The rapid same-day PR (#892) from the issue reporter indicates either a known issue with a prepared fix or an active contributor with deep Windows networking context.

---

## 6. Feature Requests & Roadmap Signals

| Source | Feature | Likelihood in Next Version | Rationale |
|---|---|---|---|
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | **Data Governance Layer** | Low-Medium (as core) | Hackathon draft; requires significant review, but addresses enterprise compliance gap |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | Granular provider error taxonomy | **High** | Small, focused fix; improves operational debugging |
| [#878](https://github.com/nullclaw/nullclaw/pull/892) + [#892](https://github.com/nullclaw/nullclaw/pull/892) | Cross-platform networking/threading parity | **High** | Both fixes are targeted and unblock platform support |

**Predicted next version focus**: Stability and platform parity (Windows + POSIX), with possible enterprise governance features if [#885](https://github.com/nullclaw/nullclaw/pull/885) matures.

---

## 7. User Feedback Summary

### Explicit Pain Points

| User | Issue | Context |
|---|---|---|
| `fatihaziz` | Windows completely non-functional for agent workloads | Power user who debugged through gateway logs, verified `curl.exe` health, and root-caused to DNS shim — **high-signal technical user** |
| `vernonstinebaker` (2 PRs) | Subtle runtime correctness: error handling granularity, actual OS thread suspension | **Production reliability concerns** — these are "works most of the time but fails under load/edge cases" bugs |

### Satisfaction/Dissatisfaction

- **Dissatisfied**: Windows users currently **blocked entirely** from agent functionality
- **Satisfied**: Fast contributor response cycle — issue-to-PR same day for #890→#892
- **Emerging**: Enterprise/hackathon interest suggests **growing beyond hobbyist use cases**

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | 2 days (draft) | **Language barrier + scope uncertainty** | Maintainer review to determine if hackathon feature aligns with roadmap; currently in Russian with no translation |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | 6 days | **POSIX correctness at risk** | Review stalled; affects managed runtime thread behavior |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) governance layer | — | **Architectural review needed** | Large feature addition; needs design discussion before code review |

**Maintainer attention priority**:
1. **Merge #892** (Windows blocker, fix validated by reporter)
2. **Review #878** (aging POSIX fix, risk of bit-rot)
3. **Respond to #885** (community engagement, enterprise signal)

---

*Digest generated from github.com/nullclaw/nullclaw data for 2026-05-06.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-06

## 1. Today's Overview

IronClaw shows **intense development velocity** with 59 total items updated in 24 hours (16 issues, 43 PRs), dominated by the "Reborn" architectural migration and infrastructure hardening. The project is in a **major refactoring phase**: 23 PRs were merged/closed against 20 still open, with heavy activity from core maintainers (particularly serrrfirat and nickpismenkov) salvaging and consolidating work onto `main`. No new releases were cut, and crates.io remains stuck at v0.24.0 despite tags through v0.27.0, indicating release pipeline friction. The overwhelming focus on Reborn contracts, CI optimization, and documentation salvages suggests the team is **stabilizing substrate before a declared milestone**.

---

## 2. Releases

**None.** No new releases published. Notably, [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) flags that crates.io lags **three minor versions behind** GitHub tags (0.24.0 published vs. 0.27.0 tagged), blocking downstream consumers due to wasmtime 28.x CVEs.

---

## 3. Project Progress

### Merged/Closed PRs Today (23 total; highlights by significance)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3257](https://github.com/nearai/ironclaw/pull/3257) | serrrfirat | **Turn persistence contracts** — adds records for turns, runs, active locks, checkpoints, idempotency | Core Reborn substrate |
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | nickpismenkov | **Reborn memory substrate** (collapsed 7-PR stack) — native-isolated guardrails, `lib.rs` module split | Major Reborn memory architecture |
| [#3267](https://github.com/nearai/ironclaw/pull/3267) | serrrfirat | Salvaged E2E tests for Admin API + Responses API from stale #2174 | Test coverage recovery |
| [#3260](https://github.com/nearai/ironclaw/pull/3260) + [#3217](https://github.com/nearai/ironclaw/pull/3217) | serrrfirat / abbyshekit | Docker Hub image name fix: `nearai/ironclaw` → `nearaidev/ironclaw` | User-facing bugfix |
| [#3258](https://github.com/nearai/ironclaw/pull/3258) + [#2948](https://github.com/nearai/ironclaw/pull/2948) | serrrfirat / Kampouse | Database + Configuration docs promoted to live navigation | Documentation debt cleared |
| [#3265](https://github.com/nearai/ironclaw/pull/3265) + [#2901](https://github.com/nearai/ironclaw/pull/2901) | serrrfirat / tobias-nf | Linear skill credential injection fix (Bearer → raw header) | Integration fix |
| [#3271](https://github.com/nearai/ironclaw/pull/3271) | zetyquickly | Remove hardcoded URLs | Security hygiene |
| [#3270](https://github.com/nearai/ironclaw/pull/3270) | zetyquickly | Demo/Abound copy updates | Product polish |
| [#2174](https://github.com/nearai/ironclaw/pull/2174) | pranavraja99 | Original E2E tests (superseded by #3267) | — |

### Open PRs Advancing

- [#3243](https://github.com/nearai/ironclaw/pull/3243): Runtime policy substrate (PRs 1-7 of #3045) — **productionizes** model-facing tool visibility filters
- [#1378](https://github.com/nearai/ironclaw/pull/1378): Per-channel MCP/built-in tool filtering — multi-channel deployment scoping
- [#1764](https://github.com/nearai/ironclaw/pull/1764): Abound demo — Responses API, credential injection, skills, guardrails
- [#3099](https://github.com/nearai/ironclaw/pull/3099): Reborn transport adapter contract (noted as **stale/framed for replacement** by #3269)

---

## 4. Community Hot Topics

### Most Active Issues (by comment count + architectural centrality)

| Issue | Comments | Core Concern |
|:---|:---|:---|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) — AgentLoopHost facade | 4 | **Reborn cutover blocker**: reference facade for agent loop hosting |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) — TurnCoordinator | 4 | **Kernel turn coordination**: thread/turn admission, one-active-run enforcement |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) — Product surface migration [EPIC] | 3 | Master tracker for Reborn product-surface migration; rewritten 2026-05-01 as architecture evolved |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) — AgentLoopDriver contract | 2 | Run-class profile definitions |
| [#3093](https://github.com/nearai/ironclaw/issues/3093) — EventProjectionService | 2 | Higher-layer read-only event projections |

### Underlying Needs Analysis

The Reborn migration (#2987) represents a **fundamental architectural pivot**: replacing v1's channel-centric model with a layered host-kernel-execution substrate. The density of "cutover blocker" issues (#3013, #3016, #3107, #3193, #3198, #3199, #3202, #3204, #3236, #3264, #3266, #3269) reveals:

- **Coordination complexity**: Turn-based execution with strict admission, persistence, and idempotency guarantees
- **Adapter strategy uncertainty**: #3099 transport adapter now flagged for replacement (#3269)
- **Multi-tenancy requirements**: #3264 (turn admission policy) newly opened

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|:---|:---|:---|:---|
| **Medium** | [#3259](https://github.com/nearai/ironclaw/issues/3259) — crates.io 3 versions behind; CVE exposure via wasmtime 28.x | **Open, unassigned** | None |
| **Low** (resolved) | [#2963](https://github.com/nearai/ironclaw/issues/2963) — Docker Hub image missing | Closed | [#3217](https://github.com/nearai/ironclaw/pull/3217) → [#3260](https://github.com/nearai/ironclaw/pull/3260) |
| **Low** (resolved) | Linear skill silent auth failures (Bearer prefix) | Closed | [#2901](https://github.com/nearai/ironclaw/pull/2901) → [#3265](https://github.com/nearai/ironclaw/pull/3265) |
| **Medium** (mitigation in progress) | CI coverage blocked on `main` | Open | [#3268](https://github.com/nearai/ironclaw/pull/3268) |

**CI/Infra Stability**: Three coordinated PRs (#3261, #3262, #3263) restructure CI: nightly deep checks, slim merge queues, full browser E2E nightly. This suggests **merge queue pain** drove today's infrastructure focus.

---

## 6. Feature Requests & Roadmap Signals

### Explicitly Tracked (Reborn Architecture)

| Feature | Issue | Likelihood in Next Version |
|:---|:---|:---|
| TurnCoordinator kernel service | #3013 | **High** — cutover blocker, actively worked |
| AgentLoopHost facade | #3016 | **High** — cutover blocker |
| EventProjectionService | #3093 | Medium — dependency for higher layers |
| SessionThreadService | #3089 | Medium — unblocks #3013 |
| Conversation binding contracts | #3193 | High — #3013 dependency |
| Turn persistence schema | #3202 | **Landed** (#3257) |
| Multi-tenant turn admission | #3264 | New, likely v0.28+ |
| Outbound egress/subscription policy | #3266 | New, architectural foundation |

### Predicted Next Release (v0.28.0 or v0.27.1)

- **If crates.io unblocked**: Likely v0.27.1 with wasmtime bump
- **If Reborn cutover completes**: v0.28.0 with TurnCoordinator + AgentLoopHost + memory substrate

---

## 7. User Feedback Summary

### Pain Points

| Source | Issue | Severity |
|:---|:---|:---|
| magnusviri | Docker image `nearai/ironclaw` doesn't exist; docs wrong | **Onboarding friction** — fixed |
| dacoldest | Can't consume >0.24.0 from crates.io; CVE exposure | **Supply chain security** — **unresolved** |
| Kampouse | Database system completely undocumented despite being production-ready | **Documentation gap** — fixed via salvage |

### Use Case Signals

- **Multi-channel deployments**: #1378 (per-channel tool filtering), #3031 (product surface migration) indicate enterprise/team usage
- **Financial/Abound demo**: #1764 suggests vertical targeting (fintech/remittance)
- **Linear integration**: Skill credential fixes show active third-party tool usage

### Satisfaction Indicator

**Mixed**: Rapid salvage of community PRs (#2948, #3217, #2901, #2174) shows maintainer responsiveness, but the **need for salvage pattern** (4 PRs today) indicates original contributors are not staying engaged through merge, or `main` is moving too fast for external PRs to land cleanly.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#1378](https://github.com/nearai/ironclaw/pull/1378) Per-channel MCP/tool filtering | ~7 weeks | **High** — XL PR, merge conflicts likely | Review bandwidth; may need rebase/salvage |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo | ~5 weeks | Medium — XL, high risk label | Integration testing; possibly Reborn-alignment |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) Transport adapter contract | ~1 week | **Superseded** — #3269 opened to replace | Architectural decision: abandon or salvage? |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io publication | 1 day | **High** — security exposure | Release automation or manual publish |

---

**Project Health Assessment**: 🟡 **Transitioning**. High velocity, focused direction (Reborn), but accumulating technical debt in release pipeline and external contributor friction. Core team is effective at salvage but may be bottlenecked by architectural complexity. Watch for crates.io resolution and Reborn cutover declaration as health indicators.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-06

## 1. Today's Overview

LobsterAI shows **minimal but focused maintenance activity** on May 6, 2026, with three PRs updated in the past 24 hours and zero issue activity. The project appears to be in a **stable maintenance phase** rather than active feature development—no new releases, no open issues, and only one stale PR remaining open. The two closed PRs from maintainer `liuzhq1986` address Windows-specific skill management reliability and a minor skill version bump, suggesting the team is polishing edge cases in the skill ecosystem rather than pushing major architectural changes. Overall project health appears **stable but low-velocity**, with attention concentrated on Windows platform robustness.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (2)

| PR | Author | Focus | Key Changes |
|:---|:---|:---|:---|
| [#1882](https://github.com/netease-youdao/LobsterAI/pull/1882) | `liuzhq1986` | Skill version bump | Upgrades `youdaonote` skill to **v1.0.8** ([area: docs, area: skills]) |
| [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) | `liuzhq1986` | Windows skill reliability | Three-layer fix: post-install attribute normalization (`attrib -r -s -h`), enhanced permission-failure diagnostics (`EPERM/EACCES/EBUSY`), localized success feedback |

**Assessment:** PR #1881 represents meaningful **platform-specific hardening**—the Windows skill deletion path has clearly been a source of friction, with the fix addressing both technical root causes (file attribute handling) and user experience (clearer error communication). The `youdaonote` bump suggests ongoing maintenance of NetEase's first-party integrations.

---

## 4. Community Hot Topics

**No active community discussion detected** — zero open issues, zero comments on PRs, zero reactions.

| Item | Status | Engagement | Analysis |
|:---|:---|:---|:---|
| [#808](https://github.com/netease-youdao/LobsterAI/pull/808) | **OPEN, stale** | 0 👍, undefined comments | **Critical crash fix languishing** — addresses Electron main process crash when renderer destroyed during streaming AI response. Created March 25, last updated May 5. No maintainer response visible. |

**Underlying need:** PR #808 reveals a **severe reliability gap**—users losing entire unsaved sessions due to window-close during streaming is a fundamental UX failure for an AI assistant. The lack of engagement suggests either: (a) maintainer bandwidth constraints, (b) complexity in Electron process-handling review, or (c) prioritization misalignment. Community would benefit from maintainer acknowledgment.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#808](https://github.com/netease-youdao/LobsterAI/pull/808) | **Main process crash on window close during streaming** — complete session data loss | **Fix proposed, unmerged** (stale since March 25) |
| 🟡 Medium | — | Windows skill deletion failures (permission-related) | **Fixed in [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881)** |

**Stability assessment:** The unmerged crash fix represents the project's **most significant open risk**. The Windows fixes in #1881 suggest proactive attention to platform-specific edge cases, but the core streaming architecture vulnerability remains unaddressed.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** detected in today's data.

**Inferred signals from merged work:**
- **Skill ecosystem maturation**: Version bumps and install/delete reliability work suggest focus on making third-party/first-party skills production-ready
- **Windows as priority platform**: Dedicated engineering for Windows file system behavior implies significant Windows user base or deployment target

**Predicted near-term work:**
- Additional skill version bumps (pattern established)
- Possible Electron process hardening if #808 gains traction
- More platform-specific reliability patches

---

## 7. User Feedback Summary

**No direct user feedback** in issues or PR comments today.

**Inferred pain points from code changes:**

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| Session loss on unexpected close | [#808](https://github.com/netease-youdao/LobsterAI/pull/808) | Critical |
| Windows skill management friction | [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) | Moderate (intermittent) |
| Opaque failure messages | [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) localization additions | Low (improving) |

**Use case signal:** The `youdaonote` skill maintenance indicates continued investment in **note-taking/ knowledge management integration**—core to LobsterAI's positioning as a personal AI assistant.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#808](https://github.com/netease-youdao/LobsterAI/pull/808) | **42 days** (since March 25) | **High** — crash fix with data loss impact; contributor may abandon | Maintainer review/merge or explicit feedback to contributor |
| — | — | — | No other stale items detected |

**Recommendation:** PR #808 requires **urgent maintainer attention**. The fix addresses a class of crashes that directly undermines user trust in LobsterAI as a reliable assistant. Stale status risks contributor disengagement and leaves users exposed to known data loss.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-05-06.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-06

## 1. Today's Overview

Moltis exhibited **minimal development activity** over the past 24 hours, with only a single automated dependency update PR from Dependabot and zero human-driven contributions. The project shows no open issues, no active community discussions, and no releases, suggesting either a mature/stable codebase in maintenance mode or a lull in development cycles. The sole activity—a routine `gix` version bump—indicates ongoing security/maintenance hygiene but no feature advancement. Overall project health appears **stable but stagnant** with low community engagement.

---

## 2. Releases

**No new releases** published today. The project has no recent release history available in the provided data.

---

## 3. Project Progress

**No merged or closed PRs today.**

| PR | Status | Impact |
|---|---|---|
| [#967](https://github.com/moltis-org/moltis/pull/967) | Open (automated) | Dependency maintenance only — bumps `gix` 0.78.0 → 0.83.0 |

No features advanced or were fixed. The open Dependabot PR awaits maintainer review/merge.

---

## 4. Community Hot Topics

**No active community discussions today.**

| Item | Comments | Reactions | Analysis |
|---|---|---|---|
| *None* | — | — | — |

With zero issues and zero human-submitted PRs, there are no discernible community-driven hot topics. The sole PR (#967) is machine-generated with no engagement. This absence of discourse may indicate: (a) satisfied users with few problems, (b) low adoption/usage, or (c) community discussion happening outside GitHub (Discord, forums, etc.).

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.**

The `gix` dependency bump (0.78.0 → 0.83.0) in PR [#967](https://github.com/moltis-org/moltis/pull/967) is a **patch-level maintenance update** that may contain upstream bug fixes. Notably, `gix` 0.83.0 represents a **five-minor-version jump** (0.78 → 0.83), which could introduce breaking changes in Git operations. Risk assessment:

| Severity | Item | Fix Status |
|---|---|---|
| Low (potential) | `gix` API compatibility in Moltis Git integration | Pending review in #967 |

---

## 6. Feature Requests & Roadmap Signals

**No feature requests or roadmap indicators today.**

With zero issues and no discussion, no signals emerge about desired features. The dependency on `gix` (a Rust Git implementation) suggests Moltis likely performs Git operations; potential future directions might include:
- Enhanced Git workflow automation
- Performance optimizations in repository handling
- Expanded version control integrations

No evidence supports these predictions from current data.

---

## 7. User Feedback Summary

**No direct user feedback captured today.**

Absence of issues/PRs precludes analysis of pain points or satisfaction. Stakeholders should monitor whether this silence indicates:
- **Positive**: Stable, well-documented tool meeting user needs
- **Negative**: Limited user base or alternative support channels

---

## 8. Backlog Watch

**No aging items requiring attention.**

Current open items:
| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#967](https://github.com/moltis-org/moltis/pull/967) | 1 day | Low | Routine maintainer review/merge of Dependabot PR |

No critical backlog accumulation detected. However, sustained pattern of zero human activity may warrant project health monitoring.

---

*Digest generated from github.com/moltis-org/moltis data for 2026-05-06.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-06

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community velocity** with 20 items updated in the last 24 hours (10 issues, 10 PRs), though **merge throughput remains low** with only 1 of 10 PRs merged/closed. The project is actively accumulating contributions from first-time contributors (6 of 10 open PRs), indicating growing community interest, but reviewer bandwidth appears constrained. The v1.1.5 release is experiencing **stability regressions** in network recovery and channel connectivity, while long-standing feature requests for multi-agent team collaboration and UI customization remain unresolved. No new releases were published today.

---

## 2. Releases

**No new releases** (v1.1.5.post1 remains latest).

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Description | Link |
|---------|-------------|------|
| PR #3829 | **feat(chat): Async LLM-generated session titles** — Replaces "first 10 chars" placeholder with model-generated titles; creates placeholder synchronously then updates async to avoid UI blocking | [agentscope-ai/QwenPaw#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) |
| Issue #3401 | **Closed** — OpenCode free model connection anomaly (configuration/URL issue with `https://opencode.ai/zen/v1`) | [agentscope-ai/QwenPaw#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) |
| Issue #2553 | **Closed** — Model list ordering and session title generation optimization (partially addressed by PR #3829) | [agentscope-ai/QwenPaw#2553](https://github.com/agentscope-ai/QwenPaw/issues/2553) |
| Issue #3751 | **Closed** — Windows system tray feature request (superseded by new PR #4041) | [agentscope-ai/QwenPaw#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) |
| Issue #1798 | **Closed** — Discord multi-channel parallel task processing optimization | [agentscope-ai/QwenPaw#1798](https://github.com/agentscope-ai/QwenPaw/issues/1798) |

**Key advancement:** Session title UX finally improved after ~5 weeks in review. Windows system tray implementation is being actively picked up by new contributor.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | **Issue #3224** — CoPaw Agent Teams: Natural-language-driven self-evolving multi-agent collaboration teams | 5 comments | [agentscope-ai/QwenPaw#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) |
| | *Author: watsonagenda* | | **Core strategic request**: Users want "automatic transmission" for multi-agent teams vs. current "manual transmission." Identified gap: manual workspace creation, static role assignment, no self-optimization. Proposes natural language team specification, evolutionary role refinement, and collective memory. This aligns with CoPaw's AgentScope foundation but requires significant architecture. |
| 2 | **Issue #2865** — Custom agent names/avatars in chat dialog | 3 comments | [agentscope-ai/QwenPaw#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) |
| | *Author: Ryoui* | | Identity personalization demand; affects both backend and Console. Low complexity, high user value — good candidate for quick win. |
| 3 | **Issue #4017** — HEARTBEAT.md breaks network auto-reconnection | 3 comments | [agentscope-ai/QwenPaw#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) |
| | *Author: gooqhy* | | **Critical reliability regression** in v1.1.5. Default feature (HEARTBEAT.md) causes permanent channel disconnect on network blips. No fix PR yet. |

**Underlying needs signal:** Community is pushing toward (a) **autonomous multi-agent orchestration** beyond isolated workspaces, and (b) **production-grade reliability** for long-running deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | **HEARTBEAT.md causes unrecoverable channel disconnect** — Network interruption + recovery requires manual restart; affects default configuration | **None** |
| **P0** | [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) | **Windows: Skills fail to auto-register after `npx skills add`** — Skills invisible in `skill.json` and skill pool | **None** |
| **P0** | [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) | **Windows startup performance severely degraded** | **None** |
| **P1** | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | **DingTalk final result notification fails** — Event loop lifecycle race condition in stream mode with TaskTracker | **None** |
| **P1** | [#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040) | **AnthropicChatModel hardcodes `max_tokens=2048`** — Truncates responses for all Anthropic-compatible providers (Mimo, Minimax, etc.) even with 128K models | **None** |
| **P1** | [#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) | OpenCode free model connection failure *(closed, likely config issue)* | N/A |

**Stability assessment:** v1.1.5 has **multiple unpatched regressions**. The HEARTBEAT.md issue is particularly concerning as it's a default-enabled feature that breaks core reliability. No fix PRs exist for any open P0/P1 bugs.

**Related PRs in flight:**
- PR #4039: Telegram network retry improvements (may share patterns needed for #4017)
- PR #4028: Chat stop mismatch fix (stability-related)

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|---------|----------|---------------------------|-----------|
| **Windows System Tray** | PR #4041 | **High** | Direct implementation of closed #3751; first-time contributor, win32-only scope, independent entry point |
| **Brazilian Portuguese i18n** | PR #4009 | **Medium-High** | Complete localization PR, under review, non-breaking |
| **Semantic Skill Routing** | PR #3117 | **Medium** | Embedding-based skill filtering; needs discussion, performance implications |
| **Async Session Titles** | PR #3829 | **Shipped** | Already merged |
| **Custom Agent Names/Avatars** | Issue #2865 | **Medium** | Clear scope, dual backend+frontend touch, 3 weeks old |
| **CoPaw Agent Teams** | Issue #3224 | **Low-Medium** | Architectural, 26 days old, needs design buy-in; may spawn sub-PRs |
| **Windows Environment Diagnostics** | PR #4032 | **Medium** | Read-only `qwenpaw doctor` enhancement, low risk |

**Predicted v1.1.6 or v1.2.0 focus:** Reliability patches (HEARTBEAT, Windows startup), i18n expansion, desktop UX polish (tray, diagnostics). Agent Teams likely v1.3+ or separate experimental branch.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows as second-class citizen** | Slow startup (#4043), missing system tray (#3751→#4041), no diagnostics (#4032), skill registration broken (#4043) | High |
| **Network resilience gaps** | HEARTBEAT.md breaks reconnection (#4017), Telegram needs explicit retry (#4039), DingTalk race condition (#4042) | High |
| **Provider compatibility friction** | Anthropic-compatible providers truncated (#4040), OpenCode config issues (#3401) | Medium |
| **Skill ecosystem immaturity** | Auto-registration failures, semantic routing needed for scale (#3117) | Medium |

### Use Cases Emerging
- **Long-running autonomous agents** (system tray, background operation)
- **Multi-channel business operations** (Discord parallel tasks, DingTalk enterprise integration)
- **Team/enterprise multi-agent deployment** (Agent Teams request)

### Satisfaction Signals
- Strong contributor growth (6 first-time PRs in 24h)
- Detailed, structured feature proposals (Agent Teams)
- Active i18n community (pt-BR)

### Dissatisfaction Signals
- "Multiple critical issues affecting Windows users" — direct quote from #4043
- 9 open PRs vs. 1 merged suggests **review bottleneck**
- Default features causing regressions (HEARTBEAT.md)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **Issue #3224** — Agent Teams | 26 days | High interest, architectural scope | Maintainer design response; consider RFC or milestone assignment |
| **PR #3117** — Semantic Skill Routing | 28 days | "Needs discussions" label | Core maintainer review for embedding strategy; token cost implications |
| **Issue #2865** — Custom Names/Avatars | 33 days | UI/UX debt | Straightforward; assign or mark "good first issue" |
| **PR #4009** — pt-BR i18n | 4 days | Under review | Likely near merge; verify translation completeness |
| **PR #4032** — Windows Diagnostics | 2 days | Under review | Low risk; fast-track for Windows reliability theme |

**Maintainer attention priority:** 
1. **Triage P0 bugs** (#4017, #4043) — no assignees visible
2. **Unblock PR review pipeline** — 9 open PRs risk contributor churn
3. **Respond to Agent Teams** (#3224) — highest-engagement feature request, strategic direction

---

*Digest generated from GitHub activity 2026-05-05 to 2026-05-06. Project: agentscope-ai/QwenPaw (CoPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-06

**Repository:** [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
**Period:** 2026-05-05 to 2026-05-06

---

## 1. Today's Overview

ZeptoClaw showed **automated maintenance activity only** with zero human-driven contributions. All 11 pull requests opened in the last 24 hours originated from Dependabot, covering dependency updates across Rust, JavaScript, and GitHub Actions ecosystems. No issues were created, updated, or closed, and no releases were published. The project appears to be in a **stable maintenance phase** with active automated dependency management but no visible feature development or community engagement. The high volume of dependency PRs (11 in one day) suggests either a backlog in automated updates or a recent configuration change to Dependabot's scheduling. All PRs remain unreviewed and unmerged, indicating potential maintainer bandwidth constraints.

---

## 2. Releases

**No new releases.** The project has no published releases in the tracked period.

---

## 3. Project Progress

**No merged or closed PRs today.** All 11 PRs remain open with zero merged or closed items.

| Category | Count | Details |
|----------|-------|---------|
| Dependency updates (Rust) | 5 | tokio, axum, rustls, libc, rustyline |
| Dependency updates (JavaScript) | 4 | astro (×2), @astrojs/starlight (×2) |
| Dependency updates (Dev/Tooling) | 2 | globals, taiki-e/install-action |

**No feature advancement or bug fixes** were delivered to `main` during this period.

---

## 4. Community Hot Topics

**No community activity detected.** All PRs are automated with:
- **0 comments** across all items
- **0 reactions/thumbs up** across all items
- **0 human authors**

| PR | Topic | Link |
|----|-------|------|
| #573 | tokio 1.51.1 → 1.52.1 (async runtime) | [PR #573](https://github.com/qhkm/zeptoclaw/pull/573) |
| #575 | axum 0.8.8 → 0.8.9 (web framework) | [PR #575](https://github.com/qhkm/zeptoclaw/pull/575) |
| #579 | rustls 0.23.37 → 0.23.39 (TLS) | [PR #579](https://github.com/qhkm/zeptoclaw/pull/579) |

**Underlying need:** The concentration of core Rust infrastructure updates (tokio, axum, rustls) suggests the project relies on modern async Rust patterns for its backend. The duplicate astro/starlight updates across `/landing/zeptoclaw/docs` and `/landing/r8r/docs` indicate **multiple documentation sites** requiring synchronized maintenance—possible technical debt in dependency management structure.

---

## 5. Bugs & Stability

**No bug reports, crashes, or regressions identified today.**

| Severity | Count | Notes |
|----------|-------|-------|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

**Stability assessment:** The dependency updates themselves carry potential risk:
- **rustyline 17→18** ([PR #581](https://github.com/qhkm/zeptoclaw/pull/581)): Major version bump—may contain breaking API changes for CLI functionality
- **rustls 0.23.37→0.23.39** ([PR #579](https://github.com/qhkm/zeptoclaw/pull/579)): TLS library—security-sensitive, should be prioritized for review
- **tokio 1.51.1→1.52.1** ([PR #573](https://github.com/qhkm/zeptoclaw/pull/573)): Async runtime—broad impact if issues exist

**No fix PRs exist** for any reported issues (none reported).

---

## 6. Feature Requests & Roadmap Signals

**No feature requests or roadmap discussions detected.**

**Inferred signals from dependency patterns:**

| Signal | Evidence | Likely Priority |
|--------|----------|---------------|
| Documentation platform investment | Dual Astro/Starlight sites (`zeptoclaw`, `r8r`) | Medium |
| CLI interface maintenance | rustyline dependency | Medium |
| Web API/server capability | axum + tokio + rustls stack | High (core architecture) |
| Developer experience | taiki-e/install-action for CI | Low |

**Prediction:** The `r8r` landing site (PRs #572, #576) suggests a **secondary product or sub-project** in development. If `r8r` is a new component, expect documentation and release infrastructure work to precede feature announcements.

---

## 7. User Feedback Summary

**No direct user feedback captured** (0 issues, 0 human PRs, 0 comments).

**Indirect indicators:**

| Indicator | Observation | Interpretation |
|-----------|-------------|--------------|
| Issue backlog | 0 open issues | Either excellent maintenance or low adoption/visibility |
| PR merge velocity | 0/11 merged | Potential maintainer unavailability or cautious review practices |
| Dependabot noise | 11 PRs/day | May indicate users/maintainers are desensitized to update notifications |

**Pain point hypothesis:** If maintainers are not merging dependency updates promptly, the project may accumulate security debt or compatibility issues that could frustrate contributors attempting to build from source.

---

## 8. Backlog Watch

**Critical observation: 100% of today's PRs require maintainer attention.**

| PR | Age | Risk if Stale | Link |
|----|-----|---------------|------|
| #579 rustls update | 1 day | Security exposure in TLS handling | [PR #579](https://github.com/qhkm/zeptoclaw/pull/579) |
| #581 rustyline major bump | 1 day | CLI breakage on next build | [PR #581](https://github.com/qhkm/zeptoclaw/pull/581) |
| #573 tokio update | 1 day | Runtime compatibility | [PR #573](https://github.com/qhkm/zeptoclaw/pull/573) |

**Long-term backlog:** Unable to assess—no historical issue/PR data provided. Recommend monitoring for PRs open >7 days.

**Suggested maintainer action:** Batch-merge low-risk patch updates (astro, starlight, globals, taiki-e) and prioritize review of rustls + tokio + rustyline for security and stability.

---

## Project Health Summary

| Metric | Status |
|--------|--------|
| Automated maintenance | ✅ Active (Dependabot) |
| Human contribution | ⚠️ None detected |
| Issue response | ⚠️ No issues to respond to |
| Merge velocity | ❌ 0% (11 pending) |
| Security posture | ⚠️ TLS update unreviewed |

**Overall:** ZeptoClaw appears **structurally maintained but human-attention starved**. The dependency automation is healthy, but the absence of merged PRs, issues, or community interaction suggests either a pre-release stealth phase, maintainer bandwidth constraints, or limited project adoption. The `r8r` documentation site warrants monitoring as a potential expansion signal.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-06

## 1. Today's Overview

ZeroClaw shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though only 4 issues closed and 12 PRs merged/closed—suggesting a backlog building faster than resolution. No new releases were cut today, with v0.7.5 still in milestone tracking. The project is actively pushing toward v0.8.0 with a large integration branch (`integration/v0.8.0`) receiving major refactors. Community engagement is strong with detailed bug reports and feature requests, but maintainer bandwidth appears strained with 38 open PRs and multiple items tagged `needs-maintainer-review`.

---

## 2. Releases

**No new releases today.** The v0.7.5 release remains in milestone tracking via [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878), focused on release automation. The next major version v0.8.0 is accumulating changes in an integration branch, with at least one large PR ([#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403)) explicitly marked **"DO NOT MERGE TO MASTER YET."**

---

## 3. Project Progress

### Closed PRs Today

| PR | Description | Significance |
|---|---|---|
| [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | **feat(agent,config): activate HMAC tool receipts** — restored wiring stripped from #5168 | Security feature finally shipped after crypto core landed without runtime integration |
| [#6412](https://github.com/zeroclaw-labs/zeroclaw/pull/6412) | **fix(ci): re-introduce post-release CHANGELOG-next.md cleanup** | Fixes branch protection regression (GH006) that broke automated cleanup |

### Notable Open PRs Advancing

| PR | Description | Status |
|---|---|---|
| [#6411](https://github.com/zeroclaw-labs/zeroclaw/pull/6411) | **ci(release): restore MUSL static binaries for Linux** | Restores cross-compilation targets deleted during CI migration |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | **feat(config,providers): typed-family split for model + TTS providers** | Major v0.8.0 refactor—typed provider families, closes #6273 |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | **feat(gateway,web): nodes dashboard + device identification** | Fleet management UI—live health, metadata, token rotation |
| [#6387](https://github.com/zeroclaw-labs/zeroclaw/pull/6387) | **feat(gateway/ws): tool-approval back-channel** | Fixes auto-deny bug for supervised tools via WebSocket |
| [#6384](https://github.com/zeroclaw-labs/zeroclaw/pull/6384) | **fix(runtime, channels): unify session backend** | Critical fix: JSONL vs SQLite session store split made sessions invisible |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | **fix(matrix): avoid duplicate inbound replies** | Memory leak in Matrix event handlers on supervisor restart |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | Analysis |
|---|---:|---|---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | **[Bug]: default_model issue on fresh install** | 17 | **Onboarding friction is the #1 user blocker.** Fresh installs fail with provider config resolution—suggests config schema validation or defaults are broken for new users |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | **[Feature]: A better LOGO of Zeroclaw** | 9 | Long-running community design effort; low priority but sustained engagement shows brand investment |
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | **release: v0.7.5 milestone tracking** | 6 | Release automation as project theme—meta-signal about operational maturity |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | **bug(memory): autosaved Conversation memories invisible** | 6 | **Closed** — session_id mismatch between store/recall paths fixed |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | **gateway-chat succeeds but /api/cost stays zero** | 3 | Observability gap: success metrics don't capture cost/usage—operators flying blind on spend |

### Underlying Needs
- **Onboarding reliability**: Multiple S1 bugs trace to first-run experience (#6123, #6120, #6377)
- **Operational visibility**: Cost tracking, health monitoring, and logging are incomplete
- **Channel parity**: Discord/Telegram/WhatsApp features diverge; users want consistent controls

---

## 5. Bugs & Stability

### S1 — Workflow Blocked (Critical)

| Issue | Component | Fix PR? | Description |
|---|---|---|---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | Provider/Onboard | No | `default_model` resolution fails on fresh install |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp | No | **Protocol break**: WhatsApp Web silent after April 2026 server bump—upstream `wa-rs` dependency likely needs update |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | Provider (MiniMax) | No | `context_compression` drops tool messages, causes invalid role errors |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboard (OpenAI) | No | Codex selection prompts for wrong API key type |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | Provider (Custom) | No | Local image paths sent instead of data URLs—multimodal broken on remote providers |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | Provider (Llama.cpp) | No | Defaults to wrong endpoint mode, 500s on tool usage |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker/Gateway | No | Bind mount shadows pre-built web dashboard |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | CLI (bash) | No | **Infinite recursion in tab completion** — crashes SSH sessions |

### S2 — Degraded Behavior

| Issue | Component | Fix PR? | Description |
|---|---|---|---|
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Telegram | No | Prompt caching fails (works in CLI) |
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | WhatsApp | No | **Self-chat mode replies to operator's contacts** — privacy/data leak risk |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp | No | `allowed-numbers` bypassed for LID-based contacts—silent drops |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | Gateway/Observability | No | Cost/usage artifacts not written despite successful chat |

### Regressions
- **WhatsApp channel severely degraded**: Two S2 security issues + one S1 protocol break suggest the channel is effectively unmaintained against upstream changes
- **Bash completion**: New regression (#6402) with crash potential

---

## 6. Feature Requests & Roadmap Signals

### Likely v0.8.0 (Integration Branch Active)

| Feature | Issue/PR | Signal Strength |
|---|---|---|
| Typed provider families (model + TTS split) | [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | **Confirmed** — targets integration branch |
| V3 env-var override mechanism | [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | High — replaces removed V1/V2 path |
| Nodes dashboard / fleet management | [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392), [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | High — PR open, issue accepted |

### Likely v0.7.5 or Near-Term

| Feature | Issue/PR | Signal Strength |
|---|---|---|
| Release automation / CHANGELOG cleanup | [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878), [#6412](https://github.com/zeroclaw-labs/zeroclaw/pull/6412) | **In progress** |
| MUSL static binaries restored | [#6411](https://github.com/zeroclaw-labs/zeroclaw/pull/6411) | High — CI fix |
| Per-channel reply throttling | [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345), [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) | Medium — Telegram PR open, general issue accepted |

### User-Requested (Unscheduled)

| Feature | Issue | Need |
|---|---|---|
| Discord `allowed_channels` | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Parity with Matrix/Nextcloud Talk |
| Desktop menu-bar parity | [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327), [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329), [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | macOS universal binary, tray controls, channels overview |
| Provider-scoped cost config | [#6251](https://github.com/zeroclaw-labs/zeroclaw/issues/6251) | Multi-provider cost differentiation |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Onboarding breaks for new users** | #6123, #6120, #6377, #6393 (docs wrong) | Critical — churn risk |
| **WhatsApp channel unreliable** | #6246, #6350, #6351 | Critical — production unusable |
| **Cost/usage observability missing** | #6001, #6251 | High — operational requirement |
| **Docker deployment friction** | #6400, #6393 | Medium — container story incomplete |
| **Desktop app immature** | #6327-#6329, #6339, #6349 | Medium — behind web dashboard |

### Use Cases Emerging
- **Raspberry Pi/ARM edge deployment**: Multiple users (#6378, #6399) running on Pi 4B with remote GPU inference
- **Personal-account automation**: WhatsApp "self-chat mode" and reply throttling suggest users want agent-assisted personal messaging without spam risk
- **Multi-provider cost optimization**: Users running same models across providers with different pricing

### Satisfaction Signals
- Strong community engagement (detailed repros, screenshots, proposed solutions)
- Active contribution (logo design, PR title enforcement, docs fixes)
- Users investing in brand (#4710) and operational tooling

---

## 8. Backlog Watch

### Needs Maintainer Review (Tagged + High Value)

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — default_model fresh install | 10 days | S1 | **Triage priority** — blocks all new users |
| [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) — PR title check action | 1 day | Low | Process enforcement; PR #6396 ready |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) — Telegram prompt caching | 1 day | S2 | Cross-channel parity issue |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) — Real heartbeat tracking | 1 day | High | Blocked; needs architectural decision |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) — Reply throttling | 2 days | High | PR #6389 for Telegram only; generalize? |
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) — WhatsApp self-chat leak | 2 days | S2 | **Security review required** |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp allowed-numbers bypass | 2 days | S2 | **Security review required** |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) — context_compression tool drop | 1 day | S1 | Provider compatibility break |

### Stalled / Blocked

| Item | Blocker | Duration |
|---|---|---|
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) — Heartbeat tracking | `status:blocked` — awaits fleet-add CLI | New |
| [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) — Desktop tool_call parity | Blocked on #6348 (web fix) | 2 days |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) — V3 env overrides | Replaces removed V1/V2; needs design | 1 day |

---

## Project Health Assessment

| Dimension | Score | Note |
|---|---|---|
| **Velocity** | ⭐⭐⭐⭐☆ | High PR/issue throughput, but resolution rate lagging |
| **Stability** | ⭐⭐⭐☆☆ | Multiple S1/S2 in production paths; WhatsApp channel critical |
| **Community** | ⭐⭐⭐⭐⭐ | Excellent bug reports, design contributions, operational feedback |
| **Maintainership** | ⭐⭐⭐☆☆ | Backlog building; 38 open PRs; security issues need faster triage |
| **Release Discipline** | ⭐⭐⭐⭐☆ | v0.7.5 automation focus good; v0.8.0 branch management disciplined |

**Key Risk**: Onboarding and WhatsApp channel reliability are causing user attrition. The 17-comment #6123 and protocol-break #6246 need urgent owner assignment.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*