import React from "react";
import { QuizQuest } from "./QuizQuest";
import diagram from "../content/img/Front.png";
import backdiagram from "../content/img/Back.png";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { SizeMe } from 'react-sizeme';
import { Link } from "react-router-dom";
import ImageMapper from "react-image-mapper";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width: '20%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

class Quiz extends React.Component {
  constructor() {
    super();
    this.showDiagram = this.showDiagram.bind(this);
    this.determineClass = this.determineClass.bind(this);
    this.determineButtons = this.determineButtons.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  //Set default state for answers and options
  state = {
    userAnswer_1: null,
    userAnswer_2: null,
    userAnswer_3: null,
    userAnswer_4: null,
    userAnswer_5: null,
    userAnswer_6: null,
    userAnswer_7: null,
    currentQuestion: 0,
    options: [],
    quizEnd: false,
    disabled: true,
    diagram: "front",
    saveresultmessage: false,
    hoveredMuscle: null,
    isModalOpen: null
  };

  closeModal(){
    this.setState({isModalOpen: false})
  }

  results = {};

  //Load the quiz
  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: QuizQuest[currentQuestion].question,
        options: QuizQuest[currentQuestion].options
      };
    });
  };

  //Display terms and conditions based on whether user is signed in or not
  componentDidMount() {
    this.loadQuiz();
    if(this.props.auth.isAuthenticated === false){
      this.setState({isModalOpen: true});
    } else {
      this.setState({isModalOpen: false});
    }
  }

  //Proceed to the next question when user answers
  nextQuestion = () => {
    if (this.state.currentQuestion <= 5) {
      console.log("question");
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        disabled: true
      });
    } else {
      this.setState({
        disabled: true
      });
      this.finishHandler();
    }
  };

  //update component
  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          questions: QuizQuest[currentQuestion].question,
          options: QuizQuest[currentQuestion].options
        };
      });
    }
  }

  prevQuestion = () => {
    this.setState({
      disabled: false,
      currentQuestion: this.state.currentQuestion - 1
    });
  };

  //Check if all questions have been answered
  checkAnswer = answer => {
    if (this.state.currentQuestion === 0) {
      this.setState({
        userAnswer_1: answer,
        disabled: false
      });
    } else if (this.state.currentQuestion === 1) {
      this.setState({
        userAnswer_2: answer,
        disabled: false
      });
    } else if (this.state.currentQuestion === 2) {
      this.setState({
        userAnswer_3: answer,
        disabled: false
      });
    } else if (this.state.currentQuestion === 3) {
      this.setState({
        userAnswer_4: answer,
        disabled: false
      });
    } else if (this.state.currentQuestion === 4) {
      this.setState({
        userAnswer_5: answer,
        disabled: false
      });
    } else if (this.state.currentQuestion === 5) {
      this.setState({
        userAnswer_6: answer,
        disabled: false
      });
    } else if (this.state.currentQuestion === 6) {
      this.setState({
        userAnswer_7: answer,
        disabled: false
      });
    }
  };

  //Add up the scores of each muscle depending on the answer to each question
  finishHandler = () => {
    const {
      userAnswer_1,
      userAnswer_2,
      userAnswer_3,
      userAnswer_4,
      userAnswer_5,
      userAnswer_6,
      userAnswer_7
    } = this.state;
    if (this.state.currentQuestion === QuizQuest.length - 1) {
      this.setState({
        quizEnd: true
      });
    }
    if (userAnswer_1 === "Neck") {
      this.results["Para-cevicals"] = (this.results["Para-cevicals"] || 0) + 5;
      this.results["Scalene"] = (this.results["Scalene"] || 0) + 5;
    } else if (userAnswer_1 === "Top of shoulders") {
      this.results["Upper trapezius"] =
        (this.results["Upper trapezius"] || 0) + 5;
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 5;
    } else if (userAnswer_1 === "Front of shoulder") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 5;
    } else if (userAnswer_1 === "Shoulder into arm") {
      this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 5;
      this.results["Middle deltoid"] =
        (this.results["Middle deltoid"] || 0) + 5;
    } else if (userAnswer_1 === "Back of shoulder") {
      this.results["Posterior deltoid"] =
        (this.results["Posterior deltoid"] || 0) + 10;
    } else if (userAnswer_1 === "Scapular") {
      this.results["Infraspinatus"] = (this.results["Infraspinatus"] || 0) + 5;
      this.results["Subscapularis"] = (this.results["Subscapularis"] || 0) + 5;
    } else if (userAnswer_1 === "Behind scapula") {
      this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 10;
      this.results["Scalene"] = (this.results["Scalene"] || 0) + 6;
    } else if (userAnswer_1 === "Ribs") {
      this.results["Serratus anterior"] =
        (this.results["Serratus anterior"] || 0) + 10;
    } else if (userAnswer_1 === "Biceps") {
      this.results["Biceps"] = (this.results["Biceps"] || 0) + 3;
      this.results["Brachialis"] = (this.results["Brachialis"] || 0) + 3;
      this.results["Brachioradialis"] =
        (this.results["Brachioradialis"] || 0) + 3;
    } else if (userAnswer_1 === "Back of upper arm") {
      this.results["Triceps"] = (this.results["Triceps"] || 0) + 10;
    } else if (userAnswer_1 === "Upper back") {
      this.results["Thoracic paraspinals ILS"] =
        (this.results["Thoracic paraspinals ILS"] || 0) + 5;
      this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 5;
    } else if (userAnswer_1 === "Middle back") {
      this.results["Thoracic paraspinals ILS"] =
        (this.results["Thoracic paraspinals ILS"] || 0) + 10;
    } else if (userAnswer_1 === "Lower back") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 6;
      this.results["Lumbar paraspinals"] =
        (this.results["Lumbar paraspinals"] || 0) + 3;
      this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 3;
    } else if (userAnswer_1 === "Sacrum") {
      this.results["Gluteus maximus"] =
        (this.results["Gluteus maximus"] || 0) + 3;
    } else if (userAnswer_1 === "Gluteal muscles") {
      this.results["Gluteus maximus"] =
        (this.results["Gluteus maximus"] || 0) + 3;
      this.results["Gluteus Medius"] =
        (this.results["Gluteus Medius"] || 0) + 4;
      this.results["Gluteus minimums"] =
        (this.results["Gluteus minimums"] || 0) + 3;
    } else if (userAnswer_1 === "Hips") {
      this.results["Tensor fascialatae"] =
        (this.results["Tensor fascialatae"] || 0) + 3;
      this.results["Bursa"] = (this.results["Bursa"] || 0) + 3;
      this.results["ITB"] = (this.results["ITB"] || 0) + 3;
    } else if (userAnswer_1 === "Side of upper leg") {
      this.results["ITB"] = (this.results["ITB"] || 0) + 10;
    } else if (userAnswer_1 === "Thighs/quads") {
      this.results["Vastus lateralis"] =
        (this.results["Vastus lateralis"] || 0) + 5;
      this.results["Vastus medialis"] =
        (this.results["Vastus medialis"] || 0) + 5;
    } else if (userAnswer_1 === "Hamstrings") {
      this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 10;
    } else if (userAnswer_1 === "Front of knee") {
      this.results["Patella tendon"] =
        (this.results["Patella tendon"] || 0) + 4;
    } else if (userAnswer_1 === "Back of knee") {
      this.results["Popliteus"] = (this.results["Popliteus"] || 0) + 6;
    } else if (userAnswer_1 === "Front of lower leg") {
      this.results["Tibialis anterior"] =
        (this.results["Tibialis anterior"] || 0) + 4;
      this.results["Shin splints"] = (this.results["Shin splints"] || 0) + 4;
    } else if (userAnswer_1 === "Calf") {
      this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 6;
      this.results["Soleus"] = (this.results["Soleus"] || 0) + 4;
    } else if (userAnswer_1 === "Inner ankle") {
      this.results["Ligamentous strain"] =
        (this.results["Ligamentous strain"] || 0) + 5;
    } else if (userAnswer_1 === "Outer ankle") {
      this.results["Ligamentous strain"] =
        (this.results["Ligamentous strain"] || 0) + 5;
    } else if (userAnswer_1 === "Foot") {
      this.results["Plantar fascia"] =
        (this.results["Plantar fascia"] || 0) + 3;
      this.results["Long flexors"] = (this.results["long flexors"] || 0) + 2;
      this.results["Long extensors"] =
        (this.results["Long extensors"] || 0) + 2;
    }

    if (userAnswer_2 === "Lifting upright") {
      this.results["Biceps"] = (this.results["Biceps"] || 0) + 3;
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 3;
    } else if (userAnswer_2 === "Lifting back bent") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 10;
      this.results["Lumbar paraspinals"] =
        (this.results["Lumbar paraspinals"] || 0) + 5;
      this.results["Glutes"] = (this.results["Glutes"] || 0) + 3;
    } else if (userAnswer_2 === "Lifting above shoulder") {
      this.results["Upper trapezius"] =
        (this.results["Upper trapezius"] || 0) + 5;
    } else if (userAnswer_2 === "Lifting to side") {
      this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 10;
      this.results["Middle deltoid"] =
        (this.results["Middle deltoid"] || 0) + 6;
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 4;
    } else if (userAnswer_2 === "Pushing forward") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 7;
      this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 5;
    } else if (userAnswer_2 === "Pulling back") {
      this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 7;
      this.results["Posterior deltoid"] =
        (this.results["Posterior deltoid"] || 0) + 5;
    } else if (userAnswer_2 === "Pulling down") {
      this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10;
      this.results["Teres major"] = (this.results["Teres major"] || 0) + 5;
      this.results["Serratus anterior"] =
        (this.results["Serratus anterior"] || 0) + 5;
    } else if (userAnswer_2 === "Computer work") {
      this.results["Upper trapezius"] =
        (this.results["Upper trapezius"] || 0) + 10;
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 6;
    } else if (userAnswer_2 === "Throwing") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 6;
      this.results["Serratus anterior"] =
        (this.results["Serratus anterior"] || 0) + 5;
    } else if (userAnswer_2 === "Running") {
      this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 6;
      this.results["Quadriceps"] = (this.results["Quadriceps"] || 0) + 4;
    } else if (userAnswer_2 === "Kicking") {
      this.results["Popliteus"] = (this.results["Popliteus"] || 0) + 4;
      this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 6;
    } else if (userAnswer_2 === "Sitting") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 10;
      this.results["Sacrum"] = this.results["Sacrum"] || 0 + 10;
    } else if (userAnswer_2 === "Whiplash") {
      this.results["Cervical paraspinals"] =
        (this.results["Cervical paraspinals"] || 0) + 10;
      this.results["Scalene"] = this.results["Scalene"] || 0 + 10;
      this.results["Sternocleidomastoid SCM"] =
        (this.results["Sternocleidomastoid SCM"] || 0) + 5;
    } else if (userAnswer_2 === "Falling") {
      this.results["Sacrum"] = (this.results["Sacrum"] || 0) + 10;
    } else if (userAnswer_2 === "other") {
      console.log("Other");
    }

    if (userAnswer_3 === "Work Heavy") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 2;
      this.results["Glutes"] = (this.results["Glutes"] || 0) + 3;
      this.results["Psoas"] = (this.results["Psoas"] || 0) + 2;
    } else if (userAnswer_3 === "Work medium") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 2;
    } else if (userAnswer_3 === "Work light") {
      this.results["Upper trapezius"] =
        (this.results["Upper trapezius"] || 0) + 4;
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 4;
    } else if (userAnswer_3 === "Work sedentary") {
      this.results["Upper trapezius"] =
        (this.results["Upper trapezius"] || 0) + 3;
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 3;
    }

    if (userAnswer_4 === "Car") {
      this.results["Para-cevicals"] = (this.results["Para-cevicals"] || 0) + 5;
      console.log(this.results);
      this.results["Scalene"] = (this.results["Scalene"] || 0) + 5;
    } else if (userAnswer_4 === "Work") {
      console.log("Work");
    } else if (userAnswer_4 === "Sport") {
      this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 3;
      this.results["Quads"] = this.results["Quads"] || 0 + 3;
      this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 2;
    } else if (userAnswer_4 === "Home") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 3;
    } else if (userAnswer_4 === "Bicycle") {
      this.results["Quads"] = (this.results["Quads"] || 0) + 0;
    }

    if (userAnswer_5 === "Straightening up after getting out of chair") {
      this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10;
    } else if (userAnswer_5 === "Bending") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 10;
      this.results["Gluteus medius"] =
        (this.results["Gluteus medius"] || 0) + 5;
      this.results["Lumbar paraspinals"] =
        (this.results["Lumbar paraspinals"] || 0) + 5;
    } else if (userAnswer_5 === "Looking down to read") {
      this.results["Paracevicals"] = (this.results["Paracevicals"] || 0) + 10;
    } else if (userAnswer_5 === "Holding book") {
      this.results["Scalene"] = (this.results["Scalene"] || 0) + 10;
    } else if (userAnswer_5 === "Repetitive lifting") {
      this.results["Scalene"] = (this.results["Scalene"] || 0) + 10;
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 10;
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 10;
    } else if (userAnswer_5 === "Pushing shopping trolley") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 10;
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 5;
      this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10;
    } else if (userAnswer_5 === "Computer work") {
      this.results["Upper trapezius"] =
        (this.results["Upepr trapezius"] || 0) + 10;
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 5;
    } else if (userAnswer_5 === "Driving") {
      this.results["Sacrum"] = (this.results["Sacrum"] || 0) + 10;
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 10;
    } else if (userAnswer_5 === "Hanging out washing") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 7;
      this.results["Scalene SCM"] = (this.results["Scalene SCM"] || 0) + 10;
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 5;
      this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 5;
    } else if (userAnswer_5 === "Vacuuming") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 5;
      this.results["Gluteus medius"] =
        (this.results["Gluteus medius"] || 0) + 5;
    } else if (userAnswer_5 === "Running") {
      this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 10;
    } else if (userAnswer_5 === "Stair climbing") {
      this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10;
      this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 5;
    } else if (userAnswer_5 === "Looking up") {
      this.results["Para-cevical"] = (this.results["Para-cevical"] || 0) + 5;
    } else if (userAnswer_5 === "Lifting arm out to the side") {
      this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 10;
      this.results["Middle deltoid"] =
        (this.results["Middle deltoid"] || 0) + 7;
    } else if (userAnswer_5 === "Lifting up and across body") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 10;
    }

    if (userAnswer_6 === "Turning head to the side of pain") {
      this.results["Levator scapulae"] =
        (this.results["Levator scapulae"] || 0) + 10;
    } else if (userAnswer_6 === "Turning head away from side of pain") {
      this.results["Upper trapezius"] =
        (this.results["Upper trapezius"] || 0) + 10;
    } else if (userAnswer_6 === "Extending head back") {
      this.results["Scalene"] = (this.results["Scalene"] || 0) + 5;
      this.results["SCM"] = (this.results["SCM"] || 0) + 3;
    } else if (userAnswer_6 === "Tucking chin down") {
      this.results["Cervical paraspinals"] =
        (this.results["Cervical paraspinals"] || 0) + 3;
    } else if (userAnswer_6 === "Touching toes") {
      this.results["Quadratus lumborum"] =
        (this.results["Quadratus lumborum"] || 0) + 10;
    } else if (userAnswer_6 === "Reaching up to the side") {
      this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 10;
      this.results["Middle deltoid"] =
        (this.results["Middle deltoid"] || 0) + 5;
    } else if (userAnswer_6 === "Reaching behind back") {
      this.results["Anterior deltoid"] =
        (this.results["Anterior deltoid"] || 0) + 10;
    } else if (userAnswer_6 === "Reaching forward") {
      this.results["Posterior deltoid"] =
        (this.results["Posterior deltoid"] || 0) + 10;
      this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 5;
    } else if (userAnswer_6 === "Reaching to touch beside ear") {
      this.results["Triceps"] = (this.results["Triceps"] || 0) + 10;
    } else if (userAnswer_6 === "Lifting straight leg up") {
      this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 10;
    } else if (userAnswer_6 === "Squatting down") {
      this.results["Glutes"] = (this.results["Glutes"] || 0) + 10;
      this.results["Quads"] = (this.results["Quads"] || 0) + 5;
    } else if (userAnswer_6 === "Extending toes back") {
      this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 5;
    }

    if (userAnswer_7 === "Nil") {
      console.log("Nothing");
    } else if (userAnswer_7 === "Thumb and 1st 2 fingers") {
      this.results["Median nerve"] = (this.results["Median nerve"] || 0) + 25;
    } else if (userAnswer_7 === "4th and 5th fingers") {
      this.results["Median nerve entrapment"] =
        (this.results["Median nerve entrapment"] || 0) + 25;
    } else if (userAnswer_7 === "Right arm generalised") {
      console.log("Nothing");
    } else if (userAnswer_7 === "Right arm Specific area/band") {
      this.results["Cervical nerve"] =
        (this.results["Cervical nerve"] || 0) + 25;
    } else if (userAnswer_7 === "Back of leg") {
      this.results["Piriformis"] = (this.results["Piriformis"] || 0) + 20;
    } else if (userAnswer_7 === "Leg, specific area") {
      this.results["Possible disc injury"] =
        (this.results["Possible disc injury"] || 0) + 25;
    }
  };

  //Restart the quiz by resetting all states to default
  restartHandle = () => {
    this.setState({
      quizEnd: false,
      currentQuestion: 0,
      userAnswer_1: null,
      userAnswer_2: null,
      userAnswer_3: null,
      userAnswer_4: null,
      userAnswer_5: null,
      userAnswer_6: null,
      userAnswer_7: null,
      saveresultmessage: false
    });
    this.results = {};
  };

  buttonPressed = e => {
    let tag = e._id;
    this.checkAnswer(tag);
  };

  determineClass = () => {
    if (this.state.currentQuestion === 0) {
      return "firstquestion";
    } else {
      return "answers";
    }
  };

  //Save results and push them to the database
  saveResults = () => {
    var re = this.results;
    var ordered = [];
    for (var r in re) {
      ordered.push([r, re[r]]);
    }
    ordered.sort(function(a, b) {
      return a[1] - b[1];
    });
    var final = ordered.reverse().slice(0, 4);
    console.log(final);
    axios
      .post("/api/results/saveresults", {
        user_id: this.props.auth.user.id,
        results: final,
        firstbone: this.state.userAnswer_1
      })
      .then(res => {
        console.log(res);
        this.setState({
          saveresultmessage: true
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  showSaveMessage = () => {
    if(this.state.saveresultmessage === true){
      return(<p>Result has been saved to your <Link to="/profile">profile</Link></p>)
    }
  }

  determineButtons = () => {
    if (this.state.currentQuestion === 0) {
      return "buttonsfirst";
    } else {
      return "buttons";
    }
  };

  changeDiagram = e => {
    this.setState({hoveredMuscle: null})
    if (e === "front") {
      this.setState({ diagram: "front" });
    } else if (e === "back") {
      this.setState({ diagram: "back" });
    }
  };

  showButtons = () => {
    if (this.state.currentQuestion === 0) {
      return (
        <div>
          <button onClick={e => this.changeDiagram("front")}>Front</button>
          <button onClick={e => this.changeDiagram("back")}>Back</button>
        </div>
      );
    }
  };

  showSaveResultButton = () => {
    if (this.props.auth.isAuthenticated === true) {
      if(this.state.saveresultmessage === false){
      return (
        <button onClick={this.saveResults} className="retakebutton">
          Save Results
        </button>
      );
      } else {
        return("")
      }
    } else {
      return <p>Sign in to save your results</p>;
    }
  };

  enterArea(area){
    this.setState({hoveredMuscle: area})
  }

  leaveArea(area){
    this.setState({hoveredMuscle: null})
  }

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  //Display the front/back diagram depending on which button has been pushed
  showDiagram = () => {
    const MAP = {
      name: "my-map",
      areas: [
        { name: "Neck", _id: "Neck", shape: "poly", coords: [133,80,113,111,193,111,166,84], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Top of shoulders", _id: "Top of shoulders", shape: "poly", coords: [73,114,224,115,229,152,152,149,70,152], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Ribs", _id: "Ribs", shape: "poly", coords: [94,152,101,266,199,264,206,160], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Hips", _id: "Hips", shape: "poly", coords: [98,269,204,267,209,309,90,311], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Calf", _id: "Calf", shape: "poly", coords: [159,509,168,549,190,556,212,472,207,408,168,428], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Calf", _id: "Calf", shape: "poly", coords: [96,422,92,477,106,539,136,539,137,511,131,434], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Thighs", _id: "Thighs/quads", shape: "poly", coords: [89,319,91,405,133,426,148,320], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Thighs", _id: "Thighs/quads", shape: "poly", coords: [157,323,211,318,207,402,167,420], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Foot", _id: "Foot", shape: "poly", coords: [169,562, 188,570, 200,605, 164,605], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Foot", _id: "Foot", shape: "poly", coords: [131,565, 113,577, 107,591, 101,603, 138,606], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Bicep", _id: "Biceps", shape: "poly", coords: [63,161,46,215,72,223,89,184,92,158], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Bicep", _id: "Biceps", shape: "poly", coords: [208,167,214,192,226,217,248,206,239,163], fillColor: "rgba(255, 255, 255, 0.8)"},
      ]
    }

    const BACK_MAP = {
      name: "back-map",
      areas: [
        { name: "Back of shoulder", _id: "Back of shoulder", shape: "poly", coords: [91,121,68,132,63,160,119,152,200,155,224,152,217,132,182,119], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Middle back", _id: "Middle back", shape: "poly", coords: [92,189,201,187,193,207,190,229,100,229,98,213], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Lower back", _id: "Lower back", shape: "poly", coords: [100,231,190,232,198,279,90,282], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Back of knee", _id: "Back of knee", shape: "poly", coords: [89,440,86,485,125,487,121,471,128,443], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Back of knee", _id: "Back of knee", shape: "poly", coords: [161,446,164,466,162,487,203,489,202,467,200,446], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Hips", _id: "Hips", shape: "poly", coords: [88,285,200,282,205,324,82,332], fillColor: "rgba(255, 255, 255, 0.8)"},
        { name: "Behind Scapula", _id: "Behind Scapula", shape: "poly", coords: [118,153,119,186,164,185,164,156], fillColor: "rgba(255, 255, 255, 0.8)"},
      ]
    }

    if (this.state.currentQuestion === 0 && this.state.diagram === "front") {
      return (
        <SizeMe monitorHeight refreshRate={128} refreshMode="debounce" render={({ size }) => (
          <div className="diagramcontainer">
          <ImageMapper src={diagram} map={MAP} onClick={e => {this.checkAnswer(e); this.nextQuestion()}} width={size.width} imgWidth={302} className="diagramimage" onMouseEnter={area => this.enterArea(area)} onMouseLeave={area => this.leaveArea(area)}/>
          {this.state.hoveredMuscle &&
          <span className="tooltip" style={{...this.getTipPosition(this.state.hoveredMuscle)}}>{this.state.hoveredMuscle && this.state.hoveredMuscle.name}</span>}
          </div>
        )}/>

      );
    } else if (
      this.state.currentQuestion === 0 &&
      this.state.diagram === "back"
    ) {
      return (
        <SizeMe monitorHeight refreshRate={128} refreshMode="debounce" render={({ size }) => (
          <div className="diagramcontainer">
          <ImageMapper src={backdiagram} map={BACK_MAP} onClick={e => {this.checkAnswer(e); this.nextQuestion()}} width={size.width} imgWidth={302} className="diagramimage" onMouseEnter={area => this.enterArea(area)} onMouseLeave={area => this.leaveArea(area)}/>
          {this.state.hoveredMuscle &&
          <span className="tooltip" style={{...this.getTipPosition(this.state.hoveredMuscle)}}>{this.state.hoveredMuscle && this.state.hoveredMuscle.name}</span>}
          </div>
        )}/>
      );
    }
  };

  render() {
    const {
      questions,
      options,
      currentQuestion,
      userAnswer_1,
      quizEnd,
      userAnswer_2,
      userAnswer_3,
      userAnswer_4,
      userAnswer_5,
      userAnswer_6,
      userAnswer_7
    } = this.state;

    //Render out all of the questions
    if (quizEnd) {
      var re = this.results;
      var ordered = [];
      for (var r in re) {
        ordered.push([r, re[r]]);
      }
      ordered.sort(function(a, b) {
        return a[1] - b[1];
      });
      var final = ordered.reverse().slice(0, 4);
      console.log(final);
      const listyle = { "font-size": "1.5em" };
      return (
        <div className="End">
          <Helmet>
            <title>Knot Bot - Results</title>
          </Helmet>
          <h2>Finished Diagnostic</h2>
          <h4>The most likely muscle strain is: </h4>
          <table className="resultstable">
            <tr>
              <th style={listyle}>
                <b>Muscle</b>
              </th>
            </tr>
            {final.map((item, index) => {
              if (index === 0) {
                return (
                  <tr>
                    <td style={listyle}>{item[0]}</td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td key={index}>{item[0]}</td>
                  </tr>
                );
              }
            })}
          </table>
          <button onClick={this.restartHandle} className="retakebutton">
            Run Another Diagnostic
          </button>
          {this.showSaveResultButton()}
          {this.showSaveMessage()}
          <p>
            {" "}
            Looking for treatment? Find an occupational therapist near you from
            the following links{" "}
          </p>
          <a href="https://www.google.com/search?ei=zKVsXYz8E42-9QO4kbDwBg&q=occupational+therapist+in+brisbane&oq=occupational+therapist+in+brisbane&gs_l=psy-ab.3..0j0i22i30l9.1175488.1177455..1177567...0.6..0.264.2054.0j9j2......0....1..gws-wiz.......0i71j0i67j0i20i263.4NbRDF7Bm1k&ved=0ahUKEwiMkoSnsbHkAhUNX30KHbgIDG4Q4dUDCAo&uact=5 ">
            Therapist in Brisbane
          </a>{" "}
          <br />
          <a href="https://www.google.com/search?ei=ZqpsXcKlNJmvyAPdq5aACg&q=occupational+therapist+in+Sydney&oq=occupational+therapist+in+Sydney&gs_l=psy-ab.3..0j0i22i30l8j0i22i10i30.115338.117425..118346...0.2..0.199.1352.0j8......0....1..gws-wiz.......0i71j35i39.AqYCYwYBtWE&ved=0ahUKEwjC8P_YtbHkAhWZF3IKHd2VBaAQ4dUDCAo&uact=5 ">
            Therapist in Sydney
          </a>{" "}
          <br />
          <a href="https://www.google.com/search?ei=3qpsXd3xB428rQH344G4Dg&q=occupational+therapist+in+melbourne&oq=occupational+therapist+in+Melb&gs_l=psy-ab.1.0.0j0i22i30l9.15168.16056..17056...0.2..0.177.665.0j4......0....1..gws-wiz.......0i71.WLUfFeFzOYA ">
            Therapist in Melbourne
          </a>{" "}
          <br />
          <a href="https://www.google.com/search?q=occupational+therapist+in+perth&rlz=1C1GCEA_enAU843AU843&oq=occupational+therapist+in+perth&aqs=chrome..69i57j0l5.5370j0j7&sourceid=chrome&ie=UTF-8">Therapist in Perth</a> <br />
          <a href="https://www.google.com/search?rlz=1C1GCEA_enAU843AU843&sxsrf=ACYBGNQvXhR2prS2g0qpyZgesEw88qaXmg%3A1570179409672&ei=UQmXXb3OKJDdrQG04IOoBg&q=occupational+therapist+in+darwin&oq=occupational+therapist+in+darwin&gs_l=psy-ab.3..0i22i30l5.10534.12883..13030...1.2..0.275.1366.0j6j1......0....1..gws-wiz.......0i71j0.-QOeWgQ-K-s&ved=0ahUKEwj9usmPnoLlAhWQbisKHTTwAGUQ4dUDCAs&uact=5">Therapist in Darwin</a> <br />
        </div>
      );
    }

    return (
      <div className="App">
        <Helmet>
          <title>Knot Spot - Quiz</title>
        </Helmet>
        <Modal
          isOpen={this.state.isModalOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2>Disclaimer</h2>
          <p>In using this software I understand that Knot Spot  not intended to replace health professional advice and that I should seek professional advice if my symptoms are not improving. I also understand that any of the suggestions given are a guide and if causing increased pain should be ceased immediately.
<br/><br/>You will not be able to save your results if you continue without being signed into an account.<br/><br/>I have read and agree to the above statement.</p>
          <button onClick={this.closeModal}>Accept</button>
        </Modal>
        <h2>
          Question {this.state.currentQuestion + 1}/7: {questions}
        </h2>
        <div className={this.determineClass()}>
          {options.map(option => (
            <p
              key={option}
              className={`floating ui message options
                        ${
                          userAnswer_1 === option ||
                          userAnswer_2 === option ||
                          userAnswer_3 === option ||
                          userAnswer_4 === option ||
                          userAnswer_5 === option ||
                          userAnswer_6 === option ||
                          userAnswer_7 === option
                            ? "selected"
                            : null
                        }
                        `}
              onClick={() => {
                this.checkAnswer(option);
                this.nextQuestion();
              }}
            >
              {option}
            </p>
          ))}
        </div>
        <div className="diagram">
          {this.showButtons()}
          {this.showDiagram()}
        </div>
        <div className={this.determineButtons()}>
          {currentQuestion !== 0 && (
            <button onClick={this.prevQuestion}>Back</button>
          )}
        </div>
        <Link to="/" className="retakebutton homebutton">
          Home
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Quiz);
