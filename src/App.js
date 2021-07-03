import React from 'react'
import {InputField, RadioField} from './Components';
import { useFormContext } from './utils/hooks'

function App() {

  const {formData, handleInputChange, handleOnSubmit, handleRadioChange} = useFormContext()
  
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
