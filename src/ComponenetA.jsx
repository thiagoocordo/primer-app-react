import React from 'react'
import { Contacto } from './Contacto'
import ComponenteB from './ComponenteB'

const ComponenetA = () => {
    const Contact = new Contacto ('Thiago', 'Cordoba', 'thiago.cor@hotmail.com', false)
  return (
    <div>
        <div>
            <ComponenteB contact={Contact}></ComponenteB>
        </div>
    </div>
  )
}
export default ComponenetA