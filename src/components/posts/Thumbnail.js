import React from "react";
import { AiFillLike, AiFillDislike, AiOutlineComment } from "react-icons/ai";
import classes from "./Thumbnail.module.css";

function Thumbnail({ post }) {
  // skracuje prikaz na prvih 400 karaktera
  const truncatedContent =
    post.content.length > 400
      ? post.content.slice(0, 400) + "..."
      : post.content;

  return (
    <div className={classes.thumbnailContainer}>
      <div className={classes.titleUserSection}>
        <span className={classes.title}>{post.title}</span>
        <span className={classes.user}>by {post.user}</span>
      </div>
      <div className={classes.contentSection}>
        <p className={classes.content}>{truncatedContent}</p>
      </div>
      <div className={classes.statsSection}>
        <span className={classes.likes}>
          <AiFillLike className={classes.icon} />
          <span className={classes.number}>{post.likes}</span>
        </span>
        <span className={classes.dislikes}>
          <AiFillDislike className={classes.icon} />
          <span className={classes.number}>{post.dislikes}</span>
        </span>
        <span className={classes.comments}>
          <AiOutlineComment className={classes.icon} />
          <span className={classes.number}>{post.comments.length}</span>
        </span>
      </div>
      <div className={classes.dateTimeSection}>
        <span className={classes.dateTime}>
          {post.date} at {post.time}
        </span>
      </div>
    </div>
  );
}

export default Thumbnail;
