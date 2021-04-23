import "./App.css";
import axios from "axios";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

axios.get("http://localhost:4000/contacts").then(({ data }) => {
  console.log(data);
});

const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
