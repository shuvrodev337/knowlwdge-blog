import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

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
    } else {
      for (const exisTingBookmark of existingBookmarks) {
        if (exisTingBookmark.id === id) {
          alert("alrady exists");
          return;
        }
      }
      bookmark.id = id;
      bookmark.title = title;
      newBookmarks = [...bookmarks, bookmark];
      localStorage.setItem("bookmarked-blogs", JSON.stringify(newBookmarks));
    }

    setBookmarks(newBookmarks);
  };

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
        {/* <div className="bookmark-section col-md-4 card"> */}
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
