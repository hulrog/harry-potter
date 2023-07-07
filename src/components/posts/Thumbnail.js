import React, { useEffect, useState } from "react";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineComment,
  AiFillPushpin,
} from "react-icons/ai";
import classes from "./Thumbnail.module.css";

function Thumbnail({ post }) {
  // TODO ovo je za slucaj ako se house vrati malim slovima, proveriti
  useEffect(() => {
    const path = "/sigils/house_" + post.house + ".png";
    setHouseSigilPath(path);
  }, [post.house]);

  //Path do slike
  const [houseSigilPath, setHouseSigilPath] = useState("");
  // Lajkovi i dislajkovi sa thumbnail-a
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  // Moze biti liked i disliked
  const [likeDislikeStatus, setLikeDislikeStatus] = useState("");
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    if (likeDislikeStatus === "liked") {
      setLikes(likes - 1);
      setLikeDislikeStatus("");
      // TODO unlike api
    } else if (likeDislikeStatus === "disliked") {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setLikeDislikeStatus("liked");
      // TODO like api
      // TODO undislike api
    } else {
      setLikes(likes + 1);
      setLikeDislikeStatus("liked");
      // TODO like api
    }
  };

  const handleDislike = () => {
    if (likeDislikeStatus === "disliked") {
      setDislikes(dislikes - 1);
      setLikeDislikeStatus("");
      // TODO undislike api
    } else if (likeDislikeStatus === "liked") {
      setDislikes(dislikes + 1);
      setLikes(likes - 1);
      setLikeDislikeStatus("disliked");
      // TODO dislike api
      // TODO unlike api
    } else {
      setDislikes(dislikes + 1);
      setLikeDislikeStatus("disliked");
      // TODO dislike api
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  // skracuje prikaz na prvih 400 karaktera
  const truncatedContent =
    post.content.length > 400
      ? post.content.slice(0, 400) + "..."
      : post.content;

  //TODO prikazati i nagrade
  return (
    <div className={classes.thumbnailContainer}>
      <div className={classes.categoryAwardsSection}>
        <span className={classes.category}>{post.category}</span>
      </div>
      <div className={classes.titleUserSection}>
        <span className={classes.title}>{post.title}</span>
        <span className={classes.user}>
          by {post.user}
          <img
            src={process.env.PUBLIC_URL + houseSigilPath}
            alt="House sigil"
          />
        </span>
      </div>
      <div className={classes.contentSection}>
        <p className={classes.content}>{truncatedContent}</p>
      </div>
      <div className={classes.statsSection}>
        <span
          className={`${classes.likes} ${
            likeDislikeStatus === "liked" && classes.liked
          }`}
          onClick={handleLike}
        >
          <AiFillLike className={classes.icon} />
          <span className={classes.number}>{likes}</span>
        </span>
        <span
          className={`${classes.dislikes} ${
            likeDislikeStatus === "disliked" && classes.disliked
          }`}
          onClick={handleDislike}
        >
          <AiFillDislike className={classes.icon} />
          <span className={classes.number}>{dislikes}</span>
        </span>
        <span className={classes.comments}>
          <AiOutlineComment className={classes.icon} />
          <span className={classes.number}>{post.comments.length}</span>
        </span>
        <span
          className={`${classes.save} ${saved && classes.saved}`}
          onClick={handleSave}
        >
          <AiFillPushpin className={classes.icon} />
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
