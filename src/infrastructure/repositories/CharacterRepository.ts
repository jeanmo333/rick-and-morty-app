import { fetchCharacters, fetchCharacterById } from '../api/characterApi';
import { Character } from '../../domain/models/Character';

export class CharacterRepository {
  async getCharacters(): Promise<Character[]> {
    return await fetchCharacters();
  }

  async getCharacterById(id: number): Promise<Character> {
    return await fetchCharacterById(id);
  }
}