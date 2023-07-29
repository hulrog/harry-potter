import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
import Card from "../layout/Card";
import classes from "./Home.module.css";

function HomePage() {
  const handleHouseQuizClick = () => {
    window.location.href = "/house-quiz";
  };
  return (
    <div className={classes.homeContainer}>
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
