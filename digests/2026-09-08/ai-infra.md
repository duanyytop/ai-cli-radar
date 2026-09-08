# AI 基础设施日报 2026-09-08

> 生成时间: 2026-09-08 00:39 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-08**

---

### **1. 生态概览**  
AI推理与服务生态正迅速成熟为一个多层级、硬件感知的栈，专为智能体工作负载和长上下文推理优化。随着NVIDIA Blackwell（SM120）和AMD MI355X等新一代GPU进入实际使用，性能创新已从原始吞吐量转向稀疏注意力、KV缓存压缩和推测解码的效率提升。各项目在专业化方向上日益分化：高性能引擎（vLLM、SGLang）聚焦大规模低延迟推理，而轻量级运行时（llama.cpp、Ollama）则专注于边缘与本地部署。与此同时，编排层（LiteLLM）与微调平台（Unsloth）正不断深化与智能体流水线及模型工具链的集成。

---

### **2. 活动对比**

| 项目       | 开放问题（24小时） | 合并的PR（24小时） | 发布（24小时） | 备注 |
|---------------|-------------------|------------------|----------------|-------|
| **vLLM**      | 12                | 6                | 无             | 重点聚焦确定性推理及SM120内核修复 |
| **SGLang**    | 15                | 8                | 无             | 积极排查回归问题；HiCache/FP8重大稳定性修复 |
| **llama.cpp** | 11                | 7                | 无             | Vulkan/Metal优化；关键推测解码回归问题 |
| **Ollama**    | 18                | 4                | 无             | 最高严重性漏洞；GPU降级与上下文处理问题 |
| **LiteLLM**   | 9                 | 5                | v1.100.1 即将发布 | 安全补丁待处理；分流功能正在开发 |
| **Unsloth**   | 10                | 6                | 无             | 用户体验打磨 + ROCm/Intel GPU修复进行中 |

> ✅ *趋势*：所有项目均未发布新版本，但PR活动频繁——表明各项目正在为2026年第四季度的生产级功能上线做持续稳定化准备。

---

### **3. 模型支持竞赛**

| 新模型 / 架构        | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next-FP8**      | ✅   | ✅     | ❌        | ✅     | ⚠️（通过vLLM） | ⚠️（有限支持） |
| **GLM-5.3-Flash (NoPE)**        | ✅   | ✅     | ✅        | ✅     | ❌      | ❌      |
| **Spark-X2.5 (4B/1.7B)**        | ❌   | ❌     | ❌        | ✅     | ❌      | ❌      |
| **Wan2.2 TI2V (视频生成)**     | ❌   | ❌     | ❌        | ❌     | ❌      | ⚠️（AMD ROCm OOM） |
| **TwelveLabs Marengo Embed 3.0**| ❌   | ❌     | ❌        | ❌     | ✅      | ❌      |
| **DeepSeek-V4 HC**              | ✅   | ✅     | ✅        | ❌     | ❌      | ❌      |
| **Qwen 3 AVL (音视频)**         | ❌   | ❌     | ❌        | ❌     | ❌      | 🟡（请求中） |

> 🏆 **领先者**：**SGLang** 在多模态与架构多样性方面领先，尤其在支持GLM-5.3-Flash以及EAGLE/MoE方面表现突出。  
> 🔥 **差异化优势**：**Ollama** 在面向消费者的模型采纳方面胜出（如Spark-X2.5），而 **vLLM/SGLang** 则主导前沿研究模型的支持。

---

### **4. 性能前沿**

| 优化重点          | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **KV缓存效率**      | ✅✅  | ✅✅    | ✅        | ✅     | ✅      | ✅      |
| **长度感知批处理**    | ✅✅  | ✅     | ✅        | ❌     | ❌      | ❌      |
| **稀疏注意力（SM120）** | ✅✅  | ✅     | ❌        | ❌     | ❌      | ❌      |
| **推测解码**     | ✅✅  | ✅✅    | ✅✅       | ✅     | ✅      | ✅✅     |
| **量化（FP4/NVFP4）** | ✅✅  | ✅     | ✅        | ❌     | ❌      | ❌      |
| **内核融合（AMD/HIP）**  | ✅    | ✅✅    | ✅✅       | ✅     | ❌      | ✅      |

> 🔍 **关键洞察**：当前前沿已转向**上下文感知调度**、**SM120上的稀疏计算**以及**跨平台内核融合**。  
> 💡 **vLLM与SGLang** 在硬件特异性优化（Blackwell FP4、NoPE）和架构创新（长度感知批处理、HRRN调度器）方面均处于领先地位。

---

### **5. 层级定位**

