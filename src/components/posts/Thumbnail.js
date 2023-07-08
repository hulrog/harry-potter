import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Thumbnail.module.css";
import PostInfo from "./PostInfo";
import PostStats from "./PostStats";

function Thumbnail({ post }) {
  const navigate = useNavigate();

  // skracuje prikaz na prvih 400 karaktera
  const truncatedContent =
    post.content.length > 400
      ? post.content.slice(0, 400) + "..."
      : post.content;

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  //TODO prikazati i nagrade
  return (
    <div className={classes.thumbnailContainer}>
      <PostInfo post={post}></PostInfo>
      <div className={classes.contentSection}>
        <p className={classes.content} onClick={handleClick}>
          {truncatedContent}
        </p>
      </div>
      <PostStats post={post}></PostStats>
    </div>
  );
}

export default Thumbnail;
