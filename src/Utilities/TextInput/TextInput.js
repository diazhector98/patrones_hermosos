import React, {Component} from 'react';

class TextInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = (event) => {
        let c = event.target.value;
        this.setState({text: event.target.value})
    }

    render () {
        return (
            <div>
                <h4>{this.props.title} <input onChange={this.handleChange} value={this.state.text}></input> </h4>
                
            </div>
        )
    }
}

export default TextInput;