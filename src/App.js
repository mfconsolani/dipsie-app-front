import React, { useState } from 'react'
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useFormContext } from './utils/hooks/index';
import axios from 'axios'
import './App.css'
import { INPUT_FIELDS } from './variables.js';
import InputField from "./Components/Input/InputField.component"
import RadioInput from "./Components/radioInput/RadioField.component"

function App() {

  const [renderView, setRenderView] = useState({
    loadInfo: false,
    getInfo: false
  })
  const [userId, setUserId] = useState(null)
  const [candidateInfo, setCandidateInfo] = useState(null)
  const [postDates, setPostDates] = useState(null)
  const [postDateSelected, setPostDateSelected] = useState(null)


  const {
    handleOnSubmit
  } = useFormContext();

  const {
    register,
    handleSubmit,
    reset,
    formState
  } = useForm();

  const onSubmit = data => {
    handleOnSubmit(data)
  }

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  React.useEffect(() => {
    axios.get(`http://localhost:8080/interview/${userId}`)
      .then(res => {
        console.log({
          'Response Status': {
            'status': res.status,
            'data': res.data
          }
        })
        const candidateData = res.data.Candidato[0]
        setCandidateInfo(candidateData)
        const dates = res.data.Candidato[0].candidateInfo.map(element => {
            // console.log(moment(element.postSavingDate).format("LLL"))
            element.postSavingDate = moment(new Date(element.postSavingDate)).format("LLL")
          return moment(new Date(element.postSavingDate)).format("LLL")
        })
        setPostDates(dates)
        setPostDateSelected([res.data.Candidato[0].candidateInfo[0]])
        return
      }).catch(err => {
        console.log({
          'Response Status': {
            'status': err.response.status,
            'data': err.response.data
          }})
        return setUserId(null)
  })
  return
}, [userId])

React.useEffect(() => {
  if (!userId) {
    setPostDateSelected(null)
    setPostDates(null)
  }
}, [userId]);


return (
  <div className="App">

    <div>
      <div>
        <button onClick={() => {
          setRenderView({ loadInfo: false, getInfo: true })
        }}
        >Buscar Candidato</button>
      </div>
      <div>
        <button onClick={() => {
          setRenderView({ loadInfo: true, getInfo: false })
        }}
        >Cargar información</button>
      </div>
    </div>

    {renderView.loadInfo && <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.entries(INPUT_FIELDS).map(entry => {
          if (entry[1].type === "text") {
            return (
              <div key={entry[0]}>
                <InputField
                  id={entry[0]}
                  name={entry[1].name}
                  value={entry[1].value}
                  register={register}
                />
              </div>
            )
          } else {
            return (
              <div key={entry[1].name}>
                <RadioInput
                  titulo={entry[1].titulo}
                  name={entry[1].name}
                  type={entry[1].type}
                  register={register}
                />
              </div>
            )
          }
        })
        }
        <button type="submit">Enviar</button>
      </form>
    </div>}

    {renderView.getInfo &&
      <form onSubmit={(event) => {
        event.preventDefault()
        setUserId(event.target.idCandidate.value)
      }
      }>
        <div>
          <label>ID Candidato</label>
          <input type="text" id="idCandidate" required />
          <button type="submit">Buscar</button>

          {postDates &&

            <select onChange={(event) => {
              // console.log(event.target.value)
              const dateSelected = candidateInfo.candidateInfo.filter(element => {
                return element.postSavingDate === event.target.value
              })
              setPostDateSelected(dateSelected)
            }}>
              {postDates.map(element => {
                return (<option
                  key={element}
                  value={element}>
                  {element}</option>)
              })}
            </select>}
        </div>
        {postDateSelected &&
          <div>
            <div>
              <div>
                <span>ID: </span><span>{candidateInfo.candidateId}</span>
              </div>
              <div>
                <span>Name: </span><span>{candidateInfo.candidateName}</span>
              </div>
              <div>
                <span>Main Skills: </span><span>{candidateInfo.mainSkills}</span>
              </div>
            </div>
            {Object
              .entries(postDateSelected[0])
              .filter(element => element[0] !== "_id")
              .map(element => {
                Object.entries(INPUT_FIELDS).map(values => {
                  if (values[0] === element[0]) {
                    element[2] = values[1].name
                  }
                  return values[1].name
                })
                return (
                  <div key={element[0]}>
                    <span>{element[2]}: </span>
                    <span>{element[1]}</span>
                  </div>)
              })}
          </div>
        }
      </form>
    }
  </div>

);
}

export default App;
