import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import postList from './components/PostList';
import createPost from './components/CreatePost';
import editPost from './components/EditPost';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={postList}
        create={createPost}
        edit={editPost}
      />
    </Admin>
  );
}

export default App;
