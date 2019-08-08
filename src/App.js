import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import './styles.css';
import Start from './components/Start';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
    <div className="App">
=======
      <div className="container">
        <Switch>
        <Route path="/" exact component={Start}/>
        <Route path="/quiz" component={Quiz}/>
        </Switch>
      </div>
>>>>>>> 51cf3c6c4369d9ffeadcf617e3aedc5a65b93c61
    </div>
    </Router>
  );
}

export default App;
