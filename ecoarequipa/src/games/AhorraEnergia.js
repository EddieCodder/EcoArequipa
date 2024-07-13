import React, { useState } from 'react';
import televisorImg from '../assets/televisor.png';
import luzImg from '../assets/luz.png';
import computadoraImg from '../assets/computadora.png';

const AhorraEnergia = () => {
  const [devices, setDevices] = useState([
    { name: 'Televisor', isOn: true, img: televisorImg },
    { name: 'Luz', isOn: true, img: luzImg },
    { name: 'Computadora', isOn: true, img: computadoraImg },
  ]);

  const handleToggle = (index) => {
    const newDevices = [...devices];
    newDevices[index].isOn = !newDevices[index].isOn;
    setDevices(newDevices);
  };

  return (
    <div className="game-container">
      <h1>Ahorra Energía</h1>
      <p>Apaga los aparatos electrónicos que no se estén utilizando.</p>
      <ul className="device-list">
        {devices.map((device, index) => (
          <li key={index} className={device.isOn ? 'on' : 'off'}>
            <img src={device.img} alt={device.name} />
            {device.name} - {device.isOn ? 'Encendido' : 'Apagado'}
            <button onClick={() => handleToggle(index)}>
              {device.isOn ? 'Apagar' : 'Encender'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AhorraEnergia;