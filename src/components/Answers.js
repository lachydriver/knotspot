import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSum } from '../store/index';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question_id: 0
    };
  }

  updateSumSubmit(id, sum) {
      this.props.updateSum({id:id, sum:sum})
  }

  render() {
    return (
      <div>
        <p>Answers component: {this.props.question_id}</p>
        <button onClick={() => this.updateSumSubmit(0, 5)}>Add 5 to Scalene</button>
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
)(Answers);
