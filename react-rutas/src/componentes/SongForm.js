import React, { useState, useEffect } from 'react';

const initialForm = {
  artist: '',
  song: '',
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert('Datos Incompletos');
      setIsDisabled(true);
      return;
    }

    handleSearch(form);

    setForm(initialForm);
    setIsDisabled(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Cancion"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
        <input
          type="button"
          onClick={handleSaveSong}
          value="Agregar cancion"
          disabled={isDisabled && 'disabled'}
        />
      </form>
    </div>
  );
};

export default SongForm;
