# OpenClaw Ecosystem Digest 2026-04-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-26 00:15 UTC

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

# OpenClaw Project Digest — 2026-04-26

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours, yielding an 86% closure rate on issues (430/500) and 83.4% on PRs (417/500). The project released **v2026.4.24** with 5 beta precursors, indicating an accelerated release cadence with notable quality control gaps—multiple post-release patches were required for Windows runtime dependencies and bundled plugin staging. Community engagement is robust with deeply technical bug reports, though the volume of regressions and duplicate-injection bugs suggests architectural strain in the message routing and session management layers.

---

## 2. Releases

### v2026.4.24 (Stable)
- **Google Meet bundled participant plugin**: Full integration with personal Google auth, Chrome/Twilio realtime sessions, paired-node Chrome support, artifact/attendance exports, and recovery tooling for already-open Meet tabs
- **DeepSeek V4 Flash and V4 Pro**: Model support added (note: release notes appear truncated in source)

### v2026.4.24-beta.5 through beta.1
Iterative beta cycle with identical feature highlights; **beta.2** contained critical fixes:
- **Windows runtime mirror fix**: Resolved `ERR_UNSUPPORTED_ESM_URL_SCHEME` and shared package-root dependency resolution during npm updates for copied-runtime installs
- **Compatibility guard**: Disabled future bundled plugins on older hosts during updater step from 2026.4.23

