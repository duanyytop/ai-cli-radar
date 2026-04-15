# OpenClaw Ecosystem Digest 2026-04-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-15 00:17 UTC

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

# OpenClaw Project Digest — 2026-04-15

---

## 1. Today's Overview

OpenClaw remains a highly active open-source project with **500 issues and 500 PRs updated in the last 24 hours**, indicating a large, engaged contributor base and rapid iteration cycle. The project shipped **two releases** (`v2026.4.14` and `v2026.4.14-beta.1`) focused on model provider improvements for the GPT-5 family and Telegram enhancements. However, **the same-day release triggered a wave of regression reports**, particularly around `openai-codex` provider failures, onboarding crashes, and context engine breakages. With **414 open issues** against 86 closed and **313 open PRs** against 187 merged/closed, the project's velocity is high but its signal-to-noise ratio on stability is tightening. Maintainer attention appears stretched across provider compatibility, UI polish, and emerging security concerns.

---

## 2. Releases

### [v2026.4.14](https://github.com/openclaw/openclaw/releases/tag/v2026.4.14) — openclaw 2026.4.14
- **Focus:** Broad quality release centered on model provider improvements, explicit turn handling for **GPT-5 family models**, and channel provider fixes.
- **Changes:**
  - OpenAI Codex/models: add forward compatibility improvements (note: truncated in release notes as "add forwar").
- **Performance:** Core codebase refactors for overall performance.
- **Breaking changes / migration notes:** None explicitly documented, but **user reports indicate regressions** for `openai-codex/gpt-5.4` and `lossless-claw` context engine immediately after upgrade.

