import React from 'react';
import './App.css';
import QuizContainer from './components/QuizContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quiz" component={QuizContainer}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
