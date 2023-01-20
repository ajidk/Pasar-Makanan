import {Button, Center, Image, Text} from 'native-base';
import React from 'react';
import {PMotor} from '../../../assets/img';

const OrderSuccess = ({navigation}: any) => {
  return (
    <Center h="full">
      <Image
        resizeMode="contain"
        source={PMotor}
        alt="Picture of a Flower"
        h={221}
      />

      <Text fontSize={20} fontWeight={400} mt={8}>
        You’ve Made Order
      </Text>
      <Text fontSize={14} fontWeight={300}>
        Just stay at home while we are
      </Text>
      <Text fontSize={14} fontWeight={300}>
        preparing your best foods
      </Text>
      <Button
        bg="#FFC700"
        rounded={8}
        _text={{
          color: '#020202',
          fontWeight: '500',
        }}
        w={200}
        mt={8}
        onPress={() => navigation.push('BottomNavigation')}>
        Order Other Foods
      </Button>
      <Button
        bg="#8D92A3"
        rounded={8}
        _text={{
          color: '#fff',
          fontWeight: '500',
        }}
        w={200}
        mt={3}
        onPress={() => navigation.push('Home')}>
        View My Order
      </Button>
    </Center>
  );
};

export default OrderSuccess;
