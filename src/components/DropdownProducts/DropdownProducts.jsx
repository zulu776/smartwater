import React, { useState } from 'react';

const DropdownProducts = ({
  infoClient,
  selectedOption,
  setSelectedOption,
  setSelectedProduct,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'Producto',
    infoClient[0].title,
    infoClient[1].title,
    infoClient[2].title,
    infoClient[3].title,
    infoClient[4].title,
  ];
  console.log(infoClient);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    const infoProducto = infoClient.find(
      (item) => item.title === selectedOption
    );
    setSelectedProduct(infoProducto);
    setIsOpen(false);
  };

  return (
    <div className=' '>
      <div className=' '>
        <button
          className='border-2 w-full relative rounded-md text-lg z-0'
          onClick={toggleDropdown}
        >
          {selectedOption || 'Producto'}
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

export default DropdownProducts;
