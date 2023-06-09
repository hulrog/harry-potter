import { useEffect, useState } from "react";
import classes from "./PostInfo.module.css";
import { useNavigate } from "react-router-dom";

function PostInfo({ post }) {
  // Za odlazak na stranicu post-a
  const navigate = useNavigate();

  // TODO ovo je za slucaj ako se house vrati malim slovima, proveriti
  useEffect(() => {
    const path = "/sigils/house_" + post.house + ".png";
    setHouseSigilPath(path);
  }, [post.house]);

  // Handler za klik na naslov da otvori post
  const handleTitleClick = () => {
    navigate(`/post/${post.id}`);
  };

  // Handler za klik na ime - vodi na profil tog korisnika
  const handleUserProfileClick = () => {
    const userId = post.user_id;
    window.location.href = `/profile/${userId}`;
  };
  //Path do slike
  const [houseSigilPath, setHouseSigilPath] = useState("");

  return (
    <div className={classes.postInfoContainer}>
      <div className={classes.categoryAwardsDateSection}>
        <span className={classes.category}>{post.category}</span>
        <span className={classes.dateTime}>
          {post.date} at {post.time}
        </span>
      </div>
      <div className={classes.titleUserSection}>
        <span className={classes.title} onClick={handleTitleClick}>
          {post.title}
        </span>
        <div className={classes.user} onClick={() => handleUserProfileClick()}>
          <span>by {post.user}</span>
          <img
            src={process.env.PUBLIC_URL + houseSigilPath}
            alt="House sigil"
          />
        </div>
      </div>
    </div>
  );
}

export default PostInfo;
