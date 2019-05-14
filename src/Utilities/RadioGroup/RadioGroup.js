import React, {Component} from 'react';

class RadioGroup extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <form>

                    {this.props.options.map(option => {
                        return <div><label><input type="radio" name={this.props.title}/>{option}</label></div>
                    })}
                </form>
            </div>
        )
    }
}

export default RadioGroup;