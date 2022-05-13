import React from 'react';
import {Rating} from 'react-native-ratings';
import {View} from 'react-native';

//props = imageSize, onFinishRating, startingValue, readonly, tintColor, ratingBackgroundColor, ratingColor
const RateStars = props => {
  return (
    <View>
      <Rating
        type="custom"
        ratingCount={5}
        imageSize={props.imageSize === undefined ? 40 : props.imageSize}
        // showRating
        ratingColor={props.ratingColor}
        ratingBackgroundColor={props.ratingBackgroundColor}
        tintColor={props.tintColor}
        onFinishRating={props.onFinishRating}
        startingValue={
          props.startingValue === undefined ? 0 : props.startingValue
        }
        style={{borderColor: 'black'}}
        readonly={props.readonly === undefined ? false : props.readonly}
      />
    </View>
  );
};
export default RateStars;
