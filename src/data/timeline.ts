export interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  location?: string;
  description: string;
  highlights?: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    period: '2024 — Present',
    role: 'Machine Learning Engineer',
    org: 'Current Role',
    location: 'New York, NY',
    description:
      'Building production Generative AI and LLM systems — enterprise RAG platforms, multi-tenant agentic AI architectures, and AI quality assurance systems at scale.',
    highlights: [
      'Enterprise RAG platform serving 5,000+ users',
      'Multi-tenant agentic AI platform with 12+ deployments',
      'AI QA system saving $600K+ annually',
    ],
  },
  {
    period: '2022 — 2024',
    role: 'Machine Learning Engineer',
    org: 'Previous Role',
    location: 'Bengaluru, India',
    description:
      'Designed and deployed ML pipelines, NLP systems, and experiment tracking tooling. Published MERIT on PyPI for ML experiment reproducibility.',
    highlights: [
      'Published MERIT — ML experiment toolkit on PyPI',
      'Built end-to-end ML pipelines for production',
    ],
  },
  {
    period: '2020 — 2022',
    role: 'Software Engineer — ML',
    org: 'Early Career',
    location: 'Bengaluru, India',
    description:
      'Started building ML-powered features and data pipelines. Developed foundations in applied ML, NLP, and production software engineering.',
  },
  {
    period: '2016 — 2020',
    role: 'B.E. Computer Science',
    org: 'University',
    location: 'Bengaluru, India',
    description:
      'Studied computer science with focus on machine learning and signal processing. Built projects in music generation, emotion detection, and genre classification.',
  },
];
