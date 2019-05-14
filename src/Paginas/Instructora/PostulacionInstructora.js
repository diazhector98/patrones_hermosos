import React, {Component} from 'react';
import TextInput from '../../Utilities/TextInput/TextInput';
import RadioGroup from '../../Utilities/RadioGroup/RadioGroup';

class PostulacionInstructora extends Component {
    render() {
        return (
            <div>
                <h1>Se una instructora</h1>
                <form>
                    <TextInput title='Correo electrónico'/>
                    <RadioGroup title='Aceptas nuestro aviso de privacidad?' options={[
                        'Si',
                        'No'
                    ]} />
                    <TextInput title='Nombre completo' />
                    <TextInput title='Telefono Para Contacto' />
                    <TextInput title='Edad' />
                    <TextInput title='Estado de la república' />
                    <TextInput title='Ciudad en que radicas' />
                    <TextInput title='Carrera' />
                    <TextInput title='Año en que te graduas' />
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
                    <TextInput title='¿Porqué quieres participar en este campamento como isntructora?' />
                    <RadioGroup title='¿Te interesaría y podrías recibir a una instructora del MIT?'
                    options={[
                        'Si',
                        'No'
                    ]} />
                    <button>Postular aplicación</button>

                </form>
            </div>
        )
    }
}


export default PostulacionInstructora;