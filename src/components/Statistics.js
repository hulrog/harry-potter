import classes from "./User.module.css";

function Statistics() {
  const firstName = "Harry";
  const lastName = "Potter";
  const country = "United Kingdom";
  const gender = "Male";
  const houseId = 1;
  const dateJoined = "March 13, 2023";
  const birthday = "July 1, 1980";
  const email = "harry.potter@example.com";
  const bioText = "He is very transphobic.";

  var houseImage = "sigils/house_unknown.png";
  var houseName = "Unkown";

  switch (houseId) {
    case 1:
      houseName = "Gryffindor";
      houseImage = "sigils/house_gryffindor.png";
      break;
    case 2:
      houseName = "Slytherin";
      houseImage = "sigils/house_slytherin.png";
      break;
    case 3:
      houseName = "Hufflepuff";
      houseImage = "sigils/house_hufflepuff.png";
      break;
    case 4:
      houseName = "Ravenclaw";
      houseImage = "sigils/house_ravenclaw.png";
      break;
    default:
  }
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>User Profile</h1>
      <div className={classes.data}>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td className={classes.label}>First Name:</td>
              <td className={classes.value}>{firstName}</td>
            </tr>
            <tr>
              <td className={classes.label}>Last Name:</td>
              <td className={classes.value}>{lastName}</td>
            </tr>
            <tr>
              <td className={classes.label}>Country:</td>
              <td className={classes.value}>{country}</td>
            </tr>
            <tr>
              <td className={classes.label}>Gender:</td>
              <td className={classes.value}>{gender}</td>
            </tr>
            <tr>
              <td className={classes.label}>Birthday:</td>
              <td className={classes.value}>{birthday}</td>
            </tr>
            <tr>
              <td className={classes.label}>Date Joined:</td>
              <td className={classes.value}>{dateJoined}</td>
            </tr>
            <tr>
              <td className={classes.label}>Email:</td>
              <td className={classes.value}>{email}</td>
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
        <p className={classes.bioText}> {bioText}</p>
      </div>
    </div>
  );
}

export default Statistics;
