// HomeBlogPreview.tsx
"use client";

import { blogs } from "../../data/blogs";
import { BlogCard } from "./BlogCard";

const HomeBlogPreview = () => {
  const top4 = blogs.slice(0, 4);

  return (
    <div className="py-10 px-4 w-11/12 mt-10 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {top4.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlogPreview;
