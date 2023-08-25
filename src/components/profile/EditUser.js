import classes from "./EditUser.module.css";
import { useState } from "react"; // treba kad se poveze sa backom ubaciti i useEffect
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
//import axios from "axios";

function EditUser() {
  const userData = {
    firstName: "Petar",
    lastName: "Tomić",
    country: "Serbia",
    gender: "male",
    email: "petar99t@gmail.com",
    house: "ravenclaw",
    role: "admin",
    popularity: 2000,
    birthDate: "1999-11-06",
    memberSince: "2023-05-19",
    bio: "Co-creator of the website and master of the dark arts.",
  };

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [country, setCountry] = useState(userData.country);
  const [gender, setGender] = useState(userData.gender);
  const [birthDate, setBirthDate] = useState(userData.birthDate);
  const [email, setEmail] = useState(userData.email);
  const [bio, setBio] = useState(userData.bio);
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
        <table>
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
              <td className={classes.label}>Last Name:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </td>
              <td className={classes.label}>Birthday:</td>
              <td className={classes.value}>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
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
              <td className={classes.label}>Email:</td>
              <td className={classes.value}>
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.bio}>
          <p className={classes.bioTitle}>Bio</p>
          <textarea
            className={classes.bioText}
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          ></textarea>
        </div>
        <ButtonRow>
          <Button text="Save" type="submit" />
        </ButtonRow>
      </div>
    </form>
  );
}

export default EditUser;
