import React, { useEffect, useState } from "react";


const Bookmarks = ({ readTime, bookmarks, clearBookmarksAndTime }) => {
  const [time, setTime] = useState(readTime);
  useEffect(() => {
    const existingTime = localStorage.getItem("read-time");  
    if (existingTime) {
      setTime(existingTime);
    }else{
      setTime(0)
    }
    
    
      
  }, [readTime]);

  const [bookmarkedBlogs, setBookmarkedBlogs] = useState(bookmarks);
  useEffect(() => {
    const existingBookmarks = JSON.parse(
      localStorage.getItem("bookmarked-blogs")
    );
    if (existingBookmarks) {
      setBookmarkedBlogs(existingBookmarks);
    }else{
        setBookmarkedBlogs([])
    }
  }, [bookmarks]);

  let count=1;
  

  return (
    <div className="card col-md-4 text-center">
      <div className="pb-4 ">
        <h4 className="card-header pb-4">
          Spent time on read: {time ? time : 0} min 
        </h4>

      </div>
      <h4 className="card-header">Bookmarked Blogs: {bookmarkedBlogs.length}</h4>

      <ul className="list-group list-group-flush pb-4">
        {bookmarkedBlogs.map((bookmark) => (
          <li className="list-group-item fw-bolder" key={bookmark.id}>{count++}. {bookmark.title}</li>
        ))}
      </ul>
      <button onClick={clearBookmarksAndTime} className="btn btn-primary btn-sm w-50 mx-auto mt-4">Clear All</button>

    </div>
  );
};

export default Bookmarks;
