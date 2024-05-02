/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WordPuzzleGame from './src/screen/word-puzzle-game.screen';
import PuzzleDashboard from './src/screen/puzzle-dashboard.screen';
import SuccessScreen from './src/screen/success-screen';
import LeadersBoardScreen from './src/screen/leader-board.screen';
const Stack = createStackNavigator();

const App = () => {
  const route = [
    {
      name: 'PuzzleDashboard',
      component: PuzzleDashboard,
    },
    {
      name: 'WordPuzzleGame',
      component: WordPuzzleGame,
    },
    {
      name: 'SuccessScreen',
      component: SuccessScreen,
    },
    {
      name: 'LeadersBoardScreen',
      component: LeadersBoardScreen,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'PuzzleDashboard'}>
        {route.map(route => {
          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{headerShown: false}}
              component={route.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
