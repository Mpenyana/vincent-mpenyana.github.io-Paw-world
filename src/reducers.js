import { CHANGE_SEARCH_FIELD, FETCH_CATS_FAILED, FETCH_CATS_SUCCESS, FETCH_CATS_PENDING} from './constants';

const intitialStateSearch = {
	searchField: ''
}

export const searchCats = (state=intitialStateSearch, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
		return Object.assign({}, state, {searchField: action.payload})
		default:
		return state;
	}
}

const intitialStateCats ={
	isPending: false,
	Cats: [],
	action: ''
}

export const fetchCats = (state=intitialStateCats, action={}) =>{
	switch(action.type){
		case FETCH_CATS_PENDING:
			return Object.assign(state, {}, {isPending: true})
		case FETCH_CATS_SUCCESS:
			return Object.assign(state, {}, {isPending: false, Cats: action.payload})
		case FETCH_CATS_FAILED:
			return Object.assign(state, {}, {isPending:false, error: action.payload})
		default:
			return state
	}
}

