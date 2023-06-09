import React, { useState } from 'react'
import { Contacto } from '../Objects/Contacto'
import PropTypes from 'prop-types'
import ComponenteB from './ComponenteB'
import ContactForm from '../Forms/ContactForm'

const ComponenetA = () => {
  const Conatcto = new Contacto(
    'Thiago',
    'Cordoba',
    'dsada@gmail.com',
    true
  )
    const [Contacts, setContacts] = useState([Conatcto])
   

    function changeConnected(contact){
      const index= Contacts.indexOf(contact)
      const tempConatct=[...Contacts]
      tempConatct[index].Conectado = !tempConatct[index].Conectado
      setContacts(tempConatct)
    }

    function deleteConatct(contact){
      const index= Contacts.indexOf(contact)
      const tempConatct=[...Contacts]
      tempConatct.splice(index,1)
      setContacts(tempConatct)
    }

    function addContact(contact){
      const tempConatct = [...Contacts]
      tempConatct.push(contact)
      setContacts(tempConatct)
    }



  return (
    <div>
        <div>
        {Contacts.map((contact, index) => {
                                    return (
                                            <ComponenteB 
                                                eliminar={deleteConatct}
                                                key={index} 
                                                contacto={contact}
                                                change={changeConnected}
                                                >
                                        
                                            </ComponenteB>
                                        )
                                    }
                                )}
        </div>
        <ContactForm add={addContact}></ContactForm>
    </div>
  )
}

ComponenetA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenetA