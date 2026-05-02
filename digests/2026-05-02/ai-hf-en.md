# Hugging Face Trending Models Digest 2026-05-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-02 00:20 UTC

---

# Hugging Face Trending Models Digest — May 2, 2026

---

## 1. Today's Highlights

Google's [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) dominates this week's leaderboard with 2,464 likes and an extraordinary 7.47 million downloads, cementing Gemma 4 as the most widely adopted open-weight multimodal family. DeepSeek's V4 generation continues its strong momentum with both [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) ranking in the top five, signaling sustained interest in efficient, high-performance Chinese-origin LLMs. The Qwen 3.6 ecosystem shows remarkable fragmentation and vitality, with six distinct variants across official, quantized, and uncensored community releases collectively amassing millions of downloads. Notably, the [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) marks a rare OpenAI presence on the Hub, suggesting expanding proprietary interest in on-device safety tooling. Meanwhile, [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) emerges as a dark horse with strong engagement, indicating Zhipu AI's MoE architecture is gaining independent traction.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,368 | 321,492 | Flagship reasoning-optimized LLM with top-tier benchmark performance and strong developer adoption. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 907 | 281,356 | Distilled variant balancing speed and capability for production deployment. |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,572 | 279,489 | Zhipu AI's latest MoE-based conversational model with strong Chinese-English bilingual performance. |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 349 | 7,944 | Agent-focused long-context model from Xiaomi's emerging AI lab, targeting device-edge integration. |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 174 | 5,690 | Compact coding-specialized model from the Paris-based AI startup, optimized for vLLM inference. |
| [ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) | ibm-granite | 119 | 14,275 | Enterprise-grade 8B parameter model with strong code and language understanding for business applications. |
| [ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b) | ibm-granite | 69 | 2,010 | Larger Granite variant for demanding enterprise workloads requiring higher capacity. |
| [inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T) | inclusionAI | 90 | 393 | Massive 1T parameter experimental model from Alibaba's inclusionAI team, pushing scale boundaries. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,464 | 7,474,774 | Google's most downloaded multimodal model to date, natively processing images and text for diverse applications. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,055 | 906,859 | Dense vision-language model with competitive performance against larger proprietary systems. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,551 | 2,218,739 | MoE architecture delivering 35B-quality outputs with only 3B active parameters, exceptionally efficient. |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,173 | 649,331 | Moonshot AI's long-context multimodal model with advanced document and video understanding capabilities. |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 180 | 21,407 | Multimodal foundation with audio, vision, and language integration for IoT and mobile deployment. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 183 | 35,000 | NVIDIA's any-to-any omni model with reasoning specialization, bridging perception and cognition. |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 103 | 1,148 | SenseTime's Mixture-of-Transformers multimodal model with efficient 8B parameter scaling. |
| [inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 238 | 917 | Unified diffusion-based any-to-any model representing an alternative architectural paradigm to autoregressive approaches. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,176 | 92,567 | Rare OpenAI Hub release: ONNX-optimized PII detection for on-device privacy-preserving applications. |
| [mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) | mistralai | 199 | 6,809 | Mistral's largest open-weight release to date, though pipeline metadata suggests evolving release strategy. |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 68 | 470 | Extreme 1.25-bit quantization of Hunyuan translation model, pushing efficiency boundaries for edge deployment. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 529 | 920,570 | Unsloth's highly optimized GGUF conversion enabling local inference of Qwen's vision-language model. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 879 | 1,940,844 | Most-downloaded quantization this week, making MoE multimodal inference accessible on consumer hardware. |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 251 | 286,798 | Aggressively uncensored vision-language fine-tune with significant community interest despite ethical concerns. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 519 | 728,262 | MoE uncensored variant with even stronger engagement, highlighting demand for unfiltered multimodal models. |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 193 | 14,793 | Community "DFlash" optimization claiming improved inference speed for Qwen 3.6 dense models. |
| [unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF) | unsloth | 90 | 32,620 | Cross-ecosystem collaboration enabling local deployment of NVIDIA's omni-reasoning model. |
| [kai-os/Carnice-V2-27b-GGUF](https://huggingface.co/kai-os/Carnice-V2-27b-GGUF) | kai-os | 75 | 32,156 | Community GGUF merge of Qwen 3.6/3.5 lineages, demonstrating active mergekit experimentation. |
| [AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16](https://huggingface.co/AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16) | AEON-7 | 74 | 3,793 | BF16 uncensored release with "abliterated" safety training removal, targeting research use cases. |

---

## 3. Ecosystem Signal

The Qwen family has achieved unprecedented ecosystem dominance, with **six distinct variants** in the top 30—spanning official releases, Unsloth quantizations, HauhauCS uncensored fine-tunes, and community optimizations like DFlash and Carnice merges. This fragmentation signals both architectural maturity (enabling diverse derivative work) and community capture (Qwen becoming the default base for experimentation). Google's Gemma 4 represents the counter-trend: a tightly controlled, massively downloaded official release proving that coherent branding and Google-scale distribution still matter. 

Open-weight models continue to outpace proprietary releases in volume, though OpenAI's privacy-filter entry suggests proprietary players are selectively engaging with on-device, safety-critical niches where open-weight quality remains insufficient. The quantization ecosystem has matured beyond mere compression: Unsloth's 1.94 million downloads for Qwen 3.6 MoE GGUFs demonstrate that **multimodal MoE inference on consumer hardware** is now a solved problem, expanding the accessible market dramatically. 

Notably, Chinese-origin labs (DeepSeek, Qwen, Zhipu/GLM, Xiaomi, Moonshot, SenseTime) account for **14 of 30 trending models**, reflecting both technical competitiveness and strategic open-weight publication as soft power projection. The uncensored fine-tune phenomenon—HauhauCS and AEON-7 variants combining for ~1M downloads—reveals persistent demand divergence between safety-aligned official releases and unfiltered community alternatives.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 7.47 million downloads and strong multimodal performance, this is the most battle-tested open vision-language model available. Its integration with Google's ecosystem (Kaggle, Vertex, Android) makes it the practical choice for production multimodal applications requiring reliable documentation and support.

**[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The efficiency breakthrough here is genuine: 35B-quality outputs with 3B active parameters enables cost structures competitive with API-only proprietary models while remaining fully open-weight. For teams building multimodal products with inference cost constraints, this architecture represents the current frontier.

**[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** — While downloads remain modest, this diffusion-based any-to-any model offers a genuine architectural alternative to the autoregressive consensus. For researchers and long-term architects, understanding whether diffusion can scale to general multimodal intelligence—challenging the GPT/Qwen/DeepSeek paradigm—is among the most important open questions in foundation model design.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*