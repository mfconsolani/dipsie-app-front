import './InputField.component.css'

const InputField = ({ id, name, value, register }) => {

    return (
      <div className="input-parent-div">
        <div>
          <label>{name}</label>
        </div>
        <input {...register(id, {
          id: id,
          type: "text",
          value: value,
          required: { value: true, message: "Campo requerido" }
        })} />
      </div>
    )
  }


export default InputField