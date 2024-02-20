import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blogs} = useFetch('http://localhost:3000/blogs' + id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete('http://localhost:3000/blogs' + id)
        .then(res => {
            alert("blog deleted");
            history.push('/');
        }   )
    };

    return(
        <div className="details">

            {blogs && (
                <article>
                    <h3>{blogs.title}</h3>
                    <p>Done by: {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete} variant="danger" className="mt-3" type="submit">Delete Blog</button>
                </article>
            )
            }

        </div>
    );
};

export default BlogDetails;
