import React, { Component } from 'react';

import loading from '../assets/images/pantalla_carga.gif';
import DepartamentosService from '../services/DepartamentosService';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    service = new DepartamentosService()

    state = {
        status: false,
        recargar: true,
        departamentos: [],
    }

    cargarDepartamentos = () => {
        this.service.getDepartamentos().then(res => {
            this.setState({
                status: true,
                departamentos: res.data
            })
        })
    }

    metodoPadre = (recargar) => {
        this.setState({
            recargar: recargar,
        })
    }

    componentDidMount() {
        this.state.recargar &&
        this.cargarDepartamentos();
    }

    render() {
        if (!this.state.status)
            return ( <img src={loading} alt="Cargando..." /> );

        else 
            return (
                <div style={{
                    width: '50%',
                    margin: 'auto'
                }}>
                    <table className='table table-striped table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Localidad</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.departamentos.map((dep, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{dep.nombre}</td>
                                        <td>{dep.localidad}</td>
                                        <td>
                                            <NavLink className='btn btn-info'
                                            to = {
                                                'update_depa/'+dep.numero+'/'+dep.nombre+'/'+dep.localidad
                                            }> Editar </NavLink>
                                        </td>
                                        <td>
                                            <NavLink to= {`/eliminar_depa/${dep.numero}/${this.metodoPadre}`} className='btn btn-danger'
                                            > Eliminar </NavLink>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            );
    }
}
