import {ScrollView} from 'native-base';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks';
import {ListData} from '../../../../components/molecules';
import {loadFood} from '../../../../features/transactions/actions';

const Recomended = () => {
  const dispatch = useAppDispatch();
  const {foods} = useAppSelector(state => state.transaction);

  useEffect(() => {
    dispatch(loadFood({id: '', limit: 10, types: 'recommended'}));
  }, [dispatch]);

  console.log('detail',foods);
  

  return (
    <ScrollView px={6}>
      {foods?.data?.map((item: any, idx: number) => {
        return (
          <ListData
            key={`recomended-${idx}`}
            img={item.picturePath}
            title={item.name}
            desc={item.price}
            rating={item.rate}
          />
        );
      })}
    </ScrollView>
  );
};

export default Recomended;
