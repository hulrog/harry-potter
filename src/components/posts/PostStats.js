import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PostStats.module.css";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineComment,
  AiFillPushpin,
} from "react-icons/ai";

function PostStats({ post }) {
  // Za odlazak na stranicu post-a
  const navigate = useNavigate();

  // Lajkovi i dislajkovi
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  // Moze biti liked i disliked
  const [likeDislikeStatus, setLikeDislikeStatus] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (post.liked) setLikeDislikeStatus("liked");
    if (post.disliked) setLikeDislikeStatus("disliked");
    if (post.saved) setSaved(true);
  }, [post.liked, post.disliked, post.saved]);

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

  const handleComment = () => {
    navigate(`/post/${post.id}`);
  };

  // Handler za cuvanje posta
  const handleSave = () => {
    setSaved(!saved);
    // TODO save api
  };

  return (
    <div className={classes.postStatsContainer}>
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
      <span className={classes.comments} onClick={handleComment}>
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
  );
}

export default PostStats;
