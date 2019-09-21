import React, { Component } from "react";
import { Document, Page } from 'react-pdf';
import Hamstrings from './Hamstrings.pdf';
import { SizeMe } from 'react-sizeme';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Info extends Component {
    constructor(props){
        super(props)
        this.state = {
            muscle: this.props.muscle
        }
    }

    componentDidMount(){
        this.setState({muscle: this.props.match.params.muscle});

    }

    

    renderInfo(){
        if(this.state.muscle === "Hamstrings"){
            return(
                <SizeMe monitorHeight refreshRate={128} refreshMode="debounce" render={({ size }) => (
                    <div className="pdfwrapper">
                    <Document file={Hamstrings} onLoadError={console.error} className="infopdf">
                        <Page pageNumber={1} className="infopageone"></Page>
                        <Page pageNumber={2} className="infopagetwo"></Page>
                    </Document>
                    </div>
                )}/>
            )
        }
    }

    render(){
        return(
            <div className="infopage">
                <h1>{this.state.muscle}</h1>
                {this.renderInfo()}
            </div>
        )
    }
}

export default Info;