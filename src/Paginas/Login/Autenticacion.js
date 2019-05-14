import React, {Component} from 'react';

class Autenticacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 'register'
        }
    }

    toggleEstado = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                estado: prevState.estado === 'register' ? 'login' : 'register'
            }
        });
    }

    handleLogin = () => {
        this.props.onAuth();
    }

    handleRegistro = () => {
        this.props.onAuth();
    }

    render() {
        let contenido = null;
        if(this.state.estado === 'login'){
            contenido = 
            <div>
                <form>
                    <p>Correo Electrónico</p> <input></input>
                    <p>Contraseña</p> <input></input>
                </form>
                <button onClick={this.handleLogin}>Iniciar Sesion</button>
            </div>
        } else if (this.state.estado === 'register'){
            contenido = 
            <div>
                <form>
                    <p>Nombre</p> <input></input>
                    <p>Correo Electrónico</p> <input></input>
                    <p>Contraseña</p> <input></input>
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