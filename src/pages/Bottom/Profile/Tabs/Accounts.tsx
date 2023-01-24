import {ScrollView} from 'native-base';
import React from 'react';
import {ListProfile} from '../../../../components/molecules';
import {removeStorage} from '../../../../utils';

const Accounts = ({route}: any) => {
  const handleLogout = () => {
    removeStorage('user_data');
    route.nav.push('Main');
  };

  return (
    <ScrollView px={6} mt={3}>
      <ListProfile title="Edit Profile" />
      <ListProfile title="Home Address" />
      <ListProfile title="Security" />
      <ListProfile title="Payments" />
      <ListProfile title="Logout" onPress={handleLogout} />
    </ScrollView>
  );
};

export default Accounts;
