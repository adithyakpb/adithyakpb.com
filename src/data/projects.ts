export interface Project {
  title: string;
  description: string;
  metrics: string[];
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Enterprise RAG System',
    description:
      'Built a production Retrieval-Augmented Generation platform serving 5,000+ users across multiple enterprise clients. Designed the full pipeline — document ingestion, vector search, prompt engineering, and LLM orchestration.',
    metrics: ['5,000+ users', '82% faster retrieval', 'Production scale'],
    tags: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI', 'Azure'],
  },
  {
    title: 'Multi-tenant Agentic AI Platform',
    description:
      'Architected a multi-tenant platform for deploying autonomous AI agents across enterprise use cases. Each tenant gets isolated agent workflows, tool registries, and observability dashboards.',
    metrics: ['12+ deployments', '99.5% uptime', 'Multi-tenant'],
    tags: ['Python', 'LLM Agents', 'Kubernetes', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'MERIT — ML Experiment Toolkit',
    description:
      'Open-source Python package for ML experiment tracking, reproducibility, and deployment automation. Published on PyPI with CI/CD pipeline for automated releases.',
    metrics: ['PyPI published', '50% faster deployment'],
    tags: ['Python', 'PyPI', 'MLflow', 'Docker', 'GitHub Actions'],
    link: 'https://github.com/adithyakpb',
  },
  {
    title: 'AI Quality Assurance System',
    description:
      'Designed and deployed an automated QA system using LLMs to validate AI-generated content at scale. Reduced manual review effort and caught critical errors before production.',
    metrics: ['$600K+ savings', 'Automated QA', 'Production'],
    tags: ['Python', 'LLMs', 'NLP', 'Evaluation Frameworks'],
  },
  {
    title: 'signal and noise — Tech Blog',
    description:
      'Personal blog on ML, mathematics, and AI systems. Built with Astro 5 + Ghost CMS (headless), deployed on Cloudflare Pages. Entire infrastructure runs at $0/month.',
    metrics: ['$0 infra cost', 'Astro + Ghost', 'Auto-deploy'],
    tags: ['Astro', 'Ghost CMS', 'Cloudflare', 'Tailwind CSS'],
    link: 'https://signalandnoise.blog',
  },
];
