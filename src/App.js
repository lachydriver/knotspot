import React from 'react';
import './App.css';
import QuizContainer from './components/QuizContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import PrivateRoute from "./components/private-route/PrivateRoute";
import Profile from "./components/Profile";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from 'react-redux';
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <div>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quiz" component={QuizContainer}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
        <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
        
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
