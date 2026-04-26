# Hugging Face Trending Models Digest 2026-04-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-26 00:15 UTC

---

# Hugging Face Trending Models Digest — April 26, 2026

---

## 1. Today's Highlights

**Google's Gemma 4 dominates downloads** with [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) reaching 5.77M downloads, signaling strong enterprise adoption of open-weight multimodal models. **DeepSeek's V4 family** captures developer attention with both Pro and Flash variants trending, while **Qwen 3.6** emerges as the most actively forked and quantized ecosystem with multiple community derivatives. Notably, **3D world models** from Tencent and NVIDIA represent a growing frontier beyond text and image generation. The community continues aggressive uncensoring and merging activity, particularly around Qwen and Gemma architectures.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 2,684 | 78,864 | Flagship reasoning model with strong performance on complex instruction following and coding tasks. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 685 | 25,391 | MIT-licensed efficient variant balancing speed and capability for production deployments. |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,514 | 217,889 | Next-generation GLM with MoE-DSA architecture, gaining traction as a strong alternative to Qwen/DeepSeek. |
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 1,066 | 477,205 | Chinese-developed conversational model with competitive multilingual performance. |
| [tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview) | tencent | 143 | 2,982 | Preview of Tencent's Hy3 architecture, showing early promise in long-context handling. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,025 | 291,840 | Advanced image-text-to-text model from Moonshot AI with strong visual reasoning capabilities. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 813 | 257,685 | Compact yet capable multimodal model handling vision-language tasks with efficient inference. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,404 | 1,027,741 | MoE-activated multimodal powerhouse with 35B total/3B active parameters, driving massive adoption. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,359 | 5,770,677 | Google's most downloaded open multimodal model, setting the standard for vision-language integration. |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 1,234 | 97,967 | High-quality multilingual text-to-speech model with natural prosody and voice cloning. |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 563 | 7,517 | Apache 2.0 licensed 8B parameter text-to-image model from Baidu's ERNIE ecosystem. |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 602 | 2,851 | World model generating interactive 3D environments from single images, pushing embodied AI forward. |
| [nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0) | nvidia | 272 | 540 | NVIDIA's research-grade image-to-3D model for neural scene reconstruction and simulation. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 749 | 21,097 | Production-grade PII detection and redaction from OpenAI, addressing enterprise compliance needs. |
| [inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 176 | 281 | Ambitious any-to-any modality model with MoE architecture for unified multimodal understanding. |
| [z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash) | z-lab | 151 | 25,059 | Optimized feature extraction variant of Qwen MoE for embedding and retrieval workloads. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 404 | 458,273 | Efficiently quantized 27B multimodal model for local LLM inference via llama.cpp. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 763 | 1,488,984 | Most-downloaded quantization this week—MoE efficiency meets consumer GPU accessibility. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 429 | 418,743 | Aggressively uncensored MoE variant with vision support, controversial but heavily downloaded. |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 503 | 110,832 | Abliterated Gemma 4 fine-tune removing safety alignments, part of growing "uncensored" movement. |
| [hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | hesamation | 181 | 104,757 | Knowledge-distilled reasoning model claiming Claude 4.6-level performance in quantized form. |
| [Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF) | Jackrong | 204 | 73,177 | Creative "frankenmerge" combining Qwen and GLM architectures for novel capability blends. |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 157 | 110,101 | Smaller uncensored multimodal option for users prioritizing uncensored vision-language interaction. |
| [unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF) | unsloth | 105 | 11,582 | Early quantization of Moonshot's multimodal model, expanding local inference options. |

---

## 3. Ecosystem Signal

**Qwen has become the dominant open-weight ecosystem**, with Alibaba's 3.6 generation spawning an unprecedented wave of community derivatives—uncensored variants, distillations, merges, and multiple quantization formats. This mirrors Llama's 2023-2024 trajectory but with faster iteration and stronger multimodal integration. **DeepSeek V4** and **Google Gemma 4** represent the other poles: DeepSeek for cutting-edge Chinese research efficiency, Gemma for proven enterprise scale with nearly 6M downloads on the 31B variant alone.

The quantization landscape is consolidating around **Unsloth** as the trusted converter, with their Qwen 35B-A3B GGUF approaching 1.5M downloads—evidence that MoE architectures are finally viable for consumer hardware. The "uncensored" and "abliterated" movement remains persistent, with HauhauCS and OBLITERATUS consistently trending, raising ongoing safety questions.

A notable shift is the **emergence of world models and 3D generation** (Tencent HY-World, NVIDIA Lyra) as distinct from traditional multimodal, suggesting the next frontier beyond static images. Meanwhile, **OpenAI's presence on HF Hub** via specialized tools like privacy-filter indicates even proprietary labs see value in open distribution for infrastructure components.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 5.77M downloads and strong multimodal performance, this is the most battle-tested open vision-language model for production. Its conversational capabilities and Google-scale infrastructure support make it the safest enterprise choice currently trending.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — The efficiency breakthrough here is remarkable: 35B parameters with only 3B active, runnable on consumer GPUs with 1.5M downloads proving real-world viability. Ideal for developers needing large model capability without cloud API dependencies.

**[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** — While nascent (2,851 downloads), this represents a genuine architectural frontier. For researchers and builders in embodied AI, robotics, or simulation, early experimentation with image-to-3D world models could yield significant first-mover advantages as the space matures.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*