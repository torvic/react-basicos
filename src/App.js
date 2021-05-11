import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente'
import './App.css';

function App() {
  let personas = ["Alfonso", "Ugarte", "San", "mArtin"];
  let auth=true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello world !!!</p>
        <ul>
          {personas.map((persona, index) => <li key={index}>{persona}</li>)}
        </ul>
        <p>
          {auth?"Esta logueado":"No esta logeado"}
        </p>
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
      <section>
        <Componente msg="Hola soy un componente funcional expresada desde una prop"/>
      </section>
      
    </div>
  );
}

export default App;
