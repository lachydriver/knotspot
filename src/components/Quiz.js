import React from "react";
import { QuizQuest } from "./QuizQuest";
import diagram from "../content/img/Front.png";

class Quiz extends React.Component {
  constructor() {
    super();
    this.showDiagram = this.showDiagram.bind(this);
  }
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
    disabled: true
    //results: {},
    //score: 0
  };

  results = {};

  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: QuizQuest[currentQuestion].question,
        options: QuizQuest[currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestion = () => {
    const { userAnswer_1 } = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
  };

  //update component
  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: QuizQuest[currentQuestion].question,
          options: QuizQuest[currentQuestion].options
        };
      });
    }
  }

  prevQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion - 1
    });
  };

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

  //ordered = [];
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
      //this.results.push({key: "Para-cevicals", value: 5})
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
      userAnswer_7: null
    });
    this.results = {};
  };

  buttonPressed = e => {
    e.preventDefault();
    let tag = e.target.id;
    this.checkAnswer(tag);
  };

  showDiagram = () => {
    if (this.state.currentQuestion === 0) {
      return (
        <div>
          <img src={diagram} usemap="#image-map" />

          <map name="image-map">
            <area
              target=""
              alt="neck"
              title="neck"
              id="Neck"
              onClick={e => this.buttonPressed(e)}
              coords="130,84,131,105,169,105,167,84"
              shape="poly"
            />
            <area
              target=""
              alt="leftshoulder"
              title="leftshoulder"
              id="leftshoulder"
              onClick={e => this.buttonPressed(e)}
              href=""
              coords="114,109,71,120,70,162"
              shape="poly"
            />
            <area
              target=""
              alt="rightshoulder"
              title="rightshoulder"
              id="rightshoulder"
              onClick={e => this.buttonPressed(e)}
              href=""
              coords="185,114,225,117,234,162"
              shape="poly"
            />
            <area
              target=""
              alt="ribs"
              title="ribs"
              href=""
              coords="97,177,111,227,193,222,199,182"
              shape="poly"
            />
            <area
              target=""
              alt="hamstrings"
              title="hamstrings"
              href=""
              coords="92,259,151,320,208,258,210,408,95,413"
              shape="poly"
            />
            <area
              target=""
              alt="foot"
              title="foot"
              href=""
              coords="111,575,188,575,201,602,101,603"
              shape="poly"
            />
            <area target="" alt="" title="" href="" coords="" shape="0" />
          </map>
        </div>
      );
    }
  };
  // items = Object.keys(this.results).map(function(key){
  //     return [key, this.results[key]]
  // });

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
      //var top_result = this.ordered.slice(0, 2)
      return (
        <div className="End">
          <h2>End of the quiz, Congratulation!</h2>
          <h4>The most likelihood muscle strain are: </h4>
          {/* <p>{Object.keys(this.results).map((key) =>(
                            <p className="ui floating message opions" key={key}
                            
                            >{key} {this.results[key]}</p>
                        ))}</p> */}
          <ol>
            {final.map((item, index) => (
              <li className="ui floating message opions" key={index}>
                <b>Muscle: </b>
                {item[0]} <b>Score: </b>
                {item[1]}
              </li>
            ))}
          </ol>
          <button onClick={this.restartHandle}>Re-take the quiz</button>
        </div>
      );
    }

    return (
      <div className="App">
        <h2>Question: {questions}</h2>
        <span>{`Questions ${currentQuestion} out of ${QuizQuest.length -
          1}`}</span>
        <div className="answers">
          {options.map(option => (
            <p
              key={option}
              className={`ui floating message options 
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
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
        </div>
        <div className="diagram">{this.showDiagram()}</div>
        {currentQuestion < QuizQuest.length - 1 && (
          <button disabled={this.state.disabled} onClick={this.nextQuestion}>
            Next
          </button>
        )}
        {currentQuestion !== 0 && (
          <button onClick={this.prevQuestion}>Back</button>
        )}
        {currentQuestion === QuizQuest.length - 1 && (
          <button onClick={this.finishHandler}>Finish</button>
        )}
      </div>
    );
  }
}

export default Quiz;
