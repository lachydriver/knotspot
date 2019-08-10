import React from "react";
import Answers from "./Answers";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSum } from "../store/index";

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question_id: 0
    };
    this.renderQuestion = this.renderQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.updateSumSubmit = this.updateSumSubmit.bind(this);
  }

  updateSumSubmit(id, sum) {
    this.props.updateSum({ id: id, sum: sum });
  }

  componentDidMount() {
    this.setState({ question_id: 1 });
  }

  renderQuestion() {
    if (this.state.question_id === 1) {
      return "Where are you experiencing pain?";
    }
    if (this.state.question_id === 2) {
      return "Question 2";
    }
  }

  nextQuestion() {
    this.setState(prevstate => {
      return { question_id: prevstate.question_id + 1 };
    });
  }

  render() {
    return (
      <div>
        {this.renderQuestion()}
        <br />
        <Answers
          question_id={this.state.question_id}
          update={this.updateSumSubmit}
        />
        <button onClick={this.nextQuestion}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bones: state.bones };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateSum: updateSum
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
