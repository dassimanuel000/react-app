import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// Initialisation de SQLite
SQLite.enablePromise(true);

const TaskScreen = () => {
    const [voeu, setVoeu] = useState('');
    const [db, setDb] = useState(null); // Ajouter un état pour la base de données
    const [voeuxList, setVoeuxList] = useState([]); // État pour stocker les vœux chargés

    useEffect(() => {
      // Modifier pour utiliser l'état local `db`
      const openDB = async () => {
        try {
          const database = await SQLite.openDatabase(
            "VoeuxDB.db",
            "1.0",
            "SQLite React Offline Database",
            200000
          );
          setDb(database); // Mettre à jour l'état `db`
          console.log("Base de données ouverte");

          // Créer la table si elle n'existe pas déjà
          await database.executeSql('CREATE TABLE IF NOT EXISTS Voeux (id INTEGER PRIMARY KEY AUTOINCREMENT, voeu TEXT)');
          console.log("Table créée ou déjà existante");

          loadVoeux(database); // Charger les vœux après l'ouverture de la base de données
        } catch (error) {
          console.error(error);
        }
      };

      openDB();
    }, []);

    const loadVoeux = (database) => {
      database.transaction((tx) => {
        tx.executeSql('SELECT * FROM Voeux', [], (tx, results) => {
          let voeux = [];
          for (let i = 0; i < results.rows.length; ++i) {
            voeux.push(results.rows.item(i));
          }
          setVoeuxList(voeux); // Mettre à jour l'état avec les nouveaux vœux
        });
      });
    };

    const saveVoeu = () => {
      if (db) {
        db.transaction((tx) => {
          tx.executeSql('INSERT INTO Voeux (voeu) VALUES (?)', [voeu], () => {
            console.log("Vœu enregistré avec succès");
            setVoeu(''); // Réinitialiser l'entrée après l'enregistrement
            loadVoeux(db); // Recharger les vœux
          });
        });
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Entrer votre vœu :</Text>
        <TextInput
          style={styles.input}
          value={voeu}
          onChangeText={setVoeu}
        />
        <Button title="Enregistrer la liste" onPress={saveVoeu} />
        <FlatList
          data={voeuxList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.voeu}</Text>}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
});

export default TaskScreen;
