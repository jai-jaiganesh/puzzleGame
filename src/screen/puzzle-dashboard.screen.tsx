import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Styles} from '../styles/puzzle-dashboard.style';
import {buttonList} from '../utils/puzzleGame.utils';

const PuzzleDashboard = ({navigation}) => {
  const onClick = (item: []) => {
    navigation.navigate('WordPuzzleGame', {
      item,
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={Styles.arrayButton}
        onPress={() => onClick(item)}>
        <Text style={Styles.puzzleViewText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const navigateLeadersDashboard = () => {
    navigation.navigate('LeadersBoardScreen');
  };

  return (
    <View style={Styles.parentContainer}>
      <View style={Styles.container}>
        <Text style={[Styles.puzzleViewText, Styles.puzzleView]}>
          {'Words Puzzle'}
        </Text>
        <View style={Styles.flatListContainer}>
          <FlatList
            data={buttonList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <TouchableOpacity style={Styles.startView}>
          <Text style={Styles.puzzleViewText}>{'START'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateLeadersDashboard}>
          <Text style={Styles.leadersBoard}>{'Leaders Board'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PuzzleDashboard;
