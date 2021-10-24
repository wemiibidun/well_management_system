import axios from 'axios';

const WELL_API_URL = 'https://turing-code-exercise.azurewebsites.net/api/v1/Well'; //root url

class WellService{
    getWellList(){
        return axios.get(WELL_API_URL);
    }

    getWellByUWID(uwid){
        return axios.get(WELL_API_URL+ "?uwid="+uwid);
    }

    createWell(well){
        return axios.post(WELL_API_URL, well); //form submission (send data to db)
    }

    getWellById(wellId){
        return axios.get(WELL_API_URL + '/' + wellId);
    }

    updateWell(well, wellId){
        return axios.put(WELL_API_URL + '/' + wellId, well); //concantenate well object to put
    }

    deleteWell(wellId){
        return axios.delete(WELL_API_URL + '/' + wellId);
    }

    getWellHistroy(wellId){
        return axios.get(WELL_API_URL + '/' + wellId + '/history');
    }
}

export default new WellService();