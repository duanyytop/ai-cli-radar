# OpenClaw 生态日报 2026-04-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-22 00:13 UTC

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

# OpenClaw 项目动态日报 | 2026-04-22

---

## 1. 今日速览

OpenClaw 项目在 2026-04-22 保持**极高活跃度**：24 小时内 500 条 Issues 更新（324 活跃/新开，176 关闭）与 500 条 PR 更新（341 待合并，159 已合并/关闭）形成 1:1 的 Issue-PR 处理节奏，表明社区需求旺盛且维护团队响应迅速。3 个新版本发布聚焦向导体验优化，但核心基础设施层面仍存在大量回归性 Bug 待修复，特别是 OpenRouter/Codex 集成路径、Telegram/Discord 等渠道稳定性问题突出。PR 队列中 341 个待合并请求显示代码审查压力较大，部分贡献者因"too-many-prs"标签被关闭 PR，反映合并带宽瓶颈。

---

## 2. 版本发布

### v2026.4.20 (稳定版) & v2026.4.20-beta.2 / beta.1
- **发布日期**: 2026-04-20
- **更新内容**: 统一优化 Onboard/Wizard 体验：
  - 安全免责声明重设计：单条黄色警告横幅替代原有样式，增加章节标题与项目符号清单，取消注释正文置灰效果以提升关键指引可读性
  - 模型目录初始加载时新增加载动画，消除向导页面空白闪烁
- **破坏性变更**: 无
- **迁移注意事项**: 无需操作；UI 变更自动生效

