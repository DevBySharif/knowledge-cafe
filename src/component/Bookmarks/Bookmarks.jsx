import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-3 bg-slate-200 rounded-lg">
      <div className="bg-purple-200 text-[#6047EC] border-2 border-[#6047EC] rounded-lg mb-2 p-3 ">
        <h3 className="text-4xl">Reading time : {readingTime}</h3>
      </div>
      <h1 className="text-xl">Bookmarks :{bookmarks.length}</h1>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
