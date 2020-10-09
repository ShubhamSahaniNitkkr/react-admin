import React, { Component } from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

export class EditItem extends Component {
  render() {
    return (
      <Edit {...this.props} title='Edit a Post.'>
        <SimpleForm>
          <TextInput disabled source='id' label='itemKey' />
          <TextInput source='itemName' />
          <TextInput source='desc' />
          <TextInput source='category' />
          <TextInput source='productName' />
          <TextInput source='productType' />
          <TextInput source='menuType' />
          <TextInput source='bundleType' />
        </SimpleForm>
      </Edit>
    );
  }
}

export default EditItem;
