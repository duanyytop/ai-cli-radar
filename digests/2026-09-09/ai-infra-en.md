# AI Infrastructure Digest 2026-09-09

> Generated: 2026-09-09 02:33 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-09**

---

### **1. Ecosystem Overview**

The AI inference and serving ecosystem in Q3 2026 is characterized by rapid specialization, hardware-aware optimization, and convergence toward agent-centric workloads. Projects are increasingly diverging in focus: high-performance engines (vLLM, SGLang) target low-latency, scalable inference; lightweight runtimes (llama.cpp, Unsloth) dominate edge and local deployment; gateways (LiteLLM) enable multi-provider abstraction and cost governance; while fine-tuning frameworks (Unsloth) expand into distributed training and model efficiency. The emergence of hybrid architectures—Mamba/GDN, MoE, vision-language—and new quantization schemes (IQ3_XXS, DA8W4) is driving intense kernel-level innovation, especially on AMD and NVIDIA’s latest GPU generations.

---

### **2. Activity Comparison**

| Project       | Issues Opened (Last 24h) | PRs Merged (Last 24h) | Release Status |
|---------------|----------------------------|--------------------------|----------------|
| **vLLM**      | 7                          | 5                        | None           |
| **SGLang**    | 5                          | 4                        | None           |
| **llama.cpp** | 6                          | 4                        | `b10868`, `b10867`, `b10865` |
| **Ollama**    | 5                          | 3                        | None           |
| **LiteLLM**   | 4                          | 2                        | None           |
| **Unsloth**   | 5                          | 4                        | **v0.1.807-beta** |

> ✅ *Insight:* **Unsloth leads in release velocity** with a major beta update focused on AMD Vulkan performance and Windows security. **vLLM and SGLang show the highest stability burden**, with multiple critical open issues impacting production use.

---

### **3. Model Support Race**

