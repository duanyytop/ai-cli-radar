# AI 基础设施日报 2026-09-09

> 生成时间: 2026-09-09 02:33 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-09**

---

### **1. 生态概览**

2026年第三季度，AI推理与服务生态呈现出快速专业化、硬件感知优化以及向以代理为中心的工作负载收敛的趋势。各项目在定位上日益分化：高性能引擎（vLLM、SGLang）聚焦低延迟、可扩展的推理；轻量级运行时（llama.cpp、Unsloth）主导边缘与本地部署；网关类项目（LiteLLM）实现多提供商抽象与成本治理；而微调框架（Unsloth）则拓展至分布式训练与模型效率领域。混合架构（Mamba/GDN、MoE、视觉语言）及新型量化方案（IQ3_XXS、DA8W4）的兴起正推动内核级创新，尤其在AMD与NVIDIA最新一代GPU上表现突出。

---

### **2. 活动对比**

| 项目       | 近24小时开启的问题数 | 近24小时合并的PR数 | 发布状态 |
|---------------|----------------------------|--------------------------|----------------|
| **vLLM**      | 7                          | 5                        | 无           |
| **SGLang**    | 5                          | 4                        | 无           |
| **llama.cpp** | 6                          | 4                        | `b10868`、`b10867`、`b10865` |
| **Ollama**    | 5                          | 3                        | 无           |
| **LiteLLM**   | 4                          | 2                        | 无           |
| **Unsloth**   | 5                          | 4                        | **v0.1.807-beta** |

> ✅ *洞察：* **Unsloth在发布速度上领先**，此次重大beta更新聚焦AMD Vulkan性能优化与Windows安全增强。**vLLM与SGLang表现出最高的稳定性负担**，多个关键开放问题影响生产环境使用。

---

### **3. 模型支持竞赛**

