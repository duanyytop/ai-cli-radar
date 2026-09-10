# AI Infrastructure Digest 2026-09-10

> Generated: 2026-09-10 00:43 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-10**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of high specialization and performance convergence, with core engine projects like **vLLM**, **SGLang**, and **llama.cpp** pushing the boundaries of efficiency in KV cache management, kernel fusion, and hardware-specific optimizations. At the same time, **Ollama**, **LiteLLM**, and **Unsloth** are evolving into full-stack orchestration layers—bridging local runtime flexibility with cloud-native gateway capabilities. This landscape reflects a growing divide between *low-level inference engines* (focused on microsecond latency and throughput) and *application-layer platforms* (prioritizing developer experience, multi-provider routing, and agent workflows). Despite rapid innovation, stability regressions—especially around speculative decoding, MoE routing, and GPU backend memory handling—are emerging as critical bottlenecks for production deployment.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Release Status         | Key Notes |
|---------------|-------------|----------|------------------------|---------|
| **vLLM**      | 54          | 38       | v0.29.0 (stable)       | Major MRV2 rollout; 4 critical issues on Qwen3.8-Flash-Next + GB10/sm_121 |
| **SGLang**    | 52          | 71       | No new release         | High activity in ROCm 10, DCP/PD, and MoE optimization; 4 critical stability issues |
| **llama.cpp** | 49          | 62       | Dev builds only        | Legacy flag deprecation; Vulkan/CUDA stability fixes; AMD RDNA4 gains |
| **Ollama**    | 63          | 48       | v0.33.2 (stable)       | AMD Vulkan regression; Intel SYCL support added |
| **LiteLLM**   | 71          | 41       | v1.102.0-dev.1 (beta)  | Security-focused; 3 high-severity rate-limiting/cost tracking bugs |
| **Unsloth**   | 45          | 36       | v0.1.808-beta (beta)   | Performance gains on AMD/Vulkan; Windows/Intel XPU fixes |

> ✅ *SGLang leads in PR volume and feature velocity; LiteLLM shows highest issue density, signaling maturity-related complexity.*

---

### **3. Model Support Race**

