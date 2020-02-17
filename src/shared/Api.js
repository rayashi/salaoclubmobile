import Config from 'react-native-config';
import axios from 'axios';

export default setupAxios = () => {
  axios.defaults.baseURL = Config.API_URL;
}

export const setAuthHeaders = token => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    axios.defaults.headers.common = {
      'Accept': 'application/json, text/plain, */*'
    };
  }
}