import React, { useState } from "react";

const initialForm = {
  id: null,
  measurer: "",
  client: "",
  sensor: "",
  location: "",
};

const ElectricMeterForm = ({ createData }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.measurer || !form.client || !form.sensor || !form.location) {
      alert("Datos Incompletos");
      return;
    }

    if (form.id === null) {
      // create data
      createData(form);
    }

		handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <div>
      <h3>Agregar Medidor Electrico</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="measurer"
          placeholder="Numero de Medidor"
          onChange={handleChange}
					value={form.measurer}
        />
        <input
          type="text"
          name="client"
          placeholder="Numero de Cliente"
          onChange={handleChange}
					value={form.client}
        />
        <input
          type="text"
          name="sensor"
          placeholder="ID del sensor"
          onChange={handleChange}
					value={form.sensor}
        />
        <input
          type="text"
          name="location"
          placeholder="Ubicación"
          onChange={handleChange}
					value={form.location}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default ElectricMeterForm;
