import {Button, useToast, VStack} from 'native-base';
import React, {useState} from 'react';
import {useAppDispatch} from '../../../app/hooks';
import {Main, Toast} from '../../../components';
import {Header, RNInput} from '../../../components/molecules';
import {loginUser} from '../../../features/users/actions';
import {updateStorage} from '../../../utils';

const SignIn = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async () => {
    dispatch(loginUser(form))
      .then(item => {
        if (item.payload.user) {
          updateStorage('user_data', item.payload);
          toast.show({
            placement: 'top',
            render: () => <Toast title="Login berhasil" />,
          });
          navigation.navigate('BottomNavigation');
        } else {
          toast.show({
            placement: 'top',
            render: () => <Toast title="Login gagal" bg="red.500" />,
          });
        }
      })
      .catch(error => {
        console.log('error', error);
      });
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
