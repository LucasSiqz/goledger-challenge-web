import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contacts from '~/pages/Contacts';
import NewContact from '~/pages/NewContact';
import EditContact from '~/pages/EditContact';

import DefaultLayout from '~/pages/_layouts/default';

export default function Routes() {
  return (
    <Switch>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact component={Contacts} />
          <Route path="/new" component={NewContact} />
          <Route path="/update" component={EditContact} />
        </DefaultLayout>
      </Switch>
    </Switch>
  );
}
