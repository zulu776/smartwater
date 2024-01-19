import React from 'react';

const Cantidad = ({ cantidad, setCantidad }) => {
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className='flex border-2 rounded-md w-full h-full  '>
      <div className='mr-2'>
        <p className=' '>Cantidad</p>
      </div>
      <div className=' w-full h-[70%] flex  right-0'>
        <button
          className=' border-2 rounded-full mr-2'
          onClick={decrementarCantidad}
        >
          -
        </button>
        <div className='w-[50%] h-full border-2 mr-2'>{cantidad}</div>
        <button className='border-2 rounded-full' onClick={incrementarCantidad}>
          +
        </button>
      </div>
    </div>
  );
};

export default Cantidad;
