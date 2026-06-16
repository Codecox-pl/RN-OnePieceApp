import React from "react";
import { useCharacters } from "@presentation/hooks/useCharacters"
import { View,ActivityIndicator, Text,FlatList,Image,StyleSheet } from "react-native";



export const CharacterScreen = () =>{

    //Consumimos nuestro hook limpio
    const {characters, isLoading} = useCharacters();

    //Si esta cargando, mostramos un spinner nativo
    if(isLoading)
    {
        return <ActivityIndicator size="large" style={styles.loader} />
    }

    //Dibujamos la lista
    return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Aquí usamos la imageUrl que nuestro Repositorio generó */}
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.job}>{item.job} - 💰 {item.bounty}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}


// Estilos básicos en React Native
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  loader: { flex: 1, justifyContent: 'center' },
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 12, 
    marginBottom: 10, 
    borderRadius: 8,
    alignItems: 'center'
  },
  image: { width: 50, height: 50, borderRadius: 25, marginRight: 16 },
  name: { fontSize: 16, fontWeight: 'bold' },
  job: { fontSize: 14, color: '#666' },
});