import { Character } from '../../domain/models/Character';
import { CharacterRepository } from '../../infrastructure/repositories/CharacterRepository';

export const getCharacters = async (): Promise<Character[]> => {
  const repository = new CharacterRepository();
  return await repository.getCharacters();
};