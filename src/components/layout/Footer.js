import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.title}>
        College Project <br></br>
        Internet Technologies, Department of E-business, Faculty of
        Organizational Sciences, University of Belgrade
      </p>
      <p>
        Names and places by the Author J.K Rowling. Fair use for educational and
        learning purposes only.
      </p>
    </footer>
  );
}

export default Footer;
