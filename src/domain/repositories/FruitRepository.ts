import { Fruit } from "@domain/entities/Fruit";

export interface FruitRepository{
    getAll(): Promise<Fruit[]>;
    getById(id:number): Promise <Fruit | null>; 
}