import { useState } from "react";
import classes from "./Login.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

// TODO da li je user ili student, admin ili professor u role?
function LoginPage() {
  const { setAuthenticated, setCurrentUser } = useAuth();
  const navigate = useNavigate();

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

    console.log("formdata sa login.js: ");
    console.log(formData);
    // Simulacija
    let user = {
      username: formData.username,
      password: formData.password,
      role: "admin",
      house: "gryffindor",
      id: 10,
      firstName: "TestFirstName",
      lastName: "TestLastNase",
    };
    // TODO ovde treba api call
    // cekanja i neki loader dok ne prodje, i onda
    // setovanje authenticated usera na to sto vrati login
    // a vratice ceo objekat user
    setAuthenticated(true);
    setCurrentUser(user);
    navigate(`/`);
  };

  const handleRegisterClick = () => {
    navigate(`/register`);
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
                  value={formData.password}
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
