import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.88:3333',
});

export default api;

/**
 * adb reverse tcp:3333 tcp:3333 para usar localhost aqui
 */
