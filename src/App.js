import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Comp
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';

// REDUX
import { useSelector } from 'react-redux';
import {
  isLoadingSelector,
  contactsSelector,
} from './redux/phonebook/selectors';

const App = () => {
  const isLoading = useSelector(isLoadingSelector);
  const contactsLength = useSelector(contactsSelector).length;

  return (
    <div className="container">
      {isLoading && <Loader />}
      <div style={isLoading ? { filter: 'blur(20px)' } : null}>
        <h1>Phonebook</h1>
        <Form />
        {contactsLength > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
