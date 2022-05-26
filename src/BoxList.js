import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [ boxes, setBoxes ] = useState([]);
  const addBox = newBox => {
    setBoxes(boxes => [ ...boxes, { ...newBox, id: uuid() } ]);
  };
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };
  return (
    <div>
      <h1>Create a Box 📦</h1>
      <div>
        <NewBoxForm addBox={addBox} />
      </div>
      {boxes.map(({ width, height, backgroundColor, id }) => (
        <Box
          id={id}
          key={id}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          handleRemove={remove}
        />
      ))}
    </div>
  );
};

export default BoxList;
