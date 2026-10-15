import React, { Component } from 'react';
import DepartamentosService from '../services/DepartamentosService';
import { Navigate } from 'react-router-dom';

export default class CrearDepa extends Component {
    service = new DepartamentosService()

    cajaNumero = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()

    state = {
        status: false,
        msg: '',
    }

    crearDepa = (e) => {
        e.preventDefault()

        let depa = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        this.service.crearDepartamento(depa)
        .then((res) => {
            this.setState({
                status: true,
                msg: 'Departamento creado correctamente'
            })
        })
        .catch((err) => {
            this.setState({
                status: false,
                msg: 'Error al crear el departamento: ' + err
            })
        })
    }

    render() {
        return (
            this.state.status ?
                <Navigate to='/' /> 
                :
                <div>
                    <h1>Crea tu departamento</h1>
                    <h3>{this.state.msg}</h3>
                    <form>
                        <label>Numero</label>
                        <input type="number" ref={this.cajaNumero} className='form-control' />

                        <label>Nombre</label>
                        <input type="text" ref={this.cajaNombre} className='form-control' />

                        <label>Localidad</label>
                        <input type="text" ref={this.cajaLocalidad} className='form-control' />

                        <button onClick={this.crearDepa} className='btn btn-info'>Crear departamento</button>
                    </form>
                </div>
        );
    }
}
