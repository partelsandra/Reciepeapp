import { StyleSheet } from 'react-native';
import { colors } from '../../components/utils/colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
});

export default styles;
