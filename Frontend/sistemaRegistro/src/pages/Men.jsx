import React from 'react'

function Men() {
  return (
   
    <>
      <div className="container-men-list flex flex-col m-10">
        <table className="table table-striped table-hover mt-5 shadow-lgm">
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
                  <tr >
                    <td>1</td>
                    <td>Tizianoi</td>
                    <td>Alvarez</td>
                    <td>12345678</td>
                    <td>Hombre</td>
                    <td>Programacion</td>
                  </tr>
              </tbody>
        </table>
      </div>     
    
    </>
  )
}

export default Men