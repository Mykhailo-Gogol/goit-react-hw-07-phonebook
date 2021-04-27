import "./App.css";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

// Material
// import { green } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      {/* <Typography variant="h4" component="h1" color="disabled">
        Phonebook
      </Typography> */}
      <Form className="form" />
      <h2>Contacts</h2>
      {/* <Typography variant="h5" component="h2" color="disabled">
        Contacts
      </Typography> */}
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
