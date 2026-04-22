# AI CLI 工具社区动态日报 2026-04-22

> 生成时间: 2026-04-22 00:13 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 | 2026-04-22

---

## 1. 生态全景

当前 AI CLI 工具生态正经历从**单模型客户端**向**多 Agent 编排平台**的关键跃迁。Claude Code、OpenAI Codex、Kimi Code 等头部工具密集推进子代理架构与 MCP 生态标准化，ACP 协议成为 IDE 集成的共识接口；与此同时，**计费透明度、模型版本可控性、长会话稳定性**成为跨越工具边界的共性痛点，社区对"生产级可靠性"的诉求已超越功能创新本身。国产工具（Kimi Code、Qwen Code）加速追赶，但在认证体系、国际化模型兼容性上仍存基础设施债务。

---

## 2. 各工具活跃度对比

| 工具 | 今日新增 Issues | 今日活跃 PR | 版本发布 | 核心动态 |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | ~10 个重点 | 4 个 | v2.1.117 | Fork Subagent 开放、MCP 主线程加载；#16157 速率限制争议 1452 评论 |
| **OpenAI Codex** | ~8 个重点 | 10+ 个 | rust-v0.123.0-alpha.2~α7 | bolinfest 13 PR 完成 PermissionProfile 重构；密集 alpha 迭代 |
| **Gemini CLI** | ~6 个重点 | 10 个 | v0.39.0-preview.1 | 紧急修复嵌套计划目录；启动加速、Shell RC 文件等性能 PR 密集 |
| **GitHub Copilot CLI** | ~5 个重点 | 2 个 | v1.0.35-0/1/2 | ACP 协议落地；Opus 模型可用性集群投诉；HTTP Hook 企业集成 |
| **Kimi Code** | **25 个** | **13 个** | — | 终端挂死+MCP 泄漏修复；K2.5/2.6 模型策略争议；Hook 系统扩展 |
| **OpenCode** | ~10 个重点 | 10+ 个 | v1.14.20 | Anthropic 协议变更紧急适配；Kimi K2.6 集成；Effect Schema 迁移 |
| **Pi** | **50 个**活跃 | 10 个 | v0.68.0 | 版本引发 Bedrock/兼容性回归集群；@mention 扩展 API 新增 |
| **Qwen Code** | **5+ 401 集群** | 10 个 | v0.15.0-preview.1 | 认证故障爆发；Python SDK、GLM 搜索国产兼容；ACP Hooks |

> **活跃度排序**：Pi（50 Issues）> Kimi Code（25 Issues）> OpenCode/Qwen Code/Gemini CLI（10+ PR）> Claude Code/OpenAI Codix（架构级重构）> Copilot CLI（版本迭代）

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|:---|:---|:---|
| **🔒 权限与沙盒精细化** | Codex、Claude Code、Gemini CLI、Kimi Code | Codex PermissionProfile 重构；Claude Code 子代理写入限制；Gemini 递归命令验证；Kimi PreToolUse hooks |
| **🤖 子代理/多 Agent 架构** | Claude Code、Qwen Code、Gemini CLI、Kimi Code | Claude Fork Subagent 开放；Qwen #2409 对标 Claude；Gemini 子 Agent 中断标记问题；Kimi OAuth 子代理 401 |
| **⚡ 性能与资源管控** | Claude Code、Codex、Gemini CLI、Kimi Code、Pi | Claude 缓存命中率暴跌 41-99pp；Codex token 燃烧/CPU 120%+；Gemini 全项目扫描；Kimi 终端挂死；Pi PTY 并行阻塞 |
| **🔌 MCP 生态稳定性** | Claude Code、Codex、Kimi Code、OpenCode | Claude MCP 主线程化；Codex 15h/492 孤儿进程；Kimi 连接泄漏；OpenCode tool result 丢失 |
| **🪟 Windows 兼容性** | Codex、Gemini CLI、Kimi Code、OpenCode、Copilot CLI | Codex TUI 输入延迟；Gemini 路径解析/A:驱动器；Kimi `/login` 报错；OpenCode 动态导入修复；Copilot 渲染卡顿 |
| **📊 计费/配额透明度** | Claude Code、Codex、Copilot CLI | Claude Max 订阅"名不副实"；Codex Business token 异常；Copilot Opus 无预警撤回 |
| **🧠 模型版本可控性** | Claude Code、Copilot CLI、Kimi Code | Claude Opus 4.6 移除争议；Copilot Opus 4.5/4.6 可用性集群；Kimi K2.5 保留诉求 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|:---|:---|:---|:---|
| **Claude Code** | 复杂工程任务、多 Agent 并行、深度 IDE 集成 | 专业开发者、企业工程团队 | 闭源核心 + 渐进开放（Fork Subagent）；MCP 原生；提示缓存经济性卖点 |
| **OpenAI Codex** | 企业级沙盒安全、多云部署、Daemon 长期运行 | 大型企业、合规敏感场景 | Rust CLI 重写；PermissionProfile 统一权限；AWS SigV4 原生；Agent 身份隔离 |
| **Gemini CLI** | 启动性能、Google 生态整合、AST 感知代码分析 | Google Cloud 用户、性能敏感开发者 | 异步化架构；`codebase_investigator` 深度分析；实验配置驱动 |
| **GitHub Copilot CLI** | IDE 无缝集成、GitHub 工作流原生、ACP 标准化 | VS Code/Copilot 现有用户、团队开发者 | ACP "AI 代理的 LSP"；HTTP Hook 无服务器集成；自动降级容错 |
| **Kimi Code** | 终端体验创新、Hook 扩展生态、国产模型优先 | 中国开发者、终端重度用户 | 可视化进度条、语音输入；rtk 集成降 token 60-90%；RalphFlow 临时上下文 |
| **OpenCode** | 多模型编排、插件生态、跨平台桌面体验 | 多模型切换用户、插件开发者 | Effect Schema 类型安全；Plugin SDK v2；持久化 PTY 会话；TUI 双端（桌面/移动） |
| **Pi** | 本地/开源模型友好、扩展可组合性、配置即代码 | 自托管用户、隐私敏感开发者、扩展作者 | TypeBox 验证层；XML 工具调用兼容；`@mention` 扩展标准；settings.json 路径展开 |
| **Qwen Code** | 国产生态整合、Python SDK、子 Agent 可控性 | 中国开发者、阿里云用户、程序化集成 | ACP Hooks 完整支持；GLM/字节搜索兼容；Worker Threads 大仓库优化；粘性 Todo 面板 |

---

## 5. 社区热度与成熟度

### 🔥 高热度·快速迭代期

| 工具 | 指标 | 特征 |
|:---|:---|:---|
| **Kimi Code** | 25 Issues/13 PR/24h | 终端体验创新激进，Hook 生态开放，但认证架构、Windows 兼容性债务明显 |
| **Pi** | 50 活跃 Issues/版本回归集群 | 扩展 API 迭代活跃，v0.68.0 改动激进引发兼容性断裂，处于"功能爆发-稳定性阵痛"期 |
| **OpenCode** | 10+ PR/Effect Schema 迁移 | 架构现代化投入大，多模型适配响应极快（Kimi K2.6 快速落地），TUI 稳定性待巩固 |

### ⚙️ 架构深耕期

| 工具 | 指标 | 特征 |
|:---|:---|:---|
| **OpenAI Codex** | 13 PR 权限重构链/6 alpha 版本 | bolinfest 主导的 PermissionProfile 迁移显示工程成熟度，但 token 成本、性能退化未解 |
| **Claude Code** | 年度级争议 #16157/1452 评论 | 功能开放度提升（Fork Subagent）与商业控制（速率限制不透明）张力尖锐，社区信任承压 |

### 🏢 企业稳定期

| 工具 | 指标 | 特征 |
|:---|:---|:---|
| **GitHub Copilot CLI** | 3 版本/ACP 落地 | 协议标准化领先，但模型可用性"契约不确定性"侵蚀企业信任 |
| **Gemini CLI** | 紧急补丁/性能 PR 密集 | Google 基础设施优势，但 58% maintainer-only Issue 显示社区可见度有限 |

### 🌱 生态构建期

| 工具 | 指标 | 特征 |
|:---|:---|:---|
| **Qwen Code** | 401 集群/Python SDK PR | 国产替代诉求强烈，认证体系脆弱，SDK 和搜索去中心化是关键破局点 |

---

## 6. 值得关注的趋势信号

| 信号 | 数据支撑 | 开发者参考价值 |
|:---|:---|:---|
| **"模型锁定"成为刚需** | Claude #49689（66👍）、Kimi #1925（K2.5 保留诉求）、Copilot #2873/#2867（Opus 撤回集群） | 生产环境需评估工具的**模型版本策略**——强制升级 vs. 长期支持（LTS），避免工作流被单点模型更新打断 |
| **ACP/MCP 协议分层固化** | Copilot #222 ACP 关闭、Claude MCP 主线程化、Qwen ACP Hooks、Kimi #1957 ACP 修复 | 扩展开发应优先适配 ACP（IDE 集成）和 MCP（工具生态），协议兼容性将成为工具选型硬指标 |
| **"去中心化"三重诉求** | Qwen #3496 搜索去阿里化、#3464 模型去单一化、#2427 配置去繁琐化；Pi #3514 配置可移植 | 中国开发者特别关注**国产替代路径**；全球开发者关注**提供商抽象层**设计，避免单云锁定 |
| **终端交互成为体验分水岭** | Kimi #1972 进度条、Pi #3492 图片宽度配置、OpenCode #21343 防滚动回弹、Gemini #25712 Shell RC | TUI 细节（渲染性能、可定制性、Unix 语义正确性）从"锦上添花"变为"留存关键"，终端原生感是差异化核心 |
| **资源泄漏的隐蔽成本** | Codex #18881（492 孤儿进程）、Kimi #1984（MCP 连接泄漏）、Claude #51760（4.86 TB 写入） | 长期会话/自动化场景需内置**资源预算机制**（cgroup/Job Object/输出上限），当前各工具防护普遍缺失 |
| **Hook/插件架构从"装饰"到"生产依赖"** | Kimi #1963 rtk 集成降 token 60-90%、OpenCode #12042 SDK v2、Pi #3517 @mention 扩展 | 工具选型需评估**扩展点的完备性**——PreToolUse、命令重写、程序式工具调用等能力决定生态上限 |

---

> **决策建议**：若追求**工程深度与多 Agent 能力**，Claude Code 仍领先但需承受商业策略不确定性；若重视**企业合规与权限精细控制**，Codex 的 PermissionProfile 重构值得跟踪；若需**国产生态与终端创新**，Kimi Code 迭代最快但基础设施待加固；若看重**多模型自由与插件扩展**，OpenCode 的架构现代化投入最具开放性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-04-22）

---

## 1. 热门 Skills 排行（按社区关注度）

