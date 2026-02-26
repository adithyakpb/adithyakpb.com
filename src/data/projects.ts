export interface Project {
  title: string;
  description: string;
  metrics: string[];
  tags: string[];
  link?: string;
}

// Deployed applications / production systems
export const projects: Project[] = [
  {
    title: 'Enterprise RAG System',
    description:
      'Production Retrieval-Augmented Generation platform serving 5,000+ users across multiple enterprise clients. Full pipeline — document ingestion, vector search, prompt engineering, and LLM orchestration.',
    metrics: ['5,000+ users', '82% faster retrieval', 'Production scale'],
    tags: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI', 'Azure'],
  },
  {
    title: 'Multi-tenant Agentic AI Platform',
    description:
      'Multi-tenant platform for deploying autonomous AI agents across enterprise use cases. Isolated agent workflows, tool registries, and observability dashboards per tenant.',
    metrics: ['12+ deployments', '99.5% uptime', 'Multi-tenant'],
    tags: ['Python', 'LLM Agents', 'Kubernetes', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'AI Quality Assurance System',
    description:
      'Automated QA system using LLMs to validate AI-generated content at scale. Reduced manual review effort and caught critical errors before production.',
    metrics: ['$600K+ savings', 'Automated QA', 'Production'],
    tags: ['Python', 'LLMs', 'NLP', 'Evaluation Frameworks'],
  },
  {
    title: 'signal and noise',
    description:
      'Personal blog on ML, mathematics, and AI systems. Astro 5 + Ghost CMS (headless), deployed on Cloudflare Pages. Entire infrastructure runs at $0/month.',
    metrics: ['$0 infra cost', 'Astro + Ghost', 'Auto-deploy'],
    tags: ['Astro', 'Ghost CMS', 'Cloudflare', 'Tailwind CSS'],
    link: 'https://signalandnoise.blog',
  },
];
