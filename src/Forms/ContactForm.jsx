import React,{useRef} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../Objects/Contacto'

function Contact({add}) {
  const name = useRef('')
  const lastname = useRef('')
  const email = useRef('')

  function addContact(e){
    e.preventDefault()
  }
  function crearContacto(){
   const Contact = new Contacto(
    name.current.value,
    lastname.current.value,
    email.current.value,
    false
   );
   add(Contact)
  }

  return (
    <div>
        <form onSubmit={addContact}>
        <input placeholder='Nombre' ref={name}></input>
        <input placeholder='Apellido' ref={lastname}></input>
        <input placeholder='email'ref={email}></input>
        <button type='submit' onClick={crearContacto}>Agregar</button>
      </form>
    </div>
  )
}

Contact.propTypes = {

}

export default Contact
