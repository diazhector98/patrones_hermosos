import React, {Component} from 'react';
import TextInput from '../../Utilities/TextInput/TextInput';
import firebase from 'firebase/app';


class RegistroSede extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aprobada: false
        }
    }

    handleChange = (key, input) => {
        this.setState(prevState => {
            return {
                ...prevState,
                [key]: input
            }
        });
    }

    handleSubmit = () => {
        let database = firebase.database();
        let id = firebase.auth().currentUser.uid;
        firebase.database().ref('sedes/' + id).set(
            this.state
          );
    }

    render() {
        return (
            <div>
                <h1>Registra tu sede</h1>
                <form>
                    <TextInput id='institucion' title='Institución' onChange={this.handleChange}/>
                    <TextInput id='campus' title='Campus' onChange={this.handleChange}/>
                    <TextInput id='ciudad' title='Ciudad' onChange={this.handleChange}/>
                    <TextInput id='estado' title='Estado' onChange={this.handleChange}/>
                    <TextInput id='direccion' title='Dirección' onChange={this.handleChange}/>
                    <TextInput id='espaciosDisponibles' title='Espacios Disponibles' onChange={this.handleChange}/>
                    <TextInput id='telefono' title='Telefono' onChange={this.handleChange}/>
                    <TextInput id='responsable' title='Nombre del responsable' onChange={this.handleChange}/>
                    <TextInput id='motivacion' title='Motivación para ser una sede' onChange={this.handleChange}/>
                </form>
                <button onClick={this.handleSubmit}>Confirmar</button>

            </div>
        )
    }
}


export default RegistroSede;