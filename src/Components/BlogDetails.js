import { useParams  } from "react-router-dom";
import React from "react";
import  useFetch  from "./useFetch";
import  {Button}  from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
    const {id} = useParams()
    const blog = useFetch('http://localhost:4000/blogs/'+ id);
    const history = useHistory();

    const handleDelete = (e) =>{
        e.preventDefault()

        axios.delete('http://localhost:4000/blogs/'+ id)
        .then(res =>{
            alert("blog deleted");
            history.push('/');
        })
    }

    return(
        <div className="details">

            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Done by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <Button onClick={handleDelete} variant="danger" className="mt-3" type="submit">Delete Blog</Button>
                </article>
            )
            }
        </div>
    );
}

export default BlogDetails;
