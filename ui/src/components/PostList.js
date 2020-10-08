import React, { Component } from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export class PostList extends Component {
  render() {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source='id' />
          <TextField source='author' />
          <TextField source='title' />
          <TextField source='publist_on' />
          <EditButton basePath='/posts' />
          <DeleteButton basePath='/posts' />
        </Datagrid>
      </List>
    );
  }
}

export default PostList;
