import {Box, Button, Center, Flex, Pressable, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

import {Main} from '../../../components';
import {Header, RNInput} from '../../../components/molecules';

const SignUp = ({navigation}: any) => {
  const [response, setResponse] = useState<any>();

  // const onButtonPress = useCallback(async (type: string, options: any) => {
  // const result = await launchImageLibrary(options);
  // console.log(result);

  //   // if (type === 'capture') {
  //   //   ImagePicker.launchCamera(options, setResponse);
  //   // } else {
  //   //   console.log(type);

  //   //   ImagePicker.launchImageLibrary(options, setResponse);
  //   // }
  // }, []);

  const onButtonPress = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options, setResponse);
    console.log(result);
  };

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleContinue = () => {
    console.log(form);

    navigation.push('Address', {dataSignUp: form});
  };

  console.log('ini res', response);

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
            <Box
              p={2}
              borderWidth={1}
              borderRadius="full"
              borderColor="#8D92A3"
              borderStyle="dashed">
              <Pressable onPress={onButtonPress}>
                <Flex
                  size={150}
                  rounded="full"
                  bg="#F0F0F0"
                  justifyContent="center"
                  alignItems="center">
                  <Text color="#8D92A3">Add</Text>
                  <Text color="#8D92A3">Foto</Text>
                </Flex>
              </Pressable>
            </Box>
          </Center>
          <RNInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChange={name => setForm({...form, name: name})}
          />
          <RNInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChange={email => setForm({...form, email: email})}
          />
          <RNInput
            type="password"
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChange={password => setForm({...form, password: password})}
          />
          <Button
            bg="#FFC700"
            _text={{
              color: '#020202',
              fontWeight: '500',
            }}
            mt={2}
            onPress={handleContinue}>
            Continue
          </Button>
        </VStack>
      </VStack>
    </Main>
  );
};

export default SignUp;
