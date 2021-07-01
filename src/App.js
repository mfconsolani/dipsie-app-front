import { useState } from 'react'
import axios from 'axios';
import InputField from './Components/Input/InputField.component';


function App() {

  const initialState = {
    candidate: "",
    id: "",
    currentSituation: "",
    motivationToChange: "",
    freelanceOrPerm: "",
    intermediaries: "",
    yearsInSap: "",
    coreModule: "",
    fullCycleImp: "",
    hanaExperience: "",
    referencias: "",
    englishLevel: "",
    dailyRate: "",
    availability: "",
    interviewAvail: "",
    otherProcess: "",
    counteroffer: "",
    fullname: "",
    birthday: "",
    permInAccenture: "",
    otherProvider: "",
    availableNow: "",
    mainSkills: ""
}

  const [formData, setFormData] = useState({...initialState})

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const { candidate, id, availableNow, mainSkills, ...rest} = formData
    console.log(referencias.value)
    axios.post('http://localhost:8080/interview/', {
      candidate,
      id,
      info: rest,
      availableNow,
      mainSkills
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    return setFormData({...initialState})
    
  }

  let referencias = {
    name: "referencias",
    type: "radio",
    value: "",
    titulo: "Mencion pedido de referencias"
}

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>

        { Object.entries(formData).map(value => {
          return (
            <InputField 
            key={value[0]} 
            name={value[0]} 
            value={value[1]} 
            onChange={handleInputChange}/>
            )
          })
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
