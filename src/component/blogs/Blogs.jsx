import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ bookmarkHandaler, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="lg:w-2/3 md:w-2/3">
      <h1 className="text-4xl ">Blogs</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          bookmarkHandaler={bookmarkHandaler}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.protoType = {
  bookmarkHandaler: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
