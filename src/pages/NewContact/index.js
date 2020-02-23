import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Title } from './styles';

export default function NewContact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmmit(data) {
    try {
      setLoading(true);
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        phone: Yup.string().required(),
        company: Yup.string(),
        email: Yup.string().email(),
        age: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, phone, company, email } = data;
      const age = Number(data.age);

      await api.post('create', {
        '@assetType': 'contact',
        name,
        phone,
        company,
        email,
        age,
      });

      toast.success('Contato cadastrado com sucesso!');
      setLoading(false);
      history.push('/');
    } catch (err) {
      toast.error('Erro ao cadastrar contato, Verifique os dados!');
      setLoading(false);
    }
  }

  return (
    <Container>
      <Title>Cadastrar novo contato</Title>
      <Form initialData={{}} onSubmit={handleSubmmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="phone" placeholder="Telefone" />
        <Input name="company" placeholder="Companhia" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="age" type="number" min="0" placeholder="Idade" />

        {loading ? (
          <button type="submit" disabled>
            Carregando...
          </button>
        ) : (
          <button type="submit">Cadastrar Contato</button>
        )}
      </Form>
    </Container>
  );
}
