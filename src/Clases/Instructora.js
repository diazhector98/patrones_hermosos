class Instructora {

    constructor(nombre) {
        this._nombre = nombre;
    }

    setNombre = (nombre) => {
        this._nombre = nombre;
    }

    getNombre = () => {
        return this._nombre;
    }

    setApellido = (apellido) => {
        this._apellido = apellido;
    }

    getApellido = () => {
        return this._apellido;
    }

    setCorreo = (correo) => {
        this._correo = correo;
    }

    getCorreo = () => {
        return this._correo;
    }

    setTelefono = (telefono) => {
        this._telefono = telefono;
    }

    getTelefono = () => {
        return this._telefono;
    }

    setEdad = (edad) => {
        this._edad = edad;
    }

    getEdad = () => {
        return this._edad;
    }

    setEstado = (estado) => {
        return this._estado;
    }

    getEstado = () => {
        return this.estado;
    }


    /*
 nombre: string
- apellido: string
- correo: string
-telefono: string
- edad : int
- estado: string
- ciudad: string
- carrera: string
- universidad: string
     */

}