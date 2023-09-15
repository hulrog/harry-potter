import classes from "./User.module.css";

function User({ userData }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const houseName = capitalizeFirstLetter(userData.house);
  const houseSigil = `/sigils/house_${userData.house}.png`;

  return (
    <div className={classes.container}>
      <h1>User Profile</h1>

      {userData.username !== "0" ? (
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
      ) : (
        <div className={classes.bannedMessage}>
          <p>This user has been banned.</p>
        </div>
      )}

      {userData.username !== "0" && (
        <div className={classes.sigil}>
          <img src={process.env.PUBLIC_URL + houseSigil} alt="House sigil" />
          <p> House {houseName}</p>
        </div>
      )}

      {userData.username !== "0" && (
        <div className={classes.bio}>
          <p className={classes.bioTitle}> Bio </p>
          <p className={classes.bioText}> {userData.bio}</p>
        </div>
      )}
    </div>
  );
}

export default User;
