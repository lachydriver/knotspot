import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import './styles.css';
import Start from './components/start';
import Quiz from './components/quiz';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Switch>
        <Route path="/" exact component={Start}/>
        <Route path="/quiz" component={Quiz}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
