import React from "react";
import './login.css';
import { NavLink } from 'react-router-dom'
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



  };
  handleChange(e) {
          let target = e.target;
          let value = target.type === 'checkbox' ? target.checked : target.value;
          let name = target.name;

          this.setState({
            [name]: value
          });
      }

      handleSubmit(e) {
          e.preventDefault();
          axios.post('http://localhost:3001/api/loginUser', {
            username: this.state.username,
            password: this.state.password
          }).then(function(res) {
            if(res){
              console.log(res.data)
            }
          }            
          ).catch(function (error){
            console.log(error)
          })
      }



  render(){
    return (


    <div className="form-root">
      <div className="form">

      <div className="PageSwitcher">
              <NavLink to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>

            </div>
                <div className='login'>
                <h1 className='title'>Login</h1>
                <form className="FormFields" onSubmit={this.handleSubmit}>
                  <div className='inputgrp'>
                        <div className="inputs">
                        <label className="labels" htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        <div className="inputs">
                        <label className="labels" htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        </div>

                        <button type="button" type="submit" className="login-btn" onClick={this.handleSubmit.bind(this)} >Login</button>
                  </form>
              </div>

      </div>
    </div>
)
  }
};

export default Login;
