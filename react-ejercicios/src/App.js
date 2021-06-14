import React from 'react';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import ClientsApi from './components/ClientsApi';
import SongSearch from './components/SongSearch';
import SelectsAnidados from './components/SelectsAnidados';
import ElectricMeterApi from './components/ElectricMeterApi';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr/>
			<ContactForm/>
      <hr/>
      <ElectricMeterApi />
      <hr/>
      <ClientsApi/>
      <hr/>
      <SelectsAnidados />
      <hr/>
      <SongSearch />
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
      <hr/>
    </>
  );
}

export default App;
