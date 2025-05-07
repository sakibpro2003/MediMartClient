import { blogs } from '../../../../data/blogs';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogListPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Medicine Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="bg-white border rounded-lg shadow hover:shadow-lg transition">
            <Image src={blog.image}  fill alt={blog.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{blog.excerpt}</p>
              <span className="text-xs text-gray-500">{new Date(blog.publishedAt).toDateString()}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
