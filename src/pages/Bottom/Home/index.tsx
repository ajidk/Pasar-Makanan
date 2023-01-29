/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
import {
  Box,
  HStack,
  Pressable,
  ScrollView,
  useColorModeValue,
  useTheme,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {PMotor} from '../../../assets/img';
import {Header, ListBox} from '../../../components/molecules';
import {loadFood} from '../../../features/transactions/actions';
import NewTaste from './Tabs/NewTaste';
import Popular from './Tabs/Popular';
import Recomended from './Tabs/Recomended';

const Home = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  const [type, setType] = useState<string>('');
  const dispatch = useAppDispatch();
  const {foods} = useAppSelector(state => state.transaction);

  const renderScene = SceneMap({
    newTaste: NewTaste,
    popular: Popular,
    recomended: Recomended,
  });

  const [routes] = useState([
    {
      key: 'newTaste',
      title: 'New Taste',
    },
    {
      key: 'popular',
      title: 'Popular',
    },
    {
      key: 'recomended',
      title: 'Recommended',
    },
  ]);

  const renderTabBar = (props: any) => {
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((item: any, i: number) => {
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
              <Pressable
                onPress={() => {
                  setIndex(i);
                  setType(item.type);
                }}>
                <Animated.Text
                  style={{
                    color,
                  }}>
                  {item.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  useEffect(() => {
    dispatch(loadFood({id: '', limit: 10}));
  }, [dispatch, type]);

  return (
    <VStack h="full" safeAreaTop>
      <Header title="FoodMarket" desc="Let’s get some foods" img={PMotor} />
      <ScrollView h={'10'} w="full" horizontal={true} pt={6}>
        <HStack space={6} px={6}>
          {foods?.data?.map((item: any, idx: number) => {
            return (
              <ListBox
                key={idx}
                onPress={() => navigation.push('Detail', {item: item})}
                title={item?.name}
                img={item?.picturePath}
                price={item?.rate}
              />
            );
          })}
        </HStack>
      </ScrollView>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        style={{
          marginTop: -100,
          backgroundColor: 'white',
          flex: 1,
        }}
      />
    </VStack>
  );
};

export default Home;
