import { ApiCharacterRepository } from "@data/repositories/ApiCharacterRepository";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";



export default function App()
{
  useEffect(()=>{

    const test = async ()=>{
      console.log("iniciando la peticion");

      try{
        const repository = new ApiCharacterRepository();
        const characters = await repository.getAll();

        console.log("✅ ¡Petición exitosa! Total recibidos:", characters.length);
        
        // Imprimimos solo los primeros 2 personajes para no inundar la consola,
        // formateados de forma bonita (con indentación de 2 espacios)
        console.log(JSON.stringify(characters.slice(0, 2), null, 2));
      }catch(error){
        console.error("❌ Error en la prueba:", error);
      }
    };
    test();
  },[]);

  return(
   <View style={styles.container}>
      <Text style={styles.text}>Prueba de Capa de Datos en curso...</Text>
      <Text style={styles.subtext}>Revisa la consola de tu terminal o del navegador 👀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  text: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  subtext: { fontSize: 14, color: '#666' }
});