| 项目       | 主要层级             | 核心差异化 |
|---------------|----------------------------|---------------------|
| **vLLM**      | **高性能推理引擎** | 针对云规模、低延迟推理优化；强关注FlashInfer、SM120与推测解码 |
| **SGLang**    | **下一代推理引擎** | 结合引擎恢复（权重守护进程）、先进调度器（HRRN）及完整MoE/EAGLE支持 |
| **llama.cpp** | **本地运行时与边缘执行** | 跨平台、轻量级，成熟的Vulkan/Metal后端；适用于CPU/GPU混合或嵌入式场景 |
| **Ollama**    | **开发者友好的网关** | 简化命令行/API；作为GGUF模型的统一入口；优先考虑易用性而非原始控制 |
| **LiteLLM**   | **编排与路由层** | 多提供商路由、成本追踪、安全加固；企业级LLM网关不可或缺 |
| **Unsloth**   | **微调与本地智能体平台** | 专注训练、工具集成与本地模型管理；连接微调与智能体执行 |

> 🧩 **战略视角**：  
> - **引擎层（vLLM/SGLang）**：优化速度与可扩展性。  
> - **运行时层（llama.cpp）**：实现可移植性与离线使用。  
> - **网关层（Ollama/LiteLLM）**：降低开发者摩擦。  
> - **训练/智能体层（Unsloth）**：加速智能体开发生命周期。

---

### **6. 趋势信号**

#### **新兴行业趋势（基于2026-09-08活动）：**
1. **以硬件为中心的优化已成为主流**：  
   SM120（Blackwell）和AMD gfx950/gfx1151已不再是实验性特性——它们正驱动实时内核补丁（如NVFP4 KV缓存、融合MLA+RoPE）。**预计所有主要栈将在2026年第四季度前集成原生SM120路径。**

2. **长上下文智能体成为新基准**：  
   长度感知批处理、前缀缓存保留与上下文扩展（YaRN、`num_ctx`）反复出现。这表明**具备记忆与状态持久性的智能体工作流如今已成为核心用例**。

3. **稳定性 > 速度**：  
   尽管优化激进，但**确定性、GPU卸载与内存安全方面的严重回归问题仍占据问题追踪器主导地位**。开发者必须优先选择**稳定版本进行预发布测试**（例如避免使用Ollama 0.33.x，建议使用已打补丁的vLLM内核）。

4. **安全与可观测性不容妥协**：  
   LiteLLM的401泄露事件与Ollama的未脱敏调试日志凸显了面向公众API的日益增长风险。**生产部署必须强制实施请求脱敏、审计日志与安全密钥管理。**

5. **工具集成已成为核心能力**：  
   Unsloth的工具传递修复、Ollama的`agent_message`、LiteLLM的流式工具调用保留，均表明**工具调用已不再是可选项——而是智能体可靠性的核心组成部分**。

---

### ✅ **面向应用开发者的建议**
- **在Blackwell/ROCm上部署生产级智能体时，请使用vLLM或SGLang**——它们提供业界领先的KV缓存与推测解码能力。
- **避免使用0.33.x版本的Ollama**；请坚持使用0.32.13，直至GPU相关回归问题解决。
- **启用长度感知批处理**（RFC #55265），防止混合长度输入下的吞吐量崩溃。
- **将LiteLLM固定在v1.100.1及以上版本**，防止接口泄露与账单错配。
- **端到端验证工具输出**——尤其是通过LiteLLM或Unsloth调用Qwen/Claude后端时。
- **监控内存使用与上下文强制执行情况**——许多系统会无声降级至CPU或丢弃上下文。

> 📊 *总结*：基础设施发展迅猛——但唯有通过严格的版本管理、严谨的测试以及对平台特性的充分认知，才能真正驾驭其潜力。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-09-08

## **今日亮点**
vLLM 持续推进对下一代硬件和推理模式的支持，针对高并发场景下 Qwen3.8-Flash-Next-FP8 模型的确定性推理问题进行了关键修复，并发布了一个重要补丁，使 FlashInfer 的 SM120 稀疏后端支持 NoPE 头尺寸。在长度感知批处理组合与上下文感知 KV 缓存保留方面的新工作，反映出对代理类及长上下文任务中效率的关注日益增长。

## **发布与破坏性变更**
过去 24 小时内无报告。

## **新模型与硬件支持**
- ✅ **SM120（Blackwell）稀疏注意力**：通过 PR #55778，FlashInfer 现已支持基于 NoPE 的模型（如 GLM-5.3-Flash）的稀疏注意力，修复了因不兼容头尺寸假设导致的崩溃问题。
- ✅ **CohereCompassForConditionalGeneration**：已加入文档支持模型列表（PR #55777），扩展了多模态模型覆盖范围。
- ✅ **ROCm 支持**：HY-V4 模型初始化与 attention-sink 支持现已在 ROCm 上启用（PRs #54405, #54404），提升了 AMD 平台兼容性。
- ✅ **Intel GPU（XPU）**：DFlash2 在 `--dtype float16` 下的草稿接受率问题正在追踪中（Issue #55250），尽管 bf16 仍可正常运行。

