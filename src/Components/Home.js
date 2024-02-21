import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogList from './BlogList';

const Blog = () => {
  const [data, setData] = useState([]);
  

    useEffect(() => {
        axios.get('http://localhost:4000/blogs')
        .then(res =>
          {setData(res.data)})
          .catch(err => {
          console.error("Error!", err);
            })
      }, [])



  


    return (
        <div className = 'home'>
          {
            data.length > 0 ? <BlogList blogs = {data}/> : <p>Loading...</p>
          }
          
        
        </div>
      
    
  )
}

export default Blog;