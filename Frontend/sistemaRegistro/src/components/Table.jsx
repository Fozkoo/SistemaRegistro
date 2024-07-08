import React, { useState } from 'react';

function Table({ users }) {

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container-table  overflow-auto  flex justify-center items-center flex-col mx-[8%] max-lg:mx-[0%] ">
        <table className="table table-striped table-hover mt-[20px] shadow-lg max-lg:ml-auto  max-lg:mt-[0px]">
          <thead className='text-center'>
            <tr>
              <th >ID</th>
              <th >Nombre</th>
              <th >Apellido</th>
              <th >Documento</th>
              <th >Sexo</th>
              <th >Carrera</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id} className='text-center'>
                <td  >{user.id}</td>
                <td >{user.nombre.toUpperCase()}</td>
                <td >{user.apellido.toUpperCase()}</td>
                <td >{user.documento}</td>
                <td >{user.sexoIdSexo.toUpperCase()}</td>
                <td >{user.carreraIdCarrera.toUpperCase()}</td>
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
