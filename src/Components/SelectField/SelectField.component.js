import React from 'react'
import './SelectField.styles.css'
import { Select, Grid } from '@geist-ui/react'

const SelectField = ({ onChange, candidate, entry}) => {

    return (
        <Grid id="selectFieldGrid">
        <Select onChange={onChange} placeholder={entry[0].postSavingDate} >
        {candidate.candidateInfo.map((element) => {
                return (
                <Select.Option key={element._id} value={element.postSavingDate}>
                    {element.postSavingDate}
                </Select.Option>)}
                )
        }
        </Select>
        </Grid>
    )
}

export default SelectField;