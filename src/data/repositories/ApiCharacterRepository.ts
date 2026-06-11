import { Character } from "@domain/entities/Character";
import { CharacterRepository } from "@domain/repositories/CharacterRepository";
import { CharacterDTO } from "@data/dtos/CharacterDTO";

export class ApiCharacterRepository implements CharacterRepository{

    private baseUrl = 'https://api.api-onepiece.com/v2/characters/en';

    async getAll(): Promise<Character[]> {

        try {
            const response = await fetch(this.baseUrl);
            const dtos: CharacterDTO[] = await response.json();

            //Mapeo
            return dtos.map(dto => this.mapToEntity(dto));
            
        } catch (error) {
            console.error("Error fetching character",error);
            return [];
        }

       
    }
    async getById(id: number): Promise<Character | null> {
        try {
            const response =await fetch(`${this.baseUrl}/${id}`);
            if(!response.ok) return null;

            const dto: CharacterDTO = await response.json();
            return this.mapToEntity(dto);
        } catch (error) {
            console.error(`Error fetching character: ${id}:`,error);
            return null;
        }
    }
   
    
    private mapToEntity(dto: CharacterDTO): Character{
        return{
            id: dto.id,
            name: dto.name,
            job: dto.job,
            bounty: dto.bounty,
            status: dto.status || 'Unknown',
            size: dto.size || 'Normal',
            imageUrl: 'https://comicvine.gamespot.com/a/uploads/scale_small/11117/111178336/7080202-1635462455-unkno.png'
        }
    }

}