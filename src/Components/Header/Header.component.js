import React from 'react'
import './Header.styles.css'
import { Grid, User, useMediaQuery, ButtonDropdown, Spacer } from '@geist-ui/react'
import { Button } from '../index';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton.component';
import { useAuth0 } from "@auth0/auth0-react";


const Header = ({ onSearchCandidate, onPostEntry }) => {
    const isXS = useMediaQuery('xs')
    const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const handleLogOut = () =>
        logout({
            returnTo: window.location.origin,
        })
    const handleLogIn = () => loginWithRedirect()

    return (
        <React.Fragment>
            {!isXS
                ? <h2 className="gradient-text">Dipsie</h2>
                : <h3 className="gradient-text">Dipsie</h3>
            }
            <Grid justify="end" style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
                {(!isLoading && !isXS) && <AuthenticationButton />}
                {isXS ?
                <React.Fragment>
                <Spacer x={0.5}/>
                    <ButtonDropdown scale={0.1} auto="true" size="small">
                        <ButtonDropdown.Item main onClick={onSearchCandidate}>Buscar Candidato</ButtonDropdown.Item>
                        <ButtonDropdown.Item onClick={onPostEntry}>Cargar Información</ButtonDropdown.Item>
                        {isAuthenticated ?
                            <ButtonDropdown.Item onClick={handleLogOut}>Log out</ButtonDropdown.Item>
                            : <ButtonDropdown.Item onClick={handleLogIn}>Log in</ButtonDropdown.Item>
                        }
                    </ButtonDropdown>
                </React.Fragment>
                    :
                    <React.Fragment>
                        <Button className="classic" onClick={onSearchCandidate} name="Buscar Candidato" />
                        <Button className="classic" onClick={onPostEntry} name="Cargar información" />
                    </React.Fragment>
                }
                {user && <User src={user.picture} name={!isXS ? user.nickname : ""} />}
            </Grid>
        </React.Fragment>
    )
}

export default Header;