# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-02 00:20 UTC

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

# OpenClaw 项目动态日报 | 2026-05-02

> **数据来源**: openclaw/openclaw | **统计周期**: 2026-05-01 至 2026-05-02 (UTC)

---

## 1. 今日速览

OpenClaw 项目在过去 24 小时内展现出**极高的社区活跃度**，Issues 与 PR 各更新 **500 条**，其中 Issues 新开/活跃占比高达 **93%**（465/500），PR 待合并队列积压 **474 条**。零新版本发布，开发重心明显转向**稳定性修复与性能优化**。值得关注的是，今日关闭的 35 条 Issues 中有多条高评论数 Bug 被快速解决，但待合并 PR 比例（94.8%）提示代码审查与合并流水线可能存在瓶颈，项目健康度需关注集成效率。

---

## 2. 版本发布

**无新版本发布**

今日无 Release 产出。结合大量 `2026.4.x` 系列回归 Bug 的修复节奏，下一版本（预计 `2026.5.x`）可能以**稳定性补丁**为主。

---

## 3. 项目进展

### 今日关闭的重要 Issues（含修复验证）

| Issue | 核心进展 | 影响 |
|:---|:---|:---|
| [#72338](https://github.com/openclaw/openclaw/issues/72338) Gateway CPU spin 导致 Telegram 回复停滞 | **已关闭**，23 条评论深入诊断，确认重启 `openclaw-gateway.service` 可临时恢复，长期修复待验证 | 高负载网关稳定性 |
| [#73306](https://github.com/openclaw/openclaw/issues/73306) Active Memory 插件 15s 超时回归 | **已关闭**，v2026.4.26 引入的嵌入式运行故障，关联历史 Issue #68825/#66708/#66157/#65159 | 内存子系统可靠性 |
| [#75412](https://github.com/openclaw/openclaw/issues/75412) 内存插件 16-18s 固定开销优化 | **已关闭**，提出 `fastPath`  opt-in 方案减少嵌入式运行准备成本 | 性能优化路径确立 |
| [#75650](https://github.com/openclaw/openclaw/issues/75650) 2026.4.29 嵌入式代理延迟 40-47s | **已关闭**，归因于打包通道依赖缺失与事件循环警告 | 近期回归快速止损 |
| [#74630](https://github.com/openclaw/openclaw/issues/74630) 2026.4.24-4.26 网关启动/运行时/控制平面稳定性回归集群 | **已关闭**，元 Issue 系统性关联多个子问题，建立问题追踪框架 | 系统性风险管控 |
| [#75591](https://github.com/openclaw/openclaw/issues/75591) 插件清单单次请求读取 100+ 次 | **已关闭**，60s 准备阶段根因定位，高赞（6👍）社区痛点 | I/O 放大问题根治 |
| [#62364](https://github.com/openclaw/openclaw/issues/62364) 多 Provider 启动缓慢（30s+） | **已关闭**，`models.list` 验证耗时从 ~12s 恶化至 ~85s 的回归 | 启动性能 |
| [#59839](https://github.com/openclaw/openclaw/issues/59839) Control UI 新建会话后历史聊天不可访问 | **已关闭**，WebChat 会话切换功能回归修复 | 前端体验 |
| [#73095](https://github.com/openclaw/openclaw/issues/73095) `prepareContextEngineSubagentSpawn` 未初始化注册表 | **已关闭**，cliBackend-only 安装 100% 失败修复 | 边缘安装场景 |

**整体评估**：今日关闭 Issues 以 **性能回归** 和 **嵌入式运行子系统** 为主，显示维护团队正集中火力解决 `2026.4.x` 系列的质量滑坡，但 PR 合并率仅 **5.2%**（26/500），代码集成效率是明显短板。

---

## 4. 社区热点

### 🔥 评论最多 Issues（TOP 5）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|:---|
| 1 | [#72338](https://github.com/openclaw/openclaw/issues/72338) Gateway CPU spin / Telegram 停滞 | 23 | **生产环境可用性**：网关高 CPU 时状态探测失效，运维无法感知故障 | ✅ 已关闭 |
| 2 | [#73323](https://github.com/openclaw/openclaw/issues/73323) Gateway 运行时退化：定价获取 60s 超时、Telegram 轮询停滞、RPC 缓慢 | 15 | **Windows + Node 24 长期稳定性**：跨版本（4.23/4.25/4.26）慢性退化，需系统性诊断 | 🔴 开放 |
| 3 | [#73306](https://github.com/openclaw/openclaw/issues/73306) Active Memory 插件每次运行超时 | 14 | **插件可靠性**：升级后 100% 超时，阻塞正常工作流 | ✅ 已关闭 |
| 4 | [#67035](https://github.com/openclaw/openclaw/issues/67035) Windows 聊天 UI 回归：输入吞字、流式回复不可见 | 13 | **Windows 桌面端体验**：核心交互功能损坏，影响日常可用性 | 🔴 开放 |
| 5 | [#72808](https://github.com/openclaw/openclaw/issues/72808) Slack 连接静默丢失 | 11 | **通道连接可靠性**：无错误日志的静默故障，演示场景致命 | 🔴 开放 |

### 高反应 Issues（👍 排序）

| Issue | 👍 | 诉求 |
|:---|:---|:---|
| [#75591](https://github.com/openclaw/openclaw/issues/75591) 插件清单重复读取 | 6 | 性能优化，开发者生产力 |
| [#62364](https://github.com/openclaw/openclaw/issues/62364) 多 Provider 启动慢 | 4 | 启动时间回归 |
| [#75650](https://github.com/openclaw/openclaw/issues/75650) 嵌入式代理延迟 | 3 | 响应延迟 |
| [#72338](https://github.com/openclaw/openclaw/issues/72338) CPU spin | 4 | 生产稳定性 |

**社区情绪分析**：开发者对 **Windows 平台** 和 **嵌入式运行（embedded run）性能** 的挫败感显著。大量 "regression" 标签提示 `2026.4.x` 系列质量管控需加强。Slack/Telegram/Discord 等通道的**静默故障**模式（无日志、无告警）是高频痛点。

---

## 5. Bug 与稳定性

### 🔴 严重 / 生产影响

| Issue | 严重程度 | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | **P0-慢性退化** | Windows 网关多子系统网络/定时器退化，跨 3 个版本未根治 | 无明确 PR | 🔴 开放，15 评论 |
| [#75137](https://github.com/openclaw/openclaw/issues/75137) | **P0-资源耗尽** | TUI 空闲时 89-99% CPU 忙等待（busy-loop） | 无 | 🔴 开放，6 评论 |
| [#57349](https://github.com/openclaw/openclaw/issues/57349) | **P0-崩溃** | 扩展运行后堆耗尽 OOM（~17-20 小时），文件系统扫描时崩溃 | 无 | 🔴 开放，6 评论 |
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | **P0-安全** | macOS Node 自动信任首个 TLS 证书，CVSS 9.0/9.5 Critical | 无 | 🔴 开放，5 评论 |
| [#50630](https://github.com/openclaw/openclaw/issues/50630) | **P0-安全** | Tailscale serve + auth.mode=none 无认证暴露网关，CVSS 9.3 Critical | 无 | 🔴 开放，5 评论 |

### 🟡 功能回归 / 体验损坏

| Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows 聊天 UI 输入吞字、流式回复不可见 | 无 | 🔴 开放 |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | Slack 连接静默丢失，无自动恢复 | 无 | 🔴 开放 |
| [#65309](https://github.com/openclaw/openclaw/issues/65309) | Active Memory 阻塞直聊 30s 后超时 | 无 | 🔴 开放 |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) | 多工具轮次重放产生孤儿 tool_use 块，Anthropic 400 错误 | 无 | 🔴 开放 |
| [#74617](https://github.com/openclaw/openclaw/issues/74617) | Discord READY 事件永不触发，竞态条件 | 无 | 🔴 开放 |
| [#74377](https://github.com/openclaw/openclaw/issues/74377) | Anthropic Provider tools 数组为空，17 个工具计算后丢失 | 无 | 🔴 开放 |
| [#72879](https://github.com/openclaw/openclaw/issues/72879) | thought_signature 400 回归，4.24 修复后 4.25 复现 | 无 | 🔴 开放 |
| [#74209](https://github.com/openclaw/openclaw/issues/74209) | 默认捆绑插件（尤其 bonjour）阻塞网关启动 | 无 | 🔴 开放 |

### 🟢 已有修复方向（今日相关 PR）

| PR | 关联问题 | 修复内容 |
|:---|:---|:---|
| [#75860](https://github.com/openclaw/openclaw/pull/75860) | QMD 召回 | 改善 Discord 通道查询的 QMD 召回，空结果重试机制 |
| [#75822](https://github.com/openclaw/openclaw/pull/75822) | 会话锁 | 回收未跟踪的自拥有会话锁 |
| [#73993](https://github.com/openclaw/openclaw/pull/73993) | #44930 | Telegram 轮询重启持久化，防止飞行中更新丢失 |
| [#73998](https://github.com/openclaw/openclaw/pull/73998) | #55532 | 飞书 WebSocket 重连退避修复 |
| [#73849](https://github.com/openclaw/openclaw/pull/73849) | #73673 | macOS launchd KeepAlive 配置防止崩溃循环 |
| [#73772](https://github.com/openclaw/openclaw/pull/73772) | 内存管理 | 新增作用域内存管理 RPCs |

---

## 6. 功能请求与路线图信号

### 高潜力功能（有 PR 支撑或强社区信号）

| 功能 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Control UI 插件贡献插槽** | [#71736](https://github.com/openclaw/openclaw/issues/71736) RFC | ⭐⭐⭐⭐⭐ 高 | SDK 扩展性核心设计，8 评论，架构层面需求 |
| **Skill 优先级配置** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | ⭐⭐⭐⭐☆ | 7 评论，多技能冲突的明确痛点，实现复杂度中等 |
| **会话侧边栏与历史管理** | [#50404](https://github.com/openclaw/openclaw/issues/50404) | ⭐⭐⭐⭐☆ | 6 评论，Control UI 体验短板，与 #59839 修复协同 |
| **系统事件优先/绕过队列模式** | [#50739](https://github.com/openclaw/openclaw/issues/50739) | ⭐⭐⭐⭐☆ | 6 评论，可靠性关键需求，有 #73968 PR 部分相关 |
| **预发送队列检查（抑制过时回复）** | [#48814](https://github.com/openclaw/openclaw/issues/48814) | ⭐⭐⭐☆☆ | 6 评论，UX 优化，实现需改动核心调度 |
| **streamTo="parent" for subagent** | [#47597](https://github.com/openclaw/openclaw/issues/47597) | ⭐⭐⭐⭐☆ | 5 评论，子代理流式输出，有明确使用场景 |
| **可配置 mediaLocalRoots** | [#47856](https://github.com/openclaw/openclaw/issues/47856) | ⭐⭐⭐☆☆ | 5 评论，iMessage 附件场景，边界清晰 |

### 架构级信号

- **per-agent 命令通道隔离** ([#73991](https://github.com/openclaw/openclaw/pull/73991))：重型代理与共享主通道隔离，多代理部署的关键扩展性改进
- **作用域内存管理 RPCs** ([#73772](https://github.com/openclaw/openclaw/pull/73772))：内存子系统从黑盒走向可观测、可管理

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 场景 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **Windows 二等公民体验** | "升级后聊天体验严重退化，输入不显示、回复刷新才可见" | [#67035](https://github.com/openclaw/openclaw/issues/67035) |
| **网关"慢性死亡"** | "CPU 飙高但轮询看似正常，回复管道完全卡住，状态探测超时" | [#72338](https://github.com/openclaw/openclaw/issues/72338), [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| **插件/内存子系统不可靠** | "Active Memory 每次运行 15s 超时，0 字符输出，完全无法使用" | [#73306](https://github.com/openclaw/openclaw/issues/73306), [#65309](https://github.com/openclaw/openclaw/issues/65309) |
| **静默故障难以排查** | "Slack 连接几天都正常，演示时突然不回复，没有任何错误" | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **升级即冒险** | "从 3.28 升到 4.5，启动时间 12s→85s" | [#62364](https://github.com/openclaw/openclaw/issues/62364) |
| **TUI 资源暴敛** | "开着窗口什么都不做，CPU 89-99%，风扇狂转" | [#75137](https://github.com/openclaw/openclaw/issues/75137) |

### ✅ 用户认可方向

- **快速响应与诊断**：#72338 等 Issue 中维护者引导用户收集 `openclaw channels status --deep` 和日志，社区协作氛围良好
- **嵌入式运行灵活性**：尽管有性能问题，用户对 `active-memory` 等插件的能力设计表示认可，期待优化而非移除

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue

| Issue | 创建日期 | 最后更新 | 积压天数 | 风险 |
|:---|:---|:---|:---|:---|
| [#50199](https://github.com/openclaw/openclaw/issues/50199) Skill 优先级配置 | 2026-03-19 | 2026-05-01 | **44 天** | 多技能冲突无规则，影响智能体可靠性 |
| [#50404](https://github.com/openclaw/openclaw/issues/50404) 会话侧边栏 | 2026-03-19 | 2026-05-01 | **44 天** | 基础 UX 缺失，与已关闭 #59839 部分重叠但未完全解决 |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) 插件 Hooks 追踪上下文 | 2026-03-19 | 2026-05-01 | **44 天** | 可观测性基础设施，分布式追踪刚需 |
| [#50739](https://github.com/openclaw/openclaw/issues/50739) 系统事件优先队列 | 2026-03-20 | 2026-05-02 | **43 天** | 告警可靠性，运维场景关键 |
| [#49692](https://github.com/openclaw/openclaw/issues/49692) 网关 drain 消息 UX | 2026-03-18 | 2026-05-01 | **45 天** | 重启场景用户恐慌，文案优化低垂果实 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 断线回填 | 2026-03-19 | 2026-05-01 | **44 天** | 消息丢失，企业场景不可接受 |

### 🔧 PR 审查瓶颈

| PR | 创建 | 规模 | 阻塞风险 |
|:---|:---|:---|:---|
| [#75649](https://github.com/openclaw/openclaw/pull/75649) Windows 更新交接修复 | 2026-05-01 | **XL** | 跨平台更新关键路径，需优先审查 |
| [#73772](https://github.com/openclaw/openclaw/pull/73772) 作用域内存管理 RPCs | 2026-04-28 | **XL** | 架构级变更，影响面大但价值高 |
| [#69310](https://github.com/openclaw/openclaw/pull/69310) 媒体丢弃显性化 | 2026-04-20 | **L** | 用户体验，沉默失败转为可见警告 |

---

## 附录：数据速查

| 指标 | 数值 | 环比评估 |
|:---|:---|:---|
| Issues 更新总量 | 500 | 极高活跃度 |
| Issues 新开/活跃 | 465 (93%) | 问题发现 > 解决 |
| Issues 已关闭 | 35 (7%) | 关闭率偏低 |
| PR 

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**数据日期：2026-05-02 | 分析框架：社区活跃度·技术路线·成熟度**

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能竞赛"向"可靠性攻坚"的集体转向**。头部项目（OpenClaw、ZeroClaw、Hermes Agent）日均 Issues+PR 突破 100 条，但合并率普遍低于 10%，代码审查瓶颈凸显；中型项目（NanoBot、NullClaw、Moltis）展现更高修复闭环效率，部分实现"当日 Bug 当日修"；安全架构（多租户隔离、沙箱化）和配置系统现代化（Schema v3、i18n）成为跨项目共识。值得关注的是，**"嵌入式运行性能"与"Windows/移动端体验"**正从边缘诉求升级为生态级痛点，反映用户群体从早期采用者向普通开发者扩散。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已处理) | Release | 合并率 | 健康度评估 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (465/35) | 500 (474/26) | 0 | **5.2%** | 🔶 活跃但拥堵，PR 积压严重，质量回归密集 |
| **NanoBot** | 10 (2/8) | 31 (7/24) | 0 | 77% | 🟢 高效响应，当日闭环，国产模型适配承压 |
| **Hermes Agent** | 50 (43/7) | 50 (47/3) | 0 | 6% | 🔶 高活跃低合流，Reborn 架构重构期，Bug 密度上升 |
| **PicoClaw** | 11 (10/1) | 24 (11/13) | 1 (nightly) | 54% | 🔶 安全架构里程碑达成，v0.2.8 质量危机 |
| **NanoClaw** | 10 (6/4) | 27 (11/16) | 0 | 59% | 🟢 OpenCode 稳定性三连击，V2 迁移启动 |
| **NullClaw** | 9 (1/8) | 27 (4/23) | 0 | **85%** | 🟢 极高吞吐，积压消化中，单点依赖风险 |
| **IronClaw** | 30 (23/7) | 50 (31/19) | 0 | 38% | 🔶 Reborn 架构深水区，基础设施（安装器/Docker）脱节 |
| **LobsterAI** | 0 (0/0) | 15 (6/9) | 0 | 60% | 🟡 零 Issue 异常，PR 驱动迭代，审阅积压 33 天 |
| **Moltis** | 5 (1/5) | 9 (0/9) | 0 | **100%** | 🟢 零 Bug 积压，"报告即修复"标杆 |
| **CoPaw** | 7 (7/0) | 4 (3/1) | 0 | 25% | 🔴 零 Issue 关闭，P0 阻塞未响应，健康度最低 |
| **ZeroClaw** | 50 (37/13) | 50 (45/5) | **v0.7.4** | 10% | 🔶 版本发布活跃，45 PR 待合并，配置迁移大版本 |
| **TinyClaw** | 0 | 0 | 0 | — | ⚫ 休眠 |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚫ 休眠 |

> **关键发现**：合并率与项目规模呈显著负相关。OpenClaw/Hermes/ZeroClaw 三强日均 100+ 更新但合流率 <10%，反映**大型项目的技术债与审查带宽矛盾**；NullClaw/Moltis 以 <30 日更新实现 >80% 合流率，验证**中型项目的敏捷优势**。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 绝对领先：500 Issues/500 PR 日更新 = 次位 ZeroClaw/Hermes 的 **10 倍** | 形成"一超多元"格局，但活跃度可能包含大量重复/关联 Issue（如 #74630 元 Issue 集群） |
| **技术路线** | **嵌入式运行（embedded run）+ 插件化内存子系统** 的激进派 | NanoBot/NanoClaw 侧重"对话式 Agent 框架"，NullClaw 押注"并发可抢占架构"，IronClaw 探索 WASM 沙箱化 |
| **优势领域** | ① 网关多平台覆盖（Telegram/Discord/Slack/Feishu 等 10+ 通道）<br>② 插件生态广度（Active Memory 等创新子系统）<br>③ 企业级功能预埋（Control UI、多 Provider 路由） | 通道矩阵密度无出其右，但 PicoClaw 的"Agent Shield"安全架构、Moltis 的"零 Bug 积压"运维效率构成差异化挑战 |
| **核心风险** | **PR 合并率 5.2%** 为全生态最低，474 条待合并 PR 形成"代码冻结"效应；`2026.4.x` 系列质量滑坡（今日关闭 9 条回归 Bug）暴露**发布节奏与测试覆盖的失衡** | 对比 NullClaw 的 85% 合并率，OpenClaw 的集成效率已成为**生态位护城河的最大威胁** |

> **定位结论**：OpenClaw 是生态的**"功能定义者"**（率先推出嵌入式运行、插件化内存等概念），但正面临从"创新领先"向"质量运营"转型的**典型规模化阵痛**。若合并瓶颈持续，存在被中型项目"功能追赶+体验超越"的替代风险。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **多智能体编排（Multi-Agent Routing）** | NanoBot #2072、Hermes #9459、Moltis #949 | 从"单 Agent 聊天"升级至"多 Agent 流水线/故障转移/委托任务" | 🔴 高 |
| **配置系统现代化（Schema v3/i18n）** | ZeroClaw #5947、NullClaw #838、IronClaw Reborn | 统一配置格式、多语言支持、环境隔离、向后兼容迁移 | 🔴 高 |
| **嵌入式运行性能与可靠性** | OpenClaw #73306/#75412/#75650、NanoBot #3581、NanoClaw #2149 | 超时控制、内存管理、上下文完整性、本地模型适配 | 🔴 高 |
| **安全沙箱与多租户隔离** | PicoClaw stevef1uk 系列、IronClaw Reborn Sandcastle、ZeroClaw #5775 | 工作目录隔离、技能白名单、工具输出消毒、per-Skill 权限 | 🟡 中高 |
| **通道静默故障治理** | OpenClaw #72808/#72338、NanoBot #1851/#3553、Hermes #4469 | 无日志/无告警的连接丢失、自动恢复、状态探测 | 🟡 中高 |
| **Windows/移动端体验** | OpenClaw #67035、PicoClaw #2744/#2651、LobsterAI #1841/#1190 | 输入交互、构建指南、安装器稳定性、文件句柄管理 | 🟡 中 |
| **推理链/思考内容可观测** | IronClaw #3129、CoPaw #3996、OpenClaw #18529 | reasoning_content 提取、思考过程暴露、模型行为调试 | 🟢 新兴 |

> **趋势洞察**："多智能体编排"从 NanoBot/Hermes/Moltis 三端同时涌现，标志生态正从"单体 Agent 工具"向"Agent 操作系统"跃迁；OpenClaw 虽在功能上领先（已有 `delegate_task`），但社区对"可靠性优先"的呼声可能重塑竞争标准。

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 网关矩阵 + 插件化内存 + 嵌入式运行 | 企业集成开发者、多平台 Bot 运营者 | 单体 Node.js 网关，插件热加载，Control UI 中心化 |
| **NanoBot** | 对话式 Agent 框架 + 渠道快速适配 | 中文社区开发者、国产模型用户 | Python 异步核心，模块化渠道，HookCenter 插件系统 |
| **Hermes Agent** | 本地 LLM 优化 + 技能市场 + 委托任务 | 隐私敏感用户、本地部署爱好者 | Rust 性能核心，llama.cpp 深度集成，WASM 技能沙箱 |
| **PicoClaw** | 边缘/嵌入式部署 + 企业安全合规 | IoT 开发者、多租户 SaaS 构建者 | Go 轻量运行时，K3s 云原生，Agent Shield 安全套件 |
| **NanoClaw** | OpenCode 原生集成 + 运营合约继承 | 企业自动化工程师、V1→V2 迁移用户 | TypeScript 容器化，SQLite 状态机，OneCLI 统一入口 |
| **NullClaw** | 并发可抢占 + 隐私优先通道 | 技术极客、Matrix/E2EE 用户 | Rust 纯函数式路由，有限并发会话，pantalaimon 代理 |
| **IronClaw** | WASM 沙箱化 + 资源治理 + 法律合规 | 企业合规部门、高安全场景 | Rust WASM 运行时，CapabilityHost 义务模型，Reborn 架构 |
| **Moltis** | 零运维摩擦 + 多平台稳定性 | 个人开发者、小团队快速部署 | Rust 全栈，tmux 终端集成，E2E 测试驱动 |
| **ZeroClaw** | CLI/Web 双轨 + 配置系统统一 | 全栈开发者、自托管爱好者 | TypeScript 工作区模型，Schema 版本化，WASM 插件 |
| **CoPaw** | 国产模型对齐 + 企业 IM 集成 | 中国企业用户、钉钉/飞书生态 | Python 异步，Qwen 系列优化，知识库扩展 |

> **架构分水岭**：Rust 项目（Hermes/NullClaw/Moltis）占据性能与可靠性高地，TypeScript/Node.js（OpenClaw/NanoClaw/ZeroClaw）把控生态集成速度，Python（NanoBot/CoPaw）深耕模型适配与中文场景。**Go（PicoClaw）是唯一明确押注边缘计算与云原生的异类**。

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────────┐
│  🚀 快速迭代期（高活跃·高波动）                              │
│  OpenClaw │ ZeroClaw │ Hermes Agent │ IronClaw              │
│  特征：日更新 50-100+，合并率 <15%，质量回归与技术债并存       │
│  风险：PR 积压导致贡献者流失，版本质量失控                      │
├─────────────────────────────────────────────────────────────┤
│  ⚡ 敏捷交付期（高活跃·高闭环）                               │
│  NullClaw │ Moltis │ NanoBot │ NanoClaw │ PicoClaw          │
│  特征：日更新 10-30，合并率 >50%，"当日 Bug 当日修"           │
│  风险：核心贡献者单点依赖（NullClaw manelsen、Moltis penso）   │
├─────────────────────────────────────────────────────────────┤
│  🛠️ 质量巩固期（中活跃·聚焦修复）                             │
│  LobsterAI │ CoPaw                                               │
│  特征：Issue 驱动或零 Issue 异常，PR 审阅瓶颈或响应滞后         │
│  风险：LobsterAI 的 33 天 PR 积压，CoPaw 的零 Issue 关闭       │
├─────────────────────────────────────────────────────────────┤
│  💤 休眠观察期                                                │
│  TinyClaw │ ZeptoClaw                                          │
│  特征：24 小时零活动                                          │
│  风险：项目可持续性存疑                                        │
└─────────────────────────────────────────────────────────────┘
```

> **成熟度悖论**：OpenClaw 的绝对活跃度最高，但**有效交付率（关闭 Issue 占比 7%）为全生态最低**；Moltis 以 100% Bug 清零率证明"少即是多"的运营哲学。建议技术决策者根据团队规模选择：**大型团队耐受 OpenClaw/ZeroClaw 的集成摩擦，小型团队优先 NullClaw/Moltis 的敏捷红利**。

---

## 7. 值得关注的趋势信号

| 趋势信号 | 数据支撑 | 对开发者的参考价值 |
|:---|:---|:---|
| **"Agent 操作系统"化** | Hermes #9459（8👍 最高）、NanoBot #2072、Moltis #949 同步涌现 | 单 Agent 工具市场饱和，多 Agent 编排框架（类似 Kubernetes for Agents）是下一个架构制高点 |
| **国产模型适配成为独立赛道** | NanoBot #3584 DeepSeek 断裂、CoPaw #3996 DeepSeek V4、OpenClaw #62364 多 Provider 启动恶化 | 非 OpenAI 生态的模型适配复杂度被低估，建议预留 **20-30% 工程带宽** 给国产/自托管模型兼容性 |
| **静默故障 > 崩溃故障** | OpenClaw #72808 Slack 静默丢失、NanoClaw #2177 push 模式死锁、NanoBot #3571 跨会话缓存污染 | 可观测性建设优先级应高于功能开发——"无日志黑箱"比"明确报错"更难排查，直接摧毁生产信任 |
| **边缘/嵌入式场景崛起** | NullClaw #851 Raspberry Pi 5、PicoClaw #1757 Raspberry Pi Zero W、OpenClaw #75137 TUI 资源暴敛 | ARM/资源受限设备从"玩具场景"变为"7×24 自动化基础设施"，内存与 CPU 效率重回核心 KPI |
| **配置系统成为版本迁移瓶颈** | ZeroClaw #5947 Schema v3 阻塞、NanoClaw #2175 V1→V2 运营合约、OpenClaw 隐式配置断裂 | 早期项目需**前置设计配置版本化机制**，后期迁移成本呈指数增长 |
| **安全从"功能"变为"架构"** | PicoClaw Agent Shield 系列、IronClaw Reborn Sandcastle、ZeroClaw #5775 per-Skill 权限 | 多租户隔离、最小权限原则、工具输出消毒正从"可选插件"变为"默认基础设施"，合规驱动不可逆 |

---

**报告结论**：2026-05-02 的个人 AI 助手生态呈现**"头部拥堵、腰部敏捷、尾部分化"**的清晰格局。OpenClaw 需 urgent 解决合并瓶颈以维持领导地位，NullClaw/Moltis 验证中型项目的高效模式，IronClaw/PicoClaw 分别在 WASM 沙箱化和边缘安全领域建立技术壁垒。对普通开发者的建议：**生产环境优先 Moltis/NullClaw，功能探索保留 OpenClaw，边缘部署评估 PicoClaw，合规场景关注 IronClaw**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-02

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **日期**: 2026-05-02  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

NanoBot 今日呈现**高强度维护态势**：24小时内 **31 个 PR** 处理量（合并/关闭 24 个，待合并 7 个）、**10 个 Issues** 闭环率达 80%（8 关闭/2 活跃）。核心团队响应速度极快，多个当日提交的 Bug（如 `#3581` tiktoken 崩溃、`#3584` DeepSeek API 验证错误）在数小时内即获修复 PR。项目当前聚焦于**稳定性加固**（Matrix/Anthropic/DeepSeek 等渠道修复）、**多用户场景支持**（sender_id 注入群聊上下文）及**WebUI 体验优化**。整体健康度：**活跃且稳健**，无版本发布计划。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔧 核心稳定性修复（当日闭环）

| PR | 关联 Issue | 说明 |
|:---|:---|:---|
| [#3582](https://github.com/HKUDS/nanobot/pull/3582) | [#3581](https://github.com/HKUDS/nanobot/issues/3581) | **tiktoken fallback 崩溃修复**：`estimate_prompt_tokens_chain()` 在 provider 计数器异常时因变量名 `estimated` 未定义而崩溃，现恢复安全降级路径 |
| [#3579](https://github.com/HKUDS/nanobot/pull/3579) | [#2709](https://github.com/HKUDS/nanobot/issues/2709) | **Anthropic 长请求自动流式降级**：非流式调用超 10 分钟时自动捕获 `ValueError` 并切换至流式模式 |
| [#3578](https://github.com/HKUDS/nanobot/pull/3578) | [#1851](https://github.com/HKUDS/nanobot/issues/1851) | **Matrix 认证错误洪泛治理**：致命认证错误（`M_UNKNOWN_TOKEN`）现终止 sync 循环而非每 2 秒重试 |
| [#3555](https://github.com/HKUDS/nanobot/pull/3555) | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | **OpenAI 兼容流式生命周期修复**：工具调用场景下 SSE 流过早终止问题 |
| [#3560](https://github.com/HKUDS/nanobot/pull/3560) | [#3554](https://github.com/HKUDS/nanobot/issues/3554) | **DeepSeek 推理模式检测条件修正** |

### 🚀 多用户/群聊场景突破

| PR | 关联 Issue | 说明 |
|:---|:---|:---|
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | [#3511](https://github.com/HKUDS/nanobot/issues/3511) | **sender_id 注入 LLM 运行时上下文**：Discord/Feishu 等群聊场景下模型可识别不同用户，支持个性化响应 |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | — | **飞书渠道增强**：在 prompt 中前置 `[FEISHU-CONTEXT]` 块，包含发送者 display_name/open_id/user_id |

### 🔄 会话持久化与工具链健壮性

| PR | 说明 |
|:---|:---|
| [#2334](https://github.com/HKUDS/nanobot/pull/2334) | 会话消息从"仅 LLM 停止时持久化"改为**每迭代持久化**，防止中途崩溃丢失进度 |
| [#3580](https://github.com/HKUDS/nanobot/pull/3580) | **工具循环护栏**：检测 `(tool, args, result)` 重复模式，阻断"同一失败工具调用 40 次"的失控行为 |

### 📺 渠道扩展

| PR | 说明 |
|:---|:---|
| [#2337](https://github.com/HKUDS/nanobot/pull/2337) / [#2379](https://github.com/HKUDS/nanobot/pull/2379) | **NapCatQQ 渠道**：绕过 QQ 开放平台 20 人群成员限制，支持 QQ 小号转 bot，含图文消息 |

---

## 4. 社区热点

### 💬 讨论最活跃：多智能体路由架构诉求

| 条目 | 数据 | 分析 |
|:---|:---|:---|
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) [CLOSED] | 8 评论, 👍×1, 创建于 2026-03-16 | **核心诉求**：用户请求原生支持类似 OpenClaw 的 Multi-Agent Routing，当前需手动启动多个 gateway 实例逐个孵化 agent，操作繁琐。Issue 已关闭但**未明确是否纳入路线图**——可能因技术架构差异或优先级调整而搁置，社区仍存在未满足的规模化部署需求 |

### 🔥 高价值新提案：会话级注意力锚定

| 条目 | 数据 | 分析 |
|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) [OPEN] | 4 评论, 👍×0, 创建于 2026-04-19 | **"Session-Level Focus Tool"**：提出 LLM agent 缺乏人类"任务板"式的注意力锚定能力——被旁支问题打断后无法回归主任务。当前 `my` 工具的 `_runtime_vars` 为"运行时草稿本"而非"持久任务栈"。该 Issue 触及**长程任务规划的核心短板**，与今日合并的 PR #2334（迭代级持久化）形成互补需求，建议关注协同设计 |

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 详情 |
|:---|:---|:---|:---|
| 🔴 **高** | [#3584](https://github.com/HKUDS/nanobot/issues/3584) DeepSeek `reasoning_content` API 验证错误 | **已识别根因，Patch 待合并** | v0.1.5.post3 后 DeepSeek 模型（deepseek-v4-flash/deepseek-reasoner）因历史消息未正确传递 `reasoning_content` 字段触发严格验证失败；作者已提供修复方案 |
| 🟡 **中** | [#3581](https://github.com/HKUDS/nanobot/issues/3581) `NameError: name 'estimated' is not defined` | ✅ **已修复** [#3582](https://github.com/HKUDS/nanobot/pull/3582) | tiktoken fallback 路径在内存整合时崩溃，影响 token 预算受限场景 |
| 🟡 **中** | [#3553](https://github.com/HKUDS/nanobot/issues/3553) Matrix 启动时重复读取旧消息 | ✅ **已关闭** | `/restart` 后历史消息重放导致循环，用户需手动 `/new` 打断 |
| 🟡 **中** | [#3571](https://github.com/HKUDS/nanobot/issues/3571) ReadFileTool 跨会话缓存污染 | ✅ **已关闭** | 会话 A 读取文件后，会话 B 仅获"File unchanged since last read"存根而非内容，根因在于 `file_state.py` 的缓存键未隔离会话 |
| 🟢 **低** | [#2709](https://github.com/HKUDS/nanobot/issues/2709) Anthropic 流式必需错误 | ✅ **已修复** [#3579](https://github.com/HKUDS/nanobot/pull/3579) | 企业微信场景下非流式长请求触发 SDK 限制 |
| 🟢 **低** | [#1851](https://github.com/HKUDS/nanobot/issues/1851) Matrix 认证错误服务器洪泛 | ✅ **已修复** [#3578](https://github.com/HKUDS/nanobot/pull/3578) | 无效 token 导致无限重试，日志爆炸 |

> **风险评估**：DeepSeek #3584 为当前唯一**未完全闭环**的高危项，影响国产模型核心用户群；其余关键路径缺陷已实现当日修复，响应机制高效。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性信号 | 纳入概率 |
|:---|:---|:---|:---|
| **原生多智能体路由** | [#2072](https://github.com/HKUDS/nanobot/issues/2072) | 架构层面与现有 gateway 设计冲突，需重构调度层；无关联 PR | ⚠️ 低（短期） |
| **会话级 Focus Tool / 任务栈** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | 与现有 `my` 工具扩展方向契合；PR #2334 的持久化机制可作为基础设施 | 🔶 中（需设计评审） |
| **模型预设快速切换** | [#3358](https://github.com/HKUDS/nanobot/pull/3358) [OPEN] | PR 已提交，含 `ModelPresetConfig` + Pydantic 验证 + CLI 集成 | ✅ **高**（下一版本） |
| **HookCenter 插件系统** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) [OPEN] | 替换 AgentHook 方法重写模式，支持 `entry_points` 分发；向后兼容适配器已完成 | ✅ **高**（架构升级） |
| **MCP 工具懒加载** | [#1759](https://github.com/HKUDS/nanobot/pull/1759) [OPEN] | 解决 MCP 工具上下文膨胀问题，3 月创建至今持续更新 | 🔶 中（性能优化优先级） |
| **WebUI 安全加固** | [#3492](https://github.com/HKUDS/nanobot/pull/3492) [OPEN] | public deploy 场景下的 token 泄露、未授权删除风险；安全关键 | ✅ **高**（阻塞性） |

---

## 7. 用户反馈摘要

### 😤 痛点
- **群聊身份失明**："家庭 Discord 频道中 bot 无法识别谁在说话" —— [#3511](https://github.com/HKUDS/nanobot/issues/3511)，已推动 sender_id 全渠道注入
- **国产模型适配脆弱**：DeepSeek 的 `reasoning_content` 字段处理随版本迭代频繁断裂 —— [#3584](https://github.com/HKUDS/nanobot/issues/3584)
- **工具失控循环**："小模型重复调用同一失败工具 40 次直到 max_iterations" —— [#2298](https://github.com/HKUDS/nanobot/issues/2298)，用户代币消耗焦虑显著

### ✅ 满意
- **修复响应速度**：当日 Bug 当日 PR 当日合并的闭环效率（#3581→#3582 仅数小时）
- **渠道扩展灵活性**：NapCatQQ 绕过官方平台限制，社区自主贡献活跃

### 🤔 场景诉求
- **企业级部署**：public tunnel 安全加固（#3492）、Matrix 高可用（#1851/#3553）
- **长任务可靠性**：会话崩溃不丢进度（#2334 已部分解决）、任务中断后回归（#3292 待响应）

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | 2026-04-19 | 2026-05-01 | 🔶 14 天活跃，4 评论无维护者回应 | **核心 UX 缺口**，与持久化/工具链 PR 协同价值高，建议纳入 v0.2 规划讨论 |
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) MCP 懒加载 | 2026-03-09 | 2026-05-01 | 🔶 54 天开放，评论 undefined | 性能关键，MCP 生态膨胀背景下上下文开销问题将加剧 |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) 模型预设 | 2026-04-21 | 2026-05-01 | 🟢 功能完整待评审 | 建议优先合并，用户高频切换模型场景（开发/生产/测试）的显性需求 |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) WebUI 安全 | 2026-04-28 | 2026-05-02 | 🔴 安全关键，public deploy 风险敞口 | **建议阻塞下一版本发布前合并** |

---

> **日报生成时间**: 2026-05-02  
> **数据窗口**: 过去 24 小时（2026-05-01 至 2026-05-02）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-02

> **项目**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
> **日期**: 2026-05-02  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

Hermes Agent 今日保持**极高社区活跃度**，24小时内产生 **50 条 Issues 更新**（43 条新开/活跃，7 条关闭）与 **50 条 PR 更新**（47 条待合并，3 条已合并/关闭），形成近 1:7 的合并/关闭比，表明代码审查队列压力显著。今日无新版本发布，但社区贡献呈现"**平台适配深化 + 核心引擎稳定性攻坚**"双主线：Telegram/Discord/Feishu 等网关平台持续迭代，同时 KV 缓存、上下文压缩、授权链路等基础设施层 Bug 密集暴露。值得注意的是，5 月 1 日集中涌现的 7 个新 Issue 中 5 个为 Bug 报告，提示近期代码变更可能引入回归风险。

---

## 2. 版本发布

**无新版本发布**（今日 Release 计数：0）

---

## 3. 项目进展

### 已合并/关闭 PR（3 条）

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#18583](https://github.com/NousResearch/hermes-agent/pull/18583) Add skill: flight-transfer-finder | wali-reheman | **已关闭** | 技能市场扩展：航班中转查询技能（经 Hermes Skills Guard 扫描） |
| [#18516](https://github.com/NousResearch/hermes-agent/issues/18516) Gateway automatic session freshness resets | mikejflex | **Issue 关闭** | 网关自动会话刷新机制需求已解决或纳入其他 PR |
| [#18513](https://github.com/NousResearch/hermes-agent/issues/18513) Telegram polling conflict alert & degrade | mikejflex | **Issue 关闭** | 网关 Telegram 轮询冲突的告警与降级机制已落地 |

**整体推进评估**：今日合流率偏低（3/50 = 6%），但基础设施韧性建设取得实质进展——Telegram 网关的运维可观测性（#18513）和会话生命周期管理（#18516）两个长期痛点进入关闭状态。大量高价值 PR 仍滞留队列，包括性能优化（Numba 加速 #18295）、核心 Bug 修复（#17214 有效模型识别）等。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 1 | **MiniMax OAuth 支持** #3347 | 6 | 1 | 从 OpenClaw 迁移用户的认证适配需求，引用第三方集成指南 | [#3347](https://github.com/NousResearch/hermes-agent/issues/3347) |
| 2 | **Telegram 论坛话题角色绑定** #4622 | 5 | 2 | 超级群组内不同话题线程加载不同技能/人格，实现"一Bot多角色" | [#4622](https://github.com/NousResearch/hermes-agent/issues/4622) |
| 3 | **OpenRouter 认证 401 错误** #14637 | 4 | 0 | **已关闭** — 配置与环境变量加载的认证链路问题 | [#14637](https://github.com/NousResearch/hermes-agent/issues/14637) |
| 4 | **KV 缓存新消息失效** #4555 | 3 | 2 | llama.cpp 单 slot 场景下，agentic 循环与会话重载的消息格式差异导致缓存全量失效 | [#4555](https://github.com/NousResearch/hermes-agent/issues/4555) |
| 5 | **Linear 平台适配** #5826 | 3 | 3 | 项目管理工具 Linear 的网关接入，@mention 驱动工作流 | [#5826](https://github.com/NousResearch/hermes-agent/issues/5826) |
| 6 | **跨界面会话连续性** #18457 | 3 | 0 | **重复提案** — 终端/Telegram/Discord/Slack/Teams 间无缝迁移会话 | [#18457](https://github.com/NousResearch/hermes-agent/issues/18457) |
| 7 | **委托任务 Agent 配置文件** #9459 | 3 | 8 | `delegate_task` 支持命名 Agent 配置，构建自定义编排框架（类比 Pantheon agents） | [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) |

**诉求分析**：
- **平台生态扩张**（#3347, #4622, #5826）：企业/团队场景从"能用"走向"深度集成"，OAuth、论坛话题、项目管理工具成为准入门槛
- **多 Agent 编排**（#9459, #18457）：用户不再满足单会话交互，要求 Hermes 成为可编排的 Agent 操作系统——该需求获 8 👍 为今日最高
- **性能与成本敏感**（#4555）：本地 LLM 用户极度关注 KV 缓存效率，直接影响推理成本与响应延迟

---

## 5. Bug 与稳定性

### 🚨 P1（严重）— 生产阻塞

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#4451](https://github.com/NousResearch/hermes-agent/issues/4451) patch 工具 `await` 关键字损坏 | TypeScript/TSX 文件中 `await` 被替换为 `***`，Next.js 项目受影响 | **OPEN** | 无 |
| [#4469](https://github.com/NousResearch/hermes-agent/issues/4469) 快速多条消息仅处理最后一条 | 消息队列消费丢失，长任务期间用户输入被静默丢弃 | **OPEN** | 无 |

### ⚠️ P2（高优先级）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#4555](https://github.com/NousResearch/hermes-agent/issues/4555) KV 缓存新消息失效 | llama.cpp 单 slot 场景缓存全量失效，性能退化严重 | **OPEN** | [#18547](https://github.com/NousResearch/hermes-agent/pull/18547) 系统提示前缀稳定化（相关优化） |
| [#18566](https://github.com/NousResearch/hermes-agent/issues/18566) Feishu 回复上下文丢失 | `root_id` 存在但 `parent_id` 缺失时无法解析回复链 | **OPEN** | 无 |
| [#18556](https://github.com/NousResearch/hermes-agent/issues/18556) Gemini 输出伪装用户轮次 | 助手输出以 `user\n` 开头，进入重复分隔符循环 | **OPEN** | 无 |
| [#18539](https://github.com/NousResearch/hermes-agent/issues/18539) /queue FIFO 媒体文件丢失 | 仅最后队列项获得媒体交付，前置项 `MEDIA:` 标签原样渲染 | **OPEN** | 无 |
| [#18529](https://github.com/NousResearch/hermes-agent/issues/18529) 会话标题泄露思考 token | `title_generator.py` 未使用 `extract_content_or_reasoning()`，MiniMax-M2.7 等思考模型暴露 `<thinking>` | **OPEN** | 无 |
| [#4587](https://github.com/NousResearch/hermes-agent/issues/4587) 多配置网关不安全 | `kill_gateway_processes()` 配置盲杀，并发配置文件相互干扰 | **OPEN** | 无 |
| [#18588](https://github.com/NousResearch/hermes-agent/issues/18588) 上下文压缩无降级回退 | Groq 413 错误时未回退主模型，直接返回 None | **OPEN** | 无 |
| [#18586](https://github.com/NousResearch/hermes-agent/issues/18586) `delegate_task` 解析错误 `api_mode` | `opencode-go` 提供商子 Agent 404 | **OPEN** | 无 |

### 📋 P3（一般）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#4538](https://github.com/NousResearch/hermes-agent/issues/4538) 技能自动命名错误 | 加密代币分析任务生成 `company-research-summary` 技能名 | **OPEN** | 无 |
| [#18581](https://github.com/NousResearch/hermes-agent/issues/18581) ZWJ emoji 触发提示注入过滤 | `🤸‍♀️` 中的 U+200D 导致 `SOUL.md` 被静默阻止 | **OPEN** | 无 |

**稳定性评估**：今日 Bug 报告密度异常（5 月 1 日单日 7 个新 Bug），且覆盖核心链路（委托任务、上下文压缩、网关消息队列、媒体交付）。**P1 级 patch 工具损坏 (#4451) 与消息丢失 (#4469) 无修复 PR，构成生产部署 blocker**。建议维护者优先审查 #4469（数据丢失类）与 #18539（功能完整性）。

---

## 6. 功能请求与路线图信号

| 功能请求 | 优先级信号 | 相关 PR | 纳入可能性评估 |
|:---|:---|:---|:---|
| **跨界面会话连续性** #18457 | 重复提案，需求明确 | 无 | ⭐⭐⭐ 高 — 基础设施已部分具备 (`/title`, `/new`, `/resume`) |
| **Linear 平台适配** #5826 | 3 👍，B2B 场景刚需 | 无 | ⭐⭐⭐ 高 — 网关架构已支持多平台，Linear API 成熟 |
| **委托任务 Agent 配置文件** #9459 | **8 👍** 今日最高，生态建设 | [#7701](https://github.com/NousResearch/hermes-agent/pull/7701) 非阻塞后台委托 | ⭐⭐⭐⭐ 极高 — PR 已就绪，解决 #6813 反馈后复提 |
| **Signet 记忆提供商捆绑** #18569 | 上游作者主动提案，尊重流程 | 无 | ⭐⭐⭐ 高 — 记忆层插件化架构支持，需维护者表态 |
| **Telegram 论坛话题自动重命名** #16255 | 与 #9921 PR 直接对应 | [#9921](https://github.com/NousResearch/hermes-agent/pull/9921) | ⭐⭐⭐⭐ 极高 — PR 已开，配置开关设计合理 |
| **葡萄牙语支持** #15738 | i18n 扩展，低技术风险 | 无 | ⭐⭐⭐ 高 — 纯翻译工作，社区可贡献 |
| **多模型路由** #4461 | 单配置内任务类型分发 | 无 | ⭐⭐ 中 — 架构改动较大，需设计评审 |
| **/recap 会话摘要命令** #18587 | 今日新 PR，Claude Code 启发 | [#18587](https://github.com/NousResearch/hermes-agent/pull/18587) | ⭐⭐⭐⭐ 极高 — 用户体验增强，实现轻量 |
| **上下文压缩计数状态栏** #18579 | 可观测性增强 | [#18579](https://github.com/NousResearch/hermes-agent/pull/18579) | ⭐⭐⭐⭐ 极高 — 数据已采集，仅 UI 暴露 |
| **Codex CLI 认证复用** #18555 | 企业环境设备密钥禁用场景 | [#18555](https://github.com/NousResearch/hermes-agent/issues/18555) | ⭐⭐⭐ 高 — 回退机制，低侵入 |

**路线图信号**：社区正推动 Hermes 从"单 Agent 工具"向"**Agent 操作系统**"演进——会话跨设备漫游、多 Agent 编排框架、平台网关矩阵、记忆提供商生态四项基础设施同步建设。维护者若确认此方向，建议设立 **v0.7.0 "Agent OS" 里程碑** 统筹相关 PR/Issue。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 痛点 | 来源 Issue | 用户原声/场景 |
|:---|:---|:---|
| **认证链路脆弱** | #14637, #3347 | "从 OpenClaw 迁移后 OAuth 无法工作"；"API key 已验证正确但仍 401" |
| **本地 LLM 性能未优化** | #4555 | llama.cpp 单 slot 场景"每次新消息 KV 缓存全量失效"，agentic 循环内却正常 |
| **消息可靠性危机** | #4469, #18539, #18566 | "多条消息只处理最后一条"；"MEDIA 文件生成但不交付"；"回复上下文丢失" |
| **配置管理混乱** | #4587, #18582 | 多配置文件"互相杀死网关进程"；`/restart` 不重新加载 `.env` |
| **思考模型适配滞后** | #18529, #18556 | 标题"包含 `<thinking>` 标签"；Gemini 输出"伪装成用户轮次" |

### 😊 满意/期待

| 正向反馈 | 来源 | 说明 |
|:---|:---|:---|
| 技能系统扩展性 | #18569, #18584 | 第三方主动提案集成（Signet、devopsellence、flight-transfer-finder） |
| 网关平台覆盖 | #4622, #5826, #16255 | 用户愿意深度集成到团队工作流（Telegram 论坛、Linear、Feishu） |
| 委托任务编排 | #9459, #18591 | 期待"自定义 Pantheon 式多 Agent 框架" |

---

## 8. 待处理积压

> 以下 Issue/PR 长期活跃但缺乏维护者响应，存在**社区热情衰减**或**方案过时**风险

| 条目 | 创建日期 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#9087](https://github.com/NousResearch/hermes-agent/pull/9087) Nix home-manager 模块 | 2026-04-13 | 2026-05-01 | Nix 生态专业度门槛 | 指派 Nix 维护者或请求社区测试验证 |
| [#7701](https://github.com/NousResearch/hermes-agent/pull/7701) 非阻塞后台委托 | 2026-04-11 | 2026-05-01 | 前序 #6813 关闭后复提，需确认三项反馈是否真解决 | 维护者逐条核对 teknium1 原始反馈 |
| [#9921](https://github.com/NousResearch/hermes-agent/pull/9921) Telegram 论坛话题自动重命名 | 2026-04-14 | 2026-05-01 | 与 #16255 Issue 重复，需合并跟踪 | 关联 Issue-PR，安排代码审查 |
| [#17214](https://github.com/NousResearch/hermes-agent/pull/17214) 有效模型自识别修复 | 2026-04-29 | 2026-05-01 | 跨组件影响（agent/cli/gateway） | 高优先级审查，涉及核心行为变更 |
| [#18295](https://github.com/NousResearch/hermes-agent/pull/18295) Numba OPD token span 优化 | 2026-05-01 | 2026-05-02 | 性能优化类 PR 通常审查周期长 | 请求基准测试数据，加速决策 |

---

## 附录：今日关键指标

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| Issues 日更新量 | 50 | 🟡 高活跃，审查压力 |
| PR 日更新量 | 50 | 🟡 高活跃，合并瓶颈 |
| 合流率 (Merged+Closed / Total) | 6% (3/50) | 🔴 偏低 |
| Bug 占比 (新 Issue) | ~71% (5/7) | 🔴 回归风险信号 |
| 社区 👍 最高 Issue | #9459 (8 👍) | 🟢 强需求验证 |
| 无评论新 Issue | #18591, #18588, #18586, #18581, #18580 (5条) | 🟡 可能未充分分类 |

---

*本日报基于 GitHub 公开数据生成，不代表 Nous Research 官方立场。建议维护者关注 #4469（消息丢失）与 #4451（代码损坏）的紧急修复。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-02

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-05-02 | **分析师**: AI 开源项目分析师

---

## 1. 今日速览

PicoClaw 今日呈现**高活跃度、高压力**的双重特征：24 小时内 24 个 PR 流转（13 个已合并/关闭），11 个 Issues 更新，社区持续密集贡献。核心信号是 **v0.2.8 版本发布后的稳定性危机**——单日新增 4 个回归 Bug（图像识别失效、Android 数据访问异常、Gateway 启动无频道、Cron 任务频道错误），显示该版本存在明显的质量波动。与此同时，stevef1uk 贡献的"Agent Shield"安全加固系列 PR 已全部合入主线，标志着项目在**多租户隔离与安全架构**上完成重大升级。整体健康度：**功能迭代积极，但版本质量控制需加强**。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.8-nightly.20260501.6e1fab80

| 属性 | 详情 |
|:---|:---|
| **版本类型** | 自动化夜间构建（可能不稳定） |
| **对比基线** | [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |
| **发布日期** | 2026-05-01 |

**⚠️ 关键观察**：该 nightly 构建紧随 v0.2.8 正式版发布，但社区已密集报告 v0.2.8 的回归问题（见第 5 节）。建议用户**谨慎升级**，生产环境建议回退至 v0.2.6/v0.2.7 等待补丁。

**已知 v0.2.8 风险点**：
- 图像上传识别功能失效 ([#2738](https://github.com/sipeed/picoclaw/issues/2738))
- Android 端 Tab 数据完全不可访问 ([#2744](https://github.com/sipeed/picoclaw/issues/2744))
- Gateway 启动时频道配置丢失 ([#2742](https://github.com/sipeed/picoclaw/issues/2742))
- Cron 定时任务触发频道错误 ([#1757](https://github.com/sipeed/picoclaw/issues/1757))

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR（13 个）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2739](https://github.com/sipeed/picoclaw/pull/2739) | cjkihl | Telegram Markdown 表格渲染修复：将 pipe table 自动包裹为 fenced code block | **用户体验**：解决 LLM 输出表格时的转义混乱问题 |
| [#2743](https://github.com/sipeed/picoclaw/pull/2743) | cjkihl | DeepSeek 模型检测增强：支持非官方代理端点（如 opencode.ai、avian.io） | **生态兼容**：打破厂商锁定，支持第三方 DeepSeek 代理 |
| [#2326](https://github.com/sipeed/picoclaw/pull/2326) | stevef1uk | K3s 部署清单 + 多架构安全 Dockerfile | **生产就绪**：完成云原生部署标准化 |
| [#2325](https://github.com/sipeed/picoclaw/pull/2325) | stevef1uk | 技能白名单机制（Skills Whitelisting） | **安全架构**：关键的安全加固层，防止恶意技能安装 |
| [#2324](https://github.com/sipeed/picoclaw/pull/2324) | stevef1uk | 异步 `/chat` HTTP 端点 + HTTP Channel | **集成能力**：开放标准 REST API，支持 Teams/自定义前端接入 |
| [#2323](https://github.com/sipeed/picoclaw/pull/2323) | stevef1uk | NVIDIA + Azure AI Foundry 原生提供商支持 | **模型生态**：扩展企业级 GPU 云与 Azure AI 集成 |
| [#2322](https://github.com/sipeed/picoclaw/pull/2322) | stevef1uk | 会话级工作区隔离 + 不可信工具输出安全包装 | **安全架构**：防御提示注入与跨会话数据泄露 |
| [#2102](https://github.com/sipeed/picoclaw/pull/2102) | stevef1uk | 项目隔离修复 | **稳定性**：补充隔离架构的边界情况 |
| [#2095](https://github.com/sipeed/picoclaw/pull/2095) | stevef1uk | 多用户会话隔离 + 工具可访问性保障 | **安全架构**：多租户核心基础设施 |
| [#1991](https://github.com/sipeed/picoclaw/pull/1991) | stevef1uk | `/chat` API 异步化 | **性能**：消除同步阻塞，提升并发处理能力 |
| [#1963](https://github.com/sipeed/picoclaw/pull/1963) | stevef1uk | Azure 技能白名单 + 安全沙箱 | **安全+生态**：Azure 企业场景就绪 |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | stevef1uk | "Agent Shield" 安全套件整合 + 架构稳定化 | **里程碑**：安全架构主线化，与 Agent-Shield 项目 100% 对齐 |
| [#2327](https://github.com/sipeed/picoclaw/pull/2327) | stevef1uk | 最终安全加固清理 | **工程收尾**：完成安全重构的技术债清理 |

**整体评估**：stevef1uk 的 **"Agent Shield" 系列 PR（#1963 ~ #2327）** 构成 PicoClaw 史上最大规模的安全架构升级，涵盖：
- 多租户会话隔离
- 工作目录沙箱化
- 技能白名单控制
- 工具输出安全包装
- K3s 云原生部署

这标志着 PicoClaw 从**个人 AI 助手工具**向**企业级多用户 AI 平台**的关键跃迁。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求分析 |
|:---|:---|:---:|:---|
| 1 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) Cron 任务触发频道错误 | **6 条** | **长期痛点**：用户希望在 Raspberry Pi Zero W 上运行 7×24 定时任务，但 Cron 频道机制不稳定。反映边缘设备上的可靠性需求与资源受限场景的测试覆盖不足 |
| 2 | [#2376](https://github.com/sipeed/picoclaw/issues/2376) 禁用 Enter 发送消息 | **4 条** | **移动端体验鸿沟**：Android 用户期望类微信的多行输入体验，当前 Enter 即发送违反移动端交互惯例。获 1 👍，需求明确但优先级待评估 |
| 3 | [#2651](https://github.com/sipeed/picoclaw/issues/2651) Windows 构建指南缺失 | **3 条** | **开发者入门门槛**：Windows 开发者生态被忽视，文档/工具链支持不足 |
| 4 | [#2602](https://github.com/sipeed/picoclaw/issues/2602) OAuth 认证错误 | **3 条** | **企业集成阻塞**：OpenAI + Antigravity OAuth 双失败，影响生产环境部署 |
| 5 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) 流式 HTTP 请求配置 | **3 条** | **性能优化需求**：对标 Python OpenAI 客户端的 `stream=True`，获 1 👍 |

**诉求趋势洞察**：
- **移动端优先**（#2376, #2744）：Android 用户体验成为新战场
- **边缘/嵌入式场景**（#1757, #2651）：Raspberry Pi 等 ARM 设备用户群体扩大
- **企业级功能**（#2602, #2404）：OAuth、流式 API、K8s 部署等需求上升

---

## 5. Bug 与稳定性

### 🚨 v0.2.8 回归 Bug 集群（今日新增，按严重程度排序）

| 严重等级 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0-阻断** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) Android v0.2.8 Tab 数据完全不可访问 | 所有 Tab 无法加载数据 | Android 全量用户 | ❌ **无** |
| **P0-阻断** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) Gateway 启动无频道 | Telegram 配置生效但 Gateway 零频道启动 | 所有频道类型用户 | ❌ **无** |
| **P1-严重** | [#2738](https://github.com/sipeed/picoclaw/issues/2738) 图像识别失效 | 升级后图片上传无法识别 | 多模态用户 | ❌ **无** |
| **P1-严重** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) Cron 频道错误 | 每小时定时任务触发频道异常 | 自动化/定时任务用户 | ❌ **无** |

### 📋 历史 Bug 今日关闭

| Issue | 说明 | 修复状态 |
|:---|:---|:---|
| [#1533](https://github.com/sipeed/picoclaw/issues/1533) | 技能名称连字符-下划线转换导致 Tool not found | ✅ **已关闭** — 技能解析规则修复 |

### 🔧 待合并的 Bug Fix PR

| PR | 修复内容 | 关联 Issue |
|:---|:---|:---|
| [#2741](https://github.com/sipeed/picoclaw/pull/2741) | 流式响应解析 `reasoning_content` | 重复于 #2740，需合并审查 |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | `SecureString` 非地址值 panic 修复 | 反射安全 |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | 工具参数 JSON Schema `properties` 字段缺失 | #2139，LM Studio 兼容 |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | `web_search` 工具 YAML 配置支持 + DuckDuckGo 默认启用 | #2616 |

**稳定性评估**：v0.2.8 存在**发布质量管控缺陷**，4 个 P0/P1 回归问题在 24 小时内集中爆发，建议立即启动 **hotfix 分支（v0.2.9）** 或回滚建议。

---

## 6. 功能请求与路线图信号

### 🎯 今日活跃功能请求

| Issue | 需求 | 可行性评估 | 路线图信号 |
|:---|:---|:---|:---|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) 禁用 Enter 发送 | 移动端输入体验优化 | ⭐⭐⭐ 高 | 前端配置扩展，v0.2.9 可纳入 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) 流式 HTTP 请求配置 | `streaming: true` 配置项 | ⭐⭐⭐ 高 | 已有 OpenAI 兼容基础，快速实现 |
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) GitHub Copilot 支持 | 新提供商接入 | ⭐⭐☆ 中 | 需 OAuth + 模型协议适配，v0.3.0 考虑 |
| [#2649](https://github.com/sipeed/picoclaw/issues/2649) UART 串口工具 | 嵌入式 I/O 扩展 | ⭐⭐⭐ 高 | 已有 I2C/SPI 先例，模式可复制 |

### 🚀 已就绪的功能增强（Open PRs）

| PR | 功能 | 状态 | 预计版本 |
|:---|:---|:---|:---|
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | 原生音频输入（Gemini 1.5 多模态） | 待合并 | v0.2.9 或 v0.3.0 |
| [#2324](https://github.com/sipeed/picoclaw/pull/2324) | 异步 `/chat` HTTP API | ✅ 已合并 | v0.2.8（已发布） |
| [#2323](https://github.com/sipeed/picoclaw/pull/2323) | NVIDIA + Azure AI 提供商 | ✅ 已合并 | v0.2.8（已发布） |

---

## 7. 用户反馈摘要

### 😫 痛点（Pain Points）

| 来源 | 反馈 | 场景 |
|:---|:---|:---|
| [#2738](https://github.com/sipeed/picoclaw/issues/2738) | "升级 v0.2.8 后图片完全无法识别" | 多模态工作流中断，被迫回退 |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | "Android 所有 Tab 空白，无法访问任何数据" | 移动端核心功能瘫痪 |
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) | "配置里 enabled: true，启动却显示 0 channels" | 配置-运行时一致性断裂 |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | "OpenAI 和 Antigravity OAuth 双双失败" | 企业 SSO 集成受阻 |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | "Windows 怎么构建？完全没文档" | 开发者生态壁垒 |

### 😊 满意/期待点

| 来源 | 反馈 | 价值确认 |
|:---|:---|:---|
| stevef1uk PR 系列 | 企业级安全加固全面落地 | 多租户、隔离、白名单——生产环境刚需 |
| [#2326](https://github.com/sipeed/picoclaw/pull/2326) K3s 支持 | "终于有官方 K8s 部署方案了" | 云原生/DevOps 用户群体认可 |

### 🎭 情绪趋势

> **v0.2.8 发布前后的情绪反转**：发布前对安全架构升级高度期待 → 发布后对新版本稳定性强烈不满。社区信任度处于**敏感期**，急需快速响应修复。

---

## 8. 待处理积压

### ⏳ 长期未响应的重要事项（Stale 标记）

| 类型 | 编号 | 标题 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|
| Issue | [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 禁用 Enter 发送消息 | 2026-05-01 | 获 1 👍，移动端体验刚需，拖延将流失移动用户 |
| Issue | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 流式 HTTP 请求配置 | 2026-05-01 | 对标 Python 客户端基础功能，竞品差距 |
| Issue | [#2651](https://github.com/sipeed/picoclaw/issues/2651) | Windows 构建指南 | 2026-05-01 | 开发者增长瓶颈 |
| PR | [#2662](https://github.com/sipeed/picoclaw/pull/2662) | 统一提供商文档表格 | 2026-05-01 | 文档债务，影响新用户上手 |
| PR | [#2655](https://github.com/sipeed/picoclaw/pull/2655) | 恢复统一内核基线 | 2026-05-01 | **高风险**：涉及安全运行时语义，需核心维护者审查 |
| PR | [#2647](https://github.com/sipeed/picoclaw/pull/2647) | web_search YAML 配置 + DuckDuckGo 默认 | 2026-05-01 | 工具链配置标准化，阻塞相关 Issue #2616 |

### 🔔 维护者行动建议

| 优先级 | 行动项 | 负责人建议 |
|:---|:---|:---|
| **紧急** | 成立 v0.2.8 hotfix 专项，48 小时内发布 v0.2.9 | 核心维护者 |
| **高** | 审查并合并 [#2655](https://github.com/sipeed/picoclaw/pull/2655) 内核基线修复 | 安全架构负责人 |
| **高** | 制定 Windows 构建 CI 流程 + 文档 | 社区/文档维护者 |
| **中** | 评估 [#2376](https://github.com/sipeed/picoclaw/issues/2376) 移动端输入优化纳入 v0.3.0 | 前端负责人 |

---

## 附录：数据看板

| 指标 | 数值 | 趋势 |
|:---|:---:|:---|
| Issues 更新 | 11（新开/活跃 10，关闭 1） | ⚠️ 活跃度高，关闭率低 |
| PR 更新 | 24（待合并 11，已合并/关闭 13） | ✅ 流转效率良好 |
| 新版本 | 1（nightly） | ⚠️ 正式版质量危机 |
| 回归 Bug（v0.2.8） | 4 个 P0/P1 | 🔴 **需立即干预** |
| 安全架构 PR 合并 | 10+（stevef1uk 系列） | 🟢 重大里程碑 |

---

*本报告基于 GitHub 公开数据自动生成，如需深度分析特定模块，请联系项目维护者获取更细粒度数据。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-02

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **日期**: 2026-05-02  
> **数据周期**: 过去24小时（2026-05-01 至 2026-05-02）

---

## 1. 今日速览

NanoClaw 今日呈现**高强度修复与运营升级并行**的态势。过去24小时内，27个PR更新（16条已合并/关闭）和10个Issue更新（6条活跃）表明社区处于**活跃交付期**。核心看点在于：**OpenCode provider 的三项高危Bug被系统性扑灭**（进程泄漏、上下文丢失、硬编码超时），同时 **V1→V2 升级路径**成为新的战略焦点，涉及运营合约继承、中断运行恢复等基础设施级议题。项目健康度**良好**，但积压的WhatsApp、OAuth等历史PR清理显示维护带宽仍承压。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 🔧 已合并/关闭的重要 PR（16条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2151](https://github.com/qwibitai/nanoclaw/pull/2151) | glifocat | **Host sweep 孤儿进程清理**：杀死容器时清除 `processing_ack` 孤儿行，阻断"claim-stuck respawn loop" | 消除**会话级死锁**（P0稳定性），修复#2147 |
| [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | glifocat | **OpenCode 进程组SIGKILL + 可配置IDLE_TIMEOUT_MS**：改 `proc.kill` 为 `process.kill(-pid)` 杀进程组，超时外置为环境变量 | 根治**端口4096泄漏**（#2148）和**本地模型90秒硬限制**（#2149） |
| [#2153](https://github.com/qwibitai/nanoclaw/pull/2153) | glifocat | **OpenCode 原生指令配置加载CLAUDE.md**：弃用文本拼接，改用 `--instructions` 原生注入片段 | 解决**上下文静默丢失**（#2150），LLM终于能收到完整指令 |
| [#2165](https://github.com/qwibitai/nanoclaw/pull/2165) | CopyPasteFail | **CLAUDE.md include 预解析**：在注入前解析 `@./.claude-shared/...` 引用 | 与#2153形成**双重保险**，确保片段引用被正确展开 |
| [#2160](https://github.com/qwibitai/nanoclaw/pull/2160) | kky | **inbound.db 每次读取重新打开**：避免SQLite WAL模式下的并发句柄失效 | 修复消息摄入**静默丢数据** |
| [#2170](https://github.com/qwibitai/nanoclaw/pull/2170) | jonwhittlestone | **WhatsApp 双向媒体消息**：下载附件→workspace→`NewMessage.media` 路径传递； outbound IPC `type: 'file'` 打通 | 首个**富媒体技能**，扩展渠道能力边界 |
| [#2171](https://github.com/qwibitai/nanoclaw/pull/2171) | topcoder1 | **pre-commit 迁移至 lint-staged**：从全量`src`格式化改为仅暂存文件 | 开发者体验**显著提速**，大型仓库提交耗时下降 |
| [#2180](https://github.com/qwibitai/nanoclaw/pull/2180) | ufJmacca | **升级至 2.0.0 base**（已关闭） | V2 基线迁移的**前置探索**，虽关闭但验证路径 |

**整体推进评估**：今日合并聚焦**"OpenCode provider 稳定性三连击"**（#2151/#2152/#2153），这是 NanoClaw 核心推理引擎的关键修复，直接消除生产环境的**静默故障、资源泄漏、配置僵化**三类P0问题。同时 WhatsApp 媒体能力和开发工具链优化显示项目向**功能完整性与开发者体验**两端延伸。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) **OpenCode provider: wrapPromptWithContext sends literal @./...md lines** | **5条评论** | **高危Bug的深层诊断**：glifocat 与 CopyPasteFail 就"文本拼接 vs 原生指令配置"展开技术路线辩论，最终催生#2153和#2165两个互补修复。反映社区对**LLM上下文完整性**的极度敏感——这是Agent系统的"生命线"。 |
| 2 | [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) **Active-query push-mode stalls silently after empty-text result** | **2条评论** | **边界场景的深度挖掘**：yaniv-golan 提供基于`onInbound`的完整复现器，揭示 push 模式在空结果后的**状态机死锁**。非聊天场景的Agent编排（如Telegram WebApp）正在推动框架向更复杂的异步模式演进。 |
| 3 | [#2173](https://github.com/qwibitai/nanoclaw/issues/2173) **B-01: Interrupted-Run Detection and Observability** | **1条评论** | **基础设施级可观测性**：lazer-maker 提出"消息已派发但无持久响应"的盲区问题，要求显式标记中断状态。这是V2可靠性工程的**前置需求**，与#2174形成"检测-恢复"闭环。 |

**诉求洞察**：社区核心关切从"功能有无"转向**"生产可靠性"**——上下文不丢、状态可见、失败可恢复。这标志 NanoClaw 正从实验框架向**企业级Agent基础设施**跃迁。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 优先级 | Issue | 状态 | 影响 | Fix PR |
|:---|:---|:---:|:---|:---|
| **High** | [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) Host sweep: orphan `processing_ack` → claim-stuck loop | ✅ **已关闭** | **会话级死锁**：kill后孤儿行导致下次启动即SIGKILL，需手动DB修复 | #2151 |
| **High** | [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) `proc.kill('SIGKILL')` leaks binary, holds port 4096 | ✅ **已关闭** | **资源泄漏复合故障**：每次超时泄漏进程，容器最终不可用 | #2152 |
| **High** | [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) `wrapPromptWithContext` sends literal `@./...md` lines, fragments never reach LLM | ✅ **已关闭** | **静默上下文丢失**：Agent在无指令状态下运行，输出不可预测 | #2153, #2165 |
| **Medium** | [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) Hardcoded 90s idle timeout breaks local-model setups | ✅ **已关闭** | **本地部署不可用**：慢推理模型（如量化版）被强制中断 | #2152 |
| **—** | [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) Active-query push-mode stalls silently after empty-text result | 🟡 **开放** | **异步状态机死锁**：空结果后push通道冻结，无错误无日志 | **待修复** |
| **—** | [#2172](https://github.com/qwibitai/nanoclaw/issues/2172) `container/build.sh` vs Node host compute different image slugs on macOS | 🟡 **开放** | **跨平台构建失败**：大小写敏感/不敏感文件系统差异导致镜像标识不一致 | **待修复** |

**稳定性评估**：今日**3个High优先级Bug全部关闭**，OpenCode provider的可靠性得到**根本性加固**。但开放中的#2177（push模式死锁）和#2172（macOS构建）显示**边缘场景和平台兼容性**仍是脆弱点。

---

## 6. 功能请求与路线图信号

### 📡 新功能需求与纳入信号

| Issue/PR | 类型 | 需求描述 | 路线图信号 |
|:---|:---|:---|:---|
| [#2175](https://github.com/qwibitai/nanoclaw/issues/2175) **NanoClaw V1 → V2 Upgrade** | 基础设施 | 显式继承V1运营合约：消息派发、权限、工具安全、日历写入、Drive隔离、网关认证研究、诊断委托 | 🔴 **V2发布阻断项**：lazer-maker 作为核心维护者提出，需**正式设计文档**而非隐式兼容 |
| [#2173](https://github.com/qwibitai/nanoclaw/issues/2173) + [#2174](https://github.com/qwibitai/nanoclaw/issues/2174) **B-01/B-02: 中断运行检测与恢复** | 可靠性 | `processing_started_at`标记 + 启动时恢复重排，正常轮询隔离 | 🟡 **V2内置特性**：与#2175形成V2可靠性底座，可能纳入2.0.0 |
| [#2176](https://github.com/qwibitai/nanoclaw/issues/2176) **SC short-follow-up continuity** | 用户体验 | Gmail fresh-session containment 导致任务上下文丢失，需"受控管道"而非完全隔离 | 🟡 **技能层优化**：可能通过`scGmailGrant`的会话策略参数实现 |
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) **Google Gemini provider** | 供应商扩展 | 新增Gemini CLI `app-server`作为推理后端，对标OpenAI Codex provider | 🟢 **高概率合并**：架构对齐现有provider，farooqu持续迭代中 |
| [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) **sanitize OneCLI agent identifiers** | 集成修复 | 下划线转连字符适配OneCLI标识符限制 | 🟢 **快速通道**：修复明确，影响面可控 |

**下一版本预测**：V2（2.0.0）将是**重大版本**，核心变量是#2175的运营合约迁移设计。Gemini provider（#2136）和OneCLI兼容性（#2179）可能作为**2.0.0-beta的配套特性**发布。

---

## 7. 用户反馈摘要

### 😤 痛点（Pain Points）

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #2150 评论 | "Agent运行数小时后行为异常，才发现CLAUDE.md里的指令根本没传进去" | **长时运行Agent的调试地狱**：上下文丢失是**静默失败**，无日志无告警 |
| #2177 | "push模式在空结果后就像掉进黑洞，没有超时没有重试" | **非聊天Surface的编排**：Telegram WebApp等Inbound场景需要**显式状态反馈** |
| #2176 | "SC刚完成SkyZone评审，新开Gmail会话就忘了要发邮件" | **安全与便利的权衡**：fresh-session保护Gmail但**打断任务流** |

### 😊 满意/认可

| 来源 | 反馈 |
|:---|:---|
| #2151 合并 | glifocat的"三连击"修复获得快速响应，显示核心维护者对**生产稳定性**的优先级判断准确 |
| #2170 | WhatsApp双向媒体是**社区长期请求**，jonwhittlestone的实现覆盖inbound/outbound/技能文档三层 |

### 🔍 使用场景演变

- **从"聊天机器人"到"后台Agent"**：yaniv-golan的Telegram WebApp案例显示NanoClaw正被用于**无界面自动化**（synthesize inbounds），这对push模式、状态可见性提出新要求
- **本地部署回归**：#2149的修复反映**本地LLM（量化、自托管）用户群体增长**，他们无法承受云端90秒限制

---

## 8. 待处理积压

### ⏳ 需维护者关注的历史项

| PR/Issue | 创建时间 | 状态 | 风险 | 建议动作 |
|:---|:---:|:---:|:---|:---|
| [#701](https://github.com/qwibitai/nanoclaw/pull/701) **inject date/time context into all agent prompts** | 2026-03-04 | ⚫ **Blocked后关闭** | 时间上下文是Agent基础能力，关闭原因不明 | 确认是否被其他PR替代，或重新评估必要性 |
| [#746](https://github.com/qwibitai/nanoclaw/pull/746) **prevent WhatsApp service restart hammering** | 2026-03-05 | ⚫ **Blocked后关闭** | WhatsApp auth失败后的重试风暴 | 与#2170（新媒体功能）合并评估，避免重复修复 |
| [#1076](https://github.com/qwibitai/nanoclaw/pull/1076) **OAuth credential proxy auto-refresh** | 2026-03-14 | ⚫ **Needs Review后关闭** | OAuth 401错误持续影响用户 | **高优先级重开**：认证层不应长期破损 |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) **v1 → v2 migration setup flow** | 2026-04-23 | 🟡 **Open** | 与#2175（运营合约）存在**设计冲突** | 协调gabi-simons与lazer-maker，统一迁移策略 |
| [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) + [#2054](https://github.com/qwibitai/nanoclaw/pull/2054) **setup流程修复** | 2026-04-27 | 🟡 **Open** | 新用户首次安装失败（OneCLI未认证、sudo挂起不可见） | ** onboarding 阻断项**，建议优先合并 |
| [#2168](https://github.com/qwibitai/nanoclaw/pull/2168) **rootless Docker host.docker.internal** | 2026-05-01 | 🟡 **Open** | 安全敏感部署场景（rootless）的网络连通性 | 评估与OneCLI网络架构的兼容性 |
| [#2167](https://github.com/qwibitai/nanoclaw/pull/2167) **surface silent task failures** | 2026-05-01 | 🟡 **Open** | 定时任务"假成功"——SDK失败但标记completed | **可靠性关键**，与B-01/B-02形成完整故障感知层 |

---

> **日报生成说明**：基于GitHub公开数据自动分析，链接指向 `github.com/qwibitai/nanoclaw`。如需特定Issue/PR的深度技术解读，可进一步展开。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-02

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-02  
> **分析周期**: 过去 24 小时（2026-05-01）

---

## 1. 今日速览

NullClaw 今日展现**极高开发吞吐量与稳定性修复强度**：27 个 PR 中 23 个已合并/关闭，8 个 Issues 同步关闭，仅 1 个新 Issue 开启。核心贡献者 `manelsen` 主导了从并发架构、网关性能到技能系统的全栈改进，项目正处于**密集功能交付期**。值得关注的是，今日关闭的 Issue 跨度从 3 月初到 4 月中，显示维护团队正在系统性地消化历史积压。唯一待观察信号是 4 个待合并 PR 中包括关键并发修复 #855，需关注其合并节奏。

---

## 2. 版本发布

**无新版本发布**（今日 0 个 Release）

> 尽管功能迭代密集，但项目未打 tag，建议维护者考虑在并发架构 PR #855 合并后发布版本，以便用户获取关键稳定性修复。

---

## 3. 项目进展

### 🔧 核心架构：并发与交互性（#832 史诗推进）

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#845** | ✅ 已合并 | **入站路由器与中途注入基础设施** — 纯函数式路由核心，支持 `inject`/`replace_injection`/`drop`/`process`/`queue` 五种路由决策，为"非阻塞交互"奠定架构基础 | [PR #845](https://github.com/nullclaw/nullclaw/pull/845) |
| **#846** | ✅ 已合并 | **Channel Loop 接入入站路由器** — Telegram/Max 渠道迁移至新路由，实现注入消息无阻塞投递、丢弃静默处理 | [PR #846](https://github.com/nullclaw/nullclaw/pull/846) |
| **#848** | ✅ 已合并 | **Daemon 总线消息路由** — 会话密钥解析后插入路由检查，区分注入/处理/丢弃/队列四种路径 | [PR #848](https://github.com/nullclaw/nullclaw/pull/848) |
| **#855** | ⏳ **待合并** | **启用入站并发与轮次抢占** — 会话级抢占：新消息到达时请求中断运行中 turn；Daemon 入站处理从单线程串行重构为有限并发 | [PR #855](https://github.com/nullclaw/nullclaw/pull/855) |

> **里程碑意义**: #832 史诗的四部曲已完成 3/4，#855 作为最终集成即将落地。这标志着 NullClaw 从"单会话阻塞"模型跃迁至"并发可抢占"模型，是架构层面的重大升级。

### 🛡️ 稳定性与性能修复

| PR | 修复 Issue | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#853** | #851 | **网关 accept 循环退避** — 解决 `accept4()` 返回 `EAGAIN` 时的 CPU 空转（Raspberry Pi 5 上 100% 单核占用），添加 `ACCEPT_ERROR_BACKOFF_MAX_MS` 有界退避 | [PR #853](https://github.com/nullclaw/nullclaw/pull/853) |
| **#854** | #849 | **子 agent 结果回传** — 持久化原始路由元数据（`channel`/`chat_id`/`account_id`），完成通知精确投递至原始对话上下文，而非 `system:subagent` 合成频道 | [PR #854](https://github.com/nullclaw/nullclaw/pull/854) |
| **#843** | #763 | **Docker 交互式 onboarding 崩溃** — `KeyWriteFailed` 根因是配置目录不可写，修复为清除可操作消息并优雅降级 | [PR #843](https://github.com/nullclaw/nullclaw/pull/843) |
| **#852** | — | **记忆归档来源与召回质量** — 保留原始会话作用域，向量同步键编码对齐 `session_id`，修复"卫生归档"强制全局作用域导致的检索污染 | [PR #852](https://github.com/nullclaw/nullclaw/pull/852) |

### 🧠 技能系统与 Agent 能力

| PR | 功能 | 链接 |
|:---|:---|:---|
| **#840** | **嵌套技能目录发现** — `skills/` 下支持一级分类子目录扫描，解决扁平目录组织痛点 | [PR #840](https://github.com/nullclaw/nullclaw/pull/840) |
| **#841** | **`--skill` 启动标志** — Agent 启动时硬编码激活指定技能，绕过 token 相似度路由 | [PR #841](https://github.com/nullclaw/nullclaw/pull/841) |
| **#831** | **Agent Skills RFC 0.2.0 支持** — 优先 `/.well-known/agent-skills/index.json`，校验 schema，解析相对 URL，验证 `sha256` 摘要 | [PR #831](https://github.com/nullclaw/nullclaw/pull/831) |
| **#844** | **A2A 流进度提示转发** — 技能工具调用 `tool_call_start` 事件通过 `ProgressHint`/`ProgressCallback`/`ProgressSink` 透传至 A2A 流 | [PR #844](https://github.com/nullclaw/nullclaw/pull/844) |

### ⚙️ 工具定制与配置系统

| PR | 功能 | 链接 |
|:---|:---|:---|
| **#834** | `ToolCustomization` 配置模式 | [PR #834](https://github.com/nullclaw/nullclaw/pull/834) |
| **#835** | `system_prompt` 覆盖与工具启用/禁用 | [PR #835](https://github.com/nullclaw/nullclaw/pull/835) |
| **#836** | **触发词工具优先级排序** — 检测触发关键词时自动注入 `[PRIORITY: ...]` 提示 | [PR #836](https://github.com/nullclaw/nullclaw/pull/836) |
| **#837** | 外部 `tool_customizations_file` JSON 加载（支持 Array/Object 双格式） | [PR #837](https://github.com/nullclaw/nullclaw/pull/837) |

### 🔐 隐私与部署

| PR | 功能 | 链接 |
|:---|:---|:---|
| **#838** | **Matrix E2EE 代理支持** — 集成 [pantalaimon](https://github.com/matrix-org/pantalaimon) 作为可选 E2EE 代理，所有 5 个 Matrix API URL 构建器路由至代理端点 | [PR #838](https://github.com/nullclaw/nullclaw/pull/838) |
| **#842** | **`--workspace` 标志** — Gateway/Agent 启动时覆盖工作区目录，支持多实例部署 | [PR #842](https://github.com/nullclaw/nullclaw/pull/842) |
| **#850** | ⏳ **Tailscale auth_key 加密支持** — 通过 NullClaw secrets 管道解密/加密轮转 | [PR #850](https://github.com/nullclaw/nullclaw/pull/850) |

### 🧠 记忆后端

| PR | 功能 | 链接 |
|:---|:---|:---|
| **#712** | **知识图谱记忆后端** — `KgMemory` 基于 SQLite + 递归 CTE 的实体-关系遍历，FTS5 全文索引 | [PR #712](https://github.com/nullclaw/nullclaw/pull/712) |

---

## 4. 社区热点

> 注：所有 PR 的 `评论数` 字段显示为 `undefined`，Issues 评论数普遍偏低（0-4），表明社区讨论**以代码审查为主，用户端公开讨论较少**，符合早期技术项目的特征。

| 条目 | 评论数 | 热度分析 | 链接 |
|:---|:---|:---|:---|
| **Issue #851** [CLOSED] | 4 | **最高评论 Issue** — Raspberry Pi 5 上的 CPU 空转是嵌入式/边缘部署的典型痛点，4 条评论反映诊断过程（`strace` 分析 `accept4()` 循环），最终由 `manelsen` 快速修复 | [Issue #851](https://github.com/nullclaw/nullclaw/issues/851) |
| **Issue #763** [CLOSED] | 1 | Docker onboarding 的权限问题，代表容器化部署的摩擦点 | [Issue #763](https://github.com/nullclaw/nullclaw/issues/763) |

**诉求洞察**: 
- **边缘计算友好性**: Pi 5 问题显示用户正在将 NullClaw 部署到资源受限设备
- **Docker 体验完整性**: 交互式配置在容器环境中的权限假设需要更鲁棒的处理

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 已修复** | #851 | Gateway CPU 空转（100% 单核），边缘设备致命 | ✅ PR #853 已合并 | [Issue #851](https://github.com/nullclaw/nullclaw/issues/851) |
| 🔴 **P0 - 已修复** | #849 | 子 agent 结果丢失（无法获取回复，但文件操作成功） | ✅ PR #854 已合并 | [Issue #849](https://github.com/nullclaw/nullclaw/issues/849) |
| 🟡 **P1 - 已修复** | #763 | Docker onboarding `KeyWriteFailed` 崩溃 | ✅ PR #843 已合并 | [Issue #763](https://github.com/nullclaw/nullclaw/issues/763) |
| 🟢 **P2 - 已修复** | #825 | 嵌套技能目录不支持（分类组织需求） | ✅ PR #840 已合并 | [Issue #825](https://github.com/nullclaw/nullclaw/issues/825) |

> **健康度评估**: 今日 8 个关闭 Issue 中 4 个为 Bug，全部有对应修复 PR 且已合并，**修复闭环率 100%**。无新增严重 Bug 报告。

---

## 6. 功能请求与路线图信号

| 新需求 | 状态 | 与现有 PR 的关联 | 纳入可能性 | 链接 |
|:---|:---|:---|:---|:---|
| **#879** cron: `command` + `prompt` 联合使用（shell-to-agent 管道） | 🆕 今日新开 | 与 #834-#837 工具定制系列、#845-#855 并发架构相关 | **高** — 基础设施已就绪，需扩展 `schedule` 工具校验逻辑 | [Issue #879](https://github.com/nullclaw/nullclaw/issues/879) |
| #209 Matrix E2EE | ✅ 已关闭 | PR #838 已实现 pantalaimon 代理方案 | 已交付 | [Issue #209](https://github.com/nullclaw/nullclaw/issues/209) |
| #580 `--skill` 硬编码路由 | ✅ 已关闭 | PR #841 已实现 | 已交付 | [Issue #580](https://github.com/nullclaw/nullclaw/issues/580) |
| #808 A2A 进度流暴露 | ✅ 已关闭 | PR #844 已实现 | 已交付 | [Issue #808](https://github.com/nullclaw/nullclaw/issues/808) |
| #833 多 workspace 支持 | ✅ 已关闭 | PR #842 已实现 `--workspace` | 已交付 | [Issue #833](https://github.com/nullclaw/nullclaw/issues/833) |

**路线图信号**: 
- **#879 是当前唯一待响应的新功能请求**，其实现路径清晰：利用 #845-#848 建立的消息注入基础设施，允许 cron 任务的 shell 输出作为 prompt 注入后续 agent turn。建议在 #855 合并后优先处理。
- 工具定制四部曲（#834-#837）显示项目正向"可编程 Agent 行为"方向演进，可能为后续插件/扩展市场奠基。

---

## 7. 用户反馈摘要

### 😫 痛点
| 场景 | 来源 | 核心问题 |
|:---|:---|:---|
| 边缘设备部署 | #851 | 网关事件循环在资源受限设备上的忙等待 |
| Docker 权限假设 | #763 | 交互式配置未处理只读/不可写目录场景 |
| 子 agent 可观测性 | #849 | 异步任务完成但结果"丢失"在用户对话上下文外 |
| 技能组织 | #825 | 扁平目录无法支撑规模化技能管理 |

### 😊 满意/期待
| 场景 | 来源 | 积极信号 |
|:---|:---|:---|
| A2A 协议集成 | #808 | 用户主动询问进度流暴露，显示 UI 生态正在形成 |
| 隐私优先通道 | #209 | Matrix E2EE 需求来自"无手机号注册"的隐私诉求，pantalaimon 方案被接受 |
| 精确路由控制 | #580 | 开发者需要绕过相似度的确定性技能调用 |

### 💡 使用模式洞察
- **多实例部署**: #833 + #842 显示用户正在运行多个 Gateway/Agent 实例，需要工作区隔离
- **自动化管道**: #879 的 shell-to-agent 模式代表"传统 cron + AI 后处理"的混合工作流需求

---

## 8. 待处理积压

| 条目 | 创建时间 | 状态 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| **PR #855** | 2026-04-19 | ⏳ 待合并（4 个待合并之一） | **阻塞 #832 史诗闭环**，并发架构的最终拼图 | 优先代码审查，合并后考虑发版 |
| **PR #850** | 2026-04-19 | ⏳ 待合并 | Tailscale 加密 auth_key，网络层安全增强 | 可与 #855 并行审查 |
| Issue #879 | 2026-05-01 | 🆕 新开 | 需求清晰，基础设施就绪，拖延可能流失 cron 场景用户 | 标记 `good first issue` 或分配 `manelsen` 快速实现 |

---

## 附录：数据速查

| 指标 | 数值 | 趋势判断 |
|:---|:---|:---|
| Issues 更新 | 9（新开 1 / 关闭 8） | 关闭率极高，积压消化中 |
| PRs 更新 | 27（待合并 4 / 已处理 23） | 开发吞吐量峰值 |
| 版本发布 | 0 | 建议发版窗口临近 |
| 核心贡献者活跃度 | `manelsen`: 20/27 PRs | 单点依赖风险中等 |

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或线下沟通信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-02

## 1. 今日速览

IronClaw 今日呈现**高强度推进态势**：24小时内30条Issues更新（23条活跃/新开，7条关闭）、50条PR更新（31条待合并，19条已合并/关闭），零版本发布。核心团队正全力冲刺 **"Reborn" 架构大规模落地**——这是项目历史上最大的架构重构，涉及运行时、安全边界、资源治理、事件存储等全栈改造。社区侧则出现Linux安装器回归问题（#2818）和Docker镜像缺失（#2963）等基础设施痛点，已有针对性修复PR提交。整体健康度：**核心开发活跃，基础设施待补**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 关联Issue | 进展说明 |
|:---|:---|:---|:---|
| [#3155](https://github.com/nearai/ironclaw/pull/3155) | ilblackdragon | [#2583](https://github.com/nearai/ironclaw/issues/2583) | **修复 Routine 创建崩溃**：根因是 `mission_*` 工具处理程序错误地要求 `id` UUID，而 LLM 实际传递 `name`，导致"5 consecutive code errors"。这是一个影响用户基础功能的**高优先级修复**，已关闭积压Bug |
| [#3161](https://github.com/nearai/ironclaw/pull/3161) | serrrfirat | [#3145](https://github.com/nearai/ironclaw/issues/3145) | **定义后台进程义务生命周期**：为 Reborn 架构的 `CapabilityHost::spawn_json` 后台执行建立义务协调机制，是 Sandcastle 沙箱化的关键基础设施 |
| [#3129](https://github.com/nearai/ironclaw/pull/3129) | zetyquickly | - | **推理链追踪与冒烟测试**：新增 `emit_reasoning_trace` 辅助函数，支持 GLM-5/DeepSeek/OpenAI o-series/Qwen 的 reasoning_content 输出，并添加对应冒烟测试 |

### 已关闭的重要 Issues

| Issue | 说明 |
|:---|:---|
| [#3137](https://github.com/nearai/ironclaw/issues/3137) | MCP HTTP/SSE 客户端接入共享运行时 HTTP 出口——Reborn 工具链基础设施完成 |
| [#3143](https://github.com/nearai/ironclaw/issues/3143) | 内置义务处理程序接入生产 HostRuntime 服务图 |
| [#3086](https://github.com/nearai/ironclaw/issues/3086) | WASM 运行时通道重构完成 |
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | **用户报告的高优先级Bug**——Routine 创建失败，已修复 |
| [#3146](https://github.com/nearai/ironclaw/issues/3146) | 生产环境信任决策评估前置到能力分发 |
| [#3140](https://github.com/nearai/ironclaw/issues/3140) | 一次性密钥注入接入运行时适配器 |
| [#3139](https://github.com/nearai/ironclaw/issues/3139) | 网络策略义务接入运行时出口 |

**整体推进评估**：Reborn 架构从"设计/基础设施铺设"阶段进入**"垂直整合与生产化"**阶段。今日关闭的7条Issues全部属于 Reborn 核心路径，显示架构落地按计划推进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#2987](https://github.com/nearai/ironclaw/issues/2987) [EPIC] Reborn 架构落地策略与分组 PR 计划 | **44条** | **绝对核心枢纽**。这是 Reborn 的"主脑"追踪Issue，维护者 serrrfirat 持续更新 PR 分组策略（PR0 contract freeze → staging reborn-integration → grouped implementation PRs → final reborn-integration）。高评论量反映架构重构的复杂性——需要协调冻结合约、分批审查、避免"巨型堆叠PR"压垮审阅者 |
| 🥈 | [#3067](https://github.com/nearai/ironclaw/issues/3067) Reborn 垂直切片集成测试套件 | **14条** | **质量门禁焦虑**。团队意识到"仅通过 crate 本地单元/合约测试"不足以证明 Reborn 子系统可用，急需"调用方级别"的集成测试。这是架构重构的典型痛点：底层模块各自通过测试，但组合后行为未知 |
| 🥉 | [#3085](https://github.com/nearai/ironclaw/issues/3085) 共享 Reborn 运行时 HTTP 出口 | **7条** | **安全架构关键决策**。将 HTTP 传输、DNS/SSRF 检查、限流、脱敏、资源核算从 WASM 专用代码上提到共享层，涉及多运行时（WASM/Script/MCP）的统一安全边界 |

**诉求洞察**：社区核心关切从"功能有无"转向**"架构可验证性"**——44条评论的EPIC和14条评论的测试追踪Issue表明，团队正在建立工程纪律，确保大规模重构不引入回归。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P1-有修复** | [#2818](https://github.com/nearai/ironclaw/issues/2818) | OPEN | **v0.26.0 Linux 安装器失败**：`x86_64-unknown-linux-gnu` 平台下载错误，cargo-dist 0.30.3 生成损坏的安装脚本（命名空间标签 `ironclaw-v<version>` 导致URL硬编码错误） | [#3172](https://github.com/nearai/ironclaw/pull/3172)（已提交，bump cargo-dist 至 0.31.0） |
| 🔴 **P1-有修复** | [#2949](https://github.com/nearai/ironclaw/issues/2949) | OPEN | **相同安装器问题**：用户通过最新脚本安装仍报相同错误，确认 #2818 未完全解决或影响多个版本 | 依赖 #3172 |
| 🟡 **P2-无修复** | [#2963](https://github.com/nearai/ironclaw/issues/2963) | OPEN | **Docker Hub 镜像缺失**：文档指定 `nearai/ironclaw:latest` 但仓库不存在/访问被拒绝，阻碍容器化部署 | 无 |
| 🟡 **P2-有修复** | [#2583](https://github.com/nearai/ironclaw/issues/2583) | **CLOSED** | Routine 创建失败 "5 consecutive code errors" | [#3155](https://github.com/nearai/ironclaw/pull/3155) |
| 🟡 **P2-有修复** | [#3133](https://github.com/nearai/ironclaw/issues/3133) | OPEN | **邮件发送任务失败**：Gmail OAuth 认证门导致任务暂停，需手动调试 | [#3155](https://github.com/nearai/ironclaw/pull/3155)（部分修复），[#3166](https://github.com/nearai/ironclaw/issues/3166)（后续：自动恢复） |
| 🟢 **P3-无修复** | [#3132](https://github.com/nearai/ironclaw/issues/3132) | OPEN | **类型严格性Bug**：`cooldown_secs` 要求整数但接收字符串 `"120"`，序列化/验证层问题 | 无 |

**稳定性评估**：基础设施（安装器、Docker）成为明显短板，与核心架构的高歌猛进形成反差。#3172 是今日最关键的稳定性修复，建议优先合并。

---

## 6. 功能请求与路线图信号

### 用户/贡献者提出的新功能

| Issue/PR | 提出者 | 功能 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#3168](https://github.com/nearai/ironclaw/issues/3168) | gcaguilar | **ARM64/AArch64 Docker 支持** | ⭐⭐⭐⭐⭐ **高**。技术障碍低（Cranelift 已支持 aarch64，仅 armv7 32位受限），社区需求明确，基础设施补全 |
| [#3178](https://github.com/nearai/ironclaw/pull/3178) | abbyshekit | `ironclaw backup --quick` 便携状态快照 | ⭐⭐⭐⭐⭐ **高**。已提交PR，属于 CLI 工具链完善，风险低 |
| [#3177](https://github.com/nearai/ironclaw/pull/3177) | abbyshekit | `ironclaw insights` 使用分析 | ⭐⭐⭐⭐⭐ **高**。已提交PR，对标 Hermes 功能，纯数据聚合无风险 |
| [#3175](https://github.com/nearai/ironclaw/pull/3175) | abbyshekit | Google Drive 只读 OAuth 范围 | ⭐⭐⭐⭐⭐ **高**。已提交PR，安全最佳实践（最小权限原则） |
| [#3176](https://github.com/nearai/ironclaw/pull/3176) | abbyshekit | X (Twitter) 书签采集+分类 Skill | ⭐⭐⭐⭐☆ **中高**。已提交PR，但依赖外部 MCP（claude-in-chrome），长期可维护性待观察 |
| [#3173](https://github.com/nearai/ironclaw/pull/3173)-[#3174](https://github.com/nearai/ironclaw/pull/3174)-[#3179](https://github.com/nearai/ironclaw/pull/3179) | abbyshekit | **Legal Harness 法律文档 RAG 套件**（Streams A/B/C） | ⭐⭐⭐⭐☆ **中高**。大型功能组（项目/文档/采集 → RAG聊天 → DOCX导出），Apache-2.0 重写替代 AGPL-3.0 项目，有明确的合规价值 |
| [#3169](https://github.com/nearai/ironclaw/issues/3169) | serrrfirat | 进程自有运行时交接 ID（并发后台扇出） | ⭐⭐⭐⭐☆ **中高**。Reborn 架构演进需求，当前 #3161 的故意限制，后续必然解锁 |
| [#3166](https://github.com/nearai/ironclaw/issues/3166) | ilblackdragon | 任务授权门解决后自动恢复 | ⭐⭐⭐⭐⭐ **高**。#3133 的后续，用户体验关键路径，已标记为 follow-up |

**路线图信号**：今日出现**两条清晰的产品线分叉**——
- **核心平台线**：Reborn 架构（serrrfirat 主导，安全/运行时/资源治理）
- **垂直应用线**：Legal Harness + X Skill + Insights（abbyshekit 主导，用户-facing 功能）

两者通过 #3090 `ToolSurfaceService` / `CapabilityCatalog` 等 Reborn 基础设施间接耦合。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#2949](https://github.com/nearai/ironclaw/issues/2949) gittyhubert | **"安装即失败"**：按官方文档执行脚本，平台检测错误 | 新用户首次体验，Linux 服务器部署 |
| [#2963](https://github.com/nearai/ironclaw/issues/2963) magnusviri | **"文档与实物不符"**：Docker Hub 镜像不存在 | 期望容器化快速启动，被权限拒绝阻断 |
| [#3133](https://github.com/nearai/ironclaw/issues/3133) sergeiest | **"简单任务复杂失败"**：每3分钟发邮件的基础任务因 Gmail 认证失败 | 非技术用户期望"设置后忘记"，实际需手动调试 OAuth |
| [#3132](https://github.com/nearai/ironclaw/issues/3132) sergeiest | **类型系统不友好**：字符串 `"120"` 不被接受为整数 | API/LLM 交互中的序列化摩擦 |

### 满意点

- **架构透明度**：[#2987](https://github.com/nearai/ironclaw/issues/2987) 的详细 PR 分组策略获得隐性认可（无负面评论，持续更新）
- **快速响应**：[#2583](https://github.com/nearai/ironclaw/issues/2583) 从报告到修复关闭仅约2周，对复杂项目属合理周期

### 不满意/风险信号

- **基础设施投资不足**：安装器和 Docker 问题长期存在（#2818 创建于4-21，#2963 创建于4-26），与核心功能开发形成资源竞争
- **ARM 边缘化**：[#3168](https://github.com/nearai/ironclaw/issues/3168) 指出仅发布 linux/amd64，Apple Silicon 和 ARM 服务器用户被排除

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#2818](https://github.com/nearai/ironclaw/issues/2818) v0.26.0 安装器失败 | 2026-04-21 | 2026-05-01 | **10天** | 🔴 **高**。影响新用户获取，虽有 #3172 待合并，但 #2949 显示问题仍在发生，可能需验证修复覆盖范围 |
| [#2963](https://github.com/nearai/ironclaw/issues/2963) Docker Hub 镜像缺失 | 2026-04-26 | 2026-05-01 | **6天** | 🟡 **中**。文档与发布流程脱节，需检查 CI/CD 的 Docker 推送步骤或文档修正 |
| [#2949](https://github.com/nearai/ironclaw/issues/2949) Linux 平台下载错误 | 2026-04-24 | 2026-05-01 | **8天** | 🟡 **中**。与 #2818 同源，但用户路径不同（latest vs v0.26.0），需确认 #3172 是否同时修复 |

**维护者提醒**：建议今日优先合并 [#3172](https://github.com/nearai/ironclaw/pull/3172) 并验证 `latest` 和 `ironclaw-v0.26.0` 两条发布线的安装器行为。Docker 镜像问题需分配明确的发布流程负责人。

---

*日报生成时间：2026-05-02 | 数据来源：GitHub API 概览*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-02

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-02  
> **分析周期**: 过去24小时

---

## 1. 今日速览

LobsterAI 今日呈现**"高吞吐、零 Issue"**的典型特征：24小时内无新增或活跃的 Issue，但 PR 管线保持强劲运转，15条 PR 中有9条完成合并/关闭，6条仍待审阅。核心贡献者 `liuzhq1986` 主导了全部9条已关闭 PR，集中在 Windows 安装器修复、协同工作（Cowork）稳定性、技能系统优化及 UI 细节打磨，显示项目正处于**密集迭代期**。值得关注的是，6条待合并 PR 均标记为 `[stale]`，最早可追溯至3月25日，存在**审阅积压风险**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（9条）

| PR | 作者 | 领域 | 核心贡献 |
|:---|:---|:---|:---|
| [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) | liuzhq1986 | Windows 安装器 | **NSIS 退出码检查机制升级**：将字符串比较 `StrCmp` 替换为整数比较 `IntCmp`，消除类型不匹配导致的安装器逻辑错误；新增诊断日志便于排查安装失败 |
| [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868) | liuzhq1986 | 渲染层 / 协同工作 | **IM 图片体验优化**：约束 Markdown 渲染图片尺寸，解决微信渠道图片过大问题；新增点击预览功能 |
| [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) | liuzhq1986 | 主进程 | **关键稳定性修复**：网关 LLM 请求无限重试时，生命周期错误回退会清理本地 turn 但遗留网关运行状态，导致后续消息被拒绝（"session still running"死锁）。现通过 `chat.abort` 主动终止网关运行，释放会话 |
| [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) | liuzhq1986 | 文档 / 技能 | **有道云笔记技能升级** |
| [#1857](https://github.com/netease-youdao/LobsterAI/pull/1857) | liuzhq1986 | 主进程 | **首页模型切换稳定性**：阻止切换模型时触发网关硬重启，减少连接中断 |
| [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855) | liuzhq1986 | 渲染层 | **UI 防溢出**：模型选择器长名称截断，防止顶部导航栏布局崩坏 |
| [#1851](https://github.com/netease-youdao/LobsterAI/pull/1851) | liuzhq1986 | 主进程 / 技能 | **Windows 文件句柄修复**：删除技能目录前释放文件监视器（file watchers），消除 Windows 独占句柄导致的删除失败 |
| [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840) | liuzhq1986 | 渲染层 | **配置持久化安全**：`updateConfig` 采用读-改-写模式，以最新存储配置为基而非可能持有默认值的内存缓存，防止部分更新覆盖用户自定义的 provider 配置 |
| [#1829](https://github.com/netease-youdao/LobsterAI/pull/1829) | liuzhq1986 | 渲染层 | **更新提示准确性**：移除安装状态中不准确的自动重启提示，降低用户预期偏差 |

**整体推进评估**：今日合并聚焦**三大支柱**——安装器可靠性（2条）、Cowork 协同稳定性（3条）、技能系统健壮性（2条），配合 UI 细节打磨（2条），属于**高质量维护性迭代**。特别是 #1869 的死锁修复和 #1840 的配置安全修复，属于生产环境关键缺陷治理。

---

## 4. 社区热点

**今日无活跃讨论**。全部 PR 评论数均为 `undefined`（零评论），👍 反应均为0。

**待合并 PR 中的潜在热点**（长期未审阅，社区诉求积压）：

| PR | 创建日期 | 核心诉求 | 背后用户场景 |
|:---|:---|:---|:---|
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) | 2026-04-01 | **流式渲染性能优化** | 长会话（100条消息/10分钟）CPU 占用高、滚动卡顿，直接影响高频用户的核心体验 |
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) | 2026-04-01 | **技能文件夹快捷访问** | 高级用户需要直接编辑技能源码，当前路径隐藏过深 |
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | 2026-03-25 | **技能去重机制** | 重复上传导致存储浪费和列表混乱，反映技能管理缺乏版本控制 |

> **信号解读**：#1186 的性能优化 PR 已停滞超1个月，而今日合并的 #1868/#1855 等 UI 修复仍在持续，暗示维护优先级可能偏向"可见问题"而非"性能债务"。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|:---|:---|:---|:---|
| 🔴 **高** | Cowork 网关死锁：LLM 重试失败后会话永久锁定，后续消息全部被拒 | **已修复** | [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) |
| 🟡 **中** | Windows 卸载时应用仍在运行，用户误以为未卸载成功 | 待合并 | [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) |
| 🟡 **中** | Windows 技能目录删除因文件监视器句柄占用失败 | **已修复** | [#1851](https://github.com/netease-youdao/LobsterAI/pull/1851) |
| 🟡 **中** | 配置更新可能用默认值覆盖用户自定义 provider | **已修复** | [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840) |
| 🟢 **低** | NSIS 安装器字符串比较导致退出码判断不可靠 | **已修复** | [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) |
| 🟢 **低** | 模型选择器长名称导致顶部布局溢出 | **已修复** | [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855) |

**风险评估**：#1190（Windows 卸载进程终止）与 #1841（安装器退出码）形成**安装器闭环修复**的对偶问题，但前者仍在待合并队列，存在修复不完整的风险。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) 技能文件夹快捷打开 | 降低技能开发门槛，增强生态开放性 | 低侵入，复用现有 `shell.showItemInFolder` | **高** — 代码已完成，仅缺审阅 |
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) 技能 SHA256 去重 | 存储优化 + 体验治理 | 需数据库 schema 变更（`skill_hash` 列），有迁移成本 | **中** — 技术债务，但非紧急 |
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) 流式渲染性能重构 | Redux 选择器优化 + React.memo 精细化 | 涉及核心渲染路径，回归风险需充分测试 | **中** — 质量改进，但测试覆盖要求高 |

**路线图推断**：项目当前重心在 **Cowork 协同工作稳定性**（3条 PR）和 **Windows 桌面端体验**（4条 PR），技能系统处于**功能补全期**而非**架构扩展期**。

---

## 7. 用户反馈摘要

> **注**：今日无新增 Issue 评论，以下从 PR 描述反推用户痛点

| 痛点来源 | 具体场景 | 情绪强度 |
|:---|:---|:---|
| #1868 微信渠道图片过大 | IM 场景下图片直接按原始尺寸渲染，破坏阅读流 | 😤 高 |
| #1190 卸载后窗口仍运行 | 控制面板卸载完成，任务栏图标仍在，安全感缺失 | 😤 高 |
| #1186 长会话卡顿 | 10分钟深度对话后界面失帧，生产力工具反成阻碍 | 😠 中高 |
| #825 技能列表重复 | "skill-1, skill-2, skill-3..." 无法辨识有效版本 | 😕 中 |
| #1855 模型名称截断 | 长模型名（如 `claude-3-5-sonnet-20241022`）挤占导航空间 | 😐 低 |

**满意度信号**：无显性好评反馈，但 `liuzhq1986` 的高频修复响应（9条/日）表明维护团队对**已知问题有明确感知且行动迅速**。

---

## 8. 待处理积压

### ⚠️ 高优先级审阅提醒

| PR | 创建 | 最后更新 | 停滞天数 | 风险 |
|:---|:---|:---|:---|:---|
| [#822](https://github.com/netease-youdao/LobsterAI/pull/822) Token 刷新竞态条件统一 | 2026-03-25 | 2026-05-01 | **37天** | 认证层并发安全，多窗口场景必现 |
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) 技能上传去重 | 2026-03-25 | 2026-05-01 | **37天** | 存储膨胀，用户体验持续劣化 |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) OpenClaw 主代理会话隐藏 | 2026-04-01 | 2026-05-01 | **31天** | 内部实现细节暴露，用户困惑 |
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) 流式渲染性能优化 | 2026-04-01 | 2026-05-01 | **31天** | 长会话性能瓶颈，影响核心留存 |

### 维护建议

> **#822 的竞态条件修复尤为紧迫**：与今日合并的 #1869（死锁修复）同属**并发控制缺陷**，但位于认证层（被动刷新、主动刷新、手动刷新三路并发）。建议优先审阅，避免与网关层问题形成级联故障。

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 0（新开 0 / 活跃 0 / 关闭 0）|
| PR 更新 | 15（待合并 6 / 已合并关闭 9）|
| 版本发布 | 0 |
| 活跃贡献者（24h） | 1人（liuzhq1986）|
| 待合并 PR 平均停滞 | 33天 |

---

*日报生成时间: 2026-05-02*  
*数据来源: GitHub API / netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-02

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-02（数据覆盖 2026-05-01 24小时周期）

---

## 1. 今日速览

Moltis 昨日展现**极高维护响应效率**：24小时内关闭 5 个 Issue、合并/关闭 9 个 PR，**零待处理 Bug 积压**。核心贡献者 `penso` 单日输出 6 个 PR，主导修复了 Telegram 崩溃、Discord 指令失效、聊天布局溢出等生产级问题；`gaarf` 补充终端与语音 UI 修复。项目呈现**"报告即修复"的敏捷状态**，仅 1 个新功能请求（#949）待讨论。无版本发布，但代码迭代密度表明团队可能正在为下一版本集中收尾。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（9 条）

| PR | 作者 | 核心进展 | 关联 Issue |
|:---|:---|:---|:---|
| [#954](https://github.com/moltis-org/moltis/pull/954) | penso | **升级 teloxide 0.13→0.17**，修复 Telegram 多部分上传 `ThreadId` panic（生产崩溃级问题） | [#947](https://github.com/moltis-org/moltis/issues/947) |
| [#952](https://github.com/moltis-org/moltis/pull/952) | penso | **修复聊天布局水平溢出**（CSS `overflow-x:hidden` + `min-width:0`） | [#945](https://github.com/moltis-org/moltis/issues/945) |
| [#950](https://github.com/moltis-org/moltis/pull/950) | penso | **Discord Slash 命令参数注册**，从"静默忽略"变为完整参数支持 + 下拉选项 | [#948](https://github.com/moltis-org/moltis/issues/948) |
| [#953](https://github.com/moltis-org/moltis/pull/953) | penso | **E2E 回归测试覆盖**：6 个自动滚动测试防止 [#946](https://github.com/moltis-org/moltis/issues/946) 复发 | [#946](https://github.com/moltis-org/moltis/issues/946) |
| [#951](https://github.com/moltis-org/moltis/pull/951) | penso | **新增 `moltis-portable`  crate**：配置/数据库/会话的导入导出备份能力 | — |
| [#955](https://github.com/moltis-org/moltis/pull/955) | gaarf | **终端 tmux 竞态修复**：消除"window does not exist"伪错误 | [#937](https://github.com/moltis-org/moltis/issues/937) |
| [#943](https://github.com/moltis-org/moltis/pull/943) | gaarf | **语音 UI 条件渲染**：STT/TTS 禁用时自动隐藏麦克风按钮 | — |
| [#944](https://github.com/moltis-org/moltis/pull/944) | gaarf | **新增 Zen (opencode.ai) 提供商**：多协议代理，零数据保留策略 | — |
| [#339](https://github.com/moltis-org/moltis/pull/339) | PeterDaveHello | **繁体中文（zh-TW）完整本地化**（3月PR，昨日完成合并） | — |

**整体推进评估**：昨日修复覆盖 **3 大平台稳定性**（Telegram/Discord/Web UI）、**1 项数据可移植性基础设施**、**1 个新提供商生态位**、**1 个语言市场扩展**。测试债务得到主动偿还（#953），项目健康度显著提升。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热点分析 |
|:---|:---|:---|:---|
| 🔥1 | [#946](https://github.com/moltis-org/moltis/issues/946) 聊天不自动滚动 | 👍 1 | **用户体验敏感点**：虽仅 1 个赞，但获专门 E2E 测试保护（#953），说明维护团队视其为"易复发交互缺陷" |
| 2 | [#947](https://github.com/moltis-org/moltis/issues/947) Telegram 上传崩溃 | 评论 1 | **生产事故级**：panic 导致服务重启，修复 PR（#954）当日即到 |
| 3 | [#949](https://github.com/moltis-org/moltis/issues/949) 子代理故障转移 | 新开，0 互动 | **架构深层诉求**：`spawn_agent` 工具链的可靠性设计缺口，可能引发多代理工作流讨论 |

**社区诉求信号**：用户正将 Moltis 推向**高可用多代理编排场景**，对"单点故障即任务失败"的容忍度降低。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | [#947](https://github.com/moltis-org/moltis/issues/947) Telegram `send_document` panic/重启 | ✅ 已关闭 | [#954](https://github.com/moltis-org/moltis/pull/954) | 论坛/主题聊天文件上传 |
| 🟡 **P1-功能失效** | [#948](https://github.com/moltis-org/moltis/issues/948) Discord Slash 命令丢参数 | ✅ 已关闭 | [#950](https://github.com/moltis-org/moltis/pull/950) | 所有 Discord 斜杠命令交互 |
| 🟡 **P1-布局缺陷** | [#945](https://github.com/moltis-org/moltis/issues/945) 聊天过宽/水平滚动条 | ✅ 已关闭 | [#952](https://github.com/moltis-org/moltis/pull/952) | Web UI 全平台 |
| 🟡 **P1-交互缺陷** | [#946](https://github.com/moltis-org/moltis/issues/946) 底部不自动滚动 | ✅ 已关闭 | [#953](https://github.com/moltis-org/moltis/pull/953) | Web UI 聊天体验 |
| 🟢 **P2-噪音错误** | [#937](https://github.com/moltis-org/moltis/issues/937) 终端 tmux "window does not exist" | ✅ 已关闭 | [#955](https://github.com/moltis-org/moltis/pull/955) | 终端标签页创建 |

**稳定性健康度**：🟢 **优秀** — 24小时内 5/5 Bug 清零，含 1 个崩溃级修复。遗留风险：teloxide 大版本升级（0.13→0.17）需观察兼容性回归。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 可行性信号 | 纳入预测 |
|:---|:---|:---|:---|
| **子代理提供商故障转移** | [#949](https://github.com/moltis-org/moltis/issues/949) | `spawn_agent` 工具链已成熟；OpenCode Zen 多协议支持（#944）显示提供商抽象层就绪 | **高** — 下一版本（v0.x 或 v1.0）核心可靠性特性 |
| **远程/多后端沙盒** | [#942](https://github.com/moltis-org/moltis/pull/942) OPEN | PR 已开，覆盖 Vercel/Daytona/Firecracker；解决 Docker-in-Docker 限制 | **高** — 云部署刚需，架构扩展关键 |
| **电话语音支持（Twilio）** | [#920](https://github.com/moltis-org/moltis/pull/920) OPEN | PR 已开，含完整状态机、音频编解码、Webhook 路由 | **中-高** — 通道生态完整性，但依赖维护者 review 带宽 |

**路线图推断**：团队正从"功能广度"（多平台/多提供商）转向**"生产深度"**（可靠性、可移植性、云原生部署）。

---

## 7. 用户反馈摘要

| 维度 | 提炼内容 | 来源 |
|:---|:---|:---|
| **痛点** | Telegram 文件上传导致服务重启，影响自动化工作流可靠性 | [#947](https://github.com/moltis-org/moltis/issues/947) |
| **痛点** | Discord 命令参数无效，"像对着空气说话" | [#948](https://github.com/moltis-org/moltis/issues/948) |
| **痛点** | 聊天界面"太宽"破坏阅读体验，CSS 细节粗糙 | [#945](https://github.com/moltis-org/moltis/issues/945) |
| **场景** | 用户通过 `spawn_agent` 预设（scout/analyst/builder）构建多代理流水线，但单提供商故障即全崩 | [#949](https://github.com/moltis-org/moltis/issues/949) |
| **满意** | 维护响应极快 — 4 个 Bug 均当日报告当日修复 | 全局观察 |
| **隐忧** | `spawn_agent` 作为核心编排工具，其可靠性设计似乎滞后于用户实际使用深度 | [#949](https://github.com/moltis-org/moltis/issues/949) |

---

## 8. 待处理积压

| 条目 | 状态 | 滞留时间 | 风险提醒 |
|:---|:---|:---|:---|
| [#942](https://github.com/moltis-org/moltis/pull/942) 远程沙盒支持 | OPEN | 2 天 | **高价值架构 PR**，解决云部署 blocker；需 review 资源投入 |
| [#920](https://github.com/moltis-org/moltis/pull/920) Twilio 电话支持 | OPEN | 3 天 | 功能完整度高（含测试/文档），但音频子系统 review 较重 |
| [#949](https://github.com/moltis-org/moltis/issues/949) 子代理故障转移 | OPEN | 1 天 | 新请求，但契合 #942/#920 的"生产化"主题，建议纳入统一设计 |

**维护者行动建议**：`penso` 昨日超负荷输出 6 PR，今日可能需 review 轮值；`#942` 与 `#920` 作为**开放数日的重型 PR**，存在 bit-rot 风险，建议优先排期 review。

---

> **日报生成备注**：本分析基于 GitHub 公开数据，未包含私有讨论或分支提交。PR 评论数显示为 `undefined` 系数据源限制，不代表实际零讨论。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-02

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：数据中显示为 QwenPaw）
> **分析日期**: 2026-05-02（数据覆盖 2026-05-01 活动）

---

## 1. 今日速览

过去24小时 CoPaw 社区保持**高活跃度**，共产生 **7 条 Issue 更新**（全部为新开或持续活跃，零关闭）和 **4 条 PR 更新**（3 待审、1 关闭）。值得关注的是，今日 Issues 全部集中在 **Bug 修复** 与 **核心功能增强** 两大主题，无版本发布。社区诉求呈现明显的"生产环境稳定性焦虑"——从对话中断、记忆丢失到通道延迟，均指向用户已将 CoPaw 部署于实际业务场景，对可靠性要求显著提升。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 贡献者 | 进展说明 |
|:---|:---|:---|:---|
| [#3989](https://github.com/agentscope-ai/QwenPaw/pull/3989) add knowledge | **已关闭** | [suisrc](https://github.com/suisrc)（首次贡献者） | 知识库功能增强 PR 被关闭，具体合并原因未明示（可能合并至其他分支或需重构）。附带了知识管理界面截图，显示前端交互设计已完成。 |

**整体评估**：今日代码层面推进有限。3 个待审 PR 覆盖 Discord 集成、向量模型测试、火山引擎接入等基础设施，均处于审查阶段，未形成主线代码合并。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) 多轮对话后执行中断 | 2 | **核心稳定性危机**：Agent 会话"猝死"是生产环境致命问题，直接影响用户信任 |
| 🔥2 | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) conda-pack 与 pip 冲突 | 2 | **Windows 部署壁垒**：打包工具链冲突阻断企业 Windows 环境部署，排障信息缺失加剧痛点 |
| 🔥3 | [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) 通道响应速度太慢 | 2 | **性能瓶颈**：企业 IM 集成场景（钉钉/飞书/QQ）对延迟敏感，可能流失商业用户 |

**诉求本质**：社区正从"功能尝鲜"阶段转向"生产落地"阶段，稳定性 > 新功能。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-阻塞** | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) 多轮对话后执行中断 | 待处理 | 所有 Agent 会话场景 | ❌ 无 |
| 🔴 **P0-阻塞** | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) Ollama 频道无法携带对话历史 | 待处理 | 本地模型部署用户 | ❌ 无 |
| 🟡 **P1-严重** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) Windows 打包冲突 | 待处理 | Windows 企业部署 | ❌ 无 |

**关键洞察**：两个 P0 问题均涉及**对话状态管理**——#3992 是通用 Agent 执行中断，#3991 是 Ollama 特定上下文丢失。可能共享根因（对话历史管理模块），建议维护者联动排查。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) DeepSeek V4 多档思考层级 | 模型能力对齐 | ⭐⭐⭐⭐⭐ **高** | 紧跟 DeepSeek API 演进，竞品已支持；实现复杂度低（参数透传） |
| [#3993](https://github.com/agentscope-ai/QwenPaw/issues/3993) OpenAI Responses API + 原生工具调用 | 协议层升级 | ⭐⭐⭐⭐⭐ **高** | 行业标准迁移，Chat Completions 已显老旧；有明确技术方案 |
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) 记忆管理与召回机制增强 | 架构级重构 | ⭐⭐⭐☆☆ **中** | 痛点真实但涉及存储层改造；PR #3989（知识库）可能为其前置依赖 |
| [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) 通道响应优化 | 性能工程 | ⭐⭐⭐⭐☆ **中高** | 企业刚需，但需定位瓶颈（网络/序列化/模型延迟？） |

**路线图信号**：模型协议现代化（OpenAI Responses API、DeepSeek 精细控制）是明确趋势，建议优先排期。

---

## 7. 用户反馈摘要

| 维度 | 具体反馈 |
|:---|:---|
| **😫 核心痛点** | "和 agent 聊天了几轮之后，就不会继续执行了" —— 会话可靠性是生死线 |
| **😫 部署痛点** | Windows 打包"排障困难"，子进程输出未返回主进程，企业 IT 无法自助排查 |
| **😫 本地模型痛点** | Ollama 场景"每一轮对话都被当作全新请求"，本地部署体验显著劣于云端 API |
| **😫 性能痛点** | 通道响应"太慢"，企业 IM 集成场景下用户体验受损 |
| **💡 使用场景** | 每日简报（Cron + Discord）、企业 IM 机器人（钉钉/飞书）、本地隐私部署（Ollama） |
| **📊 满意度分化** | 在线 API 模型记忆功能正常 ↔ 本地模型/Ollama 记忆丢失，存在明显的渠道体验鸿沟 |

---

## 8. 待处理积压

| PR | 创建日期 | 已等待 | 风险 |
|:---|:---|:---|:---|
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) Discord 线程隔离 | 2026-04-17 | **15天** | 阻塞 Cron 作业的生产化部署，社区有明确需求 |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) 向量模型连接测试 | 2026-04-25 | **8天** | 基础设施可观测性，降低向量服务排障成本 |

**维护者提醒**：PR #3525 已逾两周未决，该功能直接关联 Issue #3990 的通道性能优化（Discord 场景），建议加速审查或明确阻塞原因。

---

## 健康度评分

| 指标 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 7 Issues + 4 PR/日，活跃度高 |
| 问题响应速度 | ⭐⭐⭐☆☆ | 零 Issue 关闭，全部待处理，响应滞后 |
| 代码合并效率 | ⭐⭐☆☆☆ | 仅1 PR 关闭（且原因不明），3 PR 审查中 |
| 生产稳定性 | ⭐⭐☆☆☆ | 2个 P0 Bug 未修复，存在阻断性风险 |

> **综合建议**：建议维护团队优先组建"稳定性攻坚"窗口，集中解决 #3992、#3991 对话中断问题，同时建立 Issue 分级响应 SLA，避免社区热情因响应延迟而衰减。

---

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-02

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度、高吞吐量**的冲刺态势：24小时内 **50 条 Issues 更新**（37 活跃/新开，13 关闭）、**50 条 PR 更新**（45 待合并，5 已合并/关闭），并发布 **v0.7.4 补丁版本**。社区围绕**配置系统 v3 迁移**、**网关可观测性修复**、**Web  onboarding 体验**三大主线密集协作，但待合并 PR 高达 45 条，合并管道压力显著，需关注代码审查瓶颈。

---

## 2. 版本发布

### [v0.7.4](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.4) — 首个 v0.7.x 工作区补丁

| 维度 | 详情 |
|:---|:---|
| **定位** | v0.7.x 工作区基础之上的首个补丁版本，"clean-room" 级重构 |
| **核心变更** | ① **Matrix 协议全新重写**（clean-room rewrite）<br>② **Mozilla Fluent i18n 管道** + 多语言文档支持<br>③ **CLI/TUI 引导流程彻底重写**（ground-up rewrite）<br>④ **微信 iLink Bot 通道恢复** |
| **破坏性变更** | CLI/TUI onboarding 流程完全重构，现有自动化脚本可能需适配 |
| **迁移注意** | Matrix 通道用户需验证新协议实现兼容性；i18n 切换需检查 locale 配置 |

> ⚠️ 版本号标注异常：Release 标题为 v0.7.4，但 Changelog 标题为 "v0.7.3 → v0.7.4"，内容提及 "v0.7.4 lands..."，确认版本号为 **v0.7.4**。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 推进内容 |
|:---|:---|:---|:---|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | singlerider | **已合并** | **Web Onboarding  parity 达成**：通过 `/api/config/*` CRUD 端点，浏览器内即可完成 provider 认证、模型选择、通道配置等全流程，CLI 与 Web 配置统一 |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | ilteoood | **已合并** | **手动触发 Cron 任务**：`POST /api/cron/{id}/run` 端点，支持 Web UI 即时测试 cron prompt，不破坏触发逻辑 |
| [#6265](https://github.com/zeroclaw-labs/zeroclaw/pull/6265) | WareWolf-MoonWall | **待合并→已关闭关联** | 修复 [v0.7.4 发布工作流故障](https://github.com/zeroclaw-labs/zeroclaw/issues/6249)：移除 `CHANGELOG-next.md` 自动清理步骤（受分支保护规则阻塞） |
| [#6262](https://github.com/zeroclaw-labs/zeroclaw/pull/6262) | xiongzubiao | **已关闭** | CI 测试 PR，无实质变更 |

**里程碑意义**：Web onboarding parity（#6179）与手动 cron 触发（#6164）的落地，标志着 ZeroClaw 从"CLI 优先"正式转向"CLI/Web 双轨同等体验"，对降低新用户门槛具有战略价值。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#6123** 全新安装 `default_model` 配置失效 | **15 条** | 新用户首次安装即遭遇工作流阻塞（S1），Ollama 远程部署场景配置继承逻辑缺陷 | [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| 2 | **#5862** Agent 不知自身具备 cron 能力 | **8 条** | 工具发现（tool discovery）机制缺陷：Agent 的 self-knowledge 与可用工具集脱节 | [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |
| 3 | **#4710** 设计更优 Logo | **8 条** | 社区品牌认同感建设，附具体设计方案对比图 | [Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) |
| 4 | **#5947** Schema v3 批量迁移（合并阻塞器） | **6 条** | 配置系统大版本升级的工程协调，"不允许部分合并"的严格批次策略 | [Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |
| 5 | **#5722** Shell 沙箱配置阻断 Python Skill 模式 | **6 条** | 企业级 Skill 开发（InvestorClaw FINOS 项目）受安全策略过度限制 | [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |

**诉求分析**：热点议题呈现"**新用户体验**（#6123, #5862）"与"**企业级生产就绪**（#5722, #5947）"的双轨张力。社区既需要降低入门摩擦，又需支撑复杂合规场景，资源分配面临优先级博弈。

---

## 5. Bug 与稳定性

### 按严重程度排列的活跃 Bug

| 严重度 | Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **P0** | **#6096** | `install.sh` 未提取 Web Dashboard 资源，二进制安装后网关无法启动 | 🔄 **#6265** 已关联发布流程修复 | [Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) |
| **P1** | **#6123** | 全新安装 `default_model` 配置失效（S1 工作流阻塞） | ❌ 无明确 Fix PR | [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **P1** | **#5722** | Shell 沙箱默认配置阻断 Python Skill 现实模式（高风险） | ❌ 标记 `in-progress` 但无 PR | [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| **P1** | **#6210** | SkillForge 自动集成器输出非 schema 字段（#6128 后续） | ❌ 标记 `blocked` | [Issue #6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) |
| **P1** | **#6001** | 网关聊天成功但 `/api/cost` 返回零，无 trace/cost 日志写入 | 🔄 **#6159** 待作者响应 | [Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) |
| **P1** | **#5244** | Dashboard Channels 标签页崩溃 + Overview 渲染错误（v0.6.8） | ❌ `in-progress` 长期未更新 | [Issue #5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) |
| **P1** | **#6127** | 网关静默回退硬化（#6099 后续） | 🔄 **#6215** 已开 PR | [Issue #6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) |
| **P2** | **#6051** | `self-test` 报告使用 127.0.0.1 无视配置 | 🔄 **#6219** 已开 PR | [Issue #6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) |
| **P2** | **#6254** | WASM 插件安装路径与运行时扫描路径分叉，插件不可见 | ❌ 今日新报，无 Fix | [Issue #6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) |

**回归风险**：v0.7.4 发布工作流自身即触发 [#6249](https://github.com/zeroclaw-labs/zeroclaw/issues/6249) 故障（分支保护阻塞 CHANGELOG 清理），表明发布管道成熟度需加强。

---

## 6. 功能请求与路线图信号

### 用户提出的关键新功能

| 功能 | Issue | 信号强度 | 纳入下一版本可能性 | 链接 |
|:---|:---|:---|:---|:---|
| **LM Studio 可配置服务器 URL** | #6260 | ⭐⭐⭐⭐⭐ | **高** — 今日新提，多表面统一配置，符合 v0.8.0 配置统一主题 | [Issue #6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) |
| **WhatsApp Cron 投递通道** | PR #6261 | ⭐⭐⭐⭐⭐ | **极高** — PR 已开，ilteoood 活跃推进 | [PR #6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) |
| **Schema v3 批量迁移** | #5947 | ⭐⭐⭐⭐⭐ | **已锁定 v0.8.0** — 明确为合并阻塞器 | [Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |
| **Skill `.well-known` URI 安装** | #4853 | ⭐⭐⭐⭐☆ | 中 — 标准跟踪中（Agent Skills 工作组），需外部标准成熟 | [Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) |
| **Per-Skill 安全权限隔离** | #5775 | ⭐⭐⭐⭐☆ | 中 — 高风险安全需求，但需架构审查 | [Issue #5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) |
| **从 Memory 恢复 Agent Chat** | ~~#6145~~ | ⭐⭐⭐☆☆ | **已关闭** — 功能已实现或判定不可行 | [Issue #6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145) |
| **Codex Runner 对等支持** | ~~PR #5416~~ | ⭐⭐⭐⭐☆ | **已关闭** — 未说明原因，可能策略调整 | [PR #5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416) |

**路线图信号**：v0.8.0 已明确为 **"配置系统统一 + 多通道扩展 + 安全硬化"** 版本，[#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)（`feat/v2-to-v3`）作为集成分支已开，标志着大规模迁移启动。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **LXC/Ollama 远程部署** | #6123 rgnyldz | "新鲜安装后 `zeroclaw agent` 直接报错"，配置继承逻辑在容器/远程场景下完全断裂 |
| **企业 Skill 开发** | #5722 perlowja (InvestorClaw) | "默认沙箱阻断所有现实 Python 模式"，FINOS 合规项目被迫 fork 或等待 |
| **运维调试** | #6051 eabase | `self-test` 撒谎——显示 127.0.0.1 实际绑定 0.0.0.0，诊断信息误导 |
| **安装即残缺** | #6096 pavelanni | `./install.sh` 装完无 Dashboard，"预构建二进制"承诺未兑现 |
| **成本黑洞** | #6001 b0xtch | 网关聊天成功但成本/trace 全零，可观测性缺失 |

### 正面反馈

- **Web Onboarding**（#6175/#6179）："终于不用 SSH 进服务器配初始化了"
- **手动 Cron 触发**（#5501/#6164）："改 prompt 后能即时测试，不用等调度"

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注

| Issue/PR | 天数 | 风险 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|
| **#5722** Shell 沙箱阻断 Python Skill | **18 天** | 🔴 **企业用户流失** — FINOS 项目评估中 | 指派专人对接 perlowja，提供临时绕过方案或承诺修复版本 | [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| **#5244** Dashboard Channels 崩溃 | **29 天** | 🔴 **前端核心功能瘫痪** | 判定是否已随 v0.7.4 修复，否则升级 P0 | [Issue #5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) |
| **#5862** Agent 不知自身有 cron | **14 天** | 🟡 **工具发现架构缺陷** | 需 runtime 团队评估 tool self-description 机制 | [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |
| **#4853** `.well-known` Skill 安装 | **36 天** | 🟡 **标准生态位抢占** | 明确是否等待外部标准，或主动推进 | [Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) |
| **#5775** Per-Skill 权限隔离 | **17 天** | 🟡 **安全架构债务** | 安排安全审查会议，判定 v0.8.0 或 v0.9.0 | [Issue #5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) |
| **PR #6266** v2→v3 集成分支 | **今日新开** | 🟢 **但需协调** | 明确代码冻结窗口，避免 45 个待合并 PR 的 rebase 地狱 | [PR #6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) |

---

**健康度评分**：⭐⭐⭐⭐☆（4/5）

- **活跃度**：极高（100 条 Issues+PR 日更新）
- **交付速度**：良好（v0.7.4 发布 + 2 个核心功能合并）
- **技术债务**：中等偏高（45 待合并 PR，配置迁移大版本进行中）
- **社区响应**：需加强（P1 Bug #6123 无明确 owner，企业用户 #5722 长期悬置）

*日报生成时间：2026-05-02 | 数据来源：ZeroClaw GitHub 开放数据*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*