import React from "react";
import { useCharacters } from "@presentation/hooks/useCharacters"
import { View,ActivityIndicator, Text,FlatList,Image,StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './CharacterScreen.styles';



export const CharacterScreen = () =>{

    //Consumimos nuestro hook limpio
    const {characters, isLoading} = useCharacters();

    //Si esta cargando, mostramos un spinner nativo
    if(isLoading)
    {
        return <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0056D2"/>
        </View>
    }

    //Dibujamos la lista
    return (
       <View style = {styles.container}>
           <FlatList 
               data={characters}
               keyExtractor={(item) => item.id.toString()}
               contentContainerStyle={styles.listContainer}
               renderItem={({item})=>(
                   <View style={styles.card}>

                      <View style={[styles.imageContainer, {overflow: 'hidden',height:220}]}>
                          <Image source={{ uri: item.imageUrl}}
                           style={[styles.image,{position: 'absolute', top:0,height:'150%'}]}
                           resizeMode="cover"
                          />
                          <TouchableOpacity style={styles.heartButton}>
                            <Icon name="heart-outline" size={20} color="#555"/>
                          </TouchableOpacity>
                      </View>

                      <View style={styles.contentContainer}>
                         <View style={styles.headerRow}>
                            <Text style={styles.category}>{item.job.toUpperCase()}</Text>
                            <Text style={styles.price}>฿ {item.bounty}</Text>
                         </View>

                         <Text style={styles.title} numberOfLines={2}>{item.name}</Text>

                         <Text style={styles.description} numberOfLines={2}>
                            Estado actual: {item.status}. Dimensiones registradas: {item.size}.
                            Pirata bajo observacion del Gobierno Mundial.
                         </Text>
                         <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Ver Detalles</Text>
                         </TouchableOpacity>
                       </View>
                   </View>
               )}
           />
       </View>
  );
};
