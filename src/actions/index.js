export const SELECTED_BOOK = 'SELECTED_BOOK';
export const ADD_BOOK = 'ADD_BOOK';

export function selectBook(book){
	return {
		type: SELECTED_BOOK,
		payload: book
	}
}

let nextBookId = 100;
export function addBook(book){
	return {
		type: ADD_BOOK,
		payload: book,
		id: nextBookId++
	}
}