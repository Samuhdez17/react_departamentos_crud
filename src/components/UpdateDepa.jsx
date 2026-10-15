import React, { Component } from 'react';
import DepartamentosService from '../services/DepartamentosService';
import { Navigate } from 'react-router-dom';

export default class UpdateDepa extends Component {
    service = new DepartamentosService();

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    
    state = {
        status: false
    }

    updateDepa = (e) => {
        e.preventDefault();

        let depa = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        this.service.updateDepartamento(depa)
        .then((res) => {
            this.setState({
                status: true
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            this.state.status ?
                <Navigate to='/' /> 
                :
            <div>
                <h1>Update depa</h1>

                <form onSubmit={this.updateDepa}>
                    <label>Numero: </label>
                    <input type="number" name="numero" ref={this.cajaNumero} defaultValue={this.props.numero} readOnly className='form-control'/>

                    <label>Nombre: </label>
                    <input type="text" name="nombre" ref={this.cajaNombre} defaultValue={this.props.nombre} className='form-control'/>

                    <label>Localidad: </label>
                    <input type="text" name="localidad" ref={this.cajaLocalidad} defaultValue={this.props.localidad} className='form-control'/>

                    <button className='btn btn-info' >Actualizar</button>
                </form>
            </div>
        );
    }
}
