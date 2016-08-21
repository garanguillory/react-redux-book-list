import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';
import AddBook from '../containers/AddBook';

export default class App extends Component {
  render() {
    return (
      <div>
	      <AddBook />
      	<BookList />
      	<BookDetail />
      </div>
    );
  }
}
