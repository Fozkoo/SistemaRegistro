import React, { useState } from 'react';

function Table({ users }) {

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  // Calcular los índices de los usuarios para la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Generar los números de página
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container-table  w-full flex justify-center items-center flex-col px-[10%]">
        <table className="table table-striped table-hover mt-5 shadow-lg">
          <thead>
            <tr className="hola text-black">
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Documento</th>
              <th>Sexo</th>
              <th>Rol</th>
              <th>Carrera</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.documento}</td>
                <td>{user.sexoIdSexo}</td>
                <td>Null</td>
                <td>{user.carreraIdCarrera}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          {pageNumbers.map(number => (
            <button key={number} onClick={() => paginate(number)} className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-[7px] m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Table;
