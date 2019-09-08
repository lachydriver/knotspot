import React from "react";
import { Link } from "react-router-dom";
import robot from "../content/img/robot2.png";



class Home extends React.Component {
  render() {
    return (

      <div className="homepage">
            <Link to="/login" className="profile-button retakebutton">
            Login
            </Link>

          <div className="start">

        <h1>Knot Bot</h1>
        <img src={robot} alt='robot'/>
        <p className="fronttext">
          Welcome to the Muscle Strain Diagnostic Software. This software is
          used to determine the cause of any specific pain you have in your
          body.
          <br />
          To use this quiz, please press the below start button and follow the
          questions all the way until the end. Click on your answer to the
          question and then click the next button. On the last question please
          press the "Finish" button.
          <br />
          At the end of the quiz you will receive a list of muscles that will be
          the most likely cause for your pain, and any self help that might be
          available to help relieve your pain.
        </p>
        <Link to="/quiz" className="start-button">
          Start Diagnostic
        </Link>

      </div>

      </div>
    );
  }
}

export default Home;
