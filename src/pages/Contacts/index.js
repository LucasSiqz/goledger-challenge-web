import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import history from '~/services/history';
import api from '~/services/api';

import {
  InitialContent,
  ButtonContent,
  ListAttributes,
  Attribute,
  ContactList,
  AsideContact,
  LastAttribute,
  Contact,
} from './styles';

import Options from '~/components/Options';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function loadContacts() {
      const selector = {
        '@assetType': 'contact',
      };
      const response = await api.post('search', {
        selector,
      });

      setContacts(response.data.result);
    }

    loadContacts();
  }, [contacts]);

  function handleClick() {
    history.push('/new');
    // console.log(contacts);
  }

  return (
    <>
      <InitialContent>
        <strong>Lista de Contatos</strong>
        <ButtonContent>
          <button type="button" onClick={handleClick}>
            <MdAdd color="#fff" size={30} />
            <strong>Cadastrar</strong>
          </button>
        </ButtonContent>
      </InitialContent>
      <ContactList>
        <ListAttributes>
          <Attribute>
            <strong>Nome</strong>
          </Attribute>
          <Attribute>
            <strong>Telefone</strong>
          </Attribute>
          <Attribute>
            <strong>Companhia</strong>
          </Attribute>
          <Attribute>
            <strong>Email</strong>
          </Attribute>
          <Attribute>
            <strong>Idade</strong>
          </Attribute>
          <LastAttribute>
            <strong>Ações</strong>
          </LastAttribute>
        </ListAttributes>
        {contacts.map(contact => (
          <Contact key={contact.name}>
            <AsideContact>
              <Attribute>
                <span>{contact.name}</span>
              </Attribute>
              <Attribute>
                <span>{contact.phone}</span>
              </Attribute>
              <Attribute>
                <span>{contact.company}</span>
              </Attribute>
              <Attribute>
                <span>{contact.email}</span>
              </Attribute>
              <Attribute>
                <span>{contact.age}</span>
              </Attribute>
              <LastAttribute>
                <div>
                  <Options />
                </div>
              </LastAttribute>
            </AsideContact>
          </Contact>
        ))}
      </ContactList>
    </>
  );
}
