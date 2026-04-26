# Hugging Face 热门模型日报 2026-04-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-26 00:15 UTC

---

# Hugging Face 热门模型日报 | 2026-04-26

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 和 **Qwen3.6 生态** 主导，前者以 MIT 许可证发布引发开源社区关注，后者凭借 MoE 架构和活跃的社区微调/量化占据榜单半壁江山。Google Gemma-4 以近 580 万下载量证明其商业化落地能力，而 **LLaDA2.0-Uni** 的 "any-to-any" 架构和 **Hy-World 2.0** 的 3D 世界模型则代表了模型架构的新探索方向。社区量化（GGUF）和"去审查化"微调活动异常活跃，Unsloth 持续成为基础设施层最大赢家。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 2,684 | 78,864 | 本周最热模型，MIT 许可证开源，Pro 版本定位高性能推理场景 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 685 | 25,391 | 轻量高速版本，同样 MIT 许可，平衡性能与部署成本 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,514 | 217,889 | 智谱新一代 MoE+DSA 架构，中文对话能力突出 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,066 | 477,205 | MiniMax 最新迭代，47 万下载量验证其生产环境稳定性 |
| **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | tencent | 143 | 2,982 | 腾讯 Hy 系列第三代预览，探索高效 Transformer 变体 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,025 | 291,840 | Kimi 多模态旗舰，支持图像理解，压缩张量技术降低显存占用 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 813 | 257,685 | 阿里 Qwen3.6 视觉语言模型，27B 参数性价比突出 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,404 | **1,027,741** | **本周下载量冠军**，35B 总参数/3B 激活的 MoE 架构，多模态标杆 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,359 | **5,770,677** | **绝对下载霸主**，Gemma 4 代 31B 指令版，企业部署首选 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 563 | 7,517 | 百度文心图像生成模型，8B 参数 Apache-2.0 开源 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 602 | 2,851 | 腾讯 3D 世界模型，从单图生成可交互 3D 环境 |
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 272 | 540 | NVIDIA 新一代 3D 生成，学术论文背书（arXiv:2604.13036） |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,234 | 97,967 | 清华 OpenBMB 多语言 TTS，语音合成质量跃升 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 749 | 21,097 | OpenAI 官方隐私过滤模型，token 级 PII 检测，ONNX 加速 |
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | inclusionAI | 176 | 281 | 扩散语言模型+MoE 的 any-to-any 架构，范式实验性极强 |
| **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | robbyant | 172 | 0 | 学术研究模型（arXiv:2604.14141），语言机器人映射机制探索 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 404 | 458,273 | Unsloth 官方量化，消费级 GPU 可运行的 27B 多模态 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 763 | **1,488,984** | **量化版下载冠军**，MoE 模型 GGUF 化，149 万次下载验证基础设施成熟度 |
| **[unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** | unsloth | 105 | 11,582 | Kimi 多模态量化版，Unsloth 生态持续扩张 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 429 | 418,743 | 激进去审查微调，41 万下载反映特定需求市场 |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 157 | 110,101 | 同系列 27B 版本，去审查微调社区化趋势明显 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 503 | 110,832 | Gemma-4 "abliterated" 版本，安全对齐移除实验 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 181 | 104,757 | 蒸馏 Claude-4.6 Opus 推理能力至 Qwen MoE，跨模型知识迁移 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 204 | 73,177 | Qwen+GLM "frankenmerge" 18B，社区模型融合实验 |
| **[KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | KyleHessling1 | 98 | 27,659 | 同上架构变体，社区复现验证 |
| **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 151 | 25,059 | DFlash 特征提取变体，Qwen 生态垂直优化 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** | z-lab | 83 | 1,703 | 同系列 27B 轻量版 |

---

## 生态信号

**Qwen 家族** 以 12 个上榜模型（含 8 个社区衍生）成为绝对生态核心，其 MoE 架构（35B-A3B）因"大参数小激活"特性成为量化微调首选基底。**DeepSeek-V4** 以 MIT 许可证挑战 Llama 生态，但下载量尚未爆发，需观察开发者迁移意愿。Google Gemma-4 凭 580 万下载证明闭源厂商开源"蒸馏版"的商业策略成功——既占领生态位又不泄露核心能力。值得警惕的是 **"去审查化"微调** 的产业化：HauhauCS、OBLITERATUS 等账号形成固定范式，下载量均超 10 万，反映开源安全对齐的脆弱性。Unsloth 作为量化基础设施，3 个模型合计 196 万下载，已成为 Hugging Face 的"隐形水电煤"。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | 罕见的扩散+MoE+any-to-any 三重创新，虽下载仅 281 次，但可能是下一代架构原型。适合研究"非自回归生成"的学者和前沿工程师关注。 |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | MIT 许可证 + 2,684 点赞的顶级 LLM，商业友好度超越 Llama 的定制许可。建议企业评估从 Llama 3 迁移的可行性，尤其关注其 Pro 版本的推理成本优化。 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | 跨模型蒸馏的极端案例：将闭源最强推理模型能力注入开源可部署架构。10 万下载验证其实用性，是"开源模型+闭源 API 混合策略"的典型实践。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*