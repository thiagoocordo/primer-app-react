import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../Objects/Contacto';


function ComponenteB({contacto,eliminar,change}) {

  function Connect(){
    if(contacto.Conectado){
        return (<i onClick={() => change(contacto)} className='bi-toggle-on ' style={{color: 'green'}}> </i>)
      }
      else{
        return (<i onClick={() => change(contacto)} className='bi-toggle-off ' style={{color: 'grey'}}> </i>)

    }
  }
  return (
    <div>
      <div>
          <p>{contacto.Nombre}
            <a> {contacto.Apellido} </a>
            <i>{Connect()}</i>
            <button onClick={()=> eliminar(contacto)}>Eliminar</button>
            </p>
            
        
      </div>
    </div>
  );
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
  eliminar: PropTypes.func  
};

export default ComponenteB;