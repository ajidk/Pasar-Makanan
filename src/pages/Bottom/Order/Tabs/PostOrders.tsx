import {Box, ScrollView} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../../../app/hooks';
import {ListData} from '../../../../components/molecules';
import {loadTransaction} from '../../../../features/transactions/actions';

const PostOrders = () => {
  const dispatch = useAppDispatch();
  const [delivered, setDelivered] = useState<any>([]);
  useEffect(() => {
    dispatch(loadTransaction({limit: 10, status: 'DELIVERED'})).then(item => {
      setDelivered(item?.payload?.data);
    });
  }, [dispatch]);
  console.log(delivered.data);

  return (
    <ScrollView px={6}>
      {delivered?.data?.length !== 0 ? (
        delivered?.data?.map((item: any, idx: number) => {
          return (
            <ListData
              key={`asd${idx}`}
              title={item?.name}
              desc={4000}
              itemDesc={4}
            />
          );
        })
      ) : (
        <Box alignItems="center" justifyContent="center" mt={200}>
          Data Not Found
        </Box>
      )}
    </ScrollView>
  );
};

export default PostOrders;
