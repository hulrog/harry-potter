import { useState } from "react";
import classes from "./Login.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

// TODO da li je user ili student, admin ili professor u role?
function LoginPage() {
  const { setAuthenticated, setCurrentUser } = useAuth();
  const [invalidCredentials, setInvalidCredentials] = useState(false);
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
    setInvalidCredentials(false);

    // Validacija forme
    setFormIsValid(true);
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (!isFormValid) {
      setFormIsValid(false);
      return;
    }

    fetch("http://127.0.0.1:8000/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 401) {
          setInvalidCredentials(true);
          throw new Error("Unauthorized");
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const user = data.data;
        setAuthenticated(true);
        setCurrentUser(user);
        navigate(`/`);
      })
      .catch((error) => {
        if (error.message !== "Unauthorized") {
          console.error("There was a problem with the fetch operation:", error);
          // Handle other errors or show a user-friendly error message here
        }
      });
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
        {invalidCredentials && (
          <p className={classes.formValidationMessage}>Invalid credentials.</p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
