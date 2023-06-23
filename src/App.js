import './App.css';
import ComponenetA from './Components/ComponenetA';
import { Contacto } from './Objects/Contacto';
import Clock from './Clock'
import { useState, useEffect } from 'react';


function App() {
  const [color, setColor] = useState('#000000')
  const [interval, setManageInterval] = useState(0);

  const getColor = () => Math.floor(Math.random() * 256);

  useEffect(() => {
      if(interval !== 0) {
        console.log(interval)
      }
      else{
        console.log ("Hola")
      }
  }, [interval])
  

  const getHex = (red, green, blue) => {
    return (
      '#' +
      [red, green, blue]
        .map((c) => {
          const hex = c.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  };

  const generateHex = () => {
    const rgb = {
      r: getColor(),
      g: getColor(),
      b: getColor(),
    };
    return setColor(getHex(rgb.r, rgb.g, rgb.b));
  };

  const onChangeColor = () => {
    setManageInterval(setInterval(generateHex,500))
  };

  const onStopChangeColor = () => {
    clearInterval(interval)
    setManageInterval(0)
  };

  const onClickChangeColor = () => {
    clearInterval(interval)
    setManageInterval(clearInterval(interval))
    setManageInterval(0)
  };
  return (
    <div className="App"
    onMouseOver={onChangeColor}
    onMouseLeave={onStopChangeColor}
    onDoubleClick={onClickChangeColor} 
    style={{backgroundColor:color}}
    > 
        <ComponenetA />
    </div>
  );
}

export default App;
