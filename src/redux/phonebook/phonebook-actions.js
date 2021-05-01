import { createAction } from '@reduxjs/toolkit';

// FETCH CONTACTS
const onFetchContactsRequest = createAction('phonebook/FETCH_CONTACTS_R');
const onFetchContactsSuccess = createAction('phonebook/FETCH_CONTACTS_S');
const onFetchContactsFailure = createAction('phonebook/FETCH_CONTACTS_F');

// ADD
const onAddContactRequest = createAction('phonebook/ADD_CONTACT_R');
const onAddContactSuccess = createAction('phonebook/ADD_CONTACT_S');
const onAddContactFailure = createAction('phonebook/ADD_CONTACT_F');

// DELETE
const onDeleteContactRequest = createAction('phonebook/DELETE_CONTACT_R');
const onDeleteContactSuccess = createAction('phonebook/DELETE_CONTACT_S');
const onDeleteContactFailure = createAction('phonebook/DELETE_CONTACT_F');

// TOGGLE
const onToggleFavouriteRequest = createAction('phonebook/TOGGLE_FAVOURITE_R');
const onToggleFavouriteSuccess = createAction('phonebook/TOGGLE_FAVOURITE_S');
const onToggleFavouriteFailure = createAction('phonebook/TOGGLE_FAVOURITE_F');

// FILTER
const onChangeFilter = createAction('phonebook/FILTER_CONTACT');

const actions = {
  onFetchContactsRequest,
  onFetchContactsSuccess,
  onFetchContactsFailure,
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
};

export default actions;
