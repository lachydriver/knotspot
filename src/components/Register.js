import React from "react";
import "./login.css";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../actions/authActions";
import  classnames  from "classnames";
import { throwStatement } from "@babel/types";

class Register extends React.Component {
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

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
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

    this.props.registerUser(newUser, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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
                    className={classnames("", {
                      invalid: errors.username
                    })}
                    error={errors.username}
                    value={this.state.username}
                    onChange={this.onChange}
                  /><br/>
                  <span className="red-text">{errors.username}</span>
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
                    className={classnames("", {
                      invalid: errors.email
                    })}
                    value={this.state.email}
                    onChange={this.onChange}
                  /><br/>
                  <span className="red-text">{errors.email}</span>
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={classnames("", {
                      invalid: errors.password
                    })}
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                  /><br/>
                  <span className="red-text">{errors.password}</span>
                </div>
              </div>
              <button
                className="reg-btn"
                type="submit"
                onClick={this.onSubmit}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
