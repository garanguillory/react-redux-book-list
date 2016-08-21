import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    // this.props.books.map
    var books = [];
    if(!this.props.newBook){
      books = this.props.books;
    } else {
      books = [...this.props.books, this.props.newBook];
    }

    return books.map((book) => {
      return (
        <li
          key={book.id}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-6">
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state){
  return {
    books: state.books,
    newBook: state.newBook
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

