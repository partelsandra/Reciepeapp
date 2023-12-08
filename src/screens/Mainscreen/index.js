import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';

const RecipeCard = ({ title, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const MainScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RecipeCard title="Recipe 1" description="This is the first recipe." />
      <RecipeCard title="Recipe 2" description="This is the second recipe." />
      {/* Add more RecipeCard components as needed */}
    </ScrollView>
  );
};

export default MainScreen;
