import React, { useState } from "react";
import classes from "./AddAwardModal.module.css";
import Button from "../layout/Button";
import Modal from "../layout/Modal";
import Award from "./Award";
import ButtonRow from "../layout/ButtonRow";

function AddAwardModal({ onClose, onAddAward, awardedAwards }) {
  const [selectedAwards, setSelectedAwards] = useState([]);

  // TODO API za dohvatanje
  const awards = [
    {
      award_id: 1,
      award_type: "knowledge",
      name: "Historian of Magic",
      description:
        "This post contributes to or demonstrates vast knowledge of the Wizarding World's history and lore.",
    },
    {
      award_id: 2,
      award_type: "knowledge",
      name: "Muggle Studies Expert",
      description:
        "This post draws connections between the real world and Wizarding world or provides useful news about Muggles.",
    },
    {
      award_id: 3,
      award_type: "creativity",
      name: "Fanfiction Virtuoso",
      description: "This post is an artwork of fanfiction.",
    },
    {
      award_id: 4,
      award_type: "creativity",
      name: "Master of Role-play",
      description:
        "This post is a challanging and engaging RP prompt or offers insight into RP skills.",
    },
    {
      award_id: 5,
      award_type: "community",
      name: "Order of Merlin",
      description:
        "This post offers outstanding service to the Wizarding community.",
    },
    {
      award_id: 6,
      award_type: "creativity",
      name: "Student Prefect",
      description:
        "This post encourages and promotes community standards and positive behaviour.",
    },
  ];

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
                name={award.name}
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
    </Modal>
  );
}

export default AddAwardModal;
