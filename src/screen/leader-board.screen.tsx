import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from '../styles/leader-board.style';
import {CommonActions} from '@react-navigation/native';

const LeadersBoardScreen = ({navigation, route}) => {
  const navigateToDashboard = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'PuzzleDashboard'}],
      }),
    );
  };

  const leadersBoardData = route.params.leadersBoardDataValue;
  return (
    <View style={Styles.parentContainer}>
      <View style={Styles.container}>
        <Text style={Styles.header}>Leaderboard</Text>
        {leadersBoardData.map((item, index) => (
          <View key={index} style={Styles.item}>
            <Text style={Styles.name}>{item.name}</Text>
            <Text style={Styles.points}>{item.points}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={navigateToDashboard} style={Styles.startView}>
        <Text style={Styles.puzzleViewText}>{'DashBoard Screen'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeadersBoardScreen;
