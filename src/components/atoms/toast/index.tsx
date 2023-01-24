import {Box, Text} from 'native-base';
import React from 'react';

interface ToastParams {
  title: string;
  bg?: string;
}

const Toast: React.FC<ToastParams> = ({title, bg}) => {
  return (
    <Box bg={bg ? bg : 'green.500'} px={2} py={1} mx={2} rounded="sm">
      <Text color="white">{title}</Text>
    </Box>
  );
};

export default Toast;
