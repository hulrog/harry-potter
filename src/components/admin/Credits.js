import classes from "./Students.module.css";
import Card from "../layout/Card";

function Credits() {
  return (
    <Card>
      <div className={classes.creditsContainer}>
        <h3> Harry Potter - Fan Site Credits </h3>
        <p> Frontend developed by Petar Tomić in ReactJS </p>
        <p> Backend developed by Aleksandar Trifunović in Laravel PHP </p>
        <p> Database in MySQL</p>
        <p> Based on the Harry Potter books by J. K. Rowling </p>
        <a href="https://www.flaticon.com/free-icons/book" title="book icons">
          Award icons created by Freepik - Flaticon
        </a>
      </div>
    </Card>
  );
}

export default Credits;
