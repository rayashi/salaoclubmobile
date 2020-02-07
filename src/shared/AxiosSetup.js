import Config from 'react-native-config';
import axios from 'axios';

export default setupAxios = () => {
  axios.defaults.baseURL = Config.API_URL;
}