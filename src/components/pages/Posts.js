import classes from "./Posts.module.css";
import Feed from "../posts/Feed";
import Sidebar from "../posts/Sidebar";
import { useState } from "react";

function PostsPage() {
  // selectedCategory je potrebno u Feed-u a samo setovanje je potrebno u TagCloud-u
  // a da dodje do njega mora preko Sidebara, zato je saljemo njemu
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className={classes.postsContainer}>
      <Feed selectedCategory={selectedCategory}></Feed>
      <Sidebar onCategorySelect={setSelectedCategory}></Sidebar>
    </div>
  );
}

export default PostsPage;
