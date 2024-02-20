// import React from "react";

// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

//     return(
//         <div className='blog-list'>
//             <h2>{title}</h2>
//             {blogs.map(blog => (
//             <div className='blog-preview' key={blog.id}>
//                 <h2>{blog.title}</h2>
//                 <p>Written by {blog.author}</p>
//             </div> 
//             ))}
//         </div>
//     );
// }

// export default BlogList;

import { Link } from "react-router-dom";
import React from "react";

const BlogList = ({blogs, title}) => {

return (
    <div>
        <h2>{title}</h2>
        {blogs.map((blog) => (
        <div className='preview' key={blog.id}>
            <Link to ={"Blog-details/${blog.id}"}>
            <h3>{blog.title}</h3>
            <p>Done by: {blog.author}</p>
            </Link>
    </div>
        ))}
    </div>
    );
}
export default BlogList;
