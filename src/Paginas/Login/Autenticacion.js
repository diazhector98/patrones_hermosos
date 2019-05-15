import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import TextInput from '../../Utilities/TextInput/TextInput';


class Autenticacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 'register',
            nombre: '',
            email: '',
            password: ''
        }
    }

    toggleEstado = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                estado: prevState.estado === 'register' ? 'login' : 'register'
            }
        });
    }

    handleChange = (key, input) => {
        this.setState(prevState => {
            return {
                ...prevState,
                [key]: input
            }
        });
    }

    handleLogin = () => {
        const auth = firebase.auth();
        console.log(this.state.email + this.state.password);
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((response) => {
            this.props.onSuccessfullAuth();
        }).catch((error) => {
            this.props.onFailedAuth();
        });
    }

    handleRegistro = () => {
        const provider = firebase.auth.EmailAuthProvider();
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((r) => {
            this.props.onSuccessfullAuth();
        }).catch(error => {
            this.props.onFailedAuth();
        });
    }

    render() {
        let contenido = null;
        if(this.state.estado === 'login'){
            contenido = 
            <div>
                <form>
                    <TextInput id='email' title='Correo Electrónico' onChange={this.handleChange}/>
                    <TextInput id='password' title='Contraseña' onChange={this.handleChange}/>
                </form>
                <button onClick={this.handleLogin}>Iniciar Sesion</button>
            </div>
        } else if (this.state.estado === 'register'){
            contenido = 
            <div>
                <form>
                    <TextInput id='nombre' title='Nombre' onChange={this.handleChange}/>
                    <TextInput id='email' title='Correo Electrónico' onChange={this.handleChange}/>
                    <TextInput id='password' title='Contraseña' onChange={this.handleChange}/>
                </form>
                <button onClick={this.handleRegistro}>Registrarte</button>
            </div>
        }

        return (
            <div>
                <h2>{this.state.estado === 'login' ? 'Inicia Sesión' : 'Registrate'}</h2>
                <button onClick={this.toggleEstado}>{this.state.estado === 'login' ? 'No tienes cuenta? Registrate' : 'Ya tienes cuenta? Inicia sesion'}</button>
                {contenido}
            </div>
        )
    }
}


export default Autenticacion;