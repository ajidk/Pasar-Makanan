import {Box, HStack, Image, Pressable, Text} from 'native-base';
import React from 'react';
import {ICArrow, PMeditation} from '../../../assets/img';

type Props = {
  title: string;
  desc: string;
  onPress?: () => void;
  img?: any;
};

const Header = (props: Props) => {
  return (
    <Box p={6} bg="white">
      <HStack
        flexDirection={'row'}
        justifyItems="center"
        alignItems={'center'}
        justifyContent="space-between">
        <HStack alignItems="center" space={5}>
          {props.onPress && (
            <Pressable onPress={props.onPress}>
              <ICArrow color="#020202" />
            </Pressable>
          )}
          <Box>
            <Text fontSize={24} fontWeight={500}>
              {props.title}
            </Text>
            <Text fontSize={14} color="#8D92A3" fontWeight={300}>
              {props.desc}
            </Text>
          </Box>
        </HStack>
        {props.img && (
          <Image
            resizeMode="cover"
            source={props.img ? props.img : PMeditation}
            alt="Picture of a Flower"
            w={50}
            h={50}
            rounded={'lg'}
          />
        )}
      </HStack>
    </Box>
  );
};

export default Header;
