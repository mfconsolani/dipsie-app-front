import React from 'react'
import './RadioField.component.css'

const RadioField = ({ titulo, type, name, register }) => {

  return (
    <div>
      <p className="radioStyle">{titulo.toUpperCase()}</p>
      <div className="input-container">
      <div>
        <input
          type={type}
          id= {name + "Si"}
          value = "true"        
          {...register(name)}
        />
        <label className="radio-label-style" htmlFor={name + "Si"}> Si</label>
      </div>

      <div>
        <input
          type={type}
          id= {name + "No"}
          value = "false"
          {...register(name)}
          defaultChecked
           />
        <label className="radio-label-style" htmlFor={name + "No"}> No</label>
      </div>
      </div>
    </div>
  )
}

export default RadioField;