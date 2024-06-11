
import { Character } from '../../domain/models/Character';
import axiosApi from '../sources/AxiosApi';


export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await axiosApi.get<{ results: Character[] }>(`/character`);
  return response.data.results;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const response = await axiosApi.get<Character>(`/character/${id}`);
  return response.data;
};