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
    <div className="container-men-page flex items-center flex-col m-10   h-[1000px]">
      {error && <p className="error-message">Ocurrió un error: {error.message}</p>}
        <div className="container-title flex items-center justify-center  mt-2 w-full">
           <h1 className='text-4xl'>SISTEMA DE REGISTRO UNIVERSITARIO</h1>
        </div>
      
        <div className="container-bottoms  w-full hidden justify-center mt-5 ">
         <Searcher search={search} setSearch={setSearch} users={users}/>
         <button
          type="button"
          class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-[7px] m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Cargar</button>
          <button
          type="button"
          class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-[7px] m-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Eliminar</button>
        </div>

        <div className="container-table hidden justify-center w-full ">
          <Table users={filteredUsers} />
        </div>
        

        

        
       


    </div>
  );
}

export default Home;


/* 
      {error && <p className="error-message">Ocurrió un error: {error.message}</p>}
      <Searcher search={search} setSearch={setSearch} users={users} />
      <Table users={filteredUsers} />

      */