import { useState } from 'react'
import axios from 'axios';
// import Input from './Components/Input/Input.component';
// import { TextField } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
// import { Input } from '@material-ui/core';



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
    // console.log(event.target.name)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const { candidate, id, availableNow, mainSkills, ...rest} = formData
    console.log(formData)
    axios.post('http://localhost:8080/interview/', {
      candidate,
      id,
      info: rest,
      availableNow,
      mainSkills
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    console.log(initialState)
    return setFormData({...initialState})
    
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>

        {/* TODO */}
        {/* Crear mi propio componente de label e input y usar las 
        funciones comentadas de abajo para poder
        loopear sobre el estado y crear los inputs y labels  */}

        { Object.entries(formData).map(value => {
          // if (value[0] === "info") {
              return (
                <div key={value[0]}>
                <label>{value[0]}</label>
                <input type="text" name={value[0]} value={value[1]} onChange={handleInputChange}/>
                </div>
              )              
              // console.log(value[1].currentSituation)
          // } else {
          //   return (
          //     <div key={value[0]}>
          //     <label>{value[0]}</label>
          //     <input type="text" name={value[0]} onChange={handleInputChange}/>
          //     </div>
          //   )
          // }
          // return <Input key={value[0]} name={value[0]} onChange={handleInputChange}/>
        })
        }
        
        {/* { Object.entries(formData).filter(value => {
          return value[1] !== ""
        }).map(value => {
          console.log(value[1])
          return (
            <div key={value[0]}>
              <p>{value[0]}</p>
              { Object.keys(value[1]).map(key => {
                return <Input key={key} name={key} onChange={handleInputChange} />
              })}
            </div>
          )})
        } */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
