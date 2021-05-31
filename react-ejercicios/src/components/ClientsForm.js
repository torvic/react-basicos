import React, { useState, useEffect } from "react";

const initialForm = {
  nombre: "",
  apellidos: "",
  numero_suministro: "",
  direccion: "",
  departamento: "",
  provincia: "",
  id: null,
};

const ClientsForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
      //console.log(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.nombre ||
      !form.apellidos ||
      !form.numero_suministro ||
      !form.direccion ||
      !form.departamento ||
      !form.provincia
    ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id == null) {
      createData(form);
    } else {
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
      <h3>Add Clients</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          onChange={handleChange}
          value={form.apellidos}
        />
        <input
          type="text"
          name="numero_suministro"
          placeholder="Numero de Suministro"
          onChange={handleChange}
          value={form.numero_suministro}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Direccion"
          onChange={handleChange}
          value={form.direccion}
        />
        <input
          type="text"
          name="departamento"
          placeholder="Departamento"
          onChange={handleChange}
          value={form.departamento}
        />
        <input
          type="text"
          name="provincia"
          placeholder="Provincia"
          onChange={handleChange}
          value={form.provincia}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default ClientsForm;
