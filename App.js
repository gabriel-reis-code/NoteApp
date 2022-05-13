import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import ViewNote from './pages/ViewNote';
import {DARK, LIGHT} from './styles/modes';
import {chooseColor} from './components/Functions';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="My Notes"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: chooseColor(
                LIGHT.backgroundColor,
                DARK.backgroundColor,
              ),
            },
            headerTitleStyle: {
              color: chooseColor(LIGHT.text, DARK.text),
            },
          }}
        />

        <Stack.Screen
          name="New Note"
          component={NewNote}
          options={{
            title: 'Nova Nota',
            headerStyle: {
              backgroundColor: chooseColor(
                LIGHT.backgroundColor,
                DARK.backgroundColor,
              ),
            },
            headerTitleStyle: {
              color: chooseColor(LIGHT.text, DARK.text),
            },
          }}
        />

        <Stack.Screen
          name="View Note"
          component={ViewNote}
          options={{
            title: 'Ver Nota',
            headerStyle: {
              backgroundColor: chooseColor(
                LIGHT.backgroundColor,
                DARK.backgroundColor,
              ),
            },
            headerTitleStyle: {
              color: chooseColor(LIGHT.text, DARK.text),
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
