import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [ todos, setTodos ] = useState([]);

  const addTodo = formData => {
    setTodos(todos => [ ...todos, { ...formData, id: uuid() } ]);
  };

  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List ✅</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(({ todo, id }) => (
          <Todo todo={todo} id={id} handleRemove={remove} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
