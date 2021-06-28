import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [charData, setCharData] = useState({});
  const chart = () => {
    let labels = ['1', '2', '3', '4', '5', '6'];
    let data = [12, 19, 3, 5, 2, 3];
    setCharData({
      labels: [...labels],
      datasets: [
        {
          label: 'kW',
          data: [...data],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.2,
        },
      ],
    });
  };

  let options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'kW',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Fecha de Lectura',
        },
      },
    },
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        height: '500px',
        marginLeft: '25%',
        marginRight: '25%',
      }}
    >
      <h2>Graficas en React</h2>
      <Line height={200} data={charData} options={options} />
    </div>
  );
};

export default Chart;
