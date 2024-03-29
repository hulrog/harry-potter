import { useEffect, useState } from "react";
import classes from "./PostInfo.module.css";
import { useNavigate } from "react-router-dom";
import Award from "./Award";

function PostInfo({ post }) {
  // Za odlazak na stranicu post-a
  const navigate = useNavigate();

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
    navigate(`/profile/${userId}`);
  };
  //Path do slike
  const [houseSigilPath, setHouseSigilPath] = useState("");

  return (
    <div className={classes.postInfoContainer}>
      <div className={classes.categoryAwardsDateSection}>
        <span className={classes.category}>{post.category}</span>
        <span className={classes.awardList}>
          {post.awards.map(
            (award) =>
              award.amount > 0 && (
                <Award
                  key={award.id}
                  award_id={award.id}
                  description={award.description}
                  name={award.name}
                  amount={award.amount}
                />
              )
          )}
        </span>
        <span className={classes.dateTime}>
          {post.date} at {post.time}
        </span>
      </div>
      <div className={classes.titleUserSection}>
        <span className={classes.title} onClick={handleTitleClick}>
          {post.title}
        </span>
        <div className={classes.user} onClick={() => handleUserProfileClick()}>
          <span>
            by{" "}
            {post.user.includes("(0)") ? "[deleted]" : <span>{post.user}</span>}
          </span>
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
