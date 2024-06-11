import React from 'react';

interface SpeciesFilterProps {
  species: string;
  onSpeciesChange: (species: string) => void;
}

const SpeciesFilter: React.FC<SpeciesFilterProps> = ({ species, onSpeciesChange }) => {
  const speciesOptions = ["Todos", "Human", "Alien", "Robot", "unknown"];

  return (
    <div className='min-w-full md:min-w-0  md:w-auto'>

        <label className="block text-sm font-medium ml-1 mt-4 md:mt-0">Especies</label>
        <select
            value={species}
            onChange={(e) => onSpeciesChange(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
            {speciesOptions.map((species) => (
            <option key={species} value={species === "Todos" ? "" : species}>
                {species}
            </option>
            ))}
        </select>

    
    </div>
  );
};

export default SpeciesFilter;