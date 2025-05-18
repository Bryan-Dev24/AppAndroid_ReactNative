import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import AsyncStorage from './src/components/AsyncStorage';
import ImagePickerComponent from './src/components/ImagePickerComponent';
import ContactsComponent from './src/components/ContactComponent';

const App = () => {
  return (
    // SafeView para garantir que o conteúdo não ultrapasse áreas seguras do dispositivo
    <SafeAreaView style={styles.container}>
      {/* Renderiza o componente de seleção de imagem */}
      <ImagePickerComponent />

      {/* ScrollView para permitir rolagem caso o conteúdo exceda a tela */}
      <ScrollView>
        {/* Renderiza o componente de contatos */}
        <ContactsComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  }
});

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}