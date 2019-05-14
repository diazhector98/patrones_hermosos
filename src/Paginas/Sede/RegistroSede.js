import React, {Component} from 'react';

class RegistroSede extends Component {
    render() {
        return (
            <div>
                <h1>Inscripción</h1>
                <form>
                    <p>Nombre</p><input></input>
                    <p>Apellidos</p><input></input>
                    <p>Dirección de correo electrónico</p><input></input>
                </form>
            </div>
        )
    }
}


export default RegistroSede;