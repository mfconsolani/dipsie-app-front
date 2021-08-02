import './TextField.component.css'

const TextField = ({ id, name, value, register }) => {
    // console.log(id)
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


export default TextField