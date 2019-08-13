import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedButton: null
    };
    this.displayAnswers = this.displayAnswers.bind(this);
    this.questionOne = this.questionOne.bind(this);
    this.questionTwo = this.questionTwo.bind(this);
  }

  displayAnswers() {
    if (this.props.question_id == 1) {
      return this.questionOne();
    } else if (this.props.question_id === 2) {
      return this.questionTwo();
    }
  }

  questionOne() {
    return (
      <div className='answers'>
        <button
          onClick={() => {
            this.props.update(24, 5);
            this.props.update(38, 5);
          }}
        >
          Neck
        </button><br />
        <button
          onClick={() => {
            this.props.update(53, 5);
            this.props.update(16, 5);
          }}
        >
          Top of Shoulders
        </button>
        <button
          onClick={() => {
            this.props.update();
          }}
        >
          Front of Shoulder
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
            this.props.update(16, 5);
          }}
        >
          Shoulder into Arm
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
            this.props.update(16, 5);
          }}
        >
          Back of Shoulder
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
            this.props.update(16, 5);
          }}
        >
          Scapula
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Behind Scapula
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Ribs
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Biceps
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Back of Upper Arm
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Upper Back
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Middle Back
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Lower Back
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Sacrum
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Gluteal Muscles
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Hips
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Side of Upper Leg
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Thighs/Quads
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Hamstrings
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Front of Knee
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Back of Knee
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Front of Lower Leg
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Calf
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Inner Ankle
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Outer Ankle
        </button>
        <button
          onClick={() => {
            this.props.update(53, 5);
          }}
        >
          Foot
        </button>
      </div>
    );
  }

  questionTwo() {
    return <div>QUESTION TWO BUTTONS</div>;
  }

  render() {
    return (
      <div>
        {this.props.question_id}
        {/*         <p>Answers component: {this.props.question_id}</p>
        <button onClick={() => this.props.update(0, 5)}>
          Add 5 to Scalene
        </button> */}
        {this.displayAnswers()}
        <button
          onClick={() => {
            this.submitAnswer();
            this.props.nextQuestion();
          }}
        >
          Next Question
        </button>
      </div>
    );
  }
}

export default Answers;
