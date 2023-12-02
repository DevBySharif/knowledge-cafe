import { useState } from "react";
import "./App.css";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Blogs from "./component/blogs/Blogs";
import Header from "./component/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const bookmarkHandaler = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remaingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaingBookmarks);
  };

  return (
    <>
      <Header />
      <div className="lg:flex md:flex max-w-7xl mx-auto">
        <Blogs
          bookmarkHandaler={bookmarkHandaler}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
