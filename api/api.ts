const axios = require('axios');

const api = axios.create({
  baseURL: 'https://rent-a-movie-api.herokuapp.com/',
})

export default api;
