import React, { Component } from 'react';
import axios from 'axios';

const backend = process.env.REACT_APP_BASEURL


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
        const eventId = event.target.id

        if (event.target.innerText === `ok`) {
            console.log("ok!")
        }
//      if event.target.innerText = "pick up item" =>
//      axios "put request", update boolean to true

        this.setState({
            currentParagraph: eventId
        }, () => this.getParagraph())
    }


    // async handleUpdate() {
    //     event.preventDefault();
    //     if this.state.paragraph.id === 
    //     let res = await axios.put('url', {data})
    //     else if 
    //     else if this.state.paragraph.id === last paragraph,
    //     DB RESET, set all to false 
        
    // }


    //this.state.image



    render () {        
        return (
            <div id="background">
                <div id="content">
                <p>{this.state.paragraph}</p>
                {
                    this.state.responses.map( (response, index) => {
                        return(
                            <button onClick={this.handleClick} id={response.nextparagraph} key={index}>{response.response}</button>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}


export default Story