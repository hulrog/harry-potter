import React from "react";
import classes from "./Button.module.css";

function Button({ text, type, onClick }) {
  const buttonClasses = `${classes.button} ${classes[type] || ""}`;

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
