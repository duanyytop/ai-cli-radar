# OpenClaw 生态日报 2026-05-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-06 00:19 UTC

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

# OpenClaw 项目动态日报 | 2026-05-06

## 1. 今日速览

OpenClaw 今日保持极高活跃度，24小时内 **500 条 Issues 更新**（326 活跃/新开，174 关闭）与 **500 条 PR 更新**（357 待合并，143 已合并/关闭），社区动能强劲。项目刚发布 **v2026.5.4 稳定版** 及两个 beta 版本，核心聚焦于 Google Meet/Voice Call 的实时语音桥接优化。值得关注的是，今日新增多个高优先级回归 Bug，涉及 Discord 网关挂起、Control UI 消息消失、WeChat 插件崩溃等，稳定性压力显著；同时社区对 Linux/Windows 桌面端、安全沙箱、预构建 APK 等跨平台需求持续高涨，长期 Issue #75 已积累 104 条评论，成为最大未决诉求之一。

---

## 2. 版本发布

### [v2026.5.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4)（稳定版）
| 属性 | 详情 |
|:---|:---|
| 发布时间 | 2026-05-05 至 2026-05-06 |
| 前置版本 | v2026.5.4-beta.3, v2026.5.4-beta.2 |

**核心更新：Google Meet/Voice Call 实时语音桥接重构**
- **Twilio dial-in 集成 Gemini 实时语音桥**：替代传统 TwiML fallback，实现低延迟双向语音
- **技术细节**：paced audio streaming（步进式音频流）、backpressure-aware buffering（背压感知缓冲）、barge-in queue clearing（打断队列清理）
- **用户体验**：Meet 参与者获得显著更快的操作响应（"much snappier Op"）

