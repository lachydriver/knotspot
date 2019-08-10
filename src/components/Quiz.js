import React from "react";
import Helmet from "react-helmet";
import Questions from "./Questions";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("component store: " + this.props.bones);
  }

  render() {
    return (
      <div className="quiz">
        <Helmet>
          <title>MSDS</title>
        </Helmet>
        <h1>Quiz</h1>
        <Questions />
      </div>
    );
  }
}

export default Quiz;
