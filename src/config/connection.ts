import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig} from 'axios';
import {useState} from 'react';
import {getStorage} from '../utils';
import {server} from './server';

export const RequestAxios = () => {
  const [userData, setUser] = useState<any>();

  getStorage('user_data').then(res => {
    setUser(res);
  });
  return userData;
};

const connection = axios.create({
  baseURL: server,
});

connection.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    let values: any;
    values = await AsyncStorage.multiGet(['user_data']);

    config.headers = {
      'content-type': 'multipart/form-data',
      Accept: '*/*',
      Authorization: 'Bearer ' + JSON.parse(values[0][1]).access_token,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default connection;
