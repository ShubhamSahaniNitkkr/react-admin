import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import listItems from './components/ListItems';
import createItem from './components/CreateItem';
import editItem from './components/EditItem';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='Campigns'
        list={listItems}
        create={createItem}
        edit={editItem}
      />
    </Admin>
  );
}

export default App;
