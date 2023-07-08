import React from "react";
import classes from "./Thumbnail.module.css";
import PostInfo from "./PostInfo";
import PostStats from "./PostStats";

function Thumbnail({ post }) {
  // skracuje prikaz na prvih 400 karaktera
  const truncatedContent =
    post.content.length > 400
      ? post.content.slice(0, 400) + "..."
      : post.content;

  //TODO prikazati i nagrade
  return (
    <div className={classes.thumbnailContainer}>
      <PostInfo post={post}></PostInfo>
      <div className={classes.contentSection}>
        <p className={classes.content}>{truncatedContent}</p>
      </div>
      <PostStats post={post}></PostStats>
    </div>
  );
}

export default Thumbnail;
