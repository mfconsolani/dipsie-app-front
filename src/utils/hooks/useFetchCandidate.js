import React, { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios'


const useFetchCandidate = (userId) => {
    const [candidateData, setCandidateData] = useState(null)
    const [entrySelected, setEntrySelected] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (userId !== null) {
            setIsLoading(true)
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
                    setEntrySelected([candidate.candidateInfo[0]])
                }).catch(err => {
                    console.log({
                        'Response Status': {
                            'status': err.response.status,
                            'data': err.response.data || err
                        }
                    })
                    setError(true)
                }).finally(() => setIsLoading(false))
        }
        else {
            setCandidateData(null)
            setEntrySelected(null)
        }
    }, [userId])

    return { error, isLoading, candidateData, entrySelected, setEntrySelected }
}

export default useFetchCandidate;