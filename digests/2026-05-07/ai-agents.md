# OpenClaw 生态日报 2026-05-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-07 00:19 UTC

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

# OpenClaw 项目动态日报 | 2026-05-07

## 1. 今日速览

OpenClaw 今日保持极高活跃度，24小时内 **500 条 Issues 更新**（新开/活跃 291，关闭 209）、**500 条 PR 更新**（待合并 358，已合并/关闭 142），社区讨论密度显著。项目处于密集迭代期：24小时内连发 **v2026.5.5 和 v2026.5.6 两个补丁版本**，紧急修复 `doctor --fix` 误改写 OAuth 路由的严重回归问题。核心开发聚焦于 **Gateway 稳定性、多平台渠道适配（Telegram/Feishu/Discord/微信）、会话存储可靠性及模型路由正确性**。PR 队列积压明显（358 待合并），需关注 review 带宽。

---

## 2. 版本发布

### v2026.5.6 — 紧急热修复
**发布日期**: 2026-05-06 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.6)

| 属性 | 内容 |
|:---|:---|
| **类型** | 紧急回滚修复（v2026.5.5 的破坏性变更） |
| **核心修复** | 回退 v2026.5.5 中 `doctor --fix` 对 `openai-codex/*` OAuth 路由的错误重写 |
| **影响范围** | 使用 ChatGPT/Codex OAuth 登录的 GPT-5.5 用户 |

**详细说明**：
- **问题根因**: v2026.5.5 的 `doctor --fix` 自动修复逻辑将有效的 `openai-codex/*` 模型引用错误迁移为 `openai/*`，导致 OAuth-only 配置的 GPT-5.5 设置失效，或意外将用户迁移至 API-key 路由
- **破坏性**: 若已升级 v2026.5.5 且被自动修改配置，需手动检查 `openclaw.json` 中的 `agents.defaults.modelOverrides` 和 `model` 字段
- **迁移建议**: 运行 `openclaw doctor --fix` 于 v2026.5.6 将正确保留 `openai-codex/*` 前缀；若此前已被破坏，需从备份恢复或重新配置 OAuth 模型引用

### v2026.5.5 — 渠道修复与验证增强
**发布日期**: 2026-05-05 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.5)

