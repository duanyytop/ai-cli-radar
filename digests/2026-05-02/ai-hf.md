# Hugging Face 热门模型日报 2026-05-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-02 00:20 UTC

---

# Hugging Face 热门模型日报 | 2026-05-02

---

## 今日速览

DeepSeek-V4-Pro 以 3,368 点赞领跑本周，延续其"Pro/Flash"双轨策略；Google Gemma-4-31B-it 下载量突破 747 万，成为实际部署最广泛的多模态模型。Qwen3.6 系列呈现爆发态势，官方与社区衍生版本共占据 7 个席位，27B 与 35B-MoE 双线并进。量化生态持续活跃，Unsloth 与 HauhauCS 的 GGUF 版本合计下载超 390 万。值得关注的是，"any-to-any"统一架构开始涌现，NVIDIA Nemotron-3 与 inclusionAI LLaDA2.0 代表下一代交互范式。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,368 | 321,492 | DeepSeek 最新旗舰，Pro 版本定位复杂推理与长程任务，点赞数断层领先 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 907 | 281,356 | 同代轻量版，兼顾延迟敏感场景，与 Pro 形成完整产品矩阵 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,572 | 279,489 | 智谱 GLM 系列迭代，MoE+DSA 架构，对话能力获社区高认可 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 349 | 7,944 | 小米端侧模型 Pro 版，强调 Agent 能力与超长上下文 |
| **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** | poolside | 174 | 5,690 | Poolside 代码模型新迭代，vLLM 优化指向生产级推理 |
| **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** | ibm-granite | 119 | 14,275 | IBM 企业级 8B 模型，Granite 4.1 系列主打可信与合规 |
| **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)** | ibm-granite | 69 | 2,010 | 同系列 30B 参数规模，满足更高精度企业需求 |
| **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)** | inclusionAI | 90 | 393 | 阿里系 Ling 系列 1T 上下文版本，长文档处理专用 |
| **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)** | inclusionAI | 132 | 897 | Ling 系列轻量版，MIT 许可降低商用门槛 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,464 | **7,474,774** | Gemma 4 代多模态旗舰，下载量碾压全场，开源多模态事实标准 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,055 | 906,859 | 通义千问 3.6 代视觉语言模型，图像理解能力迭代升级 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,551 | **2,218,739** | 35B 激活 3B 的 MoE 架构，效率与效果平衡，下载量破 220 万 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,173 | 649,331 | 月之暗面 Kimi 系列，压缩张量技术降低显存占用 |
| **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)** | XiaomiMiMo | 180 | 21,407 | MiMo 基础多模态版，覆盖视觉-语言-音频三模态 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 183 | 35,000 | NVIDIA "any-to-any" 统一架构，Nano Omni 指向端侧全模态推理 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 103 | 1,148 | 商汤 SenseNova U1，MoT（Mixture of Tokens）架构探索新路径 |
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | inclusionAI | 238 | 917 | LLaDA 扩散架构 2.0，any-to-any 任务统一建模，Diffusers 生态兼容 |
| **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** | facebook | 106 | 0 | Meta 人体中心视觉模型二代，专注人体理解与交互 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,176 | 92,567 | OpenAI 官方隐私过滤模型，token 级 PII 检测，ONNX 加速生产部署 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 68 | 470 | 腾讯混元翻译模型 1.25bit 极限量化，1.8B 参数专攻低资源部署 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 529 | 920,570 | Unsloth 官方 GGUF 量化，27B 多模态模型本地运行方案 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 879 | **1,940,844** | 35B-MoE GGUF 版本，近 200 万下载验证量化需求旺盛 |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 251 | 286,798 | 社区激进去 censorship 版本，视觉模态保留，争议性高热度 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 519 | 728,262 | 35B-MoE 去 censorship 版，下载量超 72 万，社区需求信号强烈 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** | z-lab | 193 | 14,793 | 社区衍生 DFlash 架构，feature-extraction 指向嵌入场景 |
| **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)** | unsloth | 90 | 32,620 | Unsloth×NVIDIA 联名量化，全模态模型本地化首次尝试 |
| **[kai-os/Carnice-V2-27b-GGUF](https://huggingface.co/kai-os/Carnice-V2-27b-GGUF)** | kai-os | 75 | 32,156 | 社区融合 Qwen3.6/3.5 的 GGUF 再创作，llama.cpp 生态兼容 |
| **[AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16](https://huggingface.co/AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16)** | AEON-7 | 74 | 3,793 | BF16 精度保留的 "abliterated" 版本，平衡性能与可控性 |

---

## 生态信号

**Qwen 家族统治力凸显**：官方 4 席 + 社区衍生 5 席，共 9 个模型占据 30% 榜单，27B/35B-MoE 双线成为开源微调事实基座。**Gemma-4** 以 747 万下载证明 Google 开源策略的终端渗透力，与 Qwen 形成"国际-中国"双极。**any-to-any 架构萌芽**：NVIDIA Nemotron-3、inclusionAI LLaDA2.0、sensenova U1 均突破模态边界，预示 2026 年模型交互范式变革。量化生态方面，Unsloth 与 HauhauCS 的 GGUF 版本合计下载超 390 万，"去 censorship" 微调虽具争议，却真实反映开发者对可控性的强烈需求。闭源厂商（OpenAI、Moonshot）以专用模型或权重开放形式参与，与全开源形成互补。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 747 万下载验证的生产级多模态方案，transformers 原生支持，企业落地首选基线 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | "any-to-any" 架构先驱，30B-A3B MoE 设计兼顾性能与效率，预示下一代交互标准 |
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | 扩散架构 + Diffusers 生态 + 统一模态，技术路线差异化显著，适合研究生成模型新范式 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*