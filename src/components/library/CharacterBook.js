import React, { useState } from "react";
import classes from "./CharacterBook.module.css";
import CharacterOpenBook from "./CharacterOpenBook";
import Modal from "../layout/Modal";

function CharacterBook({ character }) {
  console.log(character);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={classes.characterBookContainer}>
      <div className={classes.characterBook} onClick={toggleModal}>
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

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <CharacterOpenBook character={character} />
        </Modal>
      )}
    </div>
  );
}

export default CharacterBook;
