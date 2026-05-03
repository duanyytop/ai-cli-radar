# Hugging Face Trending Models Digest 2026-05-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-03 00:18 UTC

---

# Hugging Face Trending Models Digest — May 3, 2026

---

## 1. Today's Highlights

Google's [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) dominates this week's trending list with 2.48M likes and an extraordinary 7.8M downloads, signaling strong enterprise adoption of open-weight multimodal models. DeepSeek maintains its momentum with both [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) ranking highly, demonstrating the market's appetite for efficient, scalable alternatives to closed-source giants. The Qwen ecosystem shows remarkable community vibrancy with multiple official and derivative variants (including uncensored fine-tunes and GGUF quantizations) occupying nearly a third of trending slots. Notably, NVIDIA's [Nemotron-3-Nano-Omni](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) introduces "any-to-any" multimodal reasoning, while poolside's [Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) suggests specialized coding agents remain a growth category.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,415 | 381,587 | Flagship reasoning model delivering competitive performance against closed-source alternatives with full open weights. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 921 | 345,885 | Distilled efficient variant balancing speed and capability for production deployments. |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 381 | 9,914 | Agent-optimized long-context model from Xiaomi's emerging AI lab, targeting autonomous task execution. |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 189 | 7,573 | Specialized coding agent model from the Paris-based AI-native company, optimized for vLLM inference. |
| [inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash) | inclusionAI | 145 | 943 | Lightweight MIT-licensed model from Alibaba's inclusionAI initiative, emphasizing accessibility. |
| [inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T) | inclusionAI | 100 | 535 | Larger conversational variant in the Ling family with hybrid architecture experimentation. |
| [ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) | ibm-granite | 132 | 16,079 | IBM's enterprise-focused 8B parameter model, optimized for business document processing and compliance. |
| [ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b) | ibm-granite | 79 | 3,072 | Higher-capacity Granite variant for complex enterprise reasoning tasks. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,077 | 1,070,778 | Dense vision-language model achieving massive download volume, indicating strong production adoption. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,572 | 2,397,446 | MoE-based multimodal flagship with exceptional efficiency—35B active parameters from 3B experts—driving highest downloads this week. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,480 | 7,776,034 | Google's most-downloaded open multimodal model to date, representing a strategic inflection point for Gemma's ecosystem competitiveness. |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,181 | 699,348 | Moonshot's latest with advanced compression techniques, extending context-efficient multimodal reasoning. |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 192 | 28,323 | Audio-vision-language triple-modality foundation model, expanding Xiaomi's AI hardware integration potential. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 198 | 37,418 | NVIDIA's "any-to-any" reasoning model enabling unified processing across text, image, audio, and video modalities. |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 119 | 1,308 | Mixture-of-Transformers multimodal architecture from SenseTime, emphasizing parameter efficiency. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4) | nvidia | 68 | 180,012 | NVFP4-quantized variant of Nemotron-3 Omni, optimized for NVIDIA Blackwell deployment with 4.8x higher downloads than BF16. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,211 | 99,399 | Surprising open release from OpenAI: production-grade PII detection and redaction, signaling strategic pivot toward privacy-enabling infrastructure. |
| [mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) | mistralai | 221 | 8,492 | Mistral's largest open-weight release to date at 128B parameters, though pipeline-unlisted status suggests pending vLLM optimization. |
| [ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2) | ibm-granite | 68 | 1,598 | ModernBERT-based multilingual embedding model with ONNX/OpenVINO optimization for enterprise retrieval pipelines. |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 78 | 487 | Extreme 1.25-bit quantization of Hunyuan translation model, pushing the boundary of ultra-low-precision multilingual inference. |
| [facebook/sapiens2](https://huggingface.co/facebook/sapiens2) | facebook | 110 | 0 | Next-generation human-centric vision transformer for pose estimation and body understanding, fresh from April 2026 arXiv release. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 542 | 983,535 | Unsloth's optimized GGUF conversion enabling local CPU/GPU inference of Qwen's vision-language model near 1M downloads. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 895 | 2,001,316 | Most-downloaded GGUF this week—MoE efficiency meets consumer hardware accessibility through Unsloth's quantization expertise. |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 205 | 17,016 | Experimental "DFlash" feature-extraction variant, exploring alternative activation patterns for Qwen architecture. |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 262 | 303,358 | Aggressive uncensored fine-tune with maintained vision capabilities, demonstrating sustained demand for unaligned variants. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 528 | 766,075 | Higher-capacity uncensored MoE variant with remarkable download velocity, second only to official Qwen releases. |
| [unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF) | unsloth | 92 | 37,663 | Cross-ecosystem collaboration: Unsloth quantizing NVIDIA's multimodal model for broader hardware accessibility. |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,441 | 199,500 | "Abliterated" uncensored Gemma-4 with MLX optimization for Apple Silicon, riding both the uncensored and Apple ecosystem waves. |
| [talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) | talkie-lm | 203 | 0 | Instruction-tuned variant of emerging Talkie base model, Apache-2.0 licensed with zero downloads suggesting pending release. |
| [talkie-lm/talkie-1930-13b-base](https://huggingface.co/talkie-lm/talkie-1930-13b-base) | talkie-lm | 67 | 0 | New base model architecture from Talkie LM, pre-release positioning in US region. |

---

## 3. Ecosystem Signal

**Model Family Momentum:** The Qwen ecosystem demonstrates unprecedented dominance, occupying 6 of 30 trending slots with official releases, community fine-tunes, and multiple quantization formats collectively amassing over 6.5 million weekly downloads. This "Qwen-verse" effect—where a single architecture spawns derivative ecosystems—mirrors Llama's 2024 pattern but with stronger multimodal integration. Google's Gemma-4 represents a genuine resurgence, with download volume suggesting it has finally cracked enterprise adoption that eluded earlier Gemma iterations.

**Open-Weight vs. Proprietary Dynamics:** Open weights are winning on volume but proprietary releases are strategically pivoting. OpenAI's [privacy-filter](https://huggingface.co/openai/privacy-filter) is telling: rather than competing on frontier capabilities, they're releasing infrastructure tools that embed dependency on their stack. Meanwhile, DeepSeek and Qwen prove that Chinese labs can drive global open-weight standards, with DeepSeek-V4-Pro's 3,415 likes exceeding most Western alternatives.

**Quantization & Fine-Tuning Activity:** Unsloth has emerged as critical infrastructure, with three trending models and 3M+ combined downloads. The "uncensored" category remains structurally significant—HauhauCS and dealignai variants total 1.27M downloads despite (or because of) their controversial positioning. Most technically notable is the quantization diversity: GGUF for consumer GPUs, NVFP4 for NVIDIA Blackwell, MLX for Apple Silicon, and experimental 1.25-bit formats, indicating hardware fragmentation is driving format specialization rather than consolidation.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 7.8M downloads and strong like velocity, this is likely the most battle-tested open multimodal model for production deployment. If prior Gemma versions disappointed on capability, the adoption signal here suggests Google closed the gap. Worth validating against your multimodal benchmarks, particularly for enterprise document understanding where Gemma's training on web-scale data may confer advantages.

**[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — The "any-to-any" architecture represents a genuine architectural frontier. Unlike multimodal models that bolt modalities onto text backbones, NVIDIA's approach treats all modalities as interchangeable inputs and outputs. For researchers and builders exploring unified perception-action loops (robotics, autonomous agents, real-time multimodal assistants), this is the most important structural experiment on the list.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — At 2M downloads, this is the people's choice for running frontier-capable multimodal models on consumer hardware. The MoE architecture's 3B active parameters during inference make it runnable on single GPUs while maintaining 35B-equivalent quality. If you're building local-first AI applications or need to prototype without API costs, this is the most pragmatic starting point in the entire trending list.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*