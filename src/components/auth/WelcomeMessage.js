import React from "react";
import { useAuth } from "./AuthContext";
import classes from "./WelcomeMessage.module.css";

function WelcomeMessage() {
  const { currentUser } = useAuth();

  const getTitle = (gender) => {
    switch (gender) {
      case "male":
        return "Mr.";
      case "female":
        return "Mrs.";
      default:
        return "Esteemed";
    }
  };

  // Get the title based on the gender
  const title = getTitle(currentUser.gender);

  return (
    <div className={classes.welcomeMessageContainer}>
      <p>
        Welcome {title} {currentUser.last_name}
      </p>
      <p>To Hogwarts School of Witchcraft and Wizardry!</p>
    </div>
  );
}

export default WelcomeMessage;
