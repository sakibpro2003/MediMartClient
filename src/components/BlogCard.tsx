"use client";

import Link from "next/link";
import { Blog } from "../../data/blogs";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${blog.blogSlug}`}
      className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={400}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.excerpt}</p>
      </div>
    </Link>
  );
};
