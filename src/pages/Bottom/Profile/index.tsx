/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Pressable,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {PCake} from '../../../assets/img';
import {Header} from '../../../components';
import {loadUserData} from '../../../features/users/actions';
import InProgress from './Tabs/Accounts';
import PostOrders from './Tabs/FoodMarkets';

const renderScene = SceneMap({
  account: InProgress,
  foodmarkets: PostOrders,
});

const initialLayout = {
  width: Dimensions.get('window').width,
};
const Profile = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'account', title: 'Account', nav: navigation},
    {key: 'foodmarkets', title: 'FoodMarket', nav: navigation},
  ]);

  const {lists} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);

  const renderTabBar = (props: any) => {
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: number) => {
          const color =
            index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor =
            index === i ? '#020202' : useColorModeValue('#F2F2F2', 'gray.400');
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable onPress={() => setIndex(i)}>
                <Animated.Text
                  style={{
                    color,
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <Box safeAreaTop h="full">
      <VStack h="full">
        <Center bg="white" py={6}>
          <Box
            p={2}
            borderWidth={1}
            mt={8}
            borderRadius="full"
            borderColor="#8D92A3"
            borderStyle="dashed">
            <Image
              size={150}
              borderRadius={100}
              source={{
                uri: lists.profile_photo_url,
              }}
              alt="Foto"
            />
          </Box>
          <Text fontSize={18} fontWeight="500" mt={4}>
            {lists.name}
          </Text>
          <Text color={'#8D92A3'} mt={2}>
            {lists.email}
          </Text>
        </Center>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{
            backgroundColor: 'white',
            marginTop: 24,
            flex: 1,
          }}
        />
      </VStack>
    </Box>
  );
};

export default Profile;
