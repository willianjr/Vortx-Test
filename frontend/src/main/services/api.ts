import axios from 'axios'

const api = axios.create({
    baseURL: process.env.URL_API || 'http://localhost:3031/api/',
})

export default api
