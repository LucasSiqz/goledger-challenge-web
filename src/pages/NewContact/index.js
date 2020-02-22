import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import history from '~/services/history';
// import api from '~/services/api';

import { Container, Title } from './styles';

export default function NewContact() {
  function handleSubmmit(data) {
    history.push('/');
  }

  return (
    <Container>
      <Title>Cadastrar novo contato</Title>
      <Form initialData={{}} onSubmit={handleSubmmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="phone" placeholder="Telefone" />
        <Input name="company" placeholder="Companhia" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="age" placeholder="Idade" />

        <button type="submit">Cadastrar contato</button>
      </Form>
    </Container>
  );
}
