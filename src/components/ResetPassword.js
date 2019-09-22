import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import "./login.css";
import Axios from "axios";

class ResetPassword extends Component {
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
    console.log(this.props.match.params.token);
    await Axios.get("/api/email/reset", {
      params: { resetPasswordToken: this.props.match.params.token }
    }).then(response => {
        if(response.data.message === "token ok") {
            this.setState({username: response.data.username,
            error: false,
            update: false
            })
        } else {
            this.setState({error: true})
        }
    }).catch(err => {
        console.log(err.data)
    });
  }

  resetPassword = (e) => {
      e.preventDefault()
      if(this.state.password != this.state.confirmPassword){
          this.setState({passworderror: "Passwords do not match"})
      } else {
        this.setState({passworderror: ""})
        Axios.put("/api/email/resetpassword", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            if(response.data.message === "password updated") {
                console.log("PASSWORD UPDATED SUCCESSFULLY")
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
                  <h1 className="titleforgot">This token is invalid or has expired.</h1>
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
                  <h1 className="titleforgot">Reset Password</h1>
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
                      Forgot Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
    }
    
  }
}

export default ResetPassword;
