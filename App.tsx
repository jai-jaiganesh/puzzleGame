import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WordPuzzleGame from './src/screen/word-puzzle-game.screen';
import PuzzleDashboard from './src/screen/puzzle-dashboard.screen';
import SuccessScreen from './src/screen/success-screen';
import LeadersBoardScreen from './src/screen/leader-board.screen';

const Stack = createStackNavigator();

const App = () => {
  const [leadersBoardData, setLeadersBoardData] = useState([
    {id: 0, name: 'Animals', points: 0},
    {id: 1, name: 'Countries', points: 0},
    {id: 2, name: 'Fruits', points: 0},
  ]);
  const route = [
    {
      name: 'PuzzleDashboard',
      component: PuzzleDashboard,
    },
    {
      name: 'WordPuzzleGame',
      component: WordPuzzleGame,
      initialParams: {
        leadersBoardDataValue: leadersBoardData,
        setLeadersBoardDataValue: setLeadersBoardData,
      },
    },
    {
      name: 'SuccessScreen',
      component: SuccessScreen,
    },
    {
      name: 'LeadersBoardScreen',
      component: LeadersBoardScreen,
      initialParams: {leadersBoardDataValue: leadersBoardData},
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
              initialParams={route.initialParams}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
