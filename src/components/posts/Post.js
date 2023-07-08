import { useParams } from "react-router-dom";
import classes from "./Post.module.css";

function Post() {
  // vadi id sa use params pa po tom id-ju ce naci post
  const { id } = useParams();

  // TODO poziv api za individualni post

  // TODO mockup jednog posta

  return (
    <div className={classes.postContainer}>
      <p>Post ID: {id}</p>
    </div>
  );
}

export default Post;
