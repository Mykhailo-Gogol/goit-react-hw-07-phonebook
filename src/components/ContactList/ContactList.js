import { useEffect } from "react";

import {
  contact_item,
  contact_text,
  button_group,
  contact_list,
} from "./ContactList.module.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchContactOperation,
  deleteContactOperation,
  toggleContactFavourite,
} from "../../redux/phonebook/operations";

// Material
import Button from "@material-ui/core/Button";
import BackspaceTwoToneIcon from "@material-ui/icons/BackspaceTwoTone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { green } from "@material-ui/core/colors";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.phonebook.contacts);
  const filter = useSelector((state) => state.phonebook.filter);

  useEffect(() => {
    dispatch(fetchContactOperation());
  }, []);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = (id) => {
    return dispatch(deleteContactOperation(id));
  };

  const handleToggleFavourite = (update) => {
    return dispatch(toggleContactFavourite(update));
  };

  return (
    <>
      {filteredContacts().length ? (
        <ol className={contact_list}>
          {filteredContacts().map(({ name, number, id, favourite }) => {
            return (
              <li key={name} className={contact_item}>
                <p className={contact_text}>
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <div className={button_group}>
                  <Button
                    className="delete-button"
                    onClick={() => handleDeleteContact(id)}
                  >
                    <BackspaceTwoToneIcon color="disabled" />
                  </Button>

                  <Button
                    className="favourite-button"
                    onClick={() =>
                      handleToggleFavourite({ id, favourite: !favourite })
                    }
                  >
                    {favourite ? (
                      <BookmarkIcon style={{ color: green[500] }} />
                    ) : (
                      <BookmarkBorderIcon color="disabled" />
                    )}
                  </Button>
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
};

export default ContactList;
