import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../domain/models/Character';
import { getCharacterById } from '../../application/useCases/getCharacterById';

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const character = await getCharacterById(Number(id));
        setCharacter(character);
      }
    };
    fetchData();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterDetail;