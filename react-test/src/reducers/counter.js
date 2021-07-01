import { combineReducers } from 'redux';

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { ...initialState, value: state.value + 1 };
    case 'counter/decremented':
      return { ...initialState, value: state.value - 1 };
    default:
      return state;
  }
};

export default combineReducers({ counterReducer });
