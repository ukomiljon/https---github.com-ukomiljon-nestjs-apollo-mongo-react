
import axios from 'axios'
import { API_URL } from './api.setting'

const createApiUrl = (controllerName: any) => {
    return API_URL + controllerName
}

export const fetchData = (controllerName: string) => {
    return axios.get(createApiUrl(controllerName)).
        then(response => { 
            return response.data
        })
}

//`http://localhost:3000/users/${id}`
export const deleteData = (controllerName: string, id:any) => {
    return axios.delete(createApiUrl(controllerName)+`/${id}`).
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
