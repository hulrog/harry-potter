import React from "react";
import classes from "./Question.module.css";

function Question({ question, answers, onAnswerSelected }) {
  const handleAnswerClick = (answer) => {
    onAnswerSelected(answer.points);
  };

  return (
    <div className={classes.questionContainer}>
      <p className={classes.questionSentence}>{question}</p>
      <div className={classes.answers}>
        {answers.map((answer, index) => (
          <div
            key={index}
            className={classes.answer}
            onClick={() => handleAnswerClick(answer)}
          >
            <img
              className={classes.answerImg}
              src={
                process.env.PUBLIC_URL + "/pictures/" + answer.image + ".jpg"
              }
              alt="Unknown"
            />
            <span className={classes.answerText}>{answer.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
