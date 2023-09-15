import React, { useEffect, useState } from "react";
import classes from "./AddAwardModal.module.css";
import Button from "../layout/Button";
import Modal from "../layout/Modal";
import Award from "./Award";
import ButtonRow from "../layout/ButtonRow";

function AddAwardModal({ onClose, onAddAward, awardedAwards }) {
  const [awards, setAwards] = useState([]);
  const [selectedAwards, setSelectedAwards] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/getAllAwards")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAwards(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleAwardClick = (award) => {
    if (
      !awardedAwards.some(
        (awardedAward) => awardedAward.award_id === award.award_id
      )
    ) {
      setSelectedAwards((prevAwards) => [...prevAwards, award]);
    }
  };

  const handleRemoveAward = (award) => {
    setSelectedAwards((prevAwards) =>
      prevAwards.filter((prevAward) => prevAward.award_id !== award.award_id)
    );
  };

  const handleAddAwards = () => {
    if (selectedAwards.length > 0) {
      onAddAward(selectedAwards, true);
      console.log(selectedAwards);
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={classes.addAwardModalContainer}>
        <h2>Add Awards</h2>
        <div className={classes.awardList}>
          {awards.map((award) => (
            <div
              key={award.award_id}
              className={`${
                awardedAwards.some(
                  (awardedAward) => awardedAward.award_id === award.award_id
                )
                  ? `${classes.awardItem} ${classes.disabledAwardItem}`
                  : classes.awardItem
              }`}
            >
              <div onClick={() => handleAwardClick(award)}>
                <Award
                  key={award.award_id}
                  award_id={award.award_id}
                  description={award.description}
                  name={award.award_name}
                />
              </div>
              {selectedAwards.some(
                (selectedAward) => selectedAward.award_id === award.award_id
              ) && (
                <div
                  onClick={() => handleRemoveAward(award)}
                  className={classes.removeButton}
                >
                  ✖
                </div>
              )}
            </div>
          ))}
        </div>
        <ButtonRow>
          <Button text="Award" type="submit" onClick={handleAddAwards}></Button>
        </ButtonRow>
      </div>
    </Modal>
  );
}

export default AddAwardModal;
