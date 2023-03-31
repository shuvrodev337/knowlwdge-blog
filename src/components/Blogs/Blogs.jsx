import React from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import { useEffect, useState } from "react";

const Blogs = ({handleReadTime ,  handleBookmarks}) => {
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
          <SingleBlog blog={blog} handleReadTime={handleReadTime}  handleBookmarks={handleBookmarks} key={blog.id}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
