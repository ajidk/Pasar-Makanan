import {createAsyncThunk} from '@reduxjs/toolkit';
import connection from '../../config/connection';

export const loadTransaction = createAsyncThunk<
  any,
  {
    id?: string;
    limit?: string;
    food_id?: string;
    status?: string;
    isRefresh?: boolean;
  }
>('get-transaction', async (args, {rejectWithValue, getState}: any) => {
  let dataFollower = [];
  let loadMore = false;
  const currentData = getState().follow.listFollower;

  try {
    const response = await connection.get(
      `transaction/?id=${args.id}&limit=${args.limit}&food_id=${args.food_id}&status=${args.status}`,
    );

    let messages = 'something went wrong';
    if (response.status !== 200) {
      throw new Error(messages);
    }
    const {status, message, data, total} = response.data;
    console.log('ini respon', response);

    // console.log('Total Follower',total)
    const statusRespon = status;
    const messageRespon = message;
    if (statusRespon !== 200) {
      throw new Error(messageRespon.error);
    }
    const newData = Object.values(data).sort((a: any, b: any) => b.id - a.id);
    if (args.isRefresh === false) {
      dataFollower = currentData.concat(newData);
    } else {
      dataFollower = newData;
    }
    if (Number(total) > dataFollower.length) {
      loadMore = true;
    } else {
      loadMore = false;
    }
    // console.log('testing', dataFollower)
    return {
      data: dataFollower,
      loadMore: loadMore,
      total: total,
    };
  } catch (e: any) {
    console.log('Error', e.response.data);
    return rejectWithValue(e.response.data);
  }
});

// export const followUnfollow = createAsyncThunk<
//   any,
//   {
//     user: string;
//   }
// >('follow/follow-following', async (args, {rejectWithValue}) => {
//   // let dataFollower = [];
//   // let loadMore = false;
//   // const currentData = getState().follow.listFollowing;
//   try {
//     const formData = new FormData();
//     formData.append('user_id', args.user);

//     const response = await connection.post(`/user/follow/`, formData);
//     let messages = 'something went wrong';
//     if (response.status !== 200) {
//       throw new Error(messages);
//     }
//     const {status, message} = response.data;
//     // console.log('Newdata')
//     // const newData = data
//     const statusRespon = status;
//     const messageRespon = message;
//     if (statusRespon !== 200) {
//       throw new Error(messageRespon.error);
//     }
//     return 'newData';
//   } catch (e: any) {
//     console.log('Error', e.response.data);
//     return rejectWithValue(e.response.data);
//   }
// });

// export const loadFollowing = createAsyncThunk<
//   any,
//   {
//     user: string;
//     offset: string;
//     limits: string;
//     search: string;
//     isRefresh: boolean;
//   }
// >('follow/load-following', async (args, {rejectWithValue, getState}: any) => {
//   let dataFollower = [];
//   let loadMore = false;
//   const currentData = getState().follow.listFollowing;
//   try {
//     const response = await connection.get(
//       `/user/following/${args.user}?offset=${args.offset}&limit=${args.limits}&search=${args.search}`,
//     );
//     let messages = 'something went wrong';
//     if (response.status !== 200) {
//       throw new Error(messages);
//     }
//     const {status, message, data, total} = response.data;
//     // console.log('Total Following',total)
//     const statusRespon = status;
//     const messageRespon = message;
//     if (statusRespon !== 200) {
//       throw new Error(messageRespon.error);
//     }
//     // console.log('data',data, Object.values(data))
//     const macan = Object.values(data);
//     let newData;
//     if (macan.length > 1) {
//       newData = macan.sort((a: any, b: any) => b.id - a.id);
//     } else {
//       newData = macan;
//     }
//     if (args.isRefresh === false) {
//       dataFollower = currentData.concat(newData);
//     } else {
//       dataFollower = newData;
//     }
//     if (Number(total) > dataFollower.length) {
//       loadMore = true;
//     } else {
//       loadMore = false;
//     }
//     return {
//       // type: Action.SET_LIST_FOLLOWING,
//       data: dataFollower,
//       loadMore: loadMore,
//       total: total,
//     };
//   } catch (e: any) {
//     console.log('Error', e.response.data);
//     return rejectWithValue(e.response.data);
//   }
// });
