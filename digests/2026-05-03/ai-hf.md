# Hugging Face 热门模型日报 2026-05-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-03 00:18 UTC

---

# Hugging Face 热门模型日报 | 2026-05-03

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 与 **Qwen3.6 生态** 主导，前者以 Pro 与 Flash 双版本包揽高赞高下载，后者凭借 27B/35B-A3B 多规格及活跃社区微调形成矩阵效应。Google Gemma-4-31B 以 777 万下载量成为实际使用最广的模型，印证多模态对话已成主流需求。社区量化与去审查微调异常活跃，Unsloth 与 HauhauCS 等贡献者持续降低模型部署门槛。值得注意的是，NVIDIA Nemotron-3 Nano Omni 系列推动"any-to-any"原生多模态架构进入实用阶段，而小米 MiMo-V2.5 的长上下文与 Agent 能力标志着端侧智能的进阶。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,415 | 381,587 | 本周点赞冠军，DeepSeek 新一代旗舰对话模型，延续 MoE 架构优势，专业场景推理能力显著提升 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 921 | 345,885 | V4 系列轻量版，以接近 Pro 的下载量验证"性能-速度"平衡策略的市场认可度 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 381 | 9,914 | 小米端侧 Agent 模型进阶版，支持超长上下文与工具调用，瞄准设备原生智能 |
| **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** | poolside | 189 | 7,573 | 代码智能新秀 Laguna 系列迭代，专为软件工程工作流优化的轻量生成模型 |
| **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)** | inclusionAI | 100 | 535 | 阿里系 Ling 系列万亿参数实验版本，探索超大规模稀疏架构的推理效率边界 |
| **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** | ibm-granite | 132 | 16,079 | IBM 企业级语言模型小参数版，强调可信 AI 与低资源部署，适合 B 端合规场景 |
| **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)** | ibm-granite | 79 | 3,072 | Granite-4.1 大参数版本，30B 规模在代码生成与文档理解任务中表现突出 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,181 | 699,348 | 月之暗面 Kimi 系列更新，采用压缩张量技术优化长文本推理内存占用 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,077 | 1,070,778 | Qwen3.6 视觉语言基础版，百万级下载验证其作为开源多模态基座的广泛采用 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,572 | 2,397,446 | Qwen3.6 MoE 架构旗舰，激活参数仅 3B 却实现 35B 性能，效率比引发社区热议 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,480 | 7,776,034 | 本周下载量绝对王者，Google Gemma-4 指令版以近 800 万下载证明开源多模态模型的生产级渗透 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 198 | 37,418 | NVIDIA "any-to-any" 原生多模态推理模型，文本/图像/音频/视频统一编码解码，BF16 精度版 |
| **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)** | XiaomiMiMo | 192 | 28,323 | MiMo 基础多模态版，集成视觉-语言-音频三模态理解，为端侧 Omni 能力铺路 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 119 | 1,308 | 商汤 SenseNova 混合专家多模态模型，8B 总参数 MoT 架构探索稀疏激活的多模态融合 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)** | nvidia | 68 | 180,012 | Nemotron Omni 同系列 NVFP4 量化版，下载量反超 BF16 版 4 倍，验证硬件原生低精度格式的部署优势 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,211 | 99,399 | OpenAI 官方隐私实体识别过滤器，token 分类架构，企业数据合规 pipeline 的关键组件 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 78 | 487 | 混元翻译模型极端量化实验，1.25bit 权重压缩探索翻译任务的精度-体积极限 |
| **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)** | ibm-granite | 68 | 1,598 | Granite 多语言嵌入模型 R2 版，ModernBERT + 多框架导出，企业 RAG 系统的轻量检索核心 |
| **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** | facebook | 110 | 0 | Meta 人体中心视觉模型二代，专注人体姿态/分割/深度估计，零下载或因刚发布或需特定渠道获取 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 542 | 983,535 | Unsloth 官方 Qwen3.6-27B GGUF 量化，近百万下载成为本地部署该模型的首选格式 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 895 | 2,001,316 | MoE 模型 GGUF 量化标杆，200 万下载证明 Unsloth 在复杂架构量化上的技术领先性 |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 262 | 303,358 | 社区激进去审查微调版，30 万下载反映特定场景对安全对齐绕过版本的强需求 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 528 | 766,075 | MoE 版激进去审查微调，点赞与下载双高，成为社区微调生态中争议与流量并存的典型 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** | z-lab | 205 | 17,016 | 社区优化的"动态 Flash"注意力变体，探索长序列推理的内存效率新路径 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,441 | 199,500 | Gemma-4 的 MLX 平台去审查/消融版本，苹果芯片本地运行 + 安全限制解除的双重卖点 |
| **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)** | unsloth | 92 | 37,663 | Unsloth 将 NVIDIA Omni 多模态模型转制 GGUF，突破性地让 any-to-any 架构进入本地 GPU 部署 |

---

## 生态信号

**模型家族格局**：Qwen 与 DeepSeek 形成"双极"——前者以 3.6 代多规格矩阵（27B/35B-A3B）+ 繁荣社区生态占据广度，后者以 V4 系列技术标杆定位收割专业口碑。Google Gemma-4 凭 777 万下载证明"大厂开源基座"仍具最强渗透力，但社区二次创作（如 dealignai 的 CRACK 版）正分流其流量入口。

**开源权重演进**：闭源厂商（OpenAI）转向发布专用工具组件（privacy-filter）而非核心模型，暗示其战略从"模型开源"收缩至"基础设施开源"；反之，DeepSeek、Qwen、小米等中国厂商持续全权重开源，并快速迭代至 V4/3.6/K2.6 代际，形成对 Mistral、Meta 的追赶乃至局部超越。

**量化与微调活动**：GGUF 已成为事实标准——Unsloth 双版本合计 300 万下载，且成功覆盖 MoE 与 Omni 等复杂架构。激进去审查微调（HauhauCS）与硬件专属优化（MLX for Apple Silicon、NVFP4 for NVIDIA）构成社区创新的两大主线，反映用户侧"性能解锁"与"场景适配"的深层需求。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 777 万下载量本身就是信号——若需验证多模态对话模型的生产就绪度，此模型拥有最广泛的实战检验基础；其 image-text-to-text 能力覆盖文档理解、UI 交互、教育辅导等高价值场景，且 Google 生态工具链成熟 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | "any-to-any" 架构代表多模态的终极形态——非拼接式、非编码器分离式，而是统一空间下的原生推理；30B-A3B 的 MoE 设计控制推理成本，适合研究下一代多模态系统架构，或构建真正的"全能助手"原型 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 200 万下载的 MoE 量化模型，是验证"本地高效运行大模型"假设的最佳实验对象；若能在消费级 GPU 上跑出 35B 等效性能，将直接改写边缘 AI 的成本结构，建议重点测试其长上下文与工具调用稳定性 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*