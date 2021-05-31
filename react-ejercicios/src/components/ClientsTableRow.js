import React from 'react'

const ClientsTableRow = ({el}) => {
  return (
    <tr>
      <td>{el.nombre}</td>
      <td>{el.apellidos}</td>
      <td>{el.numero_suministro}</td>
      <td>{el.direccion}</td>
      <td>{el.departamento}</td>
      <td>{el.provincia}</td>
    </tr>
  )
}

export default ClientsTableRow
