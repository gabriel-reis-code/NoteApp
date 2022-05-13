import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Props = onPress, iconDisplay, iconName, iconType, iconSize, textStyle, textDisplay, text
const Custom_Button = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
        onPress={props.onPress}>
        <View
          style={{
            display:
              props.iconDisplay !== undefined ? props.iconDisplay : 'flex',
          }}>
        </View>

        <Text
          style={{
            ...props.textStyle,
            display:
              props.textDisplay !== undefined ? props.textDisplay : 'flex',
          }}>
          {'' + props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Custom_Button;
