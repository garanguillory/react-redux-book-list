export const SELECTED_BOOK = 'SELECTED_BOOK';
// export const ADD_BOOK = 'ADD_BOOK';

// id, title, action, payload

export default function(state = null, action){
	switch (action.type){
		case SELECTED_BOOK:
			return action.payload;
		// case ADD_BOOK:
			// return [...state, {id: action.payload.id, title: action.payload.title, author: action.payload.author, pages: action.payload.pages}]
	}

	return state
}