import React, {useState, useEffect} from 'react'

export default function ScrollHooks() {
  const [scrollY, setscrollY] = useState(0)

  useEffect(() => {
    console.log("Fase de Actualizacion");

    const detectarScroll = () => setscrollY(window.pageYOffset);
    
    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  });

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    console.log("Fase de montaje");
  });

  return(
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}