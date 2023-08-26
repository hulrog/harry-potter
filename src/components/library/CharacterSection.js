import React, { useState } from "react";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
import classes from "./CharacterSection.module.css";

function CharacterSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characterData, setCharacterData] = useState(null);

  const handleSearchSubmit = () => {
    fetch(
      `https://api.potterdb.com/v1/characters?page[number]=1&page[size]=20&filter[name_cont_any]=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacterData(data);
      })
      .catch((error) => {
        console.error("Error fetching character data:", error);
      });
  };

  return (
    <div className={classes.characterSearchContainer}>
      <input
        type="text"
        placeholder="Enter character name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ButtonRow>
        <Button type="submit" text="Search" onClick={handleSearchSubmit} />
      </ButtonRow>
      <div className={classes.shelfHorizontal}> </div>
      <div classnName={classes.shelfVertical}> </div>
      <div className={classes.shelfHorizontal}> </div>
      {characterData && <div>{JSON.stringify(characterData, null, 2)}</div>}
    </div>
  );
}

export default CharacterSection;
