import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ConfirmacionDelete from './ConfirmacionDelete';

export default class Departamento extends Component {

    render() {
        const { dep } = this.props;
        const num = dep.numero;
        const nom = dep.nombre;
        const loc = dep.localidad;
        
        return (
            <tr>
                <td>{nom}</td>
                <td>{loc}</td>
                <td>
                    <NavLink className='btn btn-info'
                    to = {
                        'update_depa/'+ num + '/' + nom + '/' + loc
                    }> Editar </NavLink>

                    <NavLink className='btn btn-danger'
                    to = {'/confirmar_delete/'+ num}
                    >
                        Eliminar
                    </NavLink>
                </td>
            </tr>
            )
    }
}
