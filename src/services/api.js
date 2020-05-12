import axios from 'axios';

const url = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

const api = axios.create({
  baseURL: url,
});

export default api;
