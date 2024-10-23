import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title,authorImg,authorName,cover,readingTime,postDate,hasTag} = blog
    return (
        <div className='mb-20 space-y-2' >
            <img className='w-full mb-6 rounded-xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16 rounded-full h-16' src={authorImg} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl font-semibold'>{authorName}</h3>
                        <p>{postDate}</p>
                    </div>
                </div>
                <div>
                    <span>{readingTime} min read </span>
                    <button onClick={ ()=>handleAddToBookmark(blog)}><FaRegBookmark ></FaRegBookmark ></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p>
            {
                hasTag.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
            </p>

            <button onClick={()=>handleMarkAsRead(readingTime)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
        
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;