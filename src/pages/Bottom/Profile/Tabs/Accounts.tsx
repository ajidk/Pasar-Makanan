import {ScrollView} from 'native-base';
import React from 'react';
import {ListProfile} from '../../../../components/molecules';

const Accounts = ({route}: any) => {
  return (
    <ScrollView px={6} mt={3}>
      <ListProfile title="Edit Profile" />
      <ListProfile title="Home Address" />
      <ListProfile title="Security" />
      <ListProfile title="Payments" />
      <ListProfile title="Logout" onPress={() => route.nav.push('Main')} />
    </ScrollView>
  );
};

export default Accounts;
