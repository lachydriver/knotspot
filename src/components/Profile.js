import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../actions/authActions";
import { Link } from 'react-router-dom';
import axios from "axios";
import moment from "moment";
import { Helmet } from "react-helmet";

class Profile extends Component {
  constructor() {
    super();
  }

  //function to log the user out
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {

  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="page-container">
        <Helmet>
          <title>Knot Spot - Profile</title>
        </Helmet>
        <div className="container">
            <h4>
              <b>Hey there,</b> {user.username.split(" ")[0]}
              <br />
              Click the below button to view your Results (from most to least likely):
            </h4>
            <Link to="/results" className="retakebutton">
              Results
            </Link>
            <br/>
            <Link to="/quiz" className="retakebutton">
              Take Quiz
            </Link>
            <Link to="/changepassword" className="retakebutton">
              Change Password
            </Link>
            <button
              className="retakebutton"
              onClick={this.onLogoutClick}
            >
              Logout
            </button>
            <Link to="/start" className="retakebutton">
              Home
            </Link>
            </div>
          </div>
    );
  }
}

//Link component to the redux store and import the auth props
Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
