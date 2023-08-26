import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
import Card from "../layout/Card";
import classes from "./Home.module.css";
import House from "../house-quiz/House";

function HomePage() {
  const navigate = useNavigate();
  const [displayedHouse, setDisplayedHouse] = useState(null);

  const handleHouseQuizClick = () => {
    navigate("/house-quiz");
  };

  const handleHouseCrestClick = (house) => {
    setDisplayedHouse(house);
  };

  return (
    <div className={classes.homeContainer}>
      <div className={classes.crestContainer}>
        <img
          src={process.env.PUBLIC_URL + "sigils/house_slytherin.png"}
          alt="slytherin"
          onClick={() => handleHouseCrestClick("slytherin")}
          className={
            displayedHouse === "slytherin" ? classes.selectedCrest : ""
          }
        />
        <img
          src={process.env.PUBLIC_URL + "sigils/house_ravenclaw.png"}
          alt="ravenclaw"
          onClick={() => handleHouseCrestClick("ravenclaw")}
          className={
            displayedHouse === "ravenclaw" ? classes.selectedCrest : ""
          }
        />
        <img
          src={process.env.PUBLIC_URL + "sigils/house_gryffindor.png"}
          alt="gryffindor"
          onClick={() => handleHouseCrestClick("gryffindor")}
          className={
            displayedHouse === "gryffindor" ? classes.selectedCrest : ""
          }
        />
        <img
          src={process.env.PUBLIC_URL + "sigils/house_hufflepuff.png"}
          alt="hufflepuff"
          onClick={() => handleHouseCrestClick("hufflepuff")}
          className={
            displayedHouse === "hufflepuff" ? classes.selectedCrest : ""
          }
        />
      </div>
      {displayedHouse && <House house={displayedHouse} />}
      <Card>
        <ButtonRow>
          <Button
            type="submit"
            text="House Quiz"
            onClick={handleHouseQuizClick}
          />
        </ButtonRow>
      </Card>
    </div>
  );
}

export default HomePage;
