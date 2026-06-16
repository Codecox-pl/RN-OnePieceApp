import { FruitDTO } from "@data/dtos/FruitDTO";
import { Fruit } from "@domain/entities/Fruit";
import { FruitRepository } from "@domain/repositories/FruitRepository";



export class ApiFruitRepository implements FruitRepository{

    private baseUrl = 'https://api.api-onepiece.com/v2/fruits/en';

    async getAll(): Promise<Fruit[]> {
       
        try {
            const response = await fetch(this.baseUrl);
            const dtos: FruitDTO[] = await response.json();

            //Mapeo
            return dtos.map(dto => this.mapToEntity(dto))
        } catch (error) {
            console.error("Error fetching character",error);
            return [];
        }
    }
    async getById(id: number): Promise<Fruit | null> {
        try {
           const response = await fetch(`${this.baseUrl}/${id}`);
            
           if(!response.ok) return null;

           const dto: FruitDTO = await response.json();
           return this.mapToEntity(dto);
        } catch (error) {
            console.error(`Error fetching character: ${id}:`,error);
            return null;
        }
    }


    private mapToEntity(dto: FruitDTO): Fruit{
            return{
                id: dto.id,
                name: dto.name,
                description: dto.description,
                romanType: dto.roman_name,
                type: dto.type,
                filename: dto.filename
            }
    }
}