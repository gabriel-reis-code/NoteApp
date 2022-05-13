import {StyleSheet} from 'react-native';

export const styles_PreviewNoteTemplate = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 80,
    marginTop: '5%',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 1},
  },
  rateStars: {
    position: 'relative',
    width: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '2%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  left_container: {
    flex: 3,
    marginLeft: '10%',
    alignContent: 'center',
    alignContent: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  right_container: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: 20,
    bottom: 3,
  },
  next: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
