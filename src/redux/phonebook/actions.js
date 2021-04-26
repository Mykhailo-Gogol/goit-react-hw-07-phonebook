import { createAction } from "@reduxjs/toolkit";

export const onAddContactRequest = createAction("phonebook/ADD_CONTACT_R");
export const onAddContactSuccess = createAction("phonebook/ADD_CONTACT_S");
export const onAddContactFailure = createAction("phonebook/ADD_CONTACT_F");

export const onDeleteContactRequest = createAction(
  "phonebook/DELETE_CONTACT_R"
);
export const onDeleteContactSuccess = createAction(
  "phonebook/DELETE_CONTACT_S"
);
export const onDeleteContactFailure = createAction(
  "phonebook/DELETE_CONTACT_F"
);

export const onChangeFilter = createAction("phonebook/FILTER_CONTACT");
