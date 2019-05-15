import React, {Component} from 'react';
import TextInput from '../../Utilities/TextInput/TextInput';
import RadioGroup from '../../Utilities/RadioGroup/RadioGroup';
import firebase from 'firebase/app';

class InscripcionSede extends Component {

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
        firebase.database().ref('estudiantes/' + id).set(
            this.state
          );
    }

    render() {
        return (
            <div>
                <h1>Inscripción</h1>
                <form>
                    <TextInput id='nombre' title='Nombre' onChange={this.handleChange}/>
                    <TextInput id='apellidos' title='Apellidos' onChange={this.handleChange}/>
                    <TextInput id='email' title='Correo Electronico' onChange={this.handleChange}/>
                    <TextInput id='telefono' title='Teléfono movil' onChange={this.handleChange}/>
                    <TextInput id='direccion' title='Direccion' onChange={this.handleChange}/>
                    <TextInput id='ciudad' title='Ciudad' onChange={this.handleChange}/>
                    <TextInput id='estado' title='Estado' onChange={this.handleChange}/>
                    <TextInput id='codigoPostal' title='Codigo Postal' onChange={this.handleChange}/>
                    <RadioGroup title='Sexo' options={['Hombre', 'Mujer', 'Otro']} />
                    <TextInput id='escuela' title='Nombre de escuela donde realizas tus estudios' onChange={this.handleChange}/>

                    <RadioGroup title='Grado Escolar' options={
                        [
                    '6o de primaria', 
                    '1o de secundaria', 
                    '2ndo de secundaria',
                    '3ro de secundaria',
                    '1er año de preparatoria',
                    '2ndo año de preparatoria',
                    '3er año de preparatoria'
                ]}/>

                    <TextInput id='promedio' title='Promedio en escala 1 a 100' onChange={this.handleChange} />
                </form>
                <button onClick={this.handleSubmit}>Completar Inscripcion</button>

            </div>
        )
    }
}


export default InscripcionSede;