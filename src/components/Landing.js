import React from "react";
import { Link } from "react-router-dom";
import robot from "../content/img/robot2.png";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class Landing extends React.Component {
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
          </Link>
          <br />
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
        <div className="navbar">
        <h3 className="navbar-header">Knot Spot</h3>
        {this.displayButton()}
        </div>
        <div className="landing">
          <Helmet>
            <title>Knot Spot - Home</title>
          </Helmet>

          <h1>Knot Spot</h1>
          {/*<img src={robot} alt="robot" />*/}
          <p className="fronttext">
            Welcome to Knot Spot! 
            <br/><br/>
            Knot Spot has been designed to assist you
            identify muscles that you may have strained. It also provides
            suggestions on how to resolve pain and disfunction from those
            muscles strained. 
            <br/><br/>
            Select “Login” from the menu bar to be able to
            save your results and access management suggestions. Select “Start
            as a Guest” if you would just like to do the quiz and see the most
            likely muscles involved.
          </p>
          <Link to="/quiz" className="start-button">
            Start Quiz
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
