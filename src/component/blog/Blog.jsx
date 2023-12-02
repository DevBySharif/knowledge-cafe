import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, bookmarkHandaler, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-2">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3>{author}</h3>
            <small>{posted_date}</small>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <small>{reading_time} min read</small>
          <button onClick={() => bookmarkHandaler(blog)}>
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>
        {hashtags.map((tag, idx) => (
          <span key={idx}>
            <a href="">#{tag}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-600 font-bold underline mt-3"
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  bookmarkHandaler: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
