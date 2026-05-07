# Hugging Face Trending Models Digest 2026-05-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-07 00:19 UTC

---

# Hugging Face Trending Models Digest — May 7, 2026

---

## 1. Today's Highlights

DeepSeek's V4 series dominates the leaderboard with [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) capturing 3,650 weekly likes and nearly 800K downloads, signaling sustained appetite for frontier Chinese LLMs. Google's [Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) remains the ecosystem's workhorse with 8.4M total downloads despite modest weekly growth, while Qwen's 3.6 family proliferates aggressively across both official releases and community quantizations. The emergence of "any-to-any" pipeline tags on [google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant) and [nvidia/Nemotron-3-Nano-Omni](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) hints at a broader architectural shift toward unified multimodal reasoning. Notably, uncensored fine-tunes like [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) and [HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) command significant engagement, reflecting persistent demand for unaligned model variants.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,650 | 786,631 | Flagship reasoning-optimized LLM with massive weekly engagement; DeepSeek's strongest open-weight challenger to GPT-5-class models. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 966 | 668,670 | Distilled efficient variant balancing performance and inference cost; nearly matching Pro's download velocity at lower latency. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,646 | 3,030,186 | Mixture-of-Experts vision-language model with 3B active parameters; highest-downloaded model this period, proving MoE efficiency at scale. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,155 | 1,613,364 | Dense counterpart to the 35B-A3B; strong multimodal benchmark performance driving enterprise adoption. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,538 | 8,403,901 | Google's most-deployed open model; exceptional cumulative downloads reflect entrenched production usage across fine-tuning pipelines. |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,213 | 997,278 | Long-context specialist with compressed-tensors optimization; nearing 1M downloads on sustained momentum from K2.5 series. |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 456 | 16,030 | Agent-oriented architecture with extended context windows; Xiaomi's emerging entry into production LLM tier. |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 228 | 14,457 | Code-native LLM from the AI coding startup; smaller scale but targeted at software engineering workflows. |
| [inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T) | inclusionAI | 419 | 1,254 | 1T parameter hybrid architecture with surprisingly lean active compute; experimental but drawing researcher attention. |
| [ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) | ibm-granite | 160 | 21,803 | Enterprise-focused 8B parameter model; IBM's consistent Granite cadence targets regulated industry deployments. |
| [ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b) | ibm-granite | 102 | 7,329 | Larger Granite variant with proportionally lower adoption; enterprises favoring efficiency of 8B configuration. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 295 | 55,461 | Open-weights text-to-video with GGUF export and endpoint compatibility; rare fully-open video generation pipeline. |
| [SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 191 | 3,819 | Niche anime-style text-to-image model; GGUF quantization enables local GPU inference for stylistic generation. |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 162 | 2,422 | Mixture-of-Transformers multimodal generalist; 8B scale with any-to-any ambitions from SenseTime's ecosystem. |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 217 | 62,371 | Vision-language-audio unified model; broader multimodal scope than Pro variant with substantial download base. |
| [google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant) | google | 121 | 4,241 | Google's "any-to-any" experimental variant; pipeline tag suggests unified modality handling beyond standard VLM. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 253 | 53,121 | NVIDIA's reasoning-optimized omni-modal model; BF16 release signals inference-focused deployment targeting. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,325 | 155,476 | Token-classification PII detector; unusual OpenAI Hub presence with ONNX export for compliance pipelines. |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 99 | 16,554 | Extreme 1.25-bit quantized translation model; Hunyuan-based with aggressive compression for edge deployment. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 601 | 1,197,196 | Unsloth-optimized GGUF of Qwen's dense VLM; 1.2M downloads demonstrate quantization demand for multimodal edge inference. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 946 | 2,327,706 | MoE VLM in GGUF format; highest-downloaded quantization, proving Unsloth's dominance in efficient multimodal packaging. |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,481 | 182,625 | "Abliterated" uncensored Gemma-4 with MLX support; strong like-to-download ratio signals passionate niche community. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 569 | 913,986 | Aggressively uncensored MoE VLM; nearing 1M downloads, validating substantial demand for unfiltered vision-language models. |
| [DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 81 | 106,958 | Maximalist naming reflects complex fusion: uncensored + code-tuned + IMatrix GGUF; DavidAU's established reputation drives trust. |
| [Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF) | Jackrong | 97 | 85,712 | Cross-architecture merge of Qwen and DeepSeek; experimental "knowledge distillation" via GGUF community innovation. |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 250 | 26,361 | "DFlash" optimized variant with feature-extraction pipeline tag; likely embedding-specialized derivative of Qwen3.6. |

---

## 3. Ecosystem Signal

**Qwen and DeepSeek have cemented a duopoly in open-weight momentum**, with Qwen's 3.6 family achieving extraordinary distribution breadth—six variants in this leaderboard alone—while DeepSeek's V4 series commands premium engagement per release. Google's Gemma-4 persists as the **silent infrastructure layer**: highest absolute downloads but slowing weekly likes suggest maturation rather than excitement. The proliferation of **"any-to-any" and multimodal pipeline tags** (Nemotron Omni, Gemma Assistant, SenseNova U1) indicates the field is converging on unified architectures, moving past discrete "VLM" categorization toward true generalist models.

**Quantization has become the primary democratization vector**, not merely compression. Unsloth's Qwen GGUFs collectively exceed 3.5M downloads—more than most base models—establishing quantized multimodal as a distinct product category. The **uncensored fine-tune economy remains robust and controversial**: three models with explicit "uncensored" or "abliterated" tags combine for 1.2M+ downloads, suggesting alignment trade-offs are actively demanded by substantial user segments. Proprietary-to-open dynamics show OpenAI's rare Hub presence (privacy-filter) as a utility play rather than model release, reinforcing that frontier weights remain closed while tooling and safety layers see selective open-sourcing.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | The most technically impressive quantization achievement this period: a 35B-A3B MoE VLM runnable on consumer hardware with 2.3M downloads validating real-world viability. Essential for understanding where efficient inference is heading. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | One of few genuinely open text-to-video pipelines with endpoint compatibility; video generation remains dominated by closed APIs, making this a critical benchmark for open media generation progress. |
| **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)** | Experimental 1T parameter model with only 1,254 downloads but 419 likes—an exceptional ratio indicating researcher enthusiasm. The "bailing_hybrid" architecture tag suggests novel sparse activation patterns worth monitoring for efficiency breakthroughs. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*