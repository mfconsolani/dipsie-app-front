import React from 'react'
import './Header.styles.css'
import { Grid, User } from '@geist-ui/react'
import { Button } from '../index';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton.component';
import { useAuth0 } from "@auth0/auth0-react";


const Header = ({ onSearchCandidate, onPostEntry }) => {
    const { isLoading, user } = useAuth0();
    return (
        <React.Fragment>
            <h2 className="gradient-text">Dipsie</h2>
            <Grid justify="end" style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
                {!isLoading && <AuthenticationButton />}
                <Button id="classic" onClick={onSearchCandidate} name="Buscar Candidato" />
                <Button id="classic" onClick={onPostEntry} name="Cargar información" />
                {user && <User src={user.picture} name={user.nickname}/>}
            </Grid>
        </React.Fragment>
    )
}

export default Header;