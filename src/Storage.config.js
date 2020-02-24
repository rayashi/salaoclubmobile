import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export default new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
});
