import React, { Component } from 'react';
import HospitalesService from '../../services/HospitalesService';
import Trabajadores from './Trabajadores';

export default class HospitalesMultiples extends Component {
    service = new HospitalesService()
    selectHospital = React.createRef()

    state = {
        hospitales: [],
        hospitalesSeleccionados: [],
    }

    async cargarHospitales() {
        try {
            let datos = await this.service.getHospitales()
            this.setState({
                hospitales: datos
            })
        } catch (error) {
            throw error
        }
    }

    getSeleccionados = (e) => {
        e.preventDefault();

        let aux = []
        let opciones = this.selectHospital.current.options

        for (let op of opciones) {
            if (op.selected) {
                aux.push(op.value)
            }
        }

        this.setState({
            hospitalesSeleccionados: aux
        })

        console.log(this.hospitalesSeleccionados);
        
    }

    componentDidMount = async () => {
        await this.cargarHospitales()
    }

    render() {
        return (
            <div>
                <h1>Hospitales multiples</h1>

                <form onSubmit={
                    this.getSeleccionados
                }>
                    <label>Seleccione hospital</label>
                    <select className="form-select" aria-label="Default select example"
                    size={6}
                    ref={this.selecHospital}
                    multiple
                    >
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (
                                    <option key={index} value={hospital.id}>
                                        {hospital.nombre}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </form>

                {
                    this.state.hospitalesSeleccionados.length > 0 && (
                        <Trabajadores idHospitles={this.state.hospitalesSeleccionados} />
                    )
                }
            </div>
        );
    }
}
