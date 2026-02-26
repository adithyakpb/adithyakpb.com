import Parser from 'rss-parser';

export interface BlogPost {
  title: string;
  link: string;
  date: string;
  snippet: string;
}

export async function fetchBlogPosts(count = 3): Promise<BlogPost[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://signalandnoise.blog/rss.xml');

    return (feed.items || []).slice(0, count).map((item) => ({
      title: item.title || 'Untitled',
      link: item.link || 'https://signalandnoise.blog',
      date: item.pubDate || '',
      snippet: item.contentSnippet?.slice(0, 160) || '',
    }));
  } catch {
    return [];
  }
}
