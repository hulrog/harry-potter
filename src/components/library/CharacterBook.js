import React from "react";
import classes from "./CharacterBook.module.css";

function CharacterBook({ character }) {
  return (
    <div className={classes.characterBookContainer}>
      {character.attributes.name && (
        <p className={classes.characterName}>{character.attributes.name}</p>
      )}
      {character.attributes.image ? (
        <img
          src={character.attributes.image}
          alt={character.attributes.name}
          className={classes.characterImage}
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/pictures/question_mark.png"}
          alt={character.attributes.name}
          className={classes.characterImage}
        />
      )}
    </div>
  );
}

export default CharacterBook;
