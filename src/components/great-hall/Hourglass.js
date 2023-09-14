import classes from "./Hourglass.module.css";

function Hourglass({ totalPoints, points, house }) {
  const pointsScaled = Math.min(1, points / totalPoints);

  const barStyle = {
    height: `${pointsScaled * 100}%`,
    color: "#ffffff",
  };

  const computedStyle = getComputedStyle(document.documentElement);
  switch (house) {
    case "slytherin":
      barStyle.backgroundColor = computedStyle.getPropertyValue(
        "--slytherin-background-color"
      );
      break;
    case "ravenclaw":
      barStyle.backgroundColor = computedStyle.getPropertyValue(
        "--ravenclaw-background-color"
      );
      break;
    case "gryffindor":
      barStyle.backgroundColor = computedStyle.getPropertyValue(
        "--gryffindor-background-color"
      );
      break;
    case "hufflepuff":
      barStyle.backgroundColor = computedStyle.getPropertyValue(
        "--hufflepuff-background-color"
      );
      break;
    default:
      break;
  }

  return (
    <div className={classes.hourglassContainer}>
      <div className={classes.horizontalEdge}></div>
      <div className={classes.hourglass}>
        <div className={classes.bar} style={barStyle}>
          <p className={classes.points}>{points}</p>
        </div>
      </div>
      <div className={classes.horizontalEdge}></div>
    </div>
  );
}

export default Hourglass;
