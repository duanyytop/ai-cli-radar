# Hugging Face Trending Models Digest 2026-04-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-22 00:13 UTC

---

# Hugging Face Trending Models Digest — April 22, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family dominates this week's trending list with three variants accumulating over **10 million combined downloads**, cementing its position as the most widely adopted open-weight multimodal architecture. **Qwen3.6-35B-A3B** emerges as the breakout Chinese model, generating significant community engagement through its MoE architecture and spawning numerous uncensored fine-tunes and GGUF quantizations. The ecosystem shows strong demand for **uncensored/abliterated variants**, with multiple community modifications of Gemma 4 and Qwen3.6 ranking high in likes despite (or because of) their controversial nature. Notably, **Tencent's HY-World-2.0** represents a rare trending world model for 3D generation with zero downloads, suggesting anticipation rather than adoption. The quantization community remains highly active, with **unsloth** alone contributing two of the top GGUF conversions.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,256 | 4,465,127 | Flagship 31B instruction-tuned Gemma 4 with vision capabilities, becoming the most downloaded open multimodal LLM this week. |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,456 | 147,738 | Zhipu AI's latest GLM iteration with sparse MoE architecture, gaining traction as a strong bilingual alternative to Western models. |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,024 | 358,255 | MiniMax's M2.7 release shows sustained momentum for Chinese conversational models with competitive reasoning benchmarks. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 780 | 2,565,252 | Compact 4B "expert" variant with any-to-any modality support, offering remarkable capability density for edge deployment. |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 765 | 3,285,842 | Mid-size Gemma 4 with 4B active parameters in MoE architecture, balancing performance and inference efficiency. |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 702 | 8,241 | Kimi K2.6's low download-to-likes ratio suggests strong researcher interest despite limited availability or deployment complexity. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 451 | 94,600 | Fast, llama.cpp-optimized uncensored variant catering to users seeking unfiltered local inference. |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 171 | 28,638 | Experimental "frankenmerge" of Qwen and GLM architectures, representing community innovation in model merging techniques. |
| **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 86 | 8,483 | DFlash-optimized Qwen variant for feature extraction workloads, niche but technically interesting for embedding pipelines. |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 83 | 16,897 | Distillation attempt from Claude 4.6 Opus to open Qwen weights, reflecting demand for proprietary-level reasoning in local models. |
| **[KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | KyleHessling1 | 78 | 4,520 | Parallel merge experiment with lower traction, suggesting the Qwen-GLM hybrid space is still seeking optimal configurations. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,135 | 458,436 | Alibaba's flagship MoE vision-language model with 35B total / 3B active parameters, setting efficiency benchmarks for multimodal inference. |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 522 | 0 | Tencent's Hunyuan world model for image-to-3D generation, trending on anticipation despite no public downloads yet—possibly gated or preview release. |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 511 | 4,523 | Baidu's 8B parameter text-to-image model under Apache 2.0, representing rare fully open diffusion weights from major Chinese tech. |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 342 | 5,952 | Accelerated variant with higher throughput, showing Baidu's commitment to practical deployment over pure research metrics. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 896 | 2,035 | Hunyuan vision-language model for embodied AI applications, gaining interest for robotics and agentic use cases. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,202 | 72,863 | Tsinghua's multilingual TTS model with strong zero-shot voice cloning, filling a gap in open Chinese speech synthesis. |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 210 | 1,512 | Sparse MoE diffusion architecture experiment, attracting researchers exploring parameter-efficient image generation. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 667 | 1,147,673 | Massively downloaded multilingual voice cloning system from the Kaldi-Next team, proving strong demand for open TTS infrastructure. |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 184 | 35,335 | Unusual GGUF quantization of a diffusion model, suggesting community interest in running image generation on CPU/edge hardware. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 246 | 192 | NVIDIA's research artifact with arXiv citation, likely a technical preview with limited distribution; US-region gated. |
| **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | robbyant | 142 | 0 | Academic research model (arXiv:2604.14141) with zero downloads, suggesting very recent publication or restricted access. |
| **[Comfy-Org/ERNIE-Image](https://huggingface.co/Comfy-Org/ERNIE-Image)** | Comfy-Org | 169 | 0 | ComfyUI integration stub for Baidu's ERNIE-Image, trending on workflow ecosystem anticipation rather than model weights. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 616 | 967,317 | Near-million-download official Unsloth quantization, making MoE vision-language feasible on consumer GPUs. |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 429 | 63,995 | Aggressive safety removal from Gemma 4's smallest variant, controversial but clearly in demand based on engagement. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 335 | 261,086 | Most-downloaded uncensored Qwen variant, with vision capabilities preserved through the modification process. |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,325 | 167,156 | MLX-optimized uncensored Gemma 4 for Apple Silicon, combining platform-specific efficiency with safety removal. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 447 | 814,132 | Highest-download uncensored model this period, suggesting strong preference for small, unfiltered, vision-capable local models. |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 570 | 2,581,748 | Second-highest downloads overall, proving Unsloth's quantization quality and Gemma 4's broad hardware compatibility. |

---

## 3. Ecosystem Signal

**Gemma 4 has achieved dominant ecosystem position**, with Google's family accounting for 4 of the top 6 most-downloaded models and demonstrating strong multimodal adoption through its `image-text-to-text` and `any-to-any` pipelines. The architecture's scalability from 4B to 31B active parameters with consistent MoE design gives developers clear upgrade paths. **Qwen3.6-35B-A3B** represents the most credible Chinese challenger, with Alibaba's MoE efficiency story (35B total / 3B active) resonating strongly and generating substantial derivative work.

The **uncensored/abliterated segment has matured into a distinct market**, with dedicated creators (HauhauCS, OBLITERATUS, dealignai) building followings and achieving download volumes comparable to base models. This suggests persistent demand gaps in mainstream model safety alignment, though distribution remains concentrated in GGUF/llama.cpp formats for local deployment.

**Quantization is now table stakes**, with unsloth establishing itself as the dominant community converter through speed and quality. The emergence of MLX-specific variants (dealignai) and DFlash optimizations (z-lab) indicates fragmentation along hardware lines—Apple Silicon, NVIDIA, and CPU each developing distinct optimization ecosystems.

Notably, **proprietary model distillation** (hesamation's Claude 4.6 Opus → Qwen) represents a new trend in open-weight development, blurring the open/proprietary boundary. Meanwhile, models with zero downloads but high likes (HY-World-2.0, lingbot-map) suggest Hugging Face is increasingly used as a research announcement platform, not just distribution hub.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — The definitive model to study for state-of-the-art open multimodal capabilities. With 4.4M downloads and the highest likes in this list, it offers production-ready vision-language performance at a parameter count feasible for serious deployment. Its architecture likely sets patterns for 2026's open model development.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — The most efficient path to running a capable vision-language model locally. The 967K downloads suggest community validation of Unsloth's quantization quality, and the 3B active parameter count enables MoE inference on single consumer GPUs—technically remarkable for multimodal workloads.

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — With 1.1M downloads and strong multilingual capabilities, this represents the most mature open voice synthesis infrastructure available. Worth studying for anyone building voice-enabled applications, particularly for non-English markets where proprietary alternatives remain expensive or unavailable.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*