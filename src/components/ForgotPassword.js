import React from "react";
import Helmet from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  sendMail = e => {
    e.preventDefault();
    this.setState({error: "Sending email..."});
    Axios.post("/api/email/forgotpassword", { email: this.state.email })
      .then(response => {
        this.setState({error: "Email sent successfully"});
      })
      .catch(err => {
        if(err.response.status === 400){
          this.setState({error: "Email required"})
        } else if(err.response.status === 404){
          this.setState({error: "Email not found"})
        }
      });
  };

  render() {
    return (
      <div className="form-root">
        <Helmet>
          <title>Knot Spot - Forgot Password</title>
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
            <h1 className="titleforgot">Forgot Password</h1>
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
                  {this.state.error}
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

export default ForgotPassword;
