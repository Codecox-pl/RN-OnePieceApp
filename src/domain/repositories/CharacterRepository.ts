import { Character } from "@domain/entities/Character";

export interface CharacterRepository{
    getAll(): Promise<Character[]>;
    getById(id: number): Promise<Character | null>;
}