import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-desafio.herokuapp.com/'
})

export default api