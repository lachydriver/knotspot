import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quiz" component={Quiz}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
