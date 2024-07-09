import React, { useState, useEffect } from 'react';
import servicesAPI from '../service/helper';
import Searcher from '../components/Searcher';
import Table from '../components/Table';

function Men() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const showData = async () => {
    try {
      const data = await servicesAPI.searchMen();
      setUsers(data);
    } catch (error) {
      setError(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const filteredUsers = users.filter(user =>
    user.nombre.toLowerCase().includes(search)
  );

  return (
    <>
    {error && <p className="error-message">Ocurrió un error: {error.message}</p>}
    <div className="container-men-list flex flex-col m-10">

    <div className="container-title  flex justify-center items-center">
      <h1>ESTUDIANTES HOMBRES</h1>
    </div>

    <div className="container-searcher flex justify-center items-center  mt-3">
      <Searcher search={search} setSearch={setSearch} users={users} />
    </div>

    
    <div className="container-table mt-3 justify-center items-center w-[100%]">
      <Table users={filteredUsers} />
    </div> 
    </div>
    </>

  );
}

export default Men;
