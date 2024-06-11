import axios from "axios";



const axiosApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        'Content-type': 'application/json'
    }
})

export default axiosApi;