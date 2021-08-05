import React from 'react'
import './TextField.component.css'



const TextField = ({ id, name, register }) => {
  return (
        <label className="has-float-label">
          <input
            {...register(id, {
              required: true
            })}
            placeholder={name}
          />
          <span>{name.toUpperCase()}</span>
        </label>
  )
}


export default TextField