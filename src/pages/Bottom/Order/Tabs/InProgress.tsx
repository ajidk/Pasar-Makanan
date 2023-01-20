import {ScrollView, useTheme} from 'native-base';
import React from 'react';
import {PMeditation} from '../../../../assets/img';
import {ListData} from '../../../../components/molecules';

const InProgress = () => {
  const {colors} = useTheme();
  return (
    <ScrollView px={6}>
      {Object.keys(colors.cyan).map((key, index) => {
        return (
          <ListData
            key={`asd${index}`}
            img={PMeditation}
            title="in Progress"
            desc={4000}
            itemDesc={4}
          />
        );
      })}
    </ScrollView>
  );
};

export default InProgress;
