import React, {Component} from 'react';
import { tsConstructorType } from '@babel/types';

import {InscripcionSede,
  PostulacionInstructora,
  RegistroSede,
  AutorizarInstructora,
  AutorizarSede,
  Autenticacion,
  Menu
} from '../src/Paginas/Paginas';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      pagina: -1
    }
  }

  handleInscripcionEstudiante = () => {
    console.log('Inscribete como estudiante');
  }

  handlePostulacionInstructora = () => {
    console.log('Postulación Instructora');
  }

  handleRegistroSede = () => {
    console.log('Registro sede');
  }

  handleAutorizarSede = () => {
    console.log('Autorizacion de sede');
  }

  handleAutorizacionInstructora = () => {
    console.log('Autorizacion Instructora');
  }

  handleOpcion = (event) => {
    console.log(event.target.getAttribute("key"));
  }

  handlerAutenticacion = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        loggedIn: true,
        opcionSeleccionada: null
      }
    })
  }

  render () {
    let contenido = null;
    
    let titulosMenu = [
      'Inscribete', 
      'Postúlate como instructora', 
      'Regístrate como sede', 
      'Autorizar Sede', 
      'Autorizar Instructora'];
    
      let handlersMenu = [
        this.handleInscripcionEstudiante, 
        this.handlePostulacionInstructora, 
        this.handleRegistroSede, 
        this.handleAutorizarSede, 
        this.handleAutorizacionInstructora];

    let opcionesMenu = []
    
    titulosMenu.forEach((t, index) => {
      opcionesMenu.push({
        titulo: t,
        handler: handlersMenu[index]
      })
    });

    if(this.state.loggedIn){
      contenido = 
      <div>
        <Menu opciones={opcionesMenu} clickHandler={this.handleOpcion}/>

      </div>
    } else {
      contenido = <Autenticacion onAuth={this.handlerAutenticacion}/>
    }

    return (
      <div>
        <h1>Patrones hermosos</h1>
        {contenido}
      </div>
    )
  }
}

export default App;
