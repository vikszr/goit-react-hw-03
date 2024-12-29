import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ data, onDelete }) {
  return (
    <ul className={css.container}>
      {data.map((contact) => (
        <li key={contact.id}>
          {<Contact data={contact} onDelete={onDelete} />}
        </li>
      ))}
    </ul>
  );
}
