import './App.css'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Row, Page, Loading} from '@geist-ui/react'
import { useFormContext, useFetchCandidate } from './utils/hooks';
import { DataField, MainInfo, EntryForm, Header, SearchAndSelect, ProfileCard, UnauthNote } from "./Components"
import { Route, Switch } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
//TODO check error status when no internet connection available




function App() {

  const [renderView, setRenderView] = useState({ loadInfo: false, getInfo: false })
  const [userId, setUserId] = useState(null)

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


  function searchCandidate() { setRenderView({ loadInfo: false, getInfo: true }) }

  function postEntry() { setRenderView({ loadInfo: true, getInfo: false }) }

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
          <Header onSearchCandidate={searchCandidate} onPostEntry={postEntry} />
        </Page.Header>
        <Page.Content>
        <Switch>
          <Route path="/profile" component={ProfileCard} />
        </Switch>


          {renderView.loadInfo &&
            <EntryForm
              register={register}
              onSubmit={handleSubmit(handleOnSubmit)}
            />}

          <UnauthNote/>            

          {renderView.getInfo &&
            <div>
              <SearchAndSelect
                onSubmit={searchId}
                label="ID Candidato"
                entry={entrySelected}
                onChange={selectEntry}
                candidate={candidateData} />

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
