import { useState } from "react";

const NewBoxForm = ({ width, height, backgroundColor, addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        type="text"
        id="width"
        name="width"
        value={formData.width}
        placeholder="enter width"
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="text"
        id="height"
        name="height"
        value={formData.height}
        placeholder="enter height"
        onChange={handleChange}
      />
      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        name="backgroundColor"
        value={formData.backgroundColor}
        placeholder="enter color"
        onChange={handleChange}
      />
      <button>Create Box!</button>
    </form>
  );
};

export default NewBoxForm;
