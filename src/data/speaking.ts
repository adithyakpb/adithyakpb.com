export interface SpeakingEvent {
  title: string;
  event: string;
  date: string;
  description: string;
  link?: string;
}

export const speakingEvents: SpeakingEvent[] = [
  {
    title: 'Building Production RAG Systems',
    event: 'GIDS (Great International Developer Summit)',
    date: '2024',
    description:
      'Shared lessons from building enterprise-grade RAG systems — covering retrieval strategies, chunking approaches, evaluation, and production deployment patterns.',
  },
  {
    title: 'Practical Agentic AI',
    event: 'XConf by Thoughtworks',
    date: '2024',
    description:
      'Explored the landscape of agentic AI architectures, tool-use patterns, and how to build reliable autonomous systems for enterprise use cases.',
  },
  {
    title: 'Guest Lecturer — Applied ML',
    event: 'University Guest Lecture',
    date: '2023',
    description:
      'Delivered a guest lecture on applied machine learning, covering the gap between academic ML and production-grade ML systems.',
  },
  {
    title: 'GenAI 101 — Internal Workshop',
    event: 'Internal Training',
    date: '2023',
    description:
      'Designed and led a multi-session workshop introducing generative AI concepts, LLM fundamentals, and hands-on prompt engineering to engineering teams.',
  },
];
