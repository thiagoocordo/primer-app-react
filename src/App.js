import './App.css';
import ComponenetA from './ComponenetA';
import { Contacto } from './Contacto';

function App() {
   const contactoPrueba = new Contacto(
      'Thiago',
      'Cordoba',
      'fulanito@open-bootcamp.com',
      false,
  )
  return (
    <div className="App">
        <ComponenetA contacto={contactoPrueba}></ComponenetA>
    </div>
  );
}

export default App;
