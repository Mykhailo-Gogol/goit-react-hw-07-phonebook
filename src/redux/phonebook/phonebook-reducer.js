import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phonebookActions from './phonebook-actions';

const phonebookState = {
  items: [],
  filter: '',
  loading: false,
};

const contacts = createReducer(phonebookState.items, {
  // FETCH
  [phonebookActions.onFetchContactsSuccess]: (state, { payload }) => payload,
  // ADD
  [phonebookActions.onAddContactSuccess]: (state, { type, payload }) => [
    ...state,
    payload,
  ],
  // DELETE
  [phonebookActions.onDeleteContactSuccess]: (state, { type, payload }) =>
    state.filter(({ id }) => id !== payload),
  // TOGGLE
  [phonebookActions.onToggleFavouriteSuccess]: (state, { type, payload }) =>
    state.map(contact => {
      return contact.id === payload.id ? payload : contact;
    }),
});

const loading = createReducer(phonebookState.loading, {
  [phonebookActions.onAddContactRequest]: () => true,
  [phonebookActions.onAddContactSuccess]: () => false,
  [phonebookActions.onAddContactFailure]: () => false,
  [phonebookActions.onDeleteContactRequest]: () => true,
  [phonebookActions.onDeleteContactSuccess]: () => false,
  [phonebookActions.onDeleteContactFailure]: () => false,
  [phonebookActions.onToggleFavouriteRequest]: () => true,
  [phonebookActions.onToggleFavouriteSuccess]: () => false,
  [phonebookActions.onToggleFavouriteFailure]: () => false,
  [phonebookActions.onFetchContactsRequest]: () => true,
  [phonebookActions.onFetchContactsSuccess]: () => false,
  [phonebookActions.onFetchContactsFailure]: () => false,
});

const filter = createReducer(phonebookState.filter, {
  [phonebookActions.onChangeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
