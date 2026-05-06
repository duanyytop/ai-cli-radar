# Hugging Face 热门模型日报 2026-05-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-06 00:19 UTC

---

# Hugging Face 热门模型日报 · 2026-05-06

---

## 今日速览

DeepSeek-V4系列延续强势表现，Pro版以3,576点赞稳居榜首，Flash版下载量突破56万，显示开源大模型在效率与性能平衡上的持续突破。Qwen3.6家族成为今日最大赢家，27B与35B-A3B双版本合计下载超430万，MoE架构与视觉理解能力获得社区高度认可。Google Gemma-4-31B以820万+下载量验证了其开源多模态路线的市场吸引力。社区量化生态活跃，unsloth推出的Qwen3.6 GGUF版本下载量均破百万，反映边缘部署需求的爆发。此外，IBM Granite 4.1系列全面铺开语言、嵌入、语音三条产品线，企业级开源模型竞争白热化。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,576 | 631,499 | DeepSeek新一代旗舰，以极高点赞数领跑本周，延续其在开源LLM领域的标杆地位 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 952 | 560,958 | Pro版的轻量化变体，以接近Pro的下载量证明"小体积+高性能"路线的市场刚需 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,626 | 2,884,820 | **今日下载之王**，35B激活参数仅3B的MoE架构，实现性能与推理成本的最优解 |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,128 | 1,458,973 | 密集架构的视觉语言模型，145万下载验证其在多模态对话场景的稳定表现 |
| [mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) | mistralai | 270 | 15,024 | Mistral 3.5系列中等规模模型，128B总参数量定位中高端推理市场 |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 438 | 13,317 | 小米自研长上下文Agent模型，专注端侧智能与工具调用场景 |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 219 | 12,027 | AI编程助手poolside的最新迭代，面向代码生成与软件工程任务优化 |
| [inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash) | inclusionAI | 457 | 1,310 | 阿里通义千问生态的轻量版，"百灵"混合架构主打低延迟对话 |
| [inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T) | inclusionAI | 411 | 1,062 | 1T总参数的超大规模版本，与flash形成"超大+超轻"的双轨布局 |
| [ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) | ibm-granite | 155 | 19,605 | IBM企业级开源LLM的小尺寸版本，面向私有化部署与合规场景 |
| [ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b) | ibm-granite | 100 | 5,527 | Granite 4.1系列主力版本，30B参数平衡性能与硬件成本 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,523 | 8,206,643 | **历史级下载量**，Gemma 4代多模态指令版，开源视觉语言模型的现象级产品 |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,204 | 892,962 | 月之暗面Kimi系列最新版，压缩张量技术实现长文本多模态高效推理 |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 242 | 44,631 | NVIDIA"任意到任意"全能模型，30B Nano Omni架构探索统一多模态理解 |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4) | nvidia | 88 | 331,553 | BF16版本的NVFP4量化变体，33万下载显示NVIDIA原生格式的生态牵引力 |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 154 | 2,179 | 商汤"日日新"U1系列，8B参数+MoT架构探索端侧多模态Agent |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 212 | 57,759 | MiMo基础多模态版，覆盖视觉-语言-音频三模态，为Pro版提供基座能力 |
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 233 | 37,897 | 新兴文本到视频生成模型，支持GGUF格式与端点兼容，降低视频生成门槛 |
| [SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 155 | 3,262 | 社区驱动的动漫风格文生图模型，GGUF支持拓展了消费级GPU的可及性 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,298 | 141,317 | OpenAI罕见开源的隐私过滤工具，基于token分类实现敏感信息检测与脱敏 |
| [ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2) | ibm-granite | 80 | 3,104 | 97M参数多语言嵌入模型，ModernBERT架构+R2迭代，面向企业RAG流水线 |
| [ibm-granite/granite-speech-4.1-2b](https://huggingface.co/ibm-granite/granite-speech-4.1-2b) | ibm-granite | 68 | 18,894 | Granite 4.1语音分支，2B参数多语言ASR，补全IBM开源模型家族版图 |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 94 | 16,370 | 1.25bit极端量化翻译模型，1.8B参数运行成本极低，验证非标准量化的可行性 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 927 | 2,243,715 | unsloth官方GGUF，224万下载逼近原版，成为MoE模型边缘部署的事实标准 |
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 581 | 1,147,196 | 27B密集版的GGUF变体，百万级下载证明社区对"unsloth速度+GGUF兼容"的强需求 |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,475 | 195,870 | **社区微调黑马**，Gemma-4的"解除限制"版本，1,475点赞反映对开源模型可控性的复杂需求 |
| [Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF) | Jackrong | 83 | 68,132 | 跨模型蒸馏实验：Qwen3.5架构+DeepSeek-V4-Flash知识，GGUF格式探索模型融合 |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 240 | 24,768 | "DFlash"特征提取变体，社区对Qwen3.6架构的垂直场景适配尝试 |
| [talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) | talkie-lm | 235 | 0 | 零下载但235点赞的"幽灵模型"，可能为预发布或访问受限，反映社区对talkie-lm品牌的期待 |
| [TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros) | TenStrip | 101 | 0 | 同名零下载，LTX视频生成生态的衍生版本，标签极简暗示早期测试状态 |

---

## 生态信号

**Qwen与DeepSeek双寡头格局深化**：Qwen3.6家族（原版+GGUF）合计下载超770万，DeepSeek V4双版本合计近120万点赞与下载，两者覆盖从云端到边缘的全场景。Google Gemma-4以820万下载证明"大厂开源"仍具不可替代的流量优势，但社区微调版本（如dealignai的CRACK）的1,475点赞暗示开源治理的张力。**量化生态进入"百万下载"常态**：unsloth的GGUF版本下载量已与原版持平甚至超越，标志边缘推理从补充变为主流。**IBM Granite 4.1的矩阵式发布**（语言/嵌入/语音）显示企业级开源正从单点模型转向平台化竞争。闭源厂商如OpenAI仅通过privacy-filter等工具性模型参与，核心模型仍闭源，形成"开源权重主导生态、闭源API主导收入"的稳态。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 820万下载量的开源多模态标杆，其视觉理解能力与Gemma生态的工具链成熟度，使其成为构建生产级VLA应用的首选基座。建议对比其与Qwen3.6-27B在相同下游任务上的微调效率。 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 224万下载的MoE GGUF证明"大模型小激活"架构在消费级硬件上的可行性，是研究高效推理、探索本地Agent部署的必试模型，尤其关注其3B激活参数下的实际吞吐量表现。 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | OpenAI罕见开源的实用工具，141K下载显示企业合规需求的刚性。其ONNX+Safetensors双格式支持值得研究，可作为构建数据流水线安全层的关键组件，或分析OpenAI开源策略的窗口。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*