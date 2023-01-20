import {HStack, Text} from 'native-base';
import React from 'react';

type Props = {
  title: string;
  price: number | string;
  status?: boolean;
};
const ListPrice = (props: Props) => {
  return (
    <HStack justifyContent={'space-between'} alignItems="center">
      <Text fontSize={14} color="#8D92A3">
        {props.title}
      </Text>
      <Text fontSize={14} color={`${props.status ? '#1ABC9C' : '#020202'}`}>
        {typeof props.price === 'number' && 'IDR'} {props.price}
      </Text>
    </HStack>
  );
};

export default ListPrice;
