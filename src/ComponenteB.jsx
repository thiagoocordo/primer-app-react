import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './Contacto'

const ComponenteB = ({contact}) => {
  return (
    <div>
      Conatcto:
      <p>{contact.Nombre}</p>
      <p>{contact.Apellido}</p>
      <p>{contact.Email}</p>
      <p>{contact.Conectado ? 'Conatcto en Línea': 'Contacto no disponible'}</p>
    </div>
  )
}

ComponenteB.propTypes = {
  contact: PropTypes.instanceOf(Contacto)
}

export default ComponenteB
