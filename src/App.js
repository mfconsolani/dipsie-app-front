import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useFormContext } from './utils/hooks/index';
import { DataField, MainInfo, EntryForm, Button, SearchForm, SelectField } from "./Components"
import moment from 'moment';
import axios from 'axios'
import './App.css'

// TO DO
// Chequear el pasamanos de funciones que estoy haciendo con los handleSubmit
// Cuando busco nuevos candidatos se vuelve a renderizar todo

function App() {

  const [renderView, setRenderView] = useState({ loadInfo: false, getInfo: false })
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
          candidate.candidateInfo.map(element => {
            element.postSavingDate = moment(new Date(element.postSavingDate)).format('lll')
            return null
          })
          setCandidateData(candidate)
          // console.log(candidate.candidateInfo[0])
          setEntrySelected([candidate.candidateInfo[0]])
          return
        }).catch(err => {
          console.log({
            'Response Status': {
              'status': err.response?.request?.status,
              'data': err.response?.request?.data
            }
          })
          return
        })
    }
    return (setCandidateData(null), setEntrySelected(null))
  }, [userId])


  function searchCandidate() {
    return setRenderView({ loadInfo: false, getInfo: true })
  }

  function uploadEntry() {
    return setRenderView({ loadInfo: true, getInfo: false })
  }

  function searchId(event) {
    event.preventDefault()
    return setUserId(event.target.idCandidate.value)
  }

  function selectEntry(event) {
    const dateSelected = candidateData.candidateInfo.filter(element => {
      return element.postSavingDate === event.target.value
    })
    return setEntrySelected(dateSelected)
  }

  return (
    <div className="App">
      <Button onClick={searchCandidate} name="Buscar Candidato" />
      <Button onClick={uploadEntry} name="Cargar información" />
      {renderView.loadInfo && <EntryForm register={register} onSubmit={handleSubmit(handleOnSubmit)} />}
      {renderView.getInfo &&
        <div>
          <SearchForm onSubmit={searchId} />
          {candidateData && <SelectField onChange={selectEntry} candidate={candidateData} />}
          {entrySelected &&
            <div>
              <MainInfo
                id={candidateData.candidateId}
                name={candidateData.candidateName}
                skills={candidateData.mainSkills} />
              <DataField entry={entrySelected[0]} />
            </div>
          }
        </div>
      }
    </div>

  );
}

export default App;
