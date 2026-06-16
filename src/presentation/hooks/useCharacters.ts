import { ApiCharacterRepository } from "@data/repositories/ApiCharacterRepository"
import { Character } from "@domain/entities/Character";
import { useEffect, useState } from "react";


export const useCharacters = () =>{

    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        const fetchCharacters = async () =>{
            // Instanciamos el repositorio que creamos en la capa Data
            const repository = new ApiCharacterRepository();
            const data = await repository.getAll();

             setCharacters(data);
             setIsLoading(false);

        };

        fetchCharacters();
    }, []);

    return {characters, isLoading}; 
};