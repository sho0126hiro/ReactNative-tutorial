import { createStore } from 'redux';
import tmp from './reducer/reducers';

// ストアの生成
export const store = createStore(tmp)