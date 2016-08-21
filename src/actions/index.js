export const SELECTED_BOOK = 'SELECTED_BOOK';
export const ADD_BOOK = 'ADD_BOOK';

export function selectBook(book){
	return {
		type: SELECTED_BOOK,
		payload: book
	}
}

// payload (book) should be an object:
// {title: 'Hello World', author: 'Louie', pages: 199}
// where do I add the unique book id ???
let nextBookId = 100;
export function addBook(book){
	return {
		type: ADD_BOOK,
		payload: book,
		id: nextBookId++
	}
}