import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      username: null,
      email: null,
      password: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUsertoDB = this.addUsertoDB.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  addUsertoDB = () => {
    axios.post('http://localhost:3001/api/postUser',{
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    });
    console.log('added ' + this.state.username + 'to database');
  }

  render() {
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
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="inputgrp">
                <div className="inputs">
                  <label className="labels" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="register-input"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="register-input"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="register-input"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button
                type="button"
                className="reg-btn"
                onClick={() => this.addUsertoDB()}
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
