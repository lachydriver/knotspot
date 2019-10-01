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
    this.state = {
      previousresults: [],
      error: ""
    };
    this.deleteResult = this.deleteResult.bind(this)
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    console.log(this.props.auth);
    this.setState({error: "Loading..."});
    this.getResults();
  }

  getResults = () => {
    console.log("got results");
    axios
      .post("/api/results/getresults", {
        user_id: this.props.auth.user.id
      })
      .then(res => {
        this.setState({ previousresults: res.data });
        this.setState({ error: ""});
      })
      .catch(err => {
        if(err.response.status === 404){
          this.setState({error: "No Saved Results Found"});
          this.setState({previousresults: []})
        } else {
          console.log(err)
        }
      });
  };

  deleteResult = (id) => {
    axios.post("/api/results/deleteresult", {
      _id: id
    }).then(this.getResults()).catch(err => {if(err.response.status === 404){
      this.getResults();
    } else {
      console.log(err);
    }})
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
            <Link to="/" className="retakebutton">
              Home
            </Link>
            </div>
          </div>
    );
  }
}
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
