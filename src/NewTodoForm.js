import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_DATA = {
    todo: "",
  };
  const [ formData, setFormData ] = useState(INITIAL_DATA);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INITIAL_DATA);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Enter new todo:</label>
      <input
        type="text"
        id="todo"
        name="todo"
        onChange={handleChange}
        value={formData.todo}
      />
      <button>Add</button>
    </form>
  );
};

export default NewTodoForm;
