import './App.css';
import ComponenetA from './Components/ComponenetA';
import { Contacto } from './Objects/Contacto';
import Clock from './Clock'
import { useState, useEffect } from 'react';


function App() {
  const [color, setColor] = useState('#000000')
  const [cahngeColor, setChangeColor] = useState(false);

  useEffect(() => {
    if (cahngeColor  === true){
        generateHex()
    }
  }, [cahngeColor])
  

  const getColor = () => Math.floor(Math.random() * 256);

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
    console.log("NIco puto")
    setChangeColor(true)
  };

  const onStopChangeColor = () => {
    setChangeColor(false)
    console.log(cahngeColor+ "Leave")
  };

  const onClickChangeColor = () => {
   setChangeColor(false)
   console.log(cahngeColor + "Click")
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
