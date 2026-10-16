import React,{ Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import CrearDepa from './CrearDepa';
import UpdateDepa from './UpdateDepa';
import ConfirmacionDelete from './ConfirmacionDelete';
import HospitalesMultiples from '../practica2/components/HospitalesMultiples';

export default class Router extends Component {
    render() {
        function UpdateDepaElement() {
            const { numero, nombre, localidad } = useParams();
            return <UpdateDepa numero={numero} nombre={nombre} localidad={localidad} />;
        }

        function HomeElement() {
            const { noActualizar } = useParams();
            return <Home noActualizar={noActualizar} />;
        }

        function ConfirmacionDeleteElement() {
            const { id } = useParams();
            return <ConfirmacionDelete id={id} />;
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/:noActualizar?' element={<HomeElement/>} />
                    <Route path='crear_depa' element={<CrearDepa/>} />
                    <Route path='update_depa/:numero/:nombre/:localidad' element={<UpdateDepaElement/>} />
                    <Route path='confirmar_delete/:id' element={<ConfirmacionDeleteElement/>} />
                    <Route path='hospitales_multiples' element={<HospitalesMultiples/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}