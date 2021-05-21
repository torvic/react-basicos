import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import './App.css';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponente from './components/ComunicacionComponente';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks'

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
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponente/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <ContadorHooks titulo="Seguidores"/>
      </section>
      </header>
    </div>
  );
}

export default App;
