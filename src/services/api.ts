import axios from 'axios';
import { Platform } from 'react-native';

const api = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.1.88:3333'
      : 'http://localhost:3333',
});

export default api;

/**
 * adb reverse tcp:3333 tcp:3333 para usar localhost aqui
 */
