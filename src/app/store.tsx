import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from '../features/counter/slice';
import {transactionSlice} from '../features/transactions/slice';

export const store = configureStore({
  reducer: {
    random: counterSlice.reducer,
    transactions: transactionSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
