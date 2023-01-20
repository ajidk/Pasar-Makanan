import {Box, HStack, Image, Text, VStack} from 'native-base';
import React, {Fragment} from 'react';
import {PMeditation} from '../../../assets/img';
import {Star} from '../../atoms';

type Props = {
  img: any;
  title: string;
  desc: number;
  rating?: number;
  itemDesc?: number;
  items?: number;
  status?: boolean;
  date?: any;
};

const ListData = (props: Props) => {
  return (
    <HStack my={4} justifyContent="space-between" alignItems="center">
      <HStack alignItems="center" space={3}>
        <Image
          source={props.img ? props.img : PMeditation}
          h={60}
          w={60}
          rounded={8}
          alt={props.title}
        />
        <Box>
          <Text fontSize={16} fontWeight={400} color="#020202">
            {props.title}
          </Text>
          <HStack
            fontSize={13}
            color="#8D92A3"
            fontWeight={400}
            flexDirection="row"
            space={1}
            alignItems="center">
            {props.itemDesc && (
              <Fragment>
                <Text color="#8D92A3">{props.itemDesc} items</Text>
                <Box w={1} h={1} bg="#8D92A3" rounded="full" />
              </Fragment>
            )}
            <Text color="#8D92A3">IDR {props.desc}</Text>
          </HStack>
        </Box>
      </HStack>
      {props.rating && <Star price={props.rating} />}
      {props.items && <Text color="#8D92A3">{props.items} items</Text>}
      {(props.status || props.date) && (
        <VStack alignItems="flex-end">
          <Text fontSize={10}>{props.date}</Text>
          <Text fontSize={10} color={props.status ? 'green.500' : 'red.500'}>
            {props.status ? 'Successed' : 'Canceled'}
          </Text>
        </VStack>
      )}
    </HStack>
  );
};

export default ListData;
