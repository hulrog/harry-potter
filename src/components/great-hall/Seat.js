import classes from "./Seat.module.css";

function Seat({ student }) {
  const initials =
    student.firstName.charAt(0) + ". " + student.lastName.charAt(0) + ".";

  return (
    <div className={classes.seat}>
      <p>{initials}</p>
    </div>
  );
}

export default Seat;
