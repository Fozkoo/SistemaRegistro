import React, { useState, useEffect } from 'react';
import servicesAPI from '../service/helper';
import Searcher from '../components/Searcher';
import Table from '../components/Table';

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const showData = async () => {
      try {
        const data = await servicesAPI.showData();
        setUsers(data);
      } catch (error) {
        setError(error);
      }
    };

    showData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter(user =>
    user.nombre.toLowerCase().includes(search)
  );

  return (
    <>
    <div className="container-men-page flex items-center  flex-col m-10">
      {error && <p className="error-message">Ocurrió un error: {error.message}</p>}
        <div className="container-title flex items-center justify-center max-lg:text-center  mt-2 w-full ">
           <h1 className='text-4xl max-lg:text-2xl'>SISTEMA DE REGISTRO UNIVERSITARIO</h1>
        </div>
      
        <div className="container-bottoms   w-full flex justify-center mt-[40px] max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:mt-[7px]">
          <div className="container-buttoms-movile  w-full hidden max-lg:flex max-lg:justify-center max-lg:items-center max-lg:mb-2">
              <button
              type="button"
              class="border flex border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-[6px] m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline ">Cargar</button>
              <button
          type="button"
              class="border flex border-red-500 bg-red-500 text-white rounded-md px-4 py-[6px] m-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Eliminar</button>
          </div>
         <Searcher search={search} setSearch={setSearch} users={users}/>
         <button
          type="button"
          class="border  border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-[7px] m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline max-lg:hidden">Cargar</button>
          <button
          type="button"
          class="border  border-red-500 bg-red-500 text-white rounded-md px-4 py-[7px] m-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline max-lg:hidden">Eliminar</button>
        </div>
    </div>
    <div className="container-table  justify-center items-center w-[100%]">
      <Table users={filteredUsers} />
    </div>    
    </>

  );
}

export default Home;

