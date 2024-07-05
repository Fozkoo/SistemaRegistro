import React from 'react';

function Table({ users }) {
  return (
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
        {users.map(user => (
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
  );
}

export default Table;
