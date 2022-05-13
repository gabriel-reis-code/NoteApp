// import { DarkTheme } from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {chooseColor} from '../components/Functions';
import {DARK, LIGHT} from './modes';

export const styles_Share = StyleSheet.create({
    container: {
    marginTop: '15%',
    marginLeft: '10%',
    width: '70%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    },
    left_ball: {
        backgroundColor: chooseColor(LIGHT.text, DARK.text),
        height: '35%',
        width: '35%',
        borderRadius: 100,
    },
    top_ball: {
        position: 'absolute',
        top: '0%',
        right: '0%',
        backgroundColor: chooseColor(LIGHT.text, DARK.text),
        height: '35%',
        width: '35%',
        borderRadius: 100
    },
    bottom_ball: {
        position: 'absolute',
        bottom: '0%',
        right: '0%',
        backgroundColor: chooseColor(LIGHT.text, DARK.text),
        height: '35%',
        width: '35%',
        borderRadius: 100
    },
    top_line: {
        borderColor: chooseColor(LIGHT.text, DARK.text),
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderTopWidth: 3,
        rotation: 10,
        rotation: 10,
        top:'25%',
        left: '20%',
        transform: [{rotateZ: '-30deg'}]
    },
    bottom_line: {
        borderColor: chooseColor(LIGHT.text, DARK.text),
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderTopWidth: 3,
        rotation: 10,
        rotation: 10,
        top:'55%',
        right: '25%',
        transform: [{rotateZ: '30deg'}]
    }
})