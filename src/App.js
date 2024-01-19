import React, { useState, useEffect } from 'react';
import './styles/globals.scss';
import mycheck from './images/bank-check.png';
import Dropdown from './components/Dropdown/Dropdown';
import DropdownProducts from './components/DropdownProducts/DropdownProducts';
import Cantidad from './components/Cantidad/Cantidad';

function App() {
  const [perfiles, setPerfiles] = useState([]);
  const [productos, setProductos] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch('https://randomuser.me/api/?results=5');
        const datosJson = await respuesta.json();
        setPerfiles(datosJson);
        const respuestaP = await fetch(
          'https://fakestoreapi.com/products?limit=5'
        );
        const datosJsonP = await respuestaP.json();
        setProductos(datosJsonP);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  let nombres = [
    { nombre: 'cliente nuevo', value: 18, percentage: 8.2 },
    { nombre: 'Prestamos activos', value: 25, percentage: 8.2 },
    { nombre: 'pedidos totales', value: 1236, percentage: 8.2 },
    { nombre: 'ingresos totales', value: 1783, percentage: 8.2 },
  ];

  const handleRealizarPedido = () => {
    // Lógica para realizar el pedido
    console.log('Pedido realizado!');
  };

  return (
    <div className='h-screen w-screen flex '>
      {/* SIDEBAR */}
      <section className='w-2/12'>
        <div className=' h-full bg-base-blue flex justify-center'>
          <p className='text-2xl font-bold text-light-blue my-6'>
            Smart<span className='text-white'>water</span>
          </p>
        </div>
      </section>
      <section className='w-full px-4'>
        <div>
          <p className='font-bold text-2xl'>Inicio</p>
        </div>
        {/* arreglo de cajas */}
        <div>
          <div className='w-full h-full flex'>
            {nombres.map((el) => (
              <div className='w-[15%] h-[14%] my-5 mr-5 '>
                <div className='w-full h-full rounded-2xl border-2'>
                  <p className='my-1 mx-3 font-bold '>{el.nombre}</p>
                  <p className='my-3 mx-3 text-base-blue font-bold text-3xl'>
                    {el.value}
                  </p>
                  <div className='flex w-full h-full'>
                    <div className='my-4 mx-3 w-[22%] h-[15%] bg-light-green rounded-md'>
                      <p className=' mx-1 text-base-green font-bold text-xs'>
                        +{el.percentage}%
                      </p>
                    </div>
                    <p className='text-xs my-4 '>En el último mes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* TITULO ACCIONES RAPIDAS */}
        <div>
          <p className='text-xl font-bold py-4'>Acciones rápidas</p>
        </div>
        {/* TRES CUADROS DE ACCIONES RAPIDAS */}
        <div className='h-full'>
          <div className='w-full h-full flex'>
            {/* BOX 1  */}
            <div className='w-[35%] h-[30%] border-2 rounded-3xl mr-5'>
              <div className='py- px-8 flex'>
                <p className='pr-2 font-bold text-lg'>Clientes</p>
                <p className='text-gray-500 text-md py-1'>vista rapida</p>
              </div>
              {perfiles.results && (
                <div className='px-7'>
                  {perfiles.results.map((el) => (
                    <div className='h-full flex'>
                      {' '}
                      <img
                        className='rounded-full size-8'
                        src={el.picture.thumbnail}
                        alt='NOT FOUND'
                      />
                      <div className='flex w-[40%]'>
                        <p className='p-2 text-xs'>{el.name.first}</p>
                        <p className='py-2 text-xs'>{el.name.last}</p>
                      </div>
                      <div className=' py-1 m-2 mr-2 w-[22%] h-[30px] border-2 border-base-blue rounded-xl flex justify-center'>
                        <p className='text-xs font-bold text-base-blue text-center'>
                          {el.dob.date.split('T')[0].replaceAll('-', '/')}
                        </p>
                      </div>
                      <div className=' m-2 w-[30%] h-[30px] bg-base-blue rounded-xl flex justify-center'>
                        <img className='' src={mycheck} alt='NOT FOUND' />
                        <p className='text-xs font-bold text-white text-center pt-2 ml-2'>
                          {el.dob.age} Bs.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* BOX 2 */}
            <div className='w-[35%] h-[30%] border-2 rounded-3xl mr-5 flex flex-col relative'>
              <div className='py-3 px-8 flex'>
                <p className='pr-2 font-bold text-lg'>Realizar pedido</p>
              </div>
              <div className='ml-6 w-[90%] h-[25%] relative'>
                <Dropdown infoClient={perfiles.results} />
              </div>
              <div className='ml-6 w-[90%] h-[25%]  '>
                <DropdownProducts
                  infoClient={productos}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  setSelectedProduct={setSelectedProduct}
                />
              </div>
              <div className='flex w-full h-[10%] '>
                <div className=' ml-6 w-[55%] h-full mr-2 '>
                  <Cantidad
                    className=''
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                  />
                </div>
                <div className='relative border-2 rounded-md w-[34%] h-full flex '>
                  <div className='w-[70%] border-r-2 text-center flex justify-center items-center'>
                    {selectedProduct ? selectedProduct.price * cantidad : 0}
                  </div>
                  <div className='w-[30%] text-center text-xs flex justify-center items-center'>
                    Bs
                  </div>
                </div>
              </div>
              <buttom
                className='p-2 px-4 absolute right-4 bottom-4 bg-light-blue rounded-full text-white font-bold shadow-md cursor-pointer'
                onClick={handleRealizarPedido}
              >
                Realizar pedido
              </buttom>
            </div>

            {/* BOX 3 */}
            <div className='w-[20%] h-[30%] border-2 rounded-3xl '>
              <div className='py-3 px-8 flex'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
