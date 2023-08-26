import React from "react";
import classes from "./Award.module.css";

const Award = ({ award_id, amount, description, name }) => {
  let awardImageSrc = process.env.PUBLIC_URL + "/awards/";

  switch (award_id) {
    case 1:
      awardImageSrc += "magic-book.png";
      break;
    case 2:
      awardImageSrc += "lightbulb-book.png";
      break;
    case 3:
      awardImageSrc += "inkwell.png";
      break;
    case 4:
      awardImageSrc += "chat.png";
      break;
    case 5:
      awardImageSrc += "wizard-hat.png";
      break;
    case 6:
      awardImageSrc += "gold-medal.png";
      break;
    default:
      awardImageSrc += "default-image-path";
  }

  return (
    <div className={classes.awardContainer}>
      <img
        src={awardImageSrc}
        alt={`Award ${award_id}`}
        title={`${name}\n${description}`}
      />
      {amount !== 1 && <span className={classes.amount}>{amount}</span>}
    </div>
  );
};

export default Award;
