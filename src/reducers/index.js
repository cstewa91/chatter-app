import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import chat from './chat_reducer';

const rootReducer = combineReducers({ chat, form })

export default rootReducer