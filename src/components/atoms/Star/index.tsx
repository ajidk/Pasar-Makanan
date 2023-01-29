import {HStack, Text} from 'native-base';
import React from 'react';
import {ICStar} from '../../../assets/img';
interface StarProps {
  price: number;
}
const Star: React.FC<StarProps> = ({price}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= price) {
        star.push(<ICStar color="#FFC700" />);
      } else {
        star.push(<ICStar color="#ECECEC" />);
      }
    }
    return star;
  };
  return (
    <HStack space={2} alignItems="center">
      <HStack>{renderStar()}</HStack>
      <Text>{price}</Text>
    </HStack>
  );
};

export default Star;
