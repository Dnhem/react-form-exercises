import "./Box.css";

const Box = ({
  width,
  height,
  backgroundColor,
  id,
  margin = 5,
  handleRemove,
}) => {
  const remove = () => handleRemove(id);
  return (
    <div className="Box-container">
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor,
          margin,
        }}
      />
      <button onClick={remove} className="Box-button">
        X
      </button>
    </div>
  );
};
export default Box;
