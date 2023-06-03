import React from 'react'
import { Contacto } from './Contacto'
import PropTypes from 'prop-types'
import ComponenteB from './ComponenteB'

const ComponenetA = ({contacto}) => {
  return (
    <div>
        <div>
            <h2>Nombre:{contacto.Nombre}</h2>
            <h3>Apellidos: {contacto.Apellido}</h3>
            <h3>Email: {contacto.Email}</h3>
            <ComponenteB estado={true} />
        </div>
    </div>
  )
}

ComponenetA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenetA