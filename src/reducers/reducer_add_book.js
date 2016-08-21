export const ADD_BOOK = 'ADD_BOOK';

// id, title, action, payload

export default function(state = null, action){
	switch (action.type){
		case ADD_BOOK:
			return {id: action.id, title: action.payload.title, author: action.payload.author, pages: action.payload.pages}
	}

	return state
}