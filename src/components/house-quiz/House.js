import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./House.module.css";
import Character from "./Character";

function House({ house }) {
  const [characters, setCharacters] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, [house]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const scrollDistance = startX - e.clientX;
    e.currentTarget.scrollLeft += scrollDistance;
    setStartX(e.clientX);
  };

  return (
    <div className={classes.houseContainer}>
      <h1>{house.charAt(0).toUpperCase() + house.slice(1)} House</h1>
      <div
        className={classes.characterList}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default House;
