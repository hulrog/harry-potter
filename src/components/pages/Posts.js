import classes from "./Posts.module.css";
import Feed from "../posts/Feed";
import Sidebar from "../posts/Sidebar";

function PostsPage() {
  return (
    <div className={classes.postsContainer}>
      <Feed></Feed>
      <Sidebar></Sidebar>
    </div>
  );
}

export default PostsPage;
