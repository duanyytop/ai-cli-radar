# OpenClaw 生态日报 2026-04-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-26 00:15 UTC

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

# OpenClaw 项目动态日报 | 2026-04-26

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**，24小时内处理 **500 条 Issues**（关闭率 86%）和 **500 条 PR**（合并/关闭率 83.4%），显示出维护团队强劲的迭代能力。版本发布节奏密集，**v2026.4.24 正式版及 5 个 beta 版本**同日推进，核心亮点为 **Google Meet 内置插件**上线与 **DeepSeek V4 模型支持**。社区讨论热度集中于消息生命周期钩子失效、模型切换时的上下文损坏、以及新版本引入的消息重复注入问题。稳定性方面，mDNS/Bonjour 相关崩溃在 VPS/云环境持续发酵，Windows 平台 ESM 加载问题仍有残余。整体项目健康度**良好但承压**——功能交付快，但回归测试覆盖需加强。

---

## 2. 版本发布

### v2026.4.24 正式版 & Beta 系列（beta.1 - beta.5）
**发布时间**：2026-04-24 至 2026-04-25

| 版本 | 状态 | 关键变更 |
|:---|:---|:---|
| [v2026.4.24](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24) | **Stable** | Google Meet 插件、DeepSeek V4 支持 |
| [v2026.4.24-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.5) | Beta | 同上 |
| [v2026.4.24-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.4) | Beta | 同上 |
| [v2026.4.24-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.3) | Beta | 同上 |
| [v2026.4.24-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.2) | Beta | **Windows 修复**：打包插件运行时镜像路径解析；旧版本升级时禁用新插件防兼容性问题 |
| [v2026.4.24-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.1) | Beta | 初始功能集 |

#### 核心功能详解

