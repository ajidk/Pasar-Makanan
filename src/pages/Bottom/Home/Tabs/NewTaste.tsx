import {ScrollView} from 'native-base';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks';

import {ListData} from '../../../../components/molecules';
import {loadFood} from '../../../../features/transactions/actions';

const NewTaste = () => {
  const dispatch = useAppDispatch();
  const {foods} = useAppSelector(state => state.transaction);

  useEffect(() => {
    dispatch(loadFood({id: '', limit: 10, types: 'new_food'}));
  }, [dispatch]);

  return (
    <ScrollView px={6}>
      {foods?.data?.map((item: any, idx: number) => {
        return (
          <ListData
            key={`new-taste-${idx}`}
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

export default NewTaste;
