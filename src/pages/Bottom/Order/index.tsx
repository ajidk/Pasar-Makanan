import {Box, Button, Center, Image, Text, VStack} from 'native-base';
import React from 'react';
import {PCake} from '../../../assets/img';
import {Main} from '../../../components';
import {Header} from '../../../components/molecules';

const Order = ({navigation}: any) => {
  return (
    <Main>
      <Center h="full">
        <Image
          resizeMode="cover"
          source={PCake}
          alt="Picture of a Flower"
          h={221}
        />

        <Text fontSize={20} fontWeight={400} mt={8}>
          Ouch! Hungry
        </Text>
        <Text fontSize={14} fontWeight={300}>
          Seems like you have not ordered any food yet
        </Text>
        <Button
          bg="#FFC700"
          _text={{
            color: '#020202',
            fontWeight: '500',
          }}
          w={200}
          mt={8}
          onPress={() => navigation.push('Home')}>
          Find Foods
        </Button>
      </Center>
    </Main>
  );
};

export default Order;
