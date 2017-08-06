import axios from 'axios'

//passar base dos endereços da api
const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

const apis = {
  loadGenres: () => api.get('genres')
}

export default apis