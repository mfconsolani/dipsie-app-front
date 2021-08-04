import React from 'react'
import './SearchForm.styles.css';
import { Button } from '../index';
import { Search } from '@geist-ui/react-icons'
import {Input, Spacer, Grid} from '@geist-ui/react'

const SearchForm = ({ onSubmit, label }) => {

    return (
        <form onSubmit={onSubmit}>
            <Grid style={{display: "inline-flex", flexWrap: "wrap", margin: "1em"}}> 
                {/* <Spacer y={.5} /> */}
                <Input label={label} clearable id="idCandidate" required />
                <Spacer x={1}/>
                {/* <Spacer y={.5} /> */}
                <Button icon={<Search/>} type="submit" name="Buscar"/>
            </Grid>
        </form>
    )
}


export default SearchForm;