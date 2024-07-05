import React, { useState, useEffect } from 'react';
import servicesAPI from '../service/helper';

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
    <div className="container-men-list flex flex-col m-10">
      <div className='container-table flex w-full'>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="form-control"
        />
      </div>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="hola text-black">
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Documento</th>
            <th>Sexo</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.documento}</td>
              <td>{user.sexoIdSexo}</td>
              <td>{user.carreraIdCarrera}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
