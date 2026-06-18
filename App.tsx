import { CharacterScreen } from '@presentation/screens/CharacterScreen/CharacterScreen';

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';



export default function App() {
  return (
    // SafeAreaView asegura que el contenido no se superponga con el notch o la barra de estado del celular
    <SafeAreaView style={styles.container}>
      
      {/* Opcional: Esto controla el color de la barra de batería/hora de tu celular */}
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* 2. Instanciamos y dibujamos tu pantalla */}
      <CharacterScreen/>

    </SafeAreaView>
  );
}

// Estilos globales básicos para el contenedor principal
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' // Un fondo gris claro para que resalten tus tarjetas
  }
});