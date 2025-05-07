export interface Blog {
    id: string;
    title: string;
    slug: string;
    image: string;
    content: string;
    excerpt: string;
    publishedAt: string;
  }
  
  export const blogs: Blog[] = [
    {
      id: '1',
      title: 'The Importance of Vitamins in Daily Life',
      slug: 'importance-of-vitamins',
      image: '/images/vitamins.jpg',
      content: 'Full blog content about vitamins...',
      excerpt: 'Explore how vitamins contribute to overall health and well-being.',
      publishedAt: '2025-04-01',
    },
    {
      id: '2',
      title: 'Managing Cold and Flu Season',
      slug: 'managing-cold-flu',
      image: '/images/cold-flu.jpg',
      content: 'Tips and medicine for handling cold and flu...',
      excerpt: 'Learn which medicines are effective for seasonal illnesses.',
      publishedAt: '2025-03-25',
    },
    // Add 8 more blogs similarly
  ];
  