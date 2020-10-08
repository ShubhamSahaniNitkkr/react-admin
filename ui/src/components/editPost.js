import React, { Component } from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

export class editPost extends Component {
  render() {
    return (
      <Edit {...this.props} title='Edit a Post.'>
        <SimpleForm>
          <TextInput source='id' disabled />
          <TextInput source='author' />
          <TextInput source='title' />
          <TextInput source='contact' />
          <DateInput source='publish_on' label='published' />
        </SimpleForm>
      </Edit>
    );
  }
}

export default editPost;
