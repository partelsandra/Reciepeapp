import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.primary,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 16,
    color: colors.primary,
  },
});

export default styles;
