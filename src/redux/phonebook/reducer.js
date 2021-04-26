import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  onAddContactRequest,
  onAddContactSuccess,
  onAddContactFailure,
  onDeleteContactRequest,
  onDeleteContactSuccess,
  onDeleteContactFailure,
  onChangeFilter,
} from "./actions";

const phonebookState = {
  items: [],
  filter: "",
  loading: false,
};

const contacts = createReducer(phonebookState.items, {
  [onAddContactSuccess]: (state, { type, payload }) => [...state, payload],
  [onDeleteContactSuccess]: (state, { type, payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(phonebookState.loading, {
  [onAddContactRequest]: () => true,
  [onAddContactSuccess]: () => false,
  [onAddContactFailure]: () => false,
  [onDeleteContactRequest]: () => true,
  [onDeleteContactSuccess]: () => false,
  [onDeleteContactFailure]: () => false,
});

const filter = createReducer(phonebookState.filter, {
  [onChangeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
