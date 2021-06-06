import { useState } from 'react'
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    candidate: "",
    id: "",
    info: {},
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
        <label id="candidate">Full Name</label>
        <input htmlFor="candidate" name="candidate" onChange={handleInputChange}></input>
        <label id="id">Id Candidato</label>
        <input htmlFor="id" name="id" onChange={handleInputChange}></input>
        {/* <label id="info">Info</label>
        <input htmlFor="info" name="info" onChange={handleInputChange}></input> */}
        <label id="availableNow">availableNow</label>
        <input htmlFor="availableNow" name="availableNow" onChange={handleInputChange}></input>
        <label id="mainSkills">mainSkills</label>
        <input htmlFor="mainSkills" name="mainSkills" onChange={handleInputChange}></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