> 注：三个版本变更日志内容高度重复，beta → stable 的发布流程显示该版本经过完整测试周期。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#69868](https://github.com/openclaw/openclaw/pull/69868) | gumadeiras | 插件源路径验证：防止 `openclaw.extensions` 或 `openclaw.setupEntry` 路径逃逸加载包内运行时文件 | ✅ 已关闭 |
| [#69884](https://github.com/openclaw/openclaw/pull/69884) | Eruditi | 日志子系统可选链修复 | ✅ 已关闭 |
| [#69882](https://github.com/openclaw/openclaw/pull/69882) | Eruditi | MiniMax M2.7 VLM 支持修复 | ✅ 已关闭 |
| [#69883](https://github.com/openclaw/openclaw/pull/69883) | Eruditi | MiniMax 529 过载故障转移修复 | ✅ 已关闭 |
| [#69881](https://github.com/openclaw/openclaw/pull/69881) | Eruditi | Onboard trim TypeError 修复 | ✅ 已关闭 |
| [#45166](https://github.com/openclaw/openclaw/pull/45166) | hugh-agent | Telegram `replyToModeByChatType` 功能（被 #69757 替代） | ✅ 已关闭 |
| [#69869](https://github.com/openclaw/openclaw/pull/69869) | gumadeiras | Discord slash 命令后续回复保持 ephemeral 可见性 | ✅ 已关闭 |

### 推进中的重大功能

| PR | 作者 | 规模 | 意义 |
|:---|:---|:---|:---|
| [#69757](https://github.com/openclaw/openclaw/pull/69757) | hugh-agent | **XL** | Telegram 按聊天类型回复模式，对齐 Slack 已有能力，解决群组/频道回复上下文丢失问题 |
| [#69584](https://github.com/openclaw/openclaw/pull/69584) | mmy4shadow | **XL** | Codex 网关运行时流修复：OAuth 浏览器回退、概览加载优化、Windows 调度任务支持 |
| [#69862](https://github.com/openclaw/openclaw/pull/69862) | gumadeiras | **XL** | 禁用插件的渠道存在性门控集中化：防止环境变量与过期认证泄漏已禁用渠道 |
| [#69608](https://github.com/openclaw/openclaw/pull/69608) | rubencu | **XL** | 启动上下文与日记忆处理对齐 session-summary 变体，修复 `/new` 端点行为 |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | OFABLE | **XL** | **PR 审查自动修复管道** + Windows 后台守护进程：引入 Claude Agent SDK 订阅自动处理审查评论 |
| [#69832](https://github.com/openclaw/openclaw/pull/69832) | DanWebb1949 | **XL** | **`openclaw diagnose` AI 诊断 CLI**：网关运营数据组装 → AI 模型结构化分析 → Markdown 报告 |

**里程碑判断**: `#68936` 的自动修复管道若合并，将标志 OpenClaw 成为首批内置 AI 驱动代码审查自动化的开源 AI 助手框架；`#69832` 的 diagnose 命令则体现运维可观测性的系统化升级。

---

## 4. 社区热点

### 最高讨论热度 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | **89** | 71 | **跨平台桌面客户端缺口**：macOS/iOS/Android 已有，Linux/Windows 长期缺失，71 赞显示大量开发者被排除在原生体验外 |
| 2 | [#55342](https://github.com/openclaw/openclaw/issues/55342) 技能行为声誉层 — 超越身份验证的缺失层 | 17 | 0 | **安全架构升级**：341 个恶意技能、13.4% 关键漏洞率、VirusTotal 无法检测提示注入，呼吁从"验证身份"扩展到"验证行为" |
| 3 | [#29053](https://github.com/openclaw/openclaw/issues/29053) MCP 客户端原生支持 | 17 | 19 | **生态互操作性**：OpenClaw 自有工具系统与行业标准化 MCP 协议的对接，避免生态孤岛 |
| 4 | [#35220](https://github.com/openclaw/openclaw/issues/35220) Codex Responses API 流式 server_error 不触发模型回退 | 16 | 0 | **可靠性工程**：流式错误处理链路断裂，已关闭但关联 #24378 显示根因未彻底修复 |
| 5 | [#65603](https://github.com/openclaw/openclaw/issues/65603) Azure Foundry GPT 模型请求被拒 | 15 | 0 | **云服务商兼容性**：2026.4.11 升级后推理模型与工具调用能力失效 |

### 诉求分析

- **平台公平性** (#75): 71 赞是数据中最强烈的用户信号，Linux/Windows 开发者构成贡献者基础却被边缘化
- **安全范式转移** (#55342): 零点赞但 17 条深度评论反映技术社区对"后身份验证安全"的严肃讨论，而非情绪反应
- **协议标准化** (#29053): 19 赞 + 17 评论显示 MCP 支持是"期待已久的基础设施"，与 OpenClaw 自有工具系统的张力需架构决策

---

## 5. Bug 与稳定性

### 🔴 严重/回归性 Bug（按影响范围排序）

| Issue | 类型 | 严重程度 | 状态 | 是否有 Fix PR | 关键信息 |
|:---|:---|:---:|:---|:---:|:---|
| [#66633](https://github.com/openclaw/openclaw/issues/66633) | Cloudflare 403 阻断 Codex 全部请求 | **回归** | ✅ 已关闭 | ⚠️ 关联 #69584 | 2026.4.12→4.14 升级后 `chatgpt.com/backend-api/v1` 触发 bot 缓解挑战 |
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | GitHub Copilot 模型请求被拒 | **回归** | 🔴 开放 | ❌ 无 | 2026.4.14→4.15 升级后首条消息成功、后续失败 |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | Azure Foundry GPT 推理+工具调用失效 | **回归** | 🔴 开放 | ❌ 无 | 2026.4.11 引入，禁用推理后仍有问题 |
| [#65867](https://github.com/openclaw/openclaw/issues/65867) | Gemini `<final>` 标签泄漏到消息 | **回归** | 🔴 开放 | ❌ 无 | #48587 历史重现，WebUI 可见 WhatsApp 不可见 |
| [#68056](https://github.com/openclaw/openclaw/issues/68056) | WhatsApp 单条媒体回复发送两次 | **回归** | 🔴 开放 | ❌ 无 | 2026.4.15 引入 |
| [#69064](https://github.com/openclaw/openclaw/issues/69064) | Telegram 轮询停滞自动恢复静默失败 | **崩溃/挂起** | 🔴 开放 | ❌ 无 | 检测器触发但无后续轮询，需手动 `systemctl restart` |
| [#69831](https://github.com/openclaw/openclaw/issues/69831) | `grammy` 模块缺失导致更新失败 | **回归** | 🔴 开放 | ❌ 无 | **今日新增**，Telegram 扩展依赖问题，6 赞显示影响广泛 |
| [#63129](https://github.com/openclaw/openclaw/issues/63129) | `@larksuiteoapi/node-sdk` 模块缺失 | **行为** | 🔴 开放 | ❌ 无 | 飞书依赖默认引入引发用户强烈不满（含辱骂性评论） |

### 🟡 渠道稳定性集群

| Issue | 渠道 | 问题 | 状态 |
|:---|:---|:---|:---|
| [#29214](https://github.com/openclaw/openclaw/issues/29214) | Signal | 群组 @提及不工作，每条消息都回复 | 🔴 开放（有变通方案）|
| [#37844](https://github.com/openclaw/openclaw/issues/37844) | Discord | 重复回复同一消息 | 🔴 开放 |
| [#38061](https://github.com/openclaw/openclaw/issues/38061) | Webchat | 重复助手消息（delivery-mirror 转录条目）| 🔴 开放 |
| [#36323](https://github.com/openclaw/openclaw/issues/36323) | Telegram | Markdown 表格渲染为文本墙 | 🔴 开放 |

**稳定性评估**: 2026.4.14-4.15 版本引入**密集回归**，涉及 Codex、Azure、GitHub Copilot、Gemini 四大提供商及 WhatsApp、Telegram 两大渠道。`#69831` 的 `grammy` 缺失与 `#63129` 的飞书依赖争议显示**扩展依赖管理**存在系统性风险。

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或明确路径）

| 需求 | Issue/PR | 纳入信号 |
|:---|:---|:---|
| Telegram 按聊天类型回复模式 | [#69757](https://github.com/openclaw/openclaw/pull/69757) | PR 已开，XL 规模，匹配 Slack 已有形状 |
| WhatsApp 引用回复 | [#62305](https://github.com/openclaw/openclaw/pull/62305) | PR 已开，采用 `replyToMode` 既有契约 |
| AI 诊断 CLI | [#69832](https://github.com/openclaw/openclaw/pull/69832) | PR 已开，运维体验升级 |
| PR 自动修复管道 | [#68936](https://github.com/openclaw/openclaw/pull/68936) | PR 已开，依赖 Claude Agent SDK 订阅 |

### 需架构决策

| 需求 | Issue | 障碍/考量 |
|:---|:---|:---|
| MCP 客户端原生支持 | [#29053](https://github.com/openclaw/openclaw/issues/29053) | 与自有工具系统的定位冲突：替代、并存还是桥接？ |
| 行为声誉系统 | [#55342](https://github.com/openclaw/openclaw/issues/55342) | 需设计去中心化/联邦化声誉基础设施，非短期可实现 |
| Linux/Windows 原生应用 | [#75](https://github.com/openclaw/openclaw/issues/75) | 71 赞但无 PR，可能受 Electron/Tauri 技术选型或资源约束 |
| Amazon Bedrock API Key 认证 | [#30215](https://github.com/openclaw/openclaw/issues/30215) | AWS SDK 默认凭证链之外的替代路径，云原生策略权衡 |

### 性能优化

| 需求 | Issue | 技术价值 |
|:---|:---|:---|
| 系统提示词前缀缓存优化 | [#40256](https://github.com/openclaw/openclaw/issues/40256) | 动态内容前置导致本地模型 8-16x 延迟，重排即可修复 |

---

## 7. 用户反馈摘要

### 😤 痛点（直接引用或提炼）

> **依赖管理失控**
> - "#63129: 妈的 傻逼国内开发者不会写代码就他妈别来污染openclaw行不 默认还他妈引入飞书的核心" — 情绪极端化反映**可选依赖默认加载**策略的伤害
> - "#69831: `grammy` 模块缺失导致 `openclaw update` 失败" — 扩展依赖未在更新流程中自动安装

> **升级恐惧**
> - "#66633: 升级后 every request fails"
> - "#68735: 首条消息成功，后续失败" — 非确定性回归比完全失败更难调试
> - "#62045: 2026.4.5 坏了 Codex mini，回滚到 2026.4.2 立即修复" — 用户形成"延迟升级"策略

> **平台歧视感**
> - "#75: Linux and Windows are missing" — 长期未响应导致"二等公民"认知

### 😊 满意点

> - 社区响应速度：176 Issues 关闭/500 显示维护团队活跃
> - 变通方案文化：#29214 标注 "[Workaround provided]"，#69104 用户自发提供 OpenRouter 修复配置

### 🔍 使用场景洞察

| 场景 | 来源 Issue | 隐含需求 |
|:---|:---|:---|
| systemd 托管的 Ubuntu VPS 长期运行 | #52037, #29736 | 守护进程稳定性、状态持久化路径可配置 |
| 多模型故障转移配置 | #66633, #35220 | 回退链路的端到端测试覆盖 |
| 中国大陆网络环境 | #38503 | 代理配置 JSON  schema 合法性、文档可达性 |
| 企业/团队群组部署 | #29214, #37844, #69757 | 渠道特定的回复策略、身份识别、权限控制 |

---

## 8. 待处理积压

### ⚠️ 长期 stale 但高价值 Issue

| Issue | 创建 | 最后更新 | 停滞天数 | 风险 |
|:---|:---|:---|:---:|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 原生应用 | 2026-01-01 | 2026-04-21 | ~110 天 | **71 赞**，平台公平性承诺未兑现，竞争者可能填补空缺 |
| [#26422](https://github.com/openclaw/openclaw/issues/26422) `message_sending` 插件钩子死代码 | 2026-02-25 | 2026-04-21 | ~55 天 | 插件 API 契约失效，破坏扩展生态信任 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) `agentDir` bootstrap 文件被静默忽略 | 2026-02-28 | 2026-04-21 | ~52 天 | 多代理配置的核心功能文档与实现不一致 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) `exec` 工具不继承 `skills.entries.*.env` | 2026-03-02 | 2026-04-21 | ~50 天 | 密钥注入失败，用户被迫使用不安全替代方案 |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) sandbox `workspaceAccess: "none"` 工作区只读 | 2026-03-06 | 2026-04-21 | ~46 天 | 隔离模型与可写工作区的设计矛盾 |

### 🔔 维护者行动建议

1. **优先级重校准**: `#75` 的 71 赞与 110 天停滞形成强烈反差，建议至少发布技术选型 RFC
2. **回归防护**: 2026.4.11-4.15 版本引入的 Bug 集群显示发布流程缺少提供商兼容性回归测试
3. **依赖治理**: `#63129` 与 `#69831` 表明需将扩展依赖改为懒加载或可选安装
4. **PR 带宽**: 341 待合并 PR 中大量为 Eruditi 的 XS 修复，建议设立"快速通道"自动化审查减少维护者负载

---

*日报生成时间: 2026-04-22 | 数据来源: github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-04-22

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"基础设施升级与质量巩固"的关键转折期**：头部项目（OpenClaw、NanoBot、Hermes Agent）日均 Issue/PR 处理量突破 50-100 条，社区规模与商业项目相当；MCP 协议成为事实标准但集成稳定性普遍不足，3 个项目同日报告 MCP 相关故障；安全纵深从"沙箱有无"转向"行为审计、供应链安全、执行审批绕过"等精细化防御；边缘部署（Raspberry Pi、WSL、Windows 原生）从"能跑"变为"跑得稳"的新战场。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (324活跃/176关闭) | 500 (341待合/159已合) | v2026.4.20 稳定版 + 2 beta | ⚠️ **高活跃高压** — 1:1 Issue-PR 节奏但 341 待合并暴露审查带宽瓶颈，回归 Bug 密集 |
| **NanoBot** | 69 (关闭率88.4%) | 39 (合并率59%) | v0.1.5.post2 | ✅ **健康迭代** — 高关闭率+新增12贡献者，LiteLLM供应链风险待解 |
| **Hermes Agent** | 50 (39活跃/11关闭) | 50 (34待合/16已合) | 无 | ✅ **质量打磨期** — TUI 集中治理4 PR，P1 审批死锁修复就绪 |
| **PicoClaw** | 7 | 18 (11已合) | v0.2.6-nightly | ✅ **架构升级** — Pipeline 重构完成，认证安全重构，i18n/历史持久化待补 |
| **NanoClaw** | 4 (全开放) | 27 (10已合/17待审) | 无 | ⚠️ **v2 摩擦期** — 多通道隔离、WSL 兼容、安装体验待打磨，Nostr 生态激进布局 |
| **NullClaw** | 2 | 1 (待合) | 无 | ⚠️ **低活跃待修复** — 边缘设备 CPU 空转有 PR 未合，Tailscale 文档缺口7天未响应 |
| **IronClaw** | 21 (9关闭) | 39 (待合积压) | v0.26.0 (含Linux安装器回归) | ⚠️ **高交付高压** — Engine V2 切换中，发布即遇阻塞性回归 |
| **LobsterAI** | 活跃中 | 18 (13已合) | v2026.4.21 | ✅ **稳健扩展** — 邮件通道上线，diff 回归待热修，依赖升级需协调 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 **停滞** — 连续周期无活动 |
| **Moltis** | 6 (闭环) + 6 新增 | 3 已合 + 1 待合 | 20260421.05 | ✅ **高质量闭环** — 安全漏洞当日修复，6/8 Bug 闭环率 |
| **CoPaw** | 50 (关闭率58%) | 40 (合并率45%) | v1.1.3-beta.2 | ⚠️ **快速迭代承压** — MCP 成重灾区2个P0，记忆重构等架构级 PR 待审 |
| **ZeptoClaw** | 1 (新增) | 4 (3 Dependabot待合) | 无 | 🔴 **功能停滞** — 仅依赖自动更新，Telegram 配置阻断无响应 |
| **ZeroClaw** | 25 (13关闭) | 50 (32待合/18已合) | 无 | ⚠️ **架构还债期** — Schema v3+Onboard 重写阻塞发布，S0/S1 Bug 4个待解 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/500 PRs 单日 = 2-10x 于同类 | 绝对领先，但 Hermes/NanoBot/CoPaw 的关闭率更高（59-88%），OpenClaw 的 341 待合并 PR 暴露**审查带宽瓶颈** |
| **技术路线** | 插件化扩展 + 多网关原生支持（15+ 渠道） | vs NanoBot 的 AgentScope 框架深度集成、vs Hermes 的 TUI 原生体验、vs ZeroClaw 的 Rust 安全优先 |
| **核心优势** | **渠道矩阵最完整**（Telegram/Discord/WhatsApp/Signal/Slack/Webchat/飞书全覆盖），**企业集成最深**（Azure Foundry/GitHub Copilot/OpenRouter/Codex） | NanoBot 胜在文档处理（DOCX/XLSX/PPTX），Hermes 胜在区块链/自主机器经济，Moltis 胜在安全纵深 |
| **关键劣势** | **回归密度最高**（2026.4.11-4.15 连续版本破坏 4 大提供商+2 渠道），**扩展依赖管理失控**（grammy/飞书 SDK 默认引入引发众怒） | NanoBot 的 LiteLLM 供应链风险、IronClaw 的 Linux 安装器回归、CoPaw 的 MCP 稳定性均属同类问题 |
| **差异化壁垒** | `openclaw diagnose` AI 诊断 CLI（#69832）、PR 审查自动修复管道（#68936）—— **首个内置 AI 驱动代码审查自动化的开源 AI 助手框架** | 其他项目无同类基础设施级工具 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **MCP 协议集成与稳定性** | OpenClaw (#29053)、CoPaw (#3640/#3642)、NanoClaw (#1906 Ollama MCP 故障)、PicoClaw (#2535 MCP Slash 命令) | 从"要不要支持"转向"怎么稳定支持"：MCP Client 异常致 Agent 假死、SSE 流 task 泄漏、工具调用失败无降级 | 🔴 高 |
| **多通道状态隔离与路由可靠性** | OpenClaw (#69757 Telegram 回复模式)、NanoClaw (#1902 跨通道泄漏)、ZeroClaw (#5591 权限模型不一致)、Hermes (#13607 Telegram 论坛群组) | 共享 agent group 时的 destination/credential 状态残留、mention_only 边界失效、跨平台会话恢复 | 🔴 高 |
| **记忆系统重构与上下文管理** | CoPaw (#3548 记忆重构/#2289 MEMORY.md 膨胀)、NanoBot (#2463 prompt 前缀一致性)、OpenClaw (#69608 启动上下文对齐)、PicoClaw (#2310 历史截断) | 从文本文件持久化 → 向量检索/结构化缓存/语义压缩，解决"长任务连续性"与"成本效率"矛盾 | 🟡 中高 |
| **安全纵深：从沙箱到行为审计** | Moltis (#822 审批绕过修复/#815 SAFE_BINS 严格模式)、OpenClaw (#55342 行为声誉层)、ZeroClaw (#5741 交互式审批)、NanoBot (#3366 Shell 注入) | 验证"身份"→验证"行为"：环境变量注入、LD_PRELOAD 绕过、Skill 级权限控制、去中心化声誉 | 🟡 中高 |
| **边缘与跨平台部署** | NullClaw (#851 RPi5 CPU 空转)、NanoClaw (#1903 WSL systemd/#1904 Docker)、OpenClaw (#75 Linux/Windows 原生应用)、PicoClaw (#2613 Windows govet) | 从 macOS 优先 → 全平台公平：ARM SBC、WSL、Windows 原生、systemd 托管 VPS | 🟡 中 |
| **可观测性与 AI 驱动诊断** | OpenClaw (#69832 diagnose CLI)、Moltis (#820 浏览器容器诊断)、IronClaw (#5980 Otel Traces)、NanoBot (#3367 延迟观测) | 从"看日志"到"AI 分析结构化数据"：网关运营数据 → 模型诊断 → Markdown 报告 | 🟢 新兴 |
| **供应链与依赖安全** | NanoBot (#2443 LiteLLM 被隔离/#161 替换为原生 SDK)、OpenClaw (#63129 飞书依赖争议/#69831 grammy 缺失)、LobsterAI (#1781 钉钉连接器降级) | 可选依赖默认加载、PyPI 安全标记响应、SDK 版本锁定策略 | 🔴 高 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多网关集成、渠道矩阵、AI 驱动 DevOps | 中大型企业、SaaS 集成商、多平台运营者 | Node.js/TypeScript 插件化；OpenClaw 自有工具系统 vs MCP 张力 |
| **NanoBot** | 文档处理工作流、AgentScope 框架深度集成、子 agent 编排 | 中国企业用户、Office 自动化场景、多模态需求 | Python；LiteLLM 统一接入（供应链风险）；AgentHook 可扩展 |
| **Hermes Agent** | 终端原生体验（TUI）、区块链/自主机器经济、规模化工程自动化 | 开发者、DeFi/自主机器、CLI 重度用户 | Python；Exfer 区块链技能；Claude Code `/batch` 对标 |
| **PicoClaw** | 硬件亲和（Sipeed 生态）、Go 语言高性能、微信/飞书中国生态 | 嵌入式开发者、中国中小企业、硬件集成场景 | Go；Pipeline 四阶段 Agent 架构；bcrypt 认证迁移 |
| **NanoClaw** | v2 多通道隔离、Nostr/Lightning 去中心化协议、品牌化安装体验 | 密码朋克、去中心化信仰者、多协议极客 | TypeScript/Node.js；Claude Code + Agent SDK 严格版本锁定；Plan B SDLC |
| **Moltis** | 安全纵深（Rust 内存安全）、执行审批、沙箱隔离、容器化可观测性 | 安全敏感型企业、容器化部署、合规要求场景 | Rust；双层防御（Regex+语义）执行审批；Landlock FS 隔离探索 |
| **IronClaw** | Engine V2 沙箱成本追踪、Workspace 实体、NEAR AI 生态集成 | Web3/区块链企业、成本优化需求、多租户 SaaS | Rust；Engine V1/V2 双轨运行；WASM TEE 可信执行 |
| **CoPaw** | 记忆重构、语义化 Skill 路由、语音/通话渠道、低维护成本 | 个人高级用户、QQ/微信生态、长任务自动化 | Python/AgentScope；asyncio.Future 审批异步化；"梦境日志"创新概念 |
| **ZeroClaw** | Schema 驱动配置、RBAC 多租户、Provider 统一架构 | 企业多租户部署、配置即代码团队、权限严格场景 | Rust；TOML→Mozilla Fluent i18n 迁移探索；Tauri 桌面端 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **第一梯队：规模领先，质量承压** | OpenClaw、ZeroClaw、CoPaw | 日均 25-100+ Issue/PR，待合并队列 30-340，架构级重构并行 | **快速迭代期** — 功能扩张与基础设施升级叠加，回归风险高 |
| **第二梯队：健康迭代，质量巩固** | NanoBot、Hermes Agent、Moltis、PicoClaw、LobsterAI | 关闭率 45-88%，有明确版本节奏，当日 Bug 当日/当周闭环 | **质量巩固期** — 从"能用"转向"好用"，工程债务清理 |
| **第三梯队：低活跃或停滞** | NullClaw、ZeptoClaw、TinyClaw | 日均 <5 人类贡献，依赖自动更新或零活动 | **维护瓶颈期** — 核心维护者带宽不足或项目转型中 |
| **特殊：激进实验** | NanoClaw | v2 重构阵痛 + Nostr/Lightning 生态激进布局 | **架构重构期** — 高风险高潜力，需观察 3-6 个月 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"AI 驱动自身运维"成为竞争力分水岭** | OpenClaw 的 `diagnose` CLI + PR 自动修复管道；Moltis 的浏览器容器诊断增强 | 智能体框架的下一步是"自修复基础设施"——开发者应关注如何将 LLM 能力注入 CI/CD、故障排查、代码审查，而非仅停留在对话层 |
| **MCP 从"功能卖点"变为"稳定性债务"** | CoPaw 2个P0、NanoClaw Ollama MCP 故障、OpenClaw 原生工具系统与 MCP 的张力 | 过早全面拥抱 MCP 可能引入不可控的故障域；建议采用"桥接+降级"策略，保留自有工具系统作为 fallback |
| **"行为安全"取代"身份安全"成为新范式** | OpenClaw #55342 行为声誉层、Moltis #822 审批绕过修复、ZeroClaw #5741 交互式审批 | 提示注入、工具滥用、环境变量注入等"行为级攻击"无法通过传统身份验证防御；建议在设计阶段引入"最小权限 Skill"和"执行审计追踪" |
| **边缘部署从"小众"走向"刚需"** | NullClaw RPi5、NanoClaw WSL、OpenClaw #75 71赞、PicoClaw Windows 支持 | 个人 AI 助手的终极形态是"常驻设备"而非"云端服务"；开发者需重视 ARM、systemd、容器嵌套、资源受限环境的测试覆盖 |
| **记忆系统的"成本意识"觉醒** | CoPaw MEMORY.md 膨胀、NanoBot prompt cache 失效、OpenClaw 上下文压缩 | 长上下文模型普及不解决成本问题；prompt 前缀缓存、语义压缩、结构化记忆检索将成为标配，而非可选优化 |
| **供应链安全进入"日常运维"** | NanoBot LiteLLM 被隔离、OpenClaw 飞书依赖争议、LobsterAI 钉钉连接器降级 | 依赖自动更新工具（Dependabot）需配合"关键依赖人工审计"策略；建议建立"供应商安全响应 SLA"评估矩阵 |

---

*分析基于 2026-04-22 各项目 GitHub 公开数据生成 | 适合技术决策者评估选型、开发者识别贡献机会*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-22

## 1. 今日速览

NanoBot 今日展现出**极高的社区活跃度与工程成熟度**：24小时内 Issues 处理量达 69 条（关闭率 88.4%），PR 处理量 39 条（合并/关闭率 59%），并发布了 `v0.1.5.post2` 补丁版本。项目正处于**快速迭代期**，核心聚焦于多平台兼容性扩展（Windows/Python 3.14）、安全性加固及企业级集成能力。社区贡献者规模持续扩大（本版本新增 12 位贡献者），但长期架构债务（如 prompt 前缀一致性、LiteLLM 依赖风险）仍需关注。

---

## 2. 版本发布

### [v0.1.5.post2](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post2)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-21 |
| **合并 PR 数** | 67 |
| **新增贡献者** | 12 |
| **版本定位** | Reach & Polish（扩展性与打磨） |

**核心更新内容：**

| 领域 | 变更 |
|:---|:---|
| **平台扩展** | Windows 支持加入官方矩阵；Python 3.14 兼容性验证通过 |
| **工具增强** | `read_file` 工具能力扩展（详见下方 PR #3336） |
| **稳定性** | 相比 `v0.1.5.post1`（侧重 agent 自管理），本版本聚焦运行环境覆盖与边缘场景处理 |

**迁移注意事项：**
- Windows 用户可直接通过 pip 安装，无需 WSL 环境
- Python 3.14 为预览级支持，生产环境建议 3.11-3.13

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（23 条）

| PR | 作者 | 影响领域 | 推进价值 |
|:---|:---|:---|:---|
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | aiguozhi123456 | **文档处理能力** | `read_file` 工具正式支持 DOCX/XLSX/PPTX，打通 Office 文档工作流 |
| [#3355](https://github.com/HKUDS/nanobot/pull/3355) | hussein1362 | **渠道体验** | Telegram Markdown 渲染升级，适配 GPT-5.4/Claude/Gemini 的现代输出格式 |
| [#3356](https://github.com/HKUDS/nanobot/pull/3356) | chengyongru | **可靠性** | 智谱 AI (ZhiPu) 1302 速率限制错误码纳入重试机制，解决中文 API 适配盲区 |
| [#3359](https://github.com/HKUDS/nanobot/pull/3359) | chengyongru | **交互安全** | 修复活跃对话中 `/new` 等命令被误注入为普通消息的 bug |
| [#3353](https://github.com/HKUDS/nanobot/pull/3353) | XJPeng12 | **资源管理** | XLSX 提取异常时确保 workbook 强制关闭，防止文件句柄泄漏 |
| [#3363](https://github.com/HKUDS/nanobot/pull/3363) | lahuman | **模型兼容** | MiniMax reasoning 能力修复，OpenAI 兼容后端支持 reasoning_split |
| [#3347](https://github.com/HKUDS/nanobot/pull/3347) | XJPeng12 | **开发者体验** | WebSocket 渠道配置文档补全，降低 WebUI 开发门槛 |

**整体进展评估：** 项目在企业级场景（文档处理、多渠道适配、错误恢复）上迈出实质性步伐，工程债务清理同步推进。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) 架构缺陷：prompt 前缀未持久化 | 10 | **OpenAI prompt cache 兼容性危机** — 历史记录存储格式与实际发送前缀不一致，导致缓存失效与成本飙升 | 🔴 OPEN |
| 2 | [#2062](https://github.com/HKUDS/nanobot/issues/2062) 如何清空/重启/新建 session | 8 | **飞书场景下的上下文爆炸** — 固定用户 ID 导致 session 文件无限增长，缺乏自动化生命周期管理 | ✅ CLOSED |
| 3 | [#2049](https://github.com/HKUDS/nanobot/issues/2049) Skill 创建能力缺失 | 6 | **功能回归** — 升级后 skill-creator 工具不可用，阻断用户自定义扩展 | ✅ CLOSED |
| 4 | [#161](https://github.com/HKUDS/nanobot/issues/161) 替换 LiteLLM 为原生 SDK | 6 | **依赖安全与精简** — LiteLLM 体积大、透明度低，且近期出现凭据窃取事件（见 #2443） | ✅ CLOSED |
| 5 | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM 被隔离 | 6 | **供应链安全警报** — PyPI 标记 LiteLLM 存在凭据窃取风险，要求紧急响应 | ✅ CLOSED |

**诉求分析：** 社区正从"功能可用"向"生产可信"演进——prompt 缓存效率、依赖安全、session 治理成为核心关切。架构层面决策（#161 LiteLLM 替换 vs. #2463 prompt 一致性）将决定项目长期竞争力。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3366](https://github.com/HKUDS/nanobot/pull/3366) | **Shell 注入漏洞**：`path_append` 在非 Windows 平台直接拼接 shell 命令，可绕过 `_guard_command` | 🟡 PR OPEN，待审查 |
| 🔴 **Critical** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) / [#161](https://github.com/HKUDS/nanobot/issues/161) | **供应链攻击**：LiteLLM 被 PyPI 隔离（凭据窃取），项目依赖存在安全风险 | 🟡 已关闭但未完全解决，需长期架构调整 |
| 🟡 **High** | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | **架构缺陷**：prompt 前缀不一致导致 OpenAI prompt cache 失效，成本与延迟双高 | 🔴 无 fix PR，标记 stale |
| 🟡 **High** | [#1833](https://github.com/HKUDS/nanobot/issues/1833) | **无原因 SIGTERM 退出**：半小时内两次异常终止，无诊断信息 | ✅ CLOSED（需确认修复版本） |
| 🟡 **High** | [#1157](https://github.com/HKUDS/nanobot/issues/1157) | **OpenRouter + StepFun 400 错误**：模型请求格式不兼容 | ✅ CLOSED |
| 🟡 **High** | [#2200](https://github.com/HKUDS/nanobot/issues/2200) | **Anthropic provider 突发失效**：无配置变更下返回 BadRequestError | ✅ CLOSED |
| 🟢 **Medium** | [#3369](https://github.com/HKUDS/nanobot/pull/3369) | **数据丢失风险**：graceful shutdown 时 session 未 fsync，write-back 缓存场景下丢失 | 🟡 PR OPEN |
| 🟢 **Medium** | [#1236](https://github.com/HKUDS/nanobot/issues/1236) | **对话历史丢失**：assistant 回复未追加至消息数组，导致"失忆" | ✅ CLOSED |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 实现信号 | 纳入可能性 |
|:---|:---|:---|:---:|
| **音频转录语言指定** | [#3371](https://github.com/HKUDS/nanobot/pull/3371) | PR 已提交，配置 `channels.transcriptionLanguage` | ⭐⭐⭐ 高 |
| **Web 聊天渠道（SSE 流式）** | [#2871](https://github.com/HKUDS/nanobot/pull/2871) | PR 开放中，零核心文件变更，设计干净 | ⭐⭐⭐ 高 |
| **WebSocket 文件附件** | [#3361](https://github.com/HKUDS/nanobot/pull/3361) | PR 已提交，10MB/25MB 限制设计 | ⭐⭐⭐ 高 |
| **AgentHiFive 集成** | [#3144](https://github.com/HKUDS/nanobot/pull/3144) | PR 开放中，MCP 后端、审批追踪、Telegram/Slack vault | ⭐⭐⭐ 高 |
| **子 agent 状态/取消工具** | [#3303](https://github.com/HKUDS/nanobot/pull/3303) | PR 已提交，`spawn_status`/`spawn_cancel` + 循环检测 | ⭐⭐⭐ 高 |
| **心跳模型独立配置** | [#3368](https://github.com/HKUDS/nanobot/pull/3368) | PR 已提交，`gateway.heartbeat.model` 降本 | ⭐⭐⭐ 高 |
| **LLM 调用延迟观测** | [#3367](https://github.com/HKUDS/nanobot/pull/3367) | PR 已提交，`latency_ms` 暴露至 AgentHookContext | ⭐⭐⭐ 高 |
| **Langfuse 可观测性** | [#2189](https://github.com/HKUDS/nanobot/issues/2189) | Issue 已关闭，无 PR 关联 | ⭐⭐ 中 |
| **Telegram 模型切换命令** | [#1113](https://github.com/HKUDS/nanobot/issues/1113), [#1292](https://github.com/HKUDS/nanobot/issues/1292) | 6 👍 支持，无 PR | ⭐⭐ 中 |
| **DingTalk 文件上传** | [#3344](https://github.com/HKUDS/nanobot/issues/3344) | 今日新 Issue，PR 未现 | ⭐⭐ 中 |
| **PostHog 分析钩子** | [#3365](https://github.com/HKUDS/nanobot/pull/3365) | PR 今日关闭（非合并），可能需调整 | ⭐ 待观察 |

**路线图信号：** 项目正从"单一聊天机器人"向"企业级 agent 平台"演进——子 agent 编排、多渠道统一、可观测性、成本优化四大方向并行推进。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 典型场景 | 来源 |
|:---|:---|:---|
| **上下文管理黑盒** | 飞书固定 ID 导致 session 文件膨胀，必须手动删文件重启 | [#2062](https://github.com/HKUDS/nanobot/issues/2062) |
| **状态不可见** | 不知道当前有多少 task 在跑、retry 何时终止 | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| **模型切换困难** | 移动端无法 SSH，Telegram 不能换模型，遇 rate limit 只能干等 | [#1292](https://github.com/HKUDS/nanobot/issues/1292) |
| **错误信息不透明** | SIGTERM 无原因、400 错误无上下文、fallback 失败静默 | [#1833](https://github.com/HKUDS/nanobot/issues/1833), [#942](https://github.com/HKUDS/nanobot/issues/942) |
| **HISTORY.md 噪音** | 自动生成的历史文件膨胀且包含大量无意义记录 | [#1449](https://github.com/HKUDS/nanobot/issues/1449) |

### 😊 满意点

- **多平台覆盖**：Windows 支持降低部署门槛
- **文档处理扩展**：Office 文件读取能力实用
- **社区响应快**：Issue 关闭率高，维护者活跃

### 🔮 期望方向

> "能不能做一个清空 session 的功能？聊完一个功能后，想开启一个新的会话。" — [#2062](https://github.com/HKUDS/nanobot/issues/2062)

> "启动传参支持 `-model`，便于 claw team 共同使用" — [#3107](https://github.com/HKUDS/nanobot/issues/3107)

> "LLM provider 可以 fallback，为按 prompt 计费但不太稳定的供应商提供缓冲" — [#3107](https://github.com/HKUDS/nanobot/issues/3107)

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) **prompt 前缀一致性** | 2026-03-25 | 2026-04-21 | 🔴 **架构债务核心**：影响 OpenAI prompt cache 效率，直接关联成本。标记 stale 但无 fix PR，可能被低估 |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) **DingTalk 文件上传** | 2026-04-21 | 2026-04-21 | 🟡 新 Issue，企业微信生态关键场景，需评估是否纳入近期迭代 |
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) **AgentHiFive 集成** | 2026-04-14 | 2026-04-21 | 🟡 大型 PR（MCP 后端、vault、多渠道），审查周期可能较长，建议拆分或加速 review |
| [#2871](https://github.com/HKUDS/nanobot/pull/2871) **Web 聊天渠道** | 2026-04-06 | 2026-04-21 | 🟡 开放 16 天，设计成熟但缺乏合并信号，可能阻塞 WebUI 生态发展 |

**维护者行动建议：**
1. **优先处理 #2463**：召开架构评审，明确 prompt 存储格式改造方案
2. **加速 #3144 审查**：或拆分为 MCP 核心、渠道适配、设置流程三个独立 PR
3. **确认 #2871 合并窗口**：Web 渠道是扩展用户基数的关键基础设施

---

*本日报基于 GitHub 公开数据生成，时间范围：2026-04-21 00:00 - 2026-04-21 23:59 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-22

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**，24小时内产生 **50 条 Issues 更新**（39 活跃/新开，11 关闭）与 **50 条 PR 更新**（34 待合并，16 已合并/关闭），无新版本发布。项目核心聚焦于**终端交互稳定性修复**（TUI/CLI 冻结问题）、**多平台网关可靠性**（Telegram/Discord/Feishu）以及**并发执行死锁**等关键 Bug。值得注意的是，TUI 组件在单日内有 4 个相关 PR 被合并，显示该领域正经历集中治理。整体健康度良好，但 P1 级 Bug 仍需关注。

---

## 2. 版本发布

**无新版本发布**

- 最新 Docker 镜像存在已知滞后问题：Gemini bearer auth 修复（[ca32a2a](https://github.com/NousResearch/hermes-agent/commit/ca32a2a60bd8655c001b96394e68309ba53b4550)）已于 4 月 18 日合并，但 `latest` 镜像构建时间早 3 小时，未包含该修复 → 详见 Issue [#12386](https://github.com/NousResearch/hermes-agent/issues/12386)

---

## 3. 项目进展

### 已合并/关闭的关键 PR（16 条中精选）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #13528 | teknium1 | **Qwen 提示缓存性能修复**：为 OpenCode/Alibaba 平台的 Qwen3.6-plus 启用 Anthropic 风格 `cache_control` 标记，解决零缓存命中导致的订阅费用激增问题 | [PR #13528](https://github.com/NousResearch/hermes-agent/pull/13528) |
| #13530 | teknium1 | **DNS 重绑定安全加固**：为 Web 仪表盘和 WhatsApp 桥接验证 Host 头与绑定接口匹配，阻断同源绕过攻击 | [PR #13530](https://github.com/NousResearch/hermes-agent/pull/13530) |
| #13728 | OutThisLife | **TUI `/history` 命令修复**：拦截为原生 TUI 转录本渲染，替代原先空会话的子进程方案，并增加滚动支持 | [PR #13728](https://github.com/NousResearch/hermes-agent/pull/13728) |
| #13724 | OutThisLife | **TUI `/resume` 跨平台会话支持**：移除 `source="tui"/"cli"` 过滤，允许在 TUI 中恢复 Telegram/Discord 等网关会话 | [PR #13724](https://github.com/NousResearch/hermes-agent/pull/13724) |
| #13726 | OutThisLife | **TUI 多行输入历史导航修复**：Shift-Enter 多行草稿状态下，上箭头移动光标而非切换历史记录 | [PR #13726](https://github.com/NousResearch/hermes-agent/pull/13726) |
| #8809 | ahuman-exfer | **Exfer 区块链技能**：新增可选的区块链技能，支持钱包生成、HTLC 原子交换、多签等，用于自主机器的点对点结算 | [PR #8809](https://github.com/NousResearch/hermes-agent/pull/8809) |

**整体推进评估**：今日合并集中在**终端体验精细化**（4 个 TUI PR）、**成本控制**（Qwen 缓存）、**安全基线**（DNS 重绑定）三个维度，显示项目从功能扩张转向质量打磨阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues/PRs

| 排名 | Issue/PR | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 🔥 #1 | **Issue #13618** — TUI 审批覆盖层冻结终端 | 5 条 | **终端可用性危机**：`useInput` 处理程序竞争导致审批提示无法接收按键，终端完全锁死需强制关闭 | [Issue #13618](https://github.com/NousResearch/hermes-agent/issues/13618) |
| 🔥 #2 | **Issue #13617** — 终端审批提示冻结输入区 | 5 条 | **CLI 交互阻断**：危险命令触发 `[o]nce/[s]ession/[a]lways/[d]eny` 提示后，用户无法键入响应 | [Issue #13617](https://github.com/NousResearch/hermes-agent/issues/13617) |
| #3 | **Issue #7952** — mautrix-python 切换后 Matrix 网关仍损坏 | 3 条 | **重构回归**：密钥相关的新错误，Matrix 集成在架构迁移后持续不可用 | [Issue #7952](https://github.com/NousResearch/hermes-agent/issues/7952) |
| #4 | **Issue #8552** — Slack Block Kit 替代 legacy mrkdwn | 3 条 | **富文本渲染**：用户需要表格、标准 Markdown 语法支持，legacy 格式限制严重 | [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) |

**诉求分析**：审批冻结问题（#13617/#13618）形成**阻塞性体验痛点**，已有对应修复 PR #13734（并发工具工作线程的审批回调传播），但社区对终端可靠性的信任已受损，需快速验证并发布。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#13618](https://github.com/NousResearch/hermes-agent/issues/13618) | TUI 审批覆盖层冻结终端（useInput 竞争） | ✅ **已关闭** | #13734 相关 |
| **P1** | [#13617](https://github.com/NousResearch/hermes-agent/issues/13617) | CLI 终端审批提示冻结输入区 | ✅ **已关闭** | [#13734](https://github.com/NousResearch/hermes-agent/pull/13734) |
| **P1** | [#13574](https://github.com/NousResearch/hermes-agent/issues/13574) | 上下文压缩截断 `tool_call.arguments` 致 JSON 无效，MiniMax 返回 400 | 🟡 **开放** | 暂无 |
| **P1** | [#13655](https://github.com/NousResearch/hermes-agent/issues/13655) | 崩溃后 `gateway.pid` 残留导致网关重启循环（需手动干预） | 🟡 **开放** | 暂无 |
| **P1** | [#12386](https://github.com/NousResearch/hermes-agent/issues/12386) | Docker `latest` 镜像未包含 Gemini auth 修复 | 🟡 **开放** | 需重新构建镜像 |
| P2 | [#13657](https://github.com/NousResearch/hermes-agent/issues/13657) | 终端命令执行顺序不可控（用户困惑于并行执行） | 🟡 **开放** | 暂无 |
| P2 | [#13545](https://github.com/NousResearch/hermes-agent/issues/13545) | `hermes doctor` 误报浏览器不可用（仅 `browser_cdp` 缺失时） | 🟡 **开放** | 暂无 |
| P2 | [#13581](https://github.com/NousResearch/hermes-agent/issues/13581) | `agent.transports` 子包未包含在构建分发中（setuptools glob 缺失） | 🟡 **开放** | 暂无 |
| P2 | [#13607](https://github.com/NousResearch/hermes-agent/issues/13607) | Telegram 论坛超级群组 General 主题消息无法到达 Hermes | 🟡 **开放** | 暂无 |
| P2 | [#13710](https://github.com/NousResearch/hermes-agent/issues/13710) | 中断信号处理导致 `OSError: [Errno 5] Input/output error` | 🟡 **开放** | 暂无 |

**关键修复进展**：PR [#13734](https://github.com/NousResearch/hermes-agent/pull/13734) 针对并发工具执行的审批死锁提出根本修复，将审批回调传播到工作线程，是解决 #13617 回归的关键。

---

## 6. 功能请求与路线图信号

| Issue | 功能方向 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| [#380](https://github.com/NousResearch/hermes-agent/issues/380) | **Batch Migration Skill**：Git worktree 隔离的并行代码迁移（受 Claude Code `/batch` 启发） | ⭐⭐⭐ 高 — teknium1 参与，符合规模化工程方向 | [Issue #380](https://github.com/NousResearch/hermes-agent/issues/380) |
| [#13534](https://github.com/NousResearch/hermes-agent/issues/13534) | **Skill 管理系统**：使用追踪、冲突检测、预创建验证（生产环境 146+ skills 的经验） | ⭐⭐⭐ 高 — 直接解决规模化痛点，有详细设计 | [Issue #13534](https://github.com/NousResearch/hermes-agent/issues/13534) |
| [#13566](https://github.com/NousResearch/hermes-agent/issues/13566) | **Cron 投递重试机制**：瞬态网络故障的自动重试 | ⭐⭐⭐ 高 — 可靠性基线需求 | [Issue #13566](https://github.com/NousResearch/hermes-agent/issues/13566) |
| [#13711](https://github.com/NousResearch/hermes-agent/issues/13711) | **LangFlow 低代码**：替换硬编码流程的 UI 可视化 | ⭐⭐ 中 — 架构变动大，需评估维护成本 | [Issue #13711](https://github.com/NousResearch/hermes-agent/issues/13711) |
| [#13532](https://github.com/NousResearch/hermes-agent/issues/13532) | **Self-Verification Loop**：生成→验证→精炼的 SOUL.md 扩展 | ⭐⭐ 中 — 俄语提交，需社区评审 | [Issue #13532](https://github.com/NousResearch/hermes-agent/issues/13532) |
| [#4595](https://github.com/NousResearch/hermes-agent/issues/4595) | **Cron 结果可观测**：主代理会话能感知 Cron 执行状态 | ⭐⭐⭐ 高 — 已关闭，可能已有部分实现 | [Issue #4595](https://github.com/NousResearch/hermes-agent/issues/4595) |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **"我要求测试 GitHub 连接，结果命令乱序执行"** | [#13657](https://github.com/NousResearch/hermes-agent/issues/13657) | 终端并行执行缺乏可视化顺序控制，用户无法预测行为 |
| **"Docker 在 UnRAID 上权限失败"** | [#13731](https://github.com/NousResearch/hermes-agent/issues/13731) | `USER hermes` 绕过 entrypoint 权限修复，UID 不匹配 |
| **"Telegram 私聊正常，群组完全静默"** | [#13607](https://github.com/NousResearch/hermes-agent/issues/13607) | 论坛超级群组的 General 主题消息路由失败，无错误日志 |
| **"OpenAI Codex OAuth CLI 能用，Telegram 网关报无凭证"** | [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) | 网关间认证状态隔离，配置同步机制不透明 |

### 正向信号

- Exfer 区块链技能的贡献显示 Hermes 正被**自主机器经济**场景采用
- 用户对 `/batch` 迁移技能的积极反馈（Claude Code 对标）表明**规模化工程自动化**是差异化方向

---

## 8. 待处理积压

### 需维护者关注的高价值/长期 Issue

| Issue | 创建时间 | 积压天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| [#380](https://github.com/NousResearch/hermes-agent/issues/380) Batch Migration Skill | 2026-03-04 | **49 天** | 被 Claude Code 抢先，需加速差异化 | [Issue #380](https://github.com/NousResearch/hermes-agent/issues/380) |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) Slack Block Kit 迁移 | 2026-04-12 | **10 天** | 3 👍，企业用户富文本需求受阻 | [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) |
| [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) Codex OAuth 网关隔离 | 2026-04-18 | **4 天** | 认证架构设计债务 | [Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058) |
| [#7952](https://github.com/NousResearch/hermes-agent/issues/7952) Matrix 网关持续损坏 | 2026-04-11 | **11 天** | 架构迁移后二次回归，信任损耗 | [Issue #7952](https://github.com/NousResearch/hermes-agent/issues/7952) |

### 今日新增需跟进

- **PR #13734**（审批死锁修复）应尽快评审合并，以验证 #13617/#13618 的关闭状态
- **Docker 镜像重建**：#12386 的 Gemini 修复已合并 4 天，`latest` 标签仍未更新，影响云部署用户

---

*日报生成时间：2026-04-22 | 数据来源：NousResearch/hermes-agent GitHub 仓库*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-22

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
> **日期**: 2026-04-22  
> **分析周期**: 过去 24 小时（2026-04-21）

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度开发节奏**：18 个 PR 更新（11 个已合并/关闭）、7 个 Issue 更新，并推送了 v0.2.6-nightly 构建。核心工程聚焦于**认证安全重构**（Dashboard 密码化迁移）、**渠道生态扩展**（微信、飞书多实例支持）以及**Agent 架构升级**（Pipeline 重构 Phase 2 完成）。社区侧，国际化缺陷（中文硬编码）和会话历史丢失问题持续引发用户关注，但暂无阻塞性崩溃报告。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.6-nightly.20260421.71c877a6

| 属性 | 详情 |
|:---|:---|
| **版本号** | `v0.2.6-nightly.20260421.71c877a6` |
| **类型** | 自动化夜间构建（可能不稳定） |
| **完整变更日志** | [v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |

**关键预发布内容预览**（基于已合并 PR 推断）：
- Dashboard 认证机制从 Token 切换为 bcrypt 密码哈希
- Agent Looper 重构 Phase 2（Pipeline 架构）
- 飞书渠道群聊触发器配置化
- Web 渠道文件下载支持（前端）

> ⚠️ **迁移注意事项**：夜间构建包含 #2608 的认证迁移逻辑，生产环境建议等待正式版。

---

## 3. 项目进展

### 今日已合并/关闭的 11 个 PR 核心成果

| PR | 作者 | 领域 | 影响 |
|:---|:---|:---|:---|
| [#2613](https://github.com/sipeed/picoclaw/pull/2613) | sky5454 | Go 工程 | 修复 Windows 平台 `govet` shadow 变量警告，提升代码质量 |
| [#2611](https://github.com/sipeed/picoclaw/pull/2611) | tra4less | UI | 结构化 UI 组件（具体范围待补充，当日快速关闭） |
| [#2608](https://github.com/sipeed/picoclaw/pull/2608) | wj-xiao | 认证安全 | **重大**：Dashboard 认证从 Token 迁移至 bcrypt 密码，支持一次性本地密码，消除 Token 泄露风险 |
| [#2607](https://github.com/sipeed/picoclaw/pull/2607) | SiYue-ZO | 飞书渠道 | 群聊 `@mention_only` 触发器 + 随机表情响应配置，降低群聊噪音 |
| [#2537](https://github.com/sipeed/picoclaw/pull/2537) | imguoguo | Agent | `/context` 命令 + 上下文用量环形指示器，增强会话可观测性 |
| [#2599](https://github.com/sipeed/picoclaw/pull/2599) | lc6464 | 认证修复 | **修复 #2550**：Google Antigravity 凭证过期不一致问题，处理 `auth.json` 历史遗留键冲突 |
| [#2601](https://github.com/sipeed/picoclaw/pull/2601) | lc6464 | 文档 | Gemini 原生协议文档更新 |
| [#2595](https://github.com/sipeed/picoclaw/pull/2595) | wj-xiao | Web 配置 | 渠道数组字段芯片式列表编辑（`allow_from`、`allow_origins` 等） |
| [#2605](https://github.com/sipeed/picoclaw/pull/2605) | wj-xiao | Web UI | 清理恢复会话中的原始 `tool` 角色消息，优化摘要去重 |
| [#2585](https://github.com/sipeed/picoclaw/pull/2585) | sky5454 | Agent 架构 | **重构里程碑**：`loop.go` (~1500行) 拆分为 Pipeline 四阶段（SetupTurn→CallLLM→ExecuteTools→Finalize） |
| [#2604](https://github.com/sipeed/picoclaw/pull/2604) | imguoguo | 文档 | 微信二维码文档更新 |

**整体推进评估**：Agent 核心引擎完成架构现代化（Pipeline 模式），认证体系安全性升级，渠道矩阵（微信/飞书/Web）同步扩展。**技术债务显著降低**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#2367](https://github.com/sipeed/picoclaw/issues/2367) 英文模式下末屏标题仍为中文 | 4 | **国际化(i18n)质量管控**：用户发现 APK 存在硬编码中文字符串，影响海外用户体验 |
| 2 | [#2548](https://github.com/sipeed/picoclaw/issues/2548) 多认证凭证冲突错误 | 4 | **配置解析歧义**：`provider` 顶层字段与 `model_list` 内嵌凭证叠加导致 Gemini 认证失败 |
| 3 | [#2310](https://github.com/sipeed/picoclaw/issues/2310) 对话历史记录显示不完整 | 3 | **数据可靠性**：会话仅保留最近 1-2 条，容器内 `session/` 文件同样缺失，怀疑持久化逻辑有截断 |

**诉求分析**：用户对**配置系统的直观性**（#2548 已催生 #2609 显式 provider 字段重构）和**数据完整性保障**（#2310）有强烈需求。#2367 反映发布流程缺乏 i18n 自动化检查。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2310](https://github.com/sipeed/picoclaw/issues/2310) | **OPEN** | 会话历史严重截断（仅1-2条），影响生产环境追溯与演示 | ❌ 无 |
| 🟡 **中** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | **OPEN** | 多凭证配置冲突导致认证失败 | 🔄 [#2609](https://github.com/sipeed/picoclaw/pull/2609) 重构中 |
| 🟡 **中** | [#2598](https://github.com/sipeed/picoclaw/issues/2598) | ✅ **CLOSED** | v0.2.4→v0.2.6 升级后 WebUI 无法显示 | ✅ 已修复（当日关闭） |
| 🟡 **中** | [#2550](https://github.com/sipeed/picoclaw/issues/2550) | ✅ **CLOSED** | CLI `auth login` 不更新 Token 过期时间 | ✅ [#2599](https://github.com/sipeed/picoclaw/pull/2599) |
| 🟢 **低** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | **OPEN** | 英文模式 UI 中文硬编码 | ❌ 无 |
| 🟢 **低** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) | **OPEN** | Tool 反馈预览 Unicode 转义（`\u0026` 等）可读性差 | ❌ 无 |

> **回归风险**：#2598 的快速关闭表明 v0.2.6 升级路径存在验证缺口，建议加强升级测试矩阵。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Token 消耗统计 Dashboard** | [#2217](https://github.com/sipeed/picoclaw/issues/2217) | ⭐⭐⭐⭐☆ 高 | #2537 已合并 `/context` 命令（用量指示器），Dashboard 可视化是自然延伸 |
| **Web 渠道文件下载** | [#2563](https://github.com/sipeed/picoclaw/pull/2563) | ⭐⭐⭐⭐⭐ 极高 | PR 已 OPEN，端到端实现完整，预计 v0.2.6 正式版纳入 |
| **MCP Slash 命令** | [#2535](https://github.com/sipeed/picoclaw/pull/2535) | ⭐⭐⭐⭐☆ 高 | `/list mcp`、`/show mcp` 等命令已开发，MCP 生态整合战略优先级高 |
| **微信渠道多实例** | [#2606](https://github.com/sipeed/picoclaw/pull/2606) | ⭐⭐⭐⭐⭐ 极高 | 当日新建 PR，中国企业用户刚需，预计快速合并 |
| **显式 Provider 字段** | [#2609](https://github.com/sipeed/picoclaw/pull/2609) | ⭐⭐⭐⭐⭐ 极高 | 直接响应 #2548 配置痛点，向后兼容设计成熟 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| "升级后 WebUI 白屏，业务中断" | [#2598](https://github.com/sipeed/picoclaw/issues/2598) | 😤 焦虑 |
| "历史记录只剩两条，演示时非常尴尬" | [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 😤 挫败 |
| "配置 Gemini 时凭证冲突报错看不懂" | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | 😕 困惑 |
| "英文界面突然冒出中文，显得不专业" | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | 😒 失望 |

### 满意信号

- **认证修复响应快**：#2550 用户 gitricko 的问题当日即有关闭 PR（#2599）
- **架构透明化**：#2585 Agent 重构获技术用户认可，Pipeline 模式提升可维护性

### 关键洞察

> 用户从"能用"转向"好用"阶段，对**配置直观性**、**数据完整性**、**国际化细节**的敏感度显著上升。

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高龄 Issue/PR

| 时长 | 条目 | 风险 |
|:---|:---|:---|
| **26 天** | [#2217](https://github.com/sipeed/picoclaw/issues/2217) Token 消耗统计 Dashboard | 需求明确且 #2537 已铺垫，长期悬置可能流失企业用户 |
| **27 天** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) Tool 反馈 Unicode 转义 | 影响开发者体验，修复成本低但损害专业感 |
| **24 天** | [#2163](https://github.com/sipeed/picoclaw/pull/2163) Google Antigravity OAuth Scope 保持 | PR 已 OPEN，与 #2599 修复方向相关，需协调避免冲突 |
| **15 天** | [#2411](https://github.com/sipeed/picoclaw/pull/2411) SSE 流分块解析修复 | 稳定性关键修复，分块边界丢内容可能导致 AI 回复截断 |

---

> **日报生成说明**：基于 GitHub 公开数据自动分析，PR 评论数为 `undefined` 的条目可能因 API 限制未返回完整数据，建议直接访问链接核实讨论深度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-22

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **日期**: 2026-04-22  
> **数据周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：27 个 PR 更新（10 条已合并/关闭，17 条待审阅），4 条新 Issue 全部处于开放状态。核心工作围绕 **v2 架构稳定性**（WeChat/Telegram 多通道隔离、消息路由可靠性）和 **开发者体验**（setup 脚本健壮性）展开。值得关注的是，社区贡献者 jorgenclaw 单日提交 5 个 feature skill PR，推动 Nostr 生态集成和上下文管理创新，但基础设施类 bug（systemd linger、WSL 检测、OneCLI 网关）显示 v2 部署链路仍存在摩擦点。无新版本发布，项目处于密集迭代期而非发布窗口。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1908](https://github.com/qwibitai/nanoclaw/pull/1908) `CLOSED` | gavrielc | **品牌化的自动化安装脚本 `nanoclaw.sh`** — 从零到运行 NanoClaw 的单命令体验，集成 `@clack/prompts` 交互 UI、Claude 账号自动接入、终端聊天和可选消息通道 | 🎯 **降低入门门槛**：解决新用户"克隆后不知如何启动"的核心痛点；品牌化体验有助于社区扩张 |
| [#1907](https://github.com/qwibitai/nanoclaw/pull/1907) `CLOSED` | acb-code | **Anthropic PDF 容器技能** — 将 PDF 处理能力作为 operational/container skill 引入工作流 | 📄 扩展 v2 文档处理基础设施，为 Agent 提供结构化 PDF 解析能力 |
| [#1905](https://github.com/qwibitai/nanoclaw/pull/1905) `CLOSED` | acb-code | **Telegram 附件下载技能** — 支持照片和文档的自动下载 | 📎 补全 Telegram 通道的媒体处理能力，提升多模态交互完整性 |
| [#1883](https://github.com/qwibitai/nanoclaw/pull/1883) `CLOSED` | ssimeonov | **Claude Code 2.1.116 + Agent SDK ^0.2.116 升级** — 关键协议版本对齐，修复 `only-built-dependencies` 白名单使原生模块构建生效 | 🔧 **v2 运行时稳定性**：SDK IPC 协议与 Claude Code 版本必须严格匹配，此升级防止容器间通信断裂 |
| [#1900](https://github.com/qwibitai/nanoclaw/pull/1900) `CLOSED` | davekim917 | **双 bug 修复**：(1) SDK `session_id` 在容器中途退出时持久化；(2) 超长出站消息自动分割（>2000 字符） | 🐛 解决生产环境 Discord 会话中的消息截断和状态丢失问题 |
| [#1899](https://github.com/qwibitai/nanoclaw/pull/1899) `CLOSED` | Yacine0801 | **Gmail OOO 循环防护** — 硬编码草稿黑名单，阻止"Credit balance is too low"类自动回复产生 435 份草稿的级联故障 | 🚨 **关键稳定性修复**：防止 API 额度耗尽时的自我放大故障，属于生产事故级修复 |
| [#1897](https://github.com/qwibitai/nanoclaw/pull/1897) `CLOSED` | AndZp | **`/build-it` SDLC 基础设施** — Unix domain socket 健康检查、部署脚本、文档新鲜度 CI 门禁 | 🏗️ 为 Agent 驱动的软件开发生命周期（Plan B）奠定运维基础 |
| [#1895](https://github.com/qwibitai/nanoclaw/pull/1895) `CLOSED` | AndZp | **Almanda 能力索引修复** — 补全 Bash/sandbox、网页浏览、主动消息等基线能力的自我描述 | 🤖 改善 Agent 自我认知准确性，减少"你能做什么"类对话中的能力误报 |

**整体推进评估**：今日合并内容覆盖 **用户体验（安装）、通道完整性（Telegram 附件）、运行时稳定性（SDK 版本、session 持久化）、生产防护（OOO 循环）、基础设施（健康检查、SDLC）** 五大维度，属于**高质量的多线程推进**。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 互动指标 | 热点分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#1901](https://github.com/qwibitai/nanoclaw/issues/1901) WeChat v2 登录后 onboarding 不完整 | 1 评论，0 👍 | **核心诉求**：用户视角的"完成感"与实际运行状态的落差。QR 扫描成功 → 适配器启动 → 但 Bot 不响应，需手动配置 agent group 和 sender policy。反映 **v2 的"隐式配置"设计哲学与用户体验预期的冲突** |
| 2 | [#1908](https://github.com/qwibitai/nanoclaw/pull/1908) `nanoclaw.sh` 品牌化安装脚本 | 评论数 `undefined`（数据异常，但 PR 已关闭） | 尽管技术实现被关闭，其**产品化方向**（单命令安装、品牌化 UI）获得关注，可能以修订形式重新提交 |
| 3 | jorgenclaw 的 5 个 feature skill PR 集群 | 全部 `undefined` 评论，0 👍 | **Nostr 生态激进布局**（签名守护进程、Lightning 钱包、DM、视频生成、上下文预警）引发技术路线关注，但缺乏审阅互动显示**核心维护者带宽不足或优先级分歧** |

**背后诉求洞察**：社区存在两股张力——(a) **务实派** 要求 v2 基础体验"开箱即用"（WeChat onboarding、WSL 兼容）；(b) **先锋派** 推动去中心化协议集成（Nostr/Lightning）。维护者需在"修地基"与"盖高楼"间平衡资源。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | 修复 PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) | **Ollama MCP stdio server 在 OneCLI 网关后全部失败** — 非 Ollama LLM 提供商（Anthropic/MiniMax 等）调用 `ollama_list_models`/`ollama_generate` 时 `fetch failed`，因 plain-HTTP proxy path 拒绝请求 | **OPEN**，无评论 | ❌ 尚无 |
| 🔴 **高** | [#1902](https://github.com/qwibitai/nanoclaw/issues/1902) | **WeChat ↔ Telegram 跨通道回复泄漏** — 共享 agent group 时，首条回复正确路由，后续回复被错误发送至 Telegram（因 destination/credential 状态残留） | **OPEN**，无评论 | ❌ 尚无 |
| 🟡 **中** | [#1896](https://github.com/qwibitai/nanoclaw/issues/1896) | **Telegram 消息编辑被静默丢弃** — 用户编辑内容 Agent 不可见，仅日志中 `"Failed to route inbound message"` 单条记录，无用户反馈 | **OPEN**，无评论 | ❌ 尚无 |
| 🟡 **中** | [#1903](https://github.com/qwibitai/nanoclaw/pull/1903) | **systemd linger 启用失败被静默忽略** — WSL 上 `loginctl enable-linger` 报错但被吞，状态报告硬编码为成功 | **OPEN**，待合并 | ✅ 自身即为 fix |
| 🟡 **中** | [#1904](https://github.com/qwibitai/nanoclaw/pull/1904) | **WSL 无 systemd 时 Docker 安装误导** — `get.docker.com` 成功但 `dockerd` 60s 超时，需前置检测 | **OPEN**，待合并 | ✅ 自身即为 fix |
| 🟢 **低** | [#1889](https://github.com/qwibitai/nanoclaw/pull/1889) | **cleanup-sessions 脚本 sqlite3 缺失时硬失败** — 原逻辑将错误视为"无活跃 session"，导致数据丢失 | **OPEN**，待合并 | ✅ 自身即为 fix |

**稳定性评估**：v2 多通道架构的**状态隔离**（#1902）和**网关代理兼容性**（#1906）存在设计级隐患，需架构层面修复而非补丁。setup 脚本在 WSL 环境的边缘情况处理（#1903, #1904）显示 Linux 桌面用户群体扩大。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性评估 |
|:---|:---|:---|
| [#1893](https://github.com/qwibitai/nanoclaw/pull/1893) Remotion + AWS Lambda 视频生成 | 程序化视频内容生产 | ⭐⭐⭐⭐☆ 高 — 补全多模态输出，技术方案成熟（React → MP4） |
| [#1892](https://github.com/qwibitai/nanoclaw/pull/1892) Nostr 签名守护进程（nsec 内核 keyring 隔离） | 去中心化身份安全基础设施 | ⭐⭐⭐⭐☆ 高 — 安全模型先进（nsec 永不入容器），但需审计 |
| [#1891](https://github.com/qwibitai/nanoclaw/pull/1891) NWC Lightning 钱包（NIP-47） | Agent 原生支付能力 | ⭐⭐⭐⭐☆ 高 — 与 #1892 配套形成 Nostr 金融栈 |
| [#1890](https://github.com/qwibitai/nanoclaw/pull/1890) 上下文压缩预警系统（80% 阈值） | 长对话可靠性 | ⭐⭐⭐⭐⭐ 极高 — 直接解决 #1896 类"消息丢失"根因，属于 v2 核心体验 |
| [#1882](https://github.com/qwibitai/nanoclaw/pull/1882) Nostr DM（NIP-17 礼物包装加密） | 隐私消息通道 | ⭐⭐⭐⭐☆ 高 — 依赖 #1892 守护进程，形成生态闭环 |

**路线图信号**：jorgenclaw 的 5 个 PR 构成 **"Nostr + 内容生产 + 资源管理"** 三位一体的功能集群，若全部合并，NanoClaw 将成为首批原生集成 Lightning 支付的 AI Agent 框架。建议维护者**优先审阅 #1890（上下文预警）**，因其解决 v2 通用痛点，且不依赖外部协议。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 描述）

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"我以为装好了，但它不说话"** | [#1901](https://github.com/qwibitai/nanoclaw/issues/1901) | WeChat 扫码成功后用户停止操作，Bot 因未配置 agent group 静默，无引导提示 |
| **"我的编辑消失了"** | [#1896](https://github.com/qwibitai/nanoclaw/issues/1896) | Telegram 用户修正消息内容，Agent 仍按旧内容响应，且无任何错误提示 |
| **"回复发到了错误的聊天"** | [#1902](https://github.com/qwibitai/nanoclaw/issues/1902) | 多通道用户（WeChat + Telegram）遭遇隐私/尴尬风险，共享 agent group 的副作用未文档化 |
| **"WSL 上一堆超时和误导信息"** | [#1903](https://github.com/qwibitai/nanoclaw/pull/1903), [#1904](https://github.com/qwibitai/nanoclaw/pull/1904) | Windows 开发者尝试本地部署，systemd/Docker 假设不成立导致挫败 |

### 满意点

- **单命令安装愿景**（#1908）：社区对"bash 脚本一键启动"反响积极，显示对降低认知负担的强烈需求
- **快速迭代响应**：[#1899](https://github.com/qwibitai/nanoclaw/pull/1899) Gmail OOO 循环在 5 天内从生产事故到修复合并，体现维护者对严重故障的响应速度

---

## 8. 待处理积压

> **提醒**：以下 Issue/PR 已超过 24 小时无维护者响应，或处于关键路径需决策

| 项目 | 积压时长 | 风险/行动建议 |
|:---|:---|:---|
| [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) Ollama MCP + OneCLI 网关故障 | 1 天 | 🔴 **架构级阻塞** — 影响所有非 Ollama 提供商的 MCP 工具调用，需 OneCLI 网关维护者介入诊断 proxy path 逻辑 |
| [#1902](https://github.com/qwibitai/nanoclaw/issues/1902) 跨通道回复泄漏 | 1 天 | 🔴 **隐私风险** — 建议临时文档警示"勿共享 agent group"，长期需路由状态隔离重构 |
| [#1896](https://github.com/qwibitai/nanoclaw/issues/1896) Telegram 编辑丢弃 | 1 天 | 🟡 需确认是设计省略（v2 不支持编辑）还是路由 bug，建议优先标记 `good first issue` |
| jorgenclaw 5 个 feature skill PR 集群 | 1 天 | 🟡 **审阅带宽瓶颈** — 建议批量技术评审会或指定领域维护者（Nostr/内容/基础设施）|
| [#1888](https://github.com/qwibitai/nanoclaw/pull/1888) OneCLI API_KEY 未透传 | 1 天 | 🟡 修复 #1818 的关键补丁，与 #1906 可能存在关联，建议合并前交叉验证 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| PR 合并率 | 37% (10/27) | 正常，待审 PR 多为当日提交 |
| Issue 关闭率 | 0% (0/4) | ⚠️ 偏低，4 条新 Issue 全部开放，需关注响应 SLA |
| 社区贡献者活跃度 | ≥6 人（ythx-101, 0reo, ssimeonov, jorgenclaw, Koshkoshinsk, Sanjays2402 等） | 🟢 健康，分布式贡献 |
| 评论互动深度 | 普遍偏低（多数 0 评论） | ⚠️ 需警惕"提交即遗忘"文化，建议引入 PR 模板强制评审清单 |

---

*日报生成基于 GitHub 公开数据，PR 评论数存在 `undefined` 数据异常，建议核实 API 响应。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-22

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-04-22  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

NullClaw 项目过去24小时保持**中等活跃度**，2条 Issue 持续发酵、1条修复 PR 待合并，无新版本发布。社区讨论聚焦于 **gateway 组件的稳定性与网络兼容性**：一方面，Raspberry Pi 5 用户报告了严重的 CPU 空转 Bug（#851），已有社区贡献者提交修复 PR（#853）；另一方面，Tailscale 集成文档缺失问题（#826）持续吸引用户追问，12条评论显示该场景需求旺盛。整体项目处于**问题驱动型开发节奏**，维护者响应速度一般，但社区自组织能力尚可。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无已合并/关闭的 PR**

| PR | 状态 | 进展评估 |
|:---|:---|:---|
| [#853](https://github.com/nullclaw/nullclaw/pull/853) `fix(gateway): add accept-loop backoff to prevent CPU spin` | ⏳ **待合并** | 针对 #851 的修复方案已就绪，采用**有界退避策略**（bounded backoff）处理 `accept4()` 非 `WouldBlock` 错误，避免 CPU 空转。PR 包含明确的退避常量（`ACCEPT_ERROR_BACKOFF_MAX_MS`）和日志间隔控制，代码质量较高。 |

**整体推进评估**：项目今日处于"修复就绪但未合入"状态，gateway 组件的稳定性修复是主要进展方向。建议维护者优先 review #853，该修复直接影响边缘设备（ARM/树莓派）的生产可用性。

---

## 4. 社区热点

### 🔥 最活跃讨论：Tailscale 集成文档缺失（[#826](https://github.com/nullclaw/nullclaw/issues/826)）

| 指标 | 数据 |
|:---|:---|
| 评论数 | **12条**（过去24小时持续更新） |
| 创建时间 | 2026-04-15（已活跃7天） |
| 最后更新 | 2026-04-21 |

**诉求分析**：
- **核心痛点**：用户 `eabase` 在 Tailscale + Debian VPS 场景下启动 gateway 时遭遇 `NotImplemented` 错误，但官方文档无相关指引
- **深层信号**：远程安全访问（Zero Trust/WireGuard 替代方案）是 AI 智能体部署的关键场景，NullClaw 作为"个人 AI 助手"基础设施，**网络穿透能力**直接影响用户采纳
- **社区期待**：需要明确的网络拓扑文档（Tailscale/WireGuard/内网穿透的推荐配置）

### ⚠️ 技术热点：Raspberry Pi 5 CPU 空转（[#851](https://github.com/nullclaw/nullclaw/issues/851)）

| 指标 | 数据 |
|:---|:---|
| 评论数 | 3条 |
| 创建时间 | 2026-04-19 |
| 最后更新 | 2026-04-21 |

**诉求分析**：
- 边缘设备（ARM SBC）是**个人 AI 助手的重要部署目标**，低功耗稳定运行是核心诉求
- 用户 `Trez-zerT` 提供了完整的 `strace` 诊断，社区技术氛围良好

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | Gateway `accept4()`  busy-loop 导致 CPU 核心 100% 占用（Raspberry Pi 5 / aarch64 / Debian 13） | [#853](https://github.com/nullclaw/nullclaw/pull/853) | **✅ 有修复，待合并** |
| 🟡 **中** | [#826](https://github.com/nullclaw/nullclaw/issues/826) | Tailscale 场景下 gateway 启动失败 `NotImplemented`，属**文档/兼容性缺陷** | 无 | ❌ 无修复 |

**风险评估**：#851 的 busy-loop 是**资源泄漏型 Bug**，在边缘设备上可能导致过热、续航骤降，影响生产环境稳定性。建议维护者 24 小时内 review #853。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) 讨论 | **Tailscale/WireGuard 原生支持**或官方文档 | ⭐⭐⭐☆☆ 高需求，但需维护者确认网络层架构决策 |
| [#853](https://github.com/nullclaw/nullclaw/pull/853) 实现 | Gateway 错误处理框架的**退避机制标准化** | ⭐⭐⭐⭐☆ 高，修复 PR 已就绪，合入后可为后续网络错误处理提供模式 |

**路线图推断**：NullClaw 的 gateway 组件正从"功能可用"向**边缘场景鲁棒性**演进。建议关注：
- 网络层抽象是否需支持用户态网络栈（如 Tailscale 的 `netstack`）
- ARM/嵌入式平台的 CI 测试覆盖

---

## 7. 用户反馈摘要

| 维度 | 提炼 |
|:---|:---|
| **真实痛点** | "在树莓派上 CPU 直接跑满，设备发烫" — 边缘部署的稳定性门槛未满足 |
| **使用场景** | 远程 VPS + Tailscale 安全组网、家庭内网 Raspberry Pi 作为 AI 网关 |
| **满意之处** | 社区响应积极（#851 3天内即有修复 PR）；`strace` 诊断显示用户技术能力强 |
| **不满之处** | 文档覆盖盲区大（Tailscale 场景）；错误信息 `NotImplemented` 过于模糊，无排查指引 |
| **隐性需求** | 个人 AI 助手需要**"开箱即用的安全远程访问"**，用户不愿自行处理网络隧道配置 |

---

## 8. 待处理积压

| Issue/PR | 天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | **7天** | 高评论量（12条）无维护者正式回应，可能流失早期采用者 | 维护者确认：是文档问题还是功能缺失？指派 `documentation` 或 `enhancement` 标签 |
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | **3天** | 修复就绪但未合入，阻塞 #851 关闭 | **优先 review**，建议 24-48 小时内完成；若维护者带宽不足，可考虑增加 reviewer |

---

## 附录：关键链接速查

| 资源 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/nullclaw/nullclaw |
| Issue #826 (Tailscale) | https://github.com/nullclaw/nullclaw/issues/826 |
| Issue #851 (CPU spin) | https://github.com/nullclaw/nullclaw/issues/851 |
| PR #853 (fix) | https://github.com/nullclaw/nullclaw/pull/853 |

---

> **明日关注**：#853 合并状态、#826 是否有维护者回应、是否有新的网络兼容性报告。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-22

## 1. 今日速览

IronClaw 今日呈现**高活跃度、高交付压力**态势。v0.26.0 正式发布，核心亮点为 engine-v2 的 per-project sandbox 与成本追踪能力，但发布当日即遭遇 Linux x86_64 安装器故障的回归问题。社区同时开启 Engine V2 默认切换的大规模工程（#2800 及其 6+ 子 PR），并密集修复 mission 生命周期、工具注册、UI 状态同步等关键路径。Issues 侧 21 条新开/活跃，9 条关闭，PR 侧 39 条待合并，显示代码审查队列承压。

---

## 2. 版本发布

### [ironclaw-v0.26.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.26.0) | 2026-04-21

| 维度 | 详情 |
|:---|:---|
| **核心新增** | **Engine V2 Per-Project Sandbox**：支持 mission 生命周期管理与成本追踪（[#2211](https://github.com/nearai/ironclaw/pull/2211), [#2660](https://github.com/nearai/ironclaw/pull/2660)） |
| **LLM 层改进** | 支持从 settings 热重载 provider chain（[#2673](https://github.com/nearai/ironclaw/pull/2673)） |
| **⚠️ 已知问题** | **Linux x86_64 glibc 安装器故障**（[#2818](https://github.com/nearai/ironclaw/issues/2818)）：cargo-dist 生成的 `ironclaw-installer.sh` 在 `x86_64-unknown-linux-gnu` 目标上失败，影响全新部署 |
| **迁移建议** | 现有用户可跳过此版本等待 v0.26.1 热修复；急需 sandbox 功能的用户建议从源码构建或验证 Docker 部署路径 |

---

## 3. 项目进展

### 已合并/关闭的关键 PR（11 条中筛选）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2790](https://github.com/nearai/ironclaw/pull/2790) | serrrfirat | 修复多租户 widget 隔离 + portfolio nudge 恢复 | 企业级 SaaS 部署可靠性提升 |
| [#2816](https://github.com/nearai/ironclaw/pull/2816) | zetyquickly | 修复 `notify_thread_id` 管道 | 实时通知链路完整性恢复 |
| [#2794](https://github.com/nearai/ironclaw/pull/2794) | gagdiez | **V2 capability 在 tool registry 中可见** | 解决 `tool_info("mission_create")` 返回未注册的根本问题 |

### 推进中的重大工程

| 主题 | 关联 PR | 状态 |
|:---|:---|:---|
| **Engine V2 默认切换** | [#2800](https://github.com/nearai/ironclaw/issues/2800) 追踪器 + [#2804](https://github.com/nearai/ironclaw/pull/2804)-[#2807](https://github.com/nearai/ironclaw/pull/2807) | 6 个子 PR 并行推进，尚未合入 |
| **Workspace 实体与跨空间共享** | [#2548](https://github.com/nearai/ironclaw/pull/2548) | DB 迁移就绪，待最终审查 |
| **原生 Matrix 通道** | [#2019](https://github.com/nearai/ironclaw/pull/2019) | 持续迭代中，含 E2EE 支持 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#2285** Web UI 刷新后线程恢复错误 | 7 条 | 非助手线程在刷新后被错误恢复为助手线程，影响多线程工作流连续性 | [链接](https://github.com/nearai/ironclaw/issues/2285) |
| **#2087** Notion 设置后无响应 | 4 条 | MCP/扩展集成稳定性：第三方工具配置导致 agent 完全僵死 | [链接](https://github.com/nearai/ironclaw/issues/2087) |
| **#2585** 活跃 mission 未计入已完成计数 | 3 条 | **Mission 状态追踪仪表盘数据不一致**，直接影响 v0.26.0 核心功能的可信度 | [链接](https://github.com/nearai/ironclaw/issues/2585) |

### 热点分析

> **#2285** 已标记由 #2330 修复并合并至 staging（ed2d6dc），但**等待 QA 在 hosted-staging 重新验证**。这反映了项目"修复-合并-验证" pipeline 的瓶颈：代码修复快，环境晋升慢。

> **#2585** 与 v0.26.0 的 mission 生命周期功能直接相关，属于**新功能发布即暴露的质量债务**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **P1** | [#2818](https://github.com/nearai/ironclaw/issues/2818) | **v0.26.0 安装器在 Linux x86_64 完全失败** | 无 | 🔴 新建，阻塞新用户 onboarding |
| **P1** | [#2808](https://github.com/nearai/ironclaw/issues/2808) | 聊天中 `stop` 命令无法终止活跃 mission | [#2814](https://github.com/nearai/ironclaw/pull/2814) | 🟡 有 PR 强制 tool-use 检测 |
| **P1** | [#2736](https://github.com/nearai/ironclaw/issues/2736) | 失败 mission 产生失控线程并膨胀计数 | 已关闭 | 🟢 已修复（昨日关闭） |
| **P2** | [#2809](https://github.com/nearai/ironclaw/issues/2809) | "创建项目"请求错误创建为 mission | 无 | 🟡 新建，语义路由缺陷 |
| **P2** | [#2793](https://github.com/nearai/ironclaw/issues/2793) | `tool_info` 返回未注册但实际可执行 | [#2794](https://github.com/nearai/ironclaw/pull/2794) | 🟢 有 PR 修复双源 truth |
| **P2** | [#2285](https://github.com/nearai/ironclaw/issues/2285) | Web UI 刷新线程恢复错误 | [#2330](https://github.com/nearai/ironclaw/pull/2330) | 🟡 待 QA 验证 |

### 已关闭的稳定性修复

- [#1537](https://github.com/nearai/ironclaw/issues/1537) WASM credential injection 在 TEE 中静默失败 → **生产环境安全关键修复**
- [#2391](https://github.com/nearai/ironclaw/issues/2391) Google OAuth `access_type` 拼写错误 `'offlin'` → **第三方集成可靠性**
- [#2540](https://github.com/nearai/ironclaw/issues/2540) Orchestrator 超时 307s > 300s 限制 → **执行时长边界控制**
- [#2780](https://github.com/nearai/ironclaw/issues/2780) Brave Search API key 间歇性 422 → **外部服务容错**

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 信号强度 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#2792](https://github.com/nearai/ironclaw/issues/2792) Gateway 状态收敛（消除 UI/后端状态漂移） | Epic | ⭐⭐⭐⭐⭐ | **高** — 已有 3 个子 PR 推进，ilblackdragon 主导 |
| [#2767](https://github.com/nearai/ironclaw/issues/2767) 分离 engine v2 capability background 与 callable tool schemas | Epic | ⭐⭐⭐⭐⭐ | **高** — engine v2 默认切换前置条件 |
| [#2791](https://github.com/nearai/ironclaw/issues/2791) 内置"报告问题"UI，自动提交 GitHub issue | Enhancement | ⭐⭐⭐⭐☆ | 中高 — 提升用户反馈效率，与现有 github tool 集成 |
| [#2781](https://github.com/nearai/ironclaw/issues/2781) 飞书长连接模式 | Channel | ⭐⭐⭐☆☆ | 中 — 企业 IM 需求，需评估架构兼容性 |
| [#2778](https://github.com/nearai/ironclaw/issues/2778) NEAR AI hosted 暴露 HTTP webhook 端口 | Hosting | ⭐⭐⭐☆☆ | 中 — 影响多通道部署模式 |
| [#748](https://github.com/nearai/ironclaw/issues/748) 发布 ironclaw-worker Docker 镜像到公共仓库 | Setup | ⭐⭐⭐⭐☆ | 中高 — 5 👍 社区呼声高，sandbox 体验阻塞 |

---

## 7. 用户反馈摘要

### 真实痛点

> **部署与配置摩擦**
- "Railway 一键模板 LLM_* 环境变量运行时不可见，模型卡在 Anthropic Sonnet" — [#1680](https://github.com/nearai/ironclaw/issues/1680)
- "Docker sandbox 因无公共 registry 镜像导致 `auto_pull_image` 失败" — [#748](https://github.com/nearai/ironclaw/issues/748)

> **状态可见性与控制感缺失**
- "创建项目变成创建 mission，用户意图被系统曲解" — [#2809](https://github.com/nearai/ironclaw/issues/2809)
- "stop 命令不停止 mission，LLM 只是叙述而非执行" — [#2808](https://github.com/nearai/ironclaw/issues/2808)

> **第三方集成脆弱性**
- "Notion 设置后 agent 完全无响应" — [#2087](https://github.com/nearai/ironclaw/issues/2087)
- Google OAuth 未验证应用警告限制非 @near.ai 用户 — [#773](https://github.com/nearai/ironclaw/issues/773)

### 满意信号

- Engine v2 sandbox 的成本追踪能力被作为 v0.26.0 核心卖点，显示**企业级可观测性需求被重视**
- 热重载 provider chain 减少配置重启摩擦

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建日期 | 最后更新 | 积压天数 | 风险 |
|:---|:---|:---|:---|:---|
| [#773](https://github.com/nearai/ironclaw/issues/773) Google GCP 应用验证 | 2026-03-09 | 2026-04-21 | **43 天** | 🔴 阻塞所有非 @near.ai 用户的 Google 集成（Gmail/Calendar/Drive/Sheets）|
| [#748](https://github.com/nearai/ironclaw/issues/748) 发布公共 Docker worker 镜像 | 2026-03-09 | 2026-04-21 | **43 天** | 🟡 5 👍 社区呼声最高，sandbox 功能实际不可用 |
| [#1680](https://github.com/nearai/ironclaw/issues/1680) Railway 模板环境变量传递 | 2026-03-26 | 2026-04-21 | **27 天** | 🟡 影响一键部署核心用户旅程 |

### 维护者行动建议

1. **紧急**：为 [#2818](https://github.com/nearai/ironclaw/issues/2818) 发布 v0.26.1 热修复，或撤回 v0.26.0 Linux 安装器
2. **本周内**：推动 [#773](https://github.com/nearai/ironclaw/issues/773) Google 验证流程，这是 SaaS 增长的关键瓶颈
3. **Sprint 规划**：将 [#748](https://github.com/nearai/ironclaw/issues/748) 纳入下一迭代，解锁 sandbox 完整体验

---

*日报基于 GitHub 公开数据生成，时间范围：2026-04-21 至 2026-04-22 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-22

## 1. 今日速览

LobsterAI 今日呈现**高强度迭代态势**：24小时内 **18 个 PR 流转**（13 个已合并/关闭，5 个待审），伴随 **v2026.4.21 版本发布**，项目核心功能持续扩展。社区活跃度中等，Issues 侧出现一则**关键 Bug 深度分析报告**（#1783），涉及 diff 显示功能的核心缺陷定位，值得维护者优先响应。整体开发节奏稳健，Electron/Vite 依赖升级同步推进，但多版本 Vite 升级 PR 并存（#1766/#1281）提示需关注合并冲突风险。

---

## 2. 版本发布

### [v2026.4.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.21) | 2026-04-21

| 维度 | 详情 |
|:---|:---|
| **核心升级** | OpenClaw 框架升级至 v2026.4.14，含**启动性能优化** |
| **关键修复** | 协同模块心跳提示历史记录泄漏问题（`cowork` 模块隐私安全） |
| **破坏性变更** | 暂无明确标注 |
| **迁移注意** | OpenClaw 插件开发者需验证 `openclaw/plugin-sdk/*` 导入兼容性——今日 PR #1781 显示 v0.8.17 的 `tsdown` 预编译会暴露模块加载器缺陷 |

**版本质量信号**：该版本通过 PR #1782 合并发布，覆盖 7 个核心领域（renderer/main/openclaw/skills/cowork/im/docs），发布流程规范。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（13 个）

| PR | 作者 | 领域 | 价值 |
|:---|:---|:---|:---|
| [#1782](https://github.com/netease-youdao/LobsterAI/pull/1782) | liuzhq1986 | 全栈发布 | **v2026.4.18→4.21 正式合入 main**：邮件通道集成、启动性能重构、自动更新协调器、SQLite 备份恢复、新手引导流程 |
| [#1719](https://github.com/netease-youdao/LobsterAI/pull/1719) | gzlicanyi | IM 网关 | **"龙虾邮箱"（Lobster Email）通道上线**：完整配置 UI、会话映射、连接验证——AI 代理邮件通信能力里程碑 |
| [#1781](https://github.com/netease-youdao/LobsterAI/pull/1781) | btc69m979y-dotcom | 钉钉集成 | **紧急降级修复**：`dingtalk-connector` 0.8.17→0.8.16，解决消息无响应崩溃 |
| [#1780](https://github.com/netease-youdao/LobsterAI/pull/1780) | btc69m979y-dotcom | 图像处理 | **macOS 粘贴图片不可见修复**：排除 prompt 中的 image path 避免 base64 被 Native-image 检测误清理 |
| [#1775](https://github.com/netease-youdao/LobsterAI/pull/1775) | btc69m979y-dotcom | 日志诊断 | **诊断能力增强**：导出日志 ZIP 自动包含 OpenClaw gateway.log 及滚动日志 |
| [#1774](https://github.com/netease-youdao/LobsterAI/pull/1774) | liuzhq1986 | Windows 安装 | **用户技能持久化**：升级时通过 AppData 备份保留用户自定义 skill |
| [#1771](https://github.com/netease-youdao/LobsterAI/pull/1771) | btc69m979y-dotcom | NIM 即时通讯 | **Agent 通道修复**：NIM 多实例平台配置识别 + QR 码过期刷新按钮 |

**今日推进度量**：IM 通信矩阵扩展（邮件+钉钉+NIM 三通道并行）、跨平台稳定性（macOS 图像/Windows 安装）、可观测性（日志导出）三大主题全面覆盖。

---

## 4. 社区热点

### 最高技术价值：Issue [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) — 更新过后 diff 异常失灵问题

| 指标 | 数据 |
|:---|:---|
| 作者 | @MiracleOfrRevolutionary |
| 评论 | 1（作者自补充深度分析）|
| 互动 | 👍 0，但**技术深度极高** |

**核心发现**：作者通过逆向分析 `app.asar` 中的 `extractDiffFromToolInput` 函数，定位到 **edit 分支仅扫描 toolInput 顶层查找 `oldText/newText`**，未递归处理嵌套结构，导致 diff 渲染完全失效。

**社区诉求信号**：用户具备源码级调试能力，但项目缺乏符号/调试构建分发，迫使社区采用逆向工程——建议维护者建立 **Nightly Debug 构建** 或 **source map 发布机制**。

### 长期滞留重激活：Issue [#9](https://github.com/netease-youdao/LobsterAI/issues/9)

- 创建于 2026-02-20，**stale 标签**，昨日被重新顶起
- Windows Git Bash 路径注入日志，疑似安装/环境检测问题，2 个月无维护者响应

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | Fix PR | 影响面 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-回归** | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) Diff 显示完全失效（v2026.4.21 更新后）| **待修复**，已有根因分析 | 无 | 所有使用 edit/editfile 工具的用户 |
| 🟡 **P1-崩溃** | 钉钉连接器 0.8.17 启动崩溃 | ✅ **已修复** | [#1781](https://github.com/netease-youdao/LobsterAI/pull/1781) | 钉钉集成用户 |
| 🟡 **P1-功能降级** | macOS 粘贴图片模型不可见 | ✅ **已修复** | [#1780](https://github.com/netease-youdao/LobsterAI/pull/1780) | macOS 用户 |
| 🟢 **P2-测试失败** | `openclawConfigSync.runtime.test.ts` 4 例全挂 | ✅ **已修复** | [#1772](https://github.com/netease-youdao/LobsterAI/pull/1772) | CI/开发者体验 |

**稳定性评估**：今日合并的修复显示团队对**平台特异性问题**（macOS/Windows）响应迅速，但 **#1783 的 diff 回归**尚未有 PR，且与 v2026.4.21 强相关——建议发布 **hotfix** 或回滚评估。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性 | 依据 |
|:---|:---|:---|:---|
| PR [#605](https://github.com/netease-youdao/LobsterAI/pull/605) | Cron 表达式增加未来 5 次执行时间预览（UI 增强）| ⭐⭐⭐⭐☆ 高 | 功能完整、有截图、stale 但昨日更新，产品体验直接增益 |
| PR [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) | i18n 缺失 `edit` 翻译键补充 | ⭐⭐⭐⭐⭐ 必进 | 零风险修复，国际化基础体验 |
| Issue [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) 隐含需求 | 调试构建/source map 分发 | ⭐⭐⭐☆☆ 中 | 社区高级用户痛点，需基础设施投入 |

**路线图信号**：IM 通道扩展（邮件已落地）+ 定时任务 UX 优化（#605）构成 **"企业工作流集成"** 主线，与 OpenClaw 框架升级协同推进 AI 代理的场景渗透。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 反馈来源 | 情绪 |
|:---|:---|:---|
| **"更新即坏"恐惧** | #1783 作者：更新后核心功能（diff）直接失灵 | 😤 高挫败 |
| **调试黑箱** | #1783 作者被迫逆向 `app.asar` | 😤 高挫败 |
| **跨平台一致性** | macOS 图像粘贴、Windows skill 升级丢失 | 😐 中等不满 |

### 满意信号

- 邮件通道（#1719）集成完整度高，配置 UI + 验证闭环
- 日志导出增强（#1775）体现对**企业排障场景**的重视

---

## 8. 待处理积压

| 项目 | 时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [Issue #9](https://github.com/netease-youdao/LobsterAI/issues/9) Git Bash 路径问题 | **62 天** | Windows 安装体验负面口碑 | 分配 `platform: windows` 标签，要求复现日志 |
| [PR #605](https://github.com/netease-youdao/LobsterAI/pull/605) Cron 预览 | **32 天 stale** | 社区贡献流失 | 维护者评审或明确拒绝理由 |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 升级 | **20 天** | 安全补丁延迟 | 与 #1766/#1281 合并冲突需协调 |

**健康度警示**：5 个待合并 PR 中 **3 个为 Dependabot 依赖升级**（Electron/Vite），自动化流程可能因测试瓶颈或人工审核队列堆积而延迟——建议建立依赖升级的**分级合并策略**（安全补丁 vs 功能版本）。

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-04-21 00:00 - 2026-04-21 23:59 UTC+8*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-22

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis) | **日期**: 2026-04-22 | **分析周期**: 过去24小时

---

## 1. 今日速览

Moltis 今日呈现**高活跃度、高交付质量**的特征：24小时内完成 6 个 Issue 闭环与 3 个 PR 合并，同时新增 6 个活跃议题，社区贡献者与核心维护者（penso）协作紧密。安全与稳定性是今日主线——连续修复了执行审批绕过、浏览器容器启动失败、Telegram 文件静默丢弃三个生产级缺陷，并发布了日常迭代版本 `20260421.05`。值得注意的是，安全研究员 dmitriikeler 单日提交 5 个议题，聚焦沙箱隔离与执行安全，反映出项目在容器化部署场景下的安全纵深正在加速构建。

---

## 2. 版本发布

### [Release 20260421.05](https://github.com/moltis-org/moltis/releases/tag/20260421.05)

| 属性 | 详情 |
|:---|:---|
| **版本号** | 20260421.05 |
| **发布日期** | 2026-04-21 |
| **版本类型** | 日常迭代版本（日期版本号） |

**更新内容说明**：该版本为日期标记的常规发布，结合同日合并的 PR 内容推断，包含以下关键修复：

| 关联修复 | 来源 PR | 影响 |
|:---|:---|:---|
| 执行审批绕过漏洞（CVE 级） | [#822](https://github.com/moltis-org/moltis/pull/822) | **安全关键**：阻止 `LD_PRELOAD=/evil.so cat /file` 类环境变量前缀注入攻击 |
| 浏览器容器诊断增强 | [#820](https://github.com/moltis-org/moltis/pull/820) | 运维友好：容器就绪失败时输出 Chrome 日志、docker run 命令及容器状态 |
| Telegram 文件类型推断 | [#819](https://github.com/moltis-org/moltis/pull/819) | 用户体验：`.md`/`.toml`/`.yaml` 等文件不再被静默丢弃 |

**破坏性变更**：无已知破坏性变更。

**迁移注意事项**：
- 使用 `approval_mode = off` 且依赖 `exec.allowlist` 的用户建议立即升级，旧版本存在明确的命令注入绕过路径
- 容器化部署用户可启用新的诊断日志以加速浏览器故障排查

---

## 3. 项目进展

### 已合并/关闭的 PR（3 个）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#822](https://github.com/moltis-org/moltis/pull/822) | penso | **双层防御修复执行审批绕过**：Regex 层新增 6 类危险模式定义（`DANGEROUS_PATTERN_DEFS`）+ 语义层校验首个 token 是否为真实可执行文件 | **安全基线提升**：消除"安全二进制文件白名单被环境变量前缀绕过"的架构级漏洞，为后续 `SAFE_BINS` 严格模式（[#815](https://github.com/moltis-org/moltis/issues/815)）奠定基础 |
| [#820](https://github.com/moltis-org/moltis/pull/820) | penso | **浏览器容器可观测性增强**：就绪失败时采集容器状态、Chrome 内部日志、完整 docker run 命令；检测容器嵌套场景并告警 | **运维成熟度**：将"浏览器容器 60s 未就绪"（[#786](https://github.com/moltis-org/moltis/issues/786)）从黑盒故障转为可诊断问题 |
| [#819](https://github.com/moltis-org/moltis/pull/819) | penso | **Telegram MIME 类型回退**：当 Telegram 返回 `application/octet-stream` 时，通过文件扩展名推断真实 MIME 类型 | **多模态能力补全**：支撑 [#563](https://github.com/moltis-org/moltis/issues/563) PDF 处理功能的稳定交付，修复 .md 文件静默丢失的 UX 断裂 |

### 待合并 PR（1 个）

| PR | 作者 | 状态 | 说明 |
|:---|:---|:---|:---|
| [#783](https://github.com/moltis-org/moltis/pull/783) | Cstewart-HC | **OPEN** | AutoDoc 批量审计：7 文档文件、+186−63 行变更，文档旋转机制（Doc Rotisserie）12/62 完成，属于长期基础设施工程 |

**整体进展评估**：今日合并的 3 个 PR 形成"安全-可观测性-用户体验"的三角闭环，项目在生产可靠性维度迈出实质性步伐。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 👍 | 热度分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#375](https://github.com/moltis-org/moltis/issues/375) Google 模型 functionCall 缺失 thought_signature | 2 | 3 | **跨模型兼容性痛点**：Google Gemini 系列模型的 function calling 格式与 OpenAI 生态存在语义差异，用户需要完整的思维链签名用于审计与调试；3 个 👍 表明该问题具有群体代表性 |
| 2 | [#821](https://github.com/moltis-org/moltis/issues/821) Skill 级别 disable-model-invocation 标志 | 2 | 1 | **101 个默认 Skill 的性能焦虑**：系统提示词每轮注入所有启用 Skill 的 `SKILL.md`，导致 token 浪费与延迟；诉求是精细化控制——仅在 Skill 被实际调用时才允许其触发模型请求 |
| 3 | [#563](https://github.com/moltis-org/moltis/issues/563) PDF 接收与处理能力 | 2 | 0 | **多模态刚需闭环**：今日通过 [#819](https://github.com/moltis-org/moltis/pull/819) 修复了文件传输层问题，但核心诉求（PDF 内容解析与推理）的实现程度待验证 |

**背后诉求提炼**：
- **模型生态碎片化**：用户被迫在 Google/ OpenAI/ OpenRouter 等多提供商之间切换，需要 Moltis 提供统一的抽象与补偿层
- **规模化 Skill 治理**：从"功能丰富"到"性能可控"的转折点，101 个默认 Skill 已成为双刃剑
- **端到端多模态**：文件传输是入口，内容理解是核心，用户期待完整的 PDF→文本→推理 pipeline

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重等级 | Issue | 描述 | 状态 | Fix PR | 影响面 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#814](https://github.com/moltis-org/moltis/issues/814) | 执行审批绕过：`LD_PRELOAD`/`PATH`/`PYTHONPATH` 前缀注入可绕过 `SAFE_BINS` 白名单 | **已关闭** | [#822](https://github.com/moltis-org/moltis/pull/822) | 所有启用工具执行且使用审批模式的用户 |
| 🟡 **High** | [#793](https://github.com/moltis-org/moltis/issues/793) | OpenRouter + Google AI Studio 组合返回 HTTP 400 | **已关闭** | 未明确标注 | 特定提供商组合的用户 |
| 🟡 **High** | [#786](https://github.com/moltis-org/moltis/issues/786) | 浏览器容器 60s 内未就绪 | **已关闭** | [#820](https://github.com/moltis-org/moltis/pull/820) | 依赖浏览器自动化功能的部署 |
| 🟡 **High** | [#823](https://github.com/moltis-org/moltis/issues/823) | `RUST_LOG=moltis_gateway=debug` 导致磁盘被 "broadcasting event" 日志填满 | **开放** | **暂无** | 调试场景下的所有用户 |
| 🟢 **Medium** | [#813](https://github.com/moltis-org/moltis/issues/813) | Telegram 以 `application/octet-stream` 发送 .md 文件导致静默丢弃 | **已关闭** | [#819](https://github.com/moltis-org/moltis/pull/819) | Telegram 集成用户 |
| 🟢 **Medium** | [#817](https://github.com/moltis-org/moltis/issues/817) | Discord 语音消息被静默丢弃，缺乏诊断日志 | **开放** | **暂无** | Discord 集成用户 |

**稳定性健康度**：**6/8 已闭环，2 个开放 Bug 均有明确诊断路径**。唯一需紧急关注的是 [#823](https://github.com/moltis-org/moltis/issues/823)——调试日志的无限增长可能导致生产环境磁盘耗尽，属于"工具反噬"类问题。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求（4 个）

| Issue | 提出者 | 核心诉求 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---:|:---|
| [#821](https://github.com/moltis-org/moltis/issues/821) `disable-model-invocation` Skill 标志 | xzavrel | 减少每轮注入的 Skill 开销 | ⭐⭐⭐⭐⭐ **高** | 直接关联已合并的 101 Skill 基础设施（#797），性能痛点明确，实现路径清晰 |
| [#818](https://github.com/moltis-org/moltis/issues/818) Landlock FS 隔离（restricted-host 沙箱） | dmitriikeler | 无容器运行时环境（Fly.io）的文件系统隔离 | ⭐⭐⭐⭐☆ **中高** | 安全研究员连续提交，与 [#815](https://github.com/moltis-org/moltis/issues/815)/[#816](https://github.com/moltis-org/moltis/issues/816) 形成沙箱安全主题簇，符合项目安全纵深趋势 |
| [#816](https://github.com/moltis-org/moltis/issues/816) `tools.exec.fs_deny_paths` argv 级路径拒绝 | dmitriikeler | 容器化部署的路径访问控制 | ⭐⭐⭐⭐☆ **中高** | 与现有 `tools.fs.deny_paths` 配置体系直接衔接，属于能力补全而非架构重构 |
| [#815](https://github.com/moltis-org/moltis/issues/815) `SAFE_BINS` 严格白名单模式 | dmitriikeler | 关闭审批模式时的强制白名单校验 | ⭐⭐⭐⭐⭐ **高** | 直接修复 [#814](https://github.com/moltis-org/moltis/issues/814) 漏洞的架构级加固，是 #822 的演进而非替代 |

**路线图信号**：
- **短期（1-2 版本）**：Skill 性能治理（#821）+ 沙箱安全三件套（#815/#816/#818）形成明确主题
- **中期**：多模态文件处理（#563）需从"能接收"推进到"能理解"，可能触发文档解析引擎的引入决策

---

## 7. 用户反馈摘要

### 痛点与场景

| 来源 | 用户原声（提炼） | 场景深度 |
|:---|:---|:---|
| [#821](https://github.com/moltis-org/moltis/issues/821) | "101 个默认 Skill，每轮都注入，即使用不到" | **规模化部署焦虑**：个人用户可能无感，但多会话、长上下文场景下 token 成本与延迟线性累积 |
| [#823](https://github.com/moltis-org/moltis/issues/823) | "debug 日志把磁盘填满" | **运维信任损耗**：调试工具本身成为故障源，反映日志级别与输出量的设计失衡 |
| [#793](https://github.com/moltis-org/moltis/issues/793) | "OpenRouter + Google AI Studio = 400" | **提供商组合碎片化**：用户不应理解各提供商的协议差异，抽象层泄漏导致配置噩梦 |
| [#817](https://github.com/moltis-org/moltis/issues/817) | "Discord 语音消息静默丢弃，不知道错在哪" | **静默失败反模式**：与 [#813](https://github.com/moltis-org/moltis/issues/813) Telegram 文件丢弃同源——缺乏降级路径与用户可见的错误反馈 |

### 满意点
- **安全响应速度**：[#814](https://github.com/moltis-org/moltis/issues/814) 从报告到修复（#822）在同日内完成，展现核心维护者 penso 对安全类议题的优先级判定
- **诊断透明度提升**：[#820](https://github.com/moltis-org/moltis/pull/820) 的浏览器日志增强被用户隐含认可（无后续追问）

---

## 8. 待处理积压

### 需维护者关注的长期/重要事项

| Issue/PR | 创建时间 | 最后更新 | 积压原因 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#783](https://github.com/moltis-org/moltis/pull/783) AutoDoc 批量审计 | 2026-04-18 | 2026-04-21 | 文档基础设施 PR，62 文档仅完成 12 个，可能因"非紧急"被持续推迟 | 设定批次合并节奏（如每周一合并已完成批次），避免与代码变更产生文档漂移 |
| [#375](https://github.com/moltis-org/moltis/issues/375) Google 模型 thought_signature | 2026-03-09 | 2026-04-21 | 已关闭但 **3 个 👍 + 跨模型兼容性** 表明可能需系统性方案而非个案修复 | 评估是否建立"模型适配层"元议题，聚合 Google/Groq/Together 等差异化实现 |
| [#823](https://github.com/moltis-org/moltis/issues/823) 调试日志磁盘耗尽 | 2026-04-21 | 2026-04-21 | **开放且无 PR**，但属于生产环境潜在故障源 | 标记 `good first issue` 或分配核心开发者，限制广播事件日志的速率/大小 |

---

> **日报生成说明**：基于 GitHub API 公开数据与议题内容语义分析，未包含私有讨论或未公开安全披露。版本 `20260421.05` 的详细变更日志建议直接查阅 [Release 页面](https://github.com/moltis-org/moltis/releases/tag/20260421.05)。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-22

## 1. 今日速览

CoPaw（QwenPaw）项目今日保持**高活跃度**：24小时内处理 **50 条 Issues**（关闭率 58%）和 **40 条 PR**（合并/关闭率 45%），社区协作效率显著。v1.1.3-beta.2 版本发布聚焦 macOS 构建修复与底层依赖升级，显示项目处于快速迭代期。值得关注的是，**记忆系统重构**（PR #3548）和**模型路由语义对齐**（PR #3550）两大架构级改动正在并行推进，预示 v1.2 可能带来核心能力升级。同时，MCP 相关稳定性问题集中爆发（3 个新增 Issue），需警惕成为质量瓶颈。

---

## 2. 版本发布

### v1.1.3-beta.2 已发布
| 属性 | 内容 |
|:---|:---|
| **版本** | [v1.1.3-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.3-beta.2) |
| **发布时间** | 2026-04-21 |
| **类型** | 补丁版本（beta 通道）|

**更新内容：**
- **chore**: 版本号升级至 1.1.3b2（[#3620](https://github.com/agentscope-ai/QwenPaw/pull/3620)）
- **fix**: 修复 macOS 桌面版构建失败问题（[#3622](https://github.com/agentscope-ai/QwenPaw/pull/3622)）— 影响桌面端用户安装体验
- **feat**: 底层 AgentScope 依赖升级至 v1.0.19 — 可能包含未公开的框架级改进

**迁移注意事项：** 从版本号推断为增量更新，无破坏性变更。macOS 用户此前若遇构建失败可尝试此版本。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（18 条中的核心项）

| PR | 作者 | 状态 | 贡献领域 |
|:---|:---|:---|:---|
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) | zealonexp | **已合并** | **P0 稳定性修复**：会话状态 JSON 文件并发写入损坏问题，解决 `JSONDecodeError: Extra data` 导致会话完全不可用 |
| [#3656](https://github.com/agentscope-ai/QwenPaw/pull/3656) | rayrayraykk | **已合并** | **架构升级**：Tool Guard 审批系统重构，以 `asyncio.Future` 替代轮询机制，引入 REST API，降低延迟并提升可维护性 |
| [#3631](https://github.com/agentscope-ai/QwenPaw/pull/3631) | zhijianma | **已关闭** | Console 插件系统自动模块注册（未说明关闭原因，可能待迭代） |
| [#3649](https://github.com/agentscope-ai/QwenPaw/pull/3649) | hongxicheng | **已关闭** | 单渠道健康检查与热重启 API（功能可能并入其他 PR） |
| [#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655) | jinglinpeng | **已合并** | 备份与恢复功能文档（中英文） |
| [#3653](https://github.com/agentscope-ai/QwenPaw/pull/3653) | cuiyuebing | **已合并** | 路线图文档更新 |

**整体推进评估**：今日合并的 PR 覆盖**稳定性（P0 修复）、架构现代化（审批系统异步化）、文档完善**三个维度，项目健康度稳步提升。特别 [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) 解决了长期存在的会话损坏问题，直接影响用户体验。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---|:---|:---|
| 1 | [#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **59** | 🟢 OPEN | **社区协作枢纽**：官方维护的任务认领看板，P0-P2 优先级分级。高评论量反映项目依赖外部贡献者推进功能，需关注任务分配效率 |
| 2 | [#3356 WORKING_DIR 指向旧目录 .copaw](https://github.com/agentscope-ai/QwenPaw/issues/3356) | **24** | 🔴 CLOSED | **品牌迁移阵痛**：CoPaw → QwenPaw 更名后配置残留问题，用户数据迁移体验差，虽已关闭但同类问题 [#3598](https://github.com/agentscope-ai/QwenPaw/issues/3598) 仍在出现 |
| 3 | [#2301 更新建议/approve按钮化/模型自动切换](https://github.com/agentscope-ai/QwenPaw/issues/2301) | **10** | 🟢 OPEN | **体验优化合集**：一键更新、审批 UI 改进、模型故障自动切换、自我进化机制、跨端同步 — 反映用户对**低维护成本、高自动化**的强烈需求 |
| 4 | [#2289 MEMORY.md 膨胀导致效率下降](https://github.com/agentscope-ai/QwenPaw/issues/2289) | **9** | 🔴 CLOSED | **记忆系统瓶颈**：文本记忆文件的性能天花板，与正在进行的 PR [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)（记忆重构）直接相关 |
| 5 | [#2047 上下文压缩后恢复机制](https://github.com/agentscope-ai/QwenPaw/issues/2047) | **9** | 🔴 CLOSED | **任务连续性保障**：压缩后用户无法感知保留了哪些内容，影响长任务执行 |

**背后诉求洞察**：社区核心矛盾集中在**"易用性 vs 能力深度"**——用户希望降低运维负担（自动更新、自动切换模型），同时追求更长的有效上下文和更智能的记忆管理。这与项目向"个人 AI 助手"定位演进的方向一致。

---

## 5. Bug 与稳定性

### 今日新增/活跃的 Bug 报告（按严重程度排列）

| 严重程度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 服务中断** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) MCP TaskGroup 异常致 Agent 假死 | 钉钉/微信渠道无响应，后台未崩溃，Console 正常 | 生产环境多用户场景 | ❌ 无 Fix PR |
| 🔴 **P0 - 服务中断** | [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) MCP 启用时 Console 卡住/输入无响应 | `Cleanup loop stopped` 后队列管理异常 | MCP 用户 | ❌ 无 Fix PR |
| 🟡 **P1 - 功能损坏** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) Anthropic API 400 BadRequestError | `None` 值、空消息、system 消息位置非法导致请求失败 | Claude/Kimi 等 Anthropic 兼容服务商用户 | ❌ 无 Fix PR |
| 🟡 **P1 - 功能损坏** | [#3613](https://github.com/agentscope-ai/QwenPaw/issues/3613) `send_file_to_user` 后接口报错 | 工具返回结构含 `file` 字段触发火山方舟 Coding 模型崩溃 | 特定 Provider（火山方舟）用户 | ❌ 无 Fix PR |
| 🟡 **P1 - 功能损坏** | [#3657](https://github.com/agentscope-ai/QwenPaw/issues/3657) QwenPaw-Flash-4B-Q8_0 本地模型出错 | 桌面版下载后输入无反应，偶发报错 | 本地模型用户 | ❌ 无 Fix PR |
| 🟡 **P1 - 功能损坏** | [#3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) Console 会话页面卡死但刷新有内容 | 前端渲染/状态同步问题 | Web Console 用户 | ❌ 无 Fix PR |
| 🟢 **P2 - 体验问题** | [#3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) 任务经常中途中断 | 信息不足，需补充日志 | 未明确 | ❌ 无 Fix PR |
| 🟢 **P2 - 体验问题** | [#3651](https://github.com/agentscope-ai/QwenPaw/issues/3651) 分页选择器无法切换 | UI 控件交互失效 | 会话管理页面用户 | ❌ 无 Fix PR |

**关键信号**：**MCP 集成成为稳定性重灾区**，2 个 P0 均涉及 MCP Client 内部异常。今日发布的 v1.1.3-beta.2 未包含 MCP 相关修复，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

### 用户提出的高价值功能需求

| 需求 | Issue/PR | 与现有 PR 的关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| **记忆系统重构（长期记忆/向量检索）** | [#2289](https://github.com/agentscope-ai/QwenPaw/issues/2289), [#2047](https://github.com/agentscope-ai/QwenPaw/issues/2047), [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) "梦境日志" | **PR [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)** 正在进行全面重构，对齐 AgentScope 2.0 接口 | ⭐⭐⭐⭐⭐ **高** — 核心架构升级，已投入开发资源 |
| **语义化 Skill 路由** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | 基于 embedding 的 skill 过滤，减少 token 消耗 | ⭐⭐⭐⭐☆ **中高** — PR 已开，需讨论完善 |
| **语音输入升级（Whisper 替代 Web Speech）** | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | 支持更多浏览器（如豆包浏览器），快捷键触发 | ⭐⭐⭐⭐☆ **中高** — 首贡献者 PR，评审中 |
| **单 Agent 模型分配（Settings UI）** | [#3599](https://github.com/agentscope-ai/QwenPaw/pull/3599) | 每个 Agent 独立指定 Provider/Model，非全局默认 | ⭐⭐⭐⭐☆ **中高** — 直接回应 [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) 的模型切换需求 |
| **SIP 语音通话渠道** | [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | pyVoIP/LiveKit 双模式，流式 STT/TTS | ⭐⭐⭐☆☆ **中** — 复杂度高，OpenTask #15 |
| **文件操作回滚** | [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) | 误删文件恢复，关联 [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | ⭐⭐⭐☆☆ **中** — 安全相关，评审中 |
| **浏览器工具增强参数** | [#3556](https://github.com/agentscope-ai/QwenPaw/pull/3556) | `browser_args`, `executable_path` 自定义 | ⭐⭐⭐☆☆ **中** — 灵活性改进 |
| **进度观察钩子 + PlanNotebook** | [#3629](https://github.com/agentscope-ai/QwenPaw/pull/3629) | 实时任务进度追踪 | ⭐⭐⭐☆☆ **中** — 需讨论 |

**路线图信号**：PR [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)（记忆重构）+ PR [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550)（路由语义对齐）+ PR [#3656](https://github.com/agentscope-ai/QwenPaw/pull/3656)（审批系统异步化）形成**"智能体核心能力升级"**的三驾马车，大概率构成 v1.2 的主要卖点。

---

## 7. 用户反馈摘要

### 真实痛点（从 Issues 评论提炼）

| 痛点类别 | 具体表现 | 代表 Issue |
|:---|:---|:---|
| **迁移成本焦虑** | CoPaw→QwenPaw 更名后，旧目录残留、配置未自动迁移，用户不确定数据完整性 | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [#3598](https://github.com/agentscope-ai/QwenPaw/issues/3598) |
| **"黑盒"调试困难** | 无法查看实际提交给模型的内容，只能抓包；AgentScope Studio 接入不明确 | [#1645](https://github.com/agentscope-ai/QwenPaw/issues/1645) |
| **长任务连续性差** | 上下文压缩失败即会话中断，无恢复机制；压缩过程不可停止 | [#2356](https://github.com/agentscope-ai/QwenPaw/issues/2356), [#3040](https://github.com/agentscope-ai/QwenPaw/issues/3040) |
| **模型故障无兜底** | 单模型出错/限流时任务完全中断，无自动降级 | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) |
| **工具输出被截断** | 文件读取工具输出长度受限，不会自动续读 | [#2500](https://github.com/agentscope-ai/QwenPaw/issues/2500) |
| **跨端体验割裂** | 网页端与 QQ/微信/手机端状态不同步 | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) |

### 满意点
- 项目响应速度快，Issue 关闭率高（今日 58%）
- 开放任务看板 [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 降低贡献门槛
- 记忆压缩等高级功能存在，虽不稳定但方向受认可

---

## 8. 待处理积压

### 需维护者重点关注的事项

| 类型 | 项目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|
| **长期未决 Issue** | [#1881](https://github.com/agentscope-ai/QwenPaw/issues/1881) 提问后无回复但日志显示 AI 已响应 | 2026-03-19 | 2026-04-21 | **33 天未解决**，前端渲染/消息投递可靠性问题，用户完全无法使用 |
| **长期未决 Issue** | [#3040](https://github.com/agentscope-ai/QwenPaw/issues/3040) 上下文压缩过程无法停止 | 2026-04-07 | 2026-04-21 | **15 天**，WebChat 用户体验杀手，刷新无效 |
| **高价值 PR 待评审** | [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) 记忆与上下文重构 | 2026-04-17 | 2026-04-21 | **架构级改动**，评审周期需控制，阻塞后续记忆相关优化 |
| **高价值 PR 待评审** | [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) 路由语义对齐 | 2026-04-17 | 2026-04-21 | 与 #3548 存在依赖关系，需协调合并顺序 |
| **首贡献者 PR 需引导** | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) Whisper 语音输入 | 2026-04-19 | 2026-04-21 | 新贡献者体验影响社区增长，建议优先反馈 |
| **首贡献者 PR 需引导** | [#3660](https://github.com/agentscope-ai/QwenPaw/pull/3660) 渠道工具消息过滤修复 | 2026-04-21 | 2026-04-21 | 今日新建，修复飞书等渠道消息轰炸问题，场景明确 |

---

**日报生成时间**：2026-04-22  
**数据来源**：agentscope-ai/QwenPaw GitHub 仓库公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-22

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-04-22  
> **分析周期**: 过去 24 小时（2026-04-21 至 2026-04-22）

---

## 1. 今日速览

ZeptoClaw 今日维持**低活跃度**运行。社区贡献以依赖自动化更新为主，核心代码层面无显著进展。唯一值得关注的是 **Telegram Gateway 配置加载故障**的新 Bug 报告（[#522](https://github.com/qhkm/zeptoclaw/issues/522)），该问题直接影响多平台消息路由的可用性，需维护者优先介入。3 个待合并 PR 均为 Dependabot 提交的 GitHub Actions 依赖补丁，无功能迭代。整体项目健康度评级：**稳定维护中，但核心功能存在待修复缺陷**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 类型 | 说明 | 链接 |
|:---|:---|:---|:---|
| #507 | 依赖更新 | 关闭 `taiki-e/install-action` 2.68.21 → 2.72.0 的升级（被 #520  supersede） | [PR #507](https://github.com/qhkm/zeptoclaw/pull/507) |

**进展评估**: 今日无功能性代码合并。PR #507 的关闭属于依赖更新的常规 deduplication（#520 覆盖相同依赖的更新），**项目整体功能与架构零推进**。

---

## 4. 社区热点

| 项目 | 热度指标 | 分析 | 链接 |
|:---|:---|:---|:---|
| #522 Telegram Channel 配置 Bug | 🔴 新开 Issue，0 评论，0 👍 | **实际风险最高的议题**。Gateway 模式无法识别 `config.json` 中的 `channels.telegram` 配置，属于**核心多平台集成能力的阻断性缺陷**。作者 Gantzfried 提供了详细的复现描述，但尚未获得维护者响应 | [Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) |
| #521 cargo-deny-action 升级 | 🟡 待合并，Dependabot | CI 安全审计工具链的补丁版本更新，影响范围限于 GitHub Actions 工作流 | [PR #521](https://github.com/qhkm/zeptoclaw/pull/521) |

**社区诉求洞察**: 当前社区声音呈现**"用户侧功能受阻"与"基础设施自动维护"的失衡**——用户报告的实际运行故障未获关注，而机器人提交的依赖更新持续堆积。建议维护者重新分配审阅优先级。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | #522 | Gateway 模式完全忽略 Telegram 频道配置，导致消息路由失效 | ❌ 无 | [Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) |

**技术细节**: 根据报告，故障表现为：
- `config.json` 存在且格式正确
- `channels.telegram` 段配置有效
- Gateway 启动时**未加载该配置段**

**疑似根因方向**: 配置解析器的 schema validation 可能未覆盖 `channels.telegram` 路径，或 Gateway 模式的初始化流程存在条件分支遗漏。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

现有信号分析：
- 依赖更新密集（4 个 PR 中 3 个为 Dependabot）暗示项目**基础架构维护活跃**，但功能开发停滞
- Telegram 配置 Bug 的修复可能隐含**配置系统重构需求**——若根因涉及 schema 设计缺陷，建议借机统一多平台配置加载逻辑

---

## 7. 用户反馈摘要

> **来源**: Issue #522 原始报告

| 维度 | 内容 |
|:---|:---|
| **使用场景** | 生产环境部署 ZeptoClaw Gateway，期望通过单一实例管理多平台（含 Telegram）消息流 |
| **核心痛点** | 配置"静默失效"——系统无错误提示直接忽略 Telegram 配置，增加调试成本 |
| **满意度信号** | 用户仍遵循规范提交详细 Bug 报告（含环境描述、配置片段），表明对项目有持续投入意愿 |
| **隐忧** | **0 评论 0 反应**可能反映：① 该场景用户基数小；② 或社区响应机制存在延迟 |

**关键引述**: *"The gateway starts..."* — 报告截断，但暗示 Gateway 启动流程未因配置缺失而中断，属于**静默失败（silent failure）**模式，对运维极不友好。

---

## 8. 待处理积压

| 项目 | 滞留时间 | 风险 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|
| #522 Telegram 配置 Bug | 1 天（但已跨越工作日边界） | 🔴 功能阻断，影响多平台核心能力 | **维护者 24h 内首次响应**，确认复现并分配 milestone | [Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) |
| #521 cargo-deny-action | 1 天 | 🟡 CI 工具链安全 | 批量合并 Dependabot PR，或配置 auto-merge 策略减少噪音 | [PR #521](https://github.com/qhkm/zeptoclaw/pull/521) |
| #520 taiki-e/install-action | 1 天 | 🟡 CI 工具链安全 | 同上，注意与 #507 的替代关系 | [PR #520](https://github.com/qhkm/zeptoclaw/pull/520) |
| #519 docker/build-push-action | 1 天 | 🟡 容器构建流程 | 同上 | [PR #519](https://github.com/qhkm/zeptoclaw/pull/519) |

---

## 健康度仪表盘

| 指标 | 状态 | 说明 |
|:---|:---|:---|
| Issue 响应速度 | ⚠️ 需关注 | #522 尚无维护者回复 |
| PR 合并吞吐 | 🟢 正常 | 机器人 PR 处理节奏稳定 |
| 功能迭代活跃度 | 🔴 低 | 连续周期无功能 PR |
| 安全/依赖维护 | 🟢 健康 | Dependabot 覆盖完整 |
| 社区参与度 | ⚠️ 偏低 | 仅 1 个人类用户发声 |

---

*日报生成时间: 2026-04-22*  
*数据来源: GitHub API (Issues/PRs/Events)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-22

> **项目**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
> **分析日期**: 2026-04-22  
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**：25 条 Issue 更新（12 新开/活跃，13 关闭）、50 条 PR 更新（32 待合并，18 已合并/关闭），无新版本发布。社区聚焦**架构重构**（Provider 统一、Onboard 重写）、**多通道稳定性**（Telegram/Feishu/WhatsApp）及**安全边界厘清**（skill audit 范围、RBAC 多租户）。关闭率 52% 的 Issue 和 36% 的 PR 显示维护团队消化能力较强，但 32 个待合并 PR 提示 review 队列存在压力。

---

## 2. 版本发布

**无新版本发布。**  
最新 Release 暂无动态，主要功能仍在密集开发中，预计需等待 schema v3 迁移（[#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)）及 onboard 重写（[#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)）完成后才会打包。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#5977](https://github.com/zeroclaw-labs/zeroclaw/pull/5977) | perlowja | **fix**: 将 `allow_scripts` 参数穿透 `ReadSkillTool` 至 skill loader | 解除脚本型 skill 的加载阻塞，修复安全策略执行链断裂 |
| [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904) | perlowja | **fix**: 尊重 `runtime.kind = "native"` 的沙箱自动检测 | 消除 Docker 误选导致的 Python skill 运行失败，明确用户意图优先 |

### 已关闭的关键 Issue（昨日推进）

| Issue | 关闭原因 | 技术债务清理 |
|:---|:---|:---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard 不可用（S1） | 长期存在的构建/分发问题，17 评论深度排查后关闭 |
| [#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741) | 交互式 channel 审批 | 中高风险操作从 auto-deny 升级为交互式批准，安全模型升级 |
| [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) | Groq provider 400 错误 | Provider 兼容性修复完成 |
| [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Feishu `mention_only` 失效（S0 安全风险） | 安全边界修复，防止未提及消息泄露 |
| [#5967](https://github.com/zeroclaw-labs/zeroclaw/issues/5967) | Linux 预构建安装器实际从源码编译 | 分发管道问题确认，引导用户转向正确安装路径 |
| [#5823](https://github.com/zeroclaw-labs/zeroclaw/issues/5823) | `prune_history` 误删受保护 tool 消息 | 历史记录修剪算法的边界条件修复 |
| [#5822](https://github.com/zeroclaw-labs/zeroclaw/issues/5822) | OpenRouter SSE 流 task 泄漏 | HTTP 连接泄漏修复，资源管理强化 |
| [#5824](https://github.com/zeroclaw-labs/zeroclaw/issues/5824) | `cron_run` 无投递 handler 时静默成功 | 错误处理透明化，运维可观测性提升 |

**整体评估**：今日关闭 13 个 Issue 覆盖 **S0 安全漏洞 2 个、S1 阻塞问题 3 个、S2 降级问题 2 个**，稳定性基线显著加固。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard 不可用 | **17** | **开发者体验痛点**：前端构建步骤缺失/文档不清，Tauri 桌面端与 Web UI 双重不可用，用户反复遭遇 `"Build it with: cd web && npm ci && npm run build"` 提示 |
| 2 | [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 统一 Provider 架构与 reqwest 客户端管理 | **5** | **架构债务**：Provider 模块 reqwest 使用不一致、配置碎片化，社区呼吁类似 OpenRouter 的 `extra_body`/`provider` 字段标准化 |
| 3 | [#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741) 交互式 channel 审批 | **4** | **安全-体验平衡**：Telegram 等通道的中高风险操作从自动拒绝改为可交互批准，企业部署刚需 |

### 高反应 Issues/PRs

| 条目 | 👍 | 信号 |
|:---|:---|:---|
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web 通道损坏 | 1 | S1 阻塞，功能标志编译问题，用户急需 |
| [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) Supervised 模式 channel 持续 "Denied by user" | 1 | 权限模型在通道场景下的行为不一致 |
| [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) Matrix 作为投递通道 | 1 | 多通道生态扩展需求 |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) `gateway.web_dist_dir` 文档缺失 | 1 | 配置发现性不足，与 #4866 同源 |
| [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) Docker 镜像未包含 web/dist | 1 | **容器分发缺口**，官方镜像功能不完整 |

**诉求分析**：社区核心焦虑集中在 **"Web dashboard 可用性"**（构建、文档、容器分发三环节断裂）和 **"通道行为一致性"**（交互式审批、mention_only、权限模型）。企业用户需要更可靠的多通道部署，个人开发者被前端构建门槛阻挡。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S0** | [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) Feishu `mention_only` 失效 | ✅ 已关闭 | 安全边界失效，bot 响应未提及消息 | 已修复 |
| **S0** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) `gateway.web_dist_dir` 文档缺失 | 🟡 开放 | 配置缺失导致功能不可用，归类为数据丢失/安全风险 | 待文档 PR |
| **S0** | [#5967](https://github.com/zeroclaw-labs/zeroclaw/issues/5967) Linux 预构建安装器实际编译源码 | ✅ 已关闭 | 分发管道误导，小机器编译失败 | 需重新发布安装器 |
| **S1** | [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web 通道损坏 | 🟡 开放 | `whatsapp-web` feature 标志编译问题，工作流阻塞 | **暂无** |
| **S1** | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) Ollama Provider tools 调用失败 | 🟡 开放 | 需要 tools 时抛出错误，同会话后续消息阻塞 | **暂无** |
| **S1** | [#5961](https://github.com/zeroclaw-labs/zeroclaw/issues/5961) zeroclaw-desktop Windows 11 构建失败 | 🟡 开放 | Tauri 构建管道在 Windows 断裂 | **暂无** |
| **S2** | [#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) Web dashboard 会话不持久 | ✅ 已关闭 | `session_persistence = true` 被忽略 | 已修复 |
| **S2** | [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) Groq provider 400 错误 | ✅ 已关闭 | 模型参数兼容性问题 | 已修复 |
| **S3** | [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) Docker 镜像 web/dist 未复制 | 🟡 开放 | 官方镜像功能不完整 | **暂无** |

**风险评估**：3 个 S0/S1 级别 Bug 仍开放，其中 **WhatsApp-Web 通道** 和 **Ollama tools 调用** 直接影响核心工作流，且无关联 Fix PR，需优先响应。Windows 桌面构建失败可能阻碍开发者入门。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue/PR | 类型 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) / [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) Onboard 重写（schema-driven, DRY, idempotent） | 核心重构 | **极高** | PR 已开，作者 singlerider 为核心维护者，替换 12,432 行技术债务 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) Schema v3 批量迁移 | 破坏性变更 | **极高** | 明确标注 "Merge blocker"，协调所有 breaking config 变更 |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 统一 Provider 架构 | 架构改进 | **高** | 问题清晰，PR 生态已有 #5975（Gemini/OpenRouter 兼容）作为前奏 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) Per-sender RBAC 多租户 | 企业功能 | **中** | 需求完整（隔离 workspace/tool/rate limit/system prompt），但实现复杂度高，无 PR |
| [#5899](https://github.com/zeroclaw-labs/zeroclaw/issues/5899) / [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) Session 管理工具暴露当前 session ID | 工具增强 | **高** | PR #5696 已开，配套 #5900（O(1) session reset）形成完整链路 |
| [#5980](https://github.com/zeroclaw-labs/zeroclaw/issues/5980) Otel Traces 增强工具调用失败详情 | 可观测性 | **中** | 企业运维需求，与现有 tracing 基础设施衔接顺畅 |
| [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) / [#5975](https://github.com/zeroclaw-labs/zeroclaw/pull/5975) OpenRouter 原生 provider routing | Provider 生态 | **高** | Issue 已关闭，PR #5975 继续推进 Gemini 兼容 + schema 澄清 |

**路线图信号**：项目正处于 **"架构还债 → 企业就绪"** 的转折点。Onboard 重写和 Schema v3 是基础设施升级，RBAC 多租户和增强可观测性则瞄准企业部署。Provider 统一将降低后续 LLM 接入成本。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪 |
|:---|:---|:---|
| **"我只是想跑起来，却被前端构建卡住"** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866), [#5967](https://github.com/zeroclaw-labs/zeroclaw/issues/5967), [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) | 😤 沮丧 |
| **Docker 镜像应该开箱即用，结果 web dashboard 没有** | [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) | 😤 预期违背 |
| **同样的命令，终端能跑，Telegram 就说 Denied by user** | [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) | 🤔 困惑 |
| **配置项存在但文档没说怎么用** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | 🙄 文档缺口 |
| **Windows 上连构建都过不了** | [#5961](https://github.com/zeroclaw-labs/zeroclaw/issues/5961) | 😤 平台排斥 |

### 满意点

- **交互式审批落地**（[#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741)）：企业用户认可安全模型升级
- **Matrix 通道支持**（[#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361)）：开源社区生态扩展获赞
- **Skill 脚本权限修复**（[#5977](https://github.com/zeroclaw-labs/zeroclaw/pull/5977)）：安全策略执行链终于贯通

### 关键洞察

> **"ZeroClaw 的功能深度足够，但'最后一公里'的交付体验（构建、文档、容器、平台兼容）正在消耗社区信任。"**

---

## 8. 待处理积压

### 需维护者优先关注的长期/高影响项

| Issue/PR | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp-Web 通道损坏 | **26 天** | S1 阻塞，👍1 | 分配 Provider 负责人，确认 feature flag 编译链 |
| [#5372](https://github.com/zeroclaw-labs/zeroclaw/pull/5372) Gateway memory API 截断超大 payload | **16 天** | `needs-author-action` | 催促作者 forsakenyang 响应 review，或维护者接管 |
| [#5691](https://github.com/zeroclaw-labs/zeroclaw/pull/5691) Telegram bot 命令自动更新 | **9 天** | 中等风险，用户体验 | 评估合并，ilteoood 多个 PR 待 review 可批量处理 |
| [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) Session abort + 增量流持久化 | **9 天** | `risk: high`，需维护者 review | 核心运行时能力，建议优先排期 review |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) RFC: 替换 TOML i18n 为 Mozilla Fluent | **6 天** | 架构决策 | ADR 流程，需核心维护者决策是否采纳 |
| [#5961](https://github.com/zeroclaw-labs/zeroclaw/issues/5961) Windows 桌面构建失败 | **1 天** | S1，开发者入门门槛 | Tauri 团队介入，或提供 Windows 预构建 |

---

## 附录：数据速查

| 指标 | 数值 | 趋势判断 |
|:---|:---|:---|
| Issue 更新 | 25 | 活跃 |
| Issue 关闭率 | 52% (13/25) | 健康 |
| PR 更新 | 50 | 高吞吐 |
| PR 合并/关闭率 | 36% (18/50) | 队列积压，review 容量吃紧 |
| 新版本 | 0 | 等待基础设施升级完成 |
| S0/S1 Bug 开放 | 4 | ⚠️ 需关注 |

---

*日报基于 GitHub 公开数据生成，不代表项目官方立场。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*