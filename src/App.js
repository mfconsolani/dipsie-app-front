import { useState } from 'react'
import axios from 'axios';
import Input from './Components/Input/Input.component';


function App() {

  const [formData, setFormData] = useState(
    {
    candidate: "",
    id: "",
    info: {
      currentSituation: "",
      motivationToChange: "",
      freelanceOrPerm: "",
      inermediaries: "",
      yearsInSap: "",
      coreModule: "",
      fullCycleImp: "",
      hanaExperience: "",
      referencias: false,
      englishLevel: "",
      dailyRate: "",
      availability: "",
      interviewAvail: "",
      otherProcess: "",
      counteroffer: "",
      fullname: "",
      birthday: "",
      permInAccenture: "",
      otherProvider: ""
    },
    availableNow: "",
    mainSkills: ""
  })

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }



  const handleOnSubmit = (event) => {
    event.preventDefault()

    axios.post('http://localhost:8080/interview/', formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        { Object.entries(formData).filter(value => {
          console.log(value)
          return value[1] === ""
        }).map(value => {
          return <Input key={value[0]} value={value[0]} onChange={handleInputChange} />
        })
        }
        
        { Object.entries(formData).filter(value => {
          return value[1] !== ""
        }).map(value => {
          console.log(value[1])
          return (
            <div key={value[0]}>
              <p>{value[0]}</p>
              { Object.keys(value[1]).map(key => {
                return <Input key={key} value={key} onChange={handleInputChange} />
              })}
            </div>
            )
        })
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
