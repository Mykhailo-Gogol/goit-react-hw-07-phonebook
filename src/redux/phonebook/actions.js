import { createAction } from "@reduxjs/toolkit";

// FETCH CONTACTS
export const onFetchContactsRequest = createAction(
  "phonebook/FETCH_CONTACTS_R"
);
export const onFetchContactsSuccess = createAction(
  "phonebook/FETCH_CONTACTS_S"
);
export const onFetchContactsFailure = createAction(
  "phonebook/FETCH_CONTACTS_F"
);

// ADD
export const onAddContactRequest = createAction("phonebook/ADD_CONTACT_R");
export const onAddContactSuccess = createAction("phonebook/ADD_CONTACT_S");
export const onAddContactFailure = createAction("phonebook/ADD_CONTACT_F");

// DELETE
export const onDeleteContactRequest = createAction(
  "phonebook/DELETE_CONTACT_R"
);
export const onDeleteContactSuccess = createAction(
  "phonebook/DELETE_CONTACT_S"
);
export const onDeleteContactFailure = createAction(
  "phonebook/DELETE_CONTACT_F"
);

// TOGGLE
export const onToggleFavouriteRequest = createAction(
  "phonebook/TOGGLE_FAVOURITE_R"
);
export const onToggleFavouriteSuccess = createAction(
  "phonebook/TOGGLE_FAVOURITE_S"
);
export const onToggleFavouriteFailure = createAction(
  "phonebook/TOGGLE_FAVOURITE_F"
);

// FILTER
export const onChangeFilter = createAction("phonebook/FILTER_CONTACT");


