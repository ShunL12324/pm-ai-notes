# 第二章 模型评测与选型

## 引言

在大语言模型（Large Language Model, LLM）快速发展的今天，市场上涌现了数十种不同的模型选择。对于 AI 产品经理而言，如何科学地评估模型能力、选择适合业务场景的模型，是一项核心技能。

本章将系统介绍 LLM 评测的理论基础、主流评测基准、评测方法论以及模型选型的实践框架。

## 学习目标

完成本章学习后，你将能够：

1. 理解常用评测指标的定义、计算方法和适用场景
2. 掌握主流 Benchmark 的设计理念和局限性
3. 了解 Agent 评测的特殊性和主要评测基准
4. 理解 LLM-as-Judge 方法的优势、偏差和改进策略
5. 熟悉主流评测框架的特点和使用场景
6. 建立产品视角的模型选型方法论

## 章节结构

| 章节 | 主题 | 核心内容 |
|------|------|----------|
| [2.1](./2.1-metrics.md) | 评测指标体系 | BLEU、ROUGE、BERTScore、Pass@k、Perplexity |
| [2.2](./2.2-benchmarks.md) | 主流 Benchmark | MMLU、GSM8K、HumanEval、HellaSwag 等 |
| [2.3](./2.3-agent-benchmarks.md) | Agent 评测 | AgentBench、SWE-bench、WebArena、GAIA |
| [2.4](./2.4-llm-as-judge.md) | LLM-as-Judge | 方法论、偏差分析、改进策略 |
| [2.5](./2.5-frameworks.md) | 评测框架 | lm-evaluation-harness、OpenCompass、HELM |
| [2.6](./2.6-selection-guide.md) | 模型选型指南 | 选型维度、决策框架、实践建议 |

## 核心概念预览

### 评测的本质

模型评测本质上是回答一个问题：**这个模型在特定任务上的表现如何？**

评测需要解决三个核心问题：
1. **测什么**：定义评测的能力维度（知识、推理、代码、安全等）
2. **怎么测**：设计评测任务和数据集
3. **怎么算**：选择合适的评测指标

### 评测的挑战

LLM 评测面临若干独特挑战：

- **能力多样性**：LLM 具备多种能力，单一指标难以全面反映
- **任务开放性**：许多任务没有标准答案，难以自动评估
- **数据污染**：训练数据可能包含测试集，导致评测失真
- **评测成本**：全面评测需要大量计算资源和人工成本

### 评测与产品决策

从产品视角，评测服务于决策：

```
业务需求 → 评测维度 → 模型候选 → 评测执行 → 选型决策
```

产品经理不需要亲自执行评测，但需要理解评测结果的含义和局限，做出合理的选型决策。

## 延伸阅读

- [HELM 论文](https://arxiv.org/abs/2211.09110)：全面评测方法论
- [Chatbot Arena](https://arena.lmsys.org/)：基于人类偏好的模型排名
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)：开源模型排行榜
