import axios from "axios";
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
} from "./actions";

axios.defaults.baseURL = "http://localhost:4000";

// ADD
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

// DELETE
export const deleteContactOperation = (id) => (dispatch) => {
  dispatch(onDeleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(onDeleteContactSuccess(id)))
    .catch((error) => dispatch(onDeleteContactFailure(error)));
};

// TOGGLE
export const toggleContactFavourite = ({ id, favourite }) => (dispatch) => {
  dispatch(onToggleFavouriteRequest());

  const update = { favourite };

  axios
    .patch(`/contacts/${id}`, update)
    .then(({ data }) => dispatch(onToggleFavouriteSuccess(data)))
    .catch((error) => dispatch(onToggleFavouriteFailure(error)));
};
