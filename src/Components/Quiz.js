import React, { useState } from "react";
import "./Quiz.css";
import { QuizData } from "../Data/Question";
import QuizResult from "./QuizResult";
function Quiz() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setscore] = useState(0);
  const [clickOption, setclickOption] = useState(0);
  const [showResult, setshowResult] = useState(false);
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setshowResult(true);
    }
    setclickOption(0);
  };

  const updateScore = () => {
    if (clickOption === QuizData[currentQuestion].answer) {
      setscore(score + 1);
    }
  };
  const changeQuestionPrev = () => {
    setcurrentQuestion(currentQuestion - 1);
  };

  const resetAll = () => {
    setcurrentQuestion(0);
    setscore(0);
    setclickOption(0);
    setshowResult(false);
  };
  return (
    <div>
      <p className="heading-text">Quiz</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}</span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="options">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickOption == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setclickOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div className="buttons">
              {currentQuestion > 0 ? (
                <input
                  type="button"
                  value="previous"
                  className="prev-button"
                  onClick={changeQuestionPrev}
                />
              ) : (
                <input
                  type="button"
                  value="previous"
                  className="prev-button-disable"
                  onClick={changeQuestionPrev}
                  disabled
                />
              )}

              <input
                type="button"
                value="next"
                className="next-button"
                onClick={changeQuestion}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
