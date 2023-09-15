import Seat from "./Seat";
import classes from "./Bench.module.css";

function Bench(props) {
  const students = props.students;

  const seats = students.map((student, index) => (
    <Seat key={index} student={student} />
  ));

  return <div className={classes.benchContainer}>{seats}</div>;
}

export default Bench;
