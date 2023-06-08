import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './Objects/Contacto';

function ComponenteB({contacto,eliminar}) {
  return (
    <div>
      <div>
          <p>{contacto.Nombre}<button onClick={()=> eliminar(contacto)}>Eliminar</button></p>
          
      </div>
    </div>
  );
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
  eliminar: PropTypes.func
};

export default ComponenteB;