import React from "react";
import ClientsTableRow from "./ClientsTableRow";

const ClientsTable = ({ data, setDataToEdit, deleteData }) => {
  console.log(data);
  return (
    <div>
      <h3>Lista de Clientes</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Numero de Suministro</th>
            <th>Direccion</th>
            <th>Departamento</th>
            <th>Provincia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <ClientsTableRow
                key={el.numero_suministro}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
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
  );
};

export default ClientsTable;
