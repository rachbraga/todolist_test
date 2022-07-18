import "./style.css";

function TodoList({ todos, handleTodo }) {
  return (
    <ul>
      <p> Tarefas</p>
      {todos.map(function (todo, index) {
        return (
          <li key={index}>
            {todo}
            <button className="excluir" onClick={() => handleTodo(todo)}>
              {" "}
              Concluir tarefa{" "}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default TodoList;
