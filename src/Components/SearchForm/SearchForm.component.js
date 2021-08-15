import React from 'react'
import './SearchForm.styles.css';
import { Button } from '../index';
import { Input, Grid, useMediaQuery } from '@geist-ui/react'

const SearchForm = ({ onSubmit, label }) => {
    const isXS = useMediaQuery('xs')

    return (
        <form className="formSearchForm" onSubmit={onSubmit}>
            <Grid style={{ display: "inline-flex", flexWrap: "wrap", gap: "1em"}}>
                {/* <Spacer y={.5} /> */}
                <Input label={isXS ? "" : label} clearable id="idCandidate" style={{ color: "#7928CA" }} required />
                {/* <Spacer y={.5} /> */}
                <Button className="all-reverse" type="submit" name="Buscar" />
            </Grid>
        </form>
    )
}


export default SearchForm;
