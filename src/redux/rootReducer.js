import { combineReducers } from 'redux';
import phonebook from './phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  phonebook,
});

export default rootReducer;
