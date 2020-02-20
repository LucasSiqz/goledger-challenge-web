import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo_final.png';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoLedgerChallenge" />
          <Link to="/">Contatos</Link>
        </nav>
      </Content>
    </Container>
  );
}
