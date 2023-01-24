import {createSlice} from '@reduxjs/toolkit';
import {loadUserData} from './actions';

type User = {
  lists: any;
  loading: boolean;
  error: boolean;
};

const initialState: User = {
  lists: {},
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadUserData.fulfilled, (state, action) => {
      state.lists = action.payload.data;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(loadUserData.rejected, state => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(loadUserData.pending, state => {
      state.loading = true;
      state.error = false;
    });
  },
});
