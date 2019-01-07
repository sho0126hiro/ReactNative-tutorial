// index.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import editName from './editName';

const testApp = combineReducers({
    user:editName // 作るたびに追加
})

export default testApp;
