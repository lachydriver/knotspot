import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../actions/authActions";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      previousresults: []
    };
    this.printResults = this.printResults.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    console.log(this.props.auth);
    this.getResults();
  }

  getResults = () => {
    axios
      .post("/api/results/getresults", {
        user_id: this.props.auth.user.id
      })
      .then(res => {
        this.setState({ previousresults: res.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  printResults = () => {
    console.log(this.state.previousresults);
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.username.split(" ")[0]}
              <br />
              Your email is: {user.email}
            </h4>
            {this.state.previousresults.map((result, index) => {
              return (
                <div key={index}>
                  <table className="resultstable">
                    <tr>
                      <th>
                        <b>Muscle</b>
                      </th>
                    </tr>
                    {result.results.map((muscle, key) => {
                      return <tr><td >{muscle[0]}</td></tr>;
                    })}
                  </table><br/>
                </div>
              );
            })}
            <button onClick={this.printResults}>Print</button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
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
