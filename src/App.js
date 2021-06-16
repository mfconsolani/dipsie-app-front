import { useState, useEffect } from 'react'
import axios from 'axios';
import Input from './Components/Input/Input.component';


function App() {

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    const inputFields = axios.get('http://localhost:8080/interview/inputFields')
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => console.log(err))
    console.log(inputFields)
    return 
  }, [])

  const handleOnSubmit = (event) => {
    event.preventDefault()

    axios.post('http://localhost:8080/interview/', formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        { Object.keys(formData).filter( key => {
          return typeof key === undefined
          }).map( element => {
            return <Input key={element} value={element} onChange={handleInputChange} />
          })
        }
        {/* <label id="candidate">Full Name</label>
        <input htmlFor="candidate" name="candidate" onChange={handleInputChange}></input>
        <label id="id">Id Candidato</label>
        <input htmlFor="id" name="id" onChange={handleInputChange}></input> */}
        {/* <label id="info">Info</label>
        <input htmlFor="info" name="info" onChange={handleInputChange}></input> */}
        {/* <label id="availableNow">availableNow</label>
        <input htmlFor="availableNow" name="availableNow" onChange={handleInputChange}></input>
        <label id="mainSkills">mainSkills</label>
        <input htmlFor="mainSkills" name="mainSkills" onChange={handleInputChange}></input> */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
