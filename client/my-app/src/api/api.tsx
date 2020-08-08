
import axios from 'axios'
import { API_URL } from './api.setting'

const createApiUrl = (controllerName: any) => {
    return API_URL + controllerName
}

export const fatchData = (controllerName: string) => {
    return axios.get(createApiUrl(controllerName)).
        then(response => { 
            return response.data
        })
}

export const postData = (controllerName: string, data: any) => {
    axios.post(createApiUrl(controllerName), data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
