import React from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import { useEffect, useState } from "react";

const Blogs = ({handleReadTime}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);
  return (
    <div>
      <div className="movie-container row ">
        {blogs.map((blog) => (
          <SingleBlog blog={blog} key={blog.id} handleReadTime={handleReadTime}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
