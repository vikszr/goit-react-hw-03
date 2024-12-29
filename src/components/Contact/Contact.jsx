import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <BsFillPersonFill className={css.icon} size="16" />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={css.icon} size="16" />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
