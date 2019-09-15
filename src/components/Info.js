import React, { Component } from "react";

class Info extends Component {
    constructor(props){
        super(props)
        this.state = {
            muscle: this.props.muscle
        }
    }

    componentDidMount(){
        this.setState({muscle: this.props.match.params.muscle})
    }

    render(){
        return(
            <div>
                <p>This is the info page for: {this.state.muscle}</p>
            </div>
        )
    }
}

export default Info;