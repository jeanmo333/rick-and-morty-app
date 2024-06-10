

import { FC} from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../domain/models/Character';

import Loading from './Loading';
import NotFound from './NotFound';

type Props = {
    characters: Character[];
    loading: boolean;
  };

  const CharacterList: FC<Props> = ({ characters, loading }) => {

  
  // Función de comparación personalizada para ordenar por género y luego por nombre
  const compareCharacters = (a: Character, b: Character) => {
    if (a.gender < b.gender) return -1;
    if (a.gender > b.gender) return 1;
    return a.name.localeCompare(b.name);
  };

  if (loading) return <Loading/>;

  if (characters.length === 0) return <NotFound content='No hay Personajes'/>

  return (
        <div className="w-11/12 mx-auto mb-10">
        <h1 className="text-3xl font-bold text-center my-6">Rick and Morty APP</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          {characters
            .sort(compareCharacters)
            .map((character) => (
              <li key={character.id} className="border border-gray-700 rounded-lg p-2  transform transition-transform duration-300 hover:scale-105">
                <Link to={`/character/${character.id}`}>
                  <img src={character.image} alt={character.name} className="w-full h-auto rounded-lg object-contain" />
                  <p className="mt-2 text-center">{character.name}</p>
                  <p className="text-center text-sm text-gray-500">{character.gender}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    

  
  );
};

export default CharacterList;
