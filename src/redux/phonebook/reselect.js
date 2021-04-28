import { createSelector } from 'reselect';

export const contactsSelector = state => state.phonebook.contacts;

export const filterSelector = state => state.phonebook.filter;

export const isLoadingSelector = state => state.phonebook.loading;

// RESELECT

const normalizedFilter = state => filterSelector(state).toLowerCase();

export const filteredContactsSelector = createSelector(
  [contactsSelector, normalizedFilter],
  (contacts, filterValue) =>
    contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filterValue) ||
        contact.number.toLowerCase().includes(filterValue)
      );
    }),
);
