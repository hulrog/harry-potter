import classes from "./GreatHall.module.css";
import Floor from "../great-hall/Floor";
import HighTable from "../great-hall/HighTable";

function GreatHallPage() {
  return (
    <div className={classes.greatHallContainer}>
      <HighTable></HighTable>
      <Floor></Floor>
    </div>
  );
}

export default GreatHallPage;
