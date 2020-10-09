import React, { Component } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export class ListItems extends Component {
  render() {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source='id' label='itemKey' />
          <TextField source='itemName' />
          <TextField source='desc' />
          <TextField source='category' />
          <TextField source='productName' />
          <TextField source='productType' />
          <TextField source='menuType' />
          <TextField source='bundleType' />
          <EditButton basePath='/Campigns' />
        </Datagrid>
      </List>
    );
  }
}

export default ListItems;
