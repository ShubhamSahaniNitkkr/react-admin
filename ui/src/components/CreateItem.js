import React, { Component } from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export class CreateItem extends Component {
  render() {
    return (
      <Create {...this.props} title='Create a Post'>
        <SimpleForm>
          <TextInput source='author' />
          <TextInput source='title' />
          <TextInput source='contact' />
          <DateInput source='publish_on' label='published' />
        </SimpleForm>
      </Create>
    );
  }
}

export default CreateItem;
