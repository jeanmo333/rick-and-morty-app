import axios from 'axios';
import { Character } from '../../domain/models/Character';

const API_URL = 'https://rickandmortyapi.com/api';


export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await axios.get<{ results: Character[] }>(`${API_URL}/character`);
  return response.data.results;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const response = await axios.get<Character>(`${API_URL}/character/${id}`);
  return response.data;
};