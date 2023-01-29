/* eslint-disable @typescript-eslint/no-shadow */
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';

import {ICArrow, PFood} from '../../../assets/img';
import {Star} from '../../../components/atoms';
import {getStorage} from '../../../utils';

const Detail = ({navigation, route}: any) => {
  const {item} = route.params;
  const [count, setCount] = useState<string | number>(1);
  const [user, setUser] = useState<any>();

  const totalPrice = item.price * Number(count);

  getStorage('user_data').then(item => {
    setUser(item.user);
  });

  const onHandleOrderNow = () => {
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;
    const transaction = {
      totalItem: count,
      totalPrice,
      driver,
      tax,
      total,
    };

    const data = {transaction, user, item};

    navigation.navigate('Payment', data);
  };

  return (
    <Box safeAreaTop flex={1}>
      <Box position="relative" w="full">
        <Image
          alt="bg image"
          source={item.picturePath ? {uri: item.picturePath} : PFood}
          resizeMode="cover"
          h={330}
          w="full"
        />
        <Box position="absolute" top={4} left={2}>
          <Pressable
            w={8}
            h={8}
            rounded="full"
            justifyContent="center"
            alignItems="center"
            onPress={() => navigation.goBack()}>
            <ICArrow color="white" />
          </Pressable>
        </Box>
      </Box>
      <VStack
        bg="white"
        flex={1}
        px={4}
        py={6}
        roundedTop={24}
        shadow={2}
        mt={-8}>
        <ScrollView>
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text fontSize={16} fontWeight={400} color="#020202">
                {item.name}
              </Text>
              <Star price={item.price} />
            </VStack>
            <HStack space={2} alignItems="center">
              <Pressable onPress={() => setCount(Number(count) - 1)}>
                <Box
                  w={26}
                  h={26}
                  m={0}
                  borderWidth={1}
                  rounded="full"
                  textAlign="center"
                  alignItems={'center'}>
                  -
                </Box>
              </Pressable>
              <Input
                value={String(count)}
                onChangeText={count => setCount(count)}
                w={4}
                textAlign="center"
                p={0}
                borderWidth="0"
              />
              <Pressable onPress={() => setCount(Number(count) + 1)}>
                <Box
                  w={26}
                  h={26}
                  borderWidth={1}
                  rounded="full"
                  textAlign="center"
                  alignItems={'center'}>
                  +
                </Box>
              </Pressable>
            </HStack>
          </HStack>
          <Text mt={3} fontSize={14} fontWeight={400} color="#8D92A3">
            {item.description}
          </Text>
          <Text mt={4} fontSize={14} fontWeight={400} color="#020202">
            Ingredients:
          </Text>
          <Text mt={1} fontSize={14} fontWeight={400} color="#8D92A3">
            {item.ingredients}
          </Text>
        </ScrollView>
        <HStack mt="auto" justifyContent="space-between">
          <VStack>
            <Text>Total price:</Text>
            <Text>IDR {totalPrice}</Text>
          </VStack>
          <Button
            onPress={onHandleOrderNow}
            bg="#FFC700"
            rounded="24"
            w={163}
            _text={{
              color: '#fff',
              fontWeight: '500',
            }}>
            Order Now
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Detail;
