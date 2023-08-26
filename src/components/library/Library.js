import React from "react";

import classes from "./Library.module.css";
import CharacterSection from "./CharacterSection";

function Library() {
  return (
    <div className={classes.libraryContainer}>
      <CharacterSection></CharacterSection>
    </div>
  );
}

export default Library;
