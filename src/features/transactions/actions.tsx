import {createAsyncThunk} from '@reduxjs/toolkit';
import connection from '../../config/connection';

interface FoodStateParams {
  id?: string;
  limit?: number;
  name?: string;
  types?: string;
  price_from?: number;
  price_to?: number;
  rate_from?: number;
  rate_to?: number;
}

interface TransactionStateParams {
  id?: number;
  limit?: number;
  food_id?: number;
  status?: string;
}

interface CheckoutState {
  food_id: number;
  user_id: number;
  quantity: number;
  total: number;
  status: string;
}

export const loadTransaction = createAsyncThunk<any, TransactionStateParams>(
  'get-transaction',
  async ({limit, status}) => {
    try {
      const response = await connection.get(
        // `/transaction?limit=${limit && limit}&&status=${status && status}id=${
        //   id && id
        // }&food_id=${food_id && food_id}`,
        `/transaction?limit=${limit}&status=${status}`,
      );

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
  },
);

export const loadFood = createAsyncThunk<any, FoodStateParams>(
  'random/food',
  async ({id, limit}) => {
    try {
      const response = await connection.get(
        `/food?limit=${limit && limit}&id=${id && id}`,
      );

      let messages = 'something went wrong';

      if (response.status !== 200) {
        throw new Error(messages);
      }
      const {data} = response.data;

      return {
        data: Object.values(data.data),
      };
    } catch (e: any) {
      console.log('ini Error bosque', e);
    }
  },
);

export const loadFoodByType = createAsyncThunk<any, {types: string}>(
  'random/load-food-by-type',
  async ({types}) => {
    try {
      const response = await connection.get(`/food?types=${types && types}`);

      let messages = 'something went wrong';

      if (response.status !== 200) {
        throw new Error(messages);
      }
      const {data} = response.data;

      return {
        data: Object.values(data.data),
      };
    } catch (e: any) {
      console.log('ini Error bosque', e);
    }
  },
);

export const loadCheckout = createAsyncThunk<any, CheckoutState>(
  'transaction/load-checkout',
  async ({food_id, user_id, quantity, total, status}) => {
    try {
      const form = new FormData();
      form.append('food_id', food_id);
      form.append('user_id', user_id);
      form.append('quantity', quantity);
      form.append('total', total);
      form.append('status', status);
      const response = await connection.post('/checkout', form);

      let messages = 'something went wrong';

      if (response.status !== 200) {
        throw new Error(messages);
      }

      const {data} = response.data;
      return data;

      // return {
      //   data: Object.values(data.data),
      // };
    } catch (e: any) {
      console.log('ini Error bosque', e);
    }
  },
);