| 排名 | Skill | 功能概述 | 状态 | 讨论焦点 |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | AI 生成文档的排版质量控制：修复孤行、寡行、编号错位等排版问题 | 🟡 Open | 被视为"每个 Claude 文档都需要的底层能力"，解决 AI 生成内容的最后一公里体验 |
| 2 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument 格式（.odt/.ods）的创建、模板填充与 ODT→HTML 转换 | 🟡 Open | 企业/政府开源文档标准合规需求强烈，填补 LibreOffice 生态空白 |
| 3 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 元技能：对 Skill 本身进行五维质量评估与安全审计 | 🟡 Open | **Meta-Skill 范式**：社区首次系统性关注 Skill 的工程质量与供应链安全 |
| 4 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 全栈测试指南：Testing Trophy、AAA 模式、React 组件测试、E2E | 🟡 Open | 测试策略分层与"测什么/不测什么"的决策框架 |
| 5 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 前端设计技能的重构：提升指令可执行性与单轮对话内完成度 | 🟡 Open | Skill 的"可操作性"设计哲学——避免过度抽象，确保 Claude 能真正执行 |
| 6 | **[sensory](https://github.com/anthropics/skills/pull/806)** | macOS 原生自动化：AppleScript/osascript 替代截图式 Computer Use | 🟡 Open | **权限分层设计**（Tier1/Tier2）引发讨论，探索非视觉 UI 自动化的安全边界 |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 跨对话持久化记忆系统，主动上下文召回 | 🟡 Open | Agent 长期记忆架构：何时召回、如何结构化、记忆衰减策略 |
| 8 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 代码库清理审计：孤儿代码、未使用文件、文档缺口、基础设施膨胀 | 🟡 Open | 技术债务的系统性治理，输出 CODEBASE-STATUS.md 作为单一事实来源 |

---

## 2. 社区需求趋势（从 Issues 提炼）

| 方向 | 代表 Issue | 需求强度 | 核心诉求 |
|:---|:---|:---|:---|
| **企业级 Skill 治理** | [#228](https://github.com/anthropics/skills/issues/228) 组织级共享、[#492](https://github.com/anthropics/skills/issues/492) 命名空间安全 | 🔥🔥🔥🔥🔥 | 从个人工具 → 团队协作：共享库、权限管控、信任边界（`anthropic/` 命名空间滥用风险） |
| **Skill 工程化标准** | [#202](https://github.com/anthropics/skills/issues/202) skill-creator 最佳实践、[#556](https://github.com/anthropics/skills/issues/556) 评估工具失效 | 🔥🔥🔥🔥🔥 | 技能本身的可维护性：token 效率、触发率评估、YAML 健壮性、描述优化闭环 |
| **MCP 协议互通** | [#16](https://github.com/anthropics/skills/issues/16) | 🔥🔥🔥🔥 | Skills ↔ MCP 双向转换：将 Skill 封装为标准 API，或让 MCP 成为 Skill 的底层协议 |
| **多云/多平台部署** | [#29](https://github.com/anthropics/skills/issues/29) Bedrock 兼容 | 🔥🔥🔥🔥 | 脱离 Claude Code 原生环境，AWS/Azure/私有云可运行 |
| **文档格式全覆盖** | [#514](https://github.com/anthropics/skills/pull/514) 排版、[#486](https://github.com/anthropics/skills/pull/486) ODT、[#622](https://github.com/anthropics/skills/pull/622) HADS | 🔥🔥🔥🔥 | 企业文档工作流的最后一公里：从生成到出版级输出 |
| **Agent 安全与记忆** | [#412](https://github.com/anthropics/skills/issues/412) Agent 治理、[#154](https://github.com/anthropics/skills/pull/154) 持久记忆 | 🔥🔥🔥🔥 | AI Agent 系统的策略执行、威胁检测、审计追踪、长期记忆管理 |

---

## 3. 高潜力待合并 Skills（评论活跃 + 解决明确痛点）

| Skill | PR | 合并潜力 | 关键价值 |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | 通用基础设施级 Skill，影响所有文档输出；零配置接入 |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐⭐ | 政府/欧盟/开源合规刚需；与现有 docx/pdf skill 形成格式矩阵 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ | 测试策略的" opinionated 指南"，填补代码生成后质量保障空白 |
| **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐☆ | macOS 自动化新范式：从视觉 → 原生 API；权限模型可复用至其他平台 |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐⭐☆ | 生态自举能力：让社区能自我审查 Skill 质量，降低维护者负担 |
| **hads-convert** | [#622](https://github.com/anthropics/skills/pull/622) | ⭐⭐⭐⭐☆ | 文档格式中间件：一次性转换成本 → 永久性 AI 阅读效率提升 |

> **近期修复集群**：Lubrsy706 连续提交 [#538](https://github.com/anthropics/skills/pull/538) [#539](https://github.com/anthropics/skills/pull/539) [#541](https://github.com/anthropics/skills/pull/541) 修复 PDF/DOCX/skill-creator 的边界情况，显示核心文档技能进入**稳定性打磨期**。

---

## 4. Skills 生态洞察

> **社区正从"功能堆砌"转向"工程化治理"**：早期 PR 聚焦单一工具能力（生成图片、连接 SAP），而 2026 Q1-Q2 的热点集中在 **Skill 的 Skill（元技能）**、**跨平台互通标准**、**企业级安全与共享机制**、以及 **AI 输出质量的最后一公里打磨**——这标志着 Claude Code Skills 生态从 Demo 阶段进入生产就绪阶段。

---

---

# Claude Code 社区动态日报 | 2026-04-22

## 今日速览

今日社区核心矛盾聚焦于**订阅层级的使用限制争议**——Max 订阅用户持续报告遭遇不合理的速率限制（#16157 已达 1452 评论），同时 v2.1.117 发布带来 Fork Subagent 外部构建支持与 MCP Servers 主线程加载能力，显示 Anthropic 正加速多 Agent 架构的开放化。

---

## 版本发布

### [v2.1.117](https://github.com/anthropics/claude-code/releases/tag/v2.1.117)

| 更新项 | 说明 |
|--------|------|
| **Fork Subagent 外部构建支持** | 通过 `CLAUDE_CODE_FORK_SUBAGENT=1` 环境变量，外部构建可启用 Fork 子代理，打破此前仅内部构建可用的限制 |
| **MCP Servers 主线程加载** | Agent frontmatter 中的 `mcpServers` 现可通过 `--agent` 参数在主线程 Agent 会话中加载，简化工具链配置 |
| **`/model` 持久化改进** | 模型选择现可跨重启保留，即使项目固定了默认模型 |

> **技术解读**：Fork Subagent 的开放是工程化关键一步，意味着第三方 CI/CD 和自定义构建流程可复用 Claude Code 的多 Agent 并行能力；MCP Servers 主线程化则降低了工具调用的进程开销。

---

## 社区热点 Issues

| # | 状态 | 标题 | 评论 | 👍 | 核心看点 |
|---|------|------|------|-----|---------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | 🔴 OPEN | **[BUG] Instantly hitting usage limits with Max subscription** | 1452 | 681 | **年度级争议**。Max 付费用户报告几乎立即触发用量限制，涉及成本计费与 API 策略的透明度问题。社区情绪激烈，要求 Anthropic 明确各层级实际配额。 |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | 🟢 CLOSED | **[MODEL] Claude Code is unusable for complex engineering tasks with the Feb updates** | 565 | 2048 | **高赞关闭**。2048 👍 反映广泛共鸣——2 月模型更新后复杂工程任务质量下滑。关闭状态引发"是否真正解决"的质疑。 |
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | 🔴 OPEN | **[BUG] API Error: Stream idle timeout - partial response received** | 108 | 97 | **高频基础设施故障**。macOS 平台流式响应超时，与 #47841（Web 端同类问题）形成跨平台模式，指向 Anthropic API 网关稳定性。 |
| [#3471](https://github.com/anthropics/claude-code/issues/3471) | 🔴 OPEN | **[BUG] Too many edit file errors** | 54 | 34 | **工具可靠性顽疾**。文件编辑工具频繁报错影响核心工作流，自 2025-07 持续至今，反映工具调用层的鲁棒性债务。 |
| [#49322](https://github.com/anthropics/claude-code/issues/49322) | 🔴 OPEN | **[BUG] Opus 4.7 thinking summaries not rendered in VS Code extension** | 18 | 17 | **IDE 集成滞后**。新模型思考摘要未在 VS Code 扩展渲染，暴露 CLI 与 IDE 插件的功能 parity 差距。 |
| [#49689](https://github.com/anthropics/claude-code/issues/49689) | 🟢 CLOSED | **[BUG] Opus 4.6 removed from model picker after 4.7 release** | 13 | 66 | **模型版本管理混乱**。Opus 4.7 发布后 4.6 被移除，66 👍 显示用户对模型选择权的强烈需求，关闭但未说明是否恢复。 |
| [#44657](https://github.com/anthropics/claude-code/issues/44657) | 🔴 OPEN | **[BUG] Subagent Write tool rejects .md files named "report"/"summary"/"findings"/"analysis"** | 4 | 8 | **Agent 工作流限制**。子代理写入特定命名 .md 文件被硬编码拦截，无 opt-out，阻碍自动化报告生成场景。 |
| [#46834](https://github.com/anthropics/claude-code/issues/46834) | 🔴 OPEN | **TUI relayouts spill entire transcript into scrollback** | 4 | 5 | **终端体验缺陷**。SIGWINCH/权限模式切换导致完整对话历史重复刷入滚动缓冲区，长会话可用性崩溃。 |
| [#51764](https://github.com/anthropics/claude-code/issues/51764) | 🔴 OPEN | **`--continue`/`--resume` cache invalidation still reproduces on v2.1.116** | 1 | 0 | **缓存机制回归**。TTL 对照实验证明会话恢复导致提示缓存命中率暴跌 41-99pp，成本优化承诺未兑现。 |
| [#51760](https://github.com/anthropics/claude-code/issues/51760) | 🔴 OPEN | **Background bash children survive session close; 4.86 TB runaway** | 1 | 0 | **资源泄漏严重**。Windows 后台 bash 进程会话结束后持续写入 2 小时 40 分钟，产生 4.86 TB 文件，缺乏输出大小限制机制。 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 作者 | 核心内容 |
|---|------|------|------|---------|
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | 🔵 OPEN | **add the missing source to claude code** | [tornikeo](https://github.com/tornikeo) | 补充缺失源码——Claude Code 部分组件仍为闭源，社区持续呼吁完整开源 |
| [#51452](https://github.com/anthropics/claude-code/pull/51452) | 🔵 OPEN | **Update README.md** | [Ewanjohndennis](https://github.com/Ewanjohndennis) | 重写 README：消除 AI 生成痕迹（填充短语、促销语言），精简安装区块，修复 npm badge |
| [#51451](https://github.com/anthropics/claude-code/pull/51451) | 🔵 OPEN | **Revise security policy and reporting guidelines** | [Ewanjohndennis](https://github.com/Ewanjohndennis) | 安全策略重构：强制 HackerOne 唯一报告渠道，明确 out-of-scope 边界 |
| [#51395](https://github.com/anthropics/claude-code/pull/51395) | 🔵 OPEN | **Claude/arrowhead gps logging pe arx** | [j7f7vr5997-netizen](https://github.com/j7f7vr5997-netizen) | 内容不明确，疑似 GPS 日志相关实验性提交 |

> **PR 生态观察**：今日仅 4 个活跃 PR，且多为文档层更新。核心功能 PR 缺失反映外部贡献者受限于源码开放程度（#41611 直接指向此问题）。Anthropic 需权衡商业控制与社区共建的平衡。

---

## 功能需求趋势

基于 50 个活跃 Issue 的聚类分析：

```
┌─────────────────────────────────────────────────────────┐
│  🔥 计费透明度与用量限制 (Cost/Quota)    ████████████  高 │
│     #16157 #51757 #37944 — 付费层信任危机                │
│                                                         │
│  🔥 模型质量与版本管理 (Model Quality)    ██████████░░  高 │
│     #42796 #49689 #49322 — 更新稳定性与选择权            │
│                                                         │
│  🟡 API/流式稳定性 (Infrastructure)       ████████░░░░  中 │
│     #46987 #47841 #51756 — 超时与连接中断                │
│                                                         │
│  🟡 终端/TUI 体验 (Terminal UX)           ██████░░░░░░  中 │
│     #46834 #48825 #25366 #44479 — 渲染与可定制性         │
│                                                         │
│  🟢 Agent/Subagent 工作流 (Multi-Agent)   █████░░░░░░░  中 │
│     #44657 #51764 — 工具限制与缓存优化                   │
│                                                         │
│  🟢 IDE 集成深度 (IDE Integration)        ████░░░░░░░░  低 │
│     #49322 #38006 — VS Code 功能追赶                   │
│                                                         │
│  🔵 企业/桌面特性 (Desktop/Enterprise)    ███░░░░░░░░░  低 │
│     #42776 #39336 #51759 — Windows 稳定性与 Dispatch    │
└─────────────────────────────────────────────────────────┘
```

---

## 开发者关注点

### 痛点矩阵

| 优先级 | 痛点 | 典型 Issue | 影响面 |
|:------:|------|-----------|--------|
| **P0** | **付费层级"名不副实"** | #16157 | Max 订阅者核心工作流中断，社区出现"降级建议"声浪 |
| **P0** | **模型更新回退风险** | #42796 #49689 | 生产环境依赖特定模型版本，强制升级策略缺乏缓冲 |
| **P1** | **提示缓存承诺未兑现** | #51764 | 直接推高 API 成本，影响 Claude Code 的经济性卖点 |
| **P1** | **跨平台稳定性差异** | #51760 #42776 #39336 | Windows 体验明显滞后于 macOS，企业采用受阻 |
| **P2** | **Agent 可观测性不足** | #51713 #44657 | MCP 工具调用折叠、子代理输出限制，调试困难 |
| **P2** | **思考过程可视化退化** | #48825 #49322 | "thinking words"消失、摘要渲染缺失，削弱信任感 |

### 高频需求信号

- **模型锁定能力**：#49689 关闭后，用户明确要求保留旧版本模型选项
- **用量配额实时仪表盘**：#16157 衍生需求——当前限制提示过于模糊
- **会话级资源隔离**：#51760 暴露后台进程失控，需 cgroup/Job Object 级约束
- **LaTeX/富文本终端渲染**：#44479 虽小众但代表学术/工程用户的专业场景

---

*日报基于 GitHub 公开数据生成，不代表 Anthropic 官方立场。数据截止 2026-04-22 00:00 UTC。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-04-22

## 今日速览

今日 Codex 社区核心动态聚焦于 **权限系统架构重构**——bolinfest 连续提交 12 个 PR 将沙盒策略从遗留的 `SandboxPolicy` 迁移至统一的 `PermissionProfile` 体系，覆盖协议层、app-server、TUI 到执行服务器全链路。同时，Rust CLI 侧迎来密集的 alpha 预发布迭代（v0.123.0-alpha.2 至 alpha.7），为即将到来的正式版本铺路。

---

## 版本发布

| 版本 | 说明 |
|:---|:---|
| `rust-v0.123.0-alpha.2` ~ `alpha.7` | 过去 24 小时内连续发布 6 个 Rust CLI alpha 版本，迭代频率极高，表明 v0.123.0 正式版进入最后冲刺阶段。目前发布说明较为简略，建议关注后续正式版变更日志。 |

> 🔗 发布页：https://github.com/openai/codex/releases

---

## 社区热点 Issues

| # | 标题 | 状态 | 关键数据 | 重要性分析 |
|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** | 🔴 OPEN | 555 评论 / 234 👍 | **社区最热议题**。Business 订阅用户反馈 token 消耗异常加速，持续 1 个多月未获根本解决，直接影响企业用户成本控制，评论数断层领先。 |
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Codex Desktop App | 🔴 OPEN | 148 评论 / 580 👍 | **点赞数最高的功能请求**。用户强烈呼吁桌面应用支持远程开发（对标 VS Code Remote-SSH），是 IDE 迁移的核心阻碍。 |
| [#11678](https://github.com/openai/codex/issues/11678) | CLI 0.100+ Windows TUI 输入严重延迟 | 🔴 OPEN | 17 评论 | 回归性 bug，影响 Windows 开发者基础体验，长期未修复导致用户流失风险。 |
| [#18755](https://github.com/openai/codex/issues/18755) | macOS 打包错误：SkyComputerUseClient 仅支持 macOS 15.0 | 🔴 OPEN | 8 评论 / 15 👍 | **兼容性阻断**。新版技能系统在 macOS 14.x 崩溃，阻碍企业用户升级，涉及 Apple 框架版本绑定策略。 |
| [#18463](https://github.com/openai/codex/issues/18463) | **[critical] CPU 占用率持续 120%+** | 🔴 OPEN | 8 评论 | 标记为 critical 的性能灾难，仅打开/重开应用即触发，渲染进程失控，严重影响可用性。 |
| [#17257](https://github.com/openai/codex/issues/17257) | Codex 5.4 Extra High 内存泄漏 | 🔴 OPEN | 6 评论 / 8 👍 | 高吞吐量场景下内存异常增长，Pro 用户生产环境受影响，模型版本与资源管理的耦合问题。 |
| [#18881](https://github.com/openai/codex/issues/18881) | MCP 子进程泄漏：15 小时 492 个孤儿进程 | 🔴 OPEN | 3 评论 | **稳定性隐患**。`--dangerously-bypass-approvals-and-sandbox` 守护进程长期运行后 MCP 连接管理器替换导致子进程泄漏，Daemon 模式可靠性受质疑。 |
| [#15298](https://github.com/openai/codex/issues/15298) | `default.rules` 沙盒逃逸命令未被遵守 | 🔴 OPEN | 6 评论 / 6 👍 | 权限系统与规则配置的冲突案例，恰好与今日 PermissionProfile 重构形成对照，反映遗留系统的复杂性。 |
| [#18247](https://github.com/openai/codex/issues/18247) | Automations With Full Permissions | 🔴 OPEN | 7 评论 | 用户明确请求"不负责任"的完全权限自动化，反映沙盒策略与高级用户灵活性之间的张力。 |
| [#14339](https://github.com/openai/codex/issues/14339) | Clear context before implementing plan | 🟢 CLOSED | 13 评论 / 22 👍 | 已关闭的增强请求，对标 Copilot/Claude Code 的"计划后清除上下文"工作流，体现多工具竞争下的功能对齐压力。 |

---

## 重要 PR 进展

| # | 标题 | 作者 | 核心内容 |
|:---|:---|:---|:---|
| [#18745](https://github.com/openai/codex/pull/18745) | Add sticky thread environment selections | starr-openai | **线程级环境粘性选择**：实验性支持为线程配置持久化的环境选择，贯穿 app-server 线程创建到 `SessionConfiguration`，解决多环境切换的上下文丢失问题。 |
| [#18416](https://github.com/openai/codex/pull/18416) | Add turn-scoped environment selections | starr-openai | **轮次级环境覆盖**：在 `turn/start` 层面支持 per-turn 的 environment id + cwd 选择，与 #18745 形成"线程默认 + 轮次覆盖"的分层环境模型。 |
| [#18871](https://github.com/openai/codex/pull/18871) | refactor: add agent identity crate | efrazer-oai | **Agent 身份隔离**：新增 `codex-agent-identity` crate，封装断言构造、任务注册、私钥签名等身份逻辑，为分布式 Agent 架构奠基。 |
| [#17820](https://github.com/openai/codex/pull/17820) | feat: add AWS SigV4 auth for OpenAI-compatible providers | celia-oai | **AWS Bedrock 原生支持**：为 Amazon Bedrock Mantle 等 AWS 托管端点添加 SigV4 认证，保留 Responses API 传输层，企业多云部署的关键路径。 |
| [#18867](https://github.com/openai/codex/pull/18867) | sandboxing: materialize cwd-relative permission globs | bolinfest | **权限路径锚定修复**：解决 `:cwd` 和 `:project_roots` 的相对拒绝 glob 在会话复用时被错误重解释的问题，安全边界精确化。 |
| [#18277](https://github.com/openai/codex/pull/18277) | core: derive active permission profiles | bolinfest | **权限推导核心**：`Permissions` 不再存储独立的 `PermissionProfile`，而是从约束后的 `SandboxPolicy` 和网络设置派生，消除状态漂移。 |
| [#18278](https://github.com/openai/codex/pull/18278) | app-server: expose thread permission profiles | bolinfest | **服务端权限暴露**：app-server v2 API 返回线程级 `PermissionProfile`，客户端无需再逆向解析遗留沙盒字段。 |
| [#18279](https://github.com/openai/codex/pull/18279) | app-server: accept permission profile overrides | bolinfest | **权限覆盖入口**：支持启动/恢复/分叉/覆盖轮次时传入 `PermissionProfile`，拒绝与遗留字段并存的歧义请求。 |
| [#18284](https://github.com/openai/codex/pull/18284) | tui: sync session permission profiles | bolinfest | **TUI 状态同步**：聊天组件同步 `SessionConfigured` 中的权威 `PermissionProfile`，避免配置变更后本地状态陈旧。 |
| [#18897](https://github.com/openai/codex/pull/18897) | Add sticky environment API and thread state | starr-openai | **粘性环境 API 闭环**：与 #18745 配套，完成 app-server v2 的 `thread/start` 和 `turn/start` 粘性选择持久化及测试覆盖。 |

> 📌 **bolinfest 的 PermissionProfile 迁移栈**（#18276-#18288, #18867）构成今日最大代码变动，共 13 个 PR 形成完整重构链：核心推导 → 服务端暴露 → 客户端发送 → 协议层报告 → TUI/执行层同步 → 沙盒路径修复。

---

## 功能需求趋势

基于 50 条活跃 Issue 的聚类分析：

| 趋势方向 | 代表 Issue | 热度指标 |
|:---|:---|:---|
| **🖥️ IDE/桌面端体验** | #10450 远程开发、#18299 显示 dotfiles、#18297 @搜索支持文件夹 | 580 👍 / 高互动 |
| **🔒 权限与沙盒精细化** | #18247 完全权限自动化、#16695 per-automation 沙盒覆盖、#15298 规则遵守 | 功能请求密集，与今日重构呼应 |
| **⚡ 性能与资源管控** | #14593 token 燃烧、#18463 CPU 爆炸、#17257 内存泄漏 | 555 评论，生产环境阻塞 |
| **🪟 Windows 平台适配** | #11678 TUI 延迟、#13549 WSL 配置穿透、#18861 EPERM 沙盒错误 | 平台差异化问题突出 |
| **🔌 MCP 生态稳定性** | #18881 进程泄漏、#15508 工具消失、#18233 Agent 调用混乱 | 扩展机制成熟度不足 |
| **🍎 macOS 兼容性** | #18755 版本绑定崩溃、#18341 Intel Mac 渲染异常、#18507 麦克风权限 | Apple 生态碎片化 |

---

## 开发者关注点

### 🔴 高频痛点

| 痛点 | 表现 | 影响面 |
|:---|:---|:---|
| **Token/资源成本失控** | #14593 消耗异常加速，缺乏透明计费明细 | 企业订阅用户（Business/Enterprise） |
| **性能退化常态化** | CLI TUI 输入延迟（#11678）、CPU 占满（#18463）、内存泄漏（#17257） | 全平台高频使用场景 |
| **权限系统"既严又乱"** | 沙盒规则配置复杂（#18247）、default.rules 失效（#15298）、与灵活性需求冲突 | 高级用户/自动化场景 |
| **MCP 扩展不可靠** | 进程泄漏（#18881）、会话间状态丢失（#15508）、Agent 调用退化（#18233） | 生态扩展开发者 |

### 🟡 隐性诉求

- **多云/混合云部署**：#17820 AWS SigV4 支持反映企业脱离 OpenAI 直连的需求
- **"专家模式"开关**：部分用户明确拒绝沙盒保护（#18247），要求责任自负的全权限通道
- **长期会话稳定性**：#10823 上下文压缩失败、#11267 Ctrl+C 死锁，均指向小时级/天级会话的可靠性缺口

---

> 📊 **数据说明**：本日报基于 GitHub `openai/codex` 仓库 2026-04-21 至 2026-04-22 UTC 的公开活动数据。Issue/PR 筛选优先参考评论数、点赞数及 `[critical]` 等标记。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-04-22

---

## 1. 今日速览

今日社区聚焦 **v0.39.0-preview.1** 紧急补丁发布，修复嵌套计划目录重复问题；同时多个核心性能优化 PR 进入评审阶段，包括启动加速异步化、Shell 工具 RC 文件支持等。开发者对**过度项目扫描导致的性能瓶颈**和 **macOS PTY 设备耗尽**等稳定性问题反馈强烈。

---

## 2. 版本发布

### v0.39.0-preview.1
| 属性 | 内容 |
|:---|:---|
| 发布类型 | 紧急补丁 (cherry-pick) |
| 修复来源 | PR #25138 ([`a4e98c0`](https://github.com/google-gemini/gemini-cli/pull/25138)) |
| 核心修复 | 嵌套计划目录路径重复解析、相对路径安全策略合规 |

**更新内容**：该补丁修复了 `resolveAndValidatePlanPath` 引入后，嵌套计划文件中绝对路径与相对路径解析导致的目录重复创建问题，并确保 Agent 输出相对路径以符合自定义安全策略。

> 🔗 [Release 页面](https://github.com/google-gemini/gemini-cli/releases) | [补丁 PR #25766](https://github.com/google-gemini/gemini-cli/pull/25766)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 核心问题与社区反应 |
|:---|:---|:---|:---|:---|
| **#25672** | [过度项目级扫描导致简单代码补丁失败](https://github.com/google-gemini/gemini-cli/issues/25672) | 🔴 待分类 | 6 | **性能痛点**：Go 文件小补丁触发全项目扫描+标准库加载+cgo+vuln 检查，6 条讨论集中呼吁**增量分析**或**作用域限定**机制 |
| **#25583** | [macOS YOLO 模式 PTY 主设备耗尽 (ENXIO)](https://github.com/google-gemini/gemini-cli/issues/25583) | 🔒 维护者 | 5 | **稳定性危机**：长期运行后耗尽系统 511 个 PTY 上限，导致**全系统无法新建终端**，社区关注资源泄漏根因 |
| **#22745** | [AST 感知文件读写/搜索/映射评估](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔒 维护者 | 5 | **架构演进**：EPIC 级调研，探索用 AST 工具精准读取方法边界、减少 token 噪音，可能替代现有 `codebase_investigator` |
| **#22323** | [子 Agent MAX_TURNS 中断被报告为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | 🔒 P1 | 3 | **可靠性缺陷**：`codebase_investigator` 达到轮次上限却返回 success，**隐藏中断导致决策失误**，获 2 👍 |
| **#24916** | [同文件权限重复询问](https://github.com/google-gemini/gemini-cli/issues/24916) | 开放 | 3 | **UX 缺陷**："允许所有未来会话"设置间歇性失效，权限状态持久化逻辑存疑 |
| **#25166** | [Shell 命令完成后 stuck 在"等待输入"](https://github.com/google-gemini/gemini-cli/issues/25166) | 🔒 维护者 | 2 | **高频阻塞**：简单命令执行后假死，获 3 👍，影响核心交互循环 |
| **#23571** | [模型随机位置创建临时脚本](https://github.com/google-gemini/gemini-cli/issues/23571) | 🔒 维护者 | 2 | **工作区污染**：限制 shell 执行后模型四处散落编辑脚本，清理成本高 |
| **#22267** | [Browser Agent 忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267) | 🔒 维护者 | 2 | **配置失效**：`maxTurns` 等全局/项目级配置被 Browser Agent 完全跳过，初始化合并逻辑有漏洞 |
| **#22819** | [记忆路由：全局 vs 项目级分离](https://github.com/google-gemini/gemini-cli/issues/22819) | 🔒 维护者 | 1 | **个性化基础设施**：定义用户级偏好（`~/.gemini/`）与代码库特定记忆（`.gemini/`）的分层存储策略，获 2 👍 |
| **#25216** | [临时路径 A:\ 打开失败 (EISDIR)](https://github.com/google-gemini/gemini-cli/issues/25216) | 开放 | 1 | **Windows 兼容性**：PowerShell 中 `realpath('A:\a')` 抛出非法目录操作，路径解析逻辑未处理 Windows 驱动器根 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 功能/修复内容 | 影响评估 |
|:---|:---|:---|:---|:---|
| **#25712** | [Shell 工具 RC 文件支持 + PAGER=cat 强制设置](https://github.com/google-gemini/gemini-cli/pull/25712) | 🟡 开放 | 新增 `shellToolRcFile` 设置；无 RC 时强制 `PAGER=cat` 防止 `more`/`less` 挂起 | **交互稳定性**：解决管道命令阻塞顽疾 |
| **#25775** | [`/note` 命令：工作区笔记快速捕获](https://github.com/google-gemini/gemini-cli/pull/25775) | 🟡 开放 | `/note <text>` 追加时间戳笔记至 `notes.md`；`/note view` 查看 | **生产力增强**：原生支持上下文笔记，减少外部工具切换 |
| **#25758** | [启动加速：异步获取实验配置与配额](https://github.com/google-gemini/gemini-cli/pull/25758) | 🔒 评审中 | `refreshAuth` 阶段网络请求异步化，消除同步等待瓶颈 | **性能关键**：直接回应 #25672 类性能投诉 |
| **#25409** | [接入新 ContextManager 与 AgentChatHistory](https://github.com/google-gemini/gemini-cli/pull/25409) | 🟡 开放 | 架构升级：替换上下文管理实现，修复 #25408 | **架构债务**：为长期 Agent 状态管理奠基 |
| **#25426** | [CI 提速：16 核测试 + 制品中心流水线](https://github.com/google-gemini/gemini-cli/pull/25426) | 🔒 评审中 | 复用预构建制品、现代化测试基础设施解锁 16 核并行 | **工程效率**：缩短 PR 反馈周期 |
| **#25769** | [Windows Shell 跨平台运算符兼容](https://github.com/google-gemini/gemini-cli/pull/25769) | 🟡 开放 | `&&`/`||`/`/dev/null` 映射至 PowerShell/CMD 等价语法 | **Windows 体验**：弥合 Unix/Windows 命令鸿沟 |
| **#25770** | [A2A 设置深度合并](https://github.com/google-gemini/gemini-cli/pull/25770) | 🟡 开放 | 修复浅拷贝导致嵌套配置（`fileFiltering`、`tools`）被覆盖 | **配置可靠性**：解决 #25747 配置丢失问题 |
| **#25720** | [Shell 命令递归验证 + 核心工具白名单](https://github.com/google-gemini/gemini-cli/pull/25720) | 🟡 开放 | 策略引擎支持子命令/替换/子 Shell 递归检查；新增 `tools.core` 精确白名单 | **安全加固**：应对复杂命令注入场景 |
| **#25765** | [工具响应 1:1 部件计数修复](https://github.com/google-gemini/gemini-cli/pull/25765) | 🟡 开放 | 严格对齐 tool call 与 function response 数量，修复多模态 400 错误 | **API 稳定性**：解决 Gemini 模型交互协议违规 |
| **#24270** | [实验性 `/btw` 侧边查询](https://github.com/google-gemini/gemini-cli/pull/24270) | 🟡 开放 | 不修改主对话历史、不触发工具的临时 LLM 查询覆盖层 | **交互创新**："顺便问一句"场景的原生支持 |

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 的聚类分析：

| 趋势方向 | 代表 Issue | 社区诉求强度 |
|:---|:---|:---|
| **🚀 性能与启动优化** | #25672, #25758, #25166 | ⭐⭐⭐⭐⭐ |
| **🔒 Agent 可靠性与状态透明** | #22323, #23582, #24037, #22672 | ⭐⭐⭐⭐⭐ |
| **🧠 记忆与个性化基础设施** | #22819, #22809, #22745 | ⭐⭐⭐⭐☆ |
| **🪟 Windows/跨平台兼容性** | #25216, #25769, #24202, #24915 | ⭐⭐⭐⭐☆ |
| **🛡️ 权限与策略精细化** | #24916, #25720, #23571 | ⭐⭐⭐⭐☆ |
| **♿ 可访问性与渲染** | #25218, #24943, #24599, #25339 | ⭐⭐⭐☆☆ |
| **🔧 开发者体验（DX）** | #25712, #25775, #22816 | ⭐⭐⭐⭐☆ |

**关键洞察**：社区正从"功能可用"转向**性能可接受、行为可预测、状态可观测**——Agent 系统的工程成熟度成为核心竞争壁垒。

---

## 6. 开发者关注点

### 🔥 高频痛点

| 痛点 | 典型反馈 | 紧急程度 |
|:---|:---|:---|
| **扫描范围失控** | "改一行 Go 文件扫描整个标准库" — 全项目分析成为小型编辑的不可承受之重 | 🔴 P0 |
| **资源泄漏隐蔽** | macOS PTY 耗尽需运行数周才暴露，缺乏运行时监控 | 🔴 P0 |
| **假死与状态不一致** | Shell 命令完成但 UI  stuck、子 Agent 中断被标记成功 | 🟡 P1 |
| **配置系统脆弱** | settings.json 覆盖失效、权限记忆丢失、A2A 浅合并 | 🟡 P1 |

### 💡 新兴需求

- **AST 原生工具链**：开发者期待 CLI 内置代码感知能力，而非依赖外部 LSP 或盲目文本操作
- **记忆分层治理**：区分"我是怎样的开发者"与"这个项目该怎么写"的持久化策略
- **跨平台命令透明**：Windows 用户不愿学习 PowerShell 方言，期望 Unix 习惯无缝移植

### 📊 数据佐证

- **性能类 Issue 占比**：24%（12/50），评论密度最高（平均 3.2 条/Issue）
- **🔒 maintainer-only 标签占比**：58%（29/50），表明大量工作处于内部规划阶段，社区可见度有限
- **P1/P2 优先级 Issue 活跃更新**：7 条在 24 小时内有维护者活动，修复节奏加快

---

> 📌 **订阅提示**：本日报基于 `google-gemini/gemini-cli` 公开数据生成。如需跟踪特定 Issue/PR，建议设置 GitHub 通知或依赖 Release 订阅。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-04-22

## 今日速览

今日 Copilot CLI 密集发布三个版本（v1.0.35-0 至 v1.0.35-2），聚焦自动模式容错、HTTP Hook 扩展及配置灵活性提升。社区层面，**ACP 协议支持**（#222）正式落地，标志着 CLI 向"AI 代理的 LSP"标准化迈出关键一步；同时**Opus 模型可用性波动**引发多起用户投诉，成为当日最大争议点。

---

## 版本发布

### v1.0.35-2 | [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.35-2)
| 类型 | 内容 |
|:---|:---|
| **Added** | `continueOnAutoMode` 配置项：触发速率限制时自动降级至 auto 模型，而非暂停等待 |
| **Fixed** | 修复 Auto 模式切换至不支持当前 reasoning effort 的模型时崩溃的问题 |
| **Fixed** | 修复模式专属指令文件路径截断显示问题（`.github/in...`） |

### v1.0.35-1 | [Pre-release](https://github.com/github/copilot-cli/releases/tag/v1.0.35-1)
- 预发布版本，无详细变更说明

### v1.0.35-0 | [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.35-0)
| 类型 | 内容 |
|:---|:---|
| **Added** | **HTTP Hook 支持**：Hook 可 POST JSON 至配置 URL，无需本地命令执行 |
| **Improved** | `grep`/`glob` 工具支持多路径并行搜索 |
| **Fixed** | 隐藏子 Agent 思考过程，减少时间线噪音 |
| **Fixed** | 自定义 Agent 名称恢复显示于状态栏 |

> **解读**：HTTP Hook 是企业集成关键能力，支持无服务器场景下的 CI/CD 流水线回调；`continueOnAutoMode` 直接回应了近期高频的速率限制投诉。

---

## 社区热点 Issues

| # | 状态 | 标题 | 评论 | 👍 | 关键价值 |
|:---|:---|:---|:---:|:---:|:---|
| [#222](https://github.com/github/copilot-cli/issues/222) | ✅ CLOSED | **[ACP] Support for ACP (Agent Client Protocol)** | 25 | 146 | **里程碑级功能**。ACP 被誉为"AI 代理的 LSP"，标准化 IDE/编辑器与 Agent 的通信协议。146 👍 为历史最高，关闭意味着 CLI 正式具备被第三方编辑器深度集成的能力 |
| [#1161](https://github.com/github/copilot-cli/issues/1161) | ✅ CLOSED | **invalid session id** | 23 | 15 | **高流失风险信号**。用户明确提及已迁移至竞品 OpenCode.ai，反映 Opus 4.5 会话稳定性问题导致用户流失 |
| [#223](https://github.com/github/copilot-cli/issues/223) | 🔵 OPEN | **"Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens** | 21 | 65 | **企业合规刚需**。阻止组织强制使用个人 PAT，直接影响企业级采用决策 |
| [#1276](https://github.com/github/copilot-cli/issues/1276) | 🔵 OPEN | **Support pasting images from system clipboard** | 10 | 7 | **多模态体验缺口**。截图直接粘贴是调试场景高频需求，当前需先保存再上传，流程断裂 |
| [#2078](https://github.com/github/copilot-cli/issues/2078) | ✅ CLOSED | **add /btw** | 7 | 26 | **工作流效率**。`/btw`（by the way）命令在其他 CLI 工具中用于上下文切换，社区呼声高 |
| [#2661](https://github.com/github/copilot-cli/issues/2661) | 🔵 OPEN | **Error: The requested model is not supported (Opus 4.5)** | 6 | 0 | **模型可用性危机**。学生包用户突然失去 Opus 访问权限，与 #2873、#2867、#2878 形成集群投诉 |
| [#2625](https://github.com/github/copilot-cli/issues/2625) | 🔵 OPEN | **Poor rendering performance** | 4 | 3 | **性能瓶颈**。长对话时终端冻结 30-45 秒，迫使频繁清除上下文，严重破坏连续性 |
| [#2873](https://github.com/github/copilot-cli/issues/2873) | 🔵 OPEN | **Copilot Pro subscription and Opus models** | 4 | 0 | **商业信任危机**。Pro 用户突然失去 Opus 访问权，且事前无通知，引发"功能随时收回"担忧 |
| [#334](https://github.com/github/copilot-cli/issues/334) | 🔵 OPEN | **Add shell completions** | 4 | 11 | **基础体验缺失**。作为 CLI 工具，无原生补全支持，用户需依赖社区方案 |
| [#2867](https://github.com/github/copilot-cli/issues/2867) | 🔵 OPEN | **Claude Opus 4.6 (high) returns "model not supported" after quota reset** | 4 | 1 | **配额系统 Bug**。按提示等待配额重置后反而永久丢失模型访问，系统状态不一致 |

> **模型可用性集群**：今日 #2661、#2873、#2867、#2878 四 Issue 均指向 Opus 系列模型突然不可用的现象，涉及 Pro/Pro+/学生包多档订阅，疑似后端配额或授权配置变更未同步前端。

---

## 重要 PR 进展

| # | 状态 | 标题 | 功能/修复内容 |
|:---|:---|:---|:---|
| [#2887](https://github.com/github/copilot-cli/pull/2887) | 🔵 OPEN | **Add safe cleanup of older direct-install copilot binaries** | 自动清理 `install.sh` 历史残留二进制，支持 opt-out；解决多版本共存导致的 PATH 污染和磁盘浪费 |
| [#2800](https://github.com/github/copilot-cli/pull/2800) | 🔵 OPEN | **Add initial devcontainer configuration** | 提供标准化开发容器配置，降低贡献者环境搭建门槛 |

> 注：今日仅 2 个 PR 有更新，团队重心似在版本迭代与 Issue 响应。

---

## 功能需求趋势

基于 50 个活跃 Issue 的聚类分析：

| 趋势方向 | 代表 Issue | 热度指标 |
|:---|:---|:---:|
| **🤖 模型生态扩展** | #1190 (Kimi-K2.5)、#2661/#2873/#2867 (Opus 可用性) | 🔥🔥🔥🔥🔥 |
| **🏢 企业/组织级能力** | #223 (Org Token 权限)、#2711 (Azure DevOps) | 🔥🔥🔥🔥 |
| **🖼️ 多模态输入** | #1276 (剪贴板图片粘贴) | 🔥🔥🔥 |
| **⚡ 性能与稳定性** | #2625 (渲染卡顿)、#1161 (会话失效) | 🔥🔥🔥🔥 |
| **🔌 集成与扩展性** | #222 (ACP 协议)、#2753 (Plugin skills)、#2882 (MCP Sampling) | 🔥🔥🔥🔥 |
| **🎨 可定制性** | #2830 (自定义主题)、#2884 (diff 格式定制) | 🔥🔥🔥 |
| **🧠 智能工作流** | #2792 (规划/执行模型分离)、#2720 (上下文快照) | 🔥🔥🔥 |

**关键洞察**：模型可用性已从"功能请求"演变为"稳定性投诉"，成为当前最大风险点；ACP 协议的落地将开启第三方集成浪潮，Plugin/MCP 生态建设需加速跟进。

---

## 开发者关注点

### 🔴 痛点：模型访问的"契约不确定性"
> *"I do not mind the request multiplier, but to stop me using it altogether when I have had access to it for a while now"* — [#2873](https://github.com/github/copilot-cli/issues/2873)

- **现象**：Opus 系列模型对 Pro/Pro+/学生包用户出现无预警撤回
- **影响**：工作流中断、订阅价值质疑、用户向竞品迁移（[#1161](https://github.com/github/copilot-cli/issues/1161)）
- **诉求**：明确的模型-订阅映射表、变更提前通知机制、降级策略可控

### 🟡 高频需求：上下文与性能治理
- **长对话性能劣化**（[#2625](https://github.com/github/copilot-cli/issues/2625)）：30-45 秒冻结迫使频繁 `/clear`，丢失有价值上下文
- **上下文快照/分叉**（[#2720](https://github.com/github/copilot-cli/issues/2720)）：系统编程需要大段日志读取，但当前永久污染上下文窗口
- **/ask 单轮语义**（[#2885](https://github.com/github/copilot-cli/issues/2885)）：侧会话不应诱导多轮交互，与"不加入历史"的设计承诺矛盾

### 🟢 新兴期待：开放生态
- **ACP 协议**已关闭，但 IDE 集成实现待观察
- **MCP Sampling 非交互模式失效**（[#2882](https://github.com/github/copilot-cli/issues/2882)）：`--allow-all` 下仍拒绝权限，阻塞自动化场景
- **Plugin skills 注入缺失**（[#2753](https://github.com/github/copilot-cli/issues/2753)）：市场安装的 skills 未进入系统提示，功能可见不可用

---

*日报基于 github.com/github/copilot-cli 公开数据生成*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-04-22

## 今日速览

今日社区活跃度极高，过去24小时内新增 **25 个 Issue** 和 **13 个 PR**，核心聚焦于**终端退出挂死与 MCP 连接泄漏**（已有修复 PR）、**模型版本切换争议**（K2.5 vs K2.6）以及**OAuth 子代理认证失败**等关键问题。多个开发者同步提交了 Hook 系统增强和终端体验优化方案。

---

## 社区热点 Issues（Top 10）

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|---------|
| **#1984** | [终端退出挂死 + MCP 连接泄漏](https://github.com/MoonshotAI/kimi-cli/issues/1984) | 🔴 **Critical** | 长会话后 `/exit` 导致终端无响应，防火墙报告孤立 MCP 连接。影响所有长时间使用用户，已有配套修复 PR #1985 |
| **#1925** | [Kimi K2.5 vs K2.6 模型切换请求](https://github.com/MoonshotAI/kimi-cli/issues/1925) | 🟡 **High** | 6 条评论，用户强烈反馈 K2.6 "思考过程淹没创造力、增加幻觉且丧失个性"，要求保留 K2.5 及原系统提示词。模型策略争议持续发酵 |
| **#1983** | [OAuth 认证下子代理 HTTP 401 失败](https://github.com/MoonshotAI/kimi-cli/issues/1983) | 🔴 **Critical** | 根代理 OAuth 正常但子代理 `Agent` 工具调用失败，阻断多代理工作流，企业级场景受影响 |
| **#1961** | [`/login` 选 Kimi Code 报错不支持 Windows](https://github.com/MoonshotAI/kimi-cli/issues/1961) | 🟡 **High** | 3 条评论，Windows 用户登录流程阻断，平台兼容性基础问题 |
| **#1975** | [kosong Anthropic provider 违反并行工具调用 API 规范](https://github.com/MoonshotAI/kimi-cli/issues/1975) | 🟡 **High** | 将并行 `tool_result` 拆分为多条 user message，违反 Anthropic Messages API 规范。已有修复 PR #1978 |
| **#640** | [CLI 循环读取同一文件陷入死循环](https://github.com/MoonshotAI/kimi-cli/issues/640) | 🟡 **High** | 5 条评论，跨版本长期存在（0.76→1.37），自定义 Anthropic endpoint + mimo-v2-flash 场景下复现 |
| **#1977** | [tool_calls 后必须跟随 tool messages 的校验失败](https://github.com/MoonshotAI/kimi-cli/issues/1977) | 🟡 **High** | Loguru 日志处理器报错，消息序列结构校验问题，可能导致对话状态异常 |
| **#1980** | [MCP tool result 内容丢失](https://github.com/MoonshotAI/kimi-cli/issues/1980) | 🟡 **High** | 工具调用结果返回空，影响 MCP 生态集成可靠性 |
| **#1974** | [undo 命令实际回退 4 轮而非预期 1 轮](https://github.com/MoonshotAI/kimi-cli/issues/1974) | 🟠 **Medium** | 对话历史管理 bug，用户体验受损，操作可预测性下降 |
| **#1973** | [思考过程中频繁出现"系统插入空消息"](https://github.com/MoonshotAI/kimi-cli/issues/1973) | 🟠 **Medium** | 1.37.0 版本，Kimi-for-coding 模型下高频出现，干扰正常思考流 |

---

## 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心内容 |
|---|-----|------|---------|
| **#1985** | [fix(term, app): 防止 TTY 退出挂死并关闭 MCP 连接](https://github.com/MoonshotAI/kimi-cli/pull/1985) | 🐛 **Bugfix** | 修复 #1984：Unix 终端设为非阻塞 IO 避免 `os.read()` 死锁；应用退出时显式关闭 MCP 连接，解决防火墙孤立连接告警 |
| **#1978** | [fix(kosong/anthropic): 合并并行 tool_results 为单条 user msg](https://github.com/MoonshotAI/kimi-cli/pull/1978) | 🐛 **Bugfix** | 修复 #1975：符合 Anthropic Messages API [parallel-tool-use](https://docs.anthropic.com/en/docs/build-with-claude/tool-use#parallel-tool-use) 规范，避免 400 错误 |
| **#1972** | [feat(shell): 可视化上下文进度条](https://github.com/MoonshotAI/kimi-cli/pull/1972) | ✨ **Feature** | 将纯文本 `context: 0.0%` 替换为 Unicode 彩色块进度条，对标 claude-hud 视觉风格，提升终端体验 |
| **#1960** | [feat(soul): RalphFlow 架构——临时上下文与收敛检测](https://github.com/MoonshotAI/kimi-cli/pull/1960) | ✨ **Feature** | 自动化迭代框架：隔离式临时上下文文件防止无限循环，主对话保持整洁；支持多步骤工作流的收敛检测 |
| **#1979** | [fix(soul): 审批取消反馈传递至 ApprovalResult](https://github.com/MoonshotAI/kimi-cli/pull/1979) | 🐛 **Bugfix** | 修复超时场景下 "Rejected by user" 误导性提示，区分用户主动拒绝与超时取消（#1823 相关） |
| **#1963** | [feat: PreToolUse hooks 通过 updatedInput 修改工具参数](https://github.com/MoonshotAI/kimi-cli/pull/1963) | ✨ **Feature** | 支持 [rtk](https://github.com/rtk-ai/rtk) 集成——CLI 代理降低 LLM token 消耗 60-90%，单 Rust 二进制零依赖 |
| **#1935** | [feat(hooks): updatedInput 支持透明命令重写](https://github.com/MoonshotAI/kimi-cli/pull/1935) | ✨ **Feature** | 34 行代码扩展 PreToolUse hook 生命周期，允许第三方 hook 透明重写命令输入，对齐现有 Beta 文档 |
| **#1784** | [feat(auth): /login 流程支持 AWS Bedrock Mantle](https://github.com/MoonshotAI/kimi-cli/pull/1784) | ✨ **Feature** | 新增 AWS Bedrock Mantle 作为一等平台，OpenAI-compatible API，动态区域化 base URL 构建 |
| **#1832** | [fix: UserPromptSubmit hook 丢失 list[ContentPart] 类型输入](https://github.com/MoonshotAI/kimi-cli/pull/1832) | 🐛 **Bugfix** | 第三方 hook 无法捕获实际用户输入的根因修复，`user_input` 为列表时 `prompt` 字段为空 |
| **#1957** | [fix(acp): list_sessions 无 cwd 参数返回全部会话](https://github.com/MoonshotAI/kimi-cli/pull/1957) | 🐛 **Bugfix** | 修复 Zed 等编辑器会话历史断裂问题，符合 ACP 协议规范 |

---

## 功能需求趋势

```
┌─────────────────────────────────────────────────────────┐
│  终端体验优化 ████████████████████  进度条、主题定制、语音输入    │
│  模型策略/版本控制 ████████████████  K2.5保留、模型切换、个性恢复  │
│  认证与代理架构 ██████████████      OAuth子代理、多平台登录      │
│  IDE 生态集成 ████████████          VS Code/JetBrains/Remote     │
│  上下文管理 ██████████              vendor索引、undo精准度、历史   │
│  Hook 扩展系统 ████████             PreToolUse、命令重写、rtk    │
│  稳定性与边缘场景 ██████            Tmux/WSL2、TUN模式、文件循环   │
└─────────────────────────────────────────────────────────┘
```

**新兴方向**：社区正从"基础功能可用"向**精细化体验**和**企业级可靠性**迁移——语音输入（#1934 对标 Claude Code）、远程开发（#1964）、以及通过 Hook 系统构建外部工具生态（rtk 集成）成为差异化竞争点。

---

## 开发者关注点

| 痛点类别 | 具体表现 | 涉及 Issue/PR |
|---------|---------|-------------|
| **🔄 模型行为不可预测** | K2.6 过度思考、创造力下降、个性丧失；强烈要求保留 K2.5 或提供版本锁定 | #1925 |
| **🚪 退出与资源清理** | 长会话后终端挂死、MCP 连接泄漏成为高频投诉，直接影响日常使用信心 | #1984, #1985 |
| **🔐 认证架构断层** | OAuth 与 API Key 场景下子代理行为不一致；Windows 登录流程兼容性问题 | #1983, #1961, #1971 |
| **🎯 上下文控制精度** | vendor 目录被过滤、undo 回退轮数错误、系统空消息插入——开发者需要"所见即所得"的上下文管理 | #1962, #1974, #1973 |
| **🛠️ 企业/高级工作流** | WSL2+Tmux 边缘场景、JetBrains ACP 初始化失败、远程开发支持——专业开发者环境适配 | #1965, #1967, #1964 |
| **🎨 终端个性化** | 硬编码 dark/light 主题限制严重，社区主动提交 Catppuccin/Gruvbox 等方案 | #1981, #1982 |

---

*日报基于 GitHub 公开数据生成，关注 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 获取最新动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-04-22

---

## 今日速览

OpenCode 今日发布 **v1.14.20** 紧急修复系统主题回归问题，同时社区围绕 **Anthropic 工具流协议变更**、**Windows 本地动态导入修复** 及 **Kimi K2.6 集成** 展开密集讨论。核心架构层面，Effect Schema 迁移成为近期代码重构的主线。

---

## 版本发布

### v1.14.20（2026-04-21）

| 模块 | 更新内容 |
|:---|:---|
| **Core** | 修复 TUI 系统主题回归；实验性 HTTP API 新增 `GET /config`；修复 Windows 下 Node 环境的本地动态导入问题，提升插件和工具加载稳定性 |
| **TUI** | 修复远程工作空间的权限回复路由，确保发送至正确的工作空间 |

> 🔗 [Release 页面](https://github.com/anomalyco/opencode/releases/tag/v1.14.20)

---

## 社区热点 Issues

### 🔴 高优先级 Bug

| # | 标题 | 状态 | 评论 | 核心问题 |
|:---|:---|:---|:---:|:---|
| **#13768** | [模型不支持 assistant message prefill](https://github.com/anomalyco/opencode/issues/13768) | OPEN | 60 | **GitHub Copilot + Opus 4.6 兼容性危机**：OpenCode 频繁中断，提示模型不支持 assistant prefill。这是社区**讨论最激烈**的阻塞性问题，直接影响 Claude Opus 4.6 的主流使用场景。 |
| **#13984** | [CLI 无法复制粘贴](https://github.com/anomalyco/opencode/issues/13984) | OPEN | 30 | **TUI 剪贴板可靠性问题**：显示"已复制"但实际粘贴为空，跨平台剪贴板集成存在深层缺陷，影响基础交互体验。 |
| **#23658** | [1.14.19 升级后终端背景变白](https://github.com/anomalyco/opencode/issues/23658) | OPEN | 5 | **主题系统紧急回归**：v1.14.19 暗色主题失效，用户被迫回退至 1.14.18。与今日发布的 v1.14.20 修复直接相关。 |

### 🟡 架构与稳定性

| # | 标题 | 状态 | 评论 | 核心问题 |
|:---|:---|:---|:---:|:---|
| **#14194** | [本地+Docker 共享配置导致数据库损坏](https://github.com/anomalyco/opencode/issues/14194) | OPEN | 16 | **SQLite 并发访问缺陷**：多实例共享数据目录时发生数据库损坏，容器化部署场景的高危问题。 |
| **#17516** | [`opencode run` 工具调用后挂起](https://github.com/anomalyco/opencode/issues/17516) | OPEN | 13 | **CI/自动化场景阻塞**：进程完成后不退出，破坏脚本化工作流，影响 DevOps 集成。 |
| **#22292** | [托管设置可通过环境变量绕过](https://github.com/anomalyco/opencode/issues/22292) | OPEN | 4 | **企业安全漏洞**：`OPENCODE_PERMISSION` 环境变量可覆盖托管配置，managed settings 的强制力失效。 |

### 🟢 生态集成

| # | 标题 | 状态 | 评论 | 核心问题 |
|:---|:---|:---|:---:|:---|
| **#22408** | [Kimi K2.6 集成](https://github.com/anomalyco/opencode/issues/22408) | **CLOSED** | 18 | **国产大模型支持里程碑**：Moonshot Kimi K2.6 及 K2.6-code-preview 已纳入支持，社区呼声极高的功能落地。 |
| **#14462** | [Roslyn LSP 作为 C# 可选方案](https://github.com/anomalyco/opencode/issues/14462) | **CLOSED** | 13 | **官方 LSP 替代社区方案**：Microsoft 官方 Roslyn 语言服务器替代 csharp-ls，提升 C# 开发体验。 |
| **#23704** | [OpenRouter xAI/Grok 工具 schema 失败](https://github.com/anomalyco/opencode/issues/23704) | OPEN | 4 | **工具调用兼容性**：`additionalProperties: false` 导致 xAI 模型拒绝 schema，OpenRouter 生态的适配盲区。 |
| **#17425** | [插件扩展性缺口阻碍语音输入](https://github.com/anomalyco/opencode/issues/17425) | OPEN | 4 | **插件 API 设计债务**：语音/听写插件（#4695, #9264, #11345 等长期需求）因 SDK 能力缺口无法实现。 |

---

## 重要 PR 进展

### 🔧 紧急修复

| # | 标题 | 类型 | 核心内容 |
|:---|:---|:---|:---|
| **#23766** | [禁用所有 @ai-sdk/anthropic 提供者的 toolStreaming](https://github.com/anomalyco/opencode/pull/23766) | Bug fix | **关键兼容性修复**：Anthropic SDK ≥3.0.58 注入 `eager_input_streaming` 导致代理/API 网关验证失败，关闭 toolStreaming 规避协议冲突。 |
| **#23755** | [保留 Anthropic 消息中的 thinking/redacted_thinking 块](https://github.com/anomalyco/opencode/pull/23755) | Bug fix | 修复多轮对话中 thinking 块丢失导致的 API 错误，保障 Claude 推理链路的完整性。 |
| **#23612** | [Roslyn LSP 同步范围及 workspaceSymbol 查询修复](https://github.com/anomalyco/opencode/pull/23612) | Bug fix + Refactor | 解决 Roslyn 语言服务器崩溃问题，补全 C# LSP 替代方案的最后一块拼图（关联 #14462, #23075）。 |

### 🚀 功能扩展

| # | 标题 | 类型 | 核心内容 |
|:---|:---|:---|:---|
| **#23760** | [交互式终端工具（持久化 PTY 会话）](https://github.com/anomalyco/opencode/pull/23760) | New feature | **Agent 能力跃迁**：从一次性命令执行升级为持久化终端会话管理（创建/输入/输出/关闭），实现真正的交互式 shell 扩展。 |
| **#18201** | [插件 TODO 管理 API 端点](https://github.com/anomalyco/opencode/pull/18201) | New feature | `POST /session/:sessionID/todo` 让插件可程序化写入 TUI 侧边栏待办事项，增强插件与界面的双向交互。 |
| **#21586** | [内联图片附件触发词](https://github.com/anomalyco/opencode/pull/21586) | New feature | 视觉分析技能（如 "screenshot"、"describe"）支持内联图片的触发词自动激活，补齐多模态交互的最后环节。 |
| **#21349** | [允许从 AI 消息分叉对话](https://github.com/anomalyco/opencode/pull/21349) | New feature | 移除 fork 对话框的角色过滤，支持从 assistant 消息分叉，提升对话探索灵活性。 |
| **#18306** | [Open WebUI 提供者](https://github.com/anomalyco/opencode/pull/18306) | New feature + Bug fix | 新增 Open WebUI 作为模型提供者，拓展本地部署生态（基于 #14341 迭代）。 |

### 🏗️ 架构演进

| # | 标题 | 类型 | 核心内容 |
|:---|:---|:---|:---|
| **#12042** | [Plugin SDK v2](https://github.com/anomalyco/opencode/pull/12042) | Refactor | **插件生态基础设施**：双 SDK 并行（v1/v2）保障向后兼容，允许插件作者渐进式迁移，解决 #7641 的长期技术债。 |
| **#23765-23763** | [Effect Schema 迁移系列](https://github.com/anomalyco/opencode/pull/23765) | Refactor | **核心架构现代化**：BusEvent/SyncEvent、MessageV2 错误、Cursor 分页查询逐步从 Zod 迁移至 Effect Schema，提升类型安全与可组合性。（堆叠 PR：#23757 → #23763 → #23764 → #23765） |

### 💻 体验优化

| # | 标题 | 类型 | 核心内容 |
|:---|:---|:---|:---|
| **#21343** | [LLM 响应期间防止历史滚动回弹](https://github.com/anomalyco/opencode/pull/21343) | Bug fix | 用户上滑查看历史时，token 更新不再强制拉回底部，解决流式输出时的阅读干扰（#4196）。 |
| **#18767** | [移动端触摸优化](https://github.com/anomalyco/opencode/pull/18767) | New feature | 针对手机/平板设备的触摸交互优化，保持桌面体验无损，拓展使用场景。 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注呈现 **五大方向**：

| 趋势 | 代表 Issue | 热度指标 |
|:---|:---|:---:|
| **🤖 新模型快速适配** | #22408 (Kimi K2.6), #13199 (Opus 4.6 1M), #19479 (Mistral Small reasoning), #23704 (xAI/Grok) | ⭐⭐⭐⭐⭐ |
| **🏢 企业/团队部署** | #14194 (Docker 并发), #22292 (托管设置安全), #23434 (企业 npm 注册表) | ⭐⭐⭐⭐⭐ |
| **🎨 TUI/UX 精细化** | #13984 (剪贴板), #23658 (主题), #6087 (侧边栏宽度), #23062 (Logo 动画性能) | ⭐⭐⭐⭐☆ |
| **🔌 插件生态扩展** | #17425 (语音输入), #12042 (SDK v2), #18201 (TODO API) | ⭐⭐⭐⭐☆ |
| **🖥️ IDE 与工具链集成** | #14462/#23612 (Roslyn LSP), #20510 (.agents 加载), #18390 (旧 CPU 兼容) | ⭐⭐⭐☆☆ |

> **关键洞察**：模型适配已从"加分项"变为"基础设施"——Opus 4.6、Kimi K2.6、Grok、Mistral reasoning 的密集需求表明，OpenCode 正成为多模型编排的核心枢纽，而非单一模型客户端。

---

## 开发者关注点

### ⚠️ 高频痛点

| 痛点 | 具体表现 | 影响面 |
|:---|:---|:---|
| **TUI 稳定性** | 剪贴板失效、主题回归、滚动异常、Orphan text 崩溃 | 所有平台用户的基础体验 |
| **进程生命周期管理** | `opencode run` 挂起、WSL2 崩溃、工具调用后无响应 | 自动化/CI 场景不可用 |
| **配置与状态一致性** | Docker-本地混用损坏数据库、环境变量覆盖托管设置 | 团队部署与合规场景 |
| **Windows 二等公民** | 动态导入修复、符号链接、agents 加载失败 | Windows/WSL 开发者群体 |

### 🔮 新兴需求

- **持久化会话能力**：#23760 的 PTY 会话工具代表了从"命令执行器"到"环境管理者"的范式转移
- **推理链可视化**：Claude thinking 块、Qwen reasoning_content 的解析与展示（#23755, #15774）
- **合规与安全审计**：pip3 自动安装质疑（#22100）、工具调用权限精细化（#23709）

---

*日报基于 GitHub 公开数据生成，关注 [anomalyco/opencode](https://github.com/anomalyco/opencode) 获取实时动态。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-04-22

## 今日速览

v0.68.0 版本引发连锁反应：Bedrock 区域端点硬编码和 Anthropic `cache_control` 字段导致多家第三方提供商兼容性问题，社区单日涌现 50 个活跃 Issue。同时扩展 API 新增 `@mention` 提及系统和终端图片宽度配置，生态可扩展性持续增强。

---

## 社区热点 Issues

| # | 标题 | 状态 | 重要性 | 社区反应 |
|---|------|------|--------|----------|
| [#3498](https://github.com/badlogic/pi-mono/issues/3498) | v0.68.0 `cache_control` 破坏 Fireworks AI 等兼容端点 | 🔴 CLOSED | **核心兼容性断裂**：Anthropic 提示缓存优化字段被硬编码进最后一个 tool 定义，导致 Fireworks AI 等 Anthropic-like 提供商返回 400 错误。直接影响多提供商用户的生产环境。 | 7 评论，shahidcodes 快速定位，已修复 |
| [#3481](https://github.com/badlogic/pi-mono/issues/3481) | Bedrock 强制 us-east-1 端点，非该区域令牌失效 | 🔴 CLOSED | **AWS 多区域部署阻断**：v0.68.0 将 `us.*` 模型硬编码指向 us-east-1，us-east-2 等区域的 IAM 令牌全部报 `AccessDeniedException`。企业用户跨区域架构受冲击。 | 4 评论，👍1，drio 紧急反馈 |
| [#3488](https://github.com/badlogic/pi-mono/issues/3488) | v0.68.0 同样破坏 eu-central-1 Bedrock（InvalidSignatureException） | 🔴 CLOSED | **欧洲用户大规模受影响**：与 #3481 同源，内置模型 `baseUrl` 被设为 SDK `endpoint` 导致 SigV4 签名区域不匹配。hheydaroff 独立复现并提交修复。 | 3 评论，与 #3481 形成修复矩阵 |
| [#3503](https://github.com/badlogic/pi-mono/issues/3503) | 并行工具调用全部阻塞于最慢任务 | 🔴 CLOSED | **UI 体验缺陷**：三个 `bash` 并行调用时，每个工具行都保持 `isPartial=true` 直到全部完成，用户无法看到部分结果。npupko 指出这违背了并行调用的核心优势。 | 4 评论，涉及 TUI 渲染架构 |
| [#3372](https://github.com/badlogic/pi-mono/issues/3372) | Claude 订阅用户无法使用 Pi | 🔴 CLOSED | **付费用户流失风险**：Claude API 订阅与 Pi 的认证流程出现断裂，totoroot 等用户被迫转向 OpenAI/Codex 后再迁移回来。涉及商业授权链路。 | 5 评论，用户体验关键路径 |
| [#3479](https://github.com/badlogic/pi-mono/issues/3479) | Qwen3.6 `preserve_thinking` 仍失效 | 🔴 CLOSED | **本地模型记忆断裂**：多轮对话中 Qwen3.6 无法保持上下文，同一测试在 OpenWebUI 正常。ParticleOne 控制实验排除模型本身问题，指向 Pi 的 thinking 标签处理。 | 3 评论，与 #2517 minimax 问题同源 |
| [#3175](https://github.com/badlogic/pi-mono/issues/3175) | JSON 解析错误导致编辑反复失败 | 🔴 CLOSED | **高频稳定性问题**：Anthropic 模型流式返回中 JSON 截断，位置 3875 处期望 `,` 或 `}`。mintyPT 提供完整复现会话日志，17 评论为今日最热。 | 17 评论，长期追踪的顽疾 |
| [#3371](https://github.com/badlogic/pi-mono/issues/3371) | 长 Markdown 输出时流式渲染闪烁、历史消失 | 🔴 CLOSED | **TUI 渲染核心缺陷**：流式传输中旧输出被新输出替换而非追加，最终屏幕几乎空白。mrclrchtr 报告直接影响长代码生成的可用性。 | 4 评论，与 #3503 同属 TUI 稳定性 |
| [#3497](https://github.com/badlogic/pi-mono/issues/3497) | 扩展程序式调用工具与斜杠命令 | 🔴 CLOSED | **生态扩展性里程碑**：Karrq 提出扩展间可组合性需求，允许命令面板等"工具前端"集成。从"人机交互"迈向"扩展间 API 调用"。 | 5 评论，架构级功能请求 |
| [#3509](https://github.com/badlogic/pi-mono/issues/3509) | `grep`/`diff`/`test` 退出码 1 被误报为工具错误 | 🔴 CLOSED | **Unix 语义兼容性**：bash 工具将非零退出码统一视为错误，但 `grep` 无匹配、`diff` 有差异、`test` 条件假 均为正常语义。fanson 指出这导致 agent 误判并反复重试。 | 2 评论，shell 工具正确性根基 |

---

## 重要 PR 进展

| # | 标题 | 核心内容 |
|---|------|----------|
| [#3517](https://github.com/badlogic/pi-mono/pull/3517) | `registerMentionProvider` 扩展 API | aliou 实现 `@` 提及系统的可扩展架构：扩展可注册自定义提及源（如 git 分支、Jira 工单），支持简单补全列表或动态异步查询。解决 #2983，为"智能输入"奠定插件标准。 |
| [#3516](https://github.com/badlogic/pi-mono/pull/3516) | 弹性调度器支持 XML 风格工具调用 | Tatarotus 针对 Qwen 等本地模型的 XML 工具调用格式（如 `<tool>write tui/update.go</tool>`）添加解析与执行能力。此前此类响应仅显示不执行，文件写入悬空。 |
| [#3229](https://github.com/badlogic/pi-mono/pull/3229) | Anthropic 工具调用流式加固 | mitsuhiko 将 `messages.stream()` 降级为原始 `messages.create(..., stream: true)` 事件迭代，并添加流式中断时的非流式回退。对齐 Claude Code 的韧性策略，解决 #3175 类 JSON 截断。 |
| [#2713](https://github.com/badlogic/pi-mono/pull/2713) | 模型切换应用于下一排队请求 | ferologics 重构请求队列：运行中请求保持原模型，切换后的新请求使用新模型。解决 mid-run 切换导致当前请求异常或模型不一致问题，提升多模型工作流流畅度。 |
| [#3474](https://github.com/badlogic/pi-mono/pull/3474) | TypeBox v1 迁移（扩展兼容） | mitsuhiko 主导 AJV→TypeBox 1.x 验证层替换，关键约束：保持旧扩展的 JSON Schema 导入兼容，保留强制转换行为。解决 #3112，为类型安全升级扫清技术债。 |
| [#3499](https://github.com/badlogic/pi-mono/pull/3499) | Claude 4.7 全家族支持 | odinlabs-ai 添加 Sonnet 4.7 与 Haiku 4.7 的 `supportsAdaptiveThinking()` 支持，新增 `isClaude47()` 检测辅助函数，并屏蔽 Claude 4.7 拒绝的 `temperature`/`top_p`/`top_k` 参数。 |
| [#3492](https://github.com/badlogic/pi-mono/pull/3492) | 终端图片宽度可配置 (`images.maxWidthCells`) | alexbi29 实现默认 60 列→用户自定义，通过 `/settings` 或 `settings.json` 调整，实时重渲染已显示图片。直接响应 #3508 社区呼声，解决高分屏/宽终端下图过小问题。 |
| [#3477](https://github.com/badlogic/pi-mono/pull/3477) | 内置 kimi-coding K2.6 模型 | deanmikan 将 `models.dev` 的 `k2p6` 归一化为正式 `kimi-k2.6` ID，再生 `models.generated.ts`。Kimi K2.6 成为一等公民，减少用户手动配置摩擦。 |
| [#799](https://github.com/badlogic/pi-mono/pull/799) | `Ctrl+L` 清屏 / `Ctrl+X` 模型选择 | tallshort 对齐 Unix 终端惯例：`Ctrl+L` 清屏（原模型选择），`Ctrl+X` 接管模型选择。降低新用户肌肉记忆迁移成本，提升终端原生感。 |
| [#3514](https://github.com/badlogic/pi-mono/pull/3514) | `settings.json` 支持路径展开 (`~`, `$HOME`) | MoritzLv 解决跨设备同步痛点：sessionDir、skills、extensions 等路径现支持 shell 变量展开，消除硬编码绝对路径，配合 dotfiles 仓库实现配置一处编写多处运行。 |

---

## 功能需求趋势

| 方向 | 热度 | 代表 Issue/PR | 趋势解读 |
|------|------|---------------|----------|
| **多提供商兼容性** | 🔥🔥🔥🔥🔥 | #3498 #3481 #3488 #3519 #2517 | v0.68.0 的 Anthropic 特化改动引发连锁反应，社区强烈需要"提供商抽象层"而非硬编码适配 |
| **扩展/插件生态** | 🔥🔥🔥🔥 | #3497 #3517 #3505 #3455 | 从主题、技能到提及系统、程序式工具调用，扩展 API 正从"装饰性"转向"生产依赖" |
| **TUI 稳定性与渲染** | 🔥🔥🔥🔥 | #3371 #3503 #3406 #3515 #3508 | 流式输出、并行状态、图片尺寸、窗口 resize 等终端交互细节成为体验分水岭 |
| **本地/开源模型支持** | 🔥🔥🔥 | #3479 #3516 #2517 #3509 | Qwen、Kimi、MiniMax 等模型的 thinking 标签、XML 工具调用、退出码语义等适配需求激增 |
| **配置可移植性** | 🔥🔥🔥 | #3514 #2514 #3455 | 跨设备同步、团队共享 AGENTS.md、路径变量展开，反映 Pi 从个人工具向团队基础设施演进 |

---

## 开发者关注点

### 🔴 紧急：v0.68.0 回归集群
- **Bedrock 区域锁定**（#3481 #3488）：内置模型 `baseUrl` 与 SDK `endpoint` 耦合，SigV4 签名区域硬编码。AWS 多账户/多区域部署用户大面积阻塞。
- **Anthropic 字段外溢**（#3498）：`cache_control` 优化字段泄漏到标准工具 schema，Fireworks AI、自定义代理等兼容端点 400 拒绝。

### 🟡 高频：扩展开发体验断层
- **API 能力不足**（#3497）：扩展无法程序式调用工具/命令，"工具前端"类扩展（命令面板、自动化流水线）无法构建。
- **类型系统迁移风险**（#3474）：TypeBox v1 升级中，旧扩展的 AJV Schema 需保持兼容，社区担忧破坏性变更。

### 🟢 持续：终端交互精细化
- **图片渲染可控性**（#3508 → #3492）：60 列默认在宽终端/高 DPI 下严重浪费空间，实时可配置成为刚需。
- **Unix 语义正确性**（#3509）：`grep`/`diff`/`test` 等工具的退出码 1 被误处理，agent 陷入无效重试循环，自动化可靠性受损。

### 📌 长期：配置即代码
- `settings.json` 路径展开（#3514）、递归配置查找（#2514）、共享 AGENTS.md 加载（#3455）共同指向：Pi 配置需从"单机 dotfile"演进为"可版本控制、可团队共享的基础设施声明"。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-04-22

---

## 今日速览

Qwen Code 发布 **v0.15.0-preview.1** 预览版，重点完善 ACP 集成与紧凑模式 UX；社区 **401 认证故障集中爆发**，单日新增 5+ 相关 Issue，成为最高优先级问题；Python SDK 和国产搜索 API 兼容成为活跃贡献方向。

---

## 版本发布

### v0.15.0-preview.1
**发布时间**：2026-04-21

| 更新项 | 说明 |
|--------|------|
| **ACP 完整 Hooks 支持** | `feat(acp)`：为 ACP 集成添加完整的 hooks 机制（[#3248](https://github.com/QwenLM/qwen-code/pull/3248)） |
| **紧凑模式 UX 优化** | `feat`：优化快捷键、设置同步及安全机制（[#3100](https://github.com/QwenLM/qwen-code/pull/3100)） |
| **HTTP Hooks** | `feat(hooks)`：扩展 HTTP 层面的 hook 能力（PR 截断，待完整发布说明） |

> 该版本为预览通道更新，标志着 ACP（Agent Communication Protocol）生态对接进入深水区。

---

## 社区热点 Issues（Top 10）

| # | 状态 | 标题 | 核心看点 | 链接 |
|---|:--:|------|---------|------|
| **3496** | 🔴 OPEN | webSearch 免费份额停掉后无法使用，请求兼容国内搜索 API | **国产替代诉求强烈**：用户希望接入字节、GLM 等国内搜索能力，而非绑定阿里百炼单一渠道 | [→](https://github.com/QwenLM/qwen-code/issues/3496) |
| **3501/3506/3504/3497/3465** | 🔴 批量爆发 | 401 `invalid access token or token expired` | **P0 级故障**：VS Code 扩展与 CLI 均出现持续性认证失败，重装/重启无效，影响面极广 | [→](https://github.com/QwenLM/qwen-code/issues/3501) |
| **3447** | 🔴 OPEN | 上下文爆满不自动压缩，任务卡顿 | **长会话稳定性**：长程任务上下文堆积导致性能衰减，`/compress` 命令失效 | [→](https://github.com/QwenLM/qwen-code/issues/3447) |
| **2409** | ✅ CLOSED | Subagent 系统需对标 Claude Code | **架构演进**：社区推动子代理能力从 40-45% 覆盖率向完整特性对齐，已关闭说明有实质进展 | [→](https://github.com/QwenLM/qwen-code/issues/2409) |
| **3464** | 🔴 OPEN | GLM 等三方模型"降智"严重 | **多模型兼容性**：工具调用失败率高，system prompt 存在黑盒处理引发调试困难 | [→](https://github.com/QwenLM/qwen-code/issues/3464) |
| **2427** | ✅ CLOSED | CLI 直接设置 API Key，简化配置流程 | **UX 债务**：激烈反馈推动配置简化，对比 OpenCode 的内置提供商模式已成共识 | [→](https://github.com/QwenLM/qwen-code/issues/2427) |
| **3503** | 🔴 OPEN | i18n 翻译文件 zh-CN/en-US 键不匹配 | **国际化质量**：翻译同步机制缺失，影响多语言体验 | [→](https://github.com/QwenLM/qwen-code/issues/3503) |
| **3483** | ✅ CLOSED | 401 Auth + ACP 进程 SIGTERM 崩溃 | **稳定性修复**：认证与 ACP 进程启动的双重故障，已快速关闭说明修复效率高 | [→](https://github.com/QwenLM/qwen-code/issues/3483) |
| **3110** | 🔴 OPEN | CLI 语音输入 `/voice` | **交互创新**：高频诉求，降低键盘输入负担，尤其在中文场景 | [→](https://github.com/QwenLM/qwen-code/issues/3110) |
| **3010** | 🔴 OPEN | 是否有 Python SDK？ | **生态扩展**：开发者呼吁程序化调用能力，已有对应 PR 响应 | [→](https://github.com/QwenLM/qwen-code/issues/3010) |

---

## 重要 PR 进展（Top 10）

| # | 状态 | 标题 | 技术价值 | 链接 |
|---|:--:|------|---------|------|
| **3494** | 🔵 OPEN | Python SDK 实现 | **生态里程碑**：`packages/sdk-python` 新增，支持 async/sync query、进程传输、权限处理，直接响应 #3010 诉求 | [→](https://github.com/QwenLM/qwen-code/pull/3494) |
| **3502** | 🔵 OPEN | 接入 GLM（智谱 AI）Web Search | **国产搜索破局**：新增 `type: 'glm'` 搜索提供商，解决 #3496 的国产兼容诉求 | [→](https://github.com/QwenLM/qwen-code/pull/3502) |
| **3377** | 🔵 OPEN | Slash 命令多模式扩展（Phase 2） | **ACP 深化**：13 个内置命令扩展至 `non_interactive` 和 `acp` 模式，支撑自动化流水线 | [→](https://github.com/QwenLM/qwen-code/pull/3377) |
| **3508** | 🔵 OPEN | 内联 Shell 输出限流 | **UX 优化**：可配置行数上限，解决 `npm install` 等长输出淹没上下文的问题 | [→](https://github.com/QwenLM/qwen-code/pull/3508) |
| **3455** | 🔵 OPEN | `@`-picker 移至 Worker Threads | **性能关键**：大仓库（10万+文件）下 `@` 提及不再卡死 Ink 渲染循环 | [→](https://github.com/QwenLM/qwen-code/pull/3455) |
| **3505** | 🔵 OPEN | 截断子代理 write_file 调用拒绝 | **可靠性**：传播 `MAX_TOKENS` 截断元数据，防止半成品文件写入 | [→](https://github.com/QwenLM/qwen-code/pull/3505) |
| **3471** | 🔵 OPEN | 模型面向的 Agent 控制（task_stop/send_message/实时 transcript） | **子代理革命**：父代理可中途干预子代理，从"发后不管"到"全程可控" | [→](https://github.com/QwenLM/qwen-code/pull/3471) |
| **3507** | 🔵 OPEN | 粘性 Todo 面板 | **任务可视化**：会话中固定显示任务列表，解决 #2987 的进度追踪痛点 | [→](https://github.com/QwenLM/qwen-code/pull/3507) |
| **3318** | 🔵 OPEN | API 预连接降低首调延迟 | **性能优化**：fire-and-forget HEAD 请求预热 TCP+TLS，省 100-200ms | [→](https://github.com/QwenLM/qwen-code/pull/3318) |
| **3214** | 🔵 OPEN | `git ls-files` + ripgrep 替代 fdir | **大仓库优化**：尊重 `.gitignore`，消除每次按键全量扫描 | [→](https://github.com/QwenLM/qwen-code/pull/3214) |

---

## 功能需求趋势

```
┌─────────────────────────────────────────────────────────┐
│  🔥 认证与配置简化    ████████████████████  最高频        │
│  🔥 国产生态兼容      ██████████████████    GLM/字节/搜索 │
│  🔥 子代理/Agent 能力 ████████████████      对标 Claude   │
│  📈 IDE 集成深化      ██████████████        VSCode 功能补齐│
│  📈 性能与可扩展性    ████████████          大仓库/长会话  │
│  📈 多模态交互        ████████              语音/Todo 面板 │
│  ▶  程序化 SDK        ██████                Python 优先   │
└─────────────────────────────────────────────────────────┘
```

**关键转向**：社区从"能用"转向"好用且不受限"——认证去中心化、搜索去阿里化、模型去单一化成为明确诉求。

---

## 开发者关注点

| 痛点 | 表现 | 紧迫度 |
|------|------|:------:|
| **认证体系脆弱** | 401 错误批量爆发，OAuth 弃用过渡期的阵痛，VS Code 扩展尤甚 | 🔴 **P0** |
| **长会话雪崩** | 上下文不压缩 → 卡顿 → 只能重启，严重破坏心流 | 🔴 **P0** |
| **国产模型"二等公民"** | GLM 工具调用失败率高、system prompt 不透明，调试成本极高 | 🟡 **P1** |
| **配置门槛过高** | settings.json 手动编辑 vs. 竞品的一键配置，新用户流失风险 | 🟡 **P1** |
| **国际化粗糙** | 翻译键不同步，中文文档指向模糊（如"阿里云控制台"无具体产品） | 🟢 **P2** |
| **CLI 交互上限** | 纯键盘输入疲劳，语音、粘性面板等增强交互需求浮现 | 🟢 **P2** |

---

> **分析师备注**：今日数据呈现"发布节奏加速"与"基础设施债务暴露"并存。v0.15.0-preview.1 的 ACP 推进与社区对认证/配置的简化诉求形成张力——前者增加协议复杂度，后者要求降低使用门槛。建议核心团队优先止血 401 故障，同时加速 PR #3398（VSCode 认证改造）和 #3502（GLM 搜索）的合并，回应"去中心化"诉求。

---

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*