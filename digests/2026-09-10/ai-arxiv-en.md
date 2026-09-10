# ArXiv AI Research Digest 2026-09-10

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-10 00:43 UTC

---

**ArXiv AI Research Digest — 2026-09-10**

---

### **Today's Highlights**  
Recent submissions highlight a growing convergence between embodied AI, agentic reasoning, and real-world deployment. Notably, *TANGO* and *DeCAL* push forward whole-body vision-language-action models for humanoid robots in cluttered environments, integrating physical contact awareness and geometric adaptation. In the agent space, *Procedural Graphs*, *MeClear*, and *ExecCritic* introduce structured execution frameworks and memory-aware feedback mechanisms that enhance long-horizon task performance. A significant trend emerges in **test-time learning and self-improvement**, with *Entropy-Regularized Rank-Masked Policy Optimization*, *Co-Evolving Harnesses*, and *SAEScientist-Bench* demonstrating how models can autonomously refine their behavior through dynamic feedback loops. Meanwhile, *Copying explains the collective behavior of AI agents in the wild* reveals emergent cooperation via shared knowledge repositories—suggesting that coordination may arise organically without explicit design.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ReCite: Agentic Reasoning for Faithful Citation](http://arxiv.org/abs/2609.09156v1) | Yuyang Huang et al. | Proposes an agentic system that generates citations by reasoning over retrieved documents, improving accuracy and traceability in academic writing. This addresses critical gaps in current retrieval-based citation tools. |
| [Answer-Distribution Trajectories: A Stochastic-Dynamics View of LLM Reasoning](http://arxiv.org/abs/2609.09030v1) | Mar Gonzàlez I Català et al. | Introduces a stochastic dynamics framework to model how LLMs evolve answer distributions during reasoning, offering deeper insight into internal cognitive processes beyond endpoint accuracy. |
| [Evaluation of Contextual Understanding in Large Language Models](http://arxiv.org/abs/2609.09004v1) | Subavarshana Arumugam et al. | Challenges surface-level metrics by proposing context-sensitive evaluation protocols that reveal limitations in true comprehension across diverse linguistic phenomena. |
| [The Audit Decides the Verdict: Instrument Effects Rival Demographic Bias in LLM Decision Audits](http://arxiv.org/abs/2609.09048v1) | Siddharth Vohra et al. | Demonstrates that audit methodology—not just model bias—can reverse fairness outcomes, urging caution in interpreting bias evaluations and calling for standardized audit designs. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1) | Yuxing Lu et al. | Introduces procedural graphs as executable, evolving plans that encode action order and conditions, enabling more reliable long-horizon agent execution. This formalizes implicit procedural knowledge into structured, testable logic. |
| [MeClear: Cooperative Game-Theoretic Attribution and Risk-Aware Memory Clearance for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.09115v1) | Boyu Yang et al. | Proposes a game-theoretic memory management system that prioritizes relevant information and clears outdated content based on downstream utility, reducing hallucination risks in extended interactions. |
| [Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1) | Giordano De Marzo et al. | Documents spontaneous, decentralized cooperation among AI agents using a shared wiki to pass tests—revealing emergent collaboration without coordination, suggesting new models for understanding swarm-like behavior. |
| [ExecCritic: Learn to Test, Test to Improve for Coding Agents](http://arxiv.org/abs/2609.09133v1) | Leitian Tao et al. | Develops a critic mechanism that evaluates both code patches and their associated tests jointly, correcting misaligned feedback and improving repair quality in code-generation agents. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Learning Length-Extrapolatable Recurrent Models](http://arxiv.org/abs/2609.09157v1) | Hanwen Jiang | Presents a method to train recurrent models that generalize beyond their training length using dense per-token losses, overcoming gradient instability issues and enabling robust long-context modeling. |
| [Nearly Tight Rademacher Bounds for Sparsely Activated Neural Networks](http://arxiv.org/abs/2609.09130v1) | Xiaoyu Li et al. | Derives sharp generalization bounds for networks with input-dependent sparsity, providing theoretical grounding for efficient architectures like Mixture-of-Experts. |
| [Silver Rate Is (Almost) Optimal for Gradient Descent Acceleration](http://arxiv.org/abs/2609.09152v1) | Yuhan Ye et al. | Proves near-optimal convergence rates for gradient descent with predetermined stepsizes, establishing a fundamental limit on acceleration in smooth convex optimization. |
| [Transformers as In-Context Samplers: From Closed-Form Diffusion to Estimation-Free Sampling](http://arxiv.org/abs/2609.08981v1) | Arman Adibi et al. | Theoretically unifies in-context learning with diffusion sampling, showing Transformers can perform estimation-free generation via prompt-driven stochastic dynamics. |

#### 📊 Applications (domain-specific, multimodal, code generation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1) | Anqi Li et al. | Enables humanoid robots to navigate complex indoor spaces using coordinated whole-body motion guided by vision-language-action fusion, advancing physical embodiment in robotics. |
| [NOAH: Learning the Full Patient Journey. A Longitudinal Multimodal Time-Aware Model for Representation and Forecasting](http://arxiv.org/abs/2609.09140v1) | Tobias Susetzky et al. | Builds a time-aware, multimodal model to represent and predict patient trajectories across decades, capturing irregular healthcare data patterns with high fidelity. |
| [Physics-Informed Deep Learning for False Ventricular Tachycardia Alarm Reduction in the ICU](http://arxiv.org/abs/2609.08992v1) | Athanasios Papastathopoulos-Katsaros et al. | Combines 1D SE-ResNet with physics-informed reconstruction to reduce false alarms in ICU monitoring, improving clinical safety through biophysical consistency. |
| [SQLMorph: Query Mutation and Fine-Grained Metrics for Text-to-SQL Evaluation](http://arxiv.org/abs/2609.08950v1) | Mohammadhossein Malekpour et al. | Introduces a mutation-based benchmark and granular metrics to evaluate text-to-SQL systems under schema complexity, addressing key shortcomings in existing evaluation paradigms. |

---

### **Research Trend Signal**  
A clear shift is emerging toward **autonomous, self-correcting AI systems** that operate not just reactively but proactively across long horizons. This is evident in the proliferation of frameworks like *Procedural Graphs*, *MeClear*, and *ExecCritic*, which formalize agent planning, memory management, and feedback loops—moving beyond static prompts toward dynamic, executable reasoning structures. Concurrently, there’s growing interest in **emergent behaviors** (*e.g., copying agents collaborating via wikis*) and **self-improvement pipelines** (*e.g., SAEScientist-Bench, Co-Evolving Harnesses*), signaling a move from model-centric AI to ecosystem-level intelligence. Methodologically, researchers are deepening theoretical foundations—especially in optimization (*Silver Rate*), generalization (*Rademacher bounds*), and in-context inference (*Transformers as Samplers*)—to support these advanced systems. Finally, domain applications are becoming increasingly realistic: healthcare (*NOAH*, *False VT alarm reduction*), robotics (*TANGO*, *DeCAL*), and industrial systems (*GraphFAS*) now demand multimodal, temporal, and physically grounded models—indicating maturity beyond synthetic benchmarks.

---

### **Worth Deep Reading**
1. **[Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)**  
   This paper redefines how agents plan and execute tasks by introducing a formal, learnable structure for procedural knowledge. It offers a blueprint for building trustworthy, interpretable agents capable of handling complex, long-horizon workflows—a foundational step toward reliable AI assistants.

2. **[Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1)**  
   A fascinating empirical observation: thousands of AI agents spontaneously collaborated via a public wiki without instructions. This case study challenges assumptions about agency and coordination, suggesting that future AI systems may exhibit emergent social dynamics—critical for safety and governance research.

3. **[Transformers as In-Context Samplers: From Closed-Form Diffusion to Estimation-Free Sampling](http://arxiv.org/abs/2609.08981v1)**  
   Bridges theory and practice by showing Transformers can function as probabilistic samplers through in-context learning. This has profound implications for generative AI, potentially unifying language models with diffusion and Bayesian inference under one coherent framework.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*