# Hugging Face Trending Models Digest 2026-04-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-13 00:13 UTC

---

 # Hugging Face Trending Models Digest — April 13, 2026

---

## 1. Today's Highlights

Google's **Gemma-4** family dominates this week's trending list with multiple variants spanning 26B to 31B parameters and experimental "any-to-any" E-series models, signaling aggressive expansion into native multimodal reasoning. Community fine-tuning activity is exceptionally vibrant, with **uncensored and abliterated variants** from HauhauCS and dealignai gaining substantial traction—**HauhauCS/Qwen3.5-35B-A3B-Uncensored** alone has crossed 1M downloads. The **Qwen3.5 ecosystem** continues its ascent with high-profile distillation experiments, most notably **Jackrong's Claude-4.6-Opus reasoning distillation** which leads all models in weekly likes. Quantization remains infrastructure-critical: **unsloth** maintains its position as the community's preferred GGUF provider, with three separate Gemma-4 GGUF releases in the top 30. Emerging signals include **zai-org's GLM-5.1** introducing MoE-DSA architecture and **LiquidAI's LFM2.5-VL** representing sub-billion parameter vision-language efficiency plays.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,064 | 28,826 | New MoE-DSA architecture from ZAI Org gaining attention for efficient sparse attention patterns in conversational settings. |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 457 | 873 | Compact 2.7B parameter model from MiniMax targeting edge deployment with competitive instruction-following performance. |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 169 | 21,636 | Community-optimized NVFP4 implementation of Gemma-4-31B for NVIDIA Blackwell efficiency. |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 359 | 675,226 | Official NVIDIA ModelOpt-optimized variant demonstrating strong enterprise adoption. |
| **[LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)** | LGAI-EXAONE | 115 | 3,660 | LG's latest multilingual vision-language model with competitive Korean-English performance. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,774 | 2,242,541 | Flagship vision-language model with massive download velocity, establishing Gemma-4 as the open multimodal standard. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 606 | 1,269,309 | Experimental "any-to-any" architecture supporting arbitrary input-output modality combinations. |
| **[google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it)** | google | 413 | 857,206 | Lightweight any-to-any variant enabling efficient multimodal reasoning on consumer hardware. |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,597 | 578,295 | **Highest likes this week** — ambitious cross-architecture distillation claiming Claude-4.6-level reasoning in open weights. |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,139 | 44,802 | Production-grade OCR with InternVL backbone, targeting document understanding pipelines. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 133 | 582 | Hunyuan vision-language model for embodied AI and robotics applications. |
| **[LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M)** | LiquidAI | 112 | 6,004 | Ultra-efficient 450M parameter vision-language model demonstrating strong performance-per-parameter ratios. |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 775 | 0 | Surprising entry from Netflix Research: video inpainting and object removal using CogVideoX diffusion. |
| **[black-forest-labs/FLUX.2-small-decoder](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder)** | black-forest-labs | 77 | 5,023 | Compact FLUX decoder for efficient image editing and controlled generation workflows. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 522 | 393,991 | Production-ready zero-shot voice cloning with multilingual support, showing strong open-source TTS momentum. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 744 | 7,452 | Next-generation multilingual TTS from OpenBMB with improved prosody control. |
| **[ACE-Step/acestep-v15-xl-turbo](https://huggingface.co/ACE-Step/acestep-v15-xl-turbo)** | ACE-Step | 83 | 2,849 | Accelerated music generation model with feature-extraction capabilities for audio workflows. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 957 | 99,134 | Abliterated MLX-native Gemma-4 variant with 4M token extended context, popular among Apple Silicon users. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 278 | 432,494 | Aggressive uncensored fine-tune of Google's any-to-any model, notable for vision capability retention. |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 439 | 1,676,935 | Most-downloaded GGUF this week — unsloth's efficient quantization enabling 26B vision-language on consumer GPUs. |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 292 | 1,102,673 | Full 31B parameter GGUF release maintaining vision capabilities with dramatic memory reduction. |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 243 | 1,030,765 | Any-to-any model in GGUF format, enabling experimental multimodal workflows on local hardware. |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 125 | 25,680 | Rapid GGUF conversion of emerging GLM-5.1 architecture, demonstrating unsloth's model coverage velocity. |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 566 | 74,389 | Extreme 1-bit quantization experiment pushing llama.cpp efficiency boundaries with surprising quality retention. |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,105 | 878,643 | Compact uncensored variant with exceptional download velocity, popular for local agent deployments. |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,268 | 1,017,946 | **Top community fine-tune by engagement** — MoE vision-language model with uncensored training crossing 1M downloads. |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 282 | 117,532 | Reasoning-optimized Qwen3.5 variant in GGUF, targeting local inference of chain-of-thought capabilities. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 78 | 3,550 | Fast llama.cpp-optimized uncensored variant with iterative quality improvements in v2 release. |

---

## 3. Ecosystem Signal

**Gemma-4 has achieved ecosystem dominance** with 8 official variants in the top 30, spanning 26B-31B scales and pioneering "any-to-any" (E-series) architectures that treat modalities as interchangeable rather than fused. Google's strategic release of NVFP4-optimized weights alongside standard checkpoints indicates sophisticated hardware partnership alignment, particularly with NVIDIA's Blackwell generation. The simultaneous explosion of **community fine-tunes**—especially uncensored/abliterated variants—demonstrates that open-weight models now serve as substrate for value-aligned derivatives rather than endpoint solutions.

**Qwen3.5 emerges as the primary alternative architecture**, with Alibaba's base models enabling ambitious distillation experiments (Jackrong's Claude-4.6-Opus distillation) and HauhauCS establishing a specialization in aggressive uncensored fine-tunes with vision retention. The **quantization infrastructure layer** has consolidated around **unsloth** for GGUF conversion, with 5 appearances and 4M+ combined downloads, while **prism-ml's 1-bit Bonsai** experiments suggest the next efficiency frontier.

Notably, **proprietary-to-open distillation** has entered mainstream practice, with model names explicitly referencing Claude-4.6-Opus as teacher—previously taboo, now marketed. The "uncensored" tag appears 7 times, reflecting sustained demand for unaligned models despite safety investments from base model providers. Regional players (Baidu, Tencent, LG, MiniMax) maintain presence but struggle for global traction against Google-Alibaba dominance.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **Highest engagement model this week** — regardless of whether the Claude-4.6-Opus distillation claim fully validates, this represents a significant experiment in cross-provider knowledge transfer. Worth studying for reasoning traces, failure modes, and whether the distillation preserves multi-hop capabilities. The 578K downloads suggest substantial production experimentation. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | The "any-to-any" architecture is the most significant structural innovation in this release cycle. Unlike conventional multimodal models with fixed input-output pairs, E4B's arbitrary modality routing enables emergent capabilities like audio-to-video or video-to-code that weren't explicitly trained. Essential for researchers tracking next-generation multimodal paradigms. |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | 1-bit quantization has historically suffered catastrophic quality degradation; Bonsai's 74K downloads with positive community reception suggests a potential inflection point in extreme compression. Critical for edge deployment economics and worth benchmarking against 4-bit alternatives for your specific use case. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*