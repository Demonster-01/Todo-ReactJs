import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ setTodos, todos }) {
  // const [todo, setTodo] = useState("");

  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.name.trim()) {
      return; // Exit if todo name is empty or only contains whitespace
    }
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <>
      {" "}
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="enter todo item.."
            required
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
