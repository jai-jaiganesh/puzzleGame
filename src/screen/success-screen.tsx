import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Styles} from '../styles/success-screen.style';

const SuccessScreen = ({navigation}) => {
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
  return (
    <View style={Styles.parentContainer}>
      <View style={Styles.container}>
        <Text style={Styles.text}>Correct!</Text>
        <Text style={Styles.text}>Congratulations</Text>
        <Text style={[Styles.text, Styles.earnPoints]}>
          You earn 10 {'\n'} points
        </Text>
      </View>
      <TouchableOpacity onPress={navigateToDashboard} style={Styles.startView}>
        <Text style={Styles.puzzleViewText}>{'NEXT'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;
