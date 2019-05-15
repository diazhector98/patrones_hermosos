import React, {Component} from 'react';
import TextInput from '../../Utilities/TextInput/TextInput';
import RadioGroup from '../../Utilities/RadioGroup/RadioGroup';
import firebase from 'firebase/app';

class PostulacionInstructora extends Component {
    constructor(props){
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
        firebase.database().ref('instructoras/' + id).set(
            this.state
          );
          alert('Postulación enviada!');

    }
    
    render() {
        return (
            <div>
                <h1>Se una instructora</h1>
                <form>
                    <TextInput id='correo' title='Correo electrónico' onChange={this.handleChange}/>
                    <RadioGroup title='Aceptas nuestro aviso de privacidad?' options={[
                        'Si',
                        'No'
                    ]} />
                    <TextInput id='nombre' title='Nombre completo' onChange={this.handleChange}/>
                    <TextInput id='telefono' title='Telefono Para Contacto' onChange={this.handleChange}/>
                    <TextInput id='edad' title='Edad' onChange={this.handleChange}/>
                    <TextInput id='estado' title='Estado de la república' onChange={this.handleChange}/>
                    <TextInput id='ciudad' title='Ciudad en que radicas' onChange={this.handleChange}/>
                    <TextInput id='carrera' title='Carrera' onChange={this.handleChange}/>
                    <TextInput id='graduacion' title='Año en que te graduas' onChange={this.handleChange}/>
                    <RadioGroup title='Universidad donde realizas o realizaste tus estudios'
                    options={
                        [
                            'ITNL',
                            'Tecnologico de Monterrey',
                            'UANL',
                            'UDEM',
                            'UERRE',
                            'UNAM',
                            'Universidad Panamericana'
                        ]
                    } />
                    <TextInput id='motivacion' title='¿Porqué quieres participar en este campamento como isntructora?' onChange={this.handleChange} />
                    <RadioGroup title='¿Te interesaría y podrías recibir a una instructora del MIT?'
                    options={[
                        'Si',
                        'No'
                    ]} />
                </form>
                <button onClick={this.handleSubmit}>Postular aplicación</button>
            </div>
        )
    }
}


export default PostulacionInstructora;