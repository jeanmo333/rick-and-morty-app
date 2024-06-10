import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../domain/models/Character';
import { getCharacters } from '../../application/useCases/getCharacters';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const characters = await getCharacters();
      setCharacters(characters);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((character) => (
            <li key={character.id}>
              <Link to={`/character/${character.id}`}>
                <img src={character.image} alt={character.name} />
                {character.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CharacterList;