import React, {Component} from 'react';

class AutorizarInstructora extends Component {
    render() {
        return (
            <div>
                <h1>Autorizar Instructora</h1>
                <form>
                    <p>Nombre</p><input></input>
                    <p>Apellidos</p><input></input>
                    <p>Dirección de correo electrónico</p><input></input>
                </form>
            </div>
        )
    }
}


export default AutorizarInstructora;