import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {addBook} from '../actions/index';
// import {bindActionCreators} from 'redux';

export default class BookList extends Component {
	constructor(props) {
		super(props);

		this.state = {book: {title: '', author: '', pages: ''}};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event){
		event.preventDefault();
		// add task to List
		// this.props.addBook(this.state.task);
		// this.setState({book: {title: '', author: '', pages: ''}});
	}

  render() {
    return (
    	<form onSubmit={this.onFormSubmit} className="input-group add-book-form">
    		<input 
    			placeholder="Add book information here..."
    			className="form-control" />
    		<span className="input-group-btn">
    			<button type="submit" className="btn btn-secondary">Add</button>
    		</span>
    	</form>
    )
  }
}


// function mapDispatchToProps(dispatch){
  // return bindActionCreators({addBook: addBook}, dispatch)
// }

// export default connect(null, mapDispatchToProps)(BookList);

