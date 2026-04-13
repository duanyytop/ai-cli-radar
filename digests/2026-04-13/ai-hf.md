# Hugging Face 热门模型日报 2026-04-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-13 00:13 UTC

---

# Hugging Face 热门模型日报 · 2026-04-13

---

## 今日速览

本周 Hugging Face 生态呈现**多模态主导、社区微调爆发**的态势。Google Gemma-4 系列以 7 个变体霸榜，成为最活跃的模型家族；Qwen3.5 与 GLM-5.1 展现中国模型强劲势头，蒸馏与 MoE 架构成为性能优化关键路径。值得关注的是，"Uncensored/Aggressive" 类社区微调模型下载量激增，反映下游应用对可控性的强烈需求。量化格式（GGUF/NVFP4）与 1-bit 极端压缩技术加速边缘部署落地。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,064 | 28,826 | 智谱最新 MoE+DSA 架构对话模型，稀疏激活设计实现高效推理 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 457 | 873 | 海螺 AI 新一代基座模型，专注长上下文与多轮对话连贯性 |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 169 | 21,636 | 社区优化的 NVFP4 量化版本，为 Ada 架构 GPU 提供极致推理速度 |
| **[LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)** | LGAI-EXAONE | 115 | 3,660 | 韩国 LG 最新双语大模型，韩语场景性能对标 GPT-4 级水平 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 566 | 74,389 | **1-bit 极端量化**实验模型，验证超小体积下的可用性边界 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,774 | 2,242,541 | **本周下载冠军**，Gemma-4 旗舰视觉语言模型，原生 4K 图像理解 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,597 | 578,295 | **本周点赞冠军**，Claude-4.6 级推理能力蒸馏至 Qwen3.5，性价比炸裂 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 606 | 1,269,309 | "Any-to-Any" 原生多模态架构，统一处理文本/图像/音频/视频输入 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 744 | 7,452 | 清华 OpenBMB 新一代多语言 TTS，支持零样本音色克隆与情感控制 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 522 | 393,991 | 下一代语音合成基座，跨语言音色迁移与实时流式合成 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 775 | 0 | **神秘零下载**，Netflix 视频修复与物体消除模型，影视工业化工具 |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,139 | 44,802 | 百度千帆多语言 OCR，基于 InternVL 架构优化文档理解精度 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 133 | 582 | 腾讯混元具身智能小模型，机器人视觉-语言-动作联合推理 |
| **[LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M)** | LiquidAI | 112 | 6,004 | 450M 参数极限压缩视觉语言模型，验证小模型多模态可行性 |
| **[ACE-Step/acestep-v15-xl-turbo](https://huggingface.co/ACE-Step/acestep-v15-xl-turbo)** | ACE-Step | 83 | 2,849 | 音乐生成加速版，文本/结构双条件控制，实时编曲辅助工具 |
| **[black-forest-labs/FLUX.2-small-decoder](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder)** | black-forest-labs | 77 | 5,023 | FLUX.2 轻量化解码器，图像编辑与修复场景的低显存方案 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

*本周专用模型较少上榜，多模态通用模型持续侵蚀垂直领域。*

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 957 | 99,134 | "ABLITERATED" 去对齐微调，解除安全限制的研究向变体 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 439 | 1,676,935 | Unsloth 官方 GGUF 量化，消费级 GPU 运行 26B 多模态模型 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 278 | 432,494 | 激进去审查版本，"Aggressive" 标签反映社区对无过滤模型的需求 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,105 | 878,643 | 小体积高热度，9B 参数实现近百万下载，边缘部署+无限制双优势 |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 125 | 25,680 | Unsloth 快速跟进 GLM-5.1 量化，中国模型生态国际化加速 |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 292 | 1,102,673 | 31B 旗舰版 GGUF，110万下载验证大模型边缘化可行性 |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 282 | 117,532 | Qwen3.5 推理专用版量化，"Qwopus" 暗示 Octopus 工具调用能力 |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 243 | 1,030,765 | Any-to-Any 模型量化突破，多模态边缘部署里程碑 |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*