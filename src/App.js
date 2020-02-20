import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './services/history';

import GlobalStyle from './styles/global';

import Contacts from '~/pages/Contacts';
import NewContact from '~/pages/NewContact';

import DefaultLayout from '~/pages/_layouts/default';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact component={Contacts} />
          <Route path="/new" exact component={NewContact} />
        </DefaultLayout>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
