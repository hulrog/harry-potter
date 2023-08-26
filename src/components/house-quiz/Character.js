import React from "react";
import classes from "./Character.module.css";

function Character({ character }) {
  return (
    <div className={classes.characterContainer}>
      <div className={classes.characterLeft}>
        {character.image ? (
          <img
            src={character.image}
            alt={character.name}
            className={classes.characterImage}
          />
        ) : (
          <img
            src={
              process.env.PUBLIC_URL + `/sigils/house_${character.house}.png`
            }
            alt="house"
            className={classes.characterImage}
          />
        )}

        <div className={classes.characterOtherInfo}>
          <p>Patronus: {character.patronus}</p>
          <p>Eye Colour: {character.eyeColour}</p>
          <p>Hair Colour: {character.hairColour}</p>
          <p>Alive: {character.alive ? "Yes" : "No"}</p>
          <p>Hogwarts Student: {character.hogwartsStudent ? "Yes" : "No"}</p>
          <p>Hogwarts Staff: {character.hogwartsStaff ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className={classes.characterRight}>
        <h2>{character.name}</h2>
        <table className={classes.characterInfoTable}>
          <tbody>
            <tr>
              <td>Actor:</td>
              <td>{character.actor}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{character.gender}</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>{character.dateOfBirth}</td>
            </tr>
            <tr>
              <td>House:</td>
              <td>{character.house}</td>
            </tr>
            <tr>
              <td>Species:</td>
              <td>{character.species}</td>
            </tr>
            <tr>
              <td>Wand:</td>
              <td>
                Wood: {character.wand.wood}
                <br />
                Core: {character.wand.core} core
                <br />
                Length: {character.wand.length} inches
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Character;
