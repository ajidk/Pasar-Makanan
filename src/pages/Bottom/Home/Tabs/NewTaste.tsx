import {ScrollView, useTheme} from 'native-base';
import React from 'react';
import {PMeditation} from '../../../../assets/img';
import {ListData} from '../../../../components/molecules';

const NewTaste = () => {
  const {colors} = useTheme();
  return (
    <ScrollView px={6}>
      {Object.keys(colors.cyan).map((key, index) => {
        return (
          <ListData
            key={`taste${index}`}
            img={PMeditation}
            title="new taste"
            desc={4000}
            rating={4.6}
          />
        );
      })}
    </ScrollView>
  );
};

export default NewTaste;
