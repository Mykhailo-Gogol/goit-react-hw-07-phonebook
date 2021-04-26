import axios from "axios";
import {
  onAddContactRequst,
  onAddContactSuccess,
  onAddContactFailure,
} from "./actions";

axios.defaults.baseURL = "http://localhost:4000";

export const addContactOperation = (payload) => (dispatch) => {
  const contact = {
    ...payload,
    favourite: false,
  };

  dispatch(onAddContactRequst());

  axios
    .post("/contacts", contact)
    .then(({ data }) => {
      dispatch(onAddContactSuccess(data));
    })
    .catch((error) => dispatch(onAddContactFailure(error)));
};
