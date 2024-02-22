
# Application d'Envoi de Vœux au Père Noël

Cette application React Native permet aux utilisateurs d'envoyer leurs vœux au Père Noël. Elle utilise React Native CLI pour la création et la gestion du projet, en adhérant aux bonnes pratiques de développement et de structure de projet.

## Fonctionnalités

- **Écrans multiples avec navigation** : L'application comprend au moins trois écrans pour une navigation fluide.
- **Base de données** : Utilisation de SQLite pour stocker les vœux des utilisateurs.
- **Authentification et autorisation** : Gère l'accès des utilisateurs.
- **Push notifications** : Envoyer des rappels aux utilisateurs.
- **Cache des données/images** : Améliore la performance de l'application.
- **Code natif** : Utilisation de Java pour certaines fonctionnalités.
- **Tests unitaires** : Assure la fiabilité du code.
- **Documentation complète** : Guide l'utilisateur à travers l'installation et l'utilisation de l'application.

## Prérequis

- Node.js
- React Native CLI
- Android Studio ou Xcode (pour le développement et le test sur des simulateurs/emulateurs)

## Installation

1. Clonez le dépôt Git :

    ```
    git clone https://github.com/dassimanuel000/react-test.git
    ```

2. Installez les dépendances :

    ```
    npm install
    ```

3. Lancez l'application sur un simulateur/emulateur :

    - **iOS** :
        ```
        npx react-native run-ios
        ```
    - **Android** :
        ```
        npx react-native run-android
        ```

## Structure du Projet

- `/android` et `/ios` : Codes spécifiques aux plateformes.
- `/pages` : Composants de l'écran de l'application.
- `/assets` : Images et autres ressources statiques.
- `./pages/database` : Scripts pour la base de données SQLite.

## Authentification

Explication sur la mise en œuvre de l'authentification et de l'autorisation.

## Notifications Push

Détails sur la configuration et l'utilisation des notifications push.

## Cache de Données/Images


```
<FastImage
   style={styles.image}
   source={{
   uri: imageUrl,
   headers: { Authorization: 'someAuthToken' },
   priority: FastImage.priority.normal,
   }}
   resizeMode={FastImage.resizeMode.contain}
/>

```

## Utilisation de Code Natif Firebase configuration PARDON CECI ETAIT COMPLIQUE POUR MOI MAIS CA FONCTIONNE

![image](https://github.com/dassimanuel000/react-test/assets/58192026/952eb2ca-9cec-420e-8826-d35d0fd95098)

![image](https://github.com/dassimanuel000/react-test/assets/58192026/799cd08e-5244-473a-9fb1-6e277ba01639)

![image](https://github.com/dassimanuel000/react-test/assets/58192026/5908c3e8-3195-497b-b527-fdb4da6757ea)

```
import SQLite from 'react-native-sqlite-storage';

const database = await SQLite.openDatabase(
"VoeuxDB.db",
"1.0",
"SQLite React Offline Database",
200000
);
setDb(database);

```



## Tests Unitaires

Guide pour exécuter les tests unitaires :

```
npm test
```

## Générer un APK signé

Étapes pour générer un APK signé pour Android :

1. Configurer le keystore...
2. Exécuter le script de build...
3. Signer l'APK...

## Contribution

Manuel dassi


## Licence


#### une bonne commande pour nettoyer react native sur android

```
 cd android && ./gradlew clean && cd ..

```
