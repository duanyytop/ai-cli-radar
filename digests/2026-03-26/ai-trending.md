# AI 开源趋势日报 2026-03-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-26 00:11 UTC

---

# AI 开源趋势日报 | 2026-03-26

---

## 第一步：AI 相关性过滤

**Trending 榜单筛选结果**：12 个仓库中，**10 个为 AI 相关**，排除以下 2 个非 AI 项目：
- ❌ `pascalorg/editor` — 3D 建筑编辑器（纯设计工具）
- ❌ `Crosstalk-Solutions/project-nomad` — 离线生存计算机（硬件工具包，AI 仅为附加功能）

**主题搜索结果**：80 个仓库全部保留，均为 AI/ML 相关。

---

## 第二步：分类体系

| 维度 | 定义 | 今日项目数 |
|:---|:---|:---|
| 🔧 AI 基础工具 | 模型调用 SDK、推理引擎、网关、开发工具、CLI | 12 |
| 🤖 AI 智能体/工作流 | Agent 框架、多智能体编排、自动化工作流、MCP | 18 |
| 📦 AI 应用 | 垂直场景产品（金融、安全、内容生成等） | 8 |
| 🧠 大模型/训练 | 模型实现、训练框架、微调、评估 | 14 |
| 🔍 RAG/知识库 | 向量数据库、检索增强、记忆层、文档处理 | 16 |

---

## 第三步：完整报告

---

### 1. 今日速览

