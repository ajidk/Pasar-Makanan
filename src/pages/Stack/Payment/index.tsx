import {Box, Button, Text, VStack} from 'native-base';
import React from 'react';
import {PMeditation} from '../../../assets/img';

import {Header, ListData, ListPrice, Main} from '../../../components';

const Payment = ({navigation}: any) => {
  console.log(navigation.push);

  return (
    <Main>
      <Header
        title="Payment"
        desc="You deserve better meal"
        onPress={() => navigation.goBack()}
      />
      <Box bg="white" px={6} py={4} mt={6}>
        <Text color="#020202" fontSize={14} fontWeight={400}>
          Item Ordered
        </Text>
        <ListData
          title="Cherry Healthy"
          desc={1000}
          items={14}
          img={PMeditation}
        />
        <Text color="#020202" fontSize={14} fontWeight={400}>
          Details Transaction
        </Text>
        <VStack mt={3} space={2}>
          <ListPrice title="Cherry Healthy" price={43000} />
          <ListPrice title="Driver" price={11000} />
          <ListPrice title="Tax 10%" price={14500} />
          <ListPrice title="Total" price={3900000} status={true} />
        </VStack>
      </Box>
      <Box bg="white" px={6} py={4} mt={6}>
        <Text color="#020202" fontSize={14} fontWeight={400}>
          Deliver to:
        </Text>
        <VStack mt={3} space={2}>
          <ListPrice title="Name" price={'Angga Risky'} />
          <ListPrice title="Phone No." price={'0822 0819 9688'} />
          <ListPrice title="Address" price={'Setra Duta Palima'} />
          <ListPrice title="House No." price={'A5 Hook'} />
          <ListPrice title="City" price={'Bandung'} />
        </VStack>
      </Box>
      <Button
        bg="#FFC700"
        rounded={8}
        _text={{
          color: '#020202',
          fontWeight: '500',
        }}
        m={6}
        onPress={() => navigation.push('OrderSuccess')}>
        Checkout Now
      </Button>
    </Main>
  );
};

export default Payment;
