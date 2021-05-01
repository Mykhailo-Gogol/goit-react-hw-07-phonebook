import { createSelector } from 'reselect';

export const contactsSelector = state => state.phonebook.contacts;

export const filterSelector = state => state.phonebook.filter;

export const isLoadingSelector = state => state.phonebook.loading;

// RESELECT

export const contactsReselect = createSelector(
  contactsSelector,
  contacts => contacts,
);


export const filteredContactsSelector = createSelector(
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
