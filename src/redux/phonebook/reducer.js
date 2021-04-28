import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  onAddContactRequest,
  onAddContactSuccess,
  onAddContactFailure,
  onDeleteContactRequest,
  onDeleteContactSuccess,
  onDeleteContactFailure,
  onToggleFavouriteRequest,
  onToggleFavouriteSuccess,
  onToggleFavouriteFailure,
  onChangeFilter,
  onFetchContactsRequest,
  onFetchContactsSuccess,
  onFetchContactsFailure,
} from './actions';

const phonebookState = {
  items: [],
  filter: '',
  loading: false,
};

const contacts = createReducer(phonebookState.items, {
  // FETCH
  [onFetchContactsSuccess]: (state, { payload }) => payload,
  // ADD
  [onAddContactSuccess]: (state, { type, payload }) => [...state, payload],
  // DELETE
  [onDeleteContactSuccess]: (state, { type, payload }) =>
    state.filter(({ id }) => id !== payload),
  // TOGGLE
  [onToggleFavouriteSuccess]: (state, { type, payload }) =>
    state.map(contact => {
      return contact.id === payload.id ? payload : contact;
    }),
});

const loading = createReducer(phonebookState.loading, {
  [onAddContactRequest]: () => true,
  [onAddContactSuccess]: () => false,
  [onAddContactFailure]: () => false,
  [onDeleteContactRequest]: () => true,
  [onDeleteContactSuccess]: () => false,
  [onDeleteContactFailure]: () => false,
  [onToggleFavouriteRequest]: () => true,
  [onToggleFavouriteSuccess]: () => false,
  [onToggleFavouriteFailure]: () => false,
  [onFetchContactsRequest]: () => true,
  [onFetchContactsSuccess]: () => false,
  [onFetchContactsFailure]: () => false,
});

const filter = createReducer(phonebookState.filter, {
  [onChangeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
