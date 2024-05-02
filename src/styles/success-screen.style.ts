import {StyleSheet} from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'green',
    fontWeight: '300',
  },
  earnPoints: {
    marginTop: 20,
  },
  startView: {
    backgroundColor: '#FFC0CB',
    paddingVertical: 8,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 40,
    marginHorizontal: 40,
  },
  puzzleViewText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
