import Config from 'react-native-config';
import axios from 'axios';

export default api = axios.create({
  baseURL: Config.API_URL
});