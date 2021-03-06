import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./login.css";
import Axios from "axios";

class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      username: "",
      password: "",
      confirmPassword: "",
      passworderror: ""
    };
  }

  async componentDidMount() {
    if(this.props.auth.isAuthenticated === false){
      this.setState({error: true});
    } else {
      this.setState({username: this.props.auth.user.username});
    }
  }

  resetPassword = (e) => {
      e.preventDefault();
      if(this.state.password != this.state.confirmPassword){
          this.setState({passworderror: "Passwords do not match"})
      } else {
        this.setState({passworderror: ""})
        Axios.put("/api/email/changepassword", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            if(response.data.message === "password updated") {
                this.props.history.push("/profile");
            } 
        }).catch(err => {
            console.log(err)
        })
      }
  }

  handleChange = e => {
    this.setState({ password: e.target.value });
  };
  handleConfirmChange = e => {
    this.setState({ confirmPassword: e.target.value });
  };

  render() {
    const { error } = this.state;
    if(error){
        return(
            <div className="form-root">
              <Helmet>
                <title>Knot Spot - Change Password</title>
              </Helmet>
      
              <Link to="/" className="profile-button retakebutton">
                Home
              </Link>
              <div className="form">
                <div className="PageSwitcher">
                  <NavLink
                    to="/login"
                    activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item"
                  >
                    Back
                  </NavLink>
                </div>
                <div className="login">
                  <h1 className="titleforgot">You are not logged in.</h1>
                </div>
              </div>
            </div>
        )
    } else {
        return (
            <div className="form-root">
              <Helmet>
                <title>Knot Spot - Reset Password</title>
              </Helmet>
      
              <Link to="/" className="profile-button retakebutton">
                Home
              </Link>
              <div className="form">
                <div className="PageSwitcher">
                  <NavLink
                    to="/login"
                    activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item"
                  >
                    Back
                  </NavLink>
                </div>
                <div className="login">
                  <h1 className="titleforgot">Change Password</h1>
                  <p>Username: {this.state.username}</p>
                  <form className="FormFields" noValidate>
                    <div className="inputgrp">
                      <div className="inputs">
                        <label className="labels" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label className="labels" htmlFor="password">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmpassword"
                          id="confirmpassword"
                          onChange={this.handleConfirmChange}
                        />
                        <br />
                        {this.state.passworderror}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="login-btn"
                      onClick={this.resetPassword}
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
    }
    
  };
};

const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(mapStateToProps)(ChangePassword);
