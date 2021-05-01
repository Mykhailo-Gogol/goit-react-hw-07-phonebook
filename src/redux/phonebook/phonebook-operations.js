import axios from 'axios';
import phonebookActions from './phonebook-actions';

import { connectionErrorValidation } from '../../utils/notifications';

axios.defaults.baseURL = 'http://localhost:4000';

// FETCH CONTACTS
const fetchContactOperation = payload => dispatch => {
  dispatch(phonebookActions.onFetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(phonebookActions.onFetchContactsSuccess(data)))
    .catch(error => {
      connectionErrorValidation(error.message);
      dispatch(phonebookActions.onFetchContactsFailure(error));
    });
};

// ADD
const addContactOperation = payload => dispatch => {
  const contact = {
    ...payload,
    favourite: false,
  };

  dispatch(phonebookActions.onAddContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(phonebookActions.onAddContactSuccess(data)))
    .catch(error => {
      connectionErrorValidation(error.message);
      dispatch(phonebookActions.onAddContactFailure(error));
    });
};

// DELETE
const deleteContactOperation = id => dispatch => {
  dispatch(phonebookActions.onDeleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phonebookActions.onDeleteContactSuccess(id)))
    .catch(error => {
      connectionErrorValidation(error.message);
      dispatch(phonebookActions.onDeleteContactFailure(error));
    });
};

// TOGGLE
const toggleContactFavourite = ({ id, favourite }) => dispatch => {
  dispatch(phonebookActions.onToggleFavouriteRequest());

  const update = { favourite };

  axios
    .patch(`/contacts/${id}`, update)
    .then(({ data }) =>
      dispatch(phonebookActions.onToggleFavouriteSuccess(data)),
    )
    .catch(error => {
      connectionErrorValidation(error.message);
      dispatch(phonebookActions.onToggleFavouriteFailure(error));
    });
};

const operations = {
  fetchContactOperation,
  addContactOperation,
  deleteContactOperation,
  toggleContactFavourite,
};

export default operations;
