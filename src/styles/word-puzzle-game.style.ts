import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
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
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 24,
  },
  emptyBox: {
    backgroundColor: 'transparent',
    borderColor: 'red',
  },
  subContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  puzzleTopic: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 24,
  },
  puzzleMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startView: {
    backgroundColor: '#FFC0CB',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 24,
    marginHorizontal: 20,
  },
  puzzleViewText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedDescription: {marginTop: 10, marginBottom: 20, fontSize: 14},
});
