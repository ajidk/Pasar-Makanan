import {HStack, Text} from 'native-base';
import React from 'react';
import {ICStar} from '../../../assets/img';
type Props = {
  price: number;
};
const Star = (props: Props) => {
  return (
    <HStack space={2} alignItems="center">
      <HStack>
        <ICStar color="#FFC700" />
        <ICStar color="#FFC700" />
        <ICStar color="#FFC700" />
        <ICStar color="#ECECEC" />
        <ICStar color="#ECECEC" />
      </HStack>
      <Text>{props.price}</Text>
    </HStack>
  );
};

export default Star;
