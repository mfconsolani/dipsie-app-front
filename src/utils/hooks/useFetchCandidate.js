import { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios'
import toast from 'react-hot-toast';

//TODO
// ver con nacho lo que hice en la linea 19: setear la entry a false pq no se me actualizaba el initialvalue del selectField


const useFetchCandidate = (userId) => {
    const [candidateData, setCandidateData] = useState(null)
    const [entrySelected, setEntrySelected] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (userId !== null) {
            setIsLoading(true)
            setEntrySelected(null)
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
                    if (err.response.data.Candidato === "Candidato no encontrado"){
                        toast.error(err.response.data.Candidato, {
                            position: "bottom-center"
                        })
                        setCandidateData(null)
                    } else {
                        console.log({
                            'Response Status': {
                                'status': err.response.status,
                                'data': err.response.data || err
                            }})
                    }
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