import classes from "./User.module.css";

function User() {
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

  var houseImage = "sigils/house_unknown.png";
  var houseName = userData.house;

  // ovo mozda i nece trebati ako stavimo velika slova
  switch (houseName) {
    case "gryffindor":
      houseName = "Gryffindor";
      houseImage = "sigils/house_gryffindor.png";
      break;
    case "slytherin":
      houseName = "Slytherin";
      houseImage = "sigils/house_slytherin.png";
      break;
    case "hufflepuff":
      houseName = "Hufflepuff";
      houseImage = "sigils/house_hufflepuff.png";
      break;
    case "ravenclaw":
      houseName = "Ravenclaw";
      houseImage = "sigils/house_ravenclaw.png";
      break;
    default:
  }
  return (
    <div className={classes.container}>
      <h1>User Profile</h1>
      <div className={classes.data}>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td className={classes.label}>First Name:</td>
              <td className={classes.value}>{userData.firstName}</td>
            </tr>
            <tr>
              <td className={classes.label}>Last Name:</td>
              <td className={classes.value}>{userData.lastName}</td>
            </tr>
            <tr>
              <td className={classes.label}>Country:</td>
              <td className={classes.value}>{userData.country}</td>
            </tr>
            <tr>
              <td className={classes.label}>Gender:</td>
              <td className={classes.value}>{userData.gender}</td>
            </tr>
            <tr>
              <td className={classes.label}>Birthday:</td>
              <td className={classes.value}>{userData.birthDate}</td>
            </tr>
            <tr>
              <td className={classes.label}>Date Joined:</td>
              <td className={classes.value}>{userData.memberSince}</td>
            </tr>
            <tr>
              <td className={classes.label}>Email:</td>
              <td className={classes.value}>{userData.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={classes.sigil}>
        <img src={houseImage} alt="House sigil" />
        <p> House {houseName}</p>
      </div>
      <div className={classes.bio}>
        <p className={classes.bioTitle}> Bio </p>
        <p className={classes.bioText}> {userData.bio}</p>
      </div>
    </div>
  );
}

export default User;
