import React, {Component} from 'react';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let contenido = null;
        contenido = this.props.opciones.map((opcion, index) => {
            console.log(index);
            return <button key={index} onClick={this.props.clickHandler}>{opcion.titulo}</button>
        })

        return (
            <div>
                {contenido}
            </div>
        )
    }
}


export default Menu;