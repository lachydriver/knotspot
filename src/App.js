import React from 'react';
import './App.css';
import QuizContainer from './components/QuizContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quiz" component={QuizContainer}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
