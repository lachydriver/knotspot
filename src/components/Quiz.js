import React from 'react';
import {QuizQuest} from './QuizQuest';

class Quiz extends React.Component{
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd: false,
        disabled: true,
        //results: {},
        //score: 0
    }

    results = {};

    loadQuiz = () => {
        const {currentQuestion} = this.state;
        this.setState(() =>{
            return {
                questions: QuizQuest[currentQuestion].question,
                options: QuizQuest[currentQuestion].options
            };
        });
    };

    componentDidMount(){
        this.loadQuiz();
    }

    nextQuestion = () => {
        const {userAnswer} = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
        if(this.state.currentQuestion === 0){
            if(userAnswer === "Neck"){
                this.results["Para-cevicals"] = (this.results["Para-cevicals"] || 0) + 5
                this.results["Scalene"] = (this.results["Scalene"] || 0) + 5
                console.log(this.results)
                
                // this.setState({
                //     score: score + 5
                // })
            }else if(userAnswer === "Top of shoulders"){
                this.results["Upper trapezius"] = (this.results["Upper trapezius"] || 0) + 5
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 5
            }else if(userAnswer === "Front of shoulder"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 5
            }else if(userAnswer === "Shoulder into arm"){
                this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 5
                this.results["Middle deltoid"] = (this.results["Middle deltoid"] || 0) + 5
            }else if(userAnswer === "Back of shoulder"){
                this.results["Posterior deltoid"] = (this.results["Posterior deltoid"] || 0) + 10
            }else if(userAnswer === "Scapular"){
                this.results["Infraspinatus"] = (this.results["Infraspinatus"] || 0) + 5
                this.results["Subscapularis"] = (this.results["Subscapularis"] || 0) + 5
            }else if(userAnswer === "Behind scapula"){
                this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 10
                this.results["Scalene"] = (this.results["Scalene"] || 0) + 6
            }else if(userAnswer === "Ribs"){
                this.results["Serratus anterior"] = (this.results["Serratus anterior"] || 0) + 10
            }else if(userAnswer === "Biceps"){
                this.results["Biceps"] = (this.results["Biceps"] || 0) + 3
                this.results["Brachialis"] = (this.results["Brachialis"] || 0) + 3
                this.results["Brachioradialis"] = (this.results["Brachioradialis"] || 0) + 3
            }else if(userAnswer === "Back of upper arm"){
                this.results["Triceps"] = (this.results["Triceps"] || 0) + 10
                
            }else if(userAnswer === "Upper back"){
                this.results["Thoracic paraspinals ILS"] = (this.results["Thoracic paraspinals ILS"] || 0) + 5
                this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 5
            }else if(userAnswer === "Middle back"){
                this.results["Thoracic paraspinals ILS"] = (this.results["Thoracic paraspinals ILS"] || 0) + 10
            }else if(userAnswer === "Lower back"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 6
                this.results["Lumbar paraspinals"] = (this.results["Lumbar paraspinals"] || 0) + 3
                this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 3
            }else if(userAnswer === "Sacrum"){
                this.results["Gluteus maximus"] = (this.results["Gluteus maximus"] || 0) + 3
            }else if(userAnswer === "Gluteal muscles"){
                this.results["Gluteus maximus"] = (this.results["Gluteus maximus"] || 0) + 3
                this.results["Gluteus Medius"] = (this.results["Gluteus Medius"] || 0) + 4
                this.results["Gluteus minimums"] = (this.results["Gluteus minimums"] || 0) + 3
            }else if(userAnswer === "Hips"){
                this.results["Tensor fascialatae"] = (this.results["Tensor fascialatae"] || 0) + 3
                this.results["Bursa"] = (this.results["Bursa"] || 0) + 3
                this.results["ITB"] = (this.results["ITB"] || 0) + 3
            }else if(userAnswer === "Side of upper leg"){
                this.results["ITB"] = (this.results["ITB"] || 0) + 10
            }else if(userAnswer === "Thighs/quads"){
                this.results["Vastus lateralis"] = (this.results["Vastus lateralis"] || 0) + 5
                this.results["Vastus medialis"] = (this.results["Vastus medialis"] || 0) + 5
            }else if(userAnswer === "Hamstrings"){
                this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 10
            }else if(userAnswer === "Front of knee"){
                this.results["Patella tendon"] = (this.results["Patella tendon"] || 0) + 4
            }else if(userAnswer === "Back of knee"){
                this.results["Popliteus"] = (this.results["Popliteus"] || 0) + 6
            }else if(userAnswer === "Front of lower leg"){
                this.results["Tibialis anterior"] = (this.results["Tibialis anterior"] || 0) + 4
                this.results["Shin splints"] = (this.results["Shin splints"] || 0) + 4
            }else if(userAnswer === "Calf"){
                this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 6
                this.results["Soleus"] = (this.results["Soleus"] || 0) + 4
            }else if(userAnswer === "Inner ankle"){
                this.results["Ligamentous strain"] = (this.results["Ligamentous strain"] || 0) + 5
            }else if(userAnswer === "Outer ankle"){
                this.results["Ligamentous strain"] = (this.results["Ligamentous strain"] || 0) + 5
            }else if(userAnswer === "Foot"){
                this.results["Plantar fascia"] = (this.results["Plantar fascia"] || 0) + 3
                this.results["Long flexors"] = (this.results["long flexors"] || 0) + 2
                this.results["Long extensors"] = (this.results["Long extensors"] || 0) + 2
            }
        }else if(this.state.currentQuestion === 1){
            if(userAnswer === "Lifting upright"){
                this.results["Biceps"] = (this.results["Biceps"] || 0) + 3
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 3
            }else if(userAnswer === "Lifting back bent"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 10
                this.results["Lumbar paraspinals"] = (this.results["Lumbar paraspinals"] || 0) + 5
                this.results["Glutes"] = (this.results["Glutes"] || 0) + 3
            }else if(userAnswer === "Lifting above shoulder"){
                this.results["Upper trapezius"] = (this.results["Upper trapezius"] || 0) + 5
            }else if(userAnswer === "Lifting to side"){
                this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 10
                this.results["Middle deltoid"] = (this.results["Middle deltoid"] || 0) + 6
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 4
            }else if(userAnswer === "Pushing forward"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 7
                this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 5
            }else if(userAnswer === "Pulling back"){
                this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 7
                this.results["Posterior deltoid"] = (this.results["Posterior deltoid"] || 0) + 5
            }else if(userAnswer === "Pulling down"){
                this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10
                this.results["Teres major"] = (this.results["Teres major"] || 0) + 5
                this.results["Serratus anterior"] = (this.results["Serratus anterior"] || 0) + 5
            }else if(userAnswer === "Computer work"){
                this.results["Upper trapezius"] = (this.results["Upper trapezius"] || 0) + 10
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 6
            }else if(userAnswer === "Throwing"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 6
                this.results["Serratus anterior"] = (this.results["Serratus anterior"] || 0) + 5
            }else if(userAnswer === "Running"){
                this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 6
                this.results["Quadriceps"] = (this.results["Quadriceps"] || 0) + 4
            }else if(userAnswer === "Kicking"){
                this.results["Popliteus"] = (this.results["Popliteus"] || 0) + 4
                this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 6
            }else if(userAnswer === "Sitting"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 10
                this.results["Sacrum"] = this.results["Sacrum"] || 0 + 10
            }else if(userAnswer === "Whiplash"){
                this.results["Cervical paraspinals"] = (this.results["Cervical paraspinals"] || 0) + 10
                this.results["Scalene"] = this.results["Scalene"] || 0 + 10
                this.results["Sternocleidomastoid SCM"] = (this.results["Sternocleidomastoid SCM"] || 0) + 5
            }else if(userAnswer === "Falling"){
                this.results["Sacrum"] = (this.results["Sacrum"] || 0) + 10
            }else if(userAnswer === "other"){
                console.log("Other")
            }
        }else if(this.state.currentQuestion === 2){
            if(userAnswer === "Work Heavy"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 2
                this.results["Glutes"] = (this.results["Glutes"] || 0) + 3
                this.results["Psoas"] = (this.results["Psoas"] || 0) + 2
            }else if(userAnswer === "Work medium"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 2
            }else if(userAnswer === "Work light"){
                this.results["Upper trapezius"] = (this.results["Upper trapezius"] || 0) + 4
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 4
            }else if(userAnswer === "Work sedentary"){
                this.results["Upper trapezius"] = (this.results["Upper trapezius"] || 0) + 3
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 3
            }
        }else if(this.state.currentQuestion === 3){
            if(userAnswer === "Car"){
                this.results["Para-cevicals"] = (this.results["Para-cevicals"] || 0) + 5
                //this.results.push({key: "Para-cevicals", value: 5})
                console.log(this.results)
                this.results["Scalene"] = (this.results["Scalene"] || 0) + 5
            }else if(userAnswer === "Work"){
                console.log("Work")
            }else if(userAnswer === "Sport"){
                this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 3
                this.results["Quads"] = this.results["Quads"] || 0 + 3
                this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 2
            }else if(userAnswer === "Home"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 3
            }else if(userAnswer === "Bicycle"){
                this.results["Quads"] = (this.results["Quads"] || 0) + 0
            }
        }else if(this.state.currentQuestion === 4){
            if(userAnswer === "Straightening up after getting out of chair"){
                this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10
            }else if(userAnswer === "Bending"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 10
                this.results["Gluteus medius"] = (this.results["Gluteus medius"] || 0) + 5
                this.results["Lumbar paraspinals"] = (this.results["Lumbar paraspinals"] || 0) + 5
            }else if(userAnswer === "Looking down to read"){
                this.results["Paracevicals"] = (this.results["Paracevicals"] || 0) + 10
            }else if(userAnswer === "Holding book"){
                this.results["Scalene"] = (this.results["Scalene"] || 0) + 10
            }else if(userAnswer === "Repetitive lifting"){
                this.results["Scalene"] = (this.results["Scalene"] || 0) + 10
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 10
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 10
            }else if(userAnswer === "Pushing shopping trolley"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 10
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 5
                this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10
            }else if(userAnswer === "Computer work"){
                this.results["Upper trapezius"] = (this.results["Upepr trapezius"] || 0) + 10
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 5
            }else if(userAnswer === "Driving"){
                this.results["Sacrum"] = (this.results["Sacrum"] || 0) + 10
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 10
            }else if(userAnswer === "Hanging out washing"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 7
                this.results["Scalene SCM"] = (this.results["Scalene SCM"] || 0) + 10
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 5
                this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 5
            }else if(userAnswer === "Vacuuming"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 5
                this.results["Gluteus medius"] = (this.results["Gluteus medius"] || 0) + 5
            }else if(userAnswer === "Running"){
                this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 10
            }else if(userAnswer === "Stair climbing"){
                this.results["Psoas major"] = (this.results["Psoas major"] || 0) + 10
                this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 5
            }else if(userAnswer === "Looking up"){
                this.results["Para-cevical"] = (this.results["Para-cevical"] || 0) + 5
            }else if(userAnswer === "Lifting arm out to the side"){
                this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 10
                this.results["Middle deltoid"] = (this.results["Middle deltoid"] || 0) + 7
            }else if(userAnswer === "Lifting up and across body"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 10
            }


        }else if(this.state.currentQuestion === 5){
            if(userAnswer === "Turning head to the side of pain"){
                this.results["Levator scapulae"] = (this.results["Levator scapulae"] || 0) + 10
            }else if(userAnswer === "Turning head away from side of pain"){
                this.results["Upper trapezius"] = (this.results["Upper trapezius"] || 0) + 10
            }else if(userAnswer === "Extending head back"){
                this.results["Scalene"] = (this.results["Scalene"] || 0) + 5
                this.results["SCM"] = (this.results["SCM"] || 0) + 3
            }else if(userAnswer === "Tucking chin down"){
                this.results["Cervical paraspinals"] = (this.results["Cervical paraspinals"] || 0) + 3
            }else if(userAnswer === "Touching toes"){
                this.results["Quadratus lumborum"] = (this.results["Quadratus lumborum"] || 0) + 10
            }else if(userAnswer === "Reaching up to the side"){
                this.results["Supraspinatus"] = (this.results["Supraspinatus"] || 0) + 10
                this.results["Middle deltoid"] = (this.results["Middle deltoid"] || 0) + 5
            }else if(userAnswer === "Reaching behind back"){
                this.results["Anterior deltoid"] = (this.results["Anterior deltoid"] || 0) + 10
            }else if(userAnswer === "Reaching forward"){
                this.results["Posterior deltoid"] = (this.results["Posterior deltoid"] || 0) + 10
                this.results["Rhomboids"] = (this.results["Rhomboids"] || 0) + 5
            }else if(userAnswer === "Reaching to touch beside ear"){
                this.results["Triceps"] = (this.results["Triceps"] || 0) + 10
            }else if(userAnswer === "Lifting straight leg up"){
                this.results["Hamstrings"] = (this.results["Hamstrings"] || 0) + 10
            }else if(userAnswer === "Squatting down"){
                this.results["Glutes"] = (this.results["Glutes"] || 0) + 10
                this.results["Quads"] = (this.results["Quads"] || 0) + 5
            }else if(userAnswer === "Extending toes back"){
                this.results["Gastrocnemius"] = (this.results["Gastrocnemius"] || 0) + 5
            }

            
        }else if(this.state.currentQuestion === 6){
            if(userAnswer === "Nil"){
                console.log("Nothing")
            }else if(userAnswer === "Thumb and 1st 2 fingers"){
                this.results["Median nerve"] = (this.results["Median nerve"] || 0) + 25
            }else if(userAnswer === "4th and 5th fingers"){
                this.results["Median nerve entrapment"] = (this.results["Median nerve entrapment"] || 0) + 25
            }else if(userAnswer === "Right arm generalised"){
                console.log("Nothing")
            }else if(userAnswer === "Right arm Specific area/band"){
                this.results["Cervical nerve"] = (this.results["Cervical nerve"] || 0) + 25
            }else if(userAnswer === "Back of leg"){
                this.results["Piriformis"] = (this.results["Piriformis"] || 0) + 20
            }else if(userAnswer === "Leg, specific area"){
                this.results["Possible disc injury"] = (this.results["Possible disc injury"] || 0) + 25
            }

            
        }
    }

    //update component
    componentDidUpdate(prevProps, prevState){
        const {currentQuestion} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.setState(() => {
                return {
                    disabled: true,
                    questions: QuizQuest[currentQuestion].question,
                    options: QuizQuest[currentQuestion].options
                };
            })
        }
    }


    prevQuestion = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion - 1 
        })
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    //ordered = [];
    finishHandler = () => {
        if(this.state.currentQuestion === QuizQuest.length -1) {
            this.setState({
                quizEnd: true
            })
        }
        //console.log(this.results["Para-cevicals"])
        
    }

    restartHandle = () => {
        this.setState({
            quizEnd: false,
            currentQuestion: 0,
        })
        this.results = {};
    }

    // items = Object.keys(this.results).map(function(key){
    //     return [key, this.results[key]]
    // });

    render(){
        const {questions, options, currentQuestion, userAnswer, quizEnd} = this.state;

            if(quizEnd){
                var re = this.results
                var ordered = [];
                for (var r in re){
                    ordered.push([r, re[r]]);
                }
                ordered.sort(function(a, b){
                    return a[1] - b[1]
                });
                var final = ordered.reverse().slice(0, 4)
                //var top_result = this.ordered.slice(0, 2)
                return (
                    <div className="End">
                        <h2>End of the quiz, Congratulation!</h2>
                        <h4>The most likelihood muscle strain are: </h4>
                        {/* <p>{Object.keys(this.results).map((key) =>(
                            <p className="ui floating message opions" key={key}
                            
                            >{key} {this.results[key]}</p>
                        ))}</p> */}
                        <ol>{final.map((item, index) =>(
                            <li className="ui floating message opions" key={index}
                            
                            ><b>Muscle: </b>{item[0]} <b>Score: </b>{item[1]}</li>
                        ))}</ol>
                        <button onClick={this.restartHandle}>Re-take the quiz</button>
                    </div>
                )
            }
        
        return (
            <div className = "App">
                <h2>Question: {questions}</h2>
                <span>{`Questions ${currentQuestion} out of ${QuizQuest.length - 1}`}</span>
                    {options.map(option => (
                        <p key={option} 
                        className = {`ui floating message options 
                        ${userAnswer === option ? "selected" : null}
                        `}
                        onClick={ () => this.checkAnswer(option)}
                        
                        
                        >
                            {option}
                        </p>
                    ))}
                    {currentQuestion < QuizQuest.length - 1 &&
                    <button
                        disabled = {this.state.disabled}
                        onClick={this.nextQuestion}
                    >Next</button>
                    }
                    {currentQuestion === QuizQuest.length -1 && 
                        <button onClick={this.finishHandler}>Finish</button>
                        
                    }
            </div>
        )
    }
}

export default Quiz;