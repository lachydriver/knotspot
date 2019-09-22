import React, { Component } from "react";
import { Document, Page } from 'react-pdf';
import Hamstrings from './Hamstrings.pdf';
import {Helmet} from 'react-helmet';
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
                    <div className="pdfwrapper" style={{height: 'size.height !important'}}>
                    <Document file={Hamstrings} onLoadError={console.error} className="infopdf">
                        <Page width={size.width / 2} pageNumber={1} className="infopageone"></Page>
                        <Page width={size.width / 2} pageNumber={2} className="infopagetwo"></Page>
                    </Document>
                    </div>
                )}/>
            )
        }
    }

    render(){
        return(
            <div className="infopage">
                <Helmet>
                    <title>Quiz App - Information</title>
                </Helmet>
                <h1>{this.state.muscle}</h1>
                {this.renderInfo()}
            </div>
        )
    }
}

export default Info;