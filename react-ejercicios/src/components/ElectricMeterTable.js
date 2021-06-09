import ElectricMeterTableRow from "./ElectricMeterTableRow";

const ElectricMeterTable = ({ data }) => {
  return (
    <div>
      <h3>Lista de Medidores Electricos</h3>
      <table>
        <thead>
          <tr>
            <th>Numero de Medidor</th>
            <th>Numero de Cliente</th>
            <th>ID sensor</th>
            <th>Ubicación</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <ElectricMeterTableRow key={el.id} el={el} />
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

export default ElectricMeterTable;
