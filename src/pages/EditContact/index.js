import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Title } from './styles';

export default function EditContact() {
  const { contact } = history.location.state;

  async function handleSubmmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        phone: Yup.string().required(),
        company: Yup.string().required(),
        email: Yup.string()
          .email()
          .required(),
        age: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, phone, company, email } = data;
      const age = Number(data.age);

      await api.put('update', {
        '@assetType': 'contact',
        name,
        phone,
        company,
        email,
        age,
      });

      toast.success('Contato editado com sucesso!');
      history.push('/');
    } catch (err) {
      toast.error('Erro ao editar contato, Verifique os dados!');
    }
  }

  return (
    <Container>
      <Title>Editar contato</Title>
      <Form initialData={contact} onSubmit={handleSubmmit}>
        <Input name="name" placeholder="Nome" readOnly />
        <Input name="phone" placeholder="Telefone" />
        <Input name="company" placeholder="Companhia" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="age" type="number" min="0" placeholder="Idade" />

        <button type="submit">Confirmar edição</button>
      </Form>
    </Container>
  );
}
