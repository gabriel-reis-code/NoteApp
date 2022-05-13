import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Share, TouchableOpacity} from 'react-native';
import RateStars from '../components/RateStars';
import {AsyncStorage} from 'react-native';
import {styles_ViewNote} from '../styles/stylesViewNote';
import Custom_Button from '../components/Button_custom';
import ShareIcon from '../components/ShareIcon';
const styles = styles_ViewNote;

const ViewNote = ({navigation, route}) => {
  const [info, setInfo] = useState({});

  const handleDeleteNote = async () => {
    try {
      AsyncStorage.removeItem(route.params.id);
      navigation.navigate('My Notes');
    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = async () => {
    const message =
      `Título: ${info.title}\n` +
      `${info.description}\n` +
      `Avaliação: ${info.rating}`;
    try {
      Share.share({
        message: message,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let data = await AsyncStorage.getItem(route.params.id);
        data = JSON.parse(data);
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title_container}>{info.title}</Text>
        <TouchableOpacity style={styles.share_container} onPress={handleShare}>
          <ShareIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.description_container}>
        <ScrollView style={styles.description}>
          <Text style={styles.text}>{info.description}</Text>
        </ScrollView>
      </View>

      <View style={styles.rate_stars}>
        <RateStars
          readonly={true}
          startingValue={info.rating}
          tintColor={styles.stars.tintColor}
          ratingBackgroundColor={styles.stars.ratingBackgroundColor}
          ratingColor={styles.stars.ratingColor}
        />
      </View>

      <View
        style={{
          width: '100%',
          height: '8%',
          display: 'flex',
          alignItems: 'center',
        }}>
        <View style={styles.delete_button}>
          <Custom_Button
            iconDisplay="none"
            text="Deletar"
            textStyle={styles.button_text}
            onPress={handleDeleteNote}
          />
        </View>
      </View>
    </View>
  );
};

export default ViewNote;
