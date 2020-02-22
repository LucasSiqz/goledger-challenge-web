import React, { useState } from 'react';
import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';

import { Container, Badge, OptionsList, Option, Divisor } from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#C6C6C6" size={25} />
      </Badge>
      <OptionsList visible={visible}>
        <Option>
          <MdEdit color="#4D85EE" size={16} />
          <p>Editar</p>
        </Option>
        <Divisor />
        <Option>
          <MdDelete color="#DE3B3B" size={16} />
          <p>Excluir</p>
        </Option>
      </OptionsList>
    </Container>
  );
}
