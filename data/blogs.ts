export interface Blog {
    id: string;
    title: string;
    blogSlug: string;
    image: string;
    content: string;
    excerpt: string;
    publishedAt: string;
  }
  
  export const blogs: Blog[] = [
    {
      id: '88',
      title: 'The Importance of Vitamins in Daily Life',
      blogSlug: 'importance-of-vitamins',
      image: '/images/vitamins.jpg',
      content: 'Full blog content about vitamins...',
      excerpt: 'Explore how vitamins contribute to overall health and well-being.',
      publishedAt: '2025-04-01',
    },
    
    // Add 8 more blogs similarly
  ];
  