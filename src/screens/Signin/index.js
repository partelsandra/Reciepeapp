import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const SignInScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Implement sign-in logic here if needed
    // For now, just navigate to MainScreen
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text style={styles.footerText} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

export default SignInScreen;
