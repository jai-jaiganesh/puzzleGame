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
