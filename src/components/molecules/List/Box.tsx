import {Box, Image, Pressable, Text} from 'native-base';
import React from 'react';
import {PMotor} from '../../../assets/img';
import {Star} from '../../atoms';

type Props = {
  onPress: () => void;
  img?: any;
  title: string;
  price: number;
};

const ListBox = (props: Props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Box bg="white" w={200} h={210} rounded={8}>
        <Box>
          <Image
            source={props.img ? {uri: props.img} : PMotor}
            alt="Alternate Text"
            w="full"
            h={140}
            roundedTop={8}
            resizeMode="cover"
          />
        </Box>
        <Box p={3}>
          <Text fontSize={16} fontWeight={400} color="#020202">
            {props.title}
          </Text>
          <Star price={4.5} />
        </Box>
      </Box>
    </Pressable>
  );
};

export default ListBox;
