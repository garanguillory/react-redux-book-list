import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addTask} from '../actions/index';



class AddBook extends Component {
	constructor(props) {
		super(props);

		this.state = {book: ''};
		// this.onInputChange = this.onInputChange.bind(this);
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	render(){
		return (
			<form className="input-group">
				<input 
					placeholder="Add book here..."
					className="form-control"
					value={this.state.task}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Add</button>
				</span>
			</form>
		);
	}
}

/*
<form onSubmit={this.onFormSubmit} className="input-group">
	<input 
		placeholder="Add task here..."
		className="form-control"
		value={this.state.task}
		onChange={this.onInputChange} />
	<span className="input-group-btn">
		<button type="submit" className="btn btn-secondary">Add</button>
	</span>
</form>
*/