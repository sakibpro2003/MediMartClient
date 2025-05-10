/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogs } from "../../../../../data/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BlogDetailsPage({ params }: any) {
  const blog = blogs.find((b) => b.blogSlug === params.blogSlug);

  if (!blog) return notFound();

  return (
    <main className="w-11/12 mx-auto py-10 px-4">
      <h1 className="text-4xl text-center  font-bold mb-4 text-gray-800">{blog.title}</h1>

      <div className="text-sm mt-6 text-gray-500 mb-4 flex items-center justify-between flex-wrap">
        <div>
          Published on {new Date(blog.publishedAt).toDateString()}
          {blog.readingTime && <> · {blog.readingTime}</>}
        </div>
        {blog.author && <span className="italic">by {blog.author}</span>}
      </div>

      <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {blog.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <article className="prose text-justify prose-base prose-gray max-w-none">
        {blog.content}
      </article>
    </main>
  );
}
