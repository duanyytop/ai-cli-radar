# Hugging Face Trending Models Digest 2026-04-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-15 00:17 UTC

---

# Hugging Face Trending Models Digest — April 15, 2026

---

## 1. Today's Highlights

This week's Hugging Face trending list is dominated by Google's **Gemma 4** family, with multiple official variants and community quantizations occupying nearly a third of the top 30 spots. The most striking breakout is **Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**, which has amassed the highest like count (2,645) by distilling reasoning capabilities into an open multimodal model. Meanwhile, **MiniMaxAI/MiniMax-M2.7** and **zai-org/GLM-5.1** signal continued momentum for Chinese-developed LLMs competing on the global stage. On the generative media front, **netflix/void-model** represents a notable entry into open video inpainting from a major non-tech industry player. Community fine-tuning and quantization remain extremely active, with **unsloth** alone contributing four GGUF variants and uncensored/abliterated forks continuing to drive significant engagement.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,197 | 84,784 | A MoE-based Chinese LLM pushing efficiency and performance boundaries in open text generation. |
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 709 | 43,645 | Compact but capable generative model from a rising Chinese AI lab, gaining strong early traction. |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,645 | 588,751 | The week's biggest hit: open multimodal model distilled with advanced reasoning, rivaling proprietary systems. |
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 589 | 78,763 | Extreme 1-bit quantization enabling remarkably efficient local inference without collapsing quality. |
| [LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) | LGAI-EXAONE | 138 | 4,826 | LG's latest Korean-English bilingual model, representing continued investment in regional open LLMs. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,893 | 2,640,636 | Google's flagship vision-language model, driving massive download volume as the Gemma 4 ecosystem launches. |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 648 | 1,503,266 | An "any-to-any" experimental Gemma 4 variant pointing toward unified multimodal architectures. |
| [tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5) | tencent | 481 | 723 | Tencent's embodied AI vision-language model for robotics and physical-world interaction. |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 811 | 0 | A surprising open release from Netflix for video inpainting and object removal, built on CogVideoX. |
| [black-forest-labs/FLUX.2-small-decoder](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder) | black-forest-labs | 95 | 9,479 | A streamlined FLUX decoder for faster, more accessible image generation and editing. |
| [LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M) | LiquidAI | 134 | 9,908 | A tiny but efficient vision-language model from a liquid neural network specialist lab. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 871 | 10,899 | A multilingual text-to-speech model with strong voice naturalness and cross-lingual capabilities. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 568 | 530,898 | Zero-shot multilingual voice cloning TTS with extremely high practical adoption. |
| [OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M) | OpenMOSS-Team | 91 | 3,272 | A compact 100M-parameter Chinese TTS model optimized for edge deployment. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,090 | 117,491 | An uncensored/abliterated MLX fine-tune of Gemma 4-31B, rapidly gaining a controversial following. |
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 223 | 12,687 | Fast llama.cpp-ready GGUF of a merged uncensored Gemma 4 variant for local deployment. |
| [LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo) | LilaRest | 213 | 41,945 | Community-optimized NVFP4 quantization of Gemma 4-31B for NVIDIA GPU inference acceleration. |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 468 | 1,917,696 | Official-feeling Unsloth GGUF release of Gemma 4's mid-size vision-language model, with enormous download numbers. |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 314 | 523,928 | Aggressive uncensored GGUF of the any-to-any Gemma 4-E4B, showing strong demand for unfiltered multimodal models. |
| [nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 384 | 827,992 | NVIDIA's official ModelOpt NVFP4 quantization, validating 4-bit floating point as a production standard. |
| [unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF) | unsloth | 143 | 31,267 | Unsloth's fast GGUF conversion bringing the new GLM-5.1 to local inference ecosystems. |
| [unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF) | unsloth | 101 | 36,406 | Rapid GGUF availability for MiniMax-M2.7, expanding local inference options beyond Western models. |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,136 | 932,202 | The week's most downloaded uncensored model: a highly popular aggressive unfilter of Qwen 3.5 9B. |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 307 | 137,824 | GGUF release of a reasoning-enhanced Qwen 3.5 variant, extending the Qwopus line for local use. |
| [unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 312 | 1,240,885 | The definitive community GGUF of Google's largest Gemma 4 vision-language model. |
| [unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) | unsloth | 260 | 1,155,669 | Unsloth's GGUF of the experimental any-to-any Gemma 4-E4B, making cutting-edge multimodals locally runnable. |
| [Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2) | Jiunsong | 118 | 3,719 | Apple Silicon-optimized MLX quantization of an uncensored Gemma 4 merge, targeting Mac local users. |

---

## 3. Ecosystem Signal

**Gemma 4** has unequivocally captured the open-weight ecosystem's attention this week. Google's release strategy—launching multiple parameter tiers (E2B, E4B, 26B-A4B, 31B) with both vision-language and experimental any-to-any capabilities—has created a thriving derivative economy. Community quantizers, most notably **unsloth**, have moved with unprecedented speed, with four Unsloth GGUFs collectively exceeding 5.3 million downloads. This validates GGUF as the de facto standard for local multimodal deployment.

Parallel to Gemma 4's rise, **Qwen 3.5** and **GLM 5.1** demonstrate that Chinese-developed open models are no longer regional players but global trendsetters. **Jackrong's** reasoning-distilled Qwen3.5-27B outperforms all others in community enthusiasm (likes), suggesting that "reasoning distillation" from proprietary models has become a powerful open-source moat.

The quantization landscape is also maturing rapidly. **NVFP4** appears in both official (NVIDIA) and community (LilaRest) releases, while **1-bit (Bonsai)** and MLX Apple Silicon optimizations show continued fragmentation across hardware targets. A persistent theme is the commercial viability of **uncensored/abliterated fine-tunes**, which consistently generate disproportionate engagement and downloads—often 10-100x relative to their base models' like counts—reflecting both demand and platform tension.

Finally, the entry of **Netflix** into open video AI signals that generative media models are attracting non-traditional tech giants, potentially foreshadowing broader industry open-sourcing of specialized vertical models.

---

## 4. Worth Exploring

### [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)
**Why:** This model represents the current frontier of open-weight capability transfer. By distilling reasoning from a top-tier proprietary model into an open multimodal architecture, it offers a genuine alternative to closed APIs for complex reasoning tasks. Its 588K downloads suggest the community has already validated its utility.

### [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)
**Why:** 1-bit quantization has historically been a research curiosity. If Bonsai delivers usable quality at this compression level, it could dramatically expand where LLMs can run—from microcontrollers to massive throughput servers. Worth studying for anyone interested in inference efficiency.

### [netflix/void-model](https://huggingface.co/netflix/void-model)
**Why:** A zero-download, 811-like video inpainting model from Netflix is inherently intriguing. Whether this signals a strategic experiment or a one-off release, it offers a rare glimpse into how media incumbents are approaching generative video AI. Early adopters in video production should watch closely.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*