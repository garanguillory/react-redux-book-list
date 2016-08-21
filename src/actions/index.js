export const SELECTED_BOOK = 'SELECTED_BOOK';

export function selectBook(book){
	return {
		type: SELECTED_BOOK,
		payload: book
	}
}