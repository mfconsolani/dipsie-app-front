import "./InputField.component.css";

const InputField = ({ id, name, value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event);
  };

  return (
    <div className="input-parent-div">
      <div>
        <label>{name}</label>
      </div>
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
