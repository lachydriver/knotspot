import React from "react";
import Quiz from "./Quiz";

class QuizContainer extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="container">
          <Quiz />
        </div>
      </div>
    );
  }
}

export default QuizContainer;
