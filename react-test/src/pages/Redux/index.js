import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

const Redux = () => {
  const number = useSelector((a) => a.counterReducer.value);
  const dispatch = useDispatch();
  // console.log(number);

  const handleAdd = () => {
    dispatch({ type: 'counter/incremented' });
  };
  const handleMin = () => {
    dispatch({ type: 'counter/decremented' });
  };

  return (
    <div>
      <h2>Redux</h2>
      <h2>{number}</h2>
      <button onClick={handleMin}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default Redux;
