import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Styles} from '../styles/word-puzzle-game.style';

const WordPuzzleGame = ({navigation, route}) => {
  const {leadersBoardDataValue, setLeadersBoardDataValue} = route.params;
  const words = route.params.item.words;
  const [selectedWord, setSelectedWord] = useState('');
  const [puzzle, setPuzzle] = useState([]);
  const [changeButton, setChangeButton] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [shuffledPuzzle, setShuffledPuzzle] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState('');

  let randomIndex = 0;
  let matchedIndex = 0;

  useEffect(() => {
    generatePuzzle();
  }, []);

  const generatePuzzle = () => {
    randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex].name;
    setSelectedDescription(words[randomIndex].description);
    setSelectedWord(word);
    const shuffledWord = shuffleWord(word);
    setPuzzle(word.split(''));
    setInputValues(word.split('').map(() => ''));
    setShuffledPuzzle(shuffledWord);
  };

  const shuffleWord = (word: string) => {
    return word.split('').sort(() => Math.random() - 0.5);
  };

  const navigateSuccessScreen = () => {
    navigation.navigate('SuccessScreen');
  };

  const handleInputChange = (text: string, index: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);
    const inputPuzzle = newInputValues.join('');
    if (inputPuzzle === selectedWord) {
      handleCorrectAnswer();
      setChangeButton(true);
    }
    if (text === selectedWord[index]) {
      const newShuffledPuzzle = [...shuffledPuzzle];
      matchedIndex = newShuffledPuzzle.findIndex(char => char === text);
      if (matchedIndex !== -1) {
        newShuffledPuzzle[matchedIndex] = ' ';
        setShuffledPuzzle(newShuffledPuzzle);
      }
    }
  };

  const handleCorrectAnswer = () => {
    if (leadersBoardDataValue) {
      const updatedData = leadersBoardDataValue.map(
        (item: {name: any; points: number}) => {
          if (item.name === route.params.item.name) {
            return {...item, points: item.points + 10};
          }
          return item;
        },
      );
      setLeadersBoardDataValue(updatedData);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={Styles.parentContainer}>
      <View style={Styles.container}>
        <View style={Styles.subContainer}>
          <Text style={Styles.puzzleTopic}>{route.params.item.name}</Text>
        </View>
        <View style={Styles.puzzleMainContainer}>
          <View style={Styles.puzzleContainer}>
            {puzzle.map((char, index) => (
              <TextInput
                key={index}
                style={Styles.box}
                value={inputValues[index]}
                onChangeText={text => handleInputChange(text, index)}
                maxLength={1}
              />
            ))}
          </View>
          <Text style={Styles.selectedDescription}>{selectedDescription}</Text>
          <View style={Styles.puzzleContainer}>
            {shuffledPuzzle.map((char, index) => (
              <Text
                key={index}
                style={[Styles.box, char === '' && Styles.emptyBox]}>
                {char}
              </Text>
            ))}
          </View>
        </View>
        <TouchableOpacity
          onPress={changeButton ? navigateSuccessScreen : generatePuzzle}
          style={Styles.startView}>
          <Text style={Styles.puzzleViewText}>
            {changeButton ? 'Next' : 'SKIP'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default WordPuzzleGame;
