import {Box, Input, Text} from 'native-base';
import React from 'react';
type Props = {
  label: string;
  placeholder: string;
  type?: 'text' | 'password';
};
const RNInput = (props: Props) => {
  return (
    <Box>
      <Text fontSize={16} fontWeight={400} mb={2}>
        {props.label}
      </Text>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        size={'xl'}
        variant="outline"
      />
    </Box>
  );
};

export default RNInput;
