import Seat from "./Seat";

function Bench(props) {
  const students = props.students;

  const seats = students.map((student, index) => (
    <Seat key={index} student={student} />
  ));

  return <div>{seats}</div>;
}

export default Bench;
