import {Box, Input, Text} from 'native-base';
import React from 'react';
interface InputState {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: string) => void;
  type?: 'text' | 'password';
}

const RNInput: React.FC<InputState> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <Box>
      <Text fontSize={16} fontWeight={400} mb={2}>
        {label}
      </Text>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        size={'xl'}
        variant="outline"
      />
    </Box>
  );
};

export default RNInput;
