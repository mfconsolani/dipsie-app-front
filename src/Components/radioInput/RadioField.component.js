import './RadioField.component.css'

const RadioInput = ({ titulo, type, name, register }) => {

  return (
    <div>
      <p>{titulo}</p>
      <div>
        <input
          type={type}
          id= {name + "Si"}
          value = "true"        
          {...register(name)}
        />
        <label htmlFor={name + "Si"}>Si</label>
      </div>

      <div>
        <input
          type={type}
          id= {name + "No"}
          value = "false"
          {...register(name)}
          defaultChecked
           />
        <label htmlFor={name + "No"}>No</label>
      </div>
    </div>
  )
}

export default RadioInput;