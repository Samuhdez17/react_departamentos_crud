import React, { Component } from 'react';

import loading from '../assets/images/pantalla_carga.gif';
import DepartamentosService from '../services/DepartamentosService';
import { Navigate, NavLink } from 'react-router-dom';
import Departamento from './Departamento';
import Global from '../Global';

export default class Home extends Component {
    service = new DepartamentosService()

    state = {
        status: false,
        departamentos: [],
    }

    cargarDepartamentos = () => { 
        if (this.props.noActualizar !== 'true')
            this.service.getDepartamentos().then(res => {
            console.log('accediendo api');
        
                Global.departamentos = res.data

                this.setState({
                    status: true,
                    departamentos: res.data
                })
            })

        else 
            this.setState({
                status: true,
                departamentos: Global.departamentos
            })
    }

    componentDidMount() {
        this.cargarDepartamentos();
    }

    componentDidUpdate(prevProps) {
        if (this.props.noActualizar !== prevProps.noActualizar) {
            <Navigate to='/' />
        }
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
                                    <Departamento key={index} dep={dep}/>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            );
    }
}
