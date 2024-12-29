import css from "./App.module.css";
import "modern-normalize";
import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import initialData from "./assets/data.json";

function App() {
  const [data, setData] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialData;
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(data));
  }, [data]);

  const addContact = (newContact) => {
    setData((prevData) => {
      return [...prevData, newContact];
    });
  };

  const deleteContact = (id) => {
    setData((prevData) => prevData.filter((contact) => contact.id !== id));
  };

  const searchResult = data.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchQuery} onFilter={setSearchQuery} />
      <ContactList data={searchResult} onDelete={deleteContact} />
    </div>
  );
}

export default App;
