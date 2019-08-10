import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question_id: 0,
      selectedButton: null
    };
    this.displayAnswers = this.displayAnswers.bind(this);
    this.questionOne = this.questionOne.bind(this);
    this.questionTwo = this.questionTwo.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  displayAnswers() {
    if (this.props.question_id == 1) {
      return this.questionOne();
    } else if (this.props.question_id === 2) {
      return this.questionTwo();
    }
  }

  handleClick = e => {
    e.preventDefault();
    var buttonId = e.target.id;
    this.setState({ selectedButton: buttonId });
    console.log(this.state.selectedButton);
  };

  submitAnswer() {
    var id = this.state.selectedButton;
    
  }

  questionOne() {
    return (
      <div>
        <button
          id="neck"
          className={this.state.selectedButton === 'neck' ? 'selected':''}
          onClick={this.handleClick}
/*           onClick={() => {
            this.props.update(24, 5);
            this.props.update(38, 5);
          }} */
        >
          Neck
        </button><br/>
        <button
          id="topofshoulders"
          className={this.state.selectedButton === 'topofshoulders' ? 'selected':''}
          onClick={this.handleClick}
/*           onClick={() => {
            this.props.update(53, 5);
            this.props.update(16, 5);
          }} */
        >
          Top of Shoulders
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
