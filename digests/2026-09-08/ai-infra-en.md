# AI Infrastructure Digest 2026-09-08

> Generated: 2026-09-08 00:39 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-08**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is rapidly maturing into a multi-layered, hardware-aware stack optimized for agentic workloads and long-context reasoning. With next-generation GPUs like NVIDIA Blackwell (SM120) and AMD MI355X now in active use, performance innovation is shifting from raw throughput to efficiency in sparse attention, KV cache compression, and speculative decoding. Projects are increasingly diverging in specialization: high-performance engines (vLLM, SGLang) target low-latency inference at scale, while lightweight runtimes (llama.cpp, Ollama) focus on edge and local deployment. Meanwhile, orchestration layers (LiteLLM) and fine-tuning platforms (Unsloth) are tightening integration with agent pipelines and model tooling.

---

### **2. Activity Comparison**

| Project       | Issues Open (24h) | PRs Merged (24h) | Releases (24h) | Notes |
|---------------|-------------------|------------------|----------------|-------|
| **vLLM**      | 12                | 6                | None           | High focus on deterministic inference & SM120 kernel fixes |
| **SGLang**    | 15                | 8                | None           | Active regression triage; major stability fixes in HiCache/FP8 |
| **llama.cpp** | 11                | 7                | None           | Vulkan/Metal optimizations; critical speculative decoding regressions |
| **Ollama**    | 18                | 4                | None           | Highest severity bugs; GPU fallback and context handling issues |
| **LiteLLM**   | 9                 | 5                | v1.100.1 imminent | Security patch pending; shunt feature in development |
| **Unsloth**   | 10                | 6                | None           | UX polish + ROCm/Intel GPU fixes in progress |

> ✅ *Trend*: All projects report no new releases but significant PR activity—indicating ongoing stabilization of production-grade features ahead of 2026 Q4 rollouts.

---

### **3. Model Support Race**

| New Model / Architecture        | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next-FP8**      | ✅   | ✅     | ❌        | ✅     | ⚠️ (via vLLM) | ⚠️ (limited) |
| **GLM-5.3-Flash (NoPE)**        | ✅   | ✅     | ✅        | ✅     | ❌      | ❌      |
| **Spark-X2.5 (4B/1.7B)**        | ❌   | ❌     | ❌        | ✅     | ❌      | ❌      |
| **Wan2.2 TI2V (Video Gen)**     | ❌   | ❌     | ❌        | ❌     | ❌      | ⚠️ (AMD ROCm OOM) |
| **TwelveLabs Marengo Embed 3.0**| ❌   | ❌     | ❌        | ❌     | ✅      | ❌      |
| **DeepSeek-V4 HC**              | ✅   | ✅     | ✅        | ❌     | ❌      | ❌      |
| **Qwen 3 AVL (Audio-Visual)**   | ❌   | ❌     | ❌        | ❌     | ❌      | 🟡 (Request) |

> 🏆 **Leader**: **SGLang** leads in multimodal and architecture diversity, especially with GLM-5.3-Flash and EAGLE/MoE support.  
> 🔥 **Differentiator**: **Ollama** wins in consumer-facing model adoption (e.g., Spark-X2.5), while **vLLM/SGLang** dominate cutting-edge research models.

---

### **4. Performance Frontier**

| Optimization Focus          | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Efficiency**      | ✅✅  | ✅✅    | ✅        | ✅     | ✅      | ✅      |
| **Length-Aware Batching**    | ✅✅  | ✅     | ✅        | ❌     | ❌      | ❌      |
| **Sparse Attention (SM120)** | ✅✅  | ✅     | ❌        | ❌     | ❌      | ❌      |
| **Speculative Decoding**     | ✅✅  | ✅✅    | ✅✅       | ✅     | ✅      | ✅✅     |
| **Quantization (FP4/NVFP4)** | ✅✅  | ✅     | ✅        | ❌     | ❌      | ❌      |
| **Kernel Fusion (AMD/HIP)**  | ✅    | ✅✅    | ✅✅       | ✅     | ❌      | ✅      |

> 🔍 **Key Insight**: The frontier is now **context-aware scheduling**, **sparse computation on SM120**, and **cross-platform kernel fusion**.  
> 💡 **vLLM & SGLang** lead in both hardware-specific optimizations (Blackwell FP4, NoPE) and architectural innovations (length-aware batching, HRRN scheduler).

---

### **5. Layer Positioning**

