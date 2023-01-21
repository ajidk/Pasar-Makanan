/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
import {
  Box,
  Flex,
  HStack,
  Pressable,
  ScrollView,
  useColorModeValue,
  useTheme,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {Animated, StatusBar} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {PMotor} from '../../../assets/img';
import {Header, ListBox} from '../../../components/molecules';
import NewTaste from './Tabs/NewTaste';
import Popular from './Tabs/Popular';
import Recomended from './Tabs/Recomended';

const renderScene = SceneMap({
  newTaste: NewTaste,
  popular: Popular,
  recomended: Recomended,
});

const Home = ({navigation}: any) => {
  const {colors} = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'newTaste', title: 'New Taste'},
    {key: 'popular', title: 'Popular'},
    {key: 'recomended', title: 'Recommended'},
  ]);

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
    <VStack h="full" safeAreaTop>
      <Header title="FoodMarket" desc="Let’s get some foods" img={PMotor} />
      <ScrollView h={'10'} w="full" horizontal={true} pt={6}>
        <HStack space={6} px={6}>
          {Object.keys(colors.cyan).map((item, index) => {
            if (index >= 1 && index <= 5)
              return (
                <ListBox
                  key={'12' + index}
                  onPress={() => navigation.push('Detail')}
                  title={`Cherry Healthy ${item}`}
                  price={4.5}
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
