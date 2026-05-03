# OpenClaw 生态日报 2026-05-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-03 00:18 UTC

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

# OpenClaw 项目动态日报 | 2026-05-03

---

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度与显著稳定性危机并存**的态势。24小时内 Issues 更新 500 条（466 活跃/新开，仅 34 关闭），PR 更新 500 条（452 待合并，48 已合并/关闭），社区讨论密度达到近期峰值。核心矛盾集中在 **v2026.4.29 版本引入的严重性能退化**：大量用户报告 CPU 100% 占用、消息管道延迟 20-70 秒、OpenAI 嵌入运行挂起直至超时等问题，已形成明确的"4.29 回归事件"。与此同时，项目快速迭代发布 v2026.5.2 正式版及两个 beta 版本，聚焦外部插件生态与网关性能优化，显示出维护团队对稳定性修复的紧急响应。

---

## 2. 版本发布

### [v2026.5.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.2) — 正式版
**发布日期**: 2026-05-03

| 维度 | 详情 |
|:---|:---|
| **核心更新** | 外部插件安装/更新/诊断修复体系完整覆盖 npm 优先切换、陈旧配置安装、缺失包载荷、beta 通道插件回退等场景 |
| **性能优化** | 网关与 Agent 热路径精简（Gateway and agent hot paths are leaner） |
| **贡献者** | @vincentkoc 主导外部插件体系重构 |
| **迁移注意** | 从旧版本升级时，建议先运行 `openclaw doctor` 检查插件安装状态；npm 优先切换可能影响私有 registry 配置 |

### [v2026.5.2-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.3) / [v2026.5.2-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.2)
- 功能内容与正式版基本一致，beta 通道用于验证插件元数据与诊断流程的稳定性

