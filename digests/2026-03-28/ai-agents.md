# OpenClaw 生态日报 2026-03-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-28 00:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-03-28

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高压力**态势：24小时内 Issues 更新 500 条（445 活跃/55 关闭）、PR 更新 500 条（320 待合并/180 已合并），但**零版本发布**。社区讨论焦点集中在 **Ollama 思考模型兼容性**（3个相关 PR 今日关闭）、**Kimi 系列模型工具调用缺陷**、以及 **Discord/Telegram 等渠道稳定性危机**。值得注意的是，今日出现 2 个安全相关 Issue（#55152 恶意插件注入、#49971 Agent 身份验证 RFC），显示项目正面临从功能迭代向安全加固的转型压力。整体健康度：**功能快速演进中，稳定性债务累积**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#46747](https://github.com/openclaw/openclaw/pull/46747) | yangyitao100 | **Ollama 思考模型修复**：显式发送 `think` 参数，解决 deepseek-r1/qwq 等模型空响应问题 |
| [#45773](https://github.com/openclaw/openclaw/pull/45773) | bkdiod | 同上，通过 `onPayload` 钩子转发 `think: false`，避免重复思考 token 浪费 |
| [#53200](https://github.com/openclaw/openclaw/pull/53200) | BruceMacD | 维护者合并：统一 Ollama 思考模型处理逻辑，当 `thinkingLevel=off` 时强制发送 `think: false` |
| [#46680](https://github.com/openclaw/openclaw/issues/46680) | Maximus-Prime-The-First | 关联 Issue 关闭：Ollama 0.18.0+ 思考模型空响应问题已解决 |
| [#56077](https://github.com/openclaw/openclaw/pull/56077) | gumadeiras | **diffs 插件修复**：解决更新后 `@pierre/diffs` 模块丢失导致的加载失败 |
| [#55820](https://github.com/openclaw/openclaw/pull/55820) | pyn3rd | 关闭：动态 Skills 扫描能力（安全加固方向）|
| [#56073](https://github.com/openclaw/openclaw/pull/56073) | Protocol-zero-0 | 关闭：主会话 `/steer` 快捷指令（因 PR 过多被标记 `r: too-many-prs`）|

**整体推进评估**：今日核心突破在 **Ollama 生态兼容性**（3个 PR 形成完整修复链），但大量高价值 PR 因积压无法及时合并，存在**贡献者流失风险**。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 57 | 66 | **跨平台桌面客户端缺失**：macOS/iOS/Android 已有，Linux/Windows 用户长期被忽视，企业部署受阻 |
| 2 | [#39651](https://github.com/openclaw/openclaw/issues/39651) "只会说话不会工作" | 31 | 0 | **本地模型权限问题**：Ollama+qwen3.5:2b 无法创建文件，疑似沙箱/权限配置缺陷 |
| 3 | [#44851](https://github.com/openclaw/openclaw/issues/44851) Kimi web_search 401 错误 | 30 | 3 | **Kimi 生态割裂**：Chat API 正常但搜索工具认证失败，API 设计不一致 |
| 4 | [#28744](https://github.com/openclaw/openclaw/issues/28744) Agent 视觉能力 | 20 | 0 | **多模态刚需**：飞书场景下图片消息无法传递给模型，MiniMax 等视觉模型能力被浪费 |
| 5 | [#45504](https://github.com/openclaw/openclaw/issues/45504) CLI 设备管理回归故障 | 18 | 4 | **v2026.3.12 升级破坏性变更**：`devices list/approve` 在本地回环网关失效，Web UI 却正常 |

**热点分析**：社区核心矛盾已从"功能有无"转向"**质量深度与平台一致性**"——跨平台支持、多模态、第三方模型生态的深度整合成为企业用户采纳的关键瓶颈。

---

## 5. Bug 与稳定性

### 今日报告的严重问题（按严重程度排序）

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **RELEASE BLOCKER** | [#55672](https://github.com/openclaw/openclaw/issues/55672) | `openclaw models status --probe` 正常但运行时报 "No API key for provider" | 今日新建，10评论 | 无 |
| 🔴 **崩溃/死循环** | [#54931](https://github.com/openclaw/openclaw/issues/54931) | Discord health-monitor 触发未捕获异常，每35分钟崩溃（v2026.3.24） | 活跃，6评论 | 无 |
| 🟡 **回归故障** | [#45504](https://github.com/openclaw/openclaw/issues/45504) | CLI 设备管理在本地回环网关失效（v2026.3.12 升级后） | 活跃，18评论 | 无 |
| 🟡 **工具执行失败** | [#40069](https://github.com/openclaw/openclaw/issues/40069) | Agent 声称执行工具但实际无调用（kimi-coding/k2p5） | 活跃，10评论 | 无 |
| 🟡 **渠道中断** | [#43233](https://github.com/openclaw/openclaw/issues/43233) | Telegram 轮询停滞（107秒无 getUpdates）强制重启 | 活跃，9评论 | 无 |
| 🟡 **参数传递缺陷** | [#55039](https://github.com/openclaw/openclaw/issues/55039) | Kimi 模型调用 `read` 工具漏传 `path` 参数，循环报错 | 今日新建，6评论 | 无 |
| 🟢 **安全漏洞** | [#55152](https://github.com/openclaw/openclaw/issues/55152) | `@openguardrails/moltguard` 插件注入钓鱼载荷 | 今日新建，6评论 | [#56050](https://github.com/openclaw/openclaw/pull/56050) 安全扫描钩子 |

**稳定性评估**：今日新增 **2 个 RELEASE BLOCKER 级别问题**，均与 **2026.3.x 系列版本的配置/认证系统重构**相关，建议维护者暂停功能开发，优先进行回归测试。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 状态 | 纳入可能性 |
|:---|:---|:---|:---|
| **原生 NVIDIA NIM 支持** | [#50898](https://github.com/openclaw/openclaw/issues/50898) | 开放，5评论 | ⭐⭐⭐⭐☆ 高：企业 GPU 部署刚需 |
| **Oracle OCI Generative AI** | [#54784](https://github.com/openclaw/openclaw/pull/54784) | PR 开放 | ⭐⭐⭐⭐☆ 高：云厂商生态扩展 |
| **Agent 身份与信任验证（DID/VC）** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | RFC 阶段，11评论 | ⭐⭐⭐☆☆ 中：前瞻性安全架构 |
| **OpenAI Realtime API 语音模式** | [#43501](https://github.com/openclaw/openclaw/pull/43501) | XL 级 PR，长期开放 | ⭐⭐⭐⭐☆ 高：延迟敏感场景关键能力 |
| **Slack Block Kit 表格支持** | [#46737](https://github.com/openclaw/openclaw/pull/46737) | L 级 PR，开放 | ⭐⭐⭐⭐☆ 高：恢复 v2026.2.23 前的体验 |
| **插件运行时中止 API** | [#55967](https://github.com/openclaw/openclaw/pull/55967) | XL 级 PR，今日更新 | ⭐⭐⭐⭐☆ 高：插件生态基础设施 |

**路线图信号**：企业级功能（云厂商支持、安全验证、实时语音）与**开发者体验修复**（表格渲染、插件控制）并行推进，但 XL 级 PR 的合并瓶颈可能延迟这些能力落地。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论提炼）

| 场景 | 用户原声 | 深层需求 |
|:---|:---|:---|
| **Windows 企业部署** | "Spent a few hours today trying to set up a Windows PC as a node host and ran into a wall" | 跨平台节点托管的**一键配置工具** |
| **模型切换困惑** | "Kimi Chat API 正常工作，但 web_search 401" | **统一认证层**，消除同厂商不同 API 的差异 |
| **视觉能力浪费** | "MiniMax 等模型本身支持视觉/图像识别，但 OpenClaw 平台层面没有传递图片数据" | **平台能力 >= 模型能力** 的传递保障 |
| **升级焦虑** | "After upgrading to OpenClaw 2026.3.12... became unreliable/broken" | **语义化版本承诺**与升级回滚机制 |
| **调试黑盒** | "Agent claims to invoke tools but no tool calls appear in UI. No error messages" | **工具执行的可观测性**（调用链追踪）|

### 满意度信号
- ✅ Ollama 思考模型修复链的快速响应（3个 PR 闭环）
- ❌ 2026.3.x 系列频繁引入回归故障，社区出现"升级谨慎"情绪

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30天，高互动）

| Issue | 天数 | 评论 | 风险 |
|:---|:---:|:---:|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面应用 | ~87 | 57 | **平台覆盖缺口**，企业采购障碍 |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) Discord WebSocket 断线死循环 | ~46 | 17 | 稳定性口碑损害 |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) 视觉能力支持 | ~29 | 20 | 多模态竞争落后 |
| [#8983](https://github.com/openclaw/openclaw/issues/8983) OpenRouter API Key 配置失败 | ~52 | 15 | 第三方模型接入体验 |
| [#20386](https://github.com/openclaw/openclaw/issues/20386) Windows/WSL 节点审批套接字无响应 | ~38 | 9 | 跨平台节点网络 |

### 维护者行动建议
1. **立即**：审查 #55672（RELEASE BLOCKER）与 #54931（Discord 崩溃死循环）
2. **本周**：为 #75 制定 Linux/Windows 桌面应用路线图（社区呼声最高）
3. **本月**：建立 **2026.3.x 回归故障专项**，暂停新功能合并直至测试覆盖提升

---

*日报基于 GitHub 公开数据生成 | 项目地址: https://github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告
**数据基准：2026-03-28 | 分析项目：10 个主流开源智能体框架**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从功能可用向生产可靠跃迁**的关键阶段。OpenClaw 以压倒性的社区规模（日 500+ Issues/PR）持续引领功能迭代，但稳定性债务累积明显；IronClaw、CoPaw 等企业级项目加速多租户隔离与合规能力建设；PicoClaw、NanoBot 等新兴项目通过渠道差异化（QQ、飞书、NapCat）争夺垂直场景。整体呈现"头部功能竞赛、腰部质量巩固、长尾场景深耕"的三层格局，**MCP 生态集成、上下文压缩、多提供商支持**成为全栈共识方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 关键信号 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 (445活跃) | 500 (320待合) | ❌ 无 | 🟡 高活跃/高债务 | 零版本但 PR 积压严重，RELEASE BLOCKER 新增 2 个 |
| **NanoBot** | 24 | 67 (44待合) | ✅ v0.1.4.post6 | 🟡 架构重构期 | Agent 运行时模块化，回归问题集中 |
| **ZeroClaw** | 30 (90%新增) | 50 (72%待合) | ✅ v0.6.5 | 🟢 健康迭代 | 上下文管理引擎重构，Rust 2024 Edition 升级 |
| **PicoClaw** | 16 | 43 (31待合) | 🔄 nightly | 🟢 密集开发 | 多租户隔离进入终审，Hermes XML 工具解析落地 |
| **NanoClaw** | 17 | 45 (22待合) | ❌ 无 | 🟡 安全加固期 | 3 个 CRITICAL 漏洞，多提供商诉求 53👍 |
| **NullClaw** | 5 | 37 (34待合) | ❌ 无 | 🟢 基础设施期 | 可靠消息投递三 PR 连发，知识图谱内存提交 |
| **IronClaw** | 20 (10开10关) | 47 (34待合) | ✅ v0.23.0 | 🟡 安全应急期 | 多租户 GA，但 3 个 CRITICAL 漏洞 2 个待修 |
| **LobsterAI** | 26 (23新开) | 50 (20已合) | ❌ 无 | 🔴 稳定性危机 | 3 个 P0 无限循环/进程管理问题无修复 |
| **TinyClaw** | 0 | 2 (已关闭) | ❌ 无 | 🟡 产品化爬坡 | 任务管理系统落地，零社区反馈需激活 |
| **Moltis** | 2 | 2 | ✅ 双版本 | 🟢 可控迭代 | Symphony 工作流落地，GraphQL 架构债务暴露 |
| **CoPaw** | 50 (35活跃) | 42 (20待合) | ❌ 无 | 🟢 生产就绪期 | `/stop` 命令等 4 项核心功能同日落地 |
| **ZeptoClaw** | 0 | 2 (待审) | ❌ 无 | 🟢 质量沉淀期 | 浏览器工具+上下文压缩双 PR 待审 |
| **EasyClaw** | 0 | 0 | ❌ 无 | ⚫ 停滞 | 24h 零活动 |

> **注**：EasyClaw 零活动，可能为个人实验项目或已弃用。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 日 500 Issues/PR，绝对领先 | 次位 NanoBot 仅 67 PR，差距 7.5x |
| **功能广度** | 20+ 渠道、多模态、插件生态最完整 | IronClaw/CoPaw 企业功能追赶，NanoBot 渠道差异化 |
| **技术债务** | 2026.3.x 系列回归故障频发，"升级谨慎"情绪蔓延 | ZeroClaw/PicoClaw 架构升级更稳健 |
| **安全态势** | 2 个 RELEASE BLOCKER、2 个安全 Issue 新建 | IronClaw 3 CRITICAL 但响应更快（24h 闭环 1 个） |
| **多提供商** | Kimi/Ollama/Anthropic 支持最全，但 Kimi 工具调用缺陷待修 | NanoClaw 53👍 诉求 Anthropic 解锁，供应商锁定焦虑显著 |

**核心差异**：OpenClaw 是**功能最全但稳定性承压**的"参考实现"，生态位类似 Kubernetes 早期——定义接口标准，但生产部署需配合 ZeroClaw（Rust 稳定性）、IronClaw（企业合规）等专项方案。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **MCP 生态集成** | ZeroClaw(#1380, #4848)、NanoBot(#1666)、PicoClaw(#1666)、OpenClaw | 外部 MCP 服务器接入、工具发现协议标准化、稳定性修复 | 🔴 高 |
| **上下文压缩/长对话** | ZeptoClaw(#460)、NanoClaw(#1493-1495)、OpenClaw、ZeroClaw(v0.6.5) | Token 溢出防护、多层防御策略、透明代理架构 | 🔴 高 |
| **多提供商支持** | NanoClaw(#80, 53👍)、IronClaw(#1696)、CoPaw(#2428)、OpenClaw | 解锁 Anthropic 锁定、本地网络 LLM、OpenRouter/Codex/Gemini | 🔴 高 |
| **Agent Skills 标准化** | NullClaw(#734)、Moltis(#1717)、NanoBot(#2571)、PicoClaw(#2101) | `.well-known` URI 技能发现协议，Cloudflare/Vercel/VS Code 已先行 | 🟡 中高 |
| **可靠消息投递** | NullClaw(#730-732)、LobsterAI(#953)、OpenClaw(#54931) | 断连重试、消息去重、发送即确认架构 | 🔴 高 |
| **多租户隔离** | IronClaw(v0.23.0 GA)、PicoClaw(#2095, #2102)、OpenClaw | 企业 SaaS 部署、工作目录/身份/IM 账号隔离 | 🟡 中高 |
| **视觉/多模态** | OpenClaw(#28744)、NanoClaw(#1496)、ZeroClaw(#4861) | 图片消息传递、视觉模型能力释放 | 🟡 中 |

---

## 5. 差异化定位分析

| 项目 | 核心侧重 | 目标用户 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 功能完备性、渠道覆盖 | 开发者、早期采用者、多场景探索 | TypeScript/Node，插件化，快速迭代 |
| **ZeroClaw** | 稳定性、Rust 性能 | 生产环境部署、性能敏感场景 | Rust 全栈，Edition 2024，上下文管理引擎 |
| **IronClaw** | 企业合规、Crypto-Native | B 端 SaaS、DeFi/区块链开发者 | Rust，多租户隔离，NEAR 生态深度集成 |
| **CoPaw** | 中文生态、企业微信/飞书 | 中国企业用户、IM 深度集成 | Python，WeCom/钉钉优先，Skill Hub 生态 |
| **NanoBot** | 渠道稳定性、QQ 生态 | 中文社区、NapCat/LLOneBot 用户 | Python，Agent 运行时模块化，异步重构 |
| **PicoClaw** | 硬件亲和、边缘部署 | 嵌入式/IoT 场景、Sipeed 生态 | Rust，多租户，nightly 快速迭代 |
| **LobsterAI** | 办公协作、Cowork 模式 | 知识工作者、文档处理场景 | Electron，SQLite，Intel Mac 优化 |
| **NullClaw** | 可靠基础设施、知识图谱 | 自托管用户、长期记忆需求 | Rust，SQLite + 递归 CTE，消息投递保障 |
| **Moltis** | 工作流自动化、成本优化 | Linear 用户、流程自动化需求 | Elixir，Symphony 子系统，提示缓存 |
| **ZeptoClaw** | 浏览器自动化、研究场景 | 数据抓取、深度研究用户 | Python，agent-browser 集成，上下文压缩 |
| **TinyClaw** | 任务管理、工作空间 | 技术团队、项目管理场景 | TypeScript，Linear 风格，产品化打磨 |

---

## 6. 社区热度与成熟度分层

```
快速迭代期（功能扩张）          质量巩固期（稳定优先）            停滞/观察期
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OpenClaw ████████████████████   ZeroClaw ████████████████        EasyClaw ⚫
NanoBot  ██████████████         PicoClaw ████████████████        
CoPaw    ██████████████         NullClaw ██████████████          
IronClaw ████████████           ZeptoClaw ████████████           
LobsterAI ██████████            Moltis    ██████████              
TinyClaw  ████████              NanoClaw  ██████████（安全债务）
```

| 阶段 | 项目 | 关键特征 |
|:---|:---|:---|
| **快速迭代** | OpenClaw, NanoBot, CoPaw, IronClaw, LobsterAI | 日 20+ PR，功能密集落地，但稳定性债务累积或安全应急响应 |
| **质量巩固** | ZeroClaw, PicoClaw, NullClaw, ZeptoClaw, Moltis | 架构重构、Rust 现代化、核心能力打磨，PR 合并更审慎 |
| **停滞/观察** | TinyClaw, EasyClaw | 零社区反馈或零活动，需验证产品假设或确认项目状态 |
| **安全应急** | IronClaw, NanoClaw | CRITICAL 漏洞驱动，其他功能让位于安全加固 |

---

## 7. 值得关注的趋势信号

### 对 AI 智能体开发者的参考价值

| 趋势信号 | 来源证据 | 行动建议 |
|:---|:---|:---|
| **供应商锁定成为生存级风险** | NanoClaw #80 (53👍): "Anthropic 封禁 OpenClaw 用户" | 架构设计预留多提供商抽象层，避免单一 LLM 依赖 |
| **MCP 是下一个生态卡位战** | 5 个项目同步推进，ZeroClaw #1380 关闭后 #4848 立即报告失效 | 优先实现 `.well-known` 发现协议，降低技能分发摩擦 |
| **"黑盒调试"比功能缺失更致命** | NullClaw #311: "reasoning 对调试幻觉极其重要"；OpenClaw #2487: "假完成"信任危机 | Agent 必须暴露思考链、工具调用追踪、执行收据（HMAC/签名） |
| **IM 集成进入深水区** | CoPaw #2382 venv 重置、LobsterAI #953 任务窜台、OpenClaw 渠道稳定性危机 | 企业部署需承诺"升级兼容性"，区分更新 vs 迁移 |
| **上下文压缩从优化变刚需** | ZeptoClaw #460、NanoClaw 三方案研究、ZeroClaw v0.6.5 引擎重构 | 长对话场景必须内置多层防御（预检查/压缩/截断/摘要） |
| **AI 辅助贡献成为新常态** | Moltis #276: "I haven't written a single line of code" | 建立 AI 生成代码的评审指南，降低贡献门槛同时保障质量 |
| **金融/DeFi 是下一个垂直战场** | IronClaw #1712 金融执行层架构、NEAR intents 扩展 | Agent 需要托管、签名、策略引擎、跨应用加密操作的原生支持 |

---

**报告生成时间**：2026-03-28  
**数据覆盖**：10 个开源项目，GitHub 公开活动数据

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-03-28

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度开发状态**：24小时内67个PR更新（44个待合并）、24个Issues更新，并发布v0.1.4.post6版本。社区聚焦**Telegram渠道稳定性修复**（流式响应、消息反应、话题上下文）与**安全加固**（邮件认证绕过漏洞已紧急修复）。值得关注的是，v0.1.4.post6引入的架构重构（Agent运行时正式分解）正引发连锁回归问题，需密切跟踪修复进度。

---

## 2. 版本发布

### [v0.1.4.post6](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post6)

| 维度 | 详情 |
|:---|:---|
| **核心主题** | "重构底层而非扩展表面" — Agent运行时正式模块化分解 |
| **规模** | 57 PR合并，27位新贡献者 |
| **关键变更** | Agent运行时架构重组、内部执行流程优化 |
| **潜在风险** | ⚠️ 架构变更引发多项回归（见Bug章节） |

**迁移注意事项**：该版本为post-release迭代，建议生产环境用户暂缓升级，等待v0.1.5稳定版；已升级用户需关注Telegram渠道异常行为。

---

## 3. 项目进展

### 今日合并/关闭的关键PR

| PR | 作者 | 贡献 | 状态 |
|:---|:---|:---|:---|
| [#2054](https://github.com/HKUDS/nanobot/pull/2054) | StepanchukYI | Telegram消息👀自动反应功能 | ✅ 已合并 |
| [#2053](https://github.com/HKUDS/nanobot/pull/2053) | StepanchukYI | 移除全局`litellm.api_base`赋值，修复多Provider冲突 | ✅ 已合并 |
| [#2016](https://github.com/HKUDS/nanobot/pull/2016) | ceke233 | **NapCat QQ渠道支持**（OneBot 11协议、消息防抖、输入模拟） | ✅ 已合并 |
| [#1742](https://github.com/HKUDS/nanobot/pull/1742) | akcode7 | 显式Provider配置优先于关键字自动检测 | ✅ 已合并 |
| [#2488](https://github.com/HKUDS/nanobot/pull/2488) | Chen-zexi | `/skill`斜杠命令：用户激活技能注入 | ✅ 已合并 |
| [#2272](https://github.com/HKUDS/nanobot/pull/2272) | flobo3 | Telegram网络错误降级为warning，减少日志噪音 | ✅ 已合并 |
| [#2567](https://github.com/HKUDS/nanobot/pull/2567) | flexs2n | **安全修复：邮件渠道零点击间接提示注入与认证绕过** | ✅ 已合并（紧急） |

**里程碑意义**：QQ生态正式接入（NapCat），覆盖中国最大IM用户群；技能系统从被动加载转向用户主动激活（`/skill`命令），交互范式升级。

---

## 4. 社区热点

### 高互动议题

| Issue | 热度指标 | 核心诉求 |
|:---|:---|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) | 9评论, 7👍 | **DeepSeek模型"无响应"黑洞问题** — 用户遭遇静默失败，无错误日志，严重影响生产使用 |
| [#2240](https://github.com/HKUDS/nanobot/issues/2240) | 4评论 | 用户强烈要求**思考模式开关**（类似Claude的thinking toggle），控制token消耗与响应速度 |
| [#2487](https://github.com/HKUDS/nanobot/issues/2487) | 2评论, 1👍 | **"假完成"消息误导性** — 用户反感Agent声称"已完成"实际未执行任何操作 |
| [#2563](https://github.com/HKUDS/nanobot/issues/2563) | 2👍 | 维护者公告：3/29夜间分支刷新流程，社区治理透明度提升 |

**深层洞察**：用户从"功能可用"转向"体验可信"——#2487反映对Agent诚实性的核心诉求，#235的沉默失败比报错更令人焦虑。

---

## 5. Bug 与稳定性

### v0.1.4.post6 回归问题（按严重程度）

| 严重程度 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | [#2562](https://github.com/HKUDS/nanobot/issues/2562) | Telegram 👀反应在响应完成后不消失（Codex 5.4） | [#2564](https://github.com/HKUDS/nanobot/pull/2564) 🔄 待合并 |
| 🔴 **高** | [#2559](https://github.com/HKUDS/nanobot/issues/2559) | Telegram流式响应长消息触发`Message_too_long`失败 | 🚫 无 |
| 🔴 **高** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram Markdown渲染不稳定（时好时坏） | 🚫 无 |
| 🟡 **中** | [#2549](https://github.com/HKUDS/nanobot/issues/2549) | 跨channel并发时`_sent_in_turn`变量覆盖（#1197复发） | 🚫 无 |
| 🟡 **中** | [#2560](https://github.com/HKUDS/nanobot/issues/2560) | Brave搜索在研究流中更频繁触发限流 | 🚫 无 |
| 🟡 **中** | [#2542](https://github.com/HKUDS/nanobot/issues/2542) | message工具跨chat_id时错误携带message_id导致回复行为异常 | 🚫 无 |
| 🟡 **中** | [#2493](https://github.com/HKUDS/nanobot/issues/2493) | LangSmith集成失效（litellm_provider移除后） | 🚫 无 |
| 🟢 **低** | [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama本地配置404，gateway不监听18790端口 | 🚫 无 |

### 其他关键Bug

| Issue | 描述 | 状态 |
|:---|:---|:---|
| [#2569](https://github.com/HKUDS/nanobot/issues/2569) | **安全**：ExecTool全shell访问权限，建议sandlock沙箱加固 | 新提，待评估 |
| [#2540](https://github.com/HKUDS/nanobot/issues/2540) | `chraas gateway update`无限detach循环（已有关闭但需验证） | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

| 功能方向 | Issue/PR | 可行性评估 | 纳入预测 |
|:---|:---|:---|:---|
| **技能生态标准化** | [#2571](https://github.com/HKUDS/nanobot/issues/2571) | 高（Cloudflare/Vercel/VS Code已支持`.well-known` URI） | v0.1.5 |
| **Agent运行时自检** | [#2521](https://github.com/HKUDS/nanobot/pull/2521) | 高（PR已开，chengyongru主导） | v0.1.5 |
| **子Agent暂停-恢复** | [#2507](https://github.com/HKUDS/nanobot/pull/2507) | 中（交互范式变更，需UX设计） | v0.1.6 |
| **工具调用循环检测** | [#2271](https://github.com/HKUDS/nanobot/pull/2271) | 高（PR成熟，flobo3维护） | v0.1.5 |
| **Supermemory长期记忆** | [#967](https://github.com/HKUDS/nanobot/pull/967) | 中（外部依赖，需稳定性验证） | 实验分支 |
| **多模型Provider故障转移** | [#1201](https://github.com/HKUDS/nanobot/pull/1201) | 中（架构复杂，与现有Provider系统冲突风险） | 评估中 |
| **Codex原生搜索** | [#2565](https://github.com/HKUDS/nanobot/pull/2565) | 高（PR新开，需求明确） | v0.1.5 |
| **Cron/Heartbeat通知目标配置** | [#2557](https://github.com/HKUDS/nanobot/pull/2557) | 高（运维刚需，PR已开） | v0.1.5 |

---

## 7. 用户反馈摘要

### 痛点矩阵

| 场景 | 具体表现 | 代表Issue |
|:---|:---|:---|
| **模型响应黑洞** | DeepSeek/其他模型突然只返回"I've completed processing but have no response to give"，无调试信息 | #235 |
| **渠道行为不一致** | Telegram功能（Markdown、反应、流式）在版本间波动，破坏用户预期 | #2562, #2568, #2559 |
| **工具调用透明度** | 用户无法区分"Agent正在执行"和"Agent假装执行"，信任受损 | #2487 |
| **本地部署障碍** | Ollama配置文档不足，端口/路径问题排查困难 | #2570 |
| **生态锁定焦虑** | LangSmith等可观测性工具移除后无替代方案 | #2493 |

### 满意点
- QQ渠道支持获得中文社区积极反响
- `/skill`命令提升技能发现性
- 邮件安全漏洞快速响应（<24小时修复）

---

## 8. 待处理积压

### 需维护者关注的长期议题

| Issue | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#1448](https://github.com/HKUDS/nanobot/issues/1448) | 2026-03-03 | 安全沙箱架构建议，0评论 | 安全债务累积，与#2569重复提需整合 |
| [#2450](https://github.com/HKUDS/nanobot/issues/2450) | 2026-03-24 | minimax-m2.7 Ollama Cloud第2+请求失败，标记good first issue | 特定模型生态支持缺口 |
| [#2519](https://github.com/HKUDS/nanobot/issues/2519) | 2026-03-26 | MiMo V2 Omni工具调用后"text is not present" | 国产模型兼容性，WeChat渠道 |
| [#2558](https://github.com/HKUDS/nanobot/issues/2558) | 2026-03-27 | Slack跨频道消息发送失败 | 企业场景核心功能 |

### 建议行动
1. **紧急**：合并#2564修复Telegram反应残留，发布v0.1.4.post7
2. **本周**：评估#2569与#1448沙箱方案，制定安全路线图
3. **本月**：建立回归测试套件，防止v0.1.4.post6类架构变更引发渠道功能波动

---

*本日报基于GitHub公开数据生成，时间范围：2026-03-27 00:00 - 2026-03-28 00:00 UTC+8*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-03-28

## 1. 今日速览

ZeroClaw 今日呈现**高度活跃的开发态势**，24小时内产生30条Issues更新（90%为新增/活跃）和50条PR更新（72%待合并），并发布v0.6.5版本聚焦上下文管理优化。社区围绕**Matrix渠道稳定性**、**MCP生态集成**和**安全加固**三大主题密集互动，同时UI/UX层面的配置管理问题（如Sessions页面崩溃、Cron添加失败）暴露出Gateway层的质量债务。整体项目健康度良好，但需关注S1级Bug的修复响应速度。

---

## 2. 版本发布

### v0.6.5 已发布 | [Release页面](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.6.5)

**核心更新：上下文管理引擎重构**
| 变更项 | 说明 | 影响 |
|--------|------|------|
| `agent: context overflow recovery in interactive daemon loop` | 交互式守护进程循环中添加上下文溢出恢复 | 解决长会话崩溃问题 |
| `agent: context overflow recovery in tool call loop` | 工具调用循环中的溢出恢复机制 | 提升工具链稳定性 |
| `agent: fast-path tool result trimming in context compressor` | 上下文压缩器的快速路径工具结果修剪 | 降低延迟，减少Token消耗 |
| `agent: preemptive context check before provider calls` | 提供商调用前的抢占式上下文检查 | 预防性避免400错误 |
| `agent: shared iteration budget` | 共享迭代预算机制 | 资源管控更精细 |

**迁移注意事项**：无破坏性变更，建议所有生产环境升级以获取上下文稳定性改进。

---

## 3. 项目进展

### 今日已合并/关闭的关键PR

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| #3141 | panviktor | **Matrix媒体与E2EE验证修复** — 关闭长期存在的Matrix加密房间兼容性问题 | [PR #3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) |
| #4860 | theonlyhennygod | **清理skills/示例目录** — 移除重复文档，减少维护负担 | [PR #4860](https://github.com/zeroclaw-labs/zeroclaw/pull/4860) |
| #4859 | theonlyhennygod | **playground/目录纳入.gitignore** — 开发者体验改进，避免运行时数据污染仓库 | [PR #4859](https://github.com/zeroclaw-labs/zeroclaw/pull/4859) |
| #4854 | theonlyhennygod | **移除冗余python/包** — LangGraph功能已迁移至Rust核心，清理技术债务 | [PR #4854](https://github.com/zeroclaw-labs/zeroclaw/pull/4854) |
| #4849 | theonlyhennygod | **README徽章增强** — 添加构建状态、Rust Edition 2024、版本号可视化 | [PR #4849](https://github.com/zeroclaw-labs/zeroclaw/pull/4849) |
| #4847 | wllxqsz | **GitHub Actions工作流重构**（关闭，模板不完整） | [PR #4847](https://github.com/zeroclaw-labs/zeroclaw/pull/4847) |
| #4841 | theonlyhennygod | **Rust Edition 2021→2024升级** — 全仓库8个Cargo.toml统一升级，5802测试通过 | [PR #4841](https://github.com/zeroclaw-labs/zeroclaw/pull/4841) |

**里程碑意义**：Rust Edition 2024升级标志着项目技术栈现代化进入新阶段，为后续语言特性（如改进的借用检查器、新的异步边界）奠定基础。

---

## 4. 社区热点

### 高互动议题分析

| 议题 | 类型 | 热度指标 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| #1380 External MCP Server Support | **Feature** | 13评论, 8👍 | 用户强烈要求通过npm或远程URL接入外部MCP服务器，突破内置工具限制 | [Issue #1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) |
| #4804 Matrix thread replies lack context | **Bug** | 5评论 | Matrix线程对话中第二轮消息丢失上下文，影响多轮交互体验 | [Issue #4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) |
| #4810 History pruner severs tool pairs | **Bug** | 3评论 | 历史修剪器破坏tool_use/tool_result配对，导致Anthropic 400错误 | [Issue #4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) |
| #4657 Matrix channel friction tracker | **Tracking** | 2评论, 1👍 | Matrix渠道综合问题追踪（E2EE、OTK重试、线程等），显示该渠道成熟度不足 | [Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) |
| #4830 HMAC tool execution receipts | **Feature** | 2评论 | 加密验证工具执行真实性，防御LLM幻觉攻击——安全敏感型用户的核心关切 | [Issue #4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) |

**趋势洞察**：MCP（Model Context Protocol）生态集成已成为社区最强烈的差异化需求，#1380的关闭状态与#4848（MCP不工作的新Bug）形成张力，表明功能交付与稳定性之间存在gap。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 严重度 | 议题 | 问题描述 | 状态 | 修复PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **S1** | #4655 | `onboard --channels-only`覆盖全部渠道配置（数据丢失） | 🔴 开放 | #4817 待审 | [Issue #4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) |
| **S1** | #4846 | WhatsApp-Web渠道完全损坏（功能未启用编译） | 🔴 开放 | 无 | [Issue #4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) |
| **S1** | #4808 | Discord渠道将图片误处理为文本嵌入 | 🔴 开放 | 无 | [Issue #4808](https://github.com/zeroclaw-labs/zeroclaw/issues/4808) |
| **S1** | #4827 | 渠道模式仅保存最终响应，丢弃工具调用上下文 | 🔴 开放 | 无 | [Issue #4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) |
| **S1** | #4851 | GitHub Copilot提供商配置文档缺失 | 🔴 开放 | 无 | [Issue #4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) |
| **S2** | #4804 | Matrix线程回复丢失对话上下文 | 🟡 开放 | 无 | [Issue #4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) |
| **S2** | #4810 | 历史修剪器破坏工具调用配对 → Anthropic 400 | 🟡 开放 | **#4825** 待审 | [Issue #4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) |
| **S2** | #4806 | Matrix线程上下文在守护进程重启后丢失 | 🟡 开放 | 无 | [Issue #4806](https://github.com/zeroclaw-labs/zeroclaw/issues/4806) |
| **S2** | #4857 | UI无法添加Cron（安全限制误触发） | 🟡 开放 | 无 | [Issue #4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) |
| **S2** | #4856 | Sessions页面完全不可用（API返回格式错误） | 🟡 开放 | **#4858** 待审 | [Issue #4856](https://github.com/zeroclaw-labs/zeroclaw/issues/4856) |
| **S2** | #4855 | Channels API返回HTML而非JSON | 🟡 开放 | 无 | [Issue #4855](https://github.com/zeroclaw-labs/zeroclaw/issues/4855) |
| **S2** | #4848 | MCP检测完全失效 | 🟡 开放 | 无 | [Issue #4848](https://github.com/zeroclaw-labs/zeroclaw/issues/4848) |
| **S2** | #4842 | `update`命令在aarch64下载错误架构二进制 | 🟡 开放 | 无 | [Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) |
| **S3** | #4862 | `apps/tauri/gen/schemas/`未gitignore | 🟢 低优先级 | 无 | [Issue #4862](https://github.com/zeroclaw-labs/zeroclaw/issues/4862) |

**关键修复PR**：
- **#4825** [fix(agent): treat tool_use/tool_result as atomic groups in history pruning](https://github.com/zeroclaw-labs/zeroclaw/pull/4825) — 直接解决#4810
- **#4817** [fix(onboard): preserve existing channel config when re-configuring](https://github.com/zeroclaw-labs/zeroclaw/pull/4817) — 直接解决#4655
- **#4858** [fix: sessions page](https://github.com/zeroclaw-labs/zeroclaw/pull/4858) — 直接解决#4856

---

## 6. 功能请求与路线图信号

### 高潜力功能（已有PR或强烈信号）

| 功能 | 来源 | 状态 | 纳入可能性 | 关键PR/Issue |
|:---|:---|:---|:---|:---|
| **HMAC工具执行收据** | singlerider | 🟡 PR #4831 开放 | **高** — 安全核心需求 | [PR #4831](https://github.com/zeroclaw-labs/zeroclaw/pull/4831), [Issue #4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) |
| **LINE Messaging API渠道** | ninenox | 🟡 PR #4822 开放 | **高** — 东南亚市场关键 | [PR #4822](https://github.com/zeroclaw-labs/zeroclaw/pull/4822) |
| **Mattermost WebSocket实时监听** | dongs0104 | 🟡 PR #4845 开放 | **中** — 企业协作需求 | [PR #4845](https://github.com/zeroclaw-labs/zeroclaw/pull/4845) |
| **TOTP 2FA工具执行门控** | DonErlon | 🟡 PR #4799 开放 | **中** — 安全增强 | [PR #4799](https://github.com/zeroclaw-labs/zeroclaw/pull/4799) |
| **Matrix媒体支持（图片/文件/音频）** | singlerider | 🔴 Issue #4861 开放 | **高** — 渠道完整性 | [Issue #4861](https://github.com/zeroclaw-labs/zeroclaw/issues/4861) |
| **工具调用驱动的记忆固化** | whtiehack | 🔴 Issue #4760 开放 | **中** — 架构优化 | [Issue #4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) |
| **`.well-known` URI技能安装** | jonathanhefner | 🔴 Issue #4853 开放 | **中** — 生态标准化 | [Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) |
| **原生沙箱加固（seccomp/资源限制）** | EXboys | 🔴 Issue #4812 开放 | **低** — 架构复杂 | [Issue #4812](https://github.com/zeroclaw-labs/zeroclaw/issues/4812) |

**路线图推断**：v0.7.x 可能聚焦**渠道生态扩展**（LINE、Matrix媒体）与**安全可验证性**（HMAC、2FA），MCP生态的稳定性修复是近期优先级最高的技术债务。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 反馈来源 | 情绪 | 具体表述 |
|:---|:---|:---|:---|
| **配置管理灾难** | #4655 | 😤 沮丧 | "`--channels-only`摧毁所有其他渠道配置" — 生产部署数据丢失风险 |
| **Matrix体验破碎** | #4657, #4804, #4806 | 😤 沮丧 | 线程上下文丢失、重启后历史消失、E2EE问题集中爆发 |
| **MCP期望落差** | #4848, #1380 | 😐 困惑 | 功能已宣传但实际检测失效，文档与实现不同步 |
| **UI质量滑坡** | #4855-4857 | 😤 沮丧 | Sessions/Cron/Channels三个核心页面同时出现API/前端不匹配 |
| **安全焦虑** | #4830, #4799 | 😰 担忧 | "LLM幻觉整个工具辅助工作流" — 对AI自主性的不信任 |
| **架构升级赞赏** | #4841 | 😊 认可 | Rust 2024 Edition升级5802测试通过，技术领导力获认可 |
| **平台覆盖需求** | #4822, #4861 | 🤩 期待 | LINE东南亚市场、Matrix媒体功能被积极期待 |

**满意度分水岭**：核心Agent/上下文管理功能（v0.6.5重点）获得认可，但**渠道层（Matrix/WhatsApp）和Gateway层（UI/API）的质量控制**成为明显短板。

---

## 8. 待处理积压

### 需维护者关注的高价值遗留项

| Issue/PR | 创建时间 | 问题 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| #4706 [Conversation history LRU bound](https://github.com/zeroclaw-labs/zeroclaw/pull/4706) | 2026-03-25 | 无界HashMap导致RSS无限增长 | 内存泄漏，长运行实例崩溃 | 优先合并，已更新至最新 |
| #4729 [cargo-chef Docker优化](https://github.com/zeroclaw-labs/zeroclaw/pull/4729) | 2026-03-26 | Docker构建缓存脆弱 | CI/CD效率，贡献者体验 | 审查构建时间收益数据 |
| #4355 [Web chat history](https://github.com/zeroclaw-labs/zeroclaw/pull/4355) | 2026-03-23 | Web UI缺乏会话历史 | Gateway核心功能缺失 | 评估与#4852的依赖关系 |
| #4669 [secret set CLI](https://github.com/zeroclaw-labs/zeroclaw/issues/4669) | 2026-03-25 | 无加密密钥CLI设置方式 | 安全实践摩擦 | 快速Win，低实现成本 |
| #4666 [Matrix mention_only](https://github.com/zeroclaw-labs/zeroclaw/issues/4666) | 2026-03-25 | 功能曾存在但master缺失 | 回归，社区配置失效 | 检查分支合并历史 |

---

*日报生成时间：2026-03-28 | 数据来源：GitHub API | 项目地址：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-28

## 1. 今日速览

PicoClaw 今日保持**高强度开发节奏**，24小时内产生 **16 条 Issues 更新**（11 活跃/新开，5 关闭）与 **43 条 PR 更新**（31 待合并，12 已合并/关闭），代码活跃度处于近两周峰值。核心进展集中在**渠道稳定性修复**（飞书话题回复、Discord 配置）、**工具系统优化**（ReadFile 行级分页、exec 安全守卫）及**多租户隔离架构**三大方向。社区对 LM Studio 本地模型接入、Windows QQ 渠道支持等需求迫切，同时 nightly 构建持续迭代 v0.2.4 补丁版本。

---

## 2. 版本发布

### Nightly Build: v0.2.4-nightly.20260327.e6c05cb4
| 属性 | 详情 |
|:---|:---|
| 版本类型 | 自动化夜间构建（不稳定版本） |
| 发布日期 | 2026-03-27 |
| 对比基准 | [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main) |

**⚠️ 使用建议**：此为 CI 自动构建，可能包含未充分测试的变更，生产环境建议等待正式版本。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2104](https://github.com/sipeed/picoclaw/pull/2104) | flyingleafe | **Hermes 风格 XML 工具调用解析** | 解锁 Qwen/Hermes 衍生模型（如 mimo-v2-pro）的工具调用能力，填补 OpenAI 兼容层缺口 |
| [#2047](https://github.com/sipeed/picoclaw/pull/2047) | afjcjsbx | **Agent 日志增强：Prompt Token 统计** | 提升 LLM 调用可观测性，为成本优化和调试提供数据基础 |
| [#1963](https://github.com/sipeed/picoclaw/pull/1963) | stevef1uk | Azure Skills 白名单安全加固 | 完成 Azure AI 模型生态接入的安全基线 |
| [#1991](https://github.com/sipeed/picoclaw/pull/1991) | stevef1uk | `/chat` API 异步化重构 | 解除同步阻塞瓶颈，支撑高并发场景 |
| [#2068](https://github.com/sipeed/picoclaw/pull/2068) | cytown | 配置与安全结构简化重构 | 降低用户配置认知负担，为后续功能扩展清理技术债务 |
| [#2013](https://github.com/sipeed/picoclaw/issues/2013) / [#1986](https://github.com/sipeed/picoclaw/issues/1986) | kunalk16 | 日志级别与安全配置文档补全 | 改善开发者体验，减少配置错误导致的支持工单 |

**整体里程碑**：多租户隔离架构（PR #2095、#2102）进入最终 review 阶段，预计将在 v0.2.5 成为核心特性。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 🥇 | [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | **10 评论** | **长期热门需求**（创建于 2 月 11 日），用户 Franzferdinan51 持续推动本地模型零配置接入，反映社区对**私有化部署**的强烈诉求；与今日 PR [#2097](https://github.com/sipeed/picoclaw/pull/2097)（通用 Token 登录扩展）形成协同，预计近期可落地 |
| 🥈 | [#1974](https://github.com/sipeed/picoclaw/issues/1974) ReadFileTool 行级分页重构 | **6 评论** | 技术深度讨论，afjcjsbx 提出的字节偏移 vs 行号分页方案引发架构权衡；配套 PR [#1981](https://github.com/sipeed/picoclaw/pull/1981) 已提交，进入代码 review |
| 🥉 | [#2072](https://github.com/sipeed/picoclaw/issues/2072) Discord 配置保存失败 | **3 评论** | 用户体验阻塞问题，Web UI 表单验证逻辑缺陷，影响新用户 onboarding |

**信号解读**：本地模型生态（LM Studio/Ollama）接入、开发者工具链体验、渠道配置易用性构成当前社区关注三角。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2074](https://github.com/sipeed/picoclaw/issues/2074) | **飞书话题消息回复错位**：机器人回复落入群聊而非话题线程，企业场景核心功能受损 | 待修复 | 暂无 |
| 🟡 **Medium** | [#2072](https://github.com/sipeed/picoclaw/issues/2072) | Discord 渠道 bot token 保存触发 "This field is required" 错误 | 待修复 | 暂无 |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` 工具 `guardCommand` 路径守卫误杀合法命令（如 `curl wttr.in/Beijing?T` 被解析为 `../../../../Beijing?T`） | 待修复 | 暂无 |
| 🟡 **Medium** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) | 工具反馈预览 Unicode 转义（`\u0026` 替代 `&`），Shell 命令可读性受损 | 待修复 | 暂无 |
| 🟡 **Medium** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) | **Windows 平台 QQ 渠道完全不可用** | 待修复 | 暂无 |
| 🟡 **Medium** | [#2096](https://github.com/sipeed/picoclaw/issues/2096) | 机器人频繁不回复消息，疑似网络断连无自动重连机制 | 待修复 | 暂无 |
| 🟢 **Low** | [#1901](https://github.com/sipeed/picoclaw/issues/1901) | 百度千帆 API Key 配置错误导致服务启动失败 | ✅ **已关闭** | 配置问题，非代码缺陷 |
| 🟢 **Low** | [#2079](https://github.com/sipeed/picoclaw/issues/2079) | 百度千帆 coding plan 模型无法使用 | ✅ **已关闭** | 配置问题 |

**稳定性风险评估**：渠道层（飞书、Discord、QQ、通用网络）Bug 集中爆发，建议维护者优先分配资源；Windows 平台支持存在明显缺口。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 需求 | 可行性评估 | 版本预测 |
|:---|:---|:---|:---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | 一键接入本地模型 | **高** - PR #2097 已扩展通用 Token 认证，剩余为 UI 层工作 | v0.2.5 |
| [#2101](https://github.com/sipeed/picoclaw/issues/2101) `.well-known` URI 技能安装 | 标准化技能发现协议 | **中** - 需跟进 Agent Skills 工作组标准进展，Cloudflare/Vercel 已先行 | v0.3.0 |
| [#2030](https://github.com/sipeed/picoclaw/issues/2030) 飞书文件下载路径自定义 | 可读的 `{year}/{month}/{filename}` 结构 + 智能去重 | **高** - 纯渠道层改进，无架构依赖 | v0.2.5 |
| [#2077](https://github.com/sipeed/picoclaw/issues/2077) Web 前端版本信息展示 | 页脚/关于页面显示版本号与构建信息 | **高** - PR [#2087](https://github.com/sipeed/picoclaw/pull/2087) 已提交，待合并 | v0.2.5 |
| [#1939](https://github.com/sipeed/picoclaw/pull/1939) ASR/TTS 语音消息收发 | 多渠道语音能力统一抽象 | **中** - 大型重构 PR，涉及 5+ 渠道适配，review 周期长 | v0.3.0 |

**路线图信号**：v0.2.5 将聚焦**易用性提升**（配置简化、版本可见、本地模型接入）与**渠道稳定性**；v0.3.0 可能引入语音交互与技能生态标准化。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 反馈来源 | 核心诉求 |
|:---|:---|:---|
| **企业飞书部署** | @waqiju [#2074](https://github.com/sipeed/picoclaw/issues/2074) | "从 OpenClaw 迁移而来，话题回复是企业内部业务刚需，非常迫切" —— **渠道功能对等性**是迁移决策关键 |
| **Windows 开发者** | @easyteacher [#2080](https://github.com/sipeed/picoclaw/issues/2080) | QQ 渠道在 Windows 完全失效，curl 测试通过但 PicoClaw 无法运行 —— **跨平台一致性**缺口 |
| **Android/Termux 用户** | @coolbiubiu [#2053](https://github.com/sipeed/picoclaw/issues/2053) | 移动端 Web UI 缺少内置工具 API Key 配置入口 —— **移动端适配**不足 |
| **本地模型爱好者** | @Franzferdinan51 [#28](https://github.com/sipeed/picoclaw/issues/28) | 技能不足但强烈希望贡献，请求社区协助实现 LM Studio 接入 —— **降低贡献门槛** |
| **运维人员** | @mst42a [#1901](https://github.com/sipeed/picoclaw/issues/1901) | 模型配置错误导致服务崩溃退出，缺乏优雅降级 —— **配置验证与错误处理** |

### 满意度亮点
- 文档改进（#2013、#1986）快速响应，用户 kunalk16 主动认领并完成
- 社区对 nightly 构建机制认可，愿意测试并提供反馈

---

## 8. 待处理积压

### 需要维护者关注的高价值长期议题

| Issue/PR | 创建时间 | 积压天数 | 风险说明 |
|:---|:---|:---:|:---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | 2026-02-11 | **45 天** | 评论最多但未分配里程碑，本地模型生态战略价值高 |
| [#1666](https://github.com/sipeed/picoclaw/pull/1666) MCP Manager 重构 | 2026-03-17 | **11 天** | 大型架构 PR（进程生命周期、并发安全），阻塞 MCP 生态扩展 |
| [#1342](https://github.com/sipeed/picoclaw/pull/1342) OpenAI Provider 健壮性增强 | 2026-03-11 | **17 天** | 生产级重试、内存安全、多厂商兼容，影响核心稳定性 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec 安全守卫误杀 | 2026-03-04 | **24 天** | 工具层核心功能缺陷，影响天气查询等常见技能 |

**维护建议**：建议本周内对 #28 设定里程碑、对 #1666 和 #1342 完成架构 review，避免技术债务累积。

---

*日报生成时间：2026-03-28 | 数据来源：GitHub API 与公开仓库活动*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-28

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：45 个 PR 更新（23 个已合并/关闭，22 个待审），17 个 Issues 更新（11 个活跃，6 个关闭）。核心进展集中在**安全修复、多模型后端扩展、容器运行时稳定性**三大方向。社区对 Anthropic 单一供应商锁定的担忧持续升温，多提供商支持成为最高优先级诉求。技能生态系统快速扩张，图像视觉、Ollama 本地 LLM、Google Workspace 等新技能同日提交。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#1497](https://github.com/qwibitai/nanoclaw/pull/1497) | gavrielc | **修复严重性能回归**：阻止完整消息历史（最多 200 条）被发送至容器代理，避免启动时大规模 prompt 爆炸 | ✅ 已合并 |
| [#1480](https://github.com/qwibitai/nanoclaw/pull/1480) | DoubleTrey6 | **安全修复**：通过 `-e` 环境变量正确传递 secrets 至容器，解决 agent 重复要求 `/login` 的问题 | 🔄 待合并 |
| [#1444](https://github.com/qwibitai/nanoclaw/pull/1444) | Koshkoshinsk | 修复主组模板选择逻辑，确保 `isMain` 组使用正确的 CLAUDE.md | ✅ 已合并 |
| [#1401](https://github.com/qwibitai/nanoclaw/pull/1401) | Koshkoshinsk | 智能缓存刷新：按 `index.ts` 修改时间自动更新 agent-runner 源码缓存 | ✅ 已合并 |
| [#1452/1450/1453](https://github.com/qwibitai/nanoclaw/pull/1452) | Koshkoshinsk | 统一改进 Task Scripts 代理指令，引导使用 `schedule_task` 替代内联 bash | ✅ 已合并 |
| [#1280](https://github.com/qwibitai/nanoclaw/pull/1280) | Koshkoshinsk | 新增可选诊断数据收集（PostHog），匿名化系统信息上报 | ✅ 已合并 |
| [#1473](https://github.com/qwibitai/nanoclaw/issues/1473) | ivo-toby | 新增 Baileys 版 WhatsApp 通道（已关闭合并） | ✅ 已关闭 |

**整体推进评估**：今日合并 PR 聚焦**稳定性加固**（消息历史截断、secrets 传递、缓存一致性）和**开发者体验优化**（诊断系统、任务脚本规范化），为更大规模的功能扩展奠定基础设施。

---

## 4. 社区热点

### 🔥 最高关注度 Issue: 多提供商支持诉求

| Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | **27** | **53** | 支持 OpenCode、Codex、Gemini 等非 Anthropic 运行时 |

> **背景分析**：该 Issue 创建于 2 月初，今日仍被活跃讨论。核心驱动力是**供应商风险规避**——用户报告 Anthropic 正在封禁使用 OpenClaw 的订阅账户。社区将此视为生存级需求，而非锦上添花。

**关联 Issue 集群**：
- [#1350](https://github.com/qwibitai/nanoclaw/issues/1350) GitHub Copilot SDK 支持（3 评论）
- [#1492](https://github.com/qwibitai/nanoclaw/issues/1492) AWS Bedrock 认证后端
- [#478](https://github.com/qwibitai/nanoclaw/pull/478) Google Vertex AI 认证支持（PR 待审，2 月提交至今）

**信号判断**：多提供商架构重构已成为社区共识优先级，现有 PR #478 需加速审阅，或需维护者给出架构决策回应。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1483](https://github.com/qwibitai/nanoclaw/issues/1483) | **安全审计**：容器停止时的 Shell 命令注入 + 无界内存增长（2 critical, 4 high） | ❌ 无，已关闭需验证修复 |
| 🔴 **Critical** | [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) | NanoClaw 在容器内运行时崩溃，导致自毁级故障（Claude Code + shell 全退出） | ❌ 无 |
| 🟡 **High** | [#1482](https://github.com/qwibitai/nanoclaw/issues/1482) | 主机过早标记容器为 idle，混淆 "用户可见结果" 与 "IPC 等待状态" | ❌ 无 |
| 🟡 **High** | [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) | 安装脚本直接 curl 执行，供应链攻击面过大，请求全容器化部署 | ❌ 无 |
| 🟡 **High** | [#1497](https://github.com/qwibitai/nanoclaw/pull/1497) | 消息历史全量发送至容器（性能/成本灾难） | ✅ **已修复** |

**稳定性健康度**：⚠️ **中等风险**。安全审计发现的关键漏洞虽已关闭，但需确认修复落地；容器内运行崩溃问题影响 Docker-native 部署场景，与 #1485 的诉求形成叠加效应。

---

## 6. 功能请求与路线图信号

### 今日新增研究型 Issue（上下文压缩方向）

| Issue | 方向 | 技术方案 | 纳入可能性 |
|:---|:---|:---|:---|
| [#1495](https://github.com/qwibitai/nanoclaw/issues/1495) | 持久化记忆 | MemStack：三层系统（Hooks/Rules/Skills） | 高，已有成熟参考实现 |
| [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) | CLI 输出压缩 | RTK：Rust 代理，60-90% 压缩率，<10ms 开销 | 中高，性能数据优异 |
| [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) | API 级上下文压缩 | Headroom：透明代理架构，无需 agent 改动 | 高，架构侵入性最低 |

**趋势判断**：上下文压缩成为**显式研究主题**，三个方案覆盖不同层级（应用层/传输层/API 层），维护者可能评估集成或提供插件接口。

### 待审功能 PR

| PR | 功能 | 状态评估 |
|:---|:---|:---|
| [#1496](https://github.com/qwibitai/nanoclaw/pull/1496) | 图像视觉 + Ollama MCP + Compact 技能三合一 | 🆕 今日提交，高价值技能包 |
| [#1491](https://github.com/qwibitai/nanoclaw/pull/1491) | Google Workspace CLI 集成（gws） | 🆕 今日提交，企业场景刚需 |
| [#1408](https://github.com/qwibitai/nanoclaw/pull/1408) | CLI 重命名为 `nanoclaw` + 子命令体系 | 待审，破坏性变更需协调 |
| [#311](https://github.com/qwibitai/nanoclaw/pull/311) | Discord 线程支持 + 审批按钮 | 2 月提交，需维护者决策 |
| [#363](https://github.com/qwibitai/nanoclaw/pull/363) | `/create-skill` 元技能 | 2 月提交，Blocked 状态需解阻 |
| [#846](https://github.com/qwibitai/nanoclaw/pull/846) | GitHub 集成技能 | 3 月提交，技能生态关键拼图 |

---

## 7. 用户反馈摘要

### 痛点提炼

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #80 评论 | **供应商锁定恐惧** | "Anthropic 已经在封禁使用 OpenClaw 的订阅者" |
| #1424 | **Fork 安全困境** | 公共 Fork 无法私有化，医疗/金融场景合规受阻 |
| #1485 | **供应链安全焦虑** | curl \| bash 安装模式被视为"相当恶劣" |
| #1487 | **容器化部署脆弱性** | 自托管 Docker 场景下 NanoClaw 自毁 |
| #1490 | **多租户隔离需求** | 单容器不得同时拥有 vault + web + 外部通信权限 |

### 满意度信号

- **技能扩展机制**获积极使用（今日 3 个新技能 PR）
- **诊断系统**（#1280）体现对运维透明度的响应
- **Baileys WhatsApp** 替代方案满足 Meta API 受限地区需求

---

## 8. 待处理积压

### 长期悬停需维护者决策

| 项目 | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#478](https://github.com/qwibitai/nanoclaw/pull/478) Vertex AI | 2026-02-24 | 待审 32 天 | 多提供商架构关键拼图，社区等待信号 |
| [#311](https://github.com/qwibitai/nanoclaw/pull/311) Discord 线程 | 2026-02-19 | 待审 37 天 | 用户体验显著改进，可能失贡献者耐心 |
| [#363](https://github.com/qwibitai/nanoclaw/pull/363) 元技能 | 2026-02-21 | **Blocked** | 技能质量门槛机制，生态扩张瓶颈 |
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) 多提供商 | 2026-02-04 | 开放 52 天，53 👍 | **最高社区优先级**，需架构 RFC |

### 技能分支维护债务

- `skill/apple-container` 和 `skill/compact` 分支连续 4 次 merge-forward 失败（#1345, #1307, #1306, #1305），需人工介入解决冲突。

---

**报告生成时间**：2026-03-28  
**数据来源**：qwibitai/nanoclaw GitHub 仓库公开数据

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-03-28

## 1. 今日速览

NullClaw 今日保持**高活跃度**，代码贡献节奏密集。过去24小时内，社区提交了 **37 个 PR**（34 个待审阅，3 个已处理），Issues 端 **5 条更新**（2 个新开，3 个关闭）。核心开发者 `manelsen` 持续主导技术迭代，单日贡献 **12+ PR**，聚焦**渠道可靠性加固**（QQ、飞书、Discord）、**内存架构升级**（知识图谱后端）及**开发者体验优化**（配置文档、工具补全）。项目当前处于**功能密集开发期**，稳定性与扩展性同步推进，无版本发布计划。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#695](https://github.com/nullclaw/nullclaw/pull/695) | manelsen | **文档：新增可靠性与模型备选配置说明** — 正式文档化 `reliability` 与 `model_fallbacks` 配置，填补用户配置盲区 | #683 |
| [#713](https://github.com/nullclaw/nullclaw/pull/713) | telagod | **文档：优化导航与运行时指南** — 重构文档索引，澄清服务管理平台与配对行为边界 | — |

**里程碑意义**：模型降级机制（对标 OpenClaw 的 fallbacks）从"隐藏功能"转为**官方支持能力**，降低生产环境故障风险。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| Issue | 状态 | 热度指标 | 核心诉求 |
|:---|:---|:---|:---|
| [#311](https://github.com/nullclaw/nullclaw/issues/311) | **CLOSED** | 9 条评论，跨月追踪 | **Telegram 推理过程可视化**：用户强烈要求像 OpenClaw 一样显示模型推理链（reasoning），用于调试幻觉问题。首次请求被关闭后**二次申诉**，最终获重新评估 |
| [#734](https://github.com/nullclaw/nullclaw/issues/734) | **OPEN** | 新标准对接提案 | **Agent Skills 标准化**：跟进 `.well-known` URI 技能发现协议（Cloudflare、Vercel、VS Code 已支持），关乎 NullClaw 生态互操作性 |
| [#722](https://github.com/nullclaw/nullclaw/issues/722) | **OPEN** | QQ 渠道稳定性痛点 | **长任务断连问题**：AI 响应慢时 QQ 连接丢失，消息丢失且无法自动恢复，企业场景阻塞性问题 |

**深层信号**：用户群体从"能用"转向"好用+可观测"，对**调试透明度**（reasoning 可视化）和**生产级稳定性**（长连接保活）需求迫切。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#722](https://github.com/nullclaw/nullclaw/issues/722) | QQ 长任务断连，消息丢失，需用户主动重触发 | **PR #732** 针对性修复：延迟回复在 `msg_id` 失效后改为普通发送重试 |
| 🟡 **中** | [#311](https://github.com/nullclaw/nullclaw/issues/311) | Telegram `/reasoning on` 不显示推理过程（二次回归） | 待重新评估实现方案 |
| 🟡 **中** | [#659](https://github.com/nullclaw/nullclaw/issues/659) | Custom OpenAI 兼容提供商推理能力未启用 | 已通过 #695 文档化 `model_fallbacks` 间接缓解 |
| 🟢 **低** | [#680](https://github.com/nullclaw/nullclaw/issues/680) / [#682](https://github.com/nullclaw/nullclaw/issues/682) / [#684](https://github.com/nullclaw/nullclaw/issues/684) | Telegram 重复消息、Bifrost 兼容、工具缓存失效 | **PR #694** 三合一修复，待合并 |

**稳定性攻坚焦点**：`manelsen` 今日连发 **3 个基础设施级 PR**（#730 持久化出站投递 outbox、#731 瞬时失败重试、#732 QQ 重试降级），构建**"发送即确认"**的可靠消息架构，预计彻底解决渠道级消息丢失问题。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 技术可行性 | 纳入概率 | 关键 PR |
|:---|:---|:---|:---|:---|
| **Agent Skills `.well-known` 标准支持** | #734 | 高（协议已标准化） | ⭐⭐⭐⭐⭐ | 待社区响应 |
| **知识图谱内存后端** | — | **已实现** | ✅ **已提交** | [#712](https://github.com/nullclaw/nullclaw/pull/712) SQLite + 递归 CTE 实现实体关系遍历 |
| **数学计算工具集** | — | **已实现** | ✅ **已提交** | [#716](https://github.com/nullclaw/nullclaw/pull/716) 20 运算的 Zig 原生计算器 |
| **飞书渠道表情反馈** | — | **已实现** | ✅ **已提交** | [#704](https://github.com/nullclaw/nullclaw/pull/704) 消息接收时自动回执 emoji |
| **会话 ID 透传 + 自定义请求体** | #701 | **已实现** | ✅ **已提交** | [#709](https://github.com/nullclaw/nullclaw/pull/709) OpenAI 兼容 API 的 `user` 字段与 `extra_body_params` |
| **文件追加工具上线** | #699 | **已修复** | ✅ **已提交** | [#708](https://github.com/nullclaw/nullclaw/pull/708) 补注册遗漏的 `file_append` 工具 |
| **入站消息防抖** | #618 | **已实现** | ⏳ 待合并 | [#676](https://github.com/nullclaw/nullclaw/pull/676) Telegram/Discord/CLI 共享 3000ms 防抖 |

**下一版本预测**：知识图谱内存（#712）+ 可靠消息投递（#730/#731/#732）+ 工具生态补全（#708/#716）构成 **v0.x 版本的核心竞争力升级**。

---

## 7. 用户反馈摘要

### 痛点
- **"黑盒调试难"**：`nordlauf` 在 #311 中强调："reasoning 对调试幻觉**极其重要**"，当前 NullClaw 的不可观测性 vs OpenClaw 的透明度形成体验落差
- **"长任务心慌"**：QQ 用户反馈 AI 思考时"连接断了不知道，消息丢了没处找"，缺乏**进度感知**与**断点续传**
- **"配置考古学"**：#683 用户花费时间寻找 fallbacks 配置，说明高级功能**发现成本过高**

### 满意点
- **响应速度**：#311 虽为 bug 报告，但用户认可团队"重新评估"的开放态度
- **多语言文档**：中文 PR 摘要降低华语开发者参与门槛

### 使用场景洞察
- **企业 IM 集成**：飞书、QQ、Discord 的稳定性优化 PR 密集，反映 B 端部署需求上升
- **AI Agent 编排**：`.well-known` 技能标准请求（#734）显示用户将 NullClaw 作为**可组合 Agent 平台**而非单一聊天机器人

---

## 8. 待处理积压

| 类型 | 条目 | 悬停时间 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| **PR** | [#676](https://github.com/nullclaw/nullclaw/pull/676) 入站防抖 | 6 天 | 冲突累积 | 优先合并，影响 Telegram/Discord 核心体验 |
| **PR** | [#694](https://github.com/nullclaw/nullclaw/pull/694) 三合一修复 | 5 天 | 用户持续遭遇重复消息 | 快速审阅，低风险高回报 |
| **PR** | [#712](https://github.com/nullclaw/nullclaw/pull/712) 知识图谱内存 | 4 天 | 架构级变更需设计评审 | 安排核心维护者 review，决定 v0.x 是否纳入 |
| **Issue** | [#734](https://github.com/nullclaw/nullclaw/issues/734) 技能标准 | 1 天 | 生态卡位窗口期 | 维护者表态支持/排期，避免被竞争对手甩开 |

---

**数据截止**：2026-03-28 00:00 UTC  
**项目健康度**：🟢 活跃开发期，基础设施加固中，建议关注 PR 审阅带宽是否匹配提交速度

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-03-28

## 1. 今日速览

IronClaw 今日呈现**高强度迭代态势**：24小时内 47 个 PR 更新（34 个待合并）、20 个 Issues 处理（10 开 10 关），并发布 v0.23.0 重大版本。核心团队集中火力推进**多租户隔离架构落地**（Phases 2-4 完整上线），同时安全审计发现 3 个 CRITICAL 级别漏洞（TOCTOU 竞态条件、跨通道授权绕过、类型擦除风险），其中 2 个已快速修复关闭。社区活跃度显著，新增技能安装标准对接、金融执行层架构设计等战略性议题。

---

## 2. 版本发布

### ironclaw-v0.23.0 | [Release](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.23.0)

| 维度 | 详情 |
|:---|:---|
| **发布时间** | 2026-03-27 |
| **核心变更** | **完整多租户隔离（Phases 2-4）** —— 企业级 SaaS 部署能力的里程碑 |
| **关键修复** | 例程删除名称在更新失败回退后的恢复问题；MCP 协议 202 Accepted 状态处理 |

**破坏性变更与迁移注意**：
- 多租户隔离启用后，原有单租户部署需配置 `IRONCLAW_TENANT_MODE=legacy` 保持兼容
- 数据库 schema 变更涉及 `users`、`tenant_memberships`、`secrets` 三表联合迁移，建议先行备份

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#1714](https://github.com/nearai/ironclaw/pull/1714) | ShadowCorp-Dev | **修复 CRITICAL 类型擦除漏洞**：`process_tool_result()` 从 `impl Display` 改为具体 `Error` 类型，恢复错误模式匹配能力 | ✅ 已合并 |
| [#1713](https://github.com/nearai/ironclaw/pull/1713) | zmanian | **统一敏感路径保护**：Shell 工具与文件工具共享 `SENSITIVE_PATH_PATTERNS`，封堵 `cat ~/.ssh/id_rsa` 类绕过 | 🔧 待合并 |
| [#1688](https://github.com/nearai/ironclaw/pull/1688) | zmanian | **消除 UTF-8 崩溃风险**：3 处 `&s[..n]` 字节截断改为 `floor_char_boundary`，解决非 ASCII 输入 panic | 🔧 待合并 |
| [#1696](https://github.com/nearai/ironclaw/pull/1696) | lusipad | **本地网络 LLM 支持**：`LLM_ALLOW_LOCAL_NETWORK=true` 允许 10.x/192.168.x/172.16-31.x 私有 IP，解锁 Ollama/vLLM 自托管场景 | 🔧 待合并 |
| [#1719](https://github.com/nearai/ironclaw/pull/1719) | henrypark133 | **API 错误信息脱敏**：后端错误详细日志化，客户端仅返回通用 500，修复 Issue #1702 | 🔧 待合并 |

**整体推进评估**：安全加固与生产稳定性为今日主线，3 个 CRITICAL 漏洞 24 小时内闭环 1 个、修复中 2 个；架构层面多租户能力正式 GA，为 B 端商业化铺平道路。

---

## 4. 社区热点

### 高关注度议题

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#1717](https://github.com/nearai/ironclaw/issues/1717) `.well-known` URI 技能安装标准 | 创建当日，跨生态联动 | **行业标准对接**：Agent Skills 工作组推动 Cloudflare/Vercel/VS Code 采纳的 `.well-known` 发现机制，IronClaw 若支持将降低技能分发摩擦，提升生态互操作性 |
| [#1712](https://github.com/nearai/ironclaw/issues/1712) 金融执行层安全架构 | 创建当日，5 个 scope 标签 | **Crypto-Native 能力缺口**：NEAR intents 只读扩展（#1622）不够，社区需要完整的托管、签名、策略引擎、跨应用加密操作架构，这是 AI Agent 进入 DeFi 的核心瓶颈 |
| [#1676](https://github.com/nearai/ironclaw/issues/1676) HTTP 工具例程错误 | 7 条评论，用户反复反馈 | **Telegram 集成稳定性**：用户对比 OpenClaw "day 1 完美运行"，IronClaw 轮询消息工具仍失败，存在竞品替代压力 |

**背后信号**：社区正从"能用"向"企业级可靠"和"生态互联"跃迁，金融场景与多平台集成是差异化竞争焦点。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **CRITICAL** | [#1486](https://github.com/nearai/ironclaw/issues/1486) | TOCTOU 竞态条件：审批线程解析时序攻击 | [#1590](https://github.com/nearai/ironclaw/pull/1590) | 🔧 待合并（PR 已开 4 天） |
| 🔴 **CRITICAL** | [#1485](https://github.com/nearai/ironclaw/issues/1485) | 跨通道审批线程劫持：授权绕过（Confidence 100%） | [#1590](https://github.com/nearai/ironclaw/pull/1590) | 🔧 同上 |
| 🔴 **CRITICAL** | [#1705](https://github.com/nearai/ironclaw/issues/1705) | `process_tool_result()` 类型擦除丢失错误类型信息 | [#1714](https://github.com/nearai/ironclaw/pull/1714) | ✅ **已修复** |
| 🟠 **HIGH** | [#1702](https://github.com/nearai/ironclaw/issues/1702) | 数据库错误详情泄露至 API 客户端 | [#1719](https://github.com/nearai/ironclaw/pull/1719) | 🔧 修复中 |
| 🟠 **HIGH** | [#1706](https://github.com/nearai/ironclaw/issues/1706) | 热路径 Workspace I/O：`is_authenticated_webhook()` 每次读取存储 | — | ❌ 待处理 |
| 🟠 **HIGH** | [#1676](https://github.com/nearai/ironclaw/issues/1676) | HTTP 工具例程错误导致 Telegram Bot 半可用 | — | ❌ 待处理（用户活跃反馈中） |

**稳定性健康度**：⚠️ **中等风险**。3 个 CRITICAL 漏洞 2 个依赖同一 PR #1590，该 PR 已滞留 4 天，建议优先 review；用户-facing 的 Telegram 集成问题缺乏响应，存在口碑损耗。

---

## 6. 功能请求与路线图信号

| 议题 | 类型 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| [#1717](https://github.com/nearai/ironclaw/issues/1717) `.well-known` 技能安装 | 生态标准对接 | **高** | 已有 Cloudflare/Vercel 先例，实现成本低，生态收益大 |
| [#1712](https://github.com/nearai/ironclaw/issues/1712) 金融执行层架构 | 战略性能力 | **中-高** | 与 #1622 NEAR intents 直接关联，团队已投入 Crypto 场景，但架构设计需时 |
| [#1709](https://github.com/nearai/ironclaw/issues/1709) 推理模型提供商 UX 改进 | 体验优化 | **高** | 3 个具体痛点（URL 校验、错误处理、UI 反馈），修复粒度小 |
| [#1697](https://github.com/nearai/ironclaw/issues/1697) Codex 基础模型配置 | 文档/配置 | **中** | 用户配置困惑，需文档或 CLI 引导优化 |
| [#1691](https://github.com/nearai/ironclaw/issues/1691) OpenAPI 兼容 API 流式支持 | 协议兼容 | **中** | SSE 格式解析问题，影响 glm-v4.7 等国产模型接入 |

---

## 7. 用户反馈摘要

### 痛点与不满
- **工具可靠性**："[OpenClaw] knows how to do this perfect from day 1 but ironclaw still fails" —— [#1676](https://github.com/nearai/ironclaw/issues/1676) 用户直接竞品对比，挫败感明显
- **配置困惑**：Codex 模型名称尝试 "Plus"、"GPT-5.4 mini" 均失败，缺乏有效指引 —— [#1697](https://github.com/nearai/ironclaw/issues/1697)
- **模型接入摩擦**：国产模型 glm-v4.7 流式返回 `data:{...}` 解析失败 —— [#1691](https://github.com/nearai/ironclaw/issues/1691)

### 积极信号
- **安全响应认可**：CI 自动创建的漏洞 Issue 24 小时内即有关闭，体现工程纪律
- **自托管场景解锁**：#1696 本地网络 LLM 支持直接回应 Ollama/vLLM 用户需求

---

## 8. 待处理积压

### 需维护者关注的长期事项

| Issue/PR | 滞留时间 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#1590](https://github.com/nearai/ironclaw/pull/1590) 阻断跨通道审批劫持 | 4 天 | 2 个 CRITICAL 漏洞依赖此 PR | **P0 Review**，建议今日合并 |
| [#1557](https://github.com/nearai/ironclaw/pull/1557) 统一 Thread-Capability-CodeAct 执行引擎 | 6 天，7,275 行新增 | 架构债务偿还关键，但规模巨大 | 安排架构 review 会议，明确测试通过标准 |
| [#1626](https://github.com/nearai/ironclaw/pull/1626) 多租户用户管理 | 4 天，已发布 v0.23.0 | 版本已发但 PR 仍 open，状态不一致 | 确认是否需补充提交，或关闭重复 PR |
| [#1676](https://github.com/nearai/ironclaw/issues/1676) Telegram 工具失败 | 2 天，7 评论 | 用户活跃抱怨，竞品对比 | 分配 owner 复现，优先于新功能开发 |

---

*日报生成时间：2026-03-28 | 数据来源：GitHub API 与项目公开活动*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-28

## 1. 今日速览

LobsterAI 今日社区活跃度**极高**，24小时内产生 **26 条 Issues 更新**（23条新开/活跃）和 **50 条 PR 更新**（20条已合并/关闭），无新版本发布。项目处于**密集迭代期**：核心团队持续优化 Cowork 交互体验（消息导航重构、代码块增强、附件引用系统），同时社区反馈暴露出**任务生命周期管理**（#953）、**MCP 工具链稳定性**（#961）和**模型网关可靠性**（#972, #859）三类关键稳定性问题。IM 集成场景（微信、钉钉、小蜜蜂）的差异化需求成为功能请求焦点。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#888](https://github.com/netease-youdao/LobsterAI/pull/888) | liuzhq1986 | **流式输出性能优化**：移除 SQLite 重复写入，新增 250ms 写入节流 + 200ms IPC 节流，修复 Intel Mac 主进程阻塞 | **性能里程碑**：解决长期困扰 Intel Mac 用户的卡顿问题，为大规模上下文场景奠定基础 |
| [#832](https://github.com/netease-youdao/LobsterAI/pull/832) | liuzhq1986 | **对话索引浮层**：支持快速跳转到指定对话轮次 | 长对话导航效率提升 |
| [#988](https://github.com/netease-youdao/LobsterAI/pull/988) / [#987](https://github.com/netease-youdao/LobsterAI/pull/987) | liuzhq1986 | **消息导航重构为迷你轨道样式** | UI 精简，视觉层级优化 |
| [#985](https://github.com/netease-youdao/LobsterAI/pull/985) | blackberrier | **修复快捷键修改功能**：实现"按下新的组合键"修改承诺 | 修复文档与实际功能不符的回归问题 |
| [#162](https://github.com/netease-youdao/LobsterAI/pull/162) | Doge2077 | **多 Custom 提供商配置**：扩展配置结构，支持 `customProviders[]` 和 `activeCustomProviderId`，避免同名模型冲突 | **架构升级**：为多模型管理铺路，与社区呼声强烈的模型优先级功能（#943, #947-949）形成呼应 |
| [#970](https://github.com/netease-youdao/LobsterAI/pull/970) | winsan-zhang | **Gateway 客户端暴露时机修复**：延迟 `gatewayClient` 赋值至 `onHelloOk` 回调 | 修复连接握手期间的竞态条件 |
| [#966](https://github.com/netease-youdao/LobsterAI/pull/966) | wulei05 | **Thinking-only 响应提示**：检测模型仅返回 thinking block 无 text block 的场景，提示用户任务可能未完成 | 改善超大上下文下的用户体验 |

**整体评估**：今日合并 PR 聚焦**性能优化**（#888）、**交互体验**（#832, #988, #985）和**架构健壮性**（#162, #970），项目在技术债务清理和用户体验打磨上同步推进。

---

## 4. 社区热点

### 高讨论度 Issues

| Issue | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 👍 1, 💬 2 | **任务生命周期管理失控**：停止/删除任务后进程未实际终止，导致"任务窜台"、API 请求频繁失败。这是**生产环境阻塞级问题**，用户明确提及"模型调用失败"的业务影响 |
| [#976](https://github.com/netease-youdao/LobsterAI/issues/976) | 💬 1 | **异常场景交互规范**：断网情况下双 timeout 提示体验不友好，反映产品对边缘场景的打磨不足 |
| [#961](https://github.com/netease-youdao/LobsterAI/issues/961) | 💬 1 | **MCP Daemon 启动失败**：自定义 MCP 服务全断，非技术用户无法自助排查，**工具链可靠性成为 adoption 门槛** |
| [#844](https://github.com/netease-youdao/LobsterAI/issues/844) | ✅ 已关闭 | 切换模型触发 Gateway 重启且耗时过长——**今日已关闭，验证修复效果** |
| [#955](https://github.com/netease-youdao/LobsterAI/issues/955) | ✅ 已关闭 | 私有部署 Qwen3 模型 skill 调用失败——**今日已关闭** |

**背后诉求洞察**：社区正从"功能可用"向"生产可靠"迁移，任务调度、MCP 工具链、模型网关的稳定性成为 adoption 深水区的核心卡点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-阻塞** | [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 任务停止/删除后未实际终止，后台进程持续运行导致 API 限流、任务窜台 | ❌ 无 |
| 🔴 **P0-阻塞** | [#859](https://github.com/netease-youdao/LobsterAI/issues/859) | 无效配置导致 Gateway **无限崩溃重启**，10次重试后仍持续 fork 新进程，需手动干预 | ❌ 无 |
| 🔴 **P0-阻塞** | [#972](https://github.com/netease-youdao/LobsterAI/issues/972) | Qwen 模型关闭后"AI引擎正在启动网关"无限弹窗，重新连接后仍不可用 | ❌ 无 |
| 🟡 **P1-高优** | [#961](https://github.com/netease-youdao/LobsterAI/issues/961) | MCP Daemon（port 53699/6947）未启动，整个 MCP 工具链断开 | ❌ 无 |
| 🟡 **P1-高优** | [#981](https://github.com/netease-youdao/LobsterAI/issues/981) | 启动报错 "Failed to start Web Search service"，Web Search Bridge 启动失败 | ❌ 无 |
| 🟡 **P1-高优** | [#960](https://github.com/netease-youdao/LobsterAI/issues/960) | 系统默认千问模型初次使用报错 | ❌ 无 |
| 🟡 **P1-高优** | [#962](https://github.com/netease-youdao/LobsterAI/issues/962) | 升级最新版后 403 "Your request was blocked"，回滚旧版恢复 | ❌ 无 |
| 🟡 **P1-高优** | [#989](https://github.com/netease-youdao/LobsterAI/issues/989) | Tavily MCP 401 未授权（API key 已配置） | ❌ 无 |
| 🟢 **P2-中优** | [#983](https://github.com/netease-youdao/LobsterAI/issues/983) | 无法通过按下新组合键修改快捷键（文档承诺未实现） | ✅ [#985](https://github.com/netease-youdao/LobsterAI/pull/985) 已合并 |
| 🟢 **P2-中优** | [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | macOS 快捷键显示 Ctrl 而非标准 Cmd | 🔄 [#980](https://github.com/netease-youdao/LobsterAI/pull/980) 待合并 |
| 🟢 **P2-中优** | [#977](https://github.com/netease-youdao/LobsterAI/issues/977) | Deep link URL 缺少安全检查，存在认证流程干扰风险 | ❌ 无 |
| 🟢 **P2-中优** | [#971](https://github.com/netease-youdao/LobsterAI/issues/971) | 内容输出错乱，生成小说封面时答非所问 | ❌ 无 |
| 🟢 **P2-中优** | [#968](https://github.com/netease-youdao/LobsterAI/issues/968) | skill-creator 查询杭州天气，浏览器显示非杭州数据且未关闭 | ❌ 无 |
| 🟢 **P2-中优** | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | 微信回复未与客户端同步，等待完成后一次性狂发 | ❌ 无 |
| 🟢 **P2-中优** | [#885](https://github.com/netease-youdao/LobsterAI/issues/885) | 微信链接不可用 | ❌ 无 |

**稳定性健康度评估**：⚠️ **风险较高**。3个 P0 级无限循环/进程管理问题无修复，MCP 和模型网关的故障模式分散，需紧急建立**任务生命周期监控**和**Gateway 熔断机制**。

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 与现有 PR 关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#964](https://github.com/netease-youdao/LobsterAI/issues/964) | **多 Agent 隔离架构**：独立场景处理，每个 Agent 有独立工作目录、身份、IM 账号 | 与 [#162](https://github.com/netease-youdao/LobsterAI/pull/162) 多提供商配置形成架构呼应 | ⭐⭐⭐⭐⭐ **高**。架构设计完整，符合产品演进方向 |
| [#943](https://github.com/netease-youdao/LobsterAI/issues/943) | **模型调用优先级与自动 failover**：模型不可用时自适应切换 | [#162](https://github.com/netease-youdao/LobsterAI/pull/162) 已扩展配置结构 | ⭐⭐⭐⭐⭐ **高**。技术基础已具备 |
| [#947](https://github.com/netease-youdao/LobsterAI/issues/947) | 模型配置页增加 IM 调用次序、优先级、次数、Token 使用量 | 同上 | ⭐⭐⭐⭐⭐ **高**。与 #943 形成完整方案 |
| [#948](https://github.com/netease-youdao/LobsterAI/issues/948) | LobsterAI 聊天模型与 IM 交互模型分离 | 同上 | ⭐⭐⭐⭐⭐ **高**。解决调试场景干扰生产的问题 |
| [#949](https://github.com/netease-youdao/LobsterAI/issues/949) | IM 交互支持指定模型，不存在时返回支持列表和限制 | 同上 | ⭐⭐⭐⭐☆ 中高 |
| [#950](https://github.com/netease-youdao/LobsterAI/issues/950) | 模型调用失败提示优化（钉钉场景） | 无直接关联 | ⭐⭐⭐☆☆ 中 |
| [#982](https://github.com/netease-youdao/LobsterAI/issues/982) | 预设 Agents 国际化适配 | 无 | ⭐⭐⭐☆☆ 中。体验打磨类 |

**路线图信号**：用户密集提出 **IM 场景差异化配置**（#947-949）和 **多 Agent 隔离**（#964），与 [#162](https://github.com/netease-youdao/LobsterAI/pull/162) 的多提供商配置扩展形成技术共振，预计下一版本将聚焦**企业级多租户能力**和**IM 集成深度优化**。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈原文/摘要 | 情感 |
|:---|:---|:---|
| **任务管理失控** | "停止任务后仍然会打开浏览器搜索""任务'窜台'""API请求频繁" | 😤 愤怒-生产阻塞 |
| **非技术用户门槛** | "不是搞软件的，不懂，如实反馈""有什么办法吗"（MCP Daemon 未启动） | 😰 焦虑-无助感 |
| **IM 体验割裂** | "微信回复没有与客户端同步，要等全部回复完才一次性分条发送""前面等待时间长，后面又消息狂发" | 😤 愤怒-体验糟糕 |
| **配置即崩溃** | "无效配置导致 Gateway 无限崩溃重启，无法自动停止，持续超过10分钟" | 😤 愤怒-失控感 |
| **模型切换风险** | "调试新模型时，IM 交互也会使用该模型，导致失败" | 😐 困扰-预期外行为 |

### 满意点

- **性能优化感知**：#888 修复 Intel Mac 阻塞问题，用户期待已久
- **快捷键修复**：#985 兑现文档承诺，"按下新的组合键"终于可用

### 关键洞察

> **"Cowork 模式的价值正在被稳定性问题抵消"** — 用户认可"直接使用工具、操作文件、运行命令"的协作愿景，但任务进程失控、Gateway 无限重启、MCP 工具链断裂等问题导致"高能力伙伴"承诺难以兑现。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 问题 | 提醒 |
|:---|:---|:---|:---|
| [#859](https://github.com/netease-youdao/LobsterAI/issues/859) | 2026-03-25 | Gateway 无限崩溃重启 | **2天无响应**，P0 级稳定性问题，需紧急分配 |
| [#690](https://github.com/netease-youdao/LobsterAI/pull/690) | 2026-03-23 | Windows 启动窗口前置 | 4天待合并，影响首次安装体验 |
| [#557](https://github.com/netease-youdao/LobsterAI/pull/557) | 2026-03-20 | 附件 @mention 引用系统 | 7天待合并，Cowork 核心体验 PR，与 #610 输入内核重构相关 |
| [#610](https://github.com/netease-youdao/LobsterAI/pull/610) | 2026-03-21 | 结构化 Composer 重构 | 7天待合并，架构级改动，需协调合并时机 |

---

**日报生成时间**：2026-03-28  
**数据来源**：netease-youdao/LobsterAI GitHub 公开数据

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-28

> **项目地址**: [github.com/TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)  
> **报告日期**: 2026-03-28  
> **数据周期**: 过去24小时

---

## 1. 今日速览

TinyClaw 今日活跃度**偏低**，过去24小时内无新增 Issues，2条 PR 均已完成合并/关闭，无新版本发布。项目处于**功能整合与代码清理阶段**——核心贡献者 jlia0 主导了办公界面重构与任务管理系统的重大升级，显示团队正专注于用户体验优化与产品化打磨。社区互动暂时静默，未见外部用户反馈或讨论。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#249](https://github.com/TinyAGI/tinyagi/pull/249) | **CLOSED** | Office 布局重构：侧边栏导航迁移至顶部导航栏，路由重组为 `(office)` 布局组，代理角色卡片可点击展开详情面板 | ⭐⭐⭐ 中等——UI 架构升级，为后续功能扩展奠定布局基础 |
| [#252](https://github.com/TinyAGI/tinyagi/pull/252) | **CLOSED** | Linear 风格任务/项目管理系统：SQLite 持久化、评论线程、Linear 风格 ID 生成（如 SYS-1）、基于 shadcn Sidebar 的改进 UI | ⭐⭐⭐⭐⭐ **重大**——核心生产力功能落地，标志项目从"代理框架"向"完整工作空间"演进 |

**整体评估**: 今日合并的 PR 代表了 TinyClaw **产品化里程碑**——任务管理系统（#252）是用户实际协作场景的关键基础设施，配合界面重构（#249）形成连贯的产品体验。项目正从底层能力构建转向**上层应用形态定型**。

---

## 4. 社区热点

**今日无活跃讨论**

| 指标 | 数值 | 分析 |
|:---|:---|:---|
| Issues 评论数 | 0 | 零用户反馈，可能原因：功能刚合并尚未被广泛使用，或用户基数仍小 |
| PR 评论数 | undefined（数据缺失） | 两条 PR 均来自同一作者 jlia0，显示**核心贡献者单兵推进**特征 |
| 👍 反应数 | 0 | 缺乏社区投票参与 |

**潜在信号**: 任务管理系统（#252）作为重磅功能零社区反响，建议维护者主动发布 Release Note 或讨论帖引导用户体验反馈。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 |
|:---|:---|:---|
| 🔴 严重 | 0 | — |
| 🟡 中等 | 0 | — |
| 🟢 轻微 | 0 | — |

**今日无 Bug 报告**

> 注：PR #252 涉及 SQLite 数据库架构变更，建议关注生产环境数据迁移风险及并发场景下的稳定性。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**

### 已落地功能与路线图推断

| 已合并功能 | 推测下一版本方向 |
|:---|:---|
| Linear 风格任务管理 | 与 AI Agent 能力深度集成（自动生成/分配任务） |
| Office 布局重构 | 多工作区/团队空间支持 |
| 评论线程系统 | 实时协作通知、@提及功能 |

**关键判断**: 任务系统（#252）的"Linear 风格"设计暗示产品定位偏向**开发者/技术团队**的 AI 协作工具，而非通用消费者助手。

---

## 7. 用户反馈摘要

**今日无用户反馈数据**

> 建议：鉴于核心功能刚上线，建议在接下来 7-14 天主动收集早期采用者反馈，重点关注：
> - SQLite 数据库在真实工作负载下的性能表现
> - Linear 风格工作流与 AI Agent 自动化之间的衔接流畅度
> - 新布局对移动端/小屏幕的适配情况

---

## 8. 待处理积压

| 类型 | 数量 | 风险提示 |
|:---|:---|:---|
| 长期未响应 Issues | 0 | — |
| 长期未响应 PRs | 0 | — |
| 草稿/待完善 PRs | 未知 | 建议核查是否有 #249/#252 的后续优化 PR 待审 |

**维护者行动建议**:
- [ ] 发布 v0.x.x 版本标签，正式标记任务管理系统上线
- [ ] 创建 Discussion 收集 #252 功能反馈
- [ ] 评估是否需要补充自动化测试覆盖新 SQLite 数据层

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | 🟡 中等 | 核心功能推进有力，但单一贡献者依赖度高 |
| 社区健康度 | 🔴 偏低 | 零外部互动，需主动运营激活 |
| 产品成熟度 | 🟢 良好 | 任务管理系统落地，产品形态清晰 |
| 维护响应度 | — | 无待处理事项，无法评估 |

**综合判断**: TinyClaw 处于**技术产品化的关键爬坡期**，工程执行力强，但需尽快建立用户反馈闭环以验证市场假设。

---

*报告生成时间: 2026-03-28*  
*数据来源: GitHub API / TinyAGI/tinyclaw*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-03-28

## 1. 今日速览

Moltis 今日保持**中等活跃度**，核心维护者 `penso` 主导了多项关键工作。项目完成 2 个 PR 的合并/关闭，同时新增 1 个高优先级架构修复 Issue（#494），显示 GraphQL 层仍存在服务绑定隐患。双版本连续发布（`20260327.03`/`20260327.01`）表明团队处于快速迭代周期，但版本说明缺失透明度。整体健康度：**良好**，需关注架构债务清理进度。

---

## 2. 版本发布

| 版本 | 发布时间 | 状态 |
|:---|:---|:---|
| `20260327.03` | 2026-03-27 | 已发布 |
| `20260327.01` | 2026-03-27 | 已发布 |

> ⚠️ **注意**：两个版本均未提供 Release Notes，无法评估更新内容、破坏性变更或迁移要求。建议维护者补充变更日志以提升可预测性。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#210](https://github.com/moltis-org/moltis/pull/210) | `penso` | 添加 `sessions.active` GraphQL 查询，修复 chat 服务绑定 | ❌ **部分回退**：Issue #494 指出修复不完全，GraphQL 仍可能绕过延迟绑定服务 |
| [#421](https://github.com/moltis-org/moltis/pull/421) | `penso` | 新增 `moltis-symphony` 工作流守护进程基础 | ✅ **架构里程碑**：支持 `WORKFLOW.md` 加载、Linear 轮询、CLI 验证/运行命令，为自动化工作流奠定基础 |

**整体评估**：Symphony 子系统的落地是实质性进展，但 GraphQL 架构修复的反复暴露技术债务。

---

## 4. 社区热点

| 条目 | 热度指标 | 分析 |
|:---|:---|:---|
| [#493](https://github.com/moltis-org/moltis/issues/493) 安装脚本 .deb 命名错误 | 1 评论，当日关闭 | **快速响应典范**：用户 `rufflepot` 报告安装脚本问题，24 小时内闭环，体现维护效率 |
| [#494](https://github.com/moltis-org/moltis/issues/494) GraphQL 服务绑定缺陷 | 0 评论，新建 | **架构深层诉求**：维护者 `penso` 自开 Issue，揭示对 RPC/GraphQL 行为一致性的内部焦虑，需优先处理 |
| [#276](https://github.com/moltis-org/moltis/pull/276) Telegram 文档提取 | 26 天未合并 | **社区贡献张力**：外部开发者 `alexhooketh` 用 AI 辅助实现功能，坦诚代码质量存疑，等待维护者评审 |

**核心信号**：社区愿贡献（#276），但维护带宽可能不足；内部架构一致性（#494）优先于外部功能。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 修复进展 |
|:---|:---|:---|:---|
| 🔴 **高** | [#494](https://github.com/moltis-org/moltis/issues/494) GraphQL 可能绕过延迟绑定聊天服务 | **开放** | 无 PR，需紧急评估 #210 的替代方案 |
| 🟡 **中** | [#493](https://github.com/moltis-org/moltis/issues/493) 安装脚本 .deb 命名错误 | ✅ **已关闭** | 当日修复 |

**风险评估**：#494 为**回归风险**，PR #210 的"修复"未完全解决问题，可能导致生产环境 chat 覆盖配置失效。

---

## 6. 功能请求与路线图信号

| PR/Issue | 功能 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#495](https://github.com/moltis-org/moltis/pull/495) Anthropic/OpenRouter 提示缓存 | 成本优化核心功能 | ⭐⭐⭐ **高** | `penso` 自提，配置驱动设计（`cache_retention`），符合多提供商战略 |
| [#276](https://github.com/moltis-org/moltis/pull/276) Telegram 文档提取 | 多模态输入扩展 | ⭐⭐ **中** | 需求合理，但代码需重构，依赖维护者时间 |
| [#421](https://github.com/moltis-org/moltis/pull/421) Symphony 工作流守护 | 自动化基础设施 | ✅ **已合并** | 成为 vNext 核心能力 |

**路线图推断**：成本优化（#495）+ 工作流自动化（Symphony）构成下一版本主题，Telegram 生态完善次之。

---

## 7. 用户反馈摘要

> 基于有限评论提炼

| 来源 | 痛点/场景 | 情绪 |
|:---|:---|:---|
| #493 `rufflepot` | 安装体验受阻（.deb 命名错误） | 😐 → 😊（快速解决后） |
| #276 `alexhooketh` | "Moltis on Telegram cannot read attached files" — 实际使用中的功能缺口 | 😐 务实，愿用 AI 辅助贡献 |
| #276 自述 | "I haven't written a single line of code... implementation is likely suboptimal" | 🤔 对代码质量诚实，暗示贡献门槛/评审流程可优化 |

**关键洞察**：用户愿意用 AI 工具绕过开发门槛做贡献，项目可考虑建立"AI 辅助贡献"的评审指南。

---

## 8. 待处理积压

| 条目 | 年龄 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#276](https://github.com/moltis-org/moltis/pull/276) Telegram 文档提取 | 26 天 | 贡献者流失、功能缺口持续 | 维护者需明确：接受并重构 / 关闭并说明替代方案 |
| [#495](https://github.com/moltis-org/moltis/pull/495) 提示缓存 | 1 天 | 无，但需快速评审 | 作为高优先级功能，建议 48 小时内初评 |

---

**报告生成时间**：2026-03-28  
**数据来源**：github.com/moltis-org/moltis

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-03-28

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24小时内产生 **50 条 Issues**（35 新开/活跃，15 关闭）和 **42 条 PR**（20 待合并，22 已合并/关闭），无新版本发布。社区聚焦**稳定性修复**（编码问题、端口管理、认证失效）与**用户体验优化**（语言持久化、托盘功能、并发对话）。值得注意的是，今日关闭了 4 个重要功能 PR，包括统一 `/stop` 命令、WeCom 媒体上传、文件编码修复等核心能力，项目整体向生产就绪迈进。

---

## 2. 版本发布

**无新版本发布**（0 个）

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（4 项核心功能落地）

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#2403](https://github.com/agentscope-ai/CoPaw/pull/2403) | xieyxclack | **跨平台文件编码修复**：实现多编码回退读取（UTF-8-BOM → UTF-8 → GBK → CP936 → CP1252 → Latin-1）和智能写入编码选择 | 🔴 **高** - 解决 Windows 中文乱码痛点（关联 Issue #1935） |
| [#2401](https://github.com/agentscope-ai/CoPaw/pull/2401) | hongxicheng | **WeCom 媒体上传**：通过 WebSocket 长连接实现三步上传协议（init → chunk → finish） | 🔴 **高** - 企业微信场景从纯文本扩展到富媒体 |
| [#2411](https://github.com/agentscope-ai/CoPaw/pull/2411) + [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067) | rayrayraykk / ixiadao | **统一优先级队列与 `/stop` 命令**：替换固定工作池为按需消费者模型，支持会话级优先级隔离和即时任务终止 | 🔴 **高** - 架构级重构，解决多通道任务中断难题 |
| [#2415](https://github.com/agentscope-ai/CoPaw/pull/2415) | zhijianma | **命令建议与输入占位符优化** | 🟡 **中** - 提升新手引导体验 |

**项目里程碑**：`/stop` 命令的落地标志着 CoPaw 从"单会话阻塞"向"可控并发"演进，配合 PR #2416（待合并）的并发对话功能，将显著改善长任务场景用户体验。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 分析 |
|:---|:---:|:---|:---|
| [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) Help Wanted: Open Tasks | **24** | 官方任务清单的认领与协作 | 社区贡献入口，P0-P2 优先级清晰，反映项目正在积极扩展生态 |
| [#2382](https://github.com/agentscope-ai/CoPaw/issues/2382) venv 重置导致 skill 依赖失效 | **9** | 更新后虚拟环境状态丢失 | **高频痛点** - 涉及升级机制设计，需区分"更新"与"迁移"的边界 |
| [#2293](https://github.com/agentscope-ai/CoPaw/issues/2293) QA Agent 操作导致 UI 崩溃 | **8** | Agent 自治操作破坏前端状态 | 揭示 Agent 能力与系统稳定性之间的张力，需加强沙箱隔离 |

### 背后诉求分析
- **开发者体验**：venv 重置、配置覆盖（#2236）等问题指向**升级兼容性**的系统性债务
- **Agent 安全边界**：用户担忧 Agent 的"自主操作"权限过大，需要更清晰的权限模型

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---:|
| 🔴 **高** | [#2385](https://github.com/agentscope-ai/CoPaw/issues/2385) | CLI 端口管理设计缺陷：随机端口 + 先写配置后启动服务，导致多 Agent 协作失败 | 🔄 **待修复** - 今日新报 |
| 🔴 **高** | [#2382](https://github.com/agentscope-ai/CoPaw/issues/2382) | 更新后 venv 重置，skill 依赖全部失效 | 🔄 **待修复** |
| 🔴 **高** | [#2273](https://github.com/agentscope-ai/CoPaw/issues/2273) | ModelScope 创空间 Web 登录鉴权循环跳转 | 🔄 **待修复** |
| 🟡 **中** | [#2312](https://github.com/agentscope-ai/CoPaw/issues/2312) | 国家超算互联网 API 无法使用 | 🔄 **待修复** |
| 🟡 **中** | [#2303](https://github.com/agentscope-ai/CoPaw/issues/2303) | MiniMax `check_connection()` 404（调用不支持的 `/models` 端点） | 🔄 **待修复** - 有 PR #2423 补充 OAuth |
| 🟡 **中** | [#2431](https://github.com/agentscope-ai/CoPaw/issues/2431) | 语言设置不持久化（重启恢复 English） | ✅ **已修复** - PR #2408 待合并 |
| 🟡 **中** | [#2421](https://github.com/agentscope-ai/CoPaw/issues/2421) | 飞书通道单消息重复回复 | 🔄 **待修复** |
| 🟢 **低** | [#2119](https://github.com/agentscope-ai/CoPaw/issues/2119) | 上传 skill 后列表不立即显示，需重启 | 🔄 **待修复** |

**稳定性评估**：今日关闭的编码修复（#2403）和 `/stop` 命令（#2411）解决了长期存在的 Windows 兼容性和任务中断问题，但**配置/状态持久化**类问题（venv、语言、agents.md）形成新的模式性风险。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **系统托盘与最小化** | [#2430](https://github.com/agentscope-ai/CoPaw/issues/2430) | Windows 用户高频需求，技术实现明确 | **高** |
| **并发对话与中途消息** | [#2416](https://github.com/agentscope-ai/CoPaw/issues/2416) + PR #2337 | 架构已就绪（优先级队列），PR 已开 | **高** |
| **Skill Hub 管理页面** | [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | 生态扩展关键，与 #2291 任务清单呼应 | **中** |
| **改进文档操作 Skill** | [#2427](https://github.com/agentscope-ai/CoPaw/issues/2427) | 参考 MiniMax Office Skills，需评估替换策略 | **中** |
| **OpenCode Provider** | PR [#2428](https://github.com/agentscope-ai/CoPaw/pull/2428) | 新 Provider 集成，今日提交 | **高** |
| **CoPaw Local Model** | PR [#2419](https://github.com/agentscope-ai/CoPaw/pull/2419) | 本地模型支持重构，3 步配置简化 | **高** |

**路线图信号**：项目正从"功能完备"转向"体验精致"，托盘、并发、Skill 市场等需求表明用户已开始规模化日常使用。

---

## 7. 用户反馈摘要

### 😫 核心痛点
> *"每次更新后venv会重置？所有skill相关的依赖都会失效"* — [#2382](https://github.com/agentscope-ai/CoPaw/issues/2382)

> *"升级之后原本对agents.md做的调整被覆盖了"* — [#2236](https://github.com/agentscope-ai/CoPaw/issues/2236)

> *"点击关闭按钮 (X) 时，CoPaw 会完全退出。每次重新使用都需要完整重启"* — [#2430](https://github.com/agentscope-ai/CoPaw/issues/2430)

**模式识别**：用户对**升级安全性和状态持久化**极度敏感，当前机制将"更新"等同于"全新安装"，破坏用户定制。

### 😊 满意场景
> *"非常感谢你们开发了这么优秀的工具"* — [#2430](https://github.com/agentscope-ai/CoPaw/issues/2430) 开场

> 企业微信媒体上传、跨平台编码修复等 PR 显示企业用户正在深度集成。

### 🤔 使用困惑
- **模型选择框消失**（[#2425](https://github.com/agentscope-ai/CoPaw/issues/2425)）：UI 改版后功能位置变更缺乏引导
- **QQ 频道思考过程关闭无效**（[#2395](https://github.com/agentscope-ai/CoPaw/issues/2395)）：配置与通道实现不一致
- **跨智能体协作引导不足**（[#2420](https://github.com/agentscope-ai/CoPaw/issues/2420)）：高级功能发现成本高

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| Issue/PR | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#1084](https://github.com/agentscope-ai/CoPaw/pull/1084) Linux AppImage 支持 | 2026-03-09 (18天) | OPEN | 跨平台战略，长期悬置 |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) OpenRouter Provider | 2026-03-10 (17天) | OPEN | 模型生态扩展，有模型过滤增强 |
| [#2177](https://github.com/agentscope-ai/CoPaw/pull/2177) 记忆摘要定时任务 | 2026-03-24 (3天) | OPEN | 首次贡献者，需 review 引导 |
| [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) 任务清单 | 2026-03-25 | OPEN | 社区贡献入口，需持续维护更新 |

**建议行动**：#1084 和 #1192 作为生态扩展关键 PR，建议优先 review 或明确路线图表态，避免贡献者流失。

---

*本日报基于 GitHub 公开数据生成，数据截止时间：2026-03-28 00:00 UTC*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-28

---

## 1. 今日速览

ZeptoClaw 今日处于**低活跃但高质量贡献**状态。过去24小时内无 Issues 活动，但社区核心贡献者 `stuartbowness` 同步提交了两项重要功能 PR，分别聚焦**浏览器自动化能力扩展**与**长对话上下文稳定性**两大关键领域。两项 PR 均处于待合并状态，代码审查尚未启动。项目整体健康度良好，无紧急 Bug 或安全事件需处理。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日无已合并 PR，以下两项待合并 PR 代表项目当前技术演进方向：

| PR | 功能领域 | 技术价值 | 链接 |
|:---|:---|:---|:---|
| #459 BrowserTool | 工具生态扩展 | 集成 `agent-browser` 实现多引擎浏览器自动化（Lightpanda 轻量模式 + Chrome 完整模式），内置 SSRF 防护 | [PR #459](https://github.com/qhkm/zeptoclaw/pull/459) |
| #460 上下文压缩重构 | 核心架构优化 | 将单层词数限制替换为多层防御策略，根治长对话 Token 溢出问题 | [PR #460](https://github.com/qhkm/zeptoclaw/pull/460) |

**进展评估**：两项 PR 分别对应 AI Agent 的"工具调用能力"与"长程记忆稳定性"两大痛点，若顺利合并将显著提升 ZeptoClaw 的生产环境可用性。

---

## 4. 社区热点

今日无活跃讨论议题。两项新 PR 尚未产生评论互动，反应数均为 0。

**潜在信号**：`stuartbowness` 作为贡献者同时推进浏览器工具与上下文管理，可能反映其正在构建**支持复杂网页交互的长任务 Agent 工作流**——这一组合能力对研究自动化、数据抓取等场景至关重要。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 备注 |
|:---|:---|:---|:---|
| 高 | 长对话 Token 溢出崩溃 | **Fix PR 待审** | #460 提供完整重构方案，非临时补丁 |
| 中 | 浏览器工具缺失限制复杂任务 | **Feature PR 待审** | #459 提供标准化解决方案 |

无新增 Bug 报告，无安全漏洞披露。

---

## 6. 功能请求与路线图信号

| 需求方向 | 实现状态 | 纳入可能性 |
|:---|:---|:---|
| 浏览器自动化（多引擎支持） | #459 待合并 | ⭐⭐⭐⭐⭐ 高，架构设计完整 |
| 智能上下文压缩/长对话支持 | #460 待合并 | ⭐⭐⭐⭐⭐ 高，解决核心痛点 |
| SSRF 安全防护 | #459 内置实现 | ⭐⭐⭐⭐☆ 中，安全基线功能 |

**路线图推断**：两项 PR 均针对企业级部署障碍，合并后可能触发 **v0.x → v1.0** 版本跃迁的信号。

---

## 7. 用户反馈摘要

今日无新增 Issues 评论。基于 PR 描述反推用户场景：

- **#459 驱动场景**：需要 Agent 自主浏览网页、填写表单、执行 JavaScript 获取动态内容的自动化工作流
- **#460 驱动场景**：多轮深度研究、长文档分析、持续数小时的 Agent 会话场景

> 注：两项 PR 均由同一贡献者提出，建议维护者关注其是否代表特定企业用户或垂直场景的需求聚合。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 等待时间 | 风险提醒 |
|:---|:---|:---|:---|:---|
| PR | #459 | BrowserTool | 1 天 | 涉及外部依赖 `agent-browser`，需审查供应链安全 |
| PR | #460 | 上下文压缩重构 | 1 天 | 核心架构变更，建议优先安排代码审查 |

**维护者行动建议**：
1. 优先审查 #460（稳定性修复，影响面广）
2. 并行评估 #459 的引擎切换逻辑与错误处理边界
3. 考虑为两项 PR 添加 `breaking-change` 或 `enhancement` 标签以便版本日志生成

---

*日报生成时间：2026-03-28 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*