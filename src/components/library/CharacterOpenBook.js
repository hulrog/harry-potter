import React, { useState } from "react";
import classes from "./CharacterOpenBook.module.css";
import SubmitPost from "../posts/SubmitPost";
import Modal from "../layout/Modal";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";

function CharacterOpenBook({ character }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // normalizacija atributa, pregleda svaki ako je null setuje mi default vrednost
  function normalizeCharacterAttributes(attributes) {
    const defaultValues = {
      name: "Unknown",
      image: process.env.PUBLIC_URL + "/pictures/question_mark.png",
      gender: "Unknown",
      blood_status: "Unknown",
      born: "Unknown",
      died: "Unkown",
      nationality: "Unkown",
      species: "Unknown",
      romances: null,
      alias_names: null,
      boggart: "Unknown",
      patronus: "Unkown",
    };

    const attributeNames = Object.keys(defaultValues);

    const normalizedAttributes = attributeNames.reduce(
      (normalized, attributeName) => {
        normalized[attributeName] =
          attributes[attributeName] !== null
            ? attributes[attributeName]
            : defaultValues[attributeName];
        return normalized;
      },
      {}
    );

    return normalizedAttributes;
  }
  const normalizedAttributes = normalizeCharacterAttributes(
    character.attributes
  );

  // destruktiranje objekta sa normalizovanim atributima
  const {
    name,
    image,
    gender,
    blood_status,
    born,
    died,
    nationality,
    romances,
    species,
    alias_names,
    boggart,
    patronus,
  } = normalizedAttributes;
  console.log(normalizedAttributes);

  return (
    <div className={classes.characterBookContainer}>
      <div className={classes.leftPage}>
        <h3 className={classes.characterName}>{name}</h3>
        <img src={image} alt={name} className={classes.characterImage} />

        <p>Born: {born}</p>
        <p>Died: {died} </p>
      </div>

      <div className={classes.spine}></div>
      <div className={classes.rightPage}>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Gender: {gender}</p>
              </td>
              <td>
                <p>Species: {species}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Nationality: {nationality}</p>
              </td>
              <td>
                <p>Blood Status: {blood_status}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Boggart: {boggart}</p>
              </td>
              <td>
                <p>Patronus: {patronus}</p>
              </td>
            </tr>
          </tbody>
        </table>
        {romances && (
          <p>
            Romances: <br />
            {romances &&
              romances.map((romance, index) => (
                <span key={index}>
                  {romance}
                  {index < romances.length - 1 && <br />}
                </span>
              ))}
          </p>
        )}
        {alias_names && (
          <p>
            Alias names: <br />
            {alias_names &&
              alias_names.slice(0, 5).map((alias_name, index) => (
                <span key={index}>
                  {alias_name}
                  {index < alias_names.slice(0, 5).length - 1 && ", "}
                </span>
              ))}
          </p>
        )}

        <ButtonRow>
          <Button
            text="Write more"
            type="submit"
            onClick={toggleModal}
          ></Button>
        </ButtonRow>

        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <SubmitPost prepoulatedTitle={name} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default CharacterOpenBook;
