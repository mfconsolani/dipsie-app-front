import React from 'react'
import './Header.styles.css'
import { Grid } from '@geist-ui/react'
import { Button } from '../index';

const Header = ({ onSearchCandidate, onPostEntry }) => {

    return (
        <React.Fragment>
            <h2 className="gradient-text">Dipsie</h2>
            <Grid justify="end" style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
                <Button onClick={onSearchCandidate} name="Buscar Candidato" />
                <Button onClick={onPostEntry} name="Cargar información" />
            </Grid>
        </React.Fragment>
    )
}

export default Header;