> **破坏性变更评估**: 本次发布无明确破坏性变更，但 npm 优先的插件安装策略可能改变既有插件加载顺序，建议生产环境先在 staging 验证。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#76328](https://github.com/openclaw/openclaw/pull/76328) | clawsweeper[bot] | **修复 cron 手动运行 ID 持久化**：将 `cron.run` 的确认 ID 正确携带到完成事件与 JSONL 历史记录，解决历史追踪断裂 | #76288 |
| [#76288](https://github.com/openclaw/openclaw/pull/76288) | pfrederiksen | 同上功能的原始实现，被 #76328 修复替代 | #76276 |
| [#76323](https://github.com/openclaw/openclaw/pull/76323) | BunsDev | **安全强化**：维护者 prep push 默认通过 GitHub `createCommitOnBranch` 要求验证提交，需显式设置 `OPENCLAW_ALLOW_UNSIGNED_GIT_PUSH=1` 才回退到 git 协议 | — |
| [#75315](https://github.com/openclaw/openclaw/pull/75315) | clawsweeper[bot] | **Windows 兼容性**：修复 stale-import guard 生成无效 PowerShell 正则表达式，导致 Parallels npm 更新 smoke 测试失败 | — |
| [#76325](https://github.com/openclaw/openclaw/pull/76325) | hclsys | **进程安全**：`killProcessTree` 默认改为安全的 direct-pid kill，显式要求 `detached:true` 才执行 group-kill，防止误杀父进程 | #76259 |
| [#76320](https://github.com/openclaw/openclaw/pull/76320) | clawsweeper[bot] | **Slack 稳定性**：修复 reaction 移除 helper 中 `no_reaction` 未忽略导致的异常 | #76304, #50881 |
| [#56544](https://github.com/openclaw/openclaw/pull/56544) | HangGlidersRule | **Slack 体验**：flat DM 中启用预览流式传输（`replyToMode: off` 时） | — |
| [#74093](https://github.com/openclaw/openclaw/pull/74093) | ruji9527 | **队列语义修复**：`/new` reset 在 steer 队列模式下正确中断当前运行，而非排队等待 | — |
| [#76170](https://github.com/openclaw/openclaw/pull/76170) | Vianne-droid | **Web UI 紧急修复**：2026.4.30-beta.1 登录后白屏问题 | — |
| [#76166](https://github.com/openclaw/openclaw/pull/76166) | richardmqq | **性能回归修复**：Control UI 重复调用慢速 `sessions.list` 导致网关延迟/GC 压力 | — |
| [#76107](https://github.com/openclaw/openclaw/pull/76107) | hongfangsong | **管道性能**：定位消息管道两大瓶颈（auth 6.2s + 固定开销 16s） | — |
| [#76236](https://github.com/openclaw/openclaw/pull/76236) | andike73 | **4.29 回归综合诊断**：WebUI/嵌入 Agent 极慢问题的根因分析与修复 | — |

**整体推进评估**: 今日合并 PR 以**稳定性修复与性能回归治理**为主轴，直接回应了 4.29 版本引发的危机。`sessions.list` 缓存、管道瓶颈定位、进程杀死安全等修复具有架构级价值，但 452 个待合并 PR 的积压表明 review 带宽仍是瓶颈。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit 支持 | 13 | 0 | **企业集成深度**：用户需要 Agent 发送富交互式 Slack 消息（CRM 摘要、数据库查询结果），而非纯文本 markdown |
| 2 | [#75999](https://github.com/openclaw/openclaw/issues/75999) **4.29 调度准备阶段 73s CPU 阻塞** ⭐ | 12 | 2 | **性能危机**：同步 CPU 工作阻塞事件循环，升级后首次回复延迟 2-5 分钟，已关闭 |
| 3 | [#67288](https://github.com/openclaw/openclaw/issues/67288) amazon-bedrock-mantle 无 discovery 开关 | 10 | 0 | **云成本优化**：每次请求都运行 IAM token discovery，缺乏 `config.discovery.enabled` 门控 |
| 4 | [#75707](https://github.com/openclaw/openclaw/issues/75707) **网关 CPU 100% 根因与变通方案** ⭐ | 10 | 5 | **生产稳定性**：空闲状态 CPU 100-130%，`node.list` 延迟 20s+，与 #75688 互补 |
| 5 | [#13583](https://github.com/openclaw/openclaw/issues/13583) 预响应强制钩子（硬门控） | 10 | 2 | **安全合规**：金融/安全场景要求机械阻止 Agent 在调用特定工具前发出最终答案，非软提示 |
| 6 | [#68113](https://github.com/openclaw/openclaw/issues/68113) Mattermost slash 命令 503 回归 | 10 | 2 | **企业 IM 可靠性**：v2026.4.15 中 slash 命令未初始化 |

**热点分析**: 社区诉求呈现**"金字塔结构"**——底层是 4.29 版本的性能/稳定性危机（#75999, #75707），中层是企业集成深度（Slack Block Kit, Mattermost），顶层是安全合规与成本治理（硬门控、discovery 开关）。👍 分布显示 #75707（CPU 100%）获得最多共鸣，直接影响生产部署决策。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug 报告

| 严重级别 | Issue | 状态 | 现象 | 已有 Fix PR |
|:---|:---|:---:|:---|:---|
| **🔴 P0 - 生产阻断** | [#75999](https://github.com/openclaw/openclaw/issues/75999) | ✅ 已关闭 | 4.29 调度准备阶段 73s 同步 CPU 工作，阻塞事件循环，首次回复 2-5 分钟 | #76236, #76107 |
| **🔴 P0 - 生产阻断** | [#76174](https://github.com/openclaw/openclaw/issues/76174) | 🟡 开放 | **所有 `openai/*` 嵌入运行零 token 挂起直至超时**，直接 curl 2s 正常 | 待确认 |
| **🔴 P0 - 生产阻断** | [#75824](https://github.com/openclaw/openclaw/issues/75824) | 🟡 开放 | 4.29 Web UI 聊天气泡出现后消失，OpenAI API 直接正常 | 待确认 |
| **🟠 P1 - 严重退化** | [#75707](https://github.com/openclaw/openclaw/issues/75707) | 🟡 开放 | 网关 CPU 100-130% 空闲，`node.list` 20s+，724MB RAM | #76166 |
| **🟠 P1 - 严重退化** | [#76186](https://github.com/openclaw/openclaw/issues/76186) | 🟡 开放 | **会话准备阶段 ~48s 每次 turn 重新执行，无缓存**，system-prompt/core-plugin-tools/stream-setup 全量重建 | 待确认 |
| **🟠 P1 - 严重退化** | [#76236](https://github.com/openclaw/openclaw/issues/76236) | ✅ 已关闭 | 4.29 WebUI/嵌入 Agent 极慢，模型解析、auth、核心插件工具、会话操作耗时剧增 | #76236 |
| **🟠 P1 - 严重退化** | [#76188](https://github.com/openclaw/openclaw/issues/76188) | ✅ 已关闭 | 低功耗主机（Pi/NUC/迷你 PC）CPU/事件循环饱和链式问题 | 待确认 |
| **🟡 P2 - 功能异常** | [#67288](https://github.com/openclaw/openclaw/issues/67288) | 🟡 开放 | amazon-bedrock-mantle 无 discovery 门控，每次请求运行 IAM token discovery | 待确认 |
| **🟡 P2 - 功能异常** | [#68113](https://github.com/openclaw/openclaw/issues/68113) | 🟡 开放 | Mattermost slash 命令 503 "not yet initialized" | 待确认 |
| **🟡 P2 - 功能异常** | [#74209](https://github.com/openclaw/openclaw/issues/74209) | 🟡 开放 | 默认捆绑插件（尤其 bonjour）阻塞网关启动 | 待确认 |
| **🟡 P2 - 功能异常** | [#73602](https://github.com/openclaw/openclaw/issues/73602) | 🟡 开放 | WSL2 上 WhatsApp 抖动 + Telegram 轮询停滞 | 待确认 |
| **🟢 P3 - 体验问题** | [#39038](https://github.com/openclaw/openclaw/issues/39038) | 🟡 开放 | Windows 11 24H2 节点程序启动后卡在 PATH 信息 | 待确认 |

**稳定性评估**: **v2026.4.29 构成明确的"问题版本"**。OpenAI 集成层、网关事件循环、会话准备管道三个核心路径同时出现退化，影响面覆盖 Web UI、嵌入 Agent、CLI 三种使用模式。维护团队响应迅速（24 小时内关闭 4 个相关 Issue），但 #76174 和 #75824 两个 OpenAI 零 token 问题尚无明确 PR，可能涉及更深层的路由或 SSE 帧解析缺陷。

---

## 6. 功能请求与路线图信号

| Issue | 类别 | 成熟度 | 纳入下一版本概率 | 关键信号 |
|:---|:---|:---:|:---:|:---|
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit | 企业集成 | 🔶 需求明确 | **高** | 13 评论，企业用户高频诉求，Slack 生态战略价值 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) 预响应硬门控 | 安全合规 | 🔶 设计挑战 | 中 | 金融/安全场景刚需，但涉及 Agent 架构核心，实现复杂 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) 备份/恢复工具 | 运维工具 | 🔶 需求明确 | **高** | 灾难恢复、环境迁移通用需求，与现有 cron/config 体系契合 |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) 会话快照 save/load | 开发体验 | 🔶 设计挑战 | 中 | 开发调试高频场景，但涉及状态序列化复杂度 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) MathJax/LaTeX (👍 4) | 控制界面 | 🟢 相对独立 | **高** | 技术社区强需求（4 👍），实现边界清晰 |
| [#17925](https://github.com/openclaw/openclaw/issues/17925) ZAI/Google 原生 web_search (👍 5) | 模型能力 | 🟢 有先例 | **高** | 已有 xAI Grok 实现（`runGrokSearch`），模式可复制 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) 每模型用量日志 | 可观测性 | 🟢 相对独立 | **高** | 成本优化刚需，与现有 Session JSONL 数据流契合 |
| [#13751](https://github.com/openclaw/openclaw/issues/13751) 飞书权限精简 | 企业集成 | 🟢 相对独立 | **高** | 安全合规压力明确，改动范围可控 |

**路线图信号**: **"原生工具透传"（#17925）和"富消息格式"（#12602）** 构成下一代 Agent 交互体验的两大支柱。v2026.5.2 的插件体系重构为外部能力扩展奠定基础，预计 2026.6.x 版本将重点强化多模态输出与原生搜索集成。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 原声引用 | 频率 |
|:---|:---|:---:|
| **4.29 升级灾难** | "Upgrading from 4.24/4.27 → 4.29 caused every agent dispatch to take **2–5 minutes** to first reply" | 🔴 极高 |
| **成本失控** | "An OpenClaw update around April 2026 **silently flipped** the default reasoning level for Claude models from `off` to `on`... **doubles Anthropic spend**" | 🟡 高 |
| **会话状态脆弱** | "repeatedly hits hard context-overflow resets... even with high compaction headroom configured" | 🟡 高 |
| **企业权限焦虑** | "`contact:contact.base:readonly`... grants read access to the **entire organization's contact directory** — far too broad" | 🟡 高 |
| **降级失败** | "downgrade back to `2026.4.27`... gateway and CLI could **no longer start**" | 🟡 中 |
| **静默失败** | "OpenClaw Core **silently drops** the media item. Users and agents receive no feedback" | 🟡 中 |

### 满意点
- 快速迭代响应："rollback to 2026.4.23 fixed it" 表明版本回滚机制有效
- 诊断工具：`openclaw doctor` 在插件修复场景中被频繁提及

### 不满意点
- **"静默变更"信任危机**：默认 reasoning 翻转、npm 优先切换等变更缺乏显式通知
- **Windows 二等公民**：多个 Windows 特定问题长期未解（#39038, #75315）
- **缓存缺失**：会话准备 48s 每次重建、系统提示不同代码路径组装等架构债务显现

---

## 8. 待处理积压

### 需维护者重点关注的高价值长期 Issue

| Issue | 创建日期 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#63216](https://github.com/openclaw/openclaw/issues/63216) 重复硬重置 + bootstrap 上下文重注入 | 2026-04-08 | 2026-05-02 | 🔴 **上下文管理架构缺陷**，影响长会话稳定性 | 纳入 2026.6 架构评审 |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) exec-approvals 路径忽略状态根 | 2026-02-28 | 2026-05-02 | 🟡 安全边界模糊，多用户/容器部署风险 | 分配安全标签，优先修复 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) Cron 会话工具失败时幻觉输出 | 2026-03-18 | 2026-05-02 | 🔴 **信任与安全红线**，用户收到伪造数据 | 纳入可靠性 OKR |
| [#63030](https://github.com/openclaw/openclaw/issues/63030) 系统提示不同代码路径组装导致缓存失效 | 2026-04-08 | 2026-05-02 | 🟡 Anthropic 缓存成本浪费，技术债务 | 与 #76186 合并评估 |
| [#73182](https://github.com/openclaw/openclaw/issues/73182) Claude reasoning 默认

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期**: 2026-05-03 | **数据周期**: 过去24小时

---

## 1. 生态全景

个人 AI 助手开源生态正经历**"从功能扩张向质量巩固"的集体转型**。OpenClaw 以 500+ Issues/PR 的日活规模稳居生态核心，但 v2026.4.29 性能回归事件暴露大型项目的稳定性治理挑战；ZeroClaw、IronClaw、NullClaw 等新兴项目以 Rust/Zig 系统语言重构基础设施，追求零依赖、低资源占用；NanoBot、CoPaw、Moltis 等聚焦特定场景（多实例编排、MCP 生态、沙箱安全）形成垂直纵深。整体呈现**"一超多强、分层演化"**格局——上层应用快速迭代，底层基础设施向编译型语言迁移以追求确定性。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已合并) | Release | 健康度评估 | 阶段定位 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 466/34 | 452/48 | v2026.5.2 正式版 + 2 beta | ⚠️ 高活跃/高积压，稳定性危机中快速修复 | 质量巩固 |
| **NanoBot** | 3/1 | 12/8 | 无 | ✅ 8.2/10，响应迅速，积压清理高效 | 快速迭代→质量巩固 |
| **Hermes Agent** | 47/3 | 48/2 | 无 | ⚠️ 合并率 4%，维护带宽严重不足 | 快速迭代但治理滞后 |
| **PicoClaw** | 7/0 | 6/2 | nightly v0.2.8 | ⚠️ 高优先级 Bug #2720 无 PR，审查瓶颈 | 维护性迭代 |
| **NanoClaw** | 10/2 | 8/7 | 无 | ✅ 修复冲刺期，"当日提当日合"效率高 | 紧急修复期 |
| **NullClaw** | 6/0 | 2/18 | 无 | ✅ Zig 0.16 迁移收官，基础设施扎实 | 架构精炼期 |
| **IronClaw** | 16/4 | 41/6 | 无 | ⚠️ 合并率 12.8%，Reborn 架构设计密集期 | 架构重构期 |
| **LobsterAI** | 0/0 | 4/0 | 无 | ❌ 零合并，stale PR 堆积，维护资源疑似不足 | 停滞风险 |
| **Moltis** | 4/0 | 2/1 | 无 | ✅ 中等活跃，i18n 与沙箱架构稳步推进 | 功能扩展期 |
| **CoPaw** | 14/0 | 6/0 | 无 | ⚠️ 零合并，需求输入密集但管道阻塞 | 需求输入期 |
| **ZeroClaw** | 48/2 | 29/7 | 无 | ✅ v0.8.0 冲刺，S1 阻断快速响应 | 大版本迭代期 |
| **TinyClaw** | — | — | — | ❌ 无活动 | 休眠/废弃？ |
| **ZeptoClaw** | — | — | — | ❌ 无活动 | 休眠/废弃？ |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 日活 500 Issues + 500 PR，绝对量级领先 | ZeroClaw (84)、IronClaw (67)、NanoBot (24) 均不足其 1/10 |
| **技术路线** | Node.js/TypeScript 全栈，插件生态（npm 优先） | ZeroClaw (Rust)、NullClaw (Zig)、IronClaw (Rust+WASM) 向系统语言迁移，追求静态二进制 |
| **功能覆盖** | 最广：Slack/Discord/Telegram/WhatsApp/Web UI/CLI/嵌入 Agent 全渠道，外部插件体系成熟 | NanoBot 侧重多实例编排与记忆归档，Hermes 强调 RL 自我改进，PicoClaw 专注边缘设备 |
| **稳定性治理** | **"4.29 回归事件"** 成负面标杆：CPU 100%、消息管道 20-70s 延迟、OpenAI 嵌入挂起 | NanoClaw 同日修复 3 个 P0 级缺陷，NullClaw Zig 迁移后生产回归 24h 内全清 |
| **企业集成深度** | Slack Block Kit (#12602)、Mattermost、飞书等企业 IM 覆盖最全 | LobsterAI 背靠网易有道但活跃度低迷，CoPaw 钉钉/微信渠道假死问题未解 |

**核心差异**: OpenClaw 是**"最大公约数"型平台**——功能最全、生态最开放，但 Node.js 动态语言的运行时不确定性在规模化部署中放大；新兴项目以**"牺牲功能广度换深度确定性"**，用编译型语言重构关键路径。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **reasoning_content 端到端保真** | ZeroClaw (#5600, #6233, #6269), CoPaw (#4006), NanoBot (#3585), PicoClaw (#2745) | DeepSeek/Kimi/Gemini 等推理模型的 thinking 内容在流式传输、消息转换、上下文压缩中丢失，导致多轮对话失败或输出污染 | 🔴 **极高** |
| **模型弹性/降级链** | CoPaw (#1327, #4011, #3789), OpenClaw (隐性成本焦虑) | 主模型限流/宕机时自动切换备用模型，避免业务完全中断 | 🔴 **高** |
| **MCP 生态稳定性** | CoPaw (#3640 假死, #3997 timeout), Moltis (#959 DeepSeek), IronClaw (MCP 支付集成 #2919) | TaskGroup 异常、timeout 硬编码、reasoning_content 回传等生产级缺陷 | 🔴 **高** |
| **低资源/边缘设备适配** | NullClaw (#871 DuckDuckGo 原生搜索), PicoClaw (#2462 Termux/Android TV), ZeroClaw (#6280 Windows 构建) | 摆脱 API key 依赖、降低运行时开销、支持非标准环境 | 🟡 **中高** |
| **配置安全与合规** | OpenClaw (#76323 签名提交), NanoBot (#2218 env 变量), ZeroClaw (#6237 Slack token 环境变量), IronClaw (#3447 上下文剥离) | 密钥脱离明文、12-factor 兼容、防止系统提示泄露 | 🟡 **中高** |
| **沙箱与执行安全** | Moltis (#942 多后端沙箱), NullClaw (#875 三层风险分级), ZeroClaw (#5722 Shell 沙箱阻断 Python) | 代码执行的安全边界与实用性平衡，金融合规场景尤为敏感 | 🟡 **中** |
| **长期记忆/反思机制** | ZeroClaw (#5849 Dream Mode), NanoBot (#3247 记忆归档降级), OpenClaw (上下文压缩 #63216) | 会话级→跨会话→自主反思的记忆层级演进 | 🟡 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道企业集成、外部插件市场 | 企业 IT/开发者、多平台部署团队 | Node.js 动态运行时，npm 插件生态，热路径优化中 |
| **ZeroClaw** | 国产模型深度适配、Skills 生态、合规金融场景 | 中文开发者、券商/金融机构 | Rust 静态二进制，Schema V3 配置体系，WASM 技能沙箱 |
| **NullClaw** | 极致低资源、零外部依赖、边缘部署 | IoT/嵌入式开发者、隐私敏感用户 | Zig 语言，<30KB 增量 Admin API，POSIX 直接调用 |
| **IronClaw** | NEAR 区块链生态、Agent 经济自主性、RL 自我改进 | Web3 开发者、研究型用户 | Rust + WASM 通道，Reborn 事件溯源架构，Sandcastle 安全运行时 |
| **NanoBot** | 多实例编排、记忆归档、企业 IM 精细化 | SaaS 运营商、多租户部署者 | 环境变量配置体系，per-group 模型配置，HookCenter 插件事件 |
| **Hermes Agent** | 跨会话 Honcho 记忆、技能自创建、多网关 | 个人高级用户、研究社区 | Python 快速原型，RL 训练基础设施（CodeDebug/GRPO） |
| **Moltis** | 代码执行沙箱、多提供商编排、A2A 协议 | 企业自动化、多 Agent 协作场景 | Vercel/Daytona/Firecracker 远程沙箱，OIDC 调试能力 |
| **CoPaw** | 钉钉/微信企业集成、MCP 工具生态 | 中国企业用户、低代码配置者 | 阿里云生态绑定，Console/Web 双端，AgentScope 框架 |
| **PicoClaw** | 超轻量部署、极端环境兼容（Termux） | 极客用户、受限网络环境 | 夜间构建节奏，最小功能集，社区驱动 |
| **LobsterAI** | OpenClaw 封装、中文本地化、网易生态 | 中文终端用户、低技术门槛 | 配置同步覆盖 OpenClaw，渠道注册表扩展 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（日活 >50，功能扩张为主）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 500+ 日活，版本密集发布 | 稳定性债务累积，"4.29 回归"可能重演 |
| **ZeroClaw** | 84 日活，v0.8.0 大版本冲刺 | Schema V3 破坏性变更，集成分支协调风险 |
| **IronClaw** | 67 日活，Reborn 架构设计密集 | 41 待合并 PR，新贡献者 (abbyshekit) 63% 占比，review 瓶颈 |

### 质量巩固阶段（日活 10-50，修复与架构并重）
| 项目 | 特征 | 关键动作 |
|:---|:---|:---|
| **NanoBot** | 24 日活，8.2 健康度，历史积压清理 | 维持响应速度，避免 WIP PR 比例过高 |
| **NanoClaw** | 22 日活，7 个紧急修复当日合并 | v2 迁移体验打磨，平台兼容性扩展 |
| **NullClaw** | 20 日活，Zig 迁移收官 | 去 curl 化 (#881)、原生搜索 (#871) 架构精炼 |
| **Hermes Agent** | 97 日活但合并率 4% | **治理危机**：需立即建立 PR triage 机制 |

### 停滞/风险阶段（日活 <10 或零合并）
| 项目 | 症状 | 诊断 |
|:---|:---|:---|
| **LobsterAI** | 4 PR 全待审，stale 标签与实际更新矛盾 | 维护资源疑似转移，背靠大厂但投入不足 |
| **CoPaw** | 14 Issues + 6 PR 零合并 | 需求输入管道阻塞，可能打击贡献者积极性 |
| **PicoClaw** | 7 Issues 全开放，P0 Bug #2720 无 PR | 核心安全缺陷响应迟缓，审查周期过长 |
| **TinyClaw/ZeptoClaw** | 完全无活动 | 休眠或项目终止，生态位被替代 |

---

## 7. 值得关注的趋势信号

### 信号一：推理模型适配成为"及格线"而非差异化
> DeepSeek/Kimi/Gemini 的 `reasoning_content` 字段处理已在 **5 个项目**中触发 10+ Issues/PR。这不再是单一项目的兼容性问题，而是**国产/推理模型生态对既有 Agent 架构的系统性挑战**——传统"prompt/response"二元模型无法承载"reasoning → answer → tool_call"的多段语义。

**对开发者的价值**: 设计消息管道时必须预留**供应商扩展字段**（如 ZeroClaw #6264 的 `extra_content: Option<Value>`），避免硬编码字段映射。

### 信号二："Agent 经济自主性"从概念走向工程
> IronClaw #2919 (x402/agentpay)、Moltis #960 (SwarmScore 信任评级)、NanoBot #3456 (create-instance 自我复制) 共同指向**Agent 间的价值交换与声誉机制**。这与 2025 年的"工具调用"处于同一演化阶段——从"能调用"到"能交易"。

**对开发者的价值**: 提前关注 MCP 支付协议、可验证执行历史、便携式信任评级等标准，Agent 互操作的下层协议正在形成。

### 信号三：编译型语言重构基础设施的"确定性溢价"
> ZeroClaw (Rust)、NullClaw (Zig)、IronClaw (Rust+WASM) 均以**静态二进制、零运行时依赖、可预测资源占用**为核心卖点。OpenClaw 的 Node.js 热路径优化（#76107 定位 6.2s+16s 瓶颈）在对比中显得**边际收益递减**。

**对开发者的价值**: 若目标场景涉及边缘部署、金融合规、长周期运行，优先评估 Rust/Zig 方案；若追求快速迭代与插件生态，Node.js/Python 仍具优势，但需接受稳定性治理成本。

### 信号四："模型弹性"从运维需求上升为产品需求
> CoPaw 3 个关联 Issue (#1327/#4011/#3789) 的共振、OpenClaw 用户因 Claude reasoning 默认开启导致**账单翻倍**的隐性焦虑，表明 LLM 服务的**不可靠性与成本不可预测性**已直接影响终端用户体验设计。

**对开发者的价值**: 将降级链、速率限制处理、成本门控纳入核心架构而非后期运维补丁，"模型弹性"将成为 Agent 产品的信任基础设施。

### 信号五：文档与实现的"语义一致性"成为新摩擦点
> NanoBot #3585 (`reasoning_effort: null` 被静默忽略)、CoPaw #3997 (timeout 硬编码 30s)、NullClaw #866 (curl allowlist 失效) 共同暴露**配置语言的语义漏洞**——"未设置"与"显式 null"、"默认值"与"硬编码"的区分不清。

**对开发者的价值**: 配置系统需明确区分 **Unset / Null / Default / Explicit** 四层语义，并在文档中强制标注行为差异，避免用户"调试数小时"的信任损耗。

---

*报告生成时间: 2026-05-03 | 分析基于各项目 GitHub 公开动态，适合技术决策者评估选型与开发者识别贡献机会*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-03

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-05-03 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoBot 今日呈现**高度活跃的社区开发态势**：24小时内20个PR更新（12个待审、8个已合并/关闭），Issues侧4条更新（3个活跃、1个关闭）。核心贡献者 `chengyongru` 单日完成5个PR的合并/关闭，集中清理了历史积压的安全配置、记忆归档、飞书线程隔离等关键功能。社区正围绕**执行超时控制、推理模式配置、Discord交互组件**三大方向形成新的开发焦点，同时小米模型生态的适配需求已获初步响应。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2218](https://github.com/HKUDS/nanobot/pull/2218) | chengyongru | **环境变量引用语法 `{env:VAR}`** | 安全基线提升：API密钥等敏感配置脱离明文存储，满足企业部署合规要求 |
| [#3456](https://github.com/HKUDS/nanobot/pull/3456) | chengyongru | **create-instance 内置技能 + WebUI远程后端** | 多实例编排能力：Agent可自我复制，GitHub Pages托管方案降低WebUI部署门槛 |
| [#3419](https://github.com/HKUDS/nanobot/pull/3419) | chengyongru | **修复 DeepSeek 思考模式 400 错误** | 推理链完整性：合并连续助手消息时保留 `reasoning_content`，修复国产大模型关键兼容bug |
| [#3414](https://github.com/HKUDS/nanobot/pull/3414) | chengyongru | **系统提示词历史截断（32K上限）** | 上下文安全阀：防止历史记录膨胀导致token爆炸，提升长会话稳定性 |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) | chengyongru | **飞书线程级会话隔离** | 企业IM体验对齐：话题回复共享session、独立消息获新session，匹配 deer-flow 行为模式 |
| [#3247](https://github.com/HKUDS/nanobot/pull/3247) | chengyongru | **记忆归档LLM故障降级** | 可靠性加固：LLM过载时回退至原始归档，避免 `/new` 后数据丢失 |
| [#3594](https://github.com/HKUDS/nanobot/pull/3594) | chengyongru | **ExecTool 白名单优先级修复** | 权限模型修正：`allow_patterns` 可覆盖 `deny_patterns`，解决内置黑名单无法豁免的设计缺陷 |
| [#2010](https://github.com/HKUDS/nanobot/pull/2010) | Zeknes | **WhatsApp 媒体收发支持** | 渠道能力补全：图片/音频/视频/文档的自动下载与统一发送API |

**整体进展评估**：今日合并内容覆盖**安全架构、模型兼容、企业IM、记忆系统、执行沙箱**五大核心模块，属于**高质量的技术债务清理与基础能力夯实**。特别是环境变量语法和exec权限修复，直接回应了生产部署的痛点。

---

## 4. 社区热点

### 高关注度议题

| 议题 | 类型 | 热度分析 |
|:---|:---|:---|
| [#3595](https://github.com/HKUDS/nanobot/issues/3595) `exec` 600秒超时硬编码限制 | 🔥 **功能限制** | 用户明确诉求：下载、长脚本等场景被截断。配套PR [#3596](https://github.com/HKUDS/nanobot/pull/3596) 已提交，采用"硬超时+活动感知软超时"双层模型，设计成熟度较高 |
| [#3585](https://github.com/HKUDS/nanobot/issues/3585) `reasoning_effort: null` 无法禁用小米MiMo推理 | 🔥 **文档与实现不一致** | 配置语义bug：文档承诺 `null` 可禁用，但实现中 `None` 被静默忽略。配套PR [#3587](https://github.com/HKUDS/nanobot/pull/3587) 已快速响应，区分"省略"与"显式null"语义 |
| [#3518](https://github.com/HKUDS/nanobot/issues/3518) 支持小米模型 **[已关闭]** | 📌 **生态扩展** | 3条评论的简短讨论后即关闭，推测维护者已内部确认支持路线图或认为与现有provider架构兼容，但缺乏公开说明引发一定困惑 |

**诉求洞察**：社区正从"基础功能可用"向**企业级可配置性**演进——超时控制、推理模式细粒度管理、国产模型生态适配成为新焦点。小米MiMo的案例显示，文档与实现的语义一致性正成为用户体验的关键摩擦点。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3585](https://github.com/HKUDS/nanobot/issues/3585) `reasoning_effort: null` 无法禁用小米MiMo推理 | **有PR待审** | 小米MiMo用户、所有需显式控制推理模式的场景 | [#3587](https://github.com/HKUDS/nanobot/pull/3587) |
| 🟡 **中** | [#3597](https://github.com/HKUDS/nanobot/issues/3597) Agent混淆工作区根目录，文件保存路径异常 | **无PR，待响应** | 文件操作依赖工作区的用户（如自动化内容生成） | ❌ 无 |
| 🟡 **中** | [#3594](https://github.com/HKUDS/nanobot/pull/3594) `allow_patterns` 无法覆盖 `deny_patterns` **[已修复]** | ✅ **已合并** | ExecTool权限配置用户 | #3594 自身 |
| 🟢 **低** | [#3588](https://github.com/HKUDS/nanobot/pull/3588) 非WAV音频上传自托管Whisper失败 | **有PR待审** | 使用whisper.cpp等本地转写的用户 | [#3588](https://github.com/HKUDS/nanobot/pull/3588) |

**稳定性评估**：今日无崩溃级或数据丢失级bug报告。`#3597` 的Agent工作区路径混淆问题需关注——用户描述的场景（自动化生成内容并保存）是NanoBot的核心价值主张之一，若路径解析不可靠将直接影响生产力场景的信任度。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **执行超时灵活配置**（活动感知双层模型） | [#3595](https://github.com/HKUDS/nanobot/issues/3595) + [#3596](https://github.com/HKUDS/nanobot/pull/3596) | ⭐⭐⭐⭐⭐ **极高** | PR设计成熟，作者 `boogieLing` 同日响应issue并提交实现，社区需求明确 |
| **Discord交互组件**（按钮、选择菜单、模态框） | [#3589](https://github.com/HKUDS/nanobot/pull/3589) | ⭐⭐⭐⭐☆ **高** | 向后兼容设计（字符串标签保持工作），扩展Bot交互范式，符合渠道能力补齐路线 |
| **Dream功能范围控制** | [#3591](https://github.com/HKUDS/nanobot/pull/3591) | ⭐⭐⭐⭐☆ **高** | 解决"技能漂移"用户痛点，配置化开关降低自动化副作用焦虑 |
| **心跳手动触发** | [#3590](https://github.com/HKUDS/nanobot/pull/3590) | ⭐⭐⭐⭐☆ **高** | 与Dream控制配套，提升可观测性和调试体验 |
| **转写Provider统一 + 本地Whisper** | [#3513](https://github.com/HKUDS/nanobot/pull/3513) | ⭐⭐⭐⭐☆ **高** | 架构债务清理（两个近同Provider类合并），本地AI能力符合隐私敏感场景趋势 |
| **HookCenter类型化事件系统** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | ⭐⭐⭐☆☆ **中** | 架构升级意义重大（替换方法重写模式、支持插件分发），但[WIP]标记且改动面广，需较长审查周期 |
| **WebUI流式体验与聊天隔离** | [#3583](https://github.com/HKUDS/nanobot/pull/3583) | ⭐⭐⭐☆☆ **中** | [WIP]状态，beta WebUI的UX打磨，优先级可能低于核心功能 |

**路线图信号**：社区正形成**"可配置性 + 可观测性 + 本地优先"**的三重趋势。执行超时和Dream控制体现用户对Agent自主行为边界的管理诉求；HookCenter和转写统一反映架构向插件化、Provider-agnostic演进。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **自动化内容生产** | [#3597](https://github.com/HKUDS/nanobot/issues/3597) `fablau` | Agent对工作区根目录认知混乱，文件保存位置不可预期——"足够可靠用于工作"的信任门槛未达标 |
| **长任务执行** | [#3595](https://github.com/HKUDS/nanobot/issues/3595) `MARJORIESHA-pBAD` | 600秒硬上限粗暴截断合法长任务，无配置逃逸口 |
| **国产模型适配** | [#3585](https://github.com/HKUDS/nanobot/issues/3585) `ClearPlume` | 文档承诺与实际行为不一致，`null`语义被忽略导致无法关闭推理（计费/延迟敏感场景） |

### 积极信号

- **安全功能获认可**：环境变量引用语法 (#2218) 解决企业部署的密钥管理焦虑
- **渠道扩展满意度**：WhatsApp媒体支持 (#2010) 和飞书线程隔离 (#3176) 显示多平台策略在兑现

---

## 8. 待处理积压

> 以下议题/PR已长期活跃或设计关键路径，建议维护者优先响应：

| 条目 | 创建时间 | 当前状态 | 积压风险 |
|:---|:---|:---|:---|
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) 转写Provider统一 + 本地Whisper | 2026-04-28 | 待审（5天） | 架构债务持续累积，本地AI趋势窗口期 |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) WebUI公开部署安全加固 | 2026-04-28 | 待审（5天） | **安全类PR不应长期滞留**——涉及token泄露、未授权删除等高危场景 |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) WebUI流式体验改进 [WIP] | 2026-05-01 | WIP（2天） | beta WebUI用户体验瓶颈，需明确完成时间表 |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) HookCenter类型化事件系统 [WIP] | 2026-04-30 | WIP（3天） | 插件生态基础设施，影响外部开发者接入意愿 |

**特别提醒**：`#3492` 为安全加固PR，涉及公开部署场景下的token铸造和API授权漏洞，建议提升审查优先级。

---

> 📊 **健康度评分**: 8.2/10  
> **优势**: 核心贡献者响应迅速、历史积压有效清理、安全与架构基础持续夯实  
> **风险**: WIP PR占比偏高、安全类审查周期偏长、Agent工作区可靠性个案需跟进

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-03

## 1. 今日速览

Hermes Agent 今日保持**高度活跃**，Issues 和 PR 各更新 50 条，但**合并率极低**（仅 2/50 PR 合并，3/50 Issues 关闭），显示社区贡献旺盛但维护带宽紧张。核心痛点集中在**多平台网关稳定性**（WhatsApp、Telegram、Gemini 适配）、**安装与配置体验**（macOS 路径空格、Docker 构建耗时），以及**AI 基础设施演进**（推理模型支持、MCP 支付集成）。值得注意的是，今日出现多个 **P1/P2 级回归 bug**（`/plan` 长文本崩溃、SQLite DB 锁静默失败、技能名称不匹配），提示版本迭代中质量控制需要加强。无新版本发布。

---

## 2. 版本发布

**无**

---

## 3. 项目进展

### 今日合并/关闭的 PR（2 条）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#18867](https://github.com/NousResearch/hermes-agent/pull/18867) | lip-ai | **已关闭** | 为 MiniMax TTS 添加独立 API Key 配置 `MINIMAX_TTS_API_KEY`，解耦 LLM 与 TTS 凭证。虽关闭但方向被认可，可能以修订形式重开 |
| ~~[#16248](https://github.com/NousResearch/hermes-agent/issues/16248)~~ | - | **Issue 关闭** | `/plan` 长文本导致 `Errno 36: File name too long` 的 P1 回归 bug 已修复（v2026.4.16 引入）|

### 关键推进中的 PR 集群

**CI 稳定性攻坚**（Sanjays2402 主导，4 个 PR 今日更新）：
- [#19024](https://github.com/NousResearch/hermes-agent/pull/19024) 修复 Docker TUI 依赖测试失败
- [#19026](https://github.com/NousResearch/hermes-agent/pull/19026) 修复 `xdist-flaky` 的 TTY 检测测试
- [#19029](https://github.com/NousResearch/hermes-agent/pull/19029) 恢复 `ValueError` 丢弃逻辑
- [#19031](https://github.com/NousResearch/hermes-agent/pull/19031) 适配更新后的进程清理逻辑

这些 PR 全部指向 **main 分支持续红态**，阻塞所有其他合并，属于**基础设施优先级**。

**TUI/CLI 体验修复**：
- [#19028](https://github.com/NousResearch/hermes-agent/pull/19028) 语音录制键从硬编码 `Ctrl+B` 改为读取 `voice.record_key` 配置
- [#18866](https://github.com/NousResearch/hermes-agent/pull/18866) 为 `npm install` 添加超时和进度输出，解决"假死"体验

**安全与架构**：
- [#3447](https://github.com/NousResearch/hermes-agent/pull/3447) 网关出站消息剥离内部 continuity context，防止系统提示泄露

**RL 训练基础设施**（研究向）：
- [#3448](https://github.com/NousResearch/hermes-agent/pull/3448) + [#3451](https://github.com/NousResearch/hermes-agent/pull/3451) 集成 CodeDebug 物理环境与多轮 GRPO 的 TurnLevelReward，为 agent 自我改进训练铺路

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#15895](https://github.com/NousResearch/hermes-agent/issues/15895) Gemini CLI 429 限流 | **6** | **"配额充足却被限流"** — 用户质疑 Google OAuth 与 API Key 双路径的可靠性，Gemini 原生适配成熟度受质疑 |
| 2 | [#2990](https://github.com/NousResearch/hermes-agent/issues/2990) 对话式 Cron 投递 | **6** | **"定时任务需要 agent 参与"** — 当前 cron 是单向广播，用户希望触发 agent 推理形成闭环，属于架构级功能请求 |
| 3 | [#3000](https://github.com/NousResearch/hermes-agent/issues/3000) macOS 安装脚本空格路径崩溃 | **5** | **"uv 管理 Python 路径含空格导致静默失败"** — 安装体验痛点，影响 macOS 主流用户群 |
| 4 | [#2991](https://github.com/NousResearch/hermes-agent/issues/2991) WhatsApp LID 未解析为手机号 | **4** | **网关与桥接器授权逻辑不一致** — 安全/身份验证层面的平台适配缺口 |

### 诉求分析

- **#15895 & #2991**：反映 **Google/WhatsApp 大平台适配的"最后一公里"问题** — 基础功能可用，但边缘场景（OAuth 限流策略、LID 身份格式）处理粗糙
- **#2990**：代表 **从"工具"到"智能体"的范式跃迁需求** — 用户不满足于定时触发，而希望 agent 主动介入决策
- **#3000**：**开发者体验（DX）债务** — 安装脚本对现代 Python 工具链（uv）支持不足

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | ~~[#16248](https://github.com/NousResearch/hermes-agent/issues/16248)~~ | `/plan` + 长文本 → `Errno 36` 文件名过长（v2026.4.16 回归） | ✅ **已关闭** | 已修复 |
| **P1** | [#2936](https://github.com/NousResearch/hermes-agent/issues/2936) | Hermes-4 via Telegram 网关**从不调用工具**，仅幻觉输出 | 🔴 开放 | 无 |
| **P2** | [#3000](https://github.com/NousResearch/hermes-agent/issues/3000) | `install.sh` macOS 空格路径静默中止 | 🔴 开放 | 无 |
| **P2** | [#2991](https://github.com/NousResearch/hermes-agent/issues/2991) | WhatsApp LID→手机号解析缺失导致授权失败 | 🔴 开放 | 无 |
| **P2** | [#17199](https://github.com/NousResearch/hermes-agent/issues/17199) | DeepSeek 提供者：模型名归一化 + `base_url` 覆盖破坏自定义端点（火山引擎等） | 🔴 开放 | 无 |
| **P2** | [#18875](https://github.com/NousResearch/hermes-agent/issues/18875) | Hindsight memory 未安装时**网关崩溃+无限 Docker 重启循环**，无错误提示 | 🔴 开放 | 无（重复 #18876）|
| **P2** | [#19003](https://github.com/NousResearch/hermes-agent/issues/19003) | Context compressor 忽略 `reasoning` 字段 → 思考模型空摘要（Ollama 0.22+） | 🔴 开放 | 无 |
| **P2** | [#2914](https://github.com/NousResearch/hermes-agent/issues/2914) | 会话 JSON 保存但 SQLite 索引失败（DB 锁静默失败）→ `session_search` 失效 | 🔴 开放 | 无 |
| **P2** | [#18872](https://github.com/NousResearch/hermes-agent/issues/18872) | `skills_list` vs `skill_view` 名称不匹配**破坏工具调用闭环** | 🔴 开放 | 无 |
| **P2** | [#18959](https://github.com/NousResearch/hermes-agent/issues/18959) | Kanban 自定义 profile 读取错误 DB → 无限崩溃循环 | 🔴 开放 | 无 |
| **P2** | [#18968](https://github.com/NousResearch/hermes-agent/issues/18968) | Kanban 工具对 orchestrator profile 不可见 | 🔴 开放 | 无 |

### 稳定性评估

**⚠️ 高风险信号**：
- **两个"无限崩溃循环"模式**（Hindsight memory #18875、Kanban profile #18959）均与 **profile/配置隔离机制** 相关，暗示配置作用域设计存在系统性缺陷
- **P1 级工具调用完全失效**（#2936 Hermes-4 + Telegram）影响核心卖点，急需复现定位
- **"静默失败"模式泛滥**：DB 锁（#2914）、内存写满（#2771）、安装中止（#3000）均不报错，损害可调试性

---

## 6. 功能请求与路线图信号

| Issue | 方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2990](https://github.com/NousResearch/hermes-agent/issues/2990) 对话式 Cron | 架构演进：定时任务→agent 主动推理 | ⭐⭐⭐ 高 | 与"自我改进 agent"愿景高度契合，cron 目前是明显断层 |
| [#2919](https://github.com/NousResearch/hermes-agent/issues/2919) x402/agentpay 支付执行 | MCP 工具生态：agent 经济自主性 | ⭐⭐⭐ 高 | 精准补全"学习闭环"缺失的支付环节，有明确 MCP 集成路径 |
| [#2835](https://github.com/NousResearch/hermes-agent/issues/2835) 多上下文文件组合 | 开发者体验：Claude/Cursor 兼容性 | ⭐⭐⭐ 高 | 简单改动，大 UX 收益，社区呼声明确 |
| [#18326](https://github.com/NousResearch/hermes-agent/issues/18326) ACP 模式 `reasoning_effort` | IDE 协议适配 | ⭐⭐⭐ 高 | VS Code/Zed/JetBrains 用户刚需，与 CLI `/reasoning` 命令对齐成本低 |
| [#2918](https://github.com/NousResearch/hermes-agent/issues/2918) 只读工具结果缓存 | 性能优化 | ⭐⭐☆ 中 | 技术合理，但需设计缓存失效策略，优先级可能被稳定性债务挤压 |
| [#18988](https://github.com/NousResearch/hermes-agent/issues/18988) `pre_tool_call` 参数重写 hook | 插件系统扩展 | ⭐⭐☆ 中 | 对标 Claude Code，插件生态成熟后更紧迫 |
| [#2971](https://github.com/NousResearch/hermes-agent/issues/2971) API 结构化事件流 | 企业集成 | ⭐⭐☆ 中 | 需求合理但受众较窄，与当前 OpenAI 兼容 API 有设计张力 |
| [#2205](https://github.com/NousResearch/hermes-agent/issues/2205) Venice AI 深度集成 | 多提供商策略 | ⭐☆☆ 低 | 需求模糊，与现有 OpenAI 兼容层重叠 |

**研究基础设施**（PR #3448/#3451）显示团队正布局 **多轮 RL 训练**，长期可能实现 agent 从"被使用"到"自进化"的跃迁，与社区功能请求形成战略共振。

---

## 7. 用户反馈摘要

### 痛点矩阵

| 场景 | 具体表现 | 情绪强度 |
|:---|:---|:---|
| **安装入门** | macOS + uv = 静默失败；Docker 构建"非常长时间" | 😤 高 |
| **配置调试** | 自定义端点（火山引擎）被模型归一化破坏；OpenCode 路由混乱 | 😤 高 |
| **平台适配** | Gemini OAuth 429 无解；WhatsApp 身份格式不一致 | 😠 中高 |
| **运行稳定性** | 网关崩溃无日志；内存写满不提示；DB 锁导致搜索失效 | 😠 中高 |
| **核心功能** | Telegram 上模型不调用工具；长文本 /plan 崩溃 | 😠 中高 |
| **进阶体验** | 无法像 Claude Code 那样中途调推理强度；上下文文件只能选一个 | 🤔 中 |

### 满意点（从 issue 反推）
- **"The Agent That Grows With You" 愿景获认可**（#2919 引用）
- 技能自创建、Honcho 持久记忆、跨会话召回被频繁提及为差异化优势
- 多网关架构（Telegram/Discord/WhatsApp/Slack）覆盖度受赞赏

### 不满意核心
> *"The learning loop means the agent gets better at tasks over time. But there is one gap..."* — #2919

**"闭环断裂"感**：学习、记忆、工具都在，但**支付执行、定时任务 agent 化、推理控制**等关键环节缺失，形成"有大脑但缺手脚"的体验落差。

---

## 8. 待处理积压

### 长期活跃未决 Issue（提醒关注）

| Issue | 创建 | 最后更新 | 阻塞原因 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#2990](https://github.com/NousResearch/hermes-agent/issues/2990) 对话式 Cron | 2026-03-25 | 2026-05-02 | 架构决策：gateway 介入 cron 的执行模型 | 维护者回应是否纳入 Q2 路线图 |
| [#2835](https://github.com/NousResearch/hermes-agent/issues/2835) 上下文文件组合 | 2026-03-24 | 2026-05-02 | 简单改动，可能等待社区 PR | 标记 `good first issue` 加速 |
| [#2771](https://github.com/NousResearch/hermes-agent/issues/2771) 内存写满静默失败 | 2026-03-24 | 2026-05-02 | 需要网关层错误传播机制 | 与 #18875 等崩溃问题合并评估 |
| [#2205](https://github.com/NousResearch/hermes-agent/issues/2205) Venice AI 集成 | 2026-03-20 | 2026-05-02 | 需求模糊，缺乏维护者反馈 | 请求作者补充具体差距清单 |
| [#2975](https://github.com/NousResearch/hermes-agent/issues/2975) WhatsApp macOS Node 运行时检测 | 2026-03-25 | 2026-05-02 | 标记 `duplicate` 但无指向 | 明确主 issue 编号，避免分散 |

### PR 侧积压风险

- **nidhi-singh02 的 5 个修复 PR**（#2752-#2756，创建于 2026-03-24）全部今日更新但仍未合并，距今已 **40 天**，涉及空值防护、子进程泄漏、竞态条件等稳定性修复，建议优先 review
- **#14960**（providers-dict 配置保留，P1）修复关键配置丢失问题，创建于 2026-04-24，已 **9 天**

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 50 Issues + 50 PR/日，生态活跃 |
| 维护响应度 | ⭐⭐☆☆☆ | 合并率 4%，大量 PR/Issue 长期悬置 |
| 代码稳定性 | ⭐⭐⭐☆☆ | P1 回归已修复，但静默失败模式泛滥 |
| 架构前瞻性 | ⭐⭐⭐⭐⭐ | RL 训练基础设施、MCP 支付集成布局领先 |
| 开发者体验 | ⭐⭐☆☆☆ | 安装、配置、调试摩擦显著 |

**综合建议**：短期应集中资源打通 CI 阻塞（Sanjays2402 集群）并修复"无限崩溃循环"类缺陷；中期需建立配置作用域的统一规范；长期继续推进从"工具"到"自主智能体"的架构演进，与社区高赞功能请求（#2990、#2919）形成产品-研究双轮驱动。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-03

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内7条Issue全部处于活跃状态（无关闭），8条PR中有6条待合并、2条已关闭。社区聚焦**工具安全路径处理**与**推理模型输出泄漏**两大技术痛点，同时**原生邮件通道**和**OAuth 2.1 MCP支持**等基础设施需求持续发酵。项目发布 `v0.2.8-nightly.20260502` 夜间构建，显示迭代节奏稳健，但高优先级Bug #2720（PID身份验证缺陷）尚未有修复PR跟进，需关注稳定性风险。

---

## 2. 版本发布

### Nightly Build: v0.2.8-nightly.20260502.6e1fab80
- **发布时间**：2026-05-02
- **类型**：自动化夜间构建（⚠️ 可能不稳定）
- **变更范围**：自 `v0.2.8` 以来的 main 分支累积更新
- **完整日志**：[compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

> **迁移注意**：夜间构建不建议用于生产环境，需等待正式版本发布。

---

## 3. 项目进展

| PR | 状态 | 贡献 | 影响 |
|:---|:---|:---|:---|
| [#2747](https://github.com/sipeed/picoclaw/pull/2747) | ✅ 已关闭 | 更新微信群二维码（有效期至5月9日） | 社区运营维护 |
| [#2746](https://github.com/sipeed/picoclaw/pull/2746) | ✅ 已关闭 | 补充 OpenRouter/Nemotron 推理抑制预设文档 | 缓解推理泄漏用户痛点，但非代码级修复 |

**整体推进评估**：今日无代码合并进入主分支，2条关闭PR均属运维/文档层面。6条待合并PR涵盖 **xAI提供商支持**、**DeepSeek流式推理内容捕获**、**Google OAuth令牌刷新** 等实质功能，合并后将显著提升多提供商兼容性与可靠性。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2421](https://github.com/sipeed/picoclaw/issues/2421) 邮件原生通道 | 4评论，创建近1个月持续更新 | **企业/科研场景刚需**：Telegram等即时通讯平台受限环境下，邮件是唯一可行通道。作者详细论证了SMTP/IMAP双向交互架构，社区对"保守环境部署"诉求强烈 |
| 🔥2 | [#2546](https://github.com/sipeed/picoclaw/issues/2546) OAuth 2.1 + PKCE for MCP | 3评论 | **低代码化部署诉求**：云VM用户无shell/Node.js权限，要求仪表盘直配MCP服务器，对标Claude.ai "Add connector"体验 |
| 🔥3 | [#2462](https://github.com/sipeed/picoclaw/pull/2462) Codex流式输出+Telegram重试修复 | 长期活跃，stale标签 | **边缘设备稳定性**：Android TV/Termux等低资源场景下的生产级可靠性需求 |

**趋势洞察**：社区正从"能跑通"向"企业可部署"演进，**合规性（邮件审计轨迹）**、**无代码配置**、**边缘设备稳定** 构成三大升级方向。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | Fix PR | 风险等级 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-高** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | **PID文件未验证进程身份** → systemd-resolved等复用PID导致网关崩溃循环 | ❌ **无** | **生产阻塞** |
| 🟡 **P1** | [#2749](https://github.com/sipeed/picoclaw/issues/2749) | Bash工具相对路径被解析为绝对路径（`archive/SKILL.md` → `/SKILL.md`） | ✅ [#2750](https://github.com/sipeed/picoclaw/pull/2750) | 工作区逃逸风险 |
| 🟡 **P1** | [#2745](https://github.com/sipeed/picoclaw/issues/2745) | OpenRouter推理模型泄漏`thinking`内容至用户可见输出 | ❌ 文档缓解(#2746) | 隐私/体验受损 |
| 🟡 **P1** | [#2668](https://github.com/sipeed/picoclaw/issues/2668) | Gemini API拒绝含`$ref`/`anyOf`的复杂MCP工具Schema | ❌ **无** | 工具生态兼容性 |
| 🟢 **P2** | [#2665](https://github.com/sipeed/picoclaw/issues/2665) | Anthropic下拉框模型ID格式错误（点号vs连字符） | ❌ **无** | 用户体验 |

**关键警报**：#2720 是今日唯一**高优先级Bug**，且涉及**单例模式核心机制**，无修复PR。建议维护者优先审查——当前实现`kill -0 $PID`仅检测进程存在性，未验证`/proc/$PID/exe`指向或文件锁，在Linux系统高PID周转场景下必现。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入概率 | 判断依据 |
|:---|:---|:---|:---|
| **邮件原生通道** | #2421 | ⭐⭐⭐⭐☆ 高 | 4评论持续互动，企业场景刚需，架构设计已给出 |
| **OAuth 2.1 MCP仪表盘配置** | #2546 | ⭐⭐⭐⭐☆ 高 | 对标Claude.ai，与现有配置域(domain: config)契合 |
| **xAI提供商支持** | PR #2260 | ⭐⭐⭐⭐⭐ 极高 | **PR已就绪**，OpenAI兼容路径，代码+测试+文档完整 |
| **DeepSeek流式推理捕获** | PR #2740 | ⭐⭐⭐⭐⭐ 极高 | **PR已就绪**，修复数据丢失，技术债务小 |
| **Web聊天完整时间戳** | PR #2630 | ⭐⭐⭐☆☆ 中 | UI增强，stale标签，优先级较低 |

**下一版本(v0.2.9?)预测**：xAI支持、DeepSeek修复、Google OAuth刷新修复（#2163）极可能打包进入。

---

## 7. 用户反馈摘要

> 提炼自Issue正文与评论中的真实场景

| 痛点类型 | 具体反馈 | 来源 |
|:---|:---|:---|
| **部署环境受限** | "corporate, scientific, or conservative environments" — 邮件是唯一通道 | #2421 |
| **边缘设备脆弱** | "Android 7, Termux, Telegram... about two days everything worked well enough that I stopped suspecting" — 稳定性焦虑 | #2462 |
| **云原生无shell** | "cloud VMs with public URLs, no shell, no Node.js" — 仪表盘直配刚需 | #2546 |
| **推理模型不可控** | "assistant message... contained the model's reasoning preamble instead of just the final answer" — 输出污染 | #2745 |
| **工具Schema兼容性** | "Gemini's strict function-calling validation rejects these" — 多模型生态割裂 | #2668 |

**满意度信号**：用户愿意在Termux/Android TV等极端环境部署，说明核心架构吸引力强；**不满集中于"最后一公里"的 polish 与 edge case 处理**。

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [PR #2260](https://github.com/sipeed/picoclaw/pull/2260) xAI支持 | 2026-04-02 | 2026-05-02 | **stale 1个月** | 代码完整，仅需维护者review，建议优先合并 |
| [PR #2163](https://github.com/sipeed/picoclaw/pull/2163) Google OAuth刷新 | 2026-03-29 | 2026-05-02 | **stale 1个月+** | 权限降级导致服务中断，生产影响明确 |
| [PR #2462](https://github.com/sipeed/picoclaw/pull/2462) Codex+Telegram修复 | 2026-04-09 | 2026-05-03 | **stale，评论undefined异常** | 需确认CI状态与作者响应性 |
| [Issue #2668](https://github.com/sipeed/picoclaw/issues/2668) Gemini Schema | 2026-04-25 | 2026-05-02 | stale | 工具生态关键，需提供商域专家介入 |

---

**日报生成时间**：2026-05-03  
**数据覆盖**：过去24小时（2026-05-02 至 2026-05-03）

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-03

## 1. 今日速览

NanoClaw 昨日呈现**高强度开发态势**，24小时内产生 **12 条 Issues 更新**（10 活跃/新开，2 关闭）与 **15 条 PR 更新**（8 待合并，7 已合并/关闭），活跃度评级为 **🔥 高**。核心特征是**稳定性修复密集爆发**：`host-sweep` 只读数据库崩溃、`poll-loop` 斜杠命令失效、`CLI` 路由中断等生产级 Bug 被快速识别并修复，7 个已关闭 PR 中 5 个为紧急修复。社区贡献者响应积极，多个 PR 实现"当日提当日合"。无新版本发布，代码处于**修复冲刺期**，v2 安装体验与多平台适配仍是明显短板。

---

## 2. 版本发布

**无新版本发布。** 最新 Release 仍为历史版本。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（7 条）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) `fix: sanitize OneCLI agent identifiers` | CopyPasteFail | **修复 OneCLI 集成阻断性故障**：将 `ag_f835cf929923` 格式的下划线 ID 转换为连字符，解决容器启动时"Not logged in"凭证获取失败。关闭关联 Issue #2046 | ✅ 已合并 |
| [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) `fix(host-sweep): reopen outbound DB as writable for orphan claim cleanup` | cfis | **修复 host-sweep 周期性崩溃**：PR #2151 引入的 `deleteOrphanProcessingClaims()` 在只读数据库上执行删除导致 `SqliteError`，现重新以可写模式打开 `outDb`。关闭 Issue #2188 | ✅ 已合并 |
| [#2181](https://github.com/qwibitai/nanoclaw/pull/2181) `fix(poll-loop): slash commands silently broken on warm containers` | mnolet | **修复斜杠命令静默失效**：`/clear` 被错误过滤且未确认，其他斜杠命令被误推入消息流。温暖容器状态下所有斜杠命令完全不可用，现已修复 | ✅ 已合并 |
| [#2190](https://github.com/qwibitai/nanoclaw/pull/2190) `fix: Atom フィード link 要素パース` | openclaw-shi | **修复 RSS/Atom 轮询器崩溃**：`fast-xml-parser` 对 YouTube 等 Atom 源的 `<link>` 返回对象而非字符串，`link?.trim()` 触发 `TypeError`。新增 `extractLink()` 统一处理三种格式 | ✅ 已合并 |
| [#2178](https://github.com/qwibitai/nanoclaw/pull/2178) `Andy ops fixes: 10 issues` | blaykeelder1-commits | **运营级综合修复包**：覆盖 agent-browser 故障、Maps 403、Twitter token 缺口、容器 600s 超时、LinkedIn 配额耗尽、邮件发送失败、线索评分停滞、Mahindra 投诉积压、FB 队列阻塞、CLI 自动重启不稳定等 10 个生产痛点 | ✅ 已合并 |
| [#2192](https://github.com/qwibitai/nanoclaw/pull/2192) `Add DeltaChat channel adapter` | axxml | **新增去中心化消息渠道**：DeltaChat 适配器作为 Feature Skill 提交，扩展无手机号依赖的通信选项 | ❌ 已关闭（未合并） |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) `feat: v1 → v2 migration to setup flow` | gabi-simons | **v1 迁移自动化**：`bash nanoclaw.sh` 自动检测 v1 安装并执行代理、消息组、线路、环境密钥等迁移。标记为 experimental，已关闭 | ❌ 已关闭 |

**整体推进评估**：项目昨日在**稳定性基建**上迈出关键一步，修复了 3 个可导致服务中断的系统性缺陷（数据库只写冲突、命令路由断裂、外部 API 解析崩溃），同时 OneCLI 集成和运营工具链的健壮性显著提升。但 DeltaChat 适配器被关闭、v2 安装脚本在 OpenRC 系统上仍失败，显示**平台兼容性与新渠道评审流程**存在瓶颈。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#1017](https://github.com/qwibitai/nanoclaw/issues/1017) `please add percentage to badge in repo-tokens` | 2 评论，0 👍，`good first issue` | **开发者体验微优化**：repo-tokens 的 badge 仅显示分数无百分比，用户需要更直观的 token 消耗可视化。已有配套 PR #2198 提交，属于低门槛高价值 UI 改进 |
| 2 | [#2188](https://github.com/qwibitai/nanoclaw/issues/2188) `host-sweep: "attempt to write a readonly database"` | 1 评论，0 👍，**当日关闭** | **生产稳定性紧急响应**：Issue 与 PR #2183 同日创建同日解决，反映核心贡献者对崩溃级 Bug 的响应机制高效 |
| 3 | [#2046](https://github.com/qwibitai/nanoclaw/issues/2046) `OneCLI agent identifier rejected` | 1 评论，0 👍，**当日关闭** | **迁移兼容性痛点**：v1→v2 迁移中 OneCLI 的标识符校验规则与 NanoClaw 内部格式不一致，用户 dr-pabs 提供了精确修复方案 `.replace(/_/g, '-')` |

**背后诉求洞察**：社区当前最强烈的隐性需求是**"v2 迁移无痛化"**——OneCLI 标识符、sqlite3 依赖检测（#2191）、OpenRC Docker 启动（#2199）等问题集中爆发于迁移场景，说明 v2 安装/迁移路径的**前置校验与错误提示**严重不足，用户被迫在失败中摸索原因。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重等级 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **🔴 P0 - 服务中断** | [#2188](https://github.com/qwibitai/nanoclaw/issues/2188) / [#2196](https://github.com/qwibitai/nanoclaw/issues/2196) | `host-sweep` 每 tick 崩溃：`deleteOrphanProcessingClaims` 在只读 `outbound.db` 上执行删除，导致 `SqliteError`，会话清理完全中断 | [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) | ✅ **已修复并合并** |
| **🔴 P0 - 功能完全失效** | [#2186](https://github.com/qwibitai/nanoclaw/issues/2186) | CLI 渠道 `namespacedPlatformId` 生成 `cli:local`，与路由器期望的 `local` 不匹配，所有 CLI 消息超时无响应 | [#2187](https://github.com/qwibitai/nanoclaw/pull/2187) | 🔄 **PR 待合并** |
| **🟡 P1 - 功能静默失效** | [#2181](https://github.com/qwibitai/nanoclaw/issues/2181)（隐含） | 温暖容器上所有斜杠命令（`/clear`, `/update` 等）静默丢弃，用户无反馈 | [#2181](https://github.com/qwibitai/nanoclaw/pull/2181) | ✅ **已修复并合并** |
| **🟡 P1 - 数据丢失/路由失败** | [#2194](https://github.com/qwibitai/nanoclaw/issues/2194) | WhatsApp LID→phone JID 映射仅存内存，重启后丢失，导致 LID 发送者消息无法路由 | 无 | ❌ **待修复** |
| **🟡 P1 - 配置错误导致静默失败** | [#2193](https://github.com/qwibitai/nanoclaw/issues/2193) | `init-first-agent.ts` 存储 `whatsapp:<jid>` 带前缀，与适配器发出的裸 JID 不匹配，路由完全失败 | 无 | ❌ **待修复** |
| **🟢 P2 - 安装阻断** | [#2199](https://github.com/qwibitai/nanoclaw/issues/2199) | OpenRC 系统（非 systemd）上 Docker 启动失败，安装脚本中止 | 无 | ❌ **待修复** |
| **🟢 P2 - 误导性错误信息** | [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) | `migrate-v2.sh` 未检测 `sqlite3` CLI 缺失，错误报告为 "registered_groups missing" | 无 | ❌ **待修复** |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 需求描述 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#1017](https://github.com/qwibitai/nanoclaw/issues/1017) + [#2198](https://github.com/qwibitai/nanoclaw/pull/2198) | 增强 | repo-tokens badge 显示百分比 | **高** — PR 已提交，`good first issue`，低风险 UI 改进 |
| [#2189](https://github.com/qwibitai/nanoclaw/issues/2189) | 性能优化 | Token 效率优化：减少非编码 agent 的 token 膨胀，提出 5 项具体改进 | **中高** — 作者 mnolet 已展现技术深度（同日提交 #2181 #2182），且成本/节流问题直接影响用户付费意愿 |
| [#2195](https://github.com/qwibitai/nanoclaw/issues/2195) | 功能缺口 | `add-gmail-tool` 多账户支持：OneCLI 仅支持单 OAuth 连接，多 Gmail 用户无文档化路径 | **中** — 涉及 OneCLI 架构限制，可能需要协议层改动或文档 workaround |
| [#2192](https://github.com/qwibitai/nanoclaw/pull/2192) | 新渠道 | DeltaChat 适配器 | **低** — PR 被关闭，可能因代码质量、测试覆盖或路线图优先级不符 |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | 新渠道+配置 | Matrix E2EE +  per-group model/effort 配置 | **中** — 大型 PR 开放一个月未合并，E2EE 复杂度与审查周期是瓶颈 |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) | 集成技能 | Home Assistant MCP 集成 | **中** — 开放逾一个月，IoT 场景扩展性强但需维护者带宽 |
| [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) | 新渠道 | WebChat v1 | **中** — 开放一周，浏览器内嵌聊天是高频需求 |

**路线图信号**：项目正处于 **"稳定性优先于功能扩张"** 阶段。新渠道 PR（DeltaChat 关闭、Matrix 滞留）审查趋严，而性能优化（#2189）和开发者体验（#1017）更易获得快速响应。per-group 配置（#1624）若合并，将成为多租户/多场景部署的关键基础设施。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 场景 | 情绪 |
|:---|:---|:---|
| markhawrylak [#2199](https://github.com/qwibitai/nanoclaw/issues/2199) | "OpenRC Linux 系统，`bash nanoclaw.sh` 失败并中止" | 😤 **沮丧** — 安装脚本硬编码 systemd 假设，非主流发行版用户被排斥 |
| Omee11 [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) | "sqlite3 未安装却报告 registered_groups 缺失，调试浪费数小时" | 😠 **愤怒** — 错误信息严重误导，基础设施依赖未前置校验 |
| mnolet [#2189](https://github.com/qwibitai/nanoclaw/issues/2189) | "token 膨胀降低 agent 性能，有显著成本/节流影响" | 😐 **建设性批评** — 认可项目价值，但指出量化效率问题 |
| alex-shepel [#2186](https://github.com/qwibitai/nanoclaw/issues/2186) | "`pnpm run chat <message>` 连接、发送、无响应、超时" | 😵 **困惑** — 配置看似正确但路由层静默断裂，无诊断信息 |

### 满意点

- **快速修复响应**：yaniv-golan 的 host-sweep 崩溃 Issue #2188 当日获 cfis 修复，dr-pabs 的 OneCLI 问题 #2046 已有预置修复
- **运营问题打包处理**：PR #2178 一次性解决 10 个运营痛点，显示维护者对生产环境的关注

### 不满意点

- **v2 迁移体验脆弱**：错误检测、依赖校验、平台适配三重缺失
- **渠道配置"最后一公里"断裂**：WhatsApp/CLI 的 platform_id 格式不一致导致"配好但不通"
- **文档与实现脱节**：CLAUDE.local.md "自动加载"声称（#2185）与实际行为不符

---

## 8. 待处理积压

### 需维护者优先关注的长期/重要事项

| 条目 | 创建时间 | 最后更新 | 风险描述 |
|:---|:---|:---|:---|
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix E2EE + per-group 配置 | 2026-04-04 | 2026-05-02 | **开放 29 天**。E2EE 是隐私敏感场景的核心需求，per-group model 配置是多租户架构瓶颈。若继续滞留，可能迫使社区 fork 或转向其他矩阵方案 |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) Home Assistant MCP | 2026-03-22 | 2026-05-02 | **开放 42 天**。IoT 集成是 NanoClaw 区别于纯聊天代理的关键差异化场景，竞争对手（Home Assistant 官方 AI 功能）正在加速 |
| [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) WebChat v1 | 2026-04-28 | 2026-05-02 | **开放 5 天**。浏览器内嵌聊天是降低终端用户门槛的最短路径，但需评估与现有 CLI/Web 架构的重复建设 |
| [#1017](https://github.com/qwibitai/nanoclaw/issues/1017) repo-tokens 百分比 badge | 2026-03-13 | 2026-05-02 | **开放 51 天**。虽标记 `good first issue`，但配套 PR #2198 已就绪，仅需审查合并即可改善开发者体验 |

---

*日报生成时间：2026-05-03 | 数据来源：GitHub API / qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-03

---

## 1. 今日速览

NullClaw 今日展现**极高开发活跃度**：20 个 PR 在 24 小时内完成状态变更（18 条已合并/关闭），2 个 PR 待审阅，6 个 Issues 有更新。项目正处于 **Zig 0.16 迁移后的密集修复期**——核心贡献者 vernonstinebaker 主导了网关 socket 层、HTTP 兼容层、Mattermost 通道等关键基础设施的修复，同时 REST Admin API 三大 PR 全部合入主分支，标志着运维管控能力正式成熟。社区侧，低资源设备适配与 CLI 交互体验成为用户反馈焦点。

---

## 2. 版本发布

**无新版本发布。**

> 注：尽管无版本标签，但主分支今日合并了大量高优先级修复（含生产级回归修复），建议维护者考虑发布补丁版本。

---

## 3. 项目进展

### 🔧 核心基础设施：Zig 0.16 迁移修复收官

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#873** | vernonstinebaker | **高严重级回归修复**：解决 Zig 0.16 迁移后 Mattermost 空体 POST 失败 + 网关 accept-loop 100% CPU 空转（`EAGAIN` busy-spin），影响所有守护模式部署 | [PR #873](https://github.com/nullclaw/nullclaw/pull/873) |
| **#872** | vernonstinebaker | 同上问题的并行修复分支 | [PR #872](https://github.com/nullclaw/nullclaw/pull/872) |
| **#877** | vernonstinebaker | 修复 Zig 0.16 `Allocating` Writer 延迟 flush 导致的 Mattermost 请求体为空问题 | [PR #877](https://github.com/nullclaw/nullclaw/pull/877) |
| **#876** | vernonstinebaker | HTTP/1.1 keep-alive 兼容性：将 `readSliceShort` 替换为 `readVec`，解决 curl 客户端二次读取阻塞问题 | [PR #876](https://github.com/nullclaw/nullclaw/pull/876) |
| **#858** | jmylchreest | 移除 `IoNet.Stream` 每调用空 buffer 适配器，直接调用 POSIX read/write，根治网关 socket hang | [PR #858](https://github.com/nullclaw/nullclaw/pull/858) |

### 🛡️ 安全与执行模型升级

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#880** | mark-os | **反欺骗边界**：为 `web_fetch`/`web_search` 输出添加随机 hex 边界 ID + Unicode 同形异义字符折叠 + 标记消毒，防御 LLM 注入伪造外部内容 | [PR #880](https://github.com/nullclaw/nullclaw/pull/880) |
| **#875** | vernonstinebaker | **三层风险分级**：新增"中风险"层级（curl/wget/nc 等网络工具），解决 #167 中 `curl` 即使在监督模式下也无法使用的问题；新增 `block_` 前缀剥离 | [PR #875](https://github.com/nullclaw/nullclaw/pull/875) |

### 🖥️ REST Admin API 完整落地（三阶段）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#770** → **#771** → **#780** | vernonstinebaker | 运行时状态/配置读取/模型列表/定时任务 → 通道状态与技能管理 → 配置变更/MCP 服务/会话管理/记忆 CRUD/历史记录/能力查询。**零新增依赖，二进制增量 < 30 KB** | [PR #770](https://github.com/nullclaw/nullclaw/pull/770) · [PR #771](https://github.com/nullclaw/nullclaw/pull/771) · [PR #780](https://github.com/nullclaw/nullclaw/pull/780) |

### 🚀 并发与交互架构演进

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#855** | manelsen | **会话级抢占**：新消息到达时中断当前 turn，守护进程入站处理从单线程串行改为有界并发；修复 #832 | [PR #855](https://github.com/nullclaw/nullclaw/pull/855) |
| **#863** | manelsen | `nullclaw capabilities` 彩色表格输出 + TTY 自动检测 | [PR #863](https://github.com/nullclaw/nullclaw/pull/863) |

### 🌐 网络与部署

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#850** | manelsen | Tailscale `auth_key` 加密支持，密钥经 NullClaw secrets 管道解密/加密轮转 | [PR #850](https://github.com/nullclaw/nullclaw/pull/850) |
| **#856** | mark-os | 无 RTC 硬件的 SysVinit 可靠性加固，增加 `ntp`/`ntpsec` 启动依赖 | [PR #856](https://github.com/nullclaw/nullclaw/pull/856) |

---

## 4. 社区热点

| 排名 | Issue/PR | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🥇 | **[#820] Debian 安装 Zig 文档** | 4 条评论，跨 Issue 引用 | 新手入门门槛：用户质疑 Docker 是否为必需，反映文档对 Linux 裸机部署覆盖不足。Zig 作为小众语言，系统包管理器支持度差是普遍痛点。 [Issue #820](https://github.com/nullclaw/nullclaw/issues/820) |
| 🥈 | **[#871] web_search 低资源设备不可用** | 2 条评论，标记 `Critical` | **架构级矛盾**：NullClaw 定位"弱、廉价、低资源设备"，但 `web_search` 依赖 Brave Search API（需外部 key）或间接方案，无原生 DuckDuckGo 支持。用户实际在质疑产品核心价值的可实现性。 [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) |
| 🥉 | **[#866] curl POST 失败（allowlist 已配置）** | 1 条评论，1 👍 | 安全策略与功能预期的冲突：用户明确将 curl 加入 allowlist 仍遭拦截，反映安全规则的透明度和调试体验问题。（注：PR #875 的三层分级可能已部分缓解） [Issue #866](https://github.com/nullclaw/nullclaw/issues/866) |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Critical** | 网关 accept-loop 100% CPU（Zig 0.16 `EAGAIN` busy-spin） | **已修复** | #873, #872 | 所有守护模式部署，全平台 | [PR #873](https://github.com/nullclaw/nullclaw/pull/873) |
| 🔴 **Critical** | Mattermost 空体 POST 导致静默消息失败 | **已修复** | #873, #877 | 所有 Mattermost 连接代理 | [PR #877](https://github.com/nullclaw/nullclaw/pull/877) |
| 🟡 **High** | HTTP/1.1 keep-alive 客户端二次读取阻塞 | **已修复** | #876 | curl 等长连接客户端 | [PR #876](https://github.com/nullclaw/nullclaw/pull/876) |
| 🟡 **High** | 网关 socket hang（Zig 0.16 `IoNet.Stream` 适配器缺陷） | **已修复** | #858 | 所有网络 I/O 路径 | [PR #858](https://github.com/nullclaw/nullclaw/pull/858) |
| 🟡 **High** | `thread.sleep` 未真正挂起 OS 线程（POSIX 协作式 yield） | **待审** | #878 | gateway accept loop 退避轮询效率 | [PR #878](https://github.com/nullclaw/nullclaw/pull/878) |
| 🟢 **Medium** | CLI 方向键输出 CTRL 字符垃圾 | **开放** | 无 | 交互式终端用户体验 | [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) |
| 🟢 **Medium** | curl POST 失败（allowlist 配置后仍拦截） | **开放** | #875（可能相关） | 工具调用权限边界 | [Issue #866](https://github.com/nullclaw/nullclaw/issues/866) |

> **风险评估**：Zig 0.16 迁移引入的生产级回归已全部修复，但 #878 的 `nanosleep` 替换若合并，建议配合压力测试验证定时精度。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 与现有 PR 关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **#871** | 原生 DuckDuckGo 支持，摆脱 API key 依赖 | 无直接 PR；#880 强化了 web 内容安全边界，但未解决数据源问题 | ⭐⭐⭐ **高** — 与项目核心定位（低资源设备）直接冲突，预计下一版本优先处理 |
| **#832**（已关闭） | 并发/非阻塞交互性 | #855 已实现会话抢占 + 有界并发 | ✅ **已解决** |
| **#860**（已关闭） | `capabilities` 输出格式化 | #863 已实现彩色表格 + TTY 检测 | ✅ **已解决** |
| **#881**（开放） | 移除运行时 curl 子进程，全面转向 `std.http` | 大规模重构，涉及 providers/channels/gateway/tools/memory/voice/SSE | ⭐⭐⭐ **高** — 架构债务清理，与 #871 的低资源目标协同 |

**路线图信号**：项目正从"功能扩展期"转入"架构精炼期"——#881 的去 curl 化、#871 的原生搜索、以及持续的 Zig 标准库深度整合，表明团队在追求**零外部依赖的单一静态二进制**目标。

---

## 7. 用户反馈摘要

### 😣 痛点
- **入门门槛**："[Debian 上怎么装 Zig？真的需要 Docker 吗？](#820)" — 文档对裸机 Linux 覆盖不足，Zig 生态小众加剧问题
- **资源悖论**："web_search 在弱廉价设备上不实用" — 核心卖点与实际体验存在落差，API key 依赖违背"低资源"初衷
- **调试黑箱**：curl 已加 allowlist 仍失败，安全策略的决策逻辑对用户不可见
- **终端体验**：方向键失效，CLI 的 readline/libedit 集成存在缺陷

### 😊 满意点
- REST Admin API 的渐进式交付（#770→#771→#780）获得隐性认可——无破坏性变更、零依赖、小体积增量
- 安全加固（#880 反欺骗、#875 风险分级）显示团队对 LLM 攻击面的主动防御意识

### 🎯 使用场景洞察
- **边缘/嵌入式部署**：无 RTC 硬件、Tailscale 内网穿透、SysVinit 兼容性 — 用户确实在"非标准环境"运行
- **多模态工作负载**：#687 的 body size 配置、#686 的 A2A image 支持 — 有用户尝试突破纯文本代理边界

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#820** Debian Zig 安装文档 | 2026-04-14 | 2026-05-02 | **19 天** | 新手流失风险；有 4 条评论表明持续困扰 | [Issue #820](https://github.com/nullclaw/nullclaw/issues/820) |
| **#878** `nanosleep` POSIX 线程挂起 | 2026-04-30 | 2026-05-02 | 3 天 | **待审 PR** — 影响网关资源效率，建议优先审阅 | [PR #878](https://github.com/nullclaw/nullclaw/pull/878) |
| **#881** 移除运行时 curl 子进程 | 2026-05-01 | 2026-05-02 | 2 天 | **待审 PR** — 架构级重构，影响面广但长期价值高 | [PR #881](https://github.com/nullclaw/nullclaw/pull/881) |
| **#871** 原生 DuckDuckGo 支持 | 2026-04-25 | 2026-05-02 | **8 天** | 标记 Critical，与产品定位直接相关，尚无 maintainer 响应 | [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) |
| **#865** CLI 方向键 CTRL 字符 | 2026-04-23 | 2026-05-02 | **10 天** | 交互体验基础缺陷，评论数少但影响每位终端用户 | [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) |
| **#866** curl POST allowlist 失效 | 2026-04-23 | 2026-05-02 | **10 天** | 1 👍 表明非孤立问题；需验证 #875 是否完全覆盖 | [Issue #866](https://github.com/nullclaw/nullclaw/issues/866) |

> **维护者行动建议**：#871 的 Critical 标签与产品定位冲突值得召开设计讨论；#820 的文档债建议指定"good first issue"标签吸引社区贡献。

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-05-02 00:00 UTC 至 2026-05-03 00:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-03

---

## 1. 今日速览

IronClaw 今日呈现**极高活跃度**：24小时内 Issues 更新 20 条（16 活跃/新开，4 关闭），PR 更新 47 条（41 待合并，6 已合并/关闭），无新版本发布。项目核心驱动力来自两方面：一是 **"Reborn" 架构重构进入密集设计期**，serrrfirat 单日批量创建 8 个架构追踪 Issue，系统定义 TurnCoordinator、TurnRunner、会话绑定等核心抽象；二是 **新贡献者 abbyshekit 爆发式输出**，单日提交 11 个 PR，覆盖 CLI 工具链、NEAR 生态集成、UI 修复等多个维度。社区参与广度显著，但 PR 合并率偏低（12.8%），需关注 review 瓶颈。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#3105](https://github.com/nearai/ironclaw/pull/3105) | ek775 | **WASM 通道回退机制** — 修复 headless 服务器（如 Ubuntu + Ollama）上 Telegram 轮询启动失败问题，通过 `ironclaw onboard` 的通道激活逻辑增加 WASM 通道回退。已关闭。 |
| [#3144](https://github.com/nearai/ironclaw/issues/3144) | serrrfirat | **资源上限强制机制落地** — `EnforceResourceCeiling` 从"永久失败关闭"状态接入实际运行时/沙箱执行，Reborn 安全基座关键一步。Issue 关闭。 |
| [#3147](https://github.com/nearai/ironclaw/issues/3147) | serrrfirat | **审计记录生产化** — 内置义务处理器的 audit-before/audit-after 记录接入生产事件接收端，验证元数据-only 约束。Issue 关闭。 |
| [#3145](https://github.com/nearai/ironclaw/issues/3145) | serrrfirat | **后台进程义务生命周期定义** — 明确 `CapabilityHost::spawn_json` 移交效果至 `ProcessManager` 后的义务协调机制，Sandcastle 组件关键设计。Issue 关闭。 |
| [#2818](https://github.com/nearai/ironclaw/issues/2818) | thisisjoshford | **v0.26.0 Linux 安装器修复** — `x86_64-unknown-linux-gnu` 平台安装失败问题已解决。Issue 关闭。 |

### 架构里程碑：Reborn 设计全面展开

serrrfirat 今日创建 **8 个关联架构 Issue**，形成完整的 Turn 系统追踪矩阵：

```
#2987 (Parent) → #3031 (Product) → #3013 (TurnCoordinator)
                                    ↓
                              #3193 (Conversation Binding)
                                    ↓
                              #3195 (ironclaw_turns crate)
                                    ↓
                              #3198 (Public API) → #3199 (TurnRunner)
                                    ↓
                              #3202 (Persistence/Locks) → #3204 (Transcript Storage)
                                    ↓
                              #3016 (AgentLoopHost facade), #3107 (AgentLoopDriver)
```

这标志着 Reborn 从"概念验证"进入**精确定义阶段**，核心抽象（TurnCoordinator 作为线程/回合准入的宿主层服务）已具备可实施边界。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#3016](https://github.com/nearai/ironclaw/issues/3016) [Reborn] AgentLoopHost facade | 3 评论 | **架构一致性** — 要求明确 Reborn 切换后旧有 AgentLoop 的兼容层形态，避免产品层断裂 |
| 2 | [#90](https://github.com/nearai/ironclaw/issues/90) Audio Pipeline (STT/TTS) | 2 评论 | **功能对等** — WhatsApp 语音消息刚需，跨渠道基础设施层长期悬置（创建于 2026-02-14，已积压 78 天） |
| 3 | [#3013](https://github.com/nearai/ironclaw/issues/3013) TurnCoordinator | 1 评论 | **执行模型确定性** — 单活跃运行强制、并发回合准入控制的精确语义 |

### 热点分析

- **#3016 成为 Reborn 架构的"罗塞塔石碑"**：所有后续设计（#3193-#3204）都依赖其 facade 定义，3 条评论集中在"reference 实现 vs. 抽象接口"的边界争议
- **#90 Audio Pipeline 的 P1-P2 优先级与实际资源投入错配**：标记为 STT 前置依赖，但近 3 个月无 dedicated PR，反映**跨渠道基础设施**在 feature-driven 开发中的系统性低估

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 详情 |
|:---|:---|:---|:---|
| **P1 — 生产阻塞** | [#3214](https://github.com/nearai/ironclaw/issues/3214) / [#3215](https://github.com/nearai/ironclaw/pull/3215) | **Fix PR 已提交，待合并** | Gemini 3.x 模型 `thoughtSignature` 在 Cloud Code SSE 处理器中被丢弃，导致 `INVALID_ARGUMENT` 错误。前两次修复（#1565、#1752）仅覆盖请求构建层，未触及 SSE 解析层。**根因：修复层级不完整** |
| P2 — 功能损坏 | [#3201](https://github.com/nearai/ironclaw/issues/3201) | 开放，无 Fix PR | DeepSeek `deepseek-v4-flash` 工具调用完全失效，本地复现确认 |
| P2 — 功能损坏 | [#2344](https://github.com/nearai/ironclaw/issues/2344) | 开放，1 评论 | Staging Web UI 页面加载时 TypeError、ReferenceError、CSP 违规三重错误，影响 QA 流程 |
| P2 — 用户体验 | [#3083](https://github.com/nearai/ironclaw/issues/3083) / [#3209](https://github.com/nearai/ironclaw/pull/3209) | **Fix PR 已提交，待合并** | 用户管理创建表单无防抖，快速三连击产生重复用户记录（"Ekiko" 案例：3 条不同 ID） |
| P2 — 可观测性 | [#3011](https://github.com/nearai/ironclaw/issues/3011) / [#3216](https://github.com/nearai/ironclaw/pull/3216) | **Fix PR 已提交，待合并** | `ironclaw run` stderr 零字节输出，SSE 日志流正常但 systemd/CloudWatch 无法采集，**生产环境监控盲区** |
| P2 — 数据完整性 | [#3132](https://github.com/nearai/ironclaw/issues/3132) / [#3206](https://github.com/nearai/ironclaw/pull/3206) | **Fix PR 已提交，待合并** | LLM 将数值参数序列化为字符串，`strict_u64` 拒绝非 Number 值，导致 DeepSeek/Kimi/部分 Gemini 工具调用失败 |

### 关键模式

> **"修复的修复"反模式**：#3214 是第三次修复同一问题，暴露 IronClaw 的 **SSE/流式处理层缺乏回归测试覆盖**。建议建立"端到端模型兼容性矩阵"作为 CI 门禁。

---

## 6. 功能请求与路线图信号

### 用户/贡献者驱动的新功能

| 功能 | 来源 | 成熟度判断 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **ARM64 Docker 镜像** | [#3168](https://github.com/nearai/ironclaw/issues/3168) / [#3208](https://github.com/nearai/ironclaw/pull/3208) | Fix PR 已提交，技术障碍已清除（Cranelift 原生支持 aarch64） | **高** — 纯 CI 矩阵扩展，风险低 |
| **CLI 备份/恢复闭环** | [#3178](https://github.com/nearai/ironclaw/pull/3178) + [#3186](https://github.com/nearai/ironclaw/pull/3186) | 双 PR 形成完整用户故事：`backup --quick` → `import backup` | **高** — 迁移场景刚需，abbyshekit 连续交付 |
| **CLI 使用分析 (`insights`)** | [#3177](https://github.com/nearai/ironclaw/pull/3177) | 对标 Hermes `hermes insights`，聚合现有表数据，无 schema 变更风险 | **中高** — DB MIGRATION 标签需 review，但只读查询 |
| **Magic-link 邀请 onboarding** | [#3187](https://github.com/nearai/ironclaw/pull/3187) | V27 schema + 双数据库迁移，admin 管控流程完整 | **中** — 涉及 auth 流程，需安全 review |
| **NEAR Intents 交易代理** | [#3207](https://github.com/nearai/ironclaw/pull/3207) + [#3211](https://github.com/nearai/ironclaw/pull/3211) + [#3218](https://github.com/nearai/ironclaw/pull/3218) | 三层架构：基础回测 → 付费研究层 → 试用模式，生态绑定深 | **中** — 战略级功能，但 XL size 需分阶段合并 |
| **原生 `autoverify` 验证** | [#3189](https://github.com/nearai/ironclaw/pull/3189) | 自主工作证明机制，含 git_head 审计硬化 | **中** — 开发者体验创新，但依赖 `.ironclaw-verify.json` 生态采纳 |
| **Reborn 事件投影服务** | [#3212](https://github.com/nearai/ironclaw/pull/3212) | zmanian 核心贡献，从 `DurableEventLog` 派生 `ThreadTimeline`、`RunStatusProjection` | **高** — Reborn 基础设施关键组件，core contributor 背书 |

### 路线图信号

- **CLI 工具链成为新贡献者入口**：abbyshekit 的 11 个 PR 中 7 个聚焦 CLI，显示项目正从"框架/内核"向"开发者体验"扩展
- **NEAR 生态深度集成**：3 个 XL 级 PR 构建交易代理栈，暗示 IronClaw 可能从"通用 AI 代理框架"向"NEAR 优先的智能代理基础设施"战略倾斜

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #3214 报告者 thomasmaerz | **"修复了两次的问题仍在生产复发"** | Gemini 3.x 工具调用随机失败，影响 Cloud Code 用户体验，信任损耗 |
| #3083 原始报告 | **"三连击产生三个 Ekiko"** | 管理员快速操作 UI 无反馈，数据清理负担 |
| #3011 隐含场景 | **"SSE 日志看得见，systemd 日志看不见"** | headless 部署（服务器、容器）运维盲区，与本地开发体验分裂 |
| #2963 / #3217 报告者 magnusviri | **"文档说 `nearai/ironclaw`，实际拉取失败"** | 新手 onboarding 摩擦，Docker Hub 命名空间不一致 |
| #3035 / #3213 | **"我叫 Bobby，但 AI 坚持叫自己 IronClaw"** | 品牌定制场景（企业部署、白标）identity 覆盖失效 |

### 满意点

- **备份/恢复闭环**：社区明确呼吁"scp 迁移"场景，`ironclaw backup --quick` 设计响应直接
- **WASM 通道回退**：headless + Ollama 个人部署场景得到关注（#3105）

---

## 8. 待处理积压

### 需维护者优先关注

| Issue/PR | 创建时间 | 积压天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#90](https://github.com/nearai/ironclaw/issues/90) Audio Pipeline | 2026-02-14 | **78 天** | WhatsApp 语音功能阻塞，竞品功能对等压力 | 分配 dedicated owner，或明确从 P1-P2 降级并公告 |
| [#2344](https://github.com/nearai/ironclaw/issues/2344) Staging Web UI 错误 | 2026-04-11 | 22 天 | QA 流程污染，CSP 违规可能隐含安全策略漂移 | 指派 frontend owner，关联 #2683、#2599 重构影响评估 |
| [#2700](https://github.com/nearai/ironclaw/pull/2700) 描述性聊天标题 | 2026-04-20 | 13 天 | XL size + medium risk + DB MIGRATION，涉及 5 个 scope | 协调 zmanian（author）与 core team 的 review 资源，避免成为"永久开放"PR |
| [#3169](https://github.com/nearai/ironclaw/issues/3169) 并发后台扇出运行时 ID | 2026-05-01 | 2 天 | 设计债务：#3161 的故意限制可能成为 Reborn 扩展瓶颈 | 在 #3013/#3199 设计阶段同步纳入，避免后期重构 |

### Review 瓶颈预警

> **41 个待合并 PR** 中，abbyshekit 贡献占 **26 个（63%）**，且 11 个为今日新提交。新贡献者高密度输出与 core team review 带宽的错配，可能导致：
> - 优质 PR 滞留，贡献者流失
> - 紧急 fix（如 #3215 Gemini 修复）被淹没
> 
> **建议**：建立 PR triage 轮值，按 `risk: high/medium/low` + `size` 分级 SLA；考虑将 abbyshekit 晋升为 trusted contributor，授予特定 scope 的合并权限。

---

*日报生成时间：2026-05-03 | 数据来源：GitHub API 快照 | 项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-03

---

## 1. 今日速览

LobsterAI 今日活跃度**偏低**，代码层面无实质性合并进展。过去24小时内4条 PR 均处于**待合并状态**，无新 Issue 产生，无版本发布。社区贡献以**配置同步修复**和**模型渠道扩展**为主，但 PR 审核节奏明显放缓——#813 和 #1191 已标记为 `stale` 却仍在更新，提示维护资源可能存在瓶颈。整体项目处于**维护性迭代**阶段，缺乏突破性进展信号。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并/关闭的 PR**，全部4条 PR 处于开放待审状态：

| PR | 方向 | 进展评估 |
|:---|:---|:---|
| #1879 | 修复配置同步时手动插件路径丢失 | **新提交**，解决用户安装社区插件后配置被覆盖的痛点 |
| #813 | 小米渠道新增 MiMo V2 Pro/Omni 模型 | **停滞2月+**，3月25日创建，今日有更新但状态仍为 stale |
| #1181 | 隐藏 OpenClaw 主代理会话避免用户混淆 | **月级停滞**，4月1日创建，内部心跳会话暴露问题待修复 |
| #1191 | 定时任务通知渠道过滤与显示修复 | **停滞2月+**，企业级通知场景体验缺陷待解决 |

**整体推进度：低**。无代码合入主分支，功能交付延迟。

---

## 4. 社区热点

今日无活跃讨论（0 Issue，所有 PR 评论数为 `undefined` 即零评论）。**值得关注的沉默信号**：

- **#1879** [netease-youdao/LobsterAI/pull/1879](https://github.com/netease-youdao/LobsterAI/pull/1879) — 配置同步覆盖手动路径问题直接关联**插件生态扩展性**，零评论可能反映：
  - 该问题复现路径明确，无需讨论即可 review
  - 或社区对 OpenClaw 插件机制参与度有限

- **#813** [netease-youdao/LobsterAI/pull/813](https://github.com/netease-youdao/LobsterAI/pull/813) — 小米模型渠道更新，stale 标签与持续更新的矛盾暗示**维护者注意力分散**

---

## 5. Bug 与稳定性

| 级别 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔶 **中** | 手动添加的插件加载路径在配置同步时被静默丢弃 | #1879 | #1879 | **待审** |
| 🔶 **中** | OpenClaw 主代理会话（`[OpenClaw]`）暴露于用户会话列表，造成困惑 | #1181 | #1181 | **月级待审** |
| 🔶 **中** | 定时任务通知渠道过滤错误：POPO/企业微信不显示、微信被误标"不支持"、显示技术编码 | #1191 | #1191 | **月级待审** |

**无高严重性崩溃或安全漏洞报告**，但3个待审 PR 均涉及**生产环境可用性缺陷**，合并延迟累积用户摩擦。

---

## 6. 功能请求与路线图信号

**显性需求（来自 PR 而非 Issue）**：

| 需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| 小米 MiMo V2 Pro / Omni 多模态模型支持 | #813 | ⭐⭐⭐ 高 | 头部厂商模型跟进，通常属 P1 优先级，但 stale 状态异常 |
| 插件生态扩展（社区插件安装路径持久化） | #1879 | ⭐⭐⭐ 高 | 直接影响 OpenClaw 插件市场可用性，架构层面关键修复 |
| 企业通知渠道完善（POPO/企业微信/微信） | #1191 | ⭐⭐☆ 中 | 企业场景刚需，但涉及平台注册表重构，review 复杂度较高 |
| 内部系统会话隔离（Cowork 隐藏机制） | #1181 | ⭐⭐☆ 中 | 用户体验优化，技术债务清理 |

**路线图推断**：项目正从**功能扩张期**转向**稳定性治理期**，PR 集中在配置可靠性、渠道扩展、界面净化三类，未见 Agent 架构或 RAG 等核心能力迭代。

---

## 7. 用户反馈摘要

**今日无新增 Issue 评论可供提炼**，但从 PR 描述反推**已暴露的痛点**：

| 痛点场景 | 来源 | 严重程度 |
|:---|:---|:---|
| "运行 `pm install` 安装社区插件（如 memory-lancedb-pro）后，配置同步时路径丢失，插件失效" | #1879 | 阻断插件采用 |
| "定时任务里找不到已启用的 POPO/企业微信，微信明明能用却显示'暂不支持'" | #1191 | 企业工作流断裂 |
| "会话列表里突然冒出 `[OpenClaw]`，不知道是什么也不敢删" | #1181 | 信任损耗 |
| "小米新出的多模态模型在列表里找不到" | #813 | 竞争力滞后 |

**满意度缺口**：配置系统的**可预测性**和**企业集成的完整性**是主要短板，用户被迫与"静默覆盖""编码暴露""渠道缺失"等粗糙体验共存。

---

## 8. 待处理积压

| PR | 创建日期 | 最后更新 | 停滞天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|:---|
| #813 | 2026-03-25 | 2026-05-02 | **38天** | stale 标签与实际更新并存，可能因 rebase/冲突反复 | 维护者确认是否需要拆分模型元数据更新与配置逻辑 |
| #1191 | 2026-04-01 | 2026-05-02 | **32天** | 企业通知场景，用户可能已本地 workaround | 优先 review，涉及平台注册表重构需架构师介入 |
| #1181 | 2026-04-01 | 2026-05-02 | **32天** | 数据库 schema 变更（`hidden` 列），需迁移策略 | 评估与现有会话查询的兼容性，安排 QA 回归 |

**维护者提醒**：3条 stale PR 均在今日有更新动作，疑似贡献者主动推动，但无维护者响应。建议：
1. 明确 stale 标签的自动/手动策略，避免信号混乱
2. #1879 作为新提交可快速 review 合并，释放配置同步修复价值

---

*日报基于 GitHub 公开数据生成，未包含私有仓库或内部沟通信息。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-03

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-03  
> **分析周期**: 过去 24 小时（2026-05-02 至 2026-05-03）

---

## 1. 今日速览

Moltis 今日保持**中等活跃度**，社区共产生 **4 条 Issues**（全部新建，0 关闭）和 **3 条 PR**（2 条待合并、1 条关闭）。核心开发持续推进：sandbox 多后端架构（[#942](https://github.com/moltis-org/moltis/pull/942)）和 Matrix OIDC 调试能力（[#957](https://github.com/moltis-org/moltis/pull/957)）进入收尾阶段，同时 i18n 本地化取得实质进展——繁体中文支持（[#339](https://github.com/moltis-org/moltis/pull/339)）已合并。值得注意的是，社区开始出现**跨项目协作信号**（SwarmScore 信任体系提案），以及围绕 DeepSeek 推理内容传递的**生产级 Bug 报告**，显示项目用户规模正在扩大。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| PR | 作者 | 说明 | 项目推进度 |
|:---|:---|:---|:---|
| [#339](https://github.com/moltis-org/moltis/pull/339) feat(i18n): add zh-TW Traditional Chinese locale support | [PeterDaveHello](https://github.com/PeterDaveHello) | 完整引入繁体中文（台湾）本地化，覆盖 macOS 与 Web 双端，含 UI 字符串、区域检测及语言选择功能 | ⭐⭐⭐ **中等** — 扩展亚太用户基础，完善国际化基础设施 |

**技术细节**: 该 PR 补充了关键页面的翻译文件，并更新 locale 检测逻辑，为后续多语言扩展建立模板。

### 🔄 待合并 PR（进入审查后期）

| PR | 作者 | 核心能力 | 状态评估 |
|:---|:---|:---|:---|
| [#942](https://github.com/moltis-org/moltis/pull/942) feat(sandbox): remote & multi-backend sandbox support | [penso](https://github.com/penso) | 支持 Vercel/Daytona/Firecracker 远程沙箱，解决云部署场景 Docker-in-Docker 不可用痛点 | 🔥 **高优先级** — 架构级扩展，直接影响企业部署可行性 |
| [#957](https://github.com/moltis-org/moltis/pull/957) fix(matrix): add debug logging for OIDC registration and deduplicate redirect normalization | [penso](https://github.com/penso) | 增强 Matrix OIDC 注册流的可观测性，消除 `invalid_redirect_uri` 诊断盲区；重构消除代码重复 | 🔧 **稳定性加固** — 运维体验提升，技术债务清理 |

---

## 4. 社区热点

### 最热讨论：跨项目协作提案 — SwarmScore 信任体系

| 指标 | 数据 |
|:---|:---|
| **Issue** | [#960](https://github.com/moltis-org/moltis/issues/960) Add SwarmScore — Portable Trust Rating for AI Agents |
| **作者** | [bkauto3](https://github.com/bkauto3) |
| **互动** | 新建，0 评论，0 👍 |

**诉求分析**: 这是今日最具**战略信号**的议题。提案方将 Moltis 定位为"自主智能体或智能体框架"，建议集成 SwarmScore——一种基于**可验证执行历史**（交易量、成功率）构建的便携式信任评级系统。这反映出：

- **外部认知**: 社区已将 Moltis 视为 Agent 基础设施层，而非单纯聊天工具
- **需求趋势**: 多 Agent 协作场景下，身份验证与声誉机制成为刚需
- **生态位机会**: Moltis 若提前布局信任层，可在 Agent 互操作标准中占据先机

> ⚠️ **建议维护者回应**: 该 Issue 尚未获得任何官方反馈，长期沉默可能错失生态建设窗口。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#959](https://github.com/moltis-org/moltis/issues/959) DeepSeek - Error: The reasoning_content in the thinking mode must be passed back to the API | **生产阻塞** | 🆕 新建，无 fix PR | DeepSeek API 用户，thinking 模式场景 |
| 🟡 **P2** | [#958](https://github.com/moltis-org/moltis/issues/958) Voice Services > Local TTS Provider Setup - 文档链接指向已归档仓库 | **文档过期** | 🆕 新建，无 fix PR | 本地 TTS 自托管用户 |

### #959 深度分析

**[bug] DeepSeek reasoning_content 回传失败**

- **触发条件**: 使用 DeepSeek 模型的 thinking/reasoning 模式时，API 要求将推理内容完整回传，但 Moltis 未正确处理该字段
- **用户影响**: 直接导致对话中断，功能完全不可用
- **紧迫性**: DeepSeek 是近期增长最快的模型提供商之一，该 Bug 阻碍核心对话能力

> 🔧 **建议**: 需紧急评估是否为 provider 层字段映射遗漏，或需更新 `@ai-sdk/deepseek` 依赖。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性 | 与现有 PR 关联 |
|:---|:---|:---|:---|
| [#956](https://github.com/moltis-org/moltis/issues/956) Add image generation support (gpt-image-2) via OpenAI Codex OAuth | **增强** | ⭐⭐⭐⭐ **高** | 与 [#942](https://github.com/moltis-org/moltis/pull/942) sandbox 架构协同——图像生成通常需沙箱隔离执行 |
| [#960](https://github.com/moltis-org/moltis/issues/960) SwarmScore 信任评级 | **生态/架构** | ⭐⭐⭐ **中** | 无直接关联，但涉及 Agent 身份体系，需长期设计 |

### #956 技术预判

**gpt-image-2 + Codex OAuth 集成请求**

- **时机敏感**: OpenAI 刚发布 gpt-image-2，社区快速跟进显示用户技术嗅觉敏锐
- **实现路径**: 需扩展 OAuth provider 支持 Codex scope，并新增 image generation tool
- **与 sandbox 协同**: 图像生成涉及文件系统操作，[#942](https://github.com/moltis-org/moltis/pull/942) 的多后端沙箱可为不同部署环境提供安全执行层

> **路线图信号**: 若 [#942](https://github.com/moltis-org/moltis/pull/942) 合并，建议优先评估 #956，形成"安全代码执行 → 安全媒体生成"的能力闭环。

---

## 7. 用户反馈摘要

### 从 Issues 提炼的真实痛点

| 痛点 | 来源 | 用户场景 |
|:---|:---|:---|
| **DeepSeek 推理模式不可用** | [#959](https://github.com/moltis-org/moltis/issues/959) | 依赖 DeepSeek 低成本推理能力的开发者，无法在生产环境使用 thinking 模式 |
| **文档维护滞后于生态变化** | [#958](https://github.com/moltis-org/moltis/issues/958) | 自托管用户按官方文档配置 Coqui TTS，却发现项目已归档，浪费配置时间 |
| **云部署沙箱能力缺失** | [#942](https://github.com/moltis-org/moltis/pull/942) 背景讨论 | DigitalOcean 1-click/Fly.io/Render 用户因 Docker-in-Docker 限制，无法使用代码执行功能 |

### 满意度信号

- ✅ **i18n 积极响应**: 繁体中文 PR 从提交到合并约 2 个月，显示社区本地化贡献受重视
- ⚠️ **文档债务累积**: TTS 文档问题反映维护团队对周边生态（语音模块）关注度下降

---

## 8. 待处理积压

> 以下 Issue/PR 已超过合理响应周期，需维护者介入：

| 项目 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#960](https://github.com/moltis-org/moltis/issues/960) SwarmScore 提案 | 2026-05-02 | 0 评论，0 官方回应 | **生态合作窗口期有限**，竞品项目可能抢先集成 |
| [#959](https://github.com/moltis-org/moltis/issues/959) DeepSeek Bug | 2026-05-02 | 无 fix PR，无维护者分配 | **生产阻塞级**，影响模型 provider 覆盖率 |
| [#942](https://github.com/moltis-org/moltis/pull/942) Sandbox 多后端 | 2026-04-30 | 待合并，最后更新 05-02 | 架构级 PR，审查周期合理，但建议明确合并时间表 |

---

## 附录：今日数据总览

| 指标 | 数值 |
|:---|:---|
| 新建 Issues | 4 |
| 关闭 Issues | 0 |
| 待合并 PR | 2 |
| 已合并/关闭 PR | 1 |
| 新版本 | 0 |
| 社区评论总数 | 1（集中在 #959）|

---

*本报告基于公开 GitHub 数据生成，不代表项目官方立场。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-03

> **项目**: agentscope-ai/CoPaw (QwenPaw)  
> **日期**: 2026-05-03  
> **数据周期**: 过去24小时

---

## 1. 今日速览

CoPaw 社区今日呈现**高活跃度但零合并**的状态：14 条 Issues 全部为新开/活跃，6 条 PR 均待合并，无版本发布。这表明项目处于**密集需求输入期**，但代码集成管道存在明显瓶颈——所有贡献均堆积在审查队列中。值得关注的是，4 条 Issue 围绕"模型回退/降级"功能形成需求共振，而 MCP 相关稳定性问题（#3640、#3997）持续发酵，可能影响生产环境可靠性。首次贡献者活跃度高（4/6 PR），社区生态健康，但维护者响应速度需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日合并/关闭的 PR：0 条**

全部 6 条 PR 处于待合并状态，项目代码层面**无实质推进**。以下为待审 PR 的关键价值分析：

| PR | 贡献者 | 价值 | 状态 |
|:---|:---|:---|:---|
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) | gvaiis | **高** — 修复长期记忆核心 Bug（#3182、#3828），新增 MemoryHook 长期记忆增强，对标 OpenClaw 插件生态 | 待合并 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | Jailtonfonseca | 中 — 巴西葡萄牙语国际化，拓展拉美市场 | 待合并 |
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) | JingHou1215 | 中 — CLI 技能测试工具，提升开发者体验 | 待合并 |
| [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) | hllqkb | 中 — WSL2 网络超时文档修复，降低 Windows 开发者门槛 | 待合并 |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | no-teasy | 低-中 — 向量模型连接测试 | Under Review（8天） |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | energyd | 低-中 — Discord 线程隔离定时任务输出 | Under Review（16天） |

**阻塞信号**：#4007 作为核心功能修复+增强，积压超过 24 小时未合并，可能影响用户对长期记忆功能的信任。

---

## 4. 社区热点

### 🔥 最高讨论热度：MCP 客户端假死 Bug（[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)）
- **6 条评论**，创建 12 天持续活跃
- **核心诉求**：生产环境稳定性。用户报告 Agent 在执行任务后"无响应但不报错"，钉钉/微信渠道失效但 Console 正常，指向 MCP 内部 TaskGroup 异常
- **风险等级**：🔴 **高** — 假死比崩溃更难排查，且影响多端渠道

### 🔥 功能需求共振：模型回退/降级（3 条关联 Issue）
| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) | 5 | 自动处理速率限制和服务中断的模型降级链 |
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | 1 | 主模型不可用时启用备用模型 |
| [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789) | 1 | 可选备用模型的 UI 配置界面 |

**趋势判断**：用户对 LLM 服务不可靠性的焦虑已形成明确的产品需求，建议维护者将"模型弹性"纳入官方路线图。

### 其他高关注
- [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006)（2 评论）：MiniMax 等国产 OpenAI 兼容厂商的 reasoning_content 未过滤，导致输出污染
- [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991)（2 评论）：Ollama 渠道上下文丢失，本地部署体验断裂

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | MCP client TaskGroup 异常导致 Agent 假死 | 生产环境多端渠道 | ❌ 无 |
| 🟡 **P1** | [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | OpenAI-Compatible Provider 未过滤 reasoning_content | MiniMax 等国产 API 用户 | ❌ 无 |
| 🟡 **P1** | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama 渠道无法携带对话历史，记忆丢失 | 本地部署用户 | ❌ 无 |
| 🟡 **P1** | [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) | MCP 客户端 timeout 硬编码 30s 无法配置 | 长耗时 MCP 工具用户 | ❌ 无 |
| 🟢 **P2** | [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003) | Apple Silicon 上 subprocess 错误走 Rosetta (i386) | Ollama 本地用户 | ❌ 无 |

**稳定性评估**：MCP 子系统存在系统性脆弱性（2 个 P0/P1 Bug），且与核心 Agent 生命周期耦合，建议优先投入维护资源。

---

## 6. 功能请求与路线图信号

| 功能方向 | 关联 Issue/PR | 需求强度 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| **模型回退/弹性** | #1327, #4011, #3789 | ⭐⭐⭐⭐⭐ 极高（3 Issue 共振） | 🔥 **高** — 社区呼声强烈，建议官方响应 |
| **对话消息管理** | #4001（单条删除）, #4002（可视化共享区域） | ⭐⭐⭐⭐ 高 | 中 — UX 增强，需产品决策 |
| **渠道控制增强** | #4010（飞书/微信打断终止） | ⭐⭐⭐⭐ 高 | 中 — 与 #3640 假死问题相关 |
| **Agent 测评/审计** | #4008（全量聊天记录+测评功能） | ⭐⭐⭐ 中-高 | 中 — 企业用户刚需，但工程量大 |
| **智能上下文压缩** | #4004（auto-derive max_input_length） | ⭐⭐⭐ 中 | 高 — 技术债修复，有明确方案 |
| **语音输入** | #4000（网页版语音输入缺失） | ⭐⭐ 中 | 低 — 明确告知暂不支持即可 |

**关键信号**：[#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) PR 已实现 MemoryHook 长期记忆增强，若合并可部分回应 #4008 的审计需求（完整聊天记录查询）。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型场景 |
|:---|:---|:---|
| **"假死"比崩溃更可怕** | #3640 | 生产环境 Agent 无响应，需人工重启，无日志可追踪 |
| **模型可靠性焦虑** | #1327, #4011, #3789 | 云模型限流/宕机时业务完全中断，无逃生通道 |
| **本地部署"二等公民"体验** | #3991, #4003 | Ollama 上下文丢失、Apple Silicon 架构兼容问题 |
| **配置与行为脱节** | #4004, #3997 | 静态默认值不随模型变化，timeout 被静默丢弃 |

### 😊 满意点
- Console 基础对话功能稳定（#3640 中用户明确提到"Console 可以正常对话"）
- 自查/诊断能力受认可（#3640 中 Agent 能输出自查报告）

### 💡 产品建议
- **同步机制**：微信对话与浏览器操作可视化同步（#4000）——降低多端用户的认知割裂
- **打断控制**：飞书/微信需要"紧急停止"按钮（#4010）——长任务场景的安全诉求

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值项

| 项目 | 创建时间 | 当前状态 | 风险 |
|:---|:---|:---|:---|
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) MCP 假死 | 2026-04-21 | 12 天，6 评论，无维护者介入 | 🔴 **生产阻塞** |
| [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) 模型降级链 | 2026-03-12 | 52 天，5 评论，无官方回应 | 需求持续发酵，用户可能流失至竞品 |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) Discord 线程隔离 | 2026-04-17 | 16 天 Under Review | 社区贡献者体验受损 |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) 向量模型连接测试 | 2026-04-25 | 8 天 Under Review | 中等 |

### 🚨 维护者行动建议

1. **立即响应 #3640**：假死问题直接影响生产可用性，建议 24 小时内维护者复现或请求更多日志
2. **合并 #4007**：长期记忆修复+增强，积压过久将打击贡献者积极性
3. **官方表态模型弹性**：对 #1327/#4011/#3789 统一回应，避免需求碎片化重复提交
4. **建立 Ollama 体验专项**：#3991、#4003、#4004 均指向本地部署体验断裂，需系统性修复

---

> **日报生成依据**：GitHub Issues/PR 公开数据 | **数据截止**：2026-05-02 24:00 UTC+8  
> **项目健康度评分**：⭐⭐⭐☆☆（3/5）— 活跃度高但集成管道阻塞，稳定性问题待解

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-03

## 1. 今日速览

ZeroClaw 今日呈现**高强度开发态势**，50 条 Issues 更新（48 条活跃/新开，仅 2 条关闭）与 36 条 PR 更新（29 条待合并）表明社区正处于 v0.8.0 大版本冲刺期。核心特征为：**Schema V3 迁移进入集成阶段**（PR #6266 明确标记"DO NOT MERGE YET"）、**reasoning_content 相关修复集中爆发**（DeepSeek/Gemini 多轮对话稳定性成为焦点）、以及 **Windows 构建与多实例部署等基础设施问题**获得实质性推进。项目健康度良好，但待合并 PR 积压较高，需关注集成分支协调风险。

---

## 2. 版本发布

**无新版本发布**。v0.7.5 里程碑（Issue #5878）持续跟踪中，v0.7.6 技能系统主题（Issue #6253）已启动规划，v0.8.0 集成分支承载 Schema V3 等破坏性变更。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#6264](https://github.com/zeroclaw-labs/zeroclaw/pull/6264) | xiongzubiao | **修复 Gemini 3.x thoughtSignature 往返丢失**：在 `ToolCall` 结构体新增 `extra_content: Option<Value>` 字段，保留供应商扩展数据 | [#6259](https://github.com/zeroclaw-labs/zeroclaw/issues/6259) |
| [#6242](https://github.com/zeroclaw-labs/zeroclaw/pull/6242) | Audacity88 | **微信渠道本地化**：WeChat iLink 配对、QR 登录等用户输出纳入 Fluent 消息体系，新增 zh-CN 翻译 | - |
| [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) | theonlyhennygod | **渠道 Token 环境变量覆盖**：Slack/Discord/Telegram 支持 `SLACK_BOT_TOKEN` 等标准变量及 `ZEROCLAW_` 前缀变体 | - |
| [#5206](https://github.com/zeroclaw-labs/zeroclaw/pull/5206) | ninenox | **CI 修复**：移除 stale `main.py` 依赖，升级 `rumqttc`，抑制 RUSTSEC-2026-0049 | - |

**里程碑意义**：Gemini 3.x 原生工具调用能力恢复（#6264）解除了一个 S1 级阻断；微信渠道完成国际化合约合规，为亚太用户拓展扫清障碍。

---

## 4. 社区热点

### 高讨论 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **Dream Mode — 周期性记忆整合与反思学习** | 9 | 用户 Svtter 提出"空闲时段轻量级后台进程"概念，要求整合日常记忆、反思交互并更新长期知识结构。标签含 `risk: high`, `priority:p1`，已获 `ApprovedRequest` 状态 | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) |
| 2 | **Shell 沙箱配置阻断 Python 技能模式** | 6 | FINOS CDM 合规技能开发者 Jason Perlow 报告：v0.6.9 默认沙箱阻止所有现实 Python 技能执行，影响 **InvestorClaw** 公开发布计划，多家券商机构关注 | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| 3 | **Kimi 流式调用工具时 API 报错** | 6 | `reasoning_content` 在 assistant tool_calls 中缺失导致 400 Bad Request，S1 级阻断 | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| 4 | **DeepSeek 纯文本 assistant 消息丢失 reasoning_content** | 5 | 多轮对话第二轮起失败，根因是 `chat_messages_to_native()` 转换时丢弃字段 | [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) |

**诉求分析**：社区正从"能跑通单轮对话"向"稳定支撑多轮复杂工作流"演进。reasoning_content 的端到端保真成为国产大模型（DeepSeek/Kimi）适配的核心瓶颈，已触发 3 个关联 Issue + 2 个修复 PR 的集中攻关。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **S0** | 多实例部署默认配置路径硬编码 | `~/.zeroclaw/` 硬编码导致配置隔离失效，存在**数据丢失/安全风险** | 待处理 | [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) |
| **S1** | Telegram 配置加密失效 | `config.json` 加密后 Telegram token 无法工作，完全阻断对话 | 待处理 | [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) |
| **S1** | Kimi 流式工具调用 400 错误 | `reasoning_content` 缺失 | **部分修复**：#6284（兼容层纯文本修复），#6285（上下文压缩保留） | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| **S1** | Bedrock Claude Opus 4-7 temperature 废弃 | 温度字段未设为 optional，模型拒绝请求 | 待处理 | [#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095) |
| **S1** | Slack bot_token 强制配置文件存储 | 环境变量注入导致崩溃，安全合规冲突 | **已修复**：#6287（bot_token 改为 Option） | [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) |
| **S1** | 自定义 HTTP Provider 流式解码错误后挂起 | GPU 占用 50% 但无输出，持续数分钟 | 待复现 | [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) |
| **S2** | Daemon 自启动导致手动运行端口冲突 | systemd 服务与 `zeroclaw daemon` 竞争 42617 端口 | 待处理 | [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) |
| **S2** | 上下文压缩丢弃 reasoning_content | 长对话触发压缩后 DeepSeek 多轮失败 | **已修复**：#6285 | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) |
| **S3** | Windows 完整构建失败 | `zeroclaw-hardware` 编译错误 | **已修复**：#6282（固件包含路径锚定仓库根），#6283（default-run 设置） | [#6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280) |

**关键信号**：今日关闭的 2 个 Issue 均为 S1 级（#6259 Gemini thoughtSignature、#6237 Slack token），显示维护者对阻断性问题响应积极。但 S0 级多实例安全问题 (#5605) 已持续近一个月，需升级优先级。

---

## 6. 功能请求与路线图信号

### 已纳入明确路线图

| 功能 | 目标版本 | 信号强度 | 链接 |
|:---|:---|:---:|:---|
| Schema V3 迁移（配置别名、模型提供者别名、Profile 提升） | **v0.8.0** | ⭐⭐⭐ 集成分支已开 | [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266), [#6270](https://github.com/zeroclaw-labs/zeroclaw/issues/6270)-[#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) |
| Skills 系统 UX 全面改进 | **v0.7.6** | ⭐⭐⭐ 官方 Tracker 已立 | [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |
| 第一方技能迁入主仓库 + 紧凑模式默认 | **v0.8.0** | ⭐⭐⭐ PR 已提交 | [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) |
| 混合技能插件（SKILL.md + WASM） | **v0.8.0+** | ⭐⭐ 架构 RFC 已引用 | [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) |

### 高潜力社区提案

| 功能 | 社区热度 | 纳入可能性 | 链接 |
|:---|:---:|:---|:---|
| Dream Mode（记忆整合/反思学习） | 9 评论, P1 | **高** — 已获 ApprovedRequest，契合 AI Agent 长期记忆趋势 | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) |
| OAuth 原生订阅认证（Ollama Cloud/Z.ai/Kimi/MiniMax） | 4 评论, P2 | **中高** — 安全团队关注，已有 3 提供者先例 | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) |
| WhatsApp 定时任务投递渠道 | 新 PR | **高** — PR #6261 已提交，扩展渠道覆盖 | [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) |
| Webhook 指数退避重试 | 2 评论, P2 | **中** — 生产可靠性刚需，实现简单 | [#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) |

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 场景 | 核心不满 |
|:---|:---|:---|
| **Jason Perlow (InvestorClaw)** | 金融合规技能开发 | "默认沙箱阻断所有现实 Python 模式" — 安全策略与实用性的尖锐冲突，影响 **FINOS 及券商机构背书** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| **多实例部署用户** | 研究团队隔离配置 | "环境变量设置后仍写入默认路径" — 配置系统存在**分层泄漏**，S0 级安全隐患 | [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) |
| **DeepSeek/Kimi 用户** | 多轮复杂推理工作流 | reasoning_content 在**流式传输、消息转换、上下文压缩**三处丢失，形成"修复打地鼠"困境 | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600), [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233), [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) |
| **Slack 企业用户** | 密钥管理合规 | "bot_token 必须写配置文件" — 与 **12-factor/机密管理最佳实践** 冲突 | [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) |
| **Windows 开发者** | 完整功能构建 | "setup.bat 选项 4 直接失败" — 平台平等性受损，固件符号链接在 zip 提取后断裂 | [#6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280) |

### 正向反馈

- **Matrix 渠道持续完善**：whoami 自动推导身份 (#6202)、附件上传补全 (#6200) 显示该渠道进入生产就绪阶段
- **国际化进度可感知**：zh-CN 覆盖微信 (#6242)、法语/日语/西班牙语同步 (#6170) 反映全球化运营意图

---

## 8. 待处理积压

### 需维护者升级关注

| Issue | 天数 | 风险 | 行动建议 |
|:---|:---:|:---|:---|
| **#5605 多实例部署默认路径硬编码** | **23 天** | 🔴 **S0 数据丢失/安全** | 立即指派，与 #6266 Schema V3 协同修复 |
| **#5722 Shell 沙箱阻断 Python 技能** | **19 天** | 🔴 影响 **FINOS 生态合作** | 协调安全团队制定分级沙箱策略 |
| **#5654 Telegram 配置加密失效** | **21 天** | 🔴 S1 阻断 | 加密模块与渠道配置解析的集成测试 |
| **#5601 OAuth 原生订阅认证** | **23 天** | 🟡 安全合规差异化竞争力 | 评估是否纳入 v0.7.6 或 v0.8.0 |
| **#5849 Dream Mode** | **15 天** | 🟡 已 Approved 但未分配 | 确认实现负责人，避免 P1 标签虚置 |

### PR 合并风险

- **#6266 Schema V3 迁移**：明确标记"DO NOT MERGE YET"，依赖集成分支协调。29 条待合并 PR 中若有人误操作合并至 master，将产生**不可逆兼容性破坏**
- **#6274 第一方技能迁入**：与 #6253 v0.7.6 Skills 主题、#6140 混合技能存在**范围重叠**，需统一架构决策

---

*日报生成时间：2026-05-03 | 数据来源：ZeroClaw GitHub 公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*