import React from "react";
import Quiz from "./Quiz";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class QuizContainer extends React.Component {

  displayButton = () => {
    if(this.props.auth.isAuthenticated === true){
    return(<Link to="/profile" className="profile-button retakebutton">
      Profile
    </Link>)
    } else {
    return(<Link to="/login" className="profile-button retakebutton">
      Login
    </Link>)
    }
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="page-container">
        {this.displayButton()}
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