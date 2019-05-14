import React, {Component} from 'react';
import TextInput from '../../Utilities/TextInput/TextInput';
import RadioGroup from '../../Utilities/RadioGroup/RadioGroup';

class InscripcionSede extends Component {
    render() {
        return (
            <div>
                <h1>Inscripción</h1>
                <form>
                    <TextInput title='Nombre'/>
                    <TextInput title='Apellidos'/>
                    <TextInput title='Correo Electronico'/>
                    <TextInput title='Teléfono movil'/>
                    <TextInput title='Direccion'/>
                    <TextInput title='Ciudad'/>
                    <TextInput title='Estado'/>
                    <TextInput title='Codigo Postal'/>
                    <RadioGroup title='Sexo' options={['Hombre', 'Mujer', 'Otro']} />
                    <TextInput title='Nombre de escuela donde realizas tus estudios' />

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

                    <TextInput title='Promedio en escala 1 a 100' />
                    <button>Completar Inscripcion</button>

                </form>
            </div>
        )
    }
}


export default InscripcionSede;