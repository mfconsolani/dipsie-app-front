import React from 'react'
import './Header.styles.css'
import { Grid, User, useMediaQuery, ButtonDropdown, Spacer} from '@geist-ui/react'
import { Button } from '../index';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton.component';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const Header = ({ onSearchCandidate, onPostEntry }) => {
    const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const userRole = (user && user[`${process.env.REACT_APP_AUTH0_AUDIENCE}/roles`])
        ? user[`${process.env.REACT_APP_AUTH0_AUDIENCE}/roles`]
        : []
    const isXS = useMediaQuery('xs')
    const handleLogOut = () =>
        logout({
            returnTo: window.location.origin,
        })
    const handleLogIn = () => loginWithRedirect()
    let disabled = userRole.length >= 1 ? false : true

    return (
        <React.Fragment>
            {!isLoading &&
                <React.Fragment>
                    <Link to="/">
                    {!isXS
                        ? <h2 className="gradient-text">Dipsie</h2>
                        : <h3 className="gradient-text">Dipsie</h3>
                    }
                    </Link>
                    <Grid 
                    justify="end" 
                    style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
                        {(!isLoading && !isXS) && <AuthenticationButton />}
                        {isXS ?
                            <React.Fragment>
                                <Spacer x={0.5} />
                                <ButtonDropdown 
                                scale={0.1} 
                                auto="true" 
                                size="small">
                                    <ButtonDropdown.Item 
                                    main 
                                    onClick={onSearchCandidate}
                                    disabled={disabled}
                                    >Buscar Candidato</ButtonDropdown.Item>
                                    <ButtonDropdown.Item 
                                    onClick={onPostEntry}
                                    disabled={disabled}
                                    >Cargar Información</ButtonDropdown.Item>
                                    {isAuthenticated 
                                        ? <ButtonDropdown.Item onClick={handleLogOut}>Log out</ButtonDropdown.Item>
                                        : <ButtonDropdown.Item onClick={handleLogIn}>Log in</ButtonDropdown.Item>
                                    }
                                </ButtonDropdown>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Button
                                    className="classic"
                                    onClick={onSearchCandidate}
                                    name="Buscar Candidato"
                                    disabled={disabled}
                                />
                                <Button
                                    className="classic"
                                    onClick={onPostEntry}
                                    name="Cargar información"
                                    disabled={disabled}
                                />
                            </React.Fragment>
                        }
                        <Link to='/profile'>
                        {user && 
                        <User src={user.picture} name={!isXS ? user.nickname : ""} />}
                        </Link>
                    </Grid>
                </React.Fragment>

            }
        </React.Fragment>
    )
}

export default Header;