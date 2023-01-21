// import axios from 'axios';

// const baseURL = 'http://foodmarket-backend.buildwithangga.id/api/';

// const axiosInstance = axios.create({
//   baseURL,
// });
// axiosInstance.defaults.headers.accept = '*/*';
// axiosInstance.defaults.headers['Content-Type'] = 'application/json';

// export default axiosInstance;

// import axios from 'axios';
// import type {AxiosRequestConfig} from 'axios';
// import {server} from './server';

// const connection = axios.create({
//   baseURL: server,
// });

// connection.interceptors.request.use(
//   async (config: AxiosRequestConfig) => {
//     const userData = window.localStorage.getItem('user_session');

//     let tokenData = null;
//     let lang = 'id';
//     if (userData) {
//       const transformedData = JSON.parse(userData);
//       const {token, data} = transformedData;
//       tokenData = token;
//       lang = data ? data.language : 'id';
//     }
//     config.headers = {
//       'Content-Type': 'multipart/form-data',
//       Accept: '*/*',
//       Authorization: 'Bearer ' + String(tokenData),
//       lang: String(lang),
//     };
//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   },
// );

// export default connection;
