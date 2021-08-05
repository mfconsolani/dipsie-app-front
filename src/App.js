import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useFormContext, useFetchCandidate } from './utils/hooks';
import { DataField, MainInfo, EntryForm, Button, SearchForm, SelectField } from "./Components"
import { Row, Page, Grid, Loading, Spacer } from '@geist-ui/react'
import './App.css'
import { Toaster } from 'react-hot-toast';

//TODO
// Chequear el pasamanos de funciones que estoy haciendo con los handleSubmit
// Cuando busco nuevos candidatos se vuelve a renderizar todo
//TODO check error status when no internet connection available

function App() {

  const [renderView, setRenderView] = useState({ loadInfo: false, getInfo: false })
  const [userId, setUserId] = useState(null)
  // const [candidateData, setCandidateData] = useState(null)
  // const [entrySelected, setEntrySelected] = useState(null)


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

  const {
    error,
    isLoading,
    candidateData,
    entrySelected,
    setEntrySelected
  } = useFetchCandidate(userId)


  function searchCandidate() {
    return setRenderView({ loadInfo: false, getInfo: true })
  }

  function postEntry() {
    return setRenderView({ loadInfo: true, getInfo: false })
  }

  function searchId(event) {
    event.preventDefault()
    return setUserId(event.target.idCandidate.value)
  }

  function selectEntry(value) {
    const dateSelected = candidateData.candidateInfo.filter(element => {
      return element.postSavingDate === value
    })
    return setEntrySelected(dateSelected)
  }

  return (
    <div className="App">
      <div><Toaster /></div>
      <Page size="large">
        <Page.Header style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="gradient-text">Dipsie</h2>
          <Grid justify="end" style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
            <Button onClick={searchCandidate} name="Buscar Candidato" />
            <Button onClick={postEntry} name="Cargar información" />
          </Grid>
        </Page.Header>
        <Page.Content>
          {renderView.loadInfo && <EntryForm register={register} onSubmit={handleSubmit(handleOnSubmit)} />}
          {renderView.getInfo &&
            <div>
              <Row style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1em" }}>
                <SearchForm label="ID Candidato" onSubmit={searchId} />
                {candidateData && entrySelected ?
                  <SelectField entry={entrySelected} onChange={selectEntry} candidate={candidateData} />
                  : null}
              </Row>
              {isLoading &&
                  <Row style={{ padding: '10px 0', marginTop: "1em" }}>
                    <Loading>Cargando</Loading>
                  </Row>
              }

              {entrySelected &&
                <div>
                  <MainInfo
                    id={candidateData.candidateId}
                    name={candidateData.candidateName}
                    skills={candidateData.mainSkills}
                    availability={candidateData.availableNow}
                    {...candidateData}
                  />
                  <DataField entry={entrySelected[0]} />
                </div>
              }
            </div>
          }
        </Page.Content>
      </Page>
    </div>

  );
}

export default App;
