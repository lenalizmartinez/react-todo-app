import { TodoList, TodoAdd } from "./components";
import { useTodo } from "./hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <div className="container mt-4">
      <h1>
        ToDo App: {todosCount}, <small>pendientes: {pendingCount} </small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <h3>List TODO</h3>
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h3>New TODO</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