**Migration Note**: Windows users on 2026.4.24 may still need to disable native Jiti per [#71749](https://github.com/openclaw/openclaw/issues/71749).

---

## 3. Project Progress

### Merged/Closed PRs (Selected High-Impact)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#52590](https://github.com/openclaw/openclaw/pull/52590) | QuinnH496 | Fix duplicate tool registration in Feishu plugin | Reduces plugin load overhead, prevents tool collision |
| [#48819](https://github.com/openclaw/openclaw/pull/48819) | yydonk | Suppress false-positive duplicate plugin warnings for npm installs | Cleaner startup logs, reduced user confusion |
| [#64124](https://github.com/openclaw/openclaw/pull/64124) | ly85206559 | Distinguish ENOENT from path-escape in boundary-file-read | Better diagnostics for missing plugin files |
| [#64403](https://github.com/openclaw/openclaw/pull/64403) | ly85206559 | Prefer CLI metadata for lazy primary commands | Faster `openclaw memory --help` and similar commands |
| [#66627](https://github.com/openclaw/openclaw/pull/66627) | ly85206559 | Avoid spurious Windows restart on unknown listener stale | Stability improvement for Windows service management |
| [#66297](https://github.com/openclaw/openclaw/pull/66297) | ly85206559 | Retry Windows loopback CLI WS handshakes | Fixes race condition in local gateway connections |
| [#12584](https://github.com/openclaw/openclaw/pull/12584) | vincentkoc | Wire outbound message lifecycle hooks | Completes long-standing hook infrastructure |
| [#63168](https://github.com/openclaw/openclaw/pull/63168) | lanzhi-lee | Preserve gateway-bindable hook runner | Prevents plugin loader from overwriting gateway hooks |
| [#41277](https://github.com/openclaw/openclaw/pull/41277) | vincentkoc | Run `before_reset` hooks for `sessions.reset` | Consistent plugin lifecycle across reset paths |
| [#71808](https://github.com/openclaw/openclaw/pull/71808) | pash-openai | Manage Codex app-server binary in OpenClaw | Eliminates version mismatch between plugin and global CLI |

### Active Development (Open PRs)

| PR | Focus Area | Status |
|:---|:---|:---|
| [#71842](https://github.com/openclaw/openclaw/pull/71842) | Codex Computer Use setup | New capability for agent computer automation |
| [#71108](https://github.com/openclaw/openclaw/pull/71108) | WebChat history alignment with live visibility | UI/UX consistency fix |
| [#71686](https://github.com/openclaw/openclaw/pull/71686) | Heartbeat routing and avatar override stabilization | Infrastructure reliability |
| [#71837](https://github.com/openclaw/openclaw/pull/71837) | Memory-core dreaming denoise and REM promotion | AI memory quality improvement |
| [#71816](https://github.com/openclaw/openclaw/pull/71816) | FAL Seedance reference video support | Multimodal generation expansion |
| [#65730](https://github.com/openclaw/openclaw/pull/65730) | Discord auto-reply thread context resolution | Channel-specific intelligence |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Reactions | Core Concern |
|:---|:---|:---|:---|
| [#65867](https://github.com/openclaw/openclaw/issues/65867) — Gemini `<final>` tags leak into delivered messages | 15 | 0 | **Model output sanitization regression**; tags visible in WebUI but not WhatsApp indicates inconsistent filtering pipelines |
| [#26422](https://github.com/openclaw/openclaw/issues/26422) — `message_sending` plugin hook never fires | 12 | 1 | **Dead code in outbound paths**; hook infrastructure incomplete despite registration success |
| [#33185](https://github.com/openclaw/openclaw/issues/33185) — `imageModel` fails with "Unknown model" | 12 | 0 | **Model resolution regression**; configuration validation broken for visual models |
| [#47705](https://github.com/openclaw/openclaw/issues/47705) — Fallback model permanently overwrites agent config | 11 | 0 | **State mutation bug**; fallback persistence corrupts user configuration |
| [#32621](https://github.com/openclaw/openclaw/issues/32621) — Hook point missing inside message tool | 9 | 0 | **Architectural gap**; explicit tool calls bypass `message_sending` hook |

### Underlying Needs Analysis

The community is **heavily invested in hook/plugin reliability**—4 of top 5 issues concern message lifecycle interception. Users need:
- Guaranteed hook firing across all outbound paths (implicit + explicit)
- Non-destructive fallback behavior
- Consistent model resolution regardless of provider

---

## 5. Bugs & Stability

### Critical/Severe (Data Loss or System Failure)

| Issue | Severity | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| [#71761](https://github.com/openclaw/openclaw/issues/71761) | **CRITICAL** | OPEN | No | **All channel messages injected twice after 2026.4.24** — 2× token cost, duplicate replies; affects WebChat, NapCat/QQ |
| [#71178](https://github.com/openclaw/openclaw/issues/71178) | **CRITICAL** | OPEN | No | **`openclaw update` mid-turn causes total message loss** on Telegram/Discord |
| [#70004](https://github.com/openclaw/openclaw/issues/70004) | **SEVERE** | CLOSED | Unknown | Agent session lock not released after crash/SIGKILL — blocks all subsequent runs |
| [#68823](https://github.com/openclaw/openclaw/issues/68823) | **SEVERE** | CLOSED | Unknown | Gateway deadlock when ACP quota exhausted — affects all channels |
| [#71751](https://github.com/openclaw/openclaw/issues/71751) | **SEVERE** | CLOSED | Unknown | Docker crash: `CIAO PROBING CANCELLED` — mDNS infinite restart loop |

### High (Feature Breakage)

| Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|
| [#70699](https://github.com/openclaw/openclaw/issues/70699) | CLOSED | Unknown | ACP one-shot runs time out with no first event |
| [#70277](https://github.com/openclaw/openclaw/issues/70277) | CLOSED | Unknown | Signal inbound media rejected by image tool allowed-root check |
| [#70654](https://github.com/openclaw/openclaw/issues/70654) | CLOSED | Unknown | GPT-5.4 Responses API encrypted_content item_id mismatch after model switch |
| [#71749](https://github.com/openclaw/openclaw/issues/71749) | CLOSED | No | Windows Telegram crash: `ERR_UNSUPPORTED_ESM_URL_SCHEME` — workaround: disable native Jiti |
| [#58479](https://github.com/openclaw/openclaw/issues/58479) | OPEN | No | Approval dialog succeeds but exec never consumes approval; new ID generated |

### Regressions in 2026.4.24

- **Double message injection** [#71761](https://github.com/openclaw/openclaw/issues/71761) — likely release blocker for next patch
- **Windows Telegram ESM crash** [#71749](https://github.com/openclaw/openclaw/issues/71749) — beta.2 fix incomplete
- **Bundled runtime restaging** [#71599](https://github.com/openclaw/openclaw/issues/71599) — beta.2 improved but not resolved

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Version |
|:---|:---|:---|
| [#43756](https://github.com/openclaw/openclaw/issues/43756) — Slack `threadBindings` with `spawnAcpSessions` | **High demand** (2 👍); parity with Discord/Telegram | **HIGH** — pattern established, implementation path clear |
| [#8185](https://github.com/openclaw/openclaw/issues/8185) — Memory flush on `/new` and `/reset` | **High demand** (7 👍); data loss prevention | **HIGH** — safety-critical, small scope |
| [#16085](https://github.com/openclaw/openclaw/pull/16085) — Signal REST API for containerized deployments | **XL PR open**; containerization trend | **MEDIUM** — large change, needs review bandwidth |
| [#71842](https://github.com/openclaw/openclaw/pull/71842) — Codex Computer Use setup | **Active development**; AI agent automation trend | **HIGH** — aligned with Codex mode investment |
| [#71816](https://github.com/openclaw/openclaw/pull/71816) — FAL Seedance reference video | **Multimodal expansion** | **MEDIUM** — niche but competitive feature |

### Emerging Themes
- **Container/Cloud-native deployment**: Signal REST API, Fly.io fixes [#71824](https://github.com/openclaw/openclaw/pull/71824)
- **Enterprise observability**: OTel/Langfuse integration gaps [#45096](https://github.com/openclaw/openclaw/issues/45096)
- **Sandbox security**: Zombie process accumulation [#68691](https://github.com/openclaw/openclaw/issues/68691)

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Message duplication/replay** | [#71761](https://github.com/openclaw/openclaw/issues/71761), [#69208](https://github.com/openclaw/openclaw/issues/69208), [#70620](https://github.com/openclaw/openclaw/issues/70620) | **CRITICAL** — directly impacts cost and UX |
| **Hook unreliability** | [#26422](https://github.com/openclaw/openclaw/issues/26422), [#49765](https://github.com/openclaw/openclaw/issues/49765), [#52144](https://github.com/openclaw/openclaw/issues/52144), [#66579](https://github.com/openclaw/openclaw/issues/66579) | **HIGH** — breaks custom automation |
| **Windows-specific instability** | [#71749](https://github.com/openclaw/openclaw/issues/71749), [#71599](https://github.com/openclaw/openclaw/issues/71599), beta.2 fixes | **HIGH** — platform parity gap |
| **Model switching fragility** | [#47705](https://github.com/openclaw/openclaw/issues/47705), [#50094](https://github.com/openclaw/openclaw/issues/50094), [#70654](https://github.com/openclaw/openclaw/issues/70654) | **HIGH** — core AI reliability |
| **Update safety** | [#71178](https://github.com/openclaw/openclaw/issues/71178) | **CRITICAL** — operational risk |

### Positive Signals
- **Google Meet integration** well-received as bundled plugin pattern
- **DeepSeek V4** support keeps model provider coverage competitive
- **Community playbook sharing** [#45661](https://github.com/openclaw/openclaw/issues/45661) indicates mature operational knowledge

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (Open, High-Impact, Stagnant or Escalating)

| Issue | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#65867](https://github.com/openclaw/openclaw/issues/65867) | ~13 days | Gemini `<final>` tag leakage — **regression**, 15 comments | Root cause in tag filtering pipeline; assign model output sanitizer owner |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | ~6 days | **Umbrella**: duplicate transcript/replay/context assembly — systemic | Architecture review; may need breaking changes to message routing |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) | ~8 days | Sandbox zombie processes — **resource exhaustion risk** | PID reaping fix; security-critical for multi-tenant deployments |
| [#70678](https://github.com/openclaw/openclaw/issues/70678) | ~3 days | WhatsApp force-reconnect every 30 min — **quiet-device sessions** | Socket health check logic; channel-specific |
| [#16085](https://github.com/openclaw/openclaw/pull/16085) | ~71 days | Signal REST API — **XL PR**, containerization blocker | Review bandwidth; "AI-assisted" label may need extra verification |

### Release Quality Process Gap

The **v2026.4.24 release required 5 beta iterations** with identical release notes, suggesting:
- Insufficient automated testing for Windows runtime paths
- Bundled plugin staging not covered in CI
- Post-release regression [#71761](https://github.com/openclaw/openclaw/issues/71761) (double injection) indicates integration test gap for multi-channel message routing

**Recommendation**: Implement canary deployment gating for releases affecting core message pipeline.

---

*Digest generated from GitHub activity 2026-04-25 to 2026-04-26. All links: https://github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-04-26 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intensifying fragmentation and specialization** across approximately 10+ active projects, with a clear divergence between "batteries-included" frameworks (OpenClaw, NanoBot) and lightweight/specialized alternatives (NullClaw, ZeptoClaw, TinyClaw). **Provider API drift**—particularly around DeepSeek's reasoning_content protocol, Gemini's strict schema validation, and OpenRouter model ID changes—has become the dominant maintenance burden across all projects. **MCP (Model Context Protocol) ecosystem alignment** is now table-stakes, with most projects actively rationalizing their tool/skill architectures. The ecosystem is simultaneously maturing toward enterprise deployment (RBAC, observability, failover) while struggling with foundational stability (configuration persistence, message routing, hook reliability).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Score* | Key Stress Signal |
|:---|:---:|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | 417 PRs, 430 issues | v2026.4.24 (5 betas) | ⚠️ **B** | Post-release regressions; architectural strain in message routing |
| **NanoBot** | 6 | 29 | 11 PRs | None | ✅ **A-** | Security PR review backlog (9+ days) |
| **Hermes Agent** | 50 | 50 | 7 PRs | None | ⚠️ **B-** | P1 security debt accumulating; low merge velocity |
| **PicoClaw** | 7 | 21 | 12 PRs | v0.2.7-nightly | ✅ **B+** | PR review bottleneck (4 enterprise-critical PRs aging) |
| **NanoClaw** | 3 | 28 | 11 PRs | None | ✅ **A-** | 3 concurrent security PRs need coordinated triage |
| **NullClaw** | 3 | 1 | 1 PR | v2026.4.17 | ⚠️ **C+** | Zero maintainer response to new critical issues |
| **IronClaw** | 6 | 24 | 2 PRs | v0.25.0 | ⚠️ **B-** | 2 live canary failures; duplicate PR coordination gap |
| **LobsterAI** | 4 | 10 | 10 PRs | None (2026.04.24 branch) | ⚠️ **C+** | All issues bulk-marked stale; zero community responsiveness |
| **Moltis** | 2 | 7 | 3 PRs | None | ✅ **B** | Zero-comment issues may indicate silent user attrition |
| **CoPaw (QwenPaw)** | 14 | 10 | 3 PRs | v1.1.4.post2 | ⚠️ **C+** | Config persistence crisis; 3 critical bugs, 0 fix PRs |
| **ZeptoClaw** | 0 | 4 | 3 PRs | None | ✅ **B** | Recurring OAuth contributor friction |
| **ZeroClaw** | 50 | 43 | 12 PRs | None (v0.7.4 milestone) | ⚠️ **B-** | 31 open PRs vs. 12 merged; Ollama provider broken |
| **TinyClaw** | 0 | 0 | 0 | — | ❓ **?** | No activity detected |

*\*Health score considers velocity, merge ratio, release stability, issue resolution, and community responsiveness*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs in 24h | 10-50x larger than any peer; NanoBot next at 29 PRs |
| **Release cadence** | v2026.4.24 with 5 beta precursors | Only PicoClaw has comparable nightly builds; most peers release monthly or less |
| **Channel breadth** | Google Meet, WhatsApp, Telegram, Discord, WebChat, NapCat/QQ, Feishu | Matches or exceeds all peers; enterprise messaging coverage is competitive |
| **Hook infrastructure** | Mature lifecycle hooks (`before_reset`, outbound message hooks) | Most advanced; NanoBot and Hermes lack equivalent completeness |
| **Model provider coverage** | DeepSeek V4, Gemini, OpenAI, Anthropic | Parity with ecosystem; faster DeepSeek updates than ZeroClaw |

### Technical Approach Differences
- **Plugin architecture**: OpenClaw uses bundled plugin staging with updater compatibility guards; peers like NanoBot favor native MCP tools over compatibility layers (#874)
- **Session management**: Complex multi-layer routing (source of current regressions); PicoClaw uses simpler Seahorse context manager
- **Configuration**: Dual-config system (`config.json`/`agent.json`) similar to CoPaw's problematic architecture, but with more mature migration paths

### Community Size Comparison
OpenClaw operates at **ecosystem-defining scale**—its daily issue volume exceeds most peers' monthly totals. However, this scale creates **inverse quality pressure**: 86% issue closure rate sounds strong, but 70 critical/severe issues remaining open (including double-message injection) indicates architectural debt that smaller projects (NanoBot, PicoClaw) avoid through constrained scope.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **DeepSeek/Kimi reasoning mode compliance** | OpenClaw, Hermes, PicoClaw, ZeroClaw, LobsterAI | `reasoning_content` ordering, streaming capture, tool-call path handling; Hermes has 3 interconnected P1 bugs, ZeroClaw has active PR (#6107) |
| **MCP ecosystem alignment** | IronClaw, Moltis, NanoClaw, PicoClaw | Native tool calling vs. compatibility layers; spec compliance (null→{} for empty args #2666); prompt support (#2958); stdio transport reliability (#2923) |
| **Configuration persistence** | CoPaw, ZeroClaw, OpenClaw (implied by fallback mutation #47705) | Atomic writes, single source of truth, container restart survival; CoPaw's crisis is most acute |
| **Provider failover/resilience** | NanoBot (#3376), OpenClaw (implied by update safety #71178) | Multi-provider automatic fallback on timeout/429/5xx; intra-provider retry insufficient |
| **Enterprise messaging** | OpenClaw, NanoBot, IronClaw, LobsterAI, ZeroClaw | Feishu, MS Teams, Telegram, Discord, Matrix, WhatsApp; thread-scoped sessions, reply context |
| **Windows platform parity** | OpenClaw, PicoClaw, CoPaw | ESM URL scheme crashes, console flashes, rendering regressions; consistent secondary-citizen status |
| **Sandbox/security hardening** | NanoClaw (#2000-#2004), Moltis (#866 Landlock), Hermes (3 P1 CVEs) | Container/host filesystem isolation, SSRF prevention, zombie process reaping |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Philosophy |
|:---|:---|:---|:---|
| **OpenClaw** | Maximum feature velocity + channel breadth | Power users, multi-channel operators | "Batteries included" with plugin ecosystem; accepts complexity cost |
| **NanoBot** | Enterprise reliability + Chinese market depth | Enterprise IT, 24/7 automation | Security-first; iterative channel refinement; cost optimization |
| **Hermes Agent** | Deep reasoning mode integration + managed bots | AI-native developers, Telegram power users | Delegation/routing architecture; vision auxiliary model pattern |
| **PicoClaw** | Hardware-aligned (Sipeed), structured tool calls | Edge/device deployers, orchestration builders | Clean sidecar patterns; cross-agent delegation roadmap |
| **NanoClaw** | Sovereignty/security (container isolation default) | Privacy-conscious, self-hosting enthusiasts | "Do as little as possible host-side"; LXC/RHEL deployment focus |
| **NullClaw** | Extreme lightweight (weak/cheap devices) | Minimal-resource deployers | Currently failing to deliver on stated mission; search requires heavy infra |
| **IronClaw** | NEAR AI blockchain integration + ACP protocol | Web3/agent interoperability | Sandboxed agent security model; Engine V2 rewrite |
| **LobsterAI** | NetEase Youdao backing; CJK optimization | Chinese enterprise, cowork workflows | Internal iteration strength; external responsiveness weakness |
| **Moltis** | Landlock kernel sandboxing + skill governance | Security-critical deployments | Whitelist/blacklist skill control; Obscura browser alternative |
| **CoPaw (QwenPaw)** | Qwen model optimization; Tauri desktop | Qwen ecosystem users, desktop-first | Configuration system in crisis; approval workflows |
| **ZeroClaw** | Schema-driven configuration; i18n foundation | Multi-tenant, global deployments | RBAC roadmap; Mozilla Fluent pipeline; release process instability |
| **ZeptoClaw** | Rust-based; optional feature compile flags | Systems programmers, minimal binary size | CI matrix for feature flags; dependency maintenance discipline |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Some Instability)
| Project | Characteristics | Risk |
|:---|:---|:---|
| **OpenClaw** | 500 PRs/day, accelerated release cadence, 5 beta cycle | Architectural strain; regression rate increasing; message routing needs redesign |
| **ZeroClaw** | 43 PRs/day, 31 open, multilingual community | Merge bottleneck; Ollama provider degradation; release process recently broken (v0.7.3 emergency) |

### Tier 2: Healthy Growth (Balanced Velocity/Quality)
| Project | Characteristics | Trajectory |
|:---|:---|:---|
| **NanoBot** | 29 PRs, security-conscious, enterprise features landing | Provider failover will likely ship; becoming production-infrastructure grade |
| **NanoClaw** | 28 PRs, broad contributor base, security triage active | Web channel + Proton suite + per-agent config = major capability expansion |
| **PicoClaw** | 21 PRs, nightly builds, provider compatibility focus | v0.2.7 stabilization; review bottleneck is main constraint |

### Tier 3: Maintenance/Stabilization (Lower Velocity, Technical Debt Focus)
| Project | Characteristics | Concern |
|:---|:---|:---|
| **Hermes Agent** | 50 PRs but only 7 merged; P1 security debt | Maintainer bandwidth constraint; community may fragment if security unaddressed |
| **IronClaw** | 24 PRs, 2 closed; canary failures | Engine V2 migration complexity; review coordination gaps |
| **Moltis** | 7 PRs, clean merges, zero community comments | Silent user attrition risk; no feedback channels active |
| **ZeptoClaw** | 4 PRs, dependency maintenance, CI hardening | Stable but not growing; OAuth friction discourages contributors |

### Tier 4: Stagnation or Crisis (Low Velocity, Responsiveness Gaps)
| Project | Characteristics | Critical Issue |
|:---|:---|:---|
| **CoPaw** | 10 PRs, patch release, but 13/14 issues unresolved | Configuration persistence crisis threatens retention |
| **LobsterAI** | 10 PRs merged internally, 0 issue engagement | Bulk stale-marking without response; community trust erosion |
| **NullClaw** | 1 PR, 3 issues, 0 maintainer response | Core use case contradiction (lightweight mission vs. heavy search deps) |
| **TinyClaw** | Zero activity | Unknown status; possibly abandoned |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Reasoning mode as first-class protocol** | DeepSeek/Kimi `reasoning_content` failures across 5+ projects | Agent frameworks must treat reasoning fields as persistent, round-trippable message components—not optional metadata |
| **MCP as interoperability standard** | Moltis (#874), IronClaw (#2958), PicoClaw (#2664-#2666) all rationalizing MCP | Build tools as MCP servers first; framework-native integration secondary |
| **Container-side execution default** | NanoClaw (#2003 voice transcription), Moltis (Landlock #866) | Host-side processing is becoming liability; design for minimal privileges |
| **Provider diversity as operational requirement** | NanoBot failover (#3376), OpenClaw fallback mutation (#47705), ZeroClaw Ollama breakage | Single-provider architectures are production anti-patterns; expect continuous API drift |
| **Enterprise RBAC/observability emergence** | ZeroClaw per-sender RBAC (#5982), IronClaw self-service secrets (#2754), NanoBot OTel gaps (#45096) | Consumer-grade agents insufficient; B2B requires tenant isolation, audit logging, cost attribution |
| **i18n as foundational, not cosmetic** | ZeroClaw Mozilla Fluent pipeline (#5788), NanoBot Chinese README (#2345) | Global deployment requires internationalization at schema level, not string replacement |
| **Configuration as existential UX** | CoPaw crisis (#3824, #3817, #3828), OpenClaw fallback mutation (#47705) | Config systems need single source of truth, atomic persistence, and initialization that respects existing state |
| **Voice/multimodal as emerging baseline** | NanoClaw voice transcription (#2003/#2009), PicoClaw FAL Seedance (#71816), OpenClaw vision models | Text-only agents becoming legacy; async voice pipelines and video generation entering core expectations |

### Investment Priorities for Ecosystem Participants

1. **Short-term (next release cycle)**: Configuration persistence architecture; reasoning mode test harnesses; MCP spec compliance
2. **Medium-term (2-3 cycles)**: Multi-provider failover with intelligent routing; container-native execution; enterprise RBAC
3. **Long-term (6-12 months)**: Cross-agent delegation standards (ACP/MCP convergence); real-time multimodal pipelines; automated security audit infrastructure

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-26

## 1. Today's Overview

NanoBot shows **strong development velocity** with 29 PRs updated in the last 24 hours (18 open, 11 merged/closed) and 6 active issues, indicating a healthy, fast-moving project. No new releases were cut today, suggesting the team is in an accumulation phase rather than stabilization. The activity is heavily skewed toward **security hardening**, **provider reliability**, and **channel integrations** (Feishu, MS Teams, WeCom). Multiple PRs address production-facing bugs around reasoning field leakage, session management, and local model server connectivity, reflecting maturation toward enterprise deployment readiness.

---

## 2. Releases

**No new releases** today. Latest release remains prior to this period.

---

## 3. Project Progress

### Merged/Closed PRs Today (11 total, notable items):

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2345](https://github.com/HKUDS/nanobot/pull/2345) | JasonYeYuhe | Chinese README translation (`README.zh.md`) with language switcher | Community accessibility; signals Chinese market importance |
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | aiguozhi123456 | DOCX/XLSX/PPTX support for `read_file` tool | Office document workflow enablement |
| [#3447](https://github.com/HKUDS/nanobot/pull/3447) | chengyongru | MS Teams threaded replies via `replyToId` | Enterprise channel reliability |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) | chengyongru | Feishu thread-scoped sessions (superseded by #3449) | Iterative refinement of channel architecture |
| [#3450](https://github.com/HKUDS/nanobot/pull/3450) | ronkommoji | *Closed without description* | Likely experimental/abandoned |

### Key Advances:
- **Document processing**: Office format support extends NanoBot's enterprise document handling capabilities
- **Enterprise messaging**: Iterative improvements to both Feishu and MS Teams integrations show sustained investment in Chinese and Western enterprise channels
- **Internationalization**: Chinese README lowers contribution barrier for significant user segment

---

## 4. Community Hot Topics

### Most Active Discussion: Provider Failover (#3376)
**[#3376 — 支持模型异常自动切换（Provider / Model Failover）](https://github.com/HKUDS/nanobot/issues/3376)** | 8 comments, 👍 1 | Author: [1723229](https://github.com/1723229)

**Core tension**: Users configure multiple LLM providers for redundancy, but NanoBot's current retry logic is **intra-provider only** — a single provider failure kills the task despite backup providers being available. The discussion reveals this as a **production reliability gap** for users running 24/7 automation or business-critical workflows.

**Underlying need**: True multi-provider resilience with intelligent routing (timeout/429/5xx/connection errors → automatic fallback, with optional round-robin or priority ordering). This is becoming table-stakes for agent frameworks.

### Other Notable Active Items:

| Item | Activity | Signal |
|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | 2 comments | Agent cognition architecture — users want persistent task anchoring across interruptions, analogous to human "task boards" |
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) Call external agent | 1 comment | **Interoperability pressure** — users want NanoBot to orchestrate other agent frameworks (OpenCode, Codex) rather than compete on internal agent implementation |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 High** | [#3443](https://github.com/HKUDS/nanobot/issues/3443) / [#3445](https://github.com/HKUDS/nanobot/pull/3445) / [#3446](https://github.com/HKUDS/nanobot/pull/3446) | **Reasoning field leaks to users** in non-streaming path; internal chain-of-thought exposed as response content | **Two competing fixes open** — #3445 (simple conditional) and #3446 (spec-flag gated, more architecturally sound) |
| **🟡 Medium** | [#3444](https://github.com/HKUDS/nanobot/pull/3444) | HTTP keepalive causes failures with local model servers (Ollama, vLLM, llama.cpp) due to connection reuse after server-side idle timeout | Fix PR open, ready for review |
| **🟡 Medium** | [#3427](https://github.com/HKUDS/nanobot/pull/3427) | DeepSeek request failures from non-string content payloads; unbounded session file growth; token budgeting broken in replay | Comprehensive fix PR open |
| **🟡 Medium** | [#3391](https://github.com/HKUDS/nanobot/pull/3391) | Heartbeat messages bypass channel session — user replies to heartbeat lose conversation continuity | Fix PR open |
| **🟢 Low** | [#3435](https://github.com/HKUDS/nanobot/issues/3435) | WeCom channel media file upload fails with `[file upload failed]` | Reported, no fix yet |

**Critical pattern**: The reasoning leak (#3443) has **two independent fix PRs within 24 hours** (#3445, #3446), indicating either coordinated response or community urgency. The spec-flag approach (#3446) is architecturally preferable for multi-provider maintainability.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Provider/Model Failover** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | **High** | Most-commented issue; production-critical; aligns with existing multi-provider config architecture |
| **MGP Memory Integration** | [#3408](https://github.com/HKUDS/nanobot/pull/3408) | **High** | PR already open; opt-in sidecar design minimizes risk; cross-session memory is explicit roadmap theme |
| **OpenRouter `:free` model preference** | [#3416](https://github.com/HKUDS/nanobot/pull/3416) | **Medium-High** | Small, self-contained provider enhancement; cost-sensitive users driving demand |
| **Feishu thread-scoped sessions** | [#3449](https://github.com/HKUDS/nanobot/pull/3449) | **Medium** | Iteration on closed PR #3176; enterprise Chinese market priority |
| **Session-Level Focus Tool** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | **Medium** | Complex agent cognition feature; needs architectural design; no PR yet |
| **External Agent Orchestration** | [#3436](https://github.com/HKUDS/nanobot/issues/3436) | **Low-Medium** | Strategic direction question — does NanoBot build agents or orchestrate them? |

**Strategic inflection point**: [#3436](https://github.com/HKUDS/nanobot/issues/3436) reveals tension between NanoBot as **complete agent framework** vs. **orchestration layer** for specialized agents (OpenCode, Codex). The [TinyAgent](https://github.com/TinyA...) reference suggests users want composability over monolithic design.

---

## 7. User Feedback Summary

### Pain Points:
| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Single-provider fragility** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) — "任务仍然因为单点异常而中断" | 🔴 Critical |
| **Reasoning transparency leak** | [#3443](https://github.com/HKUDS/nanobot/issues/3443) — internal CoT exposed to users | 🔴 Critical |
| **Local model server brittleness** | [#3444](https://github.com/HKUDS/nanobot/pull/3444) — connection pooling incompatible with Ollama/vLLM | 🟡 Significant |
| **WeCom enterprise channel gaps** | [#3435](https://github.com/HKUDS/nanobot/issues/3435) — media upload failures | 🟡 Moderate |
| **Heartbeat debuggability** | [#3437](https://github.com/HKUDS/nanobot/issues/3437) — no on-demand trigger, can't test Phase 1 isolated | 🟡 Moderate |

### Satisfaction Drivers:
- **Multi-channel depth**: Active investment in Feishu, MS Teams, WeCom, Telegram shows responsiveness to enterprise deployment contexts
- **Security posture**: Multiple security PRs (#3252, #3253, #3255, #3366) demonstrate proactive hardening against SSRF, shell injection, file access bypasses
- **Cost optimization**: OpenRouter free model preference (#3416) shows attention to user economics

### Use Case Evolution:
Users are pushing NanoBot from **personal automation** toward **24/7 production agent infrastructure** — the failover request, heartbeat debugging, and session continuity fixes all reflect operational maturity demands.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | 7 days | **Architectural** | Needs maintainer/designer engagement on agent cognition model; high conceptual complexity |
| [#3252](https://github.com/HKUDS/nanobot/pull/3252) SSRF non-HTTP scheme detection | 9 days open | **Security** | Security fix stalled; file:// and gopher:// bypasses actively exploitable |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) Filesystem-layer history protection | 9 days open | **Security** | Defense-in-depth for audit log integrity; regex-based guards provably insufficient |
| [#3253](https://github.com/HKUDS/nanobot/pull/3253) Whisper retry on transient failures | 9 days open | **Reliability** | Voice pipeline silently fails; bad UX for voice-enabled deployments |
| [#3303](https://github.com/HKUDS/nanobot/pull/3303) Spawn status/cancel tools, domain loop detection | 7 days open | **Feature completeness** | Subagent observability and safety; blocking for complex multi-agent workflows |

**Concern**: Four of five backlog items are **9+ days old security/reliability PRs** from contributor [mohamed-elkholy95](https://github.com/mohamed-elkholy95). This suggests either: (a) review bandwidth constraint, (b) architectural disagreement, or (c) dependency on other changes. The security items (#3252, #3255) merit prioritized review given active exploitability.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-26. All links reference https://github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-26

## 1. Today's Overview

Hermes Agent shows **very high community activity** with 50 issues and 50 PRs updated in the last 24 hours, though merge velocity remains low (only 7 PRs merged/closed versus 43 still open). The project is experiencing **active development turbulence** around DeepSeek/Kimi reasoning mode integrations, with multiple related bugs and regressions surfacing simultaneously. Security consciousness is elevated with at least three P1 security issues under active discussion. No new releases were published today, suggesting the maintainers are accumulating fixes for a larger release rather than shipping continuously.

---

## 2. Releases

**No new releases** published today. Latest release status remains unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today (7 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#15814](https://github.com/NousResearch/hermes-agent/pull/15814) | `feat(delegate)`: session_target routes case work into per-channel sessions | **Closed without merge** — interesting delegation routing feature for enterprise case management workflows; closure reason unclear |
| [#9638](https://github.com/NousResearch/hermes-agent/pull/9638) | fix: remove @staticmethod from _context_completions causing NameError on bare @ | **Merged** — fixes CLI crash on bare `@` mention; small but high-impact UX fix |
| [#15809](https://github.com/NousResearch/hermes-agent/pull/15809) | docs: embed tutorial videos on webhooks + auxiliary models pages | **Merged** — community documentation improvement |
| [#11581](https://github.com/NousResearch/hermes-agent/pull/11581) | fix(gateway): always inject reply context into skill and chat prompts | **Merged** — fixes Telegram/Slack reply context suppression bug |
| [#15808](https://github.com/NousResearch/hermes-agent/pull/15808) | docs(obliteratus): link YouTube video guide in SKILL.md | **Merged** — documentation |

### Notable Open PRs Advancing

| PR | Description | Status |
|:---|:---|:---|
| [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) | fix: DeepSeek/Kimi thinking mode requires reasoning_content on ALL assistant messages | **Open, P1** — critical fix for reasoning mode regression; addresses root cause of multiple filed issues |
| [#15807](https://github.com/NousResearch/hermes-agent/pull/15807) | fix(gateway): preserve inactivity clock on interrupt-recursive cached-agent turns | **Open, P1** — watchdog/timeout reliability fix with comprehensive test coverage |
| [#15815](https://github.com/NousResearch/hermes-agent/pull/15815) | fix(tools): resolve delegation API key from provider credential chain when base_url is set | **Open** — credential resolution robustness |
| [#15813](https://github.com/NousResearch/hermes-agent/pull/15813) | fix(tui): prefer exact slash command matches | **Open** — UX polish for TUI command resolution |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | 👍 | Topic | Link |
|:---|:---:|:---:|:---|:---|
| #6475 Anthropic Claude subscription auth 'out of extra usage' | 25 | 15 | **CLOSED** — Subscription/auth degradation with Claude Max proxy | [Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475) |
| #13065 Native vision support for vision-capable main models | 6 | 0 | Feature request to bypass auxiliary vision model routing | [Issue #13065](https://github.com/NousResearch/hermes-agent/issues/13065) |
| #15741 cron path HTTP 400 reasoning_content error (post-#15213) | 4 | 1 | **Recurring bug** — DeepSeek cron jobs still failing after supposed fix | [Issue #15741](https://github.com/NousResearch/hermes-agent/issues/15741) |
| #15717 DeepSeek API 400: reasoning_content must be passed back | 4 | 1 | Core reasoning mode protocol compliance | [Issue #15717](https://github.com/NousResearch/hermes-agent/issues/15717) |
| #10695 Python dependency CVEs (aiohttp, cryptography, curl-cffi) | 4 | 0 | **P1 Security** — Supply chain security audit | [Issue #10695](https://github.com/NousResearch/hermes-agent/issues/10695) |

### Underlying Needs Analysis

- **Vision architecture**: #13065 reveals architectural tension — users want first-class multimodal routing, not auxiliary model fallback
- **DeepSeek reasoning mode reliability**: Three interconnected issues (#15741, #15717, #15812) indicate the reasoning_content protocol implementation is fragile across cron, tool-call, and plain-message paths
- **Enterprise auth stability**: #6475's 25-comment resolution suggests Claude Max proxy/subscription tiering creates ongoing support burden

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **P1** | [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) | Cron path: DeepSeek `reasoning_content` 400 error persists after #15213 closure | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) |
| **P1** | [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) | DeepSeek thinking mode: `reasoning_content` must be passed back to API | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) |
| **P1** | [#15812](https://github.com/NousResearch/hermes-agent/issues/15812) | **REGRESSION**: #15749 breaks reasoning field promotion for DeepSeek/Kimi tool-call messages | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) |
| **P1** | [#15459](https://github.com/NousResearch/hermes-agent/issues/15459) | Terminal tool leaks `declare -x` state-sync output into LLM context (macOS) | None |
| **P1** | [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) | Python dependency CVEs: aiohttp, cryptography, curl-cffi | None |
| **P1** | [#10692](https://github.com/NousResearch/hermes-agent/issues/10692) | `shell=True` in config-driven execution bypasses terminal safety controls | None |
| **P1** | [#10693](https://github.com/NousResearch/hermes-agent/issues/10693) | OAuth PKCE `code_verifier` reused as `state` parameter — verifier leaked | None |
| **P1** | [#10719](https://github.com/NousResearch/hermes-agent/issues/10719) | Context compression silently drops all turns when summary generation fails | None |
| P2 | [#15262](https://github.com/NousResearch/hermes-agent/issues/15262) | Discord `free_response_channels` wildcard `'*'` behavior change breaks workflows | None |
| P2 | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | Docker NAS setup: Permission denied on `/opt/data/config.yaml` | None |
| P2 | [#15779](https://github.com/NousResearch/hermes-agent/issues/15779) | `/model` switch ignores custom provider `context_length` | None |

**Critical pattern**: DeepSeek/Kimi reasoning mode has **cascading failures** across three code paths (cron, tool-call, plain message) with a single fix PR (#15478) attempting comprehensive resolution. This suggests insufficient test coverage for reasoning mode edge cases.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Predicted Priority | Rationale |
|:---|:---|:---|:---|
| [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) | First-class native vision support (bypass auxiliary model) | **High** — v0.9.0? | Reference implementation provided; aligns with multimodal market trend |
| [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) | Expose Hermes memory via MCP server | Medium | MCP ecosystem momentum; enables agent interop |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | Web Dashboard multi-profile switching | Medium | CLI parity gap; enterprise friction point |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Brave Search as native web search backend | Medium | Cost/accessibility advantage; 10 👍 indicates demand |
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | `--host` and CORS config for dashboard VPN access | Low-Medium | Tailscale/remote work enablement |
| [#15801](https://github.com/NousResearch/hermes-agent/issues/15801) | Session compaction as structured API primitive | Low | API maturity; HTTP client parity |
| [#15789](https://github.com/NousResearch/hermes-agent/issues/15789) | Per-task model/provider overrides in `delegate_task` | Low | Advanced delegation use cases |

**Signal**: Vision support (#13065) has the most complete community specification and reference implementation, making it the strongest candidate for next major feature inclusion.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **DeepSeek/Kimi reliability** | 4+ issues, multiple regressions | Critical |
| **Auth/subscription fragility** | #6475 (25 comments), #10576 proxy sanitization | High |
| **Security posture gaps** | 3 P1 security issues unaddressed | High |
| **Docker/NAS deployment friction** | #15290 permission issues | Medium |
| **Terminal tool output pollution** | #15459 `declare -x` leakage | Medium |
| **Configuration system inconsistencies** | #10581 env vs yaml fallback, #15779 context_length ignore | Medium |

### Satisfaction Indicators

- Active community contribution: 50 PRs in 24h, documentation PRs (#15809, #15808)
- Feature depth: Managed Telegram bots (#10589), Copilot remote (#13267), Ollama compose (#10574)

### Dissatisfaction Indicator

| Issue | Signal |
|:---|:---|
| [#10625](https://github.com/NousResearch/hermes-agent/issues/10625) | **"抄袭都抄不明白"** ("Can't even copy properly") — 10 👍, suggesting attribution/originality concerns in Chinese-speaking community |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Why Critical |
|:---|:---|:---|:---|
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) Python CVEs | 10 days | **Security debt** | P1, no assigned fix, supply chain exposure |
| [#10693](https://github.com/NousResearch/hermes-agent/issues/10693) OAuth PKCE leak | 10 days | **Security debt** | P1, cryptographic protocol violation, no PR |
| [#10692](https://github.com/NousResearch/hermes-agent/issues/10692) shell=True bypass | 10 days | **Security debt** | P1, arbitrary code execution path |
| [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) Tool calling unstable v0.8.0 | 13 days | Stability | Persistent hallucination, empty responses — core functionality |
| [#10678](https://github.com/NousResearch/hermes-agent/issues/10678) delegate_task hangs indefinitely | 10 days | Reliability | Production workflow blocker, no fix PR |
| [#10616](https://github.com/NousResearch/hermes-agent/issues/10616) Feishu WebSocket zombie processes | 10 days | Reliability | Gateway process management, no PR |

### PRs Stalled

| PR | Age | Blocker |
|:---|:---|:---|
| [#13267](https://github.com/NousResearch/hermes-agent/pull/13267) Copilot remote | 5 days | Feature completeness review? |
| [#10589](https://github.com/NousResearch/hermes-agent/pull/10589) Telegram Managed Bots | 10 days | Backend infrastructure dependency (#10591) |

---

**Project Health Assessment**: ⚠️ **Active but strained**. High issue/PR volume indicates healthy community engagement, but low merge velocity, recurring DeepSeek regressions, and accumulating P1 security debt suggest maintainer bandwidth constraints. The concentration of reasoning mode bugs around a single provider integration indicates need for architectural test harness expansion before further provider additions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-26

## 1. Today's Overview

PicoClaw shows **high development velocity** with 21 PRs and 7 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.7. The project is experiencing a **provider-compatibility crunch**: multiple critical bugs around DeepSeek reasoning content ordering, Gemini's strict schema validation, and OpenRouter model ID handling were resolved today. Community contributions remain strong with 9 open PRs under review, though several have been stuck in review for weeks. The nightly build pipeline is active, suggesting maintainers are iterating toward a stable v0.2.7 release. Overall project health is **good but stressed** — core architecture is advancing (structured tool calls, cross-agent delegation) while provider API drift continues to consume significant maintenance bandwidth.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.7-nightly.20260425.8d51d306](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)** | Nightly | Automated build from `main` at commit `8d51d306`. **Use with caution** — may be unstable. |

No stable release today. The changelog comparison suggests ongoing development toward v0.2.7 stable, with significant provider fixes and UI improvements landing since the v0.2.7 tag.

---

## 3. Project Progress

### Merged/Closed PRs (12 total)

| PR | Author | Domain | Impact |
|----|--------|--------|--------|
| **[#326](https://github.com/sipeed/picoclaw/pull/326)** — Add PR concurrency to reduce redundant runs | khantnaingset-kns | CI | Cuts CI costs; cancels stale runs on force-push |
| **[#2570](https://github.com/sipeed/picoclaw/pull/2570)** — Make fresh tail size configurable | lahuman | Agent/Config | Seahorse context manager now user-tunable |
| **[#2498](https://github.com/sipeed/picoclaw/pull/2498)** — Preserve multiple armed `/use` skills | lahuman | Agent | Fixes skill overwrite bug; enables multi-skill workflows |
| **[#2654](https://github.com/sipeed/picoclaw/pull/2654)** — Hide Windows child-process console flashes | SiYue-ZO | Agent/Build | Eliminates jarring PowerShell popups on Windows |
| **[#2657](https://github.com/sipeed/picoclaw/pull/2657)** — Persist canonical history for DeepSeek and web chat | lc6464 | Provider/Agent | **Critical fix**: reasoning/content ordering + refresh consistency |
| **[#2664](https://github.com/sipeed/picoclaw/pull/2664)** — Retry MCP tool calls on lost HTTP sessions | afjcjsbx | Tool | Auto-reconnect for SSE-based MCP servers |
| **[#2661](https://github.com/sipeed/picoclaw/pull/2661)** — Add thought visibility toggle | SiYue-ZO | Channel | User-controlled reasoning display in chat UI |
| **[#2666](https://github.com/sipeed/picoclaw/pull/2666)** — Send empty object instead of null for MCP tools | afjcjsbx | Tool | Spec compliance fix for argument-less tools |
| **[#2660](https://github.com/sipeed/picoclaw/pull/2660)** — Format tool args as JSON code blocks | afjcjsbx | Channel/Tool | Pretty-printed tool feedback in chat |
| **[#2659](https://github.com/sipeed/picoclaw/pull/2659)** — Isolate thought bubble collapse state | SiYue-ZO | Channel | Per-bubble state vs. broken global toggle |
| **[#2667](https://github.com/sipeed/picoclaw/pull/2667)** — Update WeChat group QR code | BeaconCat | Community | Group #25, expires May 2 |

**Key advances**: DeepSeek reasoning stability is now production-ready; MCP tool reliability improved with null-fix and session retry; Windows UX polished; multi-skill agent workflows unblocked.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | **[#1790](https://github.com/sipeed/picoclaw/issues/1790)** — OpenRouter free tier broken | **6 comments** | Root cause: OpenRouter changed model ID format (`:free` suffix rejected). **Need**: Reliable free-tier access for cost-sensitive users; provider abstraction layer needs normalization logic |
| 2 | **[#2600](https://github.com/sipeed/picoclaw/issues/2600)** — Null MCP arguments violate spec | **2 comments** | JSON Schema requires `{}` not `null` for empty args. **Need**: Strict MCP spec compliance for enterprise integrations |

### Underlying Needs
- **Cost optimization**: Free tier users are a significant segment; provider routing must gracefully degrade
- **Enterprise MCP adoption**: Spec compliance is non-negotiable for Notion, Slack, etc. integrations
- **Debugging transparency**: Users want to see *why* tool calls fail (hence JSON code block formatting PR)

---

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Details | Fix Available |
|----------|----------|--------|---------|---------------|
| 🔴 **Critical** | **[#2668](https://github.com/sipeed/picoclaw/issues/2668)** — Gemini 400 on complex MCP schemas | **OPEN** | `$ref`, `$defs`, `anyOf` crash Gemini function-calling | ❌ No PR yet |
| 🟡 **High** | **[#2650](https://github.com/sipeed/picoclaw/issues/2650)**, **[#2648](https://github.com/sipeed/picoclaw/issues/2648)** — DeepSeek reasoning crashes | **CLOSED** | Reasoning content misordered after tool calls | ✅ Fixed by [#2657](https://github.com/sipeed/picoclaw/pull/2657) |
| 🟡 **High** | **[#2600](https://github.com/sipeed/picoclaw/issues/2600)** — Null MCP arguments | **CLOSED** | Violates MCP spec, breaks compliant servers | ✅ Fixed by [#2666](https://github.com/sipeed/picoclaw/pull/2666) |
| 🟢 **Medium** | **[#2615](https://github.com/sipeed/picoclaw/issues/2615)** — Web Chat refresh inconsistency | **CLOSED (duplicate)** | Tool call summaries disappear on refresh; regression of #2427 | ✅ Fixed by [#2657](https://github.com/sipeed/picoclaw/pull/2657) |
| 🟢 **Medium** | **[#1790](https://github.com/sipeed/picoclaw/issues/1790)** — OpenRouter free tier | **CLOSED** | Model ID normalization failure | ✅ Likely fixed in nightly |

**Emerging pattern**: Gemini's strict schema validation is becoming a major friction point. Unlike OpenAI's permissive parsing, Gemini rejects valid JSON Schema constructs. PicoClaw needs a **schema simplification/sanitization pipeline** for Gemini compatibility.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.7+ | Rationale |
|---------|----------|----------------------|-----------|
| **OpenCode provider support** (Zen/Go subscriptions) | **[#2671](https://github.com/sipeed/picoclaw/issues/2671)** | Medium | Chinese market demand; aligns with Sipeed's hardware ecosystem |
| **Structured tool calls in Web Chat** | **[#2672](https://github.com/sipeed/picoclaw/pull/2672)** | **High** — in review | Foundation for collapsible tool UI; touches 4 subsystems |
| **Cross-agent delegation** | **[#2531](https://github.com/sipeed/picoclaw/pull/2531)** | Medium — Phase 2 | Major architecture change; blocked on review since Apr 15 |
| **xAI (Grok) provider** | **[#2260](https://github.com/sipeed/picoclaw/pull/2260)** | Medium | OpenAI-compatible path reduces risk; stalled since Apr 2 |
| **Network retry with backoff** | **[#2669](https://github.com/sipeed/picoclaw/pull/2669)** | **High** — in review | Production reliability; small surface area |
| **Tool feedback pretty-printing** | **[#2670](https://github.com/sipeed/picoclaw/pull/2670)** | **High** — in review | UX polish; fixes HTML escape bug |

**Prediction**: v0.2.7 stable will likely include #2672, #2669, #2670, and #2663 (config UX). xAI and delegation need more review cycles. OpenCode support may fast-track if maintainer bandwidth opens.

---

## 7. User Feedback Summary

### Pain Points 😤
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Provider fragility** | DeepSeek reasoning, Gemini schemas, OpenRouter IDs | High — core value proposition at risk |
| **Windows UX** | Console flashes, PowerShell spam | Medium — affects mainstream adoption |
| **Web Chat state loss** | Refresh wipes tool calls, datetime truncated | Medium — erodes trust |
| **Configuration opacity** | Save/restart feedback unclear | Low — addressed by #2663 |

### Positive Signals 😊
- **MCP ecosystem investment**: Multiple PRs improving tool reliability, formatting, spec compliance
- **Reasoning transparency**: Thought toggle gives users control over cognitive load
- **Multi-skill workflows**: #2498 unblocks power-user scenarios

### Use Case Evolution
Users are pushing PicoClaw beyond "chat wrapper" into **orchestration layer** — cross-agent delegation, persistent tool sessions, structured output handling. The project is at an inflection point: success here differentiates from simpler alternatives.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **[#1780](https://github.com/sipeed/picoclaw/pull/1780)** — QQ connection stability | **37 days** | Stale | Configurable reconnection params; Chinese IM critical for home market. Needs reviewer assignment |
| **[#2163](https://github.com/sipeed/picoclaw/pull/2163)** — Google Antigravity OAuth scope fix | **28 days** | Stale | Enterprise Google Cloud users blocked. Small, well-scoped fix |
| **[#2260](https://github.com/sipeed/picoclaw/pull/2260)** — xAI provider | **23 days** | Stale | Competitive parity with Grok. Tests/docs complete |
| **[#2531](https://github.com/sipeed/picoclaw/pull/2531)** — Cross-agent delegation | **10 days** | Active but slow | Major feature from Phase 2 roadmap. Needs architectural review |

**Concern**: PR review velocity is becoming a bottleneck. 4 significant contributions (including 2 enterprise-critical fixes) are aging out. Recommend maintainer triage pass or delegation to committer pool.

---

*Digest generated from GitHub activity 2026-04-25 → 2026-04-26. All links point to `https://github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-26

## 1. Today's Overview

NanoClaw showed **high development velocity** with 28 PRs updated in the last 24 hours (17 open, 11 merged/closed) against only 3 issues, indicating a contributor-driven sprint focused on feature delivery and security hardening. The project is actively merging substantial capabilities including a **web channel**, **voice transcription**, and **YNAB integration**, while simultaneously addressing critical security boundaries around container/host filesystem isolation and webhook payload handling. No new releases were cut, suggesting maintainers are accumulating changes for a larger version bump. The contributor base appears broad and engaged, with multiple first-time and returning contributors submitting production-quality PRs.

---

## 2. Releases

**No new releases** for 2026-04-26.

Latest release status remains unchanged. The absence of a release despite significant merged features (web channel, Proton suite, quad-inbox) suggests either: (a) pending stabilization of open security PRs, or (b) preparation for a coordinated major/minor version release.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Description | Significance |
|:---|:---|:---|:---|
| [#2015](https://github.com/qwibitai/nanoclaw/pull/2015) | jbaruch | CI: `jbaruch/coding-policy` automated PR review workflows (OpenAI + Anthropic) | **Process infrastructure** — enforces code quality at scale; self-gating on `Author-Model:` declarations shows sophisticated AI-native workflow design |
| [#1863](https://github.com/qwibitai/nanoclaw/pull/1863) | VivianBalakrishnan | **Web channel** — browser-based chat UI with zero external dependencies | **Major feature** — eliminates Redis/separate app requirement; broadens deployment scenarios |
| [#2010](https://github.com/qwibitai/nanoclaw/pull/2010) | ira-at-work | Consolidated `/add-signal` skill, removed redundant v2 | **Debt reduction** — merges battle-tested adapter knowledge into canonical skill |
| [#2005](https://github.com/qwibitai/nanoclaw/pull/2005) | ming0627 | Mount security: graceful handling of malformed `container.json` shapes | **Stability** — prevents `TypeError` crashes from Docker shorthand syntax |
| [#1879](https://github.com/qwibitai/nanoclaw/pull/1879) | jorgenclaw | Voice transcription V2 (superseded by #2003) | **Redirected** — closed at maintainer request; implementation moved container-side per @gavrielcohen feedback |
| [#1362](https://github.com/qwibitai/nanoclaw/pull/1362) | jorgenclaw | `/add-quad-inbox` skill for async container→host task handoff | **Ecosystem bridge** — enables Claude Code (Quad) integration pattern |
| [#1117](https://github.com/qwibitai/nanoclaw/pull/1117) | jorgenclaw | **Proton suite completion** — 36 MCP tools across Mail/Pass/Drive/Calendar/VPN | **Major feature** — largest third-party service integration to date |

**Key advancement**: The web channel (#1863) and Proton suite (#1117) represent substantial capability expansions, while the coding-policy CI (#2015) signals project maturation toward enterprise-grade governance.

---

## 4. Community Hot Topics

| Item | Type | Heat Indicator | Analysis |
|:---|:---|:---|:---|
| [#2016](https://github.com/qwibitai/nanoclaw/pull/2016) | PR (Open) | New skill, financial integration | **YNAB without MCP** — community demand for "sovereign" (no external server) financial tool access; uses OneCLI secrets pattern showing ecosystem convergence around lightweight auth |
| [#1968](https://github.com/qwibitai/nanoclaw/pull/1968) | PR (Open, multi-commit) | Per-agent provider/model config | **Core architecture** — 5-commit chain enabling chat-driveable model selection; high complexity, high impact; "genuinely depend on earlier ones" indicates careful sequencing for reviewability |
| [#2003](https://github.com/qwibitai/nanoclaw/pull/2003) | PR (Open) | Voice transcription V2 re-submission | **Sovereignty debate** — explicit maintainer feedback ("do as little as possible host-side") driving architectural pattern; container-side default aligns with project security posture |
| [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) | PR (Open) | Free local Whisper transcription | **Cost sensitivity** — dual backend support (openai-whisper/whisper.cpp) with RHEL/Rocky 9 workarounds shows enterprise deployment awareness |

**Underlying needs**: (1) **Zero-cost operation** — multiple PRs optimize for free/local alternatives to paid APIs; (2) **Deployment flexibility** — LXC, RHEL, Ubuntu edge cases actively addressed; (3) **Security sovereignty** — container isolation as non-negotiable default.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) | **Host file read/delete via container-controlled outbox paths** — container can manipulate host filesystem through trusted path injection | **PR open**, security-labeled |
| **Critical** | [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) | **Trust only canonical channels remote** — channel installer executes code from arbitrary git remotes | **PR open**, security-labeled |
| **Critical** | [#2000](https://github.com/qwibitai/nanoclaw/pull/2000) | **Uncapped webhook bodies** — memory exhaustion before adapter validation | **PR open**, security-labeled |
| **High** | [#2011](https://github.com/qwibitai/nanoclaw/pull/2011) | **Fail-open on invalid `engage_pattern` regex** — broken restriction becomes no restriction | **PR open** |
| **High** | [#2013](https://github.com/qwibitai/nanoclaw/pull/2013) | **Poll-loop test teardown** — `runPollLoop` lacks abort, crashes post-test with `SQLITE_MISUSE` | **PR open** |
| **Medium** | [#2014](https://github.com/qwibitai/nanoclaw/issues/2014) | `install-node.sh` hangs on Ubuntu with `needrestart` kernel upgrade prompt | **Open issue**, no PR |
| **Medium** | [#2006](https://github.com/qwibitai/nanoclaw/issues/2006) | Docker socket permission denied on Debian 12 LXC — group membership not effective in same session | **Open issue**, no PR |
| **Medium** | [#2005](https://github.com/qwibitai/nanoclaw/pull/2005) | Mount validator crashes on Docker shorthand syntax | **Merged** ✓ |

**Assessment**: Three concurrent security PRs (#2000/#2001/#2004) from `Hinotoi-agent` indicate either coordinated security audit or active threat response. The fail-open regex bug (#2011) is particularly concerning for production deployments relying on pattern-based access control.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Evidence | Likelihood in Next Release |
|:---|:---|:---|:---|
| **Per-agent model/provider selection** | 🔥🔥🔥🔥🔥 | [#1968](https://github.com/qwibitai/nanoclaw/pull/1968) — 5-commit chain, actively updated | **Very high** — core architectural change, near completion |
| **Local voice transcription (container-side)** | 🔥🔥🔥🔥🔥 | [#2003](https://github.com/qwibitai/nanoclaw/pull/2003) + [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) competing approaches | **High** — one will merge; container-side default favored |
| **Web channel (browser UI)** | 🔥🔥🔥🔥🔥 | [#1863](https://github.com/qwibitai/nanoclaw/pull/1863) **merged** | **Shipped** — available in next release |
| **YNAB integration** | 🔥🔥🔥🔥 | [#2016](https://github.com/qwibitai/nanoclaw/pull/2016) — follows established OneCLI secrets pattern | **High** — clean implementation, low risk |
| **Usage logging/observability** | 🔥🔥🔥🔥 | [#2012](https://github.com/qwibitai/nanoclaw/pull/2012) — opt-in, per-query cost tracking | **Medium-high** — billing use case clear, but optional |
| **Telegram rich media** | 🔥🔥🔥 | [#2008](https://github.com/qwibitai/nanoclaw/pull/2008) — typed media APIs for inline previews | **Medium** — quality-of-life, not blocking |
| **Agent-to-agent reply routing** | 🔥🔥🔥 | [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) — session threading fix | **Medium** — bugfix for multi-channel groups |

**Predicted next version focus**: Security hardening + per-agent configuration + web channel GA + voice transcription.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User | Context | Root Cause |
|:---|:---|:---|:---|
| Setup hangs | javexed | Ubuntu, `needrestart` prompts | Interactive system tools blocking unattended install |
| Permission denied | dooha333 | Debian 12 LXC fresh install | `usermod -aG docker` requires re-login; not handled in same-shell setup |
| — | — | — | — |

### Positive Signals
- **#2017**: "keep it going sir this is awesome!" — enthusiasm for project direction (though issue retracted, sentiment remains)
- **Proton suite** (#1117): 36 tools suggests heavy personal/work productivity use
- **Quad inbox** (#1362): Bridge to Claude Code indicates professional developer adoption

### Use Case Evolution
- **Financial sovereignty**: YNAB skill (#2016) without MCP server → users want **self-hosted financial data**
- **Voice messaging**: Two competing Whisper implementations → **mobile-first, async communication**
- **Multi-agent workflows**: Agent-to-agent routing fix (#2002) → **team/organizational deployment patterns**

---

## 8. Backlog Watch

| Item | Age | Status | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [#1117](https://github.com/qwibitai/nanoclaw/pull/1117) Proton suite | ~6 weeks | **Merged today** | Resolved | — |
| [#1362](https://github.com/qwibitai/nanoclaw/pull/1362) Quad inbox | ~5 weeks | **Merged today** | Resolved | — |
| [#1879](https://github.com/qwibitai/nanoclaw/pull/1879) Voice V1 | ~4 days | Closed, superseded by #2003 | Redirected | Monitor #2003 container-side approach |
| [#1968](https://github.com/qwibitai/nanoclaw/pull/1968) Per-agent config | ~2 days | Open, multi-commit | **Review bottleneck** | Maintainer review of chained commits; potential for partial merge |

**Emerging attention needed**:
- **Security triage**: Three `Hinotoi-agent` security PRs (#2000/#2001/#2004) opened same day — coordinated review warranted
- **Test infrastructure**: Poll-loop teardown (#2013) suggests broader async cleanup patterns may need audit
- **Setup robustness**: Two distinct setup failures (#2014, #2006) on common platforms (Ubuntu, Debian LXC) indicate install path needs hardened for unattended/containerized environments

---

*Digest generated from GitHub activity 2026-04-25 to 2026-04-26. All links: https://github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-26

## 1. Today's Overview

NullClaw shows moderate community activity with **3 issues and 1 PR updated in the past 24 hours**, though no new releases were cut. The project appears to be in a **stabilization phase** following the April 17 version release, with community attention concentrated on the `web_search` functionality and gateway performance on constrained environments. Notably, the same user who reported a now-fixed `http_request` bug has escalated concerns about search capabilities for low-resource deployments, suggesting an unresolved tension between NullClaw's design goals and practical deployment constraints. The single merged PR addresses documentation gaps but does not resolve the underlying architectural limitations being debated. Overall project health is **cautiously stable** with active issue triage but no feature velocity.

---

## 2. Releases

*No new releases for 2026-04-26. Latest version remains `2026.4.17`.*

---

## 3. Project Progress

| PR | Status | Description |
|:---|:---|:---|
| [#815 fix(web_search): add setup guidance for missing providers](https://github.com/nullclaw/nullclaw/pull/815) | **Merged/Closed** | Improved failure reporting when no search provider is configured; added setup guidance pointing users to `http_request.search_base_url` for SearXNG and API key environment variables for hosted providers |

**Assessment:** This PR represents a **documentation/UX fix** rather than architectural improvement. It closes the loop on [#812](https://github.com/nullclaw/nullclaw/issues/812) but deliberately does not address the core request for built-in DuckDuckGo support without external dependencies.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#812 [bug] http_request](https://github.com/nullclaw/nullclaw/issues/812) | **7 comments, 1 👍** — **Most discussed** | User `uMendex` (same author as #871) reported internet search failures; resolved through configuration guidance. **Underlying need:** Users expect "batteries included" search without external API keys or self-hosted infrastructure. The high comment count reflects confusion gap between docs and actual setup complexity. |
| [#871 [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support](https://github.com/nullclaw/nullclaw/issues/871) | **0 comments, 0 👍** — **New, escalated severity** | Direct follow-up to #812's closure. User explicitly frames NullClaw's value proposition (cheap/weak devices) as **contradicted by current search architecture**. This is a **product-market fit signal** requiring maintainer response. |
| [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870) | **0 comments, 0 👍** — **New** | Performance regression on common developer environment (WSL2). Gateway functional but resource-wasteful. |

**Key Insight:** The `uMendex` user journey (#812 → #815 merge → #871 escalation) reveals a **frustrated early adopter** who liked NullClaw's organization but is hitting a wall on core functionality. Their migration path from PicoClaw/ZeroClaw suggests competitive comparison shopping.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| 🔴 **High** | [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870) | **No fix PR** | Continuous 100% CPU on idle gateway. Affects WSL2 (Windows 11, x86_64), `nullclaw 2026.4.17`. Functional but resource-destructive; likely `epoll`/`accept4` interaction bug in async runtime. |
| 🟡 **Medium-High** | [#871 web_search impractical on low-resource devices](https://github.com/nullclaw/nullclaw/issues/871) | **No fix PR; #815 is docs-only** | Architectural limitation, not crash bug. But labeled "Critical" by reporter; breaks core use case. |
| 🟢 **Resolved** | [#812 http_request](https://github.com/nullclaw/nullclaw/issues/812) | Fixed via [#815](https://github.com/nullclaw/nullclaw/pull/815) | Configuration/documentation issue. |

**Stability Assessment:** Two open bugs with **zero comments from maintainers** as of 2026-04-25. The WSL2 CPU spin is particularly concerning for developer experience and could indicate broader async I/O issues.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Built-in DuckDuckGo scraping** (no API key, no SearXNG) | [#871](https://github.com/nullclaw/nullclaw/issues/871) | Low-Medium | Directly conflicts with current architecture pushing users to hosted providers/SearXNG. Would require HTML parsing, rate limiting, ToS compliance. However, aligns with stated "cheap device" mission. |
| **Improved provider fallback chain** | Implied by #815, #871 | Medium | Smaller scope than full DuckDuckGo integration; could degrade gracefully when no API keys configured. |
| **WSL2 performance optimization** | [#870](https://github.com/nullclaw/nullclaw/issues/870) | High | Likely affects broader Linux async I/O; fixable without feature work. |

**Prediction:** If maintainers engage with #871, expect a **middle-ground solution**—perhaps a lightweight DuckDuckGo provider with clear ToS caveats—rather than full architectural reversal.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **"Organized" vs. "Doesn't work"** | #812: "I liked NullClaw and it seems very organized. But I've been trying to enable the internet search capability since Friday" | 😐 Frustrated by gap between polish and functionality |
| **Mission drift concern** | #871: "intended NullClaw use case: running on weak, cheap, low-resource devices" | 😠 Core value proposition feels broken |
| **Competitive evaluation** | #812: "I came from Picoclaw, where I also tested ZeroClaw" | 🔄 Active comparison shopping; retention risk |
| **Silent failures** | #815 fix addresses "no reliable search provider is actually configured" | 😕 Poor error discoverability |

**Critical Pain Point:** Users discover NullClaw for its lightweight philosophy, then find search requires **heavier infrastructure** (API keys, SearXNG hosting) than competitors. The `#815` documentation fix treats symptom, not disease.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#870 Gateway accept4 busy loop](https://github.com/nullclaw/nullclaw/issues/870) | 1 day | **Escalating** | Requires maintainer reproduction on WSL2; likely affects Docker-on-Windows users broadly. No response yet. |
| [#871 web_search low-resource impracticality](https://github.com/nullclaw/nullclaw/issues/871) | 1 day | **Reputational/product-market fit** | Needs explicit architectural decision: commit to lightweight search or clarify that API keys/SearXNG are required. Silence risks losing `uMendex`-type users to competitors. |

**Watch:** Both issues opened 2026-04-25 with **zero maintainer engagement** as of digest date. Given #812's 7-comment history, #871 may similarly escalate without prompt response.

---

*Digest generated from github.com/nullclaw/nullclaw data. All links: `https://github.com/nullclaw/nullclaw/issues/XXX` or `/pull/XXX`*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-26

## 1. Today's Overview

IronClaw shows **high-velocity development** with 24 PRs and 6 issues updated in the last 24 hours, though **merge throughput remains low** (only 2 PRs closed/merged vs. 22 open). The project is actively addressing MCP (Model Context Protocol) transport bugs and expanding channel integrations, but the growing backlog of XL-sized PRs suggests potential review bottleneck risks. Two competing PRs (#2957, #2960) targeting the same stdio MCP bug indicate coordination challenges. Live canary failures in `provider-matrix` and `private-oauth` lanes signal **staging stability concerns** requiring attention.

---

## 2. Releases

**No new releases** (v0.25.0 remains latest, built from source per issue reports).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|---|---|---|---|
| #2951 | henrypark133 | **[CLOSED]** Codex LLM tool schema shaping for NEAR AI — extracted shared `tool_schema.rs`, switched NEAR AI to `FlattenOnly` policy | [PR #2951](https://github.com/nearai/ironclaw/pull/2951) |
| #2868 | henrypark133 | **[CLOSED]** Engine V2 `available_actions` callable-only cleanup for blocked providers — consolidated work from #2869, #2876, #2889 | [PR #2868](https://github.com/nearai/ironclaw/pull/2868) |

Both closed PRs relate to **Engine V2 architecture evolution** (#2767 epic), suggesting milestone convergence on the engine rewrite.

### Notable Active Development (Open PRs)

- **Native Matrix channel** (#2019) — XL PR by new contributor `devrandom` with E2EE support, approaching merge readiness after 3 weeks
- **MCP prompts support** (#2958) — New feature by `rajulbhatnagar` adding `/prompts` command, HTTP API, and server-prompt mentions
- **Self-service secrets + durable approvals** (#2754) — Core contributor `serrrfirat` advancing security UX

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments/Reactions | Analysis |
|---|---|---|
| **#2923** — stdio MCP activation fails | 2 comments, 1 👍 | **Re-filed bug** after incorrect closure; reveals governance issue where non-maintainer comments closed valid issues. Underlying need: **clearer MCP transport documentation and maintainer triage protocols** | [Issue #2923](https://github.com/nearai/ironclaw/issues/2923) |
| **#78** — P3 messaging channels (iMessage, Matrix, LINE, Feishu, Teams) | 2 comments | **Long-running roadmap tracker** (Feb→Apr); Matrix PR #2019 in progress addresses subset. Underlying need: **enterprise messaging ubiquity** to compete with closed platforms | [Issue #78](https://github.com/nearai/ironclaw/issues/78) |

### Emerging High-Interest

- **#2962** — ACP agent permission delegation to web UI: Zero comments but strategically significant for **sandboxed agent security model** | [Issue #2962](https://github.com/nearai/ironclaw/issues/2962)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|---|---|---|---|---|
| **🔴 High** | #2956 — Live canary: `provider-matrix openai-compatible` | **OPEN, no fix PR** | None | Staging CI failure, blocks release confidence | [Issue #2956](https://github.com/nearai/ironclaw/issues/2956) |
| **🔴 High** | #2955 — Live canary: `private-oauth` | **OPEN, no fix PR** | None | OAuth lane failure on dedicated runner — **potential auth regression** | [Issue #2955](https://github.com/nearai/ironclaw/issues/2955) |
| **🟡 Medium** | #2923 — stdio MCP OAuth discovery fails | **OPEN, 2 competing fix PRs** | #2957, #2960 | Transport wired but pre-flight buggy; **duplicate PR effort indicates coordination gap** | [Issue #2923](https://github.com/nearai/ironclaw/issues/2923) |
| **🟡 Medium** | #2946 — `llm_backend` overwritten on startup | **OPEN, fix PR ready** | #2961 | Config priority inversion (DB > env > file > defaults) not respected; **breaks self-hosted deployments** | [Issue #2946](https://github.com/nearai/ironclaw/issues/2946) |

### Stability Assessment
- **Two canary failures** without resolution PRs is concerning for a project at v0.25.0
- **Config durability bug (#2946)** directly impacts self-hosted users, a core use case

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **MCP prompts support** | PR #2958 | **High** | Single-day PR turnaround, experienced contributor, spec-compliant |
| **Native Matrix channel** | PR #2019, Issue #78 | **Medium-High** | 3-week maturity, E2EE feature-gated, addresses P3 roadmap item |
| **ACP permission delegation UI** | Issue #2962 | **Medium** | Security-critical for sandboxed agents, but requires web UI + ACP spec alignment |
| **Prismer Cloud IM** | PR #1120 | **Medium** | WASM pattern proven, but 6-week open duration suggests review backlog |
| **Signet cryptographic audit** | PR #2684 | **Medium** | Zero DB changes reduces risk, but Ed25519 integration needs security review |
| **Engine V2 migration CLI** | PR #2728 | **High** | Core contributor, `migrate` feature-gated, OpenClaw/Hermes compatibility critical for adoption |

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Source |
|---|---|---|
| **Self-hosted config not respected** | Forces NearAI default, breaks local LLM setups (vLLM, LiteLLM) | #2946, #2961 |
| **MCP stdio "support" confusion** | Valid bug dismissed, wasted reporter time, trust erosion | #2923 comments |
| **Log readability** | Module paths truncated at 200px, debugging friction | #2919 |
| **Chat title UX** | Hex hash IDs instead of descriptive titles | #2700 |

### Use Case Signals
- **Enterprise/self-hosted**: Strong demand for `openai_compatible` provider stability, local secret management (#2754)
- **Multi-platform messaging**: Matrix, iMessage, Teams integrations tracked but delivery pace lags demand
- **Agent interoperability**: ACP (Agent Communication Protocol) emerging as explicit priority for sandboxed tool use

### Satisfaction/Dissatisfaction
- **Positive**: Rapid feature iteration (MCP prompts, web_fetch tool), responsive bug fixes (same-day PRs for #2923, #2946)
- **Negative**: Issue triage quality (#2474→#2923 re-file), canary reliability, config durability regressions in "stable" v0.25.0

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| **#78 P3 messaging channels** | 71 days | Medium | Roadmap clarity: which channels get native vs. WASM vs. MCP implementation? | [Issue #78](https://github.com/nearai/ironclaw/issues/78) |
| **#2019 Native Matrix** | 22 days | Medium | XL PR by new contributor; needs maintainer review to prevent staleness | [PR #2019](https://github.com/nearai/ironclaw/pull/2019) |
| **#1120 Prismer Cloud IM** | 44 days | Medium | WASM channel pattern established, but no merge momentum | [PR #1120](https://github.com/nearai/ironclaw/pull/1120) |
| **#1446 Aliyun Coding Plan** | 37 days | Medium | Large feature PR (XL, new contributor), potential rebase burden | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) |
| **#1470 Notification normalization** | 37 days | Low | Languishing despite being "ready" — low-risk, should be easy merge | [PR #1470](https://github.com/nearai/ironclaw/pull/1470) |

### Maintainer Attention Required
- **Duplicate PR resolution**: #2957 vs #2960 for #2923 — `rajulbhatnagar` and `willamhou` both submitted fixes within hours; needs consolidation
- **Canary lane ownership**: #2955, #2956 auto-filed by `github-actions[bot]` with no human response pattern established

---

*Digest generated from IronClaw GitHub activity 2026-04-25 → 2026-04-26. Project health: **Active development, moderate review throughput, staging stability concerns**.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-26

## 1. Today's Overview

LobsterAI shows **high engineering velocity with 10 merged/closed PRs against 1 open PR** in the past 24 hours, indicating active development by the NetEase Youdao team. However, **zero new releases** and a **stagnant issue backlog** (4 open issues, all marked stale with last updates 2+ months ago) reveal a disconnect between core development and community support. The PR activity is dominated by a single release cycle (2026.04.24) with multiple reverts and re-landings, suggesting some instability in the cowork/session management subsystem. Community issues around third-party integrations (Feishu, Telegram) and sandbox configuration remain unaddressed despite user engagement. Overall project health: **strong internal iteration, weak external responsiveness**.

---

## 2. Releases

**No new releases** in the past 24 hours. The latest merged PR #1826 indicates a **2026.04.24 release branch** was integrated, but no GitHub release was published.

---

## 3. Project Progress

### Merged/Closed PRs (10 items)

| PR | Author | Focus | Key Change |
|:---|:---|:---|:---|
| [#1826](https://github.com/netease-youdao/LobsterAI/pull/1826) | liuzhq1986 | Multi-area release | **Major feature**: Remote embedding providers (OpenAI, Gemini) for memory search; CJK memory search fix on Windows; cowork session lifecycle fixes |
| [#1827](https://github.com/netease-youdao/LobsterAI/pull/1827) | liuzhq1986 | DeepSeek V4 | Extended thinking mode wrapper to anthropic-messages API format |
| [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) | fisherdaddy | DeepSeek v4 | Fixed forced `reasoning_content` requirement during tool calls when thinking is enabled by default |
| [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | fisherdaddy | OpenAI + proxy | Fixed OpenAI official models becoming inaccessible when proxy is enabled |
| [#1817](https://github.com/netease-youdao/LobsterAI/pull/1817) | liuzhq1986 | Cowork session | Sync session model so agent reports current model correctly after mid-session switches |
| [#1820](https://github.com/netease-youdao/LobsterAI/pull/1820) | liuzhq1986 | Cowork lifecycle | Prevent fallback timer from completing newer run's turn |
| [#1824](https://github.com/netease-youdao/LobsterAI/pull/1824) | liuzhq1986 | Revert-revert | Re-landed #1820 after revert |
| [#1825](https://github.com/netease-youdao/LobsterAI/pull/1825) | liuzhq1986 | Revert-revert | Re-landed #1817 after revert |
| [#1821](https://github.com/netease-youdao/LobsterAI/pull/1821) | liuzhq1986 | Revert | Reverted #1817 (temporary) |
| [#1822](https://github.com/netease-youdao/LobsterAI/pull/1822) | liuzhq1986 | Revert | Reverted #1820 (temporary) |

**Open PR:**
- [#1823](https://github.com/netease-youdao/LobsterAI/pull/1823) — `fisherdaddy/fix schema or payload` (no description, likely follow-up fix)

**Technical narrative**: The revert chain (#1820→#1822→#1824, #1817→#1821→#1825) indicates **cowork session management is a complex, regression-prone area**. The team used a "revert and re-land" strategy, suggesting either CI failures or manual testing discovered edge cases post-merge.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#39](https://github.com/netease-youdao/LobsterAI/issues/39) Feishu connected but no reply | 4 comments, stale since Feb 22 | **Core integration reliability** — Feishu (Lark) webhook/bot configuration is a critical enterprise use case; users cannot self-diagnose message flow failures |
| [#44](https://github.com/netease-youdao/LobsterAI/issues/44) Telegram connection failure | 3 comments, user provided screenshots | **Documentation/UX gap** — User followed official docs, regenerated tokens, enabled global proxy; still fails. Suggests either missing proxy configuration in app or undocumented Telegram Bot API restrictions |
| [#54](https://github.com/netease-youdao/LobsterAI/issues/54) Sandbox cannot read Feishu config | 1 comment | **Security vs. usability tension** — User wants to inject env files for secrets without exposing plaintext to sandbox; current architecture blocks local file modification |
| [#72](https://github.com/netease-youdao/LobsterAI/issues/72) Auto-fetch models | 1 comment, 1 👍 | **Onboarding friction** — API key + base URL auto-populate but model list doesn't; also questions local model internet access capabilities |

**Underlying needs**: Better **observability/logging** for integration debugging, **secrets management** for sandboxed skills, **dynamic model discovery**, and clearer **network architecture documentation** (proxy behavior, local vs. remote model routing).

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | Proxy breaks OpenAI official model access | **Fixed** — merged |
| **High** | [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) | DeepSeek v4 tool calls fail with default thinking mode | **Fixed** — merged |
| **High** | [#1820/#1824](https://github.com/netease-youdao/LobsterAI/pull/1820) | Cowork session race condition: fallback timer completes wrong run | **Fixed** — merged after revert cycle |
| **Medium** | [#1817/#1825](https://github.com/netease-youdao/LobsterAI/pull/1817) | Agent reports stale model name after mid-session switch | **Fixed** — merged after revert cycle |
| **Medium** | [#39](https://github.com/netease-youdao/LobsterAI/issues/39) | Feishu silent message failures | **Open** — no fix PR, 2+ months stale |
| **Medium** | [#44](https://github.com/netease-youdao/LobsterAI/issues/44) | Telegram connection failures despite correct config | **Open** — no fix PR, 2+ months stale |
| **Low-Medium** | [#54](https://github.com/netease-youdao/LobsterAI/issues/54) | Sandbox file system restrictions block secrets injection | **Open** — design limitation, not bug |

**Regression risk**: The revert dance on cowork fixes suggests **insufficient automated testing for session state machines**. Recommend integration tests covering rapid successive messages and model switches.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Remote embedding providers** | Shipped in #1826 | ✅ Delivered |
| **Auto model discovery from API endpoints** | [#72](https://github.com/netease-youdao/LobsterAI/issues/72) | 🔶 High — small UX win, common pattern |
| **Sandbox secrets/env injection** | [#54](https://github.com/netease-youdao/LobsterAI/issues/54) | 🔶 Medium — requires security architecture review |
| **Better Feishu/Telegram diagnostics** | [#39](https://github.com/netease-youdao/LobsterAI/issues/39), [#44](https://github.com/netease-youdao/LobsterAI/issues/44) | 🔷 Low — infrastructure integrations deprioritized vs. core AI features |
| **Local model internet access toggle** | [#72](https://github.com/netease-youdao/LobsterAI/issues/72) comment | 🔶 Medium — relates to routing architecture |

**Predicted next release focus**: Memory/embedding system hardening (just shipped), DeepSeek model compatibility, and possibly model discovery UX. Third-party chat platform reliability likely remains backlog.

---

## 7. User Feedback Summary

### Pain Points
- **Integration opacity**: Feishu/Telegram failures with no error surfaces for debugging (#39, #44)
- **Configuration friction**: Model setup requires manual entry despite API credentials being present (#72)
- **Security constraints**: Sandbox model prevents reasonable secrets management workflows (#54)
- **Proxy complexity**: OpenAI + proxy interaction was broken until today's fix (#1818)

### Use Cases
- **Enterprise messaging**: Feishu (Chinese enterprise) and Telegram (global) as primary interfaces
- **Local AI deployment**: Users running local models want seamless internet/tool access
- **Multi-model workflows**: Switching models mid-session is expected behavior

### Satisfaction Assessment
- **Core AI capabilities**: Improving (memory search, model compatibility fixes)
- **Developer experience**: Mixed (good embedding config, poor sandbox flexibility)
- **Integration reliability**: **Poor** — longest-running issues are platform connections with no resolution path

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#39](https://github.com/netease-youdao/LobsterAI/issues/39) Feishu no reply | **63 days** | High — enterprise adoption blocker | Needs repro steps, logging enhancement, or integration test |
| [#44](https://github.com/netease-youdao/LobsterAI/issues/44) Telegram failure | **63 days** | High — user provided debug info, no response | Needs maintainer acknowledgment; possibly proxy config documentation |
| [#54](https://github.com/netease-youdao/LobsterAI/issues/54) Sandbox secrets | **62 days** | Medium — security architecture decision | Needs design response: will sandbox support env injection or alternative? |
| [#72](https://github.com/netease-youdao/LobsterAI/issues/72) Auto model fetch | **61 days** | Low-Medium — UX papercut | Straightforward enhancement, community 👍 indicates demand |

**Critical gap**: All 4 open issues were **simultaneously marked stale on 2026-04-25** (yesterday), suggesting a bulk bot action rather than human triage. No maintainer comments were added. This **automation without engagement** risks community trust erosion, especially for users who provided detailed reproductions (e.g., #44's screenshots).

---

*Digest generated from GitHub activity 2026-04-25. LobsterAI repository: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-26

## 1. Today's Overview

Moltis showed **moderate development velocity** over the past 24 hours with 7 PRs updated (4 open, 3 merged/closed) and 2 issues touched (1 resolved, 1 active bug). No new releases were cut. Activity centers on **infrastructure hardening** (sandboxing, cron reliability), **MCP ecosystem alignment**, and **UI/UX polish** for web chat. The project demonstrates healthy maintenance patterns with quick turnaround on bug fixes, though the open PR backlog is growing across multiple feature fronts.

---

## 2. Releases

**None** — No releases published today.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Author | Description | Impact |
|---|---|---|---|
| [#874](https://github.com/moltis-org/moltis/pull/874) | penso | **fix(mcp): prefer native MCP tools over mcporter** — Removes bundled `mcporter` skill, adds prompt guidance for direct `mcp__<server>__<tool>` invocation | **Ecosystem alignment**: Eliminates confusing compatibility-layer indirection; clarifies skills vs. tools mental model |
| [#871](https://github.com/moltis-org/moltis/pull/871) | Cstewart-HC | **feat(cron): add heartbeat wake cooldown** — Prevents exec-completion callbacks from re-firing heartbeat in tight loops | **Reliability**: Fixes potential runaway execution bug in agent scheduling |
| [#870](https://github.com/moltis-org/moltis/pull/870) | Cstewart-HC | **feat(skills): bundled skill whitelist/blacklist filtering** — Configurable `whitelist_mode`, `bundled_whitelist`, `bundled_blacklist` with wildcard support | **Governance**: Gives operators fine-grained control over bundled skill exposure |

**Key advancement**: MCP architecture is being actively rationalized—native tool calling is now first-class, reducing complexity for both users and maintainers.

---

## 4. Community Hot Topics

**No items with comments or reactions** — All 9 tracked items show `0` comments and `0` 👍. This indicates either:
- Low community engagement/volume at this project stage
- Discussion happening off-GitHub (Discord, internal Slack, etc.)
- Maintainers are self-merging with minimal review overhead

**Most structurally significant open PRs by scope**:

| PR | Link | Underlying Need |
|---|---|---|
| #869 Obscura browser backend | [PR #869](https://github.com/moltis-org/moltis/pull/869) | **Browser flexibility**: Users want lightweight alternatives to Chromium for sandboxed browsing; sidecar pattern avoids dependency bloat |
| #866 Landlock FS isolation | [PR #866](https://github.com/moltis-org/moltis/pull/866) | **Security hardening**: Production deployments need kernel-level sandbox guarantees beyond seccomp |
| #876 File upload for web chat | [PR #876](https://github.com/moltis-org/moltis/pull/876) | **UX parity**: Web UI must match baseline expectations set by ChatGPT/Claude/major providers |

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? |
|---|---|---|---|
| **Medium** | [#875](https://github.com/moltis-org/moltis/issues/875) — Can't disable bundled skill via Web | **OPEN** | **Related**: [#870](https://github.com/moltis-org/moltis/pull/870) merged with whitelist/blacklist filtering, but Web UI toggle specifically may still be broken |
| **Resolved** | [#873](https://github.com/moltis-org/moltis/issues/873) — Qwen3.6-35B-A3B MCP server issues | CLOSED | Unknown resolution path; zero comments suggests possible self-close or off-thread fix |

**Assessment**: The open bug #875 has a **temporal connection** to PR #870 (same day, same subsystem), but #870's config-file filtering may not address the Web UI toggle specifically. A follow-up PR is likely needed to wire the new `SkillsConfig` fields to the web frontend.

---

## 6. Feature Requests & Roadmap Signals

**Inferred from PR activity** (no explicit feature-request issues):

| Signal | Likely Near-Term Inclusion | Confidence |
|---|---|---|
| File upload in web chat (#876) | **High** — Small, scoped UX fix matching industry standard | 85% |
| Obscura browser backend (#869) | **Medium-High** — Clean sidecar pattern, zero new deps, 30-line integration | 75% |
| Landlock sandboxing (#866) | **Medium** — Security-critical but needs kernel/runtime testing matrix | 60% |
| Compaction summary_model wiring (#826) | **Medium** — Technical debt reduction, partially addresses fork issue | 70% |

**Predicted next release focus**: MCP ecosystem stabilization + web UI parity features.

---

## 7. User Feedback Summary

**Explicit pain points from issues**:

| Issue | Pain Point | User Context |
|---|---|---|
| #873 | Model-specific MCP server breakage | Power users with local/self-hosted models (Qwen3.6-35B-A3B) hitting compatibility edges |
| #875 | Web UI control gap | Operators need runtime skill management without config-file restarts |

**Satisfaction indicators**: Quick bug-to-PR turnaround on #870/#875 suggests responsive maintainers.  
**Dissatisfaction risk**: Zero-comment issues may indicate users hitting walls and silently leaving, or insufficient issue templates prompting detail.

---

## 8. Backlog Watch

| PR/Issue | Age | Risk | Needs Attention |
|---|---|---|---|
| [#826](https://github.com/moltis-org/moltis/pull/826) compaction summary_model | 4 days | **Medium** — Technical debt, referenced as "partially addresses fork issue #1" | Review/merge to prevent fork drift |
| [#866](https://github.com/moltis-org/moltis/pull/866) Landlock isolation | 2 days | **High** — Security-critical, complex kernel interaction | CI testing on old kernels, container environments; maintainer security review |
| [#869](https://github.com/moltis-org/moltis/pull/869) Obscura backend | 2 days | **Low** — Clean, isolated addition | Final review, documentation for opt-in activation |

**Emerging pattern**: Cstewart-HC and penso are carrying most feature load. PR #826's "fork issue #1" reference hints at **downstream fragmentation risk** if compaction provider configuration isn't resolved promptly.

---

*Digest generated from GitHub activity 2026-04-25 to 2026-04-26. All links: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-26

## 1. Today's Overview

CoPaw (QwenPaw) shows **elevated community activity** with 14 issues and 10 PRs updated in the last 24 hours, alongside a patch release (v1.1.4.post2). The project is experiencing **configuration persistence as a critical systemic theme**—multiple independent reports confirm that agent settings, vector model configurations, and UI preferences fail to survive refreshes or restarts. The maintainers are actively shipping fixes (approval workflow fix merged today), but the volume of open issues (13 of 14 remain unresolved) suggests **strain on issue resolution velocity**. The community is expanding platform support (Tauri desktop, model management UX) while grappling with core stability in Windows environments and MCP integrations.

---

## 2. Releases

### [v1.1.4.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4.post2) — Patch Release

| Aspect | Detail |
|--------|--------|
| **Type** | Hotfix patch |
| **Changes** | 2 PRs merged |
| **Breaking Changes** | None identified |
| **Migration Notes** | Direct upgrade from v1.1.4.post1 recommended |

**Included Fixes:**
- **[#3832](https://github.com/agentscope-ai/QwenPaw/pull/3832)** `fix: fix approval not working in channel` — by @rayrayraykk — Resolves workflow approval failures in channel contexts
- **[#3833](https://github.com/agentscope-ai/QwenPaw/pull/3833)** `chore: bump version to 1.1.4.post2` — Version bump

**Assessment:** Minimal patch addressing a specific channel authentication regression. Does **not** address the configuration persistence crisis dominating issue reports.

---

## 3. Project Progress

### Merged/Closed PRs Today (3 total)

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| [#3832](https://github.com/agentscope-ai/QwenPaw/pull/3832) | @rayrayraykk | **Merged** | Fixes channel approval workflow—unblocks teams using approval-gated deployments |
| [#3833](https://github.com/agentscope-ai/QwenPaw/pull/3833) | @rayrayraykk | **Merged** | Release infrastructure |
| [#2338](https://github.com/agentscope-ai/QwenPaw/pull/2338) | @jinglinpeng | **Closed** | UI language persistence to server-side config (first-time contributor work; may need revival) |

### Active Feature Development (7 Open PRs)

| PR | Author | Focus | Maturity |
|----|--------|-------|----------|
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) | @bowenliang123 | **Model Management UX overhaul** — replaces "Auto Discover" with browsable, searchable, batch-selectable remote model lists | Near-ready; substantial UX improvement |
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | @ekzhu | **Async LLM-generated session titles** — replaces "first 10 chars" placeholder in Console | Polish feature; improves perceived quality |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | @youngchan1988 | **Tauri 2.x desktop support** — replaces Electrobun; cross-platform native app | Early; significant architectural shift |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | @hellogxp | **Semantic skill routing** — embedding-based skill filtering to reduce token consumption | Under review since Apr 8; needs discussion |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | @no-teasy | **Vector model connection testing** — diagnostic feature for embedding model health | New; addresses operational pain |
| [#3834](https://github.com/agentscope-ai/QwenPaw/pull/3834) | @shadowabi | **ACP config inheritance in fallback profiles** — fixes `opencode` command resolution | Bugfix; targets config system |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | @hanson-hex | **Frontend test infrastructure** — Vitest setup, 21 test files, Chat page pilot | Infrastructure; long-running (since Apr 18) |

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement + severity)

| Rank | Issue/PR | Comments | Core Need |
|------|----------|----------|-----------|
| 1 | **[#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)** [Bug] 切换按钮或者刷新页面后配置信息全部丢掉 | **4 comments** | **Configuration persistence as existential UX failure** — users cannot trust any settings |
| 2 | **[#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826)** [Question] Windows rendering broken in 1.1.4 | 3 comments *(closed)* | Platform compatibility — regression from 1.1.2→1.1.4 |
| 3 | **[#3821](https://github.com/agentscope-ai/QwenPaw/issues/3821)** [Question] 备份从未成功过 | 3 comments | **Backup reliability** — operational data safety |
| 4 | **[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)** [Question] 长期记忆向量模型配置失效 | 3 comments | **Vector model config persistence** — root cause identified by user (initialization overwrites `agent.json`) |

### Underlying Needs Analysis

- **Configuration architecture crisis**: Issues #3824, #3817, #3828 all trace to a **dual-config system** (`config.json` vs `agent.json`) with conflicting precedence and no synchronization mechanism. Users save to one location; runtime reads from another.
- **Operational trust erosion**: Backup failures (#3821) + config loss + Windows rendering regressions create perception of instability for production deployments.
- **Self-hosted Docker complexity**: Multiple reports from Docker users suggest host networking, volume persistence, and initialization timing are under-documented failure modes.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **🔴 Critical** | **[#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)** | All agent config (language, plan mode, long-term memory LLM) lost on refresh/service restart | **No fix PR**; PR #3834 (ACP fallback) tangentially related |
| **🔴 Critical** | **[#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822)** | MCP causes infinite hang in chat — "严重问题" (serious issue) | **No fix PR**; error in `stateful_client.py:480` |
| **🟠 High** | **[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)** | Vector model config reset to empty strings on container restart; user identified root cause (4-second initialization overwrite) | **No fix PR**; PR #3831 adds connection test (diagnostic only) |
| **🟠 High** | **[#3828](https://github.com/agentscope-ai/QwenPaw/issues/3828)** | `config.json` `agents.running` out of sync with `agent.json`; WebUI shows "lost" config | **No fix PR**; architectural fix needed |
| **🟠 High** | **[#3795](https://github.com/agentscope-ai/QwenPaw/issues/3795)** | Frequent `422 MODEL_EXECUTION_FAILED` on complex operations | **No fix PR** |
| **🟡 Medium** | **[#3836](https://github.com/agentscope-ai/QwenPaw/issues/3836)** | `browser_use` fails with `ERR_INTERNET_DISCONNECTED` — likely environment/networking, not core bug | **No fix PR** |
| **🟡 Medium** | **[#3835](https://github.com/agentscope-ai/QwenPaw/issues/3835)** | Cannot rename/delete custom ACP agents in WebUI | **No fix PR** |
| **🟡 Medium** | **[#3827](https://github.com/agentscope-ai/QwenPaw/issues/3827)** | Cannot restore secrets | **No fix PR** |
| **🟢 Low/Resolved** | **[#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826)** | Windows 10/2012 rendering broken in 1.1.4, works in 1.1.2 | **Workaround identified** (downgrade); root cause unaddressed |

**Stability Assessment:** **Concerning**. Three critical/high severity config persistence bugs with **zero fix PRs** in 24h. The one merged fix (#3832) was for an unrelated approval workflow. The configuration system appears to need architectural intervention, not incremental patches.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Configuration persistence overhaul** | #3824, #3817, #3828, #2338 | **Very High** | Blocking multiple users; PR #2338 (server-side persistence) was closed but approach is validated by demand |
| **Vector model connection health checks** | #3831 (PR), #3817 | **High** | PR exists and is narrow-scope; aligns with operational needs |
| **Semantic skill routing** | #3117 | **Medium** | Mature PR, but "needs discussions" since Apr 8; may miss next release |
| **Tauri desktop app** | #3813 | **Medium-Low** | Large surface area; Electrobun replacement is strategic but risky |
| **Async session titles** | #3829 | **High** | Polish feature, low risk, PR ready |
| **Per-message shell env injection** | #3825 | **Medium** | Niche but well-specified; MCP/skill ecosystem need |
| **Dream callback retry mechanism** | #3820 | **Medium** | Nightly memory optimization reliability; isolated change |
| **Automated backup API/CLI** | #3823 | **Low-Medium** | Requested but no PR; infrastructure gap |

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **"配置丢失" (config loss)** | #3824: "严重bug"; #3817: "每次容器重启后...被重置为空字符串" | 🔴 Severe |
| **Backup never succeeds** | #3821: "备份从未成功过"; "显示一分钟左右然后跳回" | 🔴 Severe |
| **Windows compatibility regression** | #3826: "只有个外框"; downgrade to 1.1.2 required | 🟠 High |
| **MCP instability** | #3822: "无限期卡死"; "严重问题" | 🟠 High |
| **Console GUI performance** | #3830: "increasingly unresponsive"; "long chat sessions" | 🟡 Moderate |

### Use Cases & Satisfaction Signals

- **Docker self-hosting** is dominant deployment mode but fragile (#3817, #3821, #3828)
- **MCP ecosystem adoption** growing but hitting reliability walls (#3822)
- **Windows enterprise users** exist but underserved (#3826)
- **Positive**: Users actively diagnose root causes (#3817 detailed analysis, #3828 architectural analysis) indicating invested technical community

### Satisfaction Verdict: **Declining**. Multiple "严重" (serious/severe) labels from users. The config persistence issue is fundamental enough to threaten retention.

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **[#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)** Semantic skill routing | **18 days** open | Feature stall | Decision on embedding-based routing architecture |
| **[#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559)** Frontend test infrastructure | **8 days** open | Quality debt | Review Vitest setup; unblock testing culture |
| **[#2338](https://github.com/agentscope-ai/QwenPaw/pull/2338)** UI language persistence | **Closed today** | Lost work | Revive server-side persistence approach for config crisis |
| **[#3820](https://github.com/agentscope-ai/QwenPaw/issues/3820)** Dream callback retry | New | Memory optimization reliability | Triage for nightly cron stability |
| **[#3825](https://github.com/agentscope-ai/QwenPaw/issues/3825)** Shell env injection | New | MCP/skill extensibility | Evaluate for shell tool architecture |

### Critical Gap: **No open PR addresses the config persistence crisis** (#3824, #3817, #3828). This requires either:
1. Unified config source of truth (eliminate `config.json`/`agent.json` duality)
2. Atomic write + fsync for `agent.json`
3. Startup initialization that respects existing config over empty defaults

**Recommended Priority:** Emergency patch for config persistence before next feature release.

---

*Digest generated from GitHub activity 2026-04-25 to 2026-04-26. All links reference `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-26

**Repository:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
**Period:** 2026-04-25 (24h snapshot)

---

## 1. Today's Overview

ZeptoClaw showed **moderate maintenance activity** with four PRs updated in the last 24 hours, though zero issue activity suggests either a stable codebase or limited community engagement. The project is currently in a **dependency maintenance and CI hardening phase** rather than active feature development. Notably, the maintainer (qhkm) is actively shepherding external contributions through branch ownership changes due to OAuth workflow scope limitations—a recurring friction point. No releases were cut, indicating these changes are being batched or are not yet deemed user-facing enough to warrant versioning. Overall project health appears **stable but maintenance-heavy**, with attention on preventing silent build regressions in optional features.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest release remains unspecified in available data.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#544](https://github.com/qhkm/zeptoclaw/pull/544) | **expand CI coverage for optional integration features** — by @manelsen; closes #545 | **Infrastructure hardening**: Added compile-checks for `channel-email`, `google`, `provider-vertex`, `whatsapp-web` feature flags that previously "drifted silently behind the default build." Includes two compatibility fixes for `memory-embedding` and `screenshot` paths. |
| [#547](https://github.com/qhkm/zeptoclaw/pull/547) | **chore(deps): bump sha2 0.10 → 0.11** — by @qhkm | **Breaking dependency migration**: Fixed three call sites where `sha2` 0.11's `finalize()` output changed from `GenericArray` (impls `LowerHex`) to `hybrid-array::Array` (does not). Replaced `format!("{:x}", hasher.finalize())` with `hex::encode(hasher.finalize())`. |
| [#517](https://github.com/qhkm/zeptoclaw/pull/517) | **chore(deps): bump sha2 from 0.10.9 to 0.11.0** — by @dependabot[bot] | **Superseded by #547**: Dependabot's automated PR; closed in favor of maintainer's manual fix that included the required code adaptations. |

### Open PR (1 item)

| PR | Description | Status |
|:---|:---|:---|
| [#548](https://github.com/qhkm/zeptoclaw/pull/548) | **chore(ci): expand CI matrix for optional integration features** — by @qhkm | **Cherry-pick of #544** under author-owned branch to resolve OAuth `workflow` scope wall (same issue as #521/#542). Awaiting review/merge. |

**Key advancement**: The CI matrix expansion prevents **silent compilation failures** in optional integration paths—a quality issue that could block users enabling non-default features.

---

## 4. Community Hot Topics

No issues with comments or reactions exist in the dataset. The most notable **social/technical friction** is the **recurring OAuth `workflow` scope limitation**, which has now affected at least three PRs ([#521](https://github.com/qhkm/zeptoclaw/pull/521), [#542](https://github.com/qhkm/zeptoclaw/pull/542), [#544](https://github.com/qhkm/zeptoclaw/pull/544)/[#548](https://github.com/qhkm/zeptoclaw/pull/548)). This pattern suggests:

- **Contributors using GitHub's web UI or tokens with insufficient scopes** cannot push workflow changes
- **Maintainer workaround**: Cherry-picking to author-owned branches, which creates friction and may discourage external contributions
- **Underlying need**: Either document required OAuth scopes in `CONTRIBUTING.md`, or restructure CI permissions to reduce this bottleneck

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **High** (build-breaking) | `sha2` 0.11 migration | `digest` v0.11 changed `finalize()` return type; three `format!("{:x}", ...)` call sites broke compilation | **Fixed** in [#547](https://github.com/qhkm/zeptoclaw/pull/547) |
| **Medium** (silent failure risk) | Optional feature drift | `memory-embedding`, `screenshot`, `channel-email`, `google`, `provider-vertex`, `whatsapp-web` paths not compile-checked in CI; could break for users enabling them | **Fix in progress** via [#548](https://github.com/qhkm/zeptoclaw/pull/548) |

No runtime crashes or regressions reported today. The `sha2` issue was **caught before release**—positive signal for pre-merge quality control, though Dependabot's naive bump (#517) without code fixes suggests automated dependency tooling needs human oversight for breaking changes.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** in today's data. However, infrastructure signals suggest near-term priorities:

| Signal | Implication |
|:---|:---|
| CI expansion for `provider-vertex` | Google Vertex AI integration is being treated as **first-class supported path** |
| `whatsapp-web`, `channel-email` | Messaging channel breadth is **strategic focus** |
| `memory-embedding` | Vector/embedding memory **not just experimental** but expected to compile reliably |
| `screenshot` | Vision/UI automation capabilities **maturing beyond prototype** |

**Prediction for next version**: Likely a **patch or minor release** bundling these CI-validated compatibility fixes, possibly with formalized support for the newly-tested integration matrix. No major feature release signals detected.

---

## 7. User Feedback Summary

**No direct user feedback** (issues, discussions, or commented PRs) in the 24-hour window. Indirect signals:

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| Optional features fail to compile when enabled | CI expansion PRs explicitly note "drifted silently behind default build" | **High** for non-default users |
| Contribution friction from OAuth scopes | Three PRs affected; maintainer doing manual cherry-picks | **Medium** for contributor experience |
| Dependency update fragility | Dependabot PR (#517) required human override (#547) | **Medium** for maintainer workload |

**Satisfaction**: Unknown—no positive testimonials or satisfaction signals captured.  
**Dissatisfaction**: Silent failures suggest users may encounter build issues without clear reporting channels, or may abandon non-default configurations rather than report.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **OAuth `workflow` scope documentation/guidance** | Recurring since at least #521 (date unknown) | **Contributor attrition**: External contributors may abandon PRs when hits permission wall | Document required token scopes; consider `pull_request_target` workflow or bot-assisted branch promotion |
| **#548 open PR** | ~1 day | **Low immediate risk**, but blocks CI matrix completion | Maintainer review/merge; verify no delta from #544 |

No long-unanswered critical issues identified—issue count is zero. However, the **recurring OAuth friction pattern** represents a **process debt** that may benefit from proactive repository policy changes rather than per-PR workarounds.

---

*Digest generated from GitHub API data. All links reference https://github.com/qhkm/zeptoclaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-26

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 issues and 43 PRs updated in the last 24 hours, though **no new release was cut**. The project is in active stabilization mode ahead of the v0.7.4 milestone, with significant engineering effort directed at provider compatibility (DeepSeek-V4, Ollama, Gemini), multi-agent architecture RFCs, and infrastructure cleanup. Notably, 31 PRs remain open versus 12 merged/closed, suggesting a backlog building at the merge gate. Community engagement is strong with multilingual participation (Chinese, English), though several S1-severity workflow blockers remain unresolved.

---

## 2. Releases

**No new releases** — v0.7.4 milestone tracking continues at [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877). The previous v0.7.3 was an emergency release due to "broken tags blowout," indicating recent release process instability.

---

## 3. Project Progress

### Merged/Closed Today
| PR | Description | Significance |
|---|---|---|
| [#6111](https://github.com/zeroclaw-labs/zeroclaw/pull/6111) | CI workflow rename + Paperclip review feedback wiring | Infrastructure hygiene |
| — | *Only 1 PR closed vs. 31 open* | **Merge velocity concern** |

### Active Development (Key Open PRs)
- **[#6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112)** — Matrix channel fixes: cleartext reactions, thread context, live cron registry (core stability)
- **[#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107)** — DeepSeek V4 `reasoning_content` capture from streaming (blocks [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059))
- **[#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)** — Massive onboard wizard rewrite (8,534→schema-driven, XL size, medium risk)
- **[#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788)** — Mozilla Fluent i18n pipeline + multi-locale docs overhaul (XL, foundational)
- **[#6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098)** — Dead code removal (566-line orphan `tracker.rs`)

---

## 4. Community Hot Topics

| Issue/PR | 🔥 Activity | Underlying Need |
|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) **Web dashboard unavailable** | 25 comments, CLOSED | **Build/distribution complexity** — users struggle with manual web asset compilation; install script gaps persist |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) **Per-sender RBAC** | 7 comments | **Enterprise/multi-tenant readiness** — single-instance multi-user isolation critical for B2B adoption |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) **Document `web_dist_dir`** | 7 comments, CLOSED | **Configuration discoverability** — env vars poorly documented, causing deployment friction |
| [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) **v0.7.4 milestone** | 6 comments | **Release predictability** — community tracking when blockers clear |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) **Schema v3 migrations** | 6 comments | **Breaking change coordination** — merge blocker preventing batch landings |
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) **DeepSeek-V4 incompatibility** | 6 comments | **Provider diversity** — thinking-mode APIs diverge from OpenAI format |

**Analysis**: The community is split between **operators struggling to deploy** (web dashboard, config, install) and **power users needing enterprise features** (RBAC, multi-agent, schema stability). The 25-comment #4866 resolution without systemic fix suggests recurring distribution pain.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **S0** — Data loss/security | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) `web_dist_dir` docs | CLOSED | N/A (docs) |
| **S0** — Data loss/security | [#6090](https://github.com/zeroclaw-labs/zeroclaw/issues/6090) Telegram misconfigured Anthropic call | OPEN | None identified |
| **S1** — Workflow blocked | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) Tool call `call_id` mismatch | OPEN, in-progress | None identified |
| **S1** — Workflow blocked | [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web channel broken | OPEN, in-progress | None identified |
| **S1** — Workflow blocked | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) Ollama provider fails when tools needed | OPEN | None identified |
| **S1** — Workflow blocked | [#6100](https://github.com/zeroclaw-labs/zeroclaw/issues/6100) ACP server v1 schema missing | OPEN, blocked | [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) (ACP tool output fix, related) |
| **S2** — Degraded | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API format | OPEN | [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) |
| **S2** — Degraded | [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) Ollama `tool_count=0` hardcode | OPEN | None identified |
| **S2** — Degraded | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) Local image reading failed | OPEN | None identified |
| **S2** — Degraded | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) `install.sh` missing web dashboard extraction | OPEN | None identified |

**Critical pattern**: **Ollama provider has two independent S1/S2 bugs** ([#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459), [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)) with no fix PRs — local/self-hosted AI workflow severely degraded. DeepSeek-V4 fix is in active PR.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in v0.7.4+ | Blocker |
|---|---|---|---|
| **Multi-agent UX flow** | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) (RFC), [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) (tracker) | Medium | RFC review period, core team vote per #5577 |
| **Per-sender RBAC** | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Medium-High | Schema v3 migration ([#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)) |
| **Schema v3 breaking migrations** | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | **High (merge blocker)** | All checklist items must complete |
| **i18n prompts** | [#5930](https://github.com/zeroclaw-labs/zeroclaw/issues/5930) CLOSED | Implemented via [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | — |
| **MCP → Xcode integration** | [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) | Low | External ecosystem dependency |
| **Discord channel restrictions** | [#6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075) | Medium | Config surface expansion |
| **Web UI chat clear** | [#6077](https://github.com/zeroclaw-labs/zeroclaw/issues/6077) | Medium | Gateway UI work |
| **Nextcloud Talk streaming** | [#6048](https://github.com/zeroclaw-labs/zeroclaw/pull/6048) | Medium | PR in review |

**Prediction**: Schema v3 + onboard rewrite ([#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)) + i18n pipeline ([#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788)) form a **foundational trio for v0.8.0**. v0.7.4 will likely ship with DeepSeek fix + critical bug patches only.

---

## 7. User Feedback Summary

### 😤 Pain Points
- **"It doesn't work out of the box"**: Web dashboard missing from install, config paths with `~` fail silently, build flags don't propagate ([#6066](https://github.com/zeroclaw-labs/zeroclaw/issues/6066), [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096), [#6079](https://github.com/zeroclaw-labs/zeroclaw/issues/6079))
- **Provider roulette**: Ollama, DeepSeek, Gemini all have active breakage — self-hosted and alternative-API users disproportionately affected
- **"My agent doesn't know its own capabilities"**: Cron tool invisible to agent ([#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)), tool calls fail mysteriously

### 😊 Positive Signals
- Active Matrix/Nextcloud/Discord channel expansion shows **platform breadth demand**
- MCP ecosystem interest ([#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)) — users want ZeroClaw *inside* their existing workflows
- Raspberry Pi deployment mentioned ([#6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075)) — **resource-efficiency valued**

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web broken | ~30 days | **Channel abandonment** | Maintainer assignment, feature flag audit |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) Ollama `tool_count=0` | ~19 days | **Local AI broken** | Provider owner review; trivial fix (remove hardcode?) |
| [#5318](https://github.com/zeroclaw-labs/zeroclaw/issues/5318) Partial stream_mode hide thinking | ~21 days | UX polish | Design decision on reasoning visibility |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) i18n XL PR | ~10 days | **Merge stall** | Final review, conflict resolution |
| [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) Onboard rewrite XL PR | ~5 days | **Release blocker** | Risk assessment, incremental merge strategy |

**Urgent maintainer action**: Ollama provider has **two unassigned bugs** affecting a popular self-hosted stack. The XL PR backlog (#5788, #5960) risks cascading merge conflicts given 31 open PRs.

---

*Digest generated from 50 issues + 43 PRs updated 2026-04-25→26. Project health: **active development, high velocity, merge bottleneck emerging, provider stability gaps.***

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*