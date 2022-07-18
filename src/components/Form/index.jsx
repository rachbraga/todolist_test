import "./style.css";
import { useState } from "react";

function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Digite aqui"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button type="submit" onClick={() => addTodo(userInput)}>
        {" "}
        Enviar{" "}
      </button>
    </form>
  );
}
export default Form;

//
