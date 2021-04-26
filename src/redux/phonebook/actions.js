import types from "./types";
import { createAction } from "@reduxjs/toolkit";

export const onAddContactRequst = createAction(types.ADD_CONTACT_R);
export const onAddContactSuccess = createAction(types.ADD_CONTACT_S);
export const onAddContactFailure = createAction(types.ADD_CONTACT_F);

export const onAddContact = createAction(types.ADD_CONTACT);

export const onRemoveContact = createAction(types.REMOVE_CONTACT);

export const onChangeFilter = createAction(types.FILTER_CONTACT);
