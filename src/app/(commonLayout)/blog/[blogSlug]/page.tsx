import { blogs } from '../../../../../data/blogs';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Params {
  params: {
    slug: string;
  };
}

export default function BlogDetailsPage({ params }: Params) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <Image src={blog.image} fill alt={blog.title} className="w-full h-60 object-cover rounded-lg mb-6" />
      <p className="text-gray-500 text-sm mb-2">Published on {new Date(blog.publishedAt).toDateString()}</p>
      <article className="prose max-w-none">{blog.content}</article>
    </main>
  );
}
