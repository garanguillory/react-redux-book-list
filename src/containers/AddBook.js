import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {addBook} from '../actions/index';
// import {bindActionCreators} from 'redux';

export default class BookList extends Component {
	constructor(props) {
		super(props);

		this.state = {book: {title: '', author: '', pages: ''}};
		this.addTitle = this.addTitle.bind(this);
		this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
		this.onInputChangeAuthor = this.onInputChangeAuthor.bind(this);
		this.onInputChangePages = this.onInputChangePages.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	addTitle(value){
		// this.setState(book.title);
		// this.setState({book: event.target.value});
		console.log("title: ", this.state.book.title);
	}

	onInputChangeTitle(event){
		// console.log(event.target.value);
		// console.log('event.target: ', event.target);
		this.setState({
			book: {
				title: event.target.value, 
				author: this.state.book.author, 
				pages: this.state.book.pages
			}
		});
	}

	onInputChangeAuthor(event){
		this.setState({
			book: {
				title: this.state.book.title, 
				author: event.target.value, 
				pages: this.state.book.pages
			}
		});
	}

	onInputChangePages(event){
		this.setState({
			book: {
				title: this.state.book.title, 
				author: this.state.book.author, 
				pages: event.target.value
			}
		});
	}

	onFormSubmit(event){
		event.preventDefault();
		// add task to List
		// this.props.addBook(this.state.book);
		// this.setState({book: {title: '', author: '', pages: ''}});
	}

  render() {
    return (
    	<form onSubmit={this.onFormSubmit} className="input-group add-book-form">
    		<input
    			// input for Adding a book title
    			value={this.state.book.title}
    			onChange={this.onInputChangeTitle}
    			placeholder="What's the title of the book?"
    			className="form-control" />
    			<span className="input-group-btn">
    				<button type="submit" className="btn btn-secondary">Add Title</button>
    			</span>
    		<input
    			// input for Adding the book's author
    			value={this.state.book.author}
    			onChange={this.onInputChangeAuthor}
    			placeholder="Add the book's author here..."
    			className="form-control" />
    			<span className="input-group-btn">
    				<button type="submit" className="btn btn-secondary">Add Author</button>
    			</span>
    		<input
    			// input for Adding the book's # of pages
    			value={this.state.book.pages}
    			onChange={this.onInputChangePages}
    			placeholder="How many pages does the book have?"
    			className="form-control" />
    		<span className="input-group-btn">
    			<button type="submit" className="btn btn-secondary">Add Pages</button>
    		</span>
    	</form>
    )
  }
}


// function mapDispatchToProps(dispatch){
  // return bindActionCreators({addBook: addBook}, dispatch)
// }

// export default connect(null, mapDispatchToProps)(BookList);

