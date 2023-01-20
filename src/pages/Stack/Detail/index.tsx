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
import React from 'react';
import {ICArrow, PFood} from '../../../assets/img';
import {Star} from '../../../components/atoms';

const Detail = ({navigation}: any) => {
  return (
    <Box safeAreaTop flex={1}>
      <Box position="relative" w="full">
        <Image alt="bg image" source={PFood} resizeMode="cover" w="full" />
        <Box position="absolute" top={4} left={2}>
          <Pressable
            w={8}
            h={8}
            rounded="full"
            //   bg="red.500"
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
                Cherry Healthy
              </Text>
              <Star price={3.2} />
            </VStack>
            <HStack space={2} alignItems="center">
              <Box
                w={26}
                h={26}
                borderWidth={1}
                rounded="full"
                justifyContent="center"
                alignItems={'center'}>
                -
              </Box>
              <Input
                value={'1'}
                w={4}
                textAlign="center"
                p={0}
                borderWidth="0"
              />
              <Box
                w={26}
                h={26}
                borderWidth={1}
                rounded="full"
                justifyContent="center"
                alignItems={'center'}>
                +
              </Box>
            </HStack>
          </HStack>
          <Text mt={3} fontSize={14} fontWeight={400} color="#8D92A3">
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text mt={4} fontSize={14} fontWeight={400} color="#020202">
            Ingredients:
          </Text>
          <Text mt={1} fontSize={14} fontWeight={400} color="#8D92A3">
            Seledri, telur, blueberry, madu.
          </Text>
        </ScrollView>
        <HStack mt="auto" justifyContent="space-between">
          <VStack>
            <Text>Total price:</Text>
            <Text>IDR 12.289.000</Text>
          </VStack>
          <Button
            onPress={() => navigation.push('Payment')}
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