| New Model / Architecture        | Supported By               | Key Details |
|----------------------------------|----------------------------|-----------|
| **Bailing V3 VL**                | vLLM (#55921)              | Native multimodal image-text support; no preprocessing needed |
| **Qwen4Exp (Qwen3.8-Flash-Next)**| llama.cpp (#28610), Ollama (#18263) | Full MTP speculative decoding via draft tensors; static YaRN RoPE for extended context |
| **DeepSeek-V4-Flash (SM8x)**    | ❌ Blocked (vLLM #50576)     | Fails on A100/A800 due to backend incompatibility; Blackwell-only support |
| **GLM-5.2 (NPU)**                | SGLang (#38250)             | Full FP8 DSA + indexer KV cache on 950NPU |
| **Qwen Static YaRN Contexts (MLX)** | Ollama (#18263)         | Enables long-context inference without retraining |
| **IFM K2, Wan2.2 TI2V**          | Unsloth (Requests only)     | Not yet implemented; active feature requests |

> 🏆 **Winner: vLLM & SGLang** — both lead in **multimodal and specialized model support**, particularly for emerging vision-language and NPU-capable models.  
> ⚠️ **Ollama lags on advanced quantizations** (e.g., IQ3_S) and lacks mllama support.

---

### **4. Performance Frontier**

| Optimization Focus          | Leading Projects                     | Key Developments |
|------------------------------|--------------------------------------|------------------|
| **KV Cache Management**      | vLLM (#52244), SGLang (#36700)        | Fix for prefix cache misses in MTP; unified prefetch tickets |
| **Kernel-Level Speedup**     | vLLM (Helion kernels), Unsloth (AMD Vulkan) | 1.38–1.78x speedup on H100; up to 20% gain on AMD GPUs |
| **Distributed Serving**      | SGLang (#33522), Unsloth (#10280)     | Weight cache daemon (<1s load time); two-node DGX Spark training |
| **Quantization Efficiency**  | vLLM (#54024), llama.cpp (#28476)     | DA8W4 on Zen CPUs; IQ3_XXS MoE support on Intel Arc |
| **Memory & Scheduling**      | vLLM (#55531), SGLang (#38592)        | Symmetric DCP disagg; token-major memory pools |

> 🔥 **Trend:** Hardware-specific kernel tuning (ROCm/Helion, AMD Vulkan, CUDA graphs) is now central to competitive differentiation. **vLLM and Unsloth are leading in native hardware acceleration.**

---

### **5. Layer Positioning**

| Project       | Primary Layer                 | Secondary Role                     | Differentiator |
|---------------|-------------------------------|------------------------------------|----------------|
| **vLLM**      | High-Performance Serving Engine | Multi-backend inference, spec. decode | SM8x/Blackwell readiness, hybrid Mamba support |
| **SGLang**    | Distributed Inference Engine  | Multi-backend, speculative decoding | Unified KV cache, weight recovery, HiCache |
| **llama.cpp** | Local Runtime / Edge Inference | GGUF execution, cross-platform portability | iGPU/Vulkan fixes, MTP for Qwen4Exp |
| **Ollama**    | Developer Gateway / CLI Tool  | Agent workflow, video input, MLX support | macOS video, codex tooling, cloud proxy reliability |
| **LiteLLM**   | LLM Gateway / Orchestration     | Cost routing, guardrails, auth         | Auto-router session savings, encrypted reasoning fidelity |
| **Unsloth**   | Training-Focused Runtime        | Fine-tuning, distributed clustering   | Vulkan-first AMD, Gefen-X optimizer, DGX Spark support |

> 🎯 **Strategic Clarity:**  
> - **vLLM/SGLang**: For large-scale, low-latency inference clusters.  
> - **llama.cpp/Ollama**: Ideal for local, edge, or developer-focused deployments.  
> - **LiteLLM**: Best for multi-provider orchestration and cost control.  
> - **Unsloth**: Unmatched for efficient fine-tuning and distributed training on AMD.

---

### **6. Trend Signals**

#### 🔹 **Hardware-First Optimization Is Dominant**
- **AMD Vulkan supremacy** (Unsloth, SGLang, vLLM) signals a shift from ROCm to Vulkan as the preferred path for AMD inference.
- **Blackwell (sm_120) exclusivity** for new models (DeepSeek-V4-Flash) reveals a hardware dependency gap — Ampere users face deployment barriers.

#### 🔹 **Agent Workloads Are Driving Innovation**
- MTP speculative decoding, prefix cache recovery, and tool call continuity are prioritized across vLLM, SGLang, and Ollama.
- **Non-determinism in speculative paths** (e.g., Ollama #18297, llama.cpp #26425) remains a critical risk area.

#### 🔹 **Observability & Reliability Are Non-Negotiable**
- Per-request metrics (vLLM), session cost tracking (LiteLLM), and stream failure handling (Ollama) reflect growing demand for production-grade observability.

#### 🔹 **Security & Trust Gaps Persist**
- Model signing (Ollama), auth leakage (LiteLLM), and unsigned executables (Unsloth pre-beta) indicate that trust mechanisms lag behind performance advances.

---

### **Recommendations for Application Developers**

1. **Choose based on deployment layer**:  
   - Use **vLLM** for high-throughput, cloud-native inference.  
   - Use **Ollama** for local agent development and macOS video workflows.  
   - Use **LiteLLM** for multi-provider cost control and secure orchestration.

2. **Avoid production risks**:  
   - Do **not use FlashInfer + fp8 KV cache on Blackwell** (vLLM #54225).  
   - Avoid `glm-5.3:cloud` until [Issue #18193](https://github.com/ollama/ollama/issues/18193) is resolved.  
   - Disable `--lazy-mode auto` on iGPUs (llama.cpp regression).

3. **Watch for hardware transitions**:  
   - **Ampere (A100/A800) users** should delay DeepSeek-V4-Flash adoption until #50576 is fixed.  
   - **AMD users** should migrate to Vulkan via Unsloth or vLLM for 20%+ gains.

4. **Monitor emerging standards**:  
   - Track **Qwen4Exp MTP support**, **IQ3_XXS quantization**, and **model signing** — these will define next-gen efficiency and security.

---

*Report compiled: 2026-09-09 | Data source: GitHub activity across vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-09-09

---

### **1. Today's Highlights**

The vLLM project continues to advance its support for next-generation models and hardware, with critical fixes for speculative decoding in hybrid Mamba/GDN models and ongoing work to enable SM8x (Ampere) compatibility for DeepSeek-V4-Flash. High-impact PRs include a fix for prefix cache misses under MTP decoding and improvements to KV cache management for disaggregated systems, signaling strong momentum in optimizing real-world inference workloads.

---

### **2. Releases & Breaking Changes**

None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**

- **SM8x (Ampere: A100/A800, RTX 30xx)**: Active feature request (#50576) to enable `DeepSeek-V4-Flash` and `DeepSeek-V4-Flash-0731` on Ampere GPUs, where current versions fail due to backend incompatibility.
- **Intel XPU**: Ongoing efforts to improve memory efficiency (#50269), support for multi-GPU Tensor Parallelism (#48953), and enhanced attention kernels (#53804).
- **ROCm / AMD**: Critical bugfixes for shared KV prefill in AITER attention (#55887), and performance tuning via Helion kernels (#53788).
- **New Models Added**:
  - [Bailing V3 VL](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL) – Native multimodal image-text support added via PR #55921.
  - Kimi K3 hybrid Mamba models – Support for symmetric DCP + dspark disagg via PR #55531.
- **Quantization**:
  - DA8W4 (W4A8) int4 support for Zen CPUs added in PR #54024.
  - FP8 KV cache now supported across multiple backends, including TRITON_ATTN and FlashInfer.

---

### **4. Performance & Optimization**

- **Hybrid Mamba/GDN Prefix Cache Recovery**: PR #52244 resolves a major throughput regression (~30–40% loss) caused by MTP speculative decoding missing prefix cache hits on first replay. This restores efficient reuse in agent-like workloads.
- **Speculative Decoding Efficiency**: HiSparse (#53781) introduces host-resident sparse-MLA decode hot-buffering, reducing GPU memory pressure while maintaining high-throughput decode.
- **Kernel-Level Gains**:
  - Helion kernels show **1.38–1.78x geomean speedup** over CUDA equivalents on H100 (#53788).
  - ROCm route large DSV4 sparse prefill to AITER OPUS kernel → **~15–20% throughput gain** at 8k/1k concurrency (#54855).
- **Memory & Scheduling**:
  - PR #55531 enables symmetric DCP disagg for hybrid Mamba models, improving scalability on disaggregated architectures.
  - PR #55921 adds per-request remote KV wait time metrics for better observability in distributed setups.

---

### **5. Stability & Regressions**

| Severity | Issue | Summary | Fix Status |
|---------|------|--------|-----------|
| 🔴 High | #54225 | FlashInfer backend causes **CUDA illegal memory access** on sm_120 (Blackwell) with NVFP4 + fp8 KV cache; crashes on 16-token requests | ❌ Open – TRITON_ATTN unaffected |
| 🔴 High | #53670 | EAGLE/MTP prefix-cache last-block drop causes **1,648-token recompute per hit**, leading to 30–40% batch throughput loss | ✅ Fixed in PR #52244 |
| 🟡 Medium | #54521 | Qwen3.8-Flash-Next greedy decoding is **non-deterministic** when context nears `indexer_budget`, causing inconsistent outputs | ❌ Open – impacts correctness |
| 🟡 Medium | #52225 | Recurring XID 13 errors (misaligned address, illegal instruction) on sustained load with Nemotron-3.5-Lightning-30B-A3B-NVFP4 | ❌ Open – stability risk under long-running jobs |
| 🟡 Medium | #50576 | DeepSeek-V4-Flash fails on SM8x despite matching architecture | ❌ Open – blocks deployment on A100/A800 |

> 🔗 Full issue details:  
> - [Issue #54225](https://github.com/vllm-project/vllm/issues/54225)  
> - [Issue #53670](https://github.com/vllm-project/vllm/issues/53670)  
> - [Issue #54521](https://github.com/vllm-project/vllm/issues/54521)

---

### **6. What This Means for Application Developers**

- **Use Case Impact**: If you're running **agent workflows** or **repetitive prompt patterns**, prioritize upgrading to vLLM `0.27.x`+ to benefit from fixed prefix cache behavior in MTP speculative decoding (PR #52244).
- **Hardware Strategy**: For **Ampere (A100/A800)** users, expect limited model availability until #50576 is resolved—consider Blackwell (sm_120) or newer GPUs for full DeepSeek-V4-Flash support.
- **Multimodal Apps**: The addition of Bailing V3 VL (PR #55921) enables native image input without external preprocessing pipelines—ideal for vision-language agents.
- **Observability**: Expose per-request remote KV wait time via PR #53198 to debug latency spikes in distributed deployments.
- **Stability Warning**: Avoid using FlashInfer backend with `fp8` KV cache on **Blackwell (sm_120)** GPUs until #54225 is patched—fall back to TRITON_ATTN for production.

> 💡 Pro Tip: Monitor `vllm-nightly` builds for early access to fixes like HiSparse and Helion optimizations. Use `--kv-cache-dtype bfloat16` cautiously with encoder-only models—PR #55482 addresses a silent failure path.

--- 

*Digest generated: 2026-09-09 | Source: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **SGLang Digest — 2026-09-09**

#### **1. Today's Highlights**  
SGLang continues its aggressive push toward production-grade inference infrastructure, with major progress in **distributed weight recovery**, **HiCache stability**, and **multi-backend support**. Key PRs enable full speculative decoding (EAGLE/DSpark) integration with unified KV caches and advance support for **NPU and ROCm** on new hardware. Critical fixes address hangs and memory corruption in high-concurrency scenarios.

#### **2. Releases & Breaking Changes**  
*None.* No new releases or breaking API/config changes were published in the last 24 hours.

#### **3. New Model & Hardware Support**  
- ✅ **NPU**: Full FP8 DSA + indexer KV cache support for **GLM-5.2** on **950NPU** (PR #38250).  
- ✅ **ROCm**: Triton-based sparse MLA prefill/decode kernels for **gfx950** (AMD RDNA3), enabling FP8 KV cache use (PR #38601).  
- ✅ **Model**: **DeepSeek-V4** now supported via unified KV cache in direct external linkers (PR #38269).  
- ✅ **Diffusion**: Lossless BCG enabled for **FLUX.1-dev** (PR #38591); Qwen-Image-Edit attention optimized for Hopper (PR #38584).

#### **4. Performance & Optimization**  
- ⚡ **Engine Recovery**: Weight cache daemon reduces load time from ~327s to **<1s** on Qwen3-235B FP8 (Phase 1 landed in #27139; tracking in #33522).  
- 📈 **Unified Cache**: Eager cross-stage prefetch tickets added for PP+HiCache (PR #36700), improving pipeline utilization.  
- 💾 **Memory Pool**: Token-major dense views introduced for unified memory pool under `--enable-unified-memory` (PR #38592), reducing memory fragmentation.  
- 🔧 **CUDA Graphs**: Fix ensures shared MAX_LEN bucket is preserved during DP gather capture, preventing MegaMoE hangs (PR #37933).

#### **5. Stability & Regressions**  
- 🔴 **Critical Hangs**:  
  - `DeepSeek-V4 TP=8 on 8×H20`: Decode forward hangs indefinitely at ~245K context (all GPUs at 100% util) — watchdog kills server (#33549).  
  - `Qwen3.8-Flash-Next`: Tool parser loops on token ID 0 (regression in speculative path) (#36537).  
- 🔴 **Crashes**:  
  - `GLM-5.3-Flash (DSA)`: HiCache host-tier load-back corrupts generation without speculative decoding (dropped tool calls, repetition loops) (#38031).  
  - `GlmMoeDsa (GLM-5.2)` FP4+EAGLE: Illegal memory access in flashinfer_trtllm BF16 batched-GEMM (#30209).  
- 🛠️ **Fixes in Progress**:  
  - PR #38584 addresses Qwen-Image-Edit optimization; PR #38601 enables ROCm sparse MLA.  
  - PR #37933 mitigates MegaMoE DP hang (fix for #37561).

#### **6. What This Means for Application Developers**  
- **Production Workloads**: Prioritize using the **weight cache daemon** (`--enable-weight-cache-daemon`) for large models (e.g., Qwen3-235B) to reduce cold-start latency from minutes to seconds.  
- **Multi-Backend Deployments**: Use `--speculative-algorithm EAGLE` with **unified KV cache** and **external linkers** for scalable speculative decoding across heterogeneous clusters.  
- **Hardware-Specific Tuning**: For NPU deployments, ensure `--enable-hierarchical-cache` and FP8 KV cache are used with GLM-5.2. On AMD, verify `--dsa-prefill-backend triton` is set for gfx950.  
- **Avoid Regressions**: Do not use `--kv-cache-dtype fp8_e4m3` with `GLM-5.3-Flash` until fix lands (see #36830). Avoid `--enable-prefill-cp` with `--cp-strategy zigzag` if using HiCache (known issue with `test_unified_radix_cache_kl_cp.py`, #38019).

> 🔗 [GitHub Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-09**

---

### **1. Today's Highlights**  
The latest development cycle centers on **MTP (Multi-Token Prediction) speculative decoding enhancements for Qwen4Exp**, with two PRs enabling draft tensor loading and graph support. Critical Vulkan fixes address GPU workgroup limits on Intel Arc and AMD iGPUs, while new IQ3_XXS MoE support improves performance on SYCL-enabled Intel Arc GPUs.

---

### **2. Releases & Breaking Changes**  
- **`b10868`**: Added IQ type handling for MoE models in SYCL backend (#28476), resolving performance regression on Intel Arc Pro B60 GPUs when running `qwen3.8-flash-next:UD-IQ3_XXS`.  
- **`b10867`**: Disabled lazy tensor loading by default on integrated GPUs (iGPUs) to fix regression in prefill throughput; `--lazy-mode auto` now behaves more predictably (#28326).  
- **`b10865`**: Reverted prior change to restore `prop.integrated` in HIP builds, restoring compatibility with ROCm platforms (#28604).

> 🔗 [GitHub Release b10868](https://github.com/ggml-org/llama.cpp/releases/tag/b10868) | [PR #28476](https://github.com/ggml-org/llama.cpp/pull/28476)

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen4Exp (Qwen3.8-Flash-Next)**: Full MTP speculative decoding now supported via draft tensor loading from sidecar GGUFs or in-file layouts (#28610).  
- ✅ **Intel XDNA Backend**: Feature request filed for native XDNA hardware support (#21725); no implementation yet.  
- ✅ **Metal Multi-GPU**: Requested support for eGPU + dGPU use on Apple Silicon Macs (#28565); not implemented.  
- ✅ **WebM Video Upload**: Web UI now accepts `.webm` files via upload (#28622); closes #28076.

> 🔗 [PR #28610](https://github.com/ggml-org/llama.cpp/pull/28610) | [Issue #21725](https://github.com/ggml-org/llama.cpp/issues/21725) | [PR #28622](https://github.com/ggml-org/llama.cpp/pull/28622)

---

### **4. Performance & Optimization**  
- **Vulkan**: Optimized `FILL` dispatch to avoid exceeding `maxComputeWorkGroupCount` (65535) on Intel Arc GPUs, preventing crashes at long context lengths (#28592).  
- **SYCL**: Fixed missing IQ quantization in `mul_mat_vec_q_moe`, improving inference speed on Intel Arc B60 GPUs for `qwen3.8-flash-next:UD-IQ3_XXS` (#28476).  
- **Vulkan**: Introduced `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` workaround to mitigate ~78% decode throughput cliff at 131072 context window due to suballocation fragmentation (#27734).  
- **CUDA**: Enabled CUDA graphs again after fix for RTX 5090 watchdog/XID 8 issues (#27330); `GGML_CUDA_DISABLE_GRAPHS=1` remains a viable fallback.

> 🔗 [PR #28592](https://github.com/ggml-org/llama.cpp/pull/28592) | [PR #28476](https://github.com/ggml-org/llama.cpp/pull/28476) | [Issue #27734](https://github.com/ggml-org/llama.cpp/issues/27734)

---

### **5. Stability & Regressions**  
- ⚠️ **Critical Crash**: `cudaStreamSynchronize` failure on RTX 5090 with Qwen3.6-35B MoE + partial expert offload — deterministic, cross-build (b10107, b10243) (#26609).  
- ⚠️ **GPU Reset**: CUDA inference on Qwen3.8-27B Q6_K causes display loss and full-chip reset on RTX 5090 Linux systems (#27910).  
- ⚠️ **Vulkan Assert**: `GGML_ASSERT(wg0 <= ctx->device->properties.limits.maxComputeWorkGroupCount)` fails on Intel Arc A770 at high context sizes (#28247); fixed in PR #28592.  
- ⚠️ **Regression**: `--lazy-mode auto` halves prefill throughput on qwen4exp with Vulkan/iGPU (#28160); revert suggested.  
- ⚠️ **Non-determinism**: MTP retains inter-request state, causing model degradation and inconsistent output (#26425).

> 🔗 [Issue #26609](https://github.com/ggml-org/llama.cpp/issues/26609) | [Issue #27910](https://github.com/ggml-org/llama.cpp/issues/27910) | [PR #28592](https://github.com/ggml-org/llama.cpp/pull/28592) | [Issue #28160](https://github.com/ggml-org/llama.cpp/issues/28160)

---

### **6. What This Means for Application Developers**  
- **Use `--lazy-mode auto` cautiously on iGPUs** — it may halve prefill performance on qwen4exp models; consider disabling it or using `--lazy-mode off`.  
- **Enable MTP speculative decoding for Qwen4Exp** via draft GGUFs or in-file tensors; ensure your tooling supports draft head loading (e.g., `nemotron:fix-mtpv2-draft-head-loading` PR #28617).  
- **For Intel Arc users**: Upgrade to recent builds with IQ3_XXS/MoE support for better performance; monitor for GPU hangs under heavy load.  
- **Vulkan users**: Set `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` to avoid decode throughput cliffs beyond 131K context.  
- **CUDA developers**: Avoid `--cuda-graphs` on RTX 5090 until further stability patches are released; `GGML_CUDA_DISABLE_GRAPHS=1` is safe.

> 📌 Recommended: Monitor [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues) and PRs for real-time updates on critical regressions and optimizations.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-09**

---

### **1. Today's Highlights**  
The Ollama project continues to deepen its agent and multi-modal capabilities, with key PRs enabling video input on macOS and refining tool integration in the Responses API. Critical stability improvements were merged around stream failure handling and context compaction retries, while ongoing work focuses on MLX backend optimizations and secure model loading via signing support.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*  
However, several critical fixes were merged into the main branch:
- [PR #18332](https://github.com/ollama/ollama/pull/18332): Preserves upstream stream failures through the cloud proxy, preventing silent 200 responses.
- [PR #18324](https://github.com/ollama/ollama/pull/18324): Adds retry logic after context overflow during compaction — mitigates repeated 500 errors in long-agent conversations.
- [PR #18329](https://github.com/ollama/ollama/pull/18329): Enables plaintext-labeled Codex agent messages for better compatibility with OpenAI-style tooling.

---

### **3. New Model & Hardware Support**  
- ✅ **Video Input on macOS**: [PR #18179](https://github.com/ollama/ollama/pull/18179) enables video decoding (frames + audio) in `/api/chat` and `/api/generate`, unlocking multimodal use cases on Apple platforms.
- ✅ **Qwen Static YaRN Contexts (MLX)**: [PR #18263](https://github.com/ollama/ollama/pull/18263) adds support for Qwen3.5/3.8’s static YaRN RoPE metadata, allowing extended context lengths without retraining.
- ⚠️ **IQ3_S Quantization (GGUF)**: Still unsupported — [Issue #18297](https://github.com/ollama/ollama/issues/18297) reports empty output when using `IQ3_S` quantized `Qwen3.8-27B-GSQ-RCO-GGUF`. No PR yet.
- ❌ **mllama (Llama3.2-vision)**: Still not supported — [Issue #16547](https://github.com/ollama/ollama/issues/16547) remains open due to unknown architecture error.

---

### **4. Performance & Optimization**  
- 🔧 **MLX Prefix Cache Fix**: [PR #18267](https://github.com/ollama/ollama/pull/18267) addresses a fixed 17–27 second re-prefill penalty on cold prompts by aligning prefix-cache restore with token boundaries instead of forcing multiples of 8192.
- 🔧 **MLX Array Lifetime Management**: [PR #18327](https://github.com/ollama/ollama/pull/18327) replaces sweeping-based memory cleanup with scoped lifetimes, reducing memory leaks and improving GC predictability.
- 📈 **GGUF Metadata Caching**: [PR #17858](https://github.com/ollama/ollama/pull/17858) extracts and caches GGUF metadata once per blob, reducing load-time overhead and improving consistency across model capability checks.

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|--------|------|--------|------------|
| High | [Issue #18193](https://github.com/ollama/ollama/issues/18193) | `glm-5.3:cloud` enters endless reasoning loops in OpenCode/ZCode, aborting tasks | Open — affects Cloud API reliability |
| High | [Issue #18297](https://github.com/ollama/ollama/issues/18297) | `IQ3_S` quantized Qwen3.8 GGUF returns empty content | Open — blocks advanced quantization adoption |
| Medium | [Issue #18283](https://github.com/ollama/ollama/issues/18283) | MLX compile-cache CHECK errors spam logs on non-MLX hardware (Windows/CPU) | Open — noisy logging impacts debugging |
| Medium | [Issue #18094](https://github.com/ollama/ollama/issues/18094) | `gemma3:12b` truncates structured output early when input contains double quotes | Open — breaks JSON schema fidelity |
| Low | [Issue #162](https://github.com/ollama/ollama/issues/162) | Auto-start on login (macOS/Windows) — now has PR (#7097) | Closed — fix pending merge |

---

### **6. What This Means for Application Developers**  
- **Agents & Tooling**: Expect more robust behavior from the Responses API — especially around tool discovery (`tool_search`) and streaming failures. Use `openai: expose tools loaded by client tool search` ([PR #18309](https://github.com/ollama/ollama/pull/18309)) to ensure discovered tools are callable.
- **Multimodal Apps**: Video input is now viable on macOS — ideal for agent-driven video analysis workflows.
- **Performance-Critical Workloads**: If using MLX on Apple Silicon, be aware of cache alignment issues; the fix in [PR #18267](https://github.com/ollama/ollama/pull/18267) will reduce cold-start latency significantly.
- **Security & Reliability**: Model signing is under active development ([PR #11573](https://github.com/ollama/ollama/pull/11573)); avoid untrusted models until it ships.
- **Cloud API Caution**: Avoid `glm-5.3:cloud` for production agents due to infinite reasoning risks — monitor [Issue #18193](https://github.com/ollama/ollama/issues/18193).

> 💡 *Pro Tip:* Always validate model inputs for structured outputs (`format=json`) — `gemma3:12b` may silently truncate if double quotes appear in user text.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-09**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to mature with significant improvements in **Anthropic-native `/v1/messages` protocol fidelity**, including fixes for encrypted reasoning preservation across turns (#40349) and silent system message drops (#36917). New features focus on **observability and cost transparency**, such as auto-router session savings reporting (#40330) and enhanced guardrail metadata tracing (#40327). Critical stability fixes address rate-limiting inconsistencies, proxy auth leakage, and streaming tool-call continuity.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, ongoing changes include:  
- **Cost map fetch optimization**: #40350 reworks retry behavior to avoid blocking startup during network outages (fixes latency spikes on `lite` CLI usage).  
- **Proxy health persistence opt-out**: #38324 introduces a config toggle to disable background health history storage, reducing DB load in high-throughput environments.  
👉 [PR #40350](https://github.com/BerriAI/litellm/pull/40350), [PR #38324](https://github.com/BerriAI/litellm/pull/38324)

---

### **3. New Model & Hardware Support**  
- **OpenInfer** added as an OpenAI-compatible provider via #34623. Supports `/v1/chat/completions` with configurable API base and key.  
- **Azure AI models**: Added support for `azure_ai/deepseek-v4-flash` and `azure_ai/deepseek-v4-pro` in pricing model registry (#30129).  
- **QwenCloud migration path** proposed (#36150) — official integration expected soon for DashScope users.  
👉 [PR #34623](https://github.com/BerriAI/litellm/pull/34623), [Issue #36150](https://github.com/BerriAI/litellm/issues/36150)

---

### **4. Performance & Optimization**  
- **Auto-router cost visibility**: #40330 enables real-time display of routed model and cost savings in Claude Code/Codex clients — crucial for agent cost governance.  
- **Async image generation**: #32240 improves responsiveness by using async task polling for ModelScope image generation.  
- **Stream chunk safety**: #37781 guards against `IndexError`/`KeyError` in empty or malformed `choices`, preventing crashes in edge cases.  
👉 [PR #40330](https://github.com/BerriAI/litellm/pull/40330), [PR #32240](https://github.com/BerriAI/litellm/pull/32240)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | `TPM limiting` broken for virtual keys (#24677) | Rate limits enforced at half configured value; bypasses control | *Fix pending* |
| 🔴 High | `Model Access Groups leak into /v1/models` (#25550) | Exposes internal group names to public API; security risk | *Fix pending* |
| 🔴 High | `Prompt cache key not updated` in Claude Code → OpenAI bridge (#39145) | Caching fails due to static `user_id` derivation | *Fix merged but reverted; needs rework* |
| 🟡 Medium | `Streaming tool-call continuation breaks` after tool round-trip (#30053) | Clients receive XML instead of text when using Bedrock + Claude | *Fix PR open (#30053)* |
| 🟡 Medium | `Auth errors disclose key hash/model allowlist` (#40217) | Security exposure via 401/403 responses | *Fix PR open (#40217)* |

👉 [Issue #24677](https://github.com/BerriAI/litellm/issues/24677), [Issue #39145](https://github.com/BerriAI/litellm/issues/39145), [PR #40217](https://github.com/BerriAI/litellm/pull/40217)

---

### **6. What This Means for Application Developers**  
- **Prioritize upgrading** if using virtual keys, access groups, or Claude Code — known regressions could break rate limiting and expose sensitive metadata.  
- Use **new auto-router feedback endpoints** (`GET /auto_router/session`) to monitor cost efficiency in production agents.  
- **Avoid relying on `/v1/models` output** for client-side model discovery — it may expose unintended access groups.  
- For **multi-provider deployments**, ensure consistent `model_prices_and_context_window.json` updates (e.g., DeepSeek Azure models now supported).  
- **Monitor logging and guardrails** — new metadata headers (`x-litellm-guardrail-scan-metadata`) enable better auditability of policy enforcement.  

> ✅ Pro tip: Enable `enable_post_custom_auth_checks` and `max_end_user_budget_id` only after verifying concurrency handling — a race condition in budget initialization was reported today (#40095).

---  
*Data source: github.com/BerriAI/litellm | Updated: 2026-09-09*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-09**

---

### **1. Today's Highlights**  
The v0.1.807-beta release delivers significant performance gains, particularly for AMD GPUs using Vulkan (up to 20% faster prefill and decoding vs. ROCm). Critical fixes address Windows installer security issues and AMD iGPU stability in Strix systems. New PRs focus on robustness for multi-node DGX Spark clusters and improved handling of quarantined binaries at launch.

---

### **2. Releases & Breaking Changes**  
- **v0.1.807-beta**: Major performance and reliability update.  
  - *AMD Vulkan by default*: Switches from ROCm to Vulkan for AMD GPUs, delivering up to 20% better prefill/decoding throughput.  
  - *Windows `llama-server.exe` now signed*: Reduces false positives with Smart Application Control (SAC).  
  - *Fixed AMD gibberish issues* in Strix and integrated graphics (iGPUs).  
  [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.807-beta)

---

### **3. New Model & Hardware Support**  
- **AMD GPU Backend**: Vulkan is now the default for AMD devices — no longer requires manual ROCm setup.  
- **DGX Spark Clustering**: First-class support for two-node DGX Spark configurations via ConnectX-7 200GbE, including pipeline training and async replica routing.  
  - PRs: [#10280](https://github.com/unslothai/unsloth/pull/10280), [#10323](https://github.com/unslothai/unsloth/pull/10323)  
- **New Model Support Requests**:  
  - Qwen3-omni TTS voice cloning ([#3636](https://github.com/unslothai/unsloth/issues/3636))  
  - IFM K2 models ([#10562](https://github.com/unslothai/unsloth/issues/10562))  
  - MiCA (Minor Component Adaptation) integration in PEFT ([#6730](https://github.com/unslothai/unsloth/issues/6730))

---

### **4. Performance & Optimization**  
- **AMD Vulkan Boost**: Up to **20% improvement in prefill and decoding latency** compared to ROCm on recent AMD GPUs.  
- **Fast Dequantize Stream Fix**: PR [#10563](https://github.com/unslothai/unsloth/pull/10563) resolves unsafe stream caching in `fast_dequantize`, critical for stable QLoRA training on RX 7900 XTX.  
- **Multi-GPU Pipeline Training**: PR [#10280](https://github.com/unslothai/unsloth/pull/10280) enables high-throughput, low-latency model training across two DGX Sparks with real-world benchmarks.  
- **Memory Efficiency**: Gefen-X optimizer integration (#7051) reduces AdamW optimizer state memory by ~8× (≈1 byte/parameter vs. fp32).

---

### **5. Stability & Regressions**  
- **Critical**: `llama.cpp` build broke AMD GPU detection ([#7485](https://github.com/unslothai/unsloth/issues/7485)) – reported and under investigation.  
- **High Severity**: Windows access denied after elevated install if Studio runs without admin ([#4846](https://github.com/unslothai/unsloth/issues/4846)) – fixed in beta.  
- **UI Regression**: Conversation recall order fails on Windows due to clock tick tie-breaking ([#10544](https://github.com/unslothai/unsloth/issues/10544)) – fix PR in progress ([#10572](https://github.com/unslothai/unsloth/pull/10572)).  
- **Security Alert**: `hf-stack` security audit red on main due to unreviewed package scan results ([#10545](https://github.com/unslothai/unsloth/issues/10545)) – baseline review pending.  
- **Model Loading Failure**: Wan2.2 TI2V video generation OOM on AMD RX 9060 XT due to missing fused attention kernel ([#10415](https://github.com/unslothai/unsloth/issues/10415)) – workaround: fallback to PyTorch SDPA.

---

### **6. What This Means for Application Developers**  
- **AMD Users**: Switch to Vulkan backend automatically — expect **~20% speedup** in inference and fine-tuning. Avoid ROCm unless required for specific workflows.  
- **Enterprise Deployments**: Use the new **per-account isolation feature** ([#10375](https://github.com/unslothai/unsloth/pull/10375)) for shared GPU machines with multiple users.  
- **Offline Environments**: For air-gapped setups, consider standalone packages like KoboldCpp; Unsloth currently lacks offline installer support ([#10356](https://github.com/unslothai/unsloth/issues/10356)).  
- **Agent Development**: Be cautious with tool call budgets — some models (e.g., Qwen 3.8 Flash Next) may misinterpret "Max" settings due to internal budgeting logic ([#10479](https://github.com/unslothai/unsloth/issues/10479)).  
- **Infrastructure Teams**: Monitor `UNSLOTH_PYTORCH_MIRROR` behavior — query tokens may be corrupted during URL concatenation ([#10516](https://github.com/unslothai/unsloth/issues/10516)); use explicit path separation.

---  
*Digest compiled from GitHub activity (unslothai/unsloth), 2026-09-09.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*