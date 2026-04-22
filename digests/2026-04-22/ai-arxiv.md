# ArXiv AI 研究日报 2026-04-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-04-22 00:13 UTC

---

# ArXiv AI 研究日报 | 2026-04-22

---

## 今日速览

今日ArXiv共收录50篇AI核心领域论文，**推理与强化学习**成为最密集的创新方向：从弱监督下的LLM推理学习、饱和数据上的RL训练悖论，到离散扩散模型与RL的结合，均指向"如何让模型在有限信号下持续进化"这一核心问题。**智能体安全**与**多模态基础模型**同样活跃，涵盖从具身规划安全到医疗级患者表示学习的突破。此外，**模型效率优化**（量化、蒸馏、模块化训练）持续深耕，为边缘部署和规模化应用铺路。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[When Can LLMs Learn to Reason with Weak Supervision?](http://arxiv.org/abs/2604.18574v1)** | Rahman et al. | 系统分析RLVR在弱奖励信号下的成功条件，为降低高质量标注依赖提供理论指导。 |
| **[Too Correct to Learn: Reinforcement Learning on Saturated Reasoning Data](http://arxiv.org/abs/2604.18493v1)** | Liang et al. | 揭示强基座模型在饱和基准上因缺乏失败案例导致RL优势信号崩溃的悖论，提出解决思路。 |
| **[LLM Safety From Within: Detecting Harmful Content with Internal Representations](http://arxiv.org/abs/2604.18519v1)** | Jiao et al. | SIREN利用LLM内部多层表示而非仅末层检测有害内容，轻量且显著提升安全守卫效果。 |
| **[Different Paths to Harmful Compliance: Behavioral Side Effects and Mechanistic Divergence Across LLM Jailbreaks](http://arxiv.org/abs/2604.18510v1)** | Kabir & Tiganj | 对比三种越狱路径的行为与机制差异，发现不同攻击方式导致模型内部失效模式根本不同。 |
| **[Adversarial Humanities Benchmark: Results on Stylistic Robustness in Frontier Model Safety](http://arxiv.org/abs/2604.18487v1)** | Galisai et al. | AHB以人文学科风格重写有害任务，测试前沿模型安全拒绝的文体鲁棒性，暴露新漏洞。 |
| **[GSQ: Highly-Accurate Low-Precision Scalar Quantization for LLMs via Gumbel-Softmax Sampling](http://arxiv.org/abs/2604.18556v1)** | Dadgarnia et al. | 用Gumbel-Softmax实现2-3bit量化，在简单标量量化框架下逼近SOTA压缩率与精度平衡。 |
| **[Train Separately, Merge Together: Modular Post-Training with Mixture-of-Experts](http://arxiv.org/abs/2604.18473v1)** | Morrison et al. | BAR框架实现分支训练+自适应路由的模块化后训练，避免持续学习的灾难性遗忘问题。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Agentic Forecasting using Sequential Bayesian Updating of Linguistic Beliefs](http://arxiv.org/abs/2604.18576v1)** | Murphy | BLF将贝叶斯信念更新与语言表示结合，在ForecastBench上实现SOTA的二元预测智能体性能。 |
| **[MASS-RAG: Multi-Agent Synthesis Retrieval-Augmented Generation](http://arxiv.org/abs/2604.18509v1)** | Xiao et al. | 多智能体协作合成RAG，通过专门化代理处理噪声/异构检索上下文，提升复杂查询的整合能力。 |
| **[Using large language models for embodied planning introduces systematic safety risks](http://arxiv.org/abs/2604.18463v1)** | Zhang et al. | DESPITE基准（12,279任务）首次系统量化LLM具身规划中的物理与规范安全风险，结果警示。 |
| **[OneVL: One-Step Latent Reasoning and Planning with Vision-Language Explanation](http://arxiv.org/abs/2604.18486v1)** | Lu et al. | 将CoT推理压缩为单步潜在空间操作，以视觉-语言解释保持可解释性，满足自动驾驶实时性需求。 |
| **[Semantic Step Prediction: Multi-Step Latent Forecasting in LLM Reasoning Trajectories via Step Sampling](http://arxiv.org/abs/2604.18464v1)** | Yuan | 改进STP方法以"语义步骤"替代随机token采样，实现推理轨迹的多步潜在预测与数据效率提升。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[MathNet: a Global Multimodal Benchmark for Mathematical Reasoning and Retrieval](http://arxiv.org/abs/2604.18584v1)** | Alshammari et al. | 大规模多语言多模态数学基准，覆盖奥林匹克级别问题，填补现有基准在规模与多样性上的缺口。 |
| **[Sessa: Selective State Space Attention](http://arxiv.org/abs/2604.18580v1)** | Horbatko | 选择性状态空间注意力机制，在有效支持集上实现锐利检索，为长序列建模提供Transformer替代方案。 |
| **[Bounded Ratio Reinforcement Learning](http://arxiv.org/abs/2604.18578v1)** | Ao et al. | 弥合PPO启发式裁剪与信任区域理论鸿沟，提出有界比率RL算法，提升策略优化稳定性与样本效率。 |
| **[Latent Phase-Shift Rollback: Inference-Time Error Correction via Residual Stream Monitoring and KV-Cache Steering](http://arxiv.org/abs/2604.18567v1)** | Gupta & Kumar | LPSR实时监控残差流检测推理"相变"，通过KV-Cache回滚纠正中间错误，无需重新训练。 |
| **[FUSE: Ensembling Verifiers with Zero Labeled Data](http://arxiv.org/abs/2604.18547v1)** | Lee et al. | 零标注数据下融合多个不完美验证器，为LLM输出验证提供可扩展的实用解决方案。 |
| **[NI Sampling: Accelerating Discrete Diffusion Sampling by Token Order Optimization](http://arxiv.org/abs/2604.18471v1)** | Liu et al. | 优化离散扩散模型的token生成顺序，突破启发式采样瓶颈，释放并行解码潜力。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[A multimodal and temporal foundation model for virtual patient representations at healthcare system scale](http://arxiv.org/abs/2604.18570v1)** | Zhang et al. | Apollo模型整合三十年跨模态临床记录的时间深度，构建医疗系统级统一患者表示，突破数据孤岛。 |
| **[Back into Plato's Cave: Examining Cross-modal Representational Convergence at Scale](http://arxiv.org/abs/2604.18572v1)** | Koepke et al. | 大规模检验"柏拉图表示假说"，发现文本-图像表示收敛存在重要边界，模态选择仍关键。 |
| **[Asset Harvester: Extracting 3D Assets from Autonomous Driving Logs for Simulation](http://arxiv.org/abs/2604.18468v1)** | Cao et al. | 从驾驶日志自动提取可交互3D资产，解决神经场景重建无法生成仿真所需完整对象的瓶颈。 |
| **[Progressive Online Video Understanding with Evidence-Aligned Timing and Transparent Decisions](http://arxiv.org/abs/2604.18459v1)** | Zhang et al. | 流式视频理解代理，在证据首次出现时精确响应，实现透明决策与在线时序对齐。 |
| **[ESsEN: Training Compact Discriminative Vision-Language Transformers in a Low-Resource Setting](http://arxiv.org/abs/2604.18452v1)** | Fields & Kennington | 低资源环境下训练紧凑判别式视觉-语言Transformer，为边缘设备提供高效多模态能力。 |

---

## 研究趋势信号

**"推理内省与纠错"**正从训练时向推理时迁移：LPSR的残差流监控、STP的潜在轨迹预测、以及BLF的贝叶斯信念更新，共同指向"让模型在生成过程中自我检测并修正"的新范式。同时，**安全研究从"防御已知攻击"转向"理解失效机制"**——越狱路径的差异化分析、内部表示的安全检测、文体鲁棒性测试，标志着AI安全进入更精细的机制解释阶段。最后，**离散扩散与RL的融合**（UDM-GRPO、NI Sampling）开辟非自回归生成的新优化空间。

---

## 值得精读

### 1. [Latent Phase-Shift Rollback](http://arxiv.org/abs/2604.18567v1) | Gupta & Kumar
**理由**：推理时纠错是LLM部署的痛点——现有方法多依赖重采样或外部验证器，成本高昂。LPSR首次提出"残差流相变检测+KV-Cache回滚"的原生机制，无需训练即可在生成过程中实时拦截并修正错误，对长链推理、代码生成等场景具有直接工程价值。其监控-干预框架可能泛化至多模态生成。

### 2. [Too Correct to Learn](http://arxiv.org/abs/2604.18493v1) | Liang et al.
**理由**：直击当前RL推理 scaling 的核心矛盾——模型越强，标准基准越饱和，RL反而越难学习。该文不仅诊断问题（同质化正确解导致优势信号消失），更隐含对"合成困难数据""课程奖励设计"等方向的启示，对后训练（post-training）策略制定至关重要。

### 3. [Agentic Forecasting using Sequential Bayesian Updating of Linguistic Beliefs](http://arxiv.org/abs/2604.18576v1) | Murphy
**理由**：将经典贝叶斯框架与LLM结合实现SOTA预测性能，展示了"结构化认知+语言模型"的独特优势。其"语言信念状态"设计为其他需要概率推理的智能体任务（如医疗诊断、投资决策）提供了可迁移的架构模板，且代码与数据可能易于复用。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*