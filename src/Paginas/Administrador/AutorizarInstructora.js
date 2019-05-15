import React, {Component} from 'react';

import InstructoraObject from './InstructoraObject';

import firebase from 'firebase/app';


class AutorizarInstructora extends Component {

    constructor(props) {
        super(props);

        this.state = {
            instructoras: []
        }


    }

    componentDidMount() {
        this.setState(() => {
            return {}
        });
        this.getInstructorasNoAutorizadas();
    }

    handleAprobacion = () => {
        console.log("hi");
        this.setState(() => {
            return {}
        });
        this.getInstructorasNoAutorizadas();
    }

    getInstructorasNoAutorizadas = () => {
        this.setState(() => {
            return {}
        });
        let instructorasRef = firebase.database().ref('instructoras');
        instructorasRef.on('value', (snapshot) => {
            for(let instructoraId in snapshot.val()){
                let instructoraRef = firebase.database().ref('instructoras/'+instructoraId);
                instructoraRef.on('value', (snapshot) => {
                    if(snapshot.val().aprobada === false){
                        this.setState(prevState => {
                            let newInstructora = snapshot.val();
                            newInstructora.id = instructoraId;
                            let list = prevState.instructoras.push(newInstructora);
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

        let content = null;

        return (
            <div>
                <h1>Autorizar Instructora</h1>
                {this.state.instructoras.map(instructora => {
                    return <InstructoraObject key={instructora.telefono} instructora={instructora} approvedHandle={this.handleAprobacion}/>
                })}
            </div>
        )
    }
}


export default AutorizarInstructora;