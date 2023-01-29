import {Box, Button, ScrollView, Text, useToast, VStack} from 'native-base';
import React from 'react';
import {useAppDispatch} from '../../../app/hooks';
import {Header, ListData, ListPrice, Main, Toast} from '../../../components';
import {loadCheckout} from '../../../features/transactions/actions';

const Payment = ({navigation, route}: any) => {
  const {item, user, transaction} = route.params;

  const toast = useToast();
  const dispatch = useAppDispatch();
  const data = {
    food_id: item?.id,
    user_id: user?.id,
    quantity: transaction?.totalItem,
    total: transaction?.total,
    status: 'ON_DELIVERY',
  };
  const handleOnCheckout = () => {
    toast.show({
      placement: 'top',
      render: () => <Toast title="Selamat checkout anda telah berhasil" />,
    });
    dispatch(loadCheckout(data)).then(() => {
      navigation.push('OrderSuccess');
    });
  };

  const totalPrice = item?.food?.price * item?.quantity;
  const tax = (10 / 100) * totalPrice;

  return (
    <Main>
      <Header
        title="Payment"
        desc="You deserve better meal"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Box bg="white" px={6} py={4} mt={6}>
          <Text color="#020202" fontSize={14} fontWeight={400}>
            Item Ordered
          </Text>
          <ListData
            title={item?.name || item?.food?.name}
            desc={item?.price || item?.food?.price}
            items={transaction?.totalItem || item?.quantity}
            img={item?.picturePath || item?.food?.picturePath}
          />
          <Text color="#020202" fontSize={14} fontWeight={400}>
            Details Transaction
          </Text>
          <VStack mt={3} space={2}>
            <ListPrice
              title={item?.food?.name}
              price={transaction?.totalPrice || totalPrice}
            />
            <ListPrice title="Driver" price={transaction?.driver || 50000} />
            <ListPrice title="Tax 10%" price={transaction?.tax || tax} />
            <ListPrice
              title="Total"
              price={transaction?.total || item?.total}
              status={true}
            />
          </VStack>
        </Box>
        <Box bg="white" px={6} py={4} mt={6}>
          <Text color="#020202" fontSize={14} fontWeight={400}>
            Deliver to:
          </Text>
          <VStack mt={3} space={2}>
            <ListPrice title="Name" price={user?.name || item?.user?.name} />
            <ListPrice
              title="Phone No."
              price={user?.phoneNumber || item?.user?.phoneNumber}
            />
            <ListPrice
              title="Address"
              price={user?.address || item?.user?.address}
            />
            <ListPrice
              title="House No."
              price={user?.houseNumber || item?.user?.houseNumber}
            />
            <ListPrice title="City" price={user?.city || item?.user?.city} />
          </VStack>
        </Box>
        {user === undefined && (
          <Box bg="white" px={6} py={4} mt={6}>
            <Text color="#020202" fontSize={14} fontWeight={400}>
              Order Status:
            </Text>
            <ListPrice title={item?.status} price={'Paid'} status={true} />
          </Box>
        )}
        <Button
          bg={user === undefined ? '#D9435E' : '#FFC700'}
          rounded={8}
          _text={{
            color: user === undefined ? '#fff' : '#020202',
            fontWeight: '500',
            textAlign: 'center',
          }}
          m={6}
          onPress={handleOnCheckout}>
          {user === undefined ? 'Cancel My Order' : 'Checkout Now'}
        </Button>
      </ScrollView>
    </Main>
  );
};

export default Payment;
