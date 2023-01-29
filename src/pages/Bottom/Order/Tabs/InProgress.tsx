import {useNavigation} from '@react-navigation/native';
import {Box, Pressable, ScrollView} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../../../app/hooks';
import {ListData} from '../../../../components/molecules';
import {loadTransaction} from '../../../../features/transactions/actions';

const InProgress = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState<any>([]);
  useEffect(() => {
    dispatch(loadTransaction({limit: 10, status: 'ON_DELIVERY'})).then(item => {
      setProgress(item?.payload?.data);
    });
  }, [dispatch]);

  return (
    <ScrollView px={6}>
      {progress?.data?.length !== 0 ? (
        progress?.data?.map((item: any, idx: number) => {
          console.log('data ', item);

          return (
            <Pressable
              onPress={() => navigation.push('Payment', {item: item})}
              key={`asd${idx}`}>
              <ListData
                title={item?.food?.name}
                img={item?.food?.picturePath}
                desc={item?.food?.price}
                itemDesc={item?.quantity}
              />
            </Pressable>
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

export default InProgress;
