import classes from "./EditUser.module.css";
import { useEffect, useState } from "react";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
import { useParams } from "react-router-dom";

function EditUser({ refreshData }) {
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/getUserById/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const user = data;
        const transformedData = {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          username: user.username,
          country: user.country,
          gender: user.gender,
          email: user.email,
          house: user.house,
          role: user.role,
          popularity: user.popularity,
          birthDate: user.birth_date,
          memberSince: user.member_since,
          bio: user.bio,
        };

        setFirstName(transformedData.firstName);
        setLastName(transformedData.lastName);
        setCountry(transformedData.country);
        setGender(transformedData.gender);
        setBirthDate(transformedData.birthDate);
        setEmail(transformedData.email);
        setBio(transformedData.bio);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);

  const handleSubmit = () => {
    const requestData = {
      user_id: id,
      first_name: firstName,
      last_name: lastName,
      country: country,
      email: email,
      birth_date: birthDate,
      gender: gender,
      biography: bio,
    };

    console.log(requestData);

    fetch("http://127.0.0.1:8000/api/editUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        refreshData();
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div>
      <form>
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
        </div>
      </form>
      <ButtonRow>
        <Button text="Save" type="submit" onClick={handleSubmit} />
      </ButtonRow>
    </div>
  );
}

export default EditUser;
