import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Contacts from '~/pages/Contacts';
import NewContact from '~/pages/NewContact';
import EditContact from '~/pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Switch>
        <Route path="/" exact component={Contacts} />
        <Route path="/new" component={NewContact} />
        <Route path="/update" component={EditContact} />
      </Switch>
    </Switch>
  );
}
