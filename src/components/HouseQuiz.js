import classes from "./HouseQuiz.module.css";
import Button from "./layout/Button";
import ButtonRow from "./layout/ButtonRow";

function HouseQuiz() {
  return (
    <div className={classes.houseQuizContainer}>
      <ButtonRow>
        <Button text="Complete" type="submit" />
      </ButtonRow>
    </div>
  );
}

export default HouseQuiz;
