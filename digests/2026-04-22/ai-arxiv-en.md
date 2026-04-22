# ArXiv AI Research Digest 2026-04-22

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-04-22 00:13 UTC

---

# ArXiv AI Research Digest — April 22, 2026

## 1. Today's Highlights

Today's submissions reveal three major thrusts: **inference-time reasoning control** through novel mechanisms for error correction and latent planning; **safety and robustness** as first-class research priorities, with multiple papers addressing jailbreak detection, harmful content filtering, and safe embodied planning; and **efficient deployment** via aggressive quantization and modular training paradigms. Notably, several papers challenge established assumptions—showing that document-as-image representations fail for scientific retrieval, that saturated reasoning data cripples RL training, and that cross-modal representational convergence remains far from Platonic ideals at scale. The breadth spans from theoretical reinforcement learning foundations to production-ready healthcare foundation models.

---

## 2. Key Papers

### 🧠 Large Language Models

**[MathNet: a Global Multimodal Benchmark for Mathematical Reasoning and Retrieval](http://arxiv.org/abs/2604.18584v1)**
- Alshammari et al.
- Introduces a large-scale, multilingual, Olympiad-level benchmark addressing critical gaps in size, language coverage, and task diversity for evaluating mathematical reasoning in LLMs and multimodal models.

**[When Can LLMs Learn to Reason with Weak Supervision?](http://arxiv.org/abs/2604.18574v1)**
- Rahman et al.
- Provides theoretical and empirical analysis of when reinforcement learning with verifiable rewards succeeds under weak supervision, essential as constructing high-quality reward signals grows increasingly difficult.

**[Too Correct to Learn: Reinforcement Learning on Saturated Reasoning Data](http://arxiv.org/abs/2604.18493v1)**
- Liang et al.
- Identifies a training paradox where strong base models saturate benchmarks, producing homogeneous correct solutions that eliminate failure cases and collapse advantage signals in group-relative RL algorithms.

**[GSQ: Highly-Accurate Low-Precision Scalar Quantization for LLMs via Gumbel-Softmax Sampling](http://arxiv.org/abs/2604.18556v1)**
- Dadgarnia et al.
- Achieves state-of-the-art 2-3 bit quantization through a novel Gumbel-Softmax sampling approach that unifies and outperforms existing scalar quantization methods like GPTQ and AWQ.

**[Latent Phase-Shift Rollback: Inference-Time Error Correction via Residual Stream Monitoring and KV-Cache Steering](http://arxiv.org/abs/2604.18567v1)**
- Gupta & Kumar
- Enables real-time detection and correction of unrecoverable reasoning errors during generation by monitoring residual stream dynamics and steering the KV-cache, addressing a fundamental limitation of autoregressive models.

**[LLM Safety From Within: Detecting Harmful Content with Internal Representations](http://arxiv.org/abs/2604.18519v1)**
- Jiao et al.
- Demonstrates that safety-relevant features distributed across internal layers outperform terminal-layer approaches, enabling lightweight guard models with superior harmful content detection.

**[Different Paths to Harmful Compliance: Behavioral Side Effects and Mechanistic Divergence Across LLM Jailbreaks](http://arxiv.org/abs/2604.18510v1)**
- Kabir & Tiganj
- Reveals that jailbroken models via different unsafe routes exhibit substantially different capabilities, behavioral profiles, and internal failure modes, complicating unified safety evaluation.

---

### 🤖 Agents & Reasoning

**[Agentic Forecasting using Sequential Bayesian Updating of Linguistic Beliefs](http://arxiv.org/abs/2604.18576v1)**
- Murphy
- Achieves state-of-the-art on ForecastBench through BLF, a system combining Bayesian belief states with linguistic representations for binary forecasting, demonstrating structured reasoning for real-world prediction tasks.

**[OneVL: One-Step Latent Reasoning and Planning with Vision-Language Explanation](http://arxiv.org/abs/2604.18486v1)**
- Lu et al.
- Eliminates autoregressive latency in autonomous driving trajectory prediction by compressing chain-of-thought reasoning into continuous latent space with interpretable visual explanations.

**[Using large language models for embodied planning introduces systematic safety risks](http://arxiv.org/abs/2604.18463v1)**
- Zhang et al.
- Introduces DESPITE, a benchmark with 12,279 tasks revealing systematic safety failures in LLM-based robotic planners across physical and normative dangers, with fully deterministic validation.

**[MASS-RAG: Multi-Agent Synthesis Retrieval-Augmented Generation](http://arxiv.org/abs/2604.18509v1)**
- Xiao et al.
- Addresses noisy, incomplete retrieval through multi-agent synthesis that reconciles heterogeneous evidence, improving robustness over single-generation RAG pipelines.

---

### 🔧 Methods & Frameworks

**[Sessa: Selective State Space Attention](http://arxiv.org/abs/2604.18580v1)**
- Horbatko
- Proposes a selective mechanism for state space models that sharpens attention over effective support regions, potentially bridging the efficiency of Mamba architectures with Transformer-like precise retrieval.

**[Bounded Ratio Reinforcement Learning](http://arxiv.org/abs/2604.18578v1)**
- Ao et al.
- Closes the theoretical gap between trust region methods and PPO's heuristic clipping through principled bounded ratio constraints, improving empirical robustness across domains.

**[Train Separately, Merge Together: Modular Post-Training with Mixture-of-Experts](http://arxiv.org/abs/2604.18473v1)**
- Morrison et al.
- Enables capability extension without catastrophic forgetting through BAR, which trains domain-specific branches separately and routes via mixture-of-experts, avoiding monolithic retraining costs.

**[FUSE: Ensembling Verifiers with Zero Labeled Data](http://arxiv.org/abs/2604.18547v1)**
- Lee et al.
- Solves the practical challenge of aggregating imperfect LLM judges without ground truth through a principled unlabeled ensembling framework, critical for scalable verification systems.

---

### 📊 Applications

**[A multimodal and temporal foundation model for virtual patient representations at healthcare system scale](http://arxiv.org/abs/2604.18570v1)**
- Zhang et al.
- Introduces Apollo, trained on three decades of data, as the first foundation model integrating full clinical record breadth and temporal depth into unified patient representations for healthcare system deployment.

**[Document-as-Image Representations Fall Short for Scientific Retrieval](http://arxiv.org/abs/2604.18508v1)**
- Khalighinejad et al.
- Demonstrates that rendering documents as images loses critical structure for scientific retrieval, challenging the prevailing paradigm in document embedding and benchmark design.

**[Back into Plato's Cave: Examining Cross-modal Representational Convergence at Scale](http://arxiv.org/abs/2604.18572v1)**
- Koepke et al.
- Provides large-scale evidence against the Platonic Representation Hypothesis, showing that text and image representations remain far from convergent with significant modality-dependent structure.

---

## 3. Research Trend Signal

A clear inflection point is visible in **inference-time computation and control**. Rather than scaling training, researchers are aggressively pursuing mechanisms to improve generation quality through real-time intervention—error correction via residual stream monitoring, latent reasoning compression, and KV-cache steering. This parallels the industry imperative to deploy capable models with acceptable latency. Simultaneously, **safety research is maturing from reactive to mechanistic**: papers today dissect internal representations for harm detection, characterize divergent failure modes across jailbreak methods, and systematically benchmark embodied planning risks. The third signal is **skepticism toward unimodal or uniform solutions**: document-as-image representations fail scientifically, cross-modal convergence is disproven at scale, and saturated reasoning data breaks standard RL—suggesting the field is entering a phase of architectural and methodological diversification rather than consolidation.

---

## 4. Worth Deep Reading

**[Latent Phase-Shift Rollback](http://arxiv.org/abs/2604.18567v1)** — This paper addresses perhaps the most frustrating property of LLMs: their inability to self-correct once an error is made during generation. The mechanism of monitoring residual streams and steering KV-caches offers a genuinely new intervention point with immediate practical applicability for reasoning-intensive deployments.

**[Too Correct to Learn](http://arxiv.org/abs/2604.18493v1)** — As models saturate standard benchmarks, this work identifies a fundamental training dynamics problem that threatens to stall progress in reasoning capabilities. The analysis of how homogeneous correct solutions collapse advantage signals provides crucial guidance for next-generation training paradigms and benchmark design.

**[Back into Plato's Cave](http://arxiv.org/abs/2604.18572v1)** — With profound implications for multimodal AI strategy, this large-scale empirical study challenges a prominent theoretical hypothesis. Whether modality choice matters—and how representations relate across modalities—shapes fundamental research directions in foundation model development.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*