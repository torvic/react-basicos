const ElectricMeterForm = () => {
  return (
    <div>
      <h3>Agregar Medidor Electrico</h3>
      <form>
        <input type="text" name="measurer" placeholder="Numero de Medidor" />
        <input type="text" name="client" placeholder="Numero de Cliente" />
        <input type="text" name="sensor" placeholder="ID del sensor" />
        <input type="text" name="location" placeholder="Ubicación" />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" />
      </form>
    </div>
  );
};

export default ElectricMeterForm;
