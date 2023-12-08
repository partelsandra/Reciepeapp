import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    // Implement sign-up logic here if needed
    // For now, just navigate to MainScreen
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text style={styles.footerText} onPress={() => navigation.navigate('SignIn')}>
        Already have an account? Sign In
      </Text>
    </View>
  );
};

export default SignUpScreen;
