import React from "react";
import { Link } from "react-router-dom";
import robot from "../content/img/robot2.png";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  displayButton = () => {
    if (this.props.auth.isAuthenticated === true) {
      return (
        <Link to="/profile" className="profile-button retakebutton">
          Profile
        </Link>
      );
    } else {
      return (
        <div>
          <Link to="/login" className="profile-button retakebutton">
            Login
          </Link><br/>
          <Link to="/register" className="register-button retakebutton">
            Register
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="homepage">
        {this.displayButton()}

        <div className="start">
          <Helmet>
            <title>Knot Spot - Home</title>
          </Helmet>

          <h1>Knot Spot</h1>
          {/*<img src={robot} alt="robot" />*/}
          <p className="fronttext">
            Welcome to the Muscle Strain Diagnostic Software. This software is
            used to determine the cause of any specific pain you have in your
            body.
            <br />
            To use this quiz, please press the below start button and follow the
            questions all the way until the end. Click on your answer to the
            question and then click the next button. On the last question please
            press the "Finish" button.
            <br />
            At the end of the quiz you will receive a list of muscles that will
            be the most likely cause for your pain, and any self help that might
            be available to help relieve your pain.
          </p>
          <Link to="/quiz" className="start-button">
            Start Diagnostic
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
