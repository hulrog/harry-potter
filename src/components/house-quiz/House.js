import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./House.module.css";
import Character from "./Character";
import Card from "../layout/Card";

function House({ house }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        console.log(response.data);
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, [house]);

  return (
    <div className={classes.houseContainer}>
      <Card>
        <h1>{house.charAt(0).toUpperCase() + house.slice(1)} House</h1>
        <div className={classes.characterList}>
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default House;
