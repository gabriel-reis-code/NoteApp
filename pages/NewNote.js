import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import RateStars from '../components/RateStars';
import {styles_NewNote} from '../styles/stylesNewNote';
import {AsyncStorage} from 'react-native';

const styles = styles_NewNote;

const NewNote = ({navigation}) => {
  const [data, setData] = useState({
    title: '',
    description: '',
    rating: 0,
  });

  const [currentRating, setCurrentRating] = useState(0);
  const [descriptionText, setDescriptionText] = useState('');
  const [titleText, setTitleText] = useState('');

  const handleChangeDescriptionText = e => {
    setDescriptionText(e);
    setData({...data, description: e});
  };

  const handleChangeTitleText = e => {
    setTitleText(e);
    setData({...data, title: e});
  };

  const handleAddData = async () => {
    let id;
    try {
      const allIds = await AsyncStorage.getAllKeys();
      if (allIds.length === 0) {
        id = '0';
      } else {
        let emptyId = allIds[0];

        while (true) {
          if (allIds.find(item => item === emptyId) === undefined) {
            id = emptyId;
            break;
          } else {
            emptyId = String(Number(emptyId) + 1);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }

    try {
      await AsyncStorage.setItem(id, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFinishRating = e => {
    setCurrentRating(e);
  };

  useEffect(() => {
    setData({...data, rating: currentRating});
  }, [currentRating]);

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.text_label}>Título</Text>
        <View style={styles.title}>
          <TextInput
            style={{
              width: '100%',
              height: '100%',
              fontSize: 15,
              ...styles.text,
            }}
            placeholderTextColor={styles.placeholderColor}
            placeholder="Digite o Título..."
            multiline={true}
            onChangeText={handleChangeTitleText}
            value={titleText}
          />
        </View>
      </View>
      <View style={styles.description_container}>
        <Text style={styles.text_label}>Descrição</Text>
        <View style={styles.description}>
          <TextInput
            style={{
              width: '100%',
              height: '100%',
              fontSize: 15,
              ...styles.text,
            }}
            placeholderTextColor={styles.placeholderColor}
            placeholder="Digite a Descrição..."
            multiline={true}
            onChangeText={handleChangeDescriptionText}
            value={descriptionText}
          />
        </View>
      </View>
      <View style={styles.starsView}>
        <RateStars
          onFinishRating={handleFinishRating}
          tintColor={styles.stars.tintColor}
          ratingBackgroundColor={styles.stars.ratingBackgroundColor}
          ratingColor={styles.stars.ratingColor}
        />
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.add_button}
          onPress={() => {
            handleAddData();
            navigation.navigate('My Notes');
          }}>
          <Text style={styles.button_text}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NewNote;
