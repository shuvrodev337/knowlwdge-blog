import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from "./components/Blog/Blog";

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);


  const handleReadTime = (minuteRead) => {

   
    const previousReadTime = JSON.parse(localStorage.getItem("read-time"));
    if (previousReadTime) {
      const sum = previousReadTime + minuteRead;
      localStorage.setItem("read-time", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("read-time", minuteRead);
      setReadTime(minuteRead);
    }
    toast.success("Marked as read !", {
      position: toast.POSITION.TOP_CENTER
    });
  };


  const handleBookmarks = (id, title) => {
    let bookmark = {};
    let newBookmarks = [];

    const existingBookmarks = JSON.parse(
      localStorage.getItem("bookmarked-blogs")
    );
    if (!existingBookmarks) {
      bookmark.id = id;
      bookmark.title = title;
      newBookmarks.push(bookmark);
      localStorage.setItem("bookmarked-blogs", JSON.stringify(newBookmarks));
      toast.success("Bookmark Added Successfully !", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      for (const existingBookmark of existingBookmarks) {
        if (existingBookmark.id === id) {
          toast.error("You Have Already Bookmarked This Blog !", {
            position: toast.POSITION.TOP_CENTER
          });
          return;
        }
      } 
      
      bookmark.id = id;
      bookmark.title = title;
      newBookmarks = [...existingBookmarks, bookmark];
      localStorage.setItem("bookmarked-blogs", JSON.stringify(newBookmarks));
      toast.success("Bookmark Added Successfully !", {
        position: toast.POSITION.TOP_CENTER
      });
    }

    setBookmarks(newBookmarks);
  };
  const clearBookmarksAndTime = ()=>{
    localStorage.removeItem("bookmarked-blogs")
    setBookmarks([])

        localStorage.removeItem("read-time")
    setReadTime(0)

    toast.success("Cleared Successfully !", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  return (
    <div className="App container ">
      <div>
        <Header></Header>
      </div>
      <div className="row">
        <div className="blogs-container col-md-8">
          <Blogs
            handleReadTime={handleReadTime}
            handleBookmarks={handleBookmarks}
          ></Blogs>
        </div>
        {/* <div className="bookmark-section col-md-4 card">  clearSpentTime={clearSpentTime}*/}
        <Bookmarks readTime={readTime} bookmarks={bookmarks}  clearBookmarksAndTime={clearBookmarksAndTime}></Bookmarks>
        {/* </div> */}
      </div>
      <ToastContainer></ToastContainer>
      <Blog></Blog>
    </div>
  );
}

export default App;
