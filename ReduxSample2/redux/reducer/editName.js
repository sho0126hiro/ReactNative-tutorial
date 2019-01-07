import { DELETE_NAME } from '../actions/type';
import { ADD_NAME } from '../actions/type';
import { combineReducers } from 'redux';
// 初期状態
INITIAL_STATE = {
    name: 'Nanasi'
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NAME:
            return { ...state, name: action.name }
        case DELETE_NAME:
            return { ...state, name: '' }
        default:
            return state;
    }
}
export default reducer;