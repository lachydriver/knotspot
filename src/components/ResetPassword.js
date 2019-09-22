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
      confirmPassword: ""
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

  render() {
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
            <form className="FormFields" noValidate>
              <div className="inputgrp">
                <div className="inputs">
                  <label className="labels" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                  <br />
                </div>
              </div>

              <button
                type="submit"
                className="login-btn"
                onClick={this.sendMail}
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

export default ResetPassword;
