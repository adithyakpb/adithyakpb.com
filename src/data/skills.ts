export interface SkillGroup {
  category: string;
  color: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / ML',
    color: '#1e40af',
    skills: [
      'LLMs & Generative AI',
      'RAG Systems',
      'Agentic AI',
      'NLP / NLU',
      'ML Pipelines',
      'Prompt Engineering',
      'Fine-tuning',
      'Evaluation & QA',
    ],
  },
  {
    category: 'Frameworks & Tools',
    color: '#059669',
    skills: [
      'LangChain',
      'LlamaIndex',
      'OpenAI API',
      'Hugging Face',
      'PyTorch',
      'scikit-learn',
      'MLflow',
      'Weights & Biases',
    ],
  },
  {
    category: 'Infrastructure',
    color: '#7c3aed',
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Kubernetes',
      'Docker',
      'Terraform',
      'CI/CD',
      'Vector Databases',
    ],
  },
  {
    category: 'Languages & Web',
    color: '#d97706',
    skills: [
      'Python',
      'TypeScript',
      'SQL',
      'Bash',
      'FastAPI',
      'Astro',
      'React',
      'Node.js',
    ],
  },
];
