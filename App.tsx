import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';  
import TaskScreen from './pages/TaskScreen';  
import ProfileScreen from './pages/ProfileScreen';  

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Liste de voeux' }}/>
        <Stack.Screen name="Task" component={TaskScreen} options={{ title: 'Créer/Modifier votre liste' }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
