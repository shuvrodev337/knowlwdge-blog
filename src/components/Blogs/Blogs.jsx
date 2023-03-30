import React from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="movie-container row ">
        {blogs.map((blog) => (
          <SingleBlog blog={blog} key={blog.id}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
