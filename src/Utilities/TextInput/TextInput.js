import React, {Component} from 'react';

import './TextInput.css';

class TextInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
        this.props.onChange(this.props.id, event.target.value);
    }

    render () {
        return (
            <div>
                <h4 className="Text">{this.props.title} <input className="Input" onChange={this.handleChange} value={this.state.text}></input> </h4>
                
            </div>
        )
    }
}

export default TextInput;