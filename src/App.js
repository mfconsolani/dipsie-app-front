import { useEffect, useState } from 'react'
import axios from 'axios';
import InputField from './Components/Input/InputField.component';
import RadioField from './Components/radioInput/RadioField.component';
import { INPUT_FIELDS } from './variables';

function App() {

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
    return
  }

  // useEffect(() => {
  //   console.log(formData.referencias)
  // }, [formData]) 

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
    return
  }

  const flattenAttributes = (object) => {
    let customProps = {}
    Object.entries(object).map(values => {
      let newValue = {[values[0]]: values[1].value}
      return Object.assign(customProps, newValue) 
    })
    return customProps
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const { candidate, id, availableNow, mainSkills, ...rest} = formData

    axios.post('http://localhost:8080/interview/', {
      candidate: candidate.value,
      id: id.value,
      info: flattenAttributes(rest),
      availableNow: availableNow.value,
      mainSkills: mainSkills.value
    })
    .then(res => {
      console.log({'Response Status': {
        'status': res.status,
        'data': res.data}
      })
      setFormData({...INPUT_FIELDS})
    })
    .catch(err => console.log(err.data))
    return  
    
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
      { Object.entries(formData).map(entry => {
        // console.log(entry)
        if (entry[1].type === "text"){
          return (
            <InputField
            id={entry[0]} 
            key={entry[0]} 
            name={entry[1].name} 
            value={entry[1].value} 
            onChange={handleInputChange}/>
            )
        } else if (entry[1].type === "radio"){
          return (
            <RadioField
            id={entry[0]} 
            key={entry[0]}
            titulo={entry[1].titulo}
            type={entry[1].type} 
            name={entry[1].name} 
            onChange={handleRadioChange}/>
            )
        }
        return formData
          })
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
