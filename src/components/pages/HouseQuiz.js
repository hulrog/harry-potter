import React, { useState } from "react";
import classes from "./HouseQuiz.module.css";
import Question from "../house-quizz/Question";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";

function HouseQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [housePoints, setHousePoints] = useState({
    gryffindor: 0,
    ravenclaw: 0,
    hufflepuff: 0,
    slytherin: 0,
  });

  const handleAnswerSelected = (points) => {
    setHousePoints((prevPoints) => {
      // spread operator da ne bi uhvatio referencu nego vrednost
      const newPoints = { ...prevPoints };
      for (const house in points) {
        if (newPoints.hasOwnProperty(house)) {
          newPoints[house] += points[house];
        }
      }
      return newPoints;
    });
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const questions = [
    {
      question: "Which would you rather be?",
      answers: [
        {
          text: "Knight",
          image: "knight",
          points: { gryffindor: 10, slytrherin: 10 },
        },
        {
          text: "Ranger",
          image: "archer",
          points: { ravenclaw: 10, slytherin: 10 },
        },
        {
          text: "Thief",
          image: "thief",
          points: { slytherin: 5, hufflepuff: 5 },
        },
      ],
    },
    {
      question: "Which weapon you use?",
      answers: [
        {
          text: "Shield",
          image: "shield",
          points: { gryffindor: 10, slytrherin: 10 },
        },
        {
          text: "Sword",
          image: "sword",
          points: { ravenclaw: 10, slytherin: 10 },
        },
        {
          text: "Bow",
          image: "bow_and_arrow",
          points: { slytherin: 5, hufflepuff: 5 },
        },
      ],
    },
    // Add more questions here...
  ];

  const getMaxHouse = () => {
    const maxPoints = Math.max(...Object.values(housePoints));
    return Object.keys(housePoints).find(
      (house) => housePoints[house] === maxPoints
    );
  };

  const handleQuizComplete = () => {
    const winningHouse = getMaxHouse();
    console.log("The winning house is:", winningHouse);
    // TODO:
  };

  const handleQuizRestart = () => {
    window.location.href = "/house-quiz";
  };

  return (
    <div className={classes.houseQuizContainer}>
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          onAnswerSelected={handleAnswerSelected}
        />
      ) : (
        // Kviz zavrsen
        <div>
          <p>Quiz completed! Here are the results:</p>
          <p>The winning house is: {getMaxHouse()}</p>
          <ButtonRow>
            <Button
              type="submit"
              text="Complete"
              onClick={handleQuizComplete}
            />
            <Button
              type="remove"
              text="Restart Quiz"
              onClick={handleQuizRestart}
            />
          </ButtonRow>
        </div>
      )}
    </div>
  );
}

export default HouseQuiz;
