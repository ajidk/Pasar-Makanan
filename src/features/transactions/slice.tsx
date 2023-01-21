/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {loadTransaction} from './actions';

export const transactionSlice = createSlice({
  name: 'follow',
  initialState: {
    transactions: [],
    loadMoreFollower: false,
    listFollowing: [],
    loadMoreFollowing: false,
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadTransaction.fulfilled, (state, action) => {
      state.transactions = action.payload.data;
      state.loadMoreFollower = action.payload.loadMore;
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
    // builder.addCase(loadFollowing.fulfilled, (state, action) => {
    //   state.listFollowing = action.payload.data;
    //   state.loadMoreFollowing = action.payload.loadMore;
    //   state.loading = false;
    //   state.error = false;
    // });
    // builder.addCase(loadFollowing.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = true;
    // });
    // builder.addCase(loadFollowing.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = false;
    // });
  },
});