### [v2026.4.14-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.14-beta.1) — openclaw 2026.4.14-beta.1
- **Changes:**
  - **Telegram forum topics:** Surface human-readable topic names in agent context, prompt metadata, and plugin hook metadata by learning names from Telegram forum service messages. ([#65973](https://github.com/openclaw/openclaw/issues/65973), thanks @ptahdunbar)
- **Fixes:**
  - **UI/chat:** Replaced `marked.js` with `markdown-it` to mitigate maliciously crafted markdown rendering vulnerabilities.

---

## 3. Project Progress

### Merged/Closed PRs Today (selected)

| PR | Author | Summary | Status |
|---|---|---|---|
| [#65628](https://github.com/openclaw/openclaw/pull/65628) | @hxy91819 | Added `discussion_comment` support to secret-scanning maintainer skill (GraphQL-based delete/recreate commands). | **Closed** |
| [#66878](https://github.com/openclaw/openclaw/pull/66878) | @jamr-erebor | Added `/spawn` subagent command alias with Slack thread-aware follow-up resolution. | **Closed** |

### Notable Open PRs Advancing Features

| PR | Author | What It Advances |
|---|---|---|
| [#66871](https://github.com/openclaw/openclaw/pull/66871) | @duqaXxX | Guards OpenAI/Codex response payload overflow **before** provider rejection — addresses transport-layer reliability. |
| [#66877](https://github.com/openclaw/openclaw/pull/66877) | @martinfrancois | Sanitizes Telegram binary document payloads (`.epub`, `.mobi`) to prevent prompt inflation via reply/quote side paths. |
| [#66852](https://github.com/openclaw/openclaw/pull/66852) | @gumadeiras | Blocks dreaming self-ingestion in `memory-core`, preventing synthetic memory loops. |
| [#66808](https://github.com/openclaw/openclaw/pull/66808) | @Ghitahouir | Adds **ZeroEntropy** as a first-class memory embeddings provider with auto-detection. |
| [#48000](https://github.com/openclaw/openclaw/pull/48000) | @Jerry-Xin | Fixes memory search to return **relevant snippets around matches** instead of file beginnings. |
| [#66851](https://github.com/openclaw/openclaw/pull/66851) / [#66873](https://github.com/openclaw/openclaw/pull/66873) | @holeshotclaw | Introduces **isolated repo slot workflows** for agent runs using git worktrees, with branch enforcement for subagents. |
| [#66331](https://github.com/openclaw/openclaw/pull/66331) | @acwilan | Adds **per-agent TTS and STT overrides**, enabling multi-agent speech configuration. |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Reactions | Topic | Link |
|---|---|---|---|---|
| **RFC: Native Agent Identity & Trust Verification** | 86 | 0 | Decentralized identity (DID/VC/ERC-8004) for agent trust | [#49971](https://github.com/openclaw/openclaw/issues/49971) |
| **Memory Leak — OOM on basic commands (2026.3.12)** | 29 | 0 | CLI crashes with JS heap OOM on `gateway status`, `doctor` | [#45064](https://github.com/openclaw/openclaw/issues/45064) |
| **openai-codex/gpt-5.3-codex does not execute any tools** | 17 | 3 | Regression: tool calling completely broken on GPT-5.3 Codex | [#53959](https://github.com/openclaw/openclaw/issues/53959) |
| **macOS companion app fails gateway auth token over SSH tunnel** | 16 | 6 | Auth token propagation gap in remote gateway workflows | [#13552](https://github.com/openclaw/openclaw/issues/13552) |
| **Telegram DM voice-note transcription silently fails** | 15 | 2 | Audio attachments filtered out by `normalizeAttachments` | [#62496](https://github.com/openclaw/openclaw/issues/62496) |

### Underlying Needs Analysis

- **Trust & Identity ([#49971](https://github.com/openclaw/openclaw/issues/49971)):** The community is pushing for **verifiable agent-to-agent identity** beyond API keys. This signals OpenClaw's expansion into multi-agent orchestration where provenance matters.
- **Provider Fragility ([#53959](https://github.com/openclaw/openclaw/issues/53959), [#66633](https://github.com/openclaw/openclaw/issues/66633), [#66674](https://github.com/openclaw/openclaw/issues/66674)):** Rapid OpenAI/Codex model iterations are creating a **compatibility treadmill**. Users need provider abstraction that decouples from vendor release cadence.
- **Memory & Context Reliability ([#45064](https://github.com/openclaw/openclaw/issues/45064), [#64068](https://github.com/openclaw/openclaw/issues/64068), [#53426](https://github.com/openclaw/openclaw/issues/53426)):** The `memory-core` and `lossless-claw` subsystems are experiencing **structural instability** — OOMs, missing module resolution, and zero-candidate dreaming promotions.

---

## 5. Bugs & Stability

### Critical / High Severity (New or Worsened Today)

| Issue | Severity | Summary | Fix PR? |
|---|---|---|---|
| [#66601](https://github.com/openclaw/openclaw/issues/66601) | **Critical** | `v2026.4.14` causes repeated `lossless-claw` context engine errors, rendering system unusable. | None identified |
| [#66693](https://github.com/openclaw/openclaw/issues/66693) | **Critical** | Onboarding crashes with `TypeError: Cannot read properties of undefined (reading 'trim')` on channel selection. | None identified |
| [#66718](https://github.com/openclaw/openclaw/issues/66718) | **Critical** | `openclaw configure` wizard crashes with same `trim` TypeError in Channels section. | None identified |
| [#66633](https://github.com/openclaw/openclaw/issues/66633) | **High** | `openai-codex` provider fails with Cloudflare 403 on every request after 2026.4.12 → 2026.4.14 upgrade. | None identified |
| [#66674](https://github.com/openclaw/openclaw/issues/66674) | **High** | `openai-codex/gpt-5.4` direct CLI inference fails, surfaces HTML rawError as "DNS lookup failed." | None identified |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | **High** | `gpt-5.3-codex` executes **zero tools** (exec, MCP, web search) after 2026.3.23-2. | None identified |
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | **High** | Persistent JS heap OOM on basic CLI commands since 2026.3.12. | None identified |

### Medium Severity

| Issue | Summary | Fix PR? |
|---|---|---|
| [#66207](https://github.com/openclaw/openclaw/issues/66207) | Control UI chat flickers: sent messages disappear for 1–2s then reappear. | None |
| [#62496](https://github.com/openclaw/openclaw/issues/62496) | Telegram DM voice transcription fails due to `allMedia[n].path is undefined`. | None |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | Azure Foundry GPT models reject request schema / tool payload (regression in 2026.4.11). | None |
| [#55030](https://github.com/openclaw/openclaw/issues/55030) | WhatsApp 30-minute heartbeat causes cascading reconnects every ~60s. | None |
| [#63132](https://github.com/openclaw/openclaw/issues/63132) | STT provider requests blocked by SSRF guard for private/LAN IPs (regression in 2026.4.7). | None |

### Stability Assessment
**Concerning.** The `v2026.4.14` release introduced multiple **same-day critical regressions** affecting onboarding, core context engine, and primary OpenAI/Codex provider paths. The `trim` TypeError cluster ([#66693](https://github.com/openclaw/openclaw/issues/66693), [#66718](https://github.com/openclaw/openclaw/issues/66718)) suggests an unhandled undefined value in channel configuration parsing that slipped through QA.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|---|---|---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | Native Agent Identity & Trust Verification (DID/VC/ERC-8004) | Medium — high community interest, but architectural |
| [#66474](https://github.com/openclaw/openclaw/issues/66474) | Support **Agent Discovery Protocol** (`/.well-known/agent-discovery.json`) | Medium — aligns with multi-agent direction |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | **Sensitive data masking** in configs, logs, and UI | High — security/compliance demand, scoped well |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | `memory_search` recursive subdirectory search (`memory/**/*.md`) | Medium — long-standing, clear user need |
| [#30998](https://github.com/openclaw/openclaw/issues/30998) | **Tool output compression middleware** for context optimization | Medium — performance/cost win, needs design |
| [#33413](https://github.com/openclaw/openclaw/issues/33413) | Slack: show **tool-level progress** in assistant thread status | Medium — UX polish, channel-specific |
| [#51130](https://github.com/openclaw/openclaw/issues/51130) | **Gateway restart notification** to users | Medium — reliability UX, likely small scope |

### Signals from Active PRs
- **Isolated repo slots** ([#66851](https://github.com/openclaw/openclaw/pull/66851), [#66873](https://github.com/openclaw/openclaw/pull/66873)) and **per-agent TTS/STT** ([#66331](https://github.com/openclaw/openclaw/pull/66331)) are large, near-landing features that will likely ship in `v2026.4.x` or `v2026.5.x`.
- **Plugin hook observability** ([#33914](https://github.com/openclaw/openclaw/pull/33914), [#33915](https://github.com/openclaw/openclaw/pull/33915), [#39206](https://github.com/openclaw/openclaw/pull/39206)) indicates a strategic investment in **agent loop extensibility and policy gating**.

---

## 7. User Feedback Summary

### Pain Points
1. **Release stability is eroding trust.** Multiple users report upgrading to latest and immediately hitting breakages (onboarding, provider, context engine).
2. **OpenAI/Codex provider is a single point of fragility.** Users on GPT-5.3 and GPT-5.4 experience tool execution failures, Cloudflare blocks, and mislabeled DNS errors.
3. **Memory subsystem is opaque and brittle.** Dreaming, embeddings, and context engines (`lossless-claw`, `memory-core`) produce silent failures, zero-candidate promotions, or hard crashes.
4. **Security hygiene gaps.** API keys in plaintext, partial masking leaking credentials, and untrusted issue bodies injected into prompts ([#45740](https://github.com/openclaw/openclaw/issues/45740)) worry production users.
5. **Channel-specific regressions.** Telegram voice notes, WhatsApp reconnects, Feishu streaming duplicates, and Discord slash commands all show **per-channel maintenance debt**.

### Positive Signals
- Users value **rapid feature delivery** (forum topics, markdown-it security fix, ZeroEntropy support).
- The **multi-agent / subagent workflow** (repo slots, `/spawn`) is gaining traction as a differentiated capability.
- Community contributions are **high-quality and well-scoped** (e.g., @ptahdunbar's Telegram forum work).

---

## 8. Backlog Watch

### Long-Unanswered Important Items Needing Maintainer Attention

| Issue/PR | Age | Why It Needs Attention |
|---|---|---|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | ~1 month | **JS heap OOM** makes CLI unusable; no fix PR, high comment count. |
| [#31708](https://github.com/openclaw/openclaw/issues/31708) | ~1.5 months | **5x API costs** from ineffective prompt caching; re-file of closed issue, actively discussed. |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | ~1.5 months | **Control UI requires HTTPS/localhost secure context** — blocks VPS deployments, common support thread. |
| [#27996](https://github.com/openclaw/openclaw/issues/27996) | ~1.5 months | **Cron scheduler `nextRunAtMs` stale** after edits — reliability bug for automation users. |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | ~1.5 months | **Recursive memory search** — clear feature gap, stale label. |
| [#29552](https://github.com/openclaw/openclaw/issues/29552) | ~1.5 months | **Version mismatch** preventing gateway pairing — persistent since 2026.2.25. |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | ~2 months | **Typecast TTS provider** — large, well-structured PR awaiting review. |
| [#33914](https://github.com/openclaw/openclaw/pull/33914) / [#33915](https://github.com/openclaw/openclaw/pull/33915) / [#39206](https://github.com/openclaw/openclaw/pull/39206) | ~1.5 months | **Plugin hook infrastructure** — marked `[claude, human developer oversight]`, security-sensitive, stalled. |

---

*Digest generated from GitHub activity for openclaw/openclaw on 2026-04-15.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Assistant Ecosystem
## April 15, 2026

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing intense, sustained development across more than a dozen active projects, with daily issue and PR volumes rivaling mature infrastructure software. Three clear tiers have emerged: **established leaders** (OpenClaw, ZeroClaw, QwenPaw) pushing 50+ daily tracked items; **fast-followers** (NanoBot, Hermes Agent, IronClaw, Moltis, LobsterAI) shipping aggressively with focused feature sets; and **specialized or early-stage projects** (PicoClaw, NanoClaw, NullClaw, ZeptoClaw) carving out niches around edge deployment, WhatsApp-centric workflows, or Rust-based implementations. The dominant shared challenge across all projects is **provider compatibility fragility**—rapid vendor model iterations (GPT-5 family, Kimi, Qwen, Gemini via OpenRouter) are creating a compatibility treadmill that consumes disproportionate engineering bandwidth. Simultaneously, **MCP (Model Context Protocol) ecosystem support**, **multi-agent orchestration**, and **memory persistence beyond context windows** have become table-stakes capabilities rather than differentiators.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Notes |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.4.14 + beta | 🔴 **Stressed** | Extreme velocity, same-day critical regressions, signal-to-noise tightening |
| **NanoBot** | 41 | 65 | v0.1.5.post1 | 🟢 **Strong** | Shipping aggressively, context compression headline feature |
| **Hermes Agent** | 50 | 50 | None | 🟡 **Active/Complex** | Same-day critical fixes, no release, Web UI gap dominates |
| **PicoClaw** | 8 | 30 | Nightly only | 🟡 **Review-constrained** | 19 open PRs, WebUI nearing deliverable |
| **NanoClaw** | 0 | 21 | None | 🟢 **Mature/Clean** | Zero open issues, high merge velocity, v2 modernization |
| **NullClaw** | 5 | 5 | None | 🟡 **Stable/Bandwidth-limited** | All PRs open, no merges, contributor energy present |
| **IronClaw** | 50 | 50 | None | 🔴 **Stabilization phase** | P0 bug cluster against 0.25.0 staging, not production-ready |
| **LobsterAI** | 2 | 24 | None (pending) | 🟢 **Pre-release integration** | Clean backlog, release/2026.04.14 branch active |
| **TinyClaw** | 0 | 0 | None | ⚫ **Inactive** | No activity |
| **Moltis** | 12 | 13 | 20260414.02 + 20260413.06 | 🟢 **Responsive** | Same-day fixes, MCP/tool-schema focus |
| **CoPaw / QwenPaw** | 46 | 46 | v1.1.1 + beta | 🟡 **Active/Stressed** | Rebrand chaos, critical installer bugs |
| **ZeptoClaw** | 1 | 12 | None | 🟡 **Maintenance-heavy** | 100% Dependabot PRs, zero human merges |
| **ZeroClaw** | 50 | 50 | None | 🔴 **High velocity, low closure** | 6 merged vs. 44 open PRs, S0/S1 bug cluster |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale and ecosystem dominance**: OpenClaw's 500 issues/500 PRs in 24 hours is an order of magnitude larger than any peer, reflecting a mature plugin ecosystem, broad channel coverage, and the largest contributor base.
- **Feature completeness**: First-mover advantages in subagent workflows (`/spawn`, isolated repo slots), memory architecture (ZeroEntropy, `lossless-claw`), and security tooling (ClawGuard scans) are not yet matched.
- **Integration breadth**: Telegram forum topics, Discord, Slack, WhatsApp, Feishu, and MCP support are all actively maintained simultaneously—no competitor matches this channel surface area.

### Technical Approach Differences
- **Architecture**: OpenClaw uses a **modular, plugin-heavy TypeScript/Node.js core** with explicit turn handling for GPT-5 models, whereas ZeroClaw/IronClaw pursue **Rust-based performance and sandboxing**, NanoClaw builds around **containerized task execution**, and Moltis uses a **Rust backend with GraphQL API layer**.
- **Memory model**: OpenClaw's `memory-core` + `lossless-claw` dual system contrasts with Hermes Agent's newly-merged **layered SQLite+FTS5 "mempalace"** and NanoBot's **automatic context compression**—OpenClaw prioritizes fidelity, peers prioritize cost/performance.
- **Release cadence**: OpenClaw ships **daily or same-day releases**, which creates regression risk; LobsterAI and Moltis use **scheduled release branches**; NanoClaw releases infrequently but with near-zero open issues.

### Community Size Comparison
OpenClaw's contributor activity (~1,000 daily tracked items) dwarfs ZeroClaw (~100), QwenPaw (~92), and NanoBot (~106). However, **NanoClaw achieves comparable feature velocity with zero issue backlog**, suggesting OpenClaw's scale has introduced coordination and QA debt that smaller projects avoid.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP ecosystem robustness** | OpenClaw, Moltis, IronClaw, LobsterAI, ZeroClaw | Schema edge cases (`not`, `anyOf`, array types); non-SSE MCP engines; tool dispatch with reasoning text |
| **Provider abstraction / multi-LLM** | OpenClaw, NanoBot, Hermes, IronClaw, ZeroClaw, NanoClaw, Moltis | OpenAI/Codex compatibility treadmill; Qwen, Kimi, Gemini-via-OpenRouter, Ollama, llama.cpp support; `extra_body` passthrough |
| **Memory persistence beyond context** | OpenClaw, Hermes, NanoBot, PicoClaw, NanoClaw, ZeroClaw | Automatic compression, graph-enhanced memory (mem0/Neo4j), SQLite vector search, layered long-term memory |
| **Multi-agent orchestration** | OpenClaw, Hermes, PicoClaw, QwenPaw, NanoClaw | Subagent spawning, agent discovery/delegation, isolated repo slots, event-driven runtimes |
| **Web UI / accessibility** | Hermes, PicoClaw, IronClaw, LobsterAI, ZeroClaw, QwenPaw | First-class browser interface, Tauri desktop apps, TTS/read-aloud, mobile API channels |
| **Sandbox security hardening** | IronClaw, Moltis, NanoClaw | Container `/proc`/`/sys` masking, Docker-in-Docker detection, runtime sandbox selection |
| **Channel integration reliability** | OpenClaw, NanoBot, Hermes, ZeroClaw, QwenPaw, Moltis | Telegram voice, WhatsApp reconnects, Feishu WebSocket crashes, Slack TLS/OAuth |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Maximum feature/integration breadth | Power users, enterprises, developers | Plugin-heavy TS/Node, daily releases |
| **NanoBot** | Self-managing agent (auto context compression) | Self-hosters, Chinese-model users | Python, aggressive merge culture |
| **Hermes Agent** | Layered long-term memory ("mempalace") | Users needing persistent agent identity | Python, gateway-centric, TUI-first |
| **PicoClaw** | Edge/embedded deployment (OpenWrt, ARM64) | Home server, low-resource users | Rust/Go hybrid, TUI→WebUI transition |
| **NanoClaw** | Container-native WhatsApp agents | Business automation via WhatsApp | Containerized tasks, Claude→OpenAI migration |
| **NullClaw** | Zig-based minimalism | Systems programmers, container-first adopters | Zig, small core, Nix builds |
| **IronClaw** | Rust performance + SaaS staging model | Hosted service operators, near.ai ecosystem | Rust, Docker sandbox, CI-heavy |
| **LobsterAI** | Desktop AI with enterprise China integrations | NetEase Youdao B2B/B2C users | Electron/Node, scheduled tasks, WeCom |
| **Moltis** | Rust safety + GraphQL API + sandboxing | Security-conscious operators, multi-user teams | Rust, GraphQL, Docker/Podman hardening |
| **CoPaw/QwenPaw** | Qwen-native, console-rich experience | Chinese users, visual console preference | Python/TS, rapid rebrand iteration |
| **ZeroClaw** | Rust rewrite of OpenClaw with microkernel ambition | OpenClaw users seeking performance/stability | Rust, WIT interfaces, advanced observability |
| **ZeptoClaw** | Minimal, fast Rust agent | Developers wanting simple self-hosting | Rust + Vite frontend, maintenance mode |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, High Risk)
- **OpenClaw**: Unmatched throughput, but critical regressions are eroding trust.
- **QwenPaw**: Rebrand-driven chaos with 46 PRs/day, but installer stability is failing.
- **IronClaw**: Intense pre-production stabilization; P0 velocity exceeds closure rate.

### Tier 2: Fast-Followers (Healthy Velocity, Improving)
- **NanoBot**: Strong momentum with clear narrative (self-managing agents), good fix velocity.
- **Moltis**: Excellent same-day fix culture, growing contributor base, security-conscious.
- **ZeroClaw**: High activity but **merge-constrained** (44 open PRs); risk of contributor frustration.

### Tier 3: Stabilizing / Niche-Mature
- **NanoClaw**: Remarkably clean (zero issues), focused v2 modernization, small but efficient.
- **Hermes Agent**: No recent release despite major memory architecture merge; Web UI decision pending.
- **LobsterAI**: Pre-release integration phase, internally driven, low community visibility.

### Tier 4: Early / Maintenance-Limited
- **PicoClaw**: WebUI refactor is the make-or-break milestone; review backlog building.
- **NullClaw**: Healthy inbound contributions but zero merges in 24h—review bandwidth gap.
- **ZeptoClaw**: Stalled on dependency backlog, one significant architectural issue unaddressed.
- **TinyClaw**: No activity.

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **The "compatibility treadmill" is the #1 tax** | GPT-5.3/5.4 Codex breakages across OpenClaw, NanoBot, ZeroClaw, QwenPaw; Kimi/Groq/Ollama issues everywhere | **Invest in provider abstraction layers** that decouple from vendor release cadence; expect 20-30% of engineering bandwidth to be reactive |
| **MCP is becoming table stakes, not a differentiator** | Active work in OpenClaw, Moltis, IronClaw, LobsterAI; schema interoperability failures are now shared pain | **Focus on MCP *reliability* and edge-case handling** rather than mere support; non-SSE and strict-mode schema compatibility will separate leaders |
| **Memory architecture is diversifying by use case** | Compression (NanoBot), layered SQLite (Hermes), graph+vector (NanoClaw), context engines (OpenClaw) | **No single memory approach wins**; developers should match technique to user expectation (cost vs. fidelity vs. persistence horizon) |
| **Web UI / mobile accessibility is the new battleground** | Dominates Hermes #501, PicoClaw #806, IronClaw P0s, QwenPaw console investment, ZeroClaw #4866 | **Terminal-first projects are hitting adoption ceilings**; browser and mobile API channels are now critical for growth |
| **Multi-agent orchestration is shifting from hype to implementation** | OpenClaw repo slots, PicoClaw discovery/delegation, QwenPaw mission mode, NanoClaw event-driven architecture | **Start designing for agent identity, delegation, and isolation now**; 2026 releases will be judged on this capability |
| **Security and sandboxing are production blockers** | Moltis `/proc` masking, IronClaw FailSafe audit, ClawGuard 688 findings in Hermes, ZeroClaw HMAC receipts | **Treat sandbox escapes and prompt injection as P0 from day one**; enterprise adoption is gated on verifiable security |
| **Chinese model/provider ecosystem is a distinct market** | QwenPaw rebrand, LobsterAI WeCom/Bailian, NanoBot Qwen/LongCat tutorials, Moltis Qianfan icon | **Supporting Qwen, Kimi, DeepSeek, and Bailian is not optional** for global reach; these integrations require dedicated maintenance |

---

*Report generated from 12 project digests dated 2026-04-15.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-15

---

## 1. Today's Overview

NanoBot saw **extremely high velocity** in the last 24 hours, with **41 issues updated**, **65 pull requests in motion** (37 merged/closed, 28 open), and a **fresh patch release** (`v0.1.5.post1`). The project is clearly in an active shipping phase: maintainers are merging aggressively, the community is growing (+25 new contributors in this release alone), and the focus has shifted from basic stability to **self-managing agent capabilities**—most notably automatic context compression. Activity is healthy but lopsided: many PRs lack review comments (`undefined` comment counts), suggesting either fast-track maintainer merges or limited deep review bandwidth.

---

## 2. Releases

### [v0.1.5.post1](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post1)
> *"If v0.1.5 was about making the building livable, v0.1.5.post1 is about the building learning to take care of itself."*

- **Headline change**: The agent now **compresses its own context** before hitting token limits.
- **Scale**: 80 PRs merged, 25 new contributors.
- **Migration notes**: None explicitly called out; this is positioned as a forward enhancement, not a breaking change.

---

## 3. Project Progress

### Merged/Closed PRs Today (selected by impact)

| PR | What Changed |
|---|---|
| [#3124](https://github.com/HKUDS/nanobot/pull/3124) | **Kimi thinking support**: Enables `thinking` mode for `kimi-k2.5` and `k2.6-code-preview` via `extra_body`, with OpenRouter prefix handling. |
| [#3150](https://github.com/HKUDS/nanobot/pull/3150) | **Retry UX fix**: Adds visible retry-termination warnings to interaction channels instead of silent failure. |
| [#3149](https://github.com/HKUDS/nanobot/pull/3149) | **`/status` task visibility**: Shows active task count in `/status`, directly addressing "is the bot stuck?" debugging. |
| [#3154](https://github.com/HKUDS/nanobot/pull/3154) | **Tool-call argument normalization**: Fixes strict-provider rejections (e.g., Alibaba/Qwen3.6-plus) by normalizing `function.arguments`. |
| [#3155](https://github.com/HKUDS/nanobot/pull/3155) | **DingTalk timeouts**: Adds HTTP timeouts to prevent indefinite hangs on token refresh, media transfer, and message sending. |
| [#3153](https://github.com/HKUDS/nanobot/pull/3153) | **Dict-config ACL fix**: Fixes `is_allowed()` and `_validate_allow_from()` when channel config is a plain Pydantic dict. |
| [#2938](https://github.com/HKUDS/nanobot/pull/2938) | **API file uploads**: OpenAI-compatible API now accepts JSON base64 and multipart/form-data uploads for images and documents. |
| [#3138](https://github.com/HKUDS/nanobot/pull/3138) | **Slack named targets**: Resolves `#channel_name`, `@user`, etc. in Slack message-tool targets to concrete IDs. |
| [#3147](https://github.com/HKUDS/nanobot/pull/3147) | **Session role infrastructure**: Channels can inject per-session roles via `InboundMessage.metadata["session_role"]`, persisted and injected into system prompts. |

**Themes**: Reliability under strict providers, better observability, richer channel integrations, and API parity.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Status | Comments | Topic |
|---|---|---|---|
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) | Closed | 10 | **Retry amplification risk**: Stacked app+SDK retries can triple upstream load. A systems-level reliability concern with a clean resolution. |
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | **Open** | 9 | **Matrix channel broken**: Long-standing breakage in Matrix channel startup. High frustration; [PR #3151](https://github.com/HKUDS/nanobot/pull/3151) now open to address streaming-edit limits. |
| [#2588](https://github.com/HKUDS/nanobot/issues/2588) | Closed | 6 | **Home Assistant tool use**: User struggling to make Qwen models call tools for Home Assistant, compared to easier setup on OpenClaw. |
| [#2714](https://github.com/HKUDS/nanobot/issues/2714) | Closed | 6 | **Chinese Windows+DeepSeek tutorial**: Community-contributed onboarding guide; signals strong demand for localized, beginner-friendly docs. |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | **Open** | 6 | **Ollama local config 404 + gateway port not listening**: Raspberry Pi/local-deployment friction; docs and networking gaps. |

### Underlying Needs
- **Matrix reliability** is a persistent sore spot (issue open since Feb, 9 comments).
- **Local/self-hosted onboarding** (Ollama, Windows, DeepSeek) needs first-class documentation, not just community workarounds.
- **Tool-calling with Chinese/local models** remains hit-or-miss compared to OpenClaw.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|---|---|---|---|
| **High** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | **DuckDuckGo search hangs entire system** (Proxmox hard-stop required). Closed but alarming—suggests resource leak or runaway process in web search. | Closed; no linked fix PR in data |
| **High** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) | **LLM error 1214**: `"The messages parameter is illegal"` — frequent token-consolidation failures on Feishu. | **Open**, 3 comments |
| **High** | [#3155](https://github.com/HKUDS/nanobot/pull/3155) | DingTalk indefinite HTTP hangs. | **Merged today** |
| **Medium** | [#2857](https://github.com/HKUDS/nanobot/issues/2857) | `__version__` (`0.4.1`) mismatched `pyproject.toml` (`0.1.5`). | Closed |
| **Medium** | [#2559](https://github.com/HKUDS/nanobot/issues/2559) | Telegram streaming: `Message_too_long` crashes on long replies. | Closed |
| **Medium** | [#2660](https://github.com/HKUDS/nanobot/issues/2660) | `restrictToWorkspace: true` blocks agent from reading channel-received files placed outside workspace. | Closed |
| **Medium** | [#3154](https://github.com/HKUDS/nanobot/pull/3154) | Strict providers (Alibaba/Qwen3.6-plus) rejecting malformed tool-call arguments. | **Merged today** |

**Assessment**: Two high-severity issues remain open or recently closed without clear traceability. The Feishu error 1214 and DuckDuckGo system hang deserve post-mortem visibility.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|---|---|---|
| **Web app + mobile API channel** | [#3030](https://github.com/HKUDS/nanobot/pull/3030) | High — large, well-scoped PR already open; strategic for ecosystem growth |
| **Self-evolution / SelfTool** | [#2521](https://github.com/HKUDS/nanobot/pull/2521) | Medium — ambitious, default-disabled; may need longer review |
| **Subagents in `config.json`** | [#2599](https://github.com/HKUDS/nanobot/issues/2599) | High — frequent request, docs gap, likely quick win |
| **Per-phase model overrides** (heartbeat eval vs. exec) | [#3156](https://github.com/HKUDS/nanobot/pull/3156) | High — small, merged-ready PR open today |
| **LangSmith tracing restoration** | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | Medium — enterprise observability demand; PR open |
| **Cron job message persistence** | [#3123](https://github.com/HKUDS/nanobot/issues/3123) | Medium — UX gap in scheduled tasks |
| **Fallback LLM providers** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) | Medium — reliability feature, user-proposed |
| **Multiple custom providers** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) | Medium — config architecture change |

---

## 7. User Feedback Summary

### Pain Points
- **"Black box" agent state**: Users cannot tell if nanobot is stuck, retrying, or idle. Addressed partially by [#3149](https://github.com/HKUDS/nanobot/pull/3149) and [#3150](https://github.com/HKUDS/nanobot/pull/3150).
- **Local model setup friction**: Ollama, DeepSeek, and Qwen integrations are error-prone; docs assume too much prior knowledge.
- **Channel-specific bugs**: Matrix, Telegram, DingTalk, and Slack each have edge-case failures that break trust.
- **Tool calling inconsistency**: Chinese models (Qwen, LongCat-Flash-Chat) often emit malformed tool calls or fail to trigger tools entirely.

### Positive Signals
- Strong community self-help (tutorials, memory plugins like [nanobot-memory](https://github.com/qinroy99/nanobot-memory)).
- Enthusiasm for the v0.1.5.post1 "self-managing" narrative.
- Active third-party integrations (AgentHiFive, LangSmith, Agent Skills).

---

## 8. Backlog Watch

| Item | Age | Risk | Why It Needs Attention |
|---|---|---|---|
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) Matrix channel does not work | ~6 weeks | **High** | 9 comments, oldest high-activity open issue; blocks Matrix users entirely. PR [#3151](https://github.com/HKUDS/nanobot/pull/3151) open but unmerged. |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) Ollama local config 404 / gateway port not listening | ~3 weeks | Medium | Local deployment is a major use case; user on Raspberry Pi—represents edge-device audience. |
| [#2505](https://github.com/HKUDS/nanobot/issues/2505) custom provider does not support extraHeaders? | ~3 weeks | Medium | One comment, but breaks enterprise/self-hosted API gateway scenarios. |
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) SelfTool for agent self-evolution | ~3 weeks | Medium | Large, speculative PR with no comments—risk of bitrot or silent rejection. Needs maintainer direction. |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) Web App and Mobile APIs | ~4 days | Low | Big feature, currently open; needs review bandwidth to land or iterate. |

---

**Overall Health**: 🟢 **Strong momentum, shipping aggressively.** Caution areas: long-standing integration bugs (Matrix), local onboarding docs, and a few high-severity stability issues needing root-cause communication.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-15

---

## 1. Today's Overview

Hermes Agent showed **very high community activity** over the past 24 hours with **50 updated issues** (34 open/active, 16 closed) and **50 updated PRs** (28 open, 22 merged/closed), though **no new release was published**. The maintainer team appears highly responsive, with multiple critical bug fixes merged same-day — notably around **gateway restart loops**, **silent reply placeholders**, and **dashboard crashes**. Two major feature threads are dominating community attention: a **native Web UI gateway** (#501) and **external memory architecture** (#6323, PR #9625). The project health is strong in velocity but signals growing complexity in gateway stability and UI gaps.

---

## 2. Releases

**No new releases** (v0.9.0 appears to be current, based on issue references).

---

## 3. Project Progress

### Merged/Closed PRs Today (selected by impact)

| PR | Title | What Advanced |
|---|---|---|
| [#9945](https://github.com/NousResearch/hermes-agent/pull/9945) | fix: hermes gateway restart waits for service to come back up | Gateway restart now blocks until the service is actually alive, fixing false-positive "restart succeeded" UX |
| [#9941](https://github.com/NousResearch/hermes-agent/pull/9941) | fix: break stuck session resume loops after repeated restarts | Prevents unrecoverable agent traps on gateway restart by capping stuck-session retries |
| [#9625](https://github.com/NousResearch/hermes-agent/pull/9625) | feat: add layered memory provider and skill-candidate lifecycle | **Major architecture advance**: SQLite+FTS5-backed long-term memory with identity/semantic/episodic/reflection layers and review-gated skill publishing |
| [#111](https://github.com/NousResearch/hermes-agent/pull/111) | fix(gateway): move pairing_store and hooks init back into __init__ | Fixes silent gateway crash on `hermes gateway` / restart |
| [#9918](https://github.com/NousResearch/hermes-agent/pull/9918) | feat(provider): wire MiniMax-native TTS/image/vision defaults | Expands MiniMax provider to natively support multimodal defaults |
| [#9939](https://github.com/NousResearch/hermes-agent/pull/9939) | Fix NameError: missing import os in web_server.py | One-line critical fix for dashboard OpenAI auth configuration |
| [#9523](https://github.com/NousResearch/hermes-agent/pull/9523) | fix: accept ALIBABA_API_KEY as fallback and fix error messages | Provider DX improvement: accepts both `ALIBABA_API_KEY` and `DASHSCOPE_API_KEY` |
| [#9498](https://github.com/NousResearch/hermes-agent/pull/9498) | fix(cron): handle non-dict return from run_conversation in scheduler | Hardens cron scheduler against API timeout/GPU saturation crashes |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Activity | Underlying Need |
|---|---|---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) — Web UI Gateway | **13 comments**, 👍 1 | **Dominant feature gap**: Users want a local, streaming, artifact-capable browser interface competitive with Claude/ChatGPT. Spawned sub-issue [#8183](https://github.com/NousResearch/hermes-agent/issues/8183) for MVP scoping. |
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) — SECURITY.md / private vulnerability reporting | **11 comments**, closed | Community pressure for responsible disclosure infrastructure. **Resolved**: private reporting enabled. |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) — >1000 open issues | **11 comments**, closed | Meta-concern about issue triage scalability and project governance. |
| [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) — UnicodeEncodeError on API call | **10 comments** | Provider-layer encoding robustness; affects `zai` provider initialization. |
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) — mempalace external memory | **5 comments**, 👍 **17** | Strong demand for **persistent, queryable memory beyond context window**. Directly addressed by merged PR #9625. |

### Key PRs Under Discussion

| PR | Activity | Underlying Need |
|---|---|---|
| [#7920](https://github.com/NousResearch/hermes-agent/pull/7920) — Native AWS Bedrock provider | Open, high-impact | Enterprise/cloud deployment demand for first-class Bedrock integration (Converse API, IAM, Guardrails). |

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|---|---|---|---|
| 🔴 **Critical** | [#7536](https://github.com/NousResearch/hermes-agent/issues/7536) + [#9941](https://github.com/NousResearch/hermes-agent/pull/9941) | Gateway restart traps users in unrecoverable stuck-session loops | **Fixed** in #9941 |
| 🔴 **Critical** | [#8260](https://github.com/NousResearch/hermes-agent/issues/8260) + [#9945](https://github.com/NousResearch/hermes-agent/pull/9945) | `hermes gateway restart` returns before restart completes, leaving service down | **Fixed** in #9945 |
| 🔴 **Critical** | [#9936](https://github.com/NousResearch/hermes-agent/issues/9936) + [#9939](https://github.com/NousResearch/hermes-agent/pull/9939) | Dashboard crashes with `NameError: name 'os' is not defined` | **Fixed** in #9939 |
| 🟡 **High** | [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) | `UnicodeEncodeError` during agent initialization (`zai` provider) | Open, no linked PR |
| 🟡 **High** | [#5960](https://github.com/NousResearch/hermes-agent/issues/5960) | `/status Tokens: 0` regression — SessionStore drift from SessionDB | Open, no linked PR |
| 🟡 **High** | [#8270](https://github.com/NousResearch/hermes-agent/issues/8270) | HTTP 400 on all OpenRouter models despite working `curl` | Open, likely provider routing bug |
| 🟡 **High** | [#9681](https://github.com/NousResearch/hermes-agent/issues/9681) | Gateway + Gemini stalls after successful tool call, requires `/reset` | Open, no linked PR |
| 🟡 **High** | [#9893](https://github.com/NousResearch/hermes-agent/issues/9893) | Gateway unresponsive when context compression exhausted in group chats | Open, no linked PR |
| 🟡 **High** | [#9867](https://github.com/NousResearch/hermes-agent/issues/9867) | ClawGuard security scan: **688 findings** (175 critical, 392 high) | Open, needs security response |
| 🟢 **Medium** | [#9080](https://github.com/NousResearch/hermes-agent/issues/9080) | Signal gateway prepends `▉` character after update | Open, rendering regression |
| 🟢 **Medium** | [#9840](https://github.com/NousResearch/hermes-agent/issues/9840) | Discord sends `(No message)` / `(No reply)` literally instead of suppressing | **Fix PR open**: [#9935](https://github.com/NousResearch/hermes-agent/pull/9935) |
| 🟢 **Medium** | [#9879](https://github.com/NousResearch/hermes-agent/issues/9879) | CLI banner centering distorts braille-based skins | Open, cosmetic |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **Web UI Gateway (local)** | [#501](https://github.com/NousResearch/hermes-agent/issues/501), [#8183](https://github.com/NousResearch/hermes-agent/issues/8183), [#8852](https://github.com/NousResearch/hermes-agent/issues/8852), [#9898](https://github.com/NousResearch/hermes-agent/issues/9898) | **High** | Most requested feature; community project `hermes-webui` (1,602⭐) exists; dashboard chat proxy already prototyped (#9898, closed). MVP contract issue #8183 suggests maintainers are scoping implementation. |
| **Layered long-term memory / mempalace** | [#6323](https://github.com/NousResearch/hermes-agent/issues/6323), [#9625](https://github.com/NousResearch/hermes-agent/pull/9625) | **Very High** | Core architecture already **merged** in #9625. Likely ships in next release. |
| **Native multi-agent support** | [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) | Medium | Well-scoped request (isolated sessions/personas/memory), but no linked PR yet. Competitive pressure from OpenClaw. |
| **AWS Bedrock native provider** | [#7920](https://github.com/NousResearch/hermes-agent/pull/7920) | Medium-High | Large enterprise-facing PR open; complexity (IAM, Guardrails, cross-region) may delay to following release. |
| **Response headers (model + thinking level)** | [#6232](https://github.com/NousResearch/hermes-agent/issues/6232) | Medium | Small UX improvement for gateway users; low implementation cost. |
| **Dashboard chat interface** | [#9898](https://github.com/NousResearch/hermes-agent/issues/9898) | Medium | Closed as completed? Actually closed without merge — may be folded into #501 Web UI effort. |

---

## 7. User Feedback Summary

### Pain Points
- **Gateway reliability is the #1 friction point**: restart behavior, session recovery, silent crashes, and provider-specific stalls (Gemini, OpenRouter, Signal, Discord) dominate bug reports.
- **Missing web UI**: Repeatedly cited as the "one glaring gap" vs. competitors. Terminal/gateway-only interaction limits accessibility and mobile use.
- **Provider configuration fragility**: API key env var mismatches (Alibaba/Dashscope), OpenRouter 400 errors, and encoding issues suggest provider abstraction layer needs hardening.
- **Security anxiety**: 688 ClawGuard findings and a coordinated malware campaign on OpenClaw (#9809) have put security scrutiny on skill ecosystems.

### Positive Signals
- **Memory architecture excitement**: #6323 garnered 17 upvotes — users see long-horizon task continuity as transformative.
- **Maintainer responsiveness praised**: Same-day fixes for critical regressions (#7536, #8260, #9936) build community trust.
- **Multi-gateway flexibility valued**: Telegram, Discord, WhatsApp, Slack, Home Assistant integrations are actively used.

---

## 8. Backlog Watch

| Item | Age | Risk | Why It Needs Attention |
|---|---|---|---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) Web UI Gateway | ~40 days | **High** | Highest-comment open issue; scope is ballooning. Needs maintainer decision on whether to adopt community `hermes-webui`, build native, or hybrid. |
| [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) UnicodeEncodeError | ~6 days | Medium | 10 comments, no PR linked. Blocks users on `zai` provider. |
| [#5960](https://github.com/NousResearch/hermes-agent/issues/5960) `/status Tokens: 0` regression | ~8 days | Medium | Regression of previously-fixed issue (#1465). Indicates test coverage gap in SessionStore/SessionDB sync. |
| [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) Native multi-agent support | ~4 days | Medium | 4 upvotes, well-written spec. No maintainer response visible. |
| [#9867](https://github.com/NousResearch/hermes-agent/issues/9867) ClawGuard security scan | 1 day | **High** | 175 critical findings. Requires official triage and response plan; silence risks reputation damage. |
| [#8852](https://github.com/NousResearch/hermes-agent/issues/8852) Official Web Control UI proposal | 1 day | Medium | Proposes integrating 1,602-star community project. Timely to evaluate before #501 effort diverges further. |

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-15

---

## 1. Today's Overview

PicoClaw showed **high development velocity** over the last 24 hours with **30 PRs updated** and **8 issues active**, indicating a healthy, fast-moving project. The community is heavily focused on **WebUI polish**, **cron/scheduler reliability**, and **agent robustness** ahead of the v0.2.6 release cycle. A new nightly build was published, but no stable release dropped. Notably, **19 PRs remain open**, suggesting a broad review backlog that maintainers may need to triage. Overall project health is **strong but review-constrained**.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.6-nightly.20260414.f82fe5a2](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) | Nightly | Automated build; may be unstable. No stable release. |

**No stable release this cycle.** The nightly reflects incremental changes on `main` since v0.2.6. Users on production workloads should stay on v0.2.6.

---

## 3. Project Progress

### Merged/Closed PRs (11 total, highlights)

| PR | Author | What Landed |
|----|--------|-------------|
| [#2523](https://github.com/sipeed/picoclaw/pull/2523) | lc6464 | **WebUI UX**: Composer now shows *reason-specific* placeholders when chat is disabled, and hides the send button to reduce confusion. |
| [#2514](https://github.com/sipeed/picoclaw/pull/2514) | lc6464 | **Networking fix**: Added `-host` / `--host` overrides for launcher and gateway, plus `PICOCLAW_LAUNCHER_HOST` / `PICOCLAW_GATEWAY_HOST` env vars. Directly fixes the OpenWrt 23.05 ARM64 TCP binding issue reported in [#2488](https://github.com/sipeed/picoclaw/issues/2488). |
| [#2521](https://github.com/sipeed/picoclaw/pull/2521) | BeaconCat | Updated WeChat QR code asset. |
| [#2518](https://github.com/sipeed/picoclaw/pull/2518) | imguoguo | Documentation: updated WeChat QR code. |
| [#2516](https://github.com/sipeed/picoclaw/pull/2516) | sushi30 | CI: disabled daily `sync-rebase` cron; now manual-only via `workflow_dispatch`. |

**Key advances**: WebUI accessibility improved; embedded/edge deployment (OpenWrt) unblocked; CI noise reduced.

---

## 4. Community Hot Topics

### Most Active Threads

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#806](https://github.com/sipeed/picoclaw/issues/806) — **Add WebUI support (Refactoring now)** | 8 comments, 8 👍 | **Long-running roadmap item**. Author Zepan is actively refactoring. Strong demand signals that the TUI-first model is a barrier for non-technical users. The flurry of recent WebUI PRs (#2523, #2524, #2430) suggests this is nearing deliverable state. |
| 2 | [#2354](https://github.com/sipeed/picoclaw/issues/2354) — [BUG] Something Wrong? (WebUI unresponsive) | 3 comments | Closed. Revealed that **WebUI chat composer disabling** was causing real user confusion—now addressed by #2523. |
| 3 | [#2148](https://github.com/sipeed/picoclaw/issues/2148) — **Phase 2: Agent Discovery → Delegation** | 3 comments | Architecture roadmap. Community wants **multi-agent orchestration** (discovery + delegation). No PR linked yet; this is a **strategic differentiator** if implemented. |

**Underlying needs**:
- **Lower barrier to entry** (browser > terminal)
- **Multi-agent collaboration** beyond single-turn tool use
- **Clearer error surfacing** in the WebUI

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix PR? |
|----------|-----------|-------------|---------|
| 🔴 **High** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway starts abnormally on Debian 13 with `digntalk` channel; process dies shortly after launch. | **None yet** |
| 🔴 **High** | [#2488](https://github.com/sipeed/picoclaw/issues/2488) | TCP listen-but-never-accept on OpenWrt 23.05 ARM64 (musl). | **Fixed** — [#2514](https://github.com/sipeed/picoclaw/pull/2514) merged |
| 🟡 **Medium** | [#2468](https://github.com/sipeed/picoclaw/issues/2468) | Cron tasks fail with `"scheduling command execution is restricted to internal channels"`. | [#2474](https://github.com/sipeed/picoclaw/pull/2474) open (independent sessions), [#2520](https://github.com/sipeed/picoclaw/pull/2520) open (creation/execution failures) |
| 🟡 **Medium** | [#2525](https://github.com/sipeed/picoclaw/pull/2525) | Agent session gets **stuck** after sending image to non-vision model; persisted history poisons subsequent turns. | **PR open** — under review |
| 🟡 **Medium** | [#2411](https://github.com/sipeed/picoclaw/pull/2411) | Split SSE stream chunks cause content drops in provider responses. | **PR open** — regression tests included |
| 🟡 **Medium** | [#2487](https://github.com/sipeed/picoclaw/pull/2487) | Windows build flow broken in root and web Makefiles. | **PR open** |
| 🟢 **Low** | [#2519](https://github.com/sipeed/picoclaw/issues/2519) | Workspace sandbox too permissive; tools read/write outside workspace (e.g., `/tmp`), flooding logs with safety errors. | **None yet** |

**Stability assessment**: Two **critical-class** issues (gateway crash, session poisoning) are unmerged. Cron reliability has **multiple competing PRs**—risk of merge conflict or duplicated effort.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal Strength | Predicted in v0.2.7? |
|------|-----------------|----------------------|
| **WebUI as first-class interface** ([#806](https://github.com/sipeed/picoclaw/issues/806), #2523, #2524, #2430) | ⭐⭐⭐ Very Strong | **Yes** — likely core theme of next minor |
| **Sogou web search for China users** ([#2524](https://github.com/sipeed/picoclaw/pull/2524)) | ⭐⭐⭐ Strong | **Yes** — small, self-contained, high regional value |
| **Memory provider integrations** (mem0, Supermemory, HydraDB) ([#2515](https://github.com/sipeed/picoclaw/issues/2515)) | ⭐⭐ Moderate | **Maybe** — needs architecture design; could slip to v0.3.0 |
| **Agent Discovery → Delegation** ([#2148](https://github.com/sipeed/picoclaw/issues/2148)) | ⭐⭐ Moderate | **No** — Phase 2 roadmap, likely v0.3.0+ |
| **`/btw` one-off side-question command** ([#2502](https://github.com/sipeed/picoclaw/pull/2502)) | ⭐⭐ Moderate | **Yes** — small UX win, low risk |
| **Parallel agent loop** ([#2503](https://github.com/sipeed/picoclaw/pull/2503)) | ⭐⭐ Moderate | **Maybe** — depends on #2481 merge |
| **LLM-as-Judge for membench** ([#2484](https://github.com/sipeed/picoclaw/pull/2484)) | ⭐ Low | **No** — benchmarking tooling, not user-facing |

---

## 7. User Feedback Summary

### Pain Points
- **WebUI confusion**: Users repeatedly hit disabled inputs with no explanation (#2354 → fixed by #2523).
- **Cron/reminder unreliability**: Silent failures and cross-execution history pollution make scheduled tasks untrustworthy (#2468, #2501, #2474).
- **Edge deployment friction**: OpenWrt/ARM64 and Windows builds are painful (#2488, #2487).
- **Sandbox noise**: Overly broad workspace restrictions create log spam and break basic workflows (#2519).

### Satisfaction Signals
- Active nightly builds show responsive maintenance.
- Rapid turnaround on OpenWrt binding issue (reported 2026-04-12, fixed 2026-04-14).
- Strong community contribution on WebUI improvements.

### Use Cases Emerging
- **Home/edge server deployment** (OpenWrt, Debian, low-RAM ARM64)
- **Non-technical end-user access** (WebUI for family/small-team sharing)
- **China mainland accessibility** (Sogou search integration)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#806](https://github.com/sipeed/picoclaw/issues/806) WebUI refactoring | ~7 weeks | **High** — blocks major UX milestone | Maintainer Zepan to finalize refactor and merge dependent PRs |
| [#2148](https://github.com/sipeed/picoclaw/issues/2148) Agent Discovery → Delegation | ~2.5 weeks | Medium — strategic but unstaffed | Needs architectural RFC or assigned owner |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) Docker compose `privileged` mode | ~2 weeks | Low — simple change | Trivial to review/merge; lingering in queue |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) membench LLM-as-Judge | ~3 days | Low — non-blocking | Benchmarking PR; can wait for domain expert review |
| **Cron PR cluster** (#2474, #2501, #2520) | 1–4 days | **High** — risk of overlap | Maintainers should **coordinate or cherry-pick** to avoid conflicting fixes |

---

*Digest generated from GitHub activity for 2026-04-14.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-15

## 1. Today's Overview

NanoClaw saw **extremely high development velocity** on 2026-04-14 with **21 pull requests updated** (15 merged/closed, 6 open) and **zero active issues**, indicating a mature, fast-moving codebase with maintainers actively clearing backlog rather than accumulating open problems. The activity cluster reveals three parallel workstreams: **v2 infrastructure modernization** (npm→pnpm migration, sandbox-safe setup), **agent provider expansion** (OpenAI, OpenCode), and **a major architectural proposal** for event-driven multi-agent execution. No new releases were cut despite significant merged changes.

---

## 2. Releases

**No new releases** today. The project remains without a latest release tag in the reporting period.

---

## 3. Project Progress

### Merged/Closed PRs (15 items)

| PR | Title | Author | Significance |
|:---|:---|:---|:---|
| [#1775](https://github.com/qwibitai/nanoclaw/pull/1775) | Sync fork | golddavid | Routine fork synchronization |
| [#772](https://github.com/qwibitai/nanoclaw/pull/772) | feat(skills): add pdf-reader skill | glifocat | **New skill**: WhatsApp PDF attachment processing with `poppler-utils` text extraction |
| [#840](https://github.com/qwibitai/nanoclaw/pull/840) | fix: close task container promptly when agent uses IPC-only messaging | glifocat | **Reliability fix**: prevents container leaks in scheduled IPC tasks |
| [#770](https://github.com/qwibitai/nanoclaw/pull/770) | feat(skills): add image vision skill for WhatsApp | glifocat | **New skill**: enables image understanding for WhatsApp agents |
| [#756](https://github.com/qwibitai/nanoclaw/pull/756) | fix(register): create CLAUDE.md in group folder from template | glifocat | **Onboarding fix**: ensures proper group-level assistant configuration |
| [#754](https://github.com/qwibitai/nanoclaw/pull/754) | fix(register): update assistant name in all groups/*/CLAUDE.md | glifocat | **Config consistency fix**: propagates name changes across all groups |
| [#751](https://github.com/qwibitai/nanoclaw/pull/751) | fix(whatsapp): use sender's JID for DM-with-bot registration, skip trigger | glifocat | **WhatsApp fix**: corrects JID handling in dedicated-number DM flows |
| [#745](https://github.com/qwibitai/nanoclaw/pull/745) | fix(whatsapp): write pairing code to file for immediate access | glifocat | **UX fix**: pairing code persistence for buffered/cloud execution contexts |
| [#708](https://github.com/qwibitai/nanoclaw/pull/708) | fix: add update_task tool for in-place task modification | glifocat | **Feature completion**: closes gap in task scheduling API |
| [#1595](https://github.com/qwibitai/nanoclaw/pull/1595) | Add Contributor Covenant Code of Conduct | glifocat | **Governance**: community health file addition |
| [#1388](https://github.com/qwibitai/nanoclaw/pull/1388) | docs: update outdated documentation, add docs portal links | glifocat | **Docs alignment**: redirects authority to docs.nanoclaw.dev |
| [#962](https://github.com/qwibitai/nanoclaw/pull/962) | fix: pass MCP env vars from .env to containers | glifocat | **Security/fix**: restores credential proxy env var forwarding |
| [#1773](https://github.com/qwibitai/nanoclaw/pull/1773) | Fix/stale session selfheal | cmhenry | **Reliability**: session recovery mechanism |
| [#1770](https://github.com/qwibitai/nanoclaw/pull/1770) | fix: make setup sandbox-safe by using project-local npm cache | meeech | **Developer experience**: enables sandboxed setup execution |

**Key advances**: WhatsApp skills matured with PDF and vision capabilities; task scheduling and container lifecycle reliability improved; documentation and governance formalized; sandbox-safe setup unblocks cloud/IDE development.

---

## 4. Community Hot Topics

No issues exist and all PRs show **zero comments and zero reactions**, so "hot topics" must be inferred from **scope and controversy potential** of open PRs rather than engagement metrics.

| PR | Title | Why It Matters |
|:---|:---|:---|
| [#1772](https://github.com/qwibitai/nanoclaw/pull/1772) | feat: NanoClaw scope expansion — event-driven architecture + 6 capability layers | **Most consequential**: Proposes replacing the reactive polling loop with a typed EventBus, SQLite event log, priority executor pool, and multi-agent runtime. This is a foundational rewrite that would redefine the project. |
| [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) | feat: OpenAI model support + token tracking + stats API | **High demand**: Enables GPT-5.4 nano/mini, Ollama local models, and cost reduction via bypassing Claude Agent SDK. Introduces `AGENT.md` model-agnostic configuration. |
| [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) | chore: migrate v2 from npm to pnpm | **Infrastructure risk**: Large toolchain migration touching CI, Docker, lockfiles, and container commands. High merge complexity, low user visibility. |
| [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | feat(v2): OpenCode agent provider | **Ecosystem expansion**: Adds `AGENT_PROVIDER=opencode` with SSE and session resume, aligning with v2 provider architecture. |
| [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | feat: add /add-mem0-graph skill — persistent memory with Qdrant + Neo4j + local embeddings | **Long-running feature**: Open since March 19; adds graph-enhanced memory using mem0 against existing infrastructure. |

**Underlying needs**: Community wants **model flexibility** (escape Claude vendor lock-in), **memory persistence** beyond conversational state, and **architectural scale** beyond single-threaded reactive bots. The total silence in comments suggests either very small reviewer pool or heavy Discord/slack coordination outside GitHub.

---

## 5. Bugs & Stability

| Severity | PR | Description | Status |
|:---|:---|:---|:---|
| **Medium** | [#840](https://github.com/qwibitai/nanoclaw/pull/840) | Task containers not closing when agents use IPC-only messaging | **Fixed** (merged) |
| **Medium** | [#962](https://github.com/qwibitai/nanoclaw/pull/962) | MCP env vars not passed to containers after credential proxy migration | **Fixed** (merged) |
| **Medium** | [#1773](https://github.com/qwibitai/nanoclaw/pull/1773) | Stale sessions lacking self-heal recovery | **Fixed** (merged) |
| **Low-Medium** | [#751](https://github.com/qwibitai/nanoclaw/pull/751) | Wrong JID + trigger mishandling in WhatsApp DM-with-bot registration | **Fixed** (merged) |
| **Low-Medium** | [#745](https://github.com/qwibitai/nanoclaw/pull/745) | Pairing code inaccessible in buffered/cloud execution contexts | **Fixed** (merged) |
| **Low** | [#756](https://github.com/qwibitai/nanoclaw/pull/756) | Missing CLAUDE.md creation in group folders during registration | **Fixed** (merged) |
| **Low** | [#754](https://github.com/qwibitai/nanoclaw/pull/754) | Assistant name updates not propagated to all group CLAUDE.md files | **Fixed** (merged) |
| **Low** | [#1770](https://github.com/qwibitai/nanoclaw/pull/1770) | Setup script writes outside project directory in sandboxed environments | **Fixed** (merged) |

**Open bug/fix**:
- [#1777](https://github.com/qwibitai/nanoclaw/pull/1777): `ONECLI_API_KEY` not forwarded to OneCLI SDK for authenticated container config endpoints — **fix proposed, awaiting merge**.

No crashes or regressions were reported as open issues today. Stability trend is **positive** with multiple container-lifecycle and authentication fixes landing.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **OpenAI/GPT-5.4 and local model support** | [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) | **High** — complete implementation, model-agnostic config, strong cost/value proposition |
| **OpenCode agent provider** | [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | **High** — v2-aligned, follows established provider pattern |
| **pnpm toolchain migration** | [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) | **Medium-High** — infrastructure PR, may need coordination with release timing |
| **Graph-enhanced persistent memory (/add-mem0-graph)** | [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | **Medium** — open since March 19, complex dependency on Qdrant+Neo4j, may need maintainer bandwidth |
| **Event-driven multi-agent runtime** | [#1772](https://github.com/qwibitai/nanoclaw/pull/1772) | **Low-Medium for near term** — architectural overhaul of 6 capability layers; likely staged or discussed rather than immediately merged |

---

## 7. User Feedback Summary

**Derived entirely from PR descriptions** (no open issues or comment threads):

| Pain Point | Evidence | Use Case |
|:---|:---|:---|
| **Vendor lock-in to Claude / high API costs** | [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) | Users want cheaper OpenAI models or free local Ollama endpoints |
| **WhatsApp as primary channel** | [#770](https://github.com/qwibitai/nanoclaw/pull/770), [#772](https://github.com/qwibitai/nanoclaw/pull/772), [#751](https://github.com/qwibitai/nanoclaw/pull/751), [#745](https://github.com/qwibitai/nanoclaw/pull/745) | Business/personal assistants operating over WhatsApp with vision and document understanding |
| **Container and task lifecycle reliability** | [#840](https://github.com/qwibitai/nanoclaw/pull/840), [#962](https://github.com/qwibitai/nanoclaw/pull/962), [#1773](https://github.com/qwibitai/nanoclaw/pull/1773) | Long-running deployments where leaked containers or stale sessions break automation |
| **Sandbox/cloud development friction** | [#1770](https://github.com/qwibitai/nanoclaw/pull/1770), [#745](https://github.com/qwibitai/nanoclaw/pull/745) | Contributors running setup in Claude Code, Cursor, or CI environments with restricted filesystems |
| **Memory persistence beyond single session** | [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | Agents that need to remember facts, relationships, and user preferences across conversations |

**Satisfaction indicator**: High merge velocity and zero open issues suggest contributors are generally unblocked, though the lack of GitHub discussion may mask user confusion being handled elsewhere.

---

## 8. Backlog Watch

| PR | Title | Age | Risk |
|:---|:---|:---|:---|
| [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | feat: add /add-mem0-graph skill | **26 days** (since 2026-03-19) | **Highest** — significant feature with zero comments, may need maintainer review or dependency clarification |
| [#1772](https://github.com/qwibitai/nanoclaw/pull/1772) | feat: NanoClaw scope expansion | **1 day** but architecturally massive | **Medium** — requires maintainer architectural decision; risk of stalling if not actively shepherded |
| [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) | chore: migrate v2 from npm to pnpm | **1 day** | **Medium** — large surface area, potential for merge conflicts with other v2 PRs if left open |

**Recommendation**: [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) is the clearest candidate for maintainer attention — it has languished for nearly a month without engagement, representing both user demand (persistent memory) and contributor effort at risk of bit-rot.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-15

## 1. Today's Overview
NullClaw saw moderate community activity over the past 24 hours with **5 issues updated** (4 open, 1 closed) and **5 pull requests active** (all still open, none merged). No new releases were published. The project appears healthy with steady inbound contributions—particularly from repeat contributor `manelsen` who submitted three focused fixes, and from `DDGRCF` who both requested and implemented WeChat QR login support. The maintainer merge queue is building but not yet clearing, suggesting a potential need for review bandwidth.

---

## 2. Releases
*No new releases.*

---

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. However, several features and fixes are advancing in open PRs:

- **Cron subagent system** ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)) — A major feature adding a DB-backed scheduler, run history, JSON CLI output, and security hardening. Last updated 2026-04-14.
- **WeChat (Weixin) QR login & channel support** ([PR #818](https://github.com/nullclaw/nullclaw/pull/818)) — New authentication flow and channel integration. Submitted and updated today.
- **Web search setup guidance** ([PR #815](https://github.com/nullclaw/nullclaw/pull/815)) — Improves failure reporting and onboarding for search provider configuration.
- **Named-agent provider lifetime fix** ([PR #814](https://github.com/nullclaw/nullclaw/pull/814)) — Fixes a stack-use-after-scope bug in provider resolution.
- **Models refresh output budget fix** ([PR #813](https://github.com/nullclaw/nullclaw/pull/813)) — Prevents catalog fetch failures due to undersized output caps.

---

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| [#449 Docker Hub official image](https://github.com/nullclaw/nullclaw/issues/449) | 2 comments, 1 👍, updated 2026-04-14 | Long-standing deployment friction. Users want turnkey containerized installation with `docker compose`. Underlying need: reduce onboarding friction for non-Zig/non-source users. |
| [#812 http_request / internet search not working](https://github.com/nullclaw/nullclaw/issues/812) | 2 comments, updated 2026-04-14 | A new user migrating from Picoclaw/ZeroClaw cannot get web search working despite trying examples. Underlying need: better out-of-box search provider configuration and clearer error messages. |
| [#818 Weixin QR auth flow](https://github.com/nullclaw/nullclaw/pull/818) | Submitted today | Community member self-served a feature they requested hours earlier (#816/#817). Shows responsive contributor energy around Chinese IM integrations. |

---

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Fix PR? |
|----------|----------|-------------|---------|
| **High** | [#812 http_request bug](https://github.com/nullclaw/nullclaw/issues/812) | Internet search capability completely non-functional for at least one user on latest version; unclear if config or code bug. | Partial — [#815](https://github.com/nullclaw/nullclaw/pull/815) adds setup guidance and improves error reporting, but root cause in #812 may need deeper investigation. |
| **Medium** | [#814 Named-agent provider lifetime](https://github.com/nullclaw/nullclaw/pull/814) | Stack storage outliving derived `Provider` vtable — potential use-after-free or UB in CLI named-agent paths. | Yes — open fix PR. |
| **Low** | [#813 Models refresh budget](https://github.com/nullclaw/nullclaw/pull/813) | `nullclaw models refresh` fails on large modern provider catalogs due to output cap. | Yes — open fix PR with regression test. |

---

## 6. Feature Requests & Roadmap Signals
- **Official Docker Hub image + compose file** ([#449](https://github.com/nullclaw/nullclaw/issues/449)): High-repeat demand; likely candidate for next packaging milestone.
- **WeChat/Weixin QR login** ([#817](https://github.com/nullclaw/nullclaw/issues/817) / [#818](https://github.com/nullclaw/nullclaw/pull/818)): PR already open. If reviewed quickly, this could land in the next release, signaling NullClaw's expansion into Chinese messaging platforms.
- **Cron subagent** ([#783](https://github.com/nullclaw/nullclaw/pull/783)): Large feature PR. Merge would represent a significant capability jump (scheduled skills/agents/shell jobs).

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Onboarding / installation complexity** | [#449](https://github.com/nullclaw/nullclaw/issues/449) (Docker request), [#820](https://github.com/nullclaw/nullclaw/issues/820) (Zig on Debian confusion) | Frustrated. Users expect pre-built containers and clearer build prerequisites. |
| **Search/web access broken by default** | [#812](https://github.com/nullclaw/nullclaw/issues/812) | Dissatisfied. New user burned multiple days; docs and error messages insufficient. |
| **Desire for IM integrations (WeChat)** | [#816](https://github.com/nullclaw/nullclaw/issues/816), [#817](https://github.com/nullclaw/nullclaw/issues/817) | Interested/engaged. User went from question to PR in hours. |
| **Appreciation for architecture** | [#812](https://github.com/nullclaw/nullclaw/issues/812) ("very organized") | Positive on code quality, negative on getting-started experience. |

---

## 8. Backlog Watch
| Item | Age | Risk |
|------|-----|------|
| [#449 Docker Hub image](https://github.com/nullclaw/nullclaw/issues/449) | ~1 month (opened 2026-03-12) | **High**. Repeatedly bumped, blocks container-first adopters. Needs maintainer decision on CI/CD publishing pipeline. |
| [#783 Cron subagent](https://github.com/nullclaw/nullclaw/pull/783) | ~1 week | **Medium**. Large PR; may be stuck in review queue due to size. Risk of merge conflicts if left too long. |
| [#812 http_request failure](https://github.com/nullclaw/nullclaw/issues/812) | 1 day | **Medium**. Active today but no maintainer response yet. Could escalate into churn if unresolved. |

---

*Digest generated from github.com/nullclaw/nullclaw data for 2026-04-15.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-15

## 1. Today's Overview

IronClaw saw **extremely high activity** in the last 24 hours with **50 issues and 50 PRs updated**, though **no new releases** were cut. The project is in an intense **stabilization and QA phase** ahead of a likely promotion to production: multiple `p0_quality` and `bug_bash` issues are being filed against the `0.25.0` staging image, while the core team is aggressively merging fixes and auto-promoting staging builds through CI. With only **4 of 50 issues closed** and **35 of 50 PRs still open**, the backlog is under pressure but actively managed.

---

## 2. Releases

**No new releases today.** The latest tracked image is `nearaidev/ironclaw-dind:0.25.0` (staging), which is the target of multiple active bug reports and CI promotion PRs.

---

## 3. Project Progress

### Merged/Closed PRs Today (15 total, selected highlights)

| PR | Description | Impact |
|---|---|---|
| [#2434](https://github.com/nearai/ironclaw/pull/2434) | **fix(gateway): persist user messages at send time** — Fixes race condition where user messages disappeared on thread switch by writing to DB before returning 202. | Closes [#2409](https://github.com/nearai/ironclaw/issues/2409) |
| [#2473](https://github.com/nearai/ironclaw/pull/2473) | **fix: use gateway owner_id for relay OAuth nonce storage** — Repairs Slack OAuth callback failures caused by UUID/`"default"` mismatch. | Unblocks Slack integrations |
| [#2425](https://github.com/nearai/ironclaw/pull/2425) | **feat(db): add per-user CachedSettingsStore decorator** — Write-through settings cache wired into `TenantScope` and agent loop. | Performance + reduced DB load |
| [#2467](https://github.com/nearai/ironclaw/pull/2467) | **fix(sandbox): try Docker socket before CLI binary check** — Fixes container-in-container sandbox detection. | Deployment robustness |
| [#2401](https://github.com/nearai/ironclaw/pull/2401) | **fix(security): gate test URL rewriters behind `#[cfg(test)]`** — Removes debug-build attack surface where test URL rewriters were exposed. | Closes [#2056](https://github.com/nearai/ironclaw/issues/2056) |
| [#2475](https://github.com/nearai/ironclaw/pull/2475) | **test(e2e): add Playwright persistence happy-path test** | Validation for [#2434](https://github.com/nearai/ironclaw/pull/2434) fix |
| [#2362](https://github.com/nearai/ironclaw/pull/2362) | **ci: add live canary regression lanes** | Operational maturity |
| [#2387](https://github.com/nearai/ironclaw/pull/2387) | **fix(ci): exclude test files from PR size classification** | Developer experience |

**Key themes:** Web gateway reliability, OAuth/channel setup fixes, caching/performance, security hardening, and CI infrastructure.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | 7 | Google Sheets OAuth blocked (`invalid_request`) | **Seamless SaaS extension auth** — users expect OAuth flows to work out-of-box in hosted staging; this is a friction point for business automation use cases. |
| [#2230](https://github.com/nearai/ironclaw/issues/2230) | 4 | Twitter/X connection unavailable (MCP requires manual cookie extraction) | **Social media automation without manual hacking** — the MCP-based Twitter integration is too brittle for non-technical users; signals demand for first-class API or simpler auth. |
| [#76](https://github.com/nearai/ironclaw/issues/76) | 3 | Discord channel integration *(closed today)* | **Messaging channel parity** — closed after 2 months, suggesting either delivered or deprioritized; worth monitoring for documentation. |
| [#80](https://github.com/nearai/ironclaw/issues/80) | 3 | Multi-provider LLM support (Ollama, Bedrock, Gemini, OpenRouter) | **Vendor flexibility and local inference** — strong signal from privacy-conscious and cost-sensitive users. |
| [#84](https://github.com/nearai/ironclaw/issues/84) | 3 | Agent system advanced features (multi-agent, streaming, thinking modes) | **Enterprise/power-user capabilities** — users want IronClaw to compete with Claude Code/Cursor on advanced agent orchestration. |
| [#87](https://github.com/nearai/ironclaw/issues/87) | 3 | Memory & knowledge system enhancements | **Long-term context reliability** — local embeddings, citation, and memory CLI are table stakes for serious personal AI assistants. |

### Notable Open PRs
- [#1446](https://github.com/nearai/ironclaw/pull/1446) — **Aliyun Coding Plan support** (XL, new contributor): Significant LLM provider expansion; indicates growing geographic/cloud diversity demands.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **P0** | [#2409](https://github.com/nearai/ironclaw/issues/2409) | User messages disappear after typing in web chat | **Fixed** by [#2434](https://github.com/nearai/ironclaw/pull/2434) |
| **P0** | [#2410](https://github.com/nearai/ironclaw/issues/2410) | Dashboard refreshes in infinite loop, wiping contents | **Open** — no linked fix yet |
| **P0** | [#2411](https://github.com/nearai/ironclaw/issues/2411) | Telegram bot token save action does nothing | **Fix in progress** [#2432](https://github.com/nearai/ironclaw/pull/2432) |
| **P0** | [#1997](https://github.com/nearai/ironclaw/issues/1997) | Slack App is not available (users must create own app) | **Open** — infrastructure gap |
| **P0** | [#1998](https://github.com/nearai/ironclaw/issues/1998) | Slack connect flow is broken (confusing status messages, bot silent) | Partially addressed by [#2473](https://github.com/nearai/ironclaw/pull/2473) |
| **P0** | [#2346](https://github.com/nearai/ironclaw/issues/2346) | Instance upgrade `0.24.0 → 0.25.0` fails with no error detail | **Open** — blocking adoption |
| **P0** | [#2276](https://github.com/nearai/ironclaw/issues/2276) | Orchestrator crashes with HTTP 413 Payload Too Large from `nearai_chat` | **Open** — LLM provider integration robustness |
| **P0** | [#2405](https://github.com/nearai/ironclaw/issues/2405) | Gateway routing error: `broadcast()` requires a `thread_id` | **Open** — multi-channel bot routing |
| **P0** | [#2402](https://github.com/nearai/ironclaw/issues/2402) | Bot enters infinite "Calling LLM" loop after tool operations | **Open** — agent engine stability |
| **P2** | [#2281](https://github.com/nearai/ironclaw/issues/2281) | Bot ignores temporal conditions, sends meeting prep immediately | **Open** — scheduling logic bug |
| **Security** | [#2470](https://github.com/nearai/ironclaw/issues/2470) | Memory poisoning: `write_to_layer()` bypasses injection scanning | **Open** — from FailSafe audit; 1 of 4 issues remains unpatched |
| **Bug** | [#2474](https://github.com/nearai/ironclaw/issues/2474) | stdio MCP servers trigger OAuth discovery flow on activation | **Open** — MCP transport logic error |

**Assessment:** Staging `0.25.0` is **not production-ready**. A cluster of P0 web UI, channel setup, and upgrade-path bugs would block general user adoption. The core team is responsive (multiple same-day fixes), but the incoming bug velocity exceeds closure rate.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version |
|---|---|---|
| **Aliyun LLM support** | [#1446](https://github.com/nearai/ironclaw/pull/1446) | **High** — XL PR already open, new contributor |
| **Multi-provider LLM** (Ollama, Bedrock, Gemini, OpenRouter) | [#80](https://github.com/nearai/ironclaw/issues/80) | Medium — architectural work, high user demand |
| **Audio pipeline** (STT/TTS, WhatsApp voice notes) | [#90](https://github.com/nearai/ironclaw/issues/90) | Medium — P1 for WhatsApp completeness |
| **Feed system** (persistent event/queryable stream) | [#70](https://github.com/nearai/ironclaw/issues/70) | Medium — foundational for non-intrusive agent UX |
| **Discord integration** | [#76](https://github.com/nearai/ironclaw/issues/76) | **Delivered/Closed** — verify in release notes |
| **Claude history import** | [#150](https://github.com/nearai/ironclaw/issues/150) | Medium — competitive migration feature |
| **Git-based plugin registry** | [#101](https://github.com/nearai/ironclaw/issues/101) | Lower — RFC stage, ecosystem alignment needed |
| **P3 messaging channels** (iMessage, Matrix, Teams, etc.) | [#78](https://github.com/nearai/ironclaw/issues/78) | Lower — tracked but not prioritized |

**Prediction:** The next release will likely focus on **stability fixes for 0.25.0** plus **Aliyun provider support** and possibly **cached settings/performance improvements** already in flight.

---

## 7. User Feedback Summary

### Pain Points
- **Web UI reliability:** Message disappearance, dashboard infinite refresh, and broken Telegram/Slack setup flows dominate QA reports. Users cannot trust the hosted staging experience.
- **Upgrade opacity:** [#2346](https://github.com/nearai/ironclaw/issues/2346) — failing upgrades with no actionable error message create helplessness.
- **OAuth/extension auth friction:** Google Sheets and Twitter/X setups fail with cryptic errors; users expect "it just works" integrations.
- **LLM provider limitations:** NearAI/OpenAI-only embeddings and single-provider orchestrator fragility (#2276) restrict power users.

### Use Cases Emerging
- **Business automation:** Google Sheets + Telegram + scheduled agents (meeting prep, digests).
- **Social media monitoring:** Twitter/X digests routed to messaging channels.
- **Multi-channel bots:** Single bot across Telegram, Slack, and web — but routing/threading bugs (#2405) block this.

### Satisfaction Signals
- Active QA program (`bug_bash`, `crab shack` staging) shows investment in quality.
- Rapid same-day fixes for critical issues (#2434, #2473) demonstrate responsive engineering.
- Community RFCs (#101, #120) and new contributor PRs (#1446) indicate healthy external interest.

---

## 8. Backlog Watch

These important items have been **open for 2+ months** with minimal recent closure progress and need maintainer attention:

| Issue/PR | Age | Risk if Neglected |
|---|---|---|
| [#80](https://github.com/nearai/ironclaw/issues/80) Multi-provider LLM | ~2 months | Competitive disadvantage vs. OpenWebUI, Ollama-native tools |
| [#84](https://github.com/nearai/ironclaw/issues/84) Agent advanced features (multi-agent, streaming, thinking) | ~2 months | Blocks enterprise/power-user segment |
| [#87](https://github.com/nearai/ironclaw/issues/87) Memory & knowledge enhancements | ~2 months | Core differentiator for personal AI assistant; users will churn if memory feels shallow |
| [#90](https://github.com/nearai/ironclaw/issues/90) Audio pipeline | ~2 months | WhatsApp voice note support is a P1 dependency |
| [#101](https://github.com/nearai/ironclaw/issues/101) Git-based plugin registry (RFC) | ~2 months | Ecosystem growth bottleneck |
| [#120](https://github.com/nearai/ironclaw/issues/120) Simplify skills system (RFC) | ~2 months | Security and OpenClaw compatibility at stake |
| [#144](https://github.com/nearai/ironclaw/issues/144) Community chat/channel request | ~2 months | Contributor onboarding friction |

**Recommendation:** The team should consider a **roadmap sync or public milestone** to signal prioritization among these long-running feature issues, even if immediate engineering capacity is consumed by the `0.25.0` stabilization push.

---

*Digest generated from GitHub activity for nearai/ironclaw on 2026-04-15.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-15

## 1. Today's Overview

LobsterAI showed **very high engineering velocity** on 2026-04-14 with **24 PRs updated** (13 merged/closed, 11 open) against only **2 active issues**, indicating the project is in an intensive pre-release integration phase. The majority of closed PRs were merged into a `release/2026.04.14` branch, suggesting a scheduled release is imminent. Work spans performance optimization (Windows cold-start reduction, package size pruning), UI/UX polish (TTS, session grouping, stats dashboards), and enterprise integrations (WeCom multi-bot support). No new release was cut today.

---

## 2. Releases

**No new releases** were published on 2026-04-15.

*Note:* Heavy merge activity into `release/2026.04.14` strongly signals a release is pending validation.

---

## 3. Project Progress

### Merged/Closed PRs (13 total)

| PR | Area | Summary | Link |
|:---|:---|:---|:---|
| #1684 | openclaw/build | Pruned ~65MB orphaned `@tloncorp/tlon-skill` native binary from macOS installer | [PR #1684](https://github.com/netease-youdao/LobsterAI/pull/1684) |
| #1681 | main/openclaw | Fixed duplicate error message spawning during gateway retry with same `runId` | [PR #1681](https://github.com/netease-youdao/LobsterAI/pull/1681) |
| #1680 | renderer | Registered missing `QianfanIcon` in provider icon map | [PR #1680](https://github.com/netease-youdao/LobsterAI/pull/1680) |
| #1678 | renderer | Removed unused icon imports in `Settings.tsx` | [PR #1678](https://github.com/netease-youdao/LobsterAI/pull/1678) |
| #1677 | build/main/openclaw | Fixed macOS signing with `.bin` symlinks; enabled esbuild minify for gateway; added startup timing instrumentation | [PR #1677](https://github.com/netease-youdao/LobsterAI/pull/1677) |
| #1676 | multi-area | **Major runtime upgrade:** OpenClaw runtime & gateway config sync to v2026.4.8; added session keepalive policies; fixed Windows gateway startup gaps; cron scope upgrade pairing | [PR #1676](https://github.com/netease-youdao/LobsterAI/pull/1676) |
| #1674 | renderer | Merged MCP card description tooltip fix (popover replacing broken tooltip) | [PR #1674](https://github.com/netease-youdao/LobsterAI/pull/1674) |
| #1673 | main/openclaw | **Cut Windows cold-start from ~51s to ~35s** via three patches (skip legacy config, skip symlink preload, optimize gateway bundle) | [PR #1673](https://github.com/netease-youdao/LobsterAI/pull/1673) |
| #1672 | renderer | Merged i18n fix for color theme names not translating on language switch | [PR #1672](https://github.com/netease-youdao/LobsterAI/pull/1672) |
| #1379 | renderer | Original MCP card description tooltip clamping fix | [PR #1379](https://github.com/netease-youdao/LobsterAI/pull/1379) |
| #1356 | renderer | Original i18n color theme translation fix | [PR #1356](https://github.com/netease-youdao/LobsterAI/pull/1356) |

**Key advances:**
- **Performance:** Windows startup time reduced by ~31%; macOS package bloat reduced by 65MB.
- **Runtime modernization:** OpenClaw runtime upgraded to v2026.4.8 with session lifecycle management.
- **UX refinement:** MCP marketplace UI fixed, provider icons completed, i18n gaps closed.

---

## 4. Community Hot Topics

No PR or issue accumulated comments or reactions today, indicating either:
- Development is **internally driven** (NetEase Youdao engineering team), or
- Community discussion happens outside GitHub (e.g., internal Slack/Lark, Gitee, or customer support channels).

The most **architecturally significant** open PRs with broad surface area:

| PR | Topic | Why It Matters | Link |
|:---|:---|:---|:---|
| #1685 | Reduce packaged OpenClaw runtime size | Addresses distribution size, a common Electron/Node app pain point | [PR #1685](https://github.com/netease-youdao/LobsterAI/pull/1685) |
| #1676 | OpenClaw runtime & gateway upgrade | Core infrastructure change touching 7 subsystems; gates release | [PR #1676](https://github.com/netease-youdao/LobsterAI/pull/1676) |
| #1670 | WeCom multi-bot + scheduled task notification fixes | Enterprise feature critical to B2B adoption | [PR #1670](https://github.com/netease-youdao/LobsterAI/pull/1670) |

**Underlying need:** Users and deployers need a **leaner, faster, more enterprise-integrated** desktop AI agent.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | #1681 | Gateway retry with same `runId` spawns duplicate error messages in UI | **Fixed** (merged) |
| **High** | #1673 | Windows cold-start ~51s severely impacts UX | **Fixed** (merged, ~35s now) |
| **Medium** | #1684 | Orphaned 65MB native binary bloats macOS installer | **Fixed** (merged) |
| **Medium** | #1671 | Markdown-to-Word conversion fails mid-process with `sse response finish reason: full` | **Open**, no fix PR linked |
| **Medium** | #1662 | Non-SSE MCP engines cannot be found/used | **Open**, no fix PR linked |
| **Low** | #1680 | Missing Qianfan provider icon | **Fixed** (merged) |

**Stability assessment:** Today's merged fixes address significant runtime and packaging regressions. The two open issues (#1671, #1662) both relate to **MCP/SSE integration robustness**, an area that may need focused attention before release.

---

## 6. Feature Requests & Roadmap Signals

Features in active development (open PRs) that likely land in the next release:

| PR | Feature | Prediction | Link |
|:---|:---|:---|:---|
| #1682 | **AI message read-aloud (TTS)** in Cowork via Web Speech API | High probability — zero-dependency, self-contained | [PR #1682](https://github.com/netease-youdao/LobsterAI/pull/1682) |
| #1679 | **Scheduled task stats dashboard** (success rate, 7-day trend, avg duration) | High probability — complements existing run history | [PR #1679](https://github.com/netease-youdao/LobsterAI/pull/1679) |
| #1675 | **Time-based session grouping** in Cowork (today/yesterday/7d/30d/monthly) | High probability — pure UI improvement, low risk | [PR #1675](https://github.com/netease-youdao/LobsterAI/pull/1675) |
| #1668 | **Per-Agent working directory** configuration | Medium-high probability — schema migration already included | [PR #1668](https://github.com/netease-youdao/LobsterAI/pull/1668) |
| #1669 | **Model provider "test connection" UX fixes** | High probability — small, high-impact polish | [PR #1669](https://github.com/netease-youdao/LobsterAI/pull/1669) |
| #1667 | **Qwen console link migration** to Bailian | High probability — zero behavioral change, compliance-driven | [PR #1667](https://github.com/netease-youdao/LobsterAI/pull/1667) |
| #1670 | **WeCom multi-bot support** | Medium probability — enterprise feature, may need extended QA | [PR #1670](https://github.com/netease-youdao/LobsterAI/pull/1670) |

**Roadmap signal:** The project is prioritizing **accessibility (TTS)**, **productivity analytics**, **enterprise IM integrations**, and **developer experience (MCP, provider management)**.

---

## 7. User Feedback Summary

### Pain Points (from issues + PR problem statements)
- **MCP reliability:** SSE streams fail mid-task (#1671); non-SSE MCP engines are completely unavailable (#1662). Users depend on MCP for tool-calling extensibility.
- **Windows performance:** Cold-start was painfully slow (~51s) — a major desktop app friction point, now partially resolved.
- **Provider configuration confusion:** Invalid GitHub skill imports lack upfront validation (#1683); Qwen links point to deprecated consoles (#1667); "test connection" allows incomplete configs (#1669).
- **Enterprise workflow gaps:** Scheduled task history lacked visibility (#1679); WeCom notifications failed (#1670).

### Satisfaction Signals
- Rapid fix turnaround for packaging and startup issues suggests responsive engineering.
- Accessibility (TTS) and analytics features show investment in end-user productivity.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| #1662 — Non-SSE MCP engines unusable | 1 day | **High** — breaks core MCP extensibility for non-SSE transports | Maintainer triage + assign to MCP area owner |
| #1671 — MD-to-Word fails with SSE finish reason `full` | 1 day | **Medium-High** — document export is a common user workflow | Reproduce with logs, link to OpenClaw runtime team |
| #1685 — Runtime size reduction | 0 days | Medium — open but actively authored by `nmgwddj` | Review for release/2026.04.14 inclusion |
| #1670 — WeCom multi-bot | 0 days | Medium — enterprise-critical, empty PR description | Author to fill description for review |

**Overall backlog health:** Clean. No stale items. The two open issues are fresh but touch critical paths (MCP, document export) and should be prioritized before the pending release ships.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-15

## 1. Today's Overview

Moltis saw **very high development velocity** in the past 24 hours, with **21 tracked items** updated (12 issues, 13 PRs) and **8 PRs merged/closed** versus **5 remaining open**. The project shipped **two new releases** (`20260414.02`, `20260413.06`), indicating an active nightly or date-stamped release cadence. A clear thematic focus emerged around **MCP/tool-schema compatibility**, **sandbox security hardening**, and **platform integration reliability** (Slack, WhatsApp, GraphQL). The maintainer team appears highly responsive, closing most issues same-day or within 48 hours.

---

## 2. Releases

| Version | Date | Notes |
|--------|------|-------|
| [`20260414.02`](https://github.com/moltis-org/moltis/releases/tag/20260414.02) | 2026-04-14 | No release notes provided in source data. Given merged PRs, likely includes Slack TLS fix, sandbox `/proc` `/sys` masking, GraphQL `sessionKey` enforcement, and OpenAI/Gemini schema patches. |
| [`20260413.06`](https://github.com/moltis-org/moltis/releases/tag/20260413.06) | 2026-04-13 | No release notes provided in source data. Preceded the 2026-04-14 merge wave. |

> **Note:** Release changelogs are absent from the raw data. Users should consult tagged release notes on GitHub for breaking changes or migration guidance.

---

## 3. Project Progress

### Merged/Closed PRs Today (8)

| PR | Author | Summary |
|---|--------|---------|
| [#715](https://github.com/moltis-org/moltis/pull/715) | penso | **Chat identity preservation**: `sender_name` is now threaded through `ChatMessage::User`, chat streaming, and agent prompts. Improves multi-user channel context (Telegram, Slack, etc.). |
| [#708](https://github.com/moltis-org/moltis/pull/708) | penso | **GraphQL API hardening**: `sessionKey` is now **required** (`String!`) on all chat mutations, queries, and subscriptions. iOS companion app schema regenerated. |
| [#707](https://github.com/moltis-org/moltis/pull/707) | penso | **Slack TLS fix**: Bumped `slack-morphism` to `2.20`, resolving `TlsFeatureNotEnabled` errors in socket mode. |
| [#706](https://github.com/moltis-org/moltis/pull/706) | penso | **Sandbox security**: Docker/Podman containers now mask `/proc` and `/sys` host metadata (hostname, BIOS serials, disk/LUKS UUIDs) via tmpfs overlays and `--hostname sandbox`. |
| [#704](https://github.com/moltis-org/moltis/pull/704) | dependabot[bot] | **Dependency bump**: `rand` 0.9.2 → 0.10.0. |
| [#521](https://github.com/moltis-org/moltis/pull/521) | fortunto2 | **New provider**: Added `openai-oxide` as alternative OpenAI provider with Chat Completions + Responses API, tool calling, vision, and WebSocket streaming. |
| [#488](https://github.com/moltis-org/moltis/pull/488) | fortunto2 | **Infrastructure**: Bumped `reqwest` 0.12 → 0.13 (unblocked #521). |
| [#469](https://github.com/moltis-org/moltis/pull/469) | jmikedupont2 | **Build system**: Added Nix flake for reproducible builds, dev shell, and perf witness derivation. |

### Key Advances
- **Security**: Container sandbox hardening and Slack TLS fix address production-deployment concerns.
- **Extensibility**: New `openai-oxide` provider and Nix build support broaden adoption paths.
- **API correctness**: GraphQL session consistency and sender-name preservation improve reliability for multi-user integrations.

---

## 4. Community Hot Topics

### Most Active Issues/PRs by Engagement

| # | Item | Comments | Why It Matters |
|---|------|----------|--------------|
| [#671](https://github.com/moltis-org/moltis/issues/671) | "Clear" button hidden in main session | **4 comments** | UI/UX discoverability problem in the main chat interface. Closed quickly, suggesting responsive frontend triage. |
| [#694](https://github.com/moltis-org/moltis/issues/694) | MCP tool schemas with `not` keyword rejected by OpenAI | **2 comments** | Deep technical interoperability issue with **Attio MCP tools**. Reflects growing user demand for robust MCP ecosystem support. |
| [#718](https://github.com/moltis-org/moltis/pull/718) | Comprehensive configuration reference (open) | *undefined* (new, large) | **1078-line docs PR** — signals strong community investment in onboarding and operator experience. |

### Underlying Needs
- **MCP compatibility** is becoming a critical differentiator; schema edge cases (`not`, `anyOf`, array types) are friction points.
- **Documentation gaps** are being filled by contributors, indicating the project has outgrown its current docs.
- **UI polish** (#671) and **identity/context threading** (#715, #713) show demand for polished multi-user assistant experiences.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|----------|-------|--------|---------|---------|
| **High** | [#716](https://github.com/moltis-org/moltis/issues/716) — Chat fails with Google/Gemini via OpenRouter ("property is not defined" in tool schema) | **Open** | **Yes — competing fixes** | Two open PRs propose fixes: [#717](https://github.com/moltis-org/moltis/pull/717) (skip strict schemas) and [#719](https://github.com/moltis-org/moltis/pull/719) (collapse type arrays). Needs maintainer decision. |
| **High** | [#712](https://github.com/moltis-org/moltis/issues/712) — MCP not properly working | **Open** | **No** | Vague report, zero comments. Requires maintainer clarification/reproduction steps. |
| **Medium** | [#705](https://github.com/moltis-org/moltis/issues/705) — `/proc` and `/sys` exposed to Docker container | **Closed** | [#706](https://github.com/moltis-org/moltis/pull/706) | Security regression; fixed same day. |
| **Medium** | [#407](https://github.com/moltis-org/moltis/issues/407) — Network-filter Proxy failing, `web_search` broken | **Closed** | Unstated | Long-running issue (opened March 11) finally resolved. |
| **Medium** | [#542](https://github.com/moltis-org/moltis/issues/542) — GraphQL `sessionKey` ignored | **Closed** | [#708](https://github.com/moltis-org/moltis/pull/708) | API consistency bug; fixed by making `sessionKey` required. |
| **Medium** | [#543](https://github.com/moltis-org/moltis/issues/543) — Slack Client Built Without TLS support | **Closed** | [#707](https://github.com/moltis-org/moltis/pull/707) | Integration-breaking bug; fixed via dependency bump. |

### Stability Assessment
- **Strong fix velocity**: 6 of 9 bug issues closed within 24 hours.
- **Risk area**: Tool-schema compatibility across providers (OpenAI strict mode ↔ Gemini via OpenRouter) is an active, unresolved fault line with **two competing PRs**.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|----------|---------|---------------------------|
| [#563](https://github.com/moltis-org/moltis/issues/563) — Allow bot to receive and work with PDFs | **Document/vision support** | Moderate — large feature, but highly requested in AI assistants |
| [#713](https://github.com/moltis-org/moltis/issues/713) — Pass Telegram username to LLM | **Rich user context in integrations** | **High** — aligns with merged #715 (sender name threading); pattern is already established |
| [#711](https://github.com/moltis-org/moltis/issues/711) — OpenID authentication in Matrix | **Enterprise/auth features for Matrix bridge** | Moderate — auth is a recurring theme, but Matrix-specific scope may delay |
| [#714](https://github.com/moltis-org/moltis/pull/714) — Allow `GUIDELINES.md` file override for hardcoded tool guidelines | **Agent customization** | **High** — PR is open, follows established file-loading pattern (`SOUL.md`, `IDENTITY.md`, `BOOT.md`) |
| [#718](https://github.com/moltis-org/moltis/pull/718) — Comprehensive configuration reference | **Documentation** | **High** — large, ready docs PR; low risk to merge |
| [#709](https://github.com/moltis-org/moltis/pull/709) — Upgrade `whatsapp-rust` ecosystem 0.2 → 0.5 | **WhatsApp reliability** | **High** — fixes broken inbound messages after WhatsApp protobuf update (#534) |

---

## 7. User Feedback Summary

### Pain Points
- **Provider interoperability**: Users are hitting walls with OpenAI strict-mode tool schemas breaking non-OpenAI providers (Gemini via OpenRouter, [#716](https://github.com/moltis-org/moltis/issues/716); Attio MCP tools, [#694](https://github.com/moltis-org/moltis/issues/694)).
- **Integration fragility**: WhatsApp (#534 → #709), Slack (#543 → #707), and GraphQL (#542 → #708) all had breakage due to upstream changes or API underspecification.
- **Security concerns**: Docker sandbox leakage (#705) was flagged and fixed rapidly, showing security-conscious user base.
- **Discoverability**: Missing "Clear" button (#671) and lack of comprehensive docs (#718) create friction for new operators.

### Positive Signals
- **Responsive maintainers**: Same-day fixes for security, Slack, and GraphQL issues.
- **Extensible architecture**: Contributors are adding providers (`openai-oxide`), build systems (Nix), and platform bridges without core rewrites.
- **Multi-user context**: Community actively improving identity threading across Telegram, Slack, and Matrix.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#407](https://github.com/moltis-org/moltis/issues/407) Network-filter Proxy / `web_search` failure | **~5 weeks** (Mar 11 → Apr 14) | Low (now closed) | Was a long-standing bug; monitor for recurrence. |
| [#469](https://github.com/moltis-org/moltis/pull/469) Nix flake support | **~3 weeks** (Mar 23 → Apr 14) | Low (now merged) | Previously stale; finally merged. Good sign for build-system diversity. |
| [#716](https://github.com/moltis-org/moltis/issues/716) + [#717](https://github.com/moltis-org/moltis/pull/717) / [#719](https://github.com/moltis-org/moltis/pull/719) Gemini schema failure | **<24h** | **High** | **Two competing PRs need maintainer review/merge decision.** Delay risks user churn on OpenRouter/Gemini. |
| [#712](https://github.com/moltis-org/moltis/issues/712) MCP not properly working | **<24h** | **High** | Zero-detail bug report. Maintainer should request logs, reproduction, or close as non-actionable. |

### Maintainer Attention Priority
1. **Decide between [#717](https://github.com/moltis-org/moltis/pull/717) and [#719](https://github.com/moltis-org/moltis/pull/719)** for Gemini tool-schema fix.
2. **Triage [#712](https://github.com/moltis-org/moltis/issues/712)** — request more info or reproduce.
3. **Review [#718](https://github.com/moltis-org/moltis/pull/718)** (docs) and [#714](https://github.com/moltis-org/moltis/pull/714) (GUIDELINES.md) — low-risk, high-community-value merges.

---

*Digest generated from GitHub activity data for moltis-org/moltis on 2026-04-15.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-15

## 1. Today's Overview

CoPaw (now transitioning to **QwenPaw**) shows **very high community activity** with 46 issues and 46 PRs updated in the last 24 hours, indicating an active but potentially stressed development period. The project released **v1.1.1** alongside a beta, suggesting accelerated iteration. However, the rebrand from CoPaw to QwenPaw has created significant user friction around migration paths, data directory conflicts, and broken installations. The maintainer team is actively merging fixes, but the volume of open bugs and questions indicates stability challenges following the recent major release.

---

## 2. Releases

### [v1.1.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.1)
- **OpenRouter Provider**: Built-in provider with model discovery, series browsing, and filtering by modality/pricing ([#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192))
- **OpenCode Provider**: Built-in OpenAI-compatible OpenCode provider (release notes truncated)

### [v1.1.1-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.1-beta.2)
- Version bump to `1.1.1b2` ([#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343))
- Console refactor: improved provider model management modal with capability tags and model search ([#3](https://github.com/agentscope-ai/QwenPaw/pull/3))

**Migration Notes / Breaking Changes**: No official migration guide from CoPaw to QwenPaw is documented, which has become a top user complaint (see [#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288), [#3351](https://github.com/agentscope-ai/QwenPaw/issues/3351), [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)).

---

## 3. Project Progress

### Merged/Closed PRs Today (23 total; notable items)

| PR | Description | Impact |
|---|---|---|
| [#2996](https://github.com/agentscope-ai/QwenPaw/pull/2996) | Auto-build console frontend on startup when source is stale | Smoother source-based development workflow |
| [#2987](https://github.com/agentscope-ai/QwenPaw/pull/2987) | Fix chat cancel race condition | Critical UX fix for unresponsive stop/cancel behavior |
| [#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192) | OpenRouter provider with model filtering | Major provider expansion, shipped in v1.1.1 |
| [#860](https://github.com/agentscope-ai/QwenPaw/pull/860) | Add `uv` tool installation method to docs | Developer onboarding improvement |
| [#3292](https://github.com/agentscope-ai/QwenPaw/pull/3292) | Refactor multi-agent collaboration | Standardized agent escalation with `list_agents`, `chat_with_agent`, `handoff_to_agent` tools |
| [#3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) | Fix 422 error when creating scheduled tasks in Console | Stability fix for cron task creation |
| [#3295](https://github.com/agentscope-ai/QwenPaw/pull/3295) | Omit `tool_choice=auto` for vLLM compatibility | Self-hosted LLM compatibility improvement |
| [#3383](https://github.com/agentscope-ai/QwenPaw/pull/3383) | Update v1.1.1 release notes | Maintenance |

### Open PRs Under Active Development (23 total; notable items)

| PR | Description | Significance |
|---|---|---|
| [#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) | Startup performance optimization (~4.5s → ~0.05s) via lazy loading + parallel init | Major performance win |
| [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) | "Mission Mode" — autonomous iterative agent for long-running tasks | New major feature inspired by Anthropic research |
| [#3385](https://github.com/agentscope-ai/QwenPaw/pull/3385) | Agent CLI + local agent template system | Developer experience & extensibility |
| [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | Agent Statistics page with trends and channel breakdown | Console analytics feature |
| [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) | Render approve buttons for tool guard | Addresses long-standing `/approve` UX complaint |
| [#3388](https://github.com/agentscope-ai/QwenPaw/pull/3388) | Bundle icons locally for offline/LAN deployments | Enterprise/air-gapped deployment support |
| [#3387](https://github.com/agentscope-ai/QwenPaw/pull/3387) | Sort token usage table by date descending | Small but high-annoyance UX fix |
| [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) | Fix silent tool-call stop for qwen3-coder-plus-like models | Model compatibility/stability |

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) — "Help Wanted: Open Tasks — Come Contribute!" | 56 | The project's central contribution hub. Healthy signal of organized community engagement, but also suggests the team is delegating significant work to volunteers. |
| [#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) — "CoPaw怎么平滑升级到QwenPaw" (How to smoothly upgrade CoPaw to QwenPaw) | 32 | **Hottest pain point**. The rebrand lacks migration tooling or documentation. Users fear losing agents, configs, and memory. |
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) — `WORKING_DIR` still points to `.copaw` after QwenPaw upgrade | 11 | Concrete evidence of broken migration path. Data directory mismatch causes confusion and potential data loss. |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) — Update suggestions, `/approve` changes, model auto-switching | 9 | Classic "power user" feature dump. Underlying need: users want lower-friction operation, less manual intervention, and more autonomous agent behavior. |
| [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) — Questions about qwenpaw vs copaw after 1.1.0 update | 7 | Confusion about dual binaries (`copaw` + `qwenpaw`), PATH issues, and split data directories. |

**Underlying Needs**: Clear migration documentation; unified data directory handling; less manual model/tool management; more "it just works" autonomy.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **Critical** | [#3312](https://github.com/agentscope-ai/QwenPaw/issues/3312) | macOS v1.1.0 install breaks both old (CoPaw) and new (QwenPaw) apps — "completely unusable" | None linked |
| **Critical** | [#3322](https://github.com/agentscope-ai/QwenPaw/issues/3322) | Windows Desktop: blank screen and system freezing after QwenPaw install | None linked |
| **High** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | `WORKING_DIR` points to `.copaw` instead of `.qwenpaw`; data written to wrong directory | None linked |
| **High** | [#3277](https://github.com/agentscope-ai/QwenPaw/issues/3277) | Session state JSON corruption from race conditions → permanent 422 errors | None linked |
| **High** | [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) | Feishu channel WebSocket crashes with `RuntimeError` in multi-agent environments | Closed (fixed) |
| **High** | [#3369](https://github.com/agentscope-ai/QwenPaw/issues/3369) | WeChat channel truncates messages when tool output is followed by text | None linked |
| **Medium** | [#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342) | Local LLM management state inaccurate; cannot delete configured models | None linked |
| **Medium** | [#3370](https://github.com/agentscope-ai/QwenPaw/issues/3370) | LLM connection test fails due to missing `image_url` handling in `check_model_connection` | [#3391](https://github.com/agentscope-ai/QwenPaw/pull/3391) open |
| **Medium** | [#3183](https://github.com/agentscope-ai/QwenPaw/issues/3183) | `execute_shell_command` fails on Ubuntu for basic commands like `ls` | None linked |
| **Medium** | [#3338](https://github.com/agentscope-ai/QwenPaw/issues/3338) | Error when conversation turn limit reached — should degrade gracefully | None linked |
| **Medium** | [#3344](https://github.com/agentscope-ai/QwenPaw/issues/3344) | "Failed to decrypt value" error on WeChat channel cron tasks | None linked |

**Assessment**: The project is experiencing **release instability** typical of a major rebrand. Desktop installers (macOS/Windows) and data migration paths are the weakest points.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|---|---|---|
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | One-click update button | High — directly addresses upgrade friction |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | `/approve` as buttons (not text commands) | **Very High** — PR [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) already in review |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | Auto model switching with ranked fallback | Medium — architectural change, but highly requested |
| [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | File operation rollback / undo | Medium — task claimed from #2291, discussion active |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | Skill classification / folder system | Medium — fits skill management roadmap |
| [#2657](https://github.com/agentscope-ai/QwenPaw/issues/2657) | Skill scope: public/global vs agent-shared | Medium — already partially addressed in v1.1.1 console refactor |
| [#3329](https://github.com/agentscope-ai/QwenPaw/issues/3329) | View online images/videos directly | Closed — likely implemented or merged |
| [#3368](https://github.com/agentscope-ai/QwenPaw/issues/3368) | Sort token list by time descending | **Very High** — PR [#3387](https://github.com/agentscope-ai/QwenPaw/pull/3387) already open |

**Predicted v1.1.2 / v1.2.0 themes**: Migration tooling, installer stability, console UX polish (buttons, sorting), startup performance, and autonomous agent modes.

---

## 7. User Feedback Summary

### Pain Points
- **Rebrand chaos**: No clear migration path; dual binaries; split data directories; broken PATH on Windows
- **Desktop installer quality**: macOS and Windows desktop packages have critical launch failures
- **Manual overhead**: Users dislike typing `/approve`, manually switching models, and scrolling to find recent token usage
- **Long conversation performance**: UI lag after 200+ turns in single session ([#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350))
- **Channel-specific bugs**: WeChat truncation, Feishu WebSocket crashes, image loading failures in Feishu

### Positive Signals
- Active maintainer response times (many issues updated same day)
- Strong community contribution pipeline via #2291
- Rapid feature delivery: OpenRouter, multi-agent refactor, mission mode, statistics dashboard

### Use Cases Emerging
- **Enterprise/offline deployment** (local icon bundling, LAN usage)
- **Cross-device continuity** (mobile handoff from web to QQ/WeChat)
- **Long-running autonomous tasks** (mission mode, auto model fallback)
- **Team collaboration** (skill sharing, per-user memory isolation)

---

## 8. Backlog Watch

These important items have been open for weeks+ and need maintainer prioritization or resolution:

| Item | Age | Why It Needs Attention |
|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) Open Tasks | ~3 weeks | Central coordination issue for 50+ comments; if neglected, contributor momentum may stall |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) Update/approve/model suggestions | ~3 weeks | High-engagement feature cluster; partial fixes in PR but no consolidated roadmap response |
| [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) File rollback | ~2 weeks | Task claimed but needs maintainer review/approval to advance |
| [#2177](https://github.com/agentscope-ai/QwenPaw/pull/2177) Default memory summarization cron job | ~3 weeks | First-time contributor PR; memory management is core to product |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) Channel testing infrastructure | ~2.5 weeks | 11 channels lack systematic tests; critical for stability |
| [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) Fix silent tool-call stop for qwen3-coder-plus | ~1 week | Under review; affects DashScope model compatibility |

---

**Project Health Score**: 🟡 **Active but Stressed**
- **Velocity**: High (46 PRs, 2 releases)
- **Stability**: Concerning (critical installer bugs, migration friction)
- **Community**: Strong (organized contributions, high engagement)
- **Recommendation**: Pause feature expansion to ship a **v1.1.2 hotfix** addressing migration scripts, desktop installers, and data directory unification.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-15

---

## 1. Today's Overview

ZeptoClaw saw **moderate automated activity** in the last 24 hours with **12 open pull requests**, all from Dependabot, and **1 active issue** receiving a recent comment. There were **no releases** and **no merged or closed PRs**, indicating maintainers have not yet reviewed the incoming dependency batch. The project appears stable but with **low human maintainer throughput** today. The single open issue (#486) touches on a significant architectural limitation: blocking long-running jobs, suggesting community interest in deeper infrastructure improvements beyond routine upkeep.

---

## 2. Releases

**No new releases.**

---

## 3. Project Progress

**No merged or closed PRs today.**

All 12 updated pull requests are **automated dependency bumps** with zero human merges. Notable dependency categories include:

| PR | Dependency | Change | Scope |
|---|---|---|---|
| [#518](https://github.com/qhkm/zeptoclaw/pull/518) | `uuid` | 1.22.0 → 1.23.0 | Rust core |
| [#517](https://github.com/qhkm/zeptoclaw/pull/517) | `sha2` | 0.10.9 → 0.11.0 | Rust crypto (major bump) |
| [#516](https://github.com/qhkm/zeptoclaw/pull/516) | `libc` | 0.2.183 → 0.2.184 | Rust system bindings |
| [#513](https://github.com/qhkm/zeptoclaw/pull/513) | `google-cloud-auth` | 1.7.0 → 1.8.0 | Cloud auth |
| [#511](https://github.com/qhkm/zeptoclaw/pull/511) | `lettre` | 0.11.19 → 0.11.20 | Email (MSRV now 1.85) |
| [#512](https://github.com/qhkm/zeptoclaw/pull/512) | `vite` | 7.3.1 → 8.0.0 | Frontend build tool (major) |
| [#515](https://github.com/qhkm/zeptoclaw/pull/515) | `react-router` | 7.13.1 → 7.13.2 | Frontend routing |
| [#514](https://github.com/qhkm/zeptoclaw/pull/514) | `recharts` | 3.8.0 → 3.8.1 | Frontend charts |
| [#510](https://github.com/qhkm/zeptoclaw/pull/510), [#508](https://github.com/qhkm/zeptoclaw/pull/508) | `astro` | 5.18.1 → 6.0.5 | Documentation sites (major) |
| [#509](https://github.com/qhkm/zeptoclaw/pull/509) | `docker/login-action` | 4.0.0 → 4.1.0 | CI/CD |
| [#507](https://github.com/qhkm/zeptoclaw/pull/507) | `taiki-e/install-action` | 2.68.21 → 2.72.0 | CI/CD |

**Assessment:** Several major-version bumps (`sha2`, `vite`, `astro`) may carry breaking changes or MSRV shifts. Without maintainer review, these are accumulating risk.

---

## 4. Community Hot Topics

**Most active (and only) open issue:**

- **[#486 — [feat] true concurrent/non blocking design](https://github.com/qhkm/zeptoclaw/issues/486)**  
  Author: `superhero75` | Created: 2026-04-03 | Updated: 2026-04-14 | Comments: 2 | 👍: 0

**Underlying need:** The agent blocks on long-running jobs, degrading real-time responsiveness. The author references [spacebot](https://github.com/spacedriveapp/spacebot) as architectural inspiration and estimates this as a **large-scope change** (new subsystem, multiple modules). They explicitly decline to implement it.

**Signal:** This points to a gap between ZeptoClaw's current synchronous execution model and user expectations for interactive, responsive AI assistants. It is gaining modest discussion but no maintainer response is visible in the data.

---

## 5. Bugs & Stability

**No bug reports, crashes, or regressions explicitly filed today.**

However, **stability watch items** from the dependency backlog:

| Risk | Source | Notes |
|---|---|---|
| **Crypto compatibility** | [#517](https://github.com/qhkm/zeptoclaw/pull/517) (`sha2` 0.10 → 0.11) | Major version bump in hashing library; downstream API changes possible. |
| **MSRV escalation** | [#511](https://github.com/qhkm/zeptoclaw/pull/511) (`lettre` now requires Rust 1.85), [#516](https://github.com/qhkm/zeptoclaw/pull/516) (`libc` MSRV increased) | May break builds for consumers on older toolchains. |
| **Frontend build breakage** | [#512](https://github.com/qhkm/zeptoclaw/pull/512) (`vite` 7 → 8), [#510](https://github.com/qhkm/zeptoclaw/pull/508)/[#510](https://github.com/qhkm/zeptoclaw/pull/510) (`astro` 5 → 6) | Major versions in JS tooling often introduce config or plugin incompatibilities. |

**No fix PRs exist for these risks** beyond the raw bump PRs themselves, which remain unmerged.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **True concurrent / non-blocking agent execution** | [#486](https://github.com/qhkm/zeptoclaw/issues/486) | Low–Medium | High user value, but author-estimated as large scope and no volunteer implementer. Requires maintainer prioritization. |
| **Dependency modernization** | 12 Dependabot PRs | High | Inevitable, but purely maintenance-driven rather than feature-driven. |

**Roadmap signal:** The project may be in a **maintenance-heavy, feature-light** phase. The concurrent execution request aligns with broader AI agent industry trends (multi-tasking, background jobs, streaming responses) and could become a competitive differentiator if adopted.

---

## 7. User Feedback Summary

**Explicit pain point from #486:**

> *"If the agent is running a long job, it won't respond to users until it finishes."*

- **Use case:** Users expect to interact with ZeptoClaw while background tasks (e.g., file operations, API calls, computations) continue.
- **Satisfaction gap:** The current blocking model creates perceived unresponsiveness or "frozen" agent behavior.
- **No other user feedback** (praise, complaints, or testimonials) appeared in today's data.

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|---|---|---|---|
| [#486](https://github.com/qhkm/zeptoclaw/issues/486) | ~11 days | Open, 2 comments, no maintainer label or assignee | Architecturally significant issue with no implementation volunteer; at risk of stalling. |
| 12 Dependabot PRs | 0–1 days | All open, unmerged | Batch of major-version bumps accumulating; requires maintainer review to prevent security/compat debt. |

**Recommendation for maintainers:** Triage the `sha2`, `vite`, and `astro` bumps first due to major-version risk, and acknowledge #486 with a feasibility or roadmap response to retain community momentum.

---

*Digest generated from GitHub activity for 2026-04-15.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-15

## 1. Today's Overview

ZeroClaw shows **extremely high development velocity** with 50 issues and 50 PRs touched in the last 24 hours, though merge throughput remains low (only 6 PRs merged/closed vs. 44 still open). The project is actively maintained with daily engagement, but the growing open PR backlog suggests either rigorous review standards or maintainer bandwidth constraints. No new release was cut today. Activity clusters around **provider compatibility fixes** (Ollama, OpenRouter, Groq, Kimi), **WebUI polish**, and **infrastructure hardening** (observability, CI/builds, sandbox security).

---

## 2. Releases

*No new releases on 2026-04-15.*

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary |
|---|---|---|
| [#5660](https://github.com/zeroclaw-labs/zeroclaw/pull/5660) | gregnazario | **musl/Alpine Linux builds** added to release workflows (`x86_64-unknown-linux-musl`, `aarch64-unknown-linux-musl`); `install.sh` updated for musl detection. *Superseded by reopened [#5739](https://github.com/zeroclaw-labs/zeroclaw/pull/5739).* |

**Note:** Only 1 PR in the top 20 by comment count was closed/merged. The other 5 merged/closed PRs fall outside the shown set, suggesting scattered small fixes landed.

### Features Advancing

- **OpenRouter extensibility**: [#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) adds generic `extra_body` passthrough, enabling arbitrary provider routing params.
- **Observability**: [#5744](https://github.com/zeroclaw-labs/zeroclaw/pull/5744) fixes broken OTEL parent-child span hierarchy; [#5700](https://github.com/zeroclaw-labs/zeroclaw/pull/5700) adds authenticated OTLP export via `otel_headers`.
- **Model spawning**: [#5738](https://github.com/zeroclaw-labs/zeroclaw/pull/5738) implements `model_spawn` tool for live session model switching and parallel ephemeral spawns.
- **WebUI improvements**: [#5724](https://github.com/zeroclaw-labs/zeroclaw/pull/5724) fixes theme mode switching; [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) adds model quick-switcher and persistent WebSocket.
- **Security/sandbox**: [#5737](https://github.com/zeroclaw-labs/zeroclaw/pull/5737) stops `runtime.kind=native` from auto-selecting Docker sandbox.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | 11 | Web dashboard / Tauri app unavailable | **Distribution/build pipeline reliability** — users expect shipped binaries to include built frontend assets without manual `npm ci && npm run build`. |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | 6 | Better ZeroClaw logo | **Project identity & community ownership** — low-cost way to build contributor affinity. |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | 5 | Duplicate assistant messages with narration+tool calls | **Native tool dispatch robustness** — models with reasoning text break message serialization. |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | 5 | Telegram voice transcription | **Feature parity with OpenClaw** — users want drop-in TS→Rust alternative without losing capabilities. |

### Most Active PRs

| PR | Comments | Topic |
|---|---|---|
| [#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) | undefined (high engagement inferred) | OpenRouter `extra_body` passthrough — closes [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **S0 — data loss / security risk** | [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) — Email channel config logic improper | Open | None visible |
| **S0** | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) — Consecutive OOM in WSL2 | Open | None visible |
| **S0** | [#5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) — Persistent error loop on unsupported file parsing | Open | None visible |
| **S0** | [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) — Default config path breaks multi-instance deployments | Open | None visible |
| **S0** | [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) — Feishu responds despite `mention_only=true` | Open | None visible |
| **S0** | [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) — Encrypted `config.json` breaks Telegram token | Open | None visible |
| **S1 — workflow blocked** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) — Web dashboard not available | Open | None visible |
| **S1** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — Kimi-code provider errors in streaming + tools | Open | None visible |
| **S1** | [#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578) — Cannot talk to local llama.cpp server | Open | [#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552) (container-aware onboarding URLs) |
| **S1** | [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) — Ollama provider hard-codes `tool_count=0`, breaking native tool calling | Open | None visible |
| **S2 — degraded behavior** | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) — Duplicate consecutive assistant messages | Open | None visible |
| **S2** | [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) — Groq provider 400 error | Open | None visible |
| **S2** | [#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) — Web dashboard ignores `session_persistence=true` | Open | None visible |
| **S3 — minor** | [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) — Ollama summarization timeout after 60s | Open | None visible |
| **S3** | [#4862](https://github.com/zeroclaw-labs/zeroclaw/issues/4862) — Tauri build artifacts not gitignored | **Closed** | N/A |

**Assessment:** A **concerning cluster of S0/S1 bugs** remains unaddressed without linked fix PRs, particularly around **channel integrations** (Feishu, Telegram, Email) and **provider tool-calling** (Ollama, Kimi, Groq). The OOM in WSL2 and broken web dashboard are major onboarding blockers.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|---|---|---|
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Telegram voice transcription | **High** — explicit parity goal with OpenClaw; well-scoped |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | Clipboard paste & drag-drop images in Web Chat UI | **High** — common UX expectation; moderate effort |
| [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) | `allowed_tools` config option | **Medium-High** — config-driven agent control aligns with existing roadmap |
| [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) | Manual cron trigger | **Medium** — useful for testing; small surface area |
| [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) / [#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) | Native OpenRouter provider routing | **High** — PR already open and active |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) | ANN index for SQLite memory vector search | **Medium** — performance win but requires new dependency (HNSW/etc.) |
| [#5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586) | WIT interface files for plugin contracts | **Medium** — foundational for microkernel architecture; deferred once already |
| [#5738](https://github.com/zeroclaw-labs/zeroclaw/pull/5738) | `model_spawn` tool | **High** — PR open with canonical spec from OpenClaw |

---

## 7. User Feedback Summary

### Pain Points
- **"It doesn't work out of the box"**: The web dashboard / Tauri app requiring manual frontend builds ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)) is a recurring onboarding failure.
- **Provider fragmentation**: Users hitting walls with Ollama ([#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)), Groq ([#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670)), Kimi ([#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)), and llama.cpp ([#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578)) suggests the provider abstraction layer is leaky.
- **Resource exhaustion**: WSL2 OOM ([#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)) and slow compilation ([#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575), [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447)) frustrate developers.
- **Channel reliability**: Feishu, Telegram, and Email all have active S0/S1 bugs indicating insufficient integration testing.

### Positive Signals
- Strong demand for **advanced features** (voice, image paste, model switching, cron manual trigger) shows users are adopting ZeroClaw beyond basic chat.
- Active **enterprise/self-hosting** use cases: multi-instance deployments ([#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605)), encrypted config ([#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654)), and observability ([#5744](https://github.com/zeroclaw-labs/zeroclaw/pull/5744), [#5700](https://github.com/zeroclaw-labs/zeroclaw/pull/5700)).

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | ~18 days | **Onboarding blocker** with 11 comments; no assignee or fix PR visible. |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | ~8 days | Ollama tool calling **completely broken**; 3 upvotes. High visibility for local-AI users. |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | ~6 days | WSL2 OOM kills — affects a major Windows developer segment. |
| [#5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) | ~6 days | Persistent error loop = **bad failure mode**; easy to trigger (send any file to GPT). |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | ~5 days | Multi-instance deployments broken by hardcoded paths — limits enterprise adoption. |

### PRs At Risk of Stalemate

| PR | Age | Risk |
|---|---|---|
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) | ~7 days | Config schema V1→V2 migration — large, high-impact, seeking feedback. Needs maintainer decision to avoid bit-rot. |
| [#5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168) | ~13 days | High-risk HMAC tool execution receipts — security-critical but complex; may need dedicated review pass. |
| [#5734](https://github.com/zeroclaw-labs/zeroclaw/pull/5734) | 1 day | Massive cross-cutting fix for PYTHONPATH/DockerSandbox — high value but touches 40+ labels; needs fast review before conflicts accumulate. |

---

*Digest generated from GitHub activity data for zeroclaw-labs/zeroclaw on 2026-04-15.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*