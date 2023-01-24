import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import connection from '../../config/connection';
import {server} from '../../config/server';

type loginStateForm = {
  email: string;
  password: string;
};

interface registerStateForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  address?: string;
  city?: string;
  houseNumber?: string;
  phoneNumber?: string;
}

export const loadUserData = createAsyncThunk<any>('user/profile', async () => {
  try {
    const response = await connection.get('/user');

    let messages = 'something went wrong';

    if (response.status !== 200) {
      throw new Error(messages);
    }
    const {data} = response.data;

    return {
      data: data,
    };
  } catch (e: any) {
    console.log('ini Error bosque', e);
  }
});

export const loginUser = createAsyncThunk<any, loginStateForm>(
  'user/login',
  async ({email, password}) => {
    try {
      const form = new FormData();
      form.append('email', email);
      form.append('password', password);
      const response = await axios({
        method: 'post',
        url: `${server}/login`,
        data: form,
      });

      const {data} = response.data;

      return data;
    } catch (error: any) {
      return error.response.data;
    }
  },
);

export const registerUser = createAsyncThunk<any, registerStateForm>(
  'user/login',
  async ({
    name,
    email,
    password,
    password_confirmation,
    address,
    city,
    houseNumber,
    phoneNumber,
  }) => {
    try {
      const form = new FormData();
      form.append('name', name);
      form.append('email', email);
      form.append('password', password);
      form.append('password_confirmation', password_confirmation);
      form.append('address', address);
      form.append('city', city);
      form.append('houseNumber', houseNumber);
      form.append('phoneNumber', phoneNumber);
      const response = await axios({
        method: 'post',
        url: `${server}/register`,
        data: form,
      });

      const {data} = response.data;

      return data;
    } catch (error: any) {
      return error.response.data;
    }
  },
);
