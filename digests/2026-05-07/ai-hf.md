# Hugging Face 热门模型日报 2026-05-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-07 00:19 UTC

---

# Hugging Face 热门模型日报 | 2026-05-07

---

## 今日速览

DeepSeek-V4-Pro 以 3,650 点赞稳居榜首，延续了中国大模型在开源社区的强势表现。Qwen3.6 系列（27B/35B-A3B）全面爆发，官方与社区量化版本合计下载量突破 700 万，成为今日最大赢家。Google Gemma-4 系列正式入场，31B 指令版下载量已超 840 万，显示轻量级多模态模型的巨大吸引力。社区微调与量化生态持续活跃，Uncensored、GGUF 等标签高频出现，反映用户对本地部署和可控性的强烈需求。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,650 | 786,631 | DeepSeek 最新旗舰，以极高效率与推理能力登顶本周热度榜 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 966 | 668,670 | Pro 版本的轻量化变体，平衡性能与部署成本 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,538 | 8,403,901 | Google Gemma-4 核心版本，下载量碾压全场，轻量多模态新标杆 |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,155 | 1,613,364 | 阿里云 Qwen3.6 主力型号，视觉-语言融合能力全面升级 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,646 | 3,030,186 | MoE 架构旗舰，激活参数仅 3B，推理成本极低 |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,213 | 997,278 | 月之暗面新一代模型，长上下文与压缩技术并重 |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 456 | 16,030 | 小米 MiMo 专业版，聚焦 Agent 与超长上下文场景 |
| [inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T) | inclusionAI | 419 | 1,254 | 1T 参数规模的混合架构实验模型，探索超大规模稀疏化 |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 228 | 14,457 | AI 编程助手 poolside 的轻量代码模型迭代 |
| [ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) / [30b](https://huggingface.co/ibm-granite/granite-4.1-30b) | ibm-granite | 160/102 | 21,803/7,329 | IBM Granite 4.1 系列，企业级多语言文本生成 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 295 | 55,461 | 新兴文本到视频模型，支持 GGUF 格式与端点部署 |
| [SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 191 | 3,819 | 动漫风格文本到图像生成，社区小众但粘性高 |
| [google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant) | google | 121 | 4,241 | Gemma-4 的 any-to-any 助手变体，探索统一架构 |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 253 | 53,121 | NVIDIA 全模态推理模型，Nano 系列中规模最大 |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 162 | 2,422 | 商汤 SenseNova 多模态实验，MoT 架构创新 |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 217 | 62,371 | MiMo 基础多模态版，覆盖视觉-语言-音频三模态 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,325 | 155,476 | OpenAI 官方隐私过滤工具，PII 检测与脱敏，企业合规刚需 |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 99 | 16,554 | 1.25bit 极致量化翻译模型，探索超低精度可行性 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 601 | 1,197,196 | Unsloth 官方 Qwen3.6-27B GGUF，本地部署首选 |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 946 | 2,327,706 | MoE 旗舰的 GGUF 版本，下载量超 230 万，量化生态顶流 |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,481 | 182,625 | Gemma-4 社区破解微调版，"abliterated" 标签引发伦理讨论 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 569 | 913,986 | 激进去审查版本，近百万下载显示用户对内容自由的诉求 |
| [DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 81 | 106,958 | 超长命名即卖点：融合代码、IMatrix 优化的极端定制版 |
| [Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF) | Jackrong | 97 | 85,712 | 跨模型家族蒸馏实验，Qwen3.5 架构搭载 DeepSeek 知识 |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 250 | 26,361 | 社区版"DFlash"优化，探索动态推理加速 |

---

## 生态信号

**Qwen 家族已成开源生态绝对核心**：官方 4 个版本 + 社区 6+ 衍生版，覆盖从 9B 到 35B-A3B 全档位，GGUF 量化下载量合计超 450 万。DeepSeek 与 Google 形成"性能-轻量"双极，前者统治技术口碑，后者凭 Gemma-4 的 840 万下载证明轻量化路线的商业潜力。值得警惕的是，**"Uncensored/abliterated" 标签在 Top30 中出现 4 次**，社区对模型安全对齐的反制已成规模化现象，这既是开源自由的体现，也可能带来监管反弹。量化工具链方面，Unsloth 几乎垄断官方 GGUF 分发，但 DavidAU、HauhauCS 等个人开发者仍能凭极端定制获得十万级下载，显示长尾创新的生命力。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 840 万下载量远超第二名，证明 Google 在"小体积+多模态+易部署"三角上的产品化能力已达临界点，适合作为端侧应用基线测试 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | MoE + 极致量化 + 230 万下载，是当前"大模型小成本"工程实践的最优解参考，值得研究其吞吐与精度 trade-off |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | 罕见的 OpenAI 官方开源工具，ONNX 格式 + 企业级场景，是观察闭源巨头开源策略与合规技术路线的独特窗口 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*