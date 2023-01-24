/* eslint-disable dot-notation */
import {
  Box,
  Button,
  CheckIcon,
  Select,
  Text,
  useToast,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {useAppDispatch} from '../../../app/hooks';

import {Main, Toast} from '../../../components';
import {Header, RNInput} from '../../../components/molecules';
import {registerUser} from '../../../features/users/actions';

const Address = ({navigation, route}: any) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const {dataSignUp} = route.params;
  const [form, setForm] = useState({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: '',
  });

  const disabled =
    form.phoneNumber === '' ||
    form.address === '' ||
    form.houseNumber === '' ||
    form.city === ''
      ? true
      : false;

  const confimation = {password_confirmation: dataSignUp.password};

  const handleContinue = () => {
    let register = {...dataSignUp, ...form, ...confimation};

    dispatch(registerUser(register)).then(item => {
      if (item?.meta?.requestStatus === 'fulfilled') {
        toast.show({
          placement: 'top',
          render: () => (
            <Toast title="Selamat akun anda berhasil didaftarkan" />
          ),
        });
        navigation.replace('SignUpSuccess');
      } else {
        toast.show({
          placement: 'top',
          render: () => <Toast title={'gagal registered'} bg="red.500" />,
        });
      }
    });
  };

  return (
    <Main>
      <VStack space={4}>
        <Header
          title="Address"
          desc="Make sure it’s valid"
          onPress={() => navigation.goBack()}
        />
        <VStack bg="white" space={4} p={6} h="full">
          <RNInput
            label="Phone No."
            placeholder="Type your phone nomor"
            value={form.phoneNumber}
            onChange={phoneNumber =>
              setForm({...form, phoneNumber: phoneNumber})
            }
          />
          <RNInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChange={address => setForm({...form, address: address})}
          />
          <RNInput
            label="House Number"
            placeholder="Type your house number"
            value={form.houseNumber}
            onChange={houseNumber =>
              setForm({...form, houseNumber: houseNumber})
            }
          />
          <Box>
            <Text fontSize={16} fontWeight={400} mb={2}>
              City
            </Text>
            <Select
              selectedValue={form.city}
              minWidth="200"
              accessibilityLabel="Select your city"
              placeholder="Select your city"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              size="xl"
              onValueChange={city => setForm({...form, city: city})}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Box>

          <Button
            bg="#FFC700"
            _text={{
              color: '#020202',
              fontWeight: '500',
            }}
            mt={2}
            isDisabled={disabled}
            onPress={handleContinue}>
            Sign Up Now
          </Button>
        </VStack>
      </VStack>
    </Main>
  );
};

export default Address;
