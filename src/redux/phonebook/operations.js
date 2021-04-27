import axios from "axios";
import {
  onAddContactRequest,
  onAddContactSuccess,
  onAddContactFailure,
  onDeleteContactRequest,
  onDeleteContactSuccess,
  onDeleteContactFailure,
  // onChangeFilter,
} from "./actions";

axios.defaults.baseURL = "http://localhost:4000";

export const addContactOperation = (payload) => (dispatch) => {
  const contact = {
    ...payload,
    favourite: false,
  };

  dispatch(onAddContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => {
      return dispatch(onAddContactSuccess(data));
    })
    .catch((error) => dispatch(onAddContactFailure(error)));
};

export const deleteContactOperation = (id) => (dispatch) => {
  dispatch(onDeleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(onDeleteContactSuccess(id)))
    .catch((error) => dispatch(onDeleteContactFailure(error)));
};
