import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import './App.css';

function App() {
  let personas = ["Alfonso", "Ugarte", "San", "mArtin"];
  let auth=true;
  return (
    <div className="App">
      <header className="App-header">
        <section>
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
        </section>
      <section>
        <Componente msg="Hola soy un componente funcional expresada desde una prop"/>
        <hr/>
        <Propiedades 
        cadena="Esto es una cadena de Texto" 
        numero= {19}
        booleano={false} 
        arreglo={[1,2,3]} 
        objeto={{nombre: "Jon", correo:"boom@gmail.com"}} 
        funcion={num => num*num}
        elementoReact={<i>Este es un elemento React</i>} 
        componenteReact={<Componente msg="Soy un componente basado como prop"/>}
        />
      </section>
      </header>
    </div>
  );
}

export default App;
