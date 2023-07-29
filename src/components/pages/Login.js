import { useState } from "react";
import classes from "./Login.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
// TODO da li je user ili student, admin ili professor u role?
function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacija forme
    setFormIsValid(true);
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (!isFormValid) {
      setFormIsValid(false);
      return;
    }

    // TODO: i pozvati api za registraciju
    console.log(formData);
    window.location.href = `/`;
  };

  const handleRegisterClick = () => {
    window.location.href = `/register`;
  };

  return (
    <div className={classes.loginContainer}>
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <h1 className={classes.heading}>Login</h1>
        <table>
          <tbody>
            <tr>
              <td className={classes.label}>Username:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className={classes.label}>Password:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  name="password"
                  value={formData.country}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <ButtonRow>
          <Button text="Log In" type="submit" />
        </ButtonRow>
        <p className={classes.registerOption}>
          Don't have an account?
          <span className={classes.registerLink} onClick={handleRegisterClick}>
            Register.
          </span>
        </p>
        {!formIsValid && (
          <p className={classes.formValidationMessage}>
            Please fill in all the fields, then try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
