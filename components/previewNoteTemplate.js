import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import RateStars from './RateStars';
import {styles_PreviewNoteTemplate} from '../styles/stylesPreviewNoteTemplate';

const styles = styles_PreviewNoteTemplate;

const PreviewNoteTemplate = props => {
  //props = onPress, title, rateValue, style, color, backgroundColor
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.container,
        backgroundColor: props.backgroundColor,
        ...props.style,
      }}>
      <View style={styles.left_container}>
        <Text style={{...styles.title, color: props.titleColor}}>
          {props.title}
        </Text>
        <View style={styles.rateStars}>
          <RateStars
            imageSize={30}
            readonly={true}
            startingValue={props.rateValue}
            tintColor={props.tintColor}
            ratingBackgroundColor={props.ratingBackgroundColor}
            ratingColor={props.ratingColor}
          />
        </View>
      </View>
      <View style={styles.right_container}>
        <Text style={{...styles.next, color: props.titleColor}}>></Text>
      </View>
    </TouchableOpacity>
  );
};

export default PreviewNoteTemplate;
