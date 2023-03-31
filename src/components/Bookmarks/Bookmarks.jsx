import React, { useEffect, useState } from "react";


const Bookmarks = ({ readTime, bookmarks, clearSpentTime, clearBookmarks }) => {
  const [time, setTime] = useState(readTime);
  useEffect(() => {
    const existingTime = localStorage.getItem("read-time");
    setTime(existingTime);
  }, [readTime]);

  //arekta useeffect likhe tar dependency bookmarks diye dibo
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

  return (
    <div className="card col-md-4 ">
      <div className="pb-4 text-center">
        <h4 className="card-header pb-4">
          Spent time on read: {time ? time : 0} min
        </h4>
      <button onClick={clearSpentTime} className="btn btn-danger btn-sm">Clear Spent Time</button>

      </div>
      <h4 className="card-header">Bookmarked Blogs: {bookmarkedBlogs.length}</h4>

      <ul className="list-group list-group-flush pb-4">
        {bookmarkedBlogs.map((bookmark) => (
          <li className="list-group-item" key={bookmark.id}>
            {bookmark.title}
          </li>
        ))}
      </ul>
      <button onClick={clearBookmarks} className="btn btn-danger btn-sm">Clear Bookmarks</button>

    </div>
  );
};

export default Bookmarks;
