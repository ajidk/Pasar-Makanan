import {Box} from 'native-base';
import React from 'react';

type Props = {
  children: any;
};

const Main = (props: Props) => {
  return (
    <Box
      safeArea
      w="full"
      _dark={{
        bg: 'coolGray.800',
      }}
      _light={{
        bg: 'warmGray.50',
      }}>
      {props.children}
    </Box>
  );
};

export default Main;
