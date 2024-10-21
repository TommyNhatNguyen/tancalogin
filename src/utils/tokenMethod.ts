import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from '../constants/token';

export const tokenMethod = {
  setData: async (value: object) => {
    try {
      await AsyncStorage.setItem(TOKEN.token, JSON.stringify(value));
    } catch (error) {
      // saving error
      console.log(error);
    }
  },
  getData: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(TOKEN.token);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      // error reading value
      return error;
    }
  },
  removeValue: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN.token);
    } catch (error) {
      // remove error
      console.log(error);
    }
  },
};
