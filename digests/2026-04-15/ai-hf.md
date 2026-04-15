# Hugging Face 热门模型日报 2026-04-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-15 00:17 UTC

---

# Hugging Face 热门模型日报 · 2026-04-15

---

## 今日速览

Google **Gemma 4** 家族持续霸榜，官方多尺寸模型与社区 GGUF/量化衍生版占据近半壁江山。国产模型表现亮眼，**Qwen3.5** 与 **GLM-5.1** 凭借高点赞数和活跃的社区微调生态跻身前列。多模态与语音赛道升温，**OmniVoice** 零样本语音克隆与 **VoxCPM2** 多语言 TTS 获得大量关注。值得注意的是，**uncensored/abliterated** 微调版本和 **1-bit 量化**（Bonsai-8B）成为社区工程创新的两大热点。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,197 | 84,784 | 智谱最新 MoE+DSA 架构对话模型，国产开源大模型技术标杆。 |
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 709 | 43,645 | MiniMax 新一代基座模型，长上下文与推理能力突出。 |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,645 | 588,751 | 本周点赞王，Qwen3.5 经 Claude 4.6 Opus 推理蒸馏，社区热度极高。 |
| [LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) | LGAI-EXAONE | 138 | 4,826 | LG 最新多模态大模型，韩厂在开源 LLM 赛道的重要布局。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,893 | 2,640,636 | Gemma 4 旗舰多模态模型，图像-文本理解能力强劲，下载量断层领先。 |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 871 | 10,899 | 清华 OpenBMB 多语言 TTS 模型，语音自然度与跨语言能力受好评。 |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 568 | 530,898 | 零样本多语言语音克隆 TTS，下载量证明其工程实用价值。 |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 811 | 0 | Netflix 开源视频修复/物体消除模型，影视工业级视频编辑新工具。 |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 648 | 1,503,266 | "Any-to-Any" 原生多模态 Gemma，支持图像、文本、音频统一输入输出。 |
| [black-forest-labs/FLUX.2-small-decoder](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder) | black-forest-labs | 95 | 9,479 | FLUX 系列更小体积的图像生成解码器，效率与质量再平衡。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

> 本期 Top 30 中纯专用模型（代码/数学/医疗/嵌入）未直接出现，相关能力已融入上述通用模型。以下列出具有明确垂直特性的模型：

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5) | tencent | 481 | 723 | 腾讯混元具身智能视觉语言模型，机器人/ embodied AI 早期开源版本。 |
| [LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V) | LiconStudio | 105 | 2,731 | 视频逻辑推理 LoRA，专注提升图像到视频生成的时序一致性。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,090 | 117,491 | Gemma 4 社区 uncensored 微调版，"abliterated" 标签引发伦理与技术讨论。 |
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 223 | 12,687 | Gemma 4 26B 的 llama.cpp GGUF 量化版，本地部署友好。 |
| [LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo) | LilaRest | 213 | 41,945 | 社区 NVFP4 精度压缩版，在 RTX 50 系显卡上追求极致推理速度。 |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 468 | 1,917,696 | Unsloth 官方 GGUF，近 200 万下载说明其已成为本地多模态首选量化方案。 |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 314 | 523,928 | E4B Any-to-Any 模型的激进去限制微调，视觉能力保留完整。 |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,136 | 932,202 | 高人气 Qwen3.5 9B 去限制 GGUF，轻量化+高热度双重优势。 |
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 589 | 78,763 | **1-bit 量化**极端压缩方案，边缘设备运行 8B 参数的新实验方向。 |
| [nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 384 | 827,992 | NVIDIA 官方 ModelOpt NVFP4 优化版，硬件厂商深度参与模型分发。 |
| [unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF) | unsloth | 143 | 31,267 | Unsloth 为 GLM-5.1 提供的官方 GGUF，国产模型国际化量化生态的重要一步。 |

---

## 生态信号

**Gemma 4** 已成为当前最强势的开源权重家族，Google 官方 5 个型号全部上榜，并催生了超过 10 个社区量化/微调版本，形成完整的"官方发布 → Unsloth GGUF → 去限制/蒸馏微调"生态链条。**Qwen3.5** 与 **GLM-5.1** 则代表国产模型在开源社区的影响力持续扩大，尤其 Qwen 的蒸馏版获得本周最高点赞。量化技术呈现两极分化：一边是 **NVFP4** 等硬件协同高精度压缩走向主流，另一边 **1-bit（Bonsai-8B）** 等极端量化开始探索边缘部署边界。闭源模型虽仍领先基准榜，但开源权重的"发布即量化、当天可本地运行"节奏，正在加速技术民主化。

---

## 值得探索

1. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**  
   本周点赞数最高（2,645），代表了"闭源教师模型 + 开源学生模型"蒸馏范式的社区巅峰，值得研究其推理能力迁移效果与训练细节。

2. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   零样本语音克隆 + 53 万下载量的组合极为罕见，语音合成赛道的新晋实用利器，适合快速集成到语音应用或研究跨语言 TTS 泛化。

3. **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)**  
   1-bit 量化的激进实验，若能在可接受质量损失下运行 8B 模型，将重新定义端侧 LLM 的硬件门槛，值得持续关注其实际 perplexity 与下游任务表现。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*