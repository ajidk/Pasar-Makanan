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
  id: string;
  limit?: string;
  food_id?: string;
  status?: string;
}

export const loadTransaction = createAsyncThunk<any, TransactionStateParams>(
  'get-transaction',
  async ({id, limit, food_id, status}) => {
    try {
      const response = await connection.get(
        `/transaction?id=${id}&limit=${limit}&food_id=${food_id}&status=${status}`,
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
  async ({id, limit, name, types, price_from, price_to, rate_from}) => {
    try {
      const response = await connection.get(
        // `/food`,
        `/food?limit=${limit && limit}&id=${id && id}&types=${types && types}`,
        // `/food?limit=${limit}&id=${id}&name=${name}&types=${types}&price_from=${price_from}&price_to=${price_to}&rate_from=${rate_from}`,
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
