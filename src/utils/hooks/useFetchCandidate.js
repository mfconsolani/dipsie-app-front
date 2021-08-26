import { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios'
import toast from 'react-hot-toast';
import { useAuth0 } from "@auth0/auth0-react";

//TODO
// Once the server is ready to receive Secure API calls, it will be necessary to silenghtly ask
// for a token and then set the authorization header with the bearer credential with the token to 
// send it for the get request and also for the post request
// for that, check documentation here: https://auth0.com/blog/complete-guide-to-react-user-authentication/#Calling-an-API


const useFetchCandidate = (userId) => {
    const [candidateData, setCandidateData] = useState(null)
    const [entrySelected, setEntrySelected] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const serverUrl = process.env.REACT_APP_SERVER_URL
    const { getAccessTokenSilently } = useAuth0();
    
    useEffect(async () => {

        if (userId !== null) {
            try {
                const token = await getAccessTokenSilently();
                setIsLoading(true)
                setEntrySelected(null)
                const axiosResponse = await axios.get(`${serverUrl}/interview/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })

                console.log({
                    'Response Status': {
                        'status': axiosResponse.status,
                        'data': axiosResponse.data
                    }
                })

                const candidate = await axiosResponse.data.Candidato[0].candidates
                console.log(candidate)
                // console.log(candidate.candidateInfo)
                await candidate.candidateInfo.map(element => {
                    // console.log(element)
                    element.postSavingDate = moment(new Date(element.postSavingDate)).format('lll')
                    return null
                })
                setCandidateData(candidate)
                setEntrySelected([candidate.candidateInfo[0]])
            } catch (err) {
                if ((err.response && err.response.data.Candidato === "Candidato no encontrado")) {
                    toast.error(err.response.data.Candidato, {
                        position: "bottom-center"
                    })
                    setCandidateData(null)
                } else {
                    console.log({
                        'Response Status': {
                            'status': (err.response && err.response.message) || err,
                            'data': (err.response && err.response.data) || err.message
                        }
                    })
                    toast.error(err.message, {
                        position: "bottom-center"
                    })
                }
                setError(true)
            } finally {
                setIsLoading(false)
            }
        } else {
            setCandidateData(null)
            setEntrySelected(null)
        }
    }, [userId])

    return { error, isLoading, candidateData, entrySelected, setEntrySelected }
}

export default useFetchCandidate;