import React, {Component} from 'react';

import TextInput from '../../Utilities/TextInput/TextInput';


class RegistroSede extends Component {
    render() {
        return (
            <div>
                <h1>Registra tu sede</h1>
                <form>
                    <TextInput title='Institución'/>
                    <TextInput title='Campus'/>
                    <TextInput title='Ciudad'/>
                    <TextInput title='Estado'/>
                    <TextInput title='Dirección'/>
                    <TextInput title='Espacios Disponibles'/>
                    <TextInput title='Telefono'/>
                    <TextInput title='Nombre del responsable'/>
                    <TextInput title='Motivación para ser una sede'/>
                    <button>Confirmar</button>

                </form>
            </div>
        )
    }
}


export default RegistroSede;