import React, {Component} from 'react';

import SedeObject from './SedeObject';

import firebase from 'firebase/app';

class SedesAutorizadas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sedes: []
        }
    }
    componentDidMount() {
        this.setState(() => {
            return {}
        });
        this.getSedesAutorizadas();
    }
    handleAprobacion = () => {
        this.setState(() => {
            return {}
        });
        this.getSedesAutorizadas();
    }
    getSedesAutorizadas = () => {
        this.setState(() => {
            return {}
        });
        let sedesRef = firebase.database().ref('sedes');
        sedesRef.on('value', (snapshot) => {
            for(let sedeId in snapshot.val()){
                let sedeRef = firebase.database().ref('sedes/'+sedeId);
                sedeRef.on('value', (snapshot) => {
                    if(snapshot.val().aprobada === true){
                        this.setState(prevState => {
                            let newSede = snapshot.val();
                            newSede.id = sedeId;
                            let list = prevState.sedes.push(newSede);
                            return {
                                list
                            }
                        })    
                    }
                })
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Sedes Autorizadas</h1>
                {this.state.sedes.map(sede => {
                    return <SedeObject key={sede.telefono} sede={sede} approvedHandle={this.handleAprobacion} autorizada={true}/>
                })}
            </div>
        )
    }
}


export default SedesAutorizadas;