import { createSelector } from 'reselect';

// SELECTORS

const contactsSelector = state => state.phonebook.contacts;

const filterSelector = state => state.phonebook.filter;

const isLoadingSelector = state => state.phonebook.loading;

// RESELECT

const contactsReselect = createSelector(contactsSelector, contacts => contacts);

const filteredContactsSelector = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.toLowerCase().includes(normalizeFilter),
    );
  },
);

const selectors = {
  contactsSelector,
  filterSelector,
  isLoadingSelector,
  contactsReselect,
  filteredContactsSelector,
};

export default selectors;
