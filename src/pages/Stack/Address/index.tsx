import {Box, Button, CheckIcon, Select, Text, VStack} from 'native-base';
import React from 'react';

import {Main} from '../../../components';
import {Header, RNInput} from '../../../components/molecules';

const Address = ({navigation}: any) => {
  const [service, setService] = React.useState('');

  return (
    <Main>
      <VStack space={4}>
        <Header
          title="Address"
          desc="Make sure it’s valid"
          onPress={() => navigation.goBack()}
        />
        <VStack bg="white" space={4} p={6} h="full">
          <RNInput label="Phone No." placeholder="Type your phone nomor" />
          <RNInput label="Address" placeholder="Type your address" />
          <RNInput label="House Number" placeholder="Type your house number" />
          <Box>
            <Text fontSize={16} fontWeight={400} mb={2}>
              City
            </Text>
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Select your city"
              placeholder="Select your city"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              size="xl"
              onValueChange={itemValue => setService(itemValue)}>
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
            onPress={() => navigation.push('SignUpSuccess')}>
            Sign Up Now
          </Button>
        </VStack>
      </VStack>
    </Main>
  );
};

export default Address;