| 修复项 | 关联 Issue | 贡献者 |
|:---|:---|:---|
| Feishu: 修复话题会话首条/后续消息线程 ID 不一致导致会话分裂 | #78262 | @joeyzenghuan |
| LINE: 拒绝无通配符 `allowFrom` 的 `dmPolicy: "open"` 配置，防止 webhook DM 验证绕过 | — | — |

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 状态 | 功能领域 | 进展说明 |
|:---|:---|:---|:---|
| [#78299](https://github.com/openclaw/openclaw/pull/78299) | **已关闭** | MS Teams 渠道 | 修复 proactive send 路径忽略线程上下文的问题，强制 `replyStyle: "top-level"` 导致所有消息变为顶层帖子 |
| [#78659](https://github.com/openclaw/openclaw/pull/78659) | **已关闭** | CLI | `openclaw completion --install` 增加 shell profile source 行的文件存在性守卫，避免卸载后登录 shell 报错 |
| [#78633](https://github.com/openclaw/openclaw/pull/78633) | **待合并** | Agent 核心 | **会话锁失败快速失败**: 模型回退链遇到会话写锁超时不再尝试后续候选模型，解决 #66646 中 10s×N 的级联浪费 |
| [#78644](https://github.com/openclaw/openclaw/pull/78644) | **待合并** | Cron 调度 | 修复孤立 cron 任务的隐式 announce 目标预检，避免无历史路由时浪费模型 token |
| [#78668](https://github.com/openclaw/openclaw/pull/78668) | **待合并** | Discord 渠道 | 新增 event-edit 和 event-delete 操作，补全 scheduled event 生命周期管理 |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | **待合并** | 子 Agent | `sessions_spawn` 支持 `toolsAllow` 参数透传至子 agent，增强权限控制 |
| [#78427](https://github.com/openclaw/openclaw/pull/78427) | **待合并** | LM Studio 集成 | 修复 OpenAI Harmony 纯文本 tool call 解析失败导致 agent 循环静默终止（#78326） |

**整体推进评估**: 今日合并量相对保守（142/500），但待合并 PR 中多个核心修复已进入终态。项目正从"功能扩张"转向"稳定性加固"，重点解决会话存储、渠道线程一致性、模型路由边界 case。

---

## 4. 社区热点

### 高讨论 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 状态 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 104 | 74 | **跨平台桌面端缺失**: macOS/iOS/Android 已有应用，Linux/Windows 用户长期呼吁功能对等 | 🔥 长期开放 |
| 2 | [#9443 预构建 Android APK](https://github.com/openclaw/openclaw/issues/9443) | 24 | 1 | **降低 Android 使用门槛**: 现有源码需自行编译，普通用户无法直接安装 | 开放 |
| 3 | [#73655 Gateway 泄漏三联症](https://github.com/openclaw/openclaw/issues/73655) | 16 | 1 | **生产稳定性**: 插件重启时的端口占用重试循环、信号处理器累积、同步 I/O 阻塞 WS 握手 | 开放 |
| 4 | [#73323 Gateway 运行时退化](https://github.com/openclaw/openclaw/issues/73323) | 16 | 1 | **Windows 平台性能**: 定价获取 60s 超时、Telegram 轮询停滞、RPC 慢查询，跨版本慢性回归 | 开放 |
| 5 | [#78407 doctor --fix 误改写 OAuth 路由](https://github.com/openclaw/openclaw/issues/78407) | 15 | 3 | **配置安全**: 自动修复工具破坏生产配置，触发 v2026.5.6 紧急发布 | ✅ 已修复 |

**诉求分析**:
- **平台公平性** (#75, #9443): 社区对非 Apple 生态的支持不满持续累积，#75 作为 2026-01-01 创建的 issue 已逾 4 个月，74 👍 显示广泛需求，但尚无 assignee
- **Gateway 可靠性** (#73655, #73323): 两个高度技术性的 issue 反映了 Node.js 事件循环、信号处理、同步 I/O 等底层架构债务，影响长时运行实例
- **自动化工具信任危机** (#78407): `doctor --fix` 的破坏性变更引发对"自动修复"安全边界的重新审视

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 修复状态 | 关联 PR/Release |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 已修复** | [#78407](https://github.com/openclaw/openclaw/issues/78407) | `doctor --fix` 将 `openai-codex/*` 重写为 `openai/*`，破坏 OAuth 用户配置 | ✅ v2026.5.6 | [v2026.5.6](https://github.com/openclaw/openclaw/releases/tag/v2026.5.6) |
| 🔴 **P0 - 已修复** | [#78262](https://github.com/openclaw/openclaw/issues/78262) | Feishu 话题会话首条消息用 `messageId`、后续用 `thread_id` 导致会话分裂 | ✅ v2026.5.5 | [v2026.5.5](https://github.com/openclaw/openclaw/releases/tag/v2026.5.5) |
| 🟡 **P1 - 待修复** | [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway 重启泄漏三联症：EADDRINUSE 重试循环、信号处理器累积、同步 I/O 饿死 WS | ⏳ 开放 | — |
| 🟡 **P1 - 待修复** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | Windows 11 + Node 24 上 Gateway 多子系统网络/定时器退化 | ⏳ 开放 | — |
| 🟡 **P1 - 待修复** | [#78232](https://github.com/openclaw/openclaw/issues/78232) | `openclaw-weixin` 插件 2.4.1 与 2026.5.4 的 `channelRuntime` API 变更不兼容 | ⏳ 开放 | — |
| 🟡 **P1 - 有 PR** | [#66646](https://github.com/openclaw/openclaw/issues/66646) | 会话文件锁错误级联穿透模型回退链，10s×N 浪费 | 🔄 [#78633](https://github.com/openclaw/openclaw/pull/78633) | — |
| 🟡 **P1 - 有 PR** | [#78402](https://github.com/openclaw/openclaw/issues/78402) | 卡住 tool call 导致事件循环饥饿，WS 连接反复关闭 (1000/1005/1006) | ✅ 已关闭 | 需确认修复版本 |
| 🟢 **P2 - 待修复** | [#67793](https://github.com/openclaw/openclaw/issues/67793) | `queue.mode: "collect"` 去抖动未生效，消息仍单独处理 | ⏳ 开放 | — |
| 🟢 **P2 - 待修复** | [#78508](https://github.com/openclaw/openclaw/issues/78508) | 2026.5.5 trusted-proxy Control UI WS 会话 `operator.read` 范围缺失 | ⏳ 开放 | — |
| 🟢 **P2 - 已修复** | [#77837](https://github.com/openclaw/openclaw/issues/77837) | 2026.5.4 微信 `getUpdates` fetch failed | ✅ 已关闭 | — |

**稳定性健康度**: ⚠️ **中等风险**。v2026.5.5 的紧急回滚暴露了自动化迁移工具的质量控制缺口；Gateway 长时运行稳定性（#73655, #73323）仍是未解决的架构级问题，影响生产部署信心。

---

## 6. 功能请求与路线图信号

### 高潜力功能（已有 PR 或强烈信号）

| 功能 | Issue/PR | 状态 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **MCP 工具调用渠道审批** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 开放，设计完整 | ⭐⭐⭐⭐⭐ |
| **子 Agent toolsAllow 权限透传** | [#78441](https://github.com/openclaw/openclaw/pull/78441) | 待合并 | ⭐⭐⭐⭐⭐ |
| **Discord 事件编辑/删除** | [#78668](https://github.com/openclaw/openclaw/pull/78668) | 待合并 | ⭐⭐⭐⭐⭐ |
| **OCI Generative AI 提供商插件** | [#78667](https://github.com/openclaw/openclaw/pull/78667) | 待合并（XL 体量） | ⭐⭐⭐⭐☆ |
| **iMessage 私有 API 支持** | [#78317](https://github.com/openclaw/openclaw/pull/78317) | 待合并（XL 体量，AI 辅助） | ⭐⭐⭐⭐☆ |
| **TOTP 双因素 exec 审批** | [#67440](https://github.com/openclaw/openclaw/issues/67440) | 开放，需求明确 | ⭐⭐⭐☆☆ |
| **exec 审批 denylist** | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 开放，7 👍 | ⭐⭐⭐☆☆ |
| **Telegram 处理中指示器 (⌛️)** | [#6946](https://github.com/openclaw/openclaw/issues/6946) | 开放 | ⭐⭐⭐☆☆ |
| **上下文长度超限模型回退** | [#9986](https://github.com/openclaw/openclaw/issues/9986) | 开放 | ⭐⭐⭐☆☆ |

**路线图判断**:
- **安全与审批** 是明确主题：MCP 审批信封、TOTP、denylist 形成"分层授权"叙事，可能凝聚为 v2026.6 的安全专题
- **渠道深度集成** 持续投入：Discord 事件管理、iMessage 私有 API、Telegram 体验优化显示对"成为原生平台公民"的坚持
- **性能工程** 开始显现：工具 schema 缓存 (#78664)、targetProvider 短路 (#73261) 表明大规模部署场景的压力

---

## 7. 用户反馈摘要

### 痛点提炼

| 主题 | 典型引述/场景 | 来源 Issue |
|:---|:---|:---|
| **配置迁移恐惧** | "v2026.5.5 自动运行 doctor --fix 后，所有 Codex OAuth 配置被破坏，无法回退" | [#78407](https://github.com/openclaw/openclaw/issues/78407) |
| **Windows 二等公民** | "Gateway 在 Windows 11 上慢性退化，定价获取、Telegram 轮询、RPC 全部变慢，跨三个版本未改善" | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| **会话状态黑盒** | "Agent 无法感知上下文窗口使用率，意外压缩导致状态丢失，只能被动承受" | [#2597](https://github.com/openclaw/openclaw/issues/2597) |
| **插件生态碎片化** | "微信插件 2.4.1 与新版本 API 不兼容，升级即断裂，无平滑迁移路径" | [#78232](https://github.com/openclaw/openclaw/issues/78232) |
| **子 Agent 噪音** | "sessions_spawn 的 announce 步骤频繁输出无关总结，唯一抑制方式是模型恰好输出 ANNOUNCE_SKIP" | [#8299](https://github.com/openclaw/openclaw/issues/8299) |
| **移动端编译门槛** | "Android 源码在仓库中，但无预构建 APK，普通用户无法使用" | [#9443](https://github.com/openclaw/openclaw/issues/9443) |

### 满意度信号
- Feishu 话题修复获用户致谢 (#78262 引用 "Thanks @joeyzenghuan")
- Telegram 流式草稿更新 (#38066) 关闭，显示对原生体验的追求获认可

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---:|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-05-06 | **126天** | 74 👍，跨平台公平性核心诉求，无 assignee，无 milestone |
| [#2597 上下文状态丢失](https://github.com/openclaw/openclaw/issues/2597) | 2026-01-27 | 2026-05-06 | **100天** | 8 评论，上下文管理基础体验，关联 #9986 回退请求 |
| [#6731 Safe/Unsafe ClawdBot](https://github.com/openclaw/openclaw/issues/6731) | 2026-02-02 | 2026-05-06 | **94天** | 12 评论，Rust 重写提案，安全模式架构讨论，需技术决策 |
| [#8719 安全配置文件 v1.1](https://github.com/openclaw/openclaw/issues/8719) | 2026-02-04 | 2026-05-06 | **92天** | 6 评论，3 👍，生产安全模型设计，与 #78308 MCP 审批可能整合 |
| [#1210 Discord base64 图片膨胀](https://github.com/openclaw/openclaw/issues/1210) | 2026-01-19 | 2026-05-06 | **108天** | 6 评论，会话转录存储效率，影响长会话稳定性 |

### PR Review 瓶颈

| PR | 体量 | 等待天数 | 阻塞风险 |
|:---|:---|:---:|:---|
| [#78558 修剪生成/供应商代码面](https://github.com/openclaw/openclaw/pull/78558) | XL | 1 | 实验性重构，影响面广，需架构 review |
| [#78317 iMessage 私有 API](https://github.com/openclaw/openclaw/pull/78317) | XL | 1 | AI 辅助代码，需安全审计 |
| [#73261 targetProvider 短路](https://github.com/openclaw/openclaw/pull/73261) | XL | 9 | 性能关键路径，长期未决 |
| [#71817 Telegram/Feishu reasoning 修复](https://github.com/openclaw/openclaw/pull/71817) | L | 12 | 渠道核心功能，跨平台一致性 |

---

**日报生成时间**: 2026-05-07  
**数据来源**: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  
**下次建议**: 关注 v2026.5.6 的采用率及 #

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-07

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"功能可用"向"生产可靠"跃迁的关键拐点**。OpenClaw 以 500 Issues/500 PR 的日活规模维持绝对领导地位，但 v2026.5.5 的 `doctor --fix` 配置破坏事件暴露了自动化工具的质量控制缺口；IronClaw 启动"Reborn"架构重构，从单体向分层服务迁移，代表技术债务较重的项目开始底层革新；Moltis、CoPaw、LobsterAI 等第二梯队聚焦企业就绪性（安全、审计、多租户），而 NanoBot、ZeroClaw 以"轻量/边缘"定位探索差异化空间。整体呈现**头部巩固基础设施、腰部争夺企业场景、长尾探索垂直细分**的三层格局。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PR (24h) | 待合并 PR | Release | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 (新开/活跃 291, 关闭 209) | 500 (待合并 358, 已合并 142) | 358 | v2026.5.6 (紧急热修) | ⚠️ **高活跃高风险** — 迭代极快但 review 带宽严重不足，连续紧急修复暴露 QA 缺口 |
| **IronClaw** | 39 (30/9) | 46 (21/25) | 21 | 无 | 🟡 **架构重构期** — Reborn 迁移工程量大，设计密集但外部参与有限 |
| **ZeroClaw** | 50 (45/5) | 50 (38/12) | 38 | 无 | 🔴 **高活跃高缺陷** — S0 数据丢失 + P0 多代理隔离失效，稳定性危机 |
| **CoPaw** | 41 (24/17) | 26 (12/14) | 12 | v1.1.5.post2 | 🟢 **质量巩固期** — 修复响应快，CLI 技能管理里程碑达成，待合并队列可控 |
| **LobsterAI** | ~1 (数据缺失) | 29 (0/29) | 0 | 无 | 🟢 **高效交付** — 零待合并积压，但 Critical 安全漏洞 24h 无响应是隐患 |
| **Moltis** | 4 (3/1) | 9 (0/9) | 0 | 无 | 🟢 **精益迭代** — 100% 闭环率，沙箱并发安全等核心问题快速修复 |
| **PicoClaw** | 21 (14/7) | 62 (42/20) | 42 | v0.2.8-nightly | ⚠️ **高活跃高积压** — 夜间构建频繁，但 42 待合并 + 2 个无修复方案的生产级问题 |
| **Hermes Agent** | 50 (42/8) | 50 (43/7) | 43 | 无 | 🟡 **存量清理期** — 关闭 Issue 多但合并量低，43 待合并预示集中合并窗口 |
| **NanoBot** | 16 (7/9) | 37 (20/17) | 20 | 无 | 🟡 **回归风险** — Runtime Context 4 PR 迭代同一问题，测试覆盖存间隙 |
| **NanoClaw** | 4 (4/0) | 25 (22/3) | 22 | 无 | 🟢 **迁移扫尾** — v2 迁移摩擦持续消除，Slack UX 6 连 PR 显示体验导向 |
| **NullClaw** | 0 | 1 (1/0) | 1 | 无 | 🔴 **蓄力停滞** — 单 PR 开发 30 天，零社区互动，bus factor 风险极高 |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚫ **休眠** |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚫ **休眠** |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 具体表现 |
|:---|:---|
| **生态规模** | 日活 500 Issues + 500 PR 为次高（ZeroClaw）的 10 倍，渠道覆盖最全（Telegram/Feishu/Discord/微信/Teams/LINE 等） |
| **企业集成深度** | 飞书话题线程修复、MS Teams proactive send、LINE DM 策略等显示对 B 端工作流的精细适配 |
| **自动化工具链** | `doctor --fix` 虽出事故，但"配置即代码 + 自动修复"的理念领先，v2026.5.6 的回滚机制响应迅速 |

### 技术路线差异
| 对比项 | OpenClaw | 典型竞品 |
|:---|:---|:---|
| **架构哲学** | 单体 + 插件扩展，Gateway-Runtime 分离 | IronClaw 走向微服务化 Reborn；Moltis 强调沙箱隔离 |
| **配置模型** | JSON 中心化，自动迁移工具驱动 | ZeroClaw 推进 typed-family 配置重构；NanoClaw 从 v1 技能向 v2 架构迁移 |
| **安全边界** | OAuth 路由级模型隔离 + 审批流 | Moltis 的 Docker/Podman 沙箱 + Vault 自动解封更重运行时安全；CoPaw 有 Windows 路径遍历漏洞修复记录 |

### 社区规模对比
- **绝对量级**：OpenClaw > Hermes Agent ≈ ZeroClaw > 其他（10 倍级差距）
- **参与深度**：OpenClaw 的 #75 Linux/Windows 桌面端 126 天无 assignee、74 👍 未响应，显示**广度大但核心维护者带宽瓶颈**；Moltis 的 penso 单日 5 PR 但 100% 闭环，显示**小团队高效率**
- **外部贡献者**：CoPaw 的 4 个 `first-time-contributor` PR、NanoClaw 的 alipgoldberg Slack UX 系列，显示**体验优化类贡献活跃**

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **推理模型兼容 (reasoning_content)** | NanoBot, Moltis, CoPaw, PicoClaw | DeepSeek V4 / Claude / GPT-5.5 等模型的思维链内容回传要求，多轮对话后丢失导致 API 错误或会话中断 | 🔴 高 |
| **多代理/子 Agent 隔离** | OpenClaw, ZeroClaw, PicoClaw | `sessions_spawn` 权限透传、角色混淆、通道实例共享状态损坏，从"能并发"到"正确隔离" | 🔴 高 |
| **配置系统重构** | ZeroClaw (v0.8.0), NanoClaw (v2), IronClaw (Reborn) | 从隐式魔法行为到显式 typed 配置，解决环境变量映射、认证信息合并、迁移摩擦 | 🟡 中高 |
| **MCP 生态集成** | OpenClaw, PicoClaw, NanoClaw, CoPaw | Streamable HTTP 传输、审批信封、工具集标准化，从实验性到生产级 | 🟡 中高 |
| **沙箱/执行安全** | Moltis, LobsterAI, CoPaw | Docker 并发启动竞态、路径穿越漏洞、exec 审批 denylist，Agent 自主执行的安全边界 | 🟡 中高 |
| **长会话稳定性** | OpenClaw, CoPaw, NanoBot | 上下文压缩失效、消息时间戳失真、会话锁级联超时，影响数小时以上的持续任务 | 🟡 中 |
| **跨平台公平性** | OpenClaw (#75), Hermes Agent (#20782, #20927), LobsterAI (#1891) | Windows/Linux 桌面端缺失、路径分隔符、权限模型差异，非 macOS 用户长期不满 | 🟡 中 |
| **自动化发布/运维** | ZeroClaw (v0.7.5), IronClaw (Docker 工作流恢复), LobsterAI (日志轮转) | 从手动 bump 到 CI/CD 管线，无人值守部署的成熟度标志 | 🟢 中低 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道企业集成 + 模型路由中枢 | 中大型企业 IT、多平台运营者 | Node.js 单体 + Gateway-Runtime 分离，插件化渠道适配 |
| **IronClaw** | 可验证的持久化 Agent 循环 (TurnCoordinator) | 需要审计合规的金融/政务场景 | Rust 分层服务化 (Reborn)，libSQL/PostgreSQL 多后端，强调正确性证明 |
| **Moltis** | 安全沙箱化的个人 AI 服务器 | 隐私敏感的个人用户、自托管爱好者 | Elixir/BEAM，Docker/Podman 沙箱，Vault 密钥管理，去中心化身份协议 |
| **CoPaw** | 低门槛的桌面端 AI 助手 | 个人用户、轻量企业部署 | 类 VS Code 扩展架构，技能市场 + CLI 双轨管理，Electron 桌面应用 |
| **ZeroClaw** | 极致可扩展的通道 + 提供商矩阵 | 技术极客、多模型尝鲜者 | Rust + WASM 插件运行时，"万物皆插件"架构，llama.cpp 独立提供商 |
| **NanoBot** | ~4000 行轻量代码的边缘部署 | 移动/嵌入式开发者、快速原型 | Python 极简核心，Dream 记忆系统，强调可审计的代码体积 |
| **PicoClaw** | 中文语境优化的 IM 集成 | 中国企业微信/钉钉用户 | Go 实现，POPO/微信/钉钉深度适配，Engram MCP 记忆边缘验证 |
| **LobsterAI** | 网易有道生态内的 AI 工作流 | 有道产品用户、中文知识工作者 | 绑定 OpenClaw 插件规范，yd_cowork 引擎退场后的生态独占 |
| **Hermes Agent** | TUI 优先的开发者工具 | CLI 重度用户、程序员 | Ink (React for CLI) TUI，Kanban 工作流集成，CodeAct 研究向 |
| **NanoClaw** | 技能 (skill) 驱动的对话扩展 | 非技术用户通过自然语言扩展能力 | v2 架构定型中，baget.ai 商业产品联动，MCP Tier 1 工具集 |
| **NullClaw** | 无人值守的 cron 自动化调度 | 基础设施运维、定时任务场景 | 单点开发中，cron 子代理 + 运行历史可观测性，社区待激活 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（日活 30+，功能扩张为主）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 渠道适配密集、模型路由边界 case 持续发现 | review 带宽瓶颈，回归缺陷概率上升 |
| **ZeroClaw** | 8 家新提供商 + 4 新通道单日扩张 | S0/P0 缺陷堆积，架构债务可能随规模指数增长 |
| **PicoClaw** | 夜间构建频繁，Provider 层快速补全 | 42 待合并 PR，生产级问题响应滞后 |

### 质量巩固阶段（闭环率高，稳定性优先）
| 项目 | 特征 | 标志事件 |
|:---|:---|:---|
| **CoPaw** | v1.1.5.post2 热修复，技能 CLI 里程碑 | #4053 关闭 38 天诉求，#3955 安全漏洞快速响应 |
| **Moltis** | 100% Bug 闭环，penso 主导精益修复 | #971 沙箱竞态、#961 DeepSeek 兼容当日级修复 |
| **LobsterAI** | 29 PR 零积压集中合并 | 但 #1885 Critical 漏洞 24h 无响应暴露安全 SLA 缺失 |

### 架构重构阶段（工程量大，外部可见度低）
| 项目 | 特征 | 关键阻塞 |
|:---|:---|:---|
| **IronClaw** | Reborn 从设计转入代码，三大 crate 并行 | #3013 TurnCoordinator 为 cutover blocker，下游 6 Issue 等待 |
| **NanoClaw** | v2 迁移扫尾，废弃 `/claw` 技能 | 环境变量键名变更未显式提示 (#2294) 等摩擦持续 |

### 停滞/蓄力阶段
| 项目 | 状态 | 建议 |
|:---|:---|:---|
| **NullClaw** | 单 PR 30 天，零社区互动 | 拆分发布、激活 Discussions、招募 reviewer |
| **TinyClaw, ZeptoClaw** | 24h 零活动 | 需评估项目可持续性 |

---

## 7. 值得关注的趋势信号

### 信号一：推理模型倒逼全链路改造
> **"DeepSeek V4 的 `reasoning_content` 回传要求"** 同时在 NanoBot、Moltis、CoPaw、PicoClaw 出现，且 NanoBot 的 #3584 部分修复后 #3665 仍复发。

**对开发者的价值**：思维链模型不是简单的 "model swap"，需要 prompt 模板、消息格式、多轮状态机的全链路适配。建议在设计阶段预留 `reasoning_content` / `thinking` / `redacted_thinking` 等字段的抽象层，而非硬编码到单模型分支。

---

### 信号二：从"功能安全"到"供应链安全"
> **Moltis #975** OpenSSL 补丁、**LobsterAI #1885** 路径穿越、**NanoClaw #2004** 渠道安装器信任边界、**CoPaw #3955** Windows 文件遍历。

**对开发者的价值**：Agent 框架的漏洞面从传统 Web 应用扩展到"LLM 输出 → 工具执行 → 文件系统/网络"的完整链条。建议建立：
- 工具调用的路径白名单 + `path.basename()` 过滤
- LLM 生成代码的沙箱执行（非简单 exec）
- 依赖库的自动化安全扫描（Dependabot 之外需 SCA）

---

### 信号三："配置即代码"的复杂性危机
> **OpenClaw #78407** `doctor --fix` 误迁移、**ZeroClaw #6416** 配置-提供商不兼容预检诉求、**NanoClaw #2294** 环境变量键名静默断裂、**IronClaw #3132** LLM 输出类型不匹配。

**对开发者的价值**：用户不再满足于"能配通"，要求"配错时快速定位"。建议：
- Schema 感知的参数强制转换（非字符串透传）
- `onboard` / `doctor` 工具的 dry-run 模式
- 配置变更的向后兼容迁移 + 版本化声明

---

### 信号四：多代理架构从"演示"到"生产"
> **ZeroClaw #6487** P0 阻断器（多别名通道实例互相覆盖）、**PicoClaw #2775** 子 Agent 角色混淆、**OpenClaw #78441** `toolsAllow` 透传、**NanoBot #3639** 跨 Agent 信任协议提案。

**对开发者的价值**：多 Agent 不再是"一个主 Agent 调几个工具"的伪命题，而是需要：
- 身份隔离（Ed25519 密钥对、L1/L2 协议）
- 资源隔离（独立 `state_dir`、非共享 `ChannelRuntimeContext`）
- 权限委托链（`toolsAllow` 显式透传而非隐式继承）

---

### 信号五：边缘/轻量部署的"信任基础设施"缺口
> **NanoBot #3639** 关闭的 Agent 身份协议、**Moltis #973** 跨实例互操作协议、**NanoBot** ~4000 行代码的自我定位。

**对开发者的价值**：当 Agent 从云端 SaaS 走向手机/路由器/工控机，"轻量"与"可信"的张力凸显。建议关注：
- 硬件安全模块（HSM）或 TEE 的最小化集成
- 去中心化身份（DID）在资源受限设备的轻量实现
- 代码体积与审计可行性的平衡（NanoBot 的 ~4000 行叙事）

---

**报告生成时间**: 2026-05-07  
**数据覆盖**: 12 个开源项目 GitHub 公开数据  
**建议关注**: ZeroClaw #6487 P0 阻断器进展、OpenClaw v2026.5.6 采用率、IronClaw Reborn cutover 时间点

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-07

> **项目**: HKUDS/nanobot | **日期**: 2026-05-07 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoBot 今日呈现**高强度迭代态势**：24小时内 Issues 更新 16 条（7 新开/活跃、9 关闭）、PR 更新 37 条（20 待合并、17 已合并/关闭），无新版本发布。社区焦点集中在 **Runtime Context 提示词泄漏回归**（T3chC0wb0y 连续提交 4 个相关 PR）、**DeepSeek/Codex 等国产/前沿模型兼容性**、以及 **MCP/通道层稳定性**三大主题。WebUI 与通道层（微信、WhatsApp、Matrix）获得密集修复，项目整体健康度良好，但 nightly 分支的提示词缓存机制存在需持续关注的回归风险。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `v0.1.5.post3`（参考 #3618 用户报告）。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（17 条）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3669](https://github.com/HKUDS/nanobot/pull/3669) [CLOSED] | T3chC0wb0y | Runtime Context  ephemeral 修复（nightly 分支，保留 prompt cache 复用） | #3670, #2132 |
| [#3668](https://github.com/HKUDS/nanobot/pull/3668) [CLOSED] | T3chC0wb0y | 同上，替代方案 | #3670 |
| [#3666](https://github.com/HKUDS/nanobot/pull/3666) [CLOSED] | T3chC0wb0y | CLI/历史记录/保存路径的防御性剥离 Runtime Context | #2132 |
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) [CLOSED] | Jefsky | Dream 记忆恢复时同步回滚 `.dream_cursor` | [#3657](https://github.com/HKUDS/nanobot/issues/3657) |
| [#3661](https://github.com/HKUDS/nanobot/pull/3661) [CLOSED] | Re-bin | WebUI 聊天体验打磨：侧边栏样式、搜索分组、会话标题异步生成 | — |
| [#3659](https://github.com/HKUDS/nanobot/pull/3659) [CLOSED] | chengyongru | 微信通道：发送失败时抛出异常，防止消息静默丢失 | — |
| [#3658](https://github.com/HKUDS/nanobot/pull/3658) [CLOSED] | chengyongru | WebUI LAN 启动安全加固：`0.0.0.0` 绑定需强制 `token_issue_secret` | [#3656](https://github.com/HKUDS/nanobot/pull/3656) |
| [#3656](https://github.com/HKUDS/nanobot/pull/3656) [CLOSED] | chengyongru | WebUI 允许 `0.0.0.0` 绑定时 LAN 访问（后被 #3658 安全加固） | — |
| [#3646](https://github.com/HKUDS/nanobot/pull/3646) [CLOSED] | chengyongru | 语音转录：Whisper 端点瞬态故障重试（502/503 指数退避） | — |
| 其他 8 条 | — | 常规维护与关闭 | — |

**整体推进评估**：今日合并 PR 覆盖 **核心代理循环稳定性**（Runtime Context 隔离）、**记忆系统一致性**（Dream cursor）、**多通道可靠性**（微信异常处理）、**WebUI 产品化**（UX + 安全模型）四个维度，属于**中高强度功能迭代 + 稳定性加固**日。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 🔥 1 | [#3618](https://github.com/HKUDS/nanobot/issues/3618) [CLOSED] 区域模型可用性 403 错误 | **11 评论** | **生产环境 P0 事故**：用户 `bigsinger` 的 NanoBot 因智谱 GLM 区域限制从 4 月 25 日宕机至 5 月 4 日，最终通过备份降级恢复。暴露核心痛点：**模型供应商区域策略变更的容错机制缺失**，用户无自动 fallback 路径，错误信息未引导至配置变更。 |
| 2 | [#3639](https://github.com/HKUDS/nanobot/issues/3639) [CLOSED] Agent 身份 + 跨 Agent 信任入职协议提案 | **3 评论** | **架构级提案**：提出基于 Ed25519 的 Layer 2 身份协议，瞄准 NanoBot ~4000 行轻量代码在移动/边缘设备大规模部署后的信任基础设施。虽关闭，但为项目长期路线图提供信号。 |
| 3 | [#3665](https://github.com/HKUDS/nanobot/issues/3665) [OPEN] DeepSeek v4-flash reasoning_content 回传错误 | **1 评论** | **模型兼容性前沿**：DeepSeek 新模型要求 thinking mode 下必须回传 `reasoning_content`，NanoBot 在多轮后丢失该字段。与已关闭的 [#3584](https://github.com/HKUDS/nanobot/issues/3584) 根因相同但场景不同，**fix 可能未覆盖全链路**。 |
| 4 | [#3638](https://github.com/HKUDS/nanobot/issues/3638) [CLOSED] MCP streamable_http_client 100% CPU 泄漏 | **1 评论** | **边缘计算稳定性**：`AgentLoop.close_mcp()` 无法干净拆除连接，导致孤儿 `anyio.CancelScope` 事件循环空转。标记 `good first issue`，社区贡献者 `LZDQ` 从自身项目 `nanobot-soulboard` 发现。 |

**诉求提炼**：用户核心焦虑集中在 **"模型供应商锁定/变更的韧性"**、**"边缘场景资源泄漏"**、**"新模型特性适配速度"** 三个层面。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---:|:---|:---|
| 🔴 **Critical** | [#3618](https://github.com/HKUDS/nanobot/issues/3618) | ✅ 关闭 | 区域模型 403 导致服务完全不可用（4/25-5/4 持续故障） | 无（用户自行降级） |
| 🔴 **Critical** | [#3638](https://github.com/HKUDS/nanobot/issues/3638) | ✅ 关闭 | MCP HTTP 客户端取消作用域不匹配 → 100% CPU 泄漏 | 待确认合并 PR |
| 🟡 **High** | [#3665](https://github.com/HKUDS/nanobot/issues/3665) | 🔴 开放 | DeepSeek v4-flash 多轮后 reasoning_content 丢失 | 无（[#3584](https://github.com/HKUDS/nanobot/issues/3584) 部分修复） |
| 🟡 **High** | [#3670](https://github.com/HKUDS/nanobot/issues/3670) | 🔴 开放 | nightly 分支 Runtime Context 提示词脚手架泄漏到持久化历史 | [#3671](https://github.com/HKUDS/nanobot/pull/3671) 待合并 |
| 🟡 **High** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | 🔴 开放 | GPT-5.5 (Codex) 重复 item ID 错误导致会话中断 | 无 |
| 🟡 **High** | [#3649](https://github.com/HKUDS/nanobot/pull/3649) | 🔴 开放 | `server.py:210` 存在高危 `exec()` 代码注入漏洞（V-003） | [#3649](https://github.com/HKUDS/nanobot/pull/3649) 待审查 |
| 🟢 **Medium** | [#3637](https://github.com/HKUDS/nanobot/issues/3637) | 🔴 开放 | Groq 语音转录配置不透明，apiBase 拼接逻辑易错 | [#3663](https://github.com/HKUDS/nanobot/pull/3663) 待合并 |
| 🟢 **Medium** | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | ✅ 关闭 | Safety guard 静默丢弃 turn，用户无感知 | 已修复 |
| 🟢 **Medium** | [#3625](https://github.com/HKUDS/nanobot/issues/3625) | ✅ 关闭 | WhatsApp 通道逐 token 发送消息（OpenAI Codex 进度增量） | 已修复 |
| 🟢 **Medium** | [#3597](https://github.com/HKUDS/nanobot/issues/3597) | ✅ 关闭 | 工作区根目录访问混淆 | 已修复 |

**回归警报**：`Runtime Context` 相关修复（#3666/#3668/#3669/#3671）显示 **nightly 分支存在同一问题的多次迭代**，提示测试覆盖或代码审查流程存在间隙。T3chC0wb0y 在 24 小时内提交 4 个相关 PR（3 关 1 开），表明修复方案仍在收敛。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 分析 |
|:---|:---|:---:|:---|
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) Dream 完全禁用开关 | 配置增强 | ⭐⭐⭐⭐⭐ | **高概率纳入**。已有 [#3591](https://github.com/HKUDS/nanobot/pull/3591) 待合并 PR 实现 "update scope controls"，包含禁用 Dream 选项，需求与实现已对齐。 |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) 自定义 Bot 名称与图标 | 品牌化 | ⭐⭐⭐⭐☆ | **中高概率**。配置驱动（`botName`/`botIcon`），实现成本低，用户个性化诉求明确。 |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) 本地 tokenizer 估算 prompt tokens | 离线能力 | ⭐⭐⭐⭐⭐ | **高概率纳入**。已有 [#3662](https://github.com/HKUDS/nanobot/pull/3662) 待合并 PR，解决 `tiktoken` 网络依赖导致的离线场景阻塞。 |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) CLI 流式显示模型 reasoning 内容 | 可观测性 | ⭐⭐⭐⭐☆ | **中高概率**。配置驱动（`show_reasoning`），契合 DeepSeek/Claude 等推理模型普及趋势。 |
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) Agent 身份 + 跨 Agent 信任协议 | 架构基础设施 | ⭐⭐☆☆☆ | **长期路线图信号**。关闭状态，但 ~4000 行代码的轻量定位与大规模部署的信任需求存在张力，可能在未来版本重新评估。 |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) `/stop` 取消时保留用户消息与工具调用 | 会话完整性 | ⭐⭐⭐⭐☆ | **中高风险修复**。开放 PR 已存在 42 天，涉及核心代理循环状态机，需维护者仔细审查。 |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) `/clear` 命令重置会话历史 | 交互优化 | ⭐⭐⭐☆☆ | 标记 `[invalid]`，可能与现有设计冲突，纳入不确定性较高。 |

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 场景 | 情绪 | 核心诉求 |
|:---|:---|:---|:---|
| #3618 `bigsinger` | 生产环境 10 天宕机，定时任务与消息全部失败 | 😤 **挫败** | **供应商容错**：模型区域变更时需自动降级或清晰告警，而非静默失败 |
| #3637 `sandr1x` | Groq 语音配置反复试错 | 😐 **困惑** | **配置透明性**：转录端点拼接逻辑应文档化或自动规范化 |
| #3597 `fablau` | 工作区文件保存路径不符合预期 | 😕 **不信任** | **路径可预测性**：代理对 "workspace root" 的理解应与用户一致 |
| #3605 `rytyr` | Safety guard 阻断后无任何反馈 | 😤 **被忽视** | **错误可达性**：所有阻断操作必须触达用户，无论通道类型 |
| #3665 `tomjuggler` | DeepSeek 新模型多轮后崩溃 | 😐 **谨慎** | **前沿模型快速适配**：reasoning 模式的全链路支持 |

### 满意点

- **备份降级机制**：#3618 用户明确称赞 "还好我有备份的习惯"，暗示项目配置可移植性良好
- **社区响应速度**：多个 Issue 24 小时内关闭（#3638, #3657, #3605 等）
- **轻量定位认可**：#3639 提案中用户主动强调 "~4,000 lines, perfect for mobile and edge"

---

## 8. 待处理积压

| 类型 | 条目 | 开放时长 | 风险说明 |
|:---|:---|:---:|:---|
| **PR** | [#2526](https://github.com/HKUDS/nanobot/pull/2526) `/stop` 会话状态丢失 | **42 天** | 核心代理循环缺陷，影响所有通道的用户体验，长期未合并可能因测试覆盖不足 |
| **PR** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) 心跳推理与通知解耦 | **66 天** | 架构级改动，默认行为变更（`sendReasoning: false`），需维护者决策是否 breaking |
| **Issue** | [#2132](https://github.com/HKUDS/nanobot/issues/2132) Runtime Context 合并到用户消息 | **50 天** | 今日 T3chC0wb0y 密集修复的源头问题，#3666 已关但 #3671 显示 nightly 仍存变体 |
| **PR** | [#3514](https://github.com/HKUDS/nanobot/pull/3514) WhatsApp JID 设备后缀处理 | **9 天** | 群聊 @mention 匹配失败，影响企业/社区场景 |

---

> **日报生成说明**：基于 GitHub 公开数据自动分析，PR 评论数显示为 `undefined` 系源数据字段缺失，不影响整体判断。建议维护者优先关注 #3671（Runtime Context 回归）、#3665（DeepSeek 兼容性）、#3649（安全漏洞）三项开放项。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-07

## 1. 今日速览

Hermes Agent 今日保持**极高活跃度**：24小时内 Issues 与 PR 各更新 50 条，形成 42:8 的新开/活跃 vs 关闭比例，以及 43:7 的待合并 vs 已合并/关闭比例。社区讨论密度显著，无新版本发布。项目正处于**密集开发期**——TUI/CLI 体验打磨、多平台网关稳定性修复、以及 Kanban/插件系统迭代构成三大主线。值得注意的是，今日有 8 个 Issue 关闭但仅 7 个 PR 合并/关闭，显示部分问题通过直接修复或社区自助解决，而非完整 PR 流程。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心改进 | 链接 |
|:---|:---|:---|:---|
| **#20916** `fix(tui): keep alt-screen exit clean and tighten exit summary` | OutThisLife | 修复 Ink alt-screen 退出时的竞态条件（buffered writes vs direct `writeSync` 冲突），消除终端残留乱码；精简退出摘要输出 | [PR #20916](https://github.com/NousResearch/hermes-agent/pull/20916) |
| **#20914** `send_message_tool._send_telegram doesn't use TelegramFallbackTransport` | vokasug | 修复 Telegram 消息发送工具未使用 FallbackTransport 的问题，解决网络封锁区域（如俄罗斯）的消息投递失败 | [Issue #20914](https://github.com/NousResearch/hermes-agent/issues/20914) |

**整体推进评估**：今日合并量偏低（7/50），但关闭的 Issue 中包括多个高互动历史问题（如 #6475 Anthropic 订阅认证、#7237 输出截断错误），显示维护团队在进行**存量问题清理**。大规模 PR 队列（43 个待合并）预示未来 2-3 天可能有集中合并窗口。

---

## 4. 社区热点

### 高互动 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| #1 | **Anthropic Claude 订阅认证返回 "You're out of extra usage"**（已关闭） | 30 | 17 | 订阅用户遭遇错误配额判定，重启/重登录无效，需服务端状态同步机制 | [Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475) |
| #2 | **Matrix 新安装无法接收消息（sync stalls）** | 17 | 0 | #10860 合并后的回归，网关事件同步管道阻塞，阻断全新 Matrix 部署 | [Issue #12614](https://github.com/NousResearch/hermes-agent/issues/12614) |
| #3 | **输出长度限制导致响应截断**（已关闭） | 14 | 3 | 长文本生成场景（CLI/网关）频繁触发硬截断，破坏代码/文章完整性 | [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) |

### 诉求分析

- **#6475** 的 30 评论/17 👍 反映 **Anthropic 集成是核心付费场景**，认证状态的可靠性直接影响商业用户留存。关闭状态表明可能已有服务端修复或文档更新。
- **#12614** 的 0 👍 但 17 评论说明这是**阻塞性缺陷**而非功能请求——用户被迫参与调试而非点赞。与 #10860 的关联提示合并审查需加强回归测试。
- **#7237** 的关闭结合今日 PR #20946（base64 图片 payload 排除在 token 估算外），显示团队正在**系统性治理 token 预算相关的边缘情况**。

---

## 5. Bug 与稳定性

### P1（严重）

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#20941** `fix(gateway): internal events bypass busy-input; system note defers to user` | 用户中断指令被内部合成事件覆盖，导致"停止编码"等指令失效 | **PR 已开** | #20941 | [PR #20941](https://github.com/NousResearch/hermes-agent/pull/20941) |

### P2（高）

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#12614** Matrix 新安装无入站事件 | #10860 回归，sync 管道停滞 | 开放，今日更新 | 无明确关联 | [Issue #12614](https://github.com/NousResearch/hermes-agent/issues/12614) |
| **#20465** CLI 会话 Codex 429 不回退，cron 作业正常 | 交互式与批处理回退逻辑不一致 | 开放 | 无 | [Issue #20465](https://github.com/NousResearch/hermes-agent/issues/20465) |
| **#20782** Windows 11 终端/write_file 工具失败（exit 126） | ATLAS OS 环境工具链调用异常 | 开放，今日创建 | 无 | [Issue #20782](https://github.com/NousResearch/hermes-agent/issues/20782) |
| **#20927** Windows write_file 路径错误 + 会话中断后工具失效 | 路径分隔符处理 + 状态机损坏导致幻觉 | 开放，今日创建 | 无 | [Issue #20927](https://github.com/NousResearch/hermes-agent/issues/20927) |
| **#20807** ACP delegate_task 返回虚假完成状态 | 子代理无实际副作用却报告成功 | 开放，今日创建 | 无 | [Issue #20807](https://github.com/NousResearch/hermes-agent/issues/20807) |
| **#20899** Telegram 入站图片模型可见但工具不可访问 | 视觉推理与文件句柄暴露不一致 | 开放，今日创建 | 无 | [Issue #20899](https://github.com/NousResearch/hermes-agent/issues/20899) |

### P3（中）

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#18390** Termux TUI 响应文本消失 | 键盘关闭/后台切换导致刷新丢失 | 开放 | 无 | [Issue #18390](https://github.com/NousResearch/hermes-agent/issues/18390) |
| **#20879** Kanban dashboard 有计数无卡片 | localStorage 与 CLI 当前文件 board 分歧 | 开放，今日创建 | 无 | [Issue #20879](https://github.com/NousResearch/hermes-agent/issues/20879) |
| **#20842** Kanban migration 失败（无 spawn_failures 列） | 5/6 自动更新后 schema 不兼容 | **已关闭** | #20842 同日修复 | [Issue #20842](https://github.com/NousResearch/hermes-agent/issues/20842) |

### 稳定性信号

- **Windows 平台成为今日重灾区**：#20782、#20927 双发，涉及路径处理、进程执行、状态恢复三层问题，提示 Windows 测试覆盖不足。
- **Kanban 系统快速修复**：#20842 当日创建当日关闭，显示插件系统有**热修复能力**但缺乏 schema 迁移的向前兼容性设计。

---

## 6. 功能请求与路线图信号

### 高潜力功能（已有 PR 或强关联）

| 功能 | Issue/PR | 信号强度 | 分析 |
|:---|:---|:---:|:---|
| **CodeAct 研究工作流集成** | PR #20923 | ⭐⭐⭐⭐⭐ | 直接合并 capability-flag 路由、SearXNG 索引层，是 Agent 架构级升级 |
| **Electron 桌面应用** | PR #20059 | ⭐⭐⭐⭐⭐ | 完整 Electron/Vite 实现，含 chat/composer/voice/assistant-ui，将显著扩展用户群 |
| **OpenRouter Qwen/DeepSeek 缓存控制** | PR #20945 | ⭐⭐⭐⭐☆ | 从 Cline 移植，成本优化特性，上游验证成熟 |
| **Slack 插件扩展钩子** | PR #20936 | ⭐⭐⭐⭐☆ | Block Kit 原生支持，企业集成关键能力 |
| **Mistral 提供商支持** | Issue #20859 | ⭐⭐⭐☆☆ | 用户基数大，语音模型已集成，LLM 补齐逻辑顺畅 |
| **模型自主切换工具** | Issue #16525 | ⭐⭐⭐☆☆ | 解决 Agent 自我路由，需架构决策（slash command vs tool call）|

### 中长期需求

| 功能 | Issue | 阻碍 |
|:---|:---|:---|
| Google Workspace 多账户 | #15602 | OAuth 固定路径设计债务 |
| 记忆重要性评分机制 | #12883 | 根本性架构缺失，无短期 PR |
| OpenViking 插件 API 利用率提升 | #5627 | 需插件作者优先级对齐 |

---

## 7. 用户反馈摘要

### 痛点聚类

| 场景 | 典型反馈 | 来源 |
|:---|:---|:---|
| **认证/计费可靠性** | "Claude 订阅明明有效却报 usage 耗尽，重启无效" | #6475 |
| **长文本工作流断裂** | "代码生成到一半被截断，破坏上下文" | #7237 |
| **移动端/TUI 脆弱性** | "Termux 切后台就丢响应，键盘关闭刷新空白" | #18390, #19944 |
| **平台一致性缺陷** | "Windows 上工具全崩，exit 126 毫无信息量" | #20782, #20927 |
| **网关事件管道** | "Matrix 装完连得上、收不到消息，debug 模式都没日志" | #12614 |

### 满意度信号

- **TTS 语音模式**：#15462 关闭表明 cTranslate2/OpenBLAS 线程冲突已解决，但 #20787 PR 显示"停止录音时保留转录"的体验细节仍在打磨。
- **Kanban 工作流**：#20875 请求 assignee 下拉菜单，#20879 报告 board 状态分歧，显示**功能可用但交互未闭环**。

---

## 8. 待处理积压

### 需维护者关注的长期 Issue

| Issue | 创建日期 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#5151** 流式重试状态消息累积 | 2026-04-05 | 今日 | 8 👍，UX 债务累积，影响所有网关用户 | [Issue #5151](https://github.com/NousResearch/hermes-agent/issues/5151) |
| **#5627** OpenViking 插件 API 利用率低 | 2026-04-06 | 今日 | 3 👍，记忆插件竞争力不足 | [Issue #5627](https://github.com/NousResearch/hermes-agent/issues/5627) |
| **#6838** MiniMax 提供商频繁断连 | 2026-04-09 | 今日 | 从 OpenClaw 迁移用户流失风险 | [Issue #6838](https://github.com/NousResearch/hermes-agent/issues/6838) |
| **#11860** Discord 附件传递不可靠 | 2026-04-18 | 今日 | 2 👍，文件处理管道基础能力 | [Issue #11860](https://github.com/NousResearch/hermes-agent/issues/11860) |
| **#12232** IMAP 用户名独立配置 | 2026-04-18 | 今日 | 企业邮件场景刚需，SMTP 已支持 | [Issue #12232](https://github.com/NousResearch/hermes-agent/issues/12232) |

### 预警

- **43 个待合并 PR** 中大量为今日创建（5/6），存在**审查瓶颈**风险。建议维护者优先处理 P1/P2 关联 PR（#20941 网关中断修复、#20935 doctor 健康检查误报）。
- **Windows 工具链问题**（#20782, #20927）需集中复现环境，避免碎片化修复。

---

*日报基于 NousResearch/hermes-agent 2026-05-07 公开数据生成*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-07

## 1. 今日速览

PicoClaw 今日维持**高活跃度**，24小时内 Issues 更新 21 条（14 活跃/新开，7 关闭），PR 更新 62 条（42 待合并，20 已合并/关闭），并推送了 **v0.2.8-nightly.20260506** 夜间构建。社区焦点集中在**会话消息时间戳准确性**、**多 Agent 角色隔离**、**LLM Provider 稳定性**三大领域。值得注意的是，今日出现多个关于认证失败（401）和钉钉 SDK panic 的稳定性问题，需关注修复进度。整体项目处于功能快速迭代期，但待合并 PR 积压较多（42 个），代码审查吞吐量存在瓶颈。

---

## 2. 版本发布

### [v0.2.8-nightly.20260506.eb4e1875](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) 🔧 夜间构建

| 属性 | 详情 |
|:---|:---|
| **类型** | 自动化夜间构建（可能不稳定） |
| **基线对比** | `v0.2.8...main` |
| **风险提示** | ⚠️ 此为自动化构建，建议生产环境谨慎使用 |

**变更范围**：自 v0.2.8 以来 main 分支的全部累积变更，包含约 62 个 PR 的合并内容（含 Provider 修复、通道增强、MCP 支持等）。

**迁移注意事项**：夜间构建无官方迁移指南，建议从稳定版升级前在测试环境验证 Provider 配置兼容性。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | badgerbees | **OpenAI-compatible Embeddings 支持** | 解锁 vLLM 等自建嵌入端点，为 RAG 场景降低延迟和成本 |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) | imguoguo | **发布工作流增强：支持从现有标签发布** | 提升发布灵活性，允许固定发布 commit 与运行时机解耦 |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | dsus4wang | **微信通道多实例与配置管理增强** | 企业微信部署场景的核心稳定性提升 |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) | imalasong | **SSE 流分块解析修复** | 消除大模型流式响应中的内容丢失风险，直接影响用户体验 |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) | whtiehack | **Anthropic Provider 缓存控制修复** | 恢复 Anthropic prompt caching 功能，降低 API 成本 |
| [#2345](https://github.com/sipeed/picoclaw/pull/2345) | manaporkun | **Engram MCP 记忆服务器集成文档** | 扩展 PicoClaw 长期记忆生态，Pi Zero 2 W 已验证 |

**整体推进评估**：今日合并集中在 **Provider 层健壮性** 和 **通道生态扩展** 两大主线，为 v0.3.0 级别的多模型、多通道稳定运行奠定基础。但 42 个待合并 PR 的积压表明审查资源仍是瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues/PRs

| 排名 | 条目 | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 调用失败未重试 | **12 评论** | **长尾稳定性痛点**：长任务中 HTTP 500 导致挂死，用户需要指数退避重试机制，而非无限等待 |
| 2 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec 工具 guardCommand 误判 | **7 评论** | **安全与功能冲突**：`restrict_to_workspace=true` 时正则误杀合法 curl 命令，安全策略过于粗暴 |
| 3 | [#293](https://github.com/sipeed/picoclaw/issues/293) 自主浏览器操作（路线图） | **7 评论, 👍8** | **高优先级功能缺口**：社区强烈期待浏览器自动化，用于数据提取、网页交互等场景 |
| 4 | [#2548](https://github.com/sipeed/picoclaw/issues/2548) 多认证凭据冲突（已关闭） | **6 评论** | **配置模型设计缺陷**：`provider` + `model_list` 混合配置导致认证信息重复传递 |
| 5 | [#2367](https://github.com/sipeed/picoclaw/issues/2367) Android 英文界面残留中文（已关闭） | **6 评论** | **国际化完成度**：移动端本地化存在漏网之鱼 |

**背后诉求洞察**：社区正从"能跑通"向"跑得稳、跑得省"演进——重试机制、缓存优化、安全策略精细化、国际化完整度成为新的质量标杆。浏览器自动化（#293）的高赞表明用户希望 PicoClaw 突破纯文本交互边界。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 严重等级 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0-崩溃** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) | 钉钉 SDK panic：向已关闭 channel 发送数据，Gateway 异常停止 | 钉钉企业用户生产环境 | ❌ 无 Fix PR |
| **P1-认证阻断** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) | 有效 API Key 返回 401（Groq/OpenRouter/Nvidia），疑似配置序列化 bug | 多 Provider 通用，稳定版/夜间版均受影响 | ❌ 无 Fix PR，需紧急排查 |
| **P1-功能损坏** | [#2780](https://github.com/sipeed/picoclaw/issues/2780) | 热重载配置后语音识别失效 | 使用 groq-asr 的 Telegram 用户 | ❌ 无 Fix PR |
| **P2-数据丢失** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) | Session API 消息无独立时间戳，所有消息共用 `updated` 时间 | 前端消息时间显示失真 | ✅ [#2788](https://github.com/sipeed/picoclaw/pull/2788) 已提交，待合并 |
| **P2-功能降级** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) | DeepSeek v4 thinking model 不支持，`reasoning_content` 未保存回传致 400 | 深度推理场景用户 | ❌ 无 Fix PR，社区提议代理方案 |
| **P2-安全误杀** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具路径守卫误拦截无路径命令（如 `curl wttr.in/Beijing?T`） | 启用工作区隔离的所有用户 | ❌ 无 Fix PR |

**稳定性风险评估**：今日出现 **2 个无修复方案的生产级问题**（钉钉崩溃、认证阻断），建议维护者优先响应。#2769 的多 Provider 401 问题若确认为配置序列化 bug，可能需要紧急补丁版本。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 成熟度信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **浏览器自动化** | [#293](https://github.com/sipeed/picoclaw/issues/293) | 路线图标签、高赞（8👍）、有技术方案讨论（Playwright/Puppeteer） | 🔶 高（v0.3.x） |
| **MCP Streamable HTTP 传输** | [#2782](https://github.com/sipeed/picoclaw/issues/2782) | 新规范支持需求，社区 SDK 已切换 | 🔶 高（v0.2.9） |
| **MCP Web UI 配置** | [#2770](https://github.com/sipeed/picoclaw/pull/2770) | **PR 已提交**，解决配置易用性 | 🟢 极高（下一 nightly） |
| **单消息时间戳** | [#2788](https://github.com/sipeed/picoclaw/pull/2788) | **PR 已提交**，修复数据模型 | 🟢 极高（下一 nightly） |
| **多 Agent 角色隔离** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 架构设计问题，影响多 Agent 可用性 | 🔶 中（需架构决策） |
| **群聊消息归属** | [#2715](https://github.com/sipeed/picoclaw/pull/2715) | **PR 已提交**，9 个聚焦 commit，待审查 | 🔶 中（审查中） |
| **OpenCode 提供商** | [#2671](https://github.com/sipeed/picoclaw/issues/2671) | 仅需求提出，无技术细节 | 🔴 低 |
| **Token 消耗仪表盘** | [#2217](https://github.com/sipeed/picoclaw/issues/2217) | 已关闭，可能因优先级搁置 | 🔴 低 |

**路线图判断**：MCP 生态（配置 UI + 新传输协议）和 消息数据模型修复 是近期最确定的方向。浏览器自动化作为长期路线图项，需要评估与现有 Agent 架构的集成深度。

---

## 7. 用户反馈摘要

### 💬 真实痛点提炼

| 场景 | 来源 | 核心情绪 |
|:---|:---|:---|
| **"长任务跑到一半挂死，只能手动重启"** | #629 | 😤 挫败——基础设施级可靠性缺失 |
| **"配置明明对了，就是报 401，换直接调用就通"** | #2769 | 😵 困惑——抽象层引入不可预期行为 |
| **"子 Agent 都以为自己是老板，没人干活"** | #2775 | 😂 荒诞——多 Agent 架构的语义隔离缺陷 |
| **"钉钉机器人半夜崩溃，运维被叫醒"** | #2704 | 😰 焦虑——生产环境稳定性承诺不足 |
| **"历史记录只剩最后两句，演示很尴尬"** | #2310（已关闭） | 😤 尴尬——数据持久化信任崩塌 |

### ✅ 满意点
- 微信通道多实例支持（#2606 合并）获企业用户隐性认可
- Engram MCP 记忆集成文档（#2345）降低边缘设备部署门槛

### ❌ 不满集中区
1. **配置系统的"魔法行为"**：认证信息合并规则不透明（#2548, #2769）
2. **错误处理粗糙**：LLM 失败=挂死，SDK panic=崩溃，缺乏优雅降级
3. **移动端体验落差**：Android 配置流程、国际化完成度落后于 Web（#2367, #2368）

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高价值长期项

| 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#293](https://github.com/sipeed/picoclaw/issues/293) 浏览器自动化路线图 | 2026-02-16 | 2026-05-06 | 高赞功能请求，2.5 个月无官方技术回应，社区热情可能消退 |
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 重试机制 | 2026-02-22 | 2026-05-06 | 12 评论无维护者介入，基础设施可靠性标签 |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) LINE 官方 SDK 重构 | 2026-04-07 | 2026-05-06 | 减少 270 行自研代码，消除安全验证隐患，审查搁置 1 个月 |
| [#2311](https://github.com/sipeed/picoclaw/pull/2311) 会话历史归档修复 | 2026-04-03 | 2026-05-06 | 修复 #2310 数据丢失问题，关联用户信任修复 |
| [#2183](https://github.com/sipeed/picoclaw/pull/2183) 子 Agent 模型 ID 规范化 | 2026-03-30 | 2026-05-06 | 与 #2775 角色混淆问题相关，架构根基修复 |

**行动建议**：建议维护者优先审查 **#2788**（时间戳修复）、**#2770**（MCP UI）、**#2769**（认证阻断）三个近期高影响项，并安排 #293 浏览器自动化的技术方案评审会议。

---

*日报生成时间：2026-05-07 | 数据来源：GitHub API 快照 | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-07

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-05-07 | **数据周期**: 过去 24 小时

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：25 个 PR 更新（含 3 条已合并/关闭）、4 个 Issues 活跃，显示社区贡献密集。核心工作集中在 **v2 迁移体验修复**（sqlite3 依赖、环境变量映射）、**WhatsApp 自聊消息过滤**等稳定性问题，以及 **Slack 设置流程的 UX 全面重构**（6 个关联 PR）。值得注意的是，v1 遗留技能 `/claw` 的正式废弃提议已被提出，标志项目向 v2 架构彻底迁移的决心。无新版本发布，整体处于"修稳筑基"阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2302](https://github.com/qwibitai/nanoclaw/pull/2302) | Koshkoshinsk | **WhatsApp 自聊消息修复**：用 `sentMessageCache` 区分 bot 回声与用户真实消息，替代粗暴的 `fromMe` 全过滤 | 解除 WhatsApp 核心场景（用户给自己发消息备忘记事）的功能阻断 |
| [#2309](https://github.com/qwibitai/nanoclaw/pull/2309) | glifocat | **移除 sqlite3 CLI 外部依赖**：改用内置 `better-sqlite3` 包装器 | 根治 [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) 迁移脚本因环境缺失 sqlite3 而误报的错误，降低 v1→v2 迁移门槛 |
| [#2308](https://github.com/qwibitai/nanoclaw/pull/2308) | SamBagetAI | **审批流提示词收紧**：修复幽灵工具引用、精简审批待处理文本、消除 Baget 集成中的幻觉指令 | 关闭安全审计 P0/P1/P2 四项问题，提升企业级部署可信度 |

**整体迈进评估**：今日合并聚焦"消除 v2 迁移摩擦"和"生产环境鲁棒性"，属于基础设施层面的质量加固，为后续功能释放扫清障碍。

---

## 4. 社区热点

### 讨论焦点：v2 迁移的"隐形门槛"

| 议题 | 链接 | 热度信号 | 背后诉求分析 |
|:---|:---|:---|:---|
| **#2311 - 废弃 `/claw` 技能** | [Issue #2311](https://github.com/qwibitai/nanoclaw/issues/2311) | 架构级提案，0 评论但战略性高 | 维护者需明确 v1 技术债务清理路线图；贡献者担心兼容层维护成本 |
| **#2312 - CLAUDE.md 被无条件删除** | [Issue #2312](https://github.com/qwibitai/nanoclaw/issues/2312) | 1 评论，指向工作树污染痛点 | 开发者体验（DX）诉求：拉取即运行，避免每次启动产生 dirty state |
| **alipgoldberg 的 Slack UX 6连 PR** | [#2295](https://github.com/qwibitai/nanoclaw/pull/2295)-[#2305](https://github.com/qwibitai/nanoclaw/pull/2305) | 单日 6 PR，系统性重构 | **非技术用户的 onboarding 焦虑**：当前 Slack 设置流程术语过载、步骤顺序混乱、公共 URL 要求未前置警示 |

> **核心洞察**：社区正从"功能有无"转向"体验好坏"阶段，v2 的架构优势需通过迁移工具和设置向导的"零摩擦"设计才能转化为用户留存。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 迁移阻断** | `migrate-v2.sh` 误报 `registered_groups` 缺失（实际因 sqlite3 CLI 未安装） | [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) | **已修复** via [#2309](https://github.com/qwibitai/nanoclaw/pull/2309) | 所有 v1→v2 迁移用户 |
| 🟡 **P1 - 渠道静默失效** | Matrix/Discord 环境变量键名变更未在迁移脚本中显式提示 | [#2294](https://github.com/qwibitai/nanoclaw/issues/2294) | **待修复**，无关联 PR | v2 迁移后使用 Matrix/Discord 的用户 |
| 🟡 **P1 - 工作树污染** | `groups/global/CLAUDE.md` 每次启动被删，git 状态持续 dirty | [#2312](https://github.com/qwibitai/nanoclaw/issues/2312) | **待修复**，有明确方案（从仓库移除该文件） | 所有从源码部署的开发者 |
| 🟢 **P2 - 消息过滤过度** | WhatsApp `fromMe` 过滤误杀自聊用户消息 | [#2302](https://github.com/qwibitai/nanoclaw/pull/2302) | **已修复** | WhatsApp 自聊场景用户 |

---

## 6. 功能请求与路线图信号

| 提案 | 来源 | 纳入可能性评估 | 关键依据 |
|:---|:---|:---|:---|
| **工具调用实时预览（tool-visibility skill）** | [#2211](https://github.com/qwibitai/nanoclaw/pull/2211) | ⭐⭐⭐⭐ 高 | 已提交完整 PR，符合 skill 贡献规范，增强 AI 交互透明度 |
| **yt-dlp MCP 服务器 + `/add-ytdlp` 安装器** | [#2306](https://github.com/qwibitai/nanoclaw/pull/2306) | ⭐⭐⭐⭐ 高 | 多媒体内容处理是 AI 助手高频场景，in-tree MCP 设计降低部署复杂度 |
| **GitHub 轮询模式（无公网端口）** | [#2301](https://github.com/qwibitai/nanoclaw/pull/2301) | ⭐⭐⭐⭐ 高 | 解决 NAT/防火墙企业环境的接入痛点，与现有 webhook 模式互补 |
| **本地 Whisper 语音转录（免费）** | [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) | ⭐⭐⭐☆ 中 | 技术完整但 12 天未合并，可能受 review 资源或优先级调整影响 |
| **MCP Tier 1 工具集（任务运行/重试/邮件审批）** | [#2298](https://github.com/qwibitai/nanoclaw/pull/2298) | ⭐⭐⭐⭐ 高 | 配套 baget.ai 商业产品 PR #464，有明确商业驱动 |
| **废弃 `/claw` v1 技能** | [#2311](https://github.com/qwibitai/nanoclaw/issues/2311) | ⭐⭐⭐⭐ 高 | 架构债务清理，维护者已标记为决策议题 |

> **路线图信号**：项目正围绕 **MCP 生态扩展**、**渠道覆盖深化**、**v2 架构定型** 三条主线推进，企业集成（Baget）与个人自托管（免费 Whisper、yt-dlp）双线并重。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issues 与 PR 描述）

| 场景 | 原始反馈 | 情感倾向 |
|:---|:---|:---|
| **v2 迁移"黑箱报错"** | "脚本说 `registered_groups` 表缺失，我查了半天 DB 才发现是 sqlite3 没装" — Omee11 | 😤 沮丧（错误信息误导性） |
| **Slack 设置"术语轰炸"** | "Expose NanoClaw's webhook server via ngrok, Cloudflare Tunnel, or a reverse proxy" 对非技术用户是四面术语墙 — alipgoldberg | 😵 困惑（认知负荷过载） |
| **环境变量"静默断裂"** | "Matrix 和 Discord 的凭证明明在 `.env` 里，v2 就是不认，没有提示说键名变了" — glifocat | 😠 隐蔽挫败（无声失败） |
| **WhatsApp 自聊失效** | "给自己发消息记东西，NanoClaw 完全没反应" — Koshkoshinsk | 😐 功能缺失（边缘场景覆盖不足） |

### 满意点

- **alipgoldberg** 的 Slack UX 系列 PR 显示贡献者对"平民用户" onboarding 的主动关怀
- [#2309](https://github.com/qwibitai/nanoclaw/pull/2309) 的 `better-sqlite3` 替换体现"减少外部依赖"的工程自觉

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) 本地 Whisper 语音转录 | 2026-04-25 | 2026-05-06 | **12 天待合并**，技术完整度高，可能因 review 队列拥堵或与其他音频路线图冲突而搁置 |
| [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) 渠道安装器信任边界加固 | 2026-04-25 | 2026-05-06 | **安全类 PR**，12 天未决，涉及供应链安全（channels 分支远程信任），建议提升优先级 |
| [#2187](https://github.com/qwibitai/nanoclaw/pull/2187) CLI 平台 ID 命名空间修复 | 2026-05-02 | 2026-05-06 | 5 天待合并，影响 CLI 渠道基础功能，相对独立可快速 review |

> **维护者提醒**：安全 PR [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) 与体验 PR [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) 均进入第二周未决，建议分配专项 review 资源或明确阻塞原因，避免贡献者流失。

---

*日报生成基于 GitHub 公开数据，PR 评论数显示为 `undefined` 系数据源原始状态。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-07

> **项目地址**: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **报告日期**: 2026-05-07（数据覆盖：过去24小时）

---

## 1. 今日速览

NullClaw 项目今日处于**低活跃、高潜力**状态。过去24小时内无新增 Issues 讨论，社区互动较为沉寂；但存在一条持续迭代中的核心功能 PR（#783），该 PR 自4月7日创建以来历经近一个月开发，于昨日（5月6日）仍有更新，表明 cron 子代理引擎功能正在稳步推进。整体而言，项目处于**功能开发期的蓄力阶段**，尚未形成版本发布动能，需关注该重量级 PR 的合并节奏以判断下一版本里程碑。

---

## 2. 版本发布

**无新版本发布**

今日无 Release 活动。上一个版本的发布时间与内容需查阅历史记录，当前开发焦点集中在 PR #783 的 cron 子系统重构。

---

## 3. 项目进展

| 状态 | PR | 说明 | 推进评估 |
|:---|:---|:---|:---|
| 🟡 **待合并** | [#783](https://github.com/nullclaw/nullclaw/pull/783) `feat(cron): cron subagent, run history, JSON output, security hardening` | 由 `yanggf8` 开发，涵盖四大模块：DB 持久化调度引擎（`cron_runs` 历史表 + `cron_run_queue` 工作队列）、多作业类型支持（skill/agent/shell）、时区偏移处理、JSON CLI 输出格式、安全加固 | **重大架构升级**：将 NullClaw 的 cron 能力从基础定时器升级为生产级子代理系统，支持原子化 tick/enqueue/complete 生命周期管理，为自动化工作流奠定基础设施 |

**整体迈进度**: ⭐⭐⭐☆☆（3/5）  
PR #783 是近一个月来唯一持续活跃的开发主线，功能覆盖面广且涉及安全加固，一旦合并将显著提升项目的自动化调度成熟度。但单一 PR 独立推进、缺乏并行开发流，存在** bus factor 风险**。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 诉求分析 |
|:---|:---|:---|:---|
| #1 | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) | 评论: 未公开显示 👍: 0 | **核心矛盾**：功能宏大但社区反馈真空。零点赞、零评论可能反映：(a) 功能过于专业，普通用户难以评估；(b) 项目社区规模较小，缺乏核心贡献者参与 code review；(c) 作者 `yanggf8` 可能为项目维护者，采用"自研自审"模式，存在合并后质量风险 |

> 🔗 [查看 PR 详情](https://github.com/nullclaw/nullclaw/pull/783)

**深层诉求信号**: 社区对 cron/自动化调度有明确需求（否则不会投入一个月开发），但缺乏对 JSON 输出格式、安全加固细节的具体反馈，可能意味着实际用户尚未参与到设计评审中。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 说明 |
|:---|:---|:---|:---|
| — | **今日无 Bug 报告** | — | 零 Issues 活动既可能是稳定性良好的表现，也可能是用户基数不足、问题反馈渠道未激活的警示 |

**风险评估**: ⚠️ **信息盲区风险**  
PR #783 涉及"security hardening"但未披露具体加固内容（SQL 注入防护？权限隔离？沙箱执行？），且缺乏独立 review，存在**安全修复引入新漏洞**的潜在风险。建议维护者在合并前补充安全测试用例与威胁模型文档。

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能方向 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| [PR #783](https://github.com/nullclaw/nullclaw/pull/783) 自身 | Cron 子代理引擎 + 运行历史可观测性 | **85%** | 已开发完成度极高，JSON CLI 接口已就绪，仅剩 review/merge |
| PR #783 隐含 | 多租户时区支持 | **60%** | "per-job TZ offsets"为国际化部署铺垫，但文档未说明是否关联用户体系 |
| PR #783 隐含 | 告警/通知系统（operator alerts） | **50%** | 仅提及"delivery routing, operator alerts"，未明确集成渠道（Webhook? PagerDuty? Email?）|

**路线图推测**: NullClaw 正从"个人 AI 助手框架"向"可运营 AI Agent 平台"演进，cron 子系统是无人值守自动化的关键基础设施。下一版本（推测 v0.x 或 v1.x）极可能以该 PR 为核心发布内容。

---

## 7. 用户反馈摘要

> **今日无可用用户反馈数据**（零 Issues 评论）

**历史隐含痛点**（基于 PR #783 设计反推）：

| 痛点领域 | 推断依据 | 满意度预判 |
|:---|:---|:---|
| **Cron 执行黑盒化** | 专门构建 `cron_runs` 历史表 | ❌ 此前用户无法追踪定时任务执行状态 |
| **CLI 输出不可解析** | 新增 `--json` 全局标志 | ❌ 此前输出仅面向人类阅读，难以集成到外部系统 |
| **定时任务类型受限** | 扩展 skill/agent/shell 三类作业 | ❌ 此前可能仅支持单一执行模式 |
| **安全边界模糊** | "security hardening"列为独立特性 | ⚠️ 用户或审计方曾提出安全性质疑 |

> ⚠️ **关键缺失**: 无真实用户场景验证（如"我用 NullClaw 定时抓取数据，但时区总是错"），建议维护者在 PR 合并后发起用户访谈或发布 Beta 招募。

---

## 8. 待处理积压

| 类型 | 条目 | 账龄 | 风险提示 |
|:---|:---|:---|:---|
| 🟡 **长期活跃 PR** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **30天**（2026-04-07 → 至今） | 开发周期过长可能意味着：(1) 功能范围蔓延（scope creep）；(2) 作者时间碎片化；(3) 等待外部依赖。建议设定合并 deadline 或拆分发布 |
| 🔴 **社区参与赤字** | 全项目 | **持续** | 过去24小时 Issues+PR 互动总量为 1（且为零评论 PR），需警惕项目"维护者孤岛化"。建议：启用 GitHub Discussions、发布开发路线图 RFC、招募 reviewer |

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | ⭐⭐⭐☆☆ | 单点开发，无并行流 |
| 社区健康度 | ⭐⭐☆☆☆ | 零互动，贡献者单一 |
| 版本交付力 | ⭐⭐☆☆☆ | 近一个月无 release |
| 技术债务控制 | ⭐⭐⭐⭐☆ | 无积压 Bug，但 PR 账龄偏长 |
| 安全成熟度 | ⭐⭐⭐☆☆ | 主动加固但未透明披露 |

**综合健康度**: 🟡 **57/100** — 功能开发有序推进，社区生态亟待激活

---

*本报告基于公开 GitHub 数据生成，PR 评论数为 `undefined` 可能因 API 限制或权限设置，建议直接访问 [PR #783 页面](https://github.com/nullclaw/nullclaw/pull/783) 获取完整讨论。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-07

---

## 1. 今日速览

IronClaw 今日维持**极高活跃度**，24小时内 39 条 Issue 更新（30 活跃/新开，9 关闭）、46 条 PR 更新（21 待合并，25 已合并/关闭），无新版本发布。项目核心焦点集中在 **"Reborn" 架构迁移**——这是 IronClaw 自内核到产品层的重大重构工程。今日 9 个关闭 Issue 中 7 个为 Reborn 子任务，显示架构设计阶段进入收尾；同时新开 8 个 Reborn 迁移执行类 Issue，标志项目从"设计定义"转向"工程落地"。PR 侧呈现高频合并态势，核心贡献者 `serrrfirat` 与 `ilblackdragon` 主导了 turns 子系统、对话绑定、会话线程等关键模块的代码推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3253](https://github.com/nearai/ironclaw/pull/3253) | PierreLeGuen | **多租户 Slack 中继通道**：实现 `sender_id` → 内部 `UserId` 的配对解析，未配对用户通过 OTP 码完成身份绑定；OAuth 回调为连接管理员创建通道身份。E2E 已验证。 | #3300 (跟进项) |
| [#3197](https://github.com/nearai/ironclaw/pull/3197) | ilblackdragon | **修复 mission_create 整数强制转换**：LLM 将整数守卫作为 JSON 字符串传递（`"120"`）时导致的类型错误，实现 schema 感知参数强制转换。 | #3132 |
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | nickpismenkov | **Reborn 内存子系统完整落地**：原生隔离防护栏 + `lib.rs` 模块拆分，合并原 7-PR 栈（#3181-#3185 已 squash），为 Reborn 提供安全的记忆存储基座。 | #3118 |
| [#3301](https://github.com/nearai/ironclaw/pull/3301) | think-in-universe | **恢复 Docker 镜像工作流**：从合并队列切换 (#3104) 后恢复每小时构建、`:staging` 与 `:sha-*` 标签、`ironclaw-dind` 仓库分发。 | - |
| [#3310](https://github.com/nearai/ironclaw/pull/3310) | ilblackdragon | **文档：OpenClaw 功能对等性刷新**：覆盖 2026.3.11-2026.4.30 的 PR 合并，标注 OpenAI 兼容 `/v1/models`/`/v1/embeddings`、出站代理路由等缺口。 | - |
| [#3312](https://github.com/nearai/ironclaw/pull/3312) | serrrfirat | **修复 CI：分离夜间 E2E 告警**：将定时告警作业从可重用工作流移出，解决 #3293 后 `Run Tests on main` 启动失败问题。 | #3293 |
| [#3311](https://github.com/nearai/ironclaw/pull/3311) | serrrfirat | **Turn 运行唤醒通知器接缝**：为 `DefaultTurnCoordinator` 添加 redacted 唤醒提示，确保仅在持久化提交/恢复成功后发射。 | - |
| [#3305](https://github.com/nearai/ironclaw/pull/3305) | serrrfirat | **验证循环退出应用**：runner 端验证 driver `LoopExit` 声明，添加 `record_recovery_required` 处理无效/不安全退出，覆盖内存/libSQL/PostgreSQL 三种后端。 | - |
| [#3307](https://github.com/nearai/ironclaw/pull/3307) | serrrfirat | **序列化 PostgreSQL 迁移修复测试**：消除 `refinery_schema_history` 表并发创建的 CI 竞态。 | - |

### 待合并关键 PR（推进中）

| PR | 作者 | 状态 | 意义 |
|:---|:---|:---|:---|
| [#3314](https://github.com/nearai/ironclaw/pull/3314) | serrrfirat | **XL/待合并** | `ironclaw_conversations`  crate：对话绑定服务、会话线程服务、入站 turn 服务合约——Reborn 产品层核心接口 |
| [#3315](https://github.com/nearai/ironclaw/pull/3315) | serrrfirat | **XL/待合并** | `ironclaw_threads` crate：规范线程/转录 DTO、单调序列化、内存语义实现——TurnCoordinator 的数据基础 |
| [#3316](https://github.com/nearai/ironclaw/pull/3316) | nickpismenkov | **XL/待合并** | ProductAdapter 合约 + Telegram v2 追踪弹：首个外部通道迁移到 Reborn 架构的端到端验证 |
| [#3313](https://github.com/nearai/ironclaw/pull/3313) | serrrfirat | **S/待合并** | 运行唤醒通知器最佳 effort 化：隔离通知失败与持久化响应路径，添加回归测试 |

**整体进展评估**：Reborn 架构从"合约定义期"进入"代码实现期"。今日关闭的 7 个设计 Issue（#3198, #3089, #3202, #3199, #3195, #3162, #3138）与 2 个实现 PR（#3180 内存子系统、#3253 Slack 中继）形成"设计闭环→工程启动"的接力。`ironclaw_turns`、`ironclaw_conversations`、`ironclaw_threads` 三大核心 crate 的代码正在快速堆积。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心议题 | 背后诉求 |
|:---|:---|:---|:---|:---|
| 1 | [#3013](https://github.com/nearai/ironclaw/issues/3013) | **7** | TurnCoordinator 内核协调器：线程/turn 准入、单运行强制、调度公平性 | **架构中枢焦虑**：这是 Reborn 首个 cutover blocker，所有产品层迁移依赖它；评论多反映设计权衡（性能 vs 正确性 vs 可观测性） |
| 2 | [#3031](https://github.com/nearai/ironclaw/issues/3031) | **6** | Reborn 产品表面迁移 EPIC | **迁移范围控制**：需保留现有用户/操作者行为，同时替换底层；讨论聚焦兼容性门控 (#3020) 与最终 readiness gates 的优先级 |
| 3 | [#3198](https://github.com/nearai/ironclaw/issues/3198) | **5** ⬅️ 已关闭 | TurnCoordinator 公共 API 形状 | **接口稳定性**：adapter-safe 的公共 API 是第三方集成的前提；关闭说明设计已冻结 |
| 4 | [#3016](https://github.com/nearai/ironclaw/issues/3016) | **5** | AgentLoopHost facade 参考实现 | **宿主抽象层**：需要统一的 facade 隐藏 TurnCoordinator/TurnRunner/持久化的复杂度 |
| 5 | [#3089](https://github.com/nearai/ironclaw/issues/3089) | **4** ⬅️ 已关闭 | SessionThreadService | **数据所有权边界**：线程/消息/回复/里程碑的持久化与生命周期数据，需服务化而非分散在各层 |

**热点分析**：所有高评论 Issue 均属 Reborn 架构轨道，由 `serrrfirat` 统一创建和维护。评论者群体高度集中（核心维护者内部），显示这是一个**核心团队驱动的深度重构期**，外部社区参与有限。诉求本质是：**在保持 IronClaw 现有行为承诺的前提下，完成从单体到分层服务的架构跃迁**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1 - 高** | [#3317](https://github.com/nearai/ironclaw/issues/3317) | **Telegram 本地 IronClaw 设置失败**：`sergeiest` 报告本地部署时 Telegram 集成无法工作，附截图（配置界面 + 错误日志） | **新开/无评论** | ❌ 无 |
| **P1 - 高** | [#3132](https://github.com/nearai/ironclaw/issues/3132) ⬅️ 已关闭 | `mission_create` 失败：`cooldown_secs` 必须为整数，得到 `"120"` | **已修复** | ✅ [#3197](https://github.com/nearai/ironclaw/pull/3197) |
| **P2 - 中** | [#3307](https://github.com/nearai/ironclaw/pull/3307) | PostgreSQL 迁移测试 CI 竞态：`refinery_schema_history` 并发创建失败 | **已修复** | ✅ #3307 自身 |
| **P2 - 中** | [#3312](https://github.com/nearai/ironclaw/pull/3312) | 夜间 E2E 告警在可重用工作流中导致 `Run Tests on main` 启动失败 | **已修复** | ✅ #3312 自身 |

**稳定性评估**：生产级 Bug 1 个（#3317 Telegram 本地部署），尚无修复；历史 Bug #3132 已根治，根因为 LLM→JSON Schema 的类型强制管道缺失。CI 稳定性今日得到主动加固（#3307, #3312）。

---

## 6. 功能请求与路线图信号

### 用户/贡献者提出的新方向

| 来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#3282](https://github.com/nearai/ironclaw/issues/3282) | **WebChat v2**：基于 ProductAdapter/ProductWorkflow/EventStreamManager 的全新浏览器聊天界面，默认关闭，逐步替换现有路由 | **极高** | 已创建 Issue，关联 10+ 相关 Issue，有明确技术路径 |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | **OpenAI 兼容 API 迁移到 Reborn**：`/v1/chat/completions`、`/v1/responses` 等路由 | **极高** | 产品兼容性核心需求，#3122 已在推进 Responses API 外部工具支持 |
| [#3285](https://github.com/nearai/ironclaw/issues/3285) | **外部通道适配器迁移到 ProductAdapter**：Telegram、Slack 等 | **高** | #3316 已实现 Telegram v2 追踪弹，#3253 Slack 多租户已落地 |
| [#3284](https://github.com/nearai/ironclaw/issues/3284) | **CLI/TUI/设置界面迁移到类型化 Reborn 服务** | **高** | 产品表面迁移 EPIC (#3031) 子任务，依赖 #3280 ProductWorkflow |
| [#3286](https://github.com/nearai/ironclaw/issues/3286) | **保留 agent 命令行为通过 Reborn 循环和服务** | **高** | 兼容性承诺，有明确相关 Issue 网络 |
| [#3266](https://github.com/nearai/ironclaw/issues/3266) | **出站 egress 和订阅策略定义** | **中-高** | 依赖 EventProjectionService (#3093) 和 durable store (#3162)，基础设施就绪后落地 |
| [#3300](https://github.com/nearai/ironclaw/issues/3300) | **Slack 多租户中继后续项**：OAuth state 参数验证、速率限制、审计日志 | **中** | 安全加固项，非阻塞但影响生产部署信心 |

**路线图信号**：Reborn 迁移已形成清晰的**三层推进节奏**：
- **底层基础设施**（turns/conversations/threads/events）→ 今日代码密集落地
- **产品适配层**（ProductAdapter/ProductWorkflow）→ 本周启动，#3316 为首炮
- **用户界面层**（WebChat v2/CLI/OpenAI API）→ 下周全面铺开

---

## 7. 用户反馈摘要

### 真实用户痛点

| 用户 | 场景 | 痛点 | 来源 |
|:---|:---|:---|:---|
| `sergeiest` | 本地部署 IronClaw + Telegram 集成 | **配置流程断裂**：截图显示设置界面后无法完成 Telegram 机器人连接，错误信息不明确 | [#3317](https://github.com/nearai/ironclaw/issues/3317) |
| `sergeiest` | 通过 agent 创建 mission | **LLM 输出类型不兼容**：`cooldown_secs="120"`（字符串）被整数类型守卫拒绝，导致 mission 创建失败 | [#3132](https://github.com/nearai/ironclaw/issues/3132) |

### 贡献者体验观察

- **文档缺口**：#3310 明确标注 OpenAI 兼容端点（`/v1/models`、`/v1/embeddings`）仍为功能缺口，影响外部开发者采用
- **CI 可靠性**：#3312 反映合并队列切换后的工作流回归，核心团队对 CI 健康度保持敏感
- **E2E 脆弱性**：#3309 将 Skills UI 生命周期测试从实时 ClawHub 依赖替换为确定性 Playwright mock，表明外部服务依赖导致测试不稳定

### 满意点

- Slack 多租户中继 E2E 验证通过（#3253），显示复杂身份配对流程的工程执行力
- Reborn 架构设计文档密集且相互链接（每个 Issue 均标注 Parent/Related/Depends on），降低认知负担

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | 2026-04-29 | 2026-05-06 | **Reborn transport adapter 合约**，被 #3269 声明为"stale transport PR framing"替代 | 明确关闭或重定向：#3269 和 #3285 已取代其定位，PR 悬置造成混淆 |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) | 2026-04-30 | 2026-05-06 | **Responses API 外部工具支持**，XL 规模，评论未定义 | 需要 maintainer 评审：这是 OpenAI 兼容性的关键功能，已开发 7 天 |
| [#2593](https://github.com/nearai/ironclaw/pull/2593) | 2026-04-17 | 2026-05-06 | **Dependabot actions 组 14 项更新**，M 规模 | 常规依赖更新，但已悬置 20 天，可能积累安全风险 |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | 2026-04-30 | 2026-05-06 | **AgentLoopDriver 和 run-class profile 合约**，3 评论 | 设计依赖 #3199 (已关闭)、#3202 (已关闭)，具备推进条件 |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) | 2026-05-03 | 2026-05-06 | **同线程跟进和 steering 策略**，仅 2 评论 | 用户交互关键路径（`/btw`、队列可见性），需在 TurnCoordinator 实现前冻结 |

**健康度提醒**：Reborn 架构 Issue 网络存在**过度依赖链接**现象——单个 Issue 常关联 8-12 个其他 Issue，形成复杂的 DAG。建议核心团队建立**每周 cutover 就绪检查点**，避免设计完备性追求导致实施管道堵塞。今日 #3013 (TurnCoordinator) 仍为 blocker，其下游 6 个"Related" Issue 均等待信号。

---

*日报生成时间：2026-05-07 | 数据来源：GitHub API 快照 | 项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-07

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-07 | **数据周期**: 过去 24 小时

---

## 1. 今日速览

LobsterAI 今日呈现**高强度代码合并态势**，29 个 PR 全部完成合并/关闭，零待合并积压，表明维护团队处于集中交付窗口期。核心工作围绕三大主线：**IM 生态扩展**（POPO 多实例、微信配置增强）、**架构解耦**（主代理工作区与运行目录分离）、**工程债务清理**（废弃引擎代码移除、日志安全加固）。社区安全关注度上升，新暴露一个路径穿越漏洞尚无修复 PR。整体项目健康度良好，但需关注安全响应速度。

---

## 2. 版本发布

**无新版本发布**

最新 Release 仍为 [2026.04.27](https://github.com/netease-youdao/LobsterAI/pull/1876)（已于 5 月 6 日合并入主干），包含 ChatGPT OAuth 登录、小米 mimo / 百度千帆 coding plan 支持等特性。

---

## 3. 项目进展

### 🔧 架构重构：工作区解耦（重大基础设施变更）

| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) | btc69m979y-dotcom | **主代理工作区与运行目录解耦**：`workspace-main/` 固定于 `stateDir`，切换工作目录不再丢失代理状态 |
| [#1894](https://github.com/netease-youdao/LobsterAI/pull/1894) | btc69m979y-dotcom | 修复 #1890 引入的 `memory/` 迁移顺序问题，确保历史数据正确拷贝 |

**影响评估**：消除用户因修改工作目录导致代理"失忆"的长期痛点，为后续多工作区架构奠定基础。

---

### 🤖 IM 生态：企业通讯深度集成

| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | btc69m979y-dotcom | **POPO 多机器人实例支持**：升级 moltbot-popo 2.1.1，新增 `PopoInstanceSettings` 组件，企业可按部门/场景部署隔离机器人 |
| [#1893](https://github.com/netease-youdao/LobsterAI/pull/1893) | btc69m979y-dotcom | **微信渠道配置化**：`dmPolicy`/`allowFrom` 从硬编码改为 `openclaw.json` 配置，新增高级设置面板 |
| [#1856](https://github.com/netease-youdao/LobsterAI/pull/1856) | btc69m979y-dotcom | 清理 IM 消息中的媒体元数据噪音（`[图片]`、`[media attached:]` 等），提升桌面端阅读体验 |
| [#1848](https://github.com/netease-youdao/LobsterAI/pull/1848) | btc69m979y-dotcom | **Windows 钉钉图片修复**：`file://` URL 三斜杠格式兼容，解决盘符被误解析为 hostname 的跨平台 bug |

---

### 🛡️ 安全与可观测性

| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844) | btc69m979y-dotcom | **日志脱敏体系化**：`serializeForLog()` 自动遮蔽 `x-api-key`、`authorization`；密钥格式压缩为 `前3***尾2` |
| [#1892](https://github.com/netease-youdao/LobsterAI/pull/1892) | fisherdaddy | 网关日志按日轮转，3 天保留期，防止磁盘膨胀 |

---

### 🧹 工程债务清理

| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) | btc69m979y-dotcom | **移除废弃 `yd_cowork` 引擎**：11 文件净减 65 行，统一为 `openclaw` 单引擎，消除条件分支复杂度 |
| [#1887](https://github.com/netease-youdao/LobsterAI/pull/1887) | btc69m979y-dotcom | 清理 #1883 引入的 lint 警告，禁用 `no-explicit-any` 规则（技术债信号） |

---

### 🐛 稳定性修复

| PR | 作者 | 修复问题 |
|:---|:---|:---|
| [#1897](https://github.com/netease-youdao/LobsterAI/pull/1897) | fisherdaddy | 模型回复后流式输出不停止（token 泄漏） |
| [#1896](https://github.com/netease-youdao/LobsterAI/pull/1896) | fisherdaddy | IM 任务中修改模型参数不生效（配置同步缺失） |
| [#1895](https://github.com/netease-youdao/LobsterAI/pull/1895) | fisherdaddy | Markdown 表格偶发渲染失败 |
| [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) | liuzhq1986 | **Windows EPERM**：删除技能目录时权限错误 |
| [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) | liuzhq1986 | ClawHub 安装时 `HOME` 未定义导致 `/.clawhub` 创建失败 |
| [#1886](https://github.com/netease-youdao/LobsterAI/pull/1886) | fisherdaddy | ChatGPT OAuth 导致 `/models` 命令结果截断 |
| [#1889](https://github.com/netease-youdao/LobsterAI/pull/1889) | fisherdaddy | Qwen 视觉模型 catalog 回退机制补丁 |

---

## 4. 社区热点

> **注**：今日所有 PR 评论数均为 `undefined`（数据未采集或仓库配置问题），Issues 仅 1 条且无评论。社区互动指标**显著偏低**，呈现"维护团队高频自运转、外部参与不足"特征。

**唯一活跃讨论点**：

| 条目 | 热度指标 | 分析 |
|:---|:---|:---|
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) [Security] 邮箱 SKILL 路径穿越漏洞 | 👍: 0, 💬: 0, 创建 24h 内 | **安全研究员 Arashimu 提交**，指向 `imap.js` 的 `downloadAttachments` 函数未过滤附件文件名，直接拼接导致 `../` 路径穿越。漏洞位于核心 SKILL 基础设施，影响所有启用邮箱服务的实例。零社区反应可能反映：① 安全披露渠道刚建立 ② 外部安全研究者尚未形成关注群体 |

**诉求解读**：需建立安全漏洞响应 SLA，建议 72 小时内确认并分配 CVE 编号流程。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) 路径穿越漏洞：邮箱附件可写入任意路径 | **Open，无修复 PR** | — | 所有启用 `imap-smtp-email` SKILL 的实例 |
| 🟡 High | [#1897](https://github.com/netease-youdao/LobsterAI/pull/1897) 模型回复不停止 | **已修复** | #1897 | 全平台用户体验 |
| 🟡 High | [#1896](https://github.com/netease-youdao/LobsterAI/pull/1896) IM 任务模型切换失效 | **已修复** | #1896 | IM 场景多模型用户 |
| 🟢 Medium | [#1895](https://github.com/netease-youdao/LobsterAI/pull/1895) Markdown 表格渲染失败 | **已修复** | #1895 | 文档/数据展示场景 |
| 🟢 Medium | [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) Windows 删除技能目录 EPERM | **已修复** | #1891 | Windows 技能开发者 |
| 🟢 Medium | [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) 打包环境 HOME 未定义 | **已修复** | #1888 | 桌面端分发场景 |

**风险评估**：Critical 漏洞 24 小时内无响应，存在被利用窗口。建议立即：
1. 在 `downloadAttachments` 加入 `path.basename()` 过滤
2. 限制写入目录为配置白名单
3. 发布安全公告（Security Advisory）

---

## 6. 功能请求与路线图信号

**显性需求**（来自今日 Issues）：无新功能请求。

**隐性信号**（从 PR 推断下一版本方向）：

| 信号源 | 推断方向 | 置信度 |
|:---|:---|:---|
| #1883 POPO 多实例 + #1893 微信配置化 | **企业级 IM 矩阵**：钉钉/微信/POPO/飞书全渠道可配置多实例 | ⭐⭐⭐⭐⭐ |
| #1890 工作区解耦 + #1894 迁移修复 | **多代理/多工作区正式版**：支持项目级隔离的代理实例 | ⭐⭐⭐⭐☆ |
| #1892 日志轮转 + #1844 脱敏体系 | **可观测性套件**：日志、指标、审计合规企业特性 | ⭐⭐⭐⭐☆ |
| #1884 引擎统一 | **OpenClaw 插件生态独占**：yd_cowork 彻底退场，第三方插件规范即将冻结 | ⭐⭐⭐⭐⭐ |

---

## 7. 用户反馈摘要

> **数据局限**：今日无用户评论数据，以下从 Issue/PR 描述反推真实场景痛点。

| 痛点场景 | 来源 | 用户画像 |
|:---|:---|:---|
| **"换工作目录后 AI 不认识我了"** | #1890 | 多项目切换的高级用户，期望代理状态跟随项目而非全局 |
| **"Windows 上钉钉发图 AI 看不懂"** | #1848 | 企业 Windows 部署管理员，跨平台一致性是核心诉求 |
| **"日志里 API key 明文飘着，合规过不了"** | #1844 | 企业安全审计/运维，金融/政务行业准入门槛 |
| **"POPO 只能绑一个机器人，部门没法共用"** | #1883 | 大型企业 IT 架构师，多租户隔离是采购决策点 |
| **"技能删不掉，报权限错误"** | #1891 | Windows 开发者，工具链摩擦影响采纳意愿 |

**满意度信号**：#1876 合并的 ChatGPT OAuth、小米 mimo/百度千帆 支持表明团队响应国内模型生态需求积极。

---

## 8. 待处理积压

| 条目 | 滞留时间 | 风险说明 | 建议动作 |
|:---|:---|:---|:---|
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) 路径穿越漏洞 | **< 24h（但 Critical）** | 安全漏洞无响应会损害企业信任，可能被公开利用 | 24h 内分配维护者，72h 内发布补丁 |
| 历史 PR #1858, #1856, #1848, #1844 | 8-10 天 | 4 月 28-29 日创建，5 月 6 日集中合并，存在**批处理延迟**模式 | 评估是否需要更频繁的小版本发布，减少修复滞留 |

---

## 附录：今日合并贡献者

| 贡献者 | PR 数量 | 核心领域 |
|:---|:---|:---|
| fisherdaddy | 7 | 渲染层、模型交互、文档 |
| btc69m979y-dotcom | 7 | 架构、IM 集成、安全、工程规范 |
| liuzhq1986 | 2 | Windows 兼容性、发布管理 |

---

*本日报基于 GitHub 公开数据生成。Critical 安全漏洞 [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) 建议优先响应。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-07

---

## 1. 今日速览

Moltis 今日维持**高活跃度**，24小时内处理 **9 个 PR**（全部合并/关闭）并闭环 **4 个 Issue**，修复效率显著。核心贡献者 `penso` 单日输出 5 个 PR，主导了 DeepSeek 推理内容回放、Docker 沙箱竞态修复、登录故障修复等关键问题。社区出现**架构级提案**（#973）：个人代理服务器的跨实例身份与互操作协议，标志着项目从"单智能体工具"向"多智能体网络"演进的重要信号。无新版本发布。

---

## 2. 版本发布

**无**

---

## 3. 项目进展

### 已合并/关闭 PR（9 条）

| PR | 作者 | 核心进展 | 关联 Issue |
|:---|:---|:---|:---|
| [#971](https://github.com/moltis-org/moltis/pull/971) `fix(sandbox): serialize container startup` | penso | **关键稳定性修复**：消除 Docker/Podman 沙箱并行启动时的容器名冲突竞态，为并发工具调用场景奠定可靠基础 | [#964](https://github.com/moltis-org/moltis/issues/964) |
| [#961](https://github.com/moltis-org/moltis/pull/961) `fix(providers): replay DeepSeek reasoning content` | penso | **AI 提供商兼容性**：修复 DeepSeek V4 思维链模式的 `reasoning_content` 回传要求，保障推理模型会话连续性 | [#959](https://github.com/moltis-org/moltis/issues/959) |
| [#970](https://github.com/moltis-org/moltis/pull/970) `fix(auth): respect X-Forwarded-Proto for cookie Secure attribute` | penso | **部署灵活性提升**：支持反向代理后 HTTP 场景（如 Docker 内网/LAN），消除登录失败 | [#968](https://github.com/moltis-org/moltis/issues/968) |
| [#974](https://github.com/moltis-org/moltis/pull/974) `Auto-unseal vault from recovery key at startup` | penso | **运维自动化**：无人值守 Vault 自动解封，降低密钥管理运维负担 | — |
| [#957](https://github.com/moltis-org/moltis/pull/957) `fix(matrix): add debug logging for OIDC registration and deduplicate redirect normalization` | penso | **可观测性增强**：Matrix OIDC 调试日志 + 代码去重 | [#872](https://github.com/moltis-org/moltis/discussions/872) |
| [#962](https://github.com/moltis-org/moltis/pull/962) `Update local TTS provider docs` | penso | **文档准确性**：替换废弃 Coqui TTS 链接至活跃 fork（idiap/coqui-ai-TTS），更新 Piper 语音资源 | [#958](https://github.com/moltis-org/moltis/issues/958) |
| [#358](https://github.com/moltis-org/moltis/pull/358) `fix(providers): route Copilot enterprise tokens via proxy endpoint` | lijunle | **企业级支持**：修复 GitHub Copilot Enterprise 的 HTTP 421 错误 | — |
| [#975](https://github.com/moltis-org/moltis/pull/975) `chore(deps): bump openssl 0.10.78 → 0.10.79` | dependabot[bot] | **安全更新**：OpenSSL 依赖补丁升级 | — |
| [#967](https://github.com/moltis-org/moltis/pull/967) `chore(deps): bump gix 0.78.0 → 0.83.0` | dependabot[bot] | **依赖维护**：Git 操作库重大版本升级 | — |

**整体推进评估**：今日修复覆盖 **沙箱引擎并发安全**、**主流推理模型兼容**、**企业身份认证**、**私有化部署体验** 四大支柱，项目成熟度显著提升。

---

## 4. 社区热点

### 🔥 架构级提案：跨实例代理互操作协议
- **[#973](https://github.com/moltis-org/moltis/issues/973)** `Proposal: Onboarding + Identity protocols for interoperable personal agent servers`
  - **作者**: vystartasv | **状态**: OPEN | **👍**: 0（但战略价值极高）
  - **核心诉求**：Moltis 作为"安全、沙箱化、本地优先"的个人代理服务器，缺乏**代理间发现、身份验证、能力交换**的标准协议。提案基于 **Ed25519 密钥对** 构建去中心化信任层（L1 入驻协议 + L2 身份协议）。
  - **配套 PR**: [#976](https://github.com/moltis-org/moltis/pull/976) 已提交文档集成指南
  - **分析**：这是 Moltis 从**单节点智能体**向**联邦式多智能体网络**跃迁的关键信号，直接对标 AutoGPT、LangChain 等项目的多代理编排能力，但强调**去中心化身份**差异化。

### 次热点：Docker 沙箱兼容性
- **[#977](https://github.com/moltis-org/moltis/issues/977)** `Browser sandbox fails when Moltis runs in Docker`
  - **状态**: OPEN（今日新建，尚无评论）
  - **场景**: Proxmox LXC → Docker → Moltis 嵌套容器环境，浏览器沙箱创建 `/data/browser` 失败
  - **诉求**：需要支持 **Docker-in-LXC-in-Docker** 复杂嵌套场景的沙箱降级或替代后端

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#977](https://github.com/moltis-org/moltis/issues/977) | Docker 内浏览器沙箱完全失效（嵌套容器 `/data/browser` 创建失败） | **无** | ⚠️ 待处理 |
| 🟡 **中** | [#959](https://github.com/moltis-org/moltis/issues/959) | DeepSeek 推理内容未回传导致 API 错误 | [#961](https://github.com/moltis-org/moltis/pull/961) | ✅ 已修复 |
| 🟡 **中** | [#964](https://github.com/moltis-org/moltis/issues/964) | 并行工具执行 Docker 沙箱名称冲突 | [#971](https://github.com/moltis-org/moltis/pull/971) | ✅ 已修复 |
| 🟡 **中** | [#968](https://github.com/moltis-org/moltis/issues/968) | 反向代理后 HTTP 场景登录失败（Cookie Secure 属性） | [#970](https://github.com/moltis-org/moltis/pull/970) | ✅ 已修复 |
| 🟢 **低** | [#958](https://github.com/moltis-org/moltis/issues/958) | TTS 文档指向废弃仓库 | [#962](https://github.com/moltis-org/moltis/pull/962) | ✅ 已修复 |

**稳定性健康度**：遗留 Bug 闭环率 **100%**（4/4），但新增 **#977** 揭示 Docker 嵌套场景覆盖不足，需关注 [#942](https://github.com/moltis-org/moltis/pull/942) 远程沙箱后端（Vercel/Daytona/Firecracker）能否提供替代路径。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| [#973](https://github.com/moltis-org/moltis/issues/973) + [#976](https://github.com/moltis-org/moltis/pull/976) | 代理间身份与入驻协议（L1/L2） | **高** — 文档 PR 已就绪，架构契合"个人 AI 服务器"定位，可能进入 v0.x 或 v1.0 路线图 |
| [#942](https://github.com/moltis-org/moltis/pull/942) | 远程/多后端沙箱（Vercel, Daytona, Firecracker） | **中高** — 解决 Docker-in-Docker 禁用的云部署痛点，与 #977 场景互补，待合并（4/30 创建，持续更新） |

**路线图信号**：项目正从"功能完备的单机代理"转向**可互操作、可云原生部署的代理基础设施**，身份协议 + 远程沙箱构成下一代核心能力。

---

## 7. 用户反馈摘要

### 痛点
- **部署复杂度**："Docker 里跑 Moltis，浏览器沙箱又失败"（#977）—— 嵌套容器场景的用户体验断层
- **文档维护滞后**：TTS 文档指向 archived 仓库（#958），反映第三方集成文档的可持续追踪机制缺失
- **企业身份边缘情况**：Copilot Enterprise 代理路由（#358）、反向代理 Cookie 安全（#970）均属于"非标准部署路径"的摩擦

### 满意点
- **修复响应速度**：DeepSeek 推理问题（#959）4 日内闭环，登录问题（#968）当日修复
- **沙箱可靠性**：并发容器冲突（#964）获得根本解决，而非仅缓解

### 使用场景洞察
- **Proxmox/LXC/嵌套 Docker**：家庭实验室/自托管用户的主流架构（#977）
- **局域网 HTTP 代理**：非 TLS 内网部署需求明确（#970）
- **推理模型工作流**：DeepSeek 思维链用户已构成显著群体（#959）

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#942](https://github.com/moltis-org/moltis/pull/942) `feat(sandbox): remote & multi-backend sandbox support` | 2026-04-30 | 2026-05-06 | **7天待合并**，是解决 #977 及云部署限制的战略 PR，需维护者 review 优先级 |
| [#977](https://github.com/moltis-org/moltis/issues/977) Docker 浏览器沙箱失败 | 2026-05-06 | 2026-05-06 | **新建无响应**，与 #942 能力直接相关，建议关联处理 |

---

*日报基于 GitHub 公开数据生成 | 项目地址: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-07

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24小时内产生 **41 条 Issues 更新**（24 新开/活跃，17 关闭）与 **26 条 PR 更新**（12 待合并，14 已合并/关闭），并发布 **v1.1.5.post2** 热修复版本。社区聚焦三大主题：**安全漏洞紧急修复**（Windows 任意文件遍历）、**长对话稳定性优化**（上下文压缩失效、输入卡顿），以及**企业级部署体验**（模型配置流程简化、自定义存储路径）。首次贡献者参与积极，4 个 PR 带有 `first-time-contributor` 标签，项目健康度良好，但需关注 12 个待合并 PR 的评审积压。

---

## 2. 版本发布

### [v1.1.5.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5.post2)

| 属性 | 详情 |
|:---|:---|
| **发布类型** | 热修复版本（post-release） |
| **核心变更** | 3 项：文档同步、异步会话标题生成、消息处理修复 |

**更新内容：**
- **docs(website)**: 文档同步至 v1.1.5 — [PR #4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) by @xieyxclack
- **feat(chat)**: LLM 异步生成会话标题 — [PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) by @ekzhu（降低 UI 阻塞）
- **fix(message_processing)**: 消息处理返回值修复 — 解决潜在的空引用问题

**迁移注意事项：** 无破坏性变更，建议所有 v1.1.5 用户平滑升级。异步标题生成可能轻微改变会话创建时的时序行为，自定义前端需注意。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（14 项中的核心项）

| PR | 作者 | 影响 | 状态 |
|:---|:---|:---|:---|
| [#4071](https://github.com/agentscope-ai/QwenPaw/pull/4071) `chore(version): bumping version to 1.1.5p2` | @xieyxclack | 版本发布基础设施 | ✅ 已合并 |
| [#4053](https://github.com/agentscope-ai/QwenPaw/pull/4053) `feat(skill): Add skill install/uninstall cli` | @Leirunlin | **关闭 Issue #2384** — 终结"技能安装 CLI 缺失"的长期诉求 | ✅ 已关闭 |
| [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) `docs(faq): WSL2 APITimeoutError` | @hllqkb | **关闭 Issue #3041** — 填补 Windows/WSL2 部署文档空白 | ✅ 已关闭 |
| [#4014](https://github.com/agentscope-ai/QwenPaw/pull/4014) `fix(approval): /approve shorthand ignores request_id` | @xieyxclack | 修复审批命令严重 bug：`/approve <id>` 实际总是批准队列头部 | ✅ 已合并 |
| [#4016](https://github.com/agentscope-ai/QwenPaw/pull/4016) `fix(skill): resilient loading for migrated/malformed skill entries` | @Leirunlin | 技能迁移鲁棒性：避免遗留垃圾数据导致崩溃 | ✅ 已关闭 |
| [#4039](https://github.com/agentscope-ai/QwenPaw/pull/4039) `fix(channel): telegram network retry` | @Leirunlin | Telegram 通道网络故障显式处理，区分轮询错误与冲突 | ✅ 已关闭 |
| [#4048](https://github.com/agentscope-ai/QwenPaw/pull/4048) `fix(utils): remove redundant codes` | @qbc2016 | 代码清理：`download_file_from_url` 去重 | ✅ 已关闭 |
| [#4061](https://github.com/agentscope-ai/QwenPaw/pull/4061) `fix(mcp): use sse_read_timeout as execution_timeout` | @qbc2016 | MCP 工具执行超时逻辑修正（避免将 HTTP 连接超时误作执行超时） | ✅ 已合并 |

**里程碑意义：** [#4053](https://github.com/agentscope-ai/QwenPaw/pull/4053) 终结了自 2026-03-27 提出的 [Issue #2384](https://github.com/agentscope-ai/QwenPaw/issues/2384)（"增加 CLI 用于 bot 安装 skills"），标志着技能管理从纯 GUI 走向 CLI/GUI 双轨，对自动化部署场景至关重要。

---

## 4. 社区热点

### 🔥 讨论最激烈的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) **Windows 服务器任意文件遍历漏洞** | **17** | 安全红线：v1.1.5 存在路径遍历，需紧急修复 | ✅ 已关闭 |
| 2 | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) **输入框卡顿非常严重** | 6 | 前端性能：长会话/大数据量时输入响应延迟 | ✅ 已关闭 |
| 3 | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) **对话过长后无法正常回复** | 4 | **上下文压缩 (`/compact`) 失效**：即使压缩仍须开新对话 | 🔴 开放 |
| 4 | [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) **添加模型步骤过多、点击繁琐** | 3 | 用户体验：Settings → Models → Provider → API Key → Save → Models → Add Model 的六步流程 | 🔴 开放 |
| 5 | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) **HEARTBEAT.md 导致网络断开后无法自动重连** | 3 | 可靠性：心跳机制与网络恢复逻辑冲突 | ✅ 已关闭 |

**深层分析：** 
- **#3955 的 17 条评论**反映安全漏洞的社区关注度极高，虽标记关闭但需确认是否已发布 CVE 或安全公告；
- **#4059 与 #4023 形成关联**：两者均指向"长会话状态管理"架构缺陷 —— `/compact` 未真正释放上下文窗口，前端虚拟列表渲染未优化；
- **#4036** 揭示企业用户痛点：多模型切换场景下，配置流程的摩擦成本直接阻碍试用意愿。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 修复状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-紧急** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Windows 任意文件遍历漏洞（安全） | ✅ 已关闭，需确认补丁范围 | 所有 Windows 服务端部署 |
| 🔴 **P0-严重** | [#4066](https://github.com/agentscope-ai/QwenPaw/issues/4066) | Tool call parser 误拦截代码块内的 `[FunctionName]` 模式 | 🟡 无 PR | 所有使用 markdown 输出的技能/工具 |
| 🟡 **P1-高** | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) | 长对话 `/compact` 后仍无法回复，必须新开对话 | 🟡 无 PR | 长任务场景（客服、数据分析） |
| 🟡 **P1-高** | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | 输入框严重卡顿 | ✅ 已关闭 | 前端性能敏感用户 |
| 🟡 **P1-高** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT.md 导致网络断开后无法自动重连 | ✅ 已关闭 | 使用心跳监控的生产环境 |
| 🟡 **P1-高** | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | DingTalk Channel 事件循环生命周期竞态条件 | 🟡 无 PR | macOS + DingTalk 流模式 |
| 🟢 **P2-中** | [#4049](https://github.com/agentscope-ai/QwenPaw/issues/4049) | `llama.cpp server exited before becoming ready` 启动失败 | 🟡 无 PR | 本地模型 QwenPaw-Flash-9B-Q4_K_M |
| 🟢 **P2-中** | [#4072](https://github.com/agentscope-ai/QwenPaw/issues/4072) | 无法输入 Qwen 企业级 key | 🟡 无 PR | 企业版用户 |
| 🟢 **P2-中** | [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) | DeepSeek `reasoning_content` 多轮对话未回传致 HTTP 500 | 🟡 无 PR | DeepSeek 推理模型用户 |

**关键信号：** [#4066](https://github.com/agentscope-ai/QwenPaw/issues/4066) 的 parser 误拦截是**潜在回归风险** —— 若修复不当可能破坏现有工具调用协议，建议优先评审相关 PR。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) 简化模型添加流程 | 一键配置、减少点击 | 高用户呼声，UI 改造明确 | **75%** |
| [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) 自定义 Workspace 存储路径 | 脱离硬编码 `C:\Users\$USER\.copaw` | 企业部署刚需，改动边界清晰 | **70%** |
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) 一次性定时任务 `--at <datetime>` | DateTrigger 支持 | 已有 cron 基础设施，扩展成本低 | **65%** |
| [#4045](https://github.com/agentscope-ai/QwenPaw/issues/4045) `execute_shell_command` 自适应同步/异步 | 智能选择执行模式 | 需运行时 profiling，复杂度中等 | **50%** |
| [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) 语义化技能路由（50+ 技能池） | 向量检索替代全量注入 | 架构级改动，与 MCP 生态相关 | **40%** |
| [#4078](https://github.com/agentscope-ai/QwenPaw/issues/4078) 技能选择器交互式下拉 UI | `/` 触发下拉而非纯文本列表 | 前端体验优化，实现简单 | **80%** |
| [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) 【WIP】飞书用户显示名透传至 Agent | PR 已存在，WIP 状态 | 通道层改动，需测试覆盖 | **60%** |

**路线图推断：** v1.2.0 可能聚焦**企业就绪性**（自定义路径、企业 key 支持、简化配置）与**交互体验**（下拉 UI、输入优化），而**语义路由**更可能纳入 v1.3+ 的架构重构。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 反馈源 | 痛点 | 场景 |
|:---|:---|:---|
| [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) | "对话太长后只能开新对话，/compact 没用" | **长任务连续性**：用户在同一任务中积累多轮对话后，系统强制中断，破坏工作流 |
| [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | "输入框卡得非常厉害" | **实时交互**：前端渲染阻塞导致输入反馈延迟，感知质量崩塌 |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | "Adding a model requires too many steps and clicks" | **首次配置**：新用户试用阶段的高流失风险 |
| [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) | "All data is hardcoded to C:\Users\$USER\.copaw" | **企业合规**：IT 策略要求数据存于指定盘符/网络存储 |

### 😊 满意信号

- [#4053](https://github.com/agentscope-ai/QwenPaw/pull/4053) 技能 CLI 的合并直接回应了 [Issue #2384](https://github.com/agentscope-ai/QwenPaw/issues/2384) 的诉求（"bot 安装 skills 经常性放错目录"），自动化部署用户获得明确收益；
- [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) 巴西葡萄牙语本地化显示国际化社区的健康扩展。

### 💡 隐含需求

- **#3891** 用户实测 DeepSeek 前缀缓存命中率"仅 95%"，对 5% 的 miss 敏感 —— 反映**成本优化意识觉醒**，用户开始用计费指标评估框架效率；
- **#4042** DingTalk 事件循环问题 —— 企业通道的**可靠性 SLA 诉求**（"final result notification fails" 意味着业务流程中断）。

---

## 8. 待处理积压

### ⚠️ 需维护者优先关注的长期/高价值项

| 类型 | 链接 | 描述 | 静默天数 | 风险 |
|:---|:---|:---|:---:|:---|
| 🔴 Issue | [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) | DeepSeek 前缀缓存命中率优化（95% → 目标 99%+） | **10 天** | 成本敏感用户可能转向竞品 |
| 🔴 Issue | [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) | 语义化技能路由（50+ 技能池上下文溢出） | **29 天** | MCP 生态扩展后的架构瓶颈 |
| 🟡 PR | [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) | 日志轮转 RotatingFileHandler（Windows/Linux 当前无限增长） | **1 天** | 磁盘耗尽风险，首次贡献者待评审 |
| 🟡 PR | [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064) | AgentConfigWatcher 优雅重载（修复 DingTalk 飞行任务丢失） | **1 天** | 生产环境通道稳定性，需架构评审 |
| 🟡 PR | [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | Windows 系统托盘启动（独立入口） | **2 天** | 用户体验提升，Win32 限定需测试 |
| 🟡 PR | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | Whisper 替代 Web Speech API（支持豆包浏览器等） | **18 天** | 浏览器兼容性，评审周期过长 |

**行动建议：** 
1. **#3891** 建议由核心维护者回应技术可行性，或标记 `help wanted` 吸引优化型贡献者；
2. **#4076** 日志轮转属于低风险高价值合并，建议快速通道评审；
3. **#4064** 涉及通道生命周期管理，建议 @Leirunlin（已熟悉通道代码）参与评审。

---

*本日报基于 GitHub 公开数据生成，项目链接：https://github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-07

> **项目**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
> **日期**: 2026-05-07  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

ZeroClaw 今日呈现**极高活跃度**，24 小时内 50 条 Issues 更新（90% 为新增/活跃，仅 10% 关闭）与 50 条 PR 更新（76% 待合并）显示社区处于**密集开发期**。核心信号：v0.7.5 里程碑推进中，WhatsApp 通道因 4 月服务端协议升级出现 S1 级故障，同时项目正大规模扩张模型提供商生态（单日新增 8 家）。v0.8.0 集成分支已启动重大配置重构，整体健康度良好但需关注高优先级 Bug 的修复节奏。

---

## 2. 版本发布

**无新版本发布。**

当前聚焦 [v0.7.5 里程碑](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)（自动化发布管线主题）与 [v0.8.0 集成分支](https://github.com/zeroclaw-labs/zeroclaw/pull/6403)（配置系统重构）。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) | theonlyhennygod | **修复 WhatsApp 自消息泄漏**：在个人模式下丢弃 `is_from_me=true` 的非自聊天事件，防止代理将用户自己发出的消息误判为输入提示 | [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) |
| [#6369](https://github.com/zeroclaw-labs/zeroclaw/pull/6369) | ilteoood | **修复 Web 仪表盘工具按钮高度**：CSS 单类修复，确保悬停背景覆盖完整按钮区域 | [#6368](https://github.com/zeroclaw-labs/zeroclaw/issues/6368) |

### 里程碑推进

- **[#6151](https://github.com/zeroclaw-labs/zeroclaw/issues/6151) Web 交互平台** 已关闭：网关 Web 仪表盘的 onboarding、稳定性与聊天 UX 追踪完成，标志着 Web UI 正式成为"一等交互界面"

**整体评估**：今日关闭量偏低（5 Issues / 12 PRs），但质量聚焦——安全修复（WhatsApp 隐私泄漏）与 UI 打磨并进，v0.8.0 的配置重构 PR #6403 处于"待集成"状态，预示架构级升级临近。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#5878 v0.7.5 里程碑追踪](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | 8 条 | **发布工程化诉求**：社区强烈要求淘汰手动版本 bump 和临时发布流程，建立"有意图且自动化"的发布管线。这是基础设施成熟度的标志性议题 |
| 🥈 | [#6246 WhatsApp Web 协议升级故障](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | 4 条 | **生产阻断焦虑**：4 月 24 日 WhatsApp 服务端协议升级导致消息流完全中断，用户急需官方适配。依赖库 `wa-rs` 的更新状态成为关键变量 |
| 🥉 | [#6413 WhatsApp 自消息泄漏](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) | 2 条 | **隐私安全警觉**：个人模式下代理处理自己发出的消息，存在信息泄露与循环响应风险，已快速修复关闭 |

### 背后诉求分析

- **通道稳定性 > 新功能**：WhatsApp 连续出现 S1 级 Bug（协议升级、自消息泄漏），反映 Web 通道依赖第三方协议逆向的脆弱性
- **运营规模化**：v0.7.5 的自动化发布诉求暗示项目用户/部署实例已达"手动流程不可持续"的临界点

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | 🔴 OPEN | `WorkspaceManager` 启动时未加载 profiles，导致 `WorkspaceTool` 初始化失败（Windows 环境） | 无 |
| **S1 - 工作流阻断** | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | 🔴 OPEN | WhatsApp Web 通道：4 月协议升级后消息完全停止收发 | 无 |
| **S1 - 工作流阻断** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | 🔴 OPEN | `autonomy = "full"` 时 shell 工具调用被拒绝，`tool_dispatch` 无法到达 runtime | 无 |
| **S1 - 工作流阻断** | [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) | 🔴 OPEN | Matrix 通道与心跳机制冲突：daemon 仅接受 4 种心跳目标通道，Matrix 被排除 | 无 |
| **S1 - 工作流阻断** | [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) | 🔴 OPEN | **P0 阻断器**：多别名通道实例互相覆盖，Matrix 共享 `state_dir` 损坏会话，多代理分发使用单一 `ChannelRuntimeContext` | 无 |
| **S2 - 性能降级** | [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | 🔴 OPEN | Gateway 无法使用 PostgreSQL：`Cannot start a runtime from within a runtime` 恐慌 | 无 |
| **S2 - 性能降级** | [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | 🔴 OPEN | SQLite 内存模式并发启动时 schema 初始化失败（重复列错误） | 无 |
| **S2 - 性能降级** | [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | 🔴 OPEN | 单用户请求触发 LLM 重复调用两次（Slack + omlx/vllm 配置） | 无 |

### 已修复

| Issue | 修复 PR | 说明 |
|:---|:---|:---|
| [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) | [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) | WhatsApp 自消息过滤 |
| [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) | 标记 duplicate | 回退提供商凭证继承问题（重复报告） |

**风险评估**：**极高**。S0 级数据丢失 Bug #6419 与 P0 阻断器 #6487（多代理通道隔离完全失效）尚无修复方案，且 #6487 涉及架构级缺陷（orchestrator 状态共享模型），预计需要较大重构而非快速补丁。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或 in-progress）

| 功能 | Issue/PR | 状态 | 版本信号 |
|:---|:---|:---|:---|
| **8 家新模型提供商** | [#6455](https://github.com/zeroclaw-labs/zeroclaw/issues/6455)-[#6458](https://github.com/zeroclaw-labs/zeroclaw/issues/6458), [#6439](https://github.com/zeroclaw-labs/zeroclaw/issues/6439), [#6440](https://github.com/zeroclaw-labs/zeroclaw/pull/6440), [#6445](https://github.com/zeroclaw-labs/zeroclaw/pull/6445), [#6459](https://github.com/zeroclaw-labs/zeroclaw/pull/6459)-[#6463](https://github.com/zeroclaw-labs/zeroclaw/pull/6463) | PR 已开 | **v0.7.5 或 v0.8.0**：Featherless AI、Arcee AI、Lambda AI、Inception Labs、Morph、GitHub Models、Upstage Solar 等，OpenAI-compatible 标准化接入 |
| **4 个新通信通道** | [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) Mastodon, [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435) Rocket.Chat, [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) Zulip, [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) Twilio SMS | in-progress | **v0.7.5/early v0.8**：去中心化/自托管通信栈扩张 |
| **Twitch 通道** | [#6446](https://github.com/zeroclaw-labs/zeroclaw/pull/6446) | PR 已开 | 快速跟进，基于现有 IRC 通道薄封装 |
| **Lemmy 通道** | [#6442](https://github.com/zeroclaw-labs/zeroclaw/pull/6442) | PR 已开 | 联邦宇宙（Fediverse）生态补全 |
| **仪表盘自更新** | [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) → [#6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) | PR 已开 | 降低 CLI 依赖的关键 UX 改进 |
| **节点健康仪表盘** | [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) → [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | PR 已开 | 多实例/集群运营基础设施 |
| **配置系统重构** | [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) → [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) |  targeting v0.8.0 | **v0.8.0 核心**：typed-family 拆分、死字段删除、限定命名 |

### 路线图级方向（长期）

| 议题 | Issue | 分析 |
|:---|:---|:---|
| **"万物皆插件"架构** | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | 将 Integrations（通道+提供商+工具）与 Plugins（WASM 模块）统一为单一插件目录，预示 Extism WASM 运行时可能成为核心扩展机制 |
| **llama.cpp 独立提供商** | [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | 从通用 OpenAI-compatible 中剥离，专用 `/v1/responses` 路由，为本地模型优化铺路 |
| **OpenAI Responses API 原生工具调用** | [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) | Codex 工作流的模型能力对齐 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"我发了消息，代理却把自己刚回的消息又当输入处理"** | [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) | WhatsApp 多设备同步导致事件流污染，代理缺乏"自我识别" |
| **"配对了但消息就是不流动，完全静默"** | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | 第三方协议升级后零可见性，无降级或诊断机制 |
| **"autonomy=full 却连 ls 都执行不了"** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | 权限系统的"全开放"配置存在隐性拦截层，配置心智模型不一致 |
| **"一个请求被 LLM 处理两次，账单翻倍"** | [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | Slack + 本地 LLM 组合下的重复调用，成本敏感用户警觉 |
| **"并发启动就崩溃，说列已存在"** | [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | SQLite 内存模式的并发安全缺失，容器/K8s 场景高频触发 |

### 积极信号

- **文档诉求明确**：[#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) 用户主动寻求技能（skills）开发指南，说明自定义扩展意愿强烈
- **配置验证需求**：[#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) 希望 `zeroclaw onboard` 提前发现配置-提供商不兼容，反映" fail fast" 运营文化

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue | 年龄 | 风险 | 提醒 |
|:---|:---|:---|:---|
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) v0.7.5 里程碑 | 19 天 | 发布阻塞 | 8 条评论无最终决策，自动化发布管线设计需 owner 拍板 |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) WhatsApp 协议升级 | 7 天 | S1 生产阻断 | 4 条评论集中在依赖库状态询问，需官方确认 `wa-rs` 升级路径或临时 workaround |
| [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) P0 多代理通道隔离 | 1 天 | **架构缺陷** | 零评论，新上报但严重度最高，需架构 review 分配资源 |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) Shell 工具 autonomy 拦截 | 1 天 | S1 配置失效 | 权限系统的配置-执行路径存在断层，需 runtime 团队介入 |

### PR 队列压力

- **38 个待合并 PR** 中，[#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403)（v0.8.0 配置重构，XL 规模，高风险）明确标注 **"DO NOT MERGE TO MASTER YET"**，需协调集成节奏
- 提供商扩张 PR 集群（#6440-#6463）共 8 个，模式高度重复，可考虑批量 review 或自动化测试模板降低维护负担

---

> **明日关注**：v0.7.5 里程碑决策进展、#6487 P0 阻断器的修复方案、WhatsApp 协议升级官方回应。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*