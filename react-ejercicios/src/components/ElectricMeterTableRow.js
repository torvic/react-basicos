const ElectricMeterTableRow = ({ el }) => {
  let { id, measurer, client, sensor, location } = el;

  return (
    <tr>
      <td>{measurer}</td>
      <td>{client}</td>
      <td>{sensor}</td>
      <td>{location}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default ElectricMeterTableRow;
