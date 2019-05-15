import React, {Component} from 'react';

import firebase from 'firebase/app';

class SedeObject extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleAutorizar = () => {
        let postData = this.props.sede;
        postData.aprobada = true;
        let updates = {};
        updates['/sedes/' + postData.id] = postData;
        firebase.database().ref().update(updates);
        this.props.approvedHandle();
    }

    handleRechazar = () => {

    }


    render () {
        return (
            <div>
                <h2>{'Institucion de Sede: ' + this.props.sede.institucion}</h2>
                <h3>{'Campus: '  + this.props.sede.campus}</h3>
                <p>{'Motivacion: ' + this.props.sede.motivacion}</p>  
                <p>{'Ciudad: ' + this.props.sede.ciudad}</p> 
                <button onClick={this.handleAutorizar}> Autorizar </button>
                <button> Rechazar </button>
            </div>
        )
    }
}

export default SedeObject;