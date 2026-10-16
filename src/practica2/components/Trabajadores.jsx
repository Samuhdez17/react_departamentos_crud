import React, { Component } from 'react';
import HospitalesService from '../../services/HospitalesService';

export default class Trabajadores extends Component {
    service = new HospitalesService()

    async componentDidMount() {
        try {
            let datos = await this.service.getTrabajadores()
        } catch (error) {
            throw error
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}
