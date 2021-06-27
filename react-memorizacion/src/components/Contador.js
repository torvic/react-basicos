import React, { useState, useCallback } from 'react';
import ContadorHijo from './ContadorHijo';

const Contador = () => {
  const [coun, setCoun] = useState(0);
  const [input, setInput] = useState('');

  // const sumar = () => setCoun(coun + 1);
  const sumar = useCallback(() => setCoun(coun + 1), [coun]);

  // const restar = () => setCoun(coun - 1);
  const restar = useCallback(() => setCoun(coun - 1), [coun]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{coun}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={coun} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
