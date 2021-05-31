import React from 'react';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import ClientsApi from './components/ClientsApi';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr/>
      <ClientsApi/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
      <hr/>
    </>
  );
}

export default App;
