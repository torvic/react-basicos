import { TYPES } from "../actions/crudActions";

export const crudInitialState = {
	db: null
}

export function crudReducer(state, action) {
	switch (action.type) {
		case TYPES.READ_ALL_DATA:
			return {
				...state,
				db: action.payload.map((data) => data)
			}	
		case TYPES.CREATE_DATA:
			return {
				...state,
				db: [...state.db, action.payload]
			}	
			case TYPES.READ_ONE_DATA:
				return {}	
		case TYPES.UPDATE_DATA:
			return {}	
		case TYPES.DELETE_DATA:
			return {}	
		case TYPES.NOT_DATA:
			return crudInitialState	

		default:
			break;
	}
	
}