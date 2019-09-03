import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value})
  };

  onSubmit = e => {
    e.preventDefault();
  
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    console.log(newUser);
  }
  

  render() {

    const { errors } = this.state;

    return (
      <div className="form-root">
        <div className="formreg">
          <div className="PageSwitcher">
            <NavLink
              exact
              to="/login"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Have an account?
            </NavLink>
          </div>
          <div className="register">
            <h1 className="titlereg">Register</h1>
            <form className="FormFields" onSubmit={this.onSubmit} noValidate>
              <div className="inputgrp">
                <div className="inputs">
                  <label className="labels" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="register-input"
                    error={errors.username}
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    error={errors.email}
                    className="register-input"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="register-input"
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <button
                className="reg-btn"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
