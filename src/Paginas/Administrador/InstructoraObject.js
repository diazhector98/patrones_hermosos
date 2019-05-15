import React, {Component} from 'react';

import firebase from 'firebase/app';

class InstructoraObject extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleAutorizar = () => {
        let postData = this.props.instructora;
        postData.aprobada = true;
        let updates = {};
        updates['/instructoras/' + postData.id] = postData;
        firebase.database().ref().update(updates);
        this.props.approvedHandle();
    }

    handleRechazar = () => {

    }


    render () {

        console.log(this.props.instructora.nombre);
        return (
            <div>
                <h2>{'Nombre: ' + this.props.instructora.nombre}</h2>
                <p>{'Motivacion: ' + this.props.instructora.motivacion}</p>  
                <p>{'Ciudad: ' + this.props.instructora.ciudad}</p> 
                <button onClick={this.handleAutorizar}> Autorizar </button>
                <button> Rechazar </button>
            </div>
        )
    }
}

export default InstructoraObject;