import {ScrollView, useTheme} from 'native-base';
import React from 'react';
import {PMeditation} from '../../../../assets/img';
import {ListData} from '../../../../components/molecules';

const PostOrders = () => {
  const {colors} = useTheme();
  return (
    <ScrollView px={6}>
      {Object.keys(colors.cyan).map((key, index) => {
        return (
          <ListData
            key={`asd-${index}`}
            img={PMeditation}
            title="PostOrders"
            desc={4000}
            itemDesc={4}
            status={false}
            date={'Jun 12, 14:00'}
          />
        );
      })}
    </ScrollView>
  );
};

export default PostOrders;
