import { useNavigate } from "react-router-dom";
import classes from "./Seat.module.css";

function Seat({ student }) {
  const initials =
    student.firstName.charAt(0) + ". " + student.lastName.charAt(0) + ".";
  const info = `${student.firstName} ${student.lastName} | ${student.country}
    ${student.email}
    
    Birthday: ${student.birthDate}
    Joined: ${student.memberSince}
    ${student.bio}
    Popularity: ${student.popularity}`;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${student.id}`);
  };

  return (
    <div
      className={`${classes.seat} ${classes[student.house]}`}
      data-info={info}
      onClick={handleClick}
    >
      <p>{initials}</p>
    </div>
  );
}

export default Seat;
