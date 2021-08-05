import React from 'react'
import './TextField.component.css'
import { Input } from '@geist-ui/react'


const TextField = ({ id, name, register }) => {
  // console.log(id)
  return (
    // <div className="input-parent-div">
    //   <div>
        <label className="has-float-label">

          <input
            // status="warning"
            // clearable
            // status="secondary"
            {...register(id, {
              required: true
            })}
            placeholder={name}
          />
          <span>{name.toUpperCase()}</span>
        </label>
    //   </div>
    // </div>
  )
}


export default TextField