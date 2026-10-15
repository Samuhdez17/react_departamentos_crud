import axios from 'axios';
import Global from '../Global';

export default class DepartamentosService {
    getDepartamentos() {
        return new Promise(function(resolve) {
            let url = Global.apiDptos
            let request = 'api/departamentos/'

            axios.get(url + request)
            .then((res) => {
                resolve(res);
            })
        })
    }

    crearDepartamento(dep) {
        return new Promise(function(resolve, reject) {
            let url = Global.apiDptos
            let request = 'api/departamentos/'

            axios.post(url + request, dep)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
        })
    }

    updateDepartamento(dep) {
        return new Promise(function(resolve, reject) {
            let url = Global.apiDptos
            let request = 'api/departamentos/'

            axios.put(url + request, dep)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
        })
    }

    deleteDepartamento(numero) {
        return new Promise(function(resolve, reject) {
            let url = Global.apiDptos
            let request = 'api/departamentos/' + numero

            axios.delete(url + request)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
        })
    }
}
