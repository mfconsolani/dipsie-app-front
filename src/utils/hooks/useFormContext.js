import {useState} from 'react'
import axios from 'axios'
import { INPUT_FIELDS } from '../../variables'

/** * 
 * @typedef {Object} FormContext
 * @property {function} handleInputChange
 * @property {function} handleRadioChange
 * @property {function} handleOnSubmit
 * @property {object} formData   
 */

/**
 * @returns {FormContext} 
 */
const useFormContext = () => {
    const [formData, setFormData] = useState({...INPUT_FIELDS})

    const handleInputChange = (event) => {
        const { value, ...rest } = formData[event.target.id]
        setFormData({
      ...formData,
      [event.target.id]: {
          ...rest,
          value: event.target.value
        }
        })
    }
    const handleRadioChange = (event) => {
        const { value, ...rest } = formData[event.target.name]
        console.log(value, rest)
        setFormData({
            ...formData,
            [event.target.name]: {
                ...rest,
                value: event.target.value
            }
        })
    }

    const handleOnSubmit = (data) => {
        const { candidate, id, availableNow, mainSkills, ...rest} = data
    
        axios.post('http://localhost:8080/interview/', {
          candidate,
          id,
          info: {...rest},
          availableNow,
          mainSkills
        })
        .then(res => {
          console.log({'Response Status': {
            'status': res.status,
            'data': res.data}
          })
        })
        .catch(err => console.log({'Response Status': {
          'status': err.status,
          'data': err.data}
        }))
        return  
        
      }
    
    return {handleInputChange, handleRadioChange, handleOnSubmit, formData}
}

export default useFormContext