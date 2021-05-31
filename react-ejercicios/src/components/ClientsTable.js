import React from 'react'
import ClientsTableRow from './ClientsTableRow'

const ClientsTable = ({data}) => {
  console.log(data.length);
  return (
    <div>
      <h3>Table of Clients</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Numero de Suministro</th>
            <th>Direccion</th>
            <th>Departamento</th>
            <th>Provincia</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <ClientsTableRow
                key={el.id}
                el={el}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ClientsTable
