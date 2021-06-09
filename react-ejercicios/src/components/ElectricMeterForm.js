const ElectricMeterForm = () => {
  return (
    <div>
      <h3>Agregar Medidor Electrico</h3>
      <form>
        <input type="text" name="numero_medidor" placeholder="Numero del Medidor" />
        <input type="text" name="potencia" placeholder="Potencia kW" />
        <input type="text" name="acometida" placeholder="Acometida" />
        <input type="text" name="client_id" placeholder="Numero de Suministro" />
        <input type="text" name="sensor_id" placeholder="Codigo del Sensor" />
      </form>
    </div>
  );
};

export default ElectricMeterForm;
