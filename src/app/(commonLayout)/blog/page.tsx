import { Metadata } from "next";
import { blogs } from "../../../../data/blogs";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - MediMart",
  description:
    "Learn more about MediMart and our commitment to healthcare excellence.",
};

export default function BlogListPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        📚 Medicine Blog
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.blogSlug}`}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>
              <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mt-auto">
                <div>
                  <span>{new Date(blog.publishedAt).toDateString()}</span>
                  {blog.readingTime && <span> · {blog.readingTime}</span>}
                </div>
                {blog.author && (
                  <span className="italic">by {blog.author}</span>
                )}
              </div>
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