## **性能与优化**
- 🔧 **批处理无关特性与性能优化**：Issue #27433 指出，跨推理路径稳定批处理无关行为的工作仍在进行中——这对生产环境中的可复现性至关重要。
- 📈 **长度感知批处理组合**：RFC #55265 提出在每个调度步骤中交错处理大请求与小请求，以提升公平性与吞吐量，尤其适用于混合长度负载。
- ⚙️ **KV 缓存效率**：多个问题（#53670, #55265）强调在推测解码过程中前缀缓存丢失导致的性能损失；减少重复计算（约 30–40% 吞吐量损失）的努力正在进行中。
- 💾 **SM120 上的 NVFP4 KV 缓存**：一个可用原型已在 RTX 5090 上实现 245K 上下文（Issue #49011），显示出使用 FP4 精度进行超长上下文推理的巨大潜力。

## **稳定性与回归问题**
| 严重程度 | 问题 | 摘要 | 修复/拉取请求 |
|--------|-------|---------|--------|
| 严重 | #54521 | 当提示接近 `indexer_budget` 时，Qwen3.8-Flash-Next-FP8 在贪婪解码下非确定性 | [PR #55778](https://github.com/vllm-project/vllm/pull/55778) 修复了底层稀疏注意力核的不兼容问题 |
| 高 | #55571 | 在持续负载下，RTX PRO 5000（SM120）上使用 FP8 模型出现 CUDA 内存访问非法错误（“地址超出范围”） | 临时解决方案：`VLLM_DISABLED_KERNELS=FlashInferFP8ScaledMMLinearKernel` 或 `--enforce-eager` |
| 高 | #53726 | 在混合 GDN + MTP k=3 + 异步调度（RTX 3090）下发生无声 CUDA IMA 崩溃 | 尽管已有修复，问题仍持续存在；通过 issue #53726 跟踪 |
| 中 | #53257 | 在高并发下，DeepSeek-V4-Flash 使用 `temperature=0` 时输出非确定性 | 与 MQA logits 中 top-k 采样不稳定性相关（参见 #49896） |
| 中 | #55250 | 在 XPU 上使用 `--dtype float16` 时，DFlash2 草稿接受率为 0%（bf16 可用） | 根本原因可能为特定数据类型下的内核不匹配 |

## **对应用开发者的启示**
- **确保生产环境的确定性**：除非使用已打补丁的 FlashInfer 内核（PR #55778），否则避免在 `Qwen3.8-Flash-Next-FP8` 上使用 `persistent_topk`。可暂时采用 `--enforce-eager` 或禁用 `persistent_topk` 作为规避方案。
- **充分利用新兴硬件**：SM120 GPU（如 RTX 5090/B200）现已支持高级功能，如 NVFP4 KV 缓存（245K 上下文）和稀疏注意力——非常适合长上下文代理场景。
- **警惕回归问题**：若使用 MTP 推测解码配合结构化输出（`xgrammar`）或工具调用（Qwen3.8 NVFP4），需注意活锁问题（#49210）与预算行为异常（#54906）。
- **优化批处理策略**：考虑实现长度感知批处理组合（RFC #55265），以避免在混合长度负载下吞吐量骤降。

