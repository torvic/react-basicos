import { TYPES } from "../actions/contadorActions"


export const contadorInitialState = { count: 0 }

export const contadorInit = (initialState) => {
	return {
		count: initialState.count + 100
	}
}

export function contadorReducer(state, action) {
	switch (action.type) {
		case TYPES.INCREMENT:
			return { count: state.count + 1 }
		case TYPES.INCREMENT_5:
			return { count: state.count + action.payload }
		case TYPES.DECREMENT:
			return { count: state.count - 1 }
		case TYPES.DECREMENT_5:
			return { count: state.count - action.payload }
		case TYPES.RESET:
			return contadorInitialState
		default:
			return state
	}
}
