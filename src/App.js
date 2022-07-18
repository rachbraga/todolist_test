import "./App.css";
import { useState } from "react";
import Form from "./components/Form/index";
import TodoList from "./components/TodoList/index";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodo(item) {
    const itensFiltrados = todos.filter((itemTodo) => item !== itemTodo);
    setTodos(itensFiltrados);
  }

  return (
    <main>
      <h1> Lista De Tarefas</h1>
      <div className="form">
        <Form addTodo={addTodo}></Form>
      </div>
      <div className="itens">
        <TodoList todos={todos} handleTodo={handleTodo} />
      </div>
    </main>
  );
}

export default App;
