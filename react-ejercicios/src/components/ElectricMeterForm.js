import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  measurer: "",
  client: "",
  sensor: "",
  location: "",
};

const ElectricMeterForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

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
    } else {
      // update data
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
		setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar Medidor Electrico":"Agregar Medidor Electrico"}</h3>
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
