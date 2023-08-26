import React, { useState } from "react";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
import classes from "./CharacterSection.module.css";
import Shelf from "./Shelf";

function CharacterSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characterData, setCharacterData] = useState(null);

  const handleSearchSubmit = () => {
    fetch(
      `https://api.potterdb.com/v1/characters?page[number]=1&page[size]=20&filter[name_cont_any]=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacterData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching character data:", error);
      });
  };

  // po 5 u policu
  const characterGroups = [];
  if (characterData) {
    for (let i = 0; i < characterData.length; i += 5) {
      characterGroups.push(characterData.slice(i, i + 5));
    }
  }

  return (
    <div className={classes.characterSectionContainer}>
      <input
        type="text"
        placeholder="Enter character name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ButtonRow>
        <Button type="submit" text="Search" onClick={handleSearchSubmit} />
      </ButtonRow>
      {characterGroups.map((characters, index) => (
        <Shelf key={index} characters={characters} />
      ))}
    </div>
  );
}

export default CharacterSection;
