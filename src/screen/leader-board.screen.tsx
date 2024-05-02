import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Styles} from '../styles/word-puzzle-game.style';
import {CommonActions} from '@react-navigation/native';

const LeadersBoardScreen = ({navigation, route}) => {
  const navigateToDashboard = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {name: 'PuzzleDashboard'}, // Replace 'Home' with the name of your initial screen
        ],
      }),
    );
  };

  const leadersBoardData = route.params.leadersBoardDataValue;
  return (
    <View style={Styles.parentContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Leaderboard</Text>
        {leadersBoardData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={navigateToDashboard} style={Styles.startView}>
        <Text style={Styles.puzzleViewText}>{'DashBoard Screen'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LeadersBoardScreen;
