import React from 'react';
import Answers from './Answers'

class Questions extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            question_id: 0
        };
        this.renderQuestion = this.renderQuestion.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    componentDidMount(){
        this.setState({question_id: 1})
    }

    renderQuestion(){
        if(this.state.question_id === 1){
            return('Where are you experiencing pain?')
        }
        if(this.state.question_id === 2){
            return('Question 2')
        }
    }

    nextQuestion(){
        this.setState(prevstate => {return {question_id: prevstate.question_id + 1}})
    }

    render(){
        return(
            <div>
                <p>state: {this.state.question_id}</p>
                {this.renderQuestion()}<br/>
                <Answers question_id={this.state.question_id}/>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }

}

export default Questions;