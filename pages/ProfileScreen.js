import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const ProfileScreen = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profil de l'Utilisateur</Text>
      <TextInput
        style={styles.input}
        onChangeText={setImageUrl}
        value={imageUrl}
        placeholder="Entrez l'URL de votre image"
      />
      {imageUrl ? (
        <FastImage
          style={styles.image}
          source={{
            uri: imageUrl,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : null}
      <Button title="Déconnexion" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default ProfileScreen;
