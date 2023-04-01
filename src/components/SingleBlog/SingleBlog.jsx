import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = (props) => {
  const { id, title, authorName, publishedDate, minuteRead, img, author_img} = props.blog;
  const handleReadTime = props.handleReadTime
  const handleBookmarks = props.handleBookmarks
  
  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top w-100"  style={{width:"800px", height:"450px"}} />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img src={author_img} style={{width:"50px", height:"50px", borderRadius:"50%"}} />
            <div className="authorANdPublishedDate">
              <h5 className="card-title">{authorName}</h5>
              <p>
                <small className="text-body-secondary">
                  {publishedDate} (4 Days ago)
                </small>
              </p>
            </div>
          </div>
          <div className="d-flex align-items-baseline gap-3">
            <p>{minuteRead} minutes read</p>
            <button onClick={()=>handleBookmarks(id,title)}><FontAwesomeIcon icon={faBookmark} /></button>
          </div>
        </div>
        <h5>{title}</h5>
        <p className="card-text">#beginners #programming</p>
        <button onClick={()=>handleReadTime(minuteRead)} className="btn btn-link">Mark as read </button>
      </div>
    </div>
  );
};

export default SingleBlog;