👉 *通过 GitHub 追踪进展：[vLLM Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

### **SGLang Digest — 2026-09-08**

#### **1. 今日亮点**
SGLang 项目持续聚焦下一代硬件的稳定性与性能优化，针对影响大模型（如 GLM-5.3-Flash 和 Qwen3.8-Flash-Next-FP8）的 HiCache 损坏及 CUDA 内存访问问题进行了关键修复。一项重大 PR 回滚了导致推测解码失败的数值不稳定的 FP8 内核，同时新工作通过权重缓存守护进程加速引擎恢复，并提升调度公平性。

#### **2. 发布与破坏性变更**
过去 24 小时内无更新。  
**注意：** `--cuda-graph-max-bs` 标志现已弃用，由 `--cuda-graph-max-bs-decode` 取代。此变更影响 MiniCPM5-2B 配置与基准测试；请相应更新 ([PR #38379](https://github.com/sgl-project/sglang/pull/38379), [PR #38378](https://github.com/sgl-project/sglang/pull/38378))。

#### **3. 新模型与硬件支持**
- **AMD ROCm 支持**：通过 Triton 汇编内核，扩展对 gfx950（MI355X）上 EAGLE 推测解码的支持 ([PR #37465](https://github.com/sgl-project/sglang/pull/37465))。
- **ROCm MoE 集成**：统一的 Triton 路由器现支持 ROCm 与单组路由，移除仅限 CUDA 的限制 ([PR #38328](https://github.com/sgl-project/sglang/pull/38328))。
- **Intel XPU 模型**：新增对 BGE、NomicBERT、ModernBERT、InternVL3_5、Hunyuan-A13B 以及 Step3-VL 的编码器嵌入支持 ([PR #35304](https://github.com/sgl-project/sglang/pull/35304))。
- **Blackwell GPU**：FlashInfer 后端现已正式支持 B300/B200，MoE 配方同步更新为使用 `flashinfer_trtllm` 后端 ([PR #38374](https://github.com/sgl-project/sglang/pull/38374))。

#### **4. 性能与优化**
- **引擎恢复**：权重缓存守护进程将 Qwen3-235B FP8 的启动时间从约 320 秒缩短至 <1 秒 ([Issue #33522](https://github.com/sgl-project/sglang/issues/33522), [博客](https://www.lmsys.org/blog/2026-08-21-sglang-0-5-18-release))。
- **调度器改进**：引入 HRRN（最高响应比优先）调度器，通过优先处理短请求与等待请求，有效降低首字延迟（TTFT）([PR #32911](https://github.com/sgl-project/sglang/pull/32911))。
- **内核融合**：在 AMD 平台上，融合 MLA q-absorb + RoPE + KV-write 内核消除了冗余调用，显著提升解码效率 ([PR #38340](https://github.com/sgl-project/sglang/pull/38340))。
- **内存池化**：混合 SWA 页面现在按页面 ID 释放（当 `page_size > 1` 时），减少内存碎片并提升回收效率 ([PR #38159](https://github.com/sgl-project/sglang/pull/38159))。

#### **5. 稳定性与回归问题**
- **严重崩溃（高危）**：在 H20 TP8 上，8 个并发请求下 `QSA extend forward` 会崩溃（涉及 Qwen3.8-Flash-Next-FP8）——即使禁用推测解码也可复现 ([Issue #37633](https://github.com/sgl-project/sglang/issues/37633))。目前尚无修复 PR。
- **HiCache 损坏（高危）**：主机层级加载回写会导致 GLM-5.3-Flash 生成损坏，即使未启用推测解码亦然——DSA 索引缓冲区未被正确恢复 ([Issue #38031](https://github.com/sgl-project/sglang/issues/38031))。已在 PR [#38212](https://github.com/sgl-project/sglang/pull/38212) 中修复。
- **CUDA 核心转储（高危）**：CI 自动收集的核心转储显示，多个模型/后端存在重复非法内存访问（如 GLM-5.2 FP4 + EAGLE、QSA、MoE 路径）。最严重问题：[#26340](https://github.com/sgl-project/sglang/issues/26340) 已有 294 条评论——仍在深入调查中。
- **回归问题**：因数值漂移导致 GLM-5.2-FP8 EAGLE MTP 推测解码失败，已回滚 `fused silu mul quant fp8` 内核 ([PR #38381](https://github.com/sgl-project/sglang/pull/38381))。
- **其他缺陷**：
  - `fp8e4nv` 在 A100（SM80）上不支持 Qwen3.8-Flash-Next-FP8 ([Issue #38291](https://github.com/sgl-project/sglang/issues/38291))。
  - `--default-chat-template-kwargs` 会静默覆盖每请求的 `reasoning_effort` ([Issue #38104](https://github.com/sgl-project/sglang/issues/38104))。

#### **6. 对应用开发者的启示**
- **所有配置中应改用 `--cuda-graph-max-bs-decode` 替代 `--cuda-graph-max-bs`**。
- **避免使用 `fused silu mul quant fp8`**，直至其稳定；当前主分支已因正确性问题禁用。
- **在 GLM-5.3-Flash 上启用 HiCache 必须谨慎**——确保完整状态恢复机制到位（建议使用最新 PR）。
- **AMD 用户**：预计在 gfx950 上通过优化内核获得更优的 EAGLE/MTP 性能——可使用 `--speculative-algorithm EAGLE` 测试。
- **在 Blackwell GPU 上**，请利用 `flashinfer_trtllm` MoE 后端以获得最佳的 FP8 推理性能。
- **密切关注 CI 状态**——当前存在较高波动性（9 个不稳定测试），且近期出现回归问题，建议在相关 PR 合并前谨慎推进生产环境部署。  

---  
*数据来源：github.com/sgl-project/sglang | 更新时间：2026-09-08*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-08**

---

### **1. 今日亮点**  
最新更新聚焦于 **Vulkan 后端的成熟度提升**，修复了 DeepSeek-V4 的超连接操作、GET_ROWS 对齐以及 RMS_NORM 融合等关键问题，使 Gemma4 的解码性能最高提升 **4%**。在 CUDA 上，无分支的 Q4_K/Q5_K 解包优化提升了批量推理性能；Metal 后端则为 M5 Max GPU 优化了高效解码路径。新提交还推进了推测性解码（DFlash、自适应 MTP）和模型发现的 UI 工具开发。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。但引入了几项 **关键行为变更**：  
- `--lazy-mode auto` 在使用 AMD iGPU Vulkan 的 Qwen4exp 模型上，导致 **预填充吞吐量下降约 50%**，这是由于改进了 TENSOR_READ_LAZY 处理所致 ([#28160](https://github.com/ggml-org/llama.cpp/issues/28160))。  
- **稀疏 MoE 推理中存在 GPU 内存损坏风险**，当跨身份变化的图节点重用分配方案时可能发生 ([#28448](https://github.com/ggml-org/llama.cpp/issues/28448))。

> ⚠️ 使用 `--lazy-mode auto` 长上下文 MoE 模型的开发者应测试其性能影响。

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4 (DSV4_HC_COMB/PRE/POST)**：通过 Vulkan 后端实现完整支持 ([#26578](https://github.com/ggml-org/llama.cpp/pull/26578))，使 Vulkan 与 CUDA/Metal 实现功能对齐。  
- ✅ **TQ1_0 量化格式**：Vulkan 现已支持 `TQ1_0` 用于 `mm`、`mat-vec`、`dequant` 与 `get_rows` 操作 ([#27765](https://github.com/ggml-org/llama.cpp/pull/27765))。  
- ✅ **gfx90c HIP 支持**：新增对 AMD RDNA3+ GPU（如 Strix Halo APU）的支持，提升 ROCm 兼容性 ([#26454](https://github.com/ggml-org/llama.cpp/pull/26454))。  
- 🟡 **LTX-2 扩散模型 GGUF**：针对通过扩散模型生成图像/视频/音频的 RFC 提案已开启 ([#28541](https://github.com/ggml-org/llama.cpp/issues/28541))。

---

### **4. 性能与优化**  
- 🔥 **RMS_NORM 融合**：在 Vulkan 上支持 RMS_NORM + MUL + ADD (+ MUL) 以及 RMS_NORM + VIEW + SET_ROWS 融合，使 Gemma4 解码速度提升 **约 4%** ([#28024](https://github.com/ggml-org/llama.cpp/pull/28024))。  
- 🚀 **CUDA Q4_K/Q5_K 解包**：无分支计算消除了 `mmvq` 中每列冗余的 scale 解包，显著加速批量推理（>1 token）([#26705](https://github.com/ggml-org/llama.cpp/pull/26705))。  
- 🛠️ **Metal 优化**：在 M5 Max D512 KV 桶 2 中使用 NE2 进行解码，提升效率 ([#28534](https://github.com/ggml-org/llama.cpp/pull/28534))。  
- ⚙️ **子分配修复**：Vulkan 用户在 131K 上下文处遭遇 **78% 解码吞吐量断崖**，可通过设置 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` 解决 ([#27734](https://github.com/ggml-org/llama.cpp/issues/27734))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 状态 | 修复 PR |
|---------|------|-------------|--------|--------|
| 🔴 高 | [#27306](https://github.com/ggml-org/llama.cpp/issues/27306) | AMD gfx1151/Vulkan/RADV 上提示处理期间（`draft-mtp`）触发 `DeviceLost` 崩溃 | 开放 | 无 |
| 🔴 高 | [#28522](https://github.com/ggml-org/llama.cpp/issues/28522) | Qwen 模型含约 48 个可选参数时工具调用出现乱码或卡死 | 开放 | 无 |
| 🔴 高 | [#27856](https://github.com/ggml-org/llama.cpp/issues/27856) | AMD Strix Halo (gfx1151) 上超过 1K 上下文时解码严重变慢 | 已关闭 | 临时方案：`GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` |
| 🟡 中 | [#28211](https://github.com/ggml-org/llama.cpp/issues/28211) | HIP/gfx1151 上由提示长度 > `n_ubatch` 引发错误 logits | 开放 | 无 |
| 🟡 中 | [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) | Intel ANV 上 Flash Attention 回退至 SCALAR 路径，导致 PP 性能退化为 O(N²) | 开放 | 无 |

> 💡 注意：多项回归问题影响 **推测性解码（MTP/DFlash）** 和 **长上下文推理**，尤其在 Vulkan 与 HIP 后端上。

---

### **6. 对应用开发者的启示**  
- ✅ **针对 AMD Vulkan 优化**：使用 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` 可避免因上下文长度引发的性能断崖。  
- ⚠️ **暂勿使用 `--lazy-mode auto`** 与 Qwen4exp 或 MoE 模型，直至相关回归修复 ([#28160](https://github.com/ggml-org/llama.cpp/issues/28160))。  
- 📌 **谨慎启用推测性解码**：自适应 MTP (`draft-mtp-adaptive`) 与 DFlash 仍在积极开发中，务必测试正确性与稳定性，特别是视觉模型场景 ([#27210](https://github.com/ggml-org/llama.cpp/pull/27210), [#28587](https://github.com/ggml-org/llama.cpp/pull/28587))。  
- 🧩 **UI 开发者注意**：新的 `models-discover` UI 栈支持丰富的 Hugging Face GGUF 浏览、下载追踪与能力过滤，非常适合自托管智能体平台。

> 🔗 [GitHub 仓库](https://github.com/ggml-org/llama.cpp) | [官网](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-08**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展对新兴模型和代理工作流的支持，关键 PR 实现了 OpenAI 兼容 API 中的 `agent_message` 输入处理，并通过 llama.cpp 版本升级（b10829）原生支持 Spark-X2.5 模型系列。与此同时，性能稳定性仍受关注——在 CUDA、ROCm 和 MLX 后端均暴露出多个与 GPU 分载、上下文处理及内存使用相关的高严重性回归问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
暂无新版本发布或破坏性变更。但对 `/v1/responses` 与 `num_ctx` 转发的持续开发表明未来版本可能存在行为变化。

---

### **3. 新模型与硬件支持**  
- ✅ **Spark-X2.5 (4B / 1.7B)**：通过 PR #18279 添加 —— 对内置 `llama.cpp` 的重大更新（b10829）启用了 XHToken SparkLLM 模型所使用的新型 `spark2_5` 架构支持。[PR #18279](https://github.com/ollama/ollama/pull/18279)  
- ✅ **Hy4 预览模型**：社区提出官方 Ollama 兼容性请求（[#18287](https://github.com/ollama/ollama/issues/18287)）——等待 GGUF 转换与集成。  
- ✅ **AMD gfx1201/gfx1151 Vulkan 后端优化**：针对计算环超时与 TensileLibrary 错误的修复正在排期处理，表明 ROCm/Vulkan 成熟度逐步提升。[Issue #17782](https://github.com/ollama/ollama/issues/17782)，[Issue #17870](https://github.com/ollama/ollama/issues/17870)

---

### **4. 性能与优化**  
- ⚠️ **令牌生成速度下降（0.33.x vs 0.32.13）**：用户报告在 RTX 3090 上推理速度下降约 5 倍，源于 0.33.x 构建中的回归问题。[Issue #18225](https://github.com/ollama/ollama/issues/18225)  
- ⚠️ **GPU 内存利用率低下**：多起报告指出仅部分使用 GPU VRAM（如 RX 9070 XT 上低于 40%），被迫回退至 CPU，导致吞吐量下降。[Issue #17971](https://github.com/ollama/ollama/issues/17971)  
- 🔧 **上下文处理优化**：PR #18261、#18285 与 #18263 旨在显式强制执行 `num_ctx` 并为 MLX 上的 Qwen3.8/3.5 实现 YaRN 上下文缩放，提升长上下文准确性。[PR #18263](https://github.com/ollama/ollama/pull/18263)，[PR #18285](https://github.com/ollama/ollama/pull/18285)  
- 📊 **新增指标端点**：PR #16998 引入可选的 Prometheus 兼容 `/metrics` 端点，用于监控队列深度、加载模型数及各模型的每秒令牌速率。[PR #16998](https://github.com/ollama/ollama/pull/16998)

---

### **5. 稳定性与回归问题**  
**高严重性：**  
- 🔴 **模型下载进度回退**：持续性问题表现为下载中途进度倒退（即使已超过 60%），影响可靠性。[Issue #8484](https://github.com/ollama/ollama/issues/8484) *(已关闭，但未确认修复)*  
- 🔴 **sm_86 GPU 上无声回退至 CPU（RTX 30/A40/A6000）**：Ollama 0.32.14 在驱动与 CUDA 正常的情况下仍无法使用 GPU，模型在 CPU 上运行速度约为 7 tok/s。[Issue #17841](https://github.com/ollama/ollama/issues/17841) *(已关闭，尚未提供补丁)*  
- 🔴 **长生成任务永不终止（0.32.11+）**：自 v0.32.11 起出现的回归导致生成循环持续直至被强制终止。已在 0.32.15 中确认。[Issue #17910](https://github.com/ollama/ollama/issues/17910) *(已关闭，未提供修复方案)*  

**中等严重性：**  
- 🟡 **qwen2.5-coder 工具调用缺失**：对代理流水线至关重要；尽管提示结构正确，响应中仍缺少 `tool_calls` 字段。[Issue #12174](https://github.com/ollama/ollama/issues/12174)  
- 🟡 **云模型忽略 JSON Schema**：托管于云端的模型返回原始 JSON 而无模式校验，导致工具链失效。[Issue #12362](https://github.com/ollama/ollama/issues/12362)  
- 🟡 **长期运行实例输出损坏**：与第二个模型共存后，出现损坏的 `<unused49>` 令牌，需重启方可恢复。[Issue #18208](https://github.com/ollama/ollama/issues/18208)

---

### **6. 对应用开发者的影响**  
- **代理工作流现已更健壮**：通过 PR #18298 添加的 `agent_message` 输入支持，使使用 OpenAI 兼容 API 的 Codex 风格代理实现无缝集成。  
- **谨慎使用 0.33.x 构建版本**：若依赖 GPU 性能，请避免升级——当前回归可能导致吞吐量显著下降。建议继续使用 0.32.13 以确保稳定推理。  
- **长上下文应用必须验证上下文强制**：尽管 `num_ctx` 已通过 PR #16825 转发，但仍需在堆栈中显式设置该值，不可依赖默认值。  
- **安全提醒**：`OLLAMA_DEBUG_LOG_REQUESTS` 日志会完整记录提示内容且不脱敏——生产环境请禁用。[Issue #18210](https://github.com/ollama/ollama/issues/18210)  
- **计划手动模型锁定**：由于多模型共存不稳定（如驱逐循环），建议结合 `keep_alive -1` 并谨慎管理运行器。[Issue #18282](https://github.com/ollama/ollama/issues/18282)

---  
*摘要源自 GitHub 活动（2026-09-08）。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM Digest — 2026-09-08**

#### **1. 今日亮点**  
LiteLLM 项目持续演进，作为关键的推理编排层，今日重点聚焦于安全性提升、模型透明度增强以及代理可靠性改进。主要进展包括紧急修复 401 响应中的 API 泄露问题（#39757）、支持 OpenCode Go 的 `x-opencode-session` 头部（#39503），以及对 Anthropic 到 OpenAI 翻译精度的持续优化——尤其针对 Claude Code 工作流。一个重大新功能正在开发中：Auto Router 的 *Shunt* 选项，可智能委派大文件读取和代码生成任务。

#### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。然而，**v1.100.1** 即将推出，基于 PR #40176（回滚 #39568/#39572 的修复），解决因花费行哈希问题导致的使用日志和 BI 仪表盘中密钥元数据错位的长期缺陷。依赖准确计费可视化的用户应尽快升级。

> 🔗 [PR #40176](https://github.com/BerriAI/litellm/pull/40176) | [Issue #39568](https://github.com/BerriAI/litellm/issues/39568)

#### **3. 新模型与硬件支持**  
- 通过 PR #40180，新增 **TwelveLabs Marengo Embed 3.0** 至 Bedrock 提供商，支持新输入类型（`text_image`, `multi_input`）和嵌套负载。
- **Z.AI (Zhipu AI)** 已出现在 UI 下拉菜单中，但因凭证字段未渲染而仍不可用（#39310）；此为前端错误，需后端修复。
- **OpenRouter 的 `gpt-5.6-sol`** 缺失于 `model_prices_and_context_window.json`（#40102），导致集成无法进行，直至定价数据更新。

> 🔗 [PR #40180](https://github.com/BerriAI/litellm/pull/40180) | [Issue #40102](https://github.com/BerriAI/litellm/issues/40102)

#### **4. 性能与优化**  
- **Auto Router Shunt 功能**（PR #40158）：引入新开关，可在大文件读取和样板代码生成时绕过高成本模型，减少令牌浪费与费用。支持根据输入大小和意图动态路由。
- **异步提供者签名卸载**（PR #40178）：将 AWS SigV4 签名从事件循环移至工作线程，缓解凭证刷新期间的阻塞延迟——对高吞吐系统至关重要。
- **成本地图溯源追踪**（PR #40179）：在成本地图中添加 `generated_at` 与 `source_revision` 元数据，支持生产部署中的审计与回滚信心。

> 🔗 [PR #40158](https://github.com/BerriAI/litellm/pull/40158) | [PR #40178](https://github.com/BerriAI/litellm/pull/40178) | [PR #40179](https://github.com/BerriAI/litellm/pull/40179)

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|--------|-------|
| ⚠️ 严重 | 401 响应泄露后端身份、数据库表名及密钥的 SHA-256 哈希值 | 开放 | [Issue #39757](https://github.com/BerriAI/litellm/issues/39757) |
| ⚠️ 高 | vLLM/Kimi K2.7 透传模式下，v1.91.0 之后多轮工具调用功能损坏 | 开放 | [Issue #32214](https://github.com/BerriAI/litellm/issues/32214) |
| ⚠️ 高 | 流式重分块在上游以单个 delta 发送完整调用时丢失 `tool_calls[].id` 与 `function.name` | 开放 | [Issue #39796](https://github.com/BerriAI/litellm/issues/39796) |
| 🟡 中等 | Bedrock Converse 对非 Anthropic/Nova2/GPT-OSS 模型静默丢弃 `reasoning_effort` | 开放 | [Issue #34105](https://github.com/BerriAI/litellm/issues/34105) |
| 🟡 中等 | OOM 重启后内存失控增长；无回收机制 | 已关闭（持续中） | [Issue #38193](https://github.com/BerriAI/litellm/issues/38193) |

注意：最严重的问题（#39757）将内部系统信息暴露给未认证客户端——亟需紧急补丁。

#### **6. 对应用开发者的影响**  
- **安全**：通过升级至 v1.100.1 或更高版本避免暴露 LiteLLM 内部细节；确保所有自定义认证流程抵御 401 泄露。
- **智能体开发**：若使用 Claude Code 或与 vLLM 后端配合的多轮工具调用，避免使用 v1.91.0–v1.99.x 版本；建议锁定至 v1.90.0 或更早，直至 #32214 解决。
- **成本控制**：利用即将推出的 Auto Router *Shunt* 功能，防止在大输入或重复代码生成中误用高成本模型。
- **日志与审计**：在 OpenCode Go 等托管推理 API 中，启用 `x-opencode-session` 头部以实现更精细的对话级追踪。
- **模型透明度**：监控日志中 `requested_model` 与 `response_model` 不匹配的情况（#29680），以识别混合环境下的意外路由行为。

> ✅ 推荐操作：锁定版本、启用 `x-opencode-session`、监控内存使用、测试自定义提示与 Ollama 提供商以避免崩溃（#39759）。

---  
*数据来源：GitHub: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-08**

---

### **1. 今日亮点**  
Unsloth 持续扩展对多模态及边缘场景工作流的支持，关键 PR 实现了本地模型中完整工具集成（PR #10088），修复了因缓存文件夹变更导致的模型持久化问题（PR #10438），并解决了 AMD ROCm 系统上的高严重性稳定性缺陷（PR #10450, #10415）。用户体验优化的关注度不断提升，体现在新增关于聊天标题重新生成（Issue #10464）和提示队列保留机制（Issue #10428）的功能请求中。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
但 `unsloth train` 与 `unsloth start` 的持续开发表明即将出现行为变更：  
- **PR #10452**：`unsloth train` 现在会对未识别的配置键发出警告，而非静默忽略——对依赖未文档化字段的用户构成破坏性变更。[链接](https://github.com/unslothai/unsloth/pull/10452)  
- **PR #10453**：`unsloth start` 将不再在模型下载超过 15 分钟就绪超时时强制终止下载进程——显著提升大模型拉取过程中的可靠性。[链接](https://github.com/unslothai/unsloth/pull/10453)

---

### **3. 新模型与硬件支持**  
- **AMD ROCm（ROCm 7.13+）**：针对 AMD GPU 兼容性的关键修复正在进行，包括导致 Wan2.2 TI2V 视频生成出现 OOM 的缺失融合注意力核（Issue #10415），以及在存在 NVIDIA 显卡时无法在 AMD 显卡上进行训练的问题（Issue #10450）。  
- **Intel Arc B580**：由于不支持 `torch.xpu.memory.mem_get_info()` 调用导致 Unsloth 无法导入（Issue #3533）；临时解决方案需手动修补 `gpt_oss.py`。  
- **Qwen 3 AVL 2B/0.6B**：已提交功能请求，希望原生支持多模态 Qwen 3 音视频语言模型（Issue #10459）。  
- **Windows-on-ARM（NVIDIA 主机）**：PR #10282 实现了在 Windows-on-ARM 笔记本（如 GB10/N1X）上原生安装 ARM64 CUDA 栈，解决此前安装失败问题。

---

### **4. 性能与优化**  
- **API 效率**：PR #10461 通过消除冗余的 GitHub API 调用，优化了 `studio/install_python_stack.py` —— 将每次发布调用从约 100+ 次降至一次，显著提升安装器速度并降低速率限制风险。[链接](https://github.com/unslothai/unsloth/pull/10461)  
- **推测解码**：PR #10416 引入通过 `unsloth/spec_decoding` 测量推测解码接受率的功能，支持性能调优与诊断。[链接](https://github.com/unslothai/unsloth/pull/10416)  
- **内存卸载**：PR #9872 通过权衡溢出成本与 llama.cpp 内部适配器，改进了卸载规划器，在混合显卡系统上提升内存利用率。[链接](https://github.com/unslothai/unsloth/pull/9872)

---

### **5. 稳定性与回归问题**  
- **严重（高严重性）**：  
  - **Wan2.2 TI2V 中 AMD ROCm OOM**：因缺少融合注意力核导致失败；回退至 PyTorch SDPA 会引发内存溢出（Issue #10415）。*修复待处理*。  
  - **在 AMD GPU 上无法训练模型**：安装器在混合 NVIDIA+AMD 系统上仍选择 CUDA torch，无选项可指定使用 AMD 进行训练（Issue #10450）。*修复待处理*。  
- **中等严重性**：  
  - **点击“停止”后提示队列被清空**：点击“停止”会清除提示队列，中断批量处理流程（Issue #10428）。*修复待处理*。  
  - **Studio UI 中复制按钮失效**：尽管近期更新，网页界面中的文本复制功能仍不可用（Issue #5097）。*修复待处理*。  
- **低严重性**：  
  - **过期的远程/LAN 访问设置**：API 和设置面板中存在重复的访问选项（Issue #9519）。  
  - **切换缓存文件夹后 GGUF 量化项消失**：已在 Discord 报告（Issue #10437）；通过 PR #10438 已修复。

---

### **6. 对应用开发者的影响**  
- **在本地模型上构建健壮的智能体**：借助 PR #10088 与 #10454，开发者现在可确保工具返回的图像与数据能正确传递给模型——这对使用 RAG 或网络搜索的基于智能体的工作流至关重要。  
- **安全处理模型切换**：请注意，切换至无工具支持的模型将导致现有聊天线程中断（Issue #10454）；请在应用逻辑中加入防护机制。  
- **预期更严格的配置校验**：未来版本将拒绝未知的 `unsloth train` 配置键，而非静默默认——请尽早验证配置。  
- **为离线部署做好准备**：尽管 Unsloth 桌面版尚无独立打包方案（Issue #10356），建议在气隙环境前手动打包 `uv` 缓存（使用 `uv cache clean`）。

> 🔗 **关键资源**：  
> - [错误：Intel Arc B580 导入失败](https://github.com/unslothai/unsloth/issues/3533)  
> - [AMD ROCm 训练可见性修复](https://github.com/unslothai/unsloth/issues/10450)  
> - [PR：修复 GGUF 变体持久化问题](https://github.com/unslothai/unsloth/pull/10438)  
> - [PR：降低 GitHub API 负载](https://github.com/unslothai/unsloth/pull/10461)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*