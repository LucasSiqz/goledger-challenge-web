import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import history from '~/services/history';
import api from '~/services/api';

import { InitialContent, ButtonContent, Content } from './styles';

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

      setContacts(response.data);
    }

    loadContacts();
  }, []);

  function handleClick() {
    console.log(contacts);
    history.push('/new');
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
      <Content>
        <strong>Nome</strong>
        <strong>Telefone</strong>
        <strong>Companhia</strong>
        <strong>Email</strong>
        <strong>Idade</strong>
        <strong>Ações</strong>
      </Content>
    </>
  );
}
