// HomeBlogPreview.tsx
"use client";

import { blogs } from "../../data/blogs";
import { BlogCard } from "./BlogCard";

const HomeBlogPreview = () => {
  const top4 = blogs.slice(0, 4);

  return (
    <div className="w-11/12 mt-10 mx-auto align-middle justify-center items-center content-center">
      <h2 className="text-2xl  text-center font-bold mb-6">Latest Blogs</h2>
      <div className="">
        <div className="grid grid-cols-1 gap-8 justify-center sm:grid-cols-2 md:grid-cols-4 ">
          {top4.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlogPreview;
