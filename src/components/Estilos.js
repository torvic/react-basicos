import React from 'react';
import './Estilos.css'

export default function Estilos() {
  let myStyles = {
    borderRadius:".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return(
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3 className="bg-react" style={{color:"red", borderRadius:".25rem", margin:"1rem"}} >Estilos en linea (atributos style)</h3>
      <h3 className="bg-react" style={myStyles}>Estilos en linea</h3>
    </section>
  );
}