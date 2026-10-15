import React, { Component } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import DepartamentosService from '../services/DepartamentosService';

export default class ConfirmacionDelete extends Component {
    service = new DepartamentosService()

    state = {
        status: false,
    }

    confirmarActualizacion = (actualizar) => {
        this.props.metodoPadre(actualizar)
    }

    render() {
        return (
            this.state.status ? <Navigate to='/' /> 
            : 
            <div>
                <h1>¿Seguro que quiere eliminar el departamento?</h1>

                <button className='btn btn-danger'
                onClick={() => {
                    this.service.deleteDepartamento(this.props.id)
                    .then((res) => {
                        this.setState({
                            status: true,
                        })

                        this.confirmarActualizacion(true)
                    })
                }}
                > Confirmar </button>

                <button className='btn btn-info'
                onClick = {() => {
                    this.setState({
                        status: true
                    })
                
                    this.confirmarActualizacion(false)
                }}> Cancelar </button>
            </div>
        );
    }
}
