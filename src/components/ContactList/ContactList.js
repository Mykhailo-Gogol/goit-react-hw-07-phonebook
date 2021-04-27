import { useSelector, useDispatch } from "react-redux";
import {
  deleteContactOperation,
  toggleContactFavourite,
} from "../../redux/phonebook/operations";

const ContactList = () => {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const filter = useSelector((state) => state.phonebook.filter);

  const dispatch = useDispatch();

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
        <ol className="contact-list">
          {filteredContacts().map(({ name, number, id, favourite }) => {
            return (
              <li key={name}>
                <p className="contact-text">
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteContact(id)}
                >
                  Delete
                </button>
                <button
                  className="favourite-button"
                  onClick={() =>
                    handleToggleFavourite({ id, favourite: !favourite })
                  }
                >
                  {favourite ? "Delete from favourite" : "Add to favourite"}
                </button>
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