| 新模型 / 架构        | 支持方               | 关键细节 |
|----------------------------------|----------------------------|-----------|
| **Bailing V3 VL**                | vLLM (#55921)              | 原生多模态图文支持；无需预处理 |
| **Qwen4Exp (Qwen3.8-Flash-Next)**| llama.cpp (#28610)、Ollama (#18263) | 通过草稿张量实现完整MTP推测解码；静态YaRN RoPE支持长上下文 |
| **DeepSeek-V4-Flash (SM8x)**    | ❌ 被阻塞（vLLM #50576）     | A100/A800上因后端不兼容失败；仅支持Blackwell |
| **GLM-5.2 (NPU)**                | SGLang (#38250)             | 950NPU上支持全FP8 DSA + 索引器KV缓存 |
| **Qwen 静态YaRN上下文 (MLX)** | Ollama (#18263)         | 实现长上下文推理无需重新训练 |
| **IFM K2, Wan2.2 TI2V**          | Unsloth（仅请求中）     | 尚未实现；存在活跃功能请求 |

> 🏆 **胜者：vLLM 与 SGLang** — 在**多模态与专用模型支持**方面领先，尤其对新兴视觉语言模型及具备NPU能力的模型支持优异。  
> ⚠️ **Ollama在高级量化（如IQ3_S）方面落后**，且缺乏mllama支持。

---

### **4. 性能前沿**

| 优化方向          | 领先项目                     | 关键进展 |
|------------------------------|--------------------------------------|------------------|
| **KV缓存管理**      | vLLM (#52244)、SGLang (#36700)        | 修复MTP前缀缓存缺失问题；统一预取票务机制 |
| **内核级加速**     | vLLM（Helion内核）、Unsloth（AMD Vulkan） | H100上提速1.38–1.78倍；AMD GPU最高提升20% |
| **分布式服务**      | SGLang (#33522)、Unsloth (#10280)     | 权重缓存守护进程（加载时间<1秒）；双节点DGX Spark训练 |
| **量化效率**  | vLLM (#54024)、llama.cpp (#28476)     | Zen CPU上支持DA8W4；Intel Arc上支持IQ3_XXS MoE |
| **内存与调度**      | vLLM (#55531)、SGLang (#38592)        | 对称DCP解耦；按令牌为主导的内存池 |

> 🔥 **趋势：** 硬件特定的内核调优（ROCm/Helion、AMD Vulkan、CUDA图）已成为竞争差异化的核心。**vLLM与Unsloth在原生硬件加速方面处于领先地位。**

---

### **5. 层级定位**

| 项目       | 主要层级                 | 次要角色                     | 差异化优势 |
|---------------|-------------------------------|------------------------------------|----------------|
| **vLLM**      | 高性能推理引擎 | 多后端推理、推测解码 | SM8x/Blackwell就绪，支持混合Mamba架构 |
| **SGLang**    | 分布式推理引擎  | 多后端、推测解码 | 统一KV缓存、权重恢复、HiCache |
| **llama.cpp** | 本地运行时 / 边缘推理 | GGUF执行、跨平台可移植性 | iGPU/Vulkan修复，Qwen4Exp支持MTP |
| **Ollama**    | 开发者网关 / CLI工具  | 代理工作流、视频输入、MLX支持 | macOS视频支持、codex工具链、云代理可靠性 |
| **LiteLLM**   | LLM网关 / 编排系统     | 成本路由、护栏机制、认证         | 自动路由会话节省、加密推理保真度 |
| **Unsloth**   | 训练导向运行时        | 微调、分布式集群   | Vulkan优先的AMD支持、Gefen-X优化器、DGX Spark支持 |

> 🎯 **战略清晰度：**  
> - **vLLM/SGLang**：适用于大规模、低延迟推理集群。  
> - **llama.cpp/Ollama**：适合本地、边缘或开发者导向部署。  
> - **LiteLLM**：最适合多提供商编排与成本控制。  
> - **Unsloth**：在AMD上的高效微调与分布式训练方面无与伦比。

---

### **6. 趋势信号**

#### 🔹 **以硬件为先的优化占据主导**
- **AMD Vulkan的统治地位**（Unsloth、SGLang、vLLM）表明从ROCm转向Vulkan已成为AMD推理的首选路径。
- **Blackwell（sm_120）独占性**体现在新模型（如DeepSeek-V4-Flash）上，揭示了硬件依赖差距——Ampere用户面临部署障碍。

#### 🔹 **代理工作负载驱动创新**
- MTP推测解码、前缀缓存恢复、工具调用连续性等需求在vLLM、SGLang和Ollama中均被优先考虑。
- **推测路径中的非确定性问题**（如Ollama #18297、llama.cpp #26425）仍是关键风险点。

#### 🔹 **可观测性与可靠性不可妥协**
- 请求级指标（vLLM）、会话成本追踪（LiteLLM）、流式失败处理（Ollama）反映出对生产级可观测性的强烈需求。

#### 🔹 **安全与信任缺口依然存在**
- 模型签名（Ollama）、认证泄露（LiteLLM）、未签名可执行文件（Unsloth预发布版）表明，信任机制仍落后于性能进步。

---

### **给应用开发者的建议**

1. **根据部署层级选择**：  
   - 使用 **vLLM** 用于高吞吐、云原生推理。  
   - 使用 **Ollama** 用于本地代理开发及macOS视频工作流。  
   - 使用 **LiteLLM** 用于多提供商成本控制与安全编排。

2. **规避生产风险**：  
   - **不要在Blackwell上使用FlashInfer + fp8 KV缓存**（vLLM #54225）。  
   - 暂勿使用 `glm-5.3:cloud`，直至 [Issue #18193](https://github.com/ollama/ollama/issues/18193) 解决。  
   - 在iGPUs上禁用 `--lazy-mode auto`（llama.cpp回归问题）。

3. **关注硬件过渡**：  
   - **Ampere（A100/A800）用户**应暂缓DeepSeek-V4-Flash的采用，待 #50576 修复后再行升级。  
   - **AMD用户**应通过Unsloth或vLLM迁移到Vulkan，以获得20%以上的性能提升。

4. **跟踪新兴标准**：  
   - 关注 **Qwen4Exp MTP支持**、**IQ3_XXS量化** 与 **模型签名** —— 这些将定义下一代效率与安全性。

---

*报告整理时间：2026-09-09 | 数据来源：GitHub活动统计（vLLM、SGLang、llama.cpp、Ollama、LiteLLM、Unsloth）*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-09-09

---

### **1. 今日亮点**

vLLM 项目持续推进对下一代模型与硬件的支持，针对混合 Mamba/GDN 模型中的推测解码关键问题进行了修复，并正在开展 DeepSeek-V4-Flash 在 SM8x（Ampere）架构上的兼容性工作。高影响力 PR 包括修复多线程处理（MTP）解码下前缀缓存未命中问题，以及改进去中心化系统中的 KV 缓存管理策略，显示出在优化真实推理负载方面的强劲势头。

---

### **2. 发布与破坏性变更**

过去 24 小时内无报告。未观察到新版本发布或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**

- **SM8x（Ampere：A100/A800，RTX 30xx）**：活跃的功能请求 (#50576) 提出在 Ampere GPU 上启用 `DeepSeek-V4-Flash` 与 `DeepSeek-V4-Flash-0731`，当前版本因后端不兼容而无法运行。
- **Intel XPU**：持续优化内存效率 (#50269)，支持多 GPU 张量并行 (#48953)，以及增强注意力核函数 (#53804)。
- **ROCm / AMD**：修复 AITER 注意力中共享 KV 预填充的关键错误 (#55887)，并通过 Helion 内核实现性能调优 (#53788)。
- **新增模型**：
  - [Bailing V3 VL](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL) – 通过 PR #55921 增加原生多模态图像-文本支持。
  - Kimi K3 混合 Mamba 模型 – 通过 PR #55531 支持对称 DCP + dspark 去中心化部署。
- **量化支持**：
  - PR #54024 新增对 Zen CPU 的 DA8W4（W4A8）int4 支持。
  - FP8 KV 缓存现已在多个后端（包括 TRITON_ATTN 与 FlashInfer）中得到支持。

---

### **4. 性能与优化**

- **混合 Mamba/GDN 前缀缓存恢复**：PR #52244 修复了由 MTP 推测解码在首次重播时丢失前缀缓存命中导致的严重吞吐量下降问题（约 30–40%），恢复了类代理工作负载下的高效复用。
- **推测解码效率提升**：HiSparse (#53781) 引入主机驻留的稀疏-MLA 解码热缓冲机制，在保持高吞吐的同时显著降低 GPU 内存压力。
- **内核级性能提升**：
  - Helion 内核在 H100 上相较 CUDA 等效内核实现 **1.38–1.78 倍几何平均加速**（#53788）。
  - ROCm 路径将大尺寸 DSV4 稀疏预填充路由至 AITER OPUS 内核 → 在 8k/1k 并发下实现 **约 15–20% 吞吐量提升**（#54855）。
- **内存与调度优化**：
  - PR #55531 实现了混合 Mamba 模型对称 DCP 去中心化支持，提升去中心化架构下的可扩展性。
  - PR #55921 增加每请求远程 KV 等待时间指标，提升分布式部署场景下的可观测性。

---

### **5. 稳定性与回归问题**

| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|------|----------|
| 🔴 高 | #54225 | FlashInfer 后端在 sm_120（Blackwell）上使用 NVFP4 + fp8 KV 缓存时引发 **CUDA 非法内存访问**；16 token 请求即崩溃 | ❌ 开放中 – TRITON_ATTN 未受影响 |
| 🔴 高 | #53670 | EAGLE/MTP 前缀缓存最后块丢弃导致 **每次命中需重新计算 1,648 个 token**，造成批量吞吐下降 30–40% | ✅ 已通过 PR #52244 修复 |
| 🟡 中 | #54521 | Qwen3.8-Flash-Next 贪心解码在上下文接近 `indexer_budget` 时表现 **非确定性**，导致输出不一致 | ❌ 开放中 – 影响正确性 |
| 🟡 中 | #52225 | Nemotron-3.5-Lightning-30B-A3B-NVFP4 在持续负载下反复出现 XID 13 错误（地址不对齐、非法指令） | ❌ 开放中 – 长时间运行任务存在稳定性风险 |
| 🟡 中 | #50576 | DeepSeek-V4-Flash 在 SM8x 上仍失败，尽管架构匹配 | ❌ 开放中 – 阻碍 A100/A800 上部署 |

> 🔗 完整问题详情：  
> - [Issue #54225](https://github.com/vllm-project/vllm/issues/54225)  
> - [Issue #53670](https://github.com/vllm-project/vllm/issues/53670)  
> - [Issue #54521](https://github.com/vllm-project/vllm/issues/54521)

---

### **6. 对应用开发者的启示**

- **使用场景影响**：若您运行的是 **代理工作流** 或 **重复提示模式**，请优先升级至 vLLM `0.27.x` 及以上版本，以利用 PR #52244 修复的 MTP 推测解码中前缀缓存行为。
- **硬件策略**：对于 **Ampere（A100/A800）** 用户，预计在 #50576 修复前可用模型有限——建议考虑 Blackwell（sm_120）或更新的 GPU 以获得完整的 DeepSeek-V4-Flash 支持。
- **多模态应用**：Bailing V3 VL 的加入（PR #55921）实现了原生图像输入，无需外部预处理流水线——非常适合视觉-语言代理应用。
- **可观测性**：通过 PR #53198 暴露每请求远程 KV 等待时间，用于调试分布式部署中的延迟突增问题。
- **稳定性警告**：在 #54225 修复前，请避免在 **Blackwell（sm_120）** GPU 上使用 FlashInfer 后端搭配 `fp8` KV 缓存——生产环境建议回退至 TRITON_ATTN。

> 💡 技巧提示：关注 `vllm-nightly` 构建以提前获取 HiSparse 与 Helion 优化等修复。使用 `--kv-cache-dtype bfloat16` 时需谨慎对待仅编码器模型——PR #55482 已解决一个隐式失败路径。

---

*摘要生成时间：2026-09-09 | 来源：[vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

### **SGLang Digest — 2026-09-09**

#### **1. 今日亮点**  
SGLang 持续推进生产级推理基础设施建设，在**分布式权重恢复**、**HiCache 稳定性**以及**多后端支持**方面取得重大进展。关键 PR 实现了全链路推测解码（EAGLE/DSpark）与统一 KV 缓存的集成，并在新硬件上推进对 **NPU** 与 **ROCm** 的支持。针对高并发场景下的卡死与内存损坏问题，已发布关键修复。

#### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本或破坏性 API/配置变更。

#### **3. 新模型与硬件支持**  
- ✅ **NPU**：完整支持 **GLM-5.2** 在 **950NPU** 上的 FP8 DSA + 索引器 KV 缓存（PR #38250）。  
- ✅ **ROCm**：基于 Triton 的稀疏 MLA 预填充/解码内核支持 **gfx950**（AMD RDNA3），启用 FP8 KV 缓存（PR #38601）。  
- ✅ **模型**：通过统一 KV 缓存与直接外部链接器支持 **DeepSeek-V4**（PR #38269）。  
- ✅ **扩散模型**：为 **FLUX.1-dev** 启用无损 BCG（PR #38591）；Qwen-Image-Edit 注意力优化适配 Hopper（PR #38584）。

#### **4. 性能与优化**  
- ⚡ **引擎恢复**：权重缓存守护进程将 Qwen3-235B FP8 的加载时间从约 327 秒缩短至 **<1 秒**（第一阶段已在 #27139 落地；跟踪中 #33522）。  
- 📈 **统一缓存**：为 PP+HiCache 增加激进跨阶段预取票证（PR #36700），提升流水线利用率。  
- 💾 **内存池**：在 `--enable-unified-memory` 下引入以 token 为主导的密集视图，减少内存碎片化（PR #38592）。  
- 🔧 **CUDA Graphs**：修复确保在 DP 收集捕获过程中共享 MAX_LEN 桶得以保留，防止 MegaMoE 卡死（PR #37933）。

#### **5. 稳定性与回归问题**  
- 🔴 **严重卡死**：  
  - `DeepSeek-V4 TP=8 on 8×H20`：解码前向在约 24.5 万上下文处无限卡死（所有 GPU 利用率 100%）——监控器强制终止服务（#33549）。  
  - `Qwen3.8-Flash-Next`：工具解析器在 token ID 0 处陷入循环（推测路径中的回归问题）（#36537）。  
- 🔴 **崩溃**：  
  - `GLM-5.3-Flash (DSA)`：HiCache 主层载入回写导致生成失败且无推测解码（丢失工具调用，重复循环）（#38031）。  
  - `GlmMoeDsa (GLM-5.2)` FP4+EAGLE：flashinfer_trtllm BF16 批量 GEMM 中出现非法内存访问（#30209）。  
- 🛠️ **进行中的修复**：  
  - PR #38584 解决 Qwen-Image-Edit 优化问题；PR #38601 启用 ROCm 稀疏 MLA。  
  - PR #37933 缓解 MegaMoE DP 卡死问题（修复 #37561）。

#### **6. 对应用开发者的影响**  
- **生产负载**：对于大模型（如 Qwen3-235B），请优先启用 **权重缓存守护进程**（`--enable-weight-cache-daemon`），将冷启动延迟从分钟级降至秒级。  
- **多后端部署**：使用 `--speculative-algorithm EAGLE` 配合 **统一 KV 缓存** 与 **外部链接器**，实现异构集群上的可扩展推测解码。  
- **硬件特定调优**：部署 NPU 时，请确保启用 `--enable-hierarchical-cache` 并配合 GLM-5.2 使用 FP8 KV 缓存；在 AMD 平台，确认 `--dsa-prefill-backend triton` 已设置为 gfx950。  
- **规避回归问题**：在修复落地前，勿对 `GLM-5.3-Flash` 使用 `--kv-cache-dtype fp8_e4m3`（参见 #36830）。若使用 HiCache，避免同时启用 `--enable-prefill-cp` 与 `--cp-strategy zigzag`（已知问题，关联 `test_unified_radix_cache_kl_cp.py`，#38019）。

> 🔗 [GitHub Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-09-09**

---

### **1. 今日亮点**  
最新开发周期聚焦于 **Qwen4Exp 的 MTP（多标记预测）推测解码增强**，两个 PR 实现了草稿张量加载与图支持。关键 Vulkan 修复解决了 Intel Arc 和 AMD 集成显卡的 GPU 工作组限制问题，而新增的 IQ3_XXS MoE 支持则提升了启用 SYCL 的 Intel Arc 显卡上的性能表现。

---

### **2. 发布与破坏性变更**  
- **`b10868`**：在 SYCL 后端中添加对 MoE 模型的 IQ 类型处理 (#28476)，修复了在运行 `qwen3.8-flash-next:UD-IQ3_XXS` 时，Intel Arc Pro B60 显卡出现的性能下降问题。  
- **`b10867`**：默认禁用集成显卡（iGPU）上的惰性张量加载，以修复预填充吞吐量下降的问题；现在 `--lazy-mode auto` 的行为更加可预测 (#28326)。  
- **`b10865`**：回滚此前更改，恢复 HIP 构建中的 `prop.integrated`，确保与 ROCm 平台的兼容性 (#28604)。

> 🔗 [GitHub 发布 b10868](https://github.com/ggml-org/llama.cpp/releases/tag/b10868) | [PR #28476](https://github.com/ggml-org/llama.cpp/pull/28476)

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen4Exp（Qwen3.8-Flash-Next）**：通过侧车 GGUF 或文件内布局加载草稿张量，现已完整支持 MTP 推测解码 (#28610)。  
- ✅ **Intel XDNA 后端**：已提交原生 XDNA 硬件支持的功能请求 (#21725)；尚未实现。  
- ✅ **Metal 多 GPU**：请求在 Apple Silicon Mac 上支持 eGPU + dGPU 混合使用 (#28565)；尚未实现。  
- ✅ **WebM 视频上传**：Web UI 现已支持通过上传方式接收 `.webm` 文件 (#28622)；关闭 #28076。

> 🔗 [PR #28610](https://github.com/ggml-org/llama.cpp/pull/28610) | [Issue #21725](https://github.com/ggml-org/llama.cpp/issues/21725) | [PR #28622](https://github.com/ggml-org/llama.cpp/pull/28622)

---

### **4. 性能与优化**  
- **Vulkan**：优化 `FILL` 分发逻辑，避免在 Intel Arc 显卡上超出 `maxComputeWorkGroupCount`（65535），防止长上下文长度下崩溃 (#28592)。  
- **SYCL**：修复 `mul_mat_vec_q_moe` 中缺失的 IQ 量化问题，显著提升 Intel Arc B60 显卡上 `qwen3.8-flash-next:UD-IQ3_XXS` 的推理速度 (#28476)。  
- **Vulkan**：引入 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` 临时解决方案，缓解因子分配碎片化导致的 131072 上下文窗口处约 78% 解码吞吐量骤降问题 (#27734)。  
- **CUDA**：在修复 RTX 5090 监控器/XID 8 问题后，重新启用 CUDA 图功能 (#27330)；`GGML_CUDA_DISABLE_GRAPHS=1` 仍为可靠备选方案。

> 🔗 [PR #28592](https://github.com/ggml-org/llama.cpp/pull/28592) | [PR #28476](https://github.com/ggml-org/llama.cpp/pull/28476) | [Issue #27734](https://github.com/ggml-org/llama.cpp/issues/27734)

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重崩溃**：在搭载部分专家卸载的 Qwen3.6-35B MoE 模型时，RTX 5090 上发生 `cudaStreamSynchronize` 失败——确定性复现，跨构建版本（b10107, b10243）(#26609)。  
- ⚠️ **GPU 重置**：在 Linux 系统上使用 Qwen3.8-27B Q6_K 进行 CUDA 推理时，导致显示丢失并触发整芯片重启，影响 RTX 5090 (#27910)。  
- ⚠️ **Vulkan 断言失败**：在 Intel Arc A770 上高上下文长度时，`GGML_ASSERT(wg0 <= ctx->device->properties.limits.maxComputeWorkGroupCount)` 触发失败 (#28247)；已在 PR #28592 中修复。  
- ⚠️ **性能回归**：在 Vulkan/iGPU 上使用 `--lazy-mode auto` 时，qwen4exp 的预填充吞吐量减半 (#28160)；建议回滚。  
- ⚠️ **非确定性行为**：MTP 保留请求间状态，导致模型性能退化及输出不一致 (#26425)。

> 🔗 [Issue #26609](https://github.com/ggml-org/llama.cpp/issues/26609) | [Issue #27910](https://github.com/ggml-org/llama.cpp/issues/27910) | [PR #28592](https://github.com/ggml-org/llama.cpp/pull/28592) | [Issue #28160](https://github.com/ggml-org/llama.cpp/issues/28160)

---

### **6. 对应用开发者的影响**  
- **在 iGPU 上谨慎使用 `--lazy-mode auto`** —— 可能导致 qwen4exp 模型预填充性能减半；建议禁用该选项或改用 `--lazy-mode off`。  
- **为 Qwen4Exp 启用 MTP 推测解码**，通过草稿 GGUF 或文件内张量实现；请确保工具链支持草稿头加载（如 `nemotron:fix-mtpv2-draft-head-loading` PR #28617）。  
- **Intel Arc 用户**：升级至包含 IQ3_XXS/MoE 支持的最新构建版本以获得更佳性能；注意重负载下的 GPU 停滞风险。  
- **Vulkan 用户**：设置 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB`，避免超过 131K 上下文时解码吞吐量骤降。  
- **CUDA 开发者**：在发布进一步稳定补丁前，避免在 RTX 5090 上使用 `--cuda-graphs`；`GGML_CUDA_DISABLE_GRAPHS=1` 是安全选择。

> 📌 推荐：持续关注 [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues) 和 PR，获取关键回归与优化的实时更新。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-09**

---

### **1. 今日亮点**  
Ollama 项目持续深化其代理与多模态能力，关键 PR 实现了 macOS 上的视频输入支持，并优化了 Responses API 中的工具集成。在流处理失败处理和上下文压缩重试方面完成了关键稳定性改进，同时正在进行 MLX 后端优化以及通过签名支持实现安全模型加载的工作。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本或破坏性变更。*  
然而，多个关键修复已合并至主分支：
- [PR #18332](https://github.com/ollama/ollama/pull/18332)：通过云代理保留上游流失败状态，防止出现静默的 200 响应。
- [PR #18324](https://github.com/ollama/ollama/pull/18324)：在压缩过程中发生上下文溢出后增加重试逻辑 —— 缓解长对话中反复出现的 500 错误。
- [PR #18329](https://github.com/ollama/ollama/pull/18329)：启用明文标记的 Codex 代理消息，提升与 OpenAI 风格工具链的兼容性。

---

### **3. 新模型与硬件支持**  
- ✅ **macOS 视频输入**：[PR #18179](https://github.com/ollama/ollama/pull/18179) 在 `/api/chat` 和 `/api/generate` 中支持视频解码（帧 + 音频），为苹果平台解锁多模态应用场景。
- ✅ **Qwen 静态 YaRN 上下文（MLX）**：[PR #18263](https://github.com/ollama/ollama/pull/18263) 添加对 Qwen3.5/3.8 的静态 YaRN RoPE 元数据支持，无需重新训练即可扩展上下文长度。
- ⚠️ **IQ3_S 量化（GGUF）**：仍不支持 —— [Issue #18297](https://github.com/ollama/ollama/issues/18297) 报告使用 `IQ3_S` 量化版 `Qwen3.8-27B-GSQ-RCO-GGUF` 时输出为空。尚未有相关 PR。
- ❌ **mllama（Llama3.2-vision）**：仍不支持 —— 因未知架构错误，[Issue #16547](https://github.com/ollama/ollama/issues/16547) 仍处于开放状态。

---

### **4. 性能与优化**  
- 🔧 **MLX 前缀缓存修复**：[PR #18267](https://github.com/ollama/ollama/pull/18267) 通过将前缀缓存恢复对齐至标记边界而非强制 8192 的倍数，解决了冷提示下固定 17–27 秒重填充延迟问题。
- 🔧 **MLX 数组生命周期管理**：[PR #18327](https://github.com/ollama/ollama/pull/18327) 用作用域生命周期替代基于扫描的内存清理，减少内存泄漏并提升垃圾回收可预测性。
- 📈 **GGUF 元数据缓存**：[PR #17858](https://github.com/ollama/ollama/pull/17858) 对每个 blob 只提取并缓存一次 GGUF 元数据，降低加载开销，并提升模型能力检查的一致性。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|------------|
| 高 | [Issue #18193](https://github.com/ollama/ollama/issues/18193) | `glm-5.3:cloud` 在 OpenCode/ZCode 中陷入无限推理循环，导致任务中断 | 开放 — 影响云 API 可靠性 |
| 高 | [Issue #18297](https://github.com/ollama/ollama/issues/18297) | `IQ3_S` 量化的 Qwen3.8 GGUF 返回空内容 | 开放 — 阻碍高级量化方案采用 |
| 中 | [Issue #18283](https://github.com/ollama/ollama/issues/18283) | MLX 编译缓存 CHECK 错误在非 MLX 硬件（Windows/CPU）上频繁刷日志 | 开放 — 日志噪声影响调试 |
| 中 | [Issue #18094](https://github.com/ollama/ollama/issues/18094) | `gemma3:12b` 在输入包含双引号时提前截断结构化输出 | 开放 — 破坏 JSON Schema 完整性 |
| 低 | [Issue #162](https://github.com/ollama/ollama/issues/162) | 登录自动启动（macOS/Windows）—— 已有 PR (#7097) | 已关闭 — 修复待合并 |

---

### **6. 对应用开发者的启示**  
- **代理与工具链**：预计 Responses API 表现更稳健 —— 特别是在工具发现（`tool_search`）和流处理失败场景。使用 `openai: expose tools loaded by client tool search` ([PR #18309](https://github.com/ollama/ollama/pull/18309)) 可确保发现的工具可被调用。
- **多模态应用**：macOS 上的视频输入现已可用 —— 适用于代理驱动的视频分析工作流。
- **性能敏感负载**：若在 Apple Silicon 上使用 MLX，需注意缓存对齐问题；[PR #18267](https://github.com/ollama/ollama/pull/18267) 的修复将显著降低冷启动延迟。
- **安全与可靠性**：模型签名功能正在积极开发中 ([PR #11573](https://github.com/ollama/ollama/pull/11573))；在该功能发布前，请避免使用不可信模型。
- **云 API 谨慎使用**：因存在无限推理风险，避免在生产环境中使用 `glm-5.3:cloud` 作为代理 —— 请关注 [Issue #18193](https://github.com/ollama/ollama/issues/18193)。

> 💡 *技巧提示：始终验证结构化输出（`format=json`）的模型输入 —— 若用户文本中包含双引号，`gemma3:12b` 可能无声截断。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-09-09**

---

### **1. 今日重点**  
LiteLLM 生态系统持续成熟，**Anthropic 原生 `/v1/messages` 协议兼容性**获得显著提升，包括修复跨轮次加密推理保留问题（#40349）以及静默丢弃系统消息问题（#36917）。新功能聚焦于**可观测性与成本透明度**，例如自动路由会话节省报告（#40330）和增强的防护规则元数据追踪（#40327）。关键稳定性修复解决了速率限制不一致、代理认证信息泄露以及流式工具调用连续性等问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
但正在进行的变更包括：  
- **成本映射获取优化**：#40350 重构重试行为，避免在网络中断期间阻塞启动过程（解决 `lite` CLI 使用时的延迟峰值问题）。  
- **代理健康状态持久化可选关闭**：#38324 引入配置开关，可禁用后台健康历史存储，降低高吞吐环境下的数据库负载。  
👉 [PR #40350](https://github.com/BerriAI/litellm/pull/40350), [PR #38324](https://github.com/BerriAI/litellm/pull/38324)

---

### **3. 新模型与硬件支持**  
- 通过 #34623 新增 **OpenInfer** 作为 OpenAI 兼容提供方，支持 `/v1/chat/completions` 接口，可配置 API 基地址与密钥。  
- **Azure AI 模型**：在定价模型注册表中新增对 `azure_ai/deepseek-v4-flash` 与 `azure_ai/deepseek-v4-pro` 的支持（#30129）。  
- **QwenCloud 迁移路径** 提出（#36150）——预计不久将为 DashScope 用户提供官方集成。  
👉 [PR #34623](https://github.com/BerriAI/litellm/pull/34623), [Issue #36150](https://github.com/BerriAI/litellm/issues/36150)

---

### **4. 性能与优化**  
- **自动路由成本可见性**：#40330 实现 Claude Code/Codex 客户端实时显示路由模型与成本节省情况——对代理成本治理至关重要。  
- **异步图像生成**：#32240 通过使用异步任务轮询改进 ModelScope 图像生成的响应性。  
- **流式数据块安全防护**：#37781 防止在空或格式错误的 `choices` 中出现 `IndexError`/`KeyError`，避免边缘情况下的崩溃。  
👉 [PR #40330](https://github.com/BerriAI/litellm/pull/40330), [PR #32240](https://github.com/BerriAI/litellm/pull/32240)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 影响 | 修复状态 |
|--------|------|------|----------|
| 🔴 高 | 虚拟密钥的 TPM 限流失效（#24677） | 速率限制仅生效于配置值的一半；绕过控制 | *待修复* |
| 🔴 高 | 模型访问组信息泄露至 `/v1/models`（#25550） | 内部分组名称暴露于公共 API；存在安全风险 | *待修复* |
| 🔴 高 | Claude Code → OpenAI 桥接中提示缓存键未更新（#39145） | 因静态 `user_id` 推导导致缓存失效 | *已合并但回滚；需重做* |
| 🟡 中 | 工具调用轮转后流式工具调用继续失败（#30053） | 使用 Bedrock + Claude 时客户端接收 XML 而非文本 | *修复 PR 已开放（#30053）* |
| 🟡 中 | 认证错误泄露密钥哈希/模型白名单（#40217） | 401/403 响应中暴露敏感信息 | *修复 PR 已开放（#40217）* |

👉 [Issue #24677](https://github.com/BerriAI/litellm/issues/24677), [Issue #39145](https://github.com/BerriAI/litellm/issues/39145), [PR #40217](https://github.com/BerriAI/litellm/pull/40217)

---

### **6. 对应用开发者的启示**  
- 若使用虚拟密钥、访问组或 Claude Code，**请优先升级**——已知回归可能导致限流失效并暴露敏感元数据。  
- 使用 **新的自动路由反馈端点**（`GET /auto_router/session`）监控生产环境中代理的成本效率。  
- **避免依赖 `/v1/models` 输出进行客户端模型发现**——其内容可能暴露意外的访问组。  
- 在 **多提供方部署场景** 中，请确保 `model_prices_and_context_window.json` 更新一致（例如，现在已支持 DeepSeek Azure 模型）。  
- **关注日志与防护规则**——新增元数据头（`x-litellm-guardrail-scan-metadata`）可提升策略执行审计能力。  

> ✅ 技巧提示：启用 `enable_post_custom_auth_checks` 与 `max_end_user_budget_id` 前，请先验证并发处理逻辑——今日报告了预算初始化中的竞态条件问题（#40095）。

---  
*数据来源：github.com/BerriAI/litellm | 更新时间：2026-09-09*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-09**

---

### **1. 今日亮点**  
v0.1.807-beta 版本带来显著性能提升，尤其针对使用 Vulkan 的 AMD GPU（相比 ROCm 提前填充和解码速度最高提升 20%）。关键修复解决了 Windows 安装程序的安全问题以及 Strix 系统中 AMD iGPU 的稳定性问题。新提交聚焦于多节点 DGX Spark 集群的健壮性，以及启动时对隔离二进制文件的改进处理。

---

### **2. 发布与破坏性变更**  
- **v0.1.807-beta**：重大性能与可靠性更新。  
  - *默认使用 AMD Vulkan*：AMD GPU 从 ROCm 切换至 Vulkan，预填充/解码吞吐量最高提升 20%。  
  - *Windows `llama-server.exe` 现已签名*：降低与 Smart Application Control (SAC) 的误报率。  
  - *修复 Strix 及集成显卡（iGPU）中的乱码问题*。  
  [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.807-beta)

---

### **3. 新模型与硬件支持**  
- **AMD GPU 后端**：Vulkan 现为 AMD 设备默认后端——不再需要手动配置 ROCm。  
- **DGX Spark 集群**：通过 ConnectX-7 200GbE 首次原生支持双节点 DGX Spark 配置，包含流水线训练与异步副本路由功能。  
  - PRs: [#10280](https://github.com/unslothai/unsloth/pull/10280), [#10323](https://github.com/unslothai/unsloth/pull/10323)  
- **新模型支持请求**：  
  - Qwen3-omni TTS 语音克隆 ([#3636](https://github.com/unslothai/unsloth/issues/3636))  
  - IFM K2 模型 ([#10562](https://github.com/unslothai/unsloth/issues/10562))  
  - PEFT 中集成 MiCA（Minor Component Adaptation）([#6730](https://github.com/unslothai/unsloth/issues/6730))

---

### **4. 性能与优化**  
- **AMD Vulkan 加速**：在近期 AMD GPU 上，预填充与解码延迟相比 ROCm 最高降低 **20%**。  
- **快速反量化流修复**：PR [#10563](https://github.com/unslothai/unsloth/pull/10563) 修复了 `fast_dequantize` 中不安全的流缓存问题，对 RX 7900 XTX 上稳定 QLoRA 训练至关重要。  
- **多 GPU 流水线训练**：PR [#10280](https://github.com/unslothai/unsloth/pull/10280) 实现了双 DGX Spark 间的高吞吐、低延迟模型训练，并附有真实场景基准测试。  
- **内存效率优化**：集成 Gefen-X 优化器 (#7051)，将 AdamW 优化器状态内存减少约 8 倍（约每参数 1 字节，对比 fp32）。

---

### **5. 稳定性与回归问题**  
- **严重**：`llama.cpp` 构建失败导致无法检测 AMD GPU ([#7485](https://github.com/unslothai/unsloth/issues/7485)) – 已报告，正在调查。  
- **高危**：若以管理员权限安装后，Studio 未以管理员身份运行，则出现访问被拒 ([#4846](https://github.com/unslothai/unsloth/issues/4846)) – beta 版已修复。  
- **UI 回归**：因时钟滴答竞争条件，Windows 上对话回忆顺序异常 ([#10544](https://github.com/unslothai/unsloth/issues/10544)) – 修复 PR 正在进行中 ([#10572](https://github.com/unslothai/unsloth/pull/10572))。  
- **安全警告**：`hf-stack` 主分支安全审计标记为红色，因未审查的包扫描结果 ([#10545](https://github.com/unslothai/unsloth/issues/10545)) – 基线审查待完成。  
- **模型加载失败**：由于缺少融合注意力核，Wan2.2 TI2V 视频生成在 AMD RX 9060 XT 上发生 OOM ([#10415](https://github.com/unslothai/unsloth/issues/10415)) – 临时解决方案：回退至 PyTorch SDPA。

---

### **6. 对应用开发者的意义**  
- **AMD 用户**：自动切换至 Vulkan 后端——预期推理与微调速度提升 **约 20%**。除非特定工作流需要，否则避免使用 ROCm。  
- **企业部署**：可使用新推出的 **按账户隔离功能** ([#10375](https://github.com/unslothai/unsloth/pull/10375))，实现多用户共享 GPU 机器的安全隔离。  
- **离线环境**：对于完全断网环境，建议使用独立打包如 KoboldCpp；当前 Unsloth 尚不支持离线安装包 ([#10356](https://github.com/unslothai/unsloth/issues/10356))。  
- **智能体开发**：注意工具调用预算设置——部分模型（如 Qwen 3.8 Flash Next）可能因内部预算逻辑错误理解“Max”设定 ([#10479](https://github.com/unslothai/unsloth/issues/10479))。  
- **基础设施团队**：监控 `UNSLOTH_PYTORCH_MIRROR` 行为——查询令牌可能在 URL 拼接过程中被破坏 ([#10516](https://github.com/unslothai/unsloth/issues/10516))；建议使用明确路径分隔符。

---  
*本摘要基于 GitHub 活动（unslothai/unsloth），2026-09-09 编辑*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*