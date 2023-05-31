import classes from "./Hourglass.module.css";

function Hourglass({ points, house }) {
  const pointsScaled = Math.min(100, points / 100);

  const barStyle = {
    height: `${pointsScaled}%`,
    color: "#ffffff",
  };

  switch (house) {
    case "slytherin":
      barStyle.backgroundColor = "#1a472a";
      break;
    case "ravenclaw":
      barStyle.backgroundColor = "#222f5b";
      break;
    case "gryffindor":
      barStyle.backgroundColor = "#740001";
      break;
    case "hufflepuff":
      barStyle.backgroundColor = "#f0c75e";
      break;
    default:
  }
  return (
    <div className={classes.hourglassContainer}>
      <div className={classes.hourglass}>
        <div className={classes.bar} style={barStyle}>
          <p className={classes.points}>{points}</p>
        </div>
      </div>
    </div>
  );
}

export default Hourglass;
