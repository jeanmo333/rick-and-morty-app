import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Character } from '../../domain/models/Character';
import { getCharacterById } from '../../application/useCases/getCharacterById';
import Loading from './Loading';
import NotFound from './NotFound';
import { DateFormatter } from '../utils/DateFormatter';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
            setLoading(true);
            const character = await getCharacterById(Number(id));
            setLoading(false);
           // console.log(character);
            setCharacter(character);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
       
      }
    };
    fetchData();
  }, [id]);

     if (loading) return <Loading/>;

     if (!character) return <div className='w-11/12 mx-auto'> 
                                <NotFound title="Personaje no existe" showButtom={true}/>
                             </div>;

  return (
    <div className='mb-8'>
       <h1 className="text-3xl font-bold text-center my-6">{character.name}</h1>

      <div className="w-11/12 md:w-3/4 mx-auto  flex flex-col md:flex-row border border-gray-700 rounded-lg p-4">
            <img src={character.image} alt={character.name}  className='mr-0 md:mr-10 rounded-lg' />
            <div className='mt-3 md:mt-0'>
             <p className='text-gray-400 mb-1'> <span className='text-white mr-2'>Estado: </span>
              {character.status === "unknown" ? "Desconocido" : character.status}
             </p>


             <p className='text-gray-400 mb-1'> <span className='text-white mr-2'>Especies: </span>
               {character.species === "unknown" ? "Desconocido" : character.species}
             </p>


             <p className='text-gray-400 mb-1'> <span className='text-white mr-2'>Género: </span>
               { character.gender === "unknown" ? "Desconocido" :character.gender}
             </p>


             <p className='text-gray-400 mb-1'> <span className='text-white mr-2'>Origen: </span>
              { character.origin.name === "unknown" ? "Desconocido" : character.origin.name}
             </p>

             <p className='text-gray-400 mb-1'> <span className='text-white mr-2'>Ubicación: </span>
              { character.location.name === "unknown" ? "Desconocido" : character.location.name}
             </p>

             <p className='text-gray-400 mb-1'> <span className='text-white mr-2'>Tipo: </span>
              { character.type === "" ? "Desconocido" : character.type}
             </p>


             <p className='text-gray-400 mb-6'> <span className='text-white mr-2'>Creado: </span>
              { character.created === "" ? "Desconocido" : DateFormatter(character.created) }
             </p>



            
              <Link to='/' className='bg-gradient py-[5px] text-white min-w-full md:min-w-0 rounded-lg text-center px-5 hover:cursor-pointer md:w-auto'>
               Volver
              </Link>

            </div>
      </div>
    </div>
 
  );
};

export default CharacterDetail;