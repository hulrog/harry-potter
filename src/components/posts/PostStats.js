import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PostStats.module.css";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineComment,
  AiFillPushpin,
} from "react-icons/ai";
import { useAuth } from "../auth/AuthContext";

function PostStats({ post }) {
  const { currentUser } = useAuth();
  const currentUserId = currentUser.id;

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

  const callInteractionApi = (type) => {
    const requestData = {
      user_id: currentUserId,
      post_id: post.id,
      type: type,
    };
    console.log(requestData);

    fetch("http://127.0.0.1:8000/api/makeInteraction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleLike = () => {
    callInteractionApi("like");
    if (likeDislikeStatus === "liked") {
      setLikes(likes - 1);
      setLikeDislikeStatus("");
    } else if (likeDislikeStatus === "disliked") {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setLikeDislikeStatus("liked");
    } else {
      setLikes(likes + 1);
      setLikeDislikeStatus("liked");
    }
  };

  const handleDislike = () => {
    callInteractionApi("dislike");
    if (likeDislikeStatus === "disliked") {
      setDislikes(dislikes - 1);
      setLikeDislikeStatus("");
    } else if (likeDislikeStatus === "liked") {
      setDislikes(dislikes + 1);
      setLikes(likes - 1);
      setLikeDislikeStatus("disliked");
    } else {
      setDislikes(dislikes + 1);
      setLikeDislikeStatus("disliked");
    }
  };

  const handleComment = () => {
    navigate(`/post/${post.id}`);
  };

  // Handler za cuvanje posta
  const handleSave = () => {
    setSaved(!saved);
    callInteractionApi("save");
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
