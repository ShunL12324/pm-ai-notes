import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PM's AI Notes",
  description: "AI 产品经理学习笔记",
  base: '/pm-ai-notes/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始学习', link: '/01-ai-basics/' }
    ],

    sidebar: [
      {
        text: '1. AI 基础认知',
        collapsed: false,
        items: [
          { text: '概述', link: '/01-ai-basics/' }
        ]
      },
      {
        text: '2. 模型评测与选型',
        collapsed: false,
        items: [
          { text: '概述', link: '/02-model-evaluation/' },
          { text: '2.1 评测指标体系', link: '/02-model-evaluation/2.1-metrics' },
          { text: '2.2 主流 Benchmark', link: '/02-model-evaluation/2.2-benchmarks' },
          { text: '2.3 Agent 评测', link: '/02-model-evaluation/2.3-agent-benchmarks' },
          { text: '2.4 LLM-as-Judge', link: '/02-model-evaluation/2.4-llm-as-judge' },
          { text: '2.5 评测框架', link: '/02-model-evaluation/2.5-frameworks' },
          { text: '2.6 模型选型指南', link: '/02-model-evaluation/2.6-selection-guide' }
        ]
      },
      {
        text: '3. AI 产品形态',
        collapsed: false,
        items: [
          { text: '概述', link: '/03-ai-products/' }
        ]
      },
      {
        text: '4. AI 产品设计',
        collapsed: false,
        items: [
          { text: '概述', link: '/04-ai-design/' }
        ]
      },
      {
        text: '5. AI 工具生态',
        collapsed: false,
        items: [
          { text: '概述', link: '/05-ai-tools/' },
          { text: '5.1 MCP 详解', link: '/05-ai-tools/5.1-mcp' },
          { text: '5.2 Skills 详解', link: '/05-ai-tools/5.2-skills' },
          { text: '5.3 MCP vs Skills', link: '/05-ai-tools/5.3-mcp-vs-skills' },
          { text: '5.4 AI 开发平台', link: '/05-ai-tools/5.4-platforms' }
        ]
      },
      {
        text: '6. 行业应用与趋势',
        collapsed: false,
        items: [
          { text: '概述', link: '/06-industry/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shunlog/pm-ai-notes' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '目录'
    },

    lastUpdated: {
      text: '最后更新'
    }
  }
})
