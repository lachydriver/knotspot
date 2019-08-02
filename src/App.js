import React from 'react';
import Start from './components/start';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import './styles.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Switch>
        <Route path="/" exact component={Start}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