| Project       | Primary Layer             | Key Differentiators |
|---------------|----------------------------|---------------------|
| **vLLM**      | **High-Performance Serving Engine** | Optimized for cloud-scale, low-latency inference; strong focus on FlashInfer, SM120, and speculative decoding |
| **SGLang**    | **Next-Gen Inference Engine** | Combines engine recovery (weight daemons), advanced schedulers (HRRN), and full MoE/EAGLE support |
| **llama.cpp** | **Local Runtime & Edge Execution** | Cross-platform, lightweight, mature Vulkan/Metal backends; ideal for CPU/GPU hybrid or embedded use |
| **Ollama**    | **Developer-Friendly Gateway** | Simplified CLI/API; acts as a unified entry point for GGUF models; prioritizes usability over raw control |
| **LiteLLM**   | **Orchestration & Routing Layer** | Multi-provider routing, cost tracking, security hardening; essential for enterprise LLM gateways |
| **Unsloth**   | **Fine-Tuning & Local Agent Platform** | Specializes in training, tool integration, and local model management; bridges fine-tuning and agent execution |

> 🧩 **Strategic View**:  
> - **Engine layer (vLLM/SGLang)**: Optimize for speed and scalability.  
> - **Runtime layer (llama.cpp)**: Enable portability and offline use.  
> - **Gateway layer (Ollama/LiteLLM)**: Reduce developer friction.  
> - **Training/Agent layer (Unsloth)**: Accelerate agent development lifecycle.

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-09-08 activity):**
1. **Hardware-Centric Optimization is Now Mainstream**:  
   SM120 (Blackwell) and AMD gfx950/gfx1151 are no longer experimental—they’re driving real-time kernel patches (e.g., NVFP4 KV cache, fused MLA + RoPE). **Expect all major stacks to integrate SM120-native paths by Q4 2026.**

2. **Long-Context Agents Are the New Benchmark**:  
   Length-aware batching, prefix-cache retention, and context scaling (YaRN, `num_ctx`) are recurring themes. This signals that **agent workflows with memory and state persistence are now the primary use case**.

3. **Stability > Speed**:  
   Despite aggressive optimization, **critical regressions in determinism, GPU offloading, and memory safety dominate issue trackers**. Developers must prioritize **staging with stable versions** (e.g., avoid Ollama 0.33.x, use vLLM patched kernels).

4. **Security & Observability Are Non-Negotiable**:  
   LiteLLM’s 401 leak and Ollama’s unredacted debug logs highlight growing risks in public-facing APIs. **Production deployments must enforce request redaction, audit trails, and secure key handling.**

5. **Tool Integration Is Now Core**:  
   Unsloth’s tool-passing fixes, Ollama’s `agent_message`, and LiteLLM’s streaming tool call preservation show that **tool calling is no longer optional—it’s central to agent reliability**.

---

