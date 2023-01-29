/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Center,
  Image,
  Pressable,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {useAppDispatch} from '../../../app/hooks';
import {PCake} from '../../../assets/img';
import {Header} from '../../../components';
import {loadTransaction} from '../../../features/transactions/actions';
import InProgress from './Tabs/InProgress';
import PostOrders from './Tabs/PostOrders';

const renderScene = SceneMap({
  inProgress: InProgress,
  pastOrder: PostOrders,
});

const initialLayout = {
  width: Dimensions.get('window').width,
};
const Order = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'inProgress', title: 'In Progress'},
    {key: 'pastOrder', title: 'Past Orders'},
  ]);

  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState<any>([]);
  useEffect(() => {
    dispatch(loadTransaction({limit: 10, status: 'ON_DELIVERY'})).then(item => {
      setProgress(item?.payload?.data);
    });
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
      {progress?.data?.length === 0 ? (
        <Center h="full">
          <Image
            resizeMode="cover"
            source={PCake}
            alt="Picture of a Flower"
            h={221}
          />

          <Text fontSize={20} fontWeight={400} mt={8}>
            Ouch! Hungry
          </Text>
          <Text fontSize={14} fontWeight={300}>
            Seems like you have not ordered any food yet
          </Text>
          <Button
            bg="#FFC700"
            _text={{
              color: '#020202',
              fontWeight: '500',
            }}
            w={200}
            mt={8}
            onPress={() => navigation.push('Home')}>
            Find Foods
          </Button>
        </Center>
      ) : (
        <VStack h="full">
          <Header
            title="Your Orders"
            desc="Wait for the best meal"
            onPress={() => navigation.goBack()}
          />
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
      )}
    </Box>
  );
};

export default Order;
