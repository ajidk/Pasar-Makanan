import {Center} from 'native-base';
import React, {useEffect} from 'react';
import {ICLogo} from '../../../assets/img';

const Main = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, [navigation]);

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
