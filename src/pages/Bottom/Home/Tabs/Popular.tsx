import {useNavigation} from '@react-navigation/native';
import {Pressable, ScrollView} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../../../app/hooks';
import {ListData} from '../../../../components/molecules';
import {loadFoodByType} from '../../../../features/transactions/actions';

const Popular = () => {
  const navigation: any = useNavigation();

  const dispatch = useAppDispatch();
  const [popular, setPopular] = useState<any>([]);

  useEffect(() => {
    dispatch(loadFoodByType({types: 'popular'})).then(item => {
      setPopular(item?.payload?.data);
    });
  }, [dispatch]);

  return (
    <ScrollView px={6}>
      {popular?.map((item: any, idx: number) => {
        return (
          <Pressable onPress={() => navigation.push('Detail', {item: item})}>
            <ListData
              key={`taste${idx}`}
              title={item.name}
              img={item.picturePath}
              desc={item.price}
              rating={item.rate}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default Popular;
