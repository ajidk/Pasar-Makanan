/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {loadFood, loadTransaction} from './actions';

interface PropsTransaction {
  transactions: any;
  foods: any;
  loadMoreFollowing: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: PropsTransaction = {
  transactions: [],
  foods: [],
  loadMoreFollowing: false,
  loading: false,
  error: false,
};

export const transactionSlice = createSlice({
  name: 'follow',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadTransaction.fulfilled, (state, action) => {
      state.transactions = action.payload.data;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(loadTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(loadTransaction.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(loadFood.fulfilled, (state, action) => {
      state.foods = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(loadFood.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(loadFood.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
  },
});
