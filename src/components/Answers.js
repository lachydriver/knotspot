import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question_id: 0
    };
  }

  render() {
    return (
      <div>
        <p>Answers component: {this.props.question_id}</p>
        <button onClick={() => this.props.update(0, 5)}>
          Add 5 to Scalene
        </button>
      </div>
    );
  }
}

export default Answers;
