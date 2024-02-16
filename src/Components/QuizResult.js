import React from "react";

function QuizResult(props) {
  return (
    <div>
      <div className="show-score">
        Your Score: {props.score}
        <br />
        Total Score: {props.totalScore}
      </div>
      <button className="try-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </div>
  );
}

export default QuizResult;
