import React, { useState } from 'react';
import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Badge,
  Button,
  OptionsList,
  Option,
  Divisor,
} from './styles';

export default function Options({ contact, updateList }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleClickDelete(item) {
    try {
      const { name } = item;
      const data = {
        '@assetType': 'contact',
        name,
      };

      await api.delete('delete', {
        data,
      });

      toast.success('Contato excluido com sucesso!');

      updateList();
    } catch (err) {
      toast.error('Erro ao excluir contato!');
    }
  }

  function handleClickEdit() {
    history.push('/update', { contact });
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#C6C6C6" size={25} />
      </Badge>
      <OptionsList visible={visible}>
        <Option>
          <Button
            onClick={() => {
              handleClickEdit();
            }}
          >
            <MdEdit color="#4D85EE" size={16} />
            <p>Editar</p>
          </Button>
        </Option>
        <Divisor />
        <Option>
          <Button
            onClick={() => {
              handleClickDelete(contact);
            }}
          >
            <MdDelete color="#DE3B3B" size={16} />
            <p>Excluir</p>
          </Button>
        </Option>
      </OptionsList>
    </Container>
  );
}

Options.propTypes = {
  contact: PropTypes.object,
  updateList: PropTypes.func,
};

Options.defaultProps = {
  contact: {},
  updateList: () => {},
};
