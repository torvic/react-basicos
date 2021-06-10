const ElectricMeterTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { id, measurer, client, sensor, location } = el;

  return (
    <tr>
      <td>{measurer}</td>
      <td>{client}</td>
      <td>{sensor}</td>
      <td>{location}</td>
      <td>
        <button onClick={() => setDataToEdit(el)} >Editar</button>
        <button onClick={() => deleteData({id, measurer})} >Eliminar</button>
      </td>
    </tr>
  );
};

export default ElectricMeterTableRow;
