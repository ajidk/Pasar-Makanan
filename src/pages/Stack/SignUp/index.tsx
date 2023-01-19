import {Box, Button, Center, Flex, Text, VStack} from 'native-base';
import React from 'react';

import {Main} from '../../../components';
import {Header, RNInput} from '../../../components/molecules';

const SignUp = ({navigation}: any) => {
  return (
    <Main>
      <VStack space={4}>
        <Header
          title="Sign Up"
          desc="Register and eat"
          onPress={() => navigation.goBack()}
        />
        <VStack bg="white" space={4} p={6} h="full">
          <Center>
            {/* <Input mx="3" type="password" placeholder="Input" size={150} /> */}

            <Box
              p={2}
              borderWidth={1}
              borderRadius="full"
              borderColor="#8D92A3"
              borderStyle="dashed">
              <Flex
                size={150}
                rounded="full"
                bg="#F0F0F0"
                justifyContent="center"
                alignItems="center">
                <Text color="#8D92A3">Add</Text>
                <Text color="#8D92A3">Foto</Text>
              </Flex>
            </Box>
          </Center>
          <RNInput label="Full Name" placeholder="Type your full name" />
          <RNInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <RNInput
            type="password"
            label="Password"
            placeholder="Type your password"
          />
          <Button
            bg="#FFC700"
            _text={{
              color: '#020202',
              fontWeight: '500',
            }}
            mt={2}
            onPress={() => navigation.push('Address')}>
            Continue
          </Button>
        </VStack>
      </VStack>
    </Main>
  );
};

export default SignUp;
