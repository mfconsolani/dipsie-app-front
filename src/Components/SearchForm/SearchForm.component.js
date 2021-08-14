import React from 'react'
import './SearchForm.styles.css';
import { Button } from '../index';
import { Search } from '@geist-ui/react-icons'
import { Input, Grid } from '@geist-ui/react'

const SearchForm = ({ onSubmit, label }) => {

    return (
        <form className="formSearchForm" onSubmit={onSubmit}>
            <Grid style={{ display: "inline-flex", flexWrap: "wrap", gap: "1em" }}>
                {/* <Spacer y={.5} /> */}
                <Input label={label} clearable id="idCandidate" style={{ color: "#7928CA" }} required />
                {/* <Spacer y={.5} /> */}
                <Button icon={<Search color="#7928CA" />} className="reverse" type="submit" name="Buscar" />
            </Grid>
        </form>
    )
}


export default SearchForm;
