// ./screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue dans l'application pour envoyer vos voeux au pere noel !</Text>
      <Button
        title="Ajouter un voeu au pere noel"
        onPress={() => navigation.navigate('Task')}
      />
      <Button
        title="Voir Profil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

export default HomeScreen;