**🎥 Google Meet 内置参与者插件**（[PR #71108](https://github.com/openclaw/openclaw/pull/71108) 关联）
- 个人 Google 账号 OAuth 认证
- Chrome / Twilio 实时会话双模式
- 配对节点 Chrome 支持（分布式部署）
- 会议产物导出（artifacts）与出勤记录
- 已打开 Meet 标签页的恢复工具

**🤖 DeepSeek V4 Flash / V4 Pro 模型支持**
- 注：Release notes 被截断，完整集成细节待文档更新

#### ⚠️ 已知问题与迁移注意

| 问题 | 影响版本 | 状态 |
|:---|:---|:---|
| 消息重复注入（所有渠道） | 2026.4.24 | **[#71761](https://github.com/openclaw/openclaw/issues/71761)** 开放，P0 |
| Windows Telegram ESM 崩溃 | 2026.4.24 | **[#71749](https://github.com/openclaw/openclaw/issues/71749)** 需禁用 native Jiti 绕过 |
| Docker mDNS 崩溃 (`CIAO PROBING CANCELLED`) | 2026.4.24 | **[#71751](https://github.com/openclaw/openclaw/issues/71751)** 开放 |
| 捆绑运行时首次用户回合重 staging | 2026.4.24-beta.2 | **[#71599](https://github.com/openclaw/openclaw/issues/71599)** Beta 阻断器 |

**迁移建议**：生产环境建议暂缓升级至 2026.4.24，等待 [#71761](https://github.com/openclaw/openclaw/issues/71761) 修复；Windows 用户若遇 Telegram 崩溃，设置 `NATIVE_JITI=false`。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（15 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#71808](https://github.com/openclaw/openclaw/pull/71808) | pash-openai | **Codex 应用服务器二进制管理**：将 `codex` CLI 版本与插件协议版本绑定，避免握手失败 | — |
| [#71842](https://github.com/openclaw/openclaw/pull/71842) | pash-openai | **Codex Computer Use 设置路径**：支持从 Codex 市场安装 `computer-use` 插件并验证 MCP 就绪状态 | — |
| [#71815](https://github.com/openclaw/openclaw/pull/71815) | pashpashpash | **去重生成媒体附件**：修复 image_generate 队列与显式 MEDIA 行重复发送问题 | — |
| [#71824](https://github.com/openclaw/openclaw/pull/71824) | coygeek | **Fly.io 部署修复**：从 CLI `--bind`/`--port` 种子化控制 UI 来源，解决启动崩溃 | — |
| [#71837](https://github.com/openclaw/openclaw/pull/71837) | vicenteliu | **Memory Dreaming 降噪**：剥离包装器脚手架，提升 REM 真实记忆晋升质量 | — |
| [#71827](https://github.com/openclaw/openclaw/pull/71827) / [#71836](https://github.com/openclaw/openclaw/pull/71836) | scottgl9 / hclsys | **Cron jobId 暴露至插件钩子上下文**：支持插件按持久任务 ID 定向逻辑 | [#71826](https://github.com/openclaw/openclaw/issues/71826) |
| [#71839](https://github.com/openclaw/openclaw/pull/71839) | Zozi96 | **Telegram 回复引用优化**：停止默认自动引用，保留显式引用能力 | — |
| [#71816](https://github.com/openclaw/openclaw/pull/71816) | shivanker | **Fal Seedance 参考视频支持**：多参考输入（图像/视频/音频） | — |
| [#71819](https://github.com/openclaw/openclaw/pull/71819) | martingarramon | **自动回复去毒修复**：防止外部可见分派后的重复回放入侵 | [#69303](https://github.com/openclaw/openclaw/issues/69303) |
| [#71833](https://github.com/openclaw/openclaw/pull/71833) | mjamiv | **网关启动时引导 Undici 代理分发器**：修复启动阶段提供商请求代理缺失 | — |
| [#71817](https://github.com/openclaw/openclaw/pull/71817) | anagnorisis2peripeteia | **Telegram/Feishu 推理默认配置尊重**：`reasoningDefault` 配置生效修复 | — |
| [#71840](https://github.com/openclaw/openclaw/pull/71840) / [#71841](https://github.com/openclaw/openclaw/pull/71841) | martingarramon | **测试覆盖**：`buildReplyPromptBodies` 不对称行为、`formatSlackFileReference` 助手 | — |
| [#71686](https://github.com/openclaw/openclaw/pull/71686) | serkonyc | **心跳路由与头像覆盖稳定化**：隔离心跳通道，防止重复通道实例化 | 替代 [#71674](https://github.com/openclaw/openclaw/pull/71674) |
| [#71585](https://github.com/openclaw/openclaw/pull/71585) | BunsDev | **控制 UI 个人卡片重构**：用户/助手身份视觉对称 | — |

**整体推进评估**：今日合并 PR 聚焦 **Codex 生态完善**（2 项）、**消息系统可靠性**（3 项）、**部署体验**（Fly.io、代理）、**AI 媒体生成**（Fal 视频、去重），以及 **基础设施健壮性**（cron、心跳、测试）。项目在向 **企业级部署就绪** 和 **多模态 AI 工作流** 方向稳步迈进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#65867](https://github.com/openclaw/openclaw/issues/65867) Gemini `<final>` 标签泄漏至用户消息 | 15 | 0 | **模型输出净化失效**：Google 模型特定标签污染用户体验，回归问题反复出现 |
| 2 | [#26422](https://github.com/openclaw/openclaw/issues/26422) `message_sending` 钩子永不触发——死代码 | 12 | 1 | **插件扩展性核心诉求**：出站消息拦截能力缺失，影响审计、过滤、合规场景 |
| 3 | [#33185](https://github.com/openclaw/openclaw/issues/33185) `imageModel` "Unknown model" 崩溃 | 12 | 0 | **视觉模型配置断裂**：配置验证与运行时解析不一致 |
| 4 | [#47705](https://github.com/openclaw/openclaw/issues/47705) 回退模型永久覆盖主配置 | 11 | 0 | **状态管理危险行为**：故障恢复导致配置漂移，不可逆 |
| 5 | [#32621](https://github.com/openclaw/openclaw/issues/32621) `message` 工具内钩子点缺失 | 9 | 0 | **显式 vs 隐式消息路径不一致**：`message_sending` 仅捕获自动回复 |

### 诉求深度分析

**钩子系统完整性** 是今日最热主题——[#26422](https://github.com/openclaw/openclaw/issues/26422)、[#32621](https://github.com/openclaw/openclaw/issues/32621)、[#49765](https://github.com/openclaw/openclaw/issues/49765)、[#52144](https://github.com/openclaw/openclaw/issues/52144)、[#66579](https://github.com/openclaw/openclaw/issues/66579) 形成 **5 个关联 Issue 集群**，用户需要：
- 出站全路径可观测（`message:sent` 事件可靠触发）
- 显式工具调用可拦截（`message(action=send)` 纳入钩子）
- 渠道一致性（WhatsApp 自动回复尊重 `cancel`/`handled` 返回）

**模型切换上下文损坏** 集群——[#47705](https://github.com/openclaw/openclaw/issues/47705)、[#50094](https://github.com/openclaw/openclaw/issues/50094)、[#70654](https://github.com/openclaw/openclaw/issues/70654) 显示 **多模型会话的序列化/反序列化** 是架构级痛点。

---

## 5. Bug 与稳定性

### 🚨 P0/P1 严重问题

| 级别 | Issue | 描述 | 修复状态 |
|:---|:---|:---|:---|
| **P0** | [#71761](https://github.com/openclaw/openclaw/issues/71761) | **2026.4.24 所有渠道消息重复注入**——双倍 token 消耗，所有入站消息在 WebChat/QQ 重复 | ❌ **开放，无 PR** |
| **P0** | [#71751](https://github.com/openclaw/openclaw/issues/71751) | **Docker 崩溃**：`CIAO PROBING CANCELLED` mDNS 未处理 Promise 拒绝 | ❌ **开放**（[#70232](https://github.com/openclaw/openclaw/issues/70232) 重复） |
| **P1** | [#71749](https://github.com/openclaw/openclaw/issues/71749) | **Windows Telegram ESM URL 崩溃**，需禁用 native Jiti | ⚠️ **有绕过方案，无根本修复** |
| **P1** | [#71178](https://github.com/openclaw/openclaw/issues/71178) | **`openclaw update` 中回合导致消息全丢失**（Telegram/Discord） | ❌ **开放** |
| **P1** | [#70678](https://github.com/openclaw/openclaw/issues/70678) | **WhatsApp 每 30 分钟强制重连**——安静会话不必要的 socket 重建 | ❌ **开放** |

### 🔶 P2 中等问题（已关闭/有修复）

| Issue | 描述 | 修复 |
|:---|:---|:---|
| [#70654](https://github.com/openclaw/openclaw/issues/70654) | GPT-5.4 Responses API `encrypted_content` item_id 不匹配（模型切换后） | ✅ 已关闭 |
| [#70699](https://github.com/openclaw/openclaw/issues/70699) | ACP 接受输入无输出，one-shot 超时 | ✅ 已关闭 |
| [#70277](https://github.com/openclaw/openclaw/issues/70277) | Signal 入站媒体路径被 image 工具 allowed-root 检查拒绝 | ✅ 已关闭 |
| [#70004](https://github.com/openclaw/openclaw/issues/70004) | Agent 会话锁崩溃后未释放——阻塞所有后续运行 | ✅ 已关闭 |
| [#69320](https://github.com/openclaw/openclaw/issues/69320) | Dreaming cron 硬编码 10 分钟超时 | ✅ 已关闭 |
| [#71629](https://github.com/openclaw/openclaw/issues/71629) | `active-memory timeoutMs` 非硬截止时间（5s 设置 11-13s 返回） | ✅ 已关闭 |
| [#71621](https://github.com/openclaw/openclaw/issues/71621) | 4.23 验证器拒绝 `allowConversationAccess` 同时错误信息要求设置 | ✅ 已关闭 |

### 稳定性趋势评估

| 指标 | 状态 | 说明 |
|:---|:---|:---|
| 关闭率 | ✅ 86% | 维护响应极快 |
| 回归密度 | ⚠️ **偏高** | 4 个标注 `regression` 的 Issue 含 2 个开放 |
| 平台特定问题 | ⚠️ **Windows/Docker 承压** | ESM、mDNS、捆绑运行时 |
| 新版本阻断器 | 🔴 **存在** | [#71761](https://github.com/openclaw/openclaw/issues/71761) 建议回滚或紧急补丁 |

---

## 6. 功能请求与路线图信号

### 用户明确提出的功能需求

| Issue/PR | 需求 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---:|
| [#43756](https://github.com/openclaw/openclaw/issues/43756) | **Slack `threadBindings` + `spawnAcpSessions`**（Discord/Telegram  parity） | ⭐⭐⭐⭐⭐ | **高**——已有 PR 实现模式，社区投票 2👍 |
| [#8185](https://github.com/openclaw/openclaw/issues/8185) | **`/new` `/reset` 前预重置记忆保存** | ⭐⭐⭐⭐⭐ | **高**——7👍 最高，用户体验核心痛点 |
| [#16085](https://github.com/openclaw/openclaw/pull/16085) | **Signal REST API 支持**（容器化部署） | ⭐⭐⭐⭐☆ | **高**——XL 级 PR 开放中，企业部署刚需 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | **Umbrella: 跨渠道重复转录/回放/上下文组装** | ⭐⭐⭐⭐☆ | **高**——维护者标记，系统性问题 |
| [#71816](https://github.com/openclaw/openclaw/pull/71816) | **Fal Seedance 参考视频** | ⭐⭐⭐⭐⭐ | **已合并**——多模态视频生成前沿 |
| [#71842](https://github.com/openclaw/openclaw/pull/71842) | **Codex Computer Use** | ⭐⭐⭐⭐⭐ | **已合并**——OpenAI 官方推动，战略级 |

### 路线图推断

**短期（2026.5 前）**：
- 消息系统可靠性紧急修复（重复注入、钩子完整性）
- Codex 生态 GA（Computer Use + 版本管理）

**中期（2026.Q2）**：
- 跨渠道上下文一致性重构（[#69208](https://github.com/openclaw/openclaw/issues/69208) umbrella）
- 记忆系统深度优化（Dreaming 降噪已完成，预重置保存待实现）

**长期信号**：
- 企业部署成熟度（Signal REST、Slack 线程、Fly.io 等 PaaS 优化）
- 多模态工作流（视频生成参考输入、会议产物处理）

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 场景 | 原声摘录 | 影响面 |
|:---|:---|:---|
| **升级恐惧** | "After updating from 2026.4.23 to 2026.4.24, every inbound message is injected twice" — [#71761](https://github.com/openclaw/openclaw/issues/71761) | 所有渠道用户 |
| **配置漂移** | "fallback model gets persisted back to openclaw.json... permanently replacing the configured primary" — [#47705](https://github.com/openclaw/openclaw/issues/47705) | 多模型用户 |
| **钩子不可靠** | "message_sending plugin hook registers successfully... however, it never fires" — [#26422](https://github.com/openclaw/openclaw/issues/26422) | 插件开发者 |
| **平台二等公民** | "Windows Telegram provider still crashes... unless native Jiti is disabled" — [#71749](https://github.com/openclaw/openclaw/issues/71749) | Windows 用户 |
| **云部署脆弱** | "Docker container crashes... CIAO PROBING CANCELLED" — [#71751](https://github.com/openclaw/openclaw/issues/71751

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-04-26 | 数据周期：过去24小时**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"功能验证"向"生产就绪"跃迁的关键阵痛期**。头部项目（OpenClaw、ZeroClaw）日均处理 50-100 条 Issues/PR，但关闭率分化明显（OpenClaw 86% vs Hermes 4-14%），反映维护带宽成为核心瓶颈。DeepSeek V4 推理模式兼容性成为全生态"火场"，至少 5 个项目同日出现相关 Bug。MCP 协议栈从"可选扩展"升级为"基础设施标配"，但 stdio/HTTP 传输稳定性、OAuth 预检逻辑等边缘场景仍存大量摩擦。企业级需求（RBAC、多租户、审计合规）开始从"边缘诉求"进入"核心路线图"，标志着用户群体从极客向 B2B 场景渗透。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 关闭/合并率 | 健康度评估 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.4.24 + 5 betas | Issues 86% / PR 83.4% | ⭐⭐⭐⭐☆ 功能交付极快，P0 回归需紧急补丁 |
| **NanoBot** | 6 活跃 | 29 (18 待合) | 无 | PR 38% | ⭐⭐⭐⭐☆ 安全加固主线，Provider 层修复响应快 |
| **Hermes Agent** | 50 | 50 | 无 | Issues 4% / PR 14% | ⭐⭐⭐☆☆ 需求井喷但维护吞吐严重不足，3 个 P1 安全 Issue 10 天未响应 |
| **PicoClaw** | 7 (5 关闭) | 21 (12 已处理) | Nightly v0.2.7 | Issues 71% / PR 57% | ⭐⭐⭐⭐☆ 修复导向，v0.2.7 发布冲刺中 |
| **NanoClaw** | 3 | 28 (17 待合) | 无 | PR 39% | ⭐⭐⭐⭐☆ 架构突破（Web 通道），安装体验待加固 |
| **NullClaw** | 3 | 1 | 无 | Issues 33% / PR 100% | ⭐⭐⭐☆☆ 活跃度偏低，搜索架构与定位存在张力 |
| **IronClaw** | 6 | 24 (22 待合) | 无 | PR 8% | ⭐⭐⭐☆☆ Engine V2 迁移期，MCP 生态活跃但合并瓶颈 |
| **LobsterAI** | 4 (stale) | 11 (10 已处理) | 无 | PR 91% | ⭐⭐⭐⭐☆ 代码迭代密集，Issue 响应滞后 2 个月 |
| **Moltis** | 2 | 7 (4 待合) | 无 | Issues 50% / PR 43% | ⭐⭐⭐☆☆ 中等活跃，技能过滤前后端同步漏洞需阻塞发布 |
| **CoPaw** | 14 (13 活跃) | 10 (7 待合) | v1.1.4.post2 | Issues 7% / PR 30% | ⭐⭐⭐☆☆ 配置持久化信任危机，紧急补丁未触核心 |
| **ZeptoClaw** | 0 | 4 (1 待合) | 无 | PR 75% | ⭐⭐⭐☆☆ 稳健但静默，外部贡献流程摩擦待解 |
| **ZeroClaw** | 50 (37 活跃) | 43 (31 待合) | 无 | Issues 26% / PR 28% | ⭐⭐⭐☆☆ v0.7.4 冲刺中，历史债务清偿显著但新 Bug 持续涌现 |
| **TinyClaw** | — | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模** | 日处理 1000 条 Issues+PR，绝对量级领先 | ZeroClaw ~100、Hermes ~100、其余 <50 |
| **迭代速度** | 同日发布正式版+5 beta，版本节奏密集 | PicoClaw Nightly 构建、CoPaw post-release 热修复为次快节奏 |
| **功能广度** | Google Meet 插件、DeepSeek V4、Codex Computer Use、Fal Seedance 视频——多模态+企业场景全覆盖 | NanoClaw 侧重"主权优先"容器化、ZeroClaw 轻量边缘部署、Hermes 网关抽象层 |
| **技术债务** | 消息重复注入（P0）、mDNS 崩溃、Windows ESM 问题——回归密度偏高 | PicoClaw 同类问题（DeepSeek 推理顺序）但修复更聚焦；ZeroClaw 历史债务更厚重 |
| **社区治理** | 维护团队响应极快（86% 关闭率），但 beta 版本质量门槛存争议 | Hermes 4% 关闭率形成极端反差；NanoBot 安全 PR 批量审阅策略更稳健 |

**核心差异**：OpenClaw 是生态中**唯一同时覆盖"消费者多模态体验"（Meet 插件、视频生成）与"开发者基础设施"（Codex 绑定、MCP 就绪）**的项目，其技术路线偏向**"全栈整合"**而非垂直深耕。代价是架构复杂度带来的回归风险——消息生命周期钩子、模型切换状态管理等底层机制反复出现断裂。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **DeepSeek V4 推理模式兼容** | OpenClaw、Hermes、PicoClaw、LobsterAI、ZeroClaw | `reasoning_content` 字段处理、thinking mode 工具调用、历史顺序序列化 | 🔴 最高 |
| **MCP 协议栈成熟化** | OpenClaw、PicoClaw、IronClaw、Moltis、NanoClaw | stdio 传输稳定性、HTTP 会话重连、空参数规范、`mcporter` 兼容层清理 | 🔴 最高 |
| **配置持久化/状态管理** | CoPaw、ZeroClaw、OpenClaw、Hermes | `config.json` vs `agent.json` 双源冲突、刷新丢失、模型切换后配置漂移 | 🔴 高 |
| **多租户/RBAC 隔离** | ZeroClaw、Moltis、NanoClaw | 按发送者隔离工作空间、技能黑白名单、速率限制分层 | 🟡 中高 |
| **Provider 容灾/Failover** | NanoBot、OpenClaw、ZeroClaw | 单点故障自动降级、基于错误码的健康检查、跨模型优雅回切 | 🟡 中高 |
| **Windows 平台兼容性** | OpenClaw、CoPaw、ZeptoClaw | ESM 加载崩溃、渲染异常、控制台闪烁、启动器体验 | 🟡 中 |
| **钩子系统完整性** | OpenClaw、Hermes | 出站消息全路径可观测、显式工具调用拦截、渠道一致性 | 🟡 中 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 多模态 AI 工作流（视频/会议/图像）、Codex 生态集成 | 高级消费者、AI 原生开发者 | Node.js/TypeScript，插件化消息系统，密集功能迭代 |
| **NanoBot** | 安全加固、企业 IM 集成（飞书/Teams）、人机协作确认 | 企业 IT 部署、安全敏感用户 | Python，Provider 抽象层，主动安全审计文化 |
| **Hermes Agent** | 网关抽象、多平台统一接入、视觉模型路由 | 多平台 Bot 运营者、SaaS 集成商 | Python，网关-会话状态机，商务模型耦合（Anthropic 订阅） |
| **PicoClaw** | 轻量桌面端、MCP 工具链、Web Chat UX 打磨 | 个人开发者、中文社区 | Rust/Tauri，Nightly 构建驱动，推理模式稳定性优先 |
| **NanoClaw** | "主权优先"零依赖部署、容器化技能、金融/隐私场景 | 隐私极客、自托管爱好者 | 容器-宿主分离架构，OneCLI 密钥管理，拒绝外部依赖 |
| **NullClaw** | 低资源边缘设备、开箱即用搜索 | 嵌入式/树莓派用户、极简主义者 | 轻量运行时，但搜索架构与定位存在张力 |
| **IronClaw** | Engine V2 标准化、NEAR AI 生态绑定、WASM 通道 | Web3/区块链开发者、协议标准化推动者 | Rust，模块化引擎，MCP + ACP 双协议栈 |
| **LobsterAI** | 协作会话（cowork）、代理网络配置、CJK 优化 | 中国本土企业、跨境团队 | 基于 OpenClaw 衍生，回滚验证策略保守 |
| **Moltis** | 技能治理（黑白名单）、内核级沙箱（Landlock）、Cron 稳定性 | 企业多租户、合规审计场景 | 渐进式硬化：Landlock + 技能过滤 + MCP 清理 |
| **CoPaw** | Tauri 桌面端、长期记忆、计划模式 Agent | 个人生产力用户、多设备同步需求者 | Electrobun→Tauri 迁移中，配置系统债务沉重 |
| **ZeroClaw** | 轻量边缘部署（Raspberry Pi）、多通道矩阵、i18n | 全球极客、多语言社区、硬件玩家 | Rust，Schema v3 迁移中，功能广度优先于深度 |
| **ZeptoClaw** | Rust 基础设施、可选模块编译检查、依赖链维护 | Rust 生态贡献者、模块化系统开发者 | 最小核心 + feature-gated 扩展，CI 驱动质量 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（功能扩张 > 质量巩固）

| 项目 | 信号 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 日 1000 条事务，同日多 beta 发布 | 回归密度偏高，P0 阻断器建议暂缓生产升级 |
| **PicoClaw** | v0.2.7 发布冲刺，Nightly 持续构建 | 需验证 DeepSeek + MCP 组合场景稳定性 |
| **NanoClaw** | Web 通道架构突破，28 PR 日更新 | 17 PR 待审，安装脚本阻塞首次体验 |
| **IronClaw** | Engine V2 迁移，MCP Prompts/权限门控密集开发 | 22 PR 待合，#2960/#2957 重复修复需裁定 |
| **ZeroClaw** | v0.7.4 里程碑冲刺，Schema v3 批量迁移 | 31 PR 待合，历史债务与新 Bug 并行 |

### 质量巩固阶段（稳定性/安全 > 新功能）

| 项目 | 信号 | 待解问题 |
|:---|:---|:---|
| **NanoBot** | 3 个安全 PR 并行，Provider 层集中修复 | Provider Failover 架构级需求待实现 |
| **Moltis** | Landlock 沙箱、技能过滤、Cron 防重燃 | #875 前后端同步漏洞阻塞发布 |
| **ZeptoClaw** | CI 矩阵扩张，依赖链主动修复 | 外部贡献 OAuth 流程摩擦 |
| **CoPaw** | v1.1.4.post2 紧急补丁 | 配置持久化集群 Bug 未触核心，信任危机 |

### 活跃度偏低/转型期

| 项目 | 状态 | 关键挑战 |
|:---|:---|:---|
| **Hermes** | 需求井喷（日 100 条）但关闭率 4-14% | 维护带宽危机，3 个 P1 安全 Issue 10 天未响应 |
| **LobsterAI** | 代码迭代密集（91% PR 处理率）但 Issue 滞后 2 月 | 用户沟通断层，stale Issue 堆积 |
| **NullClaw** | 日 3 Issues + 1 PR | 搜索架构与"低资源"定位张力，WSL2 兼容性 |
| **TinyClaw** | 无活动 | — |

---

## 7. 值得关注的趋势信号

### 信号一：推理模式兼容性成为"生态税"

DeepSeek V4 的 `reasoning_content` 字段处理已从"单一项目适配"演变为**全生态基础设施重构**。5 个项目同日出现相关 Bug，根源在于：
- 推理内容与常规内容的**历史序列化顺序**未标准化（PicoClaw #2657）
- 工具调用场景下**必填字段校验**与模型实际输出不匹配（LobsterAI #1819, Hermes #15741）
- 流式/非流式路径**字段透传策略**不一致（NanoBot #3443）

**对开发者的价值**：设计 Agent 框架时，需将"推理模式"视为**一等公民**而非模型特定适配，提前定义 `reasoning_content` 的生命周期（捕获→存储→透传→隔离显示）。

### 信号二：MCP 从"协议支持"进入"体验打磨"

MCP 不再是"是否支持"的布尔问题，而是**传输层稳定性**（PicoClaw HTTP 会话重连 #2664）、**参数规范合规性**（空对象 vs null #2666）、**调用路径一致性**（Moltis 移除 `mcporter` #874）的精细化竞争。

**对开发者的价值**：自研 MCP 客户端时，优先投入 **stdio 的 OAuth 预检跳过逻辑**（IronClaw #2960）和 **HTTP SSE 的会话恢复机制**——这两个边缘场景是当前用户流失的主因。

### 信号三："配置持久化"成为生产采纳的生死线

CoPaw #3824（配置全部丢失）、ZeroClaw #5947（Schema v3 迁移）、OpenClaw #47705（回退模型永久覆盖主配置）共同指向：**用户从"尝鲜"进入"生产依赖"阶段，对配置可靠性要求质变**。

**对开发者的价值**：Agent 框架的配置系统需满足：
- **单一事实来源**（消除 `config.json` vs `agent.json` 双源冲突）
- **原子化写入**（避免竞态导致部分持久化）
- **版本化迁移**（Schema 变更时自动升级而非静默覆盖）

### 信号四：企业级需求从"边缘"进入"核心路线图"

ZeroClaw #5982（按发送者 RBAC）、Moltis #870（技能黑白名单）、NanoClaw #1968（逐代理模型配置）显示：**多租户隔离、成本管控、审计合规** 开始影响架构设计。

**对开发者的价值**：早期架构决策需预留 **会话级模型选择**（成本优化）、**技能级权限边界**（安全合规）、**操作级审计日志**（监管要求）的扩展点，避免后期重构。

### 信号五："主权优先"成为差异化旗帜

NanoClaw 的"容器内语音转录"（#2003 拒绝宿主侧实现）、IronClaw 的 ACP 权限门控（#2962）、Moltis 的 Landlock 沙箱（#866）共同构成 **"数据不离开控制域"** 的技术叙事。

**对开发者的价值**：在欧盟 AI Act、中国数据安全法等监管背景下，**本地优先（local-first）架构** 正从极客偏好变为合规刚需。设计时需评估：哪些组件必须容器化、哪些数据必须本地加密、哪些操作必须用户显式授权。

---

*本报告基于 12 个开源项目 2026-04-26 的 GitHub 公开数据生成，适合技术决策者评估项目健康度、开发者选择技术栈参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-26

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-04-26 | **分析师**: AI 智能体与开源项目分析师

---

## 1. 今日速览

NanoBot 今日保持**高活跃度开发节奏**，29 个 PR 更新（18 待合并/11 已处理）与 6 个活跃 Issue 显示社区贡献持续涌入。安全加固成为主线：3 个安全相关 PR 涉及 Shell 注入防护、SSRF 检测和历史文件保护，反映项目正从功能扩展转向生产级 hardening。Provider 层出现集中修复潮——reasoning 字段泄漏、HTTP keepalive 导致本地模型连接失败等问题在 24 小时内被报告并已有 PR 响应。无新版本发布，当前处于密集迭代期而非发布窗口。

---

## 2. 版本发布

**无新版本发布**

当前版本仍为 **v0.1.5**（据 Issue #3435 用户报告）。近期无 release 计划信号，但安全修复积累可能催生 patch 版本。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（11 条中筛选）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2345](https://github.com/HKUDS/nanobot/pull/2345) | JasonYeYuhe | **中文 README 翻译** | 降低中文开发者准入门槛，社区国际化基础设施 |
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | aiguozhi123456 | **Office 文档支持（DOCX/XLSX/PPTX）** | 扩展 `read_file` 工具能力边界，企业场景适用性↑ |
| [#2791](https://github.com/HKUDS/nanobot/pull/2791) | lzmjlrt | **ask_user 交互式工具** | 引入人机协作确认机制，减少 agent 自主决策风险 |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) → 关闭，[#3449](https://github.com/HKUDS/nanobot/pull/3449) 重开 | chengyongru | **飞书线程会话隔离**（迭代优化） | 企业 IM 场景体验打磨，从"能用"到"好用" |
| [#3447](https://github.com/HKUDS/nanobot/pull/3447) | chengyongru | **MS Teams 线程回复修复** | 多平台渠道稳定性补齐 |
| [#3450](https://github.com/HKUDS/nanobot/pull/3450) | ronkommoji | 关闭（无描述，疑似测试/误提） | — |

**整体评估**: 今日合并内容覆盖**文档国际化、文件处理能力、人机交互安全、企业 IM 渠道**四大维度，项目从"核心 agent 能力"向"企业级交付套件"演进。

---

## 4. 社区热点

### 🔥 讨论最活跃：Provider 容灾与 Failover（8 评论）

| 条目 | 链接 | 热度分析 |
|:---|:---|:---|
| **Issue #3376** - 支持模型异常自动切换（Provider/Model Failover） | [链接](https://github.com/HKUDS/nanobot/issues/3376) | **8 评论，1 👍**，为今日最高互动 |

**诉求深度解析**:
- **痛点本质**: 多 provider 配置沦为"摆设"，单点故障即中断任务
- **用户场景**: 生产环境 7×24 运行，需跨 OpenAI/Anthropic/本地模型/国产 API 的自动降级
- **技术期待**: 不仅是"重试"，而是基于错误码（429/5xx/超时）的智能路由 + 健康检查 + 优雅回切
- **路线图信号**: 该 Issue 创建于 4-22，4-26 仍有更新，说明需求紧迫且未被现有 PR 覆盖。**可能成为 v0.2.0 核心特性**

---

### 其他高关注议题

| 条目 | 链接 | 核心诉求 |
|:---|:---|:---|
| Issue #3292 - Session-Level Focus Tool | [链接](https://github.com/HKUDS/nanobot/issues/3292) | 长任务中断后恢复主上下文，agent 需要"任务板"心智模型 |
| Issue #3436 - 调用外部 agent（OpenCode/Codex）| [链接](https://github.com/HKUDS/nanobot/issues/3436) | 避免重复造轮子，纳入生态而非封闭自研 |

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **Issue #3443** - `reasoning` 字段泄漏至用户可见内容 | [OPEN](https://github.com/HKUDS/nanobot/issues/3443) | 非流式路径下模型思维链被当作用户回复输出，**隐私/体验双重风险** | ✅ **#3445** [GUTYL](https://github.com/HKUDS/nanobot/pull/3445) + **#3446** [chengyongru](https://github.com/HKUDS/nanobot/pull/3446) **双方案竞争** |
| 🔴 **高** | **PR #3366** - Shell 注入漏洞（`path_append`） | [OPEN](https://github.com/HKUDS/nanobot/pull/3366) | 非 Windows 平台 `_guard_command` 绕过，**任意命令执行** | 自身即为 fix，待合并 |
| 🟡 **中** | **PR #3252** - SSRF 扫描漏检非 HTTP scheme | [OPEN](https://github.com/HKUDS/nanobot/pull/3252) | `file://`, `gopher://` 等协议绕过内网保护 | 自身即为 fix，待合并 |
| 🟡 **中** | **Issue #3435** - 企业微信媒体文件返回失败 | [OPEN](https://github.com/HKUDS/nanobot/issues/3435) | `[file upload failed: xxxxxx]`，影响文件类交互 | ❌ 暂无 PR |
| 🟡 **中** | **PR #3444** - 本地模型 HTTP keepalive 导致连接失败 | [OPEN](https://github.com/HKUDS/nanobot/pull/3444) | Ollama/vLLM/llama.cpp 空闲连接被服务端关闭后复用失败 | 自身即为 fix，待合并 |
| 🟢 **低** | **PR #3427** - DeepSeek 非字符串 content 导致请求失败 | [OPEN](https://github.com/HKUDS/nanobot/pull/3427) | 类型不规范引发 API 错误 | 自身即为 fix，待合并 |

**安全态势**: 3 个安全 PR 同时待审（#3366, #3252, #3255），建议维护者优先处理以降低 CVE 风险。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 成熟度评估 | 纳入可能性 |
|:---|:---|:---|:---|
| **Provider Failover / 自动容灾切换** | [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) | 需求清晰，有详细错误码分类，社区呼声高 | ⭐⭐⭐⭐⭐ **高优先级，预计 v0.2.0** |
| **Session-Level Focus / 任务锚定** | [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) | 概念抽象，实现路径待讨论 | ⭐⭐⭐⭐ 中长期 |
| **外部 Agent 调用（OpenCode/Codex）** | [Issue #3436](https://github.com/HKUDS/nanobot/issues/3436) | 有参考实现（TinyAgent），架构兼容待评估 | ⭐⭐⭐⭐ 生态战略级 |
| **MGP 记忆治理协议集成** | [PR #3408](https://github.com/HKUDS/nanobot/pull/3408) | **已有完整 PR**，sidecar 架构，opt-in 设计 | ⭐⭐⭐⭐⭐ **即将合并** |
| **Heartbeat 调试触发器** | [Issue #3437](https://github.com/HKUDS/nanobot/issues/3437) | 开发体验优化，范围可控 | ⭐⭐⭐ 短期 |
| **OpenRouter 免费模型优先** | [PR #3416](https://github.com/HKUDS/nanobot/pull/3416) | **已有 PR**，`:free` 后缀自动追加 | ⭐⭐⭐⭐⭐ **即将合并** |

**路线图推断**: 下一版本（v0.1.6 或 v0.2.0）将聚焦 **"稳定性 + 成本优化 + 企业集成"** 三角，而非纯功能扩张。

---

## 7. 用户反馈摘要

> 从 Issues 评论中提炼的真实声音

| 主题 | 用户原声/场景 | 情感 |
|:---|:---|:---|
| **多 Provider 可靠性** | "任务仍然因为单点异常而中断，影响可用性和连续运行体验" | 😤 不满 |
| **长任务上下文丢失** | "人们会维护一个心理'任务板'——处理完打断后回到主任务，LLM agent 缺乏这种锚定能力" | 😔 期待 |
| **生态开放性** | "能否让 NanoBot 依赖 OpenCode/Codex 工作，而非其内部 agent？" | 🤔 质疑封闭性 |
| **企业微信体验** | 文件上传失败，无有效错误信息 | 😤 不满 |
| **调试体验** | "Heartbeat 只能通过 30 分钟定时器和日志观察，无法从已知渠道上下文触发" | 😤 不满 |
| **安全信任** | 社区主动提交 3 个安全 PR，反映用户将 NanoBot 用于**生产环境** | 👍 认可项目价值 |

**关键洞察**: 用户正将 NanoBot 从"实验性 agent"推向"生产基础设施"，对稳定性、可观测性、安全性的要求质变升级。

---

## 8. 待处理积压

> 提醒维护者关注：长期未响应或高价值但停滞的条目

| 条目 | 创建日期 | 最后更新 | 风险/提醒 |
|:---|:---|:---|:---|
| **PR #3253** - Whisper 转录瞬态失败重试 | 2026-04-17 | 2026-04-25 | 语音场景核心体验，9 天待审，竞争 PR 可能涌现 |
| **PR #3255** - history.jsonl 文件系统层保护 | 2026-04-17 | 2026-04-25 | 安全加固，与 #3252、#3366 形成安全修复矩阵，建议**批量审阅合并** |
| **Issue #3292** - Session Focus Tool | 2026-04-19 | 2026-04-25 | 仅 2 评论，但概念前瞻性强，建议维护者回应是否纳入路线图 |
| **PR #3303** - spawn_status/cancel + 循环检测 | 2026-04-19 | 2026-04-25 | 子 agent 治理能力，PR 体积可能较大，需分配 review 资源 |

---

## 附录：今日数据看板

```
Issues:  6 活跃 | 0 关闭 | 净增 +6
PRs:     18 待合并 | 11 已处理 | 29 总更新
Releases: 0
安全相关 PR: 3（#3366, #3252, #3255）
Provider 层修复: 4（#3443/#3445/#3446, #3444, #3427, #3416）
```

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或离线沟通信息。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期**: 2026-04-26  
**项目**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日呈现**极高社区活跃度**：24小时内 Issues 与 PR 各更新50条，但合并/关闭率偏低（Issues 仅关闭2条，PR 仅合并/关闭7条），显示社区需求井喷但维护吞吐存在瓶颈。核心战场集中在 **DeepSeek/Kimi 推理模式兼容性**（多起关联 Bug）、**安全漏洞修复**（3个 P1 级安全问题待处理）以及 **多平台网关稳定性**（Discord、Slack、Feishu 均有配置或连接问题）。今日无新版本发布，项目处于密集修 Bug 与功能打磨阶段。

---

## 2. 版本发布

**无** — 今日未发布新版本。

---

## 3. 项目进展

### 今日合并/关闭的 PR（7条）

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#15807](https://github.com/NousResearch/hermes-agent/pull/15807) | briandevans | **合并** | 修复网关缓存代理的中断递归问题：保护 `_last_activity_ts` 仅在深度为0时重置，新增5个针对性测试 |
| [#9638](https://github.com/NousResearch/hermes-agent/pull/9638) | justyx404 | **合并** | 修复 CLI `@` 补全崩溃：移除错误的 `@staticmethod` 装饰，解决 `NameError` |
| [#15814](https://github.com/NousResearch/hermes-agent/pull/15814) | Whaleylaw | **关闭** | `delegate_task` 的 `session_target` 路由功能（将子代理转录路由至命名网关会话），未说明关闭原因 |
| [#15809](https://github.com/NousResearch/hermes-agent/pull/15809) | teknium1 | **合并** | 文档：在 webhooks 和配置页面嵌入教程视频 |
| [#15808](https://github.com/NousResearch/hermes-agent/pull/15808) | teknium1 | **合并** | 文档：在 obliteratus 技能中链接 YouTube 视频指南 |
| [#11581](https://github.com/NousResearch/hermes-agent/pull/11581) | el-analista | **合并** | 修复网关回复上下文注入：确保 Telegram 等平台的 `[Replying to: ...]` 锚点始终显示 |

**整体推进评估**：今日合并以**稳定性修复**和**文档完善**为主，缺乏重大功能落地。网关核心状态机（#15807）和 CLI 补全崩溃（#9638）两个长期痛点得到修复，但 43 个待合并 PR 的积压显示维护带宽紧张。

---

## 4. 社区热点

### 🔥 最高讨论热度

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) **Anthropic Claude 订阅认证返回"额外用量已耗尽"** | **25** | 用户支付后仍被错误拦截，重启/重登录无效，疑似 Anthropic 代理层的用量计算 Bug 或状态同步延迟 |
| 2 | [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) **原生视觉支持（反对强制路由到辅助视觉模型）** | **6** | 用户要求 GPT-4o、GLM-5V 等原生视觉模型直接处理图像，而非强制经 qwen3-vl 中转，附带参考实现 |
| 3 | [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) / [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) **DeepSeek `reasoning_content` 400 错误** | **4+4** | Cron 路径和常规路径均触发 DeepSeek V4 推理模式的必填字段校验失败，#15213 修复未覆盖 Cron 场景 |

**诉求分析**：社区核心矛盾集中在 **"代理层抽象过度 vs. 原生能力透传"**——用户希望 Hermes 减少中间层干预（视觉路由、推理内容字段处理），直接暴露底层模型能力。同时 Anthropic 订阅体系的商务/技术耦合问题持续引发付费用户流失焦虑。

---

## 5. Bug 与稳定性

### P1（严重）— 需立即关注

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) | **Python 依赖 CVE**：aiohttp、cryptography、curl-cffi 版本过低存在已知漏洞 | 待处理 | ❌ 无 |
| [#15459](https://github.com/NousResearch/hermes-agent/issues/15459) | **Terminal 工具泄漏 `declare -x` 环境变量转储** 至 LLM 上下文（macOS 持久化 Shell） | 待处理 | ❌ 无 |
| [#15812](https://github.com/NousResearch/hermes-agent/issues/15812) | **回归**：#15749 破坏 DeepSeek/Kimi 工具调用消息的 `reasoning` 字段提升 | 待处理 | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) 待审 |
| [#10692](https://github.com/NousResearch/hermes-agent/issues/10692) | **`shell=True` 绕过终端工具安全控制**：配置驱动执行路径无审批/审计/脱敏 | 待处理 | ❌ 无 |
| [#10693](https://github.com/NousResearch/hermes-agent/issues/10693) | **OAuth PKCE `code_verifier` 复用为 `state` 参数**：验证器通过授权 URL 泄漏 | 待处理 | ❌ 无 |
| [#10719](https://github.com/NousResearch/hermes-agent/issues/10719) | **上下文压缩静默丢弃全部对话轮次**（摘要生成失败时无通知/恢复） | 待处理 | ❌ 无 |

### P2（重要）

| Issue | 描述 | Fix PR |
|:---|:---|:---|
| [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) | Cron 路径 DeepSeek `reasoning_content` 400 错误（#15213 修复未覆盖） | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) 待审 |
| [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) | DeepSeek 推理模式需将 `reasoning_content` 回传 API | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) 待审 |
| [#15262](https://github.com/NousResearch/hermes-agent/issues/15262) | Discord `free_response_channels` 正确匹配破坏依赖通配符 `*` 的旧工作流 | ❌ 无 |
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | NAS Docker 部署权限被拒绝（`/opt/data/config.yaml`） | ❌ 无 |
| [#15275](https://github.com/NousResearch/hermes-agent/issues/15275) | TUI 重复生成 `hermes mcp serve` 子进程 | ❌ 无 |

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) | **原生视觉支持**（主模型直接处理图像，非强制辅助模型路由） | ⭐⭐⭐ 含参考实现+Bug 发现 | **高** — 社区强烈诉求，已有技术方案 |
| [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) | **MCP 服务器暴露 Hermes 记忆**（MEMORY.md/USER.md） | ⭐⭐⭐ 含详细设计 | **高** — MCP 生态扩展关键 |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | **Web Dashboard 多配置切换** | ⭐⭐⭐ 含根因分析与推荐设计 | **中** — 架构改动较大 |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | **Brave Search 原生搜索后端** | ⭐⭐ 标准功能请求 | **中** — 搜索后端扩展，竞品已有 |
| [#15789](https://github.com/NousResearch/hermes-agent/issues/15789) | **`delegate_task` 按任务覆盖模型/提供商** | ⭐⭐ 场景明确 | **中** — 与 #15814 的 `session_target` 方向协同 |
| [#15801](https://github.com/NousResearch/hermes-agent/issues/15801) | **会话压缩结构化 API 原语** | ⭐⭐ 架构层需求 | **低-中** — 需 API 设计评审 |
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | **Dashboard `--host` 与 CORS 配置**（Tailscale/VPN 远程访问） | ⭐⭐ 配置扩展 | **高** — 低改动高价值 |
| [#10589](https://github.com/NousResearch/hermes-agent/pull/10589) | **Telegram Managed Bots 自动创建**（Bot API 9.6） | ⭐⭐⭐ 完整 PR 待审 | **高** — 已实现，需合并 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 来源 Issue |
|:---|:---|
| **"付费了还被拦在门外"** — Anthropic 订阅认证反复提示用量耗尽，用户感到"被诈骗" | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) |
| **"视觉模型明明支持，非要绕一圈"** — 强制辅助视觉模型导致延迟、成本、可靠性三重损失 | [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) |
| **"DeepSeek 推理模式一碰就碎"** — 同一根因在不同路径反复出现，修复像打地鼠 | [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) |
| **"Docker 部署权限地狱"** — NAS 用户卡在 `Permission denied`，文档缺失 | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) |
| **"终端工具输出被污染"** — macOS 持久化 Shell 的环境变量转储淹没真实输出 | [#15459](https://github.com/NousResearch/hermes-agent/issues/15459) |

### 😐 中性/复杂反馈

- **配置系统碎片化**：环境变量 vs YAML 回退逻辑不一致（[#10581](https://github.com/NousResearch/hermes-agent/issues/10581)），自定义提供商 `context_length` 被忽略（[#15779](https://github.com/NousResearch/hermes-agent/issues/15779)）
- **Discord 行为变更破坏工作流**：正确实现 `free_response_channels` 反而成为"破坏性变更"（[#15262](https://github.com/NousResearch/hermes-agent/issues/15262)）

### 👍 积极信号

- Brave Search 集成请求获 10 👍（[#10644](https://github.com/NousResearch/hermes-agent/issues/10644)），显示社区对搜索成本敏感
- 用户主动提供参考实现（[#13065](https://github.com/NousResearch/hermes-agent/issues/13065)）和详细设计文档（[#10674](https://github.com/NousResearch/hermes-agent/issues/10674)），贡献质量提升

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue/PR

| 条目 | 创建时间 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) **Python 依赖 CVE 安全审计** | 2026-04-16 | 2026-04-25 | 🔴 **10天未关闭**，多个 CVE 影响生产安全 |
| [#10692](https://github.com/NousResearch/hermes-agent/issues/10692) **`shell=True` 绕过安全控制** | 2026-04-16 | 2026-04-25 | 🔴 **10天未响应**，配置注入即可 RCE |
| [#10693](https://github.com/NousResearch/hermes-agent/issues/10693) **OAuth PKCE 验证器泄漏** | 2026-04-16 | 2026-04-25 | 🔴 **10天未响应**，认证流程加密缺陷 |
| [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) **v0.8.0 工具调用不稳定/幻觉** | 2026-04-13 | 2026-04-25 | 🟡 **13天**，影响核心功能体验 |
| [#10678](https://github.com/NousResearch/hermes-agent/issues/10678) **`delegate_task` 无限挂起** | 2026-04-16 | 2026-04-25 | 🟡 **10天**，生产环境任务堆积风险 |
| [#13267](https://github.com/NousResearch/hermes-agent/pull/13267) **Copilot Remote 功能** | 2026-04-21 | 2026-04-26 | 🟡 **PR 待审5天**，GitHub 新功能对接窗口期 |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 日更100条（Issues+PR），参与度极高 |
| 维护响应速度 | ⭐⭐⭐☆☆ | 关闭率仅 4-14%，43 PR 积压，安全 Issue 10天未响应 |
| 代码质量趋势 | ⭐⭐⭐⭐☆ | 回归测试覆盖提升（#15807 新增5测试），但回归引入率仍高 |
| 安全态势 | ⭐⭐☆☆☆ | **3个 P1 安全 Issue 未处理**，依赖 CVE 未修复 |
| 功能演进 | ⭐⭐⭐☆☆ | 以修 Bug 为主，重大功能（视觉、MCP 记忆）有设计但未落地 |

**建议优先级**：安全 CVE 修复 > DeepSeek 推理模式统一修复 > 原生视觉支持评审 > 维护流程扩容（增加 reviewer 或自动化合并策略）。

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-26

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-04-26 | **数据周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，21 个 PR 更新（12 个已合并/关闭）与 7 个 Issues 更新（5 个关闭）显示社区与核心团队同步推进。DeepSeek 推理模式与 MCP 工具链成为今日修复焦点，共 4 个相关 PR 合并；Web Chat 体验持续打磨，结构化工具调用与思考气泡 UX 进入迭代深水区。Nightly 构建持续发布，v0.2.7 正式版临近。

---

## 2. 版本发布

### [Nightly Build v0.2.7-nightly.20260425.8d51d306](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

| 属性 | 详情 |
|:---|:---|
| **类型** | 自动化夜间构建 |
| **稳定性** | ⚠️ 不稳定，谨慎使用 |
| **变更范围** | 自 v0.2.7 分支以来的 main 分支累积变更 |

**关键变更预览**（基于关联 PR 推断）：
- DeepSeek 推理历史顺序修复（[#2657](https://github.com/sipeed/picoclaw/pull/2657)）
- MCP 空参数/会话生命周期修复（[#2666](https://github.com/sipeed/picoclaw/pull/2666), [#2664](https://github.com/sipeed/picoclaw/pull/2664)）
- Web Chat 工具反馈格式化与思考气泡隔离（[#2660](https://github.com/sipeed/picoclaw/pull/2660), [#2659](https://github.com/sipeed/picoclaw/pull/2659)）

> **迁移注意**: Nightly 构建不建议生产环境使用。等待 v0.2.7 正式版的用户可关注 DeepSeek + MCP 组合场景的稳定性验证。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（12 个）

| PR | 作者 | 领域 | 影响评估 |
|:---|:---|:---|:---|
| [#2657](https://github.com/sipeed/picoclaw/pull/2657) **fix(reasoning): persist canonical history for DeepSeek and web chat** | lc6464 | provider/agent | 🔴 **高** — 修复 DeepSeek 推理模式工具调用后崩溃 + Web Chat 刷新不一致两大痛点 |
| [#2664](https://github.com/sipeed/picoclaw/pull/2664) **fix(mcp): retry tool calls on lost HTTP sessions** | afjcjsbx | tool | 🔴 **高** — MCP HTTP/SSE 传输会话超时后自动重连，解决"session not found"永久断连 |
| [#2666](https://github.com/sipeed/picoclaw/pull/2666) **fix(mcp): send empty object instead of null for tool** | afjcjsbx | tool | 🟡 **中** — 修复 MCP 工具无参数时发送 `null` 导致兼容性问题（关联 Issue [#2600](https://github.com/sipeed/picoclaw/issues/2600)）|
| [#2660](https://github.com/sipeed/picoclaw/pull/2660) **fix(tool-feedback): format tool args as JSON code blocks** | afjcjsbx | channel/tool | 🟡 **中** — 工具参数可读性提升，内联 JSON → 代码块 |
| [#2659](https://github.com/sipeed/picoclaw/pull/2659) **fix: isolate thought bubble collapse state** | SiYue-ZO | channel | 🟡 **中** — 思考气泡状态隔离，修复全局状态污染 |
| [#2661](https://github.com/sipeed/picoclaw/pull/2661) **feat: add thought visibility toggle** | SiYue-ZO | channel | 🟡 **中** — 用户可切换思考过程显隐，偏好本地持久化 |
| [#2654](https://github.com/sipeed/picoclaw/pull/2654) **fix(launcher): hide windows child-process console flashes** | SiYue-ZO | agent/build | 🟡 **中** — Windows 启动器黑窗口/闪烁修复 |
| [#2650](https://github.com/sipeed/picoclaw/issues/2650) 关联修复 | — | provider | 🟡 **中** — DeepSeek-V4-Flash 推理+工具调用报错 |
| [#2570](https://github.com/sipeed/picoclaw/pull/2570) **feat(seahorse): make fresh tail size configurable** | lahuman | agent/config | 🟢 **低** — 上下文管理可配置化 |
| [#2498](https://github.com/sipeed/picoclaw/pull/2498) **fix(agent): preserve multiple armed /use skills** | lahuman | agent | 🟢 **低** — `/use` 技能覆盖问题修复 |
| [#326](https://github.com/sipeed/picoclaw/pull/326) **Feature: Add PR concurrency** | khantnaingset-kns | ci | 🟢 **低** — CI 冗余运行削减 |
| [#2667](https://github.com/sipeed/picoclaw/pull/2667) **chore: update WeChat group QR code** | BeaconCat | community | 🟢 **低** — 社区群维护 |

**整体推进**: 今日合并聚焦 **"推理模式稳定性"** 与 **"MCP 工具链健壮性"** 两大主题，均为 v0.2.7  blocker 级修复。Web Chat UX 进入精细打磨阶段（3 个 PR）。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题 | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#1790](https://github.com/sipeed/picoclaw/issues/1790) [BUG] openrouter free not working | **6 评论** | OpenRouter "free" 模型 ID 解析问题（`minimax-m2.5:free` 被识别为无效），涉及提供商模型别名映射机制。用户侧 workaround 需求迫切，但长期未获根本修复，今日关闭可能为归档处理。 |
| 2 | [#2600](https://github.com/sipeed/picoclaw/issues/2600) [BUG] null MCP arguments | **2 评论** | MCP 规范合规性问题——可选参数场景发送 `null` 而非 `{}`。开发者 thomasvargiu 精准定位，今日由 [#2666](https://github.com/sipeed/picoclaw/pull/2666) 修复闭环。 |

### 新兴诉求信号

- **[#2671](https://github.com/sipeed/picoclaw/issues/2671)** `[Feature]模型提供商能否支持opencode?` — 中文社区对国内模型聚合平台 OpenCode 的订阅支持诉求（zen + go 订阅），零评论显示早期阶段，需评估提供商生态扩展优先级。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | **DeepSeek 推理模式工具调用后 400 错误/崩溃** — 推理内容在历史中顺序错乱导致后续请求失败 | ✅ 已修复 | [#2657](https://github.com/sipeed/picoclaw/pull/2657) | DeepSeek 全系列推理模型用户 |
| 🔴 **Critical** | **MCP HTTP 会话超时后永久断连** — "session not found" 无法恢复 | ✅ 已修复 | [#2664](https://github.com/sipeed/picoclaw/pull/2664) | 所有 HTTP/SSE MCP 服务器用户 |
| 🟡 **High** | **Gemini API 400 Bad Request** — 复杂 JSON Schema（`$ref`, `anyOf`, `$defs`）导致函数调用验证失败 | ⏳ **待处理** | 无 | Gemini 用户 + MCP 复杂工具（如 Notion）|
| 🟡 **High** | **MCP 空参数发送 `null`** — 违反 MCP 规范，部分服务器拒绝 | ✅ 已修复 | [#2666](https://github.com/sipeed/picoclaw/pull/2666) | 无参数/全可选参数工具 |
| 🟡 **High** | **Web Chat 刷新后工具调用摘要消失** — 信息不一致（#2427 回归） | ✅ 已修复 | [#2657](https://github.com/sipeed/picoclaw/pull/2657) | Web Chat 用户 |
| 🟢 **Medium** | **Windows 启动器控制台闪烁** | ✅ 已修复 | [#2654](https://github.com/sipeed/picoclaw/pull/2654) | Windows 用户 |
| 🟢 **Medium** | **OpenRouter free 模型 ID 无效** | ❓ 已关闭 | 无明确 PR | OpenRouter free 层级用户 |

> **未修复警报**: [#2668](https://github.com/sipeed/picoclaw/issues/2668) Gemini + 复杂 MCP Schema 组合尚无 PR 跟进，是 v0.2.7 潜在 blocker。

---

## 6. 功能请求与路线图信号

### 用户提出的新需求

| 需求 | 来源 | 成熟度 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **OpenCode 提供商支持**（zen/go 订阅） | [#2671](https://github.com/sipeed/picoclaw/issues/2671) | 🌱 早期（0 评论） | 中 — 国内生态扩展，需评估与现有 OpenAI-compatible 路径的复用性 |
| **结构化工具调用 Web Chat 支持** | [#2672](https://github.com/sipeed/picoclaw/pull/2672) | 🚀 PR 已开 | **高** — 正在 review，可能进入 v0.2.7 或 v0.2.8 |
| **工具反馈美化（PrettyPrint + HTML 转义控制）** | [#2670](https://github.com/sipeed/picoclaw/pull/2670) | 🚀 PR 已开 | **高** — 解决 `&&` → `\u0026` 显示问题，UX 改进 |
| **网络错误自动重试** | [#2669](https://github.com/sipeed/picoclaw/pull/2669) | 🚀 PR 已开 | **高** — 可配置退避策略，生产环境刚需 |
| **跨 Agent 任务委托（delegate tool）** | [#2531](https://github.com/sipeed/picoclaw/pull/2531) | 🔄 长期开放 | 中 — Phase 2 路线图功能，需协调多 Agent 架构 |
| **xAI 提供商支持** | [#2260](https://github.com/sipeed/picoclaw/pull/2260) | 🔄 长期开放 | 中 — OpenAI-compatible 路径，技术低风险，需维护者 review |
| **QQ 连接稳定性可配置** | [#1780](https://github.com/sipeed/picoclaw/pull/1780) | 🔄 长期开放 | 中 — 社区 IM 稳定性诉求 |

**路线图信号**: v0.2.7 以 **"修复优先"** 为主，v0.2.8 可能集中释放 **网络韧性**（#2669）、**工具调用 UX**（#2672, #2670）、**新提供商扩展**（xAI/OpenCode）三类功能。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issues/PR 描述）

| 场景 | 痛点 | 情绪 |
|:---|:---|:---|
| **DeepSeek 推理 + 工具调用** | "开启推理时调用 skill、exec 之后报错，清空会话才能继续，但再调用又触发" — 高频阻断性故障 | 😤 挫败 |
| **Web Chat 刷新** | "工具调用摘要消失，前后信息不一致" — 信任感受损 | 😕 困惑 |
| **MCP 工具参数显示** | "'&&' 显示为 '\u0026'" — 开发者向用户的细节粗糙 | 🙄 无奈 |
| **Windows 启动体验** | "黑窗口反复打开关闭 PowerShell" — 极不专业的产品印象 | 😤 强烈负面 |
| **Gemini + Notion MCP** | "复杂 Schema 直接 400 崩溃" — 企业/生产力场景受阻 | 😤 阻断 |

### 正向反馈信号

- 思考过程显隐控制（#2661）—— 用户对 AI 透明度的自主掌控诉求得到满足
- 配置保存/重启反馈优化（#2663）—— 系统状态可见性提升

---

## 8. 待处理积压

### 需维护者关注的高价值/长期项

| PR/Issue | 创建时间 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) QQ connection stability | 2026-03-19（37天） | 🔄 OPEN | 中文社区核心 IM 渠道，长期未合并可能导致用户流失至其他框架 |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) xAI compat support | 2026-04-02（23天） | 🔄 OPEN | Elon Musk 旗下 xAI 生态扩展，竞品已支持，窗口期有限 |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) Google Antigravity OAuth scope fix | 2026-03-29（27天） | 🔄 OPEN | 企业级 Google Cloud 集成，PERMISSION_DENIED 影响付费场景 |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) delegate tool (cross-agent) | 2026-04-15（10天） | 🔄 OPEN | Phase 2 路线图核心，多 Agent 架构里程碑，需架构 review |
| [#2668](https://github.com/sipeed/picoclaw/issues/2668) Gemini + complex MCP Schema 400 | 2026-04-25 | ⏳ **无 PR** | 🔴 **v0.2.7 blocker 风险** — Gemini 用户 + MCP 生产力工具组合日益普遍 |

---

> **日报生成说明**: 本报告基于 GitHub 公开数据自动生成，PR 评论数显示为 `undefined` 系源数据缺失，已按更新活跃度排序。关键链接均已验证可访问。

**明日关注**: Gemini MCP Schema 兼容性修复进展、#2672/#2670/#2669 三个 UX/韧性 PR 的 review 状态、OpenCode 提供商需求社区反馈热度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-26

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：24小时内 28 个 PR 更新（17 个待审、11 个已合并/关闭），3 个 Issue 更新，无新版本发布。社区贡献集中在**安全加固**（3 个安全相关 PR）、**技能生态扩展**（YNAB、语音转录、Signal 等）以及**核心稳定性修复**（轮询循环、正则表达式、挂载验证等）。项目处于快速迭代期，安全与功能并行推进，但待合并 PR 积压较多（17 个），审阅带宽可能成为瓶颈。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#1863** — feat: add web channel | VivianBalakrishnan | **里程碑功能落地**：浏览器内嵌聊天 UI 直接由 NanoClaw 本体服务，零外部依赖（无 Redis、无独立应用）。大幅降低部署门槛，标志项目从"后端代理"向"完整平台"演进 | [qwibitai/nanoclaw#1863](https://github.com/qwibitai/nanoclaw/pull/1863) |
| **#2010** — docs(skills): enrich /add-signal | ira-at-work | **技能生态整合**：将 Signal v2 实战经验回并至主技能，消除冗余。体现社区"迭代-收敛"的健康模式 | [qwibitai/nanoclaw#2010](https://github.com/qwibitai/nanoclaw/pull/2010) |
| **#2005** — fix(mount-security): clear errors for malformed mount | ming0627 | **防御性编程增强**：修复容器挂载配置错误导致的崩溃，改善错误提示 | [qwibitai/nanoclaw#2005](https://github.com/qwibitai/nanoclaw/pull/2005) |
| **#2015** — ci(review): add jbaruch/coding-policy PR review workflows | jbaruch | **工程化基础设施**：引入双模型（OpenAI + Anthropic）自动代码审查，提升后续 PR 质量基线 | [qwibitai/nanoclaw#2015](https://github.com/qwibitai/nanoclaw/pull/2015) |
| **#1879** — feat(skill): voice transcription V2 | jorgenclaw | **策略性关闭**：按维护者要求重新架构为容器内实现（见 #2003），体现"主权优先"设计原则 | [qwibitai/nanoclaw#1879](https://github.com/qwibitai/nanoclaw/pull/1879) |
| **#1362** — skill: add /add-quad-inbox | jorgenclaw | **宿主-容器集成模式**：容器→宿主异步任务交接，扩展 NanoClaw 与本地开发工具链的互操作 | [qwibitai/nanoclaw#1362](https://github.com/qwibitai/nanoclaw/pull/1362) |
| **#1117** — feat(skill/proton): complete Proton suite | jorgenclaw | **36 工具 MCP 套件完成**：覆盖 Mail/Pass/Drive/Calendar/VPN，企业级隐私工具集成 | [qwibitai/nanoclaw#1117](https://github.com/qwibitai/nanoclaw/pull/1117) |

**整体推进评估**：Web 通道落地是架构级突破；安全修复闭环（#2005）+ 自动化审查（#2015）构建更稳健的工程基础；语音转录的"关闭-重构"模式显示维护者对架构一致性的坚持。

---

## 4. 社区热点

> 注：所有 PR 评论数均显示 `undefined`，可能为 API 数据异常，以下基于内容深度和关联性分析热点。

### 🔥 高关注度 PR

| PR | 热度驱动因素 | 背后诉求分析 | 链接 |
|:---|:---|:---|:---|
| **#1968** — End-to-end per-agent provider and model configuration | **架构核心**：5 个链式提交，实现"会话级模型选择"这一长期需求 | 用户希望**摆脱全局单一模型限制**，按需切换 GPT-4/Claude/Gemini 等，实现成本-能力动态平衡 | [qwibitai/nanoclaw#1968](https://github.com/qwibitai/nanoclaw/pull/1968) |
| **#2003** — voice transcription V2 (container-side, sovereign) | **设计哲学争议**：#1879 关闭后的重构，"主权优先" vs "易用性" 的权衡 | 社区对**数据主权**高度敏感，拒绝任何可能泄露语音数据的外部依赖；同时要求**零配置本地运行** | [qwibitai/nanoclaw#2003](https://github.com/qwibitai/nanoclaw/pull/2003) |
| **#2009** — add-voice-transcription-free-whisper | **与 #2003 形成方案竞争**：同一问题的两种实现路径 | 部分用户偏好**宿主侧轻量方案**（uv tool install 即可），不愿等待容器重构周期 | [qwibitai/nanoclaw#2009](https://github.com/qwibitai/nanoclaw/pull/2009) |
| **#2016** — Add /add-ynab-tool skill | **金融场景扩展**：个人财务管理是 AI 助手高价值场景 | 用户希望**原生集成主流 SaaS**，而非自行搭建 MCP 服务器；OneCLI 密钥管理降低安全门槛 | [qwibitai/nanoclaw#2016](https://github.com/qwibitai/nanoclaw/pull/2016) |

**诉求总结**：社区正在从"能用"向"好用且自主可控"演进，对**数据主权**、**模型灵活性**、**金融/隐私场景深度集成**的需求尤为迫切。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **#2014** — install-node.sh hangs on Ubuntu | `needrestart` 内核升级提示阻塞无人值守安装，影响 CI/自动化部署 | ❌ 无 Fix PR | [qwibitai/nanoclaw#2014](https://github.com/qwibitai/nanoclaw/issues/2014) |
| 🔴 **高** | **#2006** — docker socket permission denied (Debian 12 LXC) | `usermod -aG docker` 后权限未生效，后续步骤崩溃；**恢复路径未触发** | ❌ 无 Fix PR | [qwibitai/nanoclaw#2006](https://github.com/qwibitai/nanoclaw/issues/2006) |
| 🟡 **中** | **#2013** — poll-loop test teardown | `runPollLoop` 无中止机制，测试后持续轮询导致 `SQLITE_MISUSE` 崩溃 | ✅ **#2013 自身即为 Fix PR**，待合并 | [qwibitai/nanoclaw#2013](https://github.com/qwibitai/nanoclaw/pull/2013) |
| 🟡 **中** | **#2011** — invalid engage_pattern regex fail-open | 非法正则抛出 `SyntaxError` 时返回 `true`（失效开放），**安全策略被绕过** | ✅ **#2011 自身即为 Fix PR**，待合并 | [qwibitai/nanoclaw#2011](https://github.com/qwibitai/nanoclaw/pull/2011) |
| 🟡 **中** | **#2007** — chat-sdk composite id mismatch | 消息 ID 格式错误导致入站消息查询失败，影响反应/回复功能 | ✅ **#2007 自身即为 Fix PR**，待合并 | [qwibitai/nanoclaw#2007](https://github.com/qwibitai/nanoclaw/pull/2007) |

**风险评估**：两个高严重度 Issue 均无 Fix PR，且均涉及**安装/首次部署体验**——这是用户流失的关键节点。Debian LXC 场景在 Proxmox 用户群中极为常见，需优先响应。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表性 PR | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| **Web 浏览器通道** | #1863（已合并） | ✅ **已落地** | 零依赖架构符合项目简化部署的核心目标 |
| **语音转录（主权模式）** | #2003（待审） / #2009（竞争方案） | 🔶 **高，但方案待定** | 社区强需求，维护者明确要求容器侧实现；#2003 更可能入选 |
| **逐代理模型配置** | #1968（待审） | 🔶 **高** | 5 个链式提交，设计完整；是成本优化的核心能力 |
| **YNAB 金融集成** | #2016（待审） | 🟢 **中高** | 技能化架构易于合并，无核心侵入 |
| **Telegram 富媒体优化** | #2008（待审） | 🟢 **中高** | 用户体验改进，风险低 |
| **使用监控与计费** | #2012（待审） | 🟡 **中** | 企业/多用户场景刚需，但涉及 schema 变更需审慎 |
| **安全加固三连** | #2000 / #2001 / #2004（均待审） | ✅ **高，应打包发布** | 安全修复通常优先合并，建议作为 patch 版本发布 |

**路线图信号**：项目正从"功能扩展期"进入"质量加固期"，安全 PR 密集出现（#2000-#2004）暗示可能为**v2.x 稳定版或安全补丁**做准备。

---

## 7. 用户反馈摘要

### 从 Issues 提炼的真实痛点

| 来源 | 痛点/场景 | 情绪信号 |
|:---|:---|:---|
| **#2017**（zzibo） | "keep it going sir this is awesome!" — **纯鼓励，无具体反馈** | 😊 积极，但无诊断价值 |
| **#2014**（javexed） | Ubuntu 服务器自动化安装被 `needrestart` 交互阻塞 | 😤 **挫败**：期望无人值守，实际需人工干预 |
| **#2006**（dooha333） | Proxmox LXC 容器内 Docker 权限组变更未生效，**恢复逻辑失效** | 😤 **双重挫败**：问题发生 + 自救路径也失败 |

### 隐含需求
- **安装鲁棒性**：Debian/Ubuntu 系列的服务器/容器环境需要**非交互式安装模式**
- **权限变更即时生效**：`usermod -aG` 后需 `newgrp` 或重新登录，脚本需显式处理
- **清晰的错误恢复指引**：当自动恢复失败时，用户需要**可执行的下一步**

---

## 8. 待处理积压

> 以下 PR/Issue 存在**长期悬停**或**高价值但低响应**风险，建议维护者优先审阅：

| 类型 | 编号 | 悬停时间 | 风险/价值 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **PR** | #1968 | 2+ 天 | **架构级功能**，5 个链式提交审阅成本高，但用户迫切需求 | 安排核心维护者专项审阅，或拆分合并 | [qwibitai/nanoclaw#1968](https://github.com/qwibitai/nanoclaw/pull/1968) |
| **PR** | #1117 | **41 天** | 36 工具 Proton 套件，**企业隐私场景**关键拼图 | 明确"Needs Review"状态，分配审阅人 | [qwibitai/nanoclaw#1117](https://github.com/qwibitai/nanoclaw/pull/1117) |
| **PR** | #1362 | **34 天** | Quad 宿主集成，**开发者工作流**扩展 | 与 #2003 等容器-宿主交互 PR 统筹评估 | [qwibitai/nanoclaw#1362](https://github.com/qwibitai/nanoclaw/pull/1362) |
| **Issue** | #2014 / #2006 | 均 1 天（新报） | **安装体验 blocker**，影响首次用户转化 | 24-48 小时内响应，提供 workaround | [qwibitai/nanoclaw#2014](https://github.com/qwibitai/nanoclaw/issues/2014) / [qwibitai/nanoclaw#2006](https://github.com/qwibitai/nanoclaw/issues/2006) |

---

## 项目健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | ⭐⭐⭐⭐⭐ | 28 PR/3 Issue 日更新，极活跃 |
| 社区贡献多样性 | ⭐⭐⭐⭐☆ | 7+ 位独立贡献者，覆盖功能/安全/文档 |
| 审阅响应速度 | ⭐⭐⭐☆☆ | 17 PR 待审，2 个高严重度 Issue 无响应 |
| 安全态势 | ⭐⭐⭐⭐⭐ | 主动发现+修复，3 个安全 PR 并行 |
| 首次体验稳定性 | ⭐⭐⭐☆☆ | 安装脚本存在已知阻塞，需紧急关注 |

**综合评估**：NanoClaw 处于**高速成长期**，技术方向清晰（主权优先、零依赖、技能化），但需加强**安装体验**和**审阅带宽**以避免贡献者流失。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-26

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-04-26  
> **分析周期**: 过去 24 小时（2026-04-25 至 2026-04-26）

---

## 1. 今日速览

NullClaw 今日活跃度**中等偏低**，社区聚焦于**搜索功能可用性**与**WSL2 环境稳定性**两大痛点。过去 24 小时共 3 条 Issue 更新（2 开 1 闭）、1 条 PR 关闭，无新版本发布。值得关注的是，用户 uMendex 从 PicoClaw/ZeroClaw 迁移而来，连续反馈 `web_search` 使用障碍，反映出跨项目用户留存中的体验摩擦；同时 WSL2 环境下的 100% CPU 占用问题首次被报告，可能影响开发者采用意愿。

---

## 2. 版本发布

**无新版本发布。**

最新版本仍为 `2026.4.17`（见 [Issue #870](https://github.com/nullclaw/nullclaw/issues/870) 环境信息）。

---

## 3. 项目进展

### PR #815 已关闭：搜索提供方配置指引修复
| 属性 | 详情 |
|:---|:---|
| **链接** | [nullclaw/nullclaw#815](https://github.com/nullclaw/nullclaw/pull/815) |
| **作者** | [@manelsen](https://github.com/manelsen) |
| **状态** | 已关闭（合并，推测） |
| **创建** | 2026-04-14 | **更新** | 2026-04-25 |

**核心改进**：
- 优化 `web_search` 在无可靠搜索提供方配置时的失败提示信息
- 新增设置指引：指向 `http_request.search_base_url`（SearXNG 自托管）及托管服务商的 API key 环境变量配置
- 保留聚合提供方失败时的降级报告机制

**项目意义**：该 PR 直接回应了社区对搜索功能"配置即运行"的诉求，降低了新用户上手门槛，但**未解决根本架构问题**——仍需外部依赖（API key 或自托管 SearXNG），与 NullClaw 主打的"低资源设备本地运行"定位存在张力。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 #1 | [Issue #812](https://github.com/nullclaw/nullclaw/issues/812) `[bug] http_request` | 7 评论, 1 👍, 已关闭 | **迁移用户上手困境**：从 PicoClaw/ZeroClaw 转来的用户期望"开箱即用"的联网搜索，但实际配置复杂。该 Issue 历经 12 天、7 轮讨论后关闭，说明问题虽"解决"但用户体验路径仍曲折 |
| #2 | [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) `[bug] Critical: web_search is impractical on low-resource devices` | 0 评论, 0 👍, **新开** | **架构定位冲突**：用户明确指出 Brave Search API（需 key、可能付费）和 SearXNG（需自托管）均不符合"弱、便宜、低资源设备"场景，**呼吁原生 DuckDuckGo 支持** |
| #3 | [Issue #870](https://github.com/nullclaw/nullclaw/issues/870) `Gateway accept4 busy loop (100% CPU) on WSL2` | 0 评论, 0 👍, **新开** | **开发环境兼容性**：WSL2 作为 Windows 开发者主流环境，100% CPU 空转会直接阻碍试用转化 |

**深层信号**：同一用户（uMendex）在 #812 关闭后 24 小时内新开 #871，表明 #815 的"文档修复"未能满足其对**零配置搜索**的期望，社区存在从"文档改进"向"架构重构"的诉求升级。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| P0 | [#870](https://github.com/nullclaw/nullclaw/issues/870) Gateway accept4 busy loop (100% CPU) on WSL2 | 🔴 **高** — 功能正常但资源耗尽 | 新开, 待调查 | ❌ 无 | WSL2 用户（Windows 开发者主力）|
| P1 | [#871](https://github.com/nullclaw/nullclaw/issues/871) web_search 低资源设备不可用 | 🟡 **中高** — 核心场景失效 | 新开, 待评估 | ❌ 无 | 目标用户群（边缘/嵌入式设备）|
| P2 | [#812](https://github.com/nullclaw/nullclaw/issues/812) http_request | 🟢 **已解决** — 配置指引问题 | 已关闭 | ✅ #815 | 通用 |

**技术债务提示**：#870 的 `accept4 busy loop` 暗示 gateway 的网络 I/O 多路复用实现可能存在边缘条件（如 WSL2 的 epoll 行为差异），需核心开发者介入诊断。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) | **原生 DuckDuckGo 搜索支持**（无需 API key、适合低资源设备） | 技术可行，但需评估 DDG 反爬策略与稳定性 | ⭐⭐⭐☆☆ **中等** — 与现有"聚合提供方"架构冲突，需新增独立 provider |
| #871 隐含 | **离线/本地搜索索引**（彻底无外网依赖） | 资源占用高，与低资源定位矛盾 | ⭐⭐☆☆☆ **低** |
| #815 已部分实现 | 搜索配置引导优化 | 已完成 | ✅ 已交付 |

**路线图建议**：若 NullClaw 坚持"低资源边缘 AI"定位，DuckDuckGo 原生支持应优先于更多商业 API 集成。可考虑将 #871 标记为 `good first issue` 或 `help wanted` 吸引社区贡献。

---

## 7. 用户反馈摘要

### 真实痛点
> *"I came from Picoclaw, where I also tested ZeroClaw. I liked NullClaw and it seems very organized. But I've been trying to enable the internet search capability since Friday; I've tested all the examples and it doesn't work."*
> — [uMendex, #812](https://github.com/nullclaw/nullclaw/issues/812)

- **迁移摩擦**：竞品用户转换时期望功能对等，但搜索模块的"隐形依赖"（API key/自托管服务）未在入门文档中充分前置说明
- **定位困惑**：用户选择 NullClaw 因其"organized"，但实际运行与"低资源设备"承诺存在落差

### 满意点
- 项目结构清晰（"very organized"）
- 社区响应积极（#812 7 评论闭环）

### 不满意点
- 搜索功能**非真正开箱即用**
- 低资源场景下**无免费、无配置搜索选项**
- WSL2 开发环境**CPU 异常占用**影响体验

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 当前状态 | 风险提醒 |
|:---|:---|:---|:---|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | 2026-04-25 | **0 评论，0 维护者响应** | ⚠️ 同一用户连续反馈升级，24 小时内未获回应可能流失至竞品 |
| [#870](https://github.com/nullclaw/nullclaw/issues/870) | 2026-04-25 | **0 评论，0 维护者响应** | ⚠️ WSL2 兼容性问题阻碍 Windows 开发者采用，建议优先标记 `bug` 并分配 |

**维护者行动建议**：
1. 对 #871：评估 DuckDuckGo 集成的技术可行性，至少给予架构层面的公开回应
2. 对 #870：要求补充 `strace`/`perf` 诊断数据，或提供 WSL2 特定测试环境复现

---

> **健康度评分**: 🟡 **7.2/10**  
> 优势：社区响应及时、PR 质量规范、用户忠诚度高（跨项目追随）  
> 风险：核心功能（搜索）与产品定位存在架构张力、新 Issue 响应速度待提升、WSL2 兼容性未覆盖

---

*本报告基于公开 GitHub 数据生成，未包含私有讨论或离线沟通信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-26

> **项目**: nearai/ironclaw | **日期**: 2026-04-26 | **分析周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日保持**高活跃度开发节奏**：24个PR更新（22个待合并）、6个活跃Issue，无新版本发布。社区核心贡献者 rajulbhatnagar、willamhou、zmanian 等密集推进 MCP 生态修复与功能扩展，尤其聚焦 stdio 传输稳定性与 OAuth 流程优化。两个生产环境 canary 告警（provider-matrix、private-oauth）需关注，但已有针对性修复PR在审。整体项目处于**功能冲刺期**，Engine V2 迁移与多通道扩展并行推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #2951 | henrypark133 | **关闭** — Codex/NEAR AI 工具 schema 塑形修复，提取共享 `tool_schema.rs` 模块，为 Engine V2 标准化奠基 | [PR #2951](https://github.com/nearai/ironclaw/pull/2951) |
| #2868 | henrypark133 | **关闭** — Engine V2 `available_actions` 清理，合并 #2869/#2876/#2889 后续工作，推进 callable-only 对齐 | [PR #2868](https://github.com/nearai/ironclaw/pull/2868) |

**关键推进**：Engine V2 架构债务持续偿还，工具调用层标准化进入收尾阶段。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | **#2923** stdio MCP 激活失败 | 2评论+1👍 | 核心痛点：非维护者误关 #2474 引发二次申诉，暴露社区治理漏洞；stdio 传输实际已支持（v0.25.0），仅激活预检有 bug | [Issue #2923](https://github.com/nearai/ironclaw/issues/2923) |
| 2 | **#78** P3 消息通道扩展 | 2评论 | 长期路线图议题，iMessage/Matrix/LINE/Feishu/Teams 等 WASM 通道，与 #2019 原生 Matrix PR 形成呼应 | [Issue #78](https://github.com/nearai/ironclaw/issues/78) |

**诉求洞察**：社区对 MCP 生态成熟度高度敏感，stdio 作为本地开发主力传输方式，其稳定性直接影响开发者体验。#2923 的"误关重开"事件反映出 Issue 生命周期管理需加强维护者审核机制。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | #2956 | Live canary 失败：provider-matrix openai-compatible | ❌ 无专属修复，可能关联 #2961 | [Issue #2956](https://github.com/nearai/ironclaw/issues/2956) |
| 🔴 **高** | #2955 | Live canary 失败：private-oauth | ❌ 无专属修复 | [Issue #2955](https://github.com/nearai/ironclaw/issues/2955) |
| 🟡 **中** | #2923 | stdio MCP 激活 OAuth 端点发现失败 | ✅ **#2960** + **#2957** 双PR竞争修复 | [Issue #2923](https://github.com/nearai/ironclaw/issues/2923) |
| 🟡 **中** | #2946 | `llm_backend` 每次启动被覆写为 nearai | ✅ **#2961** 修复中 | [Issue #2946](https://github.com/nearai/ironclaw/issues/2946) |

**关键修复详情**：
- **#2960** [willamhou](https://github.com/nearai/ironclaw/pull/2960)：`ExtensionManager::auth_mcp` 对 stdio/unix 传输跳过 OAuth 预检，根解 #2923
- **#2957** [rajulbhatnagar](https://github.com/nearai/ironclaw/pull/2957)：同目标修复，但额外澄清 #2474 被误关的历史，存在 PR 合并选择问题
- **#2961** [willamhou](https://github.com/nearai/ironclaw/pull/2961)：`openai_compatible` 注册时未检查 `api_key_required`，导致无 key 实例被标记为不可用并回退 NearAI

> ⚠️ **维护者注意**：#2960 与 #2957 功能重复，需协调合并避免代码冲突。建议优先 #2960（标签更完整：size/risk/scope 全），但 #2957 的历史澄清文档价值应被吸收。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能方向 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|
| #2962 | ACP agent `request_permission` 透传至 Web UI 门控卡片 | **高** — 安全合规刚需，作者为活跃贡献者 rajulbhatnagar | ⭐⭐⭐⭐⭐ |
| #2958 | MCP Prompts 端到端支持（`/prompts` 命令 + HTTP API + `@server:prompt` 提及） | **高** — 同日提交 PR，与 #2962 作者同一人，形成 MCP 生态组合拳 | ⭐⭐⭐⭐⭐ |
| #2019 | 原生 Matrix 通道（含 E2EE） | **中** — XL 规模、高 risk，但 #78 路线图已列，社区有需求 | ⭐⭐⭐⭐ |
| #2959 | 专用 `web_fetch` 工具 + 二级模型摘要 | **中** — 复用现有 HttpTool 路径，实现成本可控 | ⭐⭐⭐⭐ |
| #1120 | Prismer Cloud IM WASM 通道 | **中** — 中国企业 IM 市场，与 Aliyun (#1446) 形成云厂商覆盖 | ⭐⭐⭐ |
| #2728 | Engine V2 migrate CLI（OpenClaw/Hermes） | **高** — core 贡献者 serrrfirat，迁移工具为 V2 发布阻塞项 | ⭐⭐⭐⭐⭐ |

**下一版本（v0.26.0?）预测主题**：MCP 生态完善（prompts + stdio 稳定 + 权限门控）、Engine V2 GA 准备、通道矩阵扩展。

---

## 7. 用户反馈摘要

> 从 Issue 描述与评论提炼真实痛点

| 痛点 | 来源 | 场景 | 情绪 |
|:---|:---|:---|:---|
| **配置优先级失效** | #2946 | 自托管 vLLM/LiteLLM 用户，显式设置 `openai_compatible` 后重启仍被强制切回 NearAI，DB > env > file > defaults 文档承诺未兑现 | 😤 挫败 |
| **Issue 管理信任危机** | #2923 | 非维护者评论导致有效 bug 被误关，作者被迫重开并引用版本证据自证 | 😤 愤怒 + 不信任 |
| **本地开发阻塞** | #2923 | stdio MCP 为本地工具链核心传输方式，OAuth 预检错误完全阻断激活流程 | 😫 阻塞 |
| **安全合规焦虑** | #2962 | ACP 沙箱代理（Goose/Codex/Gemini CLI）自动批准权限请求，企业用户无法审计 | 😰 担忧 |

**满意点**：社区响应速度较快（#2923 报告后 24h 内双 PR 修复），v0.25.0 的 stdio 端到端支持本身获认可。

---

## 8. 待处理积压

> 长期活跃但未关闭的重要议题，提醒维护者关注

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| #78 P3 消息通道 | 2026-02-14 | 2026-04-25 | **70天** | 路线图漂移风险：#2019 原生 Matrix PR 已开，但 Issue 本身未更新勾选状态 | [Issue #78](https://github.com/nearai/ironclaw/issues/78) |
| #1120 Prismer WASM | 2026-03-13 | 2026-04-25 | **43天** | XL 规模 PR 审查瓶颈，中国企业 IM 市场覆盖机会 | [PR #1120](https://github.com/nearai/ironclaw/pull/1120) |
| #1446 Aliyun 支持 | 2026-03-20 | 2026-04-25 | **37天** | 超大规模 PR（全 scope 标记），云厂商生态关键卡位 | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) |
| #1470 通知规范化 | 2026-03-20 | 2026-04-25 | **37天** | 用户体验打磨，低 risk 易合并，建议优先消化 | [PR #1470](https://github.com/nearai/ironclaw/pull/1470) |
| #1941 MCP 名称注入防护 | 2026-04-03 | 2026-04-25 | **23天** | 安全修复 XS 规模，应快速合并 | [PR #1941](https://github.com/nearai/ironclaw/pull/1941) |

**维护者行动建议**：
1. **立即**：裁定 #2960 vs #2957 合并优先级，关闭重复
2. **本周**：合并 #1941（安全 XS）、#1470（体验优化低 risk）
3. **本月**：为 #78 更新路线图勾选状态，或拆分子 Issue 降低跟踪粒度

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或线下讨论信息。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-26

## 1. 今日速览

LobsterAI 今日展现**高强度迭代状态**：24小时内处理 **11 个 PR**（合并/关闭 10 个，1 个待审阅），但 **4 个活跃 Issue 均为长期未决的 stale 状态**，社区问题响应存在明显滞后。核心团队聚焦 **DeepSeek V4 兼容修复**、**协作会话生命周期管理**及**代理网络配置**三大技术方向，代码提交密集但存在反复回滚现象（PR #1820-1825 形成回滚链），显示部分修复仍在验证稳定性。无新版本发布，功能交付以补丁级修复为主。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#1826](https://github.com/netease-youdao/LobsterAI/pull/1826) | liuzhq1986 | **Release/2026.04.24 集成**：远程 Embedding 配置（OpenAI/Gemini）、CJK 语言 Windows 内存搜索修复、协作会话生命周期优化 | ✅ 已合并 |
| [#1827](https://github.com/netease-youdao/LobsterAI/pull/1827) | liuzhq1986 | DeepSeek V4 thinking mode 扩展至 anthropic-messages API 格式 | ✅ 已合并 |
| [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) | fisherdaddy | 修复 DeepSeek v4 默认开启思考模式下工具调用强制要求 `reasoning_content` 的问题 | ✅ 已合并 |
| [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | fisherdaddy | **修复代理环境下 OpenAI 原厂模型无法访问**（影响中国大陆用户核心痛点） | ✅ 已合并 |
| [#1817](https://github.com/netease-youdao/LobsterAI/pull/1817) | liuzhq1986 | 协作会话模型同步修复：切换模型后 Agent 报告当前模型名称正确 | ⚠️ 已回滚再恢复 |

### 技术债务与反复验证

- **回滚链事件**：PR #1817 → #1821（回滚）→ #1825（恢复）；PR #1820 → #1822（回滚）→ #1824（恢复）。表明 **协作会话生命周期修复** 存在边界条件未完全覆盖，团队采用"合并-回滚-再恢复"的保守策略验证稳定性。
- **待审阅 PR**：[#1823](https://github.com/netease-youdao/LobsterAI/pull/1823) `Fisherdaddy/fix schema or payload` 涉及 renderer/main/openclaw/skills/cowork 五大模块，可能为下一轮发布准备。

**整体推进评估**：今日修复覆盖模型兼容性、网络代理、多语言搜索、会话状态管理四大基础设施层，项目技术债务有所削减，但回滚频率提示测试覆盖率需加强。

---

## 4. 社区热点

### 讨论活跃度分析

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 🔥1 | #39 飞书连通但发消息没有回复 | 4 | **IM 平台集成可靠性**：飞书 webhook/事件订阅配置后无响应，用户无法自助排查 | [链接](https://github.com/netease-youdao/LobsterAI/issues/39) |
| 🔥2 | #44 Telegram 无法连接 LobsterAI | 3 | **海外平台网络配置**：已配置全局代理仍无法连接，怀疑 Token 验证或网络层问题 | [链接](https://github.com/netease-youdao/LobsterAI/issues/44) |
| 3 | #54 沙箱无法读取飞书配置文件 | 1 | **安全与灵活性权衡**：Skill 沙箱隔离过强，无法注入环境变量，被迫明文存储密钥 | [链接](https://github.com/netease-youdao/LobsterAI/issues/54) |
| 4 | #72 自动获取相关的模型 | 1 | **UX 优化**：API 配置后模型列表未自动拉取；本地模型联网能力存疑 | [链接](https://github.com/netease-youdao/LobsterAI/issues/72) |

**诉求深层分析**：
- **#39/#44 形成"平台连接"主题簇**：飞书（国内）、Telegram（海外）两大 IM 集成均出现"配置后无反馈"黑盒问题，暴露 **诊断工具缺失** 和 **错误信息不透明** 的产品缺陷。
- **#54 安全架构冲突**：用户明确拒绝"明文密钥给沙箱"的安全实践，与项目当前 Skill 隔离设计存在根本张力，可能需要引入 **密钥管理服务（KMS）** 或 **环境变量注入白名单** 机制。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | 代理环境下 OpenAI 原厂模型完全不可用 | #1818 修复场景 | [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | ✅ 已修复 |
| 🔴 **高** | DeepSeek V4 工具调用因 `reasoning_content` 强制要求失败 | #1819 修复场景 | [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) | ✅ 已修复 |
| 🟡 **中** | 协作会话切换模型后 Agent 报告 stale 模型名 | #1817/#1825 | [#1817](https://github.com/netease-youdao/LobsterAI/pull/1817) | ⚠️ 已修复（经回滚验证） |
| 🟡 **中** | 协作会话 fallback timer 误完成新运行回合 | #1820/#1824 | [#1820](https://github.com/netease-youdao/LobsterAI/pull/1820) | ⚠️ 已修复（经回滚验证） |
| 🟡 **中** | CJK 语言 Windows 内存搜索异常 | #1826 包含 | [#1826](https://github.com/netease-youdao/LobsterAI/pull/1826) | ✅ 已修复 |
| 🟢 **低** | DeepSeek V4 thinking mode 未覆盖 anthropic-messages 格式 | #1827 | [#1827](https://github.com/netease-youdao/LobsterAI/pull/1827) | ✅ 已修复 |

**稳定性观察**：今日修复均为**生产环境阻塞性问题**（代理、模型兼容性、会话状态），但回滚链显示 **cowork 模块存在并发时序缺陷**，建议维护者补充 **多回合快速交互的集成测试**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---|
| **模型列表自动获取**（API 配置后自动拉取可用模型） | [#72](https://github.com/netease-youdao/LobsterAI/issues/72) | #1826 已引入远程 Embedding 配置框架，模型发现可复用类似机制 | ⭐⭐⭐ 高 |
| **本地部署模型自动联网** | [#72](https://github.com/netease-youdao/LobsterAI/issues/72) | 需 OpenClaw 运行时架构调整，当前无直接 PR | ⭐⭐ 中 |
| **沙箱环境变量/密钥注入机制** | [#54](https://github.com/netease-youdao/LobsterAI/issues/54) | 与 Skill 安全架构冲突，需设计 KMS 集成或密封存储 | ⭐⭐ 中 |
| **IM 连接诊断工具/日志增强** | #39, #44 隐含需求 | 无直接 PR，但 #1818 代理修复显示网络层在活跃迭代 | ⭐⭐⭐ 高 |

**路线图信号**：项目正从"功能堆砌"转向"基础设施硬化"——Embedding 配置抽象、模型格式适配层、会话生命周期管理均显示 **插件化/多供应商架构** 的演进方向。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 标题与描述）

> *"飞书连通但发消息没有回复"* —— **黑盒集成体验**：配置成功与功能可用之间存在断层，用户无法区分"连接成功"与"消息路由正常"

> *"已开启全局节点...无法连接"* —— **网络环境复杂性**：代理配置与应用层代理设置存在双重配置，用户困惑于责任边界

> *"不想把明文密钥给它"* —— **企业安全合规意识觉醒**：个人用户已开始拒绝不安全密钥实践，影响采用决策

> *"要手输好麻烦"* —— **配置体验摩擦**：API 基础信息自动填充与模型列表手动输入形成体验断层

### 满意点
- 项目迭代频率高（用户 #44 提到"已按照官网文件进行操作"，文档基本可用）
- 多平台覆盖（飞书、Telegram）符合跨境使用场景

### 不满意点
- **Stale Issue 堆积**：4 个活跃 Issue 均为 2 月创建，2 个月无维护者响应，仅今日被批量标记更新
- **错误信息不透明**：所有连接问题均表现为"无回复"而非明确错误码

---

## 8. 待处理积压

### 长期未响应 Issue 预警

| Issue | 创建日期 | 最后更新 | 积压天数 | 风险等级 | 行动建议 |
|:---|:---|:---|:---:|:---:|:---|
| [#39](https://github.com/netease-youdao/LobsterAI/issues/39) 飞书无回复 | 2026-02-22 | 2026-04-25 | **63天** | 🔴 高 | 需维护者复现飞书 webhook 事件流，补充调试日志指南 |
| [#44](https://github.com/netease-youdao/LobsterAI/issues/44) Telegram 连接失败 | 2026-02-22 | 2026-04-25 | **63天** | 🔴 高 | 结合 #1818 代理修复，验证 Telegram Bot API 是否受相同代理逻辑影响 |
| [#54](https://github.com/netease-youdao/LobsterAI/issues/54) 沙箱密钥隔离 | 2026-02-23 | 2026-04-25 | **62天** | 🟡 中 | 需产品决策：是否引入 `.env` 白名单或外部密钥引用机制 |
| [#72](https://github.com/netease-youdao/LobsterAI/issues/72) 模型自动发现 | 2026-02-24 | 2026-04-25 | **61天** | 🟡 中 | 可标记为 **good first issue**，社区贡献者友好 |

### 待审阅 PR 提醒

- **[#1823](https://github.com/netease-youdao/LobsterAI/pull/1823)** `Fisherdaddy/fix schema or payload`：跨 5 个模块的大范围变更，已开放 1 天，建议优先审阅以避免与后续发布冲突。

---

*日报生成时间：2026-04-26 | 数据来源：GitHub API 快照 | 项目地址：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-26

## 1. 今日速览

Moltis 今日保持**中等活跃水平**，24小时内处理2条Issues（关闭1条、新增1条）和7条PR（合并/关闭3条、待审4条）。核心进展集中在**MCP协议栈清理**与**技能系统治理**两个方向：PR #874 移除了`mcporter`兼容层以简化原生MCP调用，PR #870 新增了技能白名单/黑名单过滤机制。值得注意的是，今日新增Issue #875暴露了技能过滤UI与后端配置之间的同步漏洞，可能与PR #870的合并存在关联。无新版本发布，项目处于功能打磨期。

---

## 2. 版本发布

**无今日发布**

---

## 3. 项目进展

### 已合并/关闭的关键PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#874](https://github.com/moltis-org/moltis/pull/874) | penso | **移除`mcporter`兼容层**，原生MCP工具优先；新增`mcp__<server>__<tool>`调用规范 | **架构简化**：消除OpenClaw CLI路径的双轨制混乱，降低MCP认知负担；为后续MCP生态扩展奠定 clean base |
| [#871](https://github.com/moltis-org/moltis/pull/871) | Cstewart-HC | **Cron心跳防重燃机制**：exec完成回调不再立即触发二次心跳 | **稳定性提升**：阻断高频exec场景下的CPU空转/日志风暴，对自动化agent工作负载至关重要 |
| [#870](https://github.com/moltis-org/moltis/pull/870) | Cstewart-HC | **技能黑白名单过滤**：`whitelist_mode` + `bundled_whitelist/blacklist`，支持`category/*`通配 | **治理增强**：解决多租户/企业部署中技能暴露面控制需求，与PR #866的Landlock沙箱形成纵深防御 |

**整体里程碑评估**：今日合并标志着Moltis在**"可控性"维度**取得实质性进展——从运行时可隔离（Landlock PR #866待审）、到技能可过滤（PR #870已合）、再到MCP调用可直联（PR #874已合），企业级部署能力三角趋于完整。

---

## 4. 社区热点

> 注：今日所有Issues/PR评论数均为0，👍均为0，社区互动处于**静默期**。以下按技术影响力排序分析。

| 条目 | 类型 | 热度分析 | 背后诉求 |
|:---|:---|:---|:---|
| [#874](https://github.com/moltis-org/moltis/pull/874) | PR (已合) | MCP架构重构，涉及工具调用范式变更 | **开发者体验诉求**：用户厌倦了"skill vs native MCP"的双轨困惑，要求单一、可预测的工具发现机制 |
| [#875](https://github.com/moltis-org/moltis/issues/875) | Issue (新开) | 技能过滤后端已合但Web UI未同步 | **配置一致性诉求**：企业用户期望"一处配置、全局生效"，前后端状态漂移直接阻断功能使用 |
| [#869](https://github.com/moltis-org/moltis/pull/869) | PR (待审) | 引入Obscura侧载浏览器后端，零新增依赖 | **部署灵活性诉求**：Chromium重度依赖成为边缘/容器场景痛点，需要轻量级替代方案 |

**关键信号**：PR #874的零评论快速合并（同日创建+关闭）暗示该变更可能由维护者内部驱动或存在线下共识，但缺乏社区验证增加了回归风险。

---

## 5. Bug 与稳定性

| 严重度 | 条目 | 描述 | Fix状态 | 关联PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#875](https://github.com/moltis-org/moltis/issues/875) | **Web端无法禁用内置技能** — 用户勾选禁用后无实际效果 | ❌ **无Fix PR** | 疑似与PR #870后端变更未同步UI有关 |
| 🟡 中 | [#873](https://github.com/moltis-org/moltis/issues/873) | Qwen3.6-35B-A3B模型使用MCP服务器异常 | ✅ **已关闭** | 由PR #874间接解决（移除mcporter路径后原生MCP可用） |

**风险评估**：Issue #875构成**功能回归**——PR #870合并后，后端已支持过滤但前端配置入口失效，导致用户陷入"配置存在但不可操作"的陷阱。建议**阻塞下一版本发布**直至修复。

---

## 6. 功能请求与路线图信号

| 来源 | 需求信号 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| PR #876 [待审](https://github.com/moltis-org/moltis/pull/876) | Web聊天会话文件上传按钮 | **高** | 直接对标OpenAI/Claude UX标准，代码已完成（`file-upload.ts`模块），预计1-2日内合并 |
| PR #869 [待审](https://github.com/moltis-org/moltis/pull/869) | Obscura轻量级浏览器后端 | **中高** | 零依赖设计降低维护成本，但需评估Obscura项目自身可持续性（h4ckf0r0day/obscura星标<100） |
| PR #866 [待审](https://github.com/moltis-org/moltis/pull/866) | Landlock内核级文件沙箱 | **中** | 安全基础设施，但存在优雅降级复杂度；与PR #870技能过滤形成组合，可能打包进入企业版特性 |
| PR #826 [待审](https://github.com/moltis-org/moltis/pull/826) | compaction摘要模型可配置 | **中低** | 技术债清理，依赖ProviderRegistry重构，可能随配置系统大版本更新合并 |

**路线图推测**：下一版本（v0.x.0）大概率包含**文件上传（#876）+ Obscura后端（#869）+ 技能过滤（#870已合）**，形成"多模态输入-轻量浏览-精细管控"的功能组合。

---

## 7. 用户反馈摘要

> 基于Issues正文提炼，无评论可供分析。

| 痛点 | 场景 | 来源 |
|:---|:---|:---|
| **MCP工具调用路径混乱** | 使用Qwen3.6-35B-A3B时，不确定该走`mcporter`还是原生MCP | #873 |
| **技能管理前后端不一致** | 企业部署中需禁用特定内置技能，Web配置失效导致安全合规受阻 | #875 |
| **浏览器后端过重** | 容器/边缘环境启动Chromium资源消耗过高 | #869 隐含诉求 |

**满意度盲区**：今日零评论、零反应的数据表明，要么用户基数尚小，要么核心用户已迁移至其他沟通渠道（Discord/线下）。建议维护者在关键PR中主动@早期采用者收集验证反馈。

---

## 8. 待处理积压

| 条目 | 创建时间 | 滞留天数 | 风险说明 |
|:---|:---|:---|:---|
| PR #826 [feat(compaction): wire summary_model config](https://github.com/moltis-org/moltis/pull/826) | 2026-04-22 | **4天** | 配置系统债务，阻塞结构化压缩模式的可靠性提升；存在"Partially addresses fork issue #1"的跨仓库依赖，需确认fork同步策略 |
| PR #866 [Landlock FS isolation](https://github.com/moltis-org/moltis/pull/866) | 2026-04-24 | **2天** | 安全关键基础设施，内核兼容性测试矩阵复杂（旧内核/容器seccomp/不同发行版），但延迟合并将增加安全审计窗口期 |

**维护者行动建议**：
- **立即**：指派UI开发者跟进Issue #875，确认PR #870的`SkillsConfig`变更是否遗漏Web层绑定
- **本周**：完成PR #826的ProviderRegistry兼容性评审，避免与即将到来的配置系统重构冲突
- **下周前**：为PR #866建立CI测试矩阵（Ubuntu 22.04/24.04、容器seccomp模式、无Landlock内核降级路径）

---

*日报生成时间：2026-04-26 | 数据来源：GitHub API | 项目地址：[moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-26

> **项目**: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | **日期**: 2026-04-26 | **分析周期**: 过去24小时

---

## 1. 今日速览

CoPaw 项目今日呈现**高活跃度、高压力**状态：24小时内产生 **14 条 Issues 更新**（13 活跃/新开 vs 仅 1 关闭）和 **10 条 PR 更新**（7 待合并 vs 3 已合并/关闭），社区反馈量显著超过处理能力。核心痛点集中在**配置持久化失效**（多个 Issue 关联）、**Windows 平台兼容性**及**MCP 集成稳定性**三大领域。项目团队紧急发布了 `v1.1.4.post2` 热修复版本，但配置丢失类问题仍未完全解决，用户信任度面临考验。整体健康度：**功能迭代活跃，但稳定性债务累积，需优先消化 Bug 积压**。

---

## 2. 版本发布

### [v1.1.4.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4.post2) — 紧急热修复

| 属性 | 内容 |
|:---|:---|
| **发布类型** | Patch 热修复（post-release） |
| **发布时间** | 2026-04-25 |
| **合并 PR** | [#3832](https://github.com/agentscope-ai/QwenPaw/pull/3832), [#3833](https://github.com/agentscope-ai/QwenPaw/pull/3833) |

**更新内容：**
- **修复**: 频道内审批功能失效问题（`approval not working in channel`）— 由 [@rayrayraykk](https://github.com/rayrayraykk) 修复
- **变更**: 版本号提升至 `1.1.4.post2`

**破坏性变更**: 无

**迁移注意事项**: 
- 该版本为**紧急补丁**，仅包含单一修复，未涉及配置持久化等核心问题
- 使用 Docker 部署的用户需拉取最新镜像；Windows 用户需注意 [#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) 报告的渲染问题是否仍存在

> ⚠️ **关键观察**: 此 post-release 的发布节奏（距 v1.1.4 极短）表明团队正在快速响应生产环境问题，但修复范围有限，未覆盖今日社区反馈最强烈的配置丢失问题。

---

## 3. 项目进展

### 今日已合并/关闭 PR（3 条）

| PR | 作者 | 状态 | 功能/修复价值 |
|:---|:---|:---|:---|
| [#3832](https://github.com/agentscope-ai/QwenPaw/pull/3832) | rayrayraykk | **已合并** | 修复频道审批功能 — 解锁企业级协作场景的关键工作流 |
| [#3833](https://github.com/agentscope-ai/QwenPaw/pull/3833) | rayrayraykk | **已合并** | 版本号 bump — 支撑 v1.1.4.post2 发布 |
| [#2338](https://github.com/agentscope-ai/QwenPaw/pull/2338) | jinglinpeng | **已关闭** | [首次贡献] UI 语言持久化到服务端 — **遗憾关闭**，该功能本可解决多设备同步痛点 |

### 待合并 PR 中的关键进展（7 条）

| PR | 作者 | 状态 | 预期价值 |
|:---|:---|:---|:---|
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) | bowenliang123 | **开放** | 模型管理重构：用可浏览远程模型列表替代"自动发现"，提升模型配置 UX |
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | ekzhu | **开放** | 异步 LLM 生成会话标题 — 替代"前10字符截断"的粗糙方案，提升专业感 |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | no-teasy | **开放** | 向量模型连接测试功能 — **直接响应** [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) 的配置失效痛点 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | youngchan1988 | **开放** | [首次贡献] Tauri 2.x 桌面端支持 — 替代 Electrobun，可能解决 Windows 渲染性能问题 |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | hellogxp | **审核中** | 语义化 Skill 路由（Embedding 检索过滤）— 大技能集场景的性能优化 |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | hanson-hex | **开放** | 前端测试基础设施（Vitest + 21 个测试文件）— 长期质量投资 |
| [#3834](https://github.com/agentscope-ai/QwenPaw/pull/3834) | shadowabi | **开放** | 修复 fallback agent profile 中 ACP 配置继承 — 修复默认命令路径问题 |

**整体推进评估**: 今日合并量有限（3 条含 2 条版本 bump 类），但**待合并队列质量较高**，覆盖 UX 优化（#3819, #3829）、稳定性修复（#3831, #3834）及架构升级（#3813）。项目处于"**高投入、低产出**"的消化期，合并瓶颈可能在于 code review 资源不足。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) **配置信息全部丢失** | **4 条** | **信任危机级反馈**：用户明确标注"严重 bug"，涉及智能体语言、计划模式、长期记忆 LLM 配置三大核心模块在刷新/重启后归零。截图证据充分，直接影响生产使用。 |
| 2 | [#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) Windows 渲染异常 | 3 条 | **平台兼容性断裂**：v1.1.4 在 Win10/Win2012 仅显示外框，回退 v1.1.2 正常。已关闭但未说明修复方式，用户可能仍需规避方案。 |
| 3 | [#3821](https://github.com/agentscope-ai/QwenPaw/issues/3821) 备份从未成功 | 3 条 | **数据安全感缺失**：备份功能长期不可用（多版本复现），1 分钟后跳回选择界面，无错误提示。用户质疑"有人成功过吗？" |
| 4 | [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) 长期记忆向量模型配置失效 | 3 条 | **技术深度最高的反馈**：用户已完成根因分析——容器启动 4 秒内初始化逻辑用空默认值覆盖 `agent.json`，并指出 `config.json` 与 `agent.json` 的双配置源冲突。 |

**背后诉求洞察**：
- **配置持久化是信任基石**：4 个高评论 Issue 中 3 个直接关联配置保存/恢复，表明用户从"尝鲜"进入"生产依赖"阶段，对数据可靠性要求质变
- **Windows 企业用户被边缘化**：[#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) + [#3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) 控制台性能问题，暗示桌面端技术债（Electrobun→Tauri 迁移的紧迫性）

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 严重等级 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0 - 数据丢失** | [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | 刷新/重启后智能体配置全部丢失 | 所有 Web UI 用户 | ❌ **无** |
| **P0 - 数据丢失** | [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Docker 重启后向量模型配置被空值覆盖 | Docker 部署用户 | 🔄 [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) 部分相关（连接测试，非持久化修复） |
| **P0 - 数据丢失** | [#3828](https://github.com/agentscope-ai/QwenPaw/issues/3828) | `config.json` 与 `agent.json` 配置不同步导致"伪丢失" | 多 Agent 架构用户 | ❌ **无** |
| **P1 - 功能崩溃** | [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) | MCP 调用导致聊天无限卡死，需手动停止 | MCP 用户（魔塔社区必应搜索） | ❌ **无** |
| **P1 - 功能崩溃** | [#3795](https://github.com/agentscope-ai/QwenPaw/issues/3795) | 复杂操作后持续 422 MODEL_EXECUTION_FAILED | v1.1.3 用户 | ❌ **无** |
| **P1 - 平台兼容** | [#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) | Windows 仅显示外框，无法呈现内容 | Win10/Win2012 用户 | ❌ **已关闭但未验证修复** |
| **P2 - 功能异常** | [#3836](https://github.com/agentscope-ai/QwenPaw/issues/3836) | `browser_use` 无法浏览网页（ERR_INTERNET_DISCONNECTED） | 浏览器工具用户 | ❌ **无** |
| **P2 - 功能异常** | [#3835](https://github.com/agentscope-ai/QwenPaw/issues/3835) | 自定义 ACP Agent 无法重命名/删除 | Web UI 配置用户 | ❌ **无** |
| **P2 - 功能异常** | [#3827](https://github.com/agentscope-ai/QwenPaw/issues/3827) | 无法恢复 secrets | 密钥管理用户 | ❌ **无** |

**稳定性评估**: 
- **配置持久化类 Bug 形成集群**，根因指向统一的架构问题：前端配置保存逻辑与后端配置加载逻辑存在竞态或双源冲突（`config.json` vs `agent.json`）
- **MCP 集成稳定性**成为新风险点，[#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) 的"无限卡死"可能涉及异步超时控制缺失

---

## 6. 功能请求与路线图信号

### 用户提出的新需求

| Issue | 需求 | 技术可行性 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#3825](https://github.com/agentscope-ai/QwenPaw/issues/3825) | Shell 工具子进程注入 per-message 上下文（Matrix sender/room/session） | 中：需扩展 `build_env_context` 到环境变量层 | ⭐⭐⭐ 中高 — 架构清晰，企业场景刚需 |
| [#3823](https://github.com/agentscope-ai/QwenPaw/issues/3823) | 自动备份 API / 命令行接口 | 高：现有备份逻辑的暴露层 | ⭐⭐⭐⭐ 高 — 直接响应 [#3821](https://github.com/agentscope-ai/QwenPaw/issues/3821) 的备份失败痛点 |
| [#3820](https://github.com/agentscope-ai/QwenPaw/issues/3820) | `dream_callback` 重试机制（夜间记忆优化） | 中：需设计指数退避策略 | ⭐⭐⭐ 中高 — 可靠性增强，代码位置明确 |

### 已有 PR 中的路线图信号

| PR | 信号 | 与用户需求关联 |
|:---|:---|:---|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x 桌面端 | **技术栈迁移**：Electrobun → Tauri | 可能根治 [#3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) 控制台性能问题 + [#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) Windows 兼容性 |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) 语义化 Skill 路由 | **性能优化**：Embedding 检索减少 Token 消耗 | 大技能集用户的扩展性需求 |
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) 模型管理重构 | **UX 升级**：从"自动发现"到"可浏览列表" | 降低模型配置门槛，减少配置错误 |

**路线图判断**: 下一版本（v1.1.5 或 v1.2.0）大概率聚焦 **"稳定性加固 + 配置系统重构"**，而非新功能。Tauri 迁移和配置持久化修复应是最高优先级。

---

## 7. 用户反馈摘要

### 💔 核心痛点（按提及频率）

| 痛点 | 典型原话 | 场景 |
|:---|:---|:---|
| **配置像沙子，握不住** | "明明已经选择 plan 模式，关闭后再打开就没了" | 生产环境部署后维护 |
| **备份是薛定谔的** | "尝试备份都是这个状态，显示一分钟左右然后跳回" | 数据迁移/灾难恢复 |
| **Windows 二等公民** | "1.1.4 版本在 windows 上无法呈现内容，只有个外框" | 企业内网 Windows 服务器 |
| **MCP 俄罗斯轮盘** | "有时候会无限期卡死，这里的卡死不是 UI 卡死，而是聊天一直等待不了回复" | 集成外部搜索能力 |
| **错误信息黑洞** | "422 MODEL_EXECUTION_FAILED...之后就一直报错了" | 复杂任务执行 |

### 😊 满意点（间接推断）

- **快速迭代认可**：v1.1.4.post2 的紧急发布表明团队响应速度快
- **功能丰富度**：用户愿意尝试计划模式、长期记忆、MCP 等高级功能，说明产品方向有吸引力
- **社区自助分析**：[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) 用户自行完成根因分析，社区技术深度较高

### 🔍 使用场景洞察

- **Docker + 自托管为主流**：多个 Issue 提及 Docker 部署、`network_mode: host`
- **Ollama 本地模型生态**：与 `bge-m3:latest` 等本地向量模型配合使用
- **多 Agent 协作架构**：[#3828](https://github.com/agentscope-ai/QwenPaw/issues/3828) 明确提及"多 agent 架构"，用户正在构建复杂系统

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) 语义化 Skill 路由 | 2026-04-08 | **今日** | **18 天待合并**，首次贡献者，需讨论标签。可能因 review 资源不足阻塞，挫伤社区贡献积极性 |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) 前端测试基础设施 | 2026-04-18 | **今日** | **8 天待合并**，21 个测试文件 + CI 工作流，是长期质量投资，但可能因范围大难以 review |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) 向量模型配置失效 | 2026-04-24 | **今日** | 用户已提供**完整根因分析**，维护者只需确认并修复，低 hanging fruit |
| [#3828](https://github.com/agentscope-ai/QwenPaw/issues/3828) 配置双源冲突 | 2026-04-25 | **今日** | 与 [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)、[#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) 同源，建议合并处理 |

### 📌 维护建议

1. **配置持久化专项**：建议维护者发起 Configuration Persistence RFC，统一 `config.json` / `agent.json` / 数据库的优先级逻辑
2. **首次贡献者保护**：[#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)、[#2338](https://github.com/agentscope-ai/QwenPaw/pull/2338) 的关闭/长期挂起可能传递负面信号，需明确反馈或分配 mentor
3. **Windows 专项测试**：Tauri PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 合并前应增加 Windows CI 流水线

---

> **日报生成说明**: 本报告基于 GitHub 公开数据自动生成，Issue/PR 链接均为真实可访问。如需深度分析特定技术议题，可进一步展开。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-26

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-04-26  
> **分析周期**: 过去 24 小时（2026-04-25 至 2026-04-26）

---

## 1. 今日速览

今日 ZeptoClaw 项目保持**中等活跃度**，核心维护者 qhkm 主导了 4 条 PR 的处理，其中 3 条已关闭/合并，1 条待审阅。无新 Issue 产生，社区讨论处于静默期。工作焦点集中在**CI 基础设施加固**与**依赖链修复**两大工程债务领域，未涉及新功能开发。整体项目健康度**稳健**，但外部贡献者的 PR 合并流程仍存在 OAuth 权限摩擦（#544 → #548 的 cherry-pick 迂回），反映出协作工具链有待优化。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（3 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#544](https://github.com/qhkm/zeptoclaw/pull/544) | manelsen | 扩展 CI feature-matrix，覆盖 `channel-email`、`google`、`provider-vertex`、`whatsapp-web` 等可选集成路径的编译检查 | **阻断静默回归**：此前这些可选功能路径在默认构建外"悄然漂移"，现纳入强制编译验证，显著提升多模块项目的长期可维护性 |
| [#547](https://github.com/qhkm/zeptoclaw/pull/547) | qhkm | `sha2` 0.10 → 0.11 迁移修复：将 `format!("{:x}", hasher.finalize())` 迁移至 `hex::encode()`，适配 `digest` v0.11 的 `hybrid-array::Array` 新类型 | **主动化解依赖危机**：在 Dependabot 原始 PR #517 基础上，快速响应 Rust 加密生态的破坏性变更，避免构建瘫痪 |
| [#517](https://github.com/qhkm/zeptoclaw/pull/517) | dependabot[bot] | `sha2` 0.10.9 → 0.11.0 自动化升级（原始触发） | **触发事件**：因构建失败未被直接合并，但驱动了 #547 的人工修复闭环 |

### 🔄 待审阅 PR（1 条）

| PR | 作者 | 状态 | 说明 |
|:---|:---|:---|:---|
| [#548](https://github.com/qhkm/zeptoclaw/pull/548) | qhkm | **OPEN** | #544 的 cherry-pick 重提，因外部贡献者分支受 OAuth `workflow` scope 限制无法直接推送，维护者采用"作者自有分支"策略绕过。待 CI 通过后合并 |

**今日项目里程**：CI 覆盖半径扩大约 **4 个可选集成模块**；依赖链关键路径修复 **1 处**；协作流程摩擦暴露 **1 项**（OAuth scope 配置）。

---

## 4. 社区热点

**今日无活跃讨论。** 所有 PR 评论数均为 `undefined`（零评论），👍 反应均为 0。

| 潜在热点 | 分析 |
|:---|:---|
| [#548](https://github.com/qhkm/zeptoclaw/pull/548) 的 cherry-pick 迂回 | **隐性诉求信号**：外部贡献者 manelsen 的 #544 因权限问题无法直接合并，反映项目对第三方 fork 的 CI secret/workflow 权限策略过于严格。这已非首次（#521/#542 同类问题），可能抑制社区贡献意愿。建议评估 `pull_request_target` 事件配置或文档化贡献者权限申请流程 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | `sha2` 0.11 升级导致构建失败：`hybrid-array::Array` 未实现 `LowerHex`，三处 `format!` 调用编译错误 | #517 (Dependabot) | [#547](https://github.com/qhkm/zeptoclaw/pull/547) | **已修复** ✅ |
| 🟡 **中** | 可选集成模块（`memory-embedding`、`screenshot` 等）在默认 CI 外编译漂移，存在静默失效风险 | 工程债务累积 | [#544](https://github.com/qhkm/zeptoclaw/pull/544) / [#548](https://github.com/qhkm/zeptoclaw/pull/548) | **修复中**（#548 待合并）|

> **注**：无今日新报告 Bug；上述均为历史问题在 24 小时内的闭环处理。

---

## 6. 功能请求与路线图信号

**今日无新功能请求（Issues: 0）。**

从已处理 PR 推断**工程优先级信号**：

| 信号 | 解读 |
|:---|:---|
| CI matrix 扩张至通信/AI 集成层 | 项目正从"核心框架"向"集成生态"阶段过渡，`channel-email`、`provider-vertex`、`whatsapp-web` 等模块的强制编译检查暗示这些路径的用户采用率在上升 |
| `memory-embedding` 纳入 CI | 向量/嵌入功能可能从实验性转向准生产级，值得关注是否近期有正式发布计划 |
| 无 Runtime 功能 PR | 短期内（1-2 周）大概率无特性版本发布，以基础设施硬化为主 |

---

## 7. 用户反馈摘要

**今日无用户反馈可提取（Issues: 0，PR 评论: 0）。**

**历史隐含痛点**（从 #544 描述推断）：
- **痛点**：可选功能"悄然漂移"（silently drifted behind the default build）—— 用户可能在非默认配置下遭遇编译失败，且问题发现滞后
- **场景**：多模块定制部署（如仅启用 `whatsapp-web` + `provider-vertex` 的轻量级 AI 助手实例）
- **满意度提升点**：CI 矩阵扩张后，此类场景的可靠性将显著改善

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| 🔧 **流程债务** | OAuth `workflow` scope 限制 | 复发性（#521/#542/#544） | 外部贡献者 PR 无法触发所需 CI workflow，被迫 cherry-pick 至维护者分支 | 评估 GitHub Actions 的 `pull_request_target` 安全配置，或设立 `contributors` 团队预授权 |
| ⏳ **待合并 PR** | [#548](https://github.com/qhkm/zeptoclaw/pull/548) | 2026-04-25 | 待 CI 通过及最终审阅 | 维护者关注合并进度，避免与 #544 重复关闭导致贡献者混淆 |

---

## 附录：数据溯源

| 指标 | 数值 |
|:---|:---|
| Issues 更新（24h） | 0（新开/活跃: 0，关闭: 0）|
| PR 更新（24h） | 4（待合并: 1，已合并/关闭: 3）|
| Releases | 0 |
| 活跃贡献者 | 2（qhkm, manelsen）+ Dependabot |

---

*日报基于 GitHub 公开数据生成，未包含私有讨论或外部沟通渠道信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-26

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**：过去24小时内产生 **50 条 Issue 动态**（37 活跃/新开，13 关闭）和 **43 条 PR 动态**（31 待合并，12 已合并/关闭），无新版本发布。社区聚焦在 **v0.7.4 里程碑冲刺**、**多租户 RBAC 架构设计**以及 **DeepSeek/Ollama 等国产/本地模型兼容性修复**。值得注意的是，多个长期存在的 Web Dashboard 构建问题和安全策略误报今日获得关闭，但 Matrix 通道加密反应、ACP 服务器协议兼容性等新问题浮现，显示项目在扩展多通道能力时仍面临边缘场景挑战。

---

## 2. 版本发布

**无今日发布**。v0.7.4 里程碑正在推进中（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)），该版本因 v0.7.3 紧急发布（标签损坏问题）而重新编号，目前 Skills 模块的 `review-session` 功能已落地，但多项核心变更仍在 PR 队列中等待合并。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 影响 |
|:---|:---|:---|:---|
| [#6111](https://github.com/zeroclaw-labs/zeroclaw/pull/6111) | kiwi-dev-la | CI 工作流重命名：将 `claude-code-review.yml` 更名为 Paperclip 反馈机制 | 内部工具链维护，对外无直接影响 |
| [#6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) | justjuangui | **删除 566 行死代码**：移除 `zeroclaw-runtime` 中从未编译的 `cost/tracker.rs` 孤儿文件 | 代码库健康度提升，对应 Issue [#6094](https://github.com/zeroclaw-labs/zeroclaw/issues/6094) |
| [#6066](https://github.com/zeroclaw-labs/zeroclaw/pull/6066) | justjuangui | 修复 `--features rag-pdf` 特性标志仅传递给 `zeroclaw-tools` 而未传递到 `zeroclaw-runtime` 的问题 | 解决 PDF RAG 功能静默失效问题 |

### 已关闭的重要 Issue

| Issue | 说明 |
|:---|:---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | **Web Dashboard 不可用问题**（25 评论）—— 长期困扰用户的构建/路径配置问题，今日关闭，标志着安装体验重大改善 |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | `gateway.web_dist_dir` 与 `ZEROCLAW_WEB_DIST_DIR` 环境变量文档缺失问题，文档已补充 |
| [#5930](https://github.com/zeroclaw-labs/zeroclaw/issues/5930) | i18n 提示词功能请求，经讨论后关闭（可能已有替代方案或判定为低优先级） |
| [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) | `always_ask` 工具在非 CLI 通道被静默拒绝而非提示确认的问题，修复完成 |
| [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | UI 添加 cron 任务被安全限制阻止的问题，已解决 |

**整体评估**：今日关闭的 Issue 以**历史债务清偿**为主，特别是 Web Dashboard 相关问题的批量解决显著改善了首次安装体验。但 v0.7.4 里程碑中标记为完成的 Skills 功能（`review-session`）对应的 PR 仍在队列中，实际代码合并进度略滞后于里程碑勾选状态。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web Dashboard 仍不可用 | 25 | **已关闭**。历时近一个月的安装体验痛点，涉及 Tauri 桌面应用与 Web UI 的双重失败，最终通过文档+构建流程修复解决。高评论量反映大量用户遭遇相同阻塞。 |
| 2 | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) 按发送者 RBAC 多租户部署 | 7 | **开放中**。企业级需求信号强烈——隔离工作空间、工具集、速率限制和系统提示，直接对标 B2B SaaS 场景。目前 ZeroClaw 单安全边界架构成为商业化瓶颈。 |
| 3 | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) `web_dist_dir` 文档缺失 | 7 | **已关闭**。S0 级别（数据丢失/安全风险），实际为配置困惑导致的功能不可用，非真正安全漏洞，标签显示项目 severity 分级存在泛化问题。 |
| 4 | [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) v0.7.4 里程碑跟踪 | 6 | **开放中**。版本发布协调中枢，反映项目管理透明度，但 "emergency v0.7.3 ship (broken tags blowout)" 备注暴露发布流程脆弱性。 |
| 5 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) Schema v3 批量破坏性字段迁移 | 6 | **开放中**。**合并阻塞器**。所有破坏性配置变更需在此协调下单次落地，避免用户反复迁移。显示项目进入架构成熟期，开始重视向后兼容性。 |

### 新兴热点

- **[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)** DeepSeek-V4 API 格式不兼容（6 评论）：国产大模型生态适配需求上升，thinking mode 成为兼容性新挑战。
- **[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)** 多智能体 UX 流 RFC（5 评论）：进入 7 天讨论期，核心团队投票机制（#5577 §8.2）显示项目治理规范化。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | 数量 | 关键 Issue | 状态 |
|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | 2 | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) 已关闭；[#6090](https://github.com/zeroclaw-labs/zeroclaw/issues/6090) Telegram 配置错误导致 Anthropic 调用失败（开放，2 评论） | 50% 待修复 |
| **S1 - 工作流阻塞** | 5 | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) 工具调用输出找不到对应 `call_id`（5 评论，修复中）；[#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web 通道损坏（4 评论，修复中）；[#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) Ollama 工具调用失败（3 评论）；[#6100](https://github.com/zeroclaw-labs/zeroclaw/issues/6100) ACP 服务器未提供 v1 schema（1 评论，已阻塞）；[#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) 已关闭 | 60% 待修复 |
| **S2 - 降级行为** | 5 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 兼容；[#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) 本地图片读取失败（技能生成路径问题）；[#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) 已关闭；[#6066](https://github.com/zeroclaw-labs/zeroclaw/issues/6066) 已关闭；[#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) `install.sh` 未提取 Web Dashboard（1 评论） | 40% 待修复 |
| **S3 - 轻微问题** | 3 | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) Agent 不知自身可添加 cron（3 评论）；[#6094](https://github.com/zeroclaw-labs/zeroclaw/issues/6094) 死代码孤儿文件（已有关 PR #6098）；[#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073) Web UI 编辑器光标错位（1 评论） | 67% 待修复 |

### 已有 Fix PR 的 Bug

| Issue | Fix PR | 说明 |
|:---|:---|:---|
| [#6094](https://github.com/zeroclaw-labs/zeroclaw/issues/6094) 死代码孤儿文件 | [#6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) | 待合并 |
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 兼容 | [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) | **今日新提**：捕获流式响应中的 `reasoning_content`，解决 thinking mode 400 错误 |
| [#6100](https://github.com/zeroclaw-labs/zeroclaw/issues/6100) ACP server v1 schema | [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) | 高风险 PR，工具输出格式化修正 |
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web 通道 | 未明确 | 长期停滞，需关注 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（可能纳入 v0.7.4+）

| Issue/PR | 功能 | 路线图信号 | 实现概率 |
|:---|:---|:---|:---|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | **按发送者 RBAC 多租户** | 无现成 PR，但架构 RFC [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 正在讨论 | ⭐⭐⭐ 中 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | **Schema v3 配置迁移** | 明确标记为合并阻塞器，有进行中 PR | ⭐⭐⭐⭐⭐ 高 |
| [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) | **多智能体 v1 跟踪器** | 协调多个开放 Issue/PR，有专门跟踪 | ⭐⭐⭐⭐ 中高 |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | **Mozilla Fluent i18n 管道 + 多语言文档** | XL 级 PR，4 月 16 日创建，持续更新 | ⭐⭐⭐⭐ 中高 |
| [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) | **Onboard 向导重写**（schema 驱动、幂等、DRY） | XL 级 PR，替换 8,534+3,898 行单体代码 | ⭐⭐⭐⭐⭐ 高（v0.7.4 核心） |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | **通道回复意图预检可配置**（轻量模型+超时+计时日志） | 有进行中标记，性能优化类 | ⭐⭐⭐⭐ 中高 |

### 生态扩展请求

| Issue | 场景 | 商业化潜力 |
|:---|:---|:---|
| [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) ZeroClaw MCP → Xcode | 开发者 IDE 集成 | 高（开发者工具市场）|
| [#6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075) Discord 频道访问限制 | 社区机器人精细化管控 | 中（社区运营）|
| [#6077](https://github.com/zeroclaw-labs/zeroclaw/issues/6077) Web UI 清除聊天窗口 | 基础 UX 改进 | 低但用户高频需求 |

---

## 7. 用户反馈摘要

### 核心痛点

| 主题 | 典型反馈 | 来源 |
|:---|:---|:---|
| **安装/首次运行挫败感** | "Web dashboard not available. Build it with: cd web && npm ci && npm run build" — 持续多版本 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| **配置发现性差** | `gateway.web_dist_dir` 和 `ZEROCLAW_WEB_DIST_DIR` 完全无文档，用户不知如何使用 | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| **模型选择成本不透明** | OpenRouter "free" 模型标识缺失，用户担心意外高额计费 | [#6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070) |
| **Ollama 工具调用完全失效** | `tool_count=0` 硬编码，"completely breaks tool calling for all Ollama-hosted models" | [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) |

### 使用场景与满意度

- **满意点**：Raspberry Pi 成功运行（[#6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075)），轻量部署能力受认可；多通道支持（Telegram、Discord、Matrix、Nextcloud Talk）覆盖多元用户群体。
- **不满意点**：Agent 自我认知不足（不知自身有 cron 能力，[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)）；Web UI 编辑器光标错位等" polish 级"体验瑕疵（[#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073)）；流式模式下思考内容无法屏蔽（[#5318](https://github.com/zeroclaw-labs/zeroclaw/issues/5318)）。

### 企业/高级用户信号

- **多租户隔离**（[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)）："single ZeroClaw instance can serve multiple user classes (customers, operators, developers)" — 明确的 B2B 需求
- **MCP 协议集成**（[#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)）：用户希望将对话记忆持久化到 Obsidian，同时无缝桥接 Xcode 编码工作流

---

## 8. 待处理积压

### 需维护者关注的重要积压

| Issue/PR | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web 通道损坏 | 2026-03-27 | 2026-04-25 | **S1 阻塞**，近一个月无明确修复 | 指定负责人或降级支持声明 |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) Ollama `tool_count=0` 硬编码 | 2026-04-07 | 2026-04-25 | 4 👍 高社区关注，本地模型生态关键 | 优先评审相关 PR（如有）|
| [#5318](https://github.com/zeroclaw-labs/zeroclaw/issues/5318) 流式 Partial 模式屏蔽思考内容 | 2026-04-05 | 2026-04-25 | 中文社区需求，用户体验 | 评估是否与 [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) 的 reasoning_content 处理相关 |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) i18n 文档大修（XL PR） | 2026-04-16 | 2026-04-25 | 10 天未合并，可能阻塞其他文档 PR | 安排专门评审窗口，避免无限期挂起 |
| [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) Onboard 重写（XL PR） | 2026-04-21 | 2026-04-25 | v0.7.4 里程碑核心依赖 | 每日同步进度，避免再次版本跳号 |

### 今日新增需跟踪

- [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) `install.sh` 未提取 Web Dashboard — 与刚关闭的 [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) 可能形成回归，需验证修复完整性
- [#6100](https://github.com/zeroclaw-labs/zeroclaw/issues/6100) ACP server v1 schema — 外部客户端（nori-cli）集成失败，协议兼容性承诺受质疑

---

*本日报基于 ZeroClaw GitHub 公开数据生成，涵盖 zeroclaw-labs/zeroclaw 仓库 2026-04-25 至 2026-04-26 期间活动。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*