| New Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next (FP8)** | ✅ Full FP8 QSA path, MRV2 default | ❌ Not yet supported | ✅ Experimental | ❌ Not listed | ❌ Not listed | ❌ Not listed |
| **GLM-5.3-Flash (MoE)**     | ✅ SM120/gfx950, FP8 KDA | ✅ ROCm 10, PTPC FP8, breakable graphs | ✅ Experimental (GLM-5-Next) | ❌ Not listed | ❌ Not listed | ❌ Not listed |
| **Kimi-K3 (MoE + DSpark)**  | ✅ ROCm/GFX950 | ✅ DSPARK+DCP spec, MoE routing | ❌ Not listed | ❌ Not listed | ❌ Not listed | ❌ Not listed |
| **DeepSeek-V4 (DSV4)**      | ✅ PDMux tracked | ✅ Attention kernels merged | ❌ Not listed | ❌ Not listed | ❌ Not listed | ❌ Not listed |
| **Gemma4 (Tool Calls)**     | ⚠️ Stability issues | ❌ Not listed | ❌ Not listed | ✅ Patched (PR #18355) | ❌ Not listed | ❌ Not listed |
| **Ornith / Longcat 2.0 / Jamba** | ❌ Not listed | ❌ Not listed | ❌ Not listed | ✅ Requested (Issue #17100) | ❌ Not listed | ❌ Not listed |

> 🏆 **Winner: SGLang** — fastest adoption of cutting-edge models (GLM-5.3-Flash, Kimi-K3 MoE), especially on AMD and multi-node setups.  
> 🔥 **vLLM** leads in *production readiness* of large-scale models (Qwen3.8-Flash-Next) with FP8 and hybrid Mamba/GDN support.

---

### **4. Performance Frontier**

| Optimization Focus               | vLLM                         | SGLang                            | llama.cpp                   | Ollama                  | LiteLLM                     | Unsloth                 |
|----------------------------------|------------------------------|-----------------------------------|-----------------------------|-------------------------|-----------------------------|-------------------------|
| **KV Cache & Memory Management** | ✅ Auto-sizing via CUDA graphs, FlexAttention | ✅ Weight cache daemon (Qwen3-235B load <1s) | ✅ Graph cache key fix (spec decode) | ✅ Prefix cache eviction | ❌ Rate-limit drift issues | ❌ OOM risks in multi-GPU fine-tuning |
| **Batching & Throughput**        | ✅ Speculative decoding, Split-K | ✅ Multi-query attention fusions | ✅ MMQ tile sizing (RDNA3) | ⚠️ VRAM accounting bugs | ✅ Auto-router fallback | ⚠️ Background update polling |
| **Quantization & Kernel Fusion** | ✅ FP8_e4m3 QSA, W8A8 GEMM | ✅ GLM-5.3-Flash: 12 → 4 HIP kernels | ✅ Dedicated `iq4_xs` shader (RDNA4) | ❌ Limited quant control | ❌ Incomplete spend logging | ✅ Diffusion speedup (AMD Vulkan) |
| **Distributed Serving**          | ✅ MoE offloading, back-pressure | ✅ Multi-node MoE, DCP/PD disaggregation | ❌ No distributed support | ❌ Single-node focus | ✅ Multi-provider routing | ❌ Not addressed |
| **Hardware-Specific Tuning**     | ✅ GB10 (sm_121), H100, Intel XPU | ✅ gfx950, ROCm 10, AMD iGPU | ✅ RDNA4, Intel Arc A770, Adreno | ✅ Intel SYCL, AMD iGPU | ❌ Platform-agnostic | ✅ Strix Halo APU, B580 |

> 📈 **Trend**: The frontier is shifting from general-purpose acceleration to *hardware-aware, model-specific kernel tuning*, especially on AMD (gfx950), NVIDIA Blackwell (sm_120), and Intel Arc GPUs.

---

### **5. Layer Positioning**

| Project       | Primary Layer             | Core Differentiator |
|---------------|----------------------------|---------------------|
| **vLLM**      | **Inference Engine**       | Highest throughput, low-latency serving; MRV2 engine is now de facto standard |
| **SGLang**    | **High-Performance Runtime** | Optimized for MoE, speculation, and disaggregated inference; bridges engine and gateway |
| **llama.cpp** | **Local Runtime / Fallback** | Cross-platform, lightweight; ideal for edge, mobile, and CPU-bound inference |
| **Ollama**    | **Gateway / CLI Orchestration** | Developer-first UX; unifies local inference, tool calls, and model management |
| **LiteLLM**   | **LLM Gateway / Proxy**    | Multi-provider routing, cost tracking, observability; essential for enterprise LLM gateways |
| **Unsloth**   | **Fine-Tuning & Studio Stack** | Fast training/fine-tuning; strong vision-language and GGUF support; Studio UI focus |

> 🧩 **Strategic Insight**: vLLM and SGLang are converging toward *high-performance inference engines*; LiteLLM and Ollama serve as *gateway abstractions*; Unsloth specializes in *training-to-inference pipelines*.

---

### **6. Trend Signals**

#### **Key Trends Extracted from Today’s Activity**:
1. **Hardware Specialization is Accelerating**: Projects are increasingly optimizing for specific architectures—AMD gfx950, NVIDIA sm_121 (GB10), Intel Arc B70/B580—indicating that one-size-fits-all inference is fading.
2. **MoE and Hybrid Models Are Mainstream**: Support for Kimi-K3, GLM-5.3-Flash, and Qwen3.8-Flash-Next highlights that MoE and hybrid Mamba/GDN models are now production-ready, demanding advanced routing and offloading strategies.
3. **Speculative Decoding Remains Unstable**: Multiple critical bugs across vLLM, SGLang, and Ollama suggest that while speculative decoding offers massive throughput gains, it remains fragile—especially under prefix caching and long prompts.
4. **Security & Trust Are Moving Upstack**: LiteLLM’s cosign-signed images and Unsloth’s security audit failures show that supply chain integrity is now a top concern in open-source AI stacks.
5. **Agent Workflows Are Driving Requirements**: Tool call parsing (Gemma4), prefix caching (vLLM/Ollama), and multimodal input (Unsloth) are being prioritized—indicating that agents are no longer experimental but production-critical.

#### **Actionable Watchlist for Developers**:
- **Avoid `temperature=0` or long prompts with Qwen3.8-Flash-Next** until vLLM #54521 is resolved.
- **Do not use DCP/PD disaggregation** in production until SGLang fixes #34920 and #38645.
- **Validate JSON tool schemas** when using Gemma4 or Anthropic APIs—silent drops are possible.
- **Upgrade to `v0.1.808-beta`** if running Unsloth on AMD or Windows.
- **Audit rate limits and cost tracking** in LiteLLM deployments—current behavior may misreport spend by up to 50%.
- **Leverage signed Docker images** from LiteLLM and ensure CI/CD pipelines verify them with `cosign`.

> 💡 **Final Takeaway**: The infrastructure layer is maturing rapidly—but with increasing complexity. Choose tools based on your stack: **vLLM/SGLang** for scale, **LiteLLM/Ollama** for agility, **Unsloth** for fine-tuning, and **llama.cpp** for portability. Always validate against known regressions before production.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-09-10

---

### **1. Today's Highlights**

vLLM v0.29.0 has been released, marking the full rollout of **Model Runner V2 (MRV2)** as the default engine for all models — a major step toward improved inference efficiency and scalability. The release includes critical stability fixes for Qwen3.8-Flash-Next, particularly around non-deterministic greedy decoding and illegal memory access under sparse attention (QSA) paths on GB10 (sm_121), which were affecting high-throughput agent workloads.

---

### **2. Releases & Breaking Changes**

- **v0.29.0** is now live: [GitHub Release](https://github.com/vllm-project/vllm/releases/tag/v0.29.0)  
  - ✅ **Model Runner V2 is now the default for all models** (#53183). This includes changes to KV cache auto-sizing via CUDA graph memory profiling and improved handling of hybrid Mamba/GDN models.
  - ⚠️ Users relying on custom `--block-size` or `--no-async-scheduling` may observe behavioral differences in prefix caching with Qwen3.8-Flash-Next; see issue #54173 and #54521 for context.

---

### **3. New Model & Hardware Support**

- **Qwen3.8-Flash-Next (FP8)**: Full support for FP8_e4m3 KV cache on the QSA path now enabled via patch (#54426); early benchmarks show **~2x increase in effective KV pool size** on GB10 (sm_121).
- **NVIDIA RTX 4090 (SM89)**: Added W8A8 block-FP8 GEMM configurations for key shapes serving Qwen3.8-27B-FP8 at TP=2 (#56085).
- **ROCm (gfx942/gfx950)**: Opt-in MXFP4-to-int4 conversion for Kimi-K3 (#51274); AITER mask0 decode enabled for DSpark on gfx950 (#56051).
- **Intel XPU**: Device ID honoring fixed in worker placement (`device_ids` now respected) (#56015); speculative decoding still unstable (#52262).

---

### **4. Performance & Optimization**

- **Triton Kernel Optimizations**:
  - Split-K support extended to speculative multi-query attention (up to 5 queries per request) with row capacity checks (#56148).
  - MiniMax-M3 prefill index-score loop split across launch dimension to improve parallelism (#56150).
- **MoE & Speculative Decoding**:
  - Back-pressure detection added to KV offloading manager to prevent unbounded disk stalls (#50045).
  - Prioritize sparse MoE experts during UVA CPU offloading to reduce thrashing (#54610).
- **CUDA Graph & Memory**:
  - MRV2 now includes CUDA graph memory profiling for dynamic KV cache sizing (#53183).
  - FlexAttention now uses memory-independent block masks, preventing OOMs with large caches (#55977).

---

### **5. Stability & Regressions**

| Severity | Issue | Description | Fix Status |
|---------|------|-------------|------------|
| 🔴 Critical | [#54521](https://github.com/vllm-project/vllm/issues/54521) | Greedy decoding non-deterministic on `Qwen3.8-Flash-Next` when prompt nears `indexer_budget` due to `persistent_topk` instability | ❌ Open, reproducible on sm_121 |
| 🔴 Critical | [#54173](https://github.com/vllm-project/vllm/issues/54173) | CUBLAS_STATUS_INTERNAL_ERROR / illegal memory access in GDN path with prefix caching on GB10 (sm_121) | ❌ Open |
| 🟡 High | [#54521](https://github.com/vllm-project/vllm/issues/54521) | Silent top-k candidate loss in `persistent_topk` due to coarse histogram binning | ❌ Open |
| 🟡 High | [#54426](https://github.com/vllm-project/vllm/issues/54426) | FP8 read side missing in QSA Triton kernels — only partially implemented | ✅ Patch available, seeking validation |
| 🟡 Medium | [#54237](https://github.com/vllm-project/vllm/issues/54237) | v0.28.0/v0.29.0 consume all host memory at startup (fixed in v0.27.1) | ❌ Open |

> ⚠️ Multiple regressions affect **Qwen3.8-Flash-Next** under MRV2 + prefix caching + spec decoding on **GB10 (sm_121)** and **H100 (sm90)**.

---

### **6. What This Means for Application Developers**

- **Upgrade to v0.29.0 with caution**: While MRV2 brings performance gains, it introduces subtle correctness issues in Qwen3.8-Flash-Next workflows — especially those using **prefix caching**, **speculative decoding**, or **long prompts** near `indexer_budget`.
- **Avoid `temperature=0` with Qwen3.8-Flash-Next** until #54521 is resolved — deterministic output is not guaranteed.
- **Use `--no-async-scheduling` temporarily** if you're seeing crashes in GDN/QSA paths on GB10.
- **Monitor KV cache behavior closely**: With MRV2’s new auto-sizing logic, unexpected memory spikes or OOMs can occur under high concurrency or long contexts.
- **Prepare for Rust frontend adoption**: Experimental Rust API (`VLLM_USE_RUST_FRONTEND=1`) is maturing fast — consider testing for low-latency, high-throughput services (#44280).

> 💡 Pro Tip: For production agents using Qwen3.8-Flash-Next, **pin to v0.27.1** until these stability issues are resolved. Use `--disable-async-scheduling` and avoid `persistent_topk`-triggering prompt lengths.

---  
*Data collected from GitHub: vllm-project/vllm — 2026-09-10*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **1. Today's Highlights**  
SGLang continues to advance its high-performance inference stack with key progress in AMD ROCm 10 support and multi-node scalability for MoE models. Critical fixes address stability issues in speculative decoding (EAGLE, NEXTN) and DCP/PD disaggregation workflows, while new PRs optimize kernel fusion for GLM-5.3-Flash on gfx950 and improve LoRA handling across TP/DP configurations.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- ✅ **AMD ROCm 10** support now officially enabled via `PR #38763` — release images and kernel wheels are published for AMD CI/nightly builds.  
- ✅ **GLM-5.3-Flash** gains expanded support on SM120 (Blackwell) and gfx950 (AMD), including FP8 KV cache, PTPC FP8 KDA projections (`PR #38764`, `#38706`), and breakable CUDA graphs (`PR #38522`).  
- ✅ **DeepSeek-V4 (DSV4)** integration continues: `PDMux` support is being tracked (`Issue #30884`) and attention kernels for SM100/SM103 are merged (`PR #30805`).  
- ✅ **Kimi-K3** now supports `DSPARK + DCP` speculation with full MoE routing (`PR #38700`, `#38580`).  
- 🚧 **SenseNova-U1/U1.5** support is actively tracked (`Issue #37742`) with roadmap alignment to official OpenSenseNova repo.

---

### **4. Performance & Optimization**  
- 🔥 **Weight Cache Daemon**: Phase 1 launched (`Issue #33522`) reduces Qwen3-235B FP8 weight load time from **~306–327s to <1s** using per-rank CUDA IPC daemon.  
- ⚙️ **Kernel Fusion**:  
  - GLM-5.2 DSA indexer decode path reduced from 12 kernels to **4 raw-HIP kernels** on gfx950 (`PR #38583`).  
  - Sparse MLA FP8 Q fused into a single kernel instead of two passes (`PR #38333`).  
- 📈 **MoE Optimization**:  
  - Unified MoE router GEMM layer proposed (`Issue #38695`) to reduce precision inconsistency and enable better tuning.  
  - Fuse shared → sparse experts in DSV4 MegaMoE (`Issue #38700`) to improve memory efficiency.  
- 💡 **Tiny GEMM Regressions**: A **4% decode latency regression** on DeepSeek-R1 NVFP4 (Blackwell) identified in `PR #34693`; fix pending (`Issue #38628`).

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR? |  
|------|----------|--------|---------|  
| `#33549`: DeepSeek-V4 TP=8 hangs at ~245K context (GPU 100% spin) | Critical | Open | ❌ |  
| `#30209`: GLM-5.2 FP4 + EAGLE crashes with illegal memory access in flashinfer_trtllm BF16 batched-GEMM | Critical | Open | ❌ |  
| `#34920`: Kimi-K3 decode crash due to `cumsum(extend_prefix_lens=None)` in DCP planner | High | Open | ❌ |  
| `#38645`: Decode retraction crashes in `get_cpu_copy` during PD-disaggregation | High | Open | ❌ |  
| `#37561`: Kimi-K3 multi-node MegaMoE prefill deadlocks after `PR #33871` | Medium | Closed | ✅ *(Pending review)* |  
| `#38587`: Kimi-K3 strict tool-call grammar allows `additionalProperties` to override named property types | Medium | Open | ❌ |  

> 🔍 *Note: Several regressions tied to speculative decoding (EAGLE/NEXTN), DCP, and MoE routing require urgent attention.*

---

### **6. What This Means for Application Developers**  
- ✅ **Deploy large MoE models faster**: The new **weight cache daemon** drastically cuts cold-start times for models like Qwen3-235B — essential for production LLM gateways.  
- ✅ **Leverage advanced speculations safely**: While EAGLE/NEXTN remain unstable on certain backends (e.g., GLM-5.2, Kimi-K3), future updates will stabilize these paths. Avoid them until `PR #30209` and `#33549` are resolved.  
- ✅ **Use optimized AMD pipelines**: With ROCm 10 and gfx950 kernel fusions live, developers can now run **GLM-5.3-Flash** efficiently on AMD hardware — ideal for cost-sensitive deployments.  
- ⚠️ **Avoid DCP/PD disaggregation in production** until `#34920`, `#38645`, and `#38580` are fixed — critical bugs cause hangs and crashes under load.  
- 💬 **Enable granular control**: Use `skip_cache_insert` (`Issue #38069`) to disable prefix caching per request, useful for privacy-sensitive or dynamic input scenarios.

> 🔗 [View all open issues](https://github.com/sgl-project/sglang/issues) | [Track CI health](https://github.com/sgl-project/sglang/issues/17050)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-10**

---

### **1. Today's Highlights**  
The latest updates focus on Vulkan and CUDA backend stability, particularly for Intel Arc and RDNA4 GPUs, with critical fixes for `maxComputeWorkGroupCount` overflow and improved MoE handling. Significant performance gains were landed for Q4_K quantized models on AMD GPUs via dedicated shaders and optimized kernel dispatch, while API deprecation of legacy memory flags (`--mmap`, `--mlock`, `--dio`) signals a move toward cleaner, future-proof configuration.

---

### **2. Releases & Breaking Changes**  
- **Deprecation of legacy memory flags**: `--mmap`, `--mlock`, and `--dio` are officially deprecated in favor of unified buffer management (PR [#28334](https://github.com/ggml-org/llama.cpp/pull/28334)). Users should migrate to `--buffer-type` or `--host-buffer` for explicit control.  
- **API change**: `llama_sampler_chain_n()` now returns `int32_t` instead of `int` (PR [#28631](https://github.com/ggml-org/llama.cpp/pull/28631)), improving type safety for downstream integrations.

---

### **3. New Model & Hardware Support**  
- **Model support**: Added experimental support for **GLM-5-Next (GLM-5.3-Flash)**, a 321B hybrid MoE model with vision tower (PR [#27754](https://github.com/ggml-org/llama.cpp/pull/27754)). Requires `NVIDIA_TF32_OVERRIDE=0` for correct behavior.  
- **Hardware/backend**:  
  - **Vulkan**: Dedicated `iq4_xs` mat-vec shader for RDNA4 (up to +17% token generation) (PR [#28426](https://github.com/ggml-org/llama.cpp/pull/28426)).  
  - **CUDA**: Optimized MMQ tile sizing for RDNA3 based on host-side `ncols_opt` (PR [#28552](https://github.com/ggml-org/llama.cpp/pull/28552)).  
  - **OpenCL**: Added bin kernels for `q4_k_f32`, `q6_k_f32`, and `q4_0_f32` GEMM variants targeting Adreno GPUs (PRs [#28678](https://github.com/ggml-org/llama.cpp/pull/28678), [#28677](https://github.com/ggml-org/llama.cpp/pull/28677), [#28268](https://github.com/ggml-org/llama.cpp/pull/28268)).

---

### **4. Performance & Optimization**  
- **Vulkan (RDNA4)**: Dedicated `mul_mat_vec_iq4_xs` shader delivers **+6–17% token generation speed** on Qwen 3.8 Flash Next (PR [#28426](https://github.com/ggml-org/llama.cpp/pull/28426)).  
- **CPU (ARM I8MM)**: Optimized `q4_K vec_dot` for batch=1 reduces activation memory traffic by 256 bytes/block and improves GFLOPS by **+34.3%** (PR [#28673](https://github.com/ggml-org/llama.cpp/pull/28673)).  
- **CUDA**: Graph cache key now includes first-node extent to prevent warmup state invalidation during speculative decoding (PR [#28666](https://github.com/ggml-org/llama.cpp/pull/28666)).  
- **SYCL**: RFC to use radix-select for `top_k` when K > 32 (e.g., Qwen3.8 Flash Next) avoids CPU offload (PR [#28670](https://github.com/ggml-org/llama.cpp/pull/28670)).

---

### **5. Stability & Regressions**  
- **Critical**: `vkCreateComputePipelines` fails with `VK_ERROR_UNKNOWN` on Adreno 830 due to SPIR-V differences from NDK version (Issue [#28635](https://github.com/ggml-org/llama.cpp/issues/28635)) — workaround: downgrade NDK or disable affected shaders.  
- **High severity**: Vulkan crashes on Intel Arc A770 with `maxComputeWorkGroupCount` exceeded during FILL operation (Issue [#28247](https://github.com/ggml-org/llama.cpp/issues/28247)); fixed in b10883 via 2D workgroup distribution (PR [#28592](https://github.com/ggml-org/llama.cpp/pull/28592)).  
- **Moderate**: VRAM leak (~10MB per PP+TG cycle) observed with DeepSeek V4 Flash + DSpark (Issue [#27155](https://github.com/ggml-org/llama.cpp/issues/27155)); not yet patched.  
- **Other**: CUDA graphs hang GPU channel (Xid 8) on RTX 5090 Laptop (Issue [#27330](https://github.com/ggml-org/llama.cpp/issues/27330)); workaround: `GGML_CUDA_DISABLE_GRAPHS=1`.

---

### **6. What This Means for Application Developers**  
- **Avoid legacy flags**: Migrate from `--mmap`/`--mlock`/`--dio` immediately; use `--buffer-type` for predictable memory semantics.  
- **GPU-specific tuning**: For RDNA4 (AMD) users, expect ~10–17% faster inference with Q4_K models—ensure Vulkan is enabled. For Intel Arc, watch for `maxComputeWorkGroupCount` issues under high load.  
- **MoE scaling**: Two-tier expert caching (Issue [#20757](https://github.com/ggml-org/llama.cpp/issues/20757)) remains a sought-after feature—consider manual eviction logic until implemented.  
- **Security & robustness**: The WebUI vulnerability (Issue [#25790](https://github.com/ggml-org/llama.cpp/issues/25790)) highlights need for input sanitization in production deployments.  
- **Future-proofing**: Monitor PRs like [#28670](https://github.com/ggml-org/llama.cpp/pull/28670) and [#28635](https://github.com/ggml-org/llama.cpp/issues/28635) for backend-specific gotchas in mobile and cross-platform apps.  

> ✅ **Recommendation**: Use `b10883+` builds for Vulkan stability on Intel/AMD; test new GLM-5.3-Flash support with `NVIDIA_TF32_OVERRIDE=0`.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-10**

---

### **1. Today's Highlights**  
A critical regression in the Vulkan backend on AMD GPUs (including Radeon 780M) has been reported, causing model loading failures with `Not enough memory for command submission`. This affects users running large models (>66 GB) on AMD iGPUs and is a known regression since v0.32.12. Simultaneously, a high-severity bug in Gemma4’s tool call parser (`#18354`) was identified, silently dropping valid tool calls due to string placeholder collisions—this has already been patched in PR #18355. These issues highlight ongoing challenges in GPU backend stability and JSON parsing robustness.

---

### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. The latest stable version remains **v0.33.2**, with no breaking changes announced.

---

### **3. New Model & Hardware Support**  
- **Intel SYCL (oneAPI) support introduced**: PR #18333 adds native Intel discrete GPU (e.g., Arc B70 32GB) support via SYCL backend, enabling offloading to Intel GPUs under Linux. This marks a major expansion beyond CUDA, ROCm, and Metal.
- **Cloud model requests**: Issue #17100 highlights demand for newer frontier models (e.g., *Ornith*, *Longcat 2.0*, *Jamba*, *Step 3.7*) on Ollama Cloud—indicating growing expectations for cutting-edge model availability.

> 🔗 [PR #18333: Implement native Intel SYCL runner](https://github.com/ollama/ollama/pull/18333)

---

### **4. Performance & Optimization**  
- **VRAM accounting fix in multi-GPU systems**: PR #18350 addresses a critical mismatch between discovered device names (`CUDA1`) and actual log names (`CUDA0`), preventing accurate VRAM tracking and leading to scheduling inefficiencies.
- **Prefix cache eviction improvement**: PR #18353 ensures prefix cache snapshots are evicted from active conversations when cache budget is exceeded, improving memory efficiency during long sessions.
- **Reduced noise in logs**: PR #17913 suppresses per-request `llama-server` logs unless debug mode is enabled, reducing log spam by ~20 lines per request—critical for observability at scale.

> 🔗 [PR #18350: Key VRAM accounting on child's log device names](https://github.com/ollama/ollama/pull/18350)  
> 🔗 [PR #18353: Evict prefix cache snapshots from active conversation](https://github.com/ollama/ollama/pull/18353)  
> 🔗 [PR #17913: Filter llama-server logs unless debug enabled](https://github.com/ollama/ollama/pull/17913)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|------------|
| 🚨 High | [#18272](https://github.com/ollama/ollama/issues/18272) | Vulkan backend fails loading 66GB model on AMD iGPU (`Not enough memory for command submission`) | Regression since v0.32.12; no fix yet |
| 🚨 High | [#17748](https://github.com/ollama/ollama/issues/17748) | AMD Radeon 780M Vulkan regression in Ollama ≥0.32.10 | Same root cause as #18272; active investigation |
| 🚨 High | [#18354](https://github.com/ollama/ollama/issues/18354) | Gemma4 tool call parser drops valid tool calls due to string placeholder collision | ✅ Patched in PR #18355 |
| ⚠️ Medium | [#18283](https://github.com/ollama/ollama/issues/18283) | MLX compile-cache CHECK spams logs on non-MLX hardware (Windows, no CUDA/Apple Silicon) | ✅ Fixed in PR #18335 |
| ⚠️ Medium | [#18344](https://github.com/ollama/ollama/issues/18344) | `ollama serve` leaks one FD per `/api/generate` request | Memory leak risk under sustained load |

---

### **6. What This Means for Application Developers**  
- **Avoid AMD Vulkan backends** for large models (>64GB) until v0.32.12+ regressions are resolved—use CPU or CUDA if possible.
- **Validate tool call integrity** when using Gemma4, especially in agent workflows: even valid tool schemas may be silently dropped due to JSON parsing edge cases.
- **Expect increased complexity in multi-GPU deployments**: VRAM accounting bugs can lead to incorrect scheduling—monitor `--log-verbosity` carefully.
- **Leverage emerging Intel SYCL support** for inference on Intel Arc GPUs—ideal for data centers prioritizing heterogeneous acceleration.
- **Use `ollama launch` with caution**: Configuration is opaque; consider using PR #18342 to dump the actual config used post-launch for debugging.

> 🔗 [Issue #18342: Command to dump config from `ollama launch`](https://github.com/ollama/ollama/issues/18342)  

Developers building agents should monitor both `Anthropic /v1/messages` compatibility (PR #18346) and OpenAI-compatible tool schema handling (PRs #18298, #18348) for production-grade reliability.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
LiteLLM v1.102.0-dev.1 introduces enhanced security via signed Docker images using cosign, reinforcing trust in production deployments. The ecosystem continues to expand with critical improvements to model routing (auto-router), authentication resilience (OAuth2/MCP), and observability—particularly around cost tracking, caching, and debugging. High-impact PRs focus on fixing core reliability issues in rate limiting, spend logging, and token handling for self-hosted backends.

---

### **2. Releases & Breaking Changes**  
- **v1.102.0-dev.1**: Released today with a strong emphasis on security. All Docker images are now signed using [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0), enabling verifiable integrity checks.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-dev.1)  
- **Note**: No breaking API changes reported; however, users relying on `spend_log_cleanup` or `rate_limiting` should monitor the stability of recent fixes (see *Stability & Regressions*).

---

### **3. New Model & Hardware Support**  
- ✅ **fal.ai Video Models**: Requested support for OpenAI Sora 2 and Google Veo 3.1 (Fast) via [Issue #16073](https://github.com/BerriAI/litellm/issues/16073). This would extend LiteLLM’s reach into generative video workflows.
- ✅ **Vertex AI OCR Support**: Added via [PR #40466](https://github.com/BerriAI/litellm/pull/40466), enabling native integration with Google Vertex for document processing tasks.
- ✅ **Qwen-Image & Wan Text-to-Image (DashScope)**: Proposed support via [Issue #28763](https://github.com/BerriAI/litellm/issues/28763), targeting Alibaba Cloud’s image generation stack.
- ✅ **Ollama in Rust Pipeline**: [PR #40326](https://github.com/BerriAI/litellm/pull/40326) adds full Rust path routing for Ollama chat completions, improving performance and reducing Python overhead.

---

### **4. Performance & Optimization**  
- 🚀 **Auto-router & Caching Visibility**:  
  - [PR #40487](https://github.com/BerriAI/litellm/pull/40487): Adds explicit caching savings scope selector in UI, allowing admins to track prompt-caching efficiency across providers.  
  - [PR #40330](https://github.com/BerriAI/litellm/pull/40330): Exposes routed model and session savings directly in Claude Code and Codex status lines—improving developer feedback loops.
- ⚙️ **Router Resilience**:  
  - [PR #40486](https://github.com/BerriAI/litellm/pull/40486): Auto-router now falls back from unhealthy tiers to configured defaults, preventing service outages during deployment degradation.
- 💡 **Memory Efficiency**:  
  - [PR #40483](https://github.com/BerriAI/litellm/pull/40483): Excludes large rerank request contexts from parameter dumps, mitigating memory exhaustion risks during high-volume inference.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status | GitHub |
|---------|-------|-------------|------------|--------|
| 🔴 High | #34140 | v3 rate limiter double-counts team per-model limits → effective RPM/TPM is half configured | ❌ Open | [Issue #34140](https://github.com/BerriAI/litellm/issues/34140) |
| 🔴 High | #39713 | Per-customer RPM limits stop applying after virtual key is cached | ❌ Open | [Issue #39713](https://github.com/BerriAI/litellm/issues/39713) |
| 🔴 High | #39322 | `least-busy` router starves deployments due to negative counter drift and lack of worker sharing | ❌ Open | [Issue #39322](https://github.com/BerriAI/litellm/issues/39322) |
| 🟡 Medium | #16582 | Spendlog cleanup fails silently (`Error during cleanup`) | ❌ Open | [Issue #16582](https://github.com/BerriAI/litellm/issues/16582) |
| 🟡 Medium | #13245 | Incomplete spend tracking for non-streaming Bedrock calls when client disconnects | ❌ Open | [Issue #13245](https://github.com/BerriAI/litellm/issues/13245) |
| 🟡 Medium | #29491 / #30217 | Anthropic `/count_tokens` ignores `api_base`, hardcodes `api.anthropic.com` | ❌ Open | [Issue #29491](https://github.com/BerriAI/litellm/issues/29491) |

> ⚠️ **Critical Note**: Several open issues affect billing accuracy, rate-limit enforcement, and proxy reliability—especially in multi-tenant, self-hosted environments.

---

### **6. What This Means for Application Developers**  
- **Use Signed Images**: Enforce image verification in CI/CD pipelines using `cosign verify` to prevent supply chain compromise.  
- **Avoid Rate-Limit Pitfalls**: Be cautious with per-team/per-model rate limits—current behavior may under-allocate capacity by 50%. Monitor #34140 for updates.  
- **Leverage Enhanced Observability**: Use new caching scopes (#40487) and auto-router feedback (#40330) to optimize agent cost and performance.  
- **Watch Out for Authentication Drift**: OAuth2 callback redirects fail on MCP servers due to missing routes (#24771); ensure custom paths are correctly registered.  
- **Self-Hosted Backends**: If using vLLM-compatible Anthropic APIs, avoid `count_tokens` until #29491/#30217 are resolved—your costs may be misreported.  

👉 **Actionable Takeaway**: Audit your `litellm_settings` and `model_list` configurations against known issues, especially around cost tracking and rate limiting. Prioritize testing with `v1.102.0-dev.1` if deploying in production.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-10**

---

### **1. Today's Highlights**  
The latest `v0.1.808-beta` release delivers significant performance gains, including up to **1.7x faster diffusion inference on AMD GPUs via Vulkan**, a **2x speedup in model updating**, and critical fixes for Windows AV false positives and AMD-specific gibberish output. These improvements solidify Unsloth’s position as a high-performance LLM serving stack, especially for vision-language and fine-tuning workflows.

---

### **2. Releases & Breaking Changes**  
- **`v0.1.808-beta` (GitHub)**: Released with major performance and stability enhancements. No breaking API changes reported, but users are advised to upgrade for improved reliability and reduced memory overhead.  
  🔗 [unslothai/unsloth v0.1.808-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.808-beta)

---

### **3. New Model & Hardware Support**  
- **AMD Strix Halo APU (gfx1151)**: Fixed incorrect RAM-only loading behavior; now properly utilizes GPU VRAM (110 GB free) instead of system RAM. Issue #6834 resolved.  
  🔗 [Issue #6834](https://github.com/unslothai/unsloth/issues/6834)  
- **Intel Arc B580**: Patched `torch.xpu.memory.mem_get_info()` incompatibility preventing import. Now functional on Intel XPU backends.  
  🔗 [Issue #3533](https://github.com/unslothai/unsloth/issues/3533)  
- **Apple Silicon (M1/M2/M3)**: Still pending; long-standing request (#4) remains open with 118 comments and 644 upvotes. Not yet addressed in this release.

---

### **4. Performance & Optimization**  
- **Diffusion Inference**: Up to **1.2–1.7x faster** on AMD ROCm via Vulkan backend.  
- **Model Updating**: **2x faster** due to removal of SAC + AV false positive checks on Windows.  
- **GGUF Loading**: Optimized memory mapping on Windows — PR #10618 avoids resident GGUF mappings post-offload, reducing system RAM footprint.  
- **Studio Update Efficiency**: PRs #10650, #10651, and #10653 reduce update time by rebuilding only stale components and prefetching updates in the background.  

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status |  
|--------|------|-------------|--------|  
| High | #10573 | "min_p and logit_bias not supported" when connected to vLLM in Windows desktop | Open |  
| High | #10559 | `llama-server` crashes with `GGML_ASSERT` on image input due to small default `ubatch` for Gemma 4 | Open |  
| Medium | #10545 | Security audit fails on main branch (`hf-stack`) after unsloth-zoo bump | Open |  
| Medium | #10556 | GGUF picker hides duplicate builds at same quant level (e.g., plain vs `-mtp`) | Open |  
| Low | #10679 | Export status polling is not single-flight → excessive API requests | Open |  
| Low | #10681 | `LongRopeRotaryEmbedding` incorrectly takes long cache path for sequences *exactly* at `original_max_position_embeddings` | Open |  

> ✅ **Fixes in Progress**: Several PRs (e.g., #10618, #10650) target core stability issues in Studio and memory handling.

---

### **6. What This Means for Application Developers**  
- **For vision-language apps**: The fix for AMD Strix Halo APU and Intel Arc B580 enables broader hardware support. Ensure you're on `v0.1.808-beta` or later for optimal GPU utilization.  
- **For fine-tuning pipelines**: If using QLoRA on multi-GPU setups (e.g., 2×A100), monitor OOM risks — issue #4040 highlights ongoing challenges with large models like Qwen3-Coder-Next-Base. Use smaller batch sizes or gradient checkpointing.  
- **For local inference deployments**: Avoid `--no-mmap` on Windows; use `Don't reserve system RAM` with caution — it may still hold file mappings unless patched via PR #10618.  
- **For agents & tooling**: PR #10088 ensures images from MCP tools are passed to the model — critical for multimodal agent correctness.  
- **For CI/CD**: The security audit failure (#10545) suggests dependency scanning is failing — prioritize reviewing `scan_packages_baseline.json` and upstream dependencies.

> 📌 **Actionable Tip**: Upgrade to `v0.1.808-beta` immediately if running on AMD or Windows. Monitor GitHub for upcoming patches related to GGUF export, vLLM integration, and multi-GPU training scalability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*