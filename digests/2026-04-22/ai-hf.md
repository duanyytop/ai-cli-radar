# Hugging Face 热门模型日报 2026-04-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-22 00:13 UTC

---

# Hugging Face 热门模型日报 · 2026-04-22

---

## 今日速览

本周 Hugging Face 热度由 **Google Gemma-4 系列** 与 **Qwen3.6 MoE 架构** 双引擎驱动，多模态能力成为标配竞争点。Gemma-4 以 31B 和 26B-A4B 版本合计超 1000 万下载量展现开源巨头统治力，而 Qwen3.6-35B-A3B 凭借激活参数仅 3B 的高效 MoE 设计引发社区量化狂欢。值得注意的是，**"去审查化"(abliterated/uncensored)** 微调模型在趋势榜中占据 5 席，反映开源社区对模型可控性的强烈需求。中国厂商密集发力：百度 ERNIE-Image、腾讯 Hunyuan 世界模型、MiniMax M2.7、智谱 GLM-5.1 等形成完整生态矩阵。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,256 | 4,465,127 | Google 新一代开源旗舰，31B 参数实现原生多模态对话，下载量碾压级领先 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,456 | 147,738 | 智谱最新 MoE+DSA 架构对话模型，国产开源大模型技术路线重要迭代 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,024 | 358,255 | MiniMax 新一代基础模型，对话能力突出，国内厂商出海代表 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 780 | 2,565,252 | "任意到任意"(any-to-any)架构实验，4B 参数探索极致轻量化多模态 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 765 | 3,285,842 | 26B 总参数/4B 激活的 MoE 变体，效率与性能平衡的新标杆 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,135 | 458,436 | 阿里 Qwen3.6 MoE 多模态旗舰，35B 总参数仅 3B 激活，视觉理解效率革命 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 702 | 8,241 | 月之暗面最新多模态模型，长上下文与视觉推理能力持续领跑 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 522 | 0 | 腾讯混元世界模型 2.0，图像直接生成 3D 场景，世界模型技术前沿探索 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 511 | 4,523 | 百度文心图像生成模型，8B 参数 Apache-2.0 开源，中文语义理解优势 |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 342 | 5,952 | ERNIE-Image 加速版，推理效率优化，实际部署友好 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 896 | 2,035 | 腾讯混元具身智能模型，视觉-语言-动作联合建模，机器人/自动驾驶场景 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,202 | 72,863 | 清华 OpenBMB 新一代 TTS，多语言语音合成质量跃升 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 667 | 1,147,673 | 语音合成/克隆工具，百万级下载验证其零样本多语言语音克隆实用性 |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 210 | 1,512 | Sparse MoE 架构扩散模型，探索稀疏激活在图像生成中的效率优势 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 246 | 192 | NVIDIA 研究模型，arXiv 预印本同步发布，具体能力待社区验证 |
| **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 86 | 8,483 | Qwen3.6 特征提取专用变体，DFlash 优化面向 RAG/嵌入场景 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 616 | 967,317 | Unsloth 官方量化，近百万下载验证 MoE 模型本地部署的旺盛需求 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 429 | 63,995 | Gemma-4 E4B 去审查化版本，"abliterated" 成为社区热门标签 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 335 | 261,086 | 激进去审查 Qwen3.6，26万下载反映特定场景需求 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 451 | 94,600 | Gemma-4 26B 社区融合版，"super" 命名暗示多模型能力聚合 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,325 | 167,156 | 高热度 MLX 框架适配版，苹果生态部署 + 去审查双重卖点 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 447 | 814,132 | E4B 激进去审查版，80万下载量说明小参数+低限制模型的部署吸引力 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 570 | 2,581,748 | Unsloth 官方 Gemma-4 MoE 量化，258万下载为本周量化模型之最 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 83 | 16,897 | 蒸馏 Claude-4.6 Opus 推理能力至 Qwen3.6，闭源能力开源化尝试 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** / **[KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong / KyleHessling1 | 171 / 78 | 28,638 / 4,520 | Qwen+GLM "弗兰肯斯坦"融合实验，"frankenmerge" 代表社区模型杂交新玩法 |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 184 | 35,335 | 扩散模型 GGUF 化罕见尝试，Unsloth 拓展量化边界至图像生成领域 |

---

## 生态信号

**Gemma-4 与 Qwen3.6 形成开源双寡头。** Google 以 31B/26B-A4B/E4B 三档覆盖全场景，合计下载超 1200 万；阿里 Qwen3.6-35B-A3B 则以 "大总参+极小激活" 的 MoE 设计成为效率标杆，社区量化版本下载量反超官方原版。中国厂商呈现 **"基础模型开源+生态工具跟进"** 的集群效应：百度 ERNIE-Image、腾讯 Hunyuan 系列、MiniMax、智谱 GLM 同步发力，在图像生成、世界模型、具身智能等垂直领域形成差异化。

**"去审查化" 已从边缘走向主流。** 5 个相关模型进入 Top 30，累计下载超 140 万，反映开源社区对安全对齐过度限制的反弹，以及企业私有化部署对可控性的刚需。

**量化生态呈现专业化分层：** Unsloth 占据官方合作生态位（3 个模型、380万+下载），个人开发者则通过 "frankenmerge"、跨模型蒸馏等实验探索能力边界。值得警惕的是，部分高点赞模型下载极低（如 Tencent HY-World-2.0 零下载），说明 **"发布即热点" 与 "实际落地" 仍存在鸿沟**。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 当前开源多模态模型的"事实标准"，450万下载验证的稳定性与生态兼容性，适合作为多模态应用基线 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | MoE 架构本地部署的最佳实践，3B 激活参数可在消费级 GPU 运行 35B 级别能力，效率革命的代表作 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | 世界模型 2.0 的前沿探索，图像→3D 的生成范式可能改变游戏、仿真、机器人训练的数据生产流程，尽管当前零下载，技术路线值得长期跟踪 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*