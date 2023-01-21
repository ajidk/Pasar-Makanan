import axios from 'axios';
import {Button, VStack} from 'native-base';
import React, {useState} from 'react';
import {Main} from '../../../components';
import {Header, RNInput} from '../../../components/molecules';

const SignIn = ({navigation}: any) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async () => {
    console.log(form);
    await axios
      .post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(response => {
        console.log('success', response);
      })
      .catch(function (error) {
        console.info('error kau akan punah', error);
      });
    // axios
    //   .get('https://randomuser.me/api/?results=30')
    //   .then(({data}) => {
    //     const {results} = data;
    //     // setUsers(results);
    //     console.log(results);
    //   })
    //   .finally(() => {
    //     // setLoading(false);
    //   });
  };

  return (
    <Main>
      <VStack space={4}>
        <Header title="Sign In" desc="Find your best ever meal" />
        <VStack bg="white" space={4} p={6} h="full">
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
            onPress={handleSignIn}>
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
