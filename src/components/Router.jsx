import React,{ Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import CrearDepa from './CrearDepa';
import UpdateDepa from './UpdateDepa';
import ConfirmacionDelete from './ConfirmacionDelete';

export default class Router extends Component {
    render() {
        function UpdateDepaElement() {
            const { numero, nombre, localidad } = useParams();
            return <UpdateDepa numero={numero} nombre={nombre} localidad={localidad} />;
        }

        function ConfirmacionDeleteElement() {
            const { numero, metodoPadre } = useParams();
            return <ConfirmacionDelete id={numero} metodoPadre={metodoPadre}/>;
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/crear_depa' element={<CrearDepa/>} />
                    <Route path='/update_depa/:numero/:nombre/:localidad' element={<UpdateDepaElement/>} />
                    <Route path='/eliminar_depa/:numero/:metodoPadre' element={<ConfirmacionDeleteElement/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}