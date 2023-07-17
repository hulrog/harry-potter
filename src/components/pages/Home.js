import classes from "./Home.module.css";

function HomePage() {
  return (
    <div className={classes.homeContainer}>
      <h1> Home Page </h1>
      <p style={{ textAlign: "center" }}>Home text</p>
    </div>
  );
}

export default HomePage;
