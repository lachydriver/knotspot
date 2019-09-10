import React from "react";
import Quiz from "./Quiz";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class QuizContainer extends React.Component {

  componentDidMount(){
    
  }

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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps
)(QuizContainer)