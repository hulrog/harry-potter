import React from "react";
import CharacterBook from "./CharacterBook";
import classes from "./Shelf.module.css";

function Shelf({ characters }) {
  return (
    <div className={classes.shelf}>
      <div className={classes.shelfHorizontal}> </div>
      <div className={classes.shelfRow}>
        <div className={classes.shelfVertical}> </div>
        <div className={classes.bookList}>
          {characters.map((character) => (
            <CharacterBook key={character.id} character={character} />
          ))}
        </div>
        <div className={classes.shelfVertical}></div>
      </div>
      <div className={classes.shelfHorizontal}> </div>
    </div>
  );
}

export default Shelf;
