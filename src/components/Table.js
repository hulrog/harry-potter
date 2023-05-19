import classes from "./Table.module.css";

function Table({ students }) {
  const sortedStudents = [...students].sort(
    (a, b) => b.popularity - a.popularity
  );

  return (
    <div>
      <div className={classes.table}>
        {sortedStudents.map((student, index) => (
          <div key={index} className={classes.student}>
            <span>
              {student.firstName} {student.lastName}
            </span>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}

export default Table;
