import React from 'react';
import Helmet from 'react-helmet';

class Quiz extends React.Component{
    render(){
        return(
            <div>
                <Helmet>
                    <title>Quiz</title>
                </Helmet>
                <h1>THIS IS THE QUIZ COMPONENT</h1>
            </div>
        )
    }
}

export default Quiz;