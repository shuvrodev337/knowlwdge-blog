import React from "react";

const Bookmarks = ({readTime, bookmarks}) => {
  return (
      <div className="card col-md-4 ">
        <div className="pb-4"><h4 className="card-header">Spent time on read: {readTime} min</h4></div>
        <h4 className="card-header">Bookmarked Blogs: 8</h4>
        
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">An item</li> */}
          {
            bookmarks.map( bookmark =><li className="list-group-item" >{bookmark}</li>)
          }
          
        </ul>
      </div>
  );
};

export default Bookmarks;
