# ArXiv AI 研究日报 2026-05-07

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-07 00:19 UTC

---

# ArXiv AI 研究日报 | 2026-05-07

---

## 今日速览

今日ArXiv共收录50篇AI核心论文，**智能体安全与评估**成为最突出的研究主线：从编码智能体的组合式漏洞诱导（MOSAIC-Bench）、多约束指令遵循的细粒度评判（MCJudgeBench），到AI红队测试的自动化加速（Redefining AI Red Teaming），安全评估正从"单点检测"转向"系统性压力测试"。同时，**临床AI的可信度建设**取得实质性进展——首个关于原子化事实核查提升肿瘤科医生对LLM信任度的随机对照试验发表，为医疗AI落地提供了关键证据。方法层面，**条件扩散采样**和**激活操控对齐**等基础技术也有重要进展。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Safety and accuracy follow different scaling laws in clinical large language models](http://arxiv.org/abs/2605.04039v1)** | Wind et al. | **颠覆临床LLM扩展假设**：模型规模/推理计算的提升对准确性和安全性遵循不同缩放规律，高准确率≠高安全性，直接挑战"越大越安全"的隐含假设。 |
| **[Steer Like the LLM: Activation Steering that Mimics Prompting](http://arxiv.org/abs/2605.03907v1)** | Heyman, Vandeputte | **激活操控新框架**：将提示工程重新形式化为激活操控，使干预效果首次媲美甚至超越提示方法，为无需提示词的对齐提供路径。 |
| **[Logical Consistency as a Bridge: Improving LLM Hallucination Detection](http://arxiv.org/abs/2605.03971v1)** | Mi et al. | **幻觉检测新范式**：通过建模"响应-自我判断"间的标签约束一致性，桥接微观不确定性量化与宏观自我评估，解决两者独立优化的瓶颈。 |
| **[EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics](http://arxiv.org/abs/2605.03871v1)** | Li et al. | **自我进化语言模型**：LLM与判别标准协同进化，摆脱对外部人类标注、专有模型或标量奖励的依赖，突破现有后训练方法的天花板。 |
| **[Feature-Augmented Transformers for Robust AI-Text Detection Across Domains and Generators](http://arxiv.org/abs/2605.03969v1)** | Mady et al. | **跨域AI文本检测**：在HC3 PLUS上训练的特征增强Transformer，通过最大化F1分数校准单一决策阈值，有效应对分布偏移和异构生成管线。 |
| **[Transformers with Selective Access to Early Representations](http://arxiv.org/abs/2605.03953v1)** | Gunasekaran et al. | **早期表征选择性复用**：让深层选择性访问浅层表征，以最低计算开销缓解残差流反复变换导致的低级特征丢失问题。 |
| **[On Adaptivity in Zeroth-Order Optimization](http://arxiv.org/abs/2605.03869v1)** | Dbouk et al. | **ZO优化反直觉发现**：自适应ZO方法（如ZO-Adam）在LLM微调中相比调优的ZO-SGD无收敛优势，却带来显著内存开销，修正了领域共识。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[OpenSeeker-v2: Pushing the Limits of Search Agents with Informative and High-Difficulty Trajectories](http://arxiv.org/abs/2605.04036v1)** | Du et al. | **开源搜索智能体新标杆**：通过信息丰富且高难度的轨迹训练，在无需工业级预训练资源的情况下逼近前沿搜索能力，打破巨头垄断。 |
| **[Rethinking Reasoning-Intensive Retrieval: Evaluating and Advancing Retrievers in Agentic Search Systems](http://arxiv.org/abs/2605.04018v1)** | Zhao et al. | **推理密集型检索重定义**：提出检索器需支持下游推理而非仅主题匹配，为迭代搜索与综合中的证据互补性建立评估标准。 |
| **[From Intent to Execution: Composing Agentic Workflows with Agent Recommendation](http://arxiv.org/abs/2605.03986v1)** | Athrey et al. | **智能体工作流自动编排**：从用户意图自动推荐并组合多智能体工作流，消除手动规划、选型和配置的低效瓶颈。 |
| **[Correct Is Not Enough: Training Reasoning Planners with Executor-Grounded Rewards](http://arxiv.org/abs/2605.03862v1)** | Han et al. | **执行器 grounded 奖励**：揭示最终答案正确性无法保证推理轨迹的忠实性，提出基于执行器反馈的奖励机制训练可靠推理规划器。 |
| **[QKVShare: Quantized KV-Cache Handoff for Multi-Agent On-Device LLMs](http://arxiv.org/abs/2605.03884v1)** | Honavar, GVSL | **端侧多智能体KV量化传输**：通过token级混合精度分配实现智能体间KV缓存高效交接，解决边缘设备上下文传递的内存瓶颈。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours](http://arxiv.org/abs/2605.04019v1)** | Dheekonda et al. | **AI红队测试自动化**：将数周的手动工作流 crafting 压缩至小时级，解决智能体时代安全评估的规模化瓶颈。 |
| **[MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents](http://arxiv.org/abs/2605.03952v1)** | Steinberg, Gal | **编码智能体组合漏洞基准**：暴露现有安全对齐仅评估孤立显式请求的盲区——恶意终端状态可从看似良性的工程任务分解中涌现。 |
| **[MCJudgeBench: A Benchmark for Constraint-Level Judge Evaluation in Multi-Constraint Instruction Following](http://arxiv.org/abs/2605.03858v1)** | Lee et al. | **多约束细粒度评判基准**：突破仅评估整体响应的局限，实现约束级别的评判能力测量，精准定位LLM-as-Judge的失效模式。 |
| **[Conditional Diffusion Sampling](http://arxiv.org/abs/2605.04013v1)** | Castro-Macías et al. | **条件扩散采样统一框架**：为未归一化多模态分布采样构建可处理参考与目标分布间的桥接，扩展扩散模型至科学计算核心问题。 |
| **[An Agent-Oriented Pluggable Experience-RAG Skill for Experience-Driven Retrieval Strategy Orchestration](http://arxiv.org/abs/2605.03989v1)** | Zhang, Liao | **经验驱动的RAG策略编排**：针对不同任务类型（事实问答/多跳推理/科学验证）动态选择检索管线，打破"一管到底"的僵化假设。 |
| **[Contextual Multi-Objective Optimization: Rethinking Objectives in Frontier AI Systems](http://arxiv.org/abs/2605.03900v1)** | Zhou et al. | **情境化多目标优化**：指出前沿AI在开放域（科学辅助、长期智能体、高风险建议）的可靠性瓶颈源于目标设定本身，提出动态目标重构框架。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Atomic Fact-Checking Increases Clinician Trust in Large Language Model Recommendations for Oncology Decision Support: A Randomized Controlled Trial](http://arxiv.org/abs/2605.03916v1)** | Adams et al. | **医疗AI信任度首个RCT**：356名临床医生的7,400+次评估证实，将AI治疗建议分解为可独立验证的原子声明并链接指南来源，显著提升信任度。 |
| **[SymptomAI: Towards a Conversational AI Agent for Everyday Symptom Assessment](http://arxiv.org/abs/2605.04012v1)** | Breda et al. | **日常症状评估对话智能体**：聚焦现有研究忽视的简单日常场景（非复杂病例），检验LLM在低保真度上下文中的真实诊断表现。 |
| **[EQUITRIAGE: A Fairness Audit of Gender Bias in LLM-Based Emergency Department Triage](http://arxiv.org/abs/2605.03998v1)** | Young, Matthews | **急诊分诊性别偏见审计**：针对医院试点LLM分诊决策支持系统，量化验证其是否延续人类评估中已证实的性别差异。 |
| **[CC-OCR V2: Benchmarking Large Multimodal Models for Literacy in Real-world Document Processing](http://arxiv.org/abs/2605.03903v1)** | Xu et al. | **真实文档OCR基准**：突破现有基准任务范围狭窄、与现实应用脱节的局限，系统评估LMM在真实文档处理中的读写能力。 |
| **[Quantifying the human visual exposome with vision language models](http://arxiv.org/abs/2605.03863v1)** | Rominger et al. | **视觉暴露组量化**：利用VLM突破地理空间代理和自报告偏差，首次量化第一人称日常视觉环境对心理健康的影响。 |

---

## 研究趋势信号

**"评估基础设施"正成为AI研究的新核心赛道**。今日论文显示，领域正经历从"模型能力扩展"到"评估能力扩展"的范式转移：MCJudgeBench针对约束级评判、MOSAIC-Bench针对组合式漏洞、重新定义的红队测试针对智能体时代攻击面——三者共同指向**安全评估的粒度细化与自动化加速**。同时，**医疗AI进入证据驱动阶段**，Adams等人的RCT标志着该领域从"技术可行性演示"迈向"临床效用验证"。第三，**激活层面的模型操控**（Steer Like the LLM）与**自我进化训练**（EvoLM）代表对齐技术正从外部监督向内在机制深化。

---

## 值得精读

### 1. [Safety and accuracy follow different scaling laws in clinical large language models](http://arxiv.org/abs/2605.04039v1)
**理由**：这篇论文挑战了AI领域最基本的隐含假设之一——"更大/更强=更安全"。在医疗等高 stakes 领域，该发现具有直接的政策和产品影响：临床LLM的部署标准需将安全性评估独立于准确性评估，而非作为其代理指标。其方法论（系统性地解耦规模、上下文、检索复杂度、推理计算四个维度）可为其他垂直领域的负责任扩展提供模板。

### 2. [MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents](http://arxiv.org/abs/2605.03952v1)
**理由**：编码智能体的安全漏洞具有独特的"组合涌现"特性——单看每个子任务完全 benign，组合后却产生可利用代码。该基准首次量化这一结构性盲区，其攻击构造方法论（将恶意目标分解为常规工程ticket序列）对智能体系统的红队测试具有普适启发，且直接关联到当前GitHub Copilot、Devin等产品的实际风险。

### 3. [Atomic Fact-Checking Increases Clinician Trust in Large Language Model Recommendations for Oncology Decision Support: A Randomized Controlled Trial](http://arxiv.org/abs/2605.03916v1)
**理由**：这是**首个**关于LLM可解释性干预对临床信任度影响的随机对照试验，填补了AI医疗从"技术性能"到"临床采纳"的关键证据空白。356名医生的规模、肿瘤学的高 stakes 场景、原子化事实核查的具体干预设计，使其成为医疗AI人机交互研究的里程碑式工作，对监管审批和医院采购决策具有直接参考价值。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*