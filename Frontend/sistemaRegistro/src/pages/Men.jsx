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
      console.log(data);
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
    <div className="container-men-list flex flex-col m-10">
      {error && <p className="error-message">Ocurrió un error: {error.message}</p>}
      <Searcher search={search} setSearch={setSearch} users={users} />
      <Table users={filteredUsers} />
    </div>
  );
}

export default Men;
