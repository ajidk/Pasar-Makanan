import {Box, HStack, Image, Text, VStack} from 'native-base';
import React, {Fragment} from 'react';
import {PMeditation} from '../../../assets/img';
import {Star} from '../../atoms';

interface Props {
  img?: any;
  title: string;
  desc: number;
  rating?: number;
  itemDesc?: number;
  items?: number;
  status?: boolean;
  date?: any;
}

const ListData: React.FC<Props> = ({
  img,
  title,
  desc,
  rating,
  itemDesc,
  items,
  status,
  date,
}) => {
  return (
    <HStack my={4} justifyContent="space-between" alignItems="center">
      <HStack alignItems="center" space={3}>
        <Image
          source={img ? {uri: img} : PMeditation}
          h={60}
          w={60}
          rounded={8}
          alt={title}
        />
        <Box>
          <Text fontSize={16} fontWeight={400} color="#020202">
            {title}
          </Text>
          <HStack
            fontSize={13}
            color="#8D92A3"
            fontWeight={400}
            flexDirection="row"
            space={1}
            alignItems="center">
            {itemDesc && (
              <Fragment>
                <Text color="#8D92A3">{itemDesc} items</Text>
                <Box w={1} h={1} bg="#8D92A3" rounded="full" />
              </Fragment>
            )}
            <Text color="#8D92A3">IDR {desc}</Text>
          </HStack>
        </Box>
      </HStack>
      {rating && <Star price={rating} />}
      {items && <Text color="#8D92A3">{items} items</Text>}
      {(status || date) && (
        <VStack alignItems="flex-end">
          <Text fontSize={10}>{date}</Text>
          <Text fontSize={10} color={status ? 'green.500' : 'red.500'}>
            {status ? 'Successed' : 'Canceled'}
          </Text>
        </VStack>
      )}
    </HStack>
  );
};

export default ListData;
