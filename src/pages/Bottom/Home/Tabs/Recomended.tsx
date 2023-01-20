import {ScrollView, useTheme} from 'native-base';
import React from 'react';
import {PMeditation} from '../../../../assets/img';
import {ListData} from '../../../../components/molecules';

const Recomended = () => {
  const {colors} = useTheme();
  return (
    <ScrollView px={6}>
      {Object.keys(colors.cyan).map((key, index) => {
        return (
          <ListData
            key={`asd${index}`}
            img={PMeditation}
            title="recomended"
            desc={4000}
            rating={4.6}
          />
        );
      })}
    </ScrollView>
  );
};

export default Recomended;
