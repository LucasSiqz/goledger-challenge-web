import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router, Route, Switch } from 'react-router-dom';

import history from './services/history';

import GlobalStyle from './styles/global';

import Contacts from '~/pages/Contacts';
import NewContact from '~/pages/NewContact';

import DefaultLayout from '~/pages/_layouts/default';
import EditContact from './pages/EditContact';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact component={Contacts} />
          <Route path="/new" component={NewContact} />
          <Route path="/update" component={EditContact} />
        </DefaultLayout>
      </Switch>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
