import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  Appearance,
} from 'react-native';
import {style_Home} from '../styles/stylesHome';
import RNRestart from 'react-native-restart';
import PreviewNoteTemplate from '../components/previewNoteTemplate';

const styles = style_Home;
const DATA_TO_DISPLAY_INITIAL_STATE = [];

const Home = ({navigation, route}) => {
  const [dataToDisplay, setDataToDisplay] = useState(
    DATA_TO_DISPLAY_INITIAL_STATE,
  );
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  const handleAddNote = () => {
    // console.log(Appearance.getColorScheme())
    navigation.navigate('New Note');
  };

  useEffect(() => {
    (async () => {
      try {
        let data = [];
        const allIds = await AsyncStorage.getAllKeys();
        const stored = await AsyncStorage.multiGet(allIds);

        setDataToDisplay(stored);
      } catch (error) {
        console.error(error);
      }
    })();
    if (colorScheme !== Appearance.getColorScheme()) {
      RNRestart.Restart();
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.notes_resume}>
        {dataToDisplay.map(item => {
          const info = JSON.parse(item[1]);
          return (
            <PreviewNoteTemplate
              onPress={() => {
                try {
                  navigation.navigate('View Note', {id: item[0]});
                } catch (error) {
                  console.error(error);
                }
              }}
              title={info !== null ? info.title : ''}
              rateValue={info !== null ? info.rating : 0}
              titleColor={styles.preview.titleColor}
              tintColor={styles.preview.tintColor}
              backgroundColor={styles.preview.backgroundColor}
              ratingBackgroundColor={styles.preview.ratingBackgroundColor}
              ratingColor={styles.preview.ratingColor}
            />
          );
        })}
      </ScrollView>

      <View style={styles.container_add_button}>
        <TouchableOpacity style={styles.add_note} onPress={handleAddNote}>
          <Text style={styles.plus_text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
