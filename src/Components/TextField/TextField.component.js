import React from 'react'
import './TextField.component.css'
import {Input} from '@geist-ui/react'


const TextField = ({ id, name, register }) => {
    // console.log(id)
    return (
      <div className="input-parent-div">
        <div>
          <label>{name}</label>
        </div>
        <Input
          clearable
          status="secondary"
         {...register(id, {
           required: true
         })} />
      </div>
    )
  }


export default TextField