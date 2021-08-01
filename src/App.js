import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useFormContext } from './utils/hooks/index';
import { INPUT_FIELDS } from './variables.js';
import { TextField, RadioField, DataField, MainInfo } from "./Components"
import moment from 'moment';
import axios from 'axios'
import './App.css'

function App() {

  const [renderView, setRenderView] = useState({
    loadInfo: false,
    getInfo: false
  })
  const [userId, setUserId] = useState(null)
  const [candidateData, setCandidateData] = useState(null)
  const [entrySelected, setEntrySelected] = useState(null)


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
    if (userId !== null) {
      axios.get(`http://localhost:8080/interview/${userId}`)
        .then(res => {
          console.log({
            'Response Status': {
              'status': res.status,
              'data': res.data
            }
          })
          const candidate = res.data.Candidato[0]
          setCandidateData(candidate)
          candidate.candidateInfo.map(element => {
            element.postSavingDate = moment(new Date(element.postSavingDate)).format('lll')
            return null
          })
          setEntrySelected([candidate.candidateInfo[0]])
          return
        }).catch(err => {
          console.log(err)
          console.log({
            'Response Status': {
              'status': err.response.status,
              'data': err.response.data
            }
          })
          return
        })
    }
    return
  }, [userId])

  React.useEffect(() => {
    if (!userId) {
      setEntrySelected(null)
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
                  <TextField
                    id={entry[0]}
                    name={entry[1].name}
                    value={entry[1].value}
                    register={register}
                  />
              )
            } else {
              return (
                  <RadioField
                    titulo={entry[1].titulo}
                    name={entry[1].name}
                    type={entry[1].type}
                    register={register}
                  />
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

            {candidateData &&

              <select onChange={(event) => {
                const dateSelected = candidateData.candidateInfo.filter(element => {
                  return element.postSavingDate === event.target.value
                })
                console.log(dateSelected)
                setEntrySelected(dateSelected)
              }}>

                {candidateData.candidateInfo.map((element) => {
                  return (<option
                    key={element._id}
                    value={element.postSavingDate}>
                    {element.postSavingDate}</option>)
                })}
              </select>}
          </div>
          {entrySelected &&
            <div>
              <MainInfo
                id={candidateData.candidateId}
                name={candidateData.candidateName}
                skills={candidateData.mainSkills}
              />
              <DataField
                entry={entrySelected[0]}
                />
            </div>
          }
        </form>
      }
    </div>

  );
}

export default App;
