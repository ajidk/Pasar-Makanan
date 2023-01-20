import {Button, Center, Image, Text} from 'native-base';
import React from 'react';
import {PMeditation} from '../../../assets/img';

const SignUpSuccess = ({navigation}: any) => {
  return (
    <Center h="full">
      <Image
        resizeMode="contain"
        source={PMeditation}
        alt="Picture of a Flower"
        h={221}
      />

      <Text fontSize={20} fontWeight={400} mt={8}>
        Yeay! Completed
      </Text>
      <Text fontSize={14} fontWeight={300}>
        Now you are able to 14
      </Text>
      <Text fontSize={14} fontWeight={300}>
        some foods as a self-reward
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
        Find Foods
      </Button>
    </Center>
  );
};

export default SignUpSuccess;
