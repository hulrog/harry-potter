import Bench from "./Bench";
import classes from "./Table.module.css";

function Table(props) {
  const sortedStudents = [...props.students]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 20); // samo top 20
  const leftStudents = sortedStudents.filter((_, index) => index % 2 === 0);
  const rightStudents = sortedStudents.filter((_, index) => index % 2 !== 0);

  return (
    <div className={classes.tableContainer}>
      <Bench side="left" students={leftStudents} />
      <div className={classes.table}> </div>
      <Bench side="right" students={rightStudents} />
    </div>
  );
}

export default Table;
