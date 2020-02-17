import Config from 'react-native-config';
import axios from 'axios';

export default api = axios.create({
  baseURL: Config.API_URL
});

export const setAuthHeaders = token => {
  if(token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    api.defaults.headers.common = {
      'Accept': 'application/json, text/plain, */*'
    };
  }
}