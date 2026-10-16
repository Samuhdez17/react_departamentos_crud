import React, { Component } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import DepartamentosService from '../services/DepartamentosService';

export default class ConfirmacionDelete extends Component {
    service = new DepartamentosService()

    state = {
        status: false
    }

    render() {
        return (
            <div>
                {
                    this.state.status && <Navigate to='/' />
                }
                
                <h1>¿Seguro que quiere eliminar el departamento?</h1>

                <button className='btn btn-danger'
                onClick={() => {
                    this.service.deleteDepartamento(this.props.id)
                    .then((res) => {
                        this.setState({
                            status: true
                        })
                    })
                }}
                > Confirmar </button>

                <NavLink className='btn btn-info'
                to={'/true'}
                > Cancelar </NavLink>
            </div>
        );
    }
}
