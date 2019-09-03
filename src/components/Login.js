import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./../actions/authActions";
import classnames from "classnames";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  };

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="form-root">
        <div className="form">
          <div className="PageSwitcher">
            <NavLink
              to="/register"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Register
            </NavLink>
          </div>
          <div className="login">
            <h1 className="title">Login</h1>
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
                    className={classnames("", {
                      invalid: errors.username || errors.username
                    })}
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <span className="red-text">
                    {errors.username}
                    {errors.usernamenotfound}
                  </span>
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                    id="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);