import React from 'react';

interface StatusFilterProps {
  status: string;
  onStatusChange: (status: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ status, onStatusChange }) => {
  const statuses = ["Todos", "Alive", "Dead", "unknown"];

  return (
    <div className='min-w-full md:min-w-0  md:w-auto'>
      <label className="block min-w-full text-sm font-medium ml-1">Estado</label>
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {statuses.map((status) => (
          <option key={status} value={status === "Todos" ? "" : status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;