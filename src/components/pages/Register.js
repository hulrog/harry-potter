import { useState } from "react";
import classes from "./Register.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
import { AiOutlineUser, AiOutlineTool } from "react-icons/ai";
// TODO da li je user ili student, admin ili professor u role?
function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    country: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    role: "",
    bio: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRoleClick = (role) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      role: role,
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

    // Dodavanje datuma i default kuce   na objekat
    const currentDate = new Date().toISOString().split("T")[0];
    const updatedFormData = {
      ...formData,
      house: "hogwarts",
      memberSince: currentDate,
    };

    console.log(updatedFormData);
    // TODO: i pozvati api za registraciju
    // callRegisterAPI(updatedFormData)
    //   .then((response) => {
    //   })
    //   .catch((error) => {
    //   });

    window.location.href = `/`;
  };

  const handleLogInClick = () => {
    window.location.href = `/login`;
  };

  return (
    <div className={classes.registerContainer}>
      <form onSubmit={handleSubmit} className={classes.registerForm}>
        <h1 className={classes.heading}>Register</h1>
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
              <td className={classes.label}>Country:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className={classes.label}>E-mail:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
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
            <tr>
              <td className={classes.label}>First Name:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </td>
              <td className={classes.label}>Last Name:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className={classes.label}>Gender:</td>
              <td className={classes.value}>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </td>
              <td className={classes.label}>Birth Date:</td>
              <td className={classes.value}>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.rolesRow}>
          <div
            className={`${classes.roleContainer} ${
              formData.role === "user" ? classes.activeRole : ""
            }`}
            onClick={() => handleRoleClick("user")}
          >
            <AiOutlineUser />
            <span>User</span>
          </div>
          <div
            className={`${classes.roleContainer} ${
              formData.role === "admin" ? classes.activeRole : ""
            }`}
            onClick={() => handleRoleClick("admin")}
          >
            <AiOutlineTool />
            <span>Admin</span>
          </div>
        </div>
        <div className={classes.bio}>
          <p className={classes.bioTitle}>Bio</p>
          <textarea
            className={classes.bioText}
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        <ButtonRow>
          <Button text="Register" type="submit" />
        </ButtonRow>
        <p className={classes.logInOption}>
          Already have an account?
          <span className={classes.logInLink} onClick={handleLogInClick}>
            Log In.
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

export default RegisterPage;
