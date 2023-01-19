import {VStack} from 'native-base';
import React from 'react';
import {PMotor} from '../../../assets/img';
import {Main} from '../../../components';
import {Header} from '../../../components/molecules';

const Home = ({navigation}: any) => {
  return (
    <Main>
      <VStack>
        <Header title="FoodMarket" desc="Let’s get some foods" img={PMotor} />
      </VStack>
    </Main>
  );
};

export default Home;
