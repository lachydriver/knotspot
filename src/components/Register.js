import React from "react";
import "./login.css";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../actions/authActions";
import classnames from "classnames";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {},
      isModalOpen: null,
      termsAccepted: false
    };
    this.openModal = this.openModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.acceptModal = this.acceptModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  acceptModal() {
    this.setState({ isModalOpen: false });
    this.setState({ termsAccepted: true });
  }

  termsModal() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        In using this software I understand that Knot Spot  not intended to replace health professional advice and that I should seek professional advice if my symptoms are not improving. I also understand that any of the suggestions given are a guide and if causing increased pain should be ceased immediately.
I have read and agree to the above statement.
        <br />
        <button onClick={this.acceptModal}>Agree</button>
      </Modal>
    );
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };

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
        {this.termsModal()}
        <Helmet>
          <title>Knot Spot - Register</title>
        </Helmet>
        <Link to="/" className="profile-button retakebutton">
          Home
        </Link>
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
                  />
                  <br />
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
                  />
                  <br />
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
                  />
                  <br />
                  <span className="red-text">{errors.password}</span>
                </div>
              </div>
              {this.state.termsAccepted ? (
                <button
                  className="reg-btn"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Register
                </button>
              ) : (
                <button
                className="reg-btn reg-btn-false"
                type="submit"
                onClick={this.onSubmit}
                disabled
              >Register</button>
              )}
            </form>
            <button onClick={this.openModal} className="start-button">Disclaimer</button>
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
