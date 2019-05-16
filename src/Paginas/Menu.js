import React, {Component} from 'react';
import {Button} from 'antd';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let contenido = null;
        contenido = this.props.opciones.map((opcion, index) => {
            return <button key={index} onClick={() => {this.props.clickHandler(index)}}>{opcion.titulo}</button>
        })
        return (
            <div>
                {contenido}
            </div>
        )
    }
}


export default Menu;