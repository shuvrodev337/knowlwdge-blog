import React, { useEffect, useState } from "react";

const Bookmarks = ({readTime, bookmarks}) => {
    const [time , setTime]=useState(readTime)
    useEffect(()=>{
        const existingTime = localStorage.getItem('read-time')
        setTime(existingTime)
    },[readTime])

    //arekta useeffect likhe tar dependency bookmarks diye dibo
  return (
      <div className="card col-md-4 ">
        <div className="pb-4"><h4 className="card-header">Spent time on read: {time?time: 0} min</h4></div>
        <h4 className="card-header">Bookmarked Blogs: 8</h4>
        
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">An item</li> */}
          {
            bookmarks.map( bookmark =><li className="list-group-item" key={bookmark.id} >{bookmark.title}</li>)
          }
          
        </ul>
      </div>
  );
};

export default Bookmarks;
