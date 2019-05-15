import React, {Component} from 'react';
import { tsConstructorType } from '@babel/types';

import {InscripcionSede,
  PostulacionInstructora,
  RegistroSede,
  AutorizarSede,
  AutorizarInstructora,
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

  handleOpcion = (index) => {
    this.setState(prevState => {
      return {
        ...prevState,
        pagina: index
      }
    })
  }

  handleSuccessAuth = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        loggedIn: true,
        opcionSeleccionada: null
      }
    })
  }

  handleFailAuth = () => {
    alert("Error ingresando. Checa tus credenciales");
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

    let contenidoPagina = null;

    if(this.state.pagina === 0){
      contenidoPagina = <InscripcionSede />
    } else if (this.state.pagina === 1){
      contenidoPagina = <PostulacionInstructora />
    } else if (this.state.pagina === 2){
      contenidoPagina = <RegistroSede />
    } else if (this.state.pagina === 3){
      contenidoPagina = <AutorizarSede />
    } else if (this.state.pagina === 4){
      contenidoPagina = <AutorizarInstructora />
    } else {
      contenidoPagina = null;
    }

    if(this.state.loggedIn){
      contenido = 
      <div>
        <Menu opciones={opcionesMenu} clickHandler={this.handleOpcion}/>
        {contenidoPagina}
      </div>
    } else {
      contenido = <Autenticacion onSuccessfullAuth={this.handleSuccessAuth} onFailedAuth={this.handleFailAuth}/>
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
