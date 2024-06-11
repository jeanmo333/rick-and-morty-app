import { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import { Character } from '../../domain/models/Character';
import { getCharacters } from '../../application/useCases/getCharacters';

const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);



    useEffect(() => {
      const fetchData = async () => {
        try {
            setLoading(true);
            const characters = await getCharacters();
            setLoading(false);
            setCharacters(characters);
        } catch (error) {
            setLoading(false);
            console.log(error);  
        }
      
      };
      fetchData();
    }, []);

  return (
    <div>
      <CharacterList 
        characters={characters && characters}
        loading={loading} />
    </div>
  );
};

export default Home;