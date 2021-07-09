import "./RadioField.component.css";

const RadioInput = ({ titulo, type, name, onChange }) => {
  const handleRadioChange = (event) => {
    onChange(event);
  };

  return (
    <div>
      <p>{titulo}</p>
      <div>
        <input
          type={type}
          id={name + "Si"}
          name={name}
          value="true"
          onChange={handleRadioChange}
        />
        <label htmlFor="refSi">Si</label>
      </div>

      <div>
        <input
          type={type}
          id={name + "No"}
          name={name}
          value="false"
          onChange={handleRadioChange}
          defaultChecked
        />
        <label htmlFor={name + "No"}>No</label>
      </div>
    </div>
  );
};

export default RadioInput;