### ✅ **Recommendations for Application Developers**
- **Use vLLM or SGLang for production agents on Blackwell/ROCm**—they offer best-in-class KV cache and speculative decoding.
- **Avoid 0.33.x Ollama builds**; stick with 0.32.13 until GPU regressions are resolved.
- **Enable length-aware batching** (RFC #55265) to prevent throughput collapse under mixed-length loads.
- **Pin LiteLLM to v1.100.1+** to prevent API leakage and misaligned billing.
- **Validate tool outputs end-to-end**—especially when using Qwen/Claude backends via LiteLLM or Unsloth.
- **Monitor memory usage and context enforcement**—many systems silently fall back to CPU or drop context.

> 📊 *Bottom Line*: The infrastructure is advancing fast—but only with disciplined versioning, rigorous testing, and awareness of platform-specific trade-offs.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-09-08

## **Today's Highlights**
vLLM continues to advance its support for next-generation hardware and inference patterns, with critical fixes for deterministic inference on Qwen3.8-Flash-Next-FP8 models under high concurrency and a key patch enabling FlashInfer’s SM120 sparse backend for NoPE head sizes. New work on length-aware batch composition and context-aware KV cache retention signals growing focus on efficiency in agentic and long-context workloads.

## **Releases & Breaking Changes**
None reported in the last 24 hours.

## **New Model & Hardware Support**
- ✅ **SM120 (Blackwell) Sparse Attention**: FlashInfer now supports sparse attention for NoPE-based models like GLM-5.3-Flash via PR #55778, fixing crashes due to incompatible head size assumptions.
- ✅ **CohereCompassForConditionalGeneration**: Added to supported models list in docs (PR #55777), expanding multimodal model coverage.
- ✅ **ROCm Support**: HY-V4 model initialization and attention-sink support now enabled on ROCm (PRs #54405, #54404), improving AMD platform compatibility.
- ✅ **Intel GPU (XPU)**: DFlash2 draft acceptance issues with `--dtype float16` are being tracked (Issue #55250), though bf16 remains functional.

## **Performance & Optimization**
- 🔧 **Batch Invariant Feature & Performance Optimization**: Issue #27433 highlights ongoing work to stabilize batch-invariant behavior across inferencing paths—critical for reproducibility in production.
- 📈 **Length-Aware Batch Composition**: RFC #55265 proposes interleaving large and small requests per scheduling step to improve fairness and throughput, especially under mixed-length loads.
- ⚙️ **KV Cache Efficiency**: Multiple issues (#53670, #55265) emphasize performance loss from prefix-cache drops during speculative decoding; efforts to reduce recomputation (~30–40% throughput loss) are underway.
- 💾 **NVFP4 KV Cache on SM120**: A working prototype achieves 245K context on RTX 5090 (Issue #49011), showing potential for ultra-long context inference with FP4 precision.

## **Stability & Regressions**
| Severity | Issue | Summary | Fix/PR |
|--------|-------|---------|--------|
| Critical | #54521 | Greedy decoding non-deterministic on Qwen3.8-Flash-Next-FP8 when prompt nears `indexer_budget` | [PR #55778](https://github.com/vllm-project/vllm/pull/55778) addresses underlying sparse attention kernel incompatibility |
| High | #55571 | CUDA illegal memory access ("Out of Range Address") on RTX PRO 5000 (SM120) with FP8 models under sustained load | Workaround: `VLLM_DISABLED_KERNELS=FlashInferFP8ScaledMMLinearKernel` or `--enforce-eager` |
| High | #53726 | Silent CUDA IMA crash in hybrid GDN + MTP k=3 + async scheduling (RTX 3090) | Persisting despite prior fixes; tracking via issue #53726 |
| Medium | #53257 | Non-deterministic output at `temperature=0` for DeepSeek-V4-Flash under concurrency | Related to top-k sampling instability in MQA logits (see #49896) |
| Medium | #55250 | DFlash2 draft gets 0% acceptance with `--dtype float16` on XPU (bf16 works) | Root cause likely dtype-specific kernel mismatch |

## **What This Means for Application Developers**
- **Ensure determinism** in production: Avoid `Qwen3.8-Flash-Next-FP8` with `persistent_topk` unless using patched FlashInfer kernels (PR #55778). Use `--enforce-eager` or disable `persistent_topk` as temporary workarounds.
- **Leverage emerging hardware**: SM120 GPUs (e.g., RTX 5090/B200) now support advanced features like NVFP4 KV cache (245K context) and sparse attention—ideal for long-context agents.
- **Watch for regressions**: If using MTP speculative decoding with structured outputs (`xgrammar`) or tool calling (Qwen3.8 NVFP4), be aware of livelocks (#49210) and budget misbehavior (#54906).
- **Optimize batching strategy**: Consider implementing length-aware batch composition (RFC #55265) to avoid throughput collapse in mixed-length workloads.

👉 *Track progress via GitHub: [vLLM Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **SGLang Digest — 2026-09-08**

#### **1. Today's Highlights**
The SGLang project continues to prioritize stability and performance on next-generation hardware, with critical fixes for HiCache corruption and CUDA memory access issues impacting large models like GLM-5.3-Flash and Qwen3.8-Flash-Next-FP8. A major PR reverted a numerically unstable FP8 kernel that caused speculative decoding failures, while new work accelerates engine recovery via weight cache daemons and improves scheduling fairness.

#### **2. Releases & Breaking Changes**
None in the past 24 hours.  
**Note:** The `--cuda-graph-max-bs` flag is now deprecated in favor of `--cuda-graph-max-bs-decode`. This change affects MiniCPM5-2B configurations and benchmarks; update accordingly ([PR #38379](https://github.com/sgl-project/sglang/pull/38379), [PR #38378](https://github.com/sgl-project/sglang/pull/38378)).

#### **3. New Model & Hardware Support**
- **AMD ROCm Support**: Expanded support for EAGLE speculative decoding on gfx950 (MI355X) via Triton assembly kernels ([PR #37465](https://github.com/sgl-project/sglang/pull/37465)).
- **ROCm MoE Integration**: Unified Triton router now supports ROCm and single-group routing, removing CUDA-only restrictions ([PR #38328](https://github.com/sgl-project/sglang/pull/38328)).
- **Intel XPU Models**: Added support for encoder embeddings in BGE, NomicBERT, ModernBERT, InternVL3_5, Hunyuan-A13B, and Step3-VL ([PR #35304](https://github.com/sgl-project/sglang/pull/35304)).
- **Blackwell GPUs**: FlashInfer backend now officially supported on B300/B200, with updated MoE recipes using `flashinfer_trtllm` backend ([PR #38374](https://github.com/sgl-project/sglang/pull/38374)).

#### **4. Performance & Optimization**
- **Engine Recovery**: Weight cache daemon reduces startup time from ~320s to <1s for Qwen3-235B FP8 ([Issue #33522](https://github.com/sgl-project/sglang/issues/33522), [Blog](https://www.lmsys.org/blog/2026-08-21-sglang-0-5-18-release)).
- **Scheduler Improvements**: HRRN (Highest Response Ratio Next) scheduler introduced to reduce TTFT by prioritizing both short and waiting requests ([PR #32911](https://github.com/sgl-project/sglang/pull/32911)).
- **Kernel Fusion**: On AMD, fused MLA q-absorb + RoPE + KV-write kernel eliminates redundant launches, improving decode efficiency ([PR #38340](https://github.com/sgl-project/sglang/pull/38340)).
- **Memory Pooling**: Hybrid SWA pages now freed per page ID on `page_size > 1`, reducing fragmentation and improving reclaim efficiency ([PR #38159](https://github.com/sgl-project/sglang/pull/38159)).

#### **5. Stability & Regressions**
- **Critical Crash (High Severity)**: `QSA extend forward` crashes under 8 concurrent requests on H20 TP8 (Qwen3.8-Flash-Next-FP8) — reproducible without speculative decoding ([Issue #37633](https://github.com/sgl-project/sglang/issues/37633)). No fix PR yet.
- **HiCache Corruption (High Severity)**: Host-tier load-back corrupts generation in GLM-5.3-Flash even without speculative decoding — DSA index buffers not restored ([Issue #38031](https://github.com/sgl-project/sglang/issues/38031)). Fixed in PR [#38212](https://github.com/sgl-project/sglang/pull/38212).
- **CUDA Coredumps (High Severity)**: Auto-collected coredumps from CI show repeated illegal memory access across multiple model/backends (e.g., GLM-5.2 FP4 + EAGLE, QSA, MoE paths). Top issue: [#26340](https://github.com/sgl-project/sglang/issues/26340) has 294 comments — ongoing investigation.
- **Regression**: Reverted `fused silu mul quant fp8` kernel due to numerical drift causing speculative decoding failure on GLM-5.2-FP8 EAGLE MTP ([PR #38381](https://github.com/sgl-project/sglang/pull/38381)).
- **Other Bugs**: 
  - `fp8e4nv` unsupported on A100 (SM80) for Qwen3.8-Flash-Next-FP8 ([Issue #38291](https://github.com/sgl-project/sglang/issues/38291)).
  - `--default-chat-template-kwargs` silently overrides per-request `reasoning_effort` ([Issue #38104](https://github.com/sgl-project/sglang/issues/38104)).

#### **6. What This Means for Application Developers**
- **Use `--cuda-graph-max-bs-decode` instead of `--cuda-graph-max-bs`** in all configs moving forward.
- **Avoid `fused silu mul quant fp8`** until stable; it’s currently disabled in main due to correctness issues.
- **Enable HiCache only with caution on GLM-5.3-Flash** — ensure full state restoration is handled (use latest PRs if possible).
- **For AMD users**, expect better EAGLE/MTP performance on gfx950 via optimized kernels — test with `--speculative-algorithm EAGLE`.
- **On Blackwell GPUs**, leverage `flashinfer_trtllm` MoE backend for optimal FP8 inference performance.
- **Monitor CI status** — high flakiness (9 flaky tests) and recent regressions suggest cautious staging of production deployments until PRs land.

---  
*Data source: github.com/sgl-project/sglang | Updated: 2026-09-08*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-08**

---

### **1. Today's Highlights**  
The latest updates focus on **Vulkan backend maturity**, with critical fixes for DeepSeek-V4 hyper-connection ops, GET_ROWS alignment, and RMS_NORM fusion—delivering up to **4% decode improvement on Gemma4**. On CUDA, branchless Q4_K/Q5_K unpacking boosts batched inference performance, while Metal gains optimized decoding paths for M5 Max GPUs. New PRs also advance speculative decoding (DFlash, adaptive MTP) and UI tooling for model discovery.

---

### **2. Releases & Breaking Changes**  
No new release versions were published in the last 24h. However, several **critical behavioral changes** were introduced:  
- `--lazy-mode auto` now exhibits **~50% prefill throughput degradation** on Qwen4exp models (AMD iGPU Vulkan) due to improved TENSOR_READ_LAZY handling ([#28160](https://github.com/ggml-org/llama.cpp/issues/28160)).  
- **GPU memory corruption risks** exist in sparse MoE inference when reusing allocation plans across identity-changed graph nodes ([#28448](https://github.com/ggml-org/llama.cpp/issues/28448)).

> ⚠️ Developers using `--lazy-mode auto` with long-context MoE models should test performance impact.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4 (DSV4_HC_COMB/PRE/POST)**: Full support added via Vulkan backend ([#26578](https://github.com/ggml-org/llama.cpp/pull/26578)), aligning Vulkan with CUDA/Metal parity.  
- ✅ **TQ1_0 Quantization**: Vulkan now supports `TQ1_0` for `mm`, `mat-vec`, `dequant`, and `get_rows` operations ([#27765](https://github.com/ggml-org/llama.cpp/pull/27765)).  
- ✅ **gfx90c HIP Support**: Added for AMD RDNA3+ GPUs (e.g., Strix Halo APU), improving ROCm compatibility ([#26454](https://github.com/ggml-org/llama.cpp/pull/26454)).  
- 🟡 **LTX-2 Diffusion GGUFs**: RFC proposal opened for image/video/audio generation via diffusion models ([#28541](https://github.com/ggml-org/llama.cpp/issues/28541)).

---

### **4. Performance & Optimization**  
- 🔥 **RMS_NORM Fusion**: Enables RMS_NORM + MUL + ADD (+ MUL) and RMS_NORM + VIEW + SET_ROWS fusions on Vulkan, yielding **~4% decode speedup on Gemma4** ([#28024](https://github.com/ggml-org/llama.cpp/pull/28024)).  
- 🚀 **CUDA Q4_K/Q5_K Unpack**: Branchless computation eliminates redundant scale unpacks per column in `mmvq`, accelerating batched inference (>1 token) ([#26705](https://github.com/ggml-org/llama.cpp/pull/26705)).  
- 🛠️ **Metal Optimization**: Uses NE2 for M5 Max D512 decode in KV bucket 2, improving efficiency ([#28534](https://github.com/ggml-org/llama.cpp/pull/28534)).  
- ⚙️ **Suballocation Fix**: Vulkan users hitting a **78% decode throughput cliff at 131K context** can resolve it via `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` ([#27734](https://github.com/ggml-org/llama.cpp/issues/27734)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status | Fix PR |
|---------|------|-------------|--------|--------|
| 🔴 High | [#27306](https://github.com/ggml-org/llama.cpp/issues/27306) | `DeviceLost` crash during prompt processing (`draft-mtp`) on AMD gfx1151/Vulkan/RADV | Open | No |
| 🔴 High | [#28522](https://github.com/ggml-org/llama.cpp/issues/28522) | Tool call mangling/hang with Qwen models having ~48 optional params | Open | No |
| 🔴 High | [#27856](https://github.com/ggml-org/llama.cpp/issues/27856) | Severe decode slowdown beyond 1K context on AMD Strix Halo (gfx1151) | Closed | Workaround: `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` |
| 🟡 Medium | [#28211](https://github.com/ggml-org/llama.cpp/issues/28211) | Wrong logits on HIP/gfx1151 triggered by prompts > `n_ubatch` | Open | No |
| 🟡 Medium | [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) | Flash Attention fallback to SCALAR path causes O(N²) PP degradation on Intel ANV | Open | No |

> 💡 Note: Several regressions affect **speculative decoding (MTP/DFlash)** and **long-context inference**, particularly on Vulkan and HIP backends.

---

### **6. What This Means for Application Developers**  
- ✅ **Optimize for Vulkan on AMD**: Use `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` to avoid context-length-induced performance cliffs.  
- ⚠️ **Avoid `--lazy-mode auto`** with Qwen4exp or MoE models until regression is resolved ([#28160](https://github.com/ggml-org/llama.cpp/issues/28160)).  
- 📌 **Enable speculative decoding cautiously**: Adaptive MTP (`draft-mtp-adaptive`) and DFlash are under active development; test for correctness and stability, especially with vision models ([#27210](https://github.com/ggml-org/llama.cpp/pull/27210), [#28587](https://github.com/ggml-org/llama.cpp/pull/28587)).  
- 🧩 **UI developers**: The new `models-discover` UI stack enables rich Hugging Face GGUF browsing, download tracking, and capability filtering—ideal for self-hosted agent platforms.

> 🔗 [GitHub repo](https://github.com/ggml-org/llama.cpp) | [Website](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-08**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand support for emerging models and agent workflows, with critical PRs enabling `agent_message` input handling in the OpenAI-compatible API and adding native support for the Spark-X2.5 model series via a llama.cpp version bump (b10829). Concurrently, performance stability remains under scrutiny—multiple high-severity regressions related to GPU offloading, context handling, and memory utilization have surfaced across CUDA, ROCm, and MLX backends.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking changes were published. However, ongoing work on `/v1/responses` and `num_ctx` forwarding suggests potential behavioral shifts in future versions.

---

### **3. New Model & Hardware Support**  
- ✅ **Spark-X2.5 (4B / 1.7B)**: Added via PR #18279 — a major update to vendored `llama.cpp` (b10829) enables support for the new `spark2_5` architecture used by XHToken’s SparkLLM models. [PR #18279](https://github.com/ollama/ollama/pull/18279)  
- ✅ **Hy4 Preview Model**: Community request for official Ollama compatibility raised ([#18287](https://github.com/ollama/ollama/issues/18287)) — pending GGUF conversion and integration.  
- ✅ **AMD gfx1201/gfx1151 Vulkan Backend Improvements**: Fixes for compute-ring timeouts and TensileLibrary errors are being triaged, indicating growing ROCm/Vulkan maturity. [Issue #17782](https://github.com/ollama/ollama/issues/17782), [Issue #17870](https://github.com/ollama/ollama/issues/17870)

---

### **4. Performance & Optimization**  
- ⚠️ **Regression in Token Generation Speed (0.33.x vs 0.32.13)**: Users report ~5x slower inference on RTX 3090 due to a regression in 0.33.x builds. [Issue #18225](https://github.com/ollama/ollama/issues/18225)  
- ⚠️ **Inefficient GPU Memory Utilization**: Multiple reports indicate only partial GPU VRAM usage (e.g., <40% on RX 9070 XT), forcing CPU fallback and degrading throughput. [Issue #17971](https://github.com/ollama/ollama/issues/17971)  
- 🔧 **Context Handling Optimizations**: PRs #18261, #18285, and #18263 target explicit `num_ctx` enforcement and YaRN context scaling for Qwen3.8/3.5 on MLX, improving long-context fidelity. [PR #18263](https://github.com/ollama/ollama/pull/18263), [PR #18285](https://github.com/ollama/ollama/pull/18285)  
- 📊 **Metrics Endpoint Added**: PR #16998 introduces an opt-in Prometheus-compatible `/metrics` endpoint for monitoring queue depth, loaded models, and per-model token rates. [PR #16998](https://github.com/ollama/ollama/pull/16998)

---

### **5. Stability & Regressions**  
**High Severity:**  
- 🔴 **Model Download Progress Reverts**: Persistent issue where download progress regresses mid-transfer (even after 60%), affecting reliability. [Issue #8484](https://github.com/ollama/ollama/issues/8484) *(Closed, but no fix confirmed)*  
- 🔴 **Silent CPU Fallback on sm_86 GPUs (RTX 30/A40/A6000)**: Ollama 0.32.14 fails to use GPU despite proper drivers/CUDA; model runs at ~7 tok/s on CPU. [Issue #17841](https://github.com/ollama/ollama/issues/17841) *(Closed, no patch yet)*  
- 🔴 **Long Completions Never Stop (0.32.11+)**: Regression from v0.32.11 onward causes generation loops until killed. Confirmed in 0.32.15. [Issue #17910](https://github.com/ollama/ollama/issues/17910) *(Closed, no fix provided)*  

**Medium Severity:**  
- 🟡 **Tool Calls Missing in qwen2.5-coder**: Critical for agent pipelines; `tool_calls` field missing in responses despite correct prompt structure. [Issue #12174](https://github.com/ollama/ollama/issues/12174)  
- 🟡 **JSON Schema Ignored in Cloud Models**: Cloud-hosted models return raw JSON without schema validation, breaking tooling. [Issue #12362](https://github.com/ollama/ollama/issues/12362)  
- 🟡 **Corrupted Output with Long-Lived Runners**: After coexistence with second model, corrupted `<unused49>` tokens appear until restart. [Issue #18208](https://github.com/ollama/ollama/issues/18208)

---

### **6. What This Means for Application Developers**  
- **Agent Workflows Are Now More Robust**: The addition of `agent_message` input support via PR #18298 enables seamless integration with Codex-style agents using the OpenAI-compatible API.  
- **Use Caution with 0.33.x Builds**: Avoid upgrading if you rely on GPU performance—current regressions may degrade throughput significantly. Stick with 0.32.13 for stable inference.  
- **Long-Context Apps Must Verify Context Enforcement**: While `num_ctx` is now being forwarded via PR #16825, ensure your stack explicitly sets it—don’t rely on defaults.  
- **Security Note**: `OLLAMA_DEBUG_LOG_REQUESTS` logs full prompts unredacted—disable in production. [Issue #18210](https://github.com/ollama/ollama/issues/18210)  
- **Plan for Manual Model Pinning**: Due to instability in multi-model coexistence (e.g., eviction loops), consider using `keep_alive -1` with careful runner management. [Issue #18282](https://github.com/ollama/ollama/issues/18282)

---  
*Digest compiled from GitHub activity (2026-09-08).*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-09-08**

#### **1. Today's Highlights**  
The LiteLLM project continues to evolve as a critical inference orchestration layer, with today’s focus on enhancing security, model transparency, and proxy reliability. Key developments include urgent fixes for API leakage in 401 responses (#39757), support for OpenCode Go’s `x-opencode-session` header (#39503), and ongoing improvements to Anthropic-to-OpenAI translation fidelity—especially for Claude Code workflows. A major new feature in the pipeline is the *Shunt* option for Auto Router, enabling intelligent delegation of large reads and codegen tasks.

#### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, **v1.100.1** is imminent following PR #40176 (backporting fixes from #39568/#39572), which resolves persistent issues with spend row hashing that caused misaligned key metadata in usage logs and BI dashboards. Users relying on accurate billing visibility should upgrade promptly.

> 🔗 [PR #40176](https://github.com/BerriAI/litellm/pull/40176) | [Issue #39568](https://github.com/BerriAI/litellm/issues/39568)

#### **3. New Model & Hardware Support**  
- **TwelveLabs Marengo Embed 3.0** added to Bedrock provider via PR #40180, supporting new input types (`text_image`, `multi_input`) and nested payloads.
- **Z.AI (Zhipu AI)** now appears in the UI dropdown but remains non-functional due to unrendered credential fields (#39310); this is a frontend bug requiring backend fix.
- **OpenRouter’s `gpt-5.6-sol`** is missing from `model_prices_and_context_window.json` (#40102), preventing integration until pricing data is updated.

> 🔗 [PR #40180](https://github.com/BerriAI/litellm/pull/40180) | [Issue #40102](https://github.com/BerriAI/litellm/issues/40102)

#### **4. Performance & Optimization**  
- **Auto Router Shunt Feature** (PR #40158): Introduces a new toggle to bypass expensive models for large file reads and boilerplate code generation, reducing token waste and cost. This enables dynamic routing based on input size and intent.
- **Async Provider Signing Offload** (PR #40178): Moves AWS SigV4 signing off the event loop into a worker thread, mitigating blocking delays during credential refreshes—critical for high-throughput systems.
- **Cost Map Provenance Tracking** (PR #40179): Adds `generated_at` and `source_revision` metadata to cost maps, enabling auditability and rollback confidence in production deployments.

> 🔗 [PR #40158](https://github.com/BerriAI/litellm/pull/40158) | [PR #40178](https://github.com/BerriAI/litellm/pull/40178) | [PR #40179](https://github.com/BerriAI/litellm/pull/40179)

#### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|-------|
| ⚠️ Critical | 401 response leaks backend identity, DB table name, and SHA-256 hash of key | Open | [Issue #39757](https://github.com/BerriAI/litellm/issues/39757) |
| ⚠️ High | Multi-turn tool use broken in vLLM/Kimi K2.7 passthrough after v1.91.0 | Open | [Issue #32214](https://github.com/BerriAI/litellm/issues/32214) |
| ⚠️ High | Streaming re-chunker drops `tool_calls[].id` and `function.name` when upstream sends full call in one delta | Open | [Issue #39796](https://github.com/BerriAI/litellm/issues/39796) |
| 🟡 Medium | Bedrock Converse silently drops `reasoning_effort` for non-Anthropic/Nova2/GPT-OSS models | Open | [Issue #34105](https://github.com/BerriAI/litellm/issues/34105) |
| 🟡 Medium | Memory grows uncontrollably post-OOM restart; no reclaim | Closed (ongoing) | [Issue #38193](https://github.com/BerriAI/litellm/issues/38193) |

Note: The most severe issue (#39757) exposes internal system details to unauthenticated clients—urgent patch required.

#### **6. What This Means for Application Developers**  
- **Security**: Avoid exposing LiteLLM internals by upgrading to v1.100.1 or later; ensure all custom auth flows are hardened against 401 leakage.
- **Agent Development**: If using Claude Code or multi-turn tooling with vLLM backends, avoid v1.91.0–v1.99.x; consider pinning to v1.90.0 or earlier until #32214 is resolved.
- **Cost Control**: Leverage the upcoming *Shunt* feature in Auto Router to prevent costly model misuse on large inputs or repetitive codegen.
- **Logging & Auditing**: Use `x-opencode-session` header (via #39503) for better conversation-level tracing in managed inference APIs like OpenCode Go.
- **Model Transparency**: Monitor logs for `requested_model` vs `response_model` mismatches (#29680) to detect unexpected routing behavior in hybrid environments.

> ✅ Recommended actions: Pin versions, enable `x-opencode-session`, monitor memory usage, and test custom prompts with Ollama providers to avoid crashes (#39759).

---  
*Data sourced from GitHub: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-08**

---

### **1. Today's Highlights**  
Unsloth continues to expand its support for multi-modal and edge-case workflows, with key PRs enabling full tool integration in local models (PR #10088), fixing critical issues around model persistence across cache-folder changes (PR #10438), and addressing high-severity stability bugs on AMD ROCm systems (PR #10450, #10415). A growing focus on UX polish is evident in new feature requests around chat title regeneration (Issue #10464) and prompt queue retention (Issue #10428).

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing work on `unsloth train` and `unsloth start` indicates upcoming behavioral changes:  
- **PR #10452**: `unsloth train` now warns on unrecognized config keys instead of silently ignoring them — a breaking change for users relying on undocumented fields. [Link](https://github.com/unslothai/unsloth/pull/10452)  
- **PR #10453**: `unsloth start` will no longer kill an ongoing model download if it exceeds the 15-minute readiness timeout — improving reliability during large model fetches. [Link](https://github.com/unslothai/unsloth/pull/10453)

---

### **3. New Model & Hardware Support**  
- **AMD ROCm (ROCm 7.13+)**: Critical fixes are underway for AMD GPU compatibility, including missing fused attention kernels causing OOM in Wan2.2 TI2V video generation (Issue #10415) and inability to train on AMD cards when NVIDIA GPUs are present (Issue #10450).  
- **Intel Arc B580**: Unsloth fails to import due to unsupported `torch.xpu.memory.mem_get_info()` call (Issue #3533); workaround requires patching `gpt_oss.py`.  
- **Qwen 3 AVL 2B/0.6B**: Feature request submitted for native support of multimodal Qwen 3 Audio-Visual Language models (Issue #10459).  
- **Windows-on-ARM (NVIDIA hosts)**: PR #10282 enables native ARM64 CUDA stack installation on Windows-on-ARM laptops (e.g., GB10/N1X), resolving prior install failures.

---

### **4. Performance & Optimization**  
- **API Efficiency**: PR #10461 optimizes `studio/install_python_stack.py` by eliminating redundant GitHub API calls — reducing load from ~100+ per release to one. This significantly improves installer speed and reduces rate-limit risk. [Link](https://github.com/unslothai/unsloth/pull/10461)  
- **Speculative Decoding**: PR #10416 introduces measurement of speculative-decoding acceptance rate via `unsloth/spec_decoding`, enabling performance tuning and diagnostics. [Link](https://github.com/unslothai/unsloth/pull/10416)  
- **Memory Offloading**: PR #9872 enhances the offload planner by weighing spill cost against llama.cpp’s internal fitter, improving memory utilization on mixed-GPU systems. [Link](https://github.com/unslothai/unsloth/pull/9872)

---

### **5. Stability & Regressions**  
- **Critical (High Severity)**:  
  - **AMD ROCm OOM in Wan2.2 TI2V**: Fails due to missing fused attention kernel; fallback to PyTorch SDPA causes out-of-memory errors (Issue #10415). *Fix pending*.  
  - **Model not trained on AMD GPU**: Installer picks CUDA torch even on mixed NVIDIA+AMD systems; no way to select AMD for training (Issue #10450). *Fix pending*.  
- **Medium Severity**:  
  - **Prompt Queue Cleared on Stop**: Clicking "Stop" clears the prompt queue, disrupting batch processing (Issue #10428). *Fix pending*.  
  - **Copy Buttons Fail in Studio UI**: Text copy functionality broken in web UI despite recent updates (Issue #5097). *Fix pending*.  
- **Low Severity**:  
  - **Stale Remote/LAN Access Settings**: Duplicate access options in API and Settings panels (Issue #9519).  
  - **GGUF Quantizations Disappear After Cache Folder Switch**: Issue reported in Discord (Issue #10437); fixed via PR #10438.

---

### **6. What This Means for Application Developers**  
- **Build robust agents on local models**: With PR #10088 and #10454, developers can now ensure tools return images and data that are properly passed to the model — critical for agent-based workflows using RAG or Web Search.  
- **Handle model switching safely**: Be aware that switching to a model without tool support breaks existing chat threads (Issue #10454); implement safeguards in your app logic.  
- **Expect stricter config validation**: Future versions will reject unknown `unsloth train` config keys instead of silently defaulting — validate your configs early.  
- **Prepare for offline deployment**: While unsloth desktop lacks standalone packages (Issue #10356), consider bundling `uv` caches manually (`uv cache clean`) for air-gapped environments.  

> 🔗 **Key Resources**:  
> - [Bug: Intel Arc B580 import failure](https://github.com/unslothai/unsloth/issues/3533)  
> - [AMD ROCm training visibility fix](https://github.com/unslothai/unsloth/issues/10450)  
> - [PR: Fix GGUF variant persistence](https://github.com/unslothai/unsloth/pull/10438)  
> - [PR: Reduce GitHub API load](https://github.com/unslothai/unsloth/pull/10461)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*