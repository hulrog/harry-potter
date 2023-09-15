import Bench from "./Bench";
import Hourglass from "./Hourglass";
import classes from "./Table.module.css";

function Table(props) {
  const sortedStudents = [...props.students]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 20); // samo top 20
  const leftStudents = sortedStudents.filter((_, index) => index % 2 === 0);
  const rightStudents = sortedStudents.filter((_, index) => index % 2 !== 0);

  let housePoints = 0;
  for (const student of props.students) {
    housePoints += student.popularity;
  }

  let house = "hogwarts";
  if (props.students.length !== 0) {
    house = props.students[0].house;
  }

  return (
    <div className={classes.tableAndPointsContainer}>
      <div className={classes.tableContainer}>
        <Bench side="left" students={leftStudents} />
        <div className={classes.table}> </div>
        <Bench side="right" students={rightStudents} />
      </div>
      <div className={classes.pointsContainer}>
        <Hourglass
          points={housePoints}
          house={house}
          totalPoints={props.totalPoints}
        />
      </div>
    </div>
  );
}

export default Table;
