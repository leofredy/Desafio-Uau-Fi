import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-desafio-uaufi.herokuapp.com/'
})

export default api