**迁移注意事项**：WeChat 插件用户需警惕——[Issue #77779](https://github.com/openclaw/openclaw/issues/77779) 报告升级至 2026.5.4 后 `@tencent-weixin/openclaw-weixin` v2.4.1 因 `api.runtime undefined` 进入崩溃循环，暂无官方修复。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#77205](https://github.com/openclaw/openclaw/pull/77205) | [steipete](https://github.com/steipete) | **跨渠道消息生命周期重构**：将 20+ 渠道（Discord/Slack/Telegram/微信等）的最终回复、工具消息、实时预览、回执统一迁移至 `openclaw/plugin-sdk/channel-message`，核心层接管共享生命周期 | 🔥 **待合并**（XL 级） |
| [#78065](https://github.com/openclaw/openclaw/pull/78065) | [vincentkoc](https://github.com/vincentkoc) | 修复 `openclaw update` 后官方插件版本阴影问题：同步官方插件安装状态，防止旧版本插件覆盖新版本核心功能 | 待合并 |
| [#77731](https://github.com/openclaw/openclaw/pull/77731) | [vincentkoc](https://github.com/vincentkoc) | **`openclaw doctor` 修复遗留 Codex 路由配置**：自动检测并修复 `openai-codex/*` 过时引用，解决会话钉住导致的配置死锁 | 待合并 |
| [#77880](https://github.com/openclaw/openclaw/pull/77880) | [BunsDev](https://github.com/BunsDev) | 新增 `openclaw sessions cleanup --fix-dm-scope`：清理 `dmScope` 切回 `main` 后遗留的孤立私信会话行 | 待合并 |
| [#77018](https://github.com/openclaw/openclaw/pull/77018) | [jesse-merhi](https://github.com/jesse-merhi) | **代理绕过精细化**：引入 `proxy.loopbackMode`（gateway-only/proxy/block），避免临时 NO_PROXY 环境变量污染 | 待合并 |
| [#75035](https://github.com/openclaw/openclaw/pull/75035) | [jesse-merhi](https://github.com/jesse-merhi) | **用户输入拦截生命周期门控**：`before_agent_run` 钩子，支持对话访问权限显式授权，拦截时仅保留脱敏用户转录摘要 | 待合并 |
| [#75722](https://github.com/openclaw/openclaw/pull/75722) | [eleqtrizit](https://github.com/eleqtrizit) | **Memory Wiki 会话可见性强制**：共享记忆查询对齐代理调用会话策略，防止跨会话数据泄漏 | ✅ 已合并 |

**整体推进评估**：基础设施层面（消息生命周期、代理策略、会话清理）取得结构性进展，但渠道稳定性修复（QQBot、Feishu、WeChat）仍分散于多个独立 PR，缺乏统一回归测试。

---

## 4. 社区热点

### 评论最多 Issues（诉求分析）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **Linux/Windows Clawdbot Apps** | 104 | 74 | 跨平台桌面端缺失，macOS/iOS/Android 已覆盖，开发者强烈需要 Linux/Windows 同等功能集 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **Text between tool calls leaks to messaging channels** | 25 | 0 | 代理内部处理文本（错误处理、执行确认）错误路由至用户可见消息，严重 UX 缺陷 | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 3 | **Prebuilt Android APK releases** | 24 | 1 | 降低 Android 入门门槛，当前需自行编译 `apps/android` | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 4 | **Track live dev agent behavior and trajectory** | 22 | 1 | 维护者 [pashpashpash](https://github.com/pashpashpash) 的 24 小时代理行为观测实验，探索自治代理边界 | [#77598](https://github.com/openclaw/openclaw/issues/77598) |
| 5 | **`memoryFlush` does not fire reliably** | 19 | 0 | 自动压缩周期中的去重逻辑缺陷，导致隔次触发 | [#12590](https://github.com/openclaw/openclaw/issues/12590) |

**诉求洞察**：社区呈现"平台扩张"（桌面端/APK）与"生产就绪"（消息泄漏、内存刷新可靠性）双线焦虑。Issue #75 自 2026-01-01 创建以来持续发酵，已成为项目生态完整性的标志性缺口；Issue #25592 揭示的"内部状态外泄"问题直指多轮对话架构的根本缺陷。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 类型 | 影响范围 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-回归** | **Discord gateway hang at 'awaiting gateway readiness'** | 无限挂起，无超时/错误事件 | macOS 用户，Carbon Client 生命周期缺陷，6 个重复 Issue 已关闭 | [PR #77067](https://github.com/openclaw/openclaw/pull/77067)（QQBot 类似修复，非直接对应） | [#77668](https://github.com/openclaw/openclaw/issues/77668) |
| 🔴 **P0-回归** | **Assistant messages disappear from Control UI** | 高严重 UX 破坏，每轮用户消息后前序助手消息静默消失 | WebChat/Control UI 用户 | 无直接 PR | [#77374](https://github.com/openclaw/openclaw/issues/77374) |
| 🔴 **P0-回归** | **WeChat plugin fails to start — `api.runtime undefined`** | 升级 2026.5.4 后插件崩溃循环（10s 自动重启） | WeChat 渠道用户 | 无 PR，beta blocker 标记为 No | [#77779](https://github.com/openclaw/openclaw/issues/77779) |
| 🟡 **P1-回归** | **Feishu channel crashes after 2026.5.2** | `appId`/`appSecret` 字段不兼容，网关崩溃循环 | 飞书企业用户 | 无直接 PR | [#77116](https://github.com/openclaw/openclaw/issues/77116) |
| 🟡 **P1-回归** | **`reasoning_content` in conversation history causes oMLX JSON parse error** | Qwen 3.5 推理内容污染后续请求体 | oMLX + Qwen 3.5 用户 | 无 PR | [#46637](https://github.com/openclaw/openclaw/issues/46637) |
| 🟡 **P1** | **High CPU/load average during Codex runtime tasks** | 小规格 Linux 主机上 Codex 运行时 CPU 飙高，hook relay 与 session/history 工作放大 | 资源受限部署 | 无 PR | [#76552](https://github.com/openclaw/openclaw/issues/76552) |
| 🟡 **P1** | **Sandbox file-tool edits rewrite workspace files to 0600** | Docker 沙箱内编辑导致宿主机文件权限破坏，`EACCES` 失败 | WSL/Docker 用户 | ✅ [PR #44077](https://github.com/openclaw/openclaw/issues/44077) 已关闭 | [#44077](https://github.com/openclaw/openclaw/issues/44077) |
| 🟢 **P2** | **Telegram Forum Topic Delivery Silently Fails** | 论坛主题回复静默丢弃，无 `sendMessage` API 调用 | Telegram 论坛用户 | ✅ 已关闭 | [#77248](https://github.com/openclaw/openclaw/issues/77248) |

**稳定性评估**：今日回归 Bug 密度异常高，且多个涉及"升级后崩溃"（WeChat、Feishu、Discord），暗示 2026.5.x 系列的渠道兼容性测试存在系统性缺口。Control UI 消息消失（#77374）与 WeChat 运行时未定义（#77779）尚无修复 PR，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 社区强度 | 纳入可能性信号 | 链接 |
|:---|:---|:---:|:---|:---|
| **Denylist for exec-approvals** | "允许全部除 X" 策略，补全现有白名单 | 👍 7 | 高——安全刚需，PR [#75143](https://github.com/openclaw/openclaw/pull/75143) 已推进 allowlist 参数模式强化 | [#6615](https://github.com/openclaw/openclaw/issues/6615) |
| **OpenClaw Security Profile v1.1** | 数据为中心的安全模型：硬编码规则替代 LLM 判断，防钱包盗窃/DB 擦除/插件滥用 | 👍 3 | 中高——[Ar3ss12](https://github.com/Ar3ss12) 提出完整框架，但需架构委员会评审 | [#8719](https://github.com/openclaw/openclaw/issues/8719) |
| **Auto-update with configurable schedule** | 内置自动更新：定时、确认提示、更新后通知 | 👍 0 | 中——基础设施成熟，但需与现有 `update.checkOnStart` 整合 | [#12855](https://github.com/openclaw/openclaw/issues/12855) |
| **Trigger model fallback on context length exceeded** | 上下文超限自动降级至备用模型 | 👍 0 | 中——`agents.defaults.model.fallbacks` 已存在，仅缺触发条件扩展 | [#9986](https://github.com/openclaw/openclaw/issues/9986) |
| **Webhook hook sessions reuse existing session** | `sessionKey` 一致性实现真正的多轮 hook 对话 | 👍 0 | 中高——文档已承诺功能与实际行为不符，属"缺陷型需求" | [#11665](https://github.com/openclaw/openclaw/issues/11665) |
| **Add `openai-codex/gpt-5.2` to xhigh thinking whitelist** | 扩展高思考模式模型列表 | 👍 5 | **高**——单点配置变更，社区呼声明确 | [#6820](https://github.com/openclaw/openclaw/issues/6820) |
| **AllowBots support for Telegram groups** | 多机器人同群交互（Discord/Slack 已有） | 👍 4 | 中——需 Telegram 渠道架构调整 | [#8295](https://github.com/openclaw/openclaw/issues/8295) |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪 |
|:---|:---|:---:|
| **"升级即崩溃"焦虑**：多个用户报告 2026.4.x → 2026.5.x 跨版本升级后渠道插件（WeChat、Feishu、Discord）直接失效，缺乏平滑迁移路径 | #77779, #77116, #77668 | 😤 愤怒 |
| **"黑箱调试"困境**：代理内部文本（工具间处理状态）泄漏至用户消息，开发者无法区分"用户可见输出"与"内部处理日志" | #25592 | 😵‍💫 困惑 |
| **资源敏感部署的 CPU 暴政**：Codex 运行时在小规格 Linux 主机上 CPU 飙高，hook relay 与 session 历史操作形成放大效应 | #76552 | 😰 焦虑 |
| **上下文失明**：代理无上下文窗口使用百分比可见性，导致意外压缩和状态丢失，"像在开没有油表的车" | #2597 | 😤 愤怒 |
| **Discord 图片转录膨胀**：base64 图片直接存入会话记录，~7 张图即触达 200K token 上限 | #1210 | 😩 疲惫 |

### 满意点

- **Google Meet 语音桥优化**（v2026.5.4）获得"snappier"正面评价，实时交互延迟显著改善
- **`openclaw doctor`** 工具持续扩展（PR #77731），降低配置迁移认知负担

---

## 8. 待处理积压

### 长期未决、需维护者介入

| Issue | 创建日期 | 当前状态 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **Linux/Windows Clawdbot Apps** | 2026-01-01 | 104 评论，74 👍，标签 `enhancement, help wanted` | ⚠️ **生态完整性缺口**：开发者群体大量流失至竞品，macOS 独占策略不可持续 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **Context/state lost after unexpected compaction** | 2026-01-27 | 8 评论，核心痛点但讨论稀疏 | 用户体验根基问题，与 #12590 (`memoryFlush` 不可靠) 形成组合风险 | [#2597](https://github.com/openclaw/openclaw/issues/2597) |
| **Images from Discord stored as base64 in session transcripts** | 2026-01-19 | 6 评论，无 👍 | 隐性成本：上下文窗口浪费、存储膨胀、转录可读性破坏 | [#1210](https://github.com/openclaw/openclaw/issues/1210) |
| **Prebuilt Android APK releases** | 2026-02-05 | 24 评论，1 👍 | 移动端入门门槛，与 #75 形成"桌面+移动"双平台缺口 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| **Safe/unsafe ClawdBot** | 2026-02-02 | 12 评论，提议 Rust 重写 | 争议性大（完全重写），但安全沙箱需求真实 | [#6731](https://github.com/openclaw/openclaw/issues/6731) |

**维护者行动建议**：
1. **紧急**：为 #77779（WeChat 崩溃）、#77374（Control UI 消息消失）分配修复 owner，考虑 2026.5.5 热修复
2. **本周**：评估 #75 的 Linux/Windows 桌面端技术方案，发布 RFC 征求社区贡献
3. **本月**：将 #25592（工具间文本泄漏）纳入消息生命周期重构（PR #77205）的后续迭代范围

---

*日报基于 GitHub 公开数据生成，所有链接指向 `github.com/openclaw/openclaw`。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-06

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从演示工具向生产基础设施跃迁"**的关键拐点。头部项目（OpenClaw、ZeroClaw）日均 Issues/PR 双破 50，社区动能强劲，但"升级即崩溃"类回归缺陷密度同步攀升，稳定性债务成为共同瓶颈。多项目同步推进 v2 架构重构（NanoClaw、IronClaw、ZeroClaw），核心矛盾从"功能有无"转向"多平台一致性、会话可靠性、企业级安全"的工程质量竞争。边缘设备（Raspberry Pi、ARM64）与桌面端（Linux/Windows）覆盖成为生态完整性新标尺，而 WhatsApp 等渠道协议变更引发的集中故障暴露出第三方依赖的系统性脆弱性。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 健康度评估 | 核心特征 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (326活跃/174关闭) | 500 (357待合并/143已合并) | **v2026.5.4 稳定版** | ⚠️ **高活跃-高风险** | 社区规模最大，回归缺陷密度异常高，跨平台缺口显著 |
| **NanoBot** | 6 (4活跃/2关闭) | 14 (6待审/8已合并) | 无 | ✅ **高活跃-高质量** | 当日修复率 57%，"当日报告当日修复"响应标杆 |
| **Hermes Agent** | 50 (39新开/11关闭) | 50 (42待合并/8已合并) | 无 | ⚠️ **高活跃-审阅瓶颈** | PR 审阅积压严重，P1 会话管理缺陷集中爆发且无修复 |
| **PicoClaw** | 17 (13活跃/4关闭) | 27 (18待合并/9已合并) | **v0.2.8-nightly** | ✅ **快速迭代期** | 功能密集交付，安全沙箱逃逸新发，IoT/边缘场景扩展 |
| **NanoClaw** | 9 (4活跃/5关闭) | 50 (18待审/32已合并) | 无 | ✅ **稳定性冲刺期** | v2 迁移阻断点消除，新手体验批量优化，合并效率高 |
| **NullClaw** | 1 (1活跃) | 4 (3待合并/1已合并) | 无 | ⚠️ **维护模式** | Windows DNS 阻塞性修复 24h 内响应，但整体动能不足 |
| **IronClaw** | 16 (15活跃/1关闭) | 43 (20待合并/23已合并) | 无 | ⚠️ **架构重构期** | "Reborn"迁移中，5 个 salvage PR 提示主分支漂移严重 |
| **LobsterAI** | 0 | 3 (1待合并/2已合并) | 无 | ⚠️ **低活跃-积压风险** | Electron 崩溃修复 PR 挂起 42 天，数据丢失 P0 未响应 |
| **TinyClaw** | 0 | 0 | 无 | ❌ **休眠状态** | 过去 24h 零活动 |
| **Moltis** | 0 | 1 (1待合并) | 无 | ❌ **极低活跃** | 仅 Dependabot 依赖更新，零人工活动 |
| **CoPaw** | 10 (6活跃/4关闭) | 10 (9待合并/1已合并) | 无 | ⚠️ **高活跃-审阅瓶颈** | 5 个首次贡献者 PR 涌入，但 9/10 待合并，P0 Bug 无响应 |
| **ZeptoClaw** | 0 | 11 (11待合并) | 无 | ⚠️ **维护性运转** | 100% Dependabot PR，零人工功能开发 |
| **ZeroClaw** | 50 (46活跃/4关闭) | 50 (38待合并/12已合并) | 无 | ⚠️ **极高活跃-合并瓶颈** | 4:1 开放/关闭比，WhatsApp 渠道危机，v0.8.0 重构并行 |

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力
- **绝对社区规模第一**：500 Issues/500 PR 的日活是第二名（ZeroClaw、Hermes Agent 的 50 级）的 **10 倍**，形成显著的生态网络效应
- **渠道覆盖最全**：20+ 渠道统一消息生命周期（PR #77205），Discord/Slack/Telegram/微信/飞书/Google Meet 等全矩阵布局

### 技术路线差异
| 维度 | OpenClaw | 同类对比 |
|:---|:---|:---|
| **架构核心** | 插件化渠道 SDK (`openclaw/plugin-sdk/channel-message`) | NanoBot 强调子代理并发控制，IronClaw 推进 TurnCoordinator 协调器 |
| **实时语音** | Google Meet/Voice Call 桥接为差异化亮点（Twilio + Gemini 实时语音） | 其他项目无同等深度集成 |
| **跨平台策略** | **macOS/iOS/Android 优先，Linux/Windows 长期缺位**（Issue #75，104 评论） | PicoClaw 覆盖 ARM64/RPi，NanoClaw 补齐 Windows 托盘，ZeroClaw 推进 macOS Universal Binary |
| **安全模型** | 依赖 LLM 判断的"智能安全"（Issue #8719 批评为"不足够"） | NanoBot 已落地 SSRF 结构化错误、子代理默认并发限制=1；CoPaw 推进非 loopback 绑定拒绝 |

### 相对劣势
- **稳定性债务最重**：同日 3 个 P0 回归（Discord 网关挂起、Control UI 消息消失、WeChat 崩溃），"升级即崩溃"模式损害信任
- **跨平台缺口成为生态完整性瓶颈**：Issue #75 自 1 月创建，74 👍，开发者群体流失风险
- **审阅吞吐量与社区规模不匹配**：357 待合并 PR 暗示维护者带宽绝对不足

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 |
|:---|:---|:---|
| **会话管理与记忆可靠性** | OpenClaw (#77374, #12590)、Hermes Agent (#20470, #20293, #19243)、NanoBot (#3630, #3631)、ZeroClaw (#5550, #6384)、PicoClaw (#2364) | 压缩导致的会话分裂、记忆静默丢失、上下文污染为共性痛点；多项目同步推进会话后端统一或 cursor 推进修复 |
| **MCP/SSE 协议兼容性** | Hermes Agent (#17244, #20349)、NanoClaw (#1906, #2208)、ZeroClaw | 高德地图等 SSE-based MCP 服务器接入受阻；HTTP/SSE 传输层扩展为共同需求 |
| **Windows 桌面体验** | OpenClaw (#75)、NanoClaw (#3751→#4041)、CoPaw (#4043)、NullClaw (#890)、PicoClaw | 从"不支持"到"支持但体验差"的梯度，启动慢、技能注册失效、DNS 解析等为具体阻塞点 |
| **安全沙箱与执行控制** | OpenClaw (#6615, #8719)、NanoBot (#3635)、PicoClaw (#2688)、CoPaw (#4038, #4026)、Hermes Agent (#17962, #20468) | 从白名单到 denylist、从 LLM 判断到硬编码规则、从粗暴中止到结构化错误，安全策略精细化演进 |
| **子代理/多 Agent 编排** | NanoBot (#3611→#3634, #3292)、Hermes Agent (#15153, #18420, #20458)、PicoClaw (#2775)、CoPaw (#3224) | 并发限制、角色身份隔离、持久化会话共享为关键未决问题 |
| **流式输出与实时交互** | OpenClaw (Google Meet 语音桥)、PicoClaw (#1950, #2404)、CoPaw | 端到端流式体验从"加分项"变为"基础预期" |
| **依赖供应链安全** | ZeptoClaw (11 Dependabot PR)、Moltis (#967)、IronClaw (wasmtime CVE) | 自动化依赖更新积压、crates.io 发布滞后、CVE 修复阻塞 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道统一、实时语音桥接、插件生态 | 多平台部署的进阶开发者、企业集成 | 插件 SDK 抽象层，核心层接管生命周期，Rust/TypeScript 混合 |
| **NanoBot** | 快速响应、SDK 完整性、本地部署友好 | 消费者硬件用户、快速原型开发者 | Python 为主，强调"当日修复"，子代理资源管控严格 |
| **Hermes Agent** | 多平台会话共享、国际化、WebUI 愿景 | 企业多租户、全球化部署 | 18 消息平台，profile 系统，向"操作系统级 Agent 平台"演进 |
| **PicoClaw** | 边缘设备/IoT、轻量级部署、监控工具 | Raspberry Pi/ARM64 用户、嵌入式场景 | 配置驱动，试验性 PicoWatch 监控，Cron 任务支持 |
| **NanoClaw** | 多通道设置向导、OneCLI 网关、混合 LLM 架构 | 新手用户、多模型策略企业 | v2 迁移脚本、Baileys WhatsApp 适配、容器运行时兼容 |
| **IronClaw** | 企业级安全（TDX/Phala）、Reborn 架构、Turn 协调 | 高安全需求企业、NEAR 生态 | Rust 全栈，wasmtime 隔离，"Reborn"协调器设计，架构重构期 |
| **ZeroClaw** | 分布式节点治理、成本精细化、schema 驱动配置 | 多实例舰队管理、成本敏感用户 | v0.8.0 集成批次，typed provider family，HMAC receipts，Nodes 仪表盘 |
| **CoPaw** | 多智能体协作（Agent Teams）、技能生态、钉钉集成 | 中国企业用户、自然语言驱动团队编排 | 基于 Qwen 生态，语义化技能路由，Windows 托盘补全 |
| **LobsterAI** | 有道生态集成、Windows 技能管理 | 有道云笔记用户、中文生产力场景 | Electron 桌面端，技能商店模式，维护响应滞后 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代期（日均 Issues+PR > 30，功能密集交付）
| 项目 | 关键信号 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 500/500 双高，v2026.5.4 刚发布 | 回归缺陷密度与社区规模同步膨胀，稳定性承压 |
| **ZeroClaw** | 50/50，v0.8.0 重构并行 | 4:1 开放/关闭比，WhatsApp 危机，合并瓶颈 |
| **Hermes Agent** | 50/50，CI 稳定化+国际化+安全三线并进 | 42 待合并 PR，P1 会话缺陷无修复，审阅危机 |

### ✅ 质量巩固期（高合并率，响应迅速）
| 项目 | 关键信号 | 演进方向 |
|:---|:---|:---|
| **NanoBot** | 57% 合并率，当日报告当日修复 | 企业可观测性（LangSmith）、Session-Level Focus Tool 架构升级 |
| **NanoClaw** | 32/50 PR 合并，v2 阻断点消除 | OneCLI 安全加固、Podman 官方支持、MCP 工具市场 |
| **PicoClaw** | 9/27 合并，v0.2.8-nightly | 流式输出正式版、子 Agent 角色修复、安全沙箱加固 |

### ⚠️ 架构重构/维护模式（动能不足或方向调整）
| 项目 | 关键信号 | 建议关注 |
|:---|:---|:---|
| **IronClaw** | "Reborn" 14 个开放 Issue，5 个 salvage PR | 架构决策记录（ADR）缺失，早期 PR 废弃，贡献者体验风险 |
| **NullClaw** | Windows P0 修复 24h 响应，但整体低活跃 | 企业就绪信号（数据治理层 Hackathon），需确认长期维护承诺 |
| **CoPaw** | 9/10 PR 待合并，5 个首次贡献者 | 审阅瓶颈可能挫伤社区热情，Agent Teams 需 RFC 启动 |

### ❌ 休眠/边缘化风险
| 项目 | 关键信号 | 评估 |
|:---|:---|:---|
| **LobsterAI** | 0 Issues，P0 PR 挂起 42 天 | 数据丢失类缺陷无响应，维护者带宽存疑 |
| **TinyClaw** | 零活动 | 项目停滞 |
| **Moltis** | 仅 Dependabot，零人工活动 | 维护模式，需透明沟通 |
| **ZeptoClaw** | 11 Dependabot PR，零人工开发 | 稳定维护期，但长期无功能演进 |

---

## 7. 值得关注的趋势信号

### 信号一：**"升级即崩溃"成为生态共性信任危机**
- OpenClaw（WeChat/Feishu/Discord 升级崩溃）、NanoBot（DeepSeek v0.1.5.post3 升级破坏）、NanoClaw（v1→v2 迁移误判）同步出现
- **对开发者的价值**：建立"升级兼容性测试矩阵"和"热修复分支"机制，从"功能优先"转向"稳定性优先"的版本策略

### 信号二：**从"单 Agent 可用"到"多 Agent 可信协作"的架构跃迁**
- NanoBot #3292（Session-Level Focus Tool）、Hermes Agent #15153/#18420（持久化角色会话）、PicoClaw #2775（子 Agent 独立身份）、CoPaw #3224（Agent Teams）形成需求集群
- **对开发者的价值**：多 Agent 编排的瓶颈从"spawn 能力"转向"身份隔离、记忆边界、并发资源管控"，需提前设计角色契约与冲突解决机制

### 信号三：**渠道协议变更引发的"第三方依赖脆弱性"显性化**
- ZeroClaw WhatsApp 4/24 协议升级导致三重故障（中断+安全降级+访问控制绕过），OpenClaw 渠道插件分散修复缺乏统一回归
- **对开发者的价值**：核心渠道需抽象协议适配层，建立"渠道健康状态页"和上游变更监控，避免单点协议变更击穿生产

### 信号四：**"企业就绪"从口号变为可评估的工程标准**
- 数据治理（NullClaw #885）、审计日志、RBAC、成本精细化（ZeroClaw #6251）、合规性（IronClaw TDX/Phala）进入代码层面
- **对开发者的价值**：个人项目与企业采用的鸿沟在于"可观测性、可审计性、可回滚性"，需在架构早期嵌入而非后期补丁

### 信号五：**边缘设备与桌面端覆盖成为生态完整性硬指标**
- OpenClaw #75（Linux/Windows，104 评论）、PicoClaw RPi Zero W、ZeroClaw macOS Universal Binary、NanoClaw Windows 托盘
- **对开发者的价值**："macOS 优先"策略在开发者工具领域可能流失 30%+ 用户，跨平台抽象层（如 Tauri、Flutter）的早期选型决定长期覆盖成本

### 信号六：**社区贡献者体验成为项目健康度的先行指标**
- IronClaw 5 个 salvage PR（主分支漂移）、CoPaw 9/10 PR 待合并（首次贡献者流失风险）、ZeroClaw singlerider 单点瓶颈（40%+ PR 占比）
- **对开发者的价值**：Merge Queue、自动化 CI 检查（PR 标题格式）、首次贡献者优先通道等基础设施投入，比功能开发更能预测项目 6 个月后的社区规模

---

*分析基于 2026-05-06 各项目 GitHub 公开数据，适合技术决策者评估项目健康度、开发者选择技术栈参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-06

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内14个PR流转（8个已合并/关闭，6个待审），6个Issue更新（4个活跃，2个关闭）。核心进展集中在**稳定性加固**与**多平台适配**：Telegram长轮询挂死问题从报告到修复PR仅用1天，子代理并发OOM问题同日完成方案迭代与合并，显示社区响应速度极快。LangSmith全功能集成与SimpleX新渠道等中长期功能PR持续推进，项目整体健康度良好，但需关注GPT-5.5模型兼容性的新发回归问题。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | Re-bin | **SSRF防护策略优化**：将SSRF阻断从"中止运行时回合"改为"返回强不可重试工具错误"，既保留安全边界，又避免代理陷入无限重试循环（curl/wget/代理/IP编码等变体） | - |
| [#3620](https://github.com/HKUDS/nanobot/pull/3620) | chengyongru | **SDK可观测性补齐**：`RunResult.tools_used` 和 `RunResult.messages` 从硬编码`[]`改为通过`SDKCaptureHook`真实捕获，解决SDK消费者长期无法获取工具调用历史的文档与实现不一致问题 | - |
| [#3629](https://github.com/HKUDS/nanobot/pull/3629) | kaseru | **Telegram权限加固**：`/start`、`/help`命令及`_on_message`前置allowlist校验，防止未授权用户触发打字/反应等副作用 | - |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | BarclayII | **飞书群聊身份识别**：在模型prompt前注入`[FEISHU-CONTEXT]`块（含display_name/open_id/user_id），解决群聊共享会话中的用户区分问题 | - |
| [#3632](https://github.com/HKUDS/nanobot/pull/3632) | futurist | **飞书媒体路径修复**：`_download_media_resource`返回绝对路径而非仅文件名，修复下游转录等流程因无效路径失败的问题 | - |
| [#3631](https://github.com/HKUDS/nanobot/pull/3631) | JiajunBernoulli | **Dream内存静默丢失修复**：`.dream_cursor`仅在批次成功完成后推进，避免Phase 1错误时记忆条目被静默丢弃（**同日响应Issue #3630**） | [#3630](https://github.com/HKUDS/nanobot/issues/3630) |
| [#3634](https://github.com/HKUDS/nanobot/pull/3634) | chengyongru | **子代理并发限制（方案迭代版）**：新增`agents.defaults.maxConcurrentSubagents`配置（默认1），超限时`spawn`工具返回描述性错误供代理感知调整 | [#3611](https://github.com/HKUDS/nanobot/issues/3611) |
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | mrbob-git | ~~子代理并发限制（初版）~~ 被 #3634 迭代替代关闭 | [#3611](https://github.com/HKUDS/nanobot/issues/3611) |

**整体推进评估**：今日合并量占过去24小时PR流转的57%，覆盖安全策略、SDK完整性、渠道适配、核心记忆机制、资源管控五大维度，属于**高强度交付日**。特别值得注意的是 #3631 对 #3630 的"当日报告当日修复"响应，以及 #3634 对 #3615 的快速方案迭代，体现维护者对稳定性问题的优先级判断。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | **9条** | 请求"任务板"式持久化注意力机制：中断处理后可自动回归主任务，而非当前`my`工具的临时scratchpad | 开放，4-19创建，持续活跃 |
| 2 | [#3626](https://github.com/HKUDS/nanobot/issues/3626) Telegram长轮询静默挂死 | **2条** | 生产环境致命问题：网络层断连后bot"假活"，无错误日志，需人工重启 | **已有修复PR #3627** |
| 3 | [#3584](https://github.com/HKUDS/nanobot/issues/3584) DeepSeek API reasoning_content错误 | **1条** | v0.1.5.post3升级后的API校验回归，已定位根因并提供patch | 开放，待验证合并 |

**诉求分析**：
- **#3292** 的9条评论反映社区对"类人工作记忆"的强烈需求——当前代理在复杂多轮任务中缺乏**目标锚定能力**，这与AutoGPT等竞品的主打特性形成差距，可能成为差异化竞争点。
- **#3626** 的快速响应（5-5创建→同日PR）显示生产稳定性是维护者的红线优先级。
- **#3584** 的"用户自供patch"模式值得鼓励，但需注意DeepSeek模型生态的快速迭代带来的持续兼容压力。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 影响范围 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-生产中** | Telegram长轮询静默挂死：NAT超时/Wi-Fi漫游/防火墙重置导致连接假死，bot可发不可收，无日志 | 所有Telegram生产部署 | **PR #3627 待审**（watchdog方案） | [#3626](https://github.com/HKUDS/nanobot/issues/3626) |
| 🔴 **P0-回归** | GPT-5.5模型调用报错：`Duplicate item found with id rs_*`，Codex无法恢复 | GPT-5.5用户，阻断工作流 | **尚无PR**，需紧急响应 | [#3633](https://github.com/HKUDS/nanobot/issues/3633) |
| 🟡 **P1-已修复待验证** | DeepSeek API `reasoning_content`校验失败：v0.1.5.post3升级后agent历史未正确过滤推理字段 | DeepSeek模型用户 | 用户已提供patch，待维护者合并 | [#3584](https://github.com/HKUDS/nanobot/issues/3584) |
| 🟡 **P1-已修复** | Dream cursor错误推进导致记忆静默丢失：Phase 1失败仍advance cursor，无Telegram/日志信号 | Dream功能用户 | **PR #3631 已合并** | [#3630](https://github.com/HKUDS/nanobot/issues/3630) |
| 🟢 **P2-已修复** | 子代理并发OOM：本地LLM服务器（mlx_lm/Ollama）多KV缓存同时分配导致崩溃 | 本地部署消费者硬件用户 | **PR #3634 已合并**（默认限制为1） | [#3611](https://github.com/HKUDS/nanobot/issues/3611) |
| 🟢 **P2-已修复** | MCP连接失败时event loop spin：`AsyncExitStack`孤儿化导致anyio取消传递死循环 | MCP工具用户 | **PR #3610 待审** | [#3610](https://github.com/HKUDS/nanobot/pull/3610) |

**关键警报**：**#3633 GPT-5.5重复ID错误**是今日唯一无修复方案的P0问题，且发生在OpenAI最新模型上，可能影响项目"前沿模型兼容性"声誉，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 成熟度信号 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **Session-Level Focus Tool**（会话级任务聚焦） | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | 9条评论深度讨论，有具体设计思路（扩展`my`工具、持久化task board、compaction策略） | ⭐⭐⭐⭐ 高：契合Agent 2.0"持续任务"趋势，社区呼声强，但需架构层面设计 |
| **LangSmith全功能集成** | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | PR已开放21天，满足"四可评估日志契约"，v0.1.5被移除后的恢复性PR | ⭐⭐⭐⭐ 高：企业可观测性刚需，PR已具规模，待最终review |
| **SimpleX渠道支持** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | PR已开放9天，基于SimpleX CLI的隐私优先消息渠道 | ⭐⭐⭐ 中：隐私/去中心化用户群诉求，但依赖外部CLI增加维护负担 |
| **HF Spaces多角色Agent Squad部署** | [#3621](https://github.com/HKUDS/nanobot/pull/3621) | PR新开放，生产验证过的Neo/Trinity/Sentinel编排方案 | ⭐⭐⭐ 中：云原生部署场景扩展，但需评估与现有部署抽象的重复度 |
| **Message预处理Hook** | [#3628](https://github.com/HKUDS/nanobot/pull/3628) | PR新开放，`before_process`回调+媒体字段扩展 | ⭐⭐⭐⭐ 高：插件生态基础设施，低侵入性，易合并 |

---

## 7. 用户反馈摘要

### 痛点
- **"假活"诊断困难**：Telegram部署用户描述"bot活着能发消息但就是不收"，无日志无告警，生产环境噩梦（[#3626](https://github.com/HKUDS/nanobot/issues/3626)）
- **升级即破坏**：v0.1.5.post3升级后DeepSeek模型直接不可用，API校验错误信息晦涩（[#3584](https://github.com/HKUDS/nanobot/issues/3584)）
- **SDK承诺未兑现**：`RunResult.tools_used`文档存在但始终返回空数组，"since the facade was introduced"暗示历史遗留（[#3620](https://github.com/HKUDS/nanobot/pull/3620)）
- **本地部署资源失控**：消费者硬件用户明确呼吁"不要默认无限制并发"，OOM后无优雅降级（[#3611](https://github.com/HKUDS/nanobot/issues/3611)）

### 满意点
- **响应速度**：#3630报告到#3631合并仅数小时，用户clive-stokes的详细根因分析获快速采纳
- **安全策略精细化**：SSRF从"粗暴中止"改为"结构化错误"，平衡安全与代理自主性（[#3635](https://github.com/HKUDS/nanobot/pull/3635)）

### 场景洞察
- **飞书群聊是真实高频场景**：用户需要模型区分"谁说了什么"，而非匿名化处理（[#3552](https://github.com/HKUDS/nanobot/pull/3552)）
- **"工作记忆"是Agent可用性瓶颈**：用户用"mental task board"类比，说明当前代理的中断恢复能力距人类期望差距显著（[#3292](https://github.com/HKUDS/nanobot/issues/3292)）

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险说明 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | 2026-04-19 | 2026-05-05 | **17天开放**，9条评论无维护者正式回应，社区投入度高但可能流失耐心 | 维护者需确认是否纳入v0.1.6路线图，或至少给出设计方向反馈 |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) LangSmith全功能集成 | 2026-04-14 | 2026-05-05 | **22天开放**，企业用户可观测性刚需，v0.1.5移除后的恢复性PR悬而未决 | 安排专门review，或明确与现有tracing架构的集成冲突 |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) SimpleX渠道 | 2026-04-27 | 2026-05-05 | **9天开放**，隐私赛道差异化机会，但外部CLI依赖需架构决策 | 评估是否接受"CLI wrapper"模式，或要求原生库集成 |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) HF Spaces多角色部署 | 2026-05-04 | 2026-05-05 | 新PR但涉及生产级编排，需快速反馈避免作者投入沉没 | 确认与现有Docker/K8s部署抽象的互补或替代关系 |

---

*日报生成时间：2026-05-06 | 数据来源：HKUDS/nanobot GitHub 公开活动流*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-06

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**，过去24小时共产生 **100 条代码协作事件**（50 Issues + 50 PRs），其中 Issues 净增 28 条（39 新开/活跃 vs 11 关闭），PR 待审积压达 42 条，合并/关闭仅 8 条，**审阅吞吐压力显著**。社区聚焦三大主线：**MCP/SSE 协议兼容性修复**（高德地图等中文生态接入受阻）、**跨平台会话与记忆可靠性**（Windows 隔离环境、Podman 权限、Telegram 会话分裂）、**国际化与 UI 基础设施**（乌克兰语、韩语、WebUI 主题系统）。无新版本发布，整体处于密集修 bug 与功能储备期，健康度良好但需关注 PR 审阅瓶颈。

---

## 2. 版本发布

**无今日发布**

---

## 3. 项目进展

### 已合并/关闭的 PR（8 条中重点）

| PR | 作者 | 状态 | 进展说明 | 链接 |
|:---|:---|:---|:---|:---|
| #20446 | dandacompany | **CLOSED** (duplicate) | 韩语仪表板本地化，因与 #18894 重复关闭 | [链接](https://github.com/NousResearch/hermes-agent/pull/20446) |
| #17537 | bogerman1 | **CLOSED** | 服务端 SSE token 批处理修复 Open WebUI 流式卡顿，已落地 | [链接](https://github.com/NousResearch/hermes-agent/pull/17537) |

### 今日推进中的关键 PR（待合并）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #20471 | steezkelly | **CI 基线稳定化**：隔离主机配置泄漏、修复 10+ 测试回归，基础设施关键 | [链接](https://github.com/NousResearch/hermes-agent/pull/20471) |
| #20469 | wali-reheman | **修复 6 处预存 CI 失败**，跨 4 个测试文件，与 #20471 协同 | [链接](https://github.com/NousResearch/hermes-agent/pull/20469) |
| #20467 | teknium1 | **乌克兰语本地化** (`uk`)，第 7 个官方 UI 语言，国际化里程碑 | [链接](https://github.com/NousResearch/hermes-agent/pull/20467) |
| #20468 | teknium1 | **Hook 上下文溢出保护**：>10K 字符 spill 到磁盘，防止插件膨胀攻击（移植 OpenAI Codex） | [链接](https://github.com/NousResearch/hermes-agent/pull/20468) |
| #20472 | wali-reheman | **Tailwind 字体主题桥接**，修复自定义主题字体不生效 | [链接](https://github.com/NousResearch/hermes-agent/pull/20472) |
| #18188 | lancecheney | **网关运行时页脚元数据扩展**（provider/账户/上下文/配额），opt-in 设计 | [链接](https://github.com/NousResearch/hermes-agent/pull/18188) |
| #17962 | briandevans | **安全加固**：捕获反向 shell 与两阶段下载执行攻击，终端审批层关键补丁 | [链接](https://github.com/NousResearch/hermes-agent/pull/17962) |
| #17416 | kagura-agent | **Hindsight 熔断器**：守护进程失败时防止 177 秒级会话冻结 | [链接](https://github.com/NousResearch/hermes-agent/pull/17416) |

**整体评估**：今日无重大功能合并，但 CI 稳定化（#20471/#20469）+ 安全加固（#17962）+ 国际化（#20467）三线并进，为 v0.13.x 奠定质量基础。Hook 上下文溢出保护（#20468）显示项目积极吸收 OpenAI Codex 生态的工程经验。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#8118 WebUI Dashboard — Can't Wait for This!** | 6 | 用户对 Web 仪表板的长期渴望，情绪热烈但无实质进展信号 | [链接](https://github.com/NousResearch/hermes-agent/issues/8118) |
| 2 | **#17244 MCP SSE 发现机制不支持（高德地图 amap）** | 4 | **中文开发者生态接入受阻**，SSE-based MCP 服务器无法连接，技术根因明确 | [链接](https://github.com/NousResearch/hermes-agent/issues/17244) |
| 3 | **#12954 中文本地化支持** | 3 (已关闭) | 国际化需求被响应，但 #20467 乌克兰语优先引发"中文社区是否被充分重视"的潜在情绪 | [链接](https://github.com/NousResearch/hermes-agent/issues/12954) |
| 4 | **#15153 持久化规范角色会话** | 3 | 企业级多 Agent 编排需求，与 #18420 多 Agent 流水线形成主题集群 | [链接](https://github.com/NousResearch/hermes-agent/issues/15153) |
| 5 | **#20245 Agent 完全无记忆功能** | 3 (已关闭) | 新用户入门挫败感极高，"5 秒后忘记名字"的极端案例，文档/UX 问题 | [链接](https://github.com/NousResearch/hermes-agent/issues/20245) |
| 6 | **#18875 Hindsight 内存提供者崩溃网关** | 3 | 插件依赖缺失时的优雅降级失败，Docker 无限重启循环 | [链接](https://github.com/NousResearch/hermes-agent/issues/18875) |

### 诉求分析

- **#8118 vs #15966**：WebUI 仪表板是"梦想级"需求，但 #15966（按配置隔离的品牌/主题/组织图）显示企业用户需要**可定制的多租户仪表板**，而非单一通用界面。
- **#17244**：高德地图 MCP 案例暴露了 **MCP HTTP/SSE 传输层实现不完整**，与 #20349（SSE session ID 维护失败）同属协议兼容性债务，直接影响中国开发者采纳。
- **#15153 + #18420 + #20458**："多 Agent 编排"正从" spawn 子代理"向"持久化身份 + 跨平台会话共享"演进，是项目向**操作系统级 Agent 平台**跃迁的关键信号。

---

## 5. Bug 与稳定性

### P1（严重）— 需立即关注

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#20470** | Telegram DM topic 绑定在压缩导致的会话分裂后未刷新，引发**预压缩无限循环** | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20470) |
| **#20465** | 交互式 CLI 对 Codex 429 `usage_limit_reached` **不回退**，cron 任务同配置却正常 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20465) |
| **#20293** | 上下文压缩 + 会话分裂：压缩摘要被**错误注入为新会话有效历史**，污染记忆 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20293) |
| **#20001** (已关闭) | TUI 压缩延续创建幽灵会话，污染 `session_search` | 已修复 | [链接](https://github.com/NousResearch/hermes-agent/issues/20001) |

### P2（高优先级）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#17244** | MCP SSE 发现机制不支持（高德地图） | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/17244) |
| **#20377** | Podman rootless 容器 `/opt/data` 权限拒绝 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20377) |
| **#20254** | `profile list` 误报 Gateway stopped（systemd 实际运行中） | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20254) |
| **#19243** | 崩溃后 `session_search` 返回空，孤立 session JSON 未恢复 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/19243) |
| **#19337** | MiniMax OAuth 返回已删除页面的 `verification_uri` | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/19337) |
| **#20305** | DeepSeek 等推理模型会话自动标题生成静默失败 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20305) |
| **#17416** (PR) | Hindsight 守护进程失败时 177 秒冻结 | **#17416 待合并** | [链接](https://github.com/NousResearch/hermes-agent/pull/17416) |

### P3（一般）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#20436** | Windows 原生运行隔离于 Linux 环境，无法访问工作区文件 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20436) |
| **#18875** | Hindsight 未安装时网关崩溃无错误 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/18875) |
| **#17009** | Termux 文件系统交互失败 | **#9846, #20466 待合并** | [链接](https://github.com/NousResearch/hermes-agent/issues/17009) |
| **#20316** | `run_agent.py` 从未调用 `should_compress_preflight()`，LCM 维护死代码 | 🚨 **无** | [链接](https://github.com/NousResearch/hermes-agent/issues/20316) |

**稳定性评估**：**P1 级会话管理缺陷集中爆发**（#20470, #20293, #20465），均涉及核心状态机（会话分裂、压缩、回退），且**均无 fix PR**，是今日最大风险点。MCP/SSE 协议层（#17244, #20349）和容器/系统适配（#20377, #20254, #20436）构成第二风险层。

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本（有 PR 或强需求信号）

| 需求 | Issue/PR | 证据 | 链接 |
|:---|:---|:---|:---|
| **乌克兰语本地化** | #20467 (PR) | 已提交，7 语言里程碑，Fast Refresh 兼容 | [链接](https://github.com/NousResearch/hermes-agent/pull/20467) |
| **韩语仪表板本地化** | #18894 (PR), #20446 (closed dup) | 双 PR 竞争，需求确认，待审阅 | [链接](https://github.com/NousResearch/hermes-agent/pull/18894) |
| **Hook 上下文溢出保护** | #20468 (PR) | 移植自 OpenAI Codex，工程最佳实践 | [链接](https://github.com/NousResearch/hermes-agent/pull/20468) |
| **网关运行时页脚元数据** | #18188 (PR) | 可观测性增强，opt-in 无破坏性 | [链接](https://github.com/NousResearch/hermes-agent/pull/18188) |
| **飞书工具客户端环境凭据构建** | #18131 (PR) | 企业集成修复，P2 优先级 | [链接](https://github.com/NousResearch/hermes-agent/pull/18131) |
| **Telegram/Discord 优先级感知通知** | #20463 (PR) | 消息平台 UX 细化 | [链接](https://github.com/NousResearch/hermes-agent/pull/20463) |

### 中长期路线图信号（需求强烈但实现复杂）

| 需求 | Issue | 复杂度 | 链接 |
|:---|:---|:---|:---|
| **WebUI Dashboard** | #8118 (6 评论), #15966 | 🔴 高：需前端团队、主题系统、多租户隔离 | [链接](https://github.com/NousResearch/hermes-agent/issues/8118) |
| **多 Agent 编排管道** | #18420, #15153 | 🔴 高：涉及持久身份、技能策略、跨会话状态 | [链接](https://github.com/NousResearch/hermes-agent/issues/18420) |
| **跨平台会话共享** | #20458 | 🟡 中高：身份链接、MCP 实例复用、安全边界 | [链接](https://github.com/NousResearch/hermes-agent/issues/20458) |
| **可分享的配置分发（Profile Distributions）** | #20456 | 🟡 中高：打包格式、签名验证、版本管理 | [链接](https://github.com/NousResearch/hermes-agent/issues/20456) |
| **TrueConf 网关支持** | #20318 (👍×6) | 🟢 中：新平台适配，社区投票高 | [链接](https://github.com/NousResearch/hermes-agent/issues/20318) |
| **fish.audio TTS** | #20439 | 🟢 低：新 provider 接入，用户已自建 bypass | [链接](https://github.com/NousResearch/hermes-agent/issues/20439) |
| **NEAR AI + Phala AI 私有推理** | #12201 (PR) | 🔴 高：TDX 证明、E2EE，安全基础设施 | [链接](https://github.com/NousResearch/hermes-agent/pull/12201) |

**路线图判断**：v0.13.x 大概率聚焦 **CI 稳定 + 国际化（uk/ko）+ MCP/SSE 兼容性 + 会话管理可靠性修复**。WebUI 和多 Agent 编排需更长时间窗口，但 #15966 的"profile 级仪表板隔离"可能是 WebUI 的渐进切入点。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 痛点 | 来源 | 典型引用 |
|:---|:---|:---|
| **记忆/会话可靠性崩溃** | #20245, #18875, #19243, #20470 | "Agent 完全没有记忆功能"（5 秒后忘记名字）；Hindsight 未安装时"Docker 无限重启，无错误提示" |
| **Windows 开发者体验断裂** | #20436 | "运行在隔离 Linux 环境，无法看到我的 Windows 工作区任何文件" |
| **配置被环境变量覆盖** | #5358 | `OPENROUTER_API_KEY` 存在时完全忽略 `model.provider` 配置 |
| **新用户引导黑洞** | #20245, #20376, #12308 | 文档缺失导致"几小时无果"；vLLM 连接空白响应无诊断 |
| **中文生态接入门槛** | #17244, #12954 | 高德地图 SSE MCP 无法连接；中文本地化 Issue 关闭但乌克兰语优先 |

### 😊 满意点

| 反馈 | 来源 |
|:---|:---|
| "Hermes v0.12.0 is incredible... experience has been genuinely great" | #20456 |
| "First of all — Hermes Agent is absolutely amazing! 🎉" | #8118 |
| 18 消息平台、自主策展人、profile 系统获认可 | #20456, #8118 |

### 🔍 使用场景洞察

- **企业多平台部署**：Feishu + WebUI + Telegram 组合，会话隔离导致 MCP 实例爆炸（#20458）
- **本地/私有推理**：vLLM + Ollama 视觉模型接入需求强烈（#12308, #20376）
- **移动端/Termux**：Android 终端用户存在但边缘化，安装脚本可靠性差（#17009, #9846, #20466）

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue/PR

| 条目 | 创建时间 | 状态 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#8118 WebUI Dashboard** | 2026-04-12 | Open, 6 评论, 无官方回应 | 社区热情消耗，竞品差距拉大 | [链接](https://github.com/NousResearch/hermes-agent/issues/8118) |
| **#12201 NEAR AI + Phala AI 私有推理** | 2026-04-18 | Open PR, 无评论 | 安全基础设施级功能，可能因复杂度搁置 | [链接](https://github.com/NousResearch/hermes-agent/pull/12201) |
| **#5358 Gateway/CLI 忽略 model.provider** | 2026-04-06 | Open, 1 评论 | 配置系统核心 bug，影响所有多 provider 用户 | [链接](https://github.com/NousResearch/hermes-agent/issues/5358) |
| **#9846 Termux 安装路径修复** | 2026-04-14 | Open PR, 无评论 | 移动端用户被忽视，#20466 部分覆盖但未闭环 | [链接](https://github.com/NousResearch/hermes-agent/pull/9846) |
| **#17214 有效模型自识别** | 2026-04-29 | Open PR | 模型路由准确性，影响所有 provider | [链接](https://github.com/NousResearch/hermes-agent/pull/17214) |
| **#17503 BlueBubbles 修复** | 2026-04-29 | Open PR | iMessage 网关可靠性 | [链接](https://github.com/NousResearch/hermes-agent/pull/17503) |

### 维护者行动建议

1. **紧急**：为 P1 会话管理缺陷（#20470, #20293, #20465）分配 owner，考虑 hotfix 分支
2. **本周**：审阅并合并 #20471 + #20469（CI 基线），解锁其他 PR 合并
3. **本月**：回应 #8118 WebUI 路线图，哪怕是否定性优先级说明
4. **持续**：建立 MCP/SSE 兼容性测试矩阵，覆盖高德地图等中文服务

---

*日报基于 GitHub 

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-06

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-05-06 | **分析师**: AI 开源项目分析师

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内 Issues 更新 17 条（13 活跃/新开，4 关闭）、PR 更新 27 条（18 待合并，9 已合并/关闭），并推送了 **v0.2.8-nightly** 夜间构建版本。社区贡献者 **bogdanovich** 表现尤为突出，单日提交 8 个 PR，集中覆盖 Telegram 频道修复、Provider 扩展（Gemini 搜索、图像生成、OpenAI OAuth）及 Agent 工具增强。整体项目处于**功能快速迭代期**，但安全沙箱逃逸（#2688）和子 Agent 角色混淆（#2775）等新暴露问题需引起维护团队重视。

---

## 2. 版本发布

### 🔖 v0.2.8-nightly.20260505.57459574
- **类型**: 自动化夜间构建（可能不稳定）
- **发布链接**: [v0.2.8-nightly.20260505.57459574](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260505.57459574)
- **完整变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

> ⚠️ **迁移注意事项**: 此为自动化构建，不建议生产环境使用。从变更日志范围看，main 分支较 v0.2.8 累积了大量 Provider 层和频道层的改动，升级前建议验证配置文件兼容性（尤其 `api_key` → `api_keys` 等配置迁移，参见 PR #2372）。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | neotty | **修复 Cron 任务创建与执行失败** | 解决定时任务核心链路稳定性问题，影响长期运行 Agent 的可靠性 |
| [#2470](https://github.com/sipeed/picoclaw/pull/2470) | dsus4wang | **优化 Cron 提醒措辞 + MCP 工具可见性** | 改善长运行实例的 MCP 工具状态感知，降低运维盲区 |
| [#2372](https://github.com/sipeed/picoclaw/pull/2372) | SaiBalusu-usf | **修复 api_key/模型查找/回退 bug** | 解决 401 认证静默失败、thinking_budget 匹配失败等关键配置层问题 |
| [#2370](https://github.com/sipeed/picoclaw/pull/2370) | diegofornalha | **容忍 LLM 输出中的 SPLIT 标记空格变异** | 提升频道消息分割鲁棒性，减少格式敏感导致的解析失败 |
| [#2369](https://github.com/sipeed/picoclaw/pull/2369) | diegofornalha | **PicoWatch 试验性监控菜单栏应用** | 拓展生态边界，提供 macOS 原生监控能力（WhatsApp 状态计数） |
| [#2364](https://github.com/sipeed/picoclaw/pull/2364) | changeworldBT | **避免恢复含悬空工具调用的过期会话** | 根治 Telegram 会话卡在 typing/steering 模式的顽疾 |

**整体评估**: 今日合并 PR 覆盖 **配置可靠性、Cron 稳定性、会话恢复、消息解析** 四大核心领域，项目基础架构成熟度显著提升。尤其 #2372 的配置层修复消除了多个隐蔽的 401 认证失败根因。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **Gateway 启动异常** (#2513) | 8 | 二进制部署下 `picoclaw gateway -E` 异常退出，影响 headless 部署 | [sipeed/picoclaw#2513](https://github.com/sipeed/picoclaw/issues/2513) |
| 2 | **Cron 定时任务触发频道错误** (#1757) | 7 | 每小时定时任务导致 Telegram 频道报错，Raspberry Pi Zero W 资源受限场景 | [sipeed/picoclaw#1757](https://github.com/sipeed/picoclaw/issues/1757) |
| 3 | **Web Chat 流式输出** (#1950) | 6 | 前端用户体验优化，与路线图对齐的增强功能 | [sipeed/picoclaw#1950](https://github.com/sipeed/picoclaw/issues/1950) |
| 4 | **工具执行失败需报告被阻工具名** (#2431) | 4 | 可观测性增强：安全拦截时的工具标识，**今日已关闭** | [sipeed/picoclaw#2431](https://github.com/sipeed/picoclaw/issues/2431) |
| 5 | **配置支持流式 HTTP 请求** (#2404) | 4 | 对标 Python OpenAI 客户端 `stream=True`，Provider 层能力补齐 | [sipeed/picoclaw#2404](https://github.com/sipeed/picoclaw/issues/2404) |

**诉求分析**: 社区核心痛点集中在 **边缘设备部署稳定性**（#2513, #1757）、**流式交互体验**（#1950, #2404）和 **可观测性**（#2431）。Raspberry Pi Zero W 等低功耗设备的支持需求表明用户群体正向 IoT/边缘场景扩展。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | **安全沙箱逃逸**: `find /` 可枚举工作区外路径，安全守卫仅拦截 `cat`/`ls` 未覆盖 `find` | **OPEN**，评论 2 | ❌ 无 |
| 🟡 Medium | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway 启动异常，Debian 13 + digntalk 频道 | OPEN，stale | ❌ 无 |
| 🟡 Medium | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Cron 每小时任务触发频道错误，Raspbian 11 | OPEN，stale | ✅ #2520 已合并（相关修复）|
| 🟡 Medium | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | 多用户群聊历史消息缺少发送者归因，默认 session scope 下混淆 | OPEN，stale | ❌ 无 |
| 🟡 Medium | [#2694](https://github.com/sipeed/picoclaw/issues/2694) | ADB shell 运行证书验证失败 `x509` | OPEN，stale | ❌ 无 |
| 🟢 Low | [#2716](https://github.com/sipeed/picoclaw/issues/2716) | Telegram SVG 文件发送失败，`image/svg+xml` 映射到 `SendPhoto` 被拒 | **CLOSED** | ✅ 已修复关闭 |
| 🟢 Low | [#2726](https://github.com/sipeed/picoclaw/issues/2726) | `generateLeafSummary` 验收标准变量疑似错误 | **CLOSED** | ✅ 已关闭 |

> 🚨 **安全警报**: [#2688](https://github.com/sipeed/picoclaw/issues/2688) 沙箱逃逸为今日最严重问题。`find /` 绕过路径枚举限制，可能导致敏感信息泄露。建议维护者优先评估安全守卫的正则/命令解析策略，将 `find` 纳入危险命令扫描范围。

---

## 6. 功能请求与路线图信号

| 功能请求 | 领域 | 路线图对齐 | 纳入下一版本可能性 | 关键信号 |
|:---|:---|:---:|:---:|:---|
| **Web Chat 流式输出** (#1950) | channel | ✅ 已标记 | **高** | 社区投票需求，与现有 Provider 流式 PR #2404 形成互补 |
| **配置流式 HTTP 请求** (#2404) | provider/config | — | **高** | 配置层改动，与 #1950 协同可实现端到端流式 |
| **Mission Control 支持** (#2698) | agent | — | **中** | OpenClaw 生态整合诉求，需架构层面评估 |
| **无限上下文/跨会话记忆** (#2774) | agent/memory | — | **中** | 参考外部插件 [magic-context](https://github.com/cortexkit/magic-context)，技术方向明确但工程量大 |
| **子 Agent 独立角色身份** (#2775) | agent | — | **高** | 多 Agent 架构核心缺陷，直接影响复杂工作流可用性 |
| **图像生成工具** (PR #2760) | tool | — | **已提交** | bogdanovich 已实现 Provider 无关的 `image_generate`，待合并 |
| **Gemini 搜索 Provider** (PR #2763) | provider | — | **已提交** | 搜索工具多 Provider 扩展，完善工具生态 |

**路线图判断**: 流式输出（#1950 + #2404）和子 Agent 角色修复（#2775）是**最可能进入 v0.2.8 正式版**的功能。Mission Control 整合需评估与 OpenClaw 的架构耦合度，可能延后。

---

## 7. 用户反馈摘要

### 😫 真实痛点

| 痛点 | 来源 Issue | 场景 |
|:---|:---|:---|
| **配置迁移困惑** | [#2771](https://github.com/sipeed/picoclaw/issues/2771) | `config.example.json` 仍用 V2 格式（`channels` 而非 `channel_groups`），新用户复制即用报错 |
| **二进制部署 Gateway 不稳定** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | 生产环境 headless 部署，`picoclaw gateway -E` 随机异常退出 |
| **低功耗设备 Cron 不可靠** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | RPi Zero W 资源受限，定时任务触发频道层错误 |
| **Android 发布物文档缺失** | [#2695](https://github.com/sipeed/picoclaw/issues/2695) | `libpicolaw.so` 用途、ABI 支持、Java/Kotlin 调用示例完全未文档化 |
| **多 Agent 角色混淆** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 复杂工作流中 Planner/Builder/Auditor 均自认"根 Agent"，输出质量崩塌 |

### 😊 正向反馈

| 反馈 | 来源 |
|:---|:---|
| **NXP i.MX93 EVK (ARM64) 成功运行** | [#2646](https://github.com/sipeed/picoclaw/issues/2646) — 工业级 ARM64 边缘设备验证通过 |
| **配置自动备份机制受认可** | [#2771](https://github.com/sipeed/picoclaw/issues/2771) 提及 V0→V3 增量迁移链设计成熟 |

---

## 8. 待处理积压

> ⏰ **长期未响应的重要项**，建议维护者优先审阅：

| 积压项 | 创建日期 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **Gateway 启动异常** #2513 | 2026-04-14 | 2026-05-05 | 🔴 **影响 headless 部署**，stale 22 天 | [sipeed/picoclaw#2513](https://github.com/sipeed/picoclaw/issues/2513) |
| **Cron 频道错误** #1757 | 2026-03-18 | 2026-05-05 | 🔴 **定时任务核心场景**，stale 48 天 | [sipeed/picoclaw#1757](https://github.com/sipeed/picoclaw/issues/1757) |
| **LINE 频道官方 SDK 重构** PR #2413 | 2026-04-07 | 2026-05-05 | 🟡 技术债务，自研 270 行 HMAC/JSON 代码维护负担 | [sipeed/picoclaw#2413](https://github.com/sipeed/picoclaw/pull/2413) |
| **工作区文件嵌入优化** PR #2505 | 2026-04-13 | 2026-05-05 | 🟡 构建产物体积/正确性隐患 | [sipeed/picoclaw#2505](https://github.com/sipeed/picoclaw/pull/2505) |
| **会话管理命令** PR #2491 | 2026-04-12 | 2026-05-05 | 🟡 `/status`, `/compact`, `/new` 用户交互增强，社区期待 | [sipeed/picoclaw#2491](https://github.com/sipeed/picoclaw/pull/2491) |

---

## 附录：今日贡献者活跃度

| 贡献者 | PR 数量 | 主要领域 |
|:---|:---:|:---|
| **bogdanovich** | 8 | Telegram 修复、Provider 扩展（Gemini/OAuth/图像生成）、Agent 工具 |
| MichelSantos | 2 | CLI 嵌入/配置引导修复 |
| 其他 | 17 | 分散于各模块 |

---

*本日报基于 GitHub 公开数据生成，如有遗漏或需深度分析特定模块，请联系维护团队。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-06

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **数据周期**: 过去 24 小时（2026-05-05 至 2026-05-06）

---

## 1. 今日速览

NanoClaw 今日呈现**高强度维护态势**：50 个 PR 更新（32 条已合并/关闭，18 条待审），9 个 Issues 更新（5 条关闭，4 条活跃）。核心主题围绕 **v2 迁移脚本可靠性**、**OneCLI 网关基础设施加固** 与 **多通道设置体验优化** 三大方向。glifocat 单日贡献 5 个高质量修复 PR（全部合并），alipgoldberg 批量推进 6 个设置流程改进 PR，社区协作效率显著。无新版本发布，但基础设施层面的修复密度表明项目正处于**发布前的稳定性冲刺阶段**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（按影响面排序）

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) | glifocat | **修复 v2 迁移脚本健康检查端点**：将 `/health` 更正为 `/api/health`，终结迁移流程的误报失败 | 🔴 **阻断性修复** — 所有 v1→v2 迁移用户受益 |
| [#2284](https://github.com/qwibitai/nanoclaw/pull/2284) | glifocat | **同步 Baileys 版本至 7.0.0-rc.9**：配合 PR #2259 的 WhatsApp 适配器更新，修复 TypeScript 构建失败 | 🔴 **阻断性修复** — 新装 WhatsApp 通道必需 |
| [#2288](https://github.com/qwibitai/nanoclaw/pull/2288) | glifocat | **SQLite 时间戳统一按 UTC 解析**：消除 `host-sweep` 的时区漂移导致的误报 | 🟡 数据准确性 |
| [#2290](https://github.com/qwibitai/nanoclaw/pull/2290) | glifocat | **`manage-channels` SKILL.md 补充规范 SQL 查询**：将 `--assistant-name` CLI 标志映射到正确的 `name` 列 | 🟡 降低 AI 幻觉错误 |
| [#2269](https://github.com/qwibitai/nanoclaw/pull/2269) → [#2271](https://github.com/qwibitai/nanoclaw/pull/2271) → [#2272](https://github.com/qwibitai/nanoclaw/pull/2272) → [#2273](https://github.com/qwibitai/nanoclaw/pull/2273) → [#2274](https://github.com/qwibitai/nanoclaw/pull/2274) | alipgoldberg | **设置流程统一增加「← 返回」导航**：覆盖 Discord、WhatsApp、iMessage、Telegram、Slack、Teams、Signal 七大通道 | 🟢 **UX 重大提升** — 终结"选错通道只能杀进程"的痛点 |
| [#2249](https://github.com/qwibitai/nanoclaw/pull/2249) | alipgoldberg | **Telegram "Open Telegram" 卡片优化**：无桌面客户端时降级为移动端 deep-link | 🟢 多场景适配 |
| [#2275](https://github.com/qwibitai/nanoclaw/pull/2275) | alipgoldberg | **WhatsApp 引导文案平台化**：同时标注 iOS "You" 与 Android "Settings" 入口 | 🟢 跨平台包容 |
| [#2281](https://github.com/qwibitai/nanoclaw/pull/2281) | alipgoldberg | **Signal 设置自动安装 signal-cli**：替代"去 GitHub 下载"的硬阻断 | 🟢 降低技术门槛 |
| [#2209](https://github.com/qwibitai/nanoclaw/pull/2209) | cfis | **补全 orphan-claim 删除的测试覆盖**：修复 #2183 回归 | 🟡 测试债务清偿 |
| [#2282](https://github.com/qwibitai/nanoclaw/pull/2282) | taylorwalton | **文档：README 补充 provider mode 说明** | 🟢 降低配置困惑 |

**整体推进评估**：今日合并的 PR 呈现**"基础设施加固 + 新手体验平滑化"**的双轮驱动。v2 迁移路径的两大阻断点（健康检查 404、Baileys 版本漂移）被彻底消除，设置流程从"单向隧道"升级为"可回溯向导"，项目可用性迈上新台阶。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题/PR | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🥇 | [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) Ollama MCP stdio server fails behind OneCLI gateway | 评论: 1, 👍: 1, 跨 15 天活跃 | **混合架构下的代理兼容性**：用户同时使用 OneCLI 网关（用于凭证注入）与非 Ollama LLM 提供商（Anthropic/MiniMax）时，plain-HTTP 代理路径拒绝 MCP 请求。诉求：**网关应智能区分注入流量与工具流量**，或提供绕过规则。 |
| 🥈 | [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) `install_packages` approval triggers infinite a2a self-routing loop | 评论: 1, 👍: 1, 跨 9 天活跃 | **Agent-to-Agent 路由的边界条件缺陷**：Telegram 群组场景下的包安装审批触发循环路由，阻塞消息投递。作者已用 Claude 辅助定位并修复，但**需要维护者审阅确认修复方案的正确性**。 |
| 🥉 | [#2292](https://github.com/qwibitai/nanoclaw/pull/2292) feat(skills): add /convert-to-podman skill | 待审 PR | **容器运行时多元化**：macOS 用户希望从 Docker Desktop 迁移至 Podman（避免订阅/许可问题），且要求无缝兼容现有 `docker.sock` 工具链。诉求：**官方支持 Podman 作为一等公民运行时**。 |

**诉求洞察**：社区正从"能用"向"好用+灵活部署"演进——企业用户关注代理层兼容性，个人用户关注免费替代方案（Podman），多租户场景关注路由隔离。

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 状态 | 根因 | Fix PR | 风险窗口 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2285](https://github.com/qwibitai/nanoclaw/issues/2285) migrate-v2.sh probes wrong OneCLI health endpoint | ✅ **已关闭** | 硬编码 `/health` 而非 `/api/health` | [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) | **已消除** |
| 🔴 **High** | [#2283](https://github.com/qwibitai/nanoclaw/issues/2283) migrate-v2.sh fails on `2c-install-whatsapp` — Baileys pin not bumped | ✅ **已关闭** | 安装脚本与适配器源码版本不同步 | [#2284](https://github.com/qwibitai/nanoclaw/pull/2284) | **已消除** |
| 🔴 **High** | [#2286](https://github.com/qwibitai/nanoclaw/issues/2286) onecli_app-data wipe silently invalidates Postgres secrets | 🟡 **开放** | 重装时未保护 `secret-encryption-key` 与 MITM CA 证书，**文档缺失** | ❌ **无** | **持续中** — 任何 OneCLI 重装都可能导致 secrets 表不可逆损坏 |
| 🟡 **Medium** | [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) `send_card` MCP tool silently no-ops on every Chat SDK channel | ✅ **已关闭** | Chat SDK bridge 的 `deliver()` 缺失 `type: 'card'` 分支 | 未标注（推测同日修复） | 已消除 |
| 🟡 **Medium** | [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) New installs ship Discord card duplication | ✅ **已关闭** | `@chat-adapter/*@4.26.0` 无条件设置 `payload.content` | 未标注（推测同日修复） | 已消除 |
| 🟢 **Low** | [#2289](https://github.com/qwibitai/nanoclaw/issues/2289) manage-channels skill: SKILL.md doesn't link CLI flag to SQL column | ✅ **已关闭** | 文档与 schema 不一致导致 AI 生成错误查询 | [#2290](https://github.com/qwibitai/nanoclaw/pull/2290) | 已消除 |

**稳定性评估**：今日关闭 5/9 个 Issues，但 **#2286 是高危开放项**——OneCLI 数据卷的加密密钥与 CA 证书在重装时无保留机制，且完全未文档化。建议维护者优先处理，或至少发布临时文档警告。

---

## 6. 功能请求与路线图信号

| 议题/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2292](https://github.com/qwibitai/nanoclaw/pull/2292) /convert-to-podman skill (macOS) | 运行时支持 | **高** | 已有成熟 PR，且 Podman 的 `podman-mac-helper` 提供 `docker.sock` 兼容，迁移成本低 |
| [#2291](https://github.com/qwibitai/nanoclaw/pull/2291) trust OneCLI gateway CA inside agent container | 安全基础设施 | **高** | 直接修复 MITM 证书信任链，是 #1906 等代理问题的底层解，架构必要性明确 |
| [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) /add-ffmpeg MCP server for media transformation | 媒体处理技能 | **中高** | 符合 MCP 工具扩展方向，但需评估容器镜像体积与安全面 |
| [#2279](https://github.com/qwibitai/nanoclaw/issues/2279) Architectural scheduled IPC delivery tracking | 调度架构 | **中** | 架构级改进，解决"重复投递"问题，但涉及调度器核心逻辑，需设计评审 |
| [#2208](https://github.com/qwibitai/nanoclaw/pull/2208) support http and sse MCP server transports | MCP 协议扩展 | **中** | 扩展 MCP 传输层，但 stdio 仍是主流，优先级可能次于稳定性 |
| [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) map host user via keep-id on rootless podman | 权限安全 | **中** | 与 #2292 形成 Podman 支持矩阵，但 rootless 场景用户基数待验证 |

**路线图信号**：项目正从"Docker 中心"向"多运行时兼容"演进，同时 MCP 工具生态快速扩张（ffmpeg、HTTP/SSE 传输）。建议下一版本聚焦 **OneCLI 安全加固 + Podman 官方支持 + MCP 工具市场规范化**。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issues 与 PR 描述）

| 场景 | 痛点 | 来源 |
|:---|:---|:---|
| **v1→v2 迁移** | "脚本总是走到安装路径，我以为 OneCLI 坏了" — 健康检查 404 导致误判 | [#2285](https://github.com/qwibitai/nanoclaw/issues/2285) |
| **WhatsApp 新装** | "Baileys 版本对不上，TypeScript 编译直接炸" — 依赖管理不同步 | [#2283](https://github.com/qwibitai/nanoclaw/issues/2283) |
| **OneCLI 重装** | "重装后所有 secrets 读不出来，没有备份警告" — **数据丢失恐慌** | [#2286](https://github.com/qwibitai/nanoclaw/issues/2286) |
| **设置流程** | "手滑选了 Teams，结果要跑 7 个 Azure 步骤，没有回头路" — 单向流程焦虑 | [#2269](https://github.com/qwibitai/nanoclaw/pull/2269) |
| **Signal 入门** | "让我自己去 GitHub 下 Java 工具，当场放弃" — 技术门槛过高 | [#2281](https://github.com/qwibitai/nanoclaw/pull/2281) |
| **Telegram 无桌面客户端** | "VM 里跑 setup，'Open Telegram' 按钮完全没用" — 场景假设偏差 | [#2249](https://github.com/qwibitai/nanoclaw/pull/2249) |
| **混合 LLM 架构** | "用 Anthropic 做主模型，Ollama 做工具，结果 MCP 全挂" — 网关路径冲突 | [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) |

### 满意度信号

- **alipgoldberg 的批量 UX PR 被快速合并** → 维护者对"降低新手摩擦"高度认可
- **glifocat 的 5 个 PR 当日全关** → 社区贡献通道畅通，代码审查响应及时

---

## 8. 待处理积压

| 议题/PR | 滞留时间 | 风险说明 | 建议行动 |
|:---|:---|:---|:---|
| [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) Ollama MCP behind OneCLI gateway | **15 天** | 混合架构用户的核心阻断，且 [#2291](https://github.com/qwibitai/nanoclaw/pull/2291) 可能是部分解 | 评估 #2291 是否完全覆盖，或需额外代理绕过规则 |
| [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) infinite a2a self-routing loop | **9 天** | 作者自称用 Claude 辅助修复，**需要人工审阅确认** | 维护者验证修复逻辑，避免引入新的路由边界条件 |
| [#2286](https://github.com/qwibitai/nanoclaw/issues/2286) onecli_app-data wipe invalidates secrets | **1 天（但影响严重）** | **无文档、无备份机制、无修复 PR** | 紧急：发布文档警告；中期：迁移脚本增加数据卷备份步骤 |
| [#2208](https://github.com/qwibitai/nanoclaw/pull/2208) HTTP/SSE MCP transports | **3 天待审** | MCP 协议演进方向，但 stdio 稳定性优先 | 安排架构评审，或与下一版本 MCP 扩展计划对齐 |
| [#2184](https://github.com/qwibitai/nanoclaw/pull/2184) retry immediately on stale session | **4 天待审** | 用户体验优化（消除错误消息闪现） | 低优先级，但合并成本低，建议顺手处理 |

---

## 附录：今日贡献者分布

| 贡献者 | PR 数 | 核心领域 | 协作特征 |
|:---|:---|:---|:---|
| glifocat | 5 | 迁移脚本、数据层、文档 | **精准打击** — 每个 PR 对应一个已报告的 Issue，闭环效率极高 |
| alipgoldberg | 6 | 设置流程 UX、跨平台适配 | **用户体验代言人** — 聚焦新手摩擦，批量解决"选错无法回退"类问题 |
| meeech | 2 | 容器运行时、安全信任链 | **基础设施扩展** — Podman 支持与 CA 信任 |
| cfis | 3 | 测试、权限、MCP 传输 | **深度技术债** — 覆盖测试缺口与边缘场景 |
| CrAzyScreamx | 1 | MCP 工具生态 | **社区创新** — ffmpeg 媒体处理技能 |
| taylorwalton | 1 | 文档 | **知识传递** — provider mode 配置说明 |

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或讨论区内容。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-06

**仓库**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
**分析周期**: 过去24小时（2026-05-05 至 2026-05-06）

---

## 1. 今日速览

今日 NullClaw 项目保持**中等活跃度**，核心开发围绕 **Windows 平台稳定性修复**展开。社区报告并快速响应了一个阻塞性 Windows DNS 解析故障（#890），相关修复 PR #892 已提交待审。基础设施层面完成 CI 迁移（PR #889 已关闭）。另有来自 WB × OpenSource Hackathon 的数据治理层草案 PR #885 进入视野，显示项目正吸引外部贡献者参与。整体健康度良好，问题响应及时，但 4 个待合并 PR 提示 review 带宽需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#889](https://github.com/nullclaw/nullclaw/pull/889) | DonPrus | **CI/CD 基础设施迁移**：将 GitHub workflows 迁移至 `nullbuilder` 体系，属于工程效能优化，为后续自动化构建铺路 |

### 🔄 待合并（4 项）

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | fatihaziz | **Windows DNS 解析修复**：替换 `src/compat/net` 中的 DNS 预解析 shim，解决 `HostResolutionFailed` 阻塞问题 | 🔴 **高** — 修复平台级阻塞缺陷，直接影响 Windows 用户可用性 |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | vernonstinebaker | **Provider 错误透传**：保留 curl 传输层原始错误类型（DNS/连接/超时/TLS/读写等），避免健康探针误判 | 🟡 **中高** — 提升可观测性与调试效率，减少"黑盒"失败 |
| [#878](https://github.com/nullclaw/nullclaw/pull/891) | vernonstinebaker | **POSIX 线程休眠修复**：`std_compat.thread.sleep()` 改用 `nanosleep` 实现真正 OS 线程挂起，替代协程 yield | 🟡 **中** — 修正资源调度语义，影响托管运行时行为 |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | sleep3r | **[Hackathon] 数据治理层**：新增 `NullClaw Data Governance Layer`，含数据分类、访问控制、审计日志 | 🟢 **探索性** — 外部赛事贡献，架构影响待评估 |

**整体推进评估**：今日核心进展是** Windows 兼容性的紧急修复闭环**（issue → fix PR 24小时内），配合错误处理与底层调度两项质量加固，项目稳定性向前迈进显著一步。

---

## 4. 社区热点

### 最高优先级讨论：Windows DNS 故障 (#890 / #892)

| 指标 | 数据 |
|:---|:---|
| Issue #890 | [nullclaw/nullclaw#890](https://github.com/nullclaw/nullclaw/issues/890) |
| 修复 PR #892 | [nullclaw/nullclaw#892](https://github.com/nullclaw/nullclaw/pull/892) |
| 响应速度 | **< 24 小时**（issue 与 fix PR 同日创建） |
| 评论数 | 1（issue 含初步诊断）|

**背后诉求分析**：
- **用户场景**：Windows 开发者使用 `nullclaw agent` 调用 OpenRouter 等 provider 时完全不可用，curl 外部验证通过说明问题在 NullClaw 网络栈内部
- **技术债务信号**：DNS 预解析 shim 在 Windows 路径存在实现缺陷，平台抽象层（`src/compat/net`）的测试覆盖可能不足
- **社区期待**：快速修复合并 + 回归测试防止复发

### Hackathon 贡献 #885

- [nullclaw/nullclaw#885](https://github.com/nullclaw/nullclaw/pull/885)
- **诉求**：企业级数据合规需求（GDPR/数据主权）与 AI Agent 运行时的结合，来自俄罗斯电商巨头 WB 赞助的赛事，反映 NullClaw 在**生产级部署场景**的吸引力

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 阻塞性** | Windows 平台所有 provider 请求因 `HostResolutionFailed` 失败 | [#890](https://github.com/nullclaw/nullclaw/issues/890) | **Fix PR #892 待审** | Windows 全量用户，agent 核心功能 |
| 🟡 **P2 - 可观测性** | Provider 健康探针将 curl 传输错误统一吞并为 `AllProvidersFailed`，掩盖根因 | [#891](https://github.com/nullclaw/nullclaw/pull/891) | **PR 待合并** | 全平台，运维调试效率 |
| 🟡 **P2 - 正确性** | POSIX 平台 `thread.sleep()` 未真正挂起 OS 线程，导致 CPU 空转/调度异常 | [#878](https://github.com/nullclaw/nullclaw/pull/878) | **PR 待合并（6天）** | POSIX 平台，资源效率 |

> **风险评估**：P0 问题已有修复方案，若 #892 24-48 小时内合并则风险可控；#878 停留 6 天需关注是否因 review 资源或测试验证瓶颈。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| PR #885 [Hackathon] | **Data Governance Layer**：数据分类标签、RBAC 访问控制、审计日志、策略引擎 | 🟡 **中** — 架构方向契合企业级需求，但需评估：① 与现有 memory 模块的集成深度 ② 性能开销 ③ 维护承诺（外部赛事贡献者长期参与度） |
| PR #891 隐含需求 | **精细化错误码体系**：curl 错误透传为后续自动重试策略、断路器模式铺路 | 🟢 **高** — 属于工程基础能力，与现有 provider 架构自然延伸 |

**路线图信号**：项目正从"功能可用"向**企业就绪（Enterprise-Ready）**演进——稳定性（Windows 修复）、可观测性（错误码）、合规性（数据治理）三线并行。

---

## 7. 用户反馈摘要

> 提炼自 Issue #890 及关联讨论

| 维度 | 具体内容 |
|:---|:---|
| **痛点** | Windows 环境下 agent 完全不可用，错误信息 `AllProvidersFailed` 具有误导性（实际 DNS 层已失败，未到达 provider） |
| **使用场景** | 开发者通过 `nullclaw agent` 接入 OpenRouter 等聚合 API，期望跨平台一致体验 |
| **用户自救行为** | 用 `curl.exe` 验证网络连通性，确认问题在 NullClaw 内部而非环境配置 → **用户调试能力强，对工具透明度有期待** |
| **不满意** | ① 错误信息未区分"DNS 失败"与"Provider 失败" ② Windows 作为主流开发平台，基础网络功能未经充分验证 |
| **隐含期待** | 更快的 Windows CI 覆盖、更细粒度的错误分类（与 #891 方向一致） |

---

## 8. 待处理积压

| PR | 创建时间 | 滞留天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | 2026-04-30 | **6 天** | POSIX 线程修复，影响资源效率；可能因测试验证（多平台）或 review 带宽停滞 | 维护者确认是否需要补充特定平台测试用例，或分配 reviewer |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | 2026-05-04 | 2 天 | Hackathon 贡献，架构影响大，需设计评审 | 明确 draft → ready 的标准，安排架构 review |

> **维护者提醒**：4 个待合并 PR 中 3 个为修复类（#892, #891, #878），建议优先处理以控制技术债务累积。特别是 #892 作为 P0 修复，建议 expedited review。

---

*日报生成时间：2026-05-06*  
*数据来源：GitHub API / 公开仓库活动*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-06

## 1. 今日速览

IronClaw 今日呈现**高强度架构重构期**的典型特征：43 个 PR 更新（23 个已合并/关闭）、16 个 Issue 更新中 15 个为活跃状态，显示工程团队正在快速推进"Reborn"架构迁移。核心工作集中在 **TurnCoordinator 协调器设计**（#3013 及其 8 个子 Issue）、**CI 体系瘦身**（3 个相关 PR）以及 **历史 PR 抢救合并**（5 个 salvage PR）。项目健康度良好但技术债务清理压力显著——今日关闭的 23 个 PR 中，5 个为"salvage"（抢救）性质，反映主分支快速演进导致的历史 PR 失效问题。无新版本发布，crates.io 滞后问题（#3259）仍未解决。

---

## 2. 版本发布

**无新版本发布**

> ⚠️ **阻塞性依赖**：Issue #3259 指出 crates.io 仍停留在 0.24.0（2026-03-31），而 GitHub 已发布至 v0.27.0（2026-04-29）。下游用户因 wasmtime 28.x CVE 无法升级，建议优先处理。

---

## 3. 项目进展

### 3.1 Reborn 架构核心推进

| PR/Issue | 状态 | 进展说明 |
|---------|------|---------|
| [#3257](https://github.com/nearai/ironclaw/pull/3257) | ✅ **已合并** | **Turn 持久化合约落地**——定义 turns/runs/active locks/checkpoints/idempotency 五类核心记录，为 TurnCoordinator 提供内存状态管理基础 |
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | 🔄 待合并 | **Reborn 内存子系统**（PR 1 of #3118）：原生隔离 guardrails + lib.rs 模块拆分，原 7-PR 栈已压缩合并 |
| [#3243](https://github.com/nearai/ironclaw/pull/3243) | 🔄 待合并 | **Runtime Policy 生效**：1-7/8 PR 完成，模型可见工具列表正式经过 visibility filter |

### 3.2 CI/CD 体系重构（今日 4 个 PR）

| PR | 状态 | 关键改进 |
|---|------|---------|
| [#3263](https://github.com/nearai/ironclaw/pull/3263) | 🔄 待合并 | Merge Queue 瘦身：slim Rust/clippy 矩阵、smoke E2E 替代全量、剔除 Docker/Windows/benchmark |
| [#3262](https://github.com/nearai/ironclaw/pull/3262) | 🔄 待合并 | 确定性夜间深度检查：04:00 UTC 定时全矩阵覆盖 |
| [#3261](https://github.com/nearai/ironclaw/pull/3261) | 🔄 待合并 | 浏览器 E2E 从周一定时改为**夜间 03:00 UTC** |
| [#3268](https://github.com/nearai/ironclaw/pull/3268) | 🔄 待合并 | 修复 main 分支覆盖率阻塞：更新 engine-v2 单元测试 fixtures |

### 3.3 历史 PR 抢救合并（Salvage 模式）

| 原 PR | 抢救 PR | 内容 | 原作者 |
|-------|---------|------|--------|
| #2174 | [#3267](https://github.com/nearai/ironclaw/pull/3267) | Admin API + Responses API E2E 测试 | pranavraja99 |
| #2901 | [#3265](https://github.com/nearai/ironclaw/pull/3265) | Linear 技能凭证注入修复 | tobias-nf |
| #3217 | [#3260](https://github.com/nearai/ironclaw/pull/3260) | Docker Hub 镜像名修正 | abbyshekit |
| #2948 | [#3258](https://github.com/nearai/ironclaw/pull/3258) | 数据库与配置文档导航 | Kampouse |

> **模式观察**：serrrfirat 今日执行 4 次 salvage 操作，反映主分支演进速度超过社区 PR 跟进能力，需关注贡献者体验。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---:|-------|:---:|---------|
| 1 | [#3016](https://github.com/nearai/ironclaw/issues/3016) AgentLoopHost facade | 4 | 定义 Reborn 宿主层门面接口，解耦产品表面与内核 |
| 2 | [#3013](https://github.com/nearai/ironclaw/issues/3013) TurnCoordinator | 4 | **线程/回合准入控制**——Reborn 首个割接阻塞点 |
| 3 | [#3031](https://github.com/nearai/ironclaw/issues/3031) 产品表面迁移 EPIC | 3 | 协调整个 v1→v2 产品适配层迁移 |

### 诉求分析

**架构设计共识期**：#3013/#3016/#3198/#3202/#3204/#3193 形成密集的"Turn 协调"设计簇，6 个 Issue 在 5 月 2-5 日集中创建，显示团队正在**从高层 EPIC 向下分解到合约边界**。关键未决问题：
- 多租户回合准入策略（[#3264](https://github.com/nearai/ironclaw/issues/3264)，今日新建，0 评论）
- 同线程跟进与转向策略（[#3236](https://github.com/nearai/ironclaw/issues/3236)）

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---------|------|------|--------|
| 🔴 **中-高** | Docker Hub 镜像不存在 `nearai/ironclaw:latest` | ✅ 已关闭 | [#3217](https://github.com/nearai/ironclaw/pull/3217) → [#3260](https://github.com/nearai/ironclaw/pull/3260) |
| 🟡 **中** | 硬编码 URL（安全/可配置性债务） | ✅ 已关闭 | [#3271](https://github.com/nearai/ironclaw/pull/3271) |
| 🟡 **中** | Linear 技能凭证注入静默失败（`Bearer` 前缀错误） | ✅ 已关闭 | [#2901](https://github.com/nearai/ironclaw/pull/2901) → [#3265](https://github.com/nearai/ironclaw/pull/3265) |
| 🟡 **中** | CI 覆盖率在 main 阻塞 | 🔄 修复中 | [#3268](https://github.com/nearai/ironclaw/pull/3268) |

**回归风险**：#3257 合并的 turn persistence 合约是全新基础设施，需关注 #3268 覆盖率修复是否充分覆盖新路径。

---

## 6. 功能请求与路线图信号

### 已编码待合并（高置信度纳入）

| PR | 功能 | 路线图信号 |
|---|------|-----------|
| [#3243](https://github.com/nearai/ironclaw/pull/3243) | Runtime Policy 预设 + 生效策略 | **#3045 8-PR 序列的 1-7**，最后 1 个 PR（blueprint/harness）明确 out of scope |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | 按渠道 MCP/内置工具过滤 | 多通道部署刚需，3 月 18 日创建，持续更新 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Abound 演示：Responses API + 凭证注入 + 技能 | **v2-architecture 演示分支**，含 guardrails |

### 设计阶段（Reborn 架构）

| Issue | 功能域 | 与现有 PR 关联 |
|-------|--------|-------------|
| [#3269](https://github.com/nearai/ironclaw/issues/3269) | ProductAdapter 替换陈旧 transport PR | 替代 #3099，明确 supersede |
| [#3266](https://github.com/nearai/ironclaw/issues/3266) | 出站 egress + 订阅策略 | 依赖 #3093 EventProjectionService |
| [#3093](https://github.com/nearai/ironclaw/issues/3093) | EventProjectionService | 高层不应直接依赖事件存储 |

> **关键判断**：#3269 明确标记 #3099（Reborn transport adapter contract PR）为"stale"，显示 **Reborn 架构设计已发生实质性漂移**，早期 transport 假设被废弃。

---

## 7. 用户反馈摘要

### 直接痛点（来自 Issue 评论）

| 来源 | 痛点 | 场景 |
|------|------|------|
| #2963 ([magnusviri](https://github.com/magnusviri)) | Docker 安装文档指向不存在镜像 | **首次安装失败**，信任损耗 |
| #3259 ([dacoldest](https://github.com/dacoldest)) | crates.io 版本滞后导致 CVE 无法修复 | **下游企业用户**安全合规阻塞 |
| #2948 ([Kampouse](https://github.com/Kampouse)) | 完整数据库系统零文档 | 开发者不知 PostgreSQL/pgvector 已可用 |

### 隐含信号

- **文档-代码 Gap 严重**：数据库系统（24 个 migration、pgvector、dual-backend）完全未暴露给用户
- **发布流程断裂**：GitHub Release ≠ crates.io ≠ Docker Hub，三套渠道版本不一致
- **技能开发者体验**：Linear 凭证注入模式（`type: bearer` vs `type: header`）缺乏验证机制，导致静默失败

---

## 8. 待处理积压

### 高优先级关注

| Issue/PR | 创建时间 | 阻塞原因 | 建议行动 |
|---------|---------|---------|---------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布 | 2026-05-05 | 安全 CVE 影响下游 | **P0**：协调发布权限，0.25-0.27 同步推送 |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) Transport Adapter | 2026-04-29 | 被 #3269 标记 stale | 明确关闭或重构，避免贡献者精力浪费 |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) 渠道路由 | 2026-03-18 | 近 2 个月待合并 | 评估与 Reborn 架构兼容性，避免重复设计 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound 演示 | 2026-03-30 | v2-architecture 分支漂移 | 确定是否 rebase 到 Reborn 主线 |

### 架构债务预警

**"Reborn" 标签 Issue 已达 14 个开放**，形成深度依赖图（#2987 → #3031 → #3013 → #3016/#3193/#3195/#3198/#3199/#3202/#3204/#3236/#3264/#3266/#3269）。建议维护者：
1. 在 #3013 或 #3031 置顶**实时更新的架构决策记录（ADR）**
2. 对 #3099 等明确废弃的 PR 执行正式关闭并 redirect
3. 评估是否需暂停非 Reborn 大 PR（#1378, #1764）的审查资源

---

*日报生成时间：2026-05-06 | 数据来源：GitHub API 快照 | 项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-06

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-06  
> **分析师**: AI 智能体与开源项目观察

---

## 1. 今日速览

LobsterAI 今日活跃度**偏低**，社区处于维护期节奏。过去24小时无新增 Issues，PR 活动集中于**技能生态维护**与**稳定性修复**两大方向：2条 PR 已合并关闭，1条涉及 Electron 主进程崩溃的关键修复 PR 仍处于待合并状态（已挂起逾40天）。整体项目健康度平稳，但核心稳定性问题存在积压风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（2条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1882](https://github.com/netease-youdao/LobsterAI/pull/1882) | liuzhq1986 | **有道云笔记技能升级至 v1.0.8** | 第三方技能生态持续迭代，保障与有道云笔记服务的兼容性 |
| [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) | liuzhq1986 | **Windows 技能删除可靠性增强 + 导入反馈优化** | 平台适配深化：①安装后自动规范化文件属性（`attrib -r -s -h`）降低后续删除失败率；②强化权限类错误（`EPERM/EACCES/EBUSY`）的诊断日志；③新增本地化成功提示 | 

**整体评估**：今日合并内容属于**质量加固型**更新，聚焦 Windows 平台的边缘场景鲁棒性，未涉及架构级变更。技能管理基础设施的可靠性有所提升，但用户感知度有限。

---

## 4. 社区热点

### 🔥 待合并 PR：Electron 主进程崩溃修复（高关注度/低响应）

| 指标 | 数据 |
|:---|:---|
| **PR** | [#808](https://github.com/netease-youdao/LobsterAI/pull/808) |
| **状态** | `OPEN` + `stale`（创建于 2026-03-25，已逾 **42 天**） |
| **作者** | BucleLiu |
| **核心问题** | AI 流式响应过程中用户关闭窗口 → **Electron 主进程崩溃 → 全应用退出 → 未保存会话全部丢失** |

**诉求分析**：  
此 PR 直击**数据安全核心痛点**——流式生成场景下的"暴力关闭"是高频用户行为，当前崩溃导致**零容错**体验。PR 标记 `stale` 反映维护响应滞后，社区对稳定性保障的期待与实际处理节奏存在落差。该 Issue 的沉默积压可能损害用户信任，尤其是将 LobsterAI 作为生产力工具的深度用户。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|:---|:---|:---|:---|
| 🔴 **P0 - 数据丢失风险** | 流式响应时关闭窗口导致 Electron 主进程崩溃，会话内容全部丢失 | **待合并**（#808 stale 42天） | [#808](https://github.com/netease-youdao/LobsterAI/pull/808) |
| 🟡 **P2 - 平台适配** | Windows 技能删除因文件属性/权限失败 | **已修复**（今日合并） | [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) |

**关键风险**：P0 级崩溃问题长期悬而未决，且无任何维护者公开反馈或替代方案。建议优先评估 #808 的合并可行性，或至少提供临时缓解措施（如：关闭前拦截确认、会话自动保存）。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**（0 Issues 活动）。

**从现有 PR 推断的潜在方向**：
- **技能生态扩展**：有道云笔记技能持续版本迭代（1.0.8），暗示官方技能商店可能是长期投入重点
- **跨平台体验对齐**：Windows 专项优化（#1881）暗示 macOS/Linux 可能存在同类未曝光问题，或需统一技能生命周期管理

---

## 7. 用户反馈摘要

**今日无新增用户反馈数据**（0 Issues / 0 PR 评论）。

**基于历史 PR #808 的隐含用户画像推断**：
- **高频场景**：AI 长文本生成过程中需要中断/切换任务
- **痛点**：应用崩溃的代价极高（未保存会话丢失），而非优雅降级
- **期望**：类似 VS Code / 浏览器的崩溃恢复机制，或至少关闭前的确认保护

---

## 8. 待处理积压

### ⚠️ 重点提醒：核心稳定性 PR 超期未决

| 项目 | [#808](https://github.com/netease-youdao/LobsterAI/pull/808) |
|:---|:---|
| **类型** | Pull Request（Bug Fix） |
| **挂起时长** | **42 天**（自 2026-03-25） |
| **影响面** | 所有使用流式 AI 响应的 Electron 端用户 |
| **风险等级** | 🔴 高——数据丢失类缺陷直接关联产品可靠性口碑 |
| **建议行动** | ① 维护者评估合并/反馈；② 若存在阻塞原因，应在 PR 中公开说明；③ 考虑先合并至 nightly 分支收集验证 |

---

## 附录：今日数据仪表盘

| 指标 | 数值 | 环比 |
|:---|:---|:---|
| Issues 更新 | 0 | - |
| PR 更新 | 3 | - |
| 其中待合并 | 1 | - |
| 已合并/关闭 | 2 | - |
| 新版本 | 0 | - |
| 社区评论活动 | 0 | 低活跃 |

---

> **明日关注**：#808 是否获得维护者响应；技能生态是否有新 PR 涌入；Issues 区域是否恢复活跃。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-06

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-06  
> **分析周期**: 过去 24 小时（2026-05-05 至 2026-05-06）

---

## 1. 今日速览

Moltis 项目今日处于**极低活跃度状态**。过去 24 小时内仅收到 1 条自动化依赖更新 PR，无人工提交的代码变更、无 Issues 活动、无版本发布。社区讨论完全静默，项目维护者未进行任何合并操作或公开互动。作为 AI 智能体与个人 AI 助手领域的开源项目，此活跃度水平显著低于健康开源项目的典型基准（日均 3-5 项人工活动），表明项目可能处于**维护模式或核心团队资源紧张期**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并或关闭的 PR**

| 状态 | 数量 | 说明 |
|:---|:---|:---|
| 已合并 | 0 | — |
| 已关闭 | 0 | — |
| 待处理 | 1 | 依赖机器人自动提交 |

**待处理 PR 详情**：
- **[#967](https://github.com/moltis-org/moltis/pull/967)** `chore(deps): bump the cargo group across 1 directory with 3 updates`  
  由 `dependabot[bot]` 于 2026-05-05 自动创建，将核心依赖 `gix` 从 0.78.0 升级至 0.83.0（跨度 5 个 minor 版本）。该 PR 目前处于开放状态，**无人审查、无评论互动、无赞成反应**。`gix` 作为 Git 操作的核心库，此升级可能涉及 API 变更，需维护者评估兼容性风险。

> **进展评估**: 项目今日在功能演进上**零推进**，仅积累技术债务（待审依赖更新）。

---

## 4. 社区热点

**今日无社区讨论热点**

| 指标 | 数值 | 健康度基准 |
|:---|:---|:---|
| 最热 Issue 评论数 | N/A | ≥3 为活跃 |
| 最热 PR 反应数 | 0 👍 | ≥5 为关注 |
| 人工互动总量 | 0 | ≥5 为健康 |

**唯一 PR #967 的社区信号分析**：
- **零人工参与**：无维护者审查、无社区成员评论，反映 either (a) 依赖更新过于频繁导致审查疲劳，或 (b) 核心审阅者可用性不足
- **gix 升级跨度异常**：0.78.0 → 0.83.0 跨越 5 个 minor 版本，可能暗示此前依赖更新已长期积压，或 dependabot 配置为批量升级模式

---

## 5. Bug 与稳定性

**今日无新报告 Bug**

| 严重程度 | 数量 | 已修复 | 待修复 |
|:---|:---|:---|:---|
| Critical (崩溃/数据丢失) | 0 | — | — |
| High (功能失效) | 0 | — | — |
| Medium (性能/兼容) | 0 | — | — |
| Low (UI/文档) | 0 | — | — |

**潜在稳定性风险**：
- **PR #967** 涉及的 `gix` 升级可能引入未发现的回归问题。`gix` 0.80+ 版本系列包含 [refactorings of object database APIs](https://github.com/GitoxideLabs/gitoxide/releases)，建议合并前运行完整 CI 套件。

---

## 6. 功能请求与路线图信号

**今日无新功能请求**

结合现有待处理 PR 判断：
| 来源 | 信号强度 | 纳入下一版本可能性 | 依据 |
|:---|:---|:---|:---|
| #967 依赖更新 | 低 | 高（阻塞性） | 安全/兼容性维护的基础工作，通常优先合并 |

> 无用户驱动的功能需求进入讨论，路线图方向**不可观测**。

---

## 7. 用户反馈摘要

**今日无用户反馈数据**

从 Issues/PR 评论中无法提炼真实用户痛点。建议关注：
- 项目 Discussions 板块或外部社区（Discord/Reddit/Slack）是否存在未同步至 GitHub 的用户声音
- 近期 Release 的下载量/使用数据是否反映用户流失或增长（需额外数据）

---

## 8. 待处理积压

| 类型 | 项目 | 积压时长 | 风险等级 | 行动建议 |
|:---|:---|:---|:---|:---|
| 依赖安全更新 | [PR #967](https://github.com/moltis-org/moltis/pull/967) | ~1 天 | 🟡 中 | **建议 48 小时内审查合并**；`gix` 涉及 Git 操作安全边界，长期积压增加供应链攻击面 |
| 人工代码审查 | 全部开放 PR | 长期 | 🔴 高 | 需评估核心维护者带宽；若持续无响应，考虑扩展维护团队或发布维护状态公告 |

**系统性观察**：过去 24 小时零人工活动，若此模式持续 7 天以上，建议项目方通过 README 或 Discussion 向社区透明沟通维护状态，避免用户信心流失。

---

## 附录：数据完整性声明

| 数据源 | 覆盖度 | 备注 |
|:---|:---|:---|
| Issues | 100% | 0 条，确认无活动 |
| PRs | 100% | 1 条，已全部分析 |
| Releases | 100% | 0 条，确认无发布 |
| 评论内容 | 100% | PR #967 无评论，"undefined" 为数据解析状态 |

---

*本日报基于 GitHub 公开 API 数据生成，未包含私有仓库、Draft PR 或已删除内容。如需深度分析，建议补充 CI 状态、代码审查历史及外部社区数据。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-06

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (原 QwenPaw)  
> **日期**: 2026-05-06 | **数据来源**: GitHub Issues & PRs 过去24小时

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24小时内产生 **10 条 Issues 更新**（6 新开/活跃，4 关闭）与 **10 条 PR 更新**（9 待审，1 关闭），无新版本发布。社区贡献显著：**5 个首次贡献者 PR** 涌入，覆盖国际化、安全加固、Windows 体验优化与通道稳定性修复。核心信号：项目正从"功能扩展期"进入"质量加固与多平台体验优化期"，但 PR 审阅积压明显（9/10 待合并），维护带宽成为潜在瓶颈。

---

## 2. 版本发布

**无新版本发布**  
上一个版本为 v1.1.5.post1（2026-05-03 前后），今日未发布更新。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) `feat(chat): generate session titles asynchronously via LLM` | ekzhu | **已关闭** | 会话标题由"前10字符截断"升级为 LLM 异步生成，UX 显著提升。该 PR 经审阅后关闭，功能或已整合至主分支 |

### 已关闭的 Issues（功能落地信号）

| Issue | 关联功能 | 状态 |
|:---|:---|:---|
| [#2553](https://github.com/agentscope-ai/QwenPaw/issues/2553) 优化模型列表排序与会话标题生成 | 模型列表可用性优先排序 + LLM 标题生成 | **已完成** |
| [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) Windows 系统托盘功能 | 桌面端后台运行体验 | **已有 PR #4041 实现** |
| [#1798](https://github.com/agentscope-ai/QwenPaw/issues/1798) Discord 多频道任务并行优化 | 多任务调度 | **已关闭** |
| [#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) OpenCode 免费模型连接异常 | 第三方模型配置修复 | **已关闭** |

**整体推进评估**：今日核心进展集中在 **UX 精细化**（智能标题生成）与 **Windows 桌面体验补齐**（系统托盘），多智能体协作基础设施（#3224 Agent Teams）仍处于需求讨论阶段。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issues（按评论数排序）

| 排名 | Issue/PR | 评论 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) **CoPaw Agent Teams — 自然语言驱动的自进化多智能体协作团队** | 5 | **战略级功能请求**。用户不满现有"手动挡"多智能体配置，要求**自然语言一键创建团队、角色自进化、动态任务分解**。反映市场对 AutoGPT/BabyAGI 式自主协作的强烈需求，CoPaw 1.0 的"并行运行"基础已无法满足进阶用户 |
| 2 | [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) 聊天对话框自定义智能体名称与头像 | 3 | **个性化与身份认同需求**。多智能体场景下用户需要视觉区分不同角色，提升沉浸感 |
| 3 | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) HEARTBEAT.md 导致网络断连后无法自动重连 | 3 | **生产环境稳定性痛点**。HEARTBEAT 机制与网络恢复逻辑存在冲突，影响长时间运行代理的可靠性 |
| 4 | [#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) OpenCode 免费模型连接异常 | 3 | 第三方模型接入配置文档/引导不足，已关闭 |

**热点洞察**：社区正从"能用"向"好用、想长期用"跃迁——**Agent Teams** 代表架构升级诉求，**个性化 UI** 代表情感化体验诉求，**网络自愈** 代表企业级可靠性诉求。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) HEARTBEAT.md 网络断连后无法自动重连 | 开启 HEARTBEAT 后网络中断→恢复，消息渠道永久失联，需手动重启 | 长运行 Agent、自主代理场景 | **无 Fix PR**，关闭 HEARTBEAT 可规避 |
| **P0** | [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) Windows 版启动缓慢 + 技能安装未注册 | `npx skills add` 成功但 skill.json 未更新；启动耗时过长 | Windows 桌面用户核心体验 | **无 Fix PR**，需紧急响应 |
| **P1** | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) DingTalk 通道最终结果通知失败 | Event Loop 生命周期竞态条件，stream 模式下任务完成通知丢失 | 企业钉钉集成用户 | **无 Fix PR** |
| **P1** | [#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040) AnthropicChatModel 硬编码 max_tokens=2048 | 自定义 Anthropic 兼容提供商（Mimo、Minimax 等）响应被截断，无法利用 128K 输出能力 | 第三方模型提供商用户 | **无 Fix PR** |

**稳定性风险评估**：今日 4 个活跃 Bug 中 **2 个 P0 均无修复 PR**，且 [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) 与 [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) 直接影响核心可用性。PR 审阅积压可能导致修复延迟。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 成熟度评估 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| **Agent Teams 自进化多智能体协作** | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 需求文档完整（含角色定义、协作协议、记忆共享方案），但架构改动大 | ⭐⭐⭐ 中长期（v1.3+），需核心维护者 RFC 审阅 |
| **语义化技能路由（Semantic Skill Routing）** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | **PR 已提交**，基于 Embedding 的 Top-K 技能筛选，减少 Token 消耗 | ⭐⭐⭐⭐⭐ 高概率纳入，技术方案成熟，待审阅 |
| **巴西葡萄牙语国际化** | [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | **PR 已提交**，首次贡献者完成 Console + Website 完整翻译 | ⭐⭐⭐⭐⭐ 高概率纳入，低风险 |
| **Windows 系统托盘** | [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) + [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) | **PR 已提交**（win32 only），对应 Issue 已关闭 | ⭐⭐⭐⭐ 高概率纳入，但需扩展至跨平台 |
| **自定义智能体名称与头像** | [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | 需求明确，前端改动，无 PR | ⭐⭐⭐ 中等，可与 Agent Teams 联动设计 |
| **安全加固：非 loopback 绑定拒绝 + 文件覆盖保护** | [#4038](https://github.com/agentscope-ai/QwenPaw/pull/4038) + [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) | **双 PR 已提交**，生产环境安全刚需 | ⭐⭐⭐⭐⭐ 应紧急纳入，涉及默认安全配置 |

**路线图信号**：下一版本（v1.2.x 推测）大概率聚焦 **安全加固**（#4038, #4026）、**国际化**（#4009）、**Windows 体验**（#4041）与 **技能系统智能化**（#3117）。Agent Teams 作为差异化竞争力，需启动 RFC 流程。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型场景 |
|:---|:---|:---|
| **Windows 启动慢 + 技能注册失效** | [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) | "安装技能后无法使用，重启也无效"——新手入门挫败感极高 |
| **网络中断 = 服务永久死亡** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | 服务器部署场景下，HEARTBEAT 本为保活机制，反成故障源 |
| **第三方模型配置"黑盒"** | [#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) | OpenCode 内置模型连接失败，URL/API Key 配置逻辑不透明 |
| **多智能体协作"太手动"** | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 用户期望"一句话建团队"，实际需逐个配置工作区、记忆、权限 |

### 😊 满意点

- **多身份隔离基础能力获认可**："CoPaw 1.0 已经支持工作与生活的身份隔离"——用户认可现有基础设施价值
- **社区响应速度尚可**：Issues 更新日期密集，维护者有一定互动

### 💡 使用场景洞察

- **企业集成**：DingTalk 通道使用深入（stream 模式、markdown、TaskTracker），反映 B 端渗透
- **长运行自主代理**：HEARTBEAT、系统托盘、网络重连等需求，指向"7×24 后台代理"场景
- **多模型策略**：用户同时使用官方 + OpenCode + Anthropic 兼容 + 本地模型，**模型路由灵活性**成隐性需求

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注

| 类型 | 条目 | 滞留时间 | 风险 |
|:---|:---|:---|:---|
| **PR 审阅积压** | 9/10 PR 待合并，含 5 个首次贡献者 | 部分已超 3 天 | 贡献者流失、社区热情衰减 |
| **P0 Bug 无响应** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) HEARTBEAT 网络恢复失效 | 创建 2 天，3 评论无维护者介入 | 生产环境用户可能弃用 |
| **P0 Bug 无响应** | [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) Windows 启动慢 + 技能注册 | 当日创建，已汇总多问题 | 新用户转化率受损 |
| **架构级需求无 RFC** | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) Agent Teams | 创建 26 天，5 评论 | 竞品可能抢先实现自进化多智能体 |
| **长期待审 PR** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) 语义技能路由 | 创建 27 天，标记 "need discussions" | 技术债务累积，合并冲突风险 |

### 📋 建议行动

1. **建立 P0 Bug 24 小时响应 SLA**：[#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017)、[#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) 需维护者当日认领
2. **首次贡献者 PR 优先通道**：#4009、#4041、#4038、#4026、#4032、#4021、#4028 等 7 个 PR 可批量审阅，低风险高社区回报
3. **Agent Teams RFC 启动**：将 [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) 从 Issue 讨论升级为正式 RFC，明确里程碑

---

> **日报生成说明**：基于 GitHub 公开数据自动分析，链接指向 `agentscope-ai/QwenPaw` 仓库。项目名称显示为 QwenPaw 系原始数据标注，与 CoPaw 品牌一致。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-06

**项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
**日期**: 2026-05-06  
**分析周期**: 过去 24 小时（2026-05-05 至 2026-05-06）

---

## 1. 今日速览

今日 ZeptoClaw 项目呈现**低活跃、高维护负荷**特征。Issues 零活动表明社区反馈渠道暂时静默，但 **11 条待合并的 Dependabot 依赖升级 PR** 集中涌入，构成今日全部工作量。所有 PR 均为自动化工具提交的依赖补丁，无人工功能开发或 Bug 修复介入。项目核心代码未发生实质推进，维护者需处理积压的依赖更新以保持供应链安全。整体健康度评估：**维护性运转正常，开发动能不足**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无合并或关闭的 PR。**

11 条待处理 PR 全部为依赖升级，按技术栈分类如下：

| 类别 | 数量 | 涉及 PR | 影响范围 |
|:---|:---|:---|:---|
| **Rust 核心依赖** | 5 | #573, #575, #577, #579, #581 | 运行时（tokio, axum）、TLS（rustls）、系统接口（libc）、CLI（rustyline） |
| **JavaScript 文档站点** | 5 | #572, #576, #578, #580, #582 | 文档框架（Astro, Starlight）、开发工具（globals） |
| **CI/CD 工具** | 1 | #574 | GitHub Actions 工作流 |

**关键依赖升级分析**：

- **[#573 tokio 1.51.1 → 1.52.1](https://github.com/qhkm/zeptoclaw/pull/573)** — 异步运行时补丁版本，包含 [2026-04-16 关键修复](https://github.com/tokio-rs/tokio/releases)，建议优先审核
- **[#579 rustls 0.23.37 → 0.23.39](https://github.com/qhkm/zeptoclaw/pull/579)** — TLS 库安全更新，涉及加密组件，安全敏感度高
- **[#575 axum 0.8.8 → 0.8.9](https://github.com/qhkm/zeptoclaw/pull/575)** — Web 框架新增 `WebSocketUpgrade` 相关功能，需确认是否涉及 API 变更

> **整体进展评估**：项目今日在功能层面**零推进**，依赖维护层面**积压 11 项待审**。

---

## 4. 社区热点

**今日无社区讨论热点。**

所有 PR 均为 `dependabot[bot]` 自动化提交，**零人工评论、零用户反应（👍: 0）**。表明：
- 依赖升级未引发社区关注或争议
- 无破坏性变更的公开讨论
- 项目缺乏活跃的贡献者审查流程

**建议关注**：若 [#581 rustyline 18.0.0](https://github.com/qhkm/zeptoclaw/pull/581) 为大版本升级（major），可能隐含 CLI 交互层面的破坏性变更，需人工验证。

---

## 5. Bug 与稳定性

**今日无新报告的 Bug、崩溃或回归问题。**

| 严重程度 | 数量 | 说明 |
|:---|:---|:---|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

**潜在风险预警**：  
- **[#579 rustls 升级](https://github.com/qhkm/zeptoclaw/pull/579)** 虽未标记为安全修复，但 TLS 库版本跳跃通常包含漏洞修补，建议维护者优先合并并发布补丁版本
- **[#581 rustyline 17→18](https://github.com/qhkm/zeptoclaw/pull/581)** 大版本升级，需检查 `Cargo.toml` 中是否启用新弃用功能或变更的默认行为

---

## 6. 功能请求与路线图信号

**今日无功能请求或路线图相关讨论。**

依赖升级 PR 中隐含的技术方向信号：

| PR | 技术信号 | 对路线图的影响 |
|:---|:---|:---|
| [#572-#580 Astro/Starlight 升级](https://github.com/qhkm/zeptoclaw/pulls?q=is%3Apr+astro) | 文档站点持续迭代 | 项目重视文档体验，可能酝酿文档重构或新内容发布 |
| [#573 tokio 升级](https://github.com/qhkm/zeptoclaw/pull/573) | 异步生态紧跟上游 | 核心运行时保持 modern，为 async 功能扩展奠基 |
| [#575 axum 0.8.9](https://github.com/qhkm/zeptoclaw/pull/575) | WebSocket 相关增强 | 可能支撑未来实时通信或 Agent 流式交互功能 |

> **判断**：短期内无新功能纳入信号，项目处于**稳定维护期**而非活跃开发期。

---

## 7. 用户反馈摘要

**今日无用户反馈数据。**

Issues 零活动导致无法提炼真实用户痛点。结合历史模式推断：
- 文档站点依赖频繁升级（Astro/Starlight 双路径）暗示文档可能是用户主要接触面
- 核心 Rust 依赖（tokio, axum）的稳定性升级反映生产环境运行需求
- **风险点**：长期缺乏用户反馈渠道活跃，可能掩盖实际使用障碍

---

## 8. 待处理积压

### 紧急待审：依赖升级队列（11 PRs）

| 优先级 | PR | 理由 | 创建时间 | 等待时长 |
|:---|:---|:---|:---|:---|
| 🔴 P0 | [#573 tokio 1.52.1](https://github.com/qhkm/zeptoclaw/pull/573) | 运行时关键修复，影响所有 async 代码 | 2026-05-05 | ~1 天 |
| 🔴 P0 | [#579 rustls 0.23.39](https://github.com/qhkm/zeptoclaw/pull/579) | TLS 安全组件，供应链安全敏感 | 2026-05-05 | ~1 天 |
| 🟡 P1 | [#575 axum 0.8.9](https://github.com/qhkm/zeptoclaw/pull/575) | Web 框架功能更新，需验证兼容性 | 2026-05-05 | ~1 天 |
| 🟡 P1 | [#581 rustyline 18.0.0](https://github.com/qhkm/zeptoclaw/pull/581) | Major 版本，需人工审查变更日志 | 2026-05-05 | ~1 天 |
| 🟢 P2 | 其余 7 条 JS/CI 依赖 | 常规补丁，可批量处理 | 2026-05-05 | ~1 天 |

### 长期风险提醒

- **Dependabot 配置评估**：单日 11 条 PR 的涌入量可能表明依赖更新策略过于激进（如 `versioning-strategy: increase`），建议维护者审查 [`.github/dependabot.yml`](https://github.com/qhkm/zeptoclaw/blob/main/.github/dependabot.yml) 是否需调整为按周聚合或分组更新，降低审查噪音
- **人工审查缺口**：全部 PR 零评论、零合并，提示维护者时间分配或 CI 自动化审查流程可能存在瓶颈

---

## 附录：今日全部 PR 索引

| # | 状态 | 标题 | 作者 | 链接 |
|:---|:---|:---|:---|:---|
| 582 | OPEN | chore(deps-dev): bump globals from 17.3.0 to 17.5.0 in /panel | dependabot[bot] | [PR #582](https://github.com/qhkm/zeptoclaw/pull/582) |
| 581 | OPEN | chore(deps): bump rustyline from 17.0.2 to 18.0.0 | dependabot[bot] | [PR #581](https://github.com/qhkm/zeptoclaw/pull/581) |
| 580 | OPEN | chore(deps): bump @astrojs/starlight from 0.38.3 to 0.38.4 in /landing/zeptoclaw/docs | dependabot[bot] | [PR #580](https://github.com/qhkm/zeptoclaw/pull/580) |
| 579 | OPEN | chore(deps): bump rustls from 0.23.37 to 0.23.39 | dependabot[bot] | [PR #579](https://github.com/qhkm/zeptoclaw/pull/579) |
| 578 | OPEN | chore(deps): bump astro from 6.1.6 to 6.1.9 in /landing/zeptoclaw/docs | dependabot[bot] | [PR #578](https://github.com/qhkm/zeptoclaw/pull/578) |
| 577 | OPEN | chore(deps): bump libc from 0.2.185 to 0.2.186 | dependabot[bot] | [PR #577](https://github.com/qhkm/zeptoclaw/pull/577) |
| 576 | OPEN | chore(deps): bump astro from 6.1.6 to 6.1.9 in /landing/r8r/docs | dependabot[bot] | [PR #576](https://github.com/qhkm/zeptoclaw/pull/576) |
| 575 | OPEN | chore(deps): bump axum from 0.8.8 to 0.8.9 | dependabot[bot] | [PR #575](https://github.com/qhkm/zeptoclaw/pull/575) |
| 574 | OPEN | chore(deps): bump taiki-e/install-action from 2.75.17 to 2.75.22 | dependabot[bot] | [PR #574](https://github.com/qhkm/zeptoclaw/pull/574) |
| 573 | OPEN | chore(deps): bump tokio from 1.51.1 to 1.52.1 | dependabot[bot] | [PR #573](https://github.com/qhkm/zeptoclaw/pull/573) |
| 572 | OPEN | chore(deps): bump @astrojs/starlight from 0.38.3 to 0.38.4 in /landing/r8r/docs | dependabot[bot] | [PR #572](https://github.com/qhkm/zeptoclaw/pull/572) |

---

*本日报基于 GitHub 公开数据自动生成，未包含私有仓库或外部沟通渠道信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-06

## 1. 今日速览

ZeroClaw 今日呈现**极高活跃度**：50 条 Issues 更新（46 条新开/活跃，仅 4 条关闭）与 50 条 PR 更新（38 条待合并，12 条已合并/关闭），形成 **4:1 的开放/关闭比**，表明社区涌入大量新需求与问题，但合并吞吐存在瓶颈。无新版本发布，v0.7.5 里程碑仍在推进中。WhatsApp 渠道因 4 月底服务器协议变更出现集中故障，成为今日最高优先级战场；同时 v0.8.0 集成分支的架构重构（typed provider family、HMAC receipts、session backend 统一）进入密集 PR 阶段，显示项目正处于**稳定性维护与大版本重构并行**的关键期。

---

## 2. 版本发布

**无新版本发布**

v0.7.5 里程碑（[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)）持续跟踪中，聚焦发布自动化改造。今日无 release 产出。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 影响 |
|:---|:---|:---|:---|
| [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | singlerider | **HMAC tool receipts 功能激活** — 补全 #5168 遗漏的运行时接线 | 安全模块从"文档已描述、代码未生效"变为实际可用，工具调用链获得加密收据验证 |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | patrickzzz | **Matrix 渠道重复回复修复** — sync loop 重启时清理 event handler | 解决 Matrix 渠道消息雪崩的内存泄漏类问题 |

### 关键推进中的 PR（v0.8.0 集成批次）

| PR | 目标分支 | 核心变更 |
|:---|:---|:---|
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | `integration/v0.8.0` | **Typed-family provider 拆分**：模型与 TTS provider 类型化分离，解决同模型多 provider 异价问题（关联 [#6251](https://github.com/zeroclaw-labs/zeroclaw/issues/6251)） |
| [#6384](https://github.com/zeroclaw-labs/zeroclaw/pull/6384) | `master` | **Session backend 统一**：JSONL vs SQLite 双后端导致的会话不可见问题 |
| [#6387](https://github.com/zeroclaw-labs/zeroclaw/pull/6387) | `master` | **WS tool-approval 回传通道**：修复 `/ws/chat` 路径下监督工具调用自动拒绝 |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | `master` | **Nodes 仪表盘**：多实例舰队管理界面，含健康状态、重命名、token 轮换 |

**整体评估**：项目正从"单节点 CLI 工具"向"分布式多节点网关"架构跃迁，v0.8.0 的 schema 驱动配置、统一会话层、节点治理构成三大支柱。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) `default_model` 全新安装故障 | **17 条** | **新手体验断裂**：LXC 容器+远程 Ollama 场景下，配置初始化后 `zeroclaw agent` 直接崩溃，阻碍首次使用 |
| 🔥2 | [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) 更好的 Logo 设计 | **9 条** | 社区品牌认同，附具体设计方案对比 |
| 🔥3 | [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) v0.7.5 里程碑追踪 | **6 条** | 发布流程工业化，消除手动版本 bump |
| 🔥4 | [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) 记忆自动保存因 `session_id` 不匹配不可见 | **6 条** | **数据丢失感知**：用户以为记忆保存成功，实际召回失败（已关闭，[#6384](https://github.com/zeroclaw-labs/zeroclaw/pull/6384) 根治） |

### 诉求分析

- **#6123 的 17 条评论**揭示 onboarding 流程的**配置验证缺失**：远程 provider 场景下，安装程序未检测 `default_model` 与可用模型的兼容性，直接生成无效配置。用户反复尝试、报错、再尝试，形成负面首因效应。
- **#4710 的持久热度**（3 月创建，5 月仍活跃）说明项目视觉识别与其实际技术成熟度不匹配，可能影响企业采用决策。

---

## 5. Bug 与稳定性

### S1（工作流阻断）| 需立即响应

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | 全新安装 `default_model` 配置错误导致 agent 无法启动 | 🔴 开放，待维护者评审 | 无 |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | **WhatsApp Web 协议升级后消息完全中断**（4/24 服务器侧变更） | 🔴 开放 | 无 |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | Gateway chat 成功但 `/api/cost` 恒为零，无 trace 文件写入 | 🔴 开放，进行中 | 无 |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | `context_compression` 丢弃 tool 消息导致 OpenAI-compatible provider（MiniMax）工具循环+2013 错误 | 🔴 开放，进行中 | 无 |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker bind mount 覆盖预构建 web dashboard | 🟡 开放，待维护者评审 | 无 |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | Custom remote provider 发送本地图片路径而非 data URL，多模态请求失败 | 🟡 开放，待维护者评审 | 无 |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding 选择 OpenAI Codex 却索要 OpenAI API key | 🟡 开放，已接受 | 无 |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | Llama.cpp 默认应使用 "responses" 而非 "chat.completions" | 🟡 开放，待维护者评审 | 无 |

### S2（行为降级）

| Issue | 描述 | Fix PR |
|:---|:---|:---|
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Telegram 渠道 prompt caching 失效，强制全量重处理 | 无 |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Daemon 节点心跳虚假 Online（无真实 WS 消息检测） | 无 |
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | WhatsApp self-chat 模式误触发，agent 向操作者联系人发送消息 | 无 |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp LID-based 联系人绕过 `allowed-numbers`，静默丢消息 | 无 |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | Bash completion 无限递归崩溃 SSH 会话 | 无 |

### WhatsApp 渠道危机专项

4 月 24 日 WhatsApp 服务器协议升级后，项目出现**三重重创**：
- **功能中断**：[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) 消息完全停止流动
- **安全降级**：[#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) 身份混淆导致误发消息、[#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) 访问控制绕过

**风险**：WhatsApp 作为高渗透率渠道，其故障直接影响生产用户。目前无明确修复 PR，依赖 `wa-rs` 上游适配进度。

---

## 6. 功能请求与路线图信号

### 高置信度纳入下一版本（已有 PR 或已接受）

| 功能 | Issue/PR | 信号强度 |
|:---|:---|:---|
| **Provider 级成本配置** | [#6251](https://github.com/zeroclaw-labs/zeroclaw/issues/6251) + [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | ⭐⭐⭐⭐⭐ v0.8.0 核心架构 |
| **Discord 频道白名单** | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)（替代关闭的 [#6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075)） | ⭐⭐⭐⭐⭐ 已接受，模式复用 Matrix/Nextcloud |
| **Telegram 回复节流** | [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) + [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) | ⭐⭐⭐⭐⭐ PR 已开 |
| **PR 标题格式检查 CI** | [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) + [#6396](https://github.com/zeroclaw-labs/zeroclaw/pull/6396) | ⭐⭐⭐⭐⭐ 当日闭环 |
| **macOS Universal Binary** | [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | ⭐⭐⭐⭐ 桌面生态扩展 |
| **菜单栏托盘功能** | [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) | ⭐⭐⭐⭐ 桌面体验补全 |

### 待观察（Blocked 或设计争议）

| 功能 | Issue | 阻塞因素 |
|:---|:---|:---|
| **Daemon 真实心跳** | [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | 状态：`blocked`，需 fleet-add CLI 配合 |
| **V3 环境变量覆盖机制** | [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | 配置架构重构后的回退机制设计 |
| **桌面端工具调用展示优化** | [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) | 等待 [#6348](https://github.com/zeroclaw-labs/zeroclaw/issues/6348) web 端方案确定 |

---

## 7. 用户反馈摘要

### 痛点聚类

| 场景 | 典型反馈 | 来源 |
|:---|:---|:---|
| **安装即崩溃** | "fresh install on LXC... get this error" — 配置生成未验证远程模型可用性 | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **文档与代码脱节** | "docs already describe the activated shape" — HMAC receipts 文档说已发布，实际未接线 | [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) |
| **渠道间体验不一致** | "when chatting over CLI, prompt caching works... over telegram, forcing full re-processing" | [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) |
| **第三方网站误导** | "https://zeroclaws.io/install/ docker install 全是错的" — 非官方域名传播错误信息 | [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) |
| **成本不可见** | "/api/cost stays zero and no runtime-trace.jsonl" — 运行成功但计费追踪完全缺失 | [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) |
| **ARM 边缘部署** | "Raspberry Pi 4B... using remote vllm" — 嵌入式场景增长，但多模态路径发送本地文件路径 | [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) |

### 满意度信号

- **web_fetch 可用 vs web_search 失效**（[#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373)）：工具链部分可用，但搜索依赖的 DuckDuckGo API 集成存在配置或网络问题
- **Matrix 重复回复修复获认可**：PR 描述详细，社区期待合并

---

## 8. 待处理积压

### 需维护者紧急关注的长期 Issue

| Issue | 创建 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) Logo 重设计 | 2026-03-25 | 2026-05-05 | 品牌债务，社区有设计方案但无决策流程 |
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) v0.7.5 里程碑 | 2026-04-18 | 2026-05-05 | 发布自动化阻塞，影响后续版本节奏 |
| [#6030](https://github.com/zeroclaw-labs/zeroclaw/issues/6030) TOOL_LOOP_SESSION_KEY 渠道作用域 | 2026-04-23 | 2026-05-05 | 渠道工具调用架构缺陷，关联多个 open PR |
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) 全新安装故障 | 2026-04-26 | 2026-05-05 | **新手流失直接原因**，17 条评论无维护者方案 |

### PR 合并瓶颈

- **38 条待合并 PR** 中，singlerider 单人贡献占比超 40%，存在**单点瓶颈**与**评审负载不均**
- [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) 明确标注 **"DO NOT MERGE TO MASTER YET"**，v0.8.0 集成批次的协调复杂度上升

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 50 Issues + 50 PR / 24h，极高 |
| 响应吞吐量 | ⭐⭐⭐☆☆ | 4 关闭 vs 46 开放，合并比偏低 |
| 新手体验 | ⭐⭐☆☆☆ | 安装即崩溃、文档错误、第三方误导并存 |
| 渠道稳定性 | ⭐⭐☆☆☆ | WhatsApp 协议升级致三重故障 |
| 架构演进 | ⭐⭐⭐⭐⭐ | v0.8.0 重构方向清晰，PR 质量高 |
| 安全态势 | ⭐⭐⭐⭐☆ | HMAC receipts 补齐，但 WhatsApp 身份混淆新发 |

**建议优先动作**：
1. 为 [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) 分配维护者，提供远程 Ollama 配置的验证/回退机制
2. 建立 WhatsApp 渠道故障的**公开状态页**或 pinned issue，减少重复报告
3. 加速 #6396（PR 标题 CI 检查）合并，降低后续评审沟通成本

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*