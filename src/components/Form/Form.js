// import shortid from "shortid";
import { useState } from "react";
import { form_input, contact_form } from "./Form.module.scss";

// Meterial
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

// Toastyfy
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { nameInputValidation, numberInputValidation } from "../../utils/toast";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addContactOperation } from "../../redux/phonebook/operations";

const Form = () => {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: "",
    number: "+380",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({
      ...contact,
      [name]: value.charAt(0).toUpperCase() + value.slice(1),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmitHandler(contact);
  };

  const reset = () => {
    setContact({
      name: "",
      number: "+380",
    });
  };

  const formSubmitHandler = ({ name, number }) => {
    const testName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
      name
    );

    const testNumber = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(
      number
    );
    const contactDuplicateValidation = () =>
      toast.warn(`${name} is already in contacts!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    if (contacts.some((contact) => contact.name === name)) {
      contactDuplicateValidation();
    } else if (testName !== true) {
      nameInputValidation();
    } else if (testNumber !== true) {
      numberInputValidation();
    } else {
      dispatch(addContactOperation({ name, number }));
      reset();
    }
  };

  return (
    <>
      <form
        className={contact_form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Name"
          className={form_input}
          inputProps={{ "aria-label": "contact name" }}
          type="text"
          onChange={handleInputChange}
          name="name"
          value={contact.name}
          id="name"
          required
          variant="outlined"
        />
        <Input
          placeholder="Number"
          className={form_input}
          inputProps={{ "aria-label": "contact number" }}
          type="tel"
          onChange={handleInputChange}
          name="number"
          value={contact.number}
          id="number"
          required
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
