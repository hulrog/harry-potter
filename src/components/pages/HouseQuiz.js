import React, { useState } from "react";
import classes from "./HouseQuiz.module.css";
import Question from "../house-quizz/Question";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
import { useNavigate } from "react-router-dom";

function HouseQuiz() {
  const navigate = useNavigate();
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
      question: "Choose an animal.",
      answers: [
        {
          text: "Bear",
          image: "bear",
          points: { gryffindor: 10, slytrherin: 10 },
        },
        {
          text: "Panther",
          image: "panther",
          points: { hufflepuff: 5, slytherin: 10 },
        },
        {
          text: "Owl",
          image: "owl",
          points: { ranenclaw: 10, hufflepuff: 5 },
        },
      ],
    },
    {
      question: "Choose a flower.",
      answers: [
        {
          text: "Tulip",
          image: "tulip",
          points: { gryffindor: 5, hufflepuff: 5 },
        },
        {
          text: "Rose",
          image: "rose",
          points: { gryffindor: 10, slytherin: 10 },
        },
        {
          text: "Sunflower",
          image: "sunflower",
          points: { hufflepuff: 5, ravenclaw: 5 },
        },
      ],
    },
    {
      question: "Choose a subject.",
      answers: [
        {
          text: "Astronomy",
          image: "astronomy",
          points: { ravenclaw: 10, slytrherin: 5 },
        },
        {
          text: "History of Magic",
          image: "history",
          points: { ravenclaw: 5, slytherin: 10 },
        },
        {
          text: "Divination",
          image: "divination",
          points: { hufflepuff: 10, gryffindor: 5 },
        },
      ],
    },
    {
      question: "Choose a place to relax.",
      answers: [
        {
          text: "River",
          image: "river",
          points: { hufflepuff: 10, slytherin: 5 },
        },
        {
          text: "Mountain",
          image: "mountain",
          points: { gryffindor: 10, slytherin: 10 },
        },
        {
          text: "Sea",
          image: "sea",
          points: { hufflepuff: 10, ravenclaw: 5 },
        },
      ],
    },
    {
      question: "Choose a place to visit.",
      answers: [
        {
          text: "Japan",
          image: "japan",
          points: { hufflepuff: 10, slytherin: 5 },
        },
        {
          text: "Italy",
          image: "rome",
          points: { gryffindor: 10, slytherin: 10 },
        },
        {
          text: "India",
          image: "india",
          points: { ravenclaw: 10, slytherin: 5 },
        },
      ],
    },
    {
      question: "Choose a virtue.",
      answers: [
        {
          text: "Knowledge",
          image: "books",
          points: { ravenclaw: 15 },
        },
        {
          text: "Bravery",
          image: "sword",
          points: { gryffindor: 15, slytherin: 5 },
        },
        {
          text: "Loyalty",
          image: "dog",
          points: { hufflepuff: 15 },
        },
      ],
    },
    {
      question: "Choose a sin.",
      answers: [
        {
          text: "Greed",
          image: "gold",
          points: { slytherin: 15, ravenclaw: 10 },
        },
        {
          text: "Lust",
          image: "roses",
          points: { hufflepuff: 15, slytherin: 5 },
        },
        {
          text: "Wrath",
          image: "fire",
          points: { gryffindor: 15 },
        },
      ],
    },
    {
      question: "What is your fondest childhood memory?",
      answers: [
        {
          text: "Spending quality time with my loving family",
          image: "sunrise",
          points: { hufflepuff: 15, gryffindor: 5 },
        },
        {
          text: "Winning competitions that I worked hard for",
          image: "medal",
          points: { slytherin: 15, ravenclaw: 10, gryffindor: 5 },
        },
        {
          text: "Meeting life-long friends I couldn't do without",
          image: "sand_castle",
          points: { hufflepuff: 15, gryffindor: 10 },
        },
        {
          text: "A favorite hobby that helped me get through it",
          image: "art",
          points: { ravenclaw: 15, slytherin: 5, huflepuff: 5 },
        },
      ],
    },
    {
      question: "What is something you're grateful for?",
      answers: [
        {
          text: "Challanging myself every day, always aiming higher",
          image: "chess",
          points: { slyterin: 15, gryffindor: 5 },
        },
        {
          text: "The unexpected kindness of a stranger giving me hope",
          image: "bloom",
          points: { hufflepuff: 15, gryffindor: 10, ravenclaw: 5 },
        },
        {
          text: "My optimism, to see the good in all things",
          image: "optimism",
          points: { hufflepuff: 15, gryffindor: 5 },
        },
        {
          text: "The peaceful sound of rain on my window",
          image: "window",
          points: { ravenclaw: 15, slytherin: 5, huflepuff: 5 },
        },
      ],
    },
    {
      question: "What terrifies you the most?",
      answers: [
        {
          text: "Being completely alone and forgotten",
          image: "darkness",
          points: { hufflepuff: 15, gryffindor: 10 },
        },
        {
          text: "Losing control over myself and my actions",
          image: "failure",
          points: { slytherin: 15, gryffindor: 5 },
        },
        {
          text: "Facing the truth about my past",
          image: "facing_truth",
          points: { ravenclaw: 15, slytherin: 10 },
        },
        {
          text: "Having my loved ones taken away from me",
          image: "graveyard",
          points: { gryffindor: 15, hufflepuff: 15 },
        },
      ],
    },
    {
      question: "What is your greatest failure?",
      answers: [
        {
          text: "I never found the drive within me to achieve my dreams",
          image: "rain",
          points: { ravenclaw: 15 },
        },
        {
          text: "I witnessed evil happen and I didn't speak up",
          image: "snake",
          points: { hufflepuff: 15, ravenclaw: 5 },
        },
        {
          text: "My carelessness deeply hurt someone I cared about",
          image: "blood",
          points: { slytherin: 15, gryffindor: 5 },
        },
        {
          text: "My insecurities made me miss out on life",
          image: "chair",
          points: { gryffindor: 15, hufflepuff: 5 },
        },
      ],
    },
    {
      question: "How would you describe your biggest secret?",
      answers: [
        {
          text: "I hide who I am under the flawless facade",
          image: "mask",
          points: { gryffindor: 15, slytherin: 10 },
        },
        {
          text: "I betrayed someone who believed in me",
          image: "poison",
          points: { ravenclaw: 10, gryffindor: 5 },
        },
        {
          text: "Words of love unsaid, etched only on my heart",
          image: "letter",
          points: { hufflepuff: 15, gryffindor: 5 },
        },
        {
          text: "Secrets are all that I am and will ever become",
          image: "spiderweb",
          points: { slytherin: 15, ravenclaw: 5 },
        },
      ],
    },
    {
      question: "?????",
      answers: [
        {
          text: ".",
          image: "cat",
          points: { slytherin: 15 },
        },
        {
          text: "?",
          image: "moon",
          points: { ravenclaw: 15 },
        },
        {
          text: "!",
          image: "nuke",
          points: { gryffindor: 15 },
        },
        {
          text: "...",
          image: "baby",
          points: { hufflepuff: 15 },
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
    navigate("/");
  };

  const handleQuizRestart = () => {
    navigate("/house-quiz");
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
        <div className={classes.resultContainer}>
          <p>Sorting completed! Here is your result:</p>
          <p>
            You've been sorted into:
            <span className={classes.houseText}>
              {" "}
              {getMaxHouse().charAt(0).toUpperCase() + getMaxHouse().slice(1)}!
            </span>
          </p>

          <img
            className={classes.houseImg}
            src={
              process.env.PUBLIC_URL + "/sigils/house_" + getMaxHouse() + ".png"
            }
            alt="Unknown"
          />
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
