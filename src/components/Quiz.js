import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSum } from "../store/index";
import Questions from './Questions';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.updateSumSubmit = this.updateSumSubmit.bind(this);
  }

  updateSumSubmit(id, sum) {
    this.props.updateSum({id:id, sum:sum});
  }

  componentDidUpdate(){
    console.log("component store: " + this.props.bones)
  }

  render() {
    return (
      <div className="quiz">
{/*        {<ul className="list-group list-group-flush">
          {this.props.bones.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.name} - {el.sum}
            </li>
          ))}
        </ul>}
        <button onClick={() => this.updateSumSubmit(0, 5)}>Add 5 to Scalene</button>
        <button onClick={() => this.updateSumSubmit(1, 3)}>Add 3 to Para</button>
        <button onClick={() => this.updateSumSubmit(2, 1)}>Add 1 to Neck</button> */}
        
        <Helmet>
          <title>MSDS</title>
        </Helmet>
        <h1>Quiz</h1>
        <Questions/>
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
)(Quiz);
