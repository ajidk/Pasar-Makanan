import {Center} from 'native-base';
import React from 'react';
import {ICLogo} from '../../../assets/img';

const Main = () => {
  return (
    <Center
      bg="#FFC700"
      _text={{
        color: 'white',
        fontWeight: 'bold',
      }}
      height={'full'}
      safeArea
      width={'full'}>
      <ICLogo />
    </Center>
  );
};

export default Main;
