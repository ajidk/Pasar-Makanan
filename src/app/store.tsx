import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from '../features/counter/slice';
import {transactionSlice} from '../features/transactions/slice';
import {userSlice} from '../features/users/slice';

export const store = configureStore({
  reducer: {
    random: counterSlice.reducer,
    transaction: transactionSlice.reducer,
    users: userSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
