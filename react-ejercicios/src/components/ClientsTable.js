import React from "react";
import ClientsTableRow from "./ClientsTableRow";

const ClientsTable = ({ data, setDataToEdit, deleteData }) => {
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <ClientsTableRow
                key={el.id}
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
