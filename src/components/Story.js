import React, { Component } from 'react';
import axios from 'axios';

const backend = 'http://localhost:3000/stories'


class Story extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentParagraph: 1,
            paragraph: '',
            responses: []
        }
        this.getParagraph = this.getParagraph.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.getParagraph()
    }

    async getParagraph () {
        const response = await axios(`${backend}/${this.state.currentParagraph}`)
        const data = response.data;
        this.setState({
            paragraph: data.paragraph,
            responses: data.responses  
        })
    }

    handleClick (event) {
        const thing = event.target.id

//      if {response.response} innerHTML = "pick up item" =>
//      axios "put request", update boolean to true

        this.setState({
            currentParagraph: thing
        }, () => this.getParagraph())
    }

    render () {        
        return (
            <div>
                <h1>{this.state.paragraph}</h1>
                {
                    this.state.responses.map( (response, index) => {
                        return(
                            <button onClick={this.handleClick} id={response.nextparagraph} key={index}>{response.response}</button>
                        )
                    })
                }
                
            </div>
        )
    }
}


export default Story