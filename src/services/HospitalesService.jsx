import axios from 'axios';
import Global from '../Global';

export default class HospitalesService {
    async getHospitales() {
        let url = Global.apiEjemplos
        let request = 'api/hospitales/'

        let res = null
        try {
            res = await axios.get(url + request)
        } catch (error) {
            throw error
        }

        return res.data
    }
}
