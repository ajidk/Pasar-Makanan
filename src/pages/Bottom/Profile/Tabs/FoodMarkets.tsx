import {ScrollView} from 'native-base';
import React from 'react';
import {ListProfile} from '../../../../components/molecules';

const FoodMarkets = () => {
  return (
    <ScrollView px={6} mt={3}>
      <ListProfile title="Rate App" />
      <ListProfile title="Help Center" />
      <ListProfile title="Privacy & Policy" />
      <ListProfile title="Terms & Conditions" />
    </ScrollView>
  );
};

export default FoodMarkets;
