import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
  },
  container: {
    flex: 1,
    marginVertical: 25,
  },
  puzzleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    fontSize: 24,
  },
  emptyBox: {
    backgroundColor: 'transparent',
  },
  puzzleView: {
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 8,
    width: width * 0.6,
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2,
  },
  startView: {
    backgroundColor: '#FFC0CB',
    paddingVertical: 8,
    marginHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    // alignSelf: 'center',
  },
  arrayButton: {
    alignSelf: 'center',
    paddingVertical: 8,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 5,
  },
  puzzleViewText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  leadersBoard: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.15,
  },
});
