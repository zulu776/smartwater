import React, { useState } from 'react';

const Dropdown = ({ infoClient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'Cliente',
    infoClient[0].name.first + ' ' + infoClient[0].name.last,
    infoClient[1].name.first + ' ' + infoClient[1].name.last,
    infoClient[2].name.first + ' ' + infoClient[2].name.last,
    infoClient[3].name.first + ' ' + infoClient[3].name.last,
    infoClient[4].name.first + ' ' + infoClient[4].name.last,
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className=' '>
      <div className=' '>
        <button
          className='border-2 w-full relative rounded-md text-lg z-0'
          onClick={toggleDropdown}
        >
          {selectedOption || 'Cliente'}
        </button>
      </div>

      {isOpen && (
        <div className='border-2 z-10'>
          {options && (
            <div className='absolute z-20'>
              {options.map((option) => (
                <div
                  className='text-xs'
                  key={option}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
