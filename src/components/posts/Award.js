import React from "react";
import classes from "./Award.module.css";

const Award = ({ award_id, name, description }) => {
  let awardImageSrc = process.env.PUBLIC_URL + "/awards/";

  switch (award_id) {
    case 1:
      awardImageSrc += "magic-book.png";
      break;
    case 5:
      awardImageSrc += "wizard-hat.png";
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
    </div>
  );
};

export default Award;
