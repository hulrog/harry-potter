import classes from "./EditUser.module.css";
import { useState } from "react"; // treba kad se poveze sa backom ubaciti i useEffect
//import axios from "axios";

function EditUser() {
  const [firstName, setFirstName] = useState("Harry");
  const [lastName, setLastName] = useState("Potter");
  const [country, setCountry] = useState("UK");
  const [gender, setGender] = useState("male");
  const [birthday, setBirthday] = useState("01/07/1980");
  const [email, setEmail] = useState("harry.potter@gmail.com");
  const [bioText, setBioText] = useState("He is a transphobe.");
  // useEffect(() => {
  //   // Fetch user data from backend
  //   axios
  //     .get("/api/user")
  //     .then((response) => {
  //       const {
  //         firstName,
  //         lastName,
  //         country,
  //         gender,
  //         birthday,
  //         email,
  //         bioText,
  //       } = response.data;
  //       setFirstName(firstName);
  //       setLastName(lastName);
  //       setCountry(country);
  //       setGender(gender);
  //       setBirthday(birthday);
  //       setEmail(email);
  //       setBioText(bioText);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Update user data on backend
  //   axios
  //     .put("/api/user", {
  //       firstName,
  //       lastName,
  //       country,
  //       gender,
  //       birthday,
  //       email,
  //       bioText,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <form /*onSubmit={handleSubmit*/>
      <div className={classes.container}>
        <h1 className={classes.heading}>Edit Profile</h1>
        <div className={classes.data}>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td className={classes.label}>First Name:</td>
                <td className={classes.value}>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={classes.label}>Last Name:</td>
                <td className={classes.value}>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={classes.label}>Country:</td>
                <td className={classes.value}>
                  <input
                    type="text"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={classes.label}>Gender:</td>
                <td className={classes.value}>
                  <select
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className={classes.label}>Birthday:</td>
                <td className={classes.value}>
                  <input
                    type="date"
                    value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={classes.label}>Email:</td>
                <td className={classes.value}>
                  <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={classes.label}>Bio Text:</td>
                <td className={classes.value}>
                  <input
                    type="text"
                    value={bioText}
                    onChange={(event) => setBioText(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <button type="submit">Save Changes</button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}

export default EditUser;
