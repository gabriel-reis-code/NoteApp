import React from 'react';
import {Svg, Image} from 'react-native-svg';

function ShareIcon() {
  return (
    <Svg height="100%" width="100%">
      <Image
        height="100%"
        width="90%"
        href={require('../images/icons8-share-60.png')}
      />
    </Svg>
  );
}

export default ShareIcon;
