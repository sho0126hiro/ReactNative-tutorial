import { createStore } from 'redux';
import {persistStore,persistReducer}from "redux-persist";
import tmp from './reducer/reducers';
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key ="root",
    storage
};
const persistReducer = persistReducer(persistConfig,tmp);
// ストアの生成
export const store_ = createStore(persistReducer);
export const store = persistStore(store_);