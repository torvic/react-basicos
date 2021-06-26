import './App.css';
import ConceptosBasicos from './componentes/ConceptosBasicos';
import CrudApi from './componentes/CrudApi';
import SongSearch from './componentes/SongSearch';

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <SongSearch />
      <hr />
      {/* <CrudApi/> */}
      <hr />
      {/* <ConceptosBasicos /> */}
    </div>
  );
}

export default App;
