# OpenClaw 生态日报 2026-04-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-15 00:17 UTC

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

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-04-15

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**，24小时内 Issues 与 PR 各更新 500 条，社区讨论密度达到近期峰值。项目刚发布 `v2026.4.14` 稳定版及一个 beta 版本，重心集中在模型提供商适配（GPT-5 系列显式轮次改进）、渠道稳定性修复与核心代码重构。然而，新版本上线后**回归问题密集爆发**，尤其是 `openai-codex` 提供商、Control UI 闪退、`openclaw configure` 向导崩溃等问题，用户升级体验承压。PR 侧有 187 条已合并/关闭，313 条待审，代码迭代速度与健康度俱佳，但需警惕发布节奏与质量验证的匹配。

---

## 2. 版本发布

### [v2026.4.14](https://github.com/openclaw/openclaw/releases/tag/v2026.4.14) — 稳定版
**主题**：模型提供商质量改进 + 核心性能重构

| 维度 | 内容 |
|:---|:---|
| **更新内容** | ① OpenAI Codex/GPT-5 系列模型的显式轮次（explicit turn）改进；② 渠道提供商问题修复；③ 底层核心代码重构以提升整体性能 |
| **破坏性变更** | 未在 Release Note 中声明，但社区反馈显示 `lossless-claw` 上下文引擎出现兼容性断裂（[#66601](https://github.com/openclaw/openclaw/issues/66601)） |
| **迁移注意事项** | 升级后若使用 `openai-codex/gpt-5.4` 或 `lossless-claw` 插件，建议先验证基础推理与工具调用是否正常；Discord  slash 命令问题已在同日修复闭环（[#58986](https://github.com/openclaw/openclaw/issues/58986)） |

### [v2026.4.14-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.14-beta.1)
- **Changes**：Telegram 论坛主题支持从服务消息中学习人类可读主题名，并注入到 agent context、prompt metadata 与 plugin hook metadata（[#65973](https://github.com/openclaw/openclaw/issues/65973)）— thanks @ptahdunbar
- **Fixes**：UI/chat 中将 `marked.js` 替换为 `markdown-it`，修复恶意构造 markdown 的安全/渲染问题

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#65628](https://github.com/openclaw/openclaw/pull/65628) | @hxy91819 | **secret-scanning skill** 新增 `discussion_comment` 支持（GraphQL 删除/重建命令），安全维护能力扩展 |
| [#66878](https://github.com/openclaw/openclaw/pull/66878) | @jamr-erebor | 新增 `/spawn` 子代理命令别名，并支持 Slack 线程隐式解析，降低多代理协作门槛 |
| [#66613](https://github.com/openclaw/openclaw/pull/66613) | @samzong | **gateway 附件解析失败全面报错**：4 条静默丢弃路径改为显式失败，根治附件丢失黑盒问题 |
| [#65906](https://github.com/openclaw/openclaw/pull/65906) | @JASSBR | 响应前缀模板新增 `{context}` / `{contextPercent}` 变量，用户可感知上下文窗口占用 |
| [#60809](https://github.com/openclaw/openclaw/pull/60809) | @efe-arv | `configure` 模型回退配置清空修复：避免空选择后仍使用陈旧 fallback 导致 404 |
| [#60854](https://github.com/openclaw/openclaw/pull/60854) | @efe-arv | Web UI 文本选中高对比度修复，提升色觉障碍用户可访问性 |
| [#66735](https://github.com/openclaw/openclaw/pull/66735) | @alexlomt | systemd 自重启信号处理优化，避免 CLI 进程被 `SIGTERM` 误杀 |

**整体判断**：今日合并 PR 覆盖安全、可访问性、运维可靠性、用户体验四个维度，项目在技术债务与功能扩展之间保持了较好平衡。

---

## 4. 社区热点

### 讨论最活跃的 Issues / PRs

| 排名 | 条目 | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#49971](https://github.com/openclaw/openclaw/issues/49971) RFC: Native Agent Identity & Trust Verification | **86** | 社区对**去中心化代理身份验证**（ERC-8004 / W3C DID / W3C VC）的长期架构讨论，反映企业级部署对信任根的需求 |
| 🥈 | [#45064](https://github.com/openclaw/openclaw/issues/45064) Memory Leak - OOM on basic commands | **29** | `2026.3.12` CLI 基础命令即崩溃，严重影响核心稳定性，用户要求紧急修复 |
| 🥉 | [#53959](https://github.com/openclaw/openclaw/issues/53959) openai-codex/gpt-5.3-codex 工具调用完全失效 | **17** | 升级 `2026.3.23-2` 后回归，模型"口头答应执行但无任何工具调用"，直接阻断 agent 工作能力 |
| 4 | [#62496](https://github.com/openclaw/openclaw/issues/62496) Telegram DM 语音消息转录静默失败 | **15** | 音频附件路径未定义 + 规范化过滤错误，语音交互场景完全不可用 |
| 5 | [#31708](https://github.com/openclaw/openclaw/issues/31708) 提示缓存失效导致 5 倍 API 成本 | **14** | 成本敏感用户的核心痛点，原 issue 被误关后重新发起，反映 issue 治理需改进 |

**热点分析**：社区诉求呈现**"稳定性 > 成本 > 身份/信任架构"**三层结构。底层工具调用与内存泄漏是阻塞性痛点；中间层成本优化关系付费用户留存；顶层 RFC 代表项目向企业级/跨链场景演进的长期方向。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | 问题 | 状态 | 已有 Fix PR |
|:---|:---|:---|:---|
| 🔴 **P0-崩溃/完全不可用** | [#45064](https://github.com/openclaw/openclaw/issues/45064) `2026.3.12` 内存泄漏，基础 CLI 命令 OOM | OPEN | 未明确关联 |
| 🔴 **P0-核心功能阻断** | [#53959](https://github.com/openclaw/openclaw/issues/53959) `gpt-5.3-codex` 工具调用零执行 | OPEN | 未明确关联 |
| 🔴 **P0-升级即崩溃** | [#66601](https://github.com/openclaw/openclaw/issues/66601) `v2026.4.14` `lossless-claw` 上下文引擎无效，系统不可用 | OPEN | 未明确关联 |
| 🔴 **P0- onboarding 阻断** | [#66693](https://github.com/openclaw/openclaw/issues/66693) / [#66718](https://github.com/openclaw/openclaw/issues/66718) `openclaw configure` `TypeError: Cannot read properties of undefined (reading 'trim')` | OPEN | 未明确关联 |
| 🟡 **P1-高频回归** | [#66633](https://github.com/openclaw/openclaw/issues/66633) `openai-codex` 升级 `2026.4.14` 后 Cloudflare 403 | OPEN | 未明确关联 |
| 🟡 **P1-高频回归** | [#66674](https://github.com/openclaw/openclaw/issues/66674) `gpt-5.4` CLI 推理返回 HTML 错误，表面提示为 "DNS lookup failed" | OPEN | 未明确关联 |
| 🟡 **P1-渠道功能损坏** | [#62496](https://github.com/openclaw/openclaw/issues/62496) Telegram 语音转录静默失败 | OPEN | 未明确关联 |
| 🟡 **P1-渠道功能损坏** | [#66207](https://github.com/openclaw/openclaw/issues/66207) Control UI 聊天消息闪烁（发送后消失 1-2 秒） | OPEN | 未明确关联 |
| 🟡 **P1-渠道功能损坏** | [#65993](https://github.com/openclaw/openclaw/issues/65993) 飞书流式卡片长回复重复/截断 | OPEN | 未明确关联 |
| 🟢 **P2-已修复闭环** | [#58986](https://github.com/openclaw/openclaw/issues/58986) Discord slash 命令仅返回 "✅ Done." | **CLOSED** | ✅ 已修复 |
| 🟢 **P2-已修复闭环** | [#13552](https://github.com/openclaw/openclaw/issues/13552) macOS companion app SSH 隧道网关 token 传递失败 | **CLOSED** | ✅ 已修复 |
| 🟢 **P2-已修复闭环** | [#64068](https://github.com/openclaw/openclaw/issues/64068) `memory-core` dreaming promotion 候选数永远为 0 | **CLOSED** | ✅ 已修复 |

**稳定性评估**：新版本发布当日即出现 **4 个 P0 级问题**，其中 2 个直接阻断新用户体验（`configure` / `onboarding` 崩溃），1 个阻断核心引擎（`lossless-claw`），1 个阻断主流模型提供商（`openai-codex` 403）。建议维护团队启动**热修复通道（v2026.4.15-hotfix）**。

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) 原生代理身份与信任验证（ERC-8004 / DID / VC） | OPEN | ⭐⭐⭐☆☆ | 架构级 RFC，讨论深入但实现周期长，更可能进入 2026 Q3 路线图 |
| [#66474](https://github.com/openclaw/openclaw/issues/66474) 支持 Agent Discovery Protocol (`/.well-known/agent-discovery.json`) | OPEN | ⭐⭐⭐⭐☆ | 标准化协议，与 #49971 互补，社区有明确提案文档，实现面较小 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) 敏感数据脱敏（配置文件、日志、UI） | OPEN | ⭐⭐⭐⭐⭐ | 企业合规刚需，已有 #34452 等前置修复，社区呼声高，极可能近期落地 |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) `memory_search` 递归子目录搜索 | OPEN | ⭐⭐⭐⭐☆ | 日常使用高频痛点，实现简单，PR 友好 |
| [#30998](https://github.com/openclaw/openclaw/issues/30998) 工具输出压缩中间件（上下文优化） | OPEN | ⭐⭐⭐☆☆ | 与上下文成本强相关，需架构设计，可能以实验性功能出现 |
| [#51130](https://github.com/openclaw/openclaw/issues/51130) Gateway 重启后向用户通知待完成工作 | OPEN | ⭐⭐⭐⭐☆ | 体验优化，实现成本中等，与可靠性叙事契合 |
| [#33413](https://github.com/openclaw/openclaw/issues/33413) Slack 工具级进度状态展示 | OPEN | ⭐⭐⭐⭐☆ | 渠道体验细化，Slack 生态用户明确需求 |

**路线图信号**：今日合并的 [#66331](https://github.com/openclaw/openclaw/pull/66331)（ per-agent TTS/STT 覆盖）与 [#66851](https://github.com/openclaw/openclaw/pull/66851)（isolated repo slot workflow）表明，项目正加速向**多代理隔离运行**与**细粒度语音配置**演进。安全与可观测性（#39206, #33915, #33914 等 hook PR）构成下一阶段的底层基础设施。

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **升级即不可用** | [#66601](https://github.com/openclaw/openclaw/issues/66601), [#66633](https://github.com/openclaw/openclaw/issues/66633), [#66674](https://github.com/openclaw/openclaw/issues/66674) | 用户跟随最新版本升级后，核心工作流（CLI 推理、Codex 提供商、上下文引擎）直接断裂，信任受损 |
| **onboarding 体验差** | [#66693](https://github.com/openclaw/openclaw/issues/66693), [#66718](https://github.com/openclaw/openclaw/issues/66718) | 新用户在 `openclaw configure` 向导中遭遇 `TypeError`，无法完成首次配置，流失风险极高 |
| **渠道功能碎片化** | [#62496](https://github.com/openclaw/openclaw/issues/62496), [#65993](https://github.com/openclaw/openclaw/issues/65993), [#50260](https://github.com/openclaw/openclaw/issues/50260) | Telegram 语音、飞书流式卡片、Discord slash 命令等问题反复出现，跨渠道一致性不足 |
| **成本不可控** | [#31708](https://github.com/openclaw/openclaw/issues/31708) | 提示缓存失效导致 API 账单暴涨，用户要求透明化与可审计性 |
| **安全合规焦虑** | [#64046](https://github.com/openclaw/openclaw/issues/64046), [#45740](https://github.com/openclaw/openclaw/issues/45740) | 配置文件明文存储密钥、GitHub issue 内容直接注入子代理提示词，企业用户担忧数据泄露 |

### 满意点
- **响应速度快**：Discord slash 命令问题（[#58986](https://github.com/openclaw/openclaw/issues/58986)）与 macOS companion app SSH 问题（[#13552](https://github.com/openclaw/openclaw/issues/13552)）均在较短时间内闭环修复。
- **功能迭代活跃**：per-agent TTS/STT、repo slot 隔离、上下文变量等高级功能持续推出，技术前瞻性强。

---

## 8. 待处理积压

### 长期未响应的重要 Issue / PR 提醒

| 条目 | 创建时间 | 最后更新 | 积压原因 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent Identity & Trust RFC | 2026-03-18 | 2026-04-14 | 86 评论但无维护者正式回应 | 指派架构负责人，设定 RFC 评审截止日期 |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) memory_search 递归子目录 | 2026-03-04 | 2026-04-14 | 7 评论，标记 stale 但用户持续反馈 | 评估实现成本，转为 `good first issue` |
| [#27996](https://github.com/openclaw/openclaw/issues/27996) Cron scheduler 时区编辑后未重新计算 | 2026-02-26 | 2026-04-14 | 7 评论，定时任务核心功能 | 纳入可靠性 sprint |
| [#29552](https://github.com/openclaw/openclaw/issues/29552) 全局版本不匹配 | 2026-02-28 | 2026-04-14 | 6 评论，gateway 配对失败 | 需要发布流程/CI 层面的根治方案 |
| [#45096](https://github.com/openclaw/openclaw/issues/45096) diagnostics-otel 仅上报系统指标 | 2026-03-13 | 2026-04-14 | 6 评论，可观测性不完整 | 与 OTel 路线图对齐，明确负责人 |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) Typecast TTS 提供商 | 2026-02-06 | 2026-04-15 | **L 级 PR 已开启 2 个多月未合并** | 安排语音/渠道模块 reviewer 集中审阅 |

---

**日报编制说明**：本报告基于 GitHub 公开数据生成，所有链接与统计截至 2026-04-15。项目健康度综合评分：**活跃度 A+ / 代码迭代 A / 发布质量 B- / 社区治理 B+**。建议优先处理 `v2026.4.14` 回归问题以修复用户信任。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-04-15**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"功能扩张与质量止血并行"**的关键阶段。头部项目 OpenClaw 以极高迭代速度引领方向，但发布质量波动明显；NanoBot、Hermes Agent、IronClaw 等第二梯队快速追赶，在特定场景（多模型兼容、Web UI、企业通道）形成差异化；PicoClaw、NanoClaw、ZeroClaw 等新兴项目活跃于架构创新，但受困于审阅带宽不足或前端可用性短板。整体呈现**"上游定义协议、中游争夺集成体验、下游探索垂直场景"**的三层格局，社区对**多模型中立性、真并发架构、成本可观测性、安全隔离**的诉求已跨项目涌现。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 健康度评估 |
|:---|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.14 + beta.1 | **A+ 活跃度 / B- 发布质量** — 迭代极快但 P0 回归密集，需热修复通道 |
| **NanoBot** | 41 (关28) | 65 (并37) | v0.1.5.post1 | **A 健康度** — 关闭率 68%，可观测性与多通道修复推进稳健 |
| **Hermes Agent** | 50 (关16) | 50 (并22) | 无 | **B+ 健康度** — 网关可靠性改善明显，但 1000+ open issues 积压需治理 |
| **PicoClaw** | 8 | 30 (并11) | nightly only | **B+ 健康度** — PR 吞吐高，WebUI 重构中，19 条待审 PR 显审阅带宽不足 |
| **NanoClaw** | 0 | 21 (并15) | 无 | **B 健康度** — 无新增 Issues 反馈渠道静默，v2 架构迁移高速但需 RFC 讨论区 |
| **NullClaw** | 5 (关1) | 5 (并0) | 无 | **B- 健康度** — 社区自驱力强（同日 Issue→PR），但维护者合并 throughput 低 |
| **IronClaw** | 50 (关4) | 50 (并15) | 无 | **B 健康度** — 高速迭代但 7 个 P0 悬而未决，技术债务承压 |
| **LobsterAI** | 2 | 24 (并13) | 无 | **B+ 健康度** — 构建优化与体验打磨扎实，唯一高影响 Bug (#1662) 需关注 |
| **CoPaw/QwenPaw** | 46 (关2) | 46 (并23) | v1.1.1 + beta.2 | **B 健康度** — 代码推进活跃，但品牌迁移引发桌面端崩溃与数据一致性危机 |
| **Moltis** | 12 (关9) | 13 (并8) | 20260414.02 + 20260413.06 | **A- 健康度** — 修复节奏快，2 个竞争 PR (#717/#719) 需尽快决策 |
| **ZeptoClaw** | 1 | 12 (并0) | 无 | **C 健康度** — 仅 Dependabot PR，核心功能停滞，#486 并发架构诉求无回应 |
| **ZeroClaw** | 50 (关2) | 50 (并6) | 无 | **C+ 健康度** — 讨论旺盛但合并率仅 12%，S0/S1 Bug 大量堆积无 Fix PR |
| **TinyClaw** | 0 | 0 | 无 | **—** — 过去 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | 分析 |
|:---|:---|
| **核心优势** | **生态规模最大、协议影响力最强**。Issues/PR 日更各 500 条的量级远超竞品；`Agent Discovery Protocol`、`ERC-8004` 等 RFC 讨论显示其正在定义跨项目标准；skills 生态与渠道覆盖（Discord/Telegram/Slack/飞书等）最为完整。 |
| **技术路线差异** | 坚持 **"全栈一体化"** 路线：自研上下文引擎（`lossless-claw`）、自托管 gateway、原生多通道协议适配，而非依赖 MCP/WASM 等外部抽象。这与 ZeroClaw 的"微内核+WIT插件化"、IronClaw 的"WASM/MCP 化"形成鲜明对比。 |
| **社区规模对比** | OpenClaw 的社区体量约为 NanoBot 的 **7-10 倍**（按日 Issues/PR 计），为 Hermes Agent 的 **10 倍**。但人均维护者响应效率不及 Moltis/NanoBot，导致 11000+ open issues 的治理声誉风险。 |
| **当前挑战** | `v2026.4.14` 当日爆发 4 个 P0 级回归（`configure` 崩溃、`lossless-claw` 断裂、`openai-codex` 403），说明其**发布节奏与质量验证的匹配度**落后于代码迭代速度，存在用户信任侵蚀风险。 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|:---|:---|:---|
| **真并发/非阻塞 Agent 架构** | ZeptoClaw (#486)、IronClaw (#2423 并发工具执行 / #2429 跨线程并行)、NanoClaw (#1772 事件驱动架构) | 用户期望 Agent 执行长任务时不阻塞交互，从"单会话阻塞式"进化为"任务与用户查询并行" |
| **多模型中立性与本地部署** | IronClaw (#80)、ZeroClaw (#5459 Ollama / #5578 llama.cpp)、NanoBot (#2570 Ollama / #3124 Kimi)、CoPaw (#3377 算力一体机)、NanoClaw (#1774 OpenAI 支持) | 降低对单一闭源模型的锁定，Ollama/vLLM/DeepSeek/Kimi 等国产/本地模型的工具调用适配成为刚需 |
| **成本可观测性与控制** | OpenClaw (#31708 提示缓存失效 / #65906 上下文百分比变量)、NanoBot (#3156 Heartbeat 分阶段模型覆盖)、IronClaw (CachedSettingsStore #2425) | 用户要求透明感知 token 消耗、上下文窗口占用，并通过"轻量模型决策+强模型执行"等架构降低成本 |
| **Web UI / 可视化运维** | Hermes Agent (#501 Web UI)、PicoClaw (#806 WebUI 重构)、ZeroClaw (#4866 Dashboard 不可用)、IronClaw (#2409 Web 消息消失)、LobsterAI (Cowork 交互打磨) | 非技术用户的上手门槛推动各项目从 CLI/TUI 向浏览器界面迁移，但前端构建/分发能力参差不齐 |
| **安全隔离与沙箱硬化** | Moltis (#706 /proc/sys 掩码)、IronClaw (#2470 memory poisoning)、OpenClaw (#64046 敏感数据脱敏)、NanoClaw (#1770 setup.sh 沙箱安全化) | 企业部署对容器隔离、密钥脱敏、恶意 skills 过滤的信任基建需求快速上升 |
| **MCP/工具链兼容性** | Moltis (#694 `not` schema / #712 MCP 异常)、LobsterAI (#1662 非 SSE MCP)、IronClaw (#2474 MCP OAuth 误触发)、ZeroClaw (#5584 工具调度器重复消息) | MCP 作为新兴标准，各项目均处于"踩坑-修复"阶段，schema 兼容性与认证自动化是共性问题 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全功能个人助手、多通道生态、skills 市场 | 技术爱好者 → 企业级部署 | 自研 `lossless-claw` 上下文引擎、一体化 gateway、原生协议适配 |
| **NanoBot** | 多通道运维可观测性、自主上下文压缩、国产模型适配 | 中文开发者、中小企业 | Python 为主、快速迭代、社区文档自驱（CSDN 教程被官方收录） |
| **Hermes Agent** | 网关稳定性、分层记忆系统、Dashboard 聊天界面 | 自托管用户、群聊机器人运营者 | Rust 核心、多网关架构、近期重点补强 Web UI 缺口 |
| **IronClaw** | Web 网关、WASM 扩展、NearAI 生态集成 | Web 原生用户、插件开发者 | Rust + WASM 插件沙盒、Tauri 桌面端、AI-first CI 工作流 |
| **PicoClaw** | 边缘设备部署（OpenWrt/ARM64）、WebUI 重构 | IoT/边缘计算场景、硬件玩家 | 轻量化设计、launcher/gateway 分离、针对路由器级硬件优化 |
| **NanoClaw** | v2 架构迁移、事件驱动、WhatsApp Business 集成 | 企业 IM 部署、自动化工作流 | TypeScript、pnpm 构建、Claude Agent SDK 向多模型抽象层演进 |
| **ZeroClaw** | Rust 微内核、WIT 插件契约、crate 模块化 | 系统级开发者、企业基础设施团队 | 激进模块化拆分、配置 schema 版本化、OTEL 可观测性 |
| **Moltis** | 安全隔离、Slack/Telegram 企业集成、Nix 构建 | 安全敏感型企业、DevOps 团队 | Docker/Podman 沙箱硬化、GraphQL 会话强制化、Rust 全栈 |
| **CoPaw/QwenPaw** | 多智能体协作、OpenRouter 接入、控制台自动构建 | 中国开发者、Agent 工作室 | 品牌向 Qwen 生态对齐、控制台前端自动重建、Mission Mode 长任务 |
| **LobsterAI** | 桌面端性能优化、Cowork 团队协作、定时任务可视化 | 企业知识工作者、团队协作用户 | 基于 OpenClaw runtime 的封装层、专注构建产物瘦身与 UI 体验 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（高活跃度 + 功能扩张）
- **OpenClaw**：日更 1000 条（Issues+PRs），但需警惕质量波动
- **NanoBot**：发布节奏稳健，v0.1.5.post1 标志"从能跑到好运维"过渡
- **CoPaw/QwenPaw**：v1.1.1 品牌迁移期，功能 PR 密集但稳定性承压
- **IronClaw**：15 PR/日合并，并发工具执行、AI-first CI 等前沿功能快速落地

### 质量巩固阶段（中等活跃度 + 修复/打磨为主）
- **Moltis**：连续发版 + 安全/稳定性修复密集，治理效率优秀
- **LobsterAI**：构建优化与体验打磨扎实，release 分支收尾中
- **Hermes Agent**：网关可靠性改善明显，但 1000+ issues 需治理机制升级
- **PicoClaw**：WebUI 重构攻坚，OpenWrt 兼容性修复体现垂直场景聚焦

### 瓶颈/停滞风险（低合并率或核心功能停滞）
- **ZeroClaw**：讨论旺盛但合并率 12%，S0/S1 Bug 堆积，前端可用性危机
- **NanoClaw**：PR 流速快但 Issue 反馈渠道静默，v2 架构变革缺 RFC 讨论
- **ZeptoClaw**：仅 Dependabot PR，#486 并发架构诉求无维护者回应，核心开发停滞
- **NullClaw**：社区自驱但维护者审阅带宽不足，5 PR 全部 pending

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"上下文压缩"正成为 Agent 运行时的标配能力** | NanoBot v0.1.5.post1 自主压缩、OpenClaw 的 `lossless-claw` 引擎断裂引发 P0 关注、IronClaw 的群聊压缩耗尽问题 (#9893) | 开发者需将**上下文生命周期管理**纳入核心架构设计，而非事后优化；压缩策略的透明度和用户可控性直接影响信任 |
| **模型中立性从"可配置"升级为"工具调用兼容"** | ZeroClaw Ollama `tool_count=0` (#5459)、NanoBot Qwen/OpenRouter 格式修复 (#3154)、CoPaw vLLM `tool_choice` 修复 (#3295) | 接入新模型不仅是 endpoint 替换，更需验证 **function calling schema、streaming 行为、reasoning 内容格式** 的端到端兼容性 |
| **IM 渠道从"覆盖数量"转向"企业级稳定性"** | Moltis Slack TLS (#707)、NanoBot DingTalk 超时 (#3155)、PicoClaw 飞书流式卡片 (#65993)、CoPaw 飞书 WebSocket 崩溃 (#3331) | 渠道集成已进入**深水区**：超时、重试、流式分片、OAuth 自动化、多 Bot 并发隔离是企业落地的硬门槛 |
| **安全与隔离从"合规 checklist"变为"架构竞争点"** | Moltis /proc/sys 掩码 (#706)、IronClaw memory poisoning (#2470)、OpenClaw ClawGuard 扫描 (#9867) | 随着 Agent 获得文件系统、网络、代码执行能力，**沙箱硬化、工具输出校验、恶意 skills 过滤**将成为差异化核心 |
| **"真并发"可能引发下一代 Agent 运行时架构分化** | ZeptoClaw #486、NanoClaw #1772 事件驱动、IronClaw 并发工具执行 | 当前多数项目仍为"请求-响应"循环，用户对**后台任务 + 实时交互并行**的需求将推动从"聊天机器人"向"常驻数字员工"的范式跃迁 |
| **品牌/生态绑定成为双刃剑** | CoPaw → QwenPaw 迁移危机、OpenClaw 对 Claude/GPT-5 的深度适配引发供应商锁定焦虑 | 开发者在选择上游项目时，需评估**生态绑定深度与迁移成本**，优先选择配置抽象层完善、数据目录规范的项目 |

---

*报告基于 12 个开源项目 2026-04-15 的 GitHub 公开动态生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-15

---

## 1. 今日速览

NanoBot 项目在 2026-04-14 展现出极高的社区活跃度与工程迭代速度：24 小时内 Issues 更新 **41 条**（新开/活跃 13，关闭 28），PR 更新 **65 条**（待合并 28，已合并/关闭 37），并发布了 **v0.1.5.post1** 版本。社区讨论热度集中在模型兼容性（Kimi、美团 LongCat、Anthropic 兼容端点）、多通道稳定性（Matrix、Telegram、DingTalk、Slack）以及可观测性增强（status 显示 task 数、retry 终止提示）。项目整体健康度良好，issue 关闭率 **68%**，PR 合并/关闭率 **57%**，显示出维护团队高效的 triage 和代码审查能力。

---

## 2. 版本发布

### v0.1.5.post1 已发布
**发布说明**：🐈 **nanobot `v0.1.5.post1`** is here 🎉 — 80 PRs merged, 25 new contributors. The agent learned to manage itself.

**核心更新**：
- **自主上下文压缩**：若 `v0.1.5` 是让"建筑可居住"，`v0.1.5.post1` 则是让"建筑学会自我维护"。Agent 现在在上下文接近上限时会自动压缩自身上下文，避免手动清理或 token 溢出。
- **规模**：累计合并 80 个 PR，新增 25 位贡献者。

**潜在注意点**：
- 自动压缩机制可能改变长对话中的历史保留策略，依赖精确上下文回溯的用户需观察行为变化。
- 版本号一致性曾在发布前出现 `__init__.py` (0.4.1) 与 `pyproject.toml` (0.1.5) 不匹配的问题（[#2857](https://github.com/HKUDS/nanobot/issues/2857)），已修复，建议升级后验证 `nanobot --version` 输出。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#3124](https://github.com/HKUDS/nanobot/pull/3124) | razzh7 | **Kimi K2.5/K2.6 思考模式支持**：通过 `extra_body` 注入 `thinking` 参数，支持原生 Kimi 及 OpenRouter 前缀模型名，填补国产大模型能力缺口。 |
| [#3150](https://github.com/HKUDS/nanobot/pull/3150) | aiguozhi123456 | **Retry 终止可视化**：标准重试耗尽时向交互通道发送通知并记录 warning，解决用户长期面临的"状态黑盒"问题。 |
| [#3149](https://github.com/HKUDS/nanobot/pull/3149) | aiguozhi123456 | **`/status` 显示活跃 task 数**：用户可直接判断 agent 是否卡死，与 `/stop` 干预范围完全对应。 |
| [#3154](https://github.com/HKUDS/nanobot/pull/3154) | Michael-lhh | **严格 Provider 工具调用参数规范化**：修复 OpenRouter/Qwen 等因 `function.arguments` 格式问题导致的 502/400 错误。 |
| [#3155](https://github.com/HKUDS/nanobot/pull/3155) | yorkhellen | **DingTalk HTTP 超时处理**：为 token 刷新、媒体传输、消息发送添加超时，防止无限挂起。 |
| [#3153](https://github.com/HKUDS/nanobot/pull/3153) | samyzhh | **Dict 配置 ACL 修复**：解决 Pydantic extra 字段为 dict 时 `is_allowed()` 始终返回 False 的 bug。 |
| [#2938](https://github.com/HKUDS/nanobot/pull/2938) | dividduang | **API 文件上传支持**：OpenAI 兼容 API 新增 JSON base64 与 multipart/form-data 文件上传，覆盖图片、PDF、Office 文档。 |
| [#3138](https://github.com/HKUDS/nanobot/pull/3138) | yeyitech | **Slack message tool 目标解析**：支持 `#channel_name`、`@user` 等命名目标自动解析为 conversation ID。 |
| [#3147](https://github.com/HKUDS/nanobot/pull/3147) | DStarEpoch | **会话级 Role Play 基础设施**：通道可通过 `session_role` 注入 per-session 角色，持久化到 Session metadata 并进入 system prompt。 |

**整体迈进**：今日合并集中在**可观测性（2 项）**、**通道稳定性（3 项）**、**模型生态扩展（2 项）**、**API 能力补齐（2 项）**，标志着 NanoBot 从"能跑"向"好运维、好集成"过渡。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 状态 | 热点分析 |
|:---|:---|:---|:---|
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) Retry amplification risk: stacked app+SDK retries can triple upstream load | 10 | CLOSED | **系统性稳定性议题**。应用层重试与 SDK 内部重试叠加可能导致上游负载放大 3 倍，已关闭说明有修复或缓解方案，但值得监控是否彻底。 |
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) Matrix channel does not work | 9 | OPEN | **长期通道兼容性痛点**。创建于 2 月 27 日，历经近 7 周仍未关闭，反映 Matrix 通道的启动/初始化存在顽固问题，社区有强烈修复诉求。 |
| [#2588](https://github.com/HKUDS/nanobot/issues/2588) home assistant knowledge | 6 | CLOSED | **工具调用生态**。用户从 OpenClaw 迁移至 NanoBot 后无法复现 Home Assistant 控制，暴露工具调用配置文档与模型适配的门槛。 |
| [#2714](https://github.com/HKUDS/nanobot/issues/2714) 【中文教程】Windows 下 nanobot + DeepSeek 完整安装与配置指南 | 6 | CLOSED | **中文社区自驱贡献**。CSDN 教程被官方 issue 收录，显示中文用户群体庞大且文档缺口明显。 |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) local ollama config - getting 404 page not found | 6 | OPEN | **本地部署入门障碍**。Ollama + Raspberry Pi 场景下 gateway 端口未实际监听，本地模型集成文档仍不足。 |

### 高价值 PR 讨论
- [#3156](https://github.com/HKUDS/nanobot/pull/3156) **Heartbeat 分阶段模型覆盖**：支持 `evalModelOverride` 与 `execModelOverride`，允许用轻量模型做决策、强模型做执行，显著降低长时运行成本，已引发社区对"成本控制架构"的关注。

---

## 5. Bug 与稳定性

| 问题 | 严重度 | 状态 | Fix PR / 备注 |
|:---|:---|:---|:---|
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) Retry amplification risk: stacked app+SDK retries triple upstream load | 🔴 **高** | CLOSED | 已关闭，需确认是否进入 v0.1.5.post1 |
| [#2828](https://github.com/HKUDS/nanobot/issues/2828) DuckDuckGo web search hangs entire system | 🔴 **高** | CLOSED | 系统级挂起，Proxmox 需强制停止，已关闭 |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) LLM returned error: code 1214, messages parameter is illegal | 🟡 **中高** | OPEN | 飞书场景高频出现，token 合并时触发，暂无明确 fix PR |
| [#2559](https://github.com/HKUDS/nanobot/issues/2559) Telegram streaming responses fail with Message_too_long | 🟡 **中** | CLOSED | 长消息流式分片问题，已修复 |
| [#3154](https://github.com/HKUDS/nanobot/pull/3154) OpenRouter/Qwen tool-call arguments 格式错误 | 🟡 **中** | CLOSED | 已合并，修复 502/400 上游错误 |
| [#3155](https://github.com/HKUDS/nanobot/pull/3155) DingTalk HTTP 操作无超时 | 🟡 **中** | CLOSED | 已合并，防止无限挂起 |
| [#3153](https://github.com/HKUDS/nanobot/pull/3153) Dict 配置导致 ACL 失效 | 🟢 **中低** | CLOSED | 已合并 |
| [#3056](https://github.com/HKUDS/nanobot/issues/3056) uv tool install 失败：cryptography==46.0.7 下载错误 | 🟢 **中低** | CLOSED | 安装环境问题，已关闭 |
| [#2857](https://github.com/HKUDS/nanobot/issues/2857) `__version__` 与 `pyproject.toml` 版本不匹配 | 🟢 **低** | CLOSED | 已修复 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Heartbeat 分阶段模型覆盖**（省钱架构） | [#3156](https://github.com/HKUDS/nanobot/pull/3156) | ⭐⭐⭐⭐⭐ 高 | PR 已开，设计完整，切中成本痛点 |
| **会话级 Role Play** | [#3147](https://github.com/HKUDS/nanobot/pull/3147) / [#3148](https://github.com/HKUDS/nanobot/pull/3148) | ⭐⭐⭐⭐⭐ 高 | 基础设施 PR 已合并（#3147），扩展 PR 待审 |
| **`/status` 显示 task 数 + retry 终止提示** | [#3149](https://github.com/HKUDS/nanobot/pull/3149) / [#3150](https://github.com/HKUDS/nanobot/pull/3150) | ⭐⭐⭐⭐⭐ 高 | 已合并，来自社区高频反馈 |
| **API 文件上传** | [#2938](https://github.com/HKUDS/nanobot/pull/2938) | ⭐⭐⭐⭐⭐ 高 | 已合并，补齐 OpenAI 兼容 API 能力 |
| **Matrix 通道修复** | [#1300](https://github.com/HKUDS/nanobot/issues/1300) / [#3151](https://github.com/HKUDS/nanobot/pull/3151) | ⭐⭐⭐⭐☆ 中高 | PR #3151 已开，限流+修复 streaming 编辑，维护者需优先 review |
| **SelfTool（Agent 自我进化）** | [#2521](https://github.com/HKUDS/nanobot/pull/2521) | ⭐⭐⭐☆☆ 中 | 设计激进，默认关闭，需长期评估安全性 |
| **LangSmith 全链路追踪恢复** | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | ⭐⭐⭐⭐☆ 中高 | 企业可观测性刚需，PR 已开 |
| **AgentHiFive 集成** | [#3144](https://github.com/HKUDS/nanobot/pull/3144) | ⭐⭐⭐☆☆ 中 | 可选集成， dormant by default，适合实验性合并 |
| **Web App + Mobile API 通道** | [#3030](https://github.com/HKUDS/nanobot/pull/3030) | ⭐⭐⭐⭐☆ 中高 | 大型 PR（~594 行），为 iOS 配套应用铺路 |

---

## 7. 用户反馈摘要

### 真实痛点
- **"状态黑盒"焦虑**：用户无法判断 agent 是否在运行、是否卡死、retry 是否已放弃（[#3107](https://github.com/HKUDS/nanobot/issues/3107)）。今日合并的 `/status` task 数与 retry 通知直接回应此痛点。
- **本地/国产模型集成门槛高**：Ollama 404（[#2570](https://github.com/HKUDS/nanobot/issues/2570)）、DeepSeek 配置缺失（[#2714](https://github.com/HKUDS/nanobot/issues/2714)）、美团 LongCat 工具调用格式异常（[#2749](https://github.com/HKUDS/nanobot/issues/2749)）反复出现，说明文档和 provider 适配仍需加强。
- **通道稳定性参差不齐**：Matrix 长期不可用（[#1300](https://github.com/HKUDS/nanobot/issues/1300)）、Telegram 长消息崩溃（[#2559](https://github.com/HKUDS/nanobot/issues/2559)）、DingTalk 无限挂起（已修），用户在生产环境选型时信心不足。
- **工具调用"只输出文字不执行"**：多位中文用户反馈 agent 拒绝调用工具（[#2775](https://github.com/HKUDS/nanobot/issues/2775)），可能与 system prompt 或模型特性有关。

### 满意/认可
- **社区自驱文档**：中文用户主动产出 DeepSeek Windows 教程并被官方收录（[#2714](https://github.com/HKUDS/nanobot/issues/2714)）。
- **记忆插件生态**：用户参照 MemOS/OpenClaw 开发了 `nanobot-memory` 原生 Python 方案（[#2736](https://github.com/HKUDS/nanobot/issues/2736)），显示社区扩展意愿强烈。

---

## 8. 待处理积压

### 需维护者优先关注的长期/高价值事项

| 事项 | 创建时间 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) Matrix channel does not work | 2026-02-27 | OPEN | **47 天未关闭**，社区评论 9 条，PR #3151 已开，建议加速 review |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) local ollama config - 404 / gateway 不监听 18790 | 2026-03-27 | OPEN | **18 天**，本地部署核心路径，Raspberry Pi 用户受阻 |
| [#2599](https://github.com/HKUDS/nanobot/issues/2599) Official way to add subagents to config.json | 2026-03-28 | OPEN | **17 天**，文档缺失导致用户无法使用子代理功能 |
| [#2505](https://github.com/HKUDS/nanobot/issues/2505) custom provider does not support extraHeaders? | 2026-03-26 | OPEN | **19 天**，企业自定义端点刚需，影响私有化部署 |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) Web App and Mobile APIs | 2026-04-11 | OPEN | 大型功能 PR，决定 NanoBot 是否有官方移动端入口 |
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) SelfTool for agent self-evolution | 2026-03-26 | OPEN | 26 天，设计前卫，需维护者明确接受或拒绝的信号 |

---

*日报生成时间：2026-04-15 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**2026-04-15**

---

## 1. 今日速览

Hermes Agent 今日维持**极高活跃度**：24小时内 Issues 与 PR 各更新 50 条，社区讨论密集但无新版本发布。核心进展集中在**网关稳定性修复**（重启死循环、静默回复、systemd 兼容性）与**基础设施补强**（AWS Bedrock 原生支持、分层记忆系统）。同时，Web UI 相关议题持续升温，成为社区最关注的功能缺口。项目整体健康度良好，维护者响应迅速，当日关闭 16 个 Issues 与 22 个 PR，但 open issue 总量已突破 1000，长期积压风险值得关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#9945** | teknium1 | 修复网关重启命令在进程实际恢复前过早返回的问题，新增等待健康检查逻辑 | [PR #9945](https://github.com/NousResearch/hermes-agent/pull/9945) |
| **#9941** | teknium1 | 打破 stuck session 在反复重启后的无限恢复循环，引入重试上限与优雅降级 | [PR #9941](https://github.com/NousResearch/hermes-agent/pull/9941) |
| **#9625** | dancingCode007 | 合并分层记忆提供者（SQLite + FTS5），支持身份/语义/情景/反思/归档/程序性记忆的晋升生命周期 | [PR #9625](https://github.com/NousResearch/hermes-agent/pull/9625) |
| **#111** | VencentSoliman | 修复网关启动时 `pairing_store` 与 `hooks` 初始化顺序导致的 `AttributeError` | [PR #111](https://github.com/NousResearch/hermes-agent/pull/111) |
| **#9918** | kapelame | 为 MiniMax 聊天提供者原生接入 TTS / 图像生成 / 视觉能力默认配置 | [PR #9918](https://github.com/NousResearch/hermes-agent/pull/9918) |
| **#9898** | SHL0MS | Dashboard 新增聊天界面（代理到 API 服务器的 `/v1/chat/completions`） | [Issue #9898](https://github.com/NousResearch/hermes-agent/issues/9898) |

**进展评估**：今日合并的 PR 显著提升了**生产环境可靠性**（网关重启、死循环恢复）与**长期记忆架构**（分层记忆），是 v0.9.x 周期中质量较高的一天。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 热度驱动因素 | 链接 |
|:---|:---|:---|:---|
| **#501** Web UI Gateway — Local Browser-Based Interface | 13 | 功能缺口与竞品对比（Claude Artifacts、OpenClaw WebUI）引发长期集中讨论 | [Issue #501](https://github.com/NousResearch/hermes-agent/issues/501) |
| **#9179** SECURITY.md / 私有漏洞报告通道 | 11 | 安全研究者反复呼吁建立官方披露渠道，当日已关闭但问题本质未完全解决 | [Issue #9179](https://github.com/NousResearch/hermes-agent/issues/9179) |
| **#7335** More than 1000 open issues | 11 | 社区对 issue 治理策略的焦虑，引用 OpenClaw 11000+ open issues 作为警示 | [Issue #7335](https://github.com/NousResearch/hermes-agent/issues/7335) |
| **#6843** UnicodeEncodeError on gateway startup | 10 | 高频运行时崩溃，影响新用户体验，持续有复现报告 | [Issue #6843](https://github.com/NousResearch/hermes-agent/issues/6843) |
| **#6323** add mempalace for external memory support | 5 | 外部记忆架构的社区提案，👍 17 为当日最高，反映用户对长期记忆的强需求 | [Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323) |

### 诉求分析
- **Web UI 是头号缺口**：#501 与 #8852、#8183 形成议题集群，社区已发现 `nesquena/hermes-webui`（1602⭐）这一成熟社区项目，官方整合呼声高涨。
- **安全治理信任建设**：研究者希望启用 GitHub Private Vulnerability Reporting，当前依赖 public issue 的方式不被认可。
- **规模化治理焦虑**：1000+ open issues 成为心理阈值，社区需要更清晰的 triage 标签与里程碑机制。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue / PR | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | **#9867** | ClawGuard 安全扫描发现 688 项发现，含 175 个 Critical（远程脚本执行 via curl\|wget pipe） | **待处理** | [Issue #9867](https://github.com/NousResearch/hermes-agent/issues/9867) |
| 🔴 **Critical** | **#9809** | OpenClaw 生态发现 751 个恶意 skills（1.3%），存在协调化恶意软件活动 | 当日关闭（信息通报性质） | [Issue #9809](https://github.com/NousResearch/hermes-agent/issues/9809) |
| 🟠 **High** | **#7536** / **#9941** | 网关 stuck session 重启后进入不可恢复死循环 | **已修复**（PR #9941 合并） | [Issue #7536](https://github.com/NousResearch/hermes-agent/issues/7536) |
| 🟠 **High** | **#8260** / **#9945** | `hermes gateway restart` 在重启完成前返回，导致服务实际不可用 | **已修复**（PR #9945 合并） | [Issue #8260](https://github.com/NousResearch/hermes-agent/issues/8260) |
| 🟠 **High** | **#8104** | `/restart` 硬编码 `detached=True`，杀死 systemd 托管的网关进程 | 当日关闭 | [Issue #8104](https://github.com/NousResearch/hermes-agent/issues/8104) |
| 🟡 **Medium** | **#6843** | 网关启动时 `UnicodeEncodeError`（API 调用失败，provider: zai） | **待处理**，无 fix PR | [Issue #6843](https://github.com/NousResearch/hermes-agent/issues/6843) |
| 🟡 **Medium** | **#9681** | Gateway + Gemini 在工具调用成功后卡住，需 `/reset` + 硬重启恢复 | **待处理**，无 fix PR | [Issue #9681](https://github.com/NousResearch/hermes-agent/issues/9681) |
| 🟡 **Medium** | **#9893** | 群聊场景下上下文压缩耗尽后网关无响应，无 fallback 机制 | **待处理**，无 fix PR | [Issue #9893](https://github.com/NousResearch/hermes-agent/issues/9893) |
| 🟡 **Medium** | **#9840** / **#9935** | Discord 网关发送 `(No message)` 等静默占位符文本 | **有 fix PR**（#9935 待合并） | [Issue #9840](https://github.com/NousResearch/hermes-agent/issues/9840) |
| 🟡 **Medium** | **#9936** / **#9939** | Dashboard 配置 OpenAI auth 时 `NameError: name 'os' is not defined` | **有 fix PR**（#9939 待合并） | [Issue #9936](https://github.com/NousResearch/hermes-agent/issues/9936) |
| 🟢 **Low** | **#9080** | Signal 网关回复首字符出现 `▉` 乱码 | **待处理**，无 fix PR | [Issue #9080](https://github.com/NousResearch/hermes-agent/issues/9080) |
| 🟢 **Low** | **#9879** | CLI banner 居中逻辑破坏基于盲文的皮肤显示效果 | **待处理**，无 fix PR | [Issue #9879](https://github.com/NousResearch/hermes-agent/issues/9879) |

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue/PR | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| **官方 Web UI / 整合 hermes-webui** | #501, #8852, #8183, #9898 | **高** — #9898 已合并 dashboard 聊天界面，#501 有 13 条评论持续推动，社区项目 `hermes-webui` 成熟度足够，官方整合或 fork 概率大 | [Issue #501](https://github.com/NousResearch/hermes-agent/issues/501) |
| **原生 AWS Bedrock 提供者** | PR #7920 | **高** — 大型 feature PR 已开，使用原生 Converse API，是企业级部署关键能力 | [PR #7920](https://github.com/NousResearch/hermes-agent/pull/7920) |
| **原生多智能体架构** | #7517 | **中** — 需求明确（👍 4），但涉及会话隔离、记忆分片、工具配置等深层架构，短期内更可能以 gateway multi-instance 折中 | [Issue #7517](https://github.com/NousResearch/hermes-agent/issues/7517) |
| **分层外部记忆 / mempalace** | #6323, PR #9625 | **高** — PR #9625 已合并内置分层记忆，#6323 的第三方 `mempalace` 整合可能以插件形式后续讨论 | [Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323) |
| **MCP 并行工具调用** | PR #9944 | **高** — 当日新 PR，移植自 OpenAI Codex，改动面可控，符合 MCP 生态演进方向 | [PR #9944](https://github.com/NousResearch/hermes-agent/pull/9944) |
| **网关回复显示模型+思考层级** | #6232 | **中** — 用户体验优化，👍 3，实现成本低，适合快速迭代 | [Issue #6232](https://github.com/NousResearch/hermes-agent/issues/6232) |

---

## 7. 用户反馈摘要

### 核心痛点
- **网关可靠性仍是最大摩擦源**：重启后 session 恢复、systemd 兼容性、Gemini 卡住、群聊上下文压缩耗尽等问题反复出现，说明 gateway 状态机在边缘场景下不够鲁棒。
- **Windows/WSL 安装体验差**：#9851 报告 ollama 安装命令在 WSL2 中冻结，反映非 Linux 原生环境的支持薄弱。
- **调试信息不透明**：#8270（OpenRouter HTTP 400）、#9681（Gemini 卡住无明确错误）均提到错误提示不足以定位问题。

### 满意之处
- **多网关覆盖受认可**：CLI、Telegram、Discord、Signal、WhatsApp 等选择丰富，是用户选择 Hermes 的重要原因。
- **社区响应速度快**：多个 bug 在报告后 1-3 日内即有 fix PR（如 #7536、#8260、#9936），维护者 teknium1 等人活跃度高。

### 典型使用场景
- **个人自托管 AI 助手**：通过 Tailscale 远程访问 dashboard（#9898）。
- **群聊机器人**：Telegram/Discord 群组中的长期运行代理（#9893）。
- **开发工作流自动化**：利用 skills 与工具调用完成代码分析、研究摘要（#4538）。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃或具有高影响力，建议维护者优先关注：

| 项目 | 天数 | 风险/影响 | 链接 |
|:---|:---|:---|:---|
| **#501 Web UI Gateway** | ~40 天 | 社区最热门功能请求，若官方不表态可能导致用户分流至竞品或 fork | [Issue #501](https://github.com/NousResearch/hermes-agent/issues/501) |
| **#6843 UnicodeEncodeError** | ~6 天 | 新用户 onboarding  blocker，10 条评论仍无 fix PR | [Issue #6843](https://github.com/NousResearch/hermes-agent/issues/6843) |
| **#7335 1000+ open issues 治理** | ~5 天 | 项目治理声誉风险，需要官方给出 triage 策略或里程碑计划 | [Issue #7335](https://github.com/NousResearch/hermes-agent/issues/7335) |
| **#9867 ClawGuard 安全扫描** | 当日 | 175 Critical 发现，需安全团队紧急审计 `.github/ISSUE_TEMPLATE/setup.sh` 等文件 | [Issue #9867](https://github.com/NousResearch/hermes-agent/issues/9867) |
| **PR #7920 AWS Bedrock** | ~4 天 | 大型企业用户关键能力，PR 体积可能较大，需加速 review | [PR #7920](https://github.com/NousResearch/hermes-agent/pull/7920) |

---

*日报基于 Hermes Agent GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-15

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**：24小时内 Issues 更新 8 条、PR 更新 30 条，社区提交密集。核心进展集中在 **WebUI 体验优化**、**Cron/定时任务可靠性修复** 以及 **OpenWrt/Windows 等边缘平台兼容性** 上。nightly 版本持续迭代，但多为自动化构建，暂无正式版本发布。整体项目健康度良好，PR 处理吞吐量大（11 条合并/关闭），但待审 PR 积压 19 条，需关注审阅带宽。

---

## 2. 版本发布

**nightly: Nightly Build**  
- 版本：`v0.2.6-nightly.20260414.f82fe5a2`  
- 类型：自动化构建，**可能不稳定，谨慎使用**  
- 变更范围：自 `v0.2.6` 以来的 main 分支累积变更  
- 链接：https://github.com/sipeed/picoclaw/compare/v0.2.6...main  
- ⚠️ **注意事项**：无官方 Release Note，生产环境建议继续使用 `v0.2.6` 稳定版。

---

## 3. 项目进展

今日合并/关闭的 11 条 PR 中，以下几条推动项目实质性前进：

| PR | 作者 | 进展 |
|:---|:---|:---|
| [#2523](https://github.com/sipeed/picoclaw/pull/2523) `feat(web): show disabled chat reasons in composer` | lc6464 | WebUI 聊天输入框禁用状态现在会显示具体原因（而非静默禁用），并隐藏发送按钮避免误操作，直接回应了用户反复报告的"WebUI 无法输入"困惑。 |
| [#2514](https://github.com/sipeed/picoclaw/pull/2514) `feat(launcher): add host overrides for launcher and gateway` | lc6464 | 为 launcher 和 gateway 增加 `-host` / `--host` 绑定控制及环境变量支持，**彻底修复 OpenWrt 23.05 ARM64 双栈绑定导致的 TCP 连接失败问题**（关联 #2488）。 |
| [#2521](https://github.com/sipeed/picoclaw/pull/2521) `chore: update WeChat QR code image` | BeaconCat | 社区运营物料更新。 |
| [#2518](https://github.com/sipeed/picoclaw/pull/2518) `docs: update wechat qrcode` | imguoguo | 文档/社区二维码同步更新。 |
| [#2516](https://github.com/sipeed/picoclaw/pull/2516) `chore(ci): disable scheduled sync-rebase trigger` | sushi30 | CI 清理：移除每日自动 sync-rebase 定时触发，改为手动触发，减少无意义 CI 消耗。 |

**整体迈进**：WebUI 可用性、边缘网络设备兼容性、CI 健康度均有明确改善。

---

## 4. 社区热点

### 最活跃讨论

| 条目 | 热度指标 | 核心诉求 |
|:---|:---|:---|
| [#806](https://github.com/sipeed/picoclaw/issues/806) `Add webUI support (Refactoring now)` | 8 评论, 8 👍, 高频引用 | 这是**长期置顶的功能路线图 Issue**。作者 Zepan 提出为降低非技术用户门槛开发专用 WebUI，目前状态标注为 **"Refactoring now"**。今日仍有大量 PR（如 #2523, #2430, #2524）围绕 WebUI 体验迭代，说明该路线图正在密集执行中。 |
| [#2354](https://github.com/sipeed/picoclaw/issues/2354) `Something Wrong？` | 3 评论, 今日关闭 | 用户反馈 WebUI 输入框和发送按钮被禁用、无法进行正常对话。该 Issue 直接催生了 #2523 的合并，体现了"用户困惑 → 快速修复"的闭环。 |
| [#2148](https://github.com/sipeed/picoclaw/issues/2148) `Phase 2 Implementation Plan: Agent Discovery → Delegation` | 3 评论 | 架构级路线图讨论，跟踪 Agent 发现与委托机制的 Phase 2 实现。属于中长期技术债务，今日无新代码关联，但持续吸引架构关注。 |

**背后诉求**：社区对 **WebUI 完整可用性** 的期待极高，当前处于"功能有但体验粗糙"的阶段，用户希望从"能用"跨越到"好用"。

---

## 5. Bug 与稳定性

按严重程度排列，今日活跃 Bug 如下：

| 优先级 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2488](https://github.com/sipeed/picoclaw/issues/2488) `TCP connections fail on OpenWrt 23.05 (ARM64)` | launcher/gateway 监听但永不 accept，导致服务完全不可用。**已修复**，修复 PR #2514 已合并。 |
| 🔴 **高** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) `gateway start abnormal` | `picoclaw-launcher -public -no-browser` 启动后 gateway 进程异常退出。Debian 13 环境，DingTalk 通道。**待修复**，无关联 PR。 |
| 🟡 **中** | [#2468](https://github.com/sipeed/picoclaw/issues/2468) `Scheduled Task Fails to Execute` | Cron 工具执行报错 `scheduling command execution is restricted to internal channels`。定时任务完全失效。**有修复 PR**：#2474（独立 session）、#2501（可靠性重构）、#2520（任务创建与执行失败修复）均在审阅中。 |
| 🟡 **中** | [#2525](https://github.com/sipeed/picoclaw/pull/2525) `fix(agent): recover after image-input-unsupported failures` | 向非视觉模型发送图片后，会话历史中的图片残留导致后续纯文本消息持续失败，会话"卡死"。**修复 PR 待合并**。 |
| 🟡 **中** | [#2411](https://github.com/sipeed/picoclaw/pull/2411) `fix(provider): handle split SSE stream chunk parsing` | SSE 流分块解析边界问题导致内容丢失。**修复 PR 待合并**，含回归测试。 |
| 🟡 **中** | [#2487](https://github.com/sipeed/picoclaw/pull/2487) `Fix Windows build flow` | Windows 下 `make build` 因 Unix-only 假设失败。**修复 PR 待合并**。 |
| 🟢 **低** | [#2519](https://github.com/sipeed/picoclaw/issues/2519) `Force setting the "workspace" to the default directory` | 工具频繁向 `/tmp` 等非 workspace 目录读写，触发安全策略产生上百行重复报错。属于设计/策略问题，**无修复 PR**。 |

---

## 6. 功能请求与路线图信号

| 条目 | 内容 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#806](https://github.com/sipeed/picoclaw/issues/806) WebUI 重构 | 路线图级功能，正在进行中 | **极高**，大量关联 PR 已在主分支活跃开发 |
| [#2524](https://github.com/sipeed/picoclaw/pull/2524) 搜狗搜索集成 | 为中国大陆用户提供开箱即用的网页搜索，含 WebUI 配置面板 | **高**，需求明确且 PR 完整 |
| [#2502](https://github.com/sipeed/picoclaw/pull/2502) `/btw` 一次性旁路提问命令 | 允许用户插入不进入会话历史的快速问题 | **中-高**，交互创新，代码边界清晰 |
| [#2515](https://github.com/sipeed/picoclaw/issues/2515) 集成 mem0/Supermemory/HydraDB 等外部记忆系统 | 用户希望接入第三方记忆提供商 API | **中**，架构方向合理，但需设计抽象层，短期内更可能进入讨论而非代码 |
| [#2503](https://github.com/sipeed/picoclaw/pull/2503) Agent Loop 并行处理重构 | 基于 #2481 的并行 Agent 循环重构 | **中**，依赖前置 PR 合并，架构改动较大 |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) membench LLM-as-Judge 评估模式 | 为 LOCOMO 基准增加语义评分 | **中**，属于评估工具链增强，非核心产品路径 |

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实声音：

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"WebUI 输入框和发送按钮是灰色的，完全不知道怎么恢复"** | [#2354](https://github.com/sipeed/picoclaw/issues/2354) | 😤 困惑/挫败 |
| **"在 OpenWrt 路由器上部署后，服务启动但连不上，排查了一整天"** | [#2488](https://github.com/sipeed/picoclaw/issues/2488) | 😤 挫败，但已解决 |
| **"定时任务直接报错说 restricted to internal channels，完全不知道什么意思"** | [#2468](https://github.com/sipeed/picoclaw/issues/2468) | 😤 挫败，错误信息不透明 |
| **"只是查个资料，日志刷了几百条 workspace 安全错误，眼睛都要花了"** | [#2519](https://github.com/sipeed/picoclaw/issues/2519) | 😤 烦躁，噪音过大 |
| **"希望有浏览器界面，TUI 对非技术用户还是太难了"** | [#806](https://github.com/sipeed/picoclaw/issues/806) | 🙏 期待，长期诉求 |

**共性结论**：PicoClaw 的核心能力（Agent、工具调用、多通道）已具备，但**错误信息的透明度、边缘平台的兼容性、以及非技术用户的上手门槛**是当前最大的体验鸿沟。

---

## 8. 待处理积压

以下重要 Issue/PR 已长期活跃或存在风险，提醒维护者关注：

| 条目 | 创建时间 | 风险说明 |
|:---|:---|:---|
| [#806](https://github.com/sipeed/picoclaw/issues/806) WebUI 重构 | 2026-02-26（48天前） | 路线图核心，虽在推进但周期较长，社区耐心正在消耗 |
| [#2148](https://github.com/sipeed/picoclaw/issues/2148) Agent Discovery → Delegation Phase 2 | 2026-03-29（17天前） | 架构级 Issue，缺乏明确里程碑和负责人，有沦为长期讨论帖的风险 |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) `modify docker compose with privileged` | 2026-04-01（14天前） | 简单的 Docker Compose 权限调整，但 14 天未获审阅，社区贡献者可能流失 |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) SSE 分块解析修复 | 2026-04-07（7天前） | 含回归测试的质量修复，7 天待审，影响流式响应稳定性 |
| [#2474](https://github.com/sipeed/picoclaw/pull/2474) Cron 独立 session 修复 | 2026-04-10（4天前） | 与 #2468 直接关联，用户报告的生产故障，建议优先审阅 |
| **19 条待合并 PR 整体积压** | — | 审阅带宽明显不足，建议维护者进行批量 triage |

---

*日报生成时间：2026-04-15 | 数据来源：PicoClaw GitHub 仓库公开活动*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-15

---

## 1. 今日速览

NanoClaw 今日呈现**高强度代码流转态势**：过去 24 小时内无新增 Issues，但 PR 吞吐量达 **21 条**（15 条已合并/关闭，6 条待审阅），表明社区正集中火力推进 v2 架构迁移与核心能力扩展。关键方向包括包管理器从 npm 迁移至 pnpm、OpenAI/OpenCode 多模型支持、事件驱动架构重构，以及大量 WhatsApp 集成与容器运行时的稳定性修复。整体项目健康度良好，合并速率快，但缺乏 Issue 讨论可能意味着用户反馈渠道活跃度不足或问题已被快速消化。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#1770** | meeech | 使 `setup.sh` 沙箱安全化，通过项目级本地 npm 缓存消除沙箱外写依赖，为 CI/自动化部署铺平道路 | [qwibitai/nanoclaw#1770](https://github.com/qwibitai/nanoclaw/pull/1770) |
| **#1773** | cmhenry | 修复过期会话自愈合（stale session self-heal），提升长连接稳定性 | [qwibitai/nanoclaw#1773](https://github.com/qwibitai/nanoclaw/pull/1773) |
| **#1595** | glifocat | 引入《贡献者公约》行为准则，完善社区治理基础设施 | [qwibitai/nanoclaw#1595](https://github.com/qwibitai/nanoclaw/pull/1595) |
| **#1388** | glifocat | 全面更新过时文档并与官方文档门户 [docs.nanoclaw.dev](https://docs.nanoclaw.dev) 对齐 | [qwibitai/nanoclaw#1388](https://github.com/qwibitai/nanoclaw/pull/1388) |
| **#962** | glifocat | 修复 MCP 环境变量未传入容器的问题（#798 迁移后的回归） | [qwibitai/nanoclaw#962](https://github.com/qwibitai/nanoclaw/pull/962) |
| **#708** | glifocat | 新增 `update_task` 工具，补全任务调度系统的 CRUD 闭环 | [qwibitai/nanoclaw#708](https://github.com/qwibitai/nanoclaw/pull/708) |
| **#772 / #770** | glifocat | 合并 PDF 阅读器与 WhatsApp 图像视觉技能，显著扩展多模态处理能力 | [qwibitai/nanoclaw#772](https://github.com/qwibitai/nanoclaw/pull/772) · [qwibitai/nanoclaw#770](https://github.com/qwibitai/nanoclaw/pull/770) |
| **#840 / #756 / #754 / #751 / #745** | glifocat | 批量修复 WhatsApp 集成与注册流程：IPC 消息容器关闭、CLAUDE.md 模板生成、JID 处理、配对码持久化 | 见下方 Bug 与稳定性章节 |

**整体迈进评估**：今日合并内容覆盖**开发者体验**（pnpm、沙箱安全、文档）、**运行时稳定性**（会话自愈、容器环境变量、任务调度）、**多模态能力**（PDF、图像视觉）与**社区治理**四大象限，属于**中高量级推进日**。

---

## 4. 社区热点

由于所有 PR 评论数均显示为 `undefined`（数据缺失），且今日无活跃 Issues，无法按评论/反应量排序。但从**PR 标题影响力与架构变革深度**判断，以下两项为当前社区最关注方向：

| PR | 主题 | 背后诉求分析 | 链接 |
|:---|:---|:---|:---|
| **#1772** | 事件驱动架构 + 6 层能力扩展 | 社区核心贡献者正推动 NanoClaw 从"单线程反应式助手"进化为"多智能体运行时"，反映用户对**高并发、可编排、企业级 Agent 基础设施**的强烈需求 | [qwibitai/nanoclaw#1772](https://github.com/qwibitai/nanoclaw/pull/1772) |
| **#1774** | OpenAI 模型支持 + Token 追踪 + Stats API | 打破对 Claude Agent SDK 的单一依赖，支持 GPT-5.4 及本地 Ollama，诉求明确：**模型中立性、成本可控性、可观测性** | [qwibitai/nanoclaw#1774](https://github.com/qwibitai/nanoclaw/pull/1774) |

---

## 5. Bug 与稳定性

| 严重程度 | PR | 问题描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | **#962** | MCP 环境变量在凭证代理迁移后无法传入容器，导致外部服务认证断裂 | **已修复并关闭** |
| 🔴 **高** | **#1773** | 过期会话无法自愈合，导致长时间运行实例连接僵死 | **已修复并关闭** |
| 🟡 **中** | **#840** | 代理使用 IPC-only `send_message` 时任务容器未及时关闭，造成资源泄漏 | **已修复并关闭** |
| 🟡 **中** | **#1777** | `ONECLI_API_KEY` 未转发至 OneCLI SDK，导致云/Dev 网关的容器配置端点认证失败 | **Fix PR 待审阅** |
| 🟡 **中** | **#751** | WhatsApp DM-with-bot 注册路径使用错误 JID 并跳过触发器，破坏私聊注册流程 | **已修复并关闭** |
| 🟢 **低** | **#745** | 配对码在缓冲执行上下文（如 Claude Code 终端）中不可见，写入文件以便即时获取 | **已修复并关闭** |
| 🟢 **低** | **#756 / #754** | 注册时 CLAUDE.md 模板生成不全/助手名称更新仅作用于全局组 | **已修复并关闭** |

**稳定性信号**：glifocat 贡献的 WhatsApp 集成修复集群（5 条 PR）今日全部关闭，表明该模块正经历**集中质量攻坚**，产品化成熟度显著提升。

---

## 6. 功能请求与路线图信号

| PR/Issue | 功能方向 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| **#1772** 事件驱动架构 + Executor Pool + 6 能力层 | 核心运行时重构 | **高** | 由 topcoder1 发起，标题为"NanoClaw scope expansion"，具备路线图级战略定位 |
| **#1774** OpenAI 模型支持 + Token 追踪 | 模型抽象层 | **高** | 直接回应多模型需求，且附带 `AGENT.md` 模型无关配置，设计完整 |
| **#1776** OpenCode Agent Provider (v2) | 新增 Agent 提供商 | **中高** | 对齐 v2 `poll-loop + ProviderOptions.mcpServers` 模型，架构兼容性好 |
| **#1771** npm → pnpm 迁移 (v2) | 开发者体验/构建系统 | **中高** | v2 专属基础设施改造，CI/Dockerfile/setup.sh 已全面适配，推进决心明确 |
| **#1256** `/add-mem0-graph` 持久记忆技能 | 记忆/长期状态 | **中** | 基于成熟库（mem0）、零新增容器、复用现有 Qdrant+Neo4j，但已开放 27 天仍未合并，可能存在评审积压 |

---

## 7. 用户反馈摘要

今日无新增 Issues 评论可供提炼。但从近期关闭的 PR 描述中可反向推断以下**真实用户场景与痛点**：

- **WhatsApp 企业部署痛点**：配对码不可见、DM 注册 JID 错误、IPC 消息容器不退出——反映用户正在将 NanoClaw 部署于**生产级 WhatsApp Business 场景**，对端到端注册与资源清理有严格要求。
- **多模型成本敏感**：#1774 明确提到 "local Ollama models at a fraction of the cost"，用户群体对** Claude 独占的调用成本**存在不满，渴望廉价/本地替代方案。
- **文档分散困惑**：#1388 提到 "documentation files that have fallen behind"，说明用户在**仓库文档与官方门户之间遭遇信息不一致**，已影响上手效率。
- **沙箱/自动化部署阻塞**：#1770 的修复动机直接来自 "Claude Code sandbox without needing..."，表明核心开发者自身也在使用 NanoClaw 于**受限自动化环境**，对零外部写依赖有刚需。

---

## 8. 待处理积压

| PR | 创建时间 | 积压天数 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|
| **#1256** mem0-graph 持久记忆 | 2026-03-19 | **27 天** | 高价值技能，长期未审阅可能导致贡献者流失或代码漂移 | [qwibitai/nanoclaw#1256](https://github.com/qwibitai/nanoclaw/pull/1256) |
| **#1771** pnpm 迁移 | 2026-04-14 | 1 天 | 虽新但为 v2 基础设施关键路径，建议优先审阅以避免阻塞后续 v2 PR | [qwibitai/nanoclaw#1771](https://github.com/qwibitai/nanoclaw/pull/1771) |
| **#1772** 事件驱动架构扩展 | 2026-04-14 | 1 天 | 架构变革量级极大，需维护者尽早介入设计评审，防止与现有 v2 路线冲突 | [qwibitai/nanoclaw#1772](https://github.com/qwibitai/nanoclaw/pull/1772) |
| **#1774** OpenAI 支持 | 2026-04-14 | 1 天 | 用户呼声高的功能，快速审阅可释放多模型支持的社区动能 | [qwibitai/nanoclaw#1774](https://github.com/qwibitai/nanoclaw/pull/1774) |

---

**分析师备注**：NanoClaw 当前处于 v2 架构冲刺期，PR 流速快但 Issue 反馈渠道近乎静默。建议维护者在享受高合并速率的同时，关注 #1256 等长期悬置贡献，并考虑为 #1772 这类架构级 PR 开设 RFC 讨论区，以降低大规模变更的社区摩擦。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-15

---

## 1. 今日速览

NullClaw 社区今日保持活跃，过去24小时内产生 **5 条 Issues 更新**（4 开/活跃，1 关闭）和 **5 条 PR 更新**（全部待合并，无合并记录）。值得关注的是，一名贡献者（DDGRCF）在提出微信扫码登录支持问题后 **同日提交实现 PR**，响应效率极高；同时来自 Picoclaw/ZeroClaw 的迁移用户反馈 `http_request` / 网络搜索能力存在配置障碍，反映出新用户 onboarding 仍有摩擦。整体项目健康度中等偏上，社区自驱力强，但维护者合并 throughput 有待提升——5 个 PR 均处于 pending 状态。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日 **无 PR 被合并或关闭**。尽管社区产出 5 个待审 PR，覆盖 cron 子代理、微信渠道、web_search 引导修复、agent 生命周期稳定化及模型目录刷新等方向，但代码尚未进入主分支，项目代码层面今日无实质性前进。

---

## 4. 社区热点

| 条目 | 热度指标 | 链接 | 诉求分析 |
|:---|:---|:---|:---|
| **#449 Docker Hub 官方镜像请求** | 创建已逾一月，今日仍有活跃，👍×1 | [Issue #449](https://github.com/nullclaw/nullclaw/issues/449) | 用户强烈希望降低部署门槛，要求官方容器镜像 + Docker Compose。这是基础设施层面的"最后一公里"需求，直接影响采用率。 |
| **#812 http_request / 网络搜索无法启用** | 评论×2，今日更新 | [Issue #812](https://github.com/nullclaw/nullclaw/issues/812) | 来自竞品迁移用户的典型 onboarding 痛点：功能存在但配置不透明，文档/错误提示不足。 |
| **#818 / #817 / #816 微信 QR 登录** | Issue→PR 同日闭环，评论/👍 尚少但事件性强 | [PR #818](https://github.com/nullclaw/nullclaw/pull/818) · [Issue #817](https://github.com/nullclaw/nullclaw/issues/817) · [Issue #816](https://github.com/nullclaw/nullclaw/issues/816) | 中文用户群体对微信生态集成的刚需明确；DDGRCF 的"提问+自实现"模式展现了社区贡献者的主动性。 |

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 是否有 Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **中** | `http_request` / web_search 功能无法启用（新用户报告） | 待响应 | **是** — #815 补充了缺失搜索提供方的设置指引 | [Issue #812](https://github.com/nullclaw/nullclaw/issues/812) · [PR #815](https://github.com/nullclaw/nullclaw/pull/815) |
| **中** | named-agent provider 生命周期 bug（vtable 悬垂风险） | 待审 | **是** — #814 修复并添加了回归测试 | [PR #814](https://github.com/nullclaw/nullclaw/pull/814) |
| **低** | `nullclaw models refresh` 输出预算不足导致刷新失败 | 待审 | **是** — #813 提高预算并提取可测试 helper | [PR #813](https://github.com/nullclaw/nullclaw/pull/813) |

> 注：今日无崩溃或数据丢失级别的高严重 bug 报告。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| **Docker Hub 官方镜像 + Docker Compose** | Issue #449 | **高** — 基础设施需求持续存在，但需维护者官方背书和 CI 流水线配合 | [Issue #449](https://github.com/nullclaw/nullclaw/issues/449) |
| **微信 QR 扫码登录 / `weixin` 渠道** | Issue #817/#816 + PR #818 | **极高** — 已有完整 PR 实现终端 QR 渲染、轮询登录、CLI 配置支持，待合并 | [PR #818](https://github.com/nullclaw/nullclaw/pull/818) |
| **Cron 子代理引擎（DB 调度、运行历史、JSON 输出）** | PR #783 | **高** — 功能完整且包含安全加固，但体量较大，需维护者仔细 review | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |

---

## 7. 用户反馈摘要

> 基于 Issues 内容提炼的真实声音

- **迁移用户 friction**："我从 Picoclaw/ZeroClaw 过来，NullClaw 很有条理，但网络搜索从周五搞到现在都不工作"（#812）—— 功能可用性与文档/错误提示的 gap 是核心流失风险。
- **部署门槛焦虑**："有没有官方 Docker 镜像？能不能给 docker compose？"（#449）—— 容器化缺失让部分用户望而却步。
- **中文生态刚需**："是否支持微信二维码登录？"（#816/#817）—— 明确指向中国市场的 IM 渠道集成需求。
- **文档缺口**："Debian 上怎么装 Zig？必须 Docker 吗？"（#820）—— 原生编译依赖的文档覆盖不足。

---

## 8. 待处理积压

| 条目 | 创建时间 | 滞留原因 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|
| **#449 Docker Hub 官方镜像** | 2026-03-12（距今 34 天） | 需维护者决策是否官方维护镜像及发布流程 | 维护者回应 roadmap 或社区贡献者提交 CI  workflow PR | [Issue #449](https://github.com/nullclaw/nullclaw/issues/449) |
| **#783 Cron 子代理大 PR** | 2026-04-07（距今 8 天） | 功能体量大，涉及调度引擎、安全加固、CLI JSON 输出 | 维护者优先安排 review，或拆分模块分批合并 | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |

---

*日报生成时间：2026-04-15 | 数据来源：NullClaw GitHub 公开活动流*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-15

## 1. 今日速览

IronClaw 今日维持极高活跃度，过去 24 小时内 **Issues 更新 50 条**（46 活跃/新开，4 关闭）、**PR 更新 50 条**（35 待合并，15 已合并/关闭），无新版本发布。核心团队（henrypark133、serrrfirat）密集推进 Web 网关稳定性修复、通道配对流程重构及 CI 基础设施升级；QA 侧（joe-rlo）持续涌入 staging 环境 Bug 报告，Web UI 和 Telegram/Slack 通道成为质量 hotspots。整体项目处于**高速迭代但技术债务承压**的状态，P0 级 Web 网关问题今日有集中修复落地。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日已合并/关闭的 15 个 PR 中，以下对项目主线有实质性推进：

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#2434** | henrypark133 | **修复 Web 网关消息消失问题**：在 `chat_send_handler` 中即时持久化用户消息，消除切换线程时的加载空窗。直接关闭 [Issue #2409](https://github.com/nearai/ironclaw/issues/2409)。 | [PR #2434](https://github.com/nearai/ironclaw/pull/2434) |
| **#2432** | henrypark133 | **重构通道配对/设置流程**：修复 Telegram 专属验证挑战阻塞通用配对流程的问题，解决 [Issue #2411](https://github.com/nearai/ironclaw/issues/2411) 中 Token 保存无响应的故障。含 DB 迁移。 | [PR #2432](https://github.com/nearai/ironclaw/pull/2432) |
| **#2473** | henrypark133 | **修复 Slack OAuth 回调失败**：将 relay OAuth nonce 存储键从 DB user UUID 对齐到 `gateway owner_id`，解除 Slack 连接阻断。 | [PR #2473](https://github.com/nearai/ironclaw/pull/2473) |
| **#2425** | henrypark133 | **引入 CachedSettingsStore**：为 `SettingsStore` 添加按用户缓存装饰器，减少 Agent 循环中的设置读取开销。 | [PR #2425](https://github.com/nearai/ironclaw/pull/2425) |
| **#2423** | henrypark133 | **并发只读工具执行**：在 `Tool` trait 新增 `is_concurrent_safe()`，支持 LLM 多工具调用时的并行批处理，提升 Agent 吞吐。 | [PR #2423](https://github.com/nearai/ironclaw/pull/2423) |
| **#2429** | henrypark133 | **跨线程并行消息处理**：将 `handle_message()` 改为 tokio 并发任务，不同线程的消息可并行处理。 | [PR #2429](https://github.com/nearai/ironclaw/pull/2429) |
| **#2477** | henrypark133 | **网关历史记录富工具卡片**：历史加载时最新一轮工具调用渲染为可展开的 activity card，旧轮次保持紧凑摘要。 | [PR #2477](https://github.com/nearai/ironclaw/pull/2477) |
| **#2459** | serrrfirat | **AI-first CI 工作流**：引入基于 Haiku 的 2-agent PR 审查、交互式健康监控、冒烟测试等四项 GitHub Actions。 | [PR #2459](https://github.com/nearai/ironclaw/pull/2459) |
| **#2401** | serrrfirat | **安全修复**：将测试 URL rewrite 函数完全限定在 `#[cfg(test)]` 后，防止 debug/staging 构建中被恶意利用。关闭 [Issue #2056](https://github.com/nearai/ironclaw/issues/2056)。 | [PR #2401](https://github.com/nearai/ironclaw/pull/2401) |
| **#2467** | ymcrcat | **修复容器内容器部署**：Docker socket 检测优先于 CLI binary 检查，解决 Nomad 等场景下沙盒误判为未安装。 | [PR #2467](https://github.com/nearai/ironclaw/pull/2467) |
| **#2475** | henrypark133 | **E2E 持久化测试**：新增 Playwright 测试验证消息在页面刷新后的完整存活。 | [PR #2475](https://github.com/nearai/ironclaw/pull/2475) |
| **#2362** | serrrfirat | **实时金丝雀回归通道**：增加定时/手动触发的 live canary workflow 及配套运行脚本。 | [PR #2362](https://github.com/nearai/ironclaw/pull/2362) |
| **#2387** | serrrfirat | **优化 PR 体积标签**：测试文件不再计入 size 分类，避免"1 行生产代码 + 500 行测试"被标为 XL。 | [PR #2387](https://github.com/nearai/ironclaw/pull/2387) |

**整体判断**：今日合并集中在 **Web 网关稳定性、通道连接可靠性、Agent 执行性能、CI/安全基础设施** 四个象限，属于"止血 + 筑基"并行的关键节点。

---

## 4. 社区热点

今日讨论最活跃的 Issues（按评论数排序）：

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#2229** Google Sheets OAuth blocked | 7 | **扩展生态接入受阻**：OAuth `invalid_request` 错误直接阻断 Google Workspace 集成，属于 Secrets/Extensions 层的协议兼容性问题。 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| **#2230** Twitter/X connection unavailable | 4 | **MCP 认证体验差**：需手动提取浏览器 cookie，反映 MCP 通道在真实社交平台的 auth 自动化尚未闭环。 | [Issue #2230](https://github.com/nearai/ironclaw/issues/2230) |
| **#76** Discord channel integration | 3 (已关闭) | 功能补齐：Discord 作为主流社区通道，其 gateway WebSocket、DM/线程隔离、斜杠命令支持是用户迁移的关键。 | [Issue #76](https://github.com/nearai/ironclaw/issues/76) |
| **#80** Multi-provider LLM support | 3 | **供应商锁定焦虑**：社区对 Ollama/Bedrock/Gemini/OpenRouter 的需求明确，本地推理和 failover 是高频诉求。 | [Issue #80](https://github.com/nearai/ironclaw/issues/80) |
| **#84** Agent system advanced features | 3 | **多 Agent 架构期待**：工作区隔离、全局会话、流式响应、思考模式等是进阶用户的核心差异化需求。 | [Issue #84](https://github.com/nearai/ironclaw/issues/84) |
| **#87** Memory & knowledge enhancements | 3 | **记忆系统深度优化**：本地嵌入、批处理、引用溯源、memory CLI 指向 RAG  pipeline 的完整可控性。 | [Issue #87](https://github.com/nearai/ironclaw/issues/87) |

**背后诉求分析**：评论热点高度集中在 **"扩展生态接入"（OAuth/MCP）** 和 **"功能 parity/去锁定"（多模型、多通道、多 Agent）** 两大主题。前者是 IronClaw 从 demo 走向生产必须跨越的集成体验鸿沟；后者决定其能否从"又一个 AI 助手"进化为可定制的开源基础设施。

---

## 5. Bug 与稳定性

按严重程度排列的今日活跃 Bug：

| 优先级 | Issue | 现象 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **P0 / p0_quality** | **#2409** | Web 聊天中用户消息输入后消失 | ✅ **已修复** by [PR #2434](https://github.com/nearai/ironclaw/pull/2434) | [Issue #2409](https://github.com/nearai/ironclaw/issues/2409) |
| **P0 / p0_quality** | **#2410** | Dashboard 循环刷新、内容被清空 | 🔄 待修复，无关联 PR | [Issue #2410](https://github.com/nearai/ironclaw/issues/2410) |
| **P0 / p0_quality** | **#2411** | Telegram bot token 保存无响应 | ✅ **已修复** by [PR #2432](https://github.com/nearai/ironclaw/pull/2432) | [Issue #2411](https://github.com/nearai/ironclaw/issues/2411) |
| **P0 / p0_quality** | **#2405** | Gateway `broadcast()` 缺少 `thread_id` 路由错误 | 🔄 待修复，无关联 PR | [Issue #2405](https://github.com/nearai/ironclaw/issues/2405) |
| **P0 / p0_quality** | **#2402** | 工具操作后 Bot 陷入无限 "Calling LLM" 循环 | 🔄 待修复，无关联 PR | [Issue #2402](https://github.com/nearai/ironclaw/issues/2402) |
| **P0 / p0_quality** | **#2346** | 0.24.0 → 0.25.0 实例升级失败且无错误详情 | 🔄 待修复，无关联 PR | [Issue #2346](https://github.com/nearai/ironclaw/issues/2346) |
| **P0 / p0_quality** | **#2276** | Orchestrator 因 nearai_chat 413 Payload Too Large 崩溃 | 🔄 待修复，无关联 PR | [Issue #2276](https://github.com/nearai/ironclaw/issues/2276) |
| **P0 / p0_quality** | **#1997** | Slack App 不可用（用户需自行创建） | 🔄 待修复，无关联 PR | [Issue #1997](https://github.com/nearai/ironclaw/issues/1997) |
| **P0 / p0_quality** | **#1998** | Slack connect flow 损坏、配置状态混乱 | 🔄 待修复，无关联 PR | [Issue #1998](https://github.com/nearai/ironclaw/issues/1998) |
| **Security / High** | **#2470** | Memory poisoning：`write_to_layer()` 绕过注入扫描 | 🔄 新报，无关联 PR | [Issue #2470](https://github.com/nearai/ironclaw/issues/2470) |
| **Bug** | **#2474** | stdio MCP servers 触发错误的 OAuth discovery flow | 🔄 新报，无关联 PR | [Issue #2474](https://github.com/nearai/ironclaw/issues/2474) |
| **P2** | **#2281** | Bot 忽略时间条件，会议准备消息立即发送 | 🔄 待修复，无关联 PR | [Issue #2281](https://github.com/nearai/ironclaw/issues/2281) |

**健康度评估**：今日 Web 网关的 2 个 P0（消息消失、Telegram 保存失效）已快速闭环，但仍有 **7 个 P0 级问题悬而未决**，集中在升级路径、Slack 集成、Orchestrator 负载、Agent 循环控制。新暴露的 **#2470 内存投毒漏洞** 和 **#2474 MCP OAuth 误触发** 需安全与工具链团队优先响应。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 纳入下一版本可能性 | 判断依据 | 链接 |
|:---|:---|:---|:---|:---|
| **#80** 多供应商 LLM 支持 | Ollama、Bedrock、Gemini、OpenRouter、failover | **高** | 基础设施级需求，已有 `FEATURE_PARITY.md` 明确追踪，社区呼声强 | [Issue #80](https://github.com/nearai/ironclaw/issues/80) |
| **#84** Agent 高级特性 | 多 Agent 路由、全局会话、流式、思考模式 | **中高** | 核心差异化能力，P2-P3 分级清晰，但工程量大 | [Issue #84](https://github.com/nearai/ironclaw/issues/84) |
| **#87** 记忆系统增强 | 本地嵌入、批处理、引用、memory CLI | **中高** | 与 RAG 体验直接相关，已有向量基础，增量开发可行 | [Issue #87](https://github.com/nearai/ironclaw/issues/87) |
| **#90** 音频 pipeline | STT/TTS、WhatsApp 语音消息 | **中** | P1-P2 分级，WhatsApp 通道依赖它，但跨层基础设施 | [Issue #90](https://github.com/nearai/ironclaw/issues/90) |
| **#85** 插件/扩展系统扩张 | HTTP 路由、auth 插件、ClawHub registry | **中** | 生态扩张关键，但依赖更稳定的扩展沙盒 | [Issue #85](https://github.com/nearai/ironclaw/issues/85) |
| **#150** 导入 Claude 对话历史 | 本地 CLI + 浏览器导出 | **中** | 用户迁移痛点明确，但属于"nice-to-have"体验优化 | [Issue #150](https://github.com/nearai/ironclaw/issues/150) |
| **#78** P3 消息通道 | iMessage、Matrix、LINE、Teams 等 | **低** | 明确标为 P3，WASM/MCP 化策略可降低维护成本后再推进 | [Issue #78](https://github.com/nearai/ironclaw/issues/78) |

**PR 侧信号**：今日 [PR #1446](https://github.com/nearai/ironclaw/pull/1446)（阿里云百炼 Coding Plan 支持）和 [PR #2428](https://github.com/nearai/ironclaw/pull/2428)（"always approve" 持久化到 DB）显示团队正在**同时扩展 LLM 供应商覆盖和权限系统精细度**，与 #80、#84 的路线图方向一致。

---

## 7. 用户反馈摘要

从 Issues 中提炼的真实用户声音：

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"Google Sheets OAuth 直接报错 400，完全用不了"** — 扩展集成在真实 OAuth 流程中断裂，staging 环境配置与 Google 控制台不匹配 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) | 😤 阻塞性失望 |
| **"Twitter 要手动抠浏览器 cookie，这能叫可用吗？"** — MCP 的认证自动化不足，普通用户无法完成 | [Issue #2230](https://github.com/nearai/ironclaw/issues/2230) | 😤 高门槛挫败 |
| **"Telegram 和 TUI 的记忆不互通，我在控制台说的'我有两只狗'，Telegram 说不知道"** — 跨通道记忆隔离超出用户预期，被视为 bug | [Issue #2259](https://github.com/nearai/ironclaw/issues/2259)（已关闭） | 😕 一致性困惑 |
| **"升级 0.25.0 失败，还没任何错误信息"** — 基础设施可观测性不足，用户无法自助排查 | [Issue #2346](https://github.com/nearai/ironclaw/issues/2346) | 😤 黑盒焦虑 |
| **"消息发出去就没了，刷新才可能出现"** — Web UI 基础交互不可靠，直接侵蚀信任 | [Issue #2409](https://github.com/nearai/ironclaw/issues/2409) | 😤 核心体验崩塌 |
| **"Discord 支持什么时候有？我们社区都在 Discord"** — 通道覆盖决定用户群体能否迁移 | [Issue #76](https://github.com/nearai/ironclaw/issues/76) | 🤔 期待/观望 |
| **"能不能不要锁死 OpenAI/NearAI 嵌入？我要完全本地部署"** — 对供应商锁定的敏感，隐私/成本驱动 | [Issue #97](https://github.com/nearai/ironclaw/issues/97) | 🙏 强烈诉求 |

**满意度亮点**：Discord 集成 Issue 今日关闭（[#76](https://github.com/nearai/ironclaw/issues/76)），显示长期功能请求有推进；CachedSettingsStore 和并发工具执行等性能优化体现工程深度。

---

## 8. 待处理积压

以下 Issue/PR 长期存在或高价值但近期响应不足，建议维护者优先 review：

| 项目 | 时长 | 风险/价值 | 链接 |
|:---|:---|:---|:---|
| **#1446** 阿里云百炼 Coding Plan 支持 | 创建 26 天，XL 体积 | 扩展中国开发者市场与多供应商战略，但跨 15+ scope，review 负担重 | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) |
| **#101** Git-Based Plugin Registry RFC | 创建 58 天 | 插件生态的治理基础设施，由 zmanian 发起，Status 仍为 Draft | [Issue #101](https://github.com/nearai/ironclaw/issues/101) |
| **#120** 简化 skills 系统 RFC | 创建 57 天 | 安全与 OpenClaw 生态兼容的战略转向， supersede 了 #38/#51/#39 | [Issue #120](https://github.com/nearai/ironclaw/issues/120) |
| **#97** Generic embedding endpoint | 创建 59 天 | 本地部署用户的硬需求，改动量小（"minimal changes"）但一直未排期 | [Issue #97](https://github.com/nearai/ironclaw/issues/97) |
| **#70** Feed System | 创建 59 天 | 非侵入式信息流的架构设计，影响

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-15

---

## 1. 今日速览

LobsterAI 今日呈现**高强度迭代态势**，过去24小时内共产生 **24 个 PR 更新**（合并/关闭 13 个，待审阅 11 个）及 2 条活跃 Issue，无新版本发布。开发重心集中在 **OpenClaw 运行时性能优化**（Windows 冷启动从 51s 降至 35s）、**构建产物瘦身**（清理冗余原生二进制依赖）以及 **Cowork 交互体验增强**（会话分组、AI 朗读、定时任务统计面板）。社区 PR 合并节奏稳健，release/2026.04.14 分支进入收尾阶段，整体健康度良好，但 MCP 非 SSE 协议兼容性问题值得持续关注。

---

## 2. 版本发布

**无新版本发布。**

> 注：多个 PR 明确指向 `release/2026.04.14` 分支的合并（如 #1672、#1674），表明该版本正处于发布前的集成验证阶段。

---

## 3. 项目进展

### 🔧 核心运行时与构建优化

| PR | 状态 | 关键进展 |
|:---|:---|:---|
| [#1673](https://github.com/netease-youdao/LobsterAI/pull/1673) | **已合并** | Windows 冷启动大幅优化：通过跳过 legacy 配置检查、移除 qqbot preload symlink、精简 gateway 插件扫描，将启动时间从 **~51s 压缩至 ~35s** |
| [#1677](https://github.com/netease-youdao/LobsterAI/pull/1677) | **已合并** | Gateway 启动速度优化：启用 esbuild minify，修复 macOS 打包签名因 `.bin` symlink 失败的问题 |
| [#1684](https://github.com/netease-youdao/LobsterAI/pull/1684) | **已关闭** | 构建产物瘦身：清理已移除 tlon channel 残留的 **~65MB** 原生二进制（`@tloncorp/tlon-skill-darwin-x64`），避免 macOS 安装包异常膨胀 |
| [#1685](https://github.com/netease-youdao/LobsterAI/pull/1685) | **待合并** | 进一步缩减 OpenClaw 运行时体积：去除 `gateway.asar` 中重复的 gateway extension payload，并增加打包验证 |

### 🚀 功能体验增强

| PR | 状态 | 关键进展 |
|:---|:---|:---|
| [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) | **待合并** | Cowork 场景新增 **AI 回复朗读功能**，基于浏览器原生 Web Speech API，零依赖实现 |
| [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) | **待合并** | 会话列表按时间智能分组（置顶/今天/昨天/7天内/30天内/按月），解决历史记录定位困难 |
| [#1679](https://github.com/netease-youdao/LobsterAI/pull/1679) | **待合并** | 定时任务历史新增 **统计仪表盘**（成功率、执行趋势、平均时长纯 SVG 可视化） |
| [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | **待合并** | 支持为每个 Agent **独立配置工作目录**，与全局 Cowork 目录解耦 |

### 🔗 生态与集成

| PR | 状态 | 关键进展 |
|:---|:---|:---|
| [#1676](https://github.com/netease-youdao/LobsterAI/pull/1676) | **已合并** | OpenClaw runtime 升级至 v2026.4.8，新增会话保活策略（1d/7d/30d/1yr），修复 Windows gateway 启动缺口 |
| [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670) | **待合并** | 企业微信支持多机器人；修复定时任务企微通知失败 bug |

---

## 4. 社区热点

今日 Issues/PRs 均无评论互动，热点主要通过 **PR 的覆盖范围和影响面** 体现：

| 热点 | 链接 | 背后诉求分析 |
|:---|:---|:---|
| **Windows 启动性能攻坚** | [#1673](https://github.com/netease-youdao/LobsterAI/pull/1673) | 企业用户/重度使用者对桌面端启动速度的容忍度极低，~51s 的冷启动已成为明显体验瓶颈，团队以 A/B/C 三补丁体系化解决，显示对生产力场景的重视 |
| **构建产物瘦身运动** | [#1684](https://github.com/netease-youdao/LobsterAI/pull/1684) + [#1685](https://github.com/netease-youdao/LobsterAI/pull/1685) | 分发体积直接影响下载转化率与更新体验，团队正在建立"移除扩展 → 清理 stub → 验证布局"的完整治理链路 |
| **Cowork 交互深度打磨** | [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) + [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) + [#1679](https://github.com/netease-youdao/LobsterAI/pull/1679) | 从"能用"到"好用"的跃迁信号：会话管理、多模态输出（TTS）、数据洞察三管齐下，瞄准团队协作场景的核心竞争力 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | **非 SSE 协议的 MCP 引擎无法找到并使用** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | **待修复**，无关联 PR；MCP 是扩展生态的核心协议，stdio/websocket 等传输方式缺失将严重限制工具集成能力 |
| 🟡 **中** | **md 转 Word 中途中断：`sse response finish reason: full`** | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | **待修复**，无关联 PR；OpenClawRuntime 的 SSE 流异常终止，可能与上下文长度或网关重试策略相关 |
| 🟢 **低** | 千帆（Qianfan）提供商图标未注册，显示通用图标 | [#1680](https://github.com/netease-youdao/LobsterAI/pull/1680) | **已修复**（已合并） |
| 🟢 **低** | 远程导入技能时无效 URL 格式缺少前置校验 | [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683) | **待合并**，修复中 |
| 🟢 **低** | MCP 卡片描述 Tooltip 定位偏移、冗余显示 | [#1379](https://github.com/netease-youdao/LobsterAI/pull/1379) → [#1674](https://github.com/netease-youdao/LobsterAI/pull/1674) | **已修复**（已合并至 release 分支） |
| 🟢 **低** | Gateway 重试时重复生成错误消息（相同 runId） | [#1681](https://github.com/netease-youdao/LobsterAI/pull/1681) | **已修复**（已合并） |

> **风险评估**：[#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) 是今日唯一未有关闭/合并动作的高影响 Bug，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入可能性 |
|:---|:---|:---|
| PR [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) | AI 消息朗读（TTS） | **高** — 已实现待合并，零依赖，体验提升明确 |
| PR [#1679](https://github.com/netease-youdao/LobsterAI/pull/1679) | 定时任务统计仪表盘 | **高** — 数据可视化补齐历史页面的核心缺口 |
| PR [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) | 会话列表按时间分组 | **高** — 高频交互优化，代码结构清晰 |
| PR [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | Agent 级独立工作目录 | **中高** — 多 Agent 隔离是企业场景的刚需，数据库迁移已做兼容处理 |
| Issue [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | MCP 支持非 SSE 传输 | **待定** — 属于架构级扩展，需评估 OpenClaw runtime 的 MCP 客户端实现范围 |

---

## 7. 用户反馈摘要

从今日 Issues 提炼的真实痛点：

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **MCP 生态扩展受阻** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 用户尝试使用非 SSE 传输的 MCP 服务时发现引擎不可见，说明 MCP 市场/工具发现机制与传输协议强耦合，灵活性不足 |
| **长文档转换易中断** | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | md 转 Word 执行到一半因 SSE 流终止失败，用户对工作流稳定性预期与实际体验存在落差，错误提示 `finish reason: full` 也不够直观 |
| **配置入口文档过时** | [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) | 阿里云控制台迁移导致用户可能访问失效页面，反映第三方服务变更的追踪机制需要更敏捷的响应 |

> 满意度信号：多个体验优化 PR（会话分组、TTS、统计面板）显示团队对"高频功能打磨"有较强共识，用户侧暂无明显的负面情绪爆发。

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 说明 |
|:---|:---|:---|:---|
| **高影响 Bug** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 2026-04-14 | 非 SSE 的 MCP 无法使用，0 评论、0 反应，存在被淹没风险；建议 48h 内确认技术方案 |
| **高影响 Bug** | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | 2026-04-14 | SSE 流中断导致文档转换失败，需排查 OpenClaw gateway 的流控/重试边界 |
| **待审阅 PR** | [#1685](https://github.com/netease-youdao/LobsterAI/pull/1685) | 2026-04-14 | 运行时瘦身的关键收尾，与 #1684 形成完整链路，建议优先 review |
| **待审阅 PR** | [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | 2026-04-14 | Agent 工作目录隔离涉及 sqlite 迁移与多进程路径处理，需仔细评估兼容性 |

---

*日报生成时间：2026-04-15*  
*数据来源：netease-youdao/LobsterAI GitHub 公开活动*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-15

---

## 1. 今日速览

Moltis 今日展现出**极高的维护活跃度**：24小时内处理了 **12 个 Issues**（关闭 9，新开 3）和 **13 个 PR**（合并/关闭 8，待审 5），并连发 **2 个版本**。核心团队（尤其是 `penso`）集中火力修复了安全隔离、Slack TLS、GraphQL 会话一致性、MCP/工具链兼容性等关键问题。项目处于**密集迭代期**，代码合并节奏快，但待审 PR 中有 2 个针对同一 Bug（#716）的竞争方案，需尽快决策以避免社区困惑。

---

## 2. 版本发布

### 20260414.02 & 20260413.06
- **发布说明**：提供的元数据中未包含具体 changelog，仅标注版本号。
- **建议关注**：连续两日发版暗示存在紧急修复（与安全或稳定性相关）。结合今日合并的 PR #706（Docker 沙箱隔离）、#707（Slack TLS 修复）、#708（GraphQL `sessionKey` 强制化），这些高优先级修复很可能已包含在这两个版本中。
- **迁移提示**：若使用 Slack Socket Mode 或 GraphQL API，建议尽快升级至 `20260414.02` 以获取已知问题的修复。

---

## 3. 项目进展

| PR | 状态 | 核心进展 |
|:---|:---|:---|
| [#706](https://github.com/moltis-org/moltis/pull/706) `fix(sandbox): mask /proc and /sys host metadata in Docker/Podman` | **已合并** | **安全加固里程碑**：关闭容器通过 `/proc` 和 `/sys` 泄露主机元数据（主机名、BIOS 序列号、磁盘型号、LUKS UUID）的通道，显著提升多租户场景下的隔离可信度。 |
| [#707](https://github.com/moltis-org/moltis/pull/707) `fix(slack): bump slack-morphism to 2.20 to enable TLS for socket mode` | **已合并** | 修复 Slack Socket Mode 因 TLS feature 未启用而连接失败的致命问题，恢复企业 IM 集成的可用性。 |
| [#708](https://github.com/moltis-org/moltis/pull/708) `fix(graphql): make sessionKey required for all chat operations` | **已合并** | 将 `sessionKey` 从可选提升为所有 GraphQL 聊天操作的必填项，消除会话错乱风险，同步更新 iOS Companion App 的 GraphQL schema。 |
| [#715](https://github.com/moltis-org/moltis/pull/715) `fix(chat): preserve sender names in user messages` | **已合并** | 在多用户聊天场景中保留发送者名称，改善 Anthropic 等提供商的上下文体验，提升群聊/频道机器人的对话质量。 |
| [#469](https://github.com/moltis-org/moltis/pull/469) `feat(nix): add Nix flake build support` | **已合并** | 新增可复现构建支持，吸引 Nix 生态开发者，完善发行渠道。 |
| [#521](https://github.com/moltis-org/moltis/pull/521) `feat(providers): add openai-oxide as alternative OpenAI provider` | **已合并** | 引入 `openai-oxide` 作为替代 OpenAI 提供商，支持 Chat Completions 和 Responses API，增强提供商层的灵活性与性能选择。 |
| [#488](https://github.com/moltis-org/moltis/pull/488) `chore: bump reqwest 0.12 → 0.13` | **已合并** | 基础依赖升级，为 #521 等现代提供商集成扫清障碍。 |
| [#704](https://github.com/moltis-org/moltis/pull/704) `chore(deps): bump rand from 0.9.2 to 0.10.0` | **已合并** | 常规依赖维护。 |

**整体判断**：今日合并的 PR 覆盖了**安全、稳定性、开发者体验、生态扩展**四个维度，项目健康度显著提升。

---

## 4. 社区热点

| 排名 | 议题 | 互动量 | 热点分析 |
|:---|:---|:---|:---|
| 🥇 | [#671](https://github.com/moltis-org/moltis/issues/671) `"Clear" button is hidden in main session` | **4 条评论** | UI/UX 类问题引发最多讨论。用户发现主会话缺少"清空"按钮，说明前端交互细节仍存在打磨空间。已快速关闭，体现团队对体验问题的响应。 |
| 🥈 | [#694](https://github.com/moltis-org/moltis/issues/694) `MCP tool schemas with "not" keyword rejected by OpenAI provider` | **2 条评论** | MCP 生态兼容性的早期信号。Attio 等第三方 MCP 工具因 schema 中的 `not` 关键字（无 `type`）被 OpenAI 提供商拒绝，反映 MCP 集成仍处于"踩坑-修复"阶段。 |
| 🥉 | [#705](https://github.com/moltis-org/moltis/issues/705) `/proc and /sys are exposed to docker container` | **1 条评论** | 安全敏感 Issue，虽评论少但优先级极高，当日即被修复合并。说明社区对沙箱安全的关注度与维护者的响应速度匹配。 |

---

## 5. Bug 与稳定性

按严重程度降序排列：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#705](https://github.com/moltis-org/moltis/issues/705) | Docker 容器暴露 `/proc` 和 `/sys`，主机元数据泄露 | ✅ **已修复** [#706](https://github.com/moltis-org/moltis/pull/706) |
| 🔴 **高** | [#407](https://github.com/moltis-org/moltis/issues/407) | Network-filter Proxy 启动即崩溃，`web_search` 不可用 | ✅ **已关闭**（今日更新关闭，推测已修复） |
| 🔴 **高** | [#543](https://github.com/moltis-org/moltis/issues/543) | Slack Client 未启用 TLS 支持 | ✅ **已修复** [#707](https://github.com/moltis-org/moltis/pull/707) |
| 🟡 **中** | [#542](https://github.com/moltis-org/moltis/issues/542) | GraphQL `sessionKey` 在 `chat.send/history` 中被忽略 | ✅ **已修复** [#708](https://github.com/moltis-org/moltis/pull/708) |
| 🟡 **中** | [#716](https://github.com/moltis-org/moltis/issues/716) | Google/Gemini via OpenRouter 因工具 schema 报错 `"property is not defined"` | 🔄 **2 个待审 PR** [#717](https://github.com/moltis-org/moltis/pull/717) / [#719](https://github.com/moltis-org/moltis/pull/719) |
| 🟡 **中** | [#712](https://github.com/moltis-org/moltis/issues/712) | MCP 工作不正常（描述模糊，待补充） | ❌ **暂无 Fix PR** |
| 🟢 **低** | [#671](https://github.com/moltis-org/moltis/issues/671) | 主会话"Clear"按钮隐藏 | ✅ **已关闭** |

> **⚠️ 风险提醒**：[#716](https://github.com/moltis-org/moltis/issues/716) 存在 **2 个竞争 PR**（[#717](https://github.com/moltis-org/moltis/pull/717) 跳过 strict schema vs [#719](https://github.com/moltis-org/moltis/pull/719) 折叠 type arrays），建议维护者尽快评审合并其一，避免社区贡献者精力分散。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性分析 |
|:---|:---|:---|
| [#563](https://github.com/moltis-org/moltis/issues/563) `Allow the bot to receive PDFs` | 功能请求 | 🟡 **中高**。RAG/文档处理是 AI 助手的核心场景，Issue 已关闭（可能已实现或合并至其他任务），需确认是否已在某分支落地。 |
| [#713](https://github.com/moltis-org/moltis/issues/713) `Pass Telegram username to LLM` | 功能请求 | 🟢 **高**。实现成本低（上下文透传），且与 #715 的"保留发送者名称"方向一致，预计下一版本可实现。 |
| [#711](https://github.com/moltis-org/moltis/issues/711) `OpenID authentication in matrix` | 功能请求 | 🟡 **中**。Matrix 生态的企业级需求，但实现复杂度高，需评估与现有认证架构的整合成本。 |
| [#714](https://github.com/moltis-org/moltis/pull/714) `allow GUIDELINES.md file override for hardcoded tool guidelines` | 待审 PR | 🟢 **高**。遵循已有的 `SOUL.md`/`IDENTITY.md` 文件覆盖模式，设计一致性强，合并阻力小。 |
| [#718](https://github.com/moltis-org/moltis/pull/718) `docs: add comprehensive configuration reference` | 待审 PR | 🟢 **高**。1078 行的完整配置文档对项目成熟度至关重要，属于高优先级开发者体验改进。 |
| [#709](https://github.com/moltis-org/moltis/pull/709) `upgrade whatsapp-rust ecosystem 0.2 → 0.5` | 待审 PR | 🟢 **高**。WhatsApp  protobuf schema 更新已导致消息解析为空（#534），属于兼容性刚需。 |

---

## 7. 用户反馈摘要

从 Issues 中提炼的真实声音：

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"主会话居然没有 Clear 按钮"** — 日常高频操作被隐藏，用户感到困惑 | #671 | 😤 不满 |
| **"Attio 的 MCP 工具完全没法用"** — 企业 SaaS 集成因 schema 兼容性问题阻断 | #694 | 😤 不满 |
| **"Docker 沙箱居然能看到主机名和磁盘信息"** — 安全敏感用户发现隔离漏洞 | #705 | 😰 担忧 |
| **"Slack 一启动就报 TLS 错误"** — 企业部署场景的基础功能失效 | #543 | 😤 不满 |
| **"希望能直接发 PDF 给机器人处理"** — 对多模态/文档能力的明确期待 | #563 | 🤩 期待 |
| **"Matrix 能不能支持 OpenID 登录？"** — 企业/联邦生态用户的身份认证诉求 | #711 | 🤩 期待 |

**整体情绪**：用户对 Moltis 的**平台集成广度**（Slack、Telegram、Matrix、WhatsApp、MCP）有较高期待，但近期 Bug 集中在"**集成可用性**"和"**安全隔离**"层面。团队今日的快速修复有效缓解了信任危机。

---

## 8. 待处理积压

以下 Issue/PR 需要维护者额外关注：

| 项目 | 状态 | 提醒原因 |
|:---|:---|:---|
| [#712](https://github.com/moltis-org/moltis/issues/712) `MCP not properly working` | 新开，无评论，无 PR | 描述过于模糊（`MCP not properly working`），但 MCP 是近期高频问题区。建议维护者主动联系报告者 `supergeoff` 收集复现步骤，避免成为"幽灵 Issue"。 |
| [#716](https://github.com/moltis-org/moltis/issues/716) + [#717](https://github.com/moltis-org/moltis/pull/717) / [#719](https://github.com/moltis-org/moltis/pull/719) | 2 个竞争 PR 待审 | 需尽快决策合并策略。建议对比 #717（参数化跳过 strict mode）与 #719（折叠 type arrays）的副作用，选择对 OpenAI 生态兼容性影响更小的方案。 |
| [#709](https://github.com/moltis-org/moltis/pull/709) `whatsapp-rust 0.2 → 0.5` | 待审 | WhatsApp 集成已实际损坏（#534），此 PR 阻塞用户正常使用，建议优先评审。 |

---

*日报基于 Moltis GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-15

> 项目仓库：https://github.com/agentscope-ai/CoPaw（注：实际数据来自 QwenPaw 仓库 agentscope-ai/QwenPaw）

---

## 1. 今日速览

CoPaw（QwenPaw）项目在过去24小时保持**极高活跃度**：Issues 与 PR 各更新 46 条，社区讨论热烈。v1.1.1 正式版与 beta.2 同日发布，标志着品牌从 CoPaw 向 QwenPaw 迁移进入关键阶段。然而，**迁移体验成为最大痛点**——大量用户报告升级后路径混乱、数据未自动迁移、新旧版本共存导致无法启动。与此同时，控制台性能优化、多提供商接入（OpenRouter/OpenCode）以及离线部署支持成为今日代码推进的主线。

---

## 2. 版本发布

### v1.1.1（正式版）
🔗 https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.1

| 维度 | 内容 |
|:---|:---|
| **新增功能** | **OpenRouter Provider**：内置支持，含模型发现、系列浏览、按模态与价格过滤（[#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192)）；**OpenCode Provider**：OpenAI 兼容接口 |
| **破坏性变更** | 安装路径从 `.copaw` 切换为 `.qwenpaw`，`qwenpaw` CLI 替代 `copaw` |
| **迁移注意事项** | ⚠️ **关键**：目前**无官方迁移脚本**。用户手动迁移 `workspaces`、`agents`、`skills` 等数据后，需检查 `WORKING_DIR` 环境变量，否则程序仍可能写入旧 `.copaw` 目录（见 [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)、[#3351](https://github.com/agentscope-ai/QwenPaw/issues/3351)） |

### v1.1.1-beta.2
🔗 相关 PR：https://github.com/agentscope-ai/QwenPaw/pull/3343

- 版本号 bump 至 1.1.1b2
- 控制台重构：优化提供商模型管理弹窗，新增能力标签（capability tags）与模型搜索（[#3](https://github.com/agentscope-ai/QwenPaw/pull/3)）

---

## 3. 项目进展

今日合并/关闭的重要 PR（23 条已合并/关闭中的核心项）：

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#1192** OpenRouter Provider | seoeaa | 正式合入，扩展了第三方模型接入能力，降低用户配置门槛 | [PR #1192](https://github.com/agentscope-ai/QwenPaw/pull/1192) |
| **#2996** 控制台前端自动构建 | shadowabi | 启动时自动检测源码变更并重建前端，解决源码开发者的 UI 更新痛点 | [PR #2996](https://github.com/agentscope-ai/QwenPaw/pull/2996) |
| **#2987** 修复取消消息竞态条件 | shadowabi | 解决"点击停止后再发消息无效"的控制台核心交互 Bug | [PR #2987](https://github.com/agentscope-ai/QwenPaw/pull/2987) |
| **#3292** 多智能体协作重构 | pan-x-c | 合入！新增 `list_agents`、`chat_with_agent` 等内置工具，标准化任务升级机制 | [PR #3292](https://github.com/agentscope-ai/QwenPaw/pull/3292) |
| **#3379** 修复定时任务 422 错误 | celestialhorse51D | 修复前端表单与后端 Pydantic 校验不匹配导致的保存失败 | [PR #3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) |
| **#3295** vLLM 兼容性修复 | jilin6627-spec | 移除对未启用 `--enable-auto-tool-choice` 的 vLLM 服务端发送 `tool_choice=auto`，避免 400 错误 | [PR #3295](https://github.com/agentscope-ai/QwenPaw/pull/3295) |
| **#3331** 修复飞书通道 WebSocket 跨循环崩溃 | JohnYWN | 多 Agent 并发使用不同飞书 Bot 时触发 `RuntimeError` 的问题已关闭 | [Issue #3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) |

**整体判断**：项目今日在"开发者体验（自动构建）"、"核心交互稳定性（取消竞态）"、"生态兼容性（OpenRouter/vLLM）"三个维度均有实质性推进，多智能体架构也完成一轮重要重构。

---

## 4. 社区热点

| 排名 | 议题/PR | 评论数 | 热度分析 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#2291 Help Wanted: Open Tasks** | 56 | 社区贡献任务看板，持续吸引外部开发者认领任务，是项目开源健康度的风向标 | [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| 2 | **#3288 CoPaw 怎么平滑升级到 QwenPaw** | 32 | **核心痛点**：品牌迁移期用户最关心的问题，目前缺乏官方迁移文档/工具，已关闭但问题未根本解决 | [Issue #3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) |
| 3 | **#3356 WORKING_DIR 仍指向旧目录** | 11 | 迁移后遗症的典型技术问题，数据实际写入 `.copaw` 而非 `.qwenpaw`，影响用户数据一致性 | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| 4 | **#2301 更新建议：一键更新、/approve 按钮化、模型自动切换** | 9 | 用户体验集中反馈帖，多项建议与今日已合并/待审 PR 高度呼应（如 #3257 approve 按钮） | [Issue #2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) |
| 5 | **#3309 更新到 1.1.0 后对 qwenpaw 和 copaw 的疑问** | 7 | 再次印证品牌拆分带来的用户困惑：PATH 配置、双应用共存、数据目录分离 | [Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) |

**背后诉求**：用户并非抗拒升级，而是迫切需要**清晰的迁移指南、自动化的数据迁移工具、以及消除双品牌并存的混淆**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 | 是否有 Fix PR | 链接 |
|:---|:---|:---|:---:|:---|
| 🔴 **P0 - 崩溃/无法启动** | **macOS v1.1.0 安装后新老版本均无法打开** | OPEN | ❌ 无 | [#3312](https://github.com/agentscope-ai/QwenPaw/issues/3312) |
| 🔴 **P0 - 崩溃/无法启动** | **Windows Desktop v1.1.0 安装后白屏、系统卡死** | OPEN | ❌ 无 | [#3322](https://github.com/agentscope-ai/QwenPaw/issues/3322) |
| 🟠 **P1 - 数据一致性** | 升级后 `WORKING_DIR` 指向旧目录，数据写入 `.copaw` | OPEN | ❌ 无 | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| 🟠 **P1 - 功能失效** | 微信通道中工具输出后的文本被截断 | OPEN | ❌ 无 | [#3369](https://github.com/agentscope-ai/QwenPaw/issues/3369) |
| 🟠 **P1 - 功能失效** | Session state JSON 并发写入损坏，导致持久性 422 错误 | OPEN | ❌ 无 | [#3277](https://github.com/agentscope-ai/QwenPaw/issues/3277) |
| 🟡 **P2 - 兼容性问题** | 算力一体机无 `/model` 接口，强制测试导致无法连接本地大模型 | OPEN | ✅ **#3391** 修复 Ollama 连接测试 | [#3377](https://github.com/agentscope-ai/QwenPaw/issues/3377) / [PR #3391](https://github.com/agentscope-ai/QwenPaw/pull/3391) |
| 🟡 **P2 - 兼容性问题** | `execute_shell_command` 在 Ubuntu 下执行 `ls` 提示命令不存在 | OPEN | ❌ 无 | [#3183](https://github.com/agentscope-ai/QwenPaw/issues/3183) |
| 🟡 **P2 - 性能退化** | 超200轮对话后页面滚动严重卡顿 | OPEN | ❌ 无 | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) |
| 🟢 **已修复** | 飞书通道 WebSocket 多 Agent 环境下跨循环崩溃 | CLOSED | ✅ #3331 | [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) |
| 🟢 **已修复** | 定时任务创建失败（422 Unprocessable Entity） | CLOSED | ✅ #3379 | [#3176](https://github.com/agentscope-ai/QwenPaw/issues/3176) |
| 🟢 **已修复** | `view_image` 仅返回文件名、未加载像素数据到 LLM 上下文 | CLOSED | ✅ 已解决 | [#2873](https://github.com/agentscope-ai/QwenPaw/issues/2873) |

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 Issue | 相关 PR | 纳入下一版本可能性 |
|:---|:---|:---|:---:|
| **一键更新 / 自动更新机制** | #2301 | 无 | ⭐⭐⭐ 高，迁移期刚需 |
| **`/approve` 按钮化** | #2301 | #3257（待审） | ⭐⭐⭐⭐ 极高，PR 已就绪 |
| **模型自动切换 / 故障转移** | #2301 | 无 | ⭐⭐⭐ 高，提升可靠性 |
| **Agent 统计面板** | 无 | #3365（待审） | ⭐⭐⭐⭐ 极高，PR 已提交 |
| **Mission Mode（自主迭代长任务）** | 无 | #3364（待审） | ⭐⭐⭐ 高，受 Ralph/Anthropic 启发的新方向 |
| **Agent CLI + 本地 Agent 模板** | 无 | #3385（待审） | ⭐⭐⭐⭐ 极高，重构核心初始化流程 |
| **离线/LAN 部署图标本地打包** | 无 | #3388（待审） | ⭐⭐⭐⭐ 极高，企业部署刚需 |
| **启动性能优化（4.5s → 0.05s）** | #3352 | #3386（待审） | ⭐⭐⭐⭐ 极高，PR 已提交 |
| **Token 列表按时间倒序** | #3368 | #3387（待审） | ⭐⭐⭐⭐ 极高，单文件改动 |
| **Skill 分类/文件夹管理** | #2961 | 无 | ⭐⭐ 中，需产品设计 |
| **文件操作回滚** | #2590 | 无 | ⭐⭐⭐ 高，已有人认领 Task 6 |
| **记忆按用户维度隔离** | #352 | 无 | ⭐⭐ 中，架构改动较大 |

---

## 7. 用户反馈摘要

### 核心痛点
- **品牌迁移焦虑**："CoPaw 怎么升级到 QwenPaw，保留 agent 和相关配置、记忆"（#3288）——这是今日最高频情绪
- **桌面端稳定性危机**：macOS 和 Windows 均出现安装后无法启动或白屏，用户直言"非常严重的 bug，导致只能用别家的龙虾"（#3312、#3322）
- **长会话性能瓶颈**：工程级代码迭代场景下，200+ 轮对话后 UI 滚动卡顿，用户不敢开新窗口怕丢失上下文（#3350）

### 使用场景
- **跨设备连续工作**：用户希望"关掉网页端，离开电脑去忙事情，可以很顺畅的用手机继续操作"（#2301）
- **企业/离线部署**：局域网环境下图标全部失效，暴露对外部 CDN 的强依赖（#3388 针对性修复）
- **本地模型接入**：算力一体机、Ollama、vLLM 等私有化部署场景需求旺盛

### 满意点
- OpenRouter 等第三方模型接入降低配置门槛
- 多智能体协作重构带来更清晰的任务升级机制
- 社区任务看板（#2291）运作良好，外部贡献者活跃

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃或高影响但尚未关闭，建议维护者优先关注：

| 类型 | 编号 | 标题 | 积压天数 | 提醒原因 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| Issue | #2291 | Help Wanted: Open Tasks | ~21 天 | 社区贡献中枢，需持续维护任务状态 | [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| Issue | #2301 | 更新建议合集 | ~21 天 | 高赞用户体验反馈，多项建议已有 PR 对应 | [Issue #2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) |
| Issue | #2590 | 文件操作回滚 | ~16 天 | 有贡献者认领 Task 6，需推进实现方案 | [Issue #2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) |
| PR | #3257 | approve 按钮化 | ~5 天 | 核心交互改进，待审中 | [PR #3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) |
| PR | #3364 | Mission Mode | 1 天 | 创新性长任务自主代理架构，建议尽快评审 | [PR #3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) |
| PR | #3385 | Agent CLI & Local Template | 1 天 | 重构 Agent 初始化核心流程，影响面大 | [PR #3385](https://github.com/agentscope-ai/QwenPaw/pull/3385) |

---

**日报编制说明**：本报告基于 GitHub 公开数据生成，所有链接均指向 agentscope-ai/QwenPaw 仓库。项目健康度评估：代码推进活跃（⭐⭐⭐⭐），社区参与度高（⭐⭐⭐⭐），但迁移期稳定性风险需紧急响应（⚠️）。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-15

---

## 1. 今日速览

过去24小时，ZeptoClaw 项目呈现**低活跃、高维护积压**的状态。无代码功能 PR 合并，无新版本发布，社区讨论仅 1 条 Issue 有更新。全部 12 个新增 PR 均为 Dependabot 依赖升级，涵盖 Rust 核心库、前端面板、文档站点及 CI 工具链，表明项目基础架构需要一轮集中维护审查，但核心功能开发处于停滞。Issue #486 关于「真并发/非阻塞设计」的持续讨论，反映出用户对 Agent 长时间任务阻塞交互的深层焦虑。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无 PR 合并或关闭。**

12 个待审 PR 全部为依赖升级，未推进任何新功能或 bug 修复。项目整体在功能层面**无实质前进**。

| PR | 类型 | 影响范围 | 链接 |
|:---|:---|:---|:---|
| #518 | Rust 依赖 | `uuid` 1.22.0 → 1.23.0 | [qhkm/zeptoclaw#518](https://github.com/qhkm/zeptoclaw/pull/518) |
| #517 | Rust 依赖 | `sha2` 0.10.9 → 0.11.0（**大版本升级，潜在破坏性变更**） | [qhkm/zeptoclaw#517](https://github.com/qhkm/zeptoclaw/pull/517) |
| #516 | Rust 依赖 | `libc` 0.2.183 → 0.2.184（MSRV 提升） | [qhkm/zeptoclaw#516](https://github.com/qhkm/zeptoclaw/pull/516) |
| #515 | JS 依赖 | `react-router` 7.13.1 → 7.13.2 (`/panel`) | [qhkm/zeptoclaw#515](https://github.com/qhkm/zeptoclaw/pull/515) |
| #514 | JS 依赖 | `recharts` 3.8.0 → 3.8.1 (`/panel`) | [qhkm/zeptoclaw#514](https://github.com/qhkm/zeptoclaw/pull/514) |
| #513 | Rust 依赖 | `google-cloud-auth` 1.7.0 → 1.8.0 | [qhkm/zeptoclaw#513](https://github.com/qhkm/zeptoclaw/pull/513) |
| #512 | JS 开发依赖 | `vite` 7.3.1 → 8.0.0 (`/panel`，**大版本升级**） | [qhkm/zeptoclaw#512](https://github.com/qhkm/zeptoclaw/pull/512) |
| #511 | Rust 依赖 | `lettre` 0.11.19 → 0.11.20（MSRV 提至 1.85） | [qhkm/zeptoclaw#511](https://github.com/qhkm/zeptoclaw/pull/511) |
| #510 | JS 依赖 | `astro` 5.18.1 → 6.0.5 (`/landing/zeptoclaw/docs`，**大版本升级**） | [qhkm/zeptoclaw#510](https://github.com/qhkm/zeptoclaw/pull/510) |
| #509 | GitHub Actions | `docker/login-action` 4.0.0 → 4.1.0 | [qhkm/zeptoclaw#509](https://github.com/qhkm/zeptoclaw/pull/509) |
| #508 | JS 依赖 | `astro` 5.18.1 → 6.0.5 (`/landing/r8r/docs`，**大版本升级**） | [qhkm/zeptoclaw#508](https://github.com/qhkm/zeptoclaw/pull/508) |
| #507 | GitHub Actions | `taiki-e/install-action` 2.68.21 → 2.72.0 | [qhkm/zeptoclaw#507](https://github.com/qhkm/zeptoclaw/pull/507) |

> ⚠️ **维护者注意**：PR #517 (sha2 0.11)、#512 (vite 8)、#510/#508 (astro 6) 涉及大版本升级，需重点审查破坏性变更。

---

## 4. 社区热点

**唯一活跃讨论：Issue #486 — [feat] true concurrent/non blocking design**

- **作者**: `superhero75`
- **状态**: Open，2 条评论，最后更新 2026-04-14
- **链接**: [qhkm/zeptoclaw#486](https://github.com/qhkm/zeptoclaw/issues/486)

**核心诉求分析**：

| 维度 | 内容 |
|:---|:---|
| **痛点** | Agent 执行长时间任务时完全阻塞用户交互，体验如同「假死」 |
| **参考方案** | 指向 [spacedriveapp/spacebot](https://github.com/spacedriveapp/spacebot) 的实现 |
| **范围评估** | Large（新子系统，多模块改造） |
| **实现意愿** | 提议者无意愿自行实现 |

**信号解读**：这是 ZeptoClaw 作为 AI Agent 框架的**架构级瓶颈**。用户期望的不仅是异步回调，而是「真并发」——任务执行与用户查询可并行。该 Issue 获得持续关注但无维护者正式回应，存在社区热情流失风险。

---

## 5. Bug 与稳定性

**今日无新报告的 Bug、崩溃或回归问题。**

但需关注依赖升级中的稳定性信号：

| 风险项 | 来源 | 说明 |
|:---|:---|:---|
| `sha2` 0.11 兼容性 | PR #517 | 密码学哈希库大版本升级，可能影响密钥派生、签名验证等安全路径 |
| `vite` 8 构建链 | PR #512 | 前端构建工具大版本升级，需验证 `/panel` 开发与生产构建 |
| `astro` 6 文档站点 | PR #510, #508 | 两个文档站点同时升级，需检查渲染与部署流水线 |
| `lettre` / `libc` MSRV 提升 | PR #511, #516 | 可能间接提高项目最低 Rust 版本要求 |

**当前状态**：以上均无 fix PR 之外的验证信息，建议维护者优先跑通 CI 后再批量合并。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| **真并发/非阻塞 Agent 架构** | Issue #486 | **中-低** | 用户呼声明确、范围大，但无维护者认领、无相关 PR、提议者不贡献代码。若维护团队有架构重构计划，此 Issue 是强信号；否则易长期搁置。 |

**无其他新功能请求。**

---

## 7. 用户反馈摘要

从 Issue #486 的评论中提炼：

- **痛点**：「Agent 跑长任务时，用户完全无法与之交互」，这直接削弱了「个人 AI 助手」的实时响应价值
- **使用场景**：需要 Agent 在后台持续工作（如数据分析、文件处理、长时搜索），同时前端保持可对话状态
- **不满意**：当前架构似乎是「单会话阻塞式」，与用户对现代 Agent 的并发期望存在落差
- **隐含期待**：社区在寻找一个可参照的实现路径（spacebot），说明用户希望维护者能主动评估并给出技术路线图

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 状态 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **架构级功能请求** | Issue #486 — 真并发/非阻塞设计 | 2026-04-03 | Open，2 评论，0 维护者回应 | **高** — 涉及核心架构，社区关注但无人推进；拖延将固化「阻塞式 Agent」的产品认知 | [qhkm/zeptoclaw#486](https://github.com/qhkm/zeptoclaw/issues/486) |
| **依赖升级积压** | 12 个 Dependabot PR | 2026-04-14 | 全部待合并 | **中** — 大版本升级若久拖不决，将累积安全漏洞与兼容风险，同时造成 PR 噪音 | [PR #507-#518](https://github.com/qhkm/zeptoclaw/pulls) |

**维护者行动建议**：
1. 对 Issue #486 给出官方技术评估标签（如 `architecture`、`needs-design`）并指派负责人
2. 本周内集中审查并批量合并/关闭 12 个依赖升级 PR，优先验证 #517、#512、#510/#508 的 CI 结果

---

*日报基于 GitHub 公开数据生成，反映 2026-04-14 至 2026-04-15 期间项目动态。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-15

---

## 1. 今日速览

ZeroClaw 社区在过去 24 小时保持**极高活跃度**：Issues 与 PR 各更新 50 条，但关闭/合并率极低（Issues 仅关闭 2 条，PR 仅合并/关闭 6 条），显示出**讨论旺盛但代码落地速度偏慢**的特征。无新版本发布。核心矛盾集中在 **Ollama/本地模型 provider 生态的工具调用失效、Web Dashboard 可用性、以及编译/架构债务** 三大领域。社区对微内核架构拆分（WIT 接口、crate split）和可观测性（OTEL）的投入显示出项目正向企业级/插件化方向演进。

---

## 2. 版本发布

**无今日发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 6 条，从展示数据中可识别以下已落地进展：

| PR | 状态 | 贡献 | 链接 |
|:---|:---|:---|:---|
| #4862 | **CLOSED** | 修复 `apps/tauri/gen/schemas/` 未被 gitignore 导致的构建产物污染问题，提升开发者体验。 | [zeroclaw-labs/zeroclaw#4862](https://github.com/zeroclaw-labs/zeroclaw/issues/4862) |
| #5660 | **CLOSED** | 为 CI 发布工作流添加 musl/Alpine Linux 构建目标（后被 #5739 取代重开）。 | [zeroclaw-labs/zeroclaw#5660](https://github.com/zeroclaw-labs/zeroclaw/pull/5660) |

> 注：数据中 44 个待合并 PR 大量堆积，实际合并比例仅 ~12%，**代码吞吐效率是项目当前健康度的主要风险信号**。

**值得关注的推进中 PR（今日更新，接近可合并）：**

- **#5734** — 修复 `PYTHONPATH` 环境变量前缀断裂、DockerSandbox 缺少 workspace mount 的问题，涉及 40+ 模块标签，是近期最大范围的修复 PR。[zeroclaw-labs/zeroclaw#5734](https://github.com/zeroclaw-labs/zeroclaw/pull/5734)
- **#5744** — 修复 OTEL trace 的父子 span 层级关系，并添加 token 属性，是可观测性基础设施的关键补齐。[zeroclaw-labs/zeroclaw#5744](https://github.com/zeroclaw-labs/zeroclaw/pull/5744)
- **#5739** — 为 release 和跨平台工作流添加 musl/Alpine Linux 预编译二进制，替换被关闭的 #5660。[zeroclaw-labs/zeroclaw#5739](https://github.com/zeroclaw-labs/zeroclaw/pull/5739)

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#4866** Web dashboard 仍不可用 | **11** | 这是**持续时间最长、影响最广**的可用性问题，用户反馈 Web UI 和 Tauri 桌面端均提示需要手动构建前端，且跨多个版本未修复。已演变为项目"门面危机"。 | [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| 2 | **#4710** 设计更好的 ZeroClaw Logo | **6** | 社区品牌认同诉求，有用户直接贴出了设计稿，属于低技术门槛高情感参与的话题。 | [Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) |
| 3 | **#5584** 工具调用时重复 consecutive assistant messages | **5** | 原生工具调度器与"带 narration 的模型"兼容性缺陷，影响 Claude/GPT-4 等模型的工具调用可靠性。 | [Issue #5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) |
| 3 | **#5509** Telegram 语音消息转录支持 | **5** | 功能缺口诉求，OpenClaw（TS 版）已支持，ZeroClaw 用户要求对等能力，体现"跨实现一致性"压力。 | [Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) |

**热点分析：** #4866 的 11 条评论和 S1 级别标签说明，**前端构建/分发流程是 ZeroClaw 当前最大的 onboarding 漏斗**，大量新用户可能在此流失。

---

## 5. Bug 与稳定性

按严重程度排序，今日活跃 Bug 如下：

### S0 — 数据丢失 / 安全风险 / 系统崩溃

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#5528** | Email 通道配置逻辑不当，存在安全/数据风险 | 无 | [Issue #5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) |
| **#5542** | WSL2 中连续 OOM，zeroclaw 进程被内核杀死（ anon-rss ~8.5GB） | 无 | [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) |
| **#5537** | GPT 不支持文件解析导致持久性错误循环，每次发送消息都触发失败 | 无 | [Issue #5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) |
| **#5605** | 多实例部署中默认配置路径硬编码 `~/.zeroclaw/`，导致配置隔离失效 | 无 | [Issue #5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) |
| **#5672** | Feishu 通道 `mention_only=true` 失效，bot 对非 @ 消息也响应 | 无 | [Issue #5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) |
| **#5654** | Telegram 配置使用加密后 `config.json` 无法工作，token 失效 | 无 | [Issue #5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) |

### S1 — 工作流阻塞

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#4866** | Web Dashboard / Tauri 桌面端不可用 | 无 | [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| **#5459** | Ollama provider 硬编码 `tool_count=0`，原生工具调用**完全无法到达 API** | 无 | [Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) |
| **#5600** | kimi-code provider 流式调用工具时 API 报错（reasoning_content 缺失） | 无 | [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| **#5578** | 无法连接本地 llama.cpp server，`agent -m Hello!` 数分钟后才静默失败 | 无 | [Issue #5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578) |

### S2 — 行为降级

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#5584** | 模型返回 narration + tool_calls 时产生重复 consecutive assistant messages | 无 | [Issue #5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) |
| **#5670** | Groq provider 400 错误（与已修复的 #3757 类似，可能为回归） | 无 | [Issue #5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) |
| **#5634** | Web Dashboard 每次页面加载都创建新 session，无视 `session_persistence = true` | 无 | [Issue #5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) |

### S3 — 轻微问题

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#5556** | Ollama 小模型摘要超时 60s，导致上下文丢失 | 无 | [Issue #5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) |
| **#5629** | v0.6.9 中 `api_key` 被错误警告为 unknown config key | 无 | [Issue #5629](https://github.com/zeroclaw-labs/zeroclaw/issues/5629) |

> **稳定性评估：** S0/S1 级别 Bug 堆积严重且**绝大多数无对应 Fix PR**，provider 层（Ollama、Groq、kimi-code、llama.cpp）和通道层（Feishu、Telegram、Email）是质量风暴中心。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 纳入下一版本概率 | 理由 | 链接 |
|:---|:---|:---:|:---|:---|
| **#5509** Telegram 语音转录 | 语音消息支持 | **高** | OpenClaw 已实现，社区呼声明确，属于"补齐缺口"型需求 | [Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) |
| **#5623 / #5619** OpenRouter 原生路由支持 | `extra_body` 透传 + provider 路由字段 | **高** | PR #5623 已开，直接解决 #5619，有活跃贡献者 nanookclaw 推进 | [PR #5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) / [Issue #5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) |
| **#5738** `model_spawn` 工具 | 会话内模型热切换 + 并行临时 spawn | **高** | 有 OpenClaw 规范文档和姊妹 PR（openclaw/openclaw#66652），属于生态对齐需求 | [PR #5738](https://github.com/zeroclaw-labs/zeroclaw/pull/5738) |
| **#5649** Web Chat UI 剪贴板粘贴 & 拖放图片 | 交互体验增强 | **中** | 体验优化类，无对应 PR，但实现门槛低 | [Issue #5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) |
| **#5502** `allowed_tools` 配置项 | 工具白名单配置 | **中** | 有清晰提案，但涉及 AgentConfig  schema 变更，可能被 #5517 的配置版本化 PR 阻塞 | [Issue #5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) |
| **#5501** 手动触发 cron | 开发测试效率工具 | **中** | 需求明确，但属于开发者体验优化，优先级可能低于核心稳定性 | [Issue #5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) |
| **#5586** WIT 接口文件（Tool/Channel 插件契约） | 微内核架构 Phase 1 D4 | **高** | 属于官方 RFC 路线图，有明确的验收标准和架构意义 | [Issue #5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586) |
| **#5570** SQLite 向量搜索 ANN 加速 | 内存语义检索性能 | **中低** | 技术债务型优化，有清晰问题陈述但实现复杂，短期内可能被性能 workaround 替代 | [Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) |
| **#5447 / #5575** Crate 拆分 / 编译加速 | 架构重构 | **高** | 已被多次提出，PR #5735 开始解耦 gateway/tui-onboarding，属于渐进式推进 | [Issue #5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447) / [Issue #5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实声音：

| 痛点类别 | 典型反馈 | 来源 |
|:---|:---|:---|
| **前端分发崩溃** | "Web UI 和 Tauri 桌面端都提示需要手动构建，且这个问题已经持续了很多版本" | #4866 |
| **本地模型生态失信** | "Ollama provider 硬编码 tool_count=0，意味着无论 tool_dispatcher 怎么设置，工具永远不会发给模型" | #5459 |
| **容器化部署踩坑** | "Docker 里 onboard 选本地 AI provider 会得到无效的 localhost URL" | #5552 关联场景 |
| **内存管理恐慌** | "WSL2 里 zeroclaw 连续 OOM 被杀，anon-rss 8.5GB" | #5542 |
| **跨平台一致性焦虑** | "OpenClaw 已经支持 Telegram 语音，ZeroClaw 需要补上这个缺口才能成为可行的替代方案" | #5509 |
| **配置系统不信任** | "v0.6.9 里合法的 api_key 被警告为 unknown key，让人怀疑配置解析的可靠性" | #5629 |
| **企业通道合规风险** | "Feishu mention_only 失效、Email 配置逻辑不当" | #5672, #5528 |

**情绪基调：** 用户对 ZeroClaw 的**架构愿景和扩展性保持兴趣**，但对 **provider 可靠性、前端可用性、配置正确性** 的耐心正在消耗。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃但缺乏维护者明确响应，建议优先关注：

| 条目 | 创建时间 | 天数 | 风险 | 链接 |
|:---|:---|:---:|:---|:---|
| **#4866** Web Dashboard 不可用 | 2026-03-28 | **18 天** | 新用户流失最高风险 | [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| **#4710** Logo  redesign | 2026-03-25 | **21 天** | 品牌社区参与话题，低技术优先级 | [Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) |
| **#5459** Ollama tool_count=0 | 2026-04-07 | **8 天** | 本地模型工具调用**完全瘫痪** | [Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) |
| **#5356** Canvas tool 在 channel server 中写入隔离 store | 2026-04-05 | **10 天** | 多通道场景下的核心功能静默失效 | [Issue #5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) |
| **#5168** HMAC 工具执行收据（幻觉检测） | 2026-04-02 | **13 天** | 高价值安全特性 PR，标记 `risk: high` | [PR #5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168) |
| **#5517** 配置 schema 版本化 V1→V2 | 2026-04-08 | **7 天** | 阻塞大量配置相关新功能，需要维护者反馈 | [PR #5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) |

---

**分析师备注：** ZeroClaw 当前处于"高讨论、低合并"的瓶颈期。建议维护团队短期内集中资源打通 **Web Dashboard 可用性 (#4866)** 和 **Ollama/本地模型 provider 修复 (#5459, #5578)** 两条主线，以恢复用户信心；同时加速审查 #5517（配置版本化）和 #5586（WIT 接口），为中长期架构演进释放空间。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*