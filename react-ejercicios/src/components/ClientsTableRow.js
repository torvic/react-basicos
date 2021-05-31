import React from "react";

const ClientsTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {
    id,
    nombre,
    apellidos,
    numero_suministro,
    direccion,
    departamento,
    provincia,
  } = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellidos}</td>
      <td>{numero_suministro}</td>
      <td>{direccion}</td>
      <td>{departamento}</td>
      <td>{provincia}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ClientsTableRow;
