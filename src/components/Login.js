import React from "react";
import './login.css';
import { NavLink } from 'react-router-dom'
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
            username: '',
            password: '',
            errors: {}
        };



  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(userData)
  }


  render(){

    const { errors } = this.state;
    return (


    <div className="form-root">
      <div className="form">

      <div className="PageSwitcher">
              <NavLink to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>

            </div>
                <div className='login'>
                <h1 className='title'>Login</h1>
                <form className="FormFields" onSubmit={this.onSubmit} noValidate>
                  <div className='inputgrp'>
                        <div className="inputs">
                        <label className="labels" htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" className="login-input" value={this.state.username} onChange={this.onChange} />
                        </div>

                        <div className="inputs">
                        <label className="labels" htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" id="password" value={this.state.password} onChange={this.onChange} />
                        </div>
                        </div>

                        <button type="submit" className="login-btn">Login</button>
                  </form>
              </div>

      </div>
    </div>
)
  }
};

export default Login;
