import {HStack, Pressable, Text} from 'native-base';
import React from 'react';
import {ICArrow} from '../../../assets/img';

interface Props {
  title: string;
  onPress?: () => void;
}
const ListProfile: React.FC<Props> = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <HStack
        justifyContent={'space-between'}
        alignItems="center"
        mb={2}
        py={1}>
        <Text fontSize={14} color="#020202" fontWeight={400}>
          {title}
        </Text>
        <ICArrow color={'#020202'} style={{transform: [{rotate: '180deg'}]}} />
      </HStack>
    </Pressable>
  );
};

export default ListProfile;
