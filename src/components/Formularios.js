import React, {useState} from 'react';


export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false)

  return(
    <>
      <h2>Formularios</h2>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />

        <p>Elige tu sabor JS favorito</p>
        <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={e => setSabor(e.target.value)} defaultChecked />
        <label htmlFor="vanilla">Vanilla</label>
        <input type="radio" id="react" name="sabor" value="react" onChange={e => setSabor(e.target.value)} />
        <label htmlFor="react">React</label>
        <input type="radio" id="angular" name="sabor" value="angular" onChange={e => setSabor(e.target.value)} />
        <label htmlFor="angular">Angular</label>
        <input type="radio" id="vue" name="sabor" value="vue" onChange={e => setSabor(e.target.value)} />
        <label htmlFor="vue">Vue</label>
        <input type="radio" id="svelte" name="sabor" value="svelte" onChange={e => setSabor(e.target.value)} />
        <label htmlFor="svelte">Svelte</label>

        <p>Elige tu sabor JS favorito</p>
        <select name="lenguaje" onChange={e => setLenguaje(e.target.value)} defaultValue="" >
          <option value="" >---</option>
          <option value="js" >JavaScript</option>
          <option value="php" >PHP</option>
          <option value="python" >Python</option>
          <option value="go" >GO</option>
          <option value="rb" >Ruby</option>
        </select>
          <br/>
          <label htmlFor="terminos" >Acepto terminos y condiciones</label>
          <input type="checkbox" id="terminos" name="terminos" onChange={e => setTerminos(e.target.checked)} />
      </form>
    </>
  )
}