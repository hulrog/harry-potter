import { useState } from "react";
import classes from "./HouseQuiz.module.css";
import Button from "./layout/Button";
import ButtonRow from "./layout/ButtonRow";

function HouseQuiz() {
  const [selectedHouse, setSelectedHouse] = useState("");

  const handleHouseSelection = (house) => {
    setSelectedHouse(house);
    console.log(selectedHouse);
  };

  return (
    <div className={classes.houseQuizContainer}>
      <h2>Which house do you belong to?</h2>
      <ButtonRow>
        <Button
          text="Gryffindor"
          type="submit"
          onClick={() => handleHouseSelection("gryffindor")}
        />
        <Button
          text="Ravenclaw"
          type="submit"
          onClick={() => handleHouseSelection("ravenclaw")}
        />
        <Button
          text="Hufflepuff"
          type="submit"
          onClick={() => handleHouseSelection("hufflepuff")}
        />
        <Button
          text="Slytherin"
          type="submit"
          onClick={() => handleHouseSelection("slytherin")}
        />
      </ButtonRow>
      <ButtonRow>
        <Button text="Complete" type="submit" />
      </ButtonRow>
    </div>
  );
}

export default HouseQuiz;
