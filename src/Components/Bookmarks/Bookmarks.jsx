import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-3 pt-4">
            <div className="bg-purple-300 p-4 m-4 rounded-xl border-2 border-purple-900">
                <h3 className="text-2xl text-center">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center font-semibold ">Bookmarked Blogs : {bookMarks.length}</h2>
            {
                bookMarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;


