import { Character } from '../../domain/models/Character';
import { CharacterRepository } from '../../infrastructure/repositories/CharacterRepository';

export const getCharacterById = async (id: number): Promise<Character> => {
  const repository = new CharacterRepository();
  return await repository.getCharacterById(id);
};