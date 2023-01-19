import {Button, VStack} from 'native-base';
import React from 'react';
import {Main} from '../../../components';
import {Header, RNInput} from '../../../components/molecules';

const SignIn = ({navigation}: any) => {
  return (
    <Main>
      <VStack space={4}>
        <Header title="Sign In" desc="Find your best ever meal" />
        <VStack bg="white" space={4} p={6} h="full">
          <RNInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <RNInput label="Password" placeholder="Type your password" />
          <Button
            bg="#FFC700"
            _text={{
              color: '#020202',
              fontWeight: '500',
            }}
            mt={2}
            onPress={() => navigation.push('BottomNavigation')}>
            Click Me
          </Button>
          <Button
            bg="#8D92A3"
            mt={-1}
            _text={{
              color: '#fff',
              fontWeight: '500',
            }}
            onPress={() => navigation.push('SignUp')}>
            Create New Account
          </Button>
        </VStack>
      </VStack>
    </Main>
  );
};

export default SignIn;