今日 AI 开源领域呈现**"智能体基建狂飙"**态势：字节跳动开源的 `deer-flow` 以 3,787 星登顶，其"SuperAgent harness"定位标志着大厂正式入场 Agent 操作系统层；同时 `ruflo`（Claude 生态编排平台）和 `last30days-skill`（跨平台研究 Agent）的爆发，反映开发者对**生产级多智能体编排**的迫切需求。RAG/记忆层持续火热，`supermemory` 和 `cognee` 分别代表"高速可扩展记忆引擎"与"6 行代码知识图谱"两种技术路线。值得关注的是，**Claude Code 生态插件**（`claude-subconscious`、`claude-mem`）形成独立细分赛道，AI 编程助手的"意识层"改造成为新热点。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 3,787 | +3,787 | 字节开源的 SuperAgent  harness，集成沙箱、记忆、工具、子智能体与消息网关，支持分钟到小时级的复杂任务处理 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 大量 | +301 | 统一 100+ LLM API 的 Python SDK 与代理服务器，企业级成本追踪、防护栏与负载均衡 |
| [ollama/ollama](https://github.com/ollama/ollama) | 166,156 | - | 本地运行 Kimi-K2.5、GLM-5、DeepSeek 等模型的标杆工具，持续更新模型支持 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 74,326 | - | 高吞吐、内存高效的 LLM 推理与服务引擎 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 98,271 | - | 将整站转为 LLM-ready 数据的 Web Data API，RAG 流水线标配 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 84,428 | - | 让网站对 AI 智能体可访问，浏览器自动化的事实标准 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,663 | - | Rust 生态的模块化 LLM 应用开发框架 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 11,293 | - | Java 企业级 LLM 集成库，原生支持 MCP 与 RAG |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 1,174 | +1,174 | Claude 生态领先的智能体编排平台，支持分布式集群、RAG 集成与 Claude Code 原生对接 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 1,341 | +1,341 | 跨 Reddit/X/YouTube/HN/Polymarket 的多源研究 Agent，生成 grounded 摘要 |
| [letta-ai/claude-subconscious](https://github.com/letta-ai/claude-subconscious) | 71 | +71 | 为 Claude Code 添加"潜意识"层，Letta 记忆技术的 IDE 集成实验 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,420 | - | 支持 ~400 个 MCP 服务器的 AI 工作流自动化平台 |
| [trycua/cua](https://github.com/trycua/cua) | 13,269 | - | 计算机使用智能体（Computer-Use Agents）的开源基础设施，支持 macOS/Linux/Windows 桌面控制 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 11,435 | - | 企业级智能体的安全沙箱环境，提供真实世界工具访问 |
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | 9,296 | - | 阿里开源的 AI 智能体安全、快速、可扩展的运行时沙箱 |
| [crestalnetwork/intentkit](https://github.com/crestalnetwork/intentkit) | 6,499 | - | 自托管云智能体集群，管理协作式 AI 智能体团队 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | 1,065 | +1,065 | "自动化在线赚钱"的内容生成与变现工作流（需警惕合规风险） |
| [usestrix/strix](https://github.com/usestrix/strix) | 102 | +102 | 开源 AI 黑客，自动发现与修复应用漏洞的安全智能体 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 449 | +449 | 基于多智能体 LLM 的中文金融交易框架，TradingAgents 中文增强版 |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | 10,407 | - | 工业级全流程 AI 影视生产平台，从短视频到真人电影的好莱坞标准工作流 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 1,082 | +1,082 | 将 WiFi 信号转为实时人体姿态估计、生命体征监测的 DensePose 系统（无需摄像头） |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 63,569 | - | 面向分析师、量化研究员与 AI 智能体的金融数据平台 |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | 55,072 | - | 开源 Deepfakes 软件，视觉 AI 的经典项目 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 54,988 | - | YOLO 目标检测框架的最新版本，视觉 AI 基础设施 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 43,705 | - | 2 小时从 0 训练 64M 参数 GPT 的极简教程，大模型教育标杆 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89,241 | - | 逐步用 PyTorch 实现类 ChatGPT LLM 的权威教程 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,058 | - | 统一高效微调 100+ LLM/VLM 的框架（ACL 2024） |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 58,196 | - | 本地训练与运行 Qwen、DeepSeek 等模型的 Web UI |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 6,796 | - | 支持 100+ 数据集的大模型评测平台 |
| [BrainBlend-AI/atomic-agents](https://github.com/BrainBlend-AI/atomic-agents) | 5,812 | - | 原子化构建 AI 智能体的框架，强调模块化组合 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,027 | - | Apple Silicon 上的 LLM 推理服务课程，从零实现 vLLM + Qwen |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 306 | - | X-Bit 量化的端侧 LLM 推理引擎 |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | 810 | +810 | 极速可扩展的记忆引擎，定位为"AI 时代的 Memory API" |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,985 | - | 领先的文档智能体与 OCR 平台，RAG 核心基础设施 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 76,130 | - | 融合前沿 RAG 与智能体能力的检索增强生成引擎 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14,628 | - | 6 行代码实现 AI 智能体记忆的知识图谱引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51,051 | - | AI 智能体的通用记忆层，跨会话长期记忆 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 40,605 | - | 自动捕获 Claude Code 会话、AI 压缩并注入上下文的记忆插件 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 22,938 | - | 无向量、基于推理的 RAG 文档索引方案 |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | 10,368 | - | 97% 存储节省的端侧 RAG，MLsys2026 成果 |

---

### 3. 趋势信号分析

**智能体操作系统层爆发**：今日最显著的信号是**"Agent Harness/Orchestration"**（智能体驾驭/编排）概念的崛起。字节 `deer-flow` 的"SuperAgent harness"定位、阿里 `OpenSandbox` 的安全运行时、`ruflo` 的分布式集群编排，共同指向一个判断：**单智能体能力已趋成熟，社区焦点转向多智能体的协同基础设施**。这与 Anthropic 近期 MCP（Model Context Protocol）的生态推广直接相关——`activepieces` 明确标注支持 ~400 个 MCP 服务器，`langchain4j` 也新增 MCP 支持。

**Claude Code 插件生态成型**：`claude-subconscious`（潜意识层）、`claude-mem`（记忆压缩）、`ralph-claude-code`（自主开发循环）等项目的涌现，表明 Claude Code 正从"编程助手"进化为**可扩展的 AI 开发平台**，开发者开始为其构建"意识增强"外挂。

**"无向量 RAG"技术路线分歧**：`PageIndex` 提出的"Vectorless, Reasoning-based RAG"与 `LEANN` 的极端压缩方案，反映社区对向量数据库成本与复杂性的反思，检索增强生成可能进入**后向量数据库时代**。

---

### 4. 社区关注热点

- **🔥 `deer-flow`（字节跳动）** — 大厂首次开源完整 Agent 操作系统级框架，沙箱+记忆+子智能体+消息网关的全栈设计，可能重塑开源 Agent 格局
- **🔥 `ruflo` + `last30days-skill` — Claude 生态与跨平台研究 Agent 的双星爆发，验证"专业 Agent 技能市场"的可行性
- **🔥 `supermemory` vs `cognee`** — "速度优先"与"知识图谱深度"两种记忆层技术路线的正面竞争
- **⚠️ `MoneyPrinterV2` 的伦理争议** — "自动化赚钱"类应用的流行，提示 AI 内容农场与垃圾信息生成工具的治理紧迫性
- **🔬 `RuView`（WiFi DensePose）** — 无摄像头人体感知技术的开源化，隐私计算与智能感知的交叉创新

---

*报告生成时间：2026-03-26*  
